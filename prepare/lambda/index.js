const AWS = require('aws-sdk')
const sharp = require('sharp')


const s3 = new AWS.S3()

// handler 는 그냥이름?, 람다는 한가지 기능을하는 함수
// lamda 실행 : s3 에 image upload (multer 로) 그때 lambda 도 같이 실행되게할것
exports.handler = async (event, context, callback) => {
	const Bucket = event.Records[0].s3.bucket.name // vitamin777-s3
	// Key : file name
	const Key = decodeURIComponent(event.Records[0].s3.object.key) // original/123123123_abc.png, decodeURIComponent 한글 uri 해결
	console.log('lambda : Bucket, Key :::::', Bucket, Key)
	const filename = Key.split('/')[Key.split('/').length - 1] // file name 추출
	const ext = Key.split('.')[Key.split('.').length - 1].toLowerCase // .png 등 확장자 떼기,toLoserCase 로 대문자 확장자 해결
	const requiredFormat = ext === 'jpg' ? 'jpeg' : ext // jpg 인 경우 jpeg 로 바꿔줘야함
	console.log('lambda : filename :::::', filename, ', ext ::::: ', ext)
	try {
		const s3Object = await s3.getObject({Bucket, Key}).promise() // aws 에서 Object 허용해줬던걸 기억
		console.log('lambda : original', s3Object.Body.length) //Body 에 image 들이 저장되어있음(0101등으로된 데이터들)
		const resizedImage = await sharp(s3Object.Body)
				.resize(400, 400, { fit: 'inside'}) // image size, fit: 이미지를 늘리지않으며 가득차게  (sharp 공식문서 imageResize)
				.toFormat(requiredFormat)
				.toBuffer()
		await s3.putObject({ // up load
			Bucket,
			Key: `thumb/${filename}`,
			Body: resizedImage,
		}).promise()
		console.log('lambda : put', resizedImage.length)
		return callback(null, `thumb/${filename}`) // 람다가 끝날땐 콜백을 써서 끝내주면됨 passport 에 done 과 비슷함
	} catch (error) {
		console.error(error)
		return callback(error)
	}
}
