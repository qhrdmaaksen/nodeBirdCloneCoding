import React, {useEffect} from 'react'
import Head from 'next/head'
import AppLayout from '../component/AppLayout'
import NicknameEditForm from '../component/NicknameEditForm'
import FollowList from '../component/FollowList'
import axios from 'axios'
import {END} from 'redux-saga'
import {useDispatch, useSelector} from "react-redux";
import Router from "next/router";
import {LOAD_FOLLOWERS_REQUEST, LOAD_FOLLOWINGS_REQUEST, LOAD_MY_INFO_REQUEST} from '../reducers/user'
import wrapper from "../store/configureStore";
//import FollowerList from '../component/FollowerList'


const Profile = () => {
	const dispatch = useDispatch()
	// const followingList = [{nickname: '비타민'}, {nickname: '엠알민'}, {nickname: '올마스터'}] front early
	// const followerList = [{nickname: '비타민'}, {nickname: '엠알민'}, {nickname: '올마스터'}]
	const {me} = useSelector((state) => state.user)

	useEffect(() => { // 프로필 페이지 갈때 바로 불러오기
		dispatch({
			type: LOAD_FOLLOWERS_REQUEST,
		})
		dispatch({
			type: LOAD_FOLLOWINGS_REQUEST,
		})
	}, [])

	useEffect(() => {
		if (!(me && me.id)) { // 프로필 페이지에서 로그아웃했을 경우 main 화면으로
			Router.push('/')
		}
	}, [me && me.id])
	if (!me) { // 내가 없으면 못들어가게
		return null;
	}

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

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
	console.log('Profile getServerSideProps Start')
	console.log(context.req.headers)
	const cookie = context.req ? context.req.headers.cookie : '';
	axios.defaults.headers.Cookie = '';
	if (context.req && cookie) {
		axios.defaults.headers.Cookie = cookie;
	}
	context.store.dispatch({
		type: LOAD_MY_INFO_REQUEST,
	})
	context.store.dispatch(END)
	console.log('Profile getServerSideProps END')
	await context.store.sagaTask.toPromise()
})

export default Profile

