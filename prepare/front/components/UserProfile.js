import React, {useCallback} from 'react'
import {Card, Avatar, Button} from 'antd'
import {useDispatch, useSelector} from "react-redux";
import {logoutRequestAction} from '../reducers/user'
import Link from 'next/link'

// eslint-disable-next-line react/prop-types
const UserProfile = () => {
	const dispatch = useDispatch()
	const {me, logOutLoading} = useSelector((state) => state.user)
	const onLogOut = useCallback(() => {
		//setIsLoggedIn(false)
		dispatch(logoutRequestAction())
	}, [])

	return (
			<Card
					actions={[ /*리액트에서 배열로 jsx 사용할땐 key 붙여줘야함*/
						<div key="twit">
							<Link href={`/user/${me.id}`}>
								<a>
									짹짹<br/>
									{me.Posts.length}
								</a>
							</Link>
						</div>,
						<div key="following">
							<Link href="/profile">
								<a>
									팔로윙<br/>
									{me.Followings.length}
								</a>
							</Link>
						</div>,
						<div key="follower">
							<Link href="/profile">
								<a>
									팔로워<br/>
									{me.Followers.length}
								</a>
							</Link>
						</div>,
					]}
			>
				<Card.Meta
						avatar={( // 내 아바타 클릭 시
								<Link href={`/user/${me.id}`} prefetch={false}>
									<a>
										<Avatar>
											{me.nickname[0]}
										</Avatar>
									</a>
								</Link>
						)}
						title={me.nickname}/>
				{/*isLoggingOut 이 true 면 버튼이 로딩 버튼으로 바뀜*/}
				<Button onClick={onLogOut} loading={logOutLoading}>로그아웃</Button>
			</Card>
	)
}
export default UserProfile
