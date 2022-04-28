import {all, call, delay, fork, put, takeLatest, throttle} from "redux-saga/effects";
import axios from "axios";
import {
	ADD_COMMENT_FAILURE,
	ADD_COMMENT_REQUEST,
	ADD_COMMENT_SUCCESS,
	ADD_POST_FAILURE,
	ADD_POST_REQUEST,
	ADD_POST_SUCCESS, LIKE_POST_FAILURE, LIKE_POST_REQUEST, LIKE_POST_SUCCESS,
	//generateDummyPost, front
	LOAD_POSTS_FAILURE,
	LOAD_POSTS_REQUEST,
	LOAD_POSTS_SUCCESS,
	REMOVE_POST_FAILURE,
	REMOVE_POST_REQUEST,
	REMOVE_POST_SUCCESS, UNLIKE_POST_FAILURE, UNLIKE_POST_REQUEST, UNLIKE_POST_SUCCESS,
} from "../reducers/post";
import {
	ADD_POST_TO_ME,
	REMOVE_POST_OF_ME,
} from "../reducers/user";

//import shortId from "shortid"; front

// restAPI
function loadPostsAPI(data) { // 3 전달되면
	//return axios.get('/api/posts', data) // 4 데이터가 간다 front
	return axios.get('/posts', data) // 4 데이터가 간다 ,
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
	} catch (err) {
		console.error('loadPosts error: ', err)
		yield put({
			type: LOAD_POSTS_FAILURE,
			error: err.response.data
		})
	}
}

function likePostAPI(data) { // 3 전달되면
	return axios.patch(`/post/${data}/like`) // 4 데이터가 간다, like & unlike 는 patch ( 게시글에 일부분 수정이기때문 )
}

function* likePost(action) { // 1 액션에서
	try {
		const result = yield call(likePostAPI, action.data) // 2 데이터를 꺼내서
		console.log('likePost 실행중::', result)
		yield put({
			type: LIKE_POST_SUCCESS,
			data: result.data, // back, postId, userId 들어있음
		})
		console.log('likePost 완료::', result)
	} catch (err) {
		console.error('likePost error:: ', err)
		yield put({
			type: LIKE_POST_FAILURE,
			error: err.response.data
		})
	}
}

function unlikePostAPI(data) { // 3 전달되면
	return axios.delete(`/post/${data}/like`) // 4 데이터가 간다
}

function* unlikePost(action) { // 1 액션에서
	try {
		const result = yield call(unlikePostAPI, action.data) // 2 데이터를 꺼내서
		console.log('unlikePost 실행중::', result)
		yield put({
			type: UNLIKE_POST_SUCCESS,
			data: result.data, // back, postId,userId 들어있음
		})
		console.log('UNLIKEPost 완료::', result)
	} catch (err) {
		console.error('UNLIKEPost error:: ', err)
		yield put({
			type: UNLIKE_POST_FAILURE,
			error: err.response.data
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
	} catch (err) {
		console.error('addPost error:: ', err)
		yield put({
			type: ADD_POST_FAILURE,
			error: err.response.data
		})
	}
}

function removePostAPI(data) { // 3 전달되면
	//return axios.post('/api/post', data) // 4 데이터가 간다 front
	return axios.delete(`/post/${data}`) // 4 데이터가 간다 back //delete 의 data 는 post.id (PostCard.js)에서 확인 가능
}

function* removePost(action) { // 1 액션에서
	try { // 포스트 리듀서상태와 유저리듀서상태와 동시에 한방에 바꿀수 없기때문에 액션을 두번으로 바꿔준다,
		const result = yield call(removePostAPI, action.data) // 2 데이터를 꺼내서
		//yield delay(1000) front
		console.log('removePost 실행:: ', action.data)
		yield put({
			type: REMOVE_POST_SUCCESS,
			data: result.data, // 어떤 게시물을 지웠는지 id 가있을것,
		})
		console.log('removePost 완료:: ', result)
		yield put({
			type: REMOVE_POST_OF_ME,
			//data: action.data, front
			data: action.data,  // action 이 들어왔을때 데이터
		})
	} catch (err) {
		console.error('removePost error: ', err)
		yield put({
			type: REMOVE_POST_FAILURE,
			error: err.response.data
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
	} catch (err) {
		console.error('addComment error:: ', err)
		yield put({
			type: ADD_COMMENT_FAILURE,
			error: err.response.data
		})
	}
}

function* watchLikePost() {
	yield takeLatest(LIKE_POST_REQUEST, likePost)
}

function* watchUnlikePost() {
	yield takeLatest(UNLIKE_POST_REQUEST, unlikePost)
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
		fork(watchLikePost),
		fork(watchUnlikePost),
		fork(watchLoadPosts),
		fork(watchAddPost),
		fork(watchRemovePost),
		fork(watchAddComment),
	])
}