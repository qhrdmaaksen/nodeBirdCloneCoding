import {all, call, delay, fork, put, takeLatest, throttle} from "redux-saga/effects";
import axios from "axios";
import {
	ADD_COMMENT_FAILURE,
	ADD_COMMENT_REQUEST,
	ADD_COMMENT_SUCCESS,
	ADD_POST_FAILURE,
	ADD_POST_REQUEST,
	ADD_POST_SUCCESS,
	//generateDummyPost, front
	LOAD_POSTS_FAILURE,
	LOAD_POSTS_REQUEST,
	LOAD_POSTS_SUCCESS,
	REMOVE_POST_FAILURE,
	REMOVE_POST_REQUEST,
	REMOVE_POST_SUCCESS,
} from "../reducers/post";
import {
	ADD_POST_TO_ME,
	REMOVE_POST_OF_ME,
} from "../reducers/user";

//import shortId from "shortid"; front


function loadPostsAPI(data) { // 3 전달되면
	//return axios.get('/api/posts', data) // 4 데이터가 간다 front
	return axios.get('/posts', data) // 4 데이터가 간다
}

function* loadPosts(action) { // 1 액션에서
	try {
		console.log('Sagas:: loadPosts 실행중', action.data)
		const result = yield call(loadPostsAPI, action.data) // 2 데이터를 꺼내서
		//yield delay(1000) front
		console.log('loadPosts 완료:: ', result)
		yield put({
			type: LOAD_POSTS_SUCCESS,
			// data: generateDummyPost(10), // data 10 개 front
			data: result.data
		})
	} catch (error) {
		console.error('loadPosts : ', error)
		yield put({
			type: LOAD_POSTS_FAILURE,
			error: error.response.data
		})
	}
}


function addPostAPI(data) { // 3 전달되면
	//return axios.post('/api/post', data) // 4 데이터가 간다 front
	// data content 가 req.body.content 로 백엔드에 변환
	return axios.post('/post', {content: data}) // 4 데이터가 간다
}

function* addPost(action) { // 1 액션에서
	try {
		const result = yield call(addPostAPI, action.data) // 2 데이터를 꺼내서
		//yield delay(1000) front
		//const id = shortId.generate() // front 의 더미 아디
		console.log('addPost 실행중::', result)
		yield put({
			type: ADD_POST_SUCCESS,
			/*data: { // front dummy
				id,
				content: action.data,
			}*/
			data: result.data, // back, 실제로 게시글이 들어있음
		})
		console.log('addPost 완료::', result)
		yield put({
			type: ADD_POST_TO_ME,
			// data: id, // front dummy
			data: result.data.id // back
		})
	} catch (error) {
		console.error('addPost error:: ', error)
		yield put({
			type: ADD_POST_FAILURE,
			error: error.response.data
		})
	}
}

function removePostAPI(data) { // 3 전달되면
	return axios.post('/api/post', data) // 4 데이터가 간다
}

function* removePost(action) { // 1 액션에서
	try { // 포스트 리듀서상태와 유저리듀서상태와 동시에 한방에 바꿀수 없기때문에 액션을 두번으로 바꿔준다,
		//const result = yield call(removePostAPI, action.data) // 2 데이터를 꺼내서
		yield delay(1000)
		yield put({
			type: REMOVE_POST_SUCCESS,
			data: action.data, // 어떤 게시물을 지웠는지 id 가있을것
		})
		yield put({
			type: REMOVE_POST_OF_ME,
			data: action.data,
		})
	} catch (error) {
		console.error('removePost : ', error)
		yield put({
			type: REMOVE_POST_FAILURE,
			error: error.response.data
		})
	}
}

function addCommentAPI(data) { // 3 전달되면
	//주소는 백엔드와 프론트의 약속일뿐 정해진건없다
	//return axios.post(`/api/post/${data.postId}/comment`, data) // 4 데이터가 간다 // front
	return axios.post(`/post/${data.postId}/comment`, data) // 4 데이터가 간다 // POST /post/1/comment
}

function* addComment(action) { // 1 액션에서
	try {
		const result = yield call(addCommentAPI, action.data) // 2 데이터를 꺼내서 //back
		//yield delay(1000) front
		console.log('addComment 실행중 ::', action.data)
		yield put({
			type: ADD_COMMENT_SUCCESS,
			//data: action.data // front
			data: result.data,
		})
		console.log('addComment 완료::', result)
	} catch (error) {
		console.error('addComment error:: ', error)
		yield put({
			type: ADD_COMMENT_FAILURE,
			error: error.response.data
		})
	}
}

function* watchLoadPosts() {
	yield throttle(5000, LOAD_POSTS_REQUEST, loadPosts)
}

function* watchAddPost() {
	yield takeLatest(ADD_POST_REQUEST, addPost)
}

function* watchRemovePost() {
	yield takeLatest(REMOVE_POST_REQUEST, removePost)
}

function* watchAddComment() {
	yield takeLatest(ADD_COMMENT_REQUEST, addComment)
}

export default function* postSaga() {
	yield all([
		fork(watchLoadPosts),
		fork(watchAddPost),
		fork(watchRemovePost),
		fork(watchAddComment),
	])
}