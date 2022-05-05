import React from 'react'
import PropTypes from 'prop-types'
import {List, Button, Card} from 'antd'
import {StopOutlined} from '@ant-design/icons'
import {useDispatch} from "react-redux";
import {FOLLOW_REQUEST, UNFOLLOW_REQUEST, REMOVE_FOLLOWER_REQUEST} from "../reducers/user";


// eslint-disable-next-line react/prop-types
const FollowList = ({header, data, onClickMore, loading}) => {
	const dispatch = useDispatch()

	/*반복문 안에서 onClick 이있다면 반복문에 대한 데이터는 온클릭으로 넘김
	고차 함수를 사용해서 아이템에 대한 데이터를 보내고 싶을때 사용*/
	const onCancel = (id) => () => { // follow 취소
		if (header === '팔로잉') {
			dispatch({
				type: UNFOLLOW_REQUEST,
				data: id,
			})
		}
		dispatch({
			type: REMOVE_FOLLOWER_REQUEST,
			data: id,
		})
	}
	return (
			<List
					style={{marginBottom: 20}}
					grind={{gutter: 4, xs: 2, sm: 2, md: 3, lg: 3, xl: 3, xxl: 4}}
					size="small"
					header={<div>{header}</div>}
					loadMore={(
						<div style={{textAlign: 'center', margin: '10px 0'}}>
							{/*더보기 누르면 onClickMore 함수 실행(클릭 시 limit +3씩 늘어남)*/}
							<Button onClick={onClickMore} loading={loading}>더 보기</Button>
						</div>
					)}
					bordered
					dataSource={data}
					renderItem={(item) => (
							<List.Item style={{marginTop: 20}}>
								<Card actions={[<StopOutlined key="stop" onClick={onCancel(item.id)}/>]}>
									<Card.Meta description={item.nickname}/>
								</Card>
							</List.Item>
					)}
			/>
	)
}
FollowList.propTypes = {
	header: PropTypes.string.isRequired,
	data: PropTypes.array.isRequired,
	onClickMore: PropTypes.func.isRequired,
	loading:PropTypes.bool.isRequired,
}

export default FollowList
