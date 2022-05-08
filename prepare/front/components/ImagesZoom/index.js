import React, {useState} from 'react';
import PropTypes from "prop-types"
import Slick from 'react-slick'
import {CloseBtn, Global, Header, ImgWrapper, Indicator, Overlay, SlickWrapper} from "./styled";
import {backUrl} from "../../config/config";


const ImagesZoom = ({images, onClose}) => {
	const [currentSlide, setCurrentSlide] = useState(0)
	return (
			<Overlay>
				<Global/>
				<Header>
					<h1>상세 이미지</h1>
					<CloseBtn onClick={onClose}>X</CloseBtn>
				</Header>
				<SlickWrapper>
					<div>
						<Slick
								initialSlike={0} // 첫번째를 어떤 이미지로 할지
								beforeChange={(slide, newSlide) => setCurrentSlide(newSlide)} // 슬라이드를 넘기면 번호가 저장
								infinite // 무한반복
								arrows={false} // 이미지 양 옆 클릭해서 넘기는 화살표 버튼 없앰
								slidesToShow={1} //한번에 하나씩 보여주며
								slidesToScroll={1} // 한번에 하나씩 넘긴다
						>
							{images.map((v) => (
									<ImgWrapper key={v.src}>
										// front 에서 이미지 전송 시 경로 설정
										{/*<img src={`http://localhost:3065/${v.src}`} alt={v.src}/> front*/}
										<img src={`${backUrl}/${v.src}`} alt={v.src}/>
									</ImgWrapper>
							))}
						</Slick>
						<Indicator>
							<div> {/*세장 중에 몇 번째 것을 보고 있는지 가리키는 스타일드 컴포넌트*/}
								{currentSlide + 1}
								{' '}
								/
								{images.length}
							</div>
						</Indicator>
					</div>
				</SlickWrapper>
			</Overlay>
	)
}
ImagesZoom.propTypes = {
	images: PropTypes.arrayOf(PropTypes.object).isRequired,
	onClose: PropTypes.func.isRequired
}
export default ImagesZoom

