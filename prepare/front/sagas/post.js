import {all, delay, fork, put, takeLatest} from "redux-saga/effects";
import axios from "axios";

function addPostAPI(data) { // 3 전달되면
	return axios.post('/api/post', data) // 4 데이터가 간다
}

function* addPost(action) { // 1 액션에서
	try {
		//const result = yield call(addPostAPI, action.data) // 2 데이터를 꺼내서
		yield delay(1000)
		yield put({
			type: 'ADD_POST_SUCCESS',
			//data: result.data
		})
	} catch (err) {
		yield put({
			type: 'ADD_POST_FAILURE',
			data: err.response.data
		})
	}
}

function* watchAddPost() {
	yield takeLatest('ADD_POST_REQUEST', addPost)
}

export default function* postSaga() {
	yield all([
		fork(watchAddPost),
	])
}