const express = require('express')
const bcrypt = require('bcrypt')
const {User, Post, Comment, Image} = require('../models')
const passport = require('passport')
const {isLoggedIn, isNotLoggedIn} = require('./middlewares')
const {Op} = require("sequelize");
const router = express.Router()

router.get('/', async (req, res, next) => { // GET /user
	console.log('back req.headers ::: ', req.headers)
	try { // 사용자 불러오기
		if (req.user) { // 사용자가 있다면
			const fullUserWithoutPassword = await User.findOne({ // 모든 정보를 다 가지고있는 password 제외
				where: {id: req.user.id},
				//attributes: ['id', 'nickname', 'email'], // 내가 원하는 정보만 가져올수있다
				attributes: {
					exclude: ['password'], // 비밀번호 정보는 들어오지 못하게한다
				},
				include: [{ // models 의 user 에 내가쓴 게시글 팔로우 팔로윙 을 가져옴
					model: Post,
					attributes: ['id'],
				}, {
					model: User, // as 를 사용해줬다면 똑같이 as 작성해주면됨
					as: 'Followings',
					attributes: ['id'],
				}, {
					model: User,
					as: 'Followers',
					attributes: ['id'],
				}]
			})
			res.status(200).json(fullUserWithoutPassword)
		} else {
			res.status(200).json(null)
		}
	} catch (error) {
		console.error(error)
		next(error)
	}
})
// 특정 사용자 정보 가져오기
router.get('/:userId', async (req, res, next) => { // GET /user/1
	console.log('back req.headers ::: ', req.headers)
	try { // 사용자 불러오기
		const fullUserWithoutPassword = await User.findOne({ // 모든 정보를 다 가지고있는 password 제외
			where: {id: req.params.userId},
			//attributes: ['id', 'nickname', 'email'], // 내가 원하는 정보만 가져올수있다
			attributes: {
				exclude: ['password'], // 비밀번호 정보는 들어오지 못하게한다
			},
			include: [{ // models 의 user 에 내가쓴 게시글 팔로우 팔로윙 을 가져옴
				model: Post,
				attributes: ['id'],
			}, {
				model: User, // as 를 사용해줬다면 똑같이 as 작성해주면됨
				as: 'Followings',
				attributes: ['id'],
			}, {
				model: User,
				as: 'Followers',
				attributes: ['id'],
			}]
		})
		if (fullUserWithoutPassword) {
			const data = fullUserWithoutPassword.toJSON() // sequel 에서 가져온 data 는 우리가 쓸수있는 data 로 바꿈
			data.Posts = data.Posts.length // 개인 정보 침해 예방
			data.Followers = data.Followers.length
			data.Followings = data.Followings.length
			res.status(200).json(data)
		} else {
			res.status(404).json('존재하지않는 사용자입니다.')
		}
	} catch (error) {
		console.error(error)
		next(error)
	}
})

router.get('/:userId/posts', async (req, res, next) => { // GET /user/1/posts
	try {// 여러개 가져올때 사용(findAll)
		const where = {UserId: req.params.userId};
		// lstId 받기
		if (parseInt(req.query.lastId, 10)) { // 초기 로딩이 아닐때
			where.id = {[Op.lt]: parseInt(req.query.lastId, 10)} // id 가 lastId 보다 작은([Op.lt]:) < 의미
		}
		const posts = await Post.findAll({
			//where: {id: lastId}, // lastId 는 고정되어있기때문에 사용
			// offset: 0, 1번 게시글부터 10번 게시글까지, offset 10이면 11번부터 20번까지
			where,
			limit: 10, // 10 개 가져와라, 10개 가져온 후 또 10개 10개 10개 ...
			// 2 차원 배열,  DESC 는 최신 게시글 부터 가져옴 오래된순은 ASC
			order: [
				['createdAt', 'DESC'], // 게시글 생성일부터 내림차순 정렬
				[Comment, 'createdAt', 'DESC'], // 댓글들을 내림 차순 정렬
			],
			include: [{
				model: User, // 게시글 작성자
				attributes: ['id', 'nickname'],
			}, {
				model: Image,
			}, {
				model: Comment, // 댓글
				include: [{
					model: User, // 댓글의 작성자
					attributes: ['id', 'nickname'],
					order: [['createdAt', 'DESC']],
				}],
			}, {
				model: User, // 좋아요 누른 사람
				as: 'Likers',
				attributes: ['id'],
			}, {
				model: Post,
				as: 'Retweet',
				include: [{
					model: User,
					attributes: ['id', 'nickname'],
				}, {
					model: Image,
				}]
			}],
		})
		console.log(posts)
		res.status(200).json(posts)
	} catch (error) {
		console.error(error)
		next(error)
	}
})

/*router.post('/login', (req, res, next) => { // POST /user/login
})*/
// 전략 실행 // POST /user/login // 미들웨어 확장
router.post('/login', isNotLoggedIn, (req, res, next) => {
	passport.authenticate('local', (err, user, info) => {
		if (err) {
			console.error('passport.authenticate error : ' + err)
			return next(err) // 미들웨어 확장으로 next 를 사용 할 수 있게되었따
		}
		if (info) { // 클라이언트 에러
			return res.status(401).send(info.reason) // 401 은 허가되지 않음
		}
		return req.login(user, async (loginErr) => { // passport login err
			if (loginErr) {
				console.error('passport login error : ' + loginErr)
				return next(loginErr)
			}
			const fullUserWithoutPassword = await User.findOne({ // 모든 정보를 다 가지고있는 password 제외
				where: {id: user.id},
				//attributes: ['id', 'nickname', 'email'], // 내가 원하는 정보만 가져올수있다
				attributes: {
					exclude: ['password'], // 비밀번호 정보는 들어오지 못하게한다
				},
				include: [{ // models 의 user 에 내가쓴 게시글 팔로우 팔로윙 을 가져옴
					model: Post,
					attributes: ['id'],
				}, {
					model: User, // as 를 사용해줬다면 똑같이 as 작성해주면됨
					as: 'Followings',
					attributes: ['id'],
				}, {
					model: User,
					as: 'Followers',
					attributes: ['id'],
				}]
			})
			return res.status(200).json(fullUserWithoutPassword) // 사용자 정보를 front 로 넘겨줌
		})
	})(req, res, next)
})
// router 를 일치하게 만들어줘야함
// 비동기는 await 를 붙여줘야한다
router.post('/', isNotLoggedIn, async (req, res, next) => {//await 을 사용하려면 async 함수로 만들어줘야한다
	try { //에러가 발생하면 express 가 알아서 브라우저로 이런 에러가 났다고 알려줌
		// db 에 중복된 email 이있는지 있다면 exUser 에 넣어주기
		const exUser = await User.findOne({ // db 에서 하나 찾아주는 것
			where: {
				email: req.body.email,
			}
		})
		if (exUser) {
			// 실패 상태는 403 을 보냄
			return res.status(403).send('이미 사용중인 아이디입니다')
		}
		const hashedPassword = await bcrypt.hash(req.body.password, 11) // 11 은 해쉬화 하는것, 숫자가 높을 수록 보안성 높아지며 단점은 시간이 오래걸림
		/* POST/user/ === front 의
			axios.post('http://localhost:3065/user') 와 같다 */
		// require 로 구조 분해했기에 db.User.create 와 같다
		await User.create({ // User.create 가 원래 비동기 함수인데 await 을 사용해서 res.send('ok')가 실행 됨
			// req.body 는 front 에 saga user 에서 data 로 받은것임
			email: req.body.email, // data.email 이 req.body.email 로 변경
			nickname: req.body.nickname,
			password: hashedPassword, // 암호화 된 비번으로 넣어주자
		})
		// 3060 에서 보낸 요청은 허용하겠다 라는 의미
		//res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3060')
		// 성공은 상태 200 번대 보냄
		// 내부적으로 res.setHeader('Cookie', 'cxlhy') 의 cookie 를 back 에서 browser 로 보내줌 session 과도 알아서 연결해줌
		res.status(201).send('login ok')

	} catch (error) {
		console.error('await User.create error : ', error)
		next(error) // status 500
	}
})
router.post('/logout', isLoggedIn, (req, res) => {
	console.log('logout user : ' + req.user)
	console.log('login check : ', req.isUnauthenticated())
	req.logout()
	req.session.destroy() // session 에 저장된 쿠키와 내 아이디 없앰
	res.send('logout ok')
})

router.patch('/nickname', isLoggedIn, async (req, res, next) => {
	try {
		await User.update({
			nickname: req.body.nickname, // 프론트에서 제공한 닉네임으로, 닉네임을 수정
		}, {
			where: {id: req.user.id}, // 내 아이디에 닉네임을 프론트에서 받은 닉네임으로 수정
		})
		res.status(200).json({nickname: req.body.nickname})
	} catch (error) {
		console.error(error)
		next(error)
	}
})

router.patch('/:userId/follow', isLoggedIn, async (req, res, next) => { // PATCH /user/1/follow
	try {
		const user = await User.findOne({where: {id: req.params.userId}}) // user 가 있는지 확인
		if (!user) {
			res.status(403).send(':::없는 사람을 팔로우 하려고 하십니다')
		}
		await user.addFollowers(req.user.id)
		res.status(200).json({UserId: parseInt(req.params.userId, 10)}) // 상대방 아이디
	} catch (error) {
		console.error(error)
		next(error)
	}
})

router.delete('/:userId/follow', isLoggedIn, async (req, res, next) => { // DELETE /user/follow
	try {
		const user = await User.findOne({where: {id: req.params.userId}}) // user 가 있는지 확인
		if (!user) {
			res.status(403).send(':::없는 사람을 언팔로우 하려고 하십니다')
		}
		await user.removeFollowers(req.user.id) // 그 사람있는지 검사해서 그 사람의 팔로워(나를)제거
		res.status(200).json({UserId: parseInt(req.params.userId, 10)}) // 상대방 아이디
	} catch (error) {
		console.error(error)
		next(error)
	}
})

router.delete('/follower/:userId', isLoggedIn, async (req, res, next) => { // DELETE /user/follower/2
	try {
		const user = await User.findOne({where: {id: req.params.userId}}) // 대상을 찾고
		if (!user) {
			res.status(403).send(':::없는 사람을 차단하려고 하십니다')
		}
		await user.removeFollowings(req.user.id) // 내 아이디에서 유저 삭제
		res.status(200).json({UserId: parseInt(req.params.userId, 10)}) // 상대방 아이디
	} catch (error) {
		console.error(error)
		next(error)
	}
})

router.get('/followers', isLoggedIn, async (req, res, next) => { // GET /user/followers
	try {
		const user = await User.findOne({where: {id: req.user.id}}) // 나를 찾는다
		if (!user) {
			res.status(403).send(':::없는 사람을 찾으려고 하십니다')
		}
		const followers = await user.getFollowers() // 내 팔로워즈 겟 팔로워즈
		res.status(200).json(followers) // 팔로워즈 응답
	} catch (error) {
		console.error(error)
		next(error)
	}
})

router.get('/followings', isLoggedIn, async (req, res, next) => { // GET /user/followings
	try {
		const user = await User.findOne({where: {id: req.user.id}}) // 나를 찾는다
		if (!user) {
			res.status(403).send(':::없는 사람을 찾으려고 하십니다')
		}
		const followings = await user.getFollowings() // 내 팔로윙즈 겟 팔로윙즈
		res.status(200).json(followings) // 팔로윙즈 응답
	} catch (error) {
		console.error(error)
		next(error)
	}
})


module.exports = router