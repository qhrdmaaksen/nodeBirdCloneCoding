exports.isLoggedIn = (req, res, next) => {
	if (req.isAuthenticated()) { // passport 에서 제공, // true
		next()
	} else {
		res.status(401).send('로그인이 필요합니다!')
	}
}

exports.isNotLoggedIn = (req, res, next) => {
	if (!req.isAuthenticated()) { // passport 에서 제공
		next() // 인자가 아무것도 없으면 다음 미들웨어로 간다
	} else {
		res.status(401).send('로그인을 하지 않은 사용자만 접근 가능합니다!')
	}
}