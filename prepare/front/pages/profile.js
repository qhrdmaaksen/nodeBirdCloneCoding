import React from 'react'
import Head from 'next/head'
import AppLayout from '../component/AppLayout'
import NicknameEditForm from '../component/NicknameEditForm'
import FollowList from '../component/FollowList'
//import FollowerList from '../component/FollowerList'


const Profile = () => {
	const followingList = [{nickname: '비타민'}, {nickname: '엠알민'}, {nickname: '올마스터'}]
	const followerList = [{nickname: '비타민'}, {nickname: '엠알민'}, {nickname: '올마스터'}]

	return (
			<>
				<Head>
					<title>내 프로필 | NodeBird</title>
				</Head>
				<AppLayout>
					<NicknameEditForm/>
					<FollowList header="팔로윙 목록" data={followingList}/>
					<FollowList header="팔로워 목록" data={followerList}/>
				</AppLayout>
			</>
	)
}

export default Profile
