const express = require('express');
const {Post, Image, Comment, User} = require('../models')
const {isLoggedIn} = require('./middlewares')
const router = express.Router()

router.post('/', (req, res) => { // POST  /post
	res.json({id: 1, content: 'hello'})
})
// data content 가 req.body.content 로 백엔드에 변환
// 앞에 post 는 app.use post router 가 생략되어있다
router.post('/', isLoggedIn,async (req, res, next) => { // POST  /post/1/comment
	try {
		const post = await Post.create({ // create 를 하면 post 에 게시물이 담김
			content: req.body.content,
			UserId: req.user.id, // 게시글을 누가썼는지
		})
		res.status(201).json(post) // front 에 응답
	} catch (error) {
		console.error(error)
		next(error)
	}
})
// router.post('/:postId/comment', 는 동적으로 게시글이 바뀌기때문에 /:postId/comment 로 설정
router.post('/:postId/comment', isLoggedIn,async (req, res, next) => { // POST  /post/1/comment
	try {
		// 존재하지않는 게시글에 댓글을 달 수도있기에 검증 로직
		const post = await Post.findOne({
			where: {id:req.params.postId}
		})
		if (!post){
			return res.status(403).send('존재하지않는 게시글입니다.')
		}
		const comment = await Comment.create({
			content: req.body.content, // 게시글 내용
			PostId: req.params.postId, // 동적으로 바뀌는 postId 를 설정
			UserId: req.user.id, // 게시글을 누가썼는지
		})
		const fullPost = await Post.findOne({ // 게시글의 모든 정보
			where: {id:post.id},
			include:[{
				model: Image, // 게시글에 달린 이미지
			}, {
				model: Comment, // 게시글에 달린 댓글
			}, {
				model: User, // 게시글 작성자
			}]
		})
		res.status(201).json(comment) // front 에 응답
	} catch (error) {
		console.error(error)
		next(error)
	}
})
router.delete('/', (req, res) => { // DELETE /post
	res.json({id: 1})
})
module.exports = router;