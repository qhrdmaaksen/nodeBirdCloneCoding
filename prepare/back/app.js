const http = require('http')
const server = http.createServer((req, res)=>{
	console.log("req.url : " + req.url + ", req.method : " + req.method)
	if (req.method === 'GET') {
		if (req.url === '/api/posts') {

		}
	} else if (req.method === 'POST') {
		if (req.url === '/api/post') {

		}
	} else if (req.method === 'DELETE') {
		if (req.url === '/api/post') {

		}
	}
	res.write('<h1>Hello Node!01</h1>') // html 을 넣을 수도있다.
	res.write('Hello Node!02')
	res.write('Hello Node!03')
	res.write('Hello Node!04')
	res.end('hello node05') // end 는 마지막에만 사용
})
server.listen(3000, ()=> { // localhost:3000
	console.log('서버 실행 중')
})
