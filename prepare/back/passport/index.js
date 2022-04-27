const passport = require('passport')
const local = require('./local')
const {User} = require('../models')

module.exports = () => { // app.js 에서 실행
	passport.serializeUser((user, done) => { // req.login.user 가 들어옴
		// 첫번째 인자는 서버, 두번째는 성공
		done(null, user.id) // 유저 정보중에 쿠키와 묶어줄 id 를 저장
	})
//아이디로 부터 db 를 통해서 사용자 정보를 복구해냄
	passport.deserializeUser(async (id, done) => {
		try { //router 가 실행되기전에 매번 실행된다
			const user = await User.findOne({where: {id}})
			done(null, user) // req.user
		} catch (error) {
			console.error('passport.deserializeUser error : ' , error)
			done(error)
		}
	})

	local() // local 에 module.exports 가 index.js local()에서 실행
}