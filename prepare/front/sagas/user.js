import {all, delay, fork, put, takeLatest} from "redux-saga/effects";
import axios from "axios";
import {
	FOLLOW_FAILURE,
	FOLLOW_REQUEST, FOLLOW_SUCCESS,
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


function logInAPI(data) { // gererator 아님
	return axios.post('/api/login', data) // 실제 서버에 로그인 요청을 보냄
}

// 테스트 코드
// const l = logIn({type: 'LOG_IN_REQUEST', data: {id: 'rlaalsdn8@naver.com'}})
// 		l.next();
// 		l.next();
/////////////////
function* logIn(action) { // login action request 가 action 에 전달
	try { // 요청 실패 대비
		console.log('saga logIn')
		yield delay(1000)
		//const result = yield call(logInAPI, action.data) // 서버에서 받은 결과 값을 받음
		yield put({
			type: LOG_IN_SUCCESS,
			data: action.data,
			//data: result.data // (성공 결과 담김)
		})
	} catch (err) {
		console.error('logIn' + err)
		yield put({ // put 은 dispatch 라고 생각하자
			type: LOG_IN_FAILURE,
			error: err.response.data // (실패 결과 담김)
		})
	}
}

function logOutAPI() {
	return axios.post('/api/logout')
}

function* logOut() {
	try { // 요청 실패 대비
		yield delay(1000)
		//const result = yield call(logOutAPI) // 서버에서 받은 결과 값을 받음
		yield put({
			type: LOG_OUT_SUCCESS,
			//data: result.data // (성공 결과 담김)
		})
	} catch (err) {
		console.error('logOut : ' + err)
		yield put({ // put 은 dispatch 라고 생각하자
			type: LOG_OUT_FAILURE,
			error: err.response.data // (실패 결과 담김)
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
		console.error('follow error : ' + err)
		yield put({
			type: FOLLOW_FAILURE,
			data: err.response.data,
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
		console.error('unfollow error : ' + err)
		yield put({
			type: UNFOLLOW_FAILURE,
			data: err.response.data,
		})
	}
}

function signUpAPI() {
	return axios.post('/api/signup')
}

function* signUp() {
	try {
		yield delay(1000)
		yield put({
			type: SIGN_UP_SUCCESS,
			// data: result.data
		})
	} catch (err) {
		console.error('signUp : ' + err)
		yield put({
			type: SIGN_UP_FAILURE,
			error: err.response.data
		})
	}
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
		fork(watchFollow),
		fork(watchUnFollow),
		fork(watchLogIn),
		fork(watchLogOut),
		fork(watchSignUp),
	])
}