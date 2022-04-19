import React, {useEffect} from 'react'
import Head from 'next/head'
import AppLayout from '../component/AppLayout'
import NicknameEditForm from '../component/NicknameEditForm'
import FollowList from '../component/FollowList'
import {useSelector} from "react-redux";
import Router from "next/router";
//import FollowerList from '../component/FollowerList'


const Profile = () => {
	// const followingList = [{nickname: '비타민'}, {nickname: '엠알민'}, {nickname: '올마스터'}]
	// const followerList = [{nickname: '비타민'}, {nickname: '엠알민'}, {nickname: '올마스터'}]
	const { me } = useSelector((state)=> state.user)

	if (!me) {
		Router.push('/');
		return null;
	}
	// useEffect(() => {
	// 	if (!(me && me.id)) { // 프로필 페이지에서 로그아웃했을 경우 main 화면으로
	// 		Router.push('/')
	// 	}
	// }, [me && me.id])
	// if (!me) { // 내가 없으면 못들어가게
	// 	return null;
	// }

	return (
			<>
				<Head>
					<title>내 프로필 | NodeBird</title>
				</Head>
				<AppLayout>
					<NicknameEditForm/>
					<FollowList header="팔로윙 목록" data={me.Followings}/>
					<FollowList header="팔로워 목록" data={me.Followers}/>
				</AppLayout>
			</>
	)
}

export default Profile
