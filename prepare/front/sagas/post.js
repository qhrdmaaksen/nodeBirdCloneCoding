import {all, call, delay, fork, put, takeLatest, throttle} from "redux-saga/effects";
import axios from "axios";
import {
	ADD_COMMENT_FAILURE,
	ADD_COMMENT_REQUEST,
	ADD_COMMENT_SUCCESS,
	ADD_POST_FAILURE,
	ADD_POST_REQUEST,
	ADD_POST_SUCCESS,
	LIKE_POST_FAILURE,
	LIKE_POST_REQUEST,
	LIKE_POST_SUCCESS, LOAD_POST_FAILURE, LOAD_POST_REQUEST, LOAD_POST_SUCCESS,
	//generateDummyPost, front
	LOAD_POSTS_FAILURE,
	LOAD_POSTS_REQUEST,
	LOAD_POSTS_SUCCESS,
	REMOVE_POST_FAILURE,
	REMOVE_POST_REQUEST,
	REMOVE_POST_SUCCESS, RETWEET_FAILURE, RETWEET_REQUEST, RETWEET_SUCCESS,
	UNLIKE_POST_FAILURE,
	UNLIKE_POST_REQUEST,
	UNLIKE_POST_SUCCESS, UPLOAD_IMAGES_FAILURE,
	UPLOAD_IMAGES_REQUEST,
	UPLOAD_IMAGES_SUCCESS,
} from "../reducers/post";
import {
	ADD_POST_TO_ME,
	REMOVE_POST_OF_ME,
} from "../reducers/user";

//import shortId from "shortid"; front

// restAPI
function retweetAPI(data) {
	return axios.post(`/post/${data}/retweet`)
}

function* retweet(action) {
	try {
		const result = yield call(retweetAPI, action.data)
		console.log('saga retweet 실행::', action.data)
		yield put({
			type: RETWEET_SUCCESS,
			data: result.data,
		})
		console.log('saga retweet 성공::', result)
	} catch (err) {
		console.error('saga retweet 실패 :: ', err)
		yield put({
			type: RETWEET_FAILURE,
			error: err.response.data
		})
	}
}

function uploadImagesAPI(data) {
	return axios.post('/post/images', data) // form data 를 {name:data} 형식으로 감싸면 json 되기때문에 사용하면 안됨
}

function* uploadImages(action) {
	try {
		const result = yield call(uploadImagesAPI, action.data)
		console.log('saga uploadImages 실행:: ', action.data)
		yield put({
			type: UPLOAD_IMAGES_SUCCESS,
			data: result.data
		})
		console.log('saga uploadImages 성공:: ', result)
	} catch (err) {
		console.error('saga uploadImages error:: ', err)
		yield put({
			type: UPLOAD_IMAGES_FAILURE,
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
			error: err.response.data,
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

function loadPostsAPI(lastId) { // 3 전달되면
	//return axios.get('/api/posts', data) // 4 데이터가 간다 front
	// 보통 get 방식은 데이터를 못 넣기때문에 쿼리스트링으로 넣어줘야한다 (주소), etc : limit=10&offset=10
	// 포스트 등은 데이터 캐싱이 안되지만, 겟은 데이터 캐싱을 같이 할 수 있다
	// lastId 가 undefined 인 경우 0
	return axios.get(`/posts?lastId=${lastId || 0}`) // 4 데이터가 간다 ,
}

function* loadPosts(action) { // 1 액션에서
	try {
		console.log('Sagas:: loadPosts 실행중', action.lastId)
		const result = yield call(loadPostsAPI, action.lastId) // 2 데이터를 꺼내서
		//yield delay(1000) front
		console.log('loadPosts 완료:: ', result)
		yield put({
			type: LOAD_POSTS_SUCCESS,
			// data: generateDummyPost(10), // data 10 개 front
			data: result.data,
		})
	} catch (err) {
		console.error('loadPosts error: ', err)
		yield put({
			type: LOAD_POSTS_FAILURE,
			error: err.response.data,
		});
	}
}

function loadPostAPI(data) {
	return axios.get(`/post/${data}`)
}

function* loadPost(action) {
	try {
		const result = yield call(loadPostAPI, action.data)
		console.log('saga loadPost 요청 :: ', action.data)
		yield put({
			type: LOAD_POST_SUCCESS,
			data: result.data,
		})
		console.log('saga loadPost 성공 :: ', result)
	} catch (err) {
		console.error('saga loadPost 실패 :: ', err)
		yield put({
			type: LOAD_POST_FAILURE,
			error: err.response.data,
		})
	}
}


function addPostAPI(data) { // 3 전달되면
	//return axios.post('/api/post', data) // 4 데이터가 간다 front
	// data content 가 req.body.content 로 백엔드에 변환
	//return axios.post('/post', {content: data}) // 4 데이터가 간다,
	// form data 는 {content: data} 와 같이 감싸면 안된다, 바로 data 로 넣어줘야함
	return axios.post('/post', data) // 4 데이터가 간다
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
			data: result.data.id, // back
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

function* watchLoadPost() {
	yield takeLatest(LOAD_POST_REQUEST, loadPost)
}

function* watchRetweet() {
	yield takeLatest(RETWEET_REQUEST, retweet)
}

function* watchUploadImages() {
	yield takeLatest(UPLOAD_IMAGES_REQUEST, uploadImages)
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
		fork(watchLoadPost),
		fork(watchRetweet),
		fork(watchUploadImages),
		fork(watchLikePost),
		fork(watchUnlikePost),
		fork(watchLoadPosts),
		fork(watchAddPost),
		fork(watchRemovePost),
		fork(watchAddComment),
	])
}