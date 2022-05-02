module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("TpwP");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("AQn3");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const NodeBird = ({
  Component
}) => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("meta", {
  charSet: "utf-8"
}), __jsx("title", null, "NodeBird")), __jsx(Component, null));

/* harmony default export */ __webpack_exports__["default"] = (_store_configureStore__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].withRedux(NodeBird));

/***/ }),

/***/ "1fKG":
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "AQn3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__("JMOJ");

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: external "redux-devtools-extension"
var external_redux_devtools_extension_ = __webpack_require__("ufKq");

// EXTERNAL MODULE: external "redux-saga"
var external_redux_saga_ = __webpack_require__("1fKG");
var external_redux_saga_default = /*#__PURE__*/__webpack_require__.n(external_redux_saga_);

// EXTERNAL MODULE: ./reducers/user.js
var user = __webpack_require__("LAVF");

// EXTERNAL MODULE: ./reducers/post.js
var post = __webpack_require__("p+NB");

// CONCATENATED MODULE: ./reducers/index.js
//import { store } from 'next/dist/build/output/store'



 // const initialState = {
// 	user: {},
// 	post: {},
// }
// 비동기 액션 생성기
// 액션 생성기

/*const changeNickname = (data) => {
	return {
		type: 'CHANGE_NICKNAME',
		data,
	}
}
changeNickname('vitamin777')*/

/*{
		type: 'CHANGE_NICKNAME',
		data: 'vitamin777',
}*/

/*store.dispatch(changeNickname('vitamin7777777'))*/
// 리듀서 : 이전상태와 액션을 통해 다음 상태를 만들어내는 함수

/* CSR REDUCER
const rootReducer = combineReducers({
	// user 이니셜스테이트, post 이니셜스테이트 컴바인 리듀서가 알아서 한방에 묶어줌
	index: (state = {}, action) => {
		switch (action.type) {
			case HYDRATE:
				console.log('HYDRATE', action)
				return {...state, ...action.payload}
			default:
				return state
		}
	},
	user,
	post,
})*/
// SSR

const rootReducer = (state, action) => {
  // (이전상태 state, 액션) => 다음상태
  switch (action.type) {
    case external_next_redux_wrapper_["HYDRATE"]:
      console.log('reducer rootReducer HYDRATE :: ', action);
      return action.payload;

    default:
      {
        const combinedReducer = Object(external_redux_["combineReducers"])({
          user: user["J" /* default */],
          post: post["I" /* default */]
        });
        return combinedReducer(state, action);
      }
  }
};
/*reducers/index.js 보시면 user랑 post를 불러와서 합치고 있습니다.
rootReducer가 state고, user와 post는 각각 state.user, state.post가 됩니다.
user.js의 me는 state.user.me가 됩니다.*/


/* harmony default export */ var reducers = (rootReducer);
// EXTERNAL MODULE: external "redux-saga/effects"
var effects_ = __webpack_require__("RmXt");

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./sagas/post.js



 //import shortId from "shortid"; front
// restAPI

function retweetAPI(data) {
  return external_axios_default.a.post(`/post/${data}/retweet`);
}

function* retweet(action) {
  try {
    const result = yield Object(effects_["call"])(retweetAPI, action.data);
    console.log('saga retweet 실행:::', action.data);
    yield Object(effects_["put"])({
      type: post["B" /* RETWEET_SUCCESS */],
      data: result.data
    });
    console.log('saga retweet 성공:::', result);
  } catch (err) {
    console.error('saga retweet 실패 ::: ', err);
    yield Object(effects_["put"])({
      type: post["z" /* RETWEET_FAILURE */],
      error: err.response.data
    });
  }
}

function uploadImagesAPI(data) {
  return external_axios_default.a.post('/post/images', data); // form data 를 {name:data} 형식으로 감싸면 json 되기때문에 사용하면 안됨
}

function* uploadImages(action) {
  try {
    const result = yield Object(effects_["call"])(uploadImagesAPI, action.data);
    console.log('saga uploadImages 실행::: ', action.data);
    yield Object(effects_["put"])({
      type: post["H" /* UPLOAD_IMAGES_SUCCESS */],
      data: result.data
    });
    console.log('saga uploadImages 성공::: ', result);
  } catch (err) {
    console.error('saga uploadImages error::: ', err);
    yield Object(effects_["put"])({
      type: post["F" /* UPLOAD_IMAGES_FAILURE */],
      error: err.response.data
    });
  }
}

function likePostAPI(data) {
  // 3 전달되면
  return external_axios_default.a.patch(`/post/${data}/like`); // 4 데이터가 간다, like & unlike 는 patch ( 게시글에 일부분 수정이기때문 )
}

function* likePost(action) {
  // 1 액션에서
  try {
    const result = yield Object(effects_["call"])(likePostAPI, action.data); // 2 데이터를 꺼내서

    console.log('likePost 실행중:::', result);
    yield Object(effects_["put"])({
      type: post["i" /* LIKE_POST_SUCCESS */],
      data: result.data // back, postId, userId 들어있음

    });
    console.log('likePost 완료:::', result);
  } catch (err) {
    console.error('likePost error::: ', err);
    yield Object(effects_["put"])({
      type: post["g" /* LIKE_POST_FAILURE */],
      error: err.response.data
    });
  }
}

function unlikePostAPI(data) {
  // 3 전달되면
  return external_axios_default.a.delete(`/post/${data}/like`); // 4 데이터가 간다
}

function* unlikePost(action) {
  // 1 액션에서
  try {
    const result = yield Object(effects_["call"])(unlikePostAPI, action.data); // 2 데이터를 꺼내서

    console.log('unlikePost 실행중:::', result);
    yield Object(effects_["put"])({
      type: post["E" /* UNLIKE_POST_SUCCESS */],
      data: result.data // back, postId,userId 들어있음

    });
    console.log('UNLIKEPost 완료:::', result);
  } catch (err) {
    console.error('UNLIKEPost error::: ', err);
    yield Object(effects_["put"])({
      type: post["C" /* UNLIKE_POST_FAILURE */],
      error: err.response.data
    });
  }
}

function loadPostsAPI(lastId) {
  // 3 전달되면
  //return axios.get('/api/posts', data) // 4 데이터가 간다 front
  // 보통 get 방식은 데이터를 못 넣기때문에 쿼리스트링으로 넣어줘야한다 (주소), etc : limit=10&offset=10
  // 포스트 등은 데이터 캐싱이 안되지만, 겟은 데이터 캐싱을 같이 할 수 있다
  // lastId 가 undefined 인 경우 0
  return external_axios_default.a.get(`/posts?lastId=${lastId || 0}`); // 4 데이터가 간다 ,
}

function* loadPosts(action) {
  // 1 액션에서
  try {
    console.log('Sagas loadPosts 실행중::: ', action.lastId);
    const result = yield Object(effects_["call"])(loadPostsAPI, action.lastId); // 2 데이터를 꺼내서
    //yield delay(1000) front

    console.log('sagas loadPosts 완료::: ', result);
    yield Object(effects_["put"])({
      type: post["o" /* LOAD_POSTS_SUCCESS */],
      // data: generateDummyPost(10), // data 10 개 front
      data: result.data
    });
  } catch (err) {
    console.error('saga loadPosts error: ', err);
    yield Object(effects_["put"])({
      type: post["m" /* LOAD_POSTS_FAILURE */],
      error: err.response.data
    });
  }
}

function loadPostAPI(data) {
  return external_axios_default.a.get(`/post/${data}`);
}

function* loadPost(action) {
  try {
    const result = yield Object(effects_["call"])(loadPostAPI, action.data);
    console.log('saga loadPost 요청 ::: ', action.data);
    yield Object(effects_["put"])({
      type: post["r" /* LOAD_POST_SUCCESS */],
      data: result.data
    });
    console.log('saga loadPost 성공 ::: ', result);
  } catch (err) {
    console.error('saga loadPost 실패 ::: ', err);
    yield Object(effects_["put"])({
      type: post["p" /* LOAD_POST_FAILURE */],
      error: err.response.data
    });
  }
}

