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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/configureStore */ "./store/configureStore.js");
var _jsxFileName = "D:\\intellijProjects\\react-nodebird\\prepare\\front\\pages\\_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const NodeBird = ({
  Component
}) => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 4
  }
}, __jsx("meta", {
  charSet: "utf-8",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }
}), __jsx("title", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }
}, "NodeBird")), __jsx(Component, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 4
  }
}));

NodeBird.propTypes = {
  Component: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.elementType.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (_store_configureStore__WEBPACK_IMPORTED_MODULE_4__["default"].withRedux(NodeBird));

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./reducers/user.js");
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post */ "./reducers/post.js");
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
    case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["HYDRATE"]:
      console.log('reducer rootReducer HYDRATE :: ', action);
      return action.payload;

    default:
      {
        const combinedReducer = Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])({
          user: _user__WEBPACK_IMPORTED_MODULE_2__["default"],
          post: _post__WEBPACK_IMPORTED_MODULE_3__["default"]
        });
        return combinedReducer(state, action);
      }
  }
};
/*reducers/index.js 보시면 user랑 post를 불러와서 합치고 있습니다.
rootReducer가 state고, user와 post는 각각 state.user, state.post가 됩니다.
user.js의 me는 state.user.me가 됩니다.*/


/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, LIKE_POST_REQUEST, LIKE_POST_SUCCESS, LIKE_POST_FAILURE, UPLOAD_IMAGES_REQUEST, UPLOAD_IMAGES_SUCCESS, UPLOAD_IMAGES_FAILURE, UNLIKE_POST_REQUEST, UNLIKE_POST_SUCCESS, UNLIKE_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, RETWEET_REQUEST, RETWEET_SUCCESS, RETWEET_FAILURE, REMOVE_IMAGE, addPost, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_REQUEST", function() { return LOAD_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_SUCCESS", function() { return LOAD_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_FAILURE", function() { return LOAD_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_REQUEST", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_SUCCESS", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_FAILURE", function() { return ADD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_REQUEST", function() { return LIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_SUCCESS", function() { return LIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_FAILURE", function() { return LIKE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_REQUEST", function() { return UPLOAD_IMAGES_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_SUCCESS", function() { return UPLOAD_IMAGES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_FAILURE", function() { return UPLOAD_IMAGES_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_REQUEST", function() { return UNLIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_SUCCESS", function() { return UNLIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_FAILURE", function() { return UNLIKE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_REQUEST", function() { return REMOVE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_SUCCESS", function() { return REMOVE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_FAILURE", function() { return REMOVE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_REQUEST", function() { return ADD_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_SUCCESS", function() { return ADD_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_FAILURE", function() { return ADD_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RETWEET_REQUEST", function() { return RETWEET_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RETWEET_SUCCESS", function() { return RETWEET_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RETWEET_FAILURE", function() { return RETWEET_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_IMAGE", function() { return REMOVE_IMAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPost", function() { return addPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addComment", function() { return addComment; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);
//import shortId from 'shortid' front
 //import faker from 'faker' front

const initialState = {
  mainPosts: [],
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
  loadPostsLoading: false,
  // 화면 로드중 로딩
  loadPostsDone: false,
  // 화면 로드 완료되었을때 true 변환
  loadPostsError: null,
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

const LOAD_POSTS_REQUEST = ' LOAD_POSTS_REQUEST'; // 화면을 로딩하면 바로 LOAD_POSTS_REQUEST 를 호출해줄것

const LOAD_POSTS_SUCCESS = ' LOAD_POSTS_SUCCESS';
const LOAD_POSTS_FAILURE = ' LOAD_POSTS_FAILURE';
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

const reducer = (state = initialState, action) => immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
  // immer 사용시 state 를 draft 로 교체해주며, switch 문인걸 인식하고 break 를 까먹지말자
  switch (action.type) {
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

    case LOAD_POSTS_REQUEST:
      draft.loadPostsLoading = true;
      draft.loadPostsDone = false;
      draft.loadPostsError = null;
      break;

    case LOAD_POSTS_SUCCESS:
      draft.loadPostsLoading = false;
      draft.loadPostsDone = true; // action.data 에 dummy data 가 들어있을것이며, 기존데이터와 합쳐주는것
      // concat 을 할땐 항상 앞에 대입을 해줘야한다 그래야 합쳐짐
      //draft.mainPosts = action.data.concat(draft.mainPosts) front

      draft.mainPosts = draft.mainPosts.concat(action.data); // 게시물을 50 개까지만 가져오겠다
      //draft.hasMorePosts = draft.mainPosts.length < 50 front

      draft.hasMorePosts = action.data.length === 10;
      break;

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

    default:
      break;
  }
});

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAILURE, LOAD_MY_INFO_REQUEST, LOAD_MY_INFO_SUCCESS, LOAD_MY_INFO_FAILURE, REMOVE_FOLLOWER_REQUEST, REMOVE_FOLLOWER_SUCCESS, REMOVE_FOLLOWER_FAILURE, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, CHANGE_NICKNAME_REQUEST, CHANGE_NICKNAME_SUCCESS, CHANGE_NICKNAME_FAILURE, FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE, LOAD_FOLLOWERS_REQUEST, LOAD_FOLLOWERS_SUCCESS, LOAD_FOLLOWERS_FAILURE, LOAD_FOLLOWINGS_REQUEST, LOAD_FOLLOWINGS_SUCCESS, LOAD_FOLLOWINGS_FAILURE, ADD_POST_TO_ME, REMOVE_POST_OF_ME, loginRequestAction, logoutRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_REQUEST", function() { return LOAD_USER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_SUCCESS", function() { return LOAD_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_FAILURE", function() { return LOAD_USER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_REQUEST", function() { return LOAD_MY_INFO_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_SUCCESS", function() { return LOAD_MY_INFO_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_FAILURE", function() { return LOAD_MY_INFO_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FOLLOWER_REQUEST", function() { return REMOVE_FOLLOWER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FOLLOWER_SUCCESS", function() { return REMOVE_FOLLOWER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FOLLOWER_FAILURE", function() { return REMOVE_FOLLOWER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_REQUEST", function() { return LOG_IN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_SUCCESS", function() { return LOG_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_FAILURE", function() { return LOG_IN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_REQUEST", function() { return LOG_OUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_SUCCESS", function() { return LOG_OUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_FAILURE", function() { return LOG_OUT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_REQUEST", function() { return SIGN_UP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_SUCCESS", function() { return SIGN_UP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_FAILURE", function() { return SIGN_UP_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_REQUEST", function() { return CHANGE_NICKNAME_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_SUCCESS", function() { return CHANGE_NICKNAME_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_FAILURE", function() { return CHANGE_NICKNAME_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_REQUEST", function() { return FOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_SUCCESS", function() { return FOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_FAILURE", function() { return FOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_REQUEST", function() { return UNFOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_SUCCESS", function() { return UNFOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_FAILURE", function() { return UNFOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWERS_REQUEST", function() { return LOAD_FOLLOWERS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWERS_SUCCESS", function() { return LOAD_FOLLOWERS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWERS_FAILURE", function() { return LOAD_FOLLOWERS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWINGS_REQUEST", function() { return LOAD_FOLLOWINGS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWINGS_SUCCESS", function() { return LOAD_FOLLOWINGS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWINGS_FAILURE", function() { return LOAD_FOLLOWINGS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_TO_ME", function() { return ADD_POST_TO_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_OF_ME", function() { return REMOVE_POST_OF_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginRequestAction", function() { return loginRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutRequestAction", function() { return logoutRequestAction; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);

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

const reducer = (state = initialState, action) => immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
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

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./sagas/index.js":
/*!************************!*\
  !*** ./sagas/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post */ "./sagas/post.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user */ "./sagas/user.js");




axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.baseURL = 'http://localhost:3065';
axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.withCredentials = true;
function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([// ALL 배열안에 한방에 실행해줌
  Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_post__WEBPACK_IMPORTED_MODULE_2__["default"]), // fork 는 (함수)실행
  Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_user__WEBPACK_IMPORTED_MODULE_3__["default"]) // call 이랑은 다르다.
  ]);
}

/***/ }),

/***/ "./sagas/post.js":
/*!***********************!*\
  !*** ./sagas/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return postSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");



 //import shortId from "shortid"; front
// restAPI

function retweetAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`/post/${data}/retweet`);
}

function* retweet(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(retweetAPI, action.data);
    console.log('saga retweet 실행::', action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["RETWEET_SUCCESS"],
      data: result.data
    });
    console.log('saga retweet 성공::', result);
  } catch (err) {
    console.error('saga retweet 실패 :: ', err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["RETWEET_FAILURE"],
      error: err.response.data
    });
  }
}

function uploadImagesAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/post/images', data); // form data 를 {name:data} 형식으로 감싸면 json 되기때문에 사용하면 안됨
}

function* uploadImages(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(uploadImagesAPI, action.data);
    console.log('saga uploadImages 실행:: ', action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_IMAGES_SUCCESS"],
      data: result.data
    });
    console.log('saga uploadImages 성공:: ', result);
  } catch (err) {
    console.error('saga uploadImages error:: ', err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_IMAGES_FAILURE"],
      error: err.response.data
    });
  }
}

function likePostAPI(data) {
  // 3 전달되면
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch(`/post/${data}/like`); // 4 데이터가 간다, like & unlike 는 patch ( 게시글에 일부분 수정이기때문 )
}

function* likePost(action) {
  // 1 액션에서
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(likePostAPI, action.data); // 2 데이터를 꺼내서

    console.log('likePost 실행중::', result);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LIKE_POST_SUCCESS"],
      data: result.data // back, postId, userId 들어있음

    });
    console.log('likePost 완료::', result);
  } catch (err) {
    console.error('likePost error:: ', err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LIKE_POST_FAILURE"],
      error: err.response.data
    });
  }
}

function unlikePostAPI(data) {
  // 3 전달되면
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete(`/post/${data}/like`); // 4 데이터가 간다
}

function* unlikePost(action) {
  // 1 액션에서
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(unlikePostAPI, action.data); // 2 데이터를 꺼내서

    console.log('unlikePost 실행중::', result);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UNLIKE_POST_SUCCESS"],
      data: result.data // back, postId,userId 들어있음

    });
    console.log('UNLIKEPost 완료::', result);
  } catch (err) {
    console.error('UNLIKEPost error:: ', err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UNLIKE_POST_FAILURE"],
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
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/posts?lastId=${lastId || 0}`); // 4 데이터가 간다 ,
}

function* loadPosts(action) {
  // 1 액션에서
  try {
    console.log('Sagas:: loadPosts 실행중', action.data);
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadPostsAPI, action.lastId); // 2 데이터를 꺼내서
    //yield delay(1000) front

    console.log('loadPosts 완료:: ', result);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_SUCCESS"],
      // data: generateDummyPost(10), // data 10 개 front
      data: result.data
    });
  } catch (err) {
    console.error('loadPosts error: ', err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_FAILURE"],
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
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/post', data); // 4 데이터가 간다
}

function* addPost(action) {
  // 1 액션에서
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(addPostAPI, action.data); // 2 데이터를 꺼내서
    //yield delay(1000) front
    //const id = shortId.generate() // front 의 더미 아디

    console.log('addPost 실행중::', result);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_SUCCESS"],

      /*data: { // front dummy
      	id,
      	content: action.data,
      }*/
      data: result.data // back, 실제로 게시글이 들어있음

    });
    console.log('addPost 완료::', result);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_TO_ME"],
      // data: id, // front dummy
      data: result.data.id // back

    });
  } catch (err) {
    console.error('addPost error:: ', err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_FAILURE"],
      error: err.response.data
    });
  }
}

function removePostAPI(data) {
  // 3 전달되면
  //return axios.post('/api/post', data) // 4 데이터가 간다 front
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete(`/post/${data}`); // 4 데이터가 간다 back //delete 의 data 는 post.id (PostCard.js)에서 확인 가능
}

function* removePost(action) {
  // 1 액션에서
  try {
    // 포스트 리듀서상태와 유저리듀서상태와 동시에 한방에 바꿀수 없기때문에 액션을 두번으로 바꿔준다,
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(removePostAPI, action.data); // 2 데이터를 꺼내서
    //yield delay(1000) front

    console.log('removePost 실행:: ', action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_SUCCESS"],
      data: result.data // 어떤 게시물을 지웠는지 id 가있을것,

    });
    console.log('removePost 완료:: ', result);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_OF_ME"],
      //data: action.data, front
      data: action.data // action 이 들어왔을때 데이터

    });
  } catch (err) {
    console.error('removePost error: ', err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_FAILURE"],
      error: err.response.data
    });
  }
}

function addCommentAPI(data) {
  // 3 전달되면
  //주소는 백엔드와 프론트의 약속일뿐 정해진건없다
  //return axios.post(`/api/post/${data.postId}/comment`, data) // 4 데이터가 간다 // front
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`/post/${data.postId}/comment`, data); // 4 데이터가 간다 // POST /post/1/comment
}

function* addComment(action) {
  // 1 액션에서
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(addCommentAPI, action.data); // 2 데이터를 꺼내서 //back
    //yield delay(1000) front

    console.log('addComment 실행중 ::', action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_SUCCESS"],
      //data: action.data // front
      data: result.data
    });
    console.log('addComment 완료::', result);
  } catch (err) {
    console.error('addComment error:: ', err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_FAILURE"],
      error: err.response.data
    });
  }
}

function* watchRetweet() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["RETWEET_REQUEST"], retweet);
}

function* watchUploadImages() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_IMAGES_REQUEST"], uploadImages);
}

function* watchLikePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["LIKE_POST_REQUEST"], likePost);
}

function* watchUnlikePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["UNLIKE_POST_REQUEST"], unlikePost);
}

function* watchLoadPosts() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["throttle"])(5000, _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_REQUEST"], loadPosts);
}

function* watchAddPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_REQUEST"], addPost);
}

function* watchRemovePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_REQUEST"], removePost);
}

function* watchAddComment() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_REQUEST"], addComment);
}

function* postSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRetweet), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUploadImages), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUnlikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRemovePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddComment)]);
}

/***/ }),

/***/ "./sagas/user.js":
/*!***********************!*\
  !*** ./sagas/user.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return userSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");




function logInAPI(data) {
  // generator 아님
  //return axios.post('/api/login', data) // 실제 서버에 로그인 요청을 보냄 // front
  // 실제 서버에 로그인 요청을 보냄 // back
  //return axios.post('http://localhost:3065/user/login', data)
  // localhost 중복 없애기
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/user/login', data);
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
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(logInAPI, action.data); // 서버에서 받은 결과 값을 받음

    console.log('saga logIn 실행중::', action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_SUCCESS"],
      //data: action.data, // front
      data: result.data // (성공 결과 담김) back

    });
    console.log('saga logIn 완료 ::', result);
  } catch (err) {
    console.error('logIn', err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      // put 은 dispatch 라고 생각하자
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_FAILURE"],
      error: err.response.data // (실패 결과 담김)

    });
  }
}

function logOutAPI() {
  // return axios.post('/api/logout') front
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/user/logout');
}

function* logOut() {
  try {
    // 요청 실패 대비
    //yield delay(1000) front
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(logOutAPI); // 서버에서 받은 결과 값을 받음 back

    console.log('sagas:: logout 실행');
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_SUCCESS"]
    });
    console.log('sagas:: logout 완료');
  } catch (err) {
    console.error('front logOut : ', err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      // put 은 dispatch 라고 생각하자
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_FAILURE"],
      error: err.response.data // (실패 결과 담김)

    });
  }
}

function changeNicknameAPI(data) {
  // generator 아님
  // 실제 서버에 로그인 요청을 보냄 // back
  //return axios.post('http://localhost:3065/user/login', data)
  // localhost 중복 없애기
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch('/user/nickname', {
    nickname: data
  });
}

function* changeNickname(action) {
  // login action request 가 action 에 전달
  try {
    // 요청 실패 대비
    //yield delay(1000) // front
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(changeNicknameAPI, action.data); // 서버에서 받은 결과 값을 받음

    console.log('saga changeNickname 실행중::', action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["CHANGE_NICKNAME_SUCCESS"],
      //data: action.data, // front
      data: result.data // (성공 결과 담김) back

    });
    console.log('saga changeNickname 완료 ::', result);
  } catch (err) {
    console.error('changeNickname', err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      // put 은 dispatch 라고 생각하자
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["CHANGE_NICKNAME_FAILURE"],
      error: err.response.data // (실패 결과 담김)

    });
  }
}

function loadMyInfoAPI(userId) {
  // 서버에 요청을 보내는 부분
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(userId ? `/user/${userId}` : '/user/', {
    withCredentials: true // 클라이언트에서 요청 보낼 때는 브라우저가 쿠키를 같이 동봉해줘요

  }); // 서버사이드렌더링일 때는, 브라우저가 없어요.
}

function* loadMyInfo(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadMyInfoAPI, action.data);
    console.log('saga loadMyInfo 실행 :: ', action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_MY_INFO_SUCCESS"],
      data: result.data,
      me: !action.data
    });
    console.log('saga loadMyInfo 성공:: ', result);
  } catch (err) {
    console.error('saga loadMyInfo error :: ', err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_MY_INFO_FAILURE"],
      error: err.response.data
    });
  }
}

function followAPI(data) {
  // data 에 사용자 id 넣어주기
  // return axios.post('/api/follow', data) front
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch(`/user/${data}/follow`);
}

function* follow(action) {
  try {
    //yield delay(1000) front
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(followAPI, action.data);
    console.log('saga follow 실행 : ', result);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_SUCCESS"],
      //data: action.data front
      data: result.data
    });
    console.log('saga follow 완료 :: ', result);
  } catch (err) {
    console.error('saga follow error :: ', err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_FAILURE"],
      error: err.response.data
    });
  }
}

function unfollowAPI(data) {
  // data 에 사용자 id 넣어주기
  //return axios.post('/api/unfollow', data) front
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete(`/user/${data}/follow`);
}

function* unfollow(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(unfollowAPI, action.data); //yield delay(1000) front

    console.log('saga unfollow 요청 :: ', action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_SUCCESS"],
      //data: action.data front
      data: result.data
    });
    console.log('saga unfollow 성공:: ', result);
  } catch (err) {
    console.error('saga unfollow error:: ', err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_FAILURE"],
      error: err.response.data
    });
  }
}

function signUpAPI(data) {
  // back end server addr
  // data 는 email, nickname, password object
  //return axios.post('/api/signup', data) // front
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/user', data); // back
}

function* signUp(action) {
  try {
    //yield delay(1000)
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(signUpAPI, action.data);
    console.log('saga sign up result 실행중 :: ', action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_SUCCESS"] //data: result.data

    });
    console.log('saga sign up 완료 :: ', result);
  } catch (err) {
    console.error('saga signUp error : ', err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_FAILURE"],
      error: err.response.data
    });
  }
}

function loadFollowersAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/user/followers', data);
}

function* loadFollowers(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadFollowersAPI, action.data);
    console.log('saga followers:: 요청', action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWERS_SUCCESS"],
      data: result.data
    });
    console.log('saga followers:: 성공', result);
  } catch (err) {
    console.error('saga followers::', err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWERS_FAILURE"],
      error: err.response.data
    });
  }
}

function loadFollowingsAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/user/followings', data);
}

function* loadFollowings(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadFollowingsAPI, action.data);
    console.log('saga followings 요청::', action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWINGS_SUCCESS"],
      data: result.data
    });
    console.log('saga followings 성공::', result);
  } catch (err) {
    console.error('saga followings 실패::', err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWINGS_FAILURE"],
      error: err.response.data
    });
  }
}

function removeFollowerAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete(`/user/follower/${data}`); // 몇번째의 팔로워를 제거한다
}

function* removeFollower(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(removeFollowerAPI, action.data);
    console.log('saga removeFollower 요청:: ', action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["REMOVE_FOLLOWER_SUCCESS"],
      data: result.data
    });
    console.log('saga removeFollower 성공:: ', result);
  } catch (err) {
    console.error('saga removeFollower 실패:: ', err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["REMOVE_FOLLOWER_FAILURE"],
      error: err.response.data
    });
  }
}

function loadUserAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/user/${data}`);
}

function* loadUser(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadUserAPI, action.data);
    console.log('saga loadUser 실행 :: ', action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_SUCCESS"],
      data: result.data
    });
    console.log('saga loadUser 성공 :: ', result);
  } catch (err) {
    console.error('saga loadUser Failure 실패 :: ', err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_FAILURE"],
      error: err.response.data
    });
  }
}

function* watchLoadUser() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_REQUEST"], loadUser);
}

function* watchRemoveFollower() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["REMOVE_FOLLOWER_REQUEST"], removeFollower);
}

function* watchLoadFollowers() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWERS_REQUEST"], loadFollowers);
}

function* watchLoadFollowings() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWINGS_REQUEST"], loadFollowings);
}

function* watchChangeNickname() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["CHANGE_NICKNAME_REQUEST"], changeNickname);
}

function* watchLoadMyInfo() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_MY_INFO_REQUEST"], loadMyInfo);
}

function* watchFollow() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_REQUEST"], follow);
}

function* watchUnFollow() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_REQUEST"], unfollow);
}

function* watchLogIn() {
  // 로그인 액션이 실행될때까지 기다리겠다는 뜻
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_REQUEST"], logIn); //LOG_IN_REQUEST 액션이 실행되면 logIn 함수 실행
}

function* watchLogOut() {
  // 로그아웃 액션이 실행될때까지 기다리겠다는 뜻
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_REQUEST"], logOut); //LOG_OUT_REQUEST 액션이 실행되면 logIn 함수 실행
}

function* watchSignUp() {
  // 회원가입 액션이 실행될때까지 기다리겠다는 뜻
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_REQUEST"], signUp); // SIGN_UP_REQUEST 액션이 실행되면 logIn 함수 실행
}

function* userSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadUser), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRemoveFollower), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadFollowers), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadFollowings), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchChangeNickname), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadMyInfo), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchFollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUnFollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogIn), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogOut), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchSignUp)]);
}

/***/ }),

/***/ "./store/configureStore.js":
/*!*********************************!*\
  !*** ./store/configureStore.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers */ "./reducers/index.js");
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sagas */ "./sagas/index.js");


 //import thunkMiddleware from 'redux-thunk'



 // const loggerMiddleware = ({ dispatch, getState}) => (next) => (action) => {
//   console.log(action) // 미들웨어를 활용해 리덕스 데브툴즈 처럼 액션 로그 찍히게 하기
//   return next(action)
// }

const configureStore = context => {
  console.log('configureStore context :: ', context);
  const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_3___default()(); // saga 설정 방법

  const middlewares = [sagaMiddleware];
  const enhancer = false ? undefined : Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"])(...middlewares));
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_4__["default"], enhancer);
  store.sagaTask = sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_5__["default"]);
  return store;
};

const wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["createWrapper"])(configureStore, // 옵션객체 디버그가 트루이면 리덕스에관해서 자세한 설명이나오기때문에 개발할땐 true 로 놓자
{
  debug: true
});
/* harmony default export */ __webpack_exports__["default"] = (wrapper);

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "immer":
/*!************************!*\
  !*** external "immer" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("immer");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9wb3N0LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvcG9zdC5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy91c2VyLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaW1tZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2FcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhL2VmZmVjdHNcIiJdLCJuYW1lcyI6WyJOb2RlQmlyZCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImVsZW1lbnRUeXBlIiwiaXNSZXF1aXJlZCIsIndyYXBwZXIiLCJ3aXRoUmVkdXgiLCJyb290UmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIkhZRFJBVEUiLCJjb25zb2xlIiwibG9nIiwicGF5bG9hZCIsImNvbWJpbmVkUmVkdWNlciIsImNvbWJpbmVSZWR1Y2VycyIsInVzZXIiLCJwb3N0IiwiaW5pdGlhbFN0YXRlIiwibWFpblBvc3RzIiwiaW1hZ2VQYXRocyIsImhhc01vcmVQb3N0cyIsImxpa2VQb3N0TG9hZGluZyIsImxpa2VQb3N0RG9uZSIsImxpa2VQb3N0RXJyb3IiLCJyZXR3ZWV0TG9hZGluZyIsInJldHdlZXREb25lIiwicmV0d2VldEVycm9yIiwidW5saWtlUG9zdExvYWRpbmciLCJ1bmxpa2VQb3N0RG9uZSIsInVubGlrZVBvc3RFcnJvciIsInVwbG9hZEltYWdlc0xvYWRpbmciLCJ1cGxvYWRJbWFnZXNEb25lIiwidXBsb2FkSW1hZ2VzRXJyb3IiLCJsb2FkUG9zdHNMb2FkaW5nIiwibG9hZFBvc3RzRG9uZSIsImxvYWRQb3N0c0Vycm9yIiwiYWRkUG9zdExvYWRpbmciLCJhZGRQb3N0RG9uZSIsImFkZFBvc3RFcnJvciIsInJlbW92ZVBvc3RMb2FkaW5nIiwicmVtb3ZlUG9zdERvbmUiLCJyZW1vdmVQb3N0RXJyb3IiLCJhZGRDb21tZW50TG9hZGluZyIsImFkZENvbW1lbnREb25lIiwiYWRkQ29tbWVudEVycm9yIiwiTE9BRF9QT1NUU19SRVFVRVNUIiwiTE9BRF9QT1NUU19TVUNDRVNTIiwiTE9BRF9QT1NUU19GQUlMVVJFIiwiQUREX1BPU1RfUkVRVUVTVCIsIkFERF9QT1NUX1NVQ0NFU1MiLCJBRERfUE9TVF9GQUlMVVJFIiwiTElLRV9QT1NUX1JFUVVFU1QiLCJMSUtFX1BPU1RfU1VDQ0VTUyIsIkxJS0VfUE9TVF9GQUlMVVJFIiwiVVBMT0FEX0lNQUdFU19SRVFVRVNUIiwiVVBMT0FEX0lNQUdFU19TVUNDRVNTIiwiVVBMT0FEX0lNQUdFU19GQUlMVVJFIiwiVU5MSUtFX1BPU1RfUkVRVUVTVCIsIlVOTElLRV9QT1NUX1NVQ0NFU1MiLCJVTkxJS0VfUE9TVF9GQUlMVVJFIiwiUkVNT1ZFX1BPU1RfUkVRVUVTVCIsIlJFTU9WRV9QT1NUX1NVQ0NFU1MiLCJSRU1PVkVfUE9TVF9GQUlMVVJFIiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsIkFERF9DT01NRU5UX1NVQ0NFU1MiLCJBRERfQ09NTUVOVF9GQUlMVVJFIiwiUkVUV0VFVF9SRVFVRVNUIiwiUkVUV0VFVF9TVUNDRVNTIiwiUkVUV0VFVF9GQUlMVVJFIiwiUkVNT1ZFX0lNQUdFIiwiYWRkUG9zdCIsImRhdGEiLCJhZGRDb21tZW50IiwicmVkdWNlciIsInByb2R1Y2UiLCJkcmFmdCIsImZpbHRlciIsInYiLCJpIiwidW5zaGlmdCIsImVycm9yIiwiZmluZCIsImlkIiwiUG9zdElkIiwiTGlrZXJzIiwicHVzaCIsIlVzZXJJZCIsImNvbmNhdCIsImxlbmd0aCIsIlBvc3RMb2FkaW5nIiwiUG9zdERvbmUiLCJDb21tZW50cyIsImxvYWRVc2VyTG9hZGluZyIsImxvYWRVc2VyRG9uZSIsImxvYWRVc2VyRXJyb3IiLCJsb2FkTXlJbmZvTG9hZGluZyIsImxvYWRNeUluZm9Eb25lIiwibG9hZE15SW5mb0Vycm9yIiwicmVtb3ZlRm9sbG93ZXJMb2FkaW5nIiwicmVtb3ZlRm9sbG93ZXJEb25lIiwicmVtb3ZlRm9sbG93ZXJFcnJvciIsImZvbGxvd0xvYWRpbmciLCJmb2xsb3dEb25lIiwiZm9sbG93RXJyb3IiLCJ1bmZvbGxvd0xvYWRpbmciLCJ1bmZvbGxvd0RvbmUiLCJ1bmZvbGxvd0Vycm9yIiwibG9hZEZvbGxvd2Vyc0xvYWRpbmciLCJsb2FkRm9sbG93ZXJzRG9uZSIsImxvYWRGb2xsb3dlcnNFcnJvciIsImxvYWRGb2xsb3dpbmdzTG9hZGluZyIsImxvYWRGb2xsb3dpbmdzRG9uZSIsImxvYWRGb2xsb3dpbmdzRXJyb3IiLCJsb2dJbkxvYWRpbmciLCJsb2dJbkRvbmUiLCJsb2dJbkVycm9yIiwibG9nT3V0TG9hZGluZyIsImxvZ091dERvbmUiLCJsb2dPdXRFcnJvciIsInNpZ25VcExvYWRpbmciLCJzaWduVXBEb25lIiwic2lnblVwRXJyb3IiLCJjaGFuZ2VOaWNrbmFtZUxvYWRpbmciLCJjaGFuZ2VOaWNrbmFtZURvbmUiLCJjaGFuZ2VOaWNrbmFtZUVycm9yIiwibWUiLCJzaWduVXBEYXRhIiwibG9naW5EYXRhIiwidXNlckluZm8iLCJMT0FEX1VTRVJfUkVRVUVTVCIsIkxPQURfVVNFUl9TVUNDRVNTIiwiTE9BRF9VU0VSX0ZBSUxVUkUiLCJMT0FEX01ZX0lORk9fUkVRVUVTVCIsIkxPQURfTVlfSU5GT19TVUNDRVNTIiwiTE9BRF9NWV9JTkZPX0ZBSUxVUkUiLCJSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCIsIlJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTIiwiUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkUiLCJMT0dfSU5fUkVRVUVTVCIsIkxPR19JTl9TVUNDRVNTIiwiTE9HX0lOX0ZBSUxVUkUiLCJMT0dfT1VUX1JFUVVFU1QiLCJMT0dfT1VUX1NVQ0NFU1MiLCJMT0dfT1VUX0ZBSUxVUkUiLCJTSUdOX1VQX1JFUVVFU1QiLCJTSUdOX1VQX1NVQ0NFU1MiLCJTSUdOX1VQX0ZBSUxVUkUiLCJDSEFOR0VfTklDS05BTUVfUkVRVUVTVCIsIkNIQU5HRV9OSUNLTkFNRV9TVUNDRVNTIiwiQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUiLCJGT0xMT1dfUkVRVUVTVCIsIkZPTExPV19TVUNDRVNTIiwiRk9MTE9XX0ZBSUxVUkUiLCJVTkZPTExPV19SRVFVRVNUIiwiVU5GT0xMT1dfU1VDQ0VTUyIsIlVORk9MTE9XX0ZBSUxVUkUiLCJMT0FEX0ZPTExPV0VSU19SRVFVRVNUIiwiTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUyIsIkxPQURfRk9MTE9XRVJTX0ZBSUxVUkUiLCJMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVCIsIkxPQURfRk9MTE9XSU5HU19TVUNDRVNTIiwiTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkUiLCJBRERfUE9TVF9UT19NRSIsIlJFTU9WRV9QT1NUX09GX01FIiwibG9naW5SZXF1ZXN0QWN0aW9uIiwibG9nb3V0UmVxdWVzdEFjdGlvbiIsIkZvbGxvd2VycyIsIkZvbGxvd2luZ3MiLCJQb3N0cyIsImF4aW9zIiwiZGVmYXVsdHMiLCJiYXNlVVJMIiwid2l0aENyZWRlbnRpYWxzIiwicm9vdFNhZ2EiLCJhbGwiLCJmb3JrIiwicG9zdFNhZ2EiLCJ1c2VyU2FnYSIsInJldHdlZXRBUEkiLCJyZXR3ZWV0IiwicmVzdWx0IiwiY2FsbCIsInB1dCIsImVyciIsInJlc3BvbnNlIiwidXBsb2FkSW1hZ2VzQVBJIiwidXBsb2FkSW1hZ2VzIiwibGlrZVBvc3RBUEkiLCJwYXRjaCIsImxpa2VQb3N0IiwidW5saWtlUG9zdEFQSSIsImRlbGV0ZSIsInVubGlrZVBvc3QiLCJsb2FkUG9zdHNBUEkiLCJsYXN0SWQiLCJnZXQiLCJsb2FkUG9zdHMiLCJhZGRQb3N0QVBJIiwicmVtb3ZlUG9zdEFQSSIsInJlbW92ZVBvc3QiLCJhZGRDb21tZW50QVBJIiwicG9zdElkIiwid2F0Y2hSZXR3ZWV0IiwidGFrZUxhdGVzdCIsIndhdGNoVXBsb2FkSW1hZ2VzIiwid2F0Y2hMaWtlUG9zdCIsIndhdGNoVW5saWtlUG9zdCIsIndhdGNoTG9hZFBvc3RzIiwidGhyb3R0bGUiLCJ3YXRjaEFkZFBvc3QiLCJ3YXRjaFJlbW92ZVBvc3QiLCJ3YXRjaEFkZENvbW1lbnQiLCJsb2dJbkFQSSIsImxvZ0luIiwibG9nT3V0QVBJIiwibG9nT3V0IiwiY2hhbmdlTmlja25hbWVBUEkiLCJuaWNrbmFtZSIsImNoYW5nZU5pY2tuYW1lIiwibG9hZE15SW5mb0FQSSIsInVzZXJJZCIsImxvYWRNeUluZm8iLCJmb2xsb3dBUEkiLCJmb2xsb3ciLCJ1bmZvbGxvd0FQSSIsInVuZm9sbG93Iiwic2lnblVwQVBJIiwic2lnblVwIiwibG9hZEZvbGxvd2Vyc0FQSSIsImxvYWRGb2xsb3dlcnMiLCJsb2FkRm9sbG93aW5nc0FQSSIsImxvYWRGb2xsb3dpbmdzIiwicmVtb3ZlRm9sbG93ZXJBUEkiLCJyZW1vdmVGb2xsb3dlciIsImxvYWRVc2VyQVBJIiwibG9hZFVzZXIiLCJ3YXRjaExvYWRVc2VyIiwid2F0Y2hSZW1vdmVGb2xsb3dlciIsIndhdGNoTG9hZEZvbGxvd2VycyIsIndhdGNoTG9hZEZvbGxvd2luZ3MiLCJ3YXRjaENoYW5nZU5pY2tuYW1lIiwid2F0Y2hMb2FkTXlJbmZvIiwid2F0Y2hGb2xsb3ciLCJ3YXRjaFVuRm9sbG93Iiwid2F0Y2hMb2dJbiIsIndhdGNoTG9nT3V0Iiwid2F0Y2hTaWduVXAiLCJjb25maWd1cmVTdG9yZSIsImNvbnRleHQiLCJzYWdhTWlkZGxld2FyZSIsImNyZWF0ZVNhZ2FNaWRkbGV3YXJlIiwibWlkZGxld2FyZXMiLCJlbmhhbmNlciIsImNvbXBvc2UiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsInNhZ2FUYXNrIiwicnVuIiwiY3JlYXRlV3JhcHBlciIsImRlYnVnIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxNQUFN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eURBQVcsQ0FBQ3hMLGlEQUFELEVBQVVtTCxRQUFWLENBQXpCO0FBQ0FJLE9BQUssQ0FBQ0UsUUFBTixHQUFpQlQsY0FBYyxDQUFDVSxHQUFmLENBQW1CdEYsOENBQW5CLENBQWpCO0FBQ0EsU0FBT21GLEtBQVA7QUFDQSxDQVhEOztBQVlBLE1BQU03UCxPQUFPLEdBQUdpUSx3RUFBYSxDQUMzQmIsY0FEMkIsRUFFM0I7QUFDQTtBQUFDYyxPQUFLO0FBQU4sQ0FIMkIsQ0FBN0I7QUFNZWxRLHNFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaENBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLCtDIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgJ2FudGQvZGlzdC9hbnRkLmNzcyc7XG5cbmltcG9ydCB3cmFwcGVyIGZyb20gJy4uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlJztcblxuY29uc3QgTm9kZUJpcmQgPSAoeyBDb21wb25lbnQgfSkgPT4gKFxuXHRcdDw+XG5cdFx0XHQ8SGVhZD5cblx0XHRcdFx0PG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cblx0XHRcdFx0PHRpdGxlPk5vZGVCaXJkPC90aXRsZT5cblx0XHRcdDwvSGVhZD5cblx0XHRcdDxDb21wb25lbnQgLz5cblx0XHQ8Lz5cbik7XG5cbk5vZGVCaXJkLnByb3BUeXBlcyA9IHtcblx0Q29tcG9uZW50OiBQcm9wVHlwZXMuZWxlbWVudFR5cGUuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KE5vZGVCaXJkKTsiLCIvL2ltcG9ydCB7IHN0b3JlIH0gZnJvbSAnbmV4dC9kaXN0L2J1aWxkL291dHB1dC9zdG9yZSdcclxuaW1wb3J0IHtIWURSQVRFfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInXHJcbmltcG9ydCB7Y29tYmluZVJlZHVjZXJzfSBmcm9tICdyZWR1eCdcclxuaW1wb3J0IHVzZXIgZnJvbSAnLi91c2VyJ1xyXG5pbXBvcnQgcG9zdCBmcm9tICcuL3Bvc3QnXHJcblxyXG4vLyBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbi8vIFx0dXNlcjoge30sXHJcbi8vIFx0cG9zdDoge30sXHJcbi8vIH1cclxuXHJcbi8vIOu5hOuPmeq4sCDslaHshZgg7IOd7ISx6riwXHJcblxyXG4vLyDslaHshZgg7IOd7ISx6riwXHJcbi8qY29uc3QgY2hhbmdlTmlja25hbWUgPSAoZGF0YSkgPT4ge1xyXG5cdHJldHVybiB7XHJcblx0XHR0eXBlOiAnQ0hBTkdFX05JQ0tOQU1FJyxcclxuXHRcdGRhdGEsXHJcblx0fVxyXG59XHJcbmNoYW5nZU5pY2tuYW1lKCd2aXRhbWluNzc3JykqL1xyXG4vKntcclxuXHRcdHR5cGU6ICdDSEFOR0VfTklDS05BTUUnLFxyXG5cdFx0ZGF0YTogJ3ZpdGFtaW43NzcnLFxyXG59Ki9cclxuXHJcbi8qc3RvcmUuZGlzcGF0Y2goY2hhbmdlTmlja25hbWUoJ3ZpdGFtaW43Nzc3Nzc3JykpKi9cclxuXHJcbi8vIOumrOuTgOyEnCA6IOydtOyghOyDge2DnOyZgCDslaHshZjsnYQg7Ya17ZW0IOuLpOydjCDsg4Htg5zrpbwg66eM65Ok7Ja064K064qUIO2VqOyImFxyXG4vKiBDU1IgUkVEVUNFUlxyXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcblx0Ly8gdXNlciDsnbTri4jshZzsiqTthYzsnbTtirgsIHBvc3Qg7J2064uI7IWc7Iqk7YWM7J207Yq4IOy7tOuwlOyduCDrpqzrk4DshJzqsIAg7JWM7JWE7IScIO2VnOuwqeyXkCDrrLbslrTspIxcclxuXHRpbmRleDogKHN0YXRlID0ge30sIGFjdGlvbikgPT4ge1xyXG5cdFx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0XHRjYXNlIEhZRFJBVEU6XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ0hZRFJBVEUnLCBhY3Rpb24pXHJcblx0XHRcdFx0cmV0dXJuIHsuLi5zdGF0ZSwgLi4uYWN0aW9uLnBheWxvYWR9XHJcblx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0cmV0dXJuIHN0YXRlXHJcblx0XHR9XHJcblx0fSxcclxuXHR1c2VyLFxyXG5cdHBvc3QsXHJcbn0pKi9cclxuXHJcbi8vIFNTUlxyXG5jb25zdCByb290UmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7IC8vICjsnbTsoITsg4Htg5wgc3RhdGUsIOyVoeyFmCkgPT4g64uk7J2M7IOB7YOcXHJcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSBIWURSQVRFOlxyXG5cdFx0XHRjb25zb2xlLmxvZygncmVkdWNlciByb290UmVkdWNlciBIWURSQVRFIDo6ICcsIGFjdGlvbilcclxuXHRcdFx0cmV0dXJuIGFjdGlvbi5wYXlsb2FkXHJcblx0XHRkZWZhdWx0OiB7XHJcblx0XHRcdGNvbnN0IGNvbWJpbmVkUmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcblx0XHRcdFx0dXNlcixcclxuXHRcdFx0XHRwb3N0LFxyXG5cdFx0XHR9KVxyXG5cdFx0XHRyZXR1cm4gY29tYmluZWRSZWR1Y2VyKHN0YXRlLCBhY3Rpb24pXHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG4vKnJlZHVjZXJzL2luZGV4LmpzIOuztOyLnOuptCB1c2Vy656RIHBvc3Trpbwg67aI65+s7JmA7IScIO2Vqey5mOqzoCDsnojsirXri4jri6QuXHJcbnJvb3RSZWR1Y2Vy6rCAIHN0YXRl6rOgLCB1c2Vy7JmAIHBvc3TripQg6rCB6rCBIHN0YXRlLnVzZXIsIHN0YXRlLnBvc3TqsIAg65Cp64uI64ukLlxyXG51c2VyLmpz7J2YIG1l64qUIHN0YXRlLnVzZXIubWXqsIAg65Cp64uI64ukLiovXHJcbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyXHJcbiIsIi8vaW1wb3J0IHNob3J0SWQgZnJvbSAnc2hvcnRpZCcgZnJvbnRcclxuaW1wb3J0IHByb2R1Y2UgZnJvbSAnaW1tZXInXHJcbi8vaW1wb3J0IGZha2VyIGZyb20gJ2Zha2VyJyBmcm9udFxyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuXHRtYWluUG9zdHM6IFtdLFxyXG5cdGltYWdlUGF0aHM6IFtdLCAvLyDsnbTrr7jsp4Ag6rK966Gc65Ok7J20IOyggOyepeuQqFxyXG5cdGhhc01vcmVQb3N0czogdHJ1ZSwgLy8g642UIOunjuydgCDqsozsi5zrrLwg6rCA7KC47Jik6riwXHJcblx0bGlrZVBvc3RMb2FkaW5nOiBmYWxzZSwgLy8g65287J207YGsIOuhnOuTnOykkSDroZzrlKlcclxuXHRsaWtlUG9zdERvbmU6IGZhbHNlLCAvLyDrnbzsnbTtgawg7JmE66OM7ZaI7J2E65WMIHRydWUg67OA7ZmYXHJcblx0bGlrZVBvc3RFcnJvcjogbnVsbCxcclxuXHRyZXR3ZWV0TG9hZGluZzogZmFsc2UsIC8vIOumrO2KuOyclyDroZzrk5zspJEg66Gc65SpXHJcblx0cmV0d2VldERvbmU6IGZhbHNlLCAvLyDrpqztirjsnJcg7JmE66OM7KSRIOuhnOuUqVxyXG5cdHJldHdlZXRFcnJvcjogbnVsbCxcclxuXHR1bmxpa2VQb3N0TG9hZGluZzogZmFsc2UsIC8vIOyWuOudvOydtO2BrCDroZzrk5wg7KSRIOuhnOuUqVxyXG5cdHVubGlrZVBvc3REb25lOiBmYWxzZSwgLy8g7Ja465287J207YGsIOyZhOujjO2WiOydhOuVjCB0cnVlIOuzgO2ZmFxyXG5cdHVubGlrZVBvc3RFcnJvcjogbnVsbCxcclxuXHR1cGxvYWRJbWFnZXNMb2FkaW5nOiBmYWxzZSwgLy8g7J2066+47KeAIOuhnOuTnCDspJEg66Gc65SpXHJcblx0dXBsb2FkSW1hZ2VzRG9uZTogZmFsc2UsIC8vIOydtOuvuOyngCDroZzrk5wg7JmE66OM7ZaI7J2E65WMIHRydWUg67OA7ZmYXHJcblx0dXBsb2FkSW1hZ2VzRXJyb3I6IG51bGwsXHJcblx0bG9hZFBvc3RzTG9hZGluZzogZmFsc2UsIC8vIO2ZlOuptCDroZzrk5zspJEg66Gc65SpXHJcblx0bG9hZFBvc3RzRG9uZTogZmFsc2UsIC8vIO2ZlOuptCDroZzrk5wg7JmE66OM65CY7JeI7J2E65WMIHRydWUg67OA7ZmYXHJcblx0bG9hZFBvc3RzRXJyb3I6IG51bGwsXHJcblx0YWRkUG9zdExvYWRpbmc6IGZhbHNlLCAvLyDqsozsi5zrrLwg65Ox66Gd7KSRIOuhnOuUqVxyXG5cdGFkZFBvc3REb25lOiBmYWxzZSwgLy8g6rKM7Iuc66y8IOy2lOqwgOqwgCDsmYTro4zrkJjsl4jsnYTrlYwgdHJ1ZSDrs4DtmZhcclxuXHRhZGRQb3N0RXJyb3I6IG51bGwsXHJcblx0cmVtb3ZlUG9zdExvYWRpbmc6IGZhbHNlLCAvLyDqsozsi5zrrLwg7IKt7KCc7KSRIOuhnOuUqVxyXG5cdHJlbW92ZVBvc3REb25lOiBmYWxzZSwgLy8g6rKM7Iuc66y8IOyCreygnOqwgCDsmYTro4zrkJjsl4jsnYTrlYwgdHJ1ZSDrs4DtmZhcclxuXHRyZW1vdmVQb3N0RXJyb3I6IG51bGwsXHJcblx0YWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLCAvLyDrjJPquIAg65Ox66Gd7KSRIOuhnOuUqVxyXG5cdGFkZENvbW1lbnREb25lOiBmYWxzZSwgLy8g6rKM7Iuc66y8IOy2lOqwgOqwgCDsmYTro4zrkJjsl4jsnYTrlYwgdHJ1ZSDrs4DtmZhcclxuXHRhZGRDb21tZW50RXJyb3I6IG51bGwsXHJcbn1cclxuLy8g7J2067aA67aE7J2EIOyCrOyaqe2VtOyEnCDrrLTtlZwg7Iqk7YGs66Gk66eB7J2EIOunjOuTpOqygyBmcm9udFxyXG4vKmV4cG9ydCBjb25zdCBnZW5lcmF0ZUR1bW15UG9zdCA9IChudW1iZXIpID0+IEFycmF5KG51bWJlcikuZmlsbCgpLm1hcCgoKSA9PiAoe1xyXG5cdGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcblx0VXNlcjoge1xyXG5cdFx0aWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuXHRcdG5pY2tuYW1lOiBmYWtlci5uYW1lLmZpbmROYW1lKCksXHJcblx0fSxcclxuXHRjb250ZW50OiBmYWtlci5sb3JlbS5wYXJhZ3JhcGgoKSxcclxuXHRJbWFnZXM6IFt7XHJcblx0XHRzcmM6IGZha2VyLmltYWdlLmltYWdlKCksXHJcblx0fV0sXHJcblx0Q29tbWVudHM6IFt7XHJcblx0XHRVc2VyOiB7XHJcblx0XHRcdGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcblx0XHRcdG5pY2tuYW1lOiBmYWtlci5uYW1lLmZpbmROYW1lKCksXHJcblx0XHR9LFxyXG5cdFx0Y29udGVudDogZmFrZXIubG9yZW0uc2VudGVuY2UoKSxcclxuXHR9XSxcclxufSkpKi9cclxuXHJcbi8v6rKM7Iuc6riAIOyVoeyFmFxyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19SRVFVRVNUID0gJyBMT0FEX1BPU1RTX1JFUVVFU1QnOyAvLyDtmZTrqbTsnYQg66Gc65Sp7ZWY66m0IOuwlOuhnCBMT0FEX1BPU1RTX1JFUVVFU1Qg66W8IO2YuOy2nO2VtOykhOqyg1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19TVUNDRVNTID0gJyBMT0FEX1BPU1RTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19GQUlMVVJFID0gJyBMT0FEX1BPU1RTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1JFUVVFU1QgPSAnQUREX1BPU1RfUkVRVUVTVCc7IC8vIOuzgOyImOuhnCDrlLDroZwg66eM65Ok7Ja07KSY7JW8IOykkeqwhOyXkCDsmKTtg4DqsIDrgpjripQg7J287J2EIOunieydhCDsiJgg7J6I64ukXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9TVUNDRVNTID0gJ0FERF9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfRkFJTFVSRSA9ICdBRERfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMSUtFX1BPU1RfUkVRVUVTVCA9ICdMSUtFX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMSUtFX1BPU1RfU1VDQ0VTUyA9ICdMSUtFX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMSUtFX1BPU1RfRkFJTFVSRSA9ICdMSUtFX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgVVBMT0FEX0lNQUdFU19SRVFVRVNUID0gJ1VQTE9BRF9JTUFHRVNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBVUExPQURfSU1BR0VTX1NVQ0NFU1MgPSAnVVBMT0FEX0lNQUdFU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFVQTE9BRF9JTUFHRVNfRkFJTFVSRSA9ICdVUExPQURfSU1BR0VTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVOTElLRV9QT1NUX1JFUVVFU1QgPSAnVU5MSUtFX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9TVUNDRVNTID0gJ1VOTElLRV9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgVU5MSUtFX1BPU1RfRkFJTFVSRSA9ICdVTkxJS0VfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9SRVFVRVNUID0gJ1JFTU9WRV9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfU1VDQ0VTUyA9ICdSRU1PVkVfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX0ZBSUxVUkUgPSAnUkVNT1ZFX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfUkVRVUVTVCA9ICdBRERfQ09NTUVOVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1NVQ0NFU1MgPSAnQUREX0NPTU1FTlRfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9GQUlMVVJFID0gJ0FERF9DT01NRU5UX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFVFdFRVRfUkVRVUVTVCA9ICdSRVRXRUVUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgUkVUV0VFVF9TVUNDRVNTID0gJ1JFVFdFRVRfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBSRVRXRUVUX0ZBSUxVUkUgPSAnUkVUV0VFVF9GQUlMVVJFJ1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9JTUFHRSA9ICdSRU1PVkVfSU1BR0UnOyAvLyDrj5nquLAg7Ji17IWY7J2AIO2VmOuCmOunjCDrp4zrk6TslrTrj4Qg65Cc64ukXHJcblxyXG5leHBvcnQgY29uc3QgYWRkUG9zdCA9IChkYXRhKSA9PiAoe1xyXG5cdHR5cGU6IEFERF9QT1NUX1JFUVVFU1QsXHJcblx0ZGF0YSxcclxufSlcclxuXHJcbi8vIGR5bmFtaWMgYWN0aW9uIGNyZWF0ZVxyXG5leHBvcnQgY29uc3QgYWRkQ29tbWVudCA9IChkYXRhKSA9PiAoe1xyXG5cdHR5cGU6IEFERF9DT01NRU5UX1JFUVVFU1QsXHJcblx0ZGF0YSxcclxufSlcclxuXHJcbi8qIGZyb250IGR1bW15XHJcbmNvbnN0IGR1bW15UG9zdCA9IChkYXRhKSA9PiAoe1xyXG5cdGlkOiBkYXRhLmlkLFxyXG5cdGNvbnRlbnQ6IGRhdGEuY29udGVudCxcclxuXHRVc2VyOiB7XHJcblx0XHRpZDogMSxcclxuXHRcdG5pY2tuYW1lOiAn67mE7YOA66+8JyxcclxuXHR9LFxyXG5cdEltYWdlczogW10sXHJcblx0Q29tbWVudHM6IFtdLFxyXG59KVxyXG4qL1xyXG5cclxuLyogZnJvbnQgZHVtbXlcclxuY29uc3QgZHVtbXlDb21tZW50ID0gKGRhdGEpID0+ICh7XHJcblx0aWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuXHRjb250ZW50OiBkYXRhLFxyXG5cdFVzZXI6IHtcclxuXHRcdGlkOiAxLFxyXG5cdFx0bmlja25hbWU6ICfruYTtg4Drr7wnLFxyXG5cdH1cclxufSkqL1xyXG4vLyDsnbTsoIQg7IOB7YOc66W8IOyVoeyFmOydhCDthrXtlbQg64uk7J2MIOyDge2DnOuhnCDrp4zrk6TslrTrgrTripQg7ZWo7IiYXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcblx0Ly8gaW1tZXIg7IKs7Jqp7IucIHN0YXRlIOulvCBkcmFmdCDroZwg6rWQ7LK07ZW07KO866mwLCBzd2l0Y2gg66y47J246rG4IOyduOyLne2VmOqzoCBicmVhayDrpbwg6rmM66i57KeA66eQ7J6QXHJcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSBSRU1PVkVfSU1BR0U6XHJcblx0XHRcdGRyYWZ0LmltYWdlUGF0aHMgPSBkcmFmdC5pbWFnZVBhdGhzLmZpbHRlcigodiwgaSkgPT4gaSAhPT0gYWN0aW9uLmRhdGEpXHJcblx0XHRcdGNvbnNvbGUubG9nKCdyZWR1Y2VyIFJFTU9WRV9JTUFHRSDshLHqs7UnKVxyXG5cdFx0XHRicmVha1xyXG5cdFx0Y2FzZSBSRVRXRUVUX1JFUVVFU1Q6XHJcblx0XHRcdGRyYWZ0LnJldHdlZXRMb2FkaW5nID0gdHJ1ZVxyXG5cdFx0XHRkcmFmdC5yZXR3ZWV0RG9uZSA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LnJldHdlZXRFcnJvciA9IG51bGxcclxuXHRcdFx0Y29uc29sZS5sb2coJ3JlZHVjZXIgUkVUV0VFVF9SRVFVRVNUIOyalOyyrTo6JylcclxuXHRcdFx0YnJlYWtcclxuXHRcdGNhc2UgUkVUV0VFVF9TVUNDRVNTOiB7XHJcblx0XHRcdGRyYWZ0LnJldHdlZXRMb2FkaW5nID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQucmV0d2VldERvbmUgPSB0cnVlXHJcblx0XHRcdGRyYWZ0Lm1haW5Qb3N0cy51bnNoaWZ0KGFjdGlvbi5kYXRhKSAvLyDrpqztirjsnJfrkJwg6rKM7Iuc6riAIOuplOyduO2PrOyKpO2KuOyXkCDstpTqsIBcclxuXHRcdFx0Y29uc29sZS5sb2coJ3JlZHVjZXIgUkVUV0VFVF9TVUNDRVNTIOyEseqztTo6JylcclxuXHRcdFx0YnJlYWtcclxuXHRcdH1cclxuXHRcdGNhc2UgUkVUV0VFVF9GQUlMVVJFOlxyXG5cdFx0XHRkcmFmdC5yZXR3ZWV0TG9hZGluZyA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LnJldHdlZXRFcnJvciA9IGFjdGlvbi5lcnJvclxyXG5cdFx0XHRjb25zb2xlLmVycm9yKCdyZWR1Y2VyIFJFVFdFRVRfRkFJTFVSRSDsi6TtjKg6OicsIGFjdGlvbi5kYXRhKVxyXG5cdFx0XHRicmVha1xyXG5cdFx0Y2FzZSBMSUtFX1BPU1RfUkVRVUVTVDpcclxuXHRcdFx0ZHJhZnQubGlrZVBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuXHRcdFx0ZHJhZnQubGlrZVBvc3REb25lID0gZmFsc2U7XHJcblx0XHRcdGRyYWZ0Lmxpa2VQb3N0RXJyb3IgPSBudWxsO1xyXG5cdFx0XHRjb25zb2xlLmxvZygncmVkdWNlciBMSUtFX1BPU1RfUkVRVUVTVCDsmpTssq06OicpXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBMSUtFX1BPU1RfU1VDQ0VTUzoge1xyXG5cdFx0XHQvLyBtYWluUG9zdHMg7JeQ7IScIGlkIOqwgCDslaHshZjrjbDsnbTthLDtj6zsiqTtirjslYTsnbTrlJTrpbwg7LC+7JWE7IScXHJcblx0XHRcdGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEuUG9zdElkKTtcclxuXHRcdFx0Ly8g6rKM7Iuc6riAIOyii+yVhOyalCDriITrpbgg7IKs656M65Ok7JeQ6rKMIOyCrOyaqeyekCDslYTsnbTrlJTrpbwg64Sj7Ja07KSA64ukXHJcblx0XHRcdHBvc3QuTGlrZXJzLnB1c2goe2lkOiBhY3Rpb24uZGF0YS5Vc2VySWR9KTtcclxuXHRcdFx0ZHJhZnQubGlrZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcblx0XHRcdGRyYWZ0Lmxpa2VQb3N0RG9uZSA9IHRydWU7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdyZWR1Y2VyIExJS0VfUE9TVF9TVUNDRVNTIOyEseqztTo6JylcclxuXHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblx0XHRjYXNlIExJS0VfUE9TVF9GQUlMVVJFOlxyXG5cdFx0XHRkcmFmdC5saWtlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuXHRcdFx0ZHJhZnQubGlrZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuXHRcdFx0Y29uc29sZS5lcnJvcigncmVkdWNlciBMSUtFX1BPU1RfRkFJTFVSRSDsi6TtjKg6OjonLCBhY3Rpb24uZXJyb3IpXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBVTkxJS0VfUE9TVF9SRVFVRVNUOlxyXG5cdFx0XHRkcmFmdC51bmxpa2VQb3N0TG9hZGluZyA9IHRydWU7XHJcblx0XHRcdGRyYWZ0LnVubGlrZVBvc3REb25lID0gZmFsc2U7XHJcblx0XHRcdGRyYWZ0LnVubGlrZVBvc3RFcnJvciA9IG51bGw7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdyZWR1Y2VyIFVOTElLRV9QT1NUX1JFUVVFU1Qg7JqU7LKtOjonKVxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgVU5MSUtFX1BPU1RfU1VDQ0VTUzoge1xyXG5cdFx0XHRjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLlBvc3RJZCk7XHJcblx0XHRcdHBvc3QuTGlrZXJzID0gcG9zdC5MaWtlcnMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YS5Vc2VySWQpO1xyXG5cdFx0XHRkcmFmdC51bmxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG5cdFx0XHRkcmFmdC51bmxpa2VQb3N0RG9uZSA9IHRydWU7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdyZWR1Y2VyIFVOTElLRV9QT1NUX1NVQ0NFU1Mg7ISx6rO1OjonKVxyXG5cdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHRcdGNhc2UgVU5MSUtFX1BPU1RfRkFJTFVSRTpcclxuXHRcdFx0ZHJhZnQudW5saWtlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuXHRcdFx0ZHJhZnQudW5saWtlUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG5cdFx0XHRjb25zb2xlLmVycm9yKCdyZWR1Y2VyIFVOTElLRV9QT1NUX0ZBSUxVUkUg7Iuk7YyoOjo6JywgYWN0aW9uLmVycm9yKVxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgVVBMT0FEX0lNQUdFU19SRVFVRVNUOlxyXG5cdFx0XHRkcmFmdC51cGxvYWRJbWFnZXNMb2FkaW5nID0gdHJ1ZVxyXG5cdFx0XHRkcmFmdC51cGxvYWRJbWFnZXNEb25lID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQudXBsb2FkSW1hZ2VzRXJyb3IgPSBudWxsXHJcblx0XHRcdGNvbnNvbGUubG9nKCdyZWR1Y2VyIFVQTE9BRF9JTUFHRVNfUkVRVUVTVCDsmpTssq06OicpXHJcblx0XHRcdGJyZWFrXHJcblx0XHRjYXNlIFVQTE9BRF9JTUFHRVNfU1VDQ0VTUzpcclxuXHRcdFx0ZHJhZnQuaW1hZ2VQYXRocyA9IGFjdGlvbi5kYXRhXHJcblx0XHRcdGRyYWZ0LnVwbG9hZEltYWdlc0xvYWRpbmcgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC51cGxvYWRJbWFnZXNEb25lID0gdHJ1ZVxyXG5cdFx0XHRjb25zb2xlLmxvZygncmVkdWNlciBVUExPQURfSU1BR0VTX1NVQ0NFU1Mg7ISx6rO1OjonKVxyXG5cdFx0XHRicmVha1xyXG5cdFx0Y2FzZSBVUExPQURfSU1BR0VTX0ZBSUxVUkU6XHJcblx0XHRcdGRyYWZ0LnVwbG9hZEltYWdlc0xvYWRpbmcgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC51cGxvYWRJbWFnZXNFcnJvciA9IGFjdGlvbi5lcnJvclxyXG5cdFx0XHRjb25zb2xlLmVycm9yKCdyZWR1Y2VyIFVQTE9BRF9JTUFHRVNfRkFJTFVSRSDsi6TtjKg6OjonLCBhY3Rpb24uZXJyb3IpXHJcblx0XHRcdGJyZWFrXHJcblx0XHRjYXNlIExPQURfUE9TVFNfUkVRVUVTVDpcclxuXHRcdFx0ZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IHRydWU7XHJcblx0XHRcdGRyYWZ0LmxvYWRQb3N0c0RvbmUgPSBmYWxzZTtcclxuXHRcdFx0ZHJhZnQubG9hZFBvc3RzRXJyb3IgPSBudWxsO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgTE9BRF9QT1NUU19TVUNDRVNTOlxyXG5cdFx0XHRkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQubG9hZFBvc3RzRG9uZSA9IHRydWVcclxuXHRcdFx0Ly8gYWN0aW9uLmRhdGEg7JeQIGR1bW15IGRhdGEg6rCAIOuTpOyWtOyeiOydhOqyg+ydtOupsCwg6riw7KG0642w7J207YSw7JmAIO2VqeyzkOyjvOuKlOqyg1xyXG5cdFx0XHQvLyBjb25jYXQg7J2EIO2VoOuVkCDtla3sg4Eg7JWe7JeQIOuMgOyeheydhCDtlbTspJjslbztlZzri6Qg6re4656Y7JW8IO2VqeyzkOynkFxyXG5cdFx0XHQvL2RyYWZ0Lm1haW5Qb3N0cyA9IGFjdGlvbi5kYXRhLmNvbmNhdChkcmFmdC5tYWluUG9zdHMpIGZyb250XHJcblx0XHRcdGRyYWZ0Lm1haW5Qb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5jb25jYXQoYWN0aW9uLmRhdGEpXHJcblx0XHRcdC8vIOqyjOyLnOusvOydhCA1MCDqsJzquYzsp4Drp4wg6rCA7KC47Jik6rKg64ukXHJcblx0XHRcdC8vZHJhZnQuaGFzTW9yZVBvc3RzID0gZHJhZnQubWFpblBvc3RzLmxlbmd0aCA8IDUwIGZyb250XHJcblx0XHRcdGRyYWZ0Lmhhc01vcmVQb3N0cyA9IGFjdGlvbi5kYXRhLmxlbmd0aCA9PT0gMTBcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIExPQURfUE9TVFNfRkFJTFVSRTpcclxuXHRcdFx0ZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LmxvYWRQb3N0c0Vycm9yID0gYWN0aW9uLmVycm9yXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBBRERfUE9TVF9SRVFVRVNUOlxyXG5cdFx0XHRkcmFmdC5hZGRQb3N0TG9hZGluZyA9IHRydWU7XHJcblx0XHRcdGRyYWZ0LmFkZFBvc3REb25lID0gZmFsc2U7XHJcblx0XHRcdGRyYWZ0LmFkZFBvc3RFcnJvciA9IG51bGw7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBBRERfUE9TVF9TVUNDRVNTOlxyXG5cdFx0XHQvLyBkcmFmdC5tYWluUG9zdHMudW5zaGlmdChkdW1teVBvc3QoYWN0aW9uLmRhdGEpKSAvLyBmcm9udCBkdW1teVxyXG5cdFx0XHRkcmFmdC5tYWluUG9zdHMudW5zaGlmdChhY3Rpb24uZGF0YSkgLy8gYmFjayDsi6TsoJwg642w7J207YSwXHJcblx0XHRcdGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQuYWRkUG9zdERvbmUgPSB0cnVlXHJcblx0XHRcdGRyYWZ0LmltYWdlUGF0aHMgPSBbXSAvLyBhZGQgcG9zdCDshLHqs7Ug7IucLCDsgqzsmqnsnpAg6rKM7Iuc6riAIOyekeyEseyXkCDsnbTrr7jsp4Ag7LSI6riw7ZmUXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBBRERfUE9TVF9GQUlMVVJFOlxyXG5cdFx0XHRkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LmFkZFBvc3RFcnJvciA9IGFjdGlvbi5lcnJvclxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgUkVNT1ZFX1BPU1RfUkVRVUVTVDpcclxuXHRcdFx0ZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSB0cnVlXHJcblx0XHRcdGRyYWZ0LnJlbW92ZVBvc3REb25lID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQucmVtb3ZlUG9zdEVycm9yID0gbnVsbFxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgUkVNT1ZFX1BPU1RfU1VDQ0VTUzpcclxuXHRcdFx0ZHJhZnQubWFpblBvc3RzID0gZHJhZnQubWFpblBvc3RzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEuUG9zdElkKSAvLyDsp4DsmrjrlZAg67O07Ya1IGZpbHRlciDqsIAg7Y647ZWY64ukXHJcblx0XHRcdGRyYWZ0LlBvc3RMb2FkaW5nID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQuUG9zdERvbmUgPSB0cnVlXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBSRU1PVkVfUE9TVF9GQUlMVVJFOlxyXG5cdFx0XHRkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LnJlbW92ZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvclxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgQUREX0NPTU1FTlRfUkVRVUVTVDpcclxuXHRcdFx0ZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSB0cnVlXHJcblx0XHRcdGRyYWZ0LmFkZENvbW1lbnREb25lID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQuYWRkQ29tbWVudEVycm9yID0gbnVsbFxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgQUREX0NPTU1FTlRfU1VDQ0VTUzoge1xyXG5cdFx0XHQvL2FjdGlvbi5kYXRhLmNvbnRlbnQsIHBvc3RJZCwgdXNlcklkXHJcblx0XHRcdC8vY29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5wb3N0SWQpIC8vIOqyjOyLnOq4gCDrpqzsiqTtirjspJHsl5AgcG9zdCDssL7quLAgZnJvbnRcclxuXHRcdFx0Y29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5Qb3N0SWQpIC8vIOqyjOyLnOq4gCDrpqzsiqTtirjspJHsl5AgcG9zdCDssL7quLAgYmFrXHJcblx0XHRcdC8vcG9zdC5Db21tZW50cy51bnNoaWZ0KGR1bW15Q29tbWVudChhY3Rpb24uZGF0YS5jb250ZW50KSkgLy8g7LC+7J2AIHBvc3Qg7JeQIOunqCDslZ7sl5Ag6rCA7KecIOuMk+q4gCDtlZjrgpgg64Sj7Ja07KSMIEZST05UXHJcblx0XHRcdHBvc3QuQ29tbWVudHMudW5zaGlmdChhY3Rpb24uZGF0YSkgLy8g7LC+7J2AIHBvc3Qg7JeQIOyLpOygnCDrjbDsnbTthLAgYmFja1xyXG5cdFx0XHRkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LmFkZENvbW1lbnREb25lID0gdHJ1ZVxyXG5cdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHRcdGNhc2UgQUREX0NPTU1FTlRfRkFJTFVSRTpcclxuXHRcdFx0ZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC5hZGRDb21tZW50RXJyb3IgPSBhY3Rpb24uZXJyb3JcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRicmVhaztcclxuXHR9XHJcbn0pXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXJcclxuIiwiaW1wb3J0IHByb2R1Y2UgZnJvbSAnaW1tZXInXHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG5cdGxvYWRVc2VyTG9hZGluZzogZmFsc2UsIC8vIOyDgeuMgCDsoJXrs7Qg67O06riwIOyLnOuPhOykkeydvOuVkCDroZzrlKnspJEg652E7Jq46rGw7J6EXHJcblx0bG9hZFVzZXJEb25lOiBmYWxzZSwgLy8g7IOB64yAIOygleuztCDrs7TquLAg65CoXHJcblx0bG9hZFVzZXJFcnJvcjogbnVsbCwgLy8g7IOB64yAIOygleuztCDrs7TquLDspJHsnbzrlYwg7JeQ65+sIOyXhuyVsFxyXG5cdGxvYWRNeUluZm9Mb2FkaW5nOiBmYWxzZSwgLy8g7Jyg7KCAIOygleuztCDrs7TquLAg7Iuc64+E7KSR7J2865WQIOuhnOuUqeykkSDrnYTsmrjqsbDsnoRcclxuXHRsb2FkTXlJbmZvRG9uZTogZmFsc2UsIC8vIOycoOyggCDsoJXrs7Qg67O06riwIOuQqFxyXG5cdGxvYWRNeUluZm9FcnJvcjogbnVsbCwgLy8g7Jyg7KCAIOygleuztCDrs7TquLDspJHsnbzrlYwg7JeQ65+sIOyXhuyVsFxyXG5cdHJlbW92ZUZvbGxvd2VyTG9hZGluZzogZmFsc2UsIC8vIO2MlOuhnOybjCDsnKDsoIAg7IKt7KCcIOyLnOuPhOykkeydvOuVkCDroZzrlKnspJEg652E7Jq46rGw7J6EXHJcblx0cmVtb3ZlRm9sbG93ZXJEb25lOiBmYWxzZSwgLy8g7YyU66Gc7JuMIOycoOyggCDsgq3soJwg65CoXHJcblx0cmVtb3ZlRm9sbG93ZXJFcnJvcjogbnVsbCwgLy8g7YyU66Gc7JuMIOycoOyggCDsgq3soJwg7KSR7J2865WMIOyXkOufrCDsl4bslbBcclxuXHRmb2xsb3dMb2FkaW5nOiBmYWxzZSwgLy8g7YyU66Gc7JqwIOyLnOuPhOykkeydvOuVkCDroZzrlKnspJEg652E7Jq46rGw7J6EXHJcblx0Zm9sbG93RG9uZTogZmFsc2UsIC8vIO2MlOuhnOyasCDrkKhcclxuXHRmb2xsb3dFcnJvcjogbnVsbCwgLy8g7YyU66Gc7Jqw7KSR7J2865WMIOyXkOufrCDsl4bslbBcclxuXHR1bmZvbGxvd0xvYWRpbmc6IGZhbHNlLCAvLyDslrjtjJTroZzsmrAg7Iuc64+E7KSR7J2865WQIOuhnOuUqeykkSDrnYTsmrjqsbDsnoRcclxuXHR1bmZvbGxvd0RvbmU6IGZhbHNlLCAvLyDslrjtjJTroZzsmrAg65CoXHJcblx0dW5mb2xsb3dFcnJvcjogbnVsbCwgLy8g7Ja47YyU66Gc7Jqw7KSR7J2865WMIOyXkOufrCDsl4bslbBcclxuXHRsb2FkRm9sbG93ZXJzTG9hZGluZzogZmFsc2UsIC8vIO2MlOuhnOybjCDsi5zrj4TspJHsnbzrlZAg66Gc65Sp7KSRIOudhOyauOqxsOyehFxyXG5cdGxvYWRGb2xsb3dlcnNEb25lOiBmYWxzZSwgLy8g7YyU66Gc7JuMIOuQqFxyXG5cdGxvYWRGb2xsb3dlcnNFcnJvcjogbnVsbCwgLy8g7YyU66Gc7JuM7J2865WMIOyXkOufrCDsl4bslbBcclxuXHRsb2FkRm9sbG93aW5nc0xvYWRpbmc6IGZhbHNlLCAvLyDtjJTroZzsnJkg7Iuc64+E7KSR7J2865WQIOuhnOuUqeykkSDrnYTsmrjqsbDsnoRcclxuXHRsb2FkRm9sbG93aW5nc0RvbmU6IGZhbHNlLCAvLyDtjJTroZzsnJkg65CoXHJcblx0bG9hZEZvbGxvd2luZ3NFcnJvcjogbnVsbCwgLy8g7YyU66Gc7JyZIOykkeydvOuVjCDsl5Drn6wg7JeG7JWwXHJcblx0bG9nSW5Mb2FkaW5nOiBmYWxzZSwgLy8g66Gc6re47J24IOyLnOuPhOykkeydvOuVkCDroZzrlKnspJEg652E7Jq46rGw7J6EXHJcblx0bG9nSW5Eb25lOiBmYWxzZSwgLy8g66Gc6re47J24IOuQqFxyXG5cdGxvZ0luRXJyb3I6IG51bGwsIC8vIOuhnOuUqeykkeydvOuVjCDsl5Drn6wg7JeG7JWwXHJcblx0bG9nT3V0TG9hZGluZzogZmFsc2UsIC8vIOuhnOq3uOyVhOybgyDsi5zrj4TspJFcclxuXHRsb2dPdXREb25lOiBmYWxzZSwgLy8g66Gc6re47JWE7JuDIOyZhOujjFxyXG5cdGxvZ091dEVycm9yOiBudWxsLFxyXG5cdHNpZ25VcExvYWRpbmc6IGZhbHNlLCAvLyDtmozsm5DqsIDsnoUg66Gc65Sp7KSRXHJcblx0c2lnblVwRG9uZTogZmFsc2UsIC8vIO2ajOybkCDqsIDsnoUg7JmE66OMXHJcblx0c2lnblVwRXJyb3I6IG51bGwsXHJcblx0Y2hhbmdlTmlja25hbWVMb2FkaW5nOiBmYWxzZSwgLy8g64uJ64Sk7J6EIOuzgOqyvSDroZzrlKnspJFcclxuXHRjaGFuZ2VOaWNrbmFtZURvbmU6IGZhbHNlLCAvLyDri4nrhKTsnoQg67OA6rK9IOyZhOujjFxyXG5cdGNoYW5nZU5pY2tuYW1lRXJyb3I6IG51bGwsXHJcblx0bWU6IG51bGwsXHJcblx0c2lnblVwRGF0YToge30sIC8vIO2ajOybkCDqsIDsnoUg642w7J207YSwXHJcblx0bG9naW5EYXRhOiB7fSxcclxuXHR1c2VySW5mbzogbnVsbCxcclxufVxyXG5cclxuLy8g66Gc6re47J24IOyVoeyFmCDsg53shLHquLAgdGh1bmtcclxuLy8gZXhwb3J0IGNvbnN0IGxvZ2luQWN0aW9uID0gKGRhdGEpID0+IHsgLy8g7ZWo7IiY66W8IOumrO2EtO2VmOuKlCDruYTrj5nquLAg7JWh7IWYIO2BrOumrOyXkOydtO2EsOqwgCDstpTqsIBcclxuLy8gXHRyZXR1cm4gKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xyXG4vLyBcdFx0Y29uc3Qgc3RhdGUgPSBnZXRTdGF0ZSgpXHJcbi8vIFx0XHRkaXNwYXRjaChsb2dpblJlcXVlc3RBY3Rpb24oKSlcclxuLy8gXHRcdGF4aW9zLnBvc3QoJy9hcGkvbG9naW4nKVxyXG4vLyBcdFx0XHRcdC50aGVuKChyZXMpID0+IHtcclxuLy8gXHRcdFx0XHRcdGRpc3BhdGNoKGxvZ2luU3VjY2Vzc0FjdGlvbihyZXMuZGF0YSkpXHJcbi8vIFx0XHRcdFx0fSlcclxuLy8gXHRcdFx0XHQuY2F0Y2goKGVycm9yKSA9PiB7XHJcbi8vIFx0XHRcdFx0XHRkaXNwYXRjaChsb2dpbkZhaWx1cmVBY3Rpb24oZXJyb3IpKVxyXG4vLyBcdFx0XHRcdH0pXHJcbi8vIFx0fVxyXG4vLyB9XHJcblxyXG4vLyBhY3Rpb25zXHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfUkVRVUVTVCA9ICdMT0FEX1VTRVJfUkVRVUVTVCdcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9TVUNDRVNTID0gJ0xPQURfVVNFUl9TVUNDRVNTJ1xyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX0ZBSUxVUkUgPSAnTE9BRF9VU0VSX0ZBSUxVUkUnXHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9NWV9JTkZPX1JFUVVFU1QgPSAnTE9BRF9NWV9JTkZPX1JFUVVFU1QnXHJcbmV4cG9ydCBjb25zdCBMT0FEX01ZX0lORk9fU1VDQ0VTUyA9ICdMT0FEX01ZX0lORk9fU1VDQ0VTUydcclxuZXhwb3J0IGNvbnN0IExPQURfTVlfSU5GT19GQUlMVVJFID0gJ0xPQURfTVlfSU5GT19GQUlMVVJFJ1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9GT0xMT1dFUl9SRVFVRVNUID0gJ1JFTU9WRV9GT0xMT1dFUl9SRVFVRVNUJ1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1MgPSAnUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1MnXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRSA9ICdSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRSdcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fUkVRVUVTVCA9ICdMT0dfSU5fUkVRVUVTVCdcclxuZXhwb3J0IGNvbnN0IExPR19JTl9TVUNDRVNTID0gJ0xPR19JTl9TVUNDRVNTJ1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX0ZBSUxVUkUgPSAnTE9HX0lOX0ZBSUxVUkUnXHJcblxyXG5leHBvcnQgY29uc3QgTE9HX09VVF9SRVFVRVNUID0gJ0xPR19PVVRfUkVRVUVTVCdcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfU1VDQ0VTUyA9ICdMT0dfT1VUX1NVQ0NFU1MnXHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX0ZBSUxVUkUgPSAnTE9HX09VVF9GQUlMVVJFJ1xyXG5cclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfUkVRVUVTVCA9ICdTSUdOX1VQX1JFUVVFU1QnXHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1NVQ0NFU1MgPSAnU0lHTl9VUF9TVUNDRVNTJ1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9GQUlMVVJFID0gJ1NJR05fVVBfRkFJTFVSRSdcclxuXHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfUkVRVUVTVCA9ICdDSEFOR0VfTklDS05BTUVfUkVRVUVTVCdcclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTID0gJ0NIQU5HRV9OSUNLTkFNRV9TVUNDRVNTJ1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUgPSAnQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUnXHJcblxyXG5leHBvcnQgY29uc3QgRk9MTE9XX1JFUVVFU1QgPSAnRk9MTE9XX1JFUVVFU1QnXHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfU1VDQ0VTUyA9ICdGT0xMT1dfU1VDQ0VTUydcclxuZXhwb3J0IGNvbnN0IEZPTExPV19GQUlMVVJFID0gJ0ZPTExPV19GQUlMVVJFJ1xyXG5cclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1JFUVVFU1QgPSAnVU5GT0xMT1dfUkVRVUVTVCdcclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1NVQ0NFU1MgPSAnVU5GT0xMT1dfU1VDQ0VTUydcclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX0ZBSUxVUkUgPSAnVU5GT0xMT1dfRkFJTFVSRSdcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0VSU19SRVFVRVNUID0gJ0xPQURfRk9MTE9XRVJTX1JFUVVFU1QnXHJcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0VSU19TVUNDRVNTID0gJ0xPQURfRk9MTE9XRVJTX1NVQ0NFU1MnXHJcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0VSU19GQUlMVVJFID0gJ0xPQURfRk9MTE9XRVJTX0ZBSUxVUkUnXHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1QgPSAnTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1QnXHJcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUyA9ICdMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUydcclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XSU5HU19GQUlMVVJFID0gJ0xPQURfRk9MTE9XSU5HU19GQUlMVVJFJ1xyXG5cclxuLy8g7Jyg7KCAIOumrOuTgOyEnOydmCDsg4Htg5zrpbwg67CU6r+A7IiY7J6I64qUIOyVoeyFmCDsg53shLFcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1RPX01FID0gJ0FERF9QT1NUX1RPX01FJ1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfT0ZfTUUgPSAnUkVNT1ZFX1BPU1RfT0ZfTUUnXHJcblxyXG4vKiBmcm9udFxyXG5jb25zdCBkdW1teVVzZXIgPSAoZGF0YSkgPT4gKHtcclxuXHQuLi5kYXRhLFxyXG5cdG5pY2tuYW1lOiAn67mE7YOA66+8JyxcclxuXHRpZDogMSxcclxuXHRQb3N0czogW3tpZDogMX1dLFxyXG5cdEZvbGxvd2luZ3M6IFt7bmlja25hbWU6ICfsmbjrhbgnfSwge25pY2tuYW1lOiAn7J2M66mUJ30sIHtuaWNrbmFtZTogJ+yNvSd9LCB7bmlja25hbWU6ICfsmKTrjJUnfSwge25pY2tuYW1lOiAn66eM672AJ31dLFxyXG5cdEZvbGxvd2VyczogW3tuaWNrbmFtZTogJ+q5jOunpCd9LCB7bmlja25hbWU6ICfrp4zrkZAnfSwge25pY2tuYW1lOiAn67O07LGZJ30sIHtuaWNrbmFtZTogJ+uSt+qwgCd9LCB7bmlja25hbWU6ICfslbzrjaknfV0sXHJcbn0pKi9cclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpblJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4gKHtcclxuXHR0eXBlOiBMT0dfSU5fUkVRVUVTVCxcclxuXHRkYXRhLFxyXG59KTtcclxuLy8g66Gc6re47JWE7JuDIOyVoeyFmCDsg53shLHquLAgdGh1bmtcclxuLy8gZXhwb3J0IGNvbnN0IGxvZ291dEFjdGlvbiA9IChkYXRhKSA9PiB7XHJcbi8vIFx0cmV0dXJuIChkaXNwYXRjaCkgPT4ge1xyXG4vLyBcdFx0YXhpb3MucG9zdCgnL2FwaS9sb2dvdXQnKVxyXG4vLyBcdFx0XHRcdC50aGVuKCgpID0+IHtcclxuLy8gXHRcdFx0XHRcdGRpc3BhdGNoKGxvZ291dFN1Y2Nlc3NBY3Rpb24oKSlcclxuLy8gXHRcdFx0XHR9KVxyXG4vLyBcdFx0XHRcdC5jYXRjaCgoKSA9PiB7XHJcbi8vIFx0XHRcdFx0XHRkaXNwYXRjaChsb2dvdXRGYWlsdXJlQWN0aW9uKCkpXHJcbi8vIFx0XHRcdFx0fSlcclxuLy8gXHR9XHJcbi8vIH1cclxuZXhwb3J0IGNvbnN0IGxvZ291dFJlcXVlc3RBY3Rpb24gPSAoKSA9PiAoe1xyXG5cdHR5cGU6IExPR19PVVRfUkVRVUVTVCxcclxufSlcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSBMT0FEX1VTRVJfUkVRVUVTVDpcclxuXHRcdFx0Ly8gc3RvcmUg7JeQ7IScIOuztOuCuCBzdGF0ZSDqsIAg66eM65Ok7Ja07KeQLCBzdGF0ZSDsnpDssrTqsIAgdXNlci5qcyDsnZggc3RhdGUg7J6EXHJcblx0XHRcdGRyYWZ0LmxvYWRVc2VyTG9hZGluZyA9IHRydWVcclxuXHRcdFx0ZHJhZnQubG9hZFVzZXJEb25lID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQubG9hZFVzZXJFcnJvciA9IG51bGwgLy8g66Gc65SpIOykkeydvOuVjOuKlCDsl5Drn6wg7JeG7JWwXHJcblx0XHRcdGNvbnNvbGUubG9nKCdyZWR1Y2VyIG15SW5mbyDsmpTssq0nKVxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgTE9BRF9VU0VSX1NVQ0NFU1M6XHJcblx0XHRcdGRyYWZ0LnVzZXJJbmZvID0gYWN0aW9uLmRhdGEgLy8gYmFjayDsg4HrjIAg7KCV67O06rCAIOuTpOyWtOyeiOydjFxyXG5cdFx0XHRkcmFmdC5sb2FkVXNlckxvYWRpbmcgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC5sb2FkVXNlckRvbmUgPSB0cnVlXHJcblx0XHRcdC8vZHJhZnQubWUgPSBkdW1teVVzZXIoYWN0aW9uLmRhdGEpXHJcblx0XHRcdGNvbnNvbGUubG9nKCdyZWR1Y2VyIG15SW5mbyDshLHqs7UnKVxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgTE9BRF9VU0VSX0ZBSUxVUkU6XHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoJ2xvYWRVc2VyRmFpbCDsi6TtjKg6OiAnICsgYWN0aW9uLmVycm9yKVxyXG5cdFx0XHRkcmFmdC5sb2FkVXNlckxvYWRpbmcgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC5sb2FkVXNlckVycm9yID0gYWN0aW9uLmVycm9yXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBMT0FEX01ZX0lORk9fUkVRVUVTVDpcclxuXHRcdFx0Ly8gc3RvcmUg7JeQ7IScIOuztOuCuCBzdGF0ZSDqsIAg66eM65Ok7Ja07KeQLCBzdGF0ZSDsnpDssrTqsIAgdXNlci5qcyDsnZggc3RhdGUg7J6EXHJcblx0XHRcdGRyYWZ0LmxvYWRNeUluZm9Mb2FkaW5nID0gdHJ1ZVxyXG5cdFx0XHRkcmFmdC5sb2FkTXlJbmZvRG9uZSA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LmxvYWRNeUluZm9FcnJvciA9IG51bGwgLy8g66Gc65SpIOykkeydvOuVjOuKlCDsl5Drn6wg7JeG7JWwXHJcblx0XHRcdGNvbnNvbGUubG9nKCdyZWR1Y2VyIG15SW5mbyDsmpTssq0nKVxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgTE9BRF9NWV9JTkZPX1NVQ0NFU1M6XHJcblx0XHRcdGRyYWZ0Lm1lID0gYWN0aW9uLmRhdGEgLy8gYmFjayDrgrQg7KCV67O06rCAIOuTpOyWtOyeiOydjFxyXG5cdFx0XHRkcmFmdC5sb2FkTXlJbmZvTG9hZGluZyA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LmxvYWRNeUluZm9Eb25lID0gdHJ1ZVxyXG5cdFx0XHQvL2RyYWZ0Lm1lID0gZHVtbXlVc2VyKGFjdGlvbi5kYXRhKVxyXG5cdFx0XHRjb25zb2xlLmxvZygncmVkdWNlciBteUluZm8g7ISx6rO1JylcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIExPQURfTVlfSU5GT19GQUlMVVJFOlxyXG5cdFx0XHRjb25zb2xlLmVycm9yKCdsb2FkTXlJbmZvRmFpbCDsi6TtjKg6OiAnICsgYWN0aW9uLmVycm9yKVxyXG5cdFx0XHRkcmFmdC5sb2FkTXlJbmZvTG9hZGluZyA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LmxvYWRNeUluZm9FcnJvciA9IGFjdGlvbi5lcnJvclxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1Q6XHJcblx0XHRcdGRyYWZ0LnJlbW92ZUZvbGxvd2VyTG9hZGluZyA9IHRydWVcclxuXHRcdFx0ZHJhZnQucmVtb3ZlRm9sbG93ZXJEb25lID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQucmVtb3ZlRm9sbG93ZXJFcnJvciA9IG51bGxcclxuXHRcdFx0Y29uc29sZS5sb2coJ3JlZHVjZXIgcmVtb3ZlRm9sbG93ZXIg7JqU7LKtJylcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTOlxyXG5cdFx0XHQvLyDrgpjsnZgg7YyU66Gc7JuMIOygnOqxsFxyXG5cdFx0XHRkcmFmdC5tZS5Gb2xsb3dlcnMgPSBkcmFmdC5tZS5Gb2xsb3dlcnMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YS5Vc2VySWQpXHJcblx0XHRcdGRyYWZ0LnJlbW92ZUZvbGxvd2VyTG9hZGluZyA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LnJlbW92ZUZvbGxvd2VyRG9uZSA9IHRydWVcclxuXHRcdFx0Y29uc29sZS5sb2coJ3JlZHVjZXIgcmVtb3ZlRm9sbG93ZXIg7ISx6rO1JylcclxuXHRcdFx0YnJlYWtcclxuXHRcdGNhc2UgUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkU6XHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoJ3JlbW92ZUZvbGxvd2VyRmFpbCDsi6TtjKg6OiAnICsgYWN0aW9uLmVycm9yKVxyXG5cdFx0XHRkcmFmdC5yZW1vdmVGb2xsb3dlckxvYWRpbmcgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC5yZW1vdmVGb2xsb3dlckVycm9yID0gYWN0aW9uLmVycm9yXHJcblx0XHRjYXNlIEZPTExPV19SRVFVRVNUOlxyXG5cdFx0XHQvLyBzdG9yZSDsl5DshJwg67O064K4IHN0YXRlIOqwgCDrp4zrk6TslrTsp5AsIHN0YXRlIOyekOyytOqwgCB1c2VyLmpzIOydmCBzdGF0ZSDsnoRcclxuXHRcdFx0ZHJhZnQuZm9sbG93TG9hZGluZyA9IHRydWVcclxuXHRcdFx0ZHJhZnQuZm9sbG93RXJyb3IgPSBudWxsIC8vIOuhnOuUqSDspJHsnbzrlYzripQg7JeQ65+sIOyXhuyVsFxyXG5cdFx0XHRkcmFmdC5mb2xsb3dEb25lID0gZmFsc2VcclxuXHRcdFx0Y29uc29sZS5sb2coJ3JlZHVjZXIgRk9MTE9XX1JFUVVFU1Qg7JqU7LKtJylcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIEZPTExPV19TVUNDRVNTOlxyXG5cdFx0XHRkcmFmdC5mb2xsb3dMb2FkaW5nID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQuZm9sbG93RG9uZSA9IHRydWVcclxuXHRcdFx0Ly9kcmFmdC5tZSA9IGR1bW15VXNlcihhY3Rpb24uZGF0YSlcclxuXHRcdFx0ZHJhZnQubWUuRm9sbG93aW5ncy5wdXNoKHtpZDogYWN0aW9uLmRhdGEuVXNlcklkfSlcclxuXHRcdFx0Y29uc29sZS5sb2coJ3JlZHVjZXIgRk9MTE9XX1NVQ0NFU1Mg7ISx6rO1JylcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIEZPTExPV19GQUlMVVJFOlxyXG5cdFx0XHRkcmFmdC5mb2xsb3dMb2FkaW5nID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQuZm9sbG93RXJyb3IgPSBhY3Rpb24uZXJyb3JcclxuXHRcdFx0Y29uc29sZS5lcnJvcigncmVkdWNlciBGT0xMT1dfRkFJTFVSRSDsi6TtjKg6OicsIGFjdGlvbi5lcnJvcilcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFVORk9MTE9XX1JFUVVFU1Q6XHJcblx0XHRcdC8vIHN0b3JlIOyXkOyEnCDrs7Trgrggc3RhdGUg6rCAIOunjOuTpOyWtOynkCwgc3RhdGUg7J6Q7LK06rCAIHVzZXIuanMg7J2YIHN0YXRlIOyehFxyXG5cdFx0XHRkcmFmdC51bmZvbGxvd0xvYWRpbmcgPSB0cnVlXHJcblx0XHRcdGRyYWZ0LnVuZm9sbG93RXJyb3IgPSBudWxsIC8vIOuhnOuUqSDspJHsnbzrlYzripQg7JeQ65+sIOyXhuyVsFxyXG5cdFx0XHRkcmFmdC51bmZvbGxvd0RvbmUgPSBmYWxzZVxyXG5cdFx0XHRjb25zb2xlLmxvZygncmVkdWNlciB1bmZvbGxvdyDsmpTssq0nKVxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgVU5GT0xMT1dfU1VDQ0VTUzpcclxuXHRcdFx0ZHJhZnQudW5mb2xsb3dMb2FkaW5nID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQudW5mb2xsb3dEb25lID0gdHJ1ZVxyXG5cdFx0XHQvL2RyYWZ0Lm1lID0gZHVtbXlVc2VyKGFjdGlvbi5kYXRhKVxyXG5cdFx0XHQvLyDslrjtjJTroZzsmrAg7ZWcIOyCrOuejOunjCDruaDsp4DqsoxcclxuXHRcdFx0ZHJhZnQubWUuRm9sbG93aW5ncyA9IGRyYWZ0Lm1lLkZvbGxvd2luZ3MuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YS5Vc2VySWQpXHJcblx0XHRcdGNvbnNvbGUubG9nKCdyZWR1Y2VyIHVuZm9sbG93IOyEseqztScpXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBVTkZPTExPV19GQUlMVVJFOlxyXG5cdFx0XHRkcmFmdC51bmZvbGxvd0xvYWRpbmcgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC51bmZvbGxvd0Vycm9yID0gYWN0aW9uLmVycm9yXHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoJ3JlZHVjZXIgdW5mb2xsb3cg7Iuk7YyoOjonLCBhY3Rpb24uZXJyb3IpXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBMT0dfSU5fUkVRVUVTVDpcclxuXHRcdFx0ZHJhZnQubG9nSW5Mb2FkaW5nID0gdHJ1ZVxyXG5cdFx0XHRkcmFmdC5sb2dJbkVycm9yID0gbnVsbFxyXG5cdFx0XHRkcmFmdC5sb2dJbkRvbmUgPSBmYWxzZVxyXG5cdFx0XHRjb25zb2xlLmxvZygncmVkdWNlciBsb2dpbiDsmpTssq0nKVxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgTE9HX0lOX1NVQ0NFU1M6XHJcblx0XHRcdGRyYWZ0LmxvZ0luTG9hZGluZyA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LmxvZ0luRG9uZSA9IHRydWVcclxuXHRcdFx0Ly9kcmFmdC5tZSA9IGR1bW15VXNlcihhY3Rpb24uZGF0YSkgZnJvbnRcclxuXHRcdFx0ZHJhZnQubWUgPSBhY3Rpb24uZGF0YSAvLyBiYWNrXHJcblx0XHRcdGNvbnNvbGUubG9nKCdyZWR1Y2VyIGxvZ2luIOyEseqztScpXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBMT0dfSU5fRkFJTFVSRTpcclxuXHRcdFx0ZHJhZnQubG9nSW5Mb2FkaW5nID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQubG9nSW5FcnJvciA9IGFjdGlvbi5lcnJvclxyXG5cdFx0XHRjb25zb2xlLmVycm9yKCdyZWR1Y2VyIGxvZ2luIOyLpO2MqDo6ICcsIGFjdGlvbi5lcnJvcilcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIExPR19PVVRfUkVRVUVTVDpcclxuXHRcdFx0ZHJhZnQubG9nT3V0TG9hZGluZyA9IHRydWVcclxuXHRcdFx0ZHJhZnQubG9nT3V0RG9uZSA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LmxvZ091dEVycm9yID0gbnVsbFxyXG5cdFx0XHRjb25zb2xlLmxvZygncmVkdWNlciBsb2dvdXQg7JqU7LKtJylcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIExPR19PVVRfU1VDQ0VTUzpcclxuXHRcdFx0ZHJhZnQubG9nT3V0TG9hZGluZyA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LmxvZ091dERvbmUgPSB0cnVlXHJcblx0XHRcdGRyYWZ0Lm1lID0gbnVsbFxyXG5cdFx0XHRjb25zb2xlLmxvZygncmVkdWNlciBsb2dvdXQg7ISx6rO1JylcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIExPR19PVVRfRkFJTFVSRTpcclxuXHRcdFx0ZHJhZnQubG9nT3V0TG9hZGluZyA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LmxvZ091dEVycm9yID0gYWN0aW9uLmVycm9yXHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoJ3JlZHVjZXIgbG9nb3V0IOyLpO2MqCcsIGFjdGlvbi5lcnJvcilcclxuXHRcdFx0YnJlYWtcclxuXHRcdGNhc2UgU0lHTl9VUF9SRVFVRVNUOlxyXG5cdFx0XHRkcmFmdC5zaWduVXBMb2FkaW5nID0gdHJ1ZVxyXG5cdFx0XHRkcmFmdC5zaWduVXBEb25lID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQuc2lnblVwRXJyb3IgPSBudWxsXHJcblx0XHRcdGNvbnNvbGUubG9nKCdyZWR1Y2VyIHNpZ251cCDsmpTssq0nKVxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgU0lHTl9VUF9TVUNDRVNTOlxyXG5cdFx0XHRkcmFmdC5zaWduVXBMb2FkaW5nID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQuc2lnblVwRG9uZSA9IHRydWVcclxuXHRcdFx0Y29uc29sZS5sb2coJ3JlZHVjZXIgc2lnblVwIOyEseqztScpXHJcblx0XHRcdGJyZWFrXHJcblx0XHRjYXNlIFNJR05fVVBfRkFJTFVSRTpcclxuXHRcdFx0ZHJhZnQuc2lnblVwTG9hZGluZyA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LnNpZ25VcEVycm9yID0gYWN0aW9uLmVycm9yXHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoJ3JlZHVjZXIgc2lnblVwIOyLpO2MqCcsIGFjdGlvbi5lcnJvcilcclxuXHRcdFx0YnJlYWtcclxuXHRcdGNhc2UgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1Q6XHJcblx0XHRcdGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IHRydWVcclxuXHRcdFx0ZHJhZnQuY2hhbmdlTmlja25hbWVEb25lID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQuY2hhbmdlTmlja25hbWVFcnJvciA9IG51bGxcclxuXHRcdFx0Y29uc29sZS5sb2coJ3JlZHVjZXIgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1Qg7JqU7LKtJylcclxuXHRcdFx0YnJlYWtcclxuXHRcdGNhc2UgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1M6XHJcblx0XHRcdGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LmNoYW5nZU5pY2tuYW1lRG9uZSA9IHRydWVcclxuXHRcdFx0Y29uc29sZS5sb2coJ3JlZHVjZXIgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1Mg7ISx6rO1JylcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFOlxyXG5cdFx0XHRkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmcgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC5jaGFuZ2VOaWNrbmFtZUVycm9yID0gYWN0aW9uLmVycm9yXHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoJ3JlZHVjZXIgQ0hBTkdFX05JQ0tOQU1FIOyLpO2MqCcsIGFjdGlvbi5lcnJvcilcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIExPQURfRk9MTE9XRVJTX1JFUVVFU1Q6XHJcblx0XHRcdGRyYWZ0LmxvYWRGb2xsb3dlcnNMb2FkaW5nID0gdHJ1ZVxyXG5cdFx0XHRkcmFmdC5sb2FkRm9sbG93ZXJzRG9uZSA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LmxvYWRGb2xsb3dlcnNFcnJvciA9IG51bGxcclxuXHRcdFx0Y29uc29sZS5sb2coJ3JlZHVjZXIgTE9BRF9GT0xMT1dFUlNfUkVRVUVTVCDsmpTssq0nKVxyXG5cdFx0XHRicmVha1xyXG5cdFx0Y2FzZSBMT0FEX0ZPTExPV0VSU19TVUNDRVNTOlxyXG5cdFx0XHRkcmFmdC5sb2FkRm9sbG93ZXJzTG9hZGluZyA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LmxvYWRGb2xsb3dlcnNEb25lID0gdHJ1ZVxyXG5cdFx0XHRkcmFmdC5tZS5Gb2xsb3dlcnMgPSBhY3Rpb24uZGF0YVxyXG5cdFx0XHRjb25zb2xlLmxvZygncmVkdWNlciBMT0FEX0ZPTExPV0VSU19TVUNDRVNTIOyEseqztScpXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBMT0FEX0ZPTExPV0VSU19GQUlMVVJFOlxyXG5cdFx0XHRkcmFmdC5sb2FkRm9sbG93ZXJzTG9hZGluZyA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LmxvYWRGb2xsb3dlcnNFcnJvciA9IGFjdGlvbi5lcnJvclxyXG5cdFx0XHRjb25zb2xlLmVycm9yKCdyZWR1Y2VyIExPQURfRk9MTE9XRVJTIOyLpO2MqCcsIGFjdGlvbi5lcnJvcilcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIExPQURfRk9MTE9XSU5HU19SRVFVRVNUOlxyXG5cdFx0XHRkcmFmdC5sb2FkRm9sbG93aW5nc0xvYWRpbmcgPSB0cnVlXHJcblx0XHRcdGRyYWZ0LmxvYWRGb2xsb3dpbmdzRG9uZSA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LmxvYWRGb2xsb3dpbmdzRXJyb3IgPSBudWxsXHJcblx0XHRcdGNvbnNvbGUubG9nKCdyZWR1Y2VyIExPQURfRk9MTE9XSU5HU19SRVFVRVNUIOyalOyyrScpXHJcblx0XHRcdGJyZWFrXHJcblx0XHRjYXNlIExPQURfRk9MTE9XSU5HU19TVUNDRVNTOlxyXG5cdFx0XHRkcmFmdC5sb2FkRm9sbG93aW5nc0xvYWRpbmcgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC5sb2FkRm9sbG93aW5nc0RvbmUgPSB0cnVlXHJcblx0XHRcdGRyYWZ0Lm1lLkZvbGxvd2luZ3MgPSBhY3Rpb24uZGF0YVxyXG5cdFx0XHRjb25zb2xlLmxvZygncmVkdWNlciBMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUyDshLHqs7UnKVxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkU6XHJcblx0XHRcdGRyYWZ0LmxvYWRGb2xsb3dpbmdzTG9hZGluZyA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LmxvYWRGb2xsb3dpbmdzRXJyb3IgPSBhY3Rpb24uZXJyb3JcclxuXHRcdFx0Y29uc29sZS5lcnJvcigncmVkdWNlciBMT0FEX0ZPTExPV0lOR1Mg7Iuk7YyoJywgYWN0aW9uLmVycm9yKVxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgQUREX1BPU1RfVE9fTUU6IC8vIOqyjOyLnOq4gOydhCDsk7DrqbQg6rKM7Iuc6riAIOyVhOydtOuUlOqwgCDsl6zquLDroZwg65Ok7Ja07JmA7IScIO2VmOuCmOqwgCDstpTqsIDrkJzri6RcclxuXHRcdFx0ZHJhZnQubWUuUG9zdHMudW5zaGlmdCh7aWQ6IGFjdGlvbi5kYXRhfSlcclxuXHRcdFx0Y29uc29sZS5sb2coJ0FERF9QT1NUX1RPX01FIOyEseqztScpXHJcblx0XHRcdGJyZWFrXHJcblx0XHRcdC8vIHJldHVybiB7XHJcblx0XHRcdC8vIFx0Li4uc3RhdGUsXHJcblx0XHRcdC8vIFx0bWU6IHtcclxuXHRcdFx0Ly8gXHRcdC4uLnN0YXRlLm1lLFxyXG5cdFx0XHQvLyBcdFx0UG9zdHM6IFt7aWQ6IGFjdGlvbi5kYXRhfSwgLi4uc3RhdGUubWUuUG9zdHNdLFxyXG5cdFx0XHQvLyBcdH1cclxuXHRcdFx0Ly8gfVxyXG5cdFx0Y2FzZSBSRU1PVkVfUE9TVF9PRl9NRTpcclxuXHRcdFx0ZHJhZnQubWUuUG9zdHMgPSBkcmFmdC5tZS5Qb3N0cy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhKVxyXG5cdFx0XHRjb25zb2xlLmxvZygnUkVNT1ZFX1BPU1RfT0ZfTUUnKVxyXG5cdFx0XHRicmVhaztcclxuXHRcdFx0Ly8gcmV0dXJuIHsgLy8g67aI67OA7ISx7J2EIOyngO2CpOupsCDqsozsi5zquIDsnYQg7KeA7JuM7JW87ZWc64ukLlxyXG5cdFx0XHQvLyBcdC4uLnN0YXRlLFxyXG5cdFx0XHQvLyBcdG1lOiB7XHJcblx0XHRcdC8vIFx0XHQuLi5zdGF0ZS5tZSxcclxuXHRcdFx0Ly8gXHRcdFBvc3RzOiBzdGF0ZS5tZS5Qb3N0cy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhKVxyXG5cdFx0XHQvLyBcdH1cclxuXHRcdFx0Ly8gfVxyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0YnJlYWs7XHJcblx0fVxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiLCJpbXBvcnQge2FsbCwgZm9yaywgdGFrZUxhdGVzdCwgY2FsbCwgcHV0LCBkZWxheX0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgcG9zdFNhZ2EgZnJvbSAnLi9wb3N0J1xyXG5pbXBvcnQgdXNlclNhZ2EgZnJvbSAnLi91c2VyJ1xyXG5cclxuYXhpb3MuZGVmYXVsdHMuYmFzZVVSTCA9ICdodHRwOi8vbG9jYWxob3N0OjMwNjUnXHJcbmF4aW9zLmRlZmF1bHRzLndpdGhDcmVkZW50aWFscyA9IHRydWVcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiByb290U2FnYSgpIHtcclxuXHR5aWVsZCBhbGwoWyAvLyBBTEwg67Cw7Je07JWI7JeQIO2VnOuwqeyXkCDsi6TtlontlbTspIxcclxuXHRcdGZvcmsocG9zdFNhZ2EpLCAvLyBmb3JrIOuKlCAo7ZWo7IiYKeyLpO2WiVxyXG5cdFx0Zm9yayh1c2VyU2FnYSksXHQvLyBjYWxsIOydtOuekeydgCDri6TrpbTri6QuXHJcblx0XSlcclxufSIsImltcG9ydCB7YWxsLCBjYWxsLCBkZWxheSwgZm9yaywgcHV0LCB0YWtlTGF0ZXN0LCB0aHJvdHRsZX0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7XHJcblx0QUREX0NPTU1FTlRfRkFJTFVSRSxcclxuXHRBRERfQ09NTUVOVF9SRVFVRVNULFxyXG5cdEFERF9DT01NRU5UX1NVQ0NFU1MsXHJcblx0QUREX1BPU1RfRkFJTFVSRSxcclxuXHRBRERfUE9TVF9SRVFVRVNULFxyXG5cdEFERF9QT1NUX1NVQ0NFU1MsXHJcblx0TElLRV9QT1NUX0ZBSUxVUkUsXHJcblx0TElLRV9QT1NUX1JFUVVFU1QsXHJcblx0TElLRV9QT1NUX1NVQ0NFU1MsXHJcblx0Ly9nZW5lcmF0ZUR1bW15UG9zdCwgZnJvbnRcclxuXHRMT0FEX1BPU1RTX0ZBSUxVUkUsXHJcblx0TE9BRF9QT1NUU19SRVFVRVNULFxyXG5cdExPQURfUE9TVFNfU1VDQ0VTUyxcclxuXHRSRU1PVkVfUE9TVF9GQUlMVVJFLFxyXG5cdFJFTU9WRV9QT1NUX1JFUVVFU1QsXHJcblx0UkVNT1ZFX1BPU1RfU1VDQ0VTUywgUkVUV0VFVF9GQUlMVVJFLCBSRVRXRUVUX1JFUVVFU1QsIFJFVFdFRVRfU1VDQ0VTUyxcclxuXHRVTkxJS0VfUE9TVF9GQUlMVVJFLFxyXG5cdFVOTElLRV9QT1NUX1JFUVVFU1QsXHJcblx0VU5MSUtFX1BPU1RfU1VDQ0VTUywgVVBMT0FEX0lNQUdFU19GQUlMVVJFLFxyXG5cdFVQTE9BRF9JTUFHRVNfUkVRVUVTVCxcclxuXHRVUExPQURfSU1BR0VTX1NVQ0NFU1MsXHJcbn0gZnJvbSBcIi4uL3JlZHVjZXJzL3Bvc3RcIjtcclxuaW1wb3J0IHtcclxuXHRBRERfUE9TVF9UT19NRSxcclxuXHRSRU1PVkVfUE9TVF9PRl9NRSxcclxufSBmcm9tIFwiLi4vcmVkdWNlcnMvdXNlclwiO1xyXG5cclxuLy9pbXBvcnQgc2hvcnRJZCBmcm9tIFwic2hvcnRpZFwiOyBmcm9udFxyXG5cclxuLy8gcmVzdEFQSVxyXG5mdW5jdGlvbiByZXR3ZWV0QVBJKGRhdGEpIHtcclxuXHRyZXR1cm4gYXhpb3MucG9zdChgL3Bvc3QvJHtkYXRhfS9yZXR3ZWV0YClcclxufVxyXG5cclxuZnVuY3Rpb24qIHJldHdlZXQoYWN0aW9uKSB7XHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwocmV0d2VldEFQSSwgYWN0aW9uLmRhdGEpXHJcblx0XHRjb25zb2xlLmxvZygnc2FnYSByZXR3ZWV0IOyLpO2WiTo6JywgYWN0aW9uLmRhdGEpXHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOiBSRVRXRUVUX1NVQ0NFU1MsXHJcblx0XHRcdGRhdGE6IHJlc3VsdC5kYXRhLFxyXG5cdFx0fSlcclxuXHRcdGNvbnNvbGUubG9nKCdzYWdhIHJldHdlZXQg7ISx6rO1OjonLCByZXN1bHQpXHJcblx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRjb25zb2xlLmVycm9yKCdzYWdhIHJldHdlZXQg7Iuk7YyoIDo6ICcsIGVycilcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IFJFVFdFRVRfRkFJTFVSRSxcclxuXHRcdFx0ZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhXHJcblx0XHR9KVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gdXBsb2FkSW1hZ2VzQVBJKGRhdGEpIHtcclxuXHRyZXR1cm4gYXhpb3MucG9zdCgnL3Bvc3QvaW1hZ2VzJywgZGF0YSkgLy8gZm9ybSBkYXRhIOulvCB7bmFtZTpkYXRhfSDtmJXsi53snLzroZwg6rCQ7Iu466m0IGpzb24g65CY6riw65WM66y47JeQIOyCrOyaqe2VmOuptCDslYjrkKhcclxufVxyXG5cclxuZnVuY3Rpb24qIHVwbG9hZEltYWdlcyhhY3Rpb24pIHtcclxuXHR0cnkge1xyXG5cdFx0Y29uc3QgcmVzdWx0ID0geWllbGQgY2FsbCh1cGxvYWRJbWFnZXNBUEksIGFjdGlvbi5kYXRhKVxyXG5cdFx0Y29uc29sZS5sb2coJ3NhZ2EgdXBsb2FkSW1hZ2VzIOyLpO2WiTo6ICcsIGFjdGlvbi5kYXRhKVxyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogVVBMT0FEX0lNQUdFU19TVUNDRVNTLFxyXG5cdFx0XHRkYXRhOiByZXN1bHQuZGF0YVxyXG5cdFx0fSlcclxuXHRcdGNvbnNvbGUubG9nKCdzYWdhIHVwbG9hZEltYWdlcyDshLHqs7U6OiAnLCByZXN1bHQpXHJcblx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRjb25zb2xlLmVycm9yKCdzYWdhIHVwbG9hZEltYWdlcyBlcnJvcjo6ICcsIGVycilcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IFVQTE9BRF9JTUFHRVNfRkFJTFVSRSxcclxuXHRcdFx0ZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhXHJcblx0XHR9KVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gbGlrZVBvc3RBUEkoZGF0YSkgeyAvLyAzIOyghOuLrOuQmOuptFxyXG5cdHJldHVybiBheGlvcy5wYXRjaChgL3Bvc3QvJHtkYXRhfS9saWtlYCkgLy8gNCDrjbDsnbTthLDqsIAg6rCE64ukLCBsaWtlICYgdW5saWtlIOuKlCBwYXRjaCAoIOqyjOyLnOq4gOyXkCDsnbzrtoDrtoQg7IiY7KCV7J206riw65WM66y4IClcclxufVxyXG5cclxuZnVuY3Rpb24qIGxpa2VQb3N0KGFjdGlvbikgeyAvLyAxIOyVoeyFmOyXkOyEnFxyXG5cdHRyeSB7XHJcblx0XHRjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxpa2VQb3N0QVBJLCBhY3Rpb24uZGF0YSkgLy8gMiDrjbDsnbTthLDrpbwg6rq864K07IScXHJcblx0XHRjb25zb2xlLmxvZygnbGlrZVBvc3Qg7Iuk7ZaJ7KSROjonLCByZXN1bHQpXHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOiBMSUtFX1BPU1RfU1VDQ0VTUyxcclxuXHRcdFx0ZGF0YTogcmVzdWx0LmRhdGEsIC8vIGJhY2ssIHBvc3RJZCwgdXNlcklkIOuTpOyWtOyeiOydjFxyXG5cdFx0fSlcclxuXHRcdGNvbnNvbGUubG9nKCdsaWtlUG9zdCDsmYTro4w6OicsIHJlc3VsdClcclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoJ2xpa2VQb3N0IGVycm9yOjogJywgZXJyKVxyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogTElLRV9QT1NUX0ZBSUxVUkUsXHJcblx0XHRcdGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuXHRcdH0pXHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiB1bmxpa2VQb3N0QVBJKGRhdGEpIHsgLy8gMyDsoITri6zrkJjrqbRcclxuXHRyZXR1cm4gYXhpb3MuZGVsZXRlKGAvcG9zdC8ke2RhdGF9L2xpa2VgKSAvLyA0IOuNsOydtO2EsOqwgCDqsITri6RcclxufVxyXG5cclxuZnVuY3Rpb24qIHVubGlrZVBvc3QoYWN0aW9uKSB7IC8vIDEg7JWh7IWY7JeQ7IScXHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwodW5saWtlUG9zdEFQSSwgYWN0aW9uLmRhdGEpIC8vIDIg642w7J207YSw66W8IOq6vOuCtOyEnFxyXG5cdFx0Y29uc29sZS5sb2coJ3VubGlrZVBvc3Qg7Iuk7ZaJ7KSROjonLCByZXN1bHQpXHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOiBVTkxJS0VfUE9TVF9TVUNDRVNTLFxyXG5cdFx0XHRkYXRhOiByZXN1bHQuZGF0YSwgLy8gYmFjaywgcG9zdElkLHVzZXJJZCDrk6TslrTsnojsnYxcclxuXHRcdH0pXHJcblx0XHRjb25zb2xlLmxvZygnVU5MSUtFUG9zdCDsmYTro4w6OicsIHJlc3VsdClcclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoJ1VOTElLRVBvc3QgZXJyb3I6OiAnLCBlcnIpXHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOiBVTkxJS0VfUE9TVF9GQUlMVVJFLFxyXG5cdFx0XHRlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGFcclxuXHRcdH0pXHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkUG9zdHNBUEkobGFzdElkKSB7IC8vIDMg7KCE64us65CY66m0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly9yZXR1cm4gYXhpb3MuZ2V0KCcvYXBpL3Bvc3RzJywgZGF0YSkgLy8gNCDrjbDsnbTthLDqsIAg6rCE64ukIGZyb250XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8g67O07Ya1IGdldCDrsKnsi53snYAg642w7J207YSw66W8IOuquyDrhKPquLDrlYzrrLjsl5Ag7L+866as7Iqk7Yq466eB7Jy866GcIOuEo+yWtOykmOyVvO2VnOuLpCAo7KO87IaMKSwgZXRjIDogbGltaXQ9MTAmb2Zmc2V0PTEwXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8g7Y+s7Iqk7Yq4IOuTseydgCDrjbDsnbTthLAg7LqQ7Iux7J20IOyViOuQmOyngOunjCwg6rKf7J2AIOuNsOydtO2EsCDsupDsi7HsnYQg6rCZ7J20IO2VoCDsiJgg7J6I64ukXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gbGFzdElkIOqwgCB1bmRlZmluZWQg7J24IOqyveyasCAwXHJcblx0cmV0dXJuIGF4aW9zLmdldChgL3Bvc3RzP2xhc3RJZD0ke2xhc3RJZCB8fCAwfWApIC8vIDQg642w7J207YSw6rCAIOqwhOuLpCAsXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkUG9zdHMoYWN0aW9uKSB7IC8vIDEg7JWh7IWY7JeQ7IScXHJcblx0dHJ5IHtcclxuXHRcdGNvbnNvbGUubG9nKCdTYWdhczo6IGxvYWRQb3N0cyDsi6TtlonspJEnLCBhY3Rpb24uZGF0YSlcclxuXHRcdGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZFBvc3RzQVBJLCBhY3Rpb24ubGFzdElkKSAvLyAyIOuNsOydtO2EsOulvCDqurzrgrTshJxcclxuXHRcdC8veWllbGQgZGVsYXkoMTAwMCkgZnJvbnRcclxuXHRcdGNvbnNvbGUubG9nKCdsb2FkUG9zdHMg7JmE66OMOjogJywgcmVzdWx0KVxyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogTE9BRF9QT1NUU19TVUNDRVNTLFxyXG5cdFx0XHQvLyBkYXRhOiBnZW5lcmF0ZUR1bW15UG9zdCgxMCksIC8vIGRhdGEgMTAg6rCcIGZyb250XHJcblx0XHRcdGRhdGE6IHJlc3VsdC5kYXRhLFxyXG5cdFx0fSlcclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoJ2xvYWRQb3N0cyBlcnJvcjogJywgZXJyKVxyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogTE9BRF9QT1NUU19GQUlMVVJFLFxyXG5cdFx0XHRlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcblx0XHR9KVxyXG5cdH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGFkZFBvc3RBUEkoZGF0YSkgeyAvLyAzIOyghOuLrOuQmOuptFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly9yZXR1cm4gYXhpb3MucG9zdCgnL2FwaS9wb3N0JywgZGF0YSkgLy8gNCDrjbDsnbTthLDqsIAg6rCE64ukIGZyb250XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBkYXRhIGNvbnRlbnQg6rCAIHJlcS5ib2R5LmNvbnRlbnQg66GcIOuwseyXlOuTnOyXkCDrs4DtmZhcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vcmV0dXJuIGF4aW9zLnBvc3QoJy9wb3N0Jywge2NvbnRlbnQ6IGRhdGF9KSAvLyA0IOuNsOydtO2EsOqwgCDqsITri6QsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBmb3JtIGRhdGEg64qUIHtjb250ZW50OiBkYXRhfSDsmYAg6rCZ7J20IOqwkOyLuOuptCDslYjrkJzri6QsIOuwlOuhnCBkYXRhIOuhnCDrhKPslrTspJjslbztlahcclxuXHRyZXR1cm4gYXhpb3MucG9zdCgnL3Bvc3QnLCBkYXRhKSAvLyA0IOuNsOydtO2EsOqwgCDqsITri6RcclxufVxyXG5cclxuZnVuY3Rpb24qIGFkZFBvc3QoYWN0aW9uKSB7IC8vIDEg7JWh7IWY7JeQ7IScXHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkUG9zdEFQSSwgYWN0aW9uLmRhdGEpIC8vIDIg642w7J207YSw66W8IOq6vOuCtOyEnFxyXG5cdFx0Ly95aWVsZCBkZWxheSgxMDAwKSBmcm9udFxyXG5cdFx0Ly9jb25zdCBpZCA9IHNob3J0SWQuZ2VuZXJhdGUoKSAvLyBmcm9udCDsnZgg642U66+4IOyVhOuUlFxyXG5cdFx0Y29uc29sZS5sb2coJ2FkZFBvc3Qg7Iuk7ZaJ7KSROjonLCByZXN1bHQpXHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOiBBRERfUE9TVF9TVUNDRVNTLFxyXG5cdFx0XHQvKmRhdGE6IHsgLy8gZnJvbnQgZHVtbXlcclxuXHRcdFx0XHRpZCxcclxuXHRcdFx0XHRjb250ZW50OiBhY3Rpb24uZGF0YSxcclxuXHRcdFx0fSovXHJcblx0XHRcdGRhdGE6IHJlc3VsdC5kYXRhLCAvLyBiYWNrLCDsi6TsoJzroZwg6rKM7Iuc6riA7J20IOuTpOyWtOyeiOydjFxyXG5cdFx0fSlcclxuXHRcdGNvbnNvbGUubG9nKCdhZGRQb3N0IOyZhOujjDo6JywgcmVzdWx0KVxyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogQUREX1BPU1RfVE9fTUUsXHJcblx0XHRcdC8vIGRhdGE6IGlkLCAvLyBmcm9udCBkdW1teVxyXG5cdFx0XHRkYXRhOiByZXN1bHQuZGF0YS5pZCwgLy8gYmFja1xyXG5cdFx0fSlcclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoJ2FkZFBvc3QgZXJyb3I6OiAnLCBlcnIpXHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOiBBRERfUE9TVF9GQUlMVVJFLFxyXG5cdFx0XHRlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGFcclxuXHRcdH0pXHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVQb3N0QVBJKGRhdGEpIHsgLy8gMyDsoITri6zrkJjrqbRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IC8vcmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvcG9zdCcsIGRhdGEpIC8vIDQg642w7J207YSw6rCAIOqwhOuLpCBmcm9udFxyXG5cdHJldHVybiBheGlvcy5kZWxldGUoYC9wb3N0LyR7ZGF0YX1gKSAvLyA0IOuNsOydtO2EsOqwgCDqsITri6QgYmFjayAvL2RlbGV0ZSDsnZggZGF0YSDripQgcG9zdC5pZCAoUG9zdENhcmQuanMp7JeQ7IScIO2ZleyduCDqsIDriqVcclxufVxyXG5cclxuZnVuY3Rpb24qIHJlbW92ZVBvc3QoYWN0aW9uKSB7IC8vIDEg7JWh7IWY7JeQ7IScXHJcblx0dHJ5IHsgLy8g7Y+s7Iqk7Yq4IOumrOuTgOyEnOyDge2DnOyZgCDsnKDsoIDrpqzrk4DshJzsg4Htg5zsmYAg64+Z7Iuc7JeQIO2VnOuwqeyXkCDrsJTqv4DsiJgg7JeG6riw65WM66y47JeQIOyVoeyFmOydhCDrkZDrsojsnLzroZwg67CU6r+U7KSA64ukLFxyXG5cdFx0Y29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChyZW1vdmVQb3N0QVBJLCBhY3Rpb24uZGF0YSkgLy8gMiDrjbDsnbTthLDrpbwg6rq864K07IScXHJcblx0XHQvL3lpZWxkIGRlbGF5KDEwMDApIGZyb250XHJcblx0XHRjb25zb2xlLmxvZygncmVtb3ZlUG9zdCDsi6Ttlok6OiAnLCBhY3Rpb24uZGF0YSlcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IFJFTU9WRV9QT1NUX1NVQ0NFU1MsXHJcblx0XHRcdGRhdGE6IHJlc3VsdC5kYXRhLCAvLyDslrTrlqQg6rKM7Iuc66y87J2EIOyngOyboOuKlOyngCBpZCDqsIDsnojsnYTqsoMsXHJcblx0XHR9KVxyXG5cdFx0Y29uc29sZS5sb2coJ3JlbW92ZVBvc3Qg7JmE66OMOjogJywgcmVzdWx0KVxyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogUkVNT1ZFX1BPU1RfT0ZfTUUsXHJcblx0XHRcdC8vZGF0YTogYWN0aW9uLmRhdGEsIGZyb250XHJcblx0XHRcdGRhdGE6IGFjdGlvbi5kYXRhLCAgLy8gYWN0aW9uIOydtCDrk6TslrTsmZTsnYTrlYwg642w7J207YSwXHJcblx0XHR9KVxyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0Y29uc29sZS5lcnJvcigncmVtb3ZlUG9zdCBlcnJvcjogJywgZXJyKVxyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogUkVNT1ZFX1BPU1RfRkFJTFVSRSxcclxuXHRcdFx0ZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhXHJcblx0XHR9KVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gYWRkQ29tbWVudEFQSShkYXRhKSB7IC8vIDMg7KCE64us65CY66m0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAvL+yjvOyGjOuKlCDrsLHsl5Trk5zsmYAg7ZSE66Gg7Yq47J2YIOyVveyGjeydvOu/kCDsoJXtlbTsp4TqsbTsl4bri6RcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IC8vcmV0dXJuIGF4aW9zLnBvc3QoYC9hcGkvcG9zdC8ke2RhdGEucG9zdElkfS9jb21tZW50YCwgZGF0YSkgLy8gNCDrjbDsnbTthLDqsIAg6rCE64ukIC8vIGZyb250XHJcblx0cmV0dXJuIGF4aW9zLnBvc3QoYC9wb3N0LyR7ZGF0YS5wb3N0SWR9L2NvbW1lbnRgLCBkYXRhKSAvLyA0IOuNsOydtO2EsOqwgCDqsITri6QgLy8gUE9TVCAvcG9zdC8xL2NvbW1lbnRcclxufVxyXG5cclxuZnVuY3Rpb24qIGFkZENvbW1lbnQoYWN0aW9uKSB7IC8vIDEg7JWh7IWY7JeQ7IScXHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkQ29tbWVudEFQSSwgYWN0aW9uLmRhdGEpIC8vIDIg642w7J207YSw66W8IOq6vOuCtOyEnCAvL2JhY2tcclxuXHRcdC8veWllbGQgZGVsYXkoMTAwMCkgZnJvbnRcclxuXHRcdGNvbnNvbGUubG9nKCdhZGRDb21tZW50IOyLpO2WieykkSA6OicsIGFjdGlvbi5kYXRhKVxyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogQUREX0NPTU1FTlRfU1VDQ0VTUyxcclxuXHRcdFx0Ly9kYXRhOiBhY3Rpb24uZGF0YSAvLyBmcm9udFxyXG5cdFx0XHRkYXRhOiByZXN1bHQuZGF0YSxcclxuXHRcdH0pXHJcblx0XHRjb25zb2xlLmxvZygnYWRkQ29tbWVudCDsmYTro4w6OicsIHJlc3VsdClcclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoJ2FkZENvbW1lbnQgZXJyb3I6OiAnLCBlcnIpXHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOiBBRERfQ09NTUVOVF9GQUlMVVJFLFxyXG5cdFx0XHRlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGFcclxuXHRcdH0pXHJcblx0fVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24qIHdhdGNoUmV0d2VldCgpIHtcclxuXHR5aWVsZCB0YWtlTGF0ZXN0KFJFVFdFRVRfUkVRVUVTVCwgcmV0d2VldClcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoVXBsb2FkSW1hZ2VzKCkge1xyXG5cdHlpZWxkIHRha2VMYXRlc3QoVVBMT0FEX0lNQUdFU19SRVFVRVNULCB1cGxvYWRJbWFnZXMpXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExpa2VQb3N0KCkge1xyXG5cdHlpZWxkIHRha2VMYXRlc3QoTElLRV9QT1NUX1JFUVVFU1QsIGxpa2VQb3N0KVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hVbmxpa2VQb3N0KCkge1xyXG5cdHlpZWxkIHRha2VMYXRlc3QoVU5MSUtFX1BPU1RfUkVRVUVTVCwgdW5saWtlUG9zdClcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZFBvc3RzKCkge1xyXG5cdHlpZWxkIHRocm90dGxlKDUwMDAsIExPQURfUE9TVFNfUkVRVUVTVCwgbG9hZFBvc3RzKVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hBZGRQb3N0KCkge1xyXG5cdHlpZWxkIHRha2VMYXRlc3QoQUREX1BPU1RfUkVRVUVTVCwgYWRkUG9zdClcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoUmVtb3ZlUG9zdCgpIHtcclxuXHR5aWVsZCB0YWtlTGF0ZXN0KFJFTU9WRV9QT1NUX1JFUVVFU1QsIHJlbW92ZVBvc3QpXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEFkZENvbW1lbnQoKSB7XHJcblx0eWllbGQgdGFrZUxhdGVzdChBRERfQ09NTUVOVF9SRVFVRVNULCBhZGRDb21tZW50KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcG9zdFNhZ2EoKSB7XHJcblx0eWllbGQgYWxsKFtcclxuXHRcdGZvcmsod2F0Y2hSZXR3ZWV0KSxcclxuXHRcdGZvcmsod2F0Y2hVcGxvYWRJbWFnZXMpLFxyXG5cdFx0Zm9yayh3YXRjaExpa2VQb3N0KSxcclxuXHRcdGZvcmsod2F0Y2hVbmxpa2VQb3N0KSxcclxuXHRcdGZvcmsod2F0Y2hMb2FkUG9zdHMpLFxyXG5cdFx0Zm9yayh3YXRjaEFkZFBvc3QpLFxyXG5cdFx0Zm9yayh3YXRjaFJlbW92ZVBvc3QpLFxyXG5cdFx0Zm9yayh3YXRjaEFkZENvbW1lbnQpLFxyXG5cdF0pXHJcbn0iLCJpbXBvcnQge2FsbCwgY2FsbCwgZGVsYXksIGZvcmssIHB1dCwgdGFrZUxhdGVzdH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7XHJcblx0Q0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUsXHJcblx0Q0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QsXHJcblx0Q0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MsXHJcblx0Rk9MTE9XX0ZBSUxVUkUsXHJcblx0Rk9MTE9XX1JFUVVFU1QsXHJcblx0Rk9MTE9XX1NVQ0NFU1MsIExPQURfRk9MTE9XRVJTX0ZBSUxVUkUsIExPQURfRk9MTE9XRVJTX1JFUVVFU1QsXHJcblx0TE9BRF9GT0xMT1dFUlNfU1VDQ0VTUywgTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkUsIExPQURfRk9MTE9XSU5HU19SRVFVRVNULCBMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUyxcclxuXHRMT0FEX01ZX0lORk9fRkFJTFVSRSxcclxuXHRMT0FEX01ZX0lORk9fUkVRVUVTVCxcclxuXHRMT0FEX01ZX0lORk9fU1VDQ0VTUywgTE9BRF9VU0VSX0ZBSUxVUkUsIExPQURfVVNFUl9SRVFVRVNULCBMT0FEX1VTRVJfU1VDQ0VTUyxcclxuXHRMT0dfSU5fRkFJTFVSRSxcclxuXHRMT0dfSU5fUkVRVUVTVCxcclxuXHRMT0dfSU5fU1VDQ0VTUyxcclxuXHRMT0dfT1VUX0ZBSUxVUkUsXHJcblx0TE9HX09VVF9SRVFVRVNULFxyXG5cdExPR19PVVRfU1VDQ0VTUywgUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkUsIFJFTU9WRV9GT0xMT1dFUl9SRVFVRVNULCBSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUyxcclxuXHRTSUdOX1VQX0ZBSUxVUkUsXHJcblx0U0lHTl9VUF9SRVFVRVNULFxyXG5cdFNJR05fVVBfU1VDQ0VTUyxcclxuXHRVTkZPTExPV19GQUlMVVJFLFxyXG5cdFVORk9MTE9XX1JFUVVFU1QsXHJcblx0VU5GT0xMT1dfU1VDQ0VTUyxcclxufSBmcm9tIFwiLi4vcmVkdWNlcnMvdXNlclwiO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGxvZ0luQVBJKGRhdGEpIHsgLy8gZ2VuZXJhdG9yIOyVhOuLmFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vcmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvbG9naW4nLCBkYXRhKSAvLyDsi6TsoJwg7ISc67KE7JeQIOuhnOq3uOyduCDsmpTssq3snYQg67O064OEIC8vIGZyb250XHJcblxyXG5cdC8vIOyLpOygnCDshJzrsoTsl5Ag66Gc6re47J24IOyalOyyreydhCDrs7Trg4QgLy8gYmFja1xyXG5cdC8vcmV0dXJuIGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzA2NS91c2VyL2xvZ2luJywgZGF0YSlcclxuXHJcblx0Ly8gbG9jYWxob3N0IOykkeuztSDsl4bslaDquLBcclxuXHRyZXR1cm4gYXhpb3MucG9zdCgnL3VzZXIvbG9naW4nLCBkYXRhKVxyXG59XHJcblxyXG4vLyDthYzsiqTtirgg7L2U65OcXHJcbi8vIGNvbnN0IGwgPSBsb2dJbih7dHlwZTogJ0xPR19JTl9SRVFVRVNUJywgZGF0YToge2lkOiAncmxhYWxzZG44QG5hdmVyLmNvbSd9fSlcclxuLy8gXHRcdGwubmV4dCgpO1xyXG4vLyBcdFx0bC5uZXh0KCk7XHJcbi8vLy8vLy8vLy8vLy8vLy8vXHJcbmZ1bmN0aW9uKiBsb2dJbihhY3Rpb24pIHsgLy8gbG9naW4gYWN0aW9uIHJlcXVlc3Qg6rCAIGFjdGlvbiDsl5Ag7KCE64usXHJcblx0dHJ5IHsgLy8g7JqU7LKtIOyLpO2MqCDrjIDruYRcclxuXHRcdC8veWllbGQgZGVsYXkoMTAwMCkgLy8gZnJvbnRcclxuXHRcdGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9nSW5BUEksIGFjdGlvbi5kYXRhKSAvLyDshJzrsoTsl5DshJwg67Cb7J2AIOqysOqzvCDqsJLsnYQg67Cb7J2MXHJcblx0XHRjb25zb2xlLmxvZygnc2FnYSBsb2dJbiDsi6TtlonspJE6OicsIGFjdGlvbi5kYXRhKVxyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogTE9HX0lOX1NVQ0NFU1MsXHJcblx0XHRcdC8vZGF0YTogYWN0aW9uLmRhdGEsIC8vIGZyb250XHJcblx0XHRcdGRhdGE6IHJlc3VsdC5kYXRhIC8vICjshLHqs7Ug6rKw6rO8IOuLtOq5gCkgYmFja1xyXG5cdFx0fSlcclxuXHRcdGNvbnNvbGUubG9nKCdzYWdhIGxvZ0luIOyZhOujjCA6OicsIHJlc3VsdClcclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoJ2xvZ0luJywgZXJyKVxyXG5cdFx0eWllbGQgcHV0KHsgLy8gcHV0IOydgCBkaXNwYXRjaCDrnbzqs6Ag7IOd6rCB7ZWY7J6QXHJcblx0XHRcdHR5cGU6IExPR19JTl9GQUlMVVJFLFxyXG5cdFx0XHRlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEgLy8gKOyLpO2MqCDqsrDqs7wg64u06rmAKVxyXG5cdFx0fSlcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvZ091dEFQSSgpIHtcclxuXHQvLyByZXR1cm4gYXhpb3MucG9zdCgnL2FwaS9sb2dvdXQnKSBmcm9udFxyXG5cdHJldHVybiBheGlvcy5wb3N0KCcvdXNlci9sb2dvdXQnKVxyXG59XHJcblxyXG5mdW5jdGlvbiogbG9nT3V0KCkge1xyXG5cdHRyeSB7IC8vIOyalOyyrSDsi6TtjKgg64yA67mEXHJcblx0XHQvL3lpZWxkIGRlbGF5KDEwMDApIGZyb250XHJcblx0XHR5aWVsZCBjYWxsKGxvZ091dEFQSSkgLy8g7ISc67KE7JeQ7IScIOuwm+ydgCDqsrDqs7wg6rCS7J2EIOuwm+ydjCBiYWNrXHJcblx0XHRjb25zb2xlLmxvZygnc2FnYXM6OiBsb2dvdXQg7Iuk7ZaJJylcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IExPR19PVVRfU1VDQ0VTUyxcclxuXHRcdH0pXHJcblx0XHRjb25zb2xlLmxvZygnc2FnYXM6OiBsb2dvdXQg7JmE66OMJylcclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoJ2Zyb250IGxvZ091dCA6ICcsIGVycilcclxuXHRcdHlpZWxkIHB1dCh7IC8vIHB1dCDsnYAgZGlzcGF0Y2gg65286rOgIOyDneqwge2VmOyekFxyXG5cdFx0XHR0eXBlOiBMT0dfT1VUX0ZBSUxVUkUsXHJcblx0XHRcdGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSAvLyAo7Iuk7YyoIOqysOqzvCDri7TquYApXHJcblx0XHR9KVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2hhbmdlTmlja25hbWVBUEkoZGF0YSkgeyAvLyBnZW5lcmF0b3Ig7JWE64uYXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgLy8g7Iuk7KCcIOyEnOuyhOyXkCDroZzqt7jsnbgg7JqU7LKt7J2EIOuztOuDhCAvLyBiYWNrXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgLy9yZXR1cm4gYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDY1L3VzZXIvbG9naW4nLCBkYXRhKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IC8vIGxvY2FsaG9zdCDspJHrs7Ug7JeG7JWg6riwXHJcblx0cmV0dXJuIGF4aW9zLnBhdGNoKCcvdXNlci9uaWNrbmFtZScsIHtuaWNrbmFtZTogZGF0YX0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBjaGFuZ2VOaWNrbmFtZShhY3Rpb24pIHsgLy8gbG9naW4gYWN0aW9uIHJlcXVlc3Qg6rCAIGFjdGlvbiDsl5Ag7KCE64usXHJcblx0dHJ5IHsgLy8g7JqU7LKtIOyLpO2MqCDrjIDruYRcclxuXHRcdC8veWllbGQgZGVsYXkoMTAwMCkgLy8gZnJvbnRcclxuXHRcdGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoY2hhbmdlTmlja25hbWVBUEksIGFjdGlvbi5kYXRhKSAvLyDshJzrsoTsl5DshJwg67Cb7J2AIOqysOqzvCDqsJLsnYQg67Cb7J2MXHJcblx0XHRjb25zb2xlLmxvZygnc2FnYSBjaGFuZ2VOaWNrbmFtZSDsi6TtlonspJE6OicsIGFjdGlvbi5kYXRhKVxyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MsXHJcblx0XHRcdC8vZGF0YTogYWN0aW9uLmRhdGEsIC8vIGZyb250XHJcblx0XHRcdGRhdGE6IHJlc3VsdC5kYXRhIC8vICjshLHqs7Ug6rKw6rO8IOuLtOq5gCkgYmFja1xyXG5cdFx0fSlcclxuXHRcdGNvbnNvbGUubG9nKCdzYWdhIGNoYW5nZU5pY2tuYW1lIOyZhOujjCA6OicsIHJlc3VsdClcclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoJ2NoYW5nZU5pY2tuYW1lJywgZXJyKVxyXG5cdFx0eWllbGQgcHV0KHsgLy8gcHV0IOydgCBkaXNwYXRjaCDrnbzqs6Ag7IOd6rCB7ZWY7J6QXHJcblx0XHRcdHR5cGU6IENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFLFxyXG5cdFx0XHRlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEgLy8gKOyLpO2MqCDqsrDqs7wg64u06rmAKVxyXG5cdFx0fSlcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRNeUluZm9BUEkodXNlcklkKSB7XHJcblx0Ly8g7ISc67KE7JeQIOyalOyyreydhCDrs7TrgrTripQg67aA67aEXHJcblx0cmV0dXJuIGF4aW9zLmdldCh1c2VySWQgPyBgL3VzZXIvJHt1c2VySWR9YCA6ICcvdXNlci8nLCB7XHJcblx0XHR3aXRoQ3JlZGVudGlhbHM6IHRydWUsLy8g7YG065287J207Ja47Yq47JeQ7IScIOyalOyyrSDrs7Trgrwg65WM64qUIOu4jOudvOyasOyggOqwgCDsv6DtgqTrpbwg6rCZ7J20IOuPmeu0ie2VtOykmOyalFxyXG5cdH0pOyAvLyDshJzrsoTsgqzsnbTrk5zroIzrjZTrp4Hsnbwg65WM64qULCDruIzrnbzsmrDsoIDqsIAg7JeG7Ja07JqULlxyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZE15SW5mbyhhY3Rpb24pIHtcclxuXHR0cnkge1xyXG5cdFx0Y29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkTXlJbmZvQVBJLCBhY3Rpb24uZGF0YSlcclxuXHRcdGNvbnNvbGUubG9nKCdzYWdhIGxvYWRNeUluZm8g7Iuk7ZaJIDo6ICcsIGFjdGlvbi5kYXRhKVxyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogTE9BRF9NWV9JTkZPX1NVQ0NFU1MsXHJcblx0XHRcdGRhdGE6IHJlc3VsdC5kYXRhLFxyXG5cdFx0XHRtZTogIWFjdGlvbi5kYXRhXHJcblx0XHR9KVxyXG5cdFx0Y29uc29sZS5sb2coJ3NhZ2EgbG9hZE15SW5mbyDshLHqs7U6OiAnLCByZXN1bHQpXHJcblx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRjb25zb2xlLmVycm9yKCdzYWdhIGxvYWRNeUluZm8gZXJyb3IgOjogJywgZXJyKVxyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogTE9BRF9NWV9JTkZPX0ZBSUxVUkUsXHJcblx0XHRcdGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YVxyXG5cdFx0fSlcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvbGxvd0FQSShkYXRhKSB7IC8vIGRhdGEg7JeQIOyCrOyaqeyekCBpZCDrhKPslrTso7zquLBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgLy8gcmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvZm9sbG93JywgZGF0YSkgZnJvbnRcclxuXHRyZXR1cm4gYXhpb3MucGF0Y2goYC91c2VyLyR7ZGF0YX0vZm9sbG93YClcclxufVxyXG5cclxuZnVuY3Rpb24qIGZvbGxvdyhhY3Rpb24pIHtcclxuXHR0cnkge1xyXG5cdFx0Ly95aWVsZCBkZWxheSgxMDAwKSBmcm9udFxyXG5cdFx0Y29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChmb2xsb3dBUEksIGFjdGlvbi5kYXRhKVxyXG5cdFx0Y29uc29sZS5sb2coJ3NhZ2EgZm9sbG93IOyLpO2WiSA6ICcsIHJlc3VsdClcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IEZPTExPV19TVUNDRVNTLFxyXG5cdFx0XHQvL2RhdGE6IGFjdGlvbi5kYXRhIGZyb250XHJcblx0XHRcdGRhdGE6IHJlc3VsdC5kYXRhXHJcblx0XHR9KVxyXG5cdFx0Y29uc29sZS5sb2coJ3NhZ2EgZm9sbG93IOyZhOujjCA6OiAnLCByZXN1bHQpXHJcblx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRjb25zb2xlLmVycm9yKCdzYWdhIGZvbGxvdyBlcnJvciA6OiAnLCBlcnIpXHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOiBGT0xMT1dfRkFJTFVSRSxcclxuXHRcdFx0ZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG5cdFx0fSlcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVuZm9sbG93QVBJKGRhdGEpIHsvLyBkYXRhIOyXkCDsgqzsmqnsnpAgaWQg64Sj7Ja07KO86riwXHJcblx0Ly9yZXR1cm4gYXhpb3MucG9zdCgnL2FwaS91bmZvbGxvdycsIGRhdGEpIGZyb250XHJcblx0cmV0dXJuIGF4aW9zLmRlbGV0ZShgL3VzZXIvJHtkYXRhfS9mb2xsb3dgKVxyXG59XHJcblxyXG5mdW5jdGlvbiogdW5mb2xsb3coYWN0aW9uKSB7XHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwodW5mb2xsb3dBUEksIGFjdGlvbi5kYXRhKVxyXG5cdFx0Ly95aWVsZCBkZWxheSgxMDAwKSBmcm9udFxyXG5cdFx0Y29uc29sZS5sb2coJ3NhZ2EgdW5mb2xsb3cg7JqU7LKtIDo6ICcsIGFjdGlvbi5kYXRhKVxyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogVU5GT0xMT1dfU1VDQ0VTUyxcclxuXHRcdFx0Ly9kYXRhOiBhY3Rpb24uZGF0YSBmcm9udFxyXG5cdFx0XHRkYXRhOiByZXN1bHQuZGF0YVxyXG5cdFx0fSlcclxuXHRcdGNvbnNvbGUubG9nKCdzYWdhIHVuZm9sbG93IOyEseqztTo6ICcsIHJlc3VsdClcclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoJ3NhZ2EgdW5mb2xsb3cgZXJyb3I6OiAnLCBlcnIpXHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOiBVTkZPTExPV19GQUlMVVJFLFxyXG5cdFx0XHRlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcblx0XHR9KVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2lnblVwQVBJKGRhdGEpIHtcclxuXHQvLyBiYWNrIGVuZCBzZXJ2ZXIgYWRkclxyXG5cdC8vIGRhdGEg64qUIGVtYWlsLCBuaWNrbmFtZSwgcGFzc3dvcmQgb2JqZWN0XHJcblx0Ly9yZXR1cm4gYXhpb3MucG9zdCgnL2FwaS9zaWdudXAnLCBkYXRhKSAvLyBmcm9udFxyXG5cdHJldHVybiBheGlvcy5wb3N0KCcvdXNlcicsIGRhdGEpIC8vIGJhY2tcclxufVxyXG5cclxuZnVuY3Rpb24qIHNpZ25VcChhY3Rpb24pIHtcclxuXHR0cnkge1xyXG5cdFx0Ly95aWVsZCBkZWxheSgxMDAwKVxyXG5cdFx0Y29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChzaWduVXBBUEksIGFjdGlvbi5kYXRhKVxyXG5cdFx0Y29uc29sZS5sb2coJ3NhZ2Egc2lnbiB1cCByZXN1bHQg7Iuk7ZaJ7KSRIDo6ICcsIGFjdGlvbi5kYXRhKVxyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogU0lHTl9VUF9TVUNDRVNTLFxyXG5cdFx0XHQvL2RhdGE6IHJlc3VsdC5kYXRhXHJcblx0XHR9KVxyXG5cdFx0Y29uc29sZS5sb2coJ3NhZ2Egc2lnbiB1cCDsmYTro4wgOjogJywgcmVzdWx0KVxyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0Y29uc29sZS5lcnJvcignc2FnYSBzaWduVXAgZXJyb3IgOiAnLCBlcnIpXHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOiBTSUdOX1VQX0ZBSUxVUkUsXHJcblx0XHRcdGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YVxyXG5cdFx0fSlcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRGb2xsb3dlcnNBUEkoZGF0YSkge1xyXG5cdHJldHVybiBheGlvcy5nZXQoJy91c2VyL2ZvbGxvd2VycycsIGRhdGEpXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkRm9sbG93ZXJzKGFjdGlvbikge1xyXG5cdHRyeSB7XHJcblx0XHRjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRGb2xsb3dlcnNBUEksIGFjdGlvbi5kYXRhKVxyXG5cdFx0Y29uc29sZS5sb2coJ3NhZ2EgZm9sbG93ZXJzOjog7JqU7LKtJywgYWN0aW9uLmRhdGEpXHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOiBMT0FEX0ZPTExPV0VSU19TVUNDRVNTLFxyXG5cdFx0XHRkYXRhOiByZXN1bHQuZGF0YSxcclxuXHRcdH0pXHJcblx0XHRjb25zb2xlLmxvZygnc2FnYSBmb2xsb3dlcnM6OiDshLHqs7UnLCByZXN1bHQpXHJcblx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRjb25zb2xlLmVycm9yKCdzYWdhIGZvbGxvd2Vyczo6JywgZXJyKVxyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogTE9BRF9GT0xMT1dFUlNfRkFJTFVSRSxcclxuXHRcdFx0ZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG5cdFx0fSlcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRGb2xsb3dpbmdzQVBJKGRhdGEpIHtcclxuXHRyZXR1cm4gYXhpb3MuZ2V0KCcvdXNlci9mb2xsb3dpbmdzJywgZGF0YSlcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRGb2xsb3dpbmdzKGFjdGlvbikge1xyXG5cdHRyeSB7XHJcblx0XHRjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRGb2xsb3dpbmdzQVBJLCBhY3Rpb24uZGF0YSlcclxuXHRcdGNvbnNvbGUubG9nKCdzYWdhIGZvbGxvd2luZ3Mg7JqU7LKtOjonLCBhY3Rpb24uZGF0YSlcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IExPQURfRk9MTE9XSU5HU19TVUNDRVNTLFxyXG5cdFx0XHRkYXRhOiByZXN1bHQuZGF0YVxyXG5cdFx0fSlcclxuXHRcdGNvbnNvbGUubG9nKCdzYWdhIGZvbGxvd2luZ3Mg7ISx6rO1OjonLCByZXN1bHQpXHJcblx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRjb25zb2xlLmVycm9yKCdzYWdhIGZvbGxvd2luZ3Mg7Iuk7YyoOjonLCBlcnIpXHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOiBMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRSxcclxuXHRcdFx0ZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhXHJcblx0XHR9KVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlRm9sbG93ZXJBUEkoZGF0YSkge1xyXG5cdHJldHVybiBheGlvcy5kZWxldGUoYC91c2VyL2ZvbGxvd2VyLyR7ZGF0YX1gKSAvLyDrqofrsojsp7jsnZgg7YyU66Gc7JuM66W8IOygnOqxsO2VnOuLpFxyXG59XHJcblxyXG5mdW5jdGlvbiogcmVtb3ZlRm9sbG93ZXIoYWN0aW9uKSB7XHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwocmVtb3ZlRm9sbG93ZXJBUEksIGFjdGlvbi5kYXRhKVxyXG5cdFx0Y29uc29sZS5sb2coJ3NhZ2EgcmVtb3ZlRm9sbG93ZXIg7JqU7LKtOjogJywgYWN0aW9uLmRhdGEpXHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOiBSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUyxcclxuXHRcdFx0ZGF0YTogcmVzdWx0LmRhdGFcclxuXHRcdH0pXHJcblx0XHRjb25zb2xlLmxvZygnc2FnYSByZW1vdmVGb2xsb3dlciDshLHqs7U6OiAnLCByZXN1bHQpXHJcblx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRjb25zb2xlLmVycm9yKCdzYWdhIHJlbW92ZUZvbGxvd2VyIOyLpO2MqDo6ICcsIGVycilcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IFJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFLFxyXG5cdFx0XHRlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGFcclxuXHRcdH0pXHJcblx0fVxyXG59XHJcbmZ1bmN0aW9uIGxvYWRVc2VyQVBJKGRhdGEpe1xyXG5cdHJldHVybiBheGlvcy5nZXQoYC91c2VyLyR7ZGF0YX1gKVxyXG59XHJcbmZ1bmN0aW9uKiBsb2FkVXNlcihhY3Rpb24pe1xyXG5cdHRyeSB7XHJcblx0ICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZFVzZXJBUEksIGFjdGlvbi5kYXRhKVxyXG5cdFx0Y29uc29sZS5sb2coJ3NhZ2EgbG9hZFVzZXIg7Iuk7ZaJIDo6ICcsIGFjdGlvbi5kYXRhKVxyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogTE9BRF9VU0VSX1NVQ0NFU1MsXHJcblx0XHRcdGRhdGE6IHJlc3VsdC5kYXRhXHJcblx0XHR9KVxyXG5cdFx0Y29uc29sZS5sb2coJ3NhZ2EgbG9hZFVzZXIg7ISx6rO1IDo6ICcsIHJlc3VsdClcclxuXHR9Y2F0Y2ggKGVycikge1xyXG5cdFx0Y29uc29sZS5lcnJvcignc2FnYSBsb2FkVXNlciBGYWlsdXJlIOyLpO2MqCA6OiAnLCBlcnIpXHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOiBMT0FEX1VTRVJfRkFJTFVSRSxcclxuXHRcdFx0ZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhXHJcblx0XHR9KVxyXG5cdH1cclxufVxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkVXNlcigpe1xyXG5cdHlpZWxkIHRha2VMYXRlc3QoTE9BRF9VU0VSX1JFUVVFU1QsIGxvYWRVc2VyKVxyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaFJlbW92ZUZvbGxvd2VyKCkge1xyXG5cdHlpZWxkIHRha2VMYXRlc3QoUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1QsIHJlbW92ZUZvbGxvd2VyKVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkRm9sbG93ZXJzKCkge1xyXG5cdHlpZWxkIHRha2VMYXRlc3QoTE9BRF9GT0xMT1dFUlNfUkVRVUVTVCwgbG9hZEZvbGxvd2VycylcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZEZvbGxvd2luZ3MoKSB7XHJcblx0eWllbGQgdGFrZUxhdGVzdChMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVCwgbG9hZEZvbGxvd2luZ3MpXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaENoYW5nZU5pY2tuYW1lKCkge1xyXG5cdHlpZWxkIHRha2VMYXRlc3QoQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QsIGNoYW5nZU5pY2tuYW1lKVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkTXlJbmZvKCkge1xyXG5cdHlpZWxkIHRha2VMYXRlc3QoTE9BRF9NWV9JTkZPX1JFUVVFU1QsIGxvYWRNeUluZm8pXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEZvbGxvdygpIHtcclxuXHR5aWVsZCB0YWtlTGF0ZXN0KEZPTExPV19SRVFVRVNULCBmb2xsb3cpXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFVuRm9sbG93KCkge1xyXG5cdHlpZWxkIHRha2VMYXRlc3QoVU5GT0xMT1dfUkVRVUVTVCwgdW5mb2xsb3cpXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvZ0luKCkge1x0Ly8g66Gc6re47J24IOyVoeyFmOydtCDsi6TtlonrkKDrlYzquYzsp4Ag6riw64uk66as6rKg64uk64qUIOucu1xyXG5cdHlpZWxkIHRha2VMYXRlc3QoTE9HX0lOX1JFUVVFU1QsIGxvZ0luKSAvL0xPR19JTl9SRVFVRVNUIOyVoeyFmOydtCDsi6TtlonrkJjrqbQgbG9nSW4g7ZWo7IiYIOyLpO2WiVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2dPdXQoKSB7XHQvLyDroZzqt7jslYTsm4Mg7JWh7IWY7J20IOyLpO2WieuQoOuVjOq5jOyngCDquLDri6TrpqzqsqDri6TripQg65y7XHJcblx0eWllbGQgdGFrZUxhdGVzdChMT0dfT1VUX1JFUVVFU1QsIGxvZ091dCkgLy9MT0dfT1VUX1JFUVVFU1Qg7JWh7IWY7J20IOyLpO2WieuQmOuptCBsb2dJbiDtlajsiJgg7Iuk7ZaJXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFNpZ25VcCgpIHtcdC8vIO2ajOybkOqwgOyehSDslaHshZjsnbQg7Iuk7ZaJ65Cg65WM6rmM7KeAIOq4sOuLpOumrOqyoOuLpOuKlCDrnLtcclxuXHR5aWVsZCB0YWtlTGF0ZXN0KFNJR05fVVBfUkVRVUVTVCwgc2lnblVwKSAvLyBTSUdOX1VQX1JFUVVFU1Qg7JWh7IWY7J20IOyLpO2WieuQmOuptCBsb2dJbiDtlajsiJgg7Iuk7ZaJXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiB1c2VyU2FnYSgpIHtcclxuXHR5aWVsZCBhbGwoW1xyXG5cdFx0XHRmb3JrKHdhdGNoTG9hZFVzZXIpLFxyXG5cdFx0Zm9yayh3YXRjaFJlbW92ZUZvbGxvd2VyKSxcclxuXHRcdGZvcmsod2F0Y2hMb2FkRm9sbG93ZXJzKSxcclxuXHRcdGZvcmsod2F0Y2hMb2FkRm9sbG93aW5ncyksXHJcblx0XHRmb3JrKHdhdGNoQ2hhbmdlTmlja25hbWUpLFxyXG5cdFx0Zm9yayh3YXRjaExvYWRNeUluZm8pLFxyXG5cdFx0Zm9yayh3YXRjaEZvbGxvdyksXHJcblx0XHRmb3JrKHdhdGNoVW5Gb2xsb3cpLFxyXG5cdFx0Zm9yayh3YXRjaExvZ0luKSxcclxuXHRcdGZvcmsod2F0Y2hMb2dPdXQpLFxyXG5cdFx0Zm9yayh3YXRjaFNpZ25VcCksXHJcblx0XSlcclxufVxyXG4iLCJpbXBvcnQge2NyZWF0ZVdyYXBwZXJ9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcidcclxuaW1wb3J0IHthcHBseU1pZGRsZXdhcmUsIGNvbXBvc2UsIGNyZWF0ZVN0b3JlfSBmcm9tICdyZWR1eCdcclxuaW1wb3J0IHtjb21wb3NlV2l0aERldlRvb2xzfSBmcm9tICdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nXHJcbi8vaW1wb3J0IHRodW5rTWlkZGxld2FyZSBmcm9tICdyZWR1eC10aHVuaydcclxuaW1wb3J0IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXNhZ2EnXHJcbmltcG9ydCByZWR1Y2VyIGZyb20gJy4uL3JlZHVjZXJzJ1xyXG5pbXBvcnQgcm9vdFNhZ2EgZnJvbSAnLi4vc2FnYXMnXHJcblxyXG5cclxuLy8gY29uc3QgbG9nZ2VyTWlkZGxld2FyZSA9ICh7IGRpc3BhdGNoLCBnZXRTdGF0ZX0pID0+IChuZXh0KSA9PiAoYWN0aW9uKSA9PiB7XHJcbi8vICAgY29uc29sZS5sb2coYWN0aW9uKSAvLyDrr7jrk6Tsm6jslrTrpbwg7Zmc7Jqp7ZW0IOumrOuNleyKpCDrjbDruIztiLTspogg7LKY65+8IOyVoeyFmCDroZzqt7gg7LCN7Z6I6rKMIO2VmOq4sFxyXG4vLyAgIHJldHVybiBuZXh0KGFjdGlvbilcclxuLy8gfVxyXG5cclxuY29uc3QgY29uZmlndXJlU3RvcmUgPSAoY29udGV4dCkgPT4ge1xyXG5cdGNvbnNvbGUubG9nKCdjb25maWd1cmVTdG9yZSBjb250ZXh0IDo6ICcsIGNvbnRleHQpXHJcblx0Y29uc3Qgc2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhTWlkZGxld2FyZSgpIC8vIHNhZ2Eg7ISk7KCVIOuwqeuylVxyXG5cdGNvbnN0IG1pZGRsZXdhcmVzID0gW3NhZ2FNaWRkbGV3YXJlXVxyXG5cdGNvbnN0IGVuaGFuY2VyID1cclxuXHRcdFx0cHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJ1xyXG5cdFx0XHRcdFx0PyBjb21wb3NlKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpXHJcblx0XHRcdFx0XHQ6IGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSlcclxuXHRjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGVuaGFuY2VyKVxyXG5cdHN0b3JlLnNhZ2FUYXNrID0gc2FnYU1pZGRsZXdhcmUucnVuKHJvb3RTYWdhKVxyXG5cdHJldHVybiBzdG9yZVxyXG59XHJcbmNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKFxyXG5cdFx0Y29uZmlndXJlU3RvcmUsXHJcblx0XHQvLyDsmLXshZjqsJ3ssrQg65SU67KE6re46rCAIO2KuOujqOydtOuptCDrpqzrjZXsiqTsl5DqtIDtlbTshJwg7J6Q7IS47ZWcIOyEpOuqheydtOuCmOyYpOq4sOuVjOusuOyXkCDqsJzrsJztlaDrlZAgdHJ1ZSDroZwg64aT7J6QXHJcblx0XHR7ZGVidWc6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnfSxcclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlclxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpbW1lclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJlZHV4LXdyYXBwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2FcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYS9lZmZlY3RzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=