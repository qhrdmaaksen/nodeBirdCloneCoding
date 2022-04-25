const express = require('express')
const postRouter = require('./routes/post')
const db = require('./models') // db 에 sequelize 넣어놓은 상태
const app = express() // 호출 한번 해줘야함

// promise
db.sequelize.sync() // server 시작할때 db 연결도 같이한다
		.then(()=> {
			console.log('db 연결 성공')
		})
		.catch(console.error)

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
app.listen(3000, () => { // localhost:3000
	console.log('서버 실행 중')
})
