const express = require('express')
const postRouter = require('./routes/post')
const userRouter = require('./routes/user')
const cors = require('cors')
const dotenv = require('dotenv')
const passport = require('passport')
const db = require('./models') // db 에 sequelize 넣어놓은 상태
const passportConfig = require('./passport') // 호출 한번해주면됨
const session = require('express-session')
const cookieParser = require('cookie-parser')


dotenv.config()
const app = express() // 호출 한번 해줘야함
// promise
db.sequelize.sync() // server 시작할때 db 연결도 같이한다, sync 할때 테이블을 만듬
		.then(() => {
			console.log('db 연결 성공')
		})
		.catch(console.error)

passportConfig()
// req.body 사용하려고 설정
// front 에서 받은 data 를 req.body 에 해석해서 넣어주는 역할을 함
// use 안에 들어가는 것을 middleware 라고 함
app.use(cors({ // 보안정책
	origin: true, // * 대신 보낸 곳의 주소가 자동으로 들어가 편리하다
	credentials: false, //
}))
// middlewares
app.use(express.json()) // use 는 app 에 express server 에다가 뭔가를 장착한다는 뜻
app.use(express.urlencoded({extended: true}))
// 위 두개의 차이점은 app.use(express.json()) 은 front 에서 json 으로 보냈을때 json 형식을 req.body 에 넣어주고
// app.use(express.urlencoded({extended: true})) 는 form submit 을 했을때 url encoded 방식으로 넘어오는걸 처리해줌

app.use(cookieParser(process.env.COOKIE_SECRET))
app.use(session({
			saveUninitialized: false,
			resave: false,
			secret: process.env.COOKIE_SECRET, // .env 에 password setting
		}
))
app.use(passport.initialize())
app.use(passport.session())

app.get('/', (req, res) => {
	res.send('hello express') // end === send
})
app.get('/', (req, res) => {
	res.send('hello api') // end === send
})
app.get('/posts', (req, res) => { // router 들
	res.json([ // data 는 보통 json 으로 표현,api 들은 json 으로 응답
		{id: 1, content: 'hello01'},
		{id: 2, content: 'hello02'},
		{id: 3, content: 'hello03'},
	])
})
app.use('/post', postRouter) // post 가 prefix 로 붙는다
app.use('/user', userRouter) // user 가 prefix 로 붙는다

// 에러 처리 미들웨어가 내부적으로 존재함
/*app.use((err,req,res,next)=>{ // 기본적으로 처리하지만, 특별히 처리하고싶을 경우 에러 처리 미들웨어를 따로 만들어준다

})*/

app.listen(3065, () => { // localhost:3065
	console.log('서버 실행 중')
})
