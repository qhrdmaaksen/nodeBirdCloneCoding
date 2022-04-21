const express = require('express')

const app = express() // 호출 한번 해줘야함

app.get('/', (req, res) => {
	res.send('hello express') // end === send
})
app.get('/api', (req, res) => {
	res.send('hello api') // end === send
})
app.get('/api/posts', (req, res) => { // router 들
	res.json([ // data 는 보통 json 으로 표현,api 들은 json 으로 응답
		{id: 1, content: 'hello01'},
		{id: 2, content: 'hello02'},
		{id: 3, content: 'hello03'},
	])
})
app.post('/api/post', (req, res) => {
	res.json({id: 1, content: 'hello'})
})
app.delete('/api/post', (req, res) => {
	res.json({id: 1})
})
app.get('/api/posts', (req, res) => {

})
app.get('/api/posts', (req, res) => {

})
app.get('/api/posts', (req, res) => {

})
app.listen(3000, () => { // localhost:3000
	console.log('서버 실행 중')
})