function addPostAPI(data) {
  // 3 전달되면
  //return axios.post('/api/post', data) // 4 데이터가 간다 front
  // data content 가 req.body.content 로 백엔드에 변환
  //return axios.post('/post', {content: data}) // 4 데이터가 간다,
  // form data 는 {content: data} 와 같이 감싸면 안된다, 바로 data 로 넣어줘야함
  return external_axios_default.a.post('/post', data); // 4 데이터가 간다
}

function* addPost(action) {
  // 1 액션에서
  try {
    const result = yield Object(effects_["call"])(addPostAPI, action.data); // 2 데이터를 꺼내서
    //yield delay(1000) front
    //const id = shortId.generate() // front 의 더미 아디

    console.log('addPost 실행중:::', result);
    yield Object(effects_["put"])({
      type: post["f" /* ADD_POST_SUCCESS */],

      /*data: { // front dummy
      	id,
      	content: action.data,
      }*/
      data: result.data // back, 실제로 게시글이 들어있음

    });
    console.log('addPost 완료:::', result);
    yield Object(effects_["put"])({
      type: user["a" /* ADD_POST_TO_ME */],
      // data: id, // front dummy
      data: result.data.id // back

    });
  } catch (err) {
    console.error('saga addPost error::: ', err);
    yield Object(effects_["put"])({
      type: post["d" /* ADD_POST_FAILURE */],
      error: err.response.data
    });
  }
}

function removePostAPI(data) {
  // 3 전달되면
  //return axios.post('/api/post', data) // 4 데이터가 간다 front
  return external_axios_default.a.delete(`/post/${data}`); // 4 데이터가 간다 back //delete 의 data 는 post.id (PostCard.js)에서 확인 가능
}

function* removePost(action) {
  // 1 액션에서
  try {
    // 포스트 리듀서상태와 유저리듀서상태와 동시에 한방에 바꿀수 없기때문에 액션을 두번으로 바꿔준다,
    const result = yield Object(effects_["call"])(removePostAPI, action.data); // 2 데이터를 꺼내서
    //yield delay(1000) front

    console.log('removePost 실행::: ', action.data);
    yield Object(effects_["put"])({
      type: post["y" /* REMOVE_POST_SUCCESS */],
      data: result.data // 어떤 게시물을 지웠는지 id 가있을것,

    });
    console.log('removePost 완료::: ', result);
    yield Object(effects_["put"])({
      type: user["C" /* REMOVE_POST_OF_ME */],
      //data: action.data, front
      data: action.data // action 이 들어왔을때 데이터

    });
  } catch (err) {
    console.error('saga removePost error: ', err);
    yield Object(effects_["put"])({
      type: post["w" /* REMOVE_POST_FAILURE */],
      error: err.response.data
    });
  }
}

function addCommentAPI(data) {
  // 3 전달되면
  //주소는 백엔드와 프론트의 약속일뿐 정해진건없다
  //return axios.post(`/api/post/${data.postId}/comment`, data) // 4 데이터가 간다 // front
  return external_axios_default.a.post(`/post/${data.postId}/comment`, data); // 4 데이터가 간다 // POST /post/1/comment
}

function* addComment(action) {
  // 1 액션에서
  try {
    const result = yield Object(effects_["call"])(addCommentAPI, action.data); // 2 데이터를 꺼내서 //back
    //yield delay(1000) front

    console.log('addComment 실행중 :::', action.data);
    yield Object(effects_["put"])({
      type: post["c" /* ADD_COMMENT_SUCCESS */],
      //data: action.data // front
      data: result.data
    });
    console.log('addComment 완료:::', result);
  } catch (err) {
    console.error('saga addComment error::: ', err);
    yield Object(effects_["put"])({
      type: post["a" /* ADD_COMMENT_FAILURE */],
      error: err.response.data
    });
  }
}

function loadUserPostsAPI(data, lastId) {
  return external_axios_default.a.get(`/user/${data}/posts?lastId=${lastId || 0}`);
}

function* loadUserPosts(action) {
  try {
    const result = yield Object(effects_["call"])(loadUserPostsAPI, action.data, action.lastId);
    console.log('saga loadUserPosts 실행 ::: ', action.data, action.lastId);
    yield Object(effects_["put"])({
      type: post["u" /* LOAD_USER_POSTS_SUCCESS */],
      data: result.data
    });
    console.log('saga loadPostsSuccess 성공::: ', result);
  } catch (err) {
    console.error('saga loadUserPosts error ::: ', err);
    yield Object(effects_["put"])({
      type: post["s" /* LOAD_USER_POSTS_FAILURE */],
      error: err.response.data
    });
  }
}

function loadHashtagPostsAPI(data, lastId) {
  // 인자를 두 개 넘겨줄수도 있다
  // 한글or특수문자 들어가면 error, encode 로 감싸주자
  return external_axios_default.a.get(`/hashtag/${encodeURIComponent(data)}?lastId=${lastId || 0}`);
}

function* loadHashtagPosts(action) {
  try {
    console.log(`loadHashtagPosts log :::`);
    const result = yield Object(effects_["call"])(loadHashtagPostsAPI, action.data, action.lastId);
    console.log('saga loadHashtagPosts 요청 ::: ', action.data, action.lastId);
    yield Object(effects_["put"])({
      type: post["l" /* LOAD_HASHTAG_POSTS_SUCCESS */],
      data: result.data
    });
    console.log('saga loadHashtagPosts 성공 ::: ');
  } catch (err) {
    console.error('saga loadHashtagPosts error ::: ', err);
    yield Object(effects_["put"])({
      type: post["j" /* LOAD_HASHTAG_POSTS_FAILURE */],
      error: err.response.data
    });
  }
}

function* watchLoadUserPosts() {
  yield Object(effects_["throttle"])(5000, post["t" /* LOAD_USER_POSTS_REQUEST */], loadUserPosts);
}

function* watchLoadHashtagPosts() {
  yield Object(effects_["throttle"])(5000, post["k" /* LOAD_HASHTAG_POSTS_REQUEST */], loadHashtagPosts);
}

function* watchLoadPost() {
  yield Object(effects_["takeLatest"])(post["q" /* LOAD_POST_REQUEST */], loadPost);
}

function* watchRetweet() {
  yield Object(effects_["takeLatest"])(post["A" /* RETWEET_REQUEST */], retweet);
}

function* watchUploadImages() {
  yield Object(effects_["takeLatest"])(post["G" /* UPLOAD_IMAGES_REQUEST */], uploadImages);
}

function* watchLikePost() {
  yield Object(effects_["takeLatest"])(post["h" /* LIKE_POST_REQUEST */], likePost);
}

function* watchUnlikePost() {
  yield Object(effects_["takeLatest"])(post["D" /* UNLIKE_POST_REQUEST */], unlikePost);
}

function* watchLoadPosts() {
  yield Object(effects_["throttle"])(5000, post["n" /* LOAD_POSTS_REQUEST */], loadPosts);
}

function* watchAddPost() {
  yield Object(effects_["takeLatest"])(post["e" /* ADD_POST_REQUEST */], addPost);
}

function* watchRemovePost() {
  yield Object(effects_["takeLatest"])(post["x" /* REMOVE_POST_REQUEST */], removePost);
}

function* watchAddComment() {
  yield Object(effects_["takeLatest"])(post["b" /* ADD_COMMENT_REQUEST */], addComment);
}

