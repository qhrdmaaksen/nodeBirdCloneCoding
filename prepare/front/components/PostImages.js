import React, {useCallback, useState} from 'react'
import PropTypes from 'prop-types'
import {PlusOutlined} from "@ant-design/icons";
import ImagesZoom from "./ImagesZoom";
import {backUrl} from "../config/config";

const PostImages = ({images}) => {
	const [showImagesZoom, setShowImagesZoom] = useState(false)

	const onZoom = useCallback(() => {
		setShowImagesZoom(true)
	}, [])
	const onClose = useCallback(() => {
		setShowImagesZoom(false)
	}, [])

	if (images.length === 1) { // 화면의 100 % 차지
		return (
				<>
					{/* front 에서 이미지 전송 시 경로 설정*/}
					{/*<img role="presentation" src={`http://localhost:3065/${images[0].src}`} alt={images[0].src} onClick={onZoom}/> front*/}
					<img role="presentation" src={`${backUrl}/${images[0].src}`} alt={images[0].src} onClick={onZoom}/>
					{showImagesZoom && <ImagesZoom images={images} onClose={onClose}/>}
				</>
		)
	}
	if (images.length === 2) { // 화면의 50% 차지
		return (
				<>
					{/* front 에서 이미지 전송 시 경로 설정*/}
					<img role="presentation" style={{width: '50%', display: 'inline-block'}} src={`${backUrl}/${images[0].src}`}
							 alt={images[0].src} onClick={onZoom}/>
					<img role="presentation" style={{width: '50%', display: 'inline-block'}} src={`${backUrl}/${images[1].src}`}
							 alt={images[1].src} onClick={onZoom}/>
					{showImagesZoom && <ImagesZoom images={images} onClose={onClose}/>}
				</>
		)
	}
	return ( // 이미지가 3 개 이상일때엔 첫 번째 이미지는 보여주며 그 옆에 더 보기 버튼이 들어가서 확대해서 넘겨봐야함
			<>
				<div>
					<img role="presentation" style={{width: '50%'}} src={`${backUrl}/${images[0].src}`} alt={images[0].src} onClick={onZoom}/>
					<div
							role="presentation"
							style={{display: 'inline-block', width: '50%', textAlign: 'center', verticalAlign: 'middle'}}
							onClick={onZoom}
					>
						<PlusOutlined/>
						<br/>
						{images.length - 1} 개의 사진 더 보기
					</div>
				</div>
				{showImagesZoom && <ImagesZoom images={images} onClose={onClose}/>}
			</>
	)
}
PostImages.propTypes = {
	images: PropTypes.arrayOf(PropTypes.object).isRequired,
}
export default PostImages
