import React, {useCallback} from 'react'
import {Card, Avatar, Button} from 'antd'
import {useDispatch, useSelector} from "react-redux";
import {logoutRequestAction} from '../reducers/user'

// eslint-disable-next-line react/prop-types
const UserProfile = () => {
	const dispatch = useDispatch()
	const {me, isLoggingOut} = useSelector((state) => state.user)
	const onLogOut = useCallback(() => {
		//setIsLoggedIn(false)
		dispatch(logoutRequestAction())
	}, [])

	return (
			<Card
					actions={[
						<div key="twit">
							짹짹
							<br/>0
						</div> /*리액트에서 배열로 jsx 사용할땐 key 붙여줘야함*/,
						<div key="following">
							팔로윙
							<br/>0
						</div>,
						<div key="follower">
							팔로워
							<br/>0
						</div>,
					]}
			>
				<Card.Meta avatar={<Avatar>{me.nickname[0]}</Avatar>} title={me.nickname}/>
				{/*isLoggingOut 이 true 면 버튼이 로딩 버튼으로 바뀜*/}
				<Button onClick={onLogOut} loading={isLoggingOut}>로그아웃</Button>
			</Card>
	)
}
export default UserProfile