function* postSaga() {
  yield Object(effects_["all"])([Object(effects_["fork"])(watchLoadPost), Object(effects_["fork"])(watchRetweet), Object(effects_["fork"])(watchUploadImages), Object(effects_["fork"])(watchLikePost), Object(effects_["fork"])(watchUnlikePost), Object(effects_["fork"])(watchLoadUserPosts), Object(effects_["fork"])(watchLoadHashtagPosts), Object(effects_["fork"])(watchLoadPosts), Object(effects_["fork"])(watchAddPost), Object(effects_["fork"])(watchRemovePost), Object(effects_["fork"])(watchAddComment)]);
}
// CONCATENATED MODULE: ./sagas/user.js




function logInAPI(data) {
  // generator 아님
  //return axios.post('/api/login', data) // 실제 서버에 로그인 요청을 보냄 // front
  // 실제 서버에 로그인 요청을 보냄 // back
  //return axios.post('http://localhost:3065/user/login', data)
  // localhost 중복 없애기
  return external_axios_default.a.post('/user/login', data);
} // 테스트 코드
// const l = logIn({type: 'LOG_IN_REQUEST', data: {id: 'rlaalsdn8@naver.com'}})
// 		l.next();
// 		l.next();
/////////////////


function* logIn(action) {
  // login action request 가 action 에 전달
  try {
    // 요청 실패 대비
    //yield delay(1000) // front
    const result = yield Object(effects_["call"])(logInAPI, action.data); // 서버에서 받은 결과 값을 받음

    console.log('saga logIn 실행중::', action.data);
    yield Object(effects_["put"])({
      type: user["v" /* LOG_IN_SUCCESS */],
      //data: action.data, // front
      data: result.data // (성공 결과 담김) back

    });
    console.log('saga logIn 완료 ::', result);
  } catch (err) {
    console.error('logIn', err);
    yield Object(effects_["put"])({
      // put 은 dispatch 라고 생각하자
      type: user["t" /* LOG_IN_FAILURE */],
      error: err.response.data // (실패 결과 담김)

    });
  }
}

function logOutAPI() {
  // return axios.post('/api/logout') front
  return external_axios_default.a.post('/user/logout');
}

function* logOut() {
  try {
    // 요청 실패 대비
    //yield delay(1000) front
    yield Object(effects_["call"])(logOutAPI); // 서버에서 받은 결과 값을 받음 back

    console.log('sagas:: logout 실행');
    yield Object(effects_["put"])({
      type: user["y" /* LOG_OUT_SUCCESS */]
    });
    console.log('sagas:: logout 완료');
  } catch (err) {
    console.error('front logOut : ', err);
    yield Object(effects_["put"])({
      // put 은 dispatch 라고 생각하자
      type: user["w" /* LOG_OUT_FAILURE */],
      error: err.response.data // (실패 결과 담김)

    });
  }
}

function changeNicknameAPI(data) {
  // generator 아님
  // 실제 서버에 로그인 요청을 보냄 // back
  //return axios.post('http://localhost:3065/user/login', data)
  // localhost 중복 없애기
  return external_axios_default.a.patch('/user/nickname', {
    nickname: data
  });
}

function* changeNickname(action) {
  // login action request 가 action 에 전달
  try {
    // 요청 실패 대비
    //yield delay(1000) // front
    const result = yield Object(effects_["call"])(changeNicknameAPI, action.data); // 서버에서 받은 결과 값을 받음

    console.log('saga changeNickname 실행중::', action.data);
    yield Object(effects_["put"])({
      type: user["d" /* CHANGE_NICKNAME_SUCCESS */],
      //data: action.data, // front
      data: result.data // (성공 결과 담김) back

    });
    console.log('saga changeNickname 완료 ::', result);
  } catch (err) {
    console.error('changeNickname', err);
    yield Object(effects_["put"])({
      // put 은 dispatch 라고 생각하자
      type: user["b" /* CHANGE_NICKNAME_FAILURE */],
      error: err.response.data // (실패 결과 담김)

    });
  }
}

function loadMyInfoAPI(userId) {
  // 서버에 요청을 보내는 부분
  return external_axios_default.a.get(userId ? `/user/${userId}` : '/user/', {
    withCredentials: true // 클라이언트에서 요청 보낼 때는 브라우저가 쿠키를 같이 동봉해줘요

  }); // 서버사이드렌더링일 때는, 브라우저가 없어요.
}

function* loadMyInfo(action) {
  try {
    const result = yield Object(effects_["call"])(loadMyInfoAPI, action.data);
    console.log('saga loadMyInfo 실행 :: ', action.data);
    yield Object(effects_["put"])({
      type: user["p" /* LOAD_MY_INFO_SUCCESS */],
      data: result.data,
      me: !action.data
    });
    console.log('saga loadMyInfo 성공:: ', result);
  } catch (err) {
    console.error('saga loadMyInfo error :: ', err);
    yield Object(effects_["put"])({
      type: user["n" /* LOAD_MY_INFO_FAILURE */],
      error: err.response.data
    });
  }
}

function followAPI(data) {
  // data 에 사용자 id 넣어주기
  // return axios.post('/api/follow', data) front
  return external_axios_default.a.patch(`/user/${data}/follow`);
}

function* follow(action) {
  try {
    //yield delay(1000) front
    const result = yield Object(effects_["call"])(followAPI, action.data);
    console.log('saga follow 실행 : ', result);
    yield Object(effects_["put"])({
      type: user["g" /* FOLLOW_SUCCESS */],
      //data: action.data front
      data: result.data
    });
    console.log('saga follow 완료 :: ', result);
  } catch (err) {
    console.error('saga follow error :: ', err);
    yield Object(effects_["put"])({
      type: user["e" /* FOLLOW_FAILURE */],
      error: err.response.data
    });
  }
}

function unfollowAPI(data) {
  // data 에 사용자 id 넣어주기
  //return axios.post('/api/unfollow', data) front
  return external_axios_default.a.delete(`/user/${data}/follow`);
}

function* unfollow(action) {
  try {
    const result = yield Object(effects_["call"])(unfollowAPI, action.data); //yield delay(1000) front

    console.log('saga unfollow 요청 :: ', action.data);
    yield Object(effects_["put"])({
      type: user["I" /* UNFOLLOW_SUCCESS */],
      //data: action.data front
      data: result.data
    });
    console.log('saga unfollow 성공:: ', result);
  } catch (err) {
    console.error('saga unfollow error:: ', err);
    yield Object(effects_["put"])({
      type: user["G" /* UNFOLLOW_FAILURE */],
      error: err.response.data
    });
  }
}

function signUpAPI(data) {
  // back end server addr
  // data 는 email, nickname, password object
  //return axios.post('/api/signup', data) // front
  return external_axios_default.a.post('/user', data); // back
}

function* signUp(action) {
  try {
    //yield delay(1000)
    const result = yield Object(effects_["call"])(signUpAPI, action.data);
    console.log('saga sign up result 실행중 :: ', action.data);
    yield Object(effects_["put"])({
      type: user["F" /* SIGN_UP_SUCCESS */] //data: result.data

    });
    console.log('saga sign up 완료 :: ', result);
  } catch (err) {
    console.error('saga signUp error : ', err);
    yield Object(effects_["put"])({
      type: user["D" /* SIGN_UP_FAILURE */],
      error: err.response.data
    });
  }
}

function loadFollowersAPI(data) {
  return external_axios_default.a.get('/user/followers', data);
}

function* loadFollowers(action) {
  try {
    const result = yield Object(effects_["call"])(loadFollowersAPI, action.data);
    console.log('saga followers:: 요청', action.data);
    yield Object(effects_["put"])({
      type: user["j" /* LOAD_FOLLOWERS_SUCCESS */],
      data: result.data
    });
    console.log('saga followers:: 성공', result);
  } catch (err) {
    console.error('saga followers::', err);
    yield Object(effects_["put"])({
      type: user["h" /* LOAD_FOLLOWERS_FAILURE */],
      error: err.response.data
    });
  }
}

