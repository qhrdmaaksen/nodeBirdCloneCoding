import {Form, Input, Button} from 'antd'
import React, {useCallback, useEffect, useRef, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {addPost, UPLOAD_IMAGES_REQUEST, REMOVE_IMAGE, ADD_POST_REQUEST} from '../reducers/post'
import useInput from "../hooks/useInput";
import {backUrl} from "../config/config";

const PostForm = () => {
	const {imagePaths, addPostDone} = useSelector((state) => state.post)
	const dispatch = useDispatch()
	const [text, onChangeText, setText] = useInput('')

	useEffect(() => {
		if (addPostDone) {
			setText('')
		}
	}, [addPostDone])

	const onSubmit = useCallback(() => {
		if (!text || !text.trim()) { // 게시글이 없다면 게시글 작성 alert
			return alert('게시글을 작성하세요.')
		}
		const formData = new FormData();
		imagePaths.forEach((p)=>{
			formData.append('image', p) // req.body.content
		})
		formData.append('content', text)
		return dispatch({
			type: ADD_POST_REQUEST,
			data: formData,
		})
	}, [text, imagePaths])

	const imageInput = useRef()
	const onClickImageUpload = useCallback(() => {
		imageInput.current.click();
	}, [imageInput.current])

	const onChangeImages = useCallback(
			(e) => {
				console.log('images info :: ', e.target.files) // 이미지에 대한 정보가 담겨있음
				const imageFormData = new FormData(); // form data 를 multipart 형식으로 서버로 보냄
				[].forEach.call(e.target.files, (f) => { // 배열에 forEach 를 빌려 쓰는 것
					imageFormData.append('image', f) // image 키랑 f 값
				})
				dispatch({
					type: UPLOAD_IMAGES_REQUEST,
					data: imageFormData,
				})
			},
			[],
	);

	const onRemoveImage = useCallback((index)=>()=>{
		dispatch({
			type: REMOVE_IMAGE,
			data: index,
		})
	}, [])

	return (
			// post Form
			<Form style={{margin: '10px 0 20px'}} encType="multipart/form-data" onFinish={onSubmit}>
				<Input.TextArea value={text} onChange={onChangeText} maxLength={140} placeholder="어떤 신기한 일이 있었나요?"/>
				<div>
					<input type="file" name="image" multiple hidden ref={imageInput}
								 onChange={onChangeImages}/>
					<Button onClick={onClickImageUpload}>이미지 업로드</Button>
					<Button type="primary" style={{float: 'right'}} htmlType="submit">
						짹짹
					</Button>
				</div>
				<div>
					{imagePaths.map((v, i) => {
						return (
								// 이미지 등록을 했을 시, 이미지 경로가 저장되며, 반복문으로 표시해줌
								<div key={v} style={{display: 'inline-block'}}>
									{/*<img src={`http://localhost:3065/${v}`} style={{width: '200px'}} alt={v}/> front*/}
									{/*<img src={`${backUrl}/${v}`} style={{width: '200px'}} alt={v}/> s3 를 사용하기에 더이상 backUrl 필요없음*/}
									{/*원본 보기 v.replace(/\/thumb\//, '/original/'*/}
									<img src={v.replace(/\/thumb\//, '/original/')} style={{width: '200px'}} alt={v}/> {/*이미지 라우터에 로케이션의 주소가 바로 전달됨*/}
									<div>
										<Button onClick={onRemoveImage(i)}>제거</Button>
									</div>
								</div>
						)
					})}
				</div>
			</Form>
	)
}

export default PostForm
