const express = require('express')
const postRouter = require('./routes/post')
const postsRouter = require('./routes/posts')
const userRouter = require('./routes/user')
const cors = require('cors')
const path = require('path')
const dotenv = require('dotenv')
const morgan = require('morgan')
const hpp = require('hpp')
const helmet = require('helmet')
const passport = require('passport')
const hashtagRouter = require('./routes/hashtag')
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
if (process.env.NODE_ENV === 'production') { // 배포모드
	/*배포모드일때 combined 를 사용하면 좀더 로그가 자세히나옴 (접속자의 ip 등 확인가능)*/
	app.use(morgan('combined')) // morgan 라이브러리
	/*개발 모드일땐 hpp, helmet 을 꼭넣어주자 (보안관련)*/
	app.use(hpp())
	app.use(helmet())
} else {
	app.use(morgan('dev')) // morgan 라이브러리
}
app.use(cors({ // 보안정책
							 /*
							 * 대신 보낸 곳의 주소가 자동으로 들어가 편리하다,또는 직접 주소를적어주자,
								access allow control origin, 쿠기가 전달되면서 보안강화해줘야하기에 * 를 사용하면 에러발생	*/
	origin: ['http://localhost:3060', 'http://vitamin777.shop'], //front local, siteName, aws ip (넣지않으면 cors error 발생)
	credentials: true, // true 로 해주면 쿠키전달됨
}))
// middlewares
// use 는 app 에 express server 에다가 뭔가를 장착한다는 뜻
//app.use('/',express.static 의 / 는 localhost3065 를 의미한다, 원한다면 /images 와 같이 수정 가능
app.use('/', express.static(path.join(__dirname, 'uploads'))) // 디렉토리 네임은 현재 back 폴더 안에 upload 를 합쳐준다,
/*여기서 첫번째 express.json은 axios 요청이 올때 axios 두번째 인자의 데이터를 req.body에 넣는역할이고*/
app.use(express.json())  // axios 로 데이터 보낼때
/*두번째 express.urlencoded({extended:true})는 프론트에서 form을 통해 데이터가 날아오면 그 데이터들을 req.body에 넣는다*/
app.use(express.urlencoded({extended: true})) // 일반 폼을 보낼때 urlencoded 로 받음
// 위 두개의 차이점은 app.use(express.json()) 은 front 에서 json 으로 보냈을때 json 형식을 req.body 에 넣어주고
// app.use(express.urlencoded({extended: true})) 는 form submit 을 했을때 url encoded 방식으로 넘어오는걸 처리해줌

app.use(cookieParser(process.env.COOKIE_SECRET))
app.use(session({
			saveUninitialized: false,
			resave: false,
			secret: process.env.COOKIE_SECRET, // .env 에 password setting
			cookie: {
				httpOnly: true, // cookie 는 js 로 접근 못하게
				secure: false, //나중에 https 적용할땐 true 로 변경
				domain: process.env.NODE_ENV === 'production' && '.vitamin777.shop'
			}
		}
))
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
	res.send('hello express') // end === send
})
// API 는 다른 서비스가 내 서비스의 기능을 실행할 수 있게 열어둔 창구
app.use('/posts', postsRouter)
/*app.get('/posts', (req, res) => { // router 들
	res.json([ // data 는 보통 json 으로 표현,api 들은 json 으로 응답
		{id: 1, content: 'hello01'},
		{id: 2, content: 'hello02'},
		{id: 3, content: 'hello03'},
	])
})*/
app.use('/post', postRouter) // post 가 prefix 로 붙는다
app.use('/user', userRouter) // user 가 prefix 로 붙는다
app.use('/hashtag', hashtagRouter)

// 에러 처리 미들웨어가 내부적으로 존재함
/*app.use((err,req,res,next)=>{ // 기본적으로 처리하지만, 특별히 처리하고싶을 경우 에러 처리 미들웨어를 따로 만들어준다

})*/

/*app.listen(3065, () => { // localhost:3065 front*/
app.listen(80, () => { // aws port number
	console.log('서버 실행 중')
})