function loadFollowingsAPI(data) {
  return external_axios_default.a.get('/user/followings', data);
}

function* loadFollowings(action) {
  try {
    const result = yield Object(effects_["call"])(loadFollowingsAPI, action.data);
    console.log('saga followings 요청::', action.data);
    yield Object(effects_["put"])({
      type: user["m" /* LOAD_FOLLOWINGS_SUCCESS */],
      data: result.data
    });
    console.log('saga followings 성공::', result);
  } catch (err) {
    console.error('saga followings 실패::', err);
    yield Object(effects_["put"])({
      type: user["k" /* LOAD_FOLLOWINGS_FAILURE */],
      error: err.response.data
    });
  }
}

function removeFollowerAPI(data) {
  return external_axios_default.a.delete(`/user/follower/${data}`); // 몇번째의 팔로워를 제거한다
}

function* removeFollower(action) {
  try {
    const result = yield Object(effects_["call"])(removeFollowerAPI, action.data);
    console.log('saga removeFollower 요청:: ', action.data);
    yield Object(effects_["put"])({
      type: user["B" /* REMOVE_FOLLOWER_SUCCESS */],
      data: result.data
    });
    console.log('saga removeFollower 성공:: ', result);
  } catch (err) {
    console.error('saga removeFollower 실패:: ', err);
    yield Object(effects_["put"])({
      type: user["z" /* REMOVE_FOLLOWER_FAILURE */],
      error: err.response.data
    });
  }
}

function loadUserAPI(data) {
  return external_axios_default.a.get(`/user/${data}`);
}

function* loadUser(action) {
  try {
    const result = yield Object(effects_["call"])(loadUserAPI, action.data);
    console.log('saga loadUser 실행 :: ', action.data);
    yield Object(effects_["put"])({
      type: user["s" /* LOAD_USER_SUCCESS */],
      data: result.data
    });
    console.log('saga loadUser 성공 :: ', result);
  } catch (err) {
    console.error('saga loadUser Failure 실패 :: ', err);
    yield Object(effects_["put"])({
      type: user["q" /* LOAD_USER_FAILURE */],
      error: err.response.data
    });
  }
}

function* watchLoadUser() {
  yield Object(effects_["takeLatest"])(user["r" /* LOAD_USER_REQUEST */], loadUser);
}

function* watchRemoveFollower() {
  yield Object(effects_["takeLatest"])(user["A" /* REMOVE_FOLLOWER_REQUEST */], removeFollower);
}

function* watchLoadFollowers() {
  yield Object(effects_["takeLatest"])(user["i" /* LOAD_FOLLOWERS_REQUEST */], loadFollowers);
}

function* watchLoadFollowings() {
  yield Object(effects_["takeLatest"])(user["l" /* LOAD_FOLLOWINGS_REQUEST */], loadFollowings);
}

function* watchChangeNickname() {
  yield Object(effects_["takeLatest"])(user["c" /* CHANGE_NICKNAME_REQUEST */], changeNickname);
}

function* watchLoadMyInfo() {
  yield Object(effects_["takeLatest"])(user["o" /* LOAD_MY_INFO_REQUEST */], loadMyInfo);
}

function* watchFollow() {
  yield Object(effects_["takeLatest"])(user["f" /* FOLLOW_REQUEST */], follow);
}

function* watchUnFollow() {
  yield Object(effects_["takeLatest"])(user["H" /* UNFOLLOW_REQUEST */], unfollow);
}

function* watchLogIn() {
  // 로그인 액션이 실행될때까지 기다리겠다는 뜻
  yield Object(effects_["takeLatest"])(user["u" /* LOG_IN_REQUEST */], logIn); //LOG_IN_REQUEST 액션이 실행되면 logIn 함수 실행
}

function* watchLogOut() {
  // 로그아웃 액션이 실행될때까지 기다리겠다는 뜻
  yield Object(effects_["takeLatest"])(user["x" /* LOG_OUT_REQUEST */], logOut); //LOG_OUT_REQUEST 액션이 실행되면 logIn 함수 실행
}

function* watchSignUp() {
  // 회원가입 액션이 실행될때까지 기다리겠다는 뜻
  yield Object(effects_["takeLatest"])(user["E" /* SIGN_UP_REQUEST */], signUp); // SIGN_UP_REQUEST 액션이 실행되면 logIn 함수 실행
}

function* userSaga() {
  yield Object(effects_["all"])([Object(effects_["fork"])(watchLoadUser), Object(effects_["fork"])(watchRemoveFollower), Object(effects_["fork"])(watchLoadFollowers), Object(effects_["fork"])(watchLoadFollowings), Object(effects_["fork"])(watchChangeNickname), Object(effects_["fork"])(watchLoadMyInfo), Object(effects_["fork"])(watchFollow), Object(effects_["fork"])(watchUnFollow), Object(effects_["fork"])(watchLogIn), Object(effects_["fork"])(watchLogOut), Object(effects_["fork"])(watchSignUp)]);
}
// CONCATENATED MODULE: ./sagas/index.js




external_axios_default.a.defaults.baseURL = 'http://localhost:3065';
external_axios_default.a.defaults.withCredentials = true;
function* rootSaga() {
  yield Object(effects_["all"])([// ALL 배열안에 한방에 실행해줌
  Object(effects_["fork"])(postSaga), // fork 는 (함수)실행
  Object(effects_["fork"])(userSaga) // call 이랑은 다르다.
  ]);
}
// CONCATENATED MODULE: ./store/configureStore.js


 //import thunkMiddleware from 'redux-thunk'



 // const loggerMiddleware = ({ dispatch, getState}) => (next) => (action) => {
//   console.log(action) // 미들웨어를 활용해 리덕스 데브툴즈 처럼 액션 로그 찍히게 하기
//   return next(action)
// }

const configureStore = context => {
  console.log('configureStore context :: ', context);
  const sagaMiddleware = external_redux_saga_default()(); // saga 설정 방법

  const middlewares = [sagaMiddleware];
  const enhancer = true ? Object(external_redux_["compose"])(Object(external_redux_["applyMiddleware"])(...middlewares)) : undefined;
  const store = Object(external_redux_["createStore"])(reducers, enhancer);
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

const wrapper = Object(external_next_redux_wrapper_["createWrapper"])(configureStore, // 옵션객체 디버그가 트루이면 리덕스에관해서 자세한 설명이나오기때문에 개발할땐 true 로 놓자
{
  debug: false
});
/* harmony default export */ var store_configureStore = __webpack_exports__["a"] = (wrapper);

/***/ }),

/***/ "JMOJ":
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "LAVF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return LOAD_USER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return LOAD_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return LOAD_USER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return LOAD_MY_INFO_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return LOAD_MY_INFO_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return LOAD_MY_INFO_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return REMOVE_FOLLOWER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return REMOVE_FOLLOWER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return REMOVE_FOLLOWER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return LOG_IN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return LOG_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return LOG_IN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return LOG_OUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return LOG_OUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return LOG_OUT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return SIGN_UP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return SIGN_UP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return SIGN_UP_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CHANGE_NICKNAME_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return CHANGE_NICKNAME_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CHANGE_NICKNAME_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return FOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return FOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return FOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return UNFOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return UNFOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return UNFOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return LOAD_FOLLOWERS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return LOAD_FOLLOWERS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return LOAD_FOLLOWERS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return LOAD_FOLLOWINGS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return LOAD_FOLLOWINGS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return LOAD_FOLLOWINGS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_POST_TO_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return REMOVE_POST_OF_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return loginRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return logoutRequestAction; });
/* harmony import */ var _util_produce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ionj");
//import produce from 'immer'
 // ie11 지원하기위해 따로 produce 함수 만듬

const initialState = {
  loadUserLoading: false,
  // 상대 정보 보기 시도중일땐 로딩중 띄울거임
  loadUserDone: false,
  // 상대 정보 보기 됨
  loadUserError: null,
  // 상대 정보 보기중일때 에러 없앰
  loadMyInfoLoading: false,
  // 유저 정보 보기 시도중일땐 로딩중 띄울거임
  loadMyInfoDone: false,
  // 유저 정보 보기 됨
  loadMyInfoError: null,
  // 유저 정보 보기중일때 에러 없앰
  removeFollowerLoading: false,
  // 팔로워 유저 삭제 시도중일땐 로딩중 띄울거임
  removeFollowerDone: false,
  // 팔로워 유저 삭제 됨
  removeFollowerError: null,
  // 팔로워 유저 삭제 중일때 에러 없앰
  followLoading: false,
  // 팔로우 시도중일땐 로딩중 띄울거임
  followDone: false,
  // 팔로우 됨
  followError: null,
  // 팔로우중일때 에러 없앰
  unfollowLoading: false,
  // 언팔로우 시도중일땐 로딩중 띄울거임
  unfollowDone: false,
  // 언팔로우 됨
  unfollowError: null,
  // 언팔로우중일때 에러 없앰
  loadFollowersLoading: false,
  // 팔로워 시도중일땐 로딩중 띄울거임
  loadFollowersDone: false,
  // 팔로워 됨
  loadFollowersError: null,
  // 팔로워일때 에러 없앰
  loadFollowingsLoading: false,
  // 팔로윙 시도중일땐 로딩중 띄울거임
  loadFollowingsDone: false,
  // 팔로윙 됨
  loadFollowingsError: null,
  // 팔로윙 중일때 에러 없앰
  logInLoading: false,
  // 로그인 시도중일땐 로딩중 띄울거임
  logInDone: false,
  // 로그인 됨
  logInError: null,
  // 로딩중일때 에러 없앰
  logOutLoading: false,
  // 로그아웃 시도중
  logOutDone: false,
  // 로그아웃 완료
  logOutError: null,
  signUpLoading: false,
  // 회원가입 로딩중
  signUpDone: false,
  // 회원 가입 완료
  signUpError: null,
  changeNicknameLoading: false,
  // 닉네임 변경 로딩중
  changeNicknameDone: false,
  // 닉네임 변경 완료
  changeNicknameError: null,
  me: null,
  signUpData: {},
  // 회원 가입 데이터
  loginData: {},
  userInfo: null
}; // 로그인 액션 생성기 thunk
// export const loginAction = (data) => { // 함수를 리턴하는 비동기 액션 크리에이터가 추가
// 	return (dispatch, getState) => {
// 		const state = getState()
// 		dispatch(loginRequestAction())
// 		axios.post('/api/login')
// 				.then((res) => {
// 					dispatch(loginSuccessAction(res.data))
// 				})
// 				.catch((error) => {
// 					dispatch(loginFailureAction(error))
// 				})
// 	}
// }
// actions

const LOAD_USER_REQUEST = 'LOAD_USER_REQUEST';
const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
const LOAD_USER_FAILURE = 'LOAD_USER_FAILURE';
const LOAD_MY_INFO_REQUEST = 'LOAD_MY_INFO_REQUEST';
const LOAD_MY_INFO_SUCCESS = 'LOAD_MY_INFO_SUCCESS';
const LOAD_MY_INFO_FAILURE = 'LOAD_MY_INFO_FAILURE';
const REMOVE_FOLLOWER_REQUEST = 'REMOVE_FOLLOWER_REQUEST';
const REMOVE_FOLLOWER_SUCCESS = 'REMOVE_FOLLOWER_SUCCESS';
const REMOVE_FOLLOWER_FAILURE = 'REMOVE_FOLLOWER_FAILURE';
const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
const LOG_IN_FAILURE = 'LOG_IN_FAILURE';
const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';
const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
const CHANGE_NICKNAME_REQUEST = 'CHANGE_NICKNAME_REQUEST';
const CHANGE_NICKNAME_SUCCESS = 'CHANGE_NICKNAME_SUCCESS';
const CHANGE_NICKNAME_FAILURE = 'CHANGE_NICKNAME_FAILURE';
const FOLLOW_REQUEST = 'FOLLOW_REQUEST';
const FOLLOW_SUCCESS = 'FOLLOW_SUCCESS';
const FOLLOW_FAILURE = 'FOLLOW_FAILURE';
const UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST';
const UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS';
const UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE';
const LOAD_FOLLOWERS_REQUEST = 'LOAD_FOLLOWERS_REQUEST';
const LOAD_FOLLOWERS_SUCCESS = 'LOAD_FOLLOWERS_SUCCESS';
const LOAD_FOLLOWERS_FAILURE = 'LOAD_FOLLOWERS_FAILURE';
const LOAD_FOLLOWINGS_REQUEST = 'LOAD_FOLLOWINGS_REQUEST';
const LOAD_FOLLOWINGS_SUCCESS = 'LOAD_FOLLOWINGS_SUCCESS';
const LOAD_FOLLOWINGS_FAILURE = 'LOAD_FOLLOWINGS_FAILURE'; // 유저 리듀서의 상태를 바꿀수있는 액션 생성

const ADD_POST_TO_ME = 'ADD_POST_TO_ME';
const REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME';
/* front
const dummyUser = (data) => ({
	...data,
	nickname: '비타민',
	id: 1,
	Posts: [{id: 1}],
	Followings: [{nickname: '외노'}, {nickname: '음메'}, {nickname: '썽'}, {nickname: '오댕'}, {nickname: '만뽀'}],
	Followers: [{nickname: '까매'}, {nickname: '만두'}, {nickname: '보챙'}, {nickname: '뒷가'}, {nickname: '야덩'}],
})*/

const loginRequestAction = data => ({
  type: LOG_IN_REQUEST,
  data
}); // 로그아웃 액션 생성기 thunk
// export const logoutAction = (data) => {
// 	return (dispatch) => {
// 		axios.post('/api/logout')
// 				.then(() => {
// 					dispatch(logoutSuccessAction())
// 				})
// 				.catch(() => {
// 					dispatch(logoutFailureAction())
// 				})
// 	}
// }

const logoutRequestAction = () => ({
  type: LOG_OUT_REQUEST
});

const reducer = (state = initialState, action) => Object(_util_produce__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(state, draft => {
  switch (action.type) {
    case LOAD_USER_REQUEST:
      // store 에서 보낸 state 가 만들어짐, state 자체가 user.js 의 state 임
      draft.loadUserLoading = true;
      draft.loadUserDone = false;
      draft.loadUserError = null; // 로딩 중일때는 에러 없앰

      console.log('reducer myInfo 요청');
      break;

    case LOAD_USER_SUCCESS:
      draft.userInfo = action.data; // back 상대 정보가 들어있음

      draft.loadUserLoading = false;
      draft.loadUserDone = true; //draft.me = dummyUser(action.data)

      console.log('reducer myInfo 성공');
      break;

    case LOAD_USER_FAILURE:
      console.error('loadUserFail 실패:: ' + action.error);
      draft.loadUserLoading = false;
      draft.loadUserError = action.error;
      break;

    case LOAD_MY_INFO_REQUEST:
      // store 에서 보낸 state 가 만들어짐, state 자체가 user.js 의 state 임
      draft.loadMyInfoLoading = true;
      draft.loadMyInfoDone = false;
      draft.loadMyInfoError = null; // 로딩 중일때는 에러 없앰

      console.log('reducer myInfo 요청');
      break;

    case LOAD_MY_INFO_SUCCESS:
      draft.me = action.data; // back 내 정보가 들어있음

      draft.loadMyInfoLoading = false;
      draft.loadMyInfoDone = true; //draft.me = dummyUser(action.data)

      console.log('reducer myInfo 성공');
      break;

    case LOAD_MY_INFO_FAILURE:
      console.error('loadMyInfoFail 실패:: ' + action.error);
      draft.loadMyInfoLoading = false;
      draft.loadMyInfoError = action.error;
      break;

    case REMOVE_FOLLOWER_REQUEST:
      draft.removeFollowerLoading = true;
      draft.removeFollowerDone = false;
      draft.removeFollowerError = null;
      console.log('reducer removeFollower 요청');
      break;

    case REMOVE_FOLLOWER_SUCCESS:
      // 나의 팔로워 제거
      draft.me.Followers = draft.me.Followers.filter(v => v.id !== action.data.UserId);
      draft.removeFollowerLoading = false;
      draft.removeFollowerDone = true;
      console.log('reducer removeFollower 성공');
      break;

    case REMOVE_FOLLOWER_FAILURE:
      console.error('removeFollowerFail 실패:: ' + action.error);
      draft.removeFollowerLoading = false;
      draft.removeFollowerError = action.error;

    case FOLLOW_REQUEST:
      // store 에서 보낸 state 가 만들어짐, state 자체가 user.js 의 state 임
      draft.followLoading = true;
      draft.followError = null; // 로딩 중일때는 에러 없앰

      draft.followDone = false;
      console.log('reducer FOLLOW_REQUEST 요청');
      break;

    case FOLLOW_SUCCESS:
      draft.followLoading = false;
      draft.followDone = true; //draft.me = dummyUser(action.data)

      draft.me.Followings.push({
        id: action.data.UserId
      });
      console.log('reducer FOLLOW_SUCCESS 성공');
      break;

    case FOLLOW_FAILURE:
      draft.followLoading = false;
      draft.followError = action.error;
      console.error('reducer FOLLOW_FAILURE 실패::', action.error);
      break;

    case UNFOLLOW_REQUEST:
      // store 에서 보낸 state 가 만들어짐, state 자체가 user.js 의 state 임
      draft.unfollowLoading = true;
      draft.unfollowError = null; // 로딩 중일때는 에러 없앰

      draft.unfollowDone = false;
      console.log('reducer unfollow 요청');
      break;

    case UNFOLLOW_SUCCESS:
      draft.unfollowLoading = false;
      draft.unfollowDone = true; //draft.me = dummyUser(action.data)
      // 언팔로우 한 사람만 빠지게

      draft.me.Followings = draft.me.Followings.filter(v => v.id !== action.data.UserId);
      console.log('reducer unfollow 성공');
      break;

    case UNFOLLOW_FAILURE:
      draft.unfollowLoading = false;
      draft.unfollowError = action.error;
      console.error('reducer unfollow 실패::', action.error);
      break;

    case LOG_IN_REQUEST:
      draft.logInLoading = true;
      draft.logInError = null;
      draft.logInDone = false;
      console.log('reducer login 요청');
      break;

    case LOG_IN_SUCCESS:
      draft.logInLoading = false;
      draft.logInDone = true; //draft.me = dummyUser(action.data) front

      draft.me = action.data; // back

      console.log('reducer login 성공');
      break;

    case LOG_IN_FAILURE:
      draft.logInLoading = false;
      draft.logInError = action.error;
      console.error('reducer login 실패:: ', action.error);
      break;

    case LOG_OUT_REQUEST:
      draft.logOutLoading = true;
      draft.logOutDone = false;
      draft.logOutError = null;
      console.log('reducer logout 요청');
      break;

    case LOG_OUT_SUCCESS:
      draft.logOutLoading = false;
      draft.logOutDone = true;
      draft.me = null;
      console.log('reducer logout 성공');
      break;

    case LOG_OUT_FAILURE:
      draft.logOutLoading = false;
      draft.logOutError = action.error;
      console.error('reducer logout 실패', action.error);
      break;

    case SIGN_UP_REQUEST:
      draft.signUpLoading = true;
      draft.signUpDone = false;
      draft.signUpError = null;
      console.log('reducer signup 요청');
      break;

    case SIGN_UP_SUCCESS:
      draft.signUpLoading = false;
      draft.signUpDone = true;
      console.log('reducer signUp 성공');
      break;

    case SIGN_UP_FAILURE:
      draft.signUpLoading = false;
      draft.signUpError = action.error;
      console.error('reducer signUp 실패', action.error);
      break;

    case CHANGE_NICKNAME_REQUEST:
      draft.changeNicknameLoading = true;
      draft.changeNicknameDone = false;
      draft.changeNicknameError = null;
      console.log('reducer CHANGE_NICKNAME_REQUEST 요청');
      break;

    case CHANGE_NICKNAME_SUCCESS:
      draft.changeNicknameLoading = false;
      draft.changeNicknameDone = true;
      console.log('reducer CHANGE_NICKNAME_SUCCESS 성공');
      break;

    case CHANGE_NICKNAME_FAILURE:
      draft.changeNicknameLoading = false;
      draft.changeNicknameError = action.error;
      console.error('reducer CHANGE_NICKNAME 실패', action.error);
      break;

    case LOAD_FOLLOWERS_REQUEST:
      draft.loadFollowersLoading = true;
      draft.loadFollowersDone = false;
      draft.loadFollowersError = null;
      console.log('reducer LOAD_FOLLOWERS_REQUEST 요청');
      break;

    case LOAD_FOLLOWERS_SUCCESS:
      draft.loadFollowersLoading = false;
      draft.loadFollowersDone = true;
      draft.me.Followers = action.data;
      console.log('reducer LOAD_FOLLOWERS_SUCCESS 성공');
      break;

    case LOAD_FOLLOWERS_FAILURE:
      draft.loadFollowersLoading = false;
      draft.loadFollowersError = action.error;
      console.error('reducer LOAD_FOLLOWERS 실패', action.error);
      break;

    case LOAD_FOLLOWINGS_REQUEST:
      draft.loadFollowingsLoading = true;
      draft.loadFollowingsDone = false;
      draft.loadFollowingsError = null;
      console.log('reducer LOAD_FOLLOWINGS_REQUEST 요청');
      break;

    case LOAD_FOLLOWINGS_SUCCESS:
      draft.loadFollowingsLoading = false;
      draft.loadFollowingsDone = true;
      draft.me.Followings = action.data;
      console.log('reducer LOAD_FOLLOWINGS_SUCCESS 성공');
      break;

    case LOAD_FOLLOWINGS_FAILURE:
      draft.loadFollowingsLoading = false;
      draft.loadFollowingsError = action.error;
      console.error('reducer LOAD_FOLLOWINGS 실패', action.error);
      break;

    case ADD_POST_TO_ME:
      // 게시글을 쓰면 게시글 아이디가 여기로 들어와서 하나가 추가된다
      draft.me.Posts.unshift({
        id: action.data
      });
      console.log('ADD_POST_TO_ME 성공');
      break;
    // return {
    // 	...state,
    // 	me: {
    // 		...state.me,
    // 		Posts: [{id: action.data}, ...state.me.Posts],
    // 	}
    // }

    case REMOVE_POST_OF_ME:
      draft.me.Posts = draft.me.Posts.filter(v => v.id !== action.data);
      console.log('REMOVE_POST_OF_ME');
      break;
    // return { // 불변성을 지키며 게시글을 지워야한다.
    // 	...state,
    // 	me: {
    // 		...state.me,
    // 		Posts: state.me.Posts.filter((v) => v.id !== action.data)
    // 	}
    // }

    default:
      break;
  }
});

/* harmony default export */ __webpack_exports__["J"] = (reducer);

/***/ }),

/***/ "RmXt":
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "T5ka":
/***/ (function(module, exports) {

module.exports = require("immer");

/***/ }),

/***/ "TpwP":
/***/ (function(module, exports) {



/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "ionj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("T5ka");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["a"] = ((...args) => {
  // 프로듀스 함수 확장
  Object(immer__WEBPACK_IMPORTED_MODULE_0__["enableES5"])();
  return immer__WEBPACK_IMPORTED_MODULE_0___default()(...args);
});

/***/ }),

/***/ "p+NB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return LOAD_HASHTAG_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return LOAD_HASHTAG_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return LOAD_HASHTAG_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return LOAD_USER_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return LOAD_USER_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return LOAD_USER_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return LOAD_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return LOAD_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return LOAD_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return LOAD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return LOAD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return LOAD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ADD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return LIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return LIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return LIKE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return UPLOAD_IMAGES_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return UPLOAD_IMAGES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return UPLOAD_IMAGES_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return UNLIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return UNLIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return UNLIKE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return REMOVE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return REMOVE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return REMOVE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ADD_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ADD_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return RETWEET_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return RETWEET_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return RETWEET_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return REMOVE_IMAGE; });
/* unused harmony export addPost */
/* unused harmony export addComment */
/* harmony import */ var _util_produce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ionj");
//import shortId from 'shortid' front
//import produce from 'immer'
 // ie11 지원하기위해 따로 produce 함수 만듬
//import faker from 'faker' front

const initialState = {
  mainPosts: [],
  // 게시물 여러개
  singlePost: null,
  // 게시물 하나만
  imagePaths: [],
  // 이미지 경로들이 저장됨
  hasMorePosts: true,
  // 더 많은 게시물 가져오기
  likePostLoading: false,
  // 라이크 로드중 로딩
  likePostDone: false,
  // 라이크 완료했을때 true 변환
  likePostError: null,
  retweetLoading: false,
  // 리트윗 로드중 로딩
  retweetDone: false,
  // 리트윗 완료중 로딩
  retweetError: null,
  unlikePostLoading: false,
  // 언라이크 로드 중 로딩
  unlikePostDone: false,
  // 언라이크 완료했을때 true 변환
  unlikePostError: null,
  uploadImagesLoading: false,
  // 이미지 로드 중 로딩
  uploadImagesDone: false,
  // 이미지 로드 완료했을때 true 변환
  uploadImagesError: null,

  /*loadUserPostsLoading: false, // 특정 사용자 게시글 로드중 로딩
  loadUserPostsDone: false, // 특정 사용자 게시글 로드 완료시 true 변환
  loadUserPostsError: null,*/
  loadPostsLoading: false,
  // 화면 로드중 로딩
  loadPostsDone: false,
  // 화면 로드 완료되었을때 true 변환
  loadPostsError: null,
  loadPostLoading: false,
  // 게시글 로드중 로딩
  loadPostDone: false,
  // 게시글 로드 완료되었을때 true 변환
  loadPostError: null,

  /*loadHashtagPostsLoading: false, // 해쉬태그 게시글들 로드중 로딩
  loadHashtagPostsDone: false, // 해쉬태그 게시글 로드 완료되었을때 true 변환
  loadHashtagPostsError: null,*/
  addPostLoading: false,
  // 게시물 등록중 로딩
  addPostDone: false,
  // 게시물 추가가 완료되었을때 true 변환
  addPostError: null,
  removePostLoading: false,
  // 게시물 삭제중 로딩
  removePostDone: false,
  // 게시물 삭제가 완료되었을때 true 변환
  removePostError: null,
  addCommentLoading: false,
  // 댓글 등록중 로딩
  addCommentDone: false,
  // 게시물 추가가 완료되었을때 true 변환
  addCommentError: null
}; // 이부분을 사용해서 무한 스크롤링을 만들것 front

/*export const generateDummyPost = (number) => Array(number).fill().map(() => ({
	id: shortId.generate(),
	User: {
		id: shortId.generate(),
		nickname: faker.name.findName(),
	},
	content: faker.lorem.paragraph(),
	Images: [{
		src: faker.image.image(),
	}],
	Comments: [{
		User: {
			id: shortId.generate(),
			nickname: faker.name.findName(),
		},
		content: faker.lorem.sentence(),
	}],
}))*/
//게시글 액션

const LOAD_HASHTAG_POSTS_REQUEST = 'LOAD_HASHTAG_POSTS_REQUEST';
const LOAD_HASHTAG_POSTS_SUCCESS = 'LOAD_HASHTAG_POSTS_SUCCESS';
const LOAD_HASHTAG_POSTS_FAILURE = 'LOAD_HASHTAG_POSTS_FAILURE';
const LOAD_USER_POSTS_REQUEST = 'LOAD_USER_POSTS_REQUEST'; // 특정 사용자의 게시글을 로딩하면 바로 LOAD_POSTS_REQUEST 를 호출해줄것

const LOAD_USER_POSTS_SUCCESS = 'LOAD_USER_POSTS_SUCCESS';
const LOAD_USER_POSTS_FAILURE = 'LOAD_USER_POSTS_FAILURE';
const LOAD_POSTS_REQUEST = ' LOAD_POSTS_REQUEST'; // 화면을 로딩하면 바로 LOAD_POSTS_REQUEST 를 호출해줄것

const LOAD_POSTS_SUCCESS = ' LOAD_POSTS_SUCCESS';
const LOAD_POSTS_FAILURE = ' LOAD_POSTS_FAILURE';
const LOAD_POST_REQUEST = 'LOAD_POST_REQUEST'; // 게시물을 로딩하면 바로 LOAD_POST_REQUEST 를 호출해줄것

const LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS';
const LOAD_POST_FAILURE = 'LOAD_POST_FAILURE';
const ADD_POST_REQUEST = 'ADD_POST_REQUEST'; // 변수로 따로 만들어줘야 중간에 오타가나는 일을 막을 수 있다

const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
const ADD_POST_FAILURE = 'ADD_POST_FAILURE';
const LIKE_POST_REQUEST = 'LIKE_POST_REQUEST';
const LIKE_POST_SUCCESS = 'LIKE_POST_SUCCESS';
const LIKE_POST_FAILURE = 'LIKE_POST_FAILURE';
const UPLOAD_IMAGES_REQUEST = 'UPLOAD_IMAGES_REQUEST';
const UPLOAD_IMAGES_SUCCESS = 'UPLOAD_IMAGES_SUCCESS';
const UPLOAD_IMAGES_FAILURE = 'UPLOAD_IMAGES_FAILURE';
const UNLIKE_POST_REQUEST = 'UNLIKE_POST_REQUEST';
const UNLIKE_POST_SUCCESS = 'UNLIKE_POST_SUCCESS';
const UNLIKE_POST_FAILURE = 'UNLIKE_POST_FAILURE';
const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';
const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';
const RETWEET_REQUEST = 'RETWEET_REQUEST';
const RETWEET_SUCCESS = 'RETWEET_SUCCESS';
const RETWEET_FAILURE = 'RETWEET_FAILURE';
const REMOVE_IMAGE = 'REMOVE_IMAGE'; // 동기 옵션은 하나만 만들어도 된다

const addPost = data => ({
  type: ADD_POST_REQUEST,
  data
}); // dynamic action create

const addComment = data => ({
  type: ADD_COMMENT_REQUEST,
  data
});
/* front dummy
const dummyPost = (data) => ({
	id: data.id,
	content: data.content,
	User: {
		id: 1,
		nickname: '비타민',
	},
	Images: [],
	Comments: [],
})
*/

/* front dummy
const dummyComment = (data) => ({
	id: shortId.generate(),
	content: data,
	User: {
		id: 1,
		nickname: '비타민',
	}
})*/
// 이전 상태를 액션을 통해 다음 상태로 만들어내는 함수

