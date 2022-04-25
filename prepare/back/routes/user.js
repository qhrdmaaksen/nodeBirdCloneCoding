const express = require('express')
const bcrypt = require('bcrypt')
const {User} = require('../models')

const router = express.Router()
// router 를 일치하게 만들어줘야함
// 비동기는 await 를 붙여줘야한다
router.post('/', async (req, res, next) => {//await 을 사용하려면 async 함수로 만들어줘야한다
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
			email: req.body.email, // req.body 는 front 에 saga user 에서 data 로 받은것임
			nickname: req.body.nickname,
			password: hashedPassword, // 암호화 된 비번으로 넣어주자
		})
		res.status(201).send('ok') // 성공은 상태 200 번대 보냄

	} catch (error) {
		console.error('await User.create error : ' + error)
		next(error) // status 500
	}
})

module.exports = router