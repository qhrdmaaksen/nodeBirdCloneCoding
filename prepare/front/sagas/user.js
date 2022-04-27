import {all, call, delay, fork, put, takeLatest} from "redux-saga/effects";
import axios from "axios";
import {
	FOLLOW_FAILURE,
	FOLLOW_REQUEST, FOLLOW_SUCCESS, LOAD_MY_INFO_FAILURE, LOAD_MY_INFO_REQUEST, LOAD_MY_INFO_SUCCESS,
	LOG_IN_FAILURE,
	LOG_IN_REQUEST,
	LOG_IN_SUCCESS,
	LOG_OUT_FAILURE,
	LOG_OUT_REQUEST,
	LOG_OUT_SUCCESS,
	SIGN_UP_FAILURE,
	SIGN_UP_REQUEST,
	SIGN_UP_SUCCESS, UNFOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS,
} from "../reducers/user";


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
		console.error('logIn' , err)
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
		console.log('sagas:: logout 완료')
		yield put({
			type: LOG_OUT_SUCCESS,
		})
	} catch (err) {
		console.error('front logOut : ' , err)
		yield put({ // put 은 dispatch 라고 생각하자
			type: LOG_OUT_FAILURE,
			error: err.response.data // (실패 결과 담김)
		})
	}
}

function loadMyInfoAPI() {
	return axios.get('/user')
}

function* loadMyInfo(action) {
	try {
		const result = yield call(loadMyInfoAPI, action.data)
		console.log('loadMyInfo 실행중::', action.data)
		yield put({
			type: LOAD_MY_INFO_SUCCESS,
			data: result.data
		})
		console.log('loadMyInfo 완료', result)
	} catch (err) {
		console.error('loadMyInfo error : ' , err)
		yield put({
			type: LOAD_MY_INFO_FAILURE,
			error: err.response.data
		})
	}
}

function followAPI(data) {
	return axios.post('/api/follow', data)
}

function* follow(action) {
	try {
		yield delay(1000)
		yield put({
			type: FOLLOW_SUCCESS,
			data: action.data
		})
	} catch (err) {
		console.error('follow error : ' , err)
		yield put({
			type: FOLLOW_FAILURE,
			error: err.response.data,
		})
	}
}

function unfollowAPI(data) {
	return axios.post('/api/unfollow', data)
}

function* unfollow(action) {
	try {
		yield delay(1000)
		yield put({
			type: UNFOLLOW_SUCCESS,
			data: action.data
		})
	} catch (err) {
		console.error('unfollow error : ' , err)
		yield put({
			type: UNFOLLOW_FAILURE,
			error: err.response.data,
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
		console.log('sign up result 실행중 :: ', action.data)
		yield put({
			type: SIGN_UP_SUCCESS,
			//data: result.data
		})
		console.log('sign up 완료 :: ', result)
	} catch (err) {
		console.error('signUp error : ' , err)
		yield put({
			type: SIGN_UP_FAILURE,
			error: err.response.data
		})
	}
}

function* watchLoadMyInfo() {
	yield takeLatest(LOAD_MY_INFO_REQUEST, loadMyInfo)
}

function* watchFollow() {
	yield takeLatest(FOLLOW_REQUEST, follow)
}

function* watchUnFollow() {
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
		fork(watchLoadMyInfo),
		fork(watchFollow),
		fork(watchUnFollow),
		fork(watchLogIn),
		fork(watchLogOut),
		fork(watchSignUp),
	])
}