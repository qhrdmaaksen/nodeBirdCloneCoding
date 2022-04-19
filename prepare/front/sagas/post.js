import {all, delay, fork, put, takeLatest} from "redux-saga/effects";
import axios from "axios";
import {
	ADD_COMMENT_FAILURE,
	ADD_COMMENT_REQUEST,
	ADD_COMMENT_SUCCESS,
	ADD_POST_FAILURE,
	ADD_POST_REQUEST,
	ADD_POST_SUCCESS,
} from "../reducers/post";
import {ADD_POST_TO_ME} from "../reducers/user";
import shortId from "shortid";

function addPostAPI(data) { // 3 전달되면
	return axios.post('/api/post', data) // 4 데이터가 간다
}
function* addPost(action) { // 1 액션에서
	try {
		//const result = yield call(addPostAPI, action.data) // 2 데이터를 꺼내서
		yield delay(1000)
		const id = shortId.generate()
		yield put({
			type: ADD_POST_SUCCESS,
			data: {
				id,
				content: action.data,
			}
		})
		yield put({
			type: ADD_POST_TO_ME,
			data: id,
		})
	} catch (err) {
		console.error('addPost : ' + err)
		yield put({
			type: ADD_POST_FAILURE,
			error: err.response.data
		})
	}
}
function addCommentAPI(data) { // 3 전달되면
	return axios.post(`/api/post/${data.postId}/comment`, data) // 4 데이터가 간다
}
function* addComment(action) { // 1 액션에서
	try {
		//const result = yield call(addCommentAPI, action.data) // 2 데이터를 꺼내서
		yield delay(1000)
		yield put({
			type: ADD_COMMENT_SUCCESS,
			data: action.data
			//data: result.data
		})
	} catch (err) {
		console.error('addComment : ' + err)
		yield put({
			type: ADD_COMMENT_FAILURE,
			error: err.response.data
		})
	}
}
function* watchAddPost() {
	yield takeLatest(ADD_POST_REQUEST, addPost)

}
function* watchAddComment() {
	yield takeLatest(ADD_COMMENT_REQUEST, addComment)
}

export default function* postSaga() {
	yield all([
		fork(watchAddPost),
			fork(watchAddComment),
	])
}