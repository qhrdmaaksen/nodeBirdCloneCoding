import {all, call, fork, put, takeLatest} from "redux-saga/effects";
import axios from "axios";
import {
	CHANGE_NICKNAME_FAILURE,
	CHANGE_NICKNAME_REQUEST,
	CHANGE_NICKNAME_SUCCESS,
	FOLLOW_FAILURE,
	FOLLOW_REQUEST,
	FOLLOW_SUCCESS, LOAD_FOLLOWERS_FAILURE, LOAD_FOLLOWERS_REQUEST,
	LOAD_FOLLOWERS_SUCCESS, LOAD_FOLLOWINGS_FAILURE, LOAD_FOLLOWINGS_REQUEST, LOAD_FOLLOWINGS_SUCCESS,
	LOAD_MY_INFO_FAILURE,
	LOAD_MY_INFO_REQUEST,
	LOAD_MY_INFO_SUCCESS, LOAD_USER_FAILURE, LOAD_USER_REQUEST, LOAD_USER_SUCCESS,
	LOG_IN_FAILURE,
	LOG_IN_REQUEST,
	LOG_IN_SUCCESS,
	LOG_OUT_FAILURE,
	LOG_OUT_REQUEST,
	LOG_OUT_SUCCESS, REMOVE_FOLLOWER_FAILURE, REMOVE_FOLLOWER_REQUEST, REMOVE_FOLLOWER_SUCCESS,
	SIGN_UP_FAILURE,
	SIGN_UP_REQUEST,
	SIGN_UP_SUCCESS,
	UNFOLLOW_FAILURE,
	UNFOLLOW_REQUEST,
	UNFOLLOW_SUCCESS,
} from "../reducers/user";


function removeFollowerAPI(data) {
	return axios.delete(`/user/follower/${data}`) // 몇번째의 팔로워를 제거한다
}

function* removeFollower(action) {
	try {
		const result = yield call(removeFollowerAPI, action.data)
		console.log('saga removeFollower 요청:: ', action.data)
		yield put({
			type: REMOVE_FOLLOWER_SUCCESS,
			data: result.data,
		})
		console.log('saga removeFollower 성공:: ', result)
	} catch (err) {
		console.error('saga removeFollower 실패:: ', err)
		yield put({
			type: REMOVE_FOLLOWER_FAILURE,
			error: err.response.data
		})
	}
}

function loadFollowersAPI(data) {
	return axios.get('/user/followers', data)
}

function* loadFollowers(action) {
	try {
		const result = yield call(loadFollowersAPI, action.data)
		console.log('saga followers:: 요청', action.data)
		yield put({
			type: LOAD_FOLLOWERS_SUCCESS,
			data: result.data,
		})
		console.log('saga followers:: 성공', result)
	} catch (err) {
		console.error('saga followers::', err)
		yield put({
			type: LOAD_FOLLOWERS_FAILURE,
			error: err.response.data,
		})
	}
}

function loadFollowingsAPI(data) {
	return axios.get('/user/followings', data)
}

function* loadFollowings(action) {
	try {
		const result = yield call(loadFollowingsAPI, action.data)
		console.log('saga followings 요청::', action.data)
		yield put({
			type: LOAD_FOLLOWINGS_SUCCESS,
			data: result.data,
		})
		console.log('saga followings 성공::', result)
	} catch (err) {
		console.error('saga followings 실패::', err)
		yield put({
			type: LOAD_FOLLOWINGS_FAILURE,
			error: err.response.data,
		})
	}
}

function changeNicknameAPI(data) { // generator 아님
	// 실제 서버에 로그인 요청을 보냄 // back
	//return axios.post('http://localhost:3065/user/login', data)
	// localhost 중복 없애기
	return axios.patch('/user/nickname', {nickname: data})
}