const reducer = (state = initialState, action) => Object(_util_produce__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(state, draft => {
  // immer 사용시 state 를 draft 로 교체해주며, switch 문인걸 인식하고 break 를 까먹지말자
  switch (action.type) {
    case ADD_COMMENT_REQUEST:
      draft.addCommentLoading = true;
      draft.addCommentDone = false;
      draft.addCommentError = null;
      break;

    case ADD_COMMENT_SUCCESS:
      {
        //action.data.content, postId, userId
        //const post = draft.mainPosts.find((v) => v.id === action.data.postId) // 게시글 리스트중에 post 찾기 front
        const post = draft.mainPosts.find(v => v.id === action.data.PostId); // 게시글 리스트중에 post 찾기 bak
        //post.Comments.unshift(dummyComment(action.data.content)) // 찾은 post 에 맨 앞에 가짜 댓글 하나 넣어줌 FRONT

        post.Comments.unshift(action.data); // 찾은 post 에 실제 데이터 back

        draft.addCommentLoading = false;
        draft.addCommentDone = true;
        break;
      }

    case ADD_COMMENT_FAILURE:
      draft.addCommentLoading = false;
      draft.addCommentError = action.error;
      break;

    case LIKE_POST_REQUEST:
      draft.likePostLoading = true;
      draft.likePostDone = false;
      draft.likePostError = null;
      console.log('reducer LIKE_POST_REQUEST 요청::');
      break;

    case LIKE_POST_SUCCESS:
      {
        // mainPosts 에서 id 가 액션데이터포스트아이디를 찾아서
        const post = draft.mainPosts.find(v => v.id === action.data.PostId); // 게시글 좋아요 누른 사람들에게 사용자 아이디를 넣어준다

        post.Likers.push({
          id: action.data.UserId
        });
        draft.likePostLoading = false;
        draft.likePostDone = true;
        console.log('reducer LIKE_POST_SUCCESS 성공::');
        break;
      }

    case LIKE_POST_FAILURE:
      draft.likePostLoading = false;
      draft.likePostError = action.error;
      console.error('reducer LIKE_POST_FAILURE 실패:::', action.error);
      break;

    /*보통 이렇게 같이 쓸수있는 경우는 한 페이지에서 액션 두개가 같이 사용되지 않을때는 상태가 서로 공유되도 된다*/

    case LOAD_USER_POSTS_REQUEST:
    case LOAD_HASHTAG_POSTS_REQUEST:
    case LOAD_POSTS_REQUEST:
      draft.loadPostsLoading = true;
      draft.loadPostsDone = false;
      draft.loadPostsError = null;
      break;

    case LOAD_USER_POSTS_SUCCESS:
    case LOAD_HASHTAG_POSTS_SUCCESS:
    case LOAD_POSTS_SUCCESS:
      draft.loadPostsLoading = false;
      draft.loadPostsDone = true; // action.data 에 dummy data 가 들어있을것이며, 기존데이터와 합쳐주는것
      // concat 을 할땐 항상 앞에 대입을 해줘야한다 그래야 합쳐짐
      //draft.mainPosts = action.data.concat(draft.mainPosts) front

      draft.mainPosts = draft.mainPosts.concat(action.data); // 게시물을 50 개까지만 가져오겠다
      //draft.hasMorePosts = draft.mainPosts.length < 50 front

      draft.hasMorePosts = action.data.length === 10;
      break;

    case LOAD_USER_POSTS_FAILURE:
    case LOAD_HASHTAG_POSTS_FAILURE:
    case LOAD_POSTS_FAILURE:
      draft.loadPostsLoading = false;
      draft.loadPostsError = action.error;
      break;

    case ADD_POST_REQUEST:
      draft.addPostLoading = true;
      draft.addPostDone = false;
      draft.addPostError = null;
      break;

    case ADD_POST_SUCCESS:
      // draft.mainPosts.unshift(dummyPost(action.data)) // front dummy
      draft.mainPosts.unshift(action.data); // back 실제 데이터

      draft.addPostLoading = false;
      draft.addPostDone = true;
      draft.imagePaths = []; // add post 성공 시, 사용자 게시글 작성에 이미지 초기화

      break;

    case ADD_POST_FAILURE:
      draft.addPostLoading = false;
      draft.addPostError = action.error;
      break;

    case LOAD_POST_REQUEST:
      draft.loadPostLoading = true;
      draft.loadPostDone = false;
      draft.loadPostError = null;
      console.log('reducer LOAD_POST_REQUEST 요청:: ');
      break;

    case LOAD_POST_SUCCESS:
      draft.singlePost = action.data; // 하나의 게시물만 로드

      draft.loadPostLoading = false;
      draft.loadPostDone = true;
      console.log('reducer LOAD_POST_SUCCESS 성공:: ');
      break;

    case LOAD_POST_FAILURE:
      draft.loadPostLoading = false;
      draft.loadPostError = action.error;
      console.error('reducer LOAD_POST_FAILURE 실패:: ', action.error);

    case REMOVE_IMAGE:
      draft.imagePaths = draft.imagePaths.filter((v, i) => i !== action.data);
      console.log('reducer REMOVE_IMAGE 성공');
      break;

    case RETWEET_REQUEST:
      draft.retweetLoading = true;
      draft.retweetDone = false;
      draft.retweetError = null;
      console.log('reducer RETWEET_REQUEST 요청::');
      break;

    case RETWEET_SUCCESS:
      {
        draft.retweetLoading = false;
        draft.retweetDone = true;
        draft.mainPosts.unshift(action.data); // 리트윗된 게시글 메인포스트에 추가

        console.log('reducer RETWEET_SUCCESS 성공::');
        break;
      }

    case RETWEET_FAILURE:
      draft.retweetLoading = false;
      draft.retweetError = action.error;
      console.error('reducer RETWEET_FAILURE 실패::', action.data);
      break;

    case UNLIKE_POST_REQUEST:
      draft.unlikePostLoading = true;
      draft.unlikePostDone = false;
      draft.unlikePostError = null;
      console.log('reducer UNLIKE_POST_REQUEST 요청::');
      break;

    case UNLIKE_POST_SUCCESS:
      {
        const post = draft.mainPosts.find(v => v.id === action.data.PostId);
        post.Likers = post.Likers.filter(v => v.id !== action.data.UserId);
        draft.unlikePostLoading = false;
        draft.unlikePostDone = true;
        console.log('reducer UNLIKE_POST_SUCCESS 성공::');
        break;
      }

    case UNLIKE_POST_FAILURE:
      draft.unlikePostLoading = false;
      draft.unlikePostError = action.error;
      console.error('reducer UNLIKE_POST_FAILURE 실패:::', action.error);
      break;

    case UPLOAD_IMAGES_REQUEST:
      draft.uploadImagesLoading = true;
      draft.uploadImagesDone = false;
      draft.uploadImagesError = null;
      console.log('reducer UPLOAD_IMAGES_REQUEST 요청::');
      break;

    case UPLOAD_IMAGES_SUCCESS:
      draft.imagePaths = action.data;
      draft.uploadImagesLoading = false;
      draft.uploadImagesDone = true;
      console.log('reducer UPLOAD_IMAGES_SUCCESS 성공::');
      break;

    case UPLOAD_IMAGES_FAILURE:
      draft.uploadImagesLoading = false;
      draft.uploadImagesError = action.error;
      console.error('reducer UPLOAD_IMAGES_FAILURE 실패:::', action.error);
      break;

    case REMOVE_POST_REQUEST:
      draft.removePostLoading = true;
      draft.removePostDone = false;
      draft.removePostError = null;
      break;

    case REMOVE_POST_SUCCESS:
      draft.mainPosts = draft.mainPosts.filter(v => v.id !== action.data.PostId); // 지울땐 보통 filter 가 편하다

      draft.PostLoading = false;
      draft.PostDone = true;
      break;

    case REMOVE_POST_FAILURE:
      draft.removePostLoading = false;
      draft.removePostError = action.error;
      break;

    default:
      break;
  }
});

/* harmony default export */ __webpack_exports__["I"] = (reducer);

/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "ufKq":
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });