import React from 'react';
import {useSelector} from 'react-redux';
import Head from 'next/head';
import {END} from 'redux-saga';

import {Avatar, Card} from 'antd';
import AppLayout from '../component/AppLayout';
import wrapper from '../store/configureStore';
import {LOAD_USER_REQUEST} from '../reducers/user';

const Profile = () => {
	const {userInfo} = useSelector((state) => state.user);

	return (
			<AppLayout>
				<Head>
					<title>vitamin777 | NodeBird</title>
				</Head>
				{userInfo // SSR 이 되어야만 정보가 차있는다
						? (
								<Card
										actions={[
											<div key="twit">
												짹짹
												<br/>
												{userInfo.Posts}
											</div>,
											<div key="following">
												팔로잉
												<br/>
												{userInfo.Followings}
											</div>,
											<div key="follower">
												팔로워
												<br/>
												{userInfo.Followers}
											</div>,
										]}
								>
									<Card.Meta
											avatar={<Avatar>{userInfo.nickname[0]}</Avatar>}
											title={userInfo.nickname}
											description="노드버드 매니아"
									/>
								</Card>
						)
						: null}
			</AppLayout>
	);
};
// getStaticProps 도 똑같이 ssr 이 된다
export const getStaticProps = wrapper.getStaticProps(async (context) => {
	console.log('getStaticProps');
	context.store.dispatch({
		type: LOAD_USER_REQUEST, // 특정한 사용자에대한 정보 가져옴
		data: 1,
	});
	context.store.dispatch(END);
	await context.store.sagaTask.toPromise();
});

export default Profile;