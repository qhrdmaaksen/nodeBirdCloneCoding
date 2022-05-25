import React, {useCallback, useEffect, useState} from 'react'
import Head from 'next/head'
import {useDispatch, useSelector} from "react-redux";
import Router from "next/router";
import {END} from 'redux-saga'
import axios from 'axios'
import useSWR, {useSWRPages} from 'swr'

import AppLayout from '../components/AppLayout'
import NicknameEditForm from '../components/NicknameEditForm'
import FollowList from '../components/FollowList'
import {LOAD_FOLLOWERS_REQUEST, LOAD_FOLLOWINGS_REQUEST, LOAD_MY_INFO_REQUEST} from '../reducers/user'
import wrapper from "../store/configureStore";
import {backUrl} from "../config/config";
//import FollowerList from '../components/FollowerList'

// fetcher 를 다른걸로 바꾸면 graphql 도 쓸수있다
const fetcher = (url) => axios.get(url, {withCredentials: true}).then((result) => result.data)

const Profile = () => {
	/* front
	const dispatch = useDispatch();
	const followingList = [{nickname: '비타민'}, {nickname: '엠알민'}, {nickname: '올마스터'}] front early
	const followerList = [{nickname: '비타민'}, {nickname: '엠알민'}, {nickname: '올마스터'}]*/
	const {me} = useSelector((state) => state.user)
	const [followersLimit, setFollowersLimit] = useState(3)
	const [followingsLimit, setFollowingsLimit] = useState(3)

	/*useEffect(() => {
		dispatch({
			type: LOAD_FOLLOWERS_REQUEST,
		});
		dispatch({
			type: LOAD_FOLLOWINGS_REQUEST,
		});
	}, []);*/
	//followers 불러오기

	// data, error 가 둘다 있다면 성공했거나, 실패했거나, 둘다 없다면 로딩중
	const {
		data: followersData,
		error: followerError
	} = useSWR(`${backUrl}/user/followers?limit=${followersLimit}`, fetcher) //fetcher 가 url 를 어떻게 가져올지에 대한걸적어줌
	//followings 불러오기
	const {
		data: followingsData,
		error: followingError
	} = useSWR(`${backUrl}/user/followings?limit=${followingsLimit}`, fetcher) //fetcher 가 url 를 어떻게 가져올지에 대한걸적어줌

	useEffect(() => {
		if (!(me && me.id)) { // 프로필 페이지에서 로그아웃했을 경우 main 화면으로
			Router.push('/')
		}
	}, [me && me.id])

	// callback 함수는 최소한 return 위쪽에 적자
	// 버튼을 눌러주면 limit 가 기존 limit 보다 3 씩 늘어난다
	const loadMoreFollowings = useCallback(() => {
		setFollowingsLimit((prev) => prev + 3);
	}, []);

	const loadMoreFollowers = useCallback(() => {
		setFollowersLimit((prev) => prev + 3)
	}, []);


	if (!me) { // 내가 없으면 못들어가게
		return '내 정보 로딩중...';
	}

	if (followerError || followingError) {
		console.error(followerError || followingError)
		return <div>팔로잉/팔로워 로딩 중 에러가 발생합니다.</div>;
	}

	return (
			<>
				<Head>
					<title>내 프로필 | NodeBird</title>
				</Head>
				<AppLayout>
					<NicknameEditForm/>
					{/*swr 에서는 data 도 없고 error 도 없을때가 loading 중*/}
					<FollowList header="팔로잉"
											data={followingsData}
											onClickMore={loadMoreFollowings}
											loading={!followingsData && !followingError}/>
					<FollowList header="팔로워"
											data={followersData}
											onClickMore={loadMoreFollowers}
											loading={!followersData && !followerError}/>
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