function* changeNickname(action) { // login action request 가 action 에 전달
	try { // 요청 실패 대비
		//yield delay(1000) // front
		const result = yield call(changeNicknameAPI, action.data) // 서버에서 받은 결과 값을 받음
		console.log('saga changeNickname 실행중::', action.data)
		yield put({
			type: CHANGE_NICKNAME_SUCCESS,
			//data: action.data, // front
			data: result.data // (성공 결과 담김) back
		})
		console.log('saga changeNickname 완료 ::', result)
	} catch (err) {
		console.error('changeNickname', err)
		yield put({ // put 은 dispatch 라고 생각하자
			type: CHANGE_NICKNAME_FAILURE,
			error: err.response.data // (실패 결과 담김)
		})
	}
}

function loadUserAPI(data) {
	return axios.get(`/user/${data}`)
}

function* loadUser(action) {
	try {
		const result = yield call(loadUserAPI, action.data)
		console.log('saga loadUser 실행 :: ', result.data)
		yield put({
			type: LOAD_USER_SUCCESS,
			data: result.data
		})
		console.log('saga loadUser 성공 :: ', result)
	} catch (err) {
		console.error('saga loadUser Failure 실패 :: ', err)
		yield put({
			type: LOAD_USER_FAILURE,
			error: err.response.data,
		})
	}
}

//function loadMyInfoAPI(userId) {
function loadMyInfoAPI() {
	// 서버에 요청을 보내는 부분
	return axios.get('/user'); // 서버사이드렌더링일 때는, 브라우저가 없어요.
}

function* loadMyInfo() {
	try {
		const result = yield call(loadMyInfoAPI)
		console.log('saga loadMyInfo 실행 :: ')
		yield put({
			type: LOAD_MY_INFO_SUCCESS,
			data: result.data,
		})
		console.log('saga loadMyInfo 성공:: ', result)
	} catch (err) {
		console.error('saga loadMyInfo error :: ', err)
		console.dir('saga loadMyInfo error :: ', err)
		yield put({
			type: LOAD_MY_INFO_FAILURE,
			error: err.response.data,
		});
	}
}

function logInAPI(data) { // generator 아님
													//return axios.post('/api/login', data) // 실제 서버에 로그인 요청을 보냄 // front

	// 실제 서버에 로그인 요청을 보냄 // back
	//return axios.post('http://localhost:3065/user/login', data)

	// localhost 중복 없애기
	return axios.post('/user/login', data)
}

// 테스트 코드
// const l = logIn({type: 'LOG_IN_REQUEST', data: {id: 'rlaalsdn8@naver.com'}})
// 		l.next();
// 		l.next();
/////////////////
function* logIn(action) { // login action request 가 action 에 전달
	try { // 요청 실패 대비
		//yield delay(1000) // front
		const result = yield call(logInAPI, action.data) // 서버에서 받은 결과 값을 받음
		console.log('saga logIn 실행중::', action.data)
		yield put({
			type: LOG_IN_SUCCESS,
			//data: action.data, // front
			data: result.data // (성공 결과 담김) back
		})
		console.log('saga logIn 완료 ::', result)
	} catch (err) {
		console.error('logIn', err)
		yield put({ // put 은 dispatch 라고 생각하자
			type: LOG_IN_FAILURE,
			error: err.response.data // (실패 결과 담김)
		})
	}
}

function logOutAPI() {
	// return axios.post('/api/logout') front
	return axios.post('/user/logout')
}

function* logOut() {
	try { // 요청 실패 대비
		//yield delay(1000) front
		yield call(logOutAPI) // 서버에서 받은 결과 값을 받음 back
		console.log('sagas:: logout 실행')
		yield put({
			type: LOG_OUT_SUCCESS,
		})
		console.log('sagas:: logout 완료')
	} catch (err) {
		console.error('front logOut : ', err)
		yield put({ // put 은 dispatch 라고 생각하자
			type: LOG_OUT_FAILURE,
			error: err.response.data // (실패 결과 담김)
		})
	}
}

function signUpAPI(data) {
	// back end server addr
	// data 는 email, nickname, password object
	//return axios.post('/api/signup', data) // front
	return axios.post('/user', data) // back
}

function* signUp(action) {
	try {
		//yield delay(1000)
		const result = yield call(signUpAPI, action.data)
		console.log('saga sign up result 실행중 :: ', action.data)
		yield put({
			type: SIGN_UP_SUCCESS,
			//data: result.data
		})
		console.log('saga sign up 완료 :: ', result)
	} catch (err) {
		console.error('saga signUp error : ', err)
		yield put({
			type: SIGN_UP_FAILURE,
			error: err.response.data
		})
	}
}


function followAPI(data) { // data 에 사용자 id 넣어주기
													 // return axios.post('/api/follow', data) front
	return axios.patch(`/user/${data}/follow`)
}

function* follow(action) {
	try {
		//yield delay(1000) front
		const result = yield call(followAPI, action.data)
		console.log('saga follow 실행 : ', result)
		yield put({
			type: FOLLOW_SUCCESS,
			//data: action.data front
			data: result.data
		})
		console.log('saga follow 완료 :: ', result)
	} catch (err) {
		console.error('saga follow error :: ', err)
		yield put({
			type: FOLLOW_FAILURE,
			error: err.response.data,
		})
	}
}

function unfollowAPI(data) {// data 에 사용자 id 넣어주기
	//return axios.post('/api/unfollow', data) front
	return axios.delete(`/user/${data}/follow`)
}

function* unfollow(action) {
	try {
		const result = yield call(unfollowAPI, action.data)
		//yield delay(1000) front
		console.log('saga unfollow 요청 :: ', action.data)
		yield put({
			type: UNFOLLOW_SUCCESS,
			//data: action.data front
			data: result.data
		})
		console.log('saga unfollow 성공:: ', result)
	} catch (err) {
		console.error('saga unfollow error:: ', err)
		yield put({
			type: UNFOLLOW_FAILURE,
			error: err.response.data,
		})
	}
}

function* watchRemoveFollower() {
	yield takeLatest(REMOVE_FOLLOWER_REQUEST, removeFollower)
}

function* watchLoadFollowers() {
	yield takeLatest(LOAD_FOLLOWERS_REQUEST, loadFollowers)
}

function* watchLoadFollowings() {
	yield takeLatest(LOAD_FOLLOWINGS_REQUEST, loadFollowings)
}

function* watchChangeNickname() {
	yield takeLatest(CHANGE_NICKNAME_REQUEST, changeNickname)
}

function* watchLoadUser() {
	yield takeLatest(LOAD_USER_REQUEST, loadUser)
}

function* watchLoadMyInfo() {
	yield takeLatest(LOAD_MY_INFO_REQUEST, loadMyInfo)
}

function* watchFollow() {
	yield takeLatest(FOLLOW_REQUEST, follow)
}

function* watchUnfollow() {
	yield takeLatest(UNFOLLOW_REQUEST, unfollow)
}

function* watchLogIn() {	// 로그인 액션이 실행될때까지 기다리겠다는 뜻
	yield takeLatest(LOG_IN_REQUEST, logIn) //LOG_IN_REQUEST 액션이 실행되면 logIn 함수 실행
}

function* watchLogOut() {	// 로그아웃 액션이 실행될때까지 기다리겠다는 뜻
	yield takeLatest(LOG_OUT_REQUEST, logOut) //LOG_OUT_REQUEST 액션이 실행되면 logIn 함수 실행
}

function* watchSignUp() {	// 회원가입 액션이 실행될때까지 기다리겠다는 뜻
	yield takeLatest(SIGN_UP_REQUEST, signUp) // SIGN_UP_REQUEST 액션이 실행되면 logIn 함수 실행
}

export default function* userSaga() {
	yield all([
		fork(watchLoadUser),
		fork(watchRemoveFollower),
		fork(watchLoadFollowers),
		fork(watchLoadFollowings),
		fork(watchChangeNickname),
		fork(watchLoadMyInfo),
		fork(watchFollow),
		fork(watchUnfollow),
		fork(watchLogIn),
		fork(watchLogOut),
		fork(watchSignUp),
	])
}
