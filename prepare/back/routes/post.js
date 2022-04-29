const express = require('express');
const {Post, Image, Comment, User, Hashtag} = require('../models')
const {isLoggedIn} = require('./middlewares')
const multer = require('multer')
const path = require('path')
const fs = require('fs') // 파일 시스템을 조작할 수 있는 fs 모듈

const router = express.Router()

try {
	fs.accessSync('uploads')
} catch (err) {
	console.log('uploads folder 가 없으므로 생성합니다')
	fs.mkdirSync('uploads')
}

const upload = multer({
	// 저장소, 컴퓨터의 하드디스크에 저장, 나중에는 클라우드에 저장할 것임
	storage: multer.diskStorage({
		destination(req, file, done) {
			done(null, 'uploads') // 폴더 명
		},
		filename(req, file, done) { // 비타민.png
			const ext = path.extname(file.originalname); // 파일 명임, 확장자 추출(.png)
			const basename = path.basename(file.originalname, ext); // path 를 통해 파일의 확장자를 꺼내올수있따, 비타민
			done(null, basename + '_' + new Date().getTime() + ext); // 이름 뒤에 시간 초와 확장자 붙여주기, 비타민2022053030203.png
		},
	}),
	limits: {fileSize: 20 * 1024 * 1024}, // 파일 용량 설정 20mb 동영상이라면 좀더 올려줘야한다 100,200mb 정도
})

/*router.post('/', (req, res) => { // POST  /post
	res.json({id: 1, content: 'hello'})
})*/
// data content 가 req.body.content 로 백엔드에 변환
// 앞에 post 는 app.use post router 가 생략되어있다
router.post('/', isLoggedIn, upload.none(), async (req, res, next) => { // POST  /post
	try {
		const hashtags = req.body.content.match(/#[^\s#]+/g)
		const post = await Post.create({ // create 를 하면 post 에 게시물이 담김
			content: req.body.content,
			UserId: req.user.id, // 게시글을 누가썼는지
		})
		if (hashtags) {
			// slice(1) 은 해쉬태그(#)를 떼어내기위해 사용, toLowerCase 는 소문자로 만드는것(대소문자구분없이 db 에 저장하기 위해)
			// 여러 가정을 생각해야함,
			const result = await Promise.all(hashtags.map((tag) => Hashtag.findOrCreate({
				where: {name: tag.slice(1).toLowerCase()},
			}))); // [[노드, true], [리액트, true]] <-와 같이 db 에 등록 됨
			await post.addHashtags(result.map((v)=> v[0]))
		}
		if (req.body.image) { // image path 가 담겨있음, 이미지가 배열인지 아닌지 체크
			if (Array.isArray(req.body.image)) { // 이미지를 여러 개 올리면 image: [비타민.png, 올마.png]
				// 배열을 맵으로 시퀄라이즈에 create 해서 배열에 담긴 여러개가 저장이됨
				// file 은 uploads 폴더에 올라가고, db 에는 file addr 만 가지고있따
				// 파일은 캐싱을 할 수 있는데, db 에 넣으면 캐싱도 못하고,
				// 파일은 보통 s3 클라우드에 올려서 cdn 캐싱을 적용하고 db 에는 addr 만 가지고있따
				const images = await Promise.all(req.body.image.map((image) => Image.create({src: image})))
				await post.addImages(images) // post create 한게 이미지들이 알아서 추가가됨
			} else { // 이미지를 하나만 올리면 image: 비타민.png
				const image = await Image.create({src: req.body.image})
				await post.addImages(image)
			}
		}
		const fullPost = await Post.findOne({ // 게시글의 모든 정보
			where: {id: post.id},
			include: [{
				model: Image, // 게시글 이미지
			}, {
				model: Comment, // 게시글에 달린 댓글
				include: [{
					model: User, // 댓글 작성자
					attributes: ['id', 'nickname'],
				}],
			}, {
				model: User, // 게시글 작성자
				attributes: ['id', 'nickname'],
			}, {
				model: User, // 좋아요 누른 사람
				as: 'Likers',
				attributes: ['id'],
			}]
		})
		res.status(201).json(fullPost) // front 에 응답
	} catch (error) {
		console.error(error)
		next(error)
	}
})

// 이미지를 여러장 올리려고 array 사용, 한장만 올리게하려면 single 사용, text 만 사용은 none() 사용
router.post('/images', isLoggedIn, upload.array('image'), async (req, res, next) => {
	console.log('back routes/post : 이미지에대한 정보::: ', req.files)
	res.json(req.files.map((v) => v.filename)) // 어디로 업로드되었는지 프론트로 응답
})

// router.post('/:postId/comment', 는 동적으로 게시글이 바뀌기때문에 /:postId/comment 로 설정
router.post('/:postId/comment', isLoggedIn, async (req, res, next) => { // POST  /post/1/comment
	try {
		// 존재하지않는 게시글에 댓글을 달 수도있기에 검증 로직
		const post = await Post.findOne({
			where: {id: req.params.postId},
		})
		if (!post) {
			return res.status(403).send('존재하지않는 게시글입니다.')
		}
		const comment = await Comment.create({
			content: req.body.content, // 게시글 내용
			// postId 는 string 으로 들어오기때문에 parseInt 로 캐스팅
			PostId: parseInt(req.params.postId, 10), // 동적으로 바뀌는 postId 를 설정
			UserId: req.user.id, // 게시글을 누가썼는지
		})
		const fullComment = await Comment.findOne({
			where: {id: comment.id}, // 댓글 작성자
			include: [{
				model: User,
				attributes: ['id', 'nickname'], // 비밀번호 빼고 주기
			}],
		})
		res.status(201).json(fullComment);// front 에 응답
	} catch (error) {
		console.error(error)
		next(error)
	}
})

router.patch('/:postId/like', isLoggedIn, async (req, res, next) => { // PATCH /post/1/like
	try {
		const post = await Post.findOne({
			where: {id: req.params.postId}
		})
		if (!post) {
			return res.status(403).send('게시글이 존재하지 않습니다!')
		}
		await post.addLikers(req.user.id)
		res.json({PostId: post.id, UserId: req.user.id})
	} catch (error) {
		console.error(error)
		next(error)
	}
})

router.delete('/:postId/like', isLoggedIn, async (req, res, next) => { // DELETE /post/1/like
	try {
		const post = await Post.findOne({
			where: {id: req.params.postId}
		})
		if (!post) {
			return res.status(403).send('게시글이 존재하지 않습니다!')
		}
		await post.removeLikers(req.user.id)
		res.json({PostId: post.id, UserId: req.user.id})
	} catch (error) {
		console.error(error)
		next(error)
	}
})

router.delete('/:postId', isLoggedIn, async (req, res, next) => { // DELETE /post/10
	try {
		await Post.destroy({
			where: {
				id: req.params.postId, // 게시글 아이디가
				UserId: req.user.id,  // 내가 쓴 게시글 아이디여야한다
			},
		});
		res.status(200).json({PostId: parseInt(req.params.postId, 10)});
	} catch (error) {
		console.error(error);
		next(error);
	}
})
module.exports = router;