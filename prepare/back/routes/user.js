const express = require('express')
const bcrypt = require('bcrypt')
const {User, Post} = require('../models')
const passport = require('passport')
const {isLoggedIn, isNotLoggedIn} = require('./middlewares')
const router = express.Router()

router.get('/', async (req, res, next) => { // GET /user
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
		console.error('await User.create error : ' , error)
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

module.exports = router