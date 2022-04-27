const passport = require('passport')
const {Strategy: LocalStrategy} = require('passport-local') // Strategy 를 LocalStrategy 로
const bcrypt = require('bcrypt')
const {User} = require('../models')

module.exports = () => {
	passport.use(new LocalStrategy({
		usernameField: 'email', // front LoginForm.js 의 (email, password)
		passwordField: 'password', //req.body.password
	}, async (email, password, done) => { // 로그인 전략 설정, 기존 유저 있는지 체크
		try { // async 요청 할때엔 항상 server error 발생 할 수 있기에 try... catch 사용하자
			const user = await User.findOne({
				where: {email}
			})
			if (!user) {
				// 첫번째자리(서버에러) 두번째자리(성공) 세번째자리(클라이언트 에러)
				return done(null, false, {reason: '존재하지 않는 이메일입니다!'})
			}
			// db 에 저장된 비번과 사용자가 입력한 비번 비교
			const result = await bcrypt.compare(password, user.password)
			if (result) { // 사용자의 암호가 맞다면
				return done(null, user) // 두번째자리(성공)에 사용자 정보
			}
			// 사용자의 암호가 틀리다면
			return done(null, false, {reason: '비밀번호가 틀렸습니다!'})
		} catch (error) {
			console.error('LocalStrategy error : ' , error)
			return done(error)
		}
	}))
}

