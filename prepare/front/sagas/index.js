//import {all, fork, takeLatest, call, put, delay} from 'redux-saga/effects';
import {all, fork} from 'redux-saga/effects';
import axios from 'axios'
import postSaga from './post'
import userSaga from './user'
import {backUrl} from "../config/config";

axios.defaults.baseURL = 'http://localhost:3065' // front
//axios.defaults.baseURL = backUrl // back, aws ip

axios.defaults.withCredentials = true;

export default function* rootSaga() {
	yield all([ // ALL 배열안에 한방에 실행해줌
		fork(postSaga), // fork 는 (함수)실행
		fork(userSaga),	// call 이랑은 다르다.
	])
}