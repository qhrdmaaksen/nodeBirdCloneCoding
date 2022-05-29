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

/***/ "./config/config.js":
/*!**************************!*\
  !*** ./config/config.js ***!
  \**************************/
/*! exports provided: backUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backUrl", function() { return backUrl; });
const backUrl = 'http://api.vitamin777.shop';

/***/ }),

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
/*reducers/index.js 보시면 user 랑 post 를 불러와서 합치고 있습니다.
rootReducer 가 state 고, user 와 post 는 각각 state.user, state.post 가 됩니다.
user.js의 me는 state.user.me가 됩니다.*/


/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, LOAD_HASHTAG_POSTS_REQUEST, LOAD_HASHTAG_POSTS_SUCCESS, LOAD_HASHTAG_POSTS_FAILURE, LOAD_USER_POSTS_REQUEST, LOAD_USER_POSTS_SUCCESS, LOAD_USER_POSTS_FAILURE, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE, LOAD_POST_REQUEST, LOAD_POST_SUCCESS, LOAD_POST_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, UPDATE_POST_REQUEST, UPDATE_POST_SUCCESS, UPDATE_POST_FAILURE, LIKE_POST_REQUEST, LIKE_POST_SUCCESS, LIKE_POST_FAILURE, UPLOAD_IMAGES_REQUEST, UPLOAD_IMAGES_SUCCESS, UPLOAD_IMAGES_FAILURE, UNLIKE_POST_REQUEST, UNLIKE_POST_SUCCESS, UNLIKE_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, RETWEET_REQUEST, RETWEET_SUCCESS, RETWEET_FAILURE, REMOVE_IMAGE, addPost, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_HASHTAG_POSTS_REQUEST", function() { return LOAD_HASHTAG_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_HASHTAG_POSTS_SUCCESS", function() { return LOAD_HASHTAG_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_HASHTAG_POSTS_FAILURE", function() { return LOAD_HASHTAG_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_POSTS_REQUEST", function() { return LOAD_USER_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_POSTS_SUCCESS", function() { return LOAD_USER_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_POSTS_FAILURE", function() { return LOAD_USER_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_REQUEST", function() { return LOAD_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_SUCCESS", function() { return LOAD_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_FAILURE", function() { return LOAD_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_REQUEST", function() { return LOAD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_SUCCESS", function() { return LOAD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_FAILURE", function() { return LOAD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_REQUEST", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_SUCCESS", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_FAILURE", function() { return ADD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_POST_REQUEST", function() { return UPDATE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_POST_SUCCESS", function() { return UPDATE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_POST_FAILURE", function() { return UPDATE_POST_FAILURE; });
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
/* harmony import */ var _util_produce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/produce */ "./util/produce.js");
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
  loadPostLoading: false,
  // 게시글 로드중 로딩
  loadPostDone: false,
  // 게시글 로드 완료되었을때 true 변환
  loadPostError: null,
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

  /*loadHashtagPostsLoading: false, // 해쉬태그 게시글들 로드중 로딩
  loadHashtagPostsDone: false, // 해쉬태그 게시글 로드 완료되었을때 true 변환
  loadHashtagPostsError: null,*/
  addPostLoading: false,
  // 게시물 등록중 로딩
  addPostDone: false,
  // 게시물 추가가 완료되었을때 true 변환
  addPostError: null,
  updatePostLoading: false,
  // 게시글 수정 로딩
  updatePostDone: false,
  // 게시글 수정 완료 후 로딩
  updatePostError: null,
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
const LOAD_POSTS_REQUEST = 'LOAD_POSTS_REQUEST'; // 화면을 로딩하면 바로 LOAD_POSTS_REQUEST 를 호출해줄것

const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';
const LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE';
const LOAD_POST_REQUEST = 'LOAD_POST_REQUEST'; // 게시물을 로딩하면 바로 LOAD_POST_REQUEST 를 호출해줄것

const LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS';
const LOAD_POST_FAILURE = 'LOAD_POST_FAILURE';
const ADD_POST_REQUEST = 'ADD_POST_REQUEST'; // 변수로 따로 만들어줘야 중간에 오타가나는 일을 막을 수 있다

const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
const ADD_POST_FAILURE = 'ADD_POST_FAILURE';
const UPDATE_POST_REQUEST = 'UPDATE_POST_REQUEST';
const UPDATE_POST_SUCCESS = 'UPDATE_POST_SUCCESS';
const UPDATE_POST_FAILURE = 'UPDATE_POST_FAILURE';
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

const reducer = (state = initialState, action) => Object(_util_produce__WEBPACK_IMPORTED_MODULE_0__["default"])(state, draft => {
  // immer 사용시 state 를 draft 로 교체해주며, switch 문인걸 인식하고 break 를 까먹지말자
  switch (action.type) {
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

    case REMOVE_IMAGE:
      draft.imagePaths = draft.imagePaths.filter((v, i) => i !== action.data);
      console.log('reducer REMOVE_IMAGE 성공');
      break;

    case UPLOAD_IMAGES_REQUEST:
      draft.uploadImagesLoading = true;
      draft.uploadImagesDone = false;
      draft.uploadImagesError = null;
      console.log('reducer UPLOAD_IMAGES_REQUEST 요청::');
      break;

    case UPLOAD_IMAGES_SUCCESS:
      {
        draft.imagePaths = draft.imagePaths.concat(action.data); //기존이미지가있으면 기존이미지에 추가된 이미지 같이 업로드되게

        draft.uploadImagesLoading = false;
        draft.uploadImagesDone = true;
        console.log('reducer UPLOAD_IMAGES_SUCCESS 성공::');
        break;
      }

    case UPLOAD_IMAGES_FAILURE:
      draft.uploadImagesLoading = false;
      draft.uploadImagesError = action.error;
      console.error('reducer UPLOAD_IMAGES_FAILURE 실패:::', action.error);
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

    case LOAD_POST_REQUEST:
      draft.loadPostLoading = true;
      draft.loadPostDone = false;
      draft.loadPostError = null;
      console.log('reducer LOAD_POST_REQUEST 요청:: ');
      break;

    case LOAD_POST_SUCCESS:
      draft.loadPostLoading = false;
      draft.loadPostDone = true;
      draft.singlePost = action.data; // 하나의 게시물만 로드

      console.log('reducer LOAD_POST_SUCCESS 성공:: ');
      break;

    case LOAD_POST_FAILURE:
      draft.loadPostLoading = false;
      draft.loadPostError = action.error;
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
      draft.addPostLoading = false;
      draft.addPostDone = true;
      draft.mainPosts.unshift(action.data); // back 실제 데이터

      draft.imagePaths = []; // add post 성공 시, 사용자 게시글 작성에 이미지 초기화

      break;

    case ADD_POST_FAILURE:
      draft.addPostLoading = false;
      draft.addPostError = action.error;
      break;

    case UPDATE_POST_REQUEST:
      draft.updatePostLoading = true;
      draft.updatePostDone = false;
      draft.updatePostError = null;
      break;

    case UPDATE_POST_SUCCESS:
      draft.updatePostLoading = false;
      draft.updatePostDone = true;
      draft.mainPosts.find(v => v.id === action.data.PostId).content = action.data.content;
      break;

    case UPDATE_POST_FAILURE:
      draft.updatePostLoading = false;
      draft.updatePostError = action.error;
      break;

    case REMOVE_POST_REQUEST:
      draft.removePostLoading = true;
      draft.removePostDone = false;
      draft.removePostError = null;
      break;

    case REMOVE_POST_SUCCESS:
      draft.removePostLoading = false;
      draft.removePostDone = true;
      draft.mainPosts = draft.mainPosts.filter(v => v.id !== action.data.PostId); // 지울땐 보통 filter 가 편하다

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
/* harmony import */ var _util_produce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/produce */ "./util/produce.js");
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

const reducer = (state = initialState, action) => Object(_util_produce__WEBPACK_IMPORTED_MODULE_0__["default"])(state, draft => {
  switch (action.type) {
    case REMOVE_FOLLOWER_REQUEST:
      draft.removeFollowerLoading = true;
      draft.removeFollowerError = null;
      draft.removeFollowerDone = false;
      console.log('reducer removeFollower 요청');
      break;

    case REMOVE_FOLLOWER_SUCCESS:
      // 나의 팔로워 제거
      draft.removeFollowerLoading = false;
      draft.me.Followers = draft.me.Followers.filter(v => v.id !== action.data.UserId);
      draft.removeFollowerDone = true;
      console.log('reducer removeFollower 성공');
      break;

    case REMOVE_FOLLOWER_FAILURE:
      console.error('removeFollowerFail 실패:: ' + action.error);
      draft.removeFollowerLoading = false;
      draft.removeFollowerError = action.error;
      break;

    case LOAD_FOLLOWINGS_REQUEST:
      draft.loadFollowingsLoading = true;
      draft.loadFollowingsError = null;
      draft.loadFollowingsDone = false;
      console.log('reducer LOAD_FOLLOWINGS_REQUEST 요청');
      break;

    case LOAD_FOLLOWINGS_SUCCESS:
      draft.loadFollowingsLoading = false;
      draft.me.Followings = action.data;
      draft.loadFollowingsDone = true;
      console.log('reducer LOAD_FOLLOWINGS_SUCCESS 성공');
      break;

    case LOAD_FOLLOWINGS_FAILURE:
      draft.loadFollowingsLoading = false;
      draft.loadFollowingsError = action.error;
      console.error('reducer LOAD_FOLLOWINGS 실패', action.error);
      break;

    case LOAD_FOLLOWERS_REQUEST:
      draft.loadFollowersLoading = true;
      draft.loadFollowersError = null;
      draft.loadFollowersDone = false;
      console.log('reducer LOAD_FOLLOWERS_REQUEST 요청');
      break;

    case LOAD_FOLLOWERS_SUCCESS:
      draft.loadFollowersLoading = false;
      draft.me.Followers = action.data;
      draft.loadFollowersDone = true;
      console.log('reducer LOAD_FOLLOWERS_SUCCESS 성공');
      break;

    case LOAD_FOLLOWERS_FAILURE:
      draft.loadFollowersLoading = false;
      draft.loadFollowersError = action.error;
      console.error('reducer LOAD_FOLLOWERS 실패', action.error);
      break;

    case LOAD_MY_INFO_REQUEST:
      // store 에서 보낸 state 가 만들어짐, state 자체가 user.js 의 state 임
      draft.loadMyInfoLoading = true;
      draft.loadMyInfoError = null; // 로딩 중일때는 에러 없앰

      draft.loadMyInfoDone = false;
      console.log('reducer myInfo 요청');
      break;

    case LOAD_MY_INFO_SUCCESS:
      draft.me = action.data; // back 내 정보가 들어있음

      draft.loadMyInfoLoading = false; //draft.me = dummyUser(action.data)

      draft.loadMyInfoDone = true;
      console.log('reducer myInfo 성공');
      break;

    case LOAD_MY_INFO_FAILURE:
      console.error('loadMyInfoFail 실패:: ' + action.error);
      draft.loadMyInfoLoading = false;
      draft.loadMyInfoError = action.error;
      break;

    case LOAD_USER_REQUEST:
      // store 에서 보낸 state 가 만들어짐, state 자체가 user.js 의 state 임
      draft.loadUserLoading = true;
      draft.loadUserDone = false;
      draft.loadUserError = null; // 로딩 중일때는 에러 없앰

      console.log('reducer myInfo 요청');
      break;

    case LOAD_USER_SUCCESS:
      draft.loadUserLoading = false;
      draft.userInfo = action.data; // back 상대 정보가 들어있음

      draft.loadUserDone = true; //draft.me = dummyUser(action.data)

      console.log('reducer myInfo 성공');
      break;

    case LOAD_USER_FAILURE:
      console.error('loadUserFail 실패:: ' + action.error);
      draft.loadUserLoading = false;
      draft.loadUserError = action.error;
      break;

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
      draft.me.nickname = action.data.nickname;
      draft.changeNicknameLoading = false;
      draft.changeNicknameDone = true;
      console.log('reducer CHANGE_NICKNAME_SUCCESS 성공');
      break;

    case CHANGE_NICKNAME_FAILURE:
      draft.changeNicknameLoading = false;
      draft.changeNicknameError = action.error;
      console.error('reducer CHANGE_NICKNAME 실패', action.error);
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
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config/config */ "./config/config.js");
//import {all, fork, takeLatest, call, put, delay} from 'redux-saga/effects';





axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.baseURL = 'http://localhost:3065'; // front
//axios.defaults.baseURL = backUrl // back, aws ip

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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");



 //import shortId from "shortid"; front
// restAPI

function retweetAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`/post/${data}/retweet`);
}

function* retweet(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(retweetAPI, action.data);
    console.log('saga retweet 실행:::', action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["RETWEET_SUCCESS"],
      data: result.data
    });
    console.log('saga retweet 성공:::', result);
  } catch (err) {
    console.error('saga retweet 실패 ::: ', err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["RETWEET_FAILURE"],
      error: err.response.data
    });
  }
}

function uploadImagesAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/post/images', data); // form data 를 {name:data} 형식으로 감싸면 json 되기때문에 사용하면 안됨
}

function* uploadImages(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(uploadImagesAPI, action.data);
    console.log('saga uploadImages 실행::: ', action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_IMAGES_SUCCESS"],
      data: result.data
    });
    console.log('saga uploadImages 성공::: ', result);
  } catch (err) {
    console.error('saga uploadImages error::: ', err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_IMAGES_FAILURE"],
      error: err.response.data
    });
  }
}

function likePostAPI(data) {
  // 3 전달되면
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.patch(`/post/${data}/like`); // 4 데이터가 간다, like & unlike 는 patch ( 게시글에 일부분 수정이기때문 )
}

function* likePost(action) {
  // 1 액션에서
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(likePostAPI, action.data); // 2 데이터를 꺼내서

    console.log('likePost 실행중:::', result);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LIKE_POST_SUCCESS"],
      data: result.data // back, postId, userId 들어있음

    });
    console.log('likePost 완료:::', result);
  } catch (err) {
    console.error('likePost error::: ', err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LIKE_POST_FAILURE"],
      error: err.response.data
    });
  }
}

function unlikePostAPI(data) {
  // 3 전달되면
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(`/post/${data}/like`); // 4 데이터가 간다
}

function* unlikePost(action) {
  // 1 액션에서
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(unlikePostAPI, action.data); // 2 데이터를 꺼내서

    console.log('unlikePost 실행중:::', result);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UNLIKE_POST_SUCCESS"],
      data: result.data // back, postId,userId 들어있음

    });
    console.log('UNLIKEPost 완료:::', result);
  } catch (err) {
    console.error('UNLIKEPost error::: ', err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UNLIKE_POST_FAILURE"],
      error: err.response.data
    });
  }
}

function loadPostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`/post/${data}`);
}

function* loadPost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadPostAPI, action.data);
    console.log('saga loadPost 요청 ::: ', action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POST_SUCCESS"],
      data: result.data
    });
    console.log('saga loadPost 성공 ::: ', result);
  } catch (err) {
    console.dir('saga loadPost 실패 ::: ', err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POST_FAILURE"],
      error: err.response.data
    });
  }
}

function loadHashtagPostsAPI(data, lastId) {
  // 인자를 두 개 넘겨줄수도 있다
  // 한글 or 특수문자 들어가면 error, encode 로 감싸주자
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`/hashtag/${encodeURIComponent(data)}?lastId=${lastId || 0}`);
}

function* loadHashtagPosts(action) {
  try {
    console.log(`loadHashtagPosts log :::`);
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadHashtagPostsAPI, action.data, action.lastId);
    console.log('saga loadHashtagPosts 요청 ::: ', action.data, action.lastId);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_HASHTAG_POSTS_SUCCESS"],
      data: result.data
    });
    console.log('saga loadHashtagPosts 성공 ::: ');
  } catch (err) {
    console.error('saga loadHashtagPosts error ::: ', err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_HASHTAG_POSTS_FAILURE"],
      error: err.response.data
    });
  }
}

function loadUserPostsAPI(data, lastId) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`/user/${data}/posts?lastId=${lastId || 0}`);
}

function* loadUserPosts(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadUserPostsAPI, action.data, action.lastId);
    console.log('saga loadUserPosts 실행 ::: ', action.data, action.lastId);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_POSTS_SUCCESS"],
      data: result.data
    });
    console.log('saga loadPostsSuccess 성공::: ', result);
  } catch (err) {
    console.dir('saga loadUserPosts error ::: ', err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_POSTS_FAILURE"],
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
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`/posts?lastId=${lastId || 0}`); // 4 데이터가 간다 ,
}

function* loadPosts(action) {
  // 1 액션에서
  try {
    console.log('Sagas loadPosts 실행중::: ', action.lastId);
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadPostsAPI, action.lastId); // 2 데이터를 꺼내서
    //yield delay(1000) front

    console.log('sagas loadPosts 완료::: ', result);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_SUCCESS"],
      // data: generateDummyPost(10), // data 10 개 front
      data: result.data
    });
  } catch (err) {
    console.dir('saga loadPosts error: ', err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
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
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/post', data); // 4 데이터가 간다
}

function* addPost(action) {
  // 1 액션에서
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(addPostAPI, action.data); // 2 데이터를 꺼내서
    //yield delay(1000) front
    //const id = shortId.generate() // front 의 더미 아디

    console.log('addPost 실행중:::', result);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_SUCCESS"],

      /*data: { // front dummy
      	id,
      	content: action.data,
      }*/
      data: result.data // back, 실제로 게시글이 들어있음

    });
    console.log('addPost 완료:::', result);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_TO_ME"],
      // data: id, // front dummy
      data: result.data.id // back

    });
  } catch (err) {
    console.error('saga addPost error::: ', err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_FAILURE"],
      error: err.response.data
    });
  }
}

function updatePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.patch(`/post/${data.id}`, data);
}

function* updatePost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(updatePostAPI, action.data);
    console.log('updatePost 실행::: ', action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UPDATE_POST_SUCCESS"],
      data: result.data
    });
    console.log('updatePost 성공::: ', result.data);
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UPDATE_POST_FAILURE"],
      error: err.response.data
    });
  }
}

function removePostAPI(data) {
  // 3 전달되면
  //return axios.post('/api/post', data) // 4 데이터가 간다 front
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(`/post/${data}`); // 4 데이터가 간다 back //delete 의 data 는 post.id (PostCard.js)에서 확인 가능
}

function* removePost(action) {
  // 1 액션에서
  try {
    // 포스트 리듀서상태와 유저리듀서상태와 동시에 한방에 바꿀수 없기때문에 액션을 두번으로 바꿔준다,
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(removePostAPI, action.data); // 2 데이터를 꺼내서
    //yield delay(1000) front

    console.log('removePost 실행::: ', action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_SUCCESS"],
      data: result.data // 어떤 게시물을 지웠는지 id 가있을것,

    });
    console.log('removePost 완료::: ', result);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_OF_ME"],
      //data: action.data, front
      data: action.data // action 이 들어왔을때 데이터

    });
  } catch (err) {
    console.error('saga removePost error: ', err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_FAILURE"],
      error: err.response.data
    });
  }
}

function addCommentAPI(data) {
  // 3 전달되면
  //주소는 백엔드와 프론트의 약속일뿐 정해진건없다
  //return axios.post(`/api/post/${data.postId}/comment`, data) // 4 데이터가 간다 // front
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`/post/${data.postId}/comment`, data); // 4 데이터가 간다 // POST /post/1/comment
}

function* addComment(action) {
  // 1 액션에서
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(addCommentAPI, action.data); // 2 데이터를 꺼내서 //back
    //yield delay(1000) front

    console.log('addComment 실행중 :::', action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_SUCCESS"],
      //data: action.data // front
      data: result.data
    });
    console.log('addComment 완료:::', result);
  } catch (err) {
    console.error('saga addComment error::: ', err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_FAILURE"],
      error: err.response.data
    });
  }
}

function* watchRetweet() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["RETWEET_REQUEST"], retweet);
}

function* watchUploadImages() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_IMAGES_REQUEST"], uploadImages);
}

function* watchLikePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["LIKE_POST_REQUEST"], likePost);
}

function* watchUnlikePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["UNLIKE_POST_REQUEST"], unlikePost);
}

function* watchLoadPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POST_REQUEST"], loadPost);
}

function* watchLoadHashtagPosts() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["throttle"])(5000, _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_HASHTAG_POSTS_REQUEST"], loadHashtagPosts);
}

function* watchLoadUserPosts() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["throttle"])(5000, _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_POSTS_REQUEST"], loadUserPosts);
}

function* watchLoadPosts() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["throttle"])(5000, _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_REQUEST"], loadPosts);
}

function* watchAddPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_REQUEST"], addPost);
}

function* watchUpdatePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["UPDATE_POST_REQUEST"], updatePost);
}

function* watchRemovePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_REQUEST"], removePost);
}

function* watchAddComment() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_REQUEST"], addComment);
}

function* postSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchRetweet), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchUploadImages), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchUnlikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchAddPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadUserPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadHashtagPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchUpdatePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchRemovePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchAddComment)]);
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

function loadUserAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/user/${data}`);
}

function* loadUser(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadUserAPI, action.data);
    console.log('saga loadUser 실행 :: ', result.data);
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
} //function loadMyInfoAPI(userId) {


function loadMyInfoAPI() {
  // 서버에 요청을 보내는 부분
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/user'); // 서버사이드렌더링일 때는, 브라우저가 없어요.
}

function* loadMyInfo() {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadMyInfoAPI);
    console.log('saga loadMyInfo 실행 :: ');
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_MY_INFO_SUCCESS"],
      data: result.data
    });
    console.log('saga loadMyInfo 성공:: ', result);
  } catch (err) {
    console.error('saga loadMyInfo error :: ', err);
    console.dir('saga loadMyInfo error :: ', err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_MY_INFO_FAILURE"],
      error: err.response.data
    });
  }
}

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

function* watchLoadUser() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_REQUEST"], loadUser);
}

function* watchLoadMyInfo() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_MY_INFO_REQUEST"], loadMyInfo);
}

function* watchFollow() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_REQUEST"], follow);
}

function* watchUnfollow() {
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
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadUser), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRemoveFollower), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadFollowers), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadFollowings), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchChangeNickname), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadMyInfo), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchFollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUnfollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogIn), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogOut), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchSignUp)]);
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





const loggerMiddleware = ({
  dispatch,
  getState
}) => next => action => {
  console.log(action); // 미들웨어를 활용해 리덕스 데브툴즈 처럼 액션 로그 찍히게 하기

  return next(action);
};

const configureStore = () => {
  console.log('configureStore context :: ');
  const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_3___default()(); // saga 설정 방법

  const middlewares = [sagaMiddleware, loggerMiddleware];
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

/***/ "./util/produce.js":
/*!*************************!*\
  !*** ./util/produce.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ((...args) => {
  // 프로듀스 함수 확장
  Object(immer__WEBPACK_IMPORTED_MODULE_0__["enableES5"])();
  return immer__WEBPACK_IMPORTED_MODULE_0___default()(...args);
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3Bvc3QuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy9wb3N0LmpzIiwid2VicGFjazovLy8uL3NhZ2FzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvY29uZmlndXJlU3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbC9wcm9kdWNlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaW1tZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2FcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhL2VmZmVjdHNcIiJdLCJuYW1lcyI6WyJiYWNrVXJsIiwiTm9kZUJpcmQiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJlbGVtZW50VHlwZSIsImlzUmVxdWlyZWQiLCJ3cmFwcGVyIiwid2l0aFJlZHV4Iiwicm9vdFJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJIWURSQVRFIiwiY29uc29sZSIsImxvZyIsInBheWxvYWQiLCJjb21iaW5lZFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJ1c2VyIiwicG9zdCIsImluaXRpYWxTdGF0ZSIsIm1haW5Qb3N0cyIsInNpbmdsZVBvc3QiLCJpbWFnZVBhdGhzIiwiaGFzTW9yZVBvc3RzIiwibGlrZVBvc3RMb2FkaW5nIiwibGlrZVBvc3REb25lIiwibGlrZVBvc3RFcnJvciIsInJldHdlZXRMb2FkaW5nIiwicmV0d2VldERvbmUiLCJyZXR3ZWV0RXJyb3IiLCJ1bmxpa2VQb3N0TG9hZGluZyIsInVubGlrZVBvc3REb25lIiwidW5saWtlUG9zdEVycm9yIiwibG9hZFBvc3RMb2FkaW5nIiwibG9hZFBvc3REb25lIiwibG9hZFBvc3RFcnJvciIsInVwbG9hZEltYWdlc0xvYWRpbmciLCJ1cGxvYWRJbWFnZXNEb25lIiwidXBsb2FkSW1hZ2VzRXJyb3IiLCJsb2FkUG9zdHNMb2FkaW5nIiwibG9hZFBvc3RzRG9uZSIsImxvYWRQb3N0c0Vycm9yIiwiYWRkUG9zdExvYWRpbmciLCJhZGRQb3N0RG9uZSIsImFkZFBvc3RFcnJvciIsInVwZGF0ZVBvc3RMb2FkaW5nIiwidXBkYXRlUG9zdERvbmUiLCJ1cGRhdGVQb3N0RXJyb3IiLCJyZW1vdmVQb3N0TG9hZGluZyIsInJlbW92ZVBvc3REb25lIiwicmVtb3ZlUG9zdEVycm9yIiwiYWRkQ29tbWVudExvYWRpbmciLCJhZGRDb21tZW50RG9uZSIsImFkZENvbW1lbnRFcnJvciIsIkxPQURfSEFTSFRBR19QT1NUU19SRVFVRVNUIiwiTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX0hBU0hUQUdfUE9TVFNfRkFJTFVSRSIsIkxPQURfVVNFUl9QT1NUU19SRVFVRVNUIiwiTE9BRF9VU0VSX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX1VTRVJfUE9TVFNfRkFJTFVSRSIsIkxPQURfUE9TVFNfUkVRVUVTVCIsIkxPQURfUE9TVFNfU1VDQ0VTUyIsIkxPQURfUE9TVFNfRkFJTFVSRSIsIkxPQURfUE9TVF9SRVFVRVNUIiwiTE9BRF9QT1NUX1NVQ0NFU1MiLCJMT0FEX1BPU1RfRkFJTFVSRSIsIkFERF9QT1NUX1JFUVVFU1QiLCJBRERfUE9TVF9TVUNDRVNTIiwiQUREX1BPU1RfRkFJTFVSRSIsIlVQREFURV9QT1NUX1JFUVVFU1QiLCJVUERBVEVfUE9TVF9TVUNDRVNTIiwiVVBEQVRFX1BPU1RfRkFJTFVSRSIsIkxJS0VfUE9TVF9SRVFVRVNUIiwiTElLRV9QT1NUX1NVQ0NFU1MiLCJMSUtFX1BPU1RfRkFJTFVSRSIsIlVQTE9BRF9JTUFHRVNfUkVRVUVTVCIsIlVQTE9BRF9JTUFHRVNfU1VDQ0VTUyIsIlVQTE9BRF9JTUFHRVNfRkFJTFVSRSIsIlVOTElLRV9QT1NUX1JFUVVFU1QiLCJVTkxJS0VfUE9TVF9TVUNDRVNTIiwiVU5MSUtFX1BPU1RfRkFJTFVSRSIsIlJFTU9WRV9QT1NUX1JFUVVFU1QiLCJSRU1PVkVfUE9TVF9TVUNDRVNTIiwiUkVNT1ZFX1BPU1RfRkFJTFVSRSIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJBRERfQ09NTUVOVF9TVUNDRVNTIiwiQUREX0NPTU1FTlRfRkFJTFVSRSIsIlJFVFdFRVRfUkVRVUVTVCIsIlJFVFdFRVRfU1VDQ0VTUyIsIlJFVFdFRVRfRkFJTFVSRSIsIlJFTU9WRV9JTUFHRSIsImFkZFBvc3QiLCJkYXRhIiwiYWRkQ29tbWVudCIsInJlZHVjZXIiLCJwcm9kdWNlIiwiZHJhZnQiLCJ1bnNoaWZ0IiwiZXJyb3IiLCJmaWx0ZXIiLCJ2IiwiaSIsImNvbmNhdCIsImZpbmQiLCJpZCIsIlBvc3RJZCIsIkxpa2VycyIsInB1c2giLCJVc2VySWQiLCJsZW5ndGgiLCJjb250ZW50IiwiQ29tbWVudHMiLCJsb2FkVXNlckxvYWRpbmciLCJsb2FkVXNlckRvbmUiLCJsb2FkVXNlckVycm9yIiwibG9hZE15SW5mb0xvYWRpbmciLCJsb2FkTXlJbmZvRG9uZSIsImxvYWRNeUluZm9FcnJvciIsInJlbW92ZUZvbGxvd2VyTG9hZGluZyIsInJlbW92ZUZvbGxvd2VyRG9uZSIsInJlbW92ZUZvbGxvd2VyRXJyb3IiLCJmb2xsb3dMb2FkaW5nIiwiZm9sbG93RG9uZSIsImZvbGxvd0Vycm9yIiwidW5mb2xsb3dMb2FkaW5nIiwidW5mb2xsb3dEb25lIiwidW5mb2xsb3dFcnJvciIsImxvYWRGb2xsb3dlcnNMb2FkaW5nIiwibG9hZEZvbGxvd2Vyc0RvbmUiLCJsb2FkRm9sbG93ZXJzRXJyb3IiLCJsb2FkRm9sbG93aW5nc0xvYWRpbmciLCJsb2FkRm9sbG93aW5nc0RvbmUiLCJsb2FkRm9sbG93aW5nc0Vycm9yIiwibG9nSW5Mb2FkaW5nIiwibG9nSW5Eb25lIiwibG9nSW5FcnJvciIsImxvZ091dExvYWRpbmciLCJsb2dPdXREb25lIiwibG9nT3V0RXJyb3IiLCJzaWduVXBMb2FkaW5nIiwic2lnblVwRG9uZSIsInNpZ25VcEVycm9yIiwiY2hhbmdlTmlja25hbWVMb2FkaW5nIiwiY2hhbmdlTmlja25hbWVEb25lIiwiY2hhbmdlTmlja25hbWVFcnJvciIsIm1lIiwic2lnblVwRGF0YSIsImxvZ2luRGF0YSIsInVzZXJJbmZvIiwiTE9BRF9VU0VSX1JFUVVFU1QiLCJMT0FEX1VTRVJfU1VDQ0VTUyIsIkxPQURfVVNFUl9GQUlMVVJFIiwiTE9BRF9NWV9JTkZPX1JFUVVFU1QiLCJMT0FEX01ZX0lORk9fU1VDQ0VTUyIsIkxPQURfTVlfSU5GT19GQUlMVVJFIiwiUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1QiLCJSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUyIsIlJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFIiwiTE9HX0lOX1JFUVVFU1QiLCJMT0dfSU5fU1VDQ0VTUyIsIkxPR19JTl9GQUlMVVJFIiwiTE9HX09VVF9SRVFVRVNUIiwiTE9HX09VVF9TVUNDRVNTIiwiTE9HX09VVF9GQUlMVVJFIiwiU0lHTl9VUF9SRVFVRVNUIiwiU0lHTl9VUF9TVUNDRVNTIiwiU0lHTl9VUF9GQUlMVVJFIiwiQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QiLCJDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyIsIkNIQU5HRV9OSUNLTkFNRV9GQUlMVVJFIiwiRk9MTE9XX1JFUVVFU1QiLCJGT0xMT1dfU1VDQ0VTUyIsIkZPTExPV19GQUlMVVJFIiwiVU5GT0xMT1dfUkVRVUVTVCIsIlVORk9MTE9XX1NVQ0NFU1MiLCJVTkZPTExPV19GQUlMVVJFIiwiTE9BRF9GT0xMT1dFUlNfUkVRVUVTVCIsIkxPQURfRk9MTE9XRVJTX1NVQ0NFU1MiLCJMT0FEX0ZPTExPV0VSU19GQUlMVVJFIiwiTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1QiLCJMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUyIsIkxPQURfRk9MTE9XSU5HU19GQUlMVVJFIiwiQUREX1BPU1RfVE9fTUUiLCJSRU1PVkVfUE9TVF9PRl9NRSIsImxvZ2luUmVxdWVzdEFjdGlvbiIsImxvZ291dFJlcXVlc3RBY3Rpb24iLCJGb2xsb3dlcnMiLCJGb2xsb3dpbmdzIiwibmlja25hbWUiLCJQb3N0cyIsImF4aW9zIiwiZGVmYXVsdHMiLCJiYXNlVVJMIiwid2l0aENyZWRlbnRpYWxzIiwicm9vdFNhZ2EiLCJhbGwiLCJmb3JrIiwicG9zdFNhZ2EiLCJ1c2VyU2FnYSIsInJldHdlZXRBUEkiLCJyZXR3ZWV0IiwicmVzdWx0IiwiY2FsbCIsInB1dCIsImVyciIsInJlc3BvbnNlIiwidXBsb2FkSW1hZ2VzQVBJIiwidXBsb2FkSW1hZ2VzIiwibGlrZVBvc3RBUEkiLCJwYXRjaCIsImxpa2VQb3N0IiwidW5saWtlUG9zdEFQSSIsImRlbGV0ZSIsInVubGlrZVBvc3QiLCJsb2FkUG9zdEFQSSIsImdldCIsImxvYWRQb3N0IiwiZGlyIiwibG9hZEhhc2h0YWdQb3N0c0FQSSIsImxhc3RJZCIsImVuY29kZVVSSUNvbXBvbmVudCIsImxvYWRIYXNodGFnUG9zdHMiLCJsb2FkVXNlclBvc3RzQVBJIiwibG9hZFVzZXJQb3N0cyIsImxvYWRQb3N0c0FQSSIsImxvYWRQb3N0cyIsImFkZFBvc3RBUEkiLCJ1cGRhdGVQb3N0QVBJIiwidXBkYXRlUG9zdCIsInJlbW92ZVBvc3RBUEkiLCJyZW1vdmVQb3N0IiwiYWRkQ29tbWVudEFQSSIsInBvc3RJZCIsIndhdGNoUmV0d2VldCIsInRha2VMYXRlc3QiLCJ3YXRjaFVwbG9hZEltYWdlcyIsIndhdGNoTGlrZVBvc3QiLCJ3YXRjaFVubGlrZVBvc3QiLCJ3YXRjaExvYWRQb3N0Iiwid2F0Y2hMb2FkSGFzaHRhZ1Bvc3RzIiwidGhyb3R0bGUiLCJ3YXRjaExvYWRVc2VyUG9zdHMiLCJ3YXRjaExvYWRQb3N0cyIsIndhdGNoQWRkUG9zdCIsIndhdGNoVXBkYXRlUG9zdCIsIndhdGNoUmVtb3ZlUG9zdCIsIndhdGNoQWRkQ29tbWVudCIsInJlbW92ZUZvbGxvd2VyQVBJIiwicmVtb3ZlRm9sbG93ZXIiLCJsb2FkRm9sbG93ZXJzQVBJIiwibG9hZEZvbGxvd2VycyIsImxvYWRGb2xsb3dpbmdzQVBJIiwibG9hZEZvbGxvd2luZ3MiLCJjaGFuZ2VOaWNrbmFtZUFQSSIsImNoYW5nZU5pY2tuYW1lIiwibG9hZFVzZXJBUEkiLCJsb2FkVXNlciIsImxvYWRNeUluZm9BUEkiLCJsb2FkTXlJbmZvIiwibG9nSW5BUEkiLCJsb2dJbiIsImxvZ091dEFQSSIsImxvZ091dCIsInNpZ25VcEFQSSIsInNpZ25VcCIsImZvbGxvd0FQSSIsImZvbGxvdyIsInVuZm9sbG93QVBJIiwidW5mb2xsb3ciLCJ3YXRjaFJlbW92ZUZvbGxvd2VyIiwid2F0Y2hMb2FkRm9sbG93ZXJzIiwid2F0Y2hMb2FkRm9sbG93aW5ncyIsIndhdGNoQ2hhbmdlTmlja25hbWUiLCJ3YXRjaExvYWRVc2VyIiwid2F0Y2hMb2FkTXlJbmZvIiwid2F0Y2hGb2xsb3ciLCJ3YXRjaFVuZm9sbG93Iiwid2F0Y2hMb2dJbiIsIndhdGNoTG9nT3V0Iiwid2F0Y2hTaWduVXAiLCJsb2dnZXJNaWRkbGV3YXJlIiwiZGlzcGF0Y2giLCJnZXRTdGF0ZSIsIm5leHQiLCJjb25maWd1cmVTdG9yZSIsInNhZ2FNaWRkbGV3YXJlIiwiY3JlYXRlU2FnYU1pZGRsZXdhcmUiLCJtaWRkbGV3YXJlcyIsImVuaGFuY2VyIiwiY29tcG9zZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwic2FnYVRhc2siLCJydW4iLCJjcmVhdGVXcmFwcGVyIiwiZGVidWciLCJhcmdzIiwiZW5hYmxlRVM1Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQUE7QUFBTyxNQUFNQSxPQUFPLEdBQUcsNEJBQWhCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQVA7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxNQUFNQyxRQUFRLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FDZixtRUFDQyxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDQztBQUFN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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLCtDIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJleHBvcnQgY29uc3QgYmFja1VybCA9ICdodHRwOi8vYXBpLnZpdGFtaW43Nzcuc2hvcCciLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgJ2FudGQvZGlzdC9hbnRkLmNzcyc7XG5cbmltcG9ydCB3cmFwcGVyIGZyb20gJy4uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlJztcblxuY29uc3QgTm9kZUJpcmQgPSAoeyBDb21wb25lbnQgfSkgPT4gKFxuXHRcdDw+XG5cdFx0XHQ8SGVhZD5cblx0XHRcdFx0PG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cblx0XHRcdFx0PHRpdGxlPk5vZGVCaXJkPC90aXRsZT5cblx0XHRcdDwvSGVhZD5cblx0XHRcdDxDb21wb25lbnQgLz5cblx0XHQ8Lz5cbik7XG5cbk5vZGVCaXJkLnByb3BUeXBlcyA9IHtcblx0Q29tcG9uZW50OiBQcm9wVHlwZXMuZWxlbWVudFR5cGUuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KE5vZGVCaXJkKTsiLCIvL2ltcG9ydCB7IHN0b3JlIH0gZnJvbSAnbmV4dC9kaXN0L2J1aWxkL291dHB1dC9zdG9yZSdcclxuaW1wb3J0IHtIWURSQVRFfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInXHJcbmltcG9ydCB7Y29tYmluZVJlZHVjZXJzfSBmcm9tICdyZWR1eCdcclxuaW1wb3J0IHVzZXIgZnJvbSAnLi91c2VyJ1xyXG5pbXBvcnQgcG9zdCBmcm9tICcuL3Bvc3QnXHJcblxyXG4vLyBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbi8vIFx0dXNlcjoge30sXHJcbi8vIFx0cG9zdDoge30sXHJcbi8vIH1cclxuXHJcbi8vIOu5hOuPmeq4sCDslaHshZgg7IOd7ISx6riwXHJcblxyXG4vLyDslaHshZgg7IOd7ISx6riwXHJcbi8qY29uc3QgY2hhbmdlTmlja25hbWUgPSAoZGF0YSkgPT4ge1xyXG5cdHJldHVybiB7XHJcblx0XHR0eXBlOiAnQ0hBTkdFX05JQ0tOQU1FJyxcclxuXHRcdGRhdGEsXHJcblx0fVxyXG59XHJcbmNoYW5nZU5pY2tuYW1lKCd2aXRhbWluNzc3JykqL1xyXG4vKntcclxuXHRcdHR5cGU6ICdDSEFOR0VfTklDS05BTUUnLFxyXG5cdFx0ZGF0YTogJ3ZpdGFtaW43NzcnLFxyXG59Ki9cclxuXHJcbi8qc3RvcmUuZGlzcGF0Y2goY2hhbmdlTmlja25hbWUoJ3ZpdGFtaW43Nzc3Nzc3JykpKi9cclxuXHJcbi8vIOumrOuTgOyEnCA6IOydtOyghOyDge2DnOyZgCDslaHshZjsnYQg7Ya17ZW0IOuLpOydjCDsg4Htg5zrpbwg66eM65Ok7Ja064K064qUIO2VqOyImFxyXG4vKiBDU1IgUkVEVUNFUlxyXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcblx0Ly8gdXNlciDsnbTri4jshZzsiqTthYzsnbTtirgsIHBvc3Qg7J2064uI7IWc7Iqk7YWM7J207Yq4IOy7tOuwlOyduCDrpqzrk4DshJzqsIAg7JWM7JWE7IScIO2VnOuwqeyXkCDrrLbslrTspIxcclxuXHRpbmRleDogKHN0YXRlID0ge30sIGFjdGlvbikgPT4ge1xyXG5cdFx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0XHRjYXNlIEhZRFJBVEU6XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ0hZRFJBVEUnLCBhY3Rpb24pXHJcblx0XHRcdFx0cmV0dXJuIHsuLi5zdGF0ZSwgLi4uYWN0aW9uLnBheWxvYWR9XHJcblx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0cmV0dXJuIHN0YXRlXHJcblx0XHR9XHJcblx0fSxcclxuXHR1c2VyLFxyXG5cdHBvc3QsXHJcbn0pKi9cclxuXHJcbi8vIFNTUlxyXG5jb25zdCByb290UmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7IC8vICjsnbTsoITsg4Htg5wgc3RhdGUsIOyVoeyFmCkgPT4g64uk7J2M7IOB7YOcXHJcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSBIWURSQVRFOlxyXG5cdFx0XHRjb25zb2xlLmxvZygncmVkdWNlciByb290UmVkdWNlciBIWURSQVRFIDo6ICcsIGFjdGlvbilcclxuXHRcdFx0cmV0dXJuIGFjdGlvbi5wYXlsb2FkXHJcblx0XHRkZWZhdWx0OiB7XHJcblx0XHRcdGNvbnN0IGNvbWJpbmVkUmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcblx0XHRcdFx0dXNlcixcclxuXHRcdFx0XHRwb3N0LFxyXG5cdFx0XHR9KVxyXG5cdFx0XHRyZXR1cm4gY29tYmluZWRSZWR1Y2VyKHN0YXRlLCBhY3Rpb24pXHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG4vKnJlZHVjZXJzL2luZGV4LmpzIOuztOyLnOuptCB1c2VyIOuekSBwb3N0IOulvCDrtojrn6zsmYDshJwg7ZWp7LmY6rOgIOyeiOyKteuLiOuLpC5cclxucm9vdFJlZHVjZXIg6rCAIHN0YXRlIOqzoCwgdXNlciDsmYAgcG9zdCDripQg6rCB6rCBIHN0YXRlLnVzZXIsIHN0YXRlLnBvc3Qg6rCAIOuQqeuLiOuLpC5cclxudXNlci5qc+ydmCBtZeuKlCBzdGF0ZS51c2VyLm1l6rCAIOuQqeuLiOuLpC4qL1xyXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlclxyXG4iLCIvL2ltcG9ydCBzaG9ydElkIGZyb20gJ3Nob3J0aWQnIGZyb250XHJcbi8vaW1wb3J0IHByb2R1Y2UgZnJvbSAnaW1tZXInXHJcbmltcG9ydCBwcm9kdWNlIGZyb20gJy4uL3V0aWwvcHJvZHVjZSc7IC8vIGllMTEg7KeA7JuQ7ZWY6riw7JyE7ZW0IOuUsOuhnCBwcm9kdWNlIO2VqOyImCDrp4zrk6xcclxuLy9pbXBvcnQgZmFrZXIgZnJvbSAnZmFrZXInIGZyb250XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG5cdG1haW5Qb3N0czogW10sIC8vIOqyjOyLnOusvCDsl6zrn6zqsJxcclxuXHRzaW5nbGVQb3N0OiBudWxsLCAvLyDqsozsi5zrrLwg7ZWY64KY66eMXHJcblx0aW1hZ2VQYXRoczogW10sIC8vIOydtOuvuOyngCDqsr3roZzrk6TsnbQg7KCA7J6l65CoXHJcblx0aGFzTW9yZVBvc3RzOiB0cnVlLCAvLyDrjZQg66eO7J2AIOqyjOyLnOusvCDqsIDsoLjsmKTquLBcclxuXHRsaWtlUG9zdExvYWRpbmc6IGZhbHNlLCAvLyDrnbzsnbTtgawg66Gc65Oc7KSRIOuhnOuUqVxyXG5cdGxpa2VQb3N0RG9uZTogZmFsc2UsIC8vIOudvOydtO2BrCDsmYTro4ztlojsnYTrlYwgdHJ1ZSDrs4DtmZhcclxuXHRsaWtlUG9zdEVycm9yOiBudWxsLFxyXG5cdHJldHdlZXRMb2FkaW5nOiBmYWxzZSwgLy8g66as7Yq47JyXIOuhnOuTnOykkSDroZzrlKlcclxuXHRyZXR3ZWV0RG9uZTogZmFsc2UsIC8vIOumrO2KuOyclyDsmYTro4zspJEg66Gc65SpXHJcblx0cmV0d2VldEVycm9yOiBudWxsLFxyXG5cdHVubGlrZVBvc3RMb2FkaW5nOiBmYWxzZSwgLy8g7Ja465287J207YGsIOuhnOuTnCDspJEg66Gc65SpXHJcblx0dW5saWtlUG9zdERvbmU6IGZhbHNlLCAvLyDslrjrnbzsnbTtgawg7JmE66OM7ZaI7J2E65WMIHRydWUg67OA7ZmYXHJcblx0dW5saWtlUG9zdEVycm9yOiBudWxsLFxyXG5cdGxvYWRQb3N0TG9hZGluZzogZmFsc2UsIC8vIOqyjOyLnOq4gCDroZzrk5zspJEg66Gc65SpXHJcblx0bG9hZFBvc3REb25lOiBmYWxzZSwgLy8g6rKM7Iuc6riAIOuhnOuTnCDsmYTro4zrkJjsl4jsnYTrlYwgdHJ1ZSDrs4DtmZhcclxuXHRsb2FkUG9zdEVycm9yOiBudWxsLFxyXG5cdHVwbG9hZEltYWdlc0xvYWRpbmc6IGZhbHNlLCAvLyDsnbTrr7jsp4Ag66Gc65OcIOykkSDroZzrlKlcclxuXHR1cGxvYWRJbWFnZXNEb25lOiBmYWxzZSwgLy8g7J2066+47KeAIOuhnOuTnCDsmYTro4ztlojsnYTrlYwgdHJ1ZSDrs4DtmZhcclxuXHR1cGxvYWRJbWFnZXNFcnJvcjogbnVsbCxcclxuXHQvKmxvYWRVc2VyUG9zdHNMb2FkaW5nOiBmYWxzZSwgLy8g7Yq57KCVIOyCrOyaqeyekCDqsozsi5zquIAg66Gc65Oc7KSRIOuhnOuUqVxyXG5cdGxvYWRVc2VyUG9zdHNEb25lOiBmYWxzZSwgLy8g7Yq57KCVIOyCrOyaqeyekCDqsozsi5zquIAg66Gc65OcIOyZhOujjOyLnCB0cnVlIOuzgO2ZmFxyXG5cdGxvYWRVc2VyUG9zdHNFcnJvcjogbnVsbCwqL1xyXG5cdGxvYWRQb3N0c0xvYWRpbmc6IGZhbHNlLCAvLyDtmZTrqbQg66Gc65Oc7KSRIOuhnOuUqVxyXG5cdGxvYWRQb3N0c0RvbmU6IGZhbHNlLCAvLyDtmZTrqbQg66Gc65OcIOyZhOujjOuQmOyXiOydhOuVjCB0cnVlIOuzgO2ZmFxyXG5cdGxvYWRQb3N0c0Vycm9yOiBudWxsLFxyXG5cdC8qbG9hZEhhc2h0YWdQb3N0c0xvYWRpbmc6IGZhbHNlLCAvLyDtlbTsiaztg5zqt7gg6rKM7Iuc6riA65OkIOuhnOuTnOykkSDroZzrlKlcclxuXHRsb2FkSGFzaHRhZ1Bvc3RzRG9uZTogZmFsc2UsIC8vIO2VtOyJrO2DnOq3uCDqsozsi5zquIAg66Gc65OcIOyZhOujjOuQmOyXiOydhOuVjCB0cnVlIOuzgO2ZmFxyXG5cdGxvYWRIYXNodGFnUG9zdHNFcnJvcjogbnVsbCwqL1xyXG5cdGFkZFBvc3RMb2FkaW5nOiBmYWxzZSwgLy8g6rKM7Iuc66y8IOuTseuhneykkSDroZzrlKlcclxuXHRhZGRQb3N0RG9uZTogZmFsc2UsIC8vIOqyjOyLnOusvCDstpTqsIDqsIAg7JmE66OM65CY7JeI7J2E65WMIHRydWUg67OA7ZmYXHJcblx0YWRkUG9zdEVycm9yOiBudWxsLFxyXG5cdHVwZGF0ZVBvc3RMb2FkaW5nOiBmYWxzZSwgLy8g6rKM7Iuc6riAIOyImOyglSDroZzrlKlcclxuXHR1cGRhdGVQb3N0RG9uZTogZmFsc2UsIC8vIOqyjOyLnOq4gCDsiJjsoJUg7JmE66OMIO2bhCDroZzrlKlcclxuXHR1cGRhdGVQb3N0RXJyb3I6bnVsbCxcclxuXHRyZW1vdmVQb3N0TG9hZGluZzogZmFsc2UsIC8vIOqyjOyLnOusvCDsgq3soJzspJEg66Gc65SpXHJcblx0cmVtb3ZlUG9zdERvbmU6IGZhbHNlLCAvLyDqsozsi5zrrLwg7IKt7KCc6rCAIOyZhOujjOuQmOyXiOydhOuVjCB0cnVlIOuzgO2ZmFxyXG5cdHJlbW92ZVBvc3RFcnJvcjogbnVsbCxcclxuXHRhZGRDb21tZW50TG9hZGluZzogZmFsc2UsIC8vIOuMk+q4gCDrk7HroZ3spJEg66Gc65SpXHJcblx0YWRkQ29tbWVudERvbmU6IGZhbHNlLCAvLyDqsozsi5zrrLwg7LaU6rCA6rCAIOyZhOujjOuQmOyXiOydhOuVjCB0cnVlIOuzgO2ZmFxyXG5cdGFkZENvbW1lbnRFcnJvcjogbnVsbCxcclxufVxyXG4vLyDsnbTrtoDrtoTsnYQg7IKs7Jqp7ZW07IScIOustO2VnCDsiqTtgazroaTrp4HsnYQg66eM65Ok6rKDIGZyb250XHJcbi8qZXhwb3J0IGNvbnN0IGdlbmVyYXRlRHVtbXlQb3N0ID0gKG51bWJlcikgPT4gQXJyYXkobnVtYmVyKS5maWxsKCkubWFwKCgpID0+ICh7XHJcblx0aWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuXHRVc2VyOiB7XHJcblx0XHRpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG5cdFx0bmlja25hbWU6IGZha2VyLm5hbWUuZmluZE5hbWUoKSxcclxuXHR9LFxyXG5cdGNvbnRlbnQ6IGZha2VyLmxvcmVtLnBhcmFncmFwaCgpLFxyXG5cdEltYWdlczogW3tcclxuXHRcdHNyYzogZmFrZXIuaW1hZ2UuaW1hZ2UoKSxcclxuXHR9XSxcclxuXHRDb21tZW50czogW3tcclxuXHRcdFVzZXI6IHtcclxuXHRcdFx0aWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuXHRcdFx0bmlja25hbWU6IGZha2VyLm5hbWUuZmluZE5hbWUoKSxcclxuXHRcdH0sXHJcblx0XHRjb250ZW50OiBmYWtlci5sb3JlbS5zZW50ZW5jZSgpLFxyXG5cdH1dLFxyXG59KSkqL1xyXG5cclxuLy/qsozsi5zquIAg7JWh7IWYXHJcbmV4cG9ydCBjb25zdCBMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVCA9ICdMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVCdcclxuZXhwb3J0IGNvbnN0IExPQURfSEFTSFRBR19QT1NUU19TVUNDRVNTID0gJ0xPQURfSEFTSFRBR19QT1NUU19TVUNDRVNTJ1xyXG5leHBvcnQgY29uc3QgTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkUgPSAnTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkUnXHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1QgPSAnTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1QnOyAvLyDtirnsoJUg7IKs7Jqp7J6Q7J2YIOqyjOyLnOq4gOydhCDroZzrlKntlZjrqbQg67CU66GcIExPQURfUE9TVFNfUkVRVUVTVCDrpbwg7Zi47Lac7ZW07KSE6rKDXHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTUyA9ICdMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfUE9TVFNfRkFJTFVSRSA9ICdMT0FEX1VTRVJfUE9TVFNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19SRVFVRVNUID0gJ0xPQURfUE9TVFNfUkVRVUVTVCc7IC8vIO2ZlOuptOydhCDroZzrlKntlZjrqbQg67CU66GcIExPQURfUE9TVFNfUkVRVUVTVCDrpbwg7Zi47Lac7ZW07KSE6rKDXHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX1NVQ0NFU1MgPSAnTE9BRF9QT1NUU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfRkFJTFVSRSA9ICdMT0FEX1BPU1RTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVF9SRVFVRVNUID0gJ0xPQURfUE9TVF9SRVFVRVNUJyAvLyDqsozsi5zrrLzsnYQg66Gc65Sp7ZWY66m0IOuwlOuhnCBMT0FEX1BPU1RfUkVRVUVTVCDrpbwg7Zi47Lac7ZW07KSE6rKDXHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RfU1VDQ0VTUyA9ICdMT0FEX1BPU1RfU1VDQ0VTUydcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVF9GQUlMVVJFID0gJ0xPQURfUE9TVF9GQUlMVVJFJ1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1JFUVVFU1QgPSAnQUREX1BPU1RfUkVRVUVTVCc7IC8vIOuzgOyImOuhnCDrlLDroZwg66eM65Ok7Ja07KSY7JW8IOykkeqwhOyXkCDsmKTtg4DqsIDrgpjripQg7J287J2EIOunieydhCDsiJgg7J6I64ukXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9TVUNDRVNTID0gJ0FERF9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfRkFJTFVSRSA9ICdBRERfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBVUERBVEVfUE9TVF9SRVFVRVNUID0gJ1VQREFURV9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgVVBEQVRFX1BPU1RfU1VDQ0VTUyA9ICdVUERBVEVfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFVQREFURV9QT1NUX0ZBSUxVUkUgPSAnVVBEQVRFX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX1JFUVVFU1QgPSAnTElLRV9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX1NVQ0NFU1MgPSAnTElLRV9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX0ZBSUxVUkUgPSAnTElLRV9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVQTE9BRF9JTUFHRVNfUkVRVUVTVCA9ICdVUExPQURfSU1BR0VTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgVVBMT0FEX0lNQUdFU19TVUNDRVNTID0gJ1VQTE9BRF9JTUFHRVNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBVUExPQURfSU1BR0VTX0ZBSUxVUkUgPSAnVVBMT0FEX0lNQUdFU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9SRVFVRVNUID0gJ1VOTElLRV9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgVU5MSUtFX1BPU1RfU1VDQ0VTUyA9ICdVTkxJS0VfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFVOTElLRV9QT1NUX0ZBSUxVUkUgPSAnVU5MSUtFX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfUkVRVUVTVCA9ICdSRU1PVkVfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1NVQ0NFU1MgPSAnUkVNT1ZFX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9GQUlMVVJFID0gJ1JFTU9WRV9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1JFUVVFU1QgPSAnQUREX0NPTU1FTlRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9TVUNDRVNTID0gJ0FERF9DT01NRU5UX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfRkFJTFVSRSA9ICdBRERfQ09NTUVOVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBSRVRXRUVUX1JFUVVFU1QgPSAnUkVUV0VFVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFJFVFdFRVRfU1VDQ0VTUyA9ICdSRVRXRUVUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgUkVUV0VFVF9GQUlMVVJFID0gJ1JFVFdFRVRfRkFJTFVSRSdcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfSU1BR0UgPSAnUkVNT1ZFX0lNQUdFJzsgLy8g64+Z6riwIOyYteyFmOydgCDtlZjrgpjrp4wg66eM65Ok7Ja064+EIOuQnOuLpFxyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFBvc3QgPSAoZGF0YSkgPT4gKHtcclxuXHR0eXBlOiBBRERfUE9TVF9SRVFVRVNULFxyXG5cdGRhdGEsXHJcbn0pXHJcblxyXG4vLyBkeW5hbWljIGFjdGlvbiBjcmVhdGVcclxuZXhwb3J0IGNvbnN0IGFkZENvbW1lbnQgPSAoZGF0YSkgPT4gKHtcclxuXHR0eXBlOiBBRERfQ09NTUVOVF9SRVFVRVNULFxyXG5cdGRhdGEsXHJcbn0pXHJcblxyXG4vKiBmcm9udCBkdW1teVxyXG5jb25zdCBkdW1teVBvc3QgPSAoZGF0YSkgPT4gKHtcclxuXHRpZDogZGF0YS5pZCxcclxuXHRjb250ZW50OiBkYXRhLmNvbnRlbnQsXHJcblx0VXNlcjoge1xyXG5cdFx0aWQ6IDEsXHJcblx0XHRuaWNrbmFtZTogJ+u5hO2DgOuvvCcsXHJcblx0fSxcclxuXHRJbWFnZXM6IFtdLFxyXG5cdENvbW1lbnRzOiBbXSxcclxufSlcclxuKi9cclxuXHJcbi8qIGZyb250IGR1bW15XHJcbmNvbnN0IGR1bW15Q29tbWVudCA9IChkYXRhKSA9PiAoe1xyXG5cdGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcblx0Y29udGVudDogZGF0YSxcclxuXHRVc2VyOiB7XHJcblx0XHRpZDogMSxcclxuXHRcdG5pY2tuYW1lOiAn67mE7YOA66+8JyxcclxuXHR9XHJcbn0pKi9cclxuLy8g7J207KCEIOyDge2DnOulvCDslaHshZjsnYQg7Ya17ZW0IOuLpOydjCDsg4Htg5zroZwg66eM65Ok7Ja064K064qUIO2VqOyImFxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xyXG5cdC8vIGltbWVyIOyCrOyaqeyLnCBzdGF0ZSDrpbwgZHJhZnQg66GcIOq1kOyytO2VtOyjvOupsCwgc3dpdGNoIOusuOyduOqxuCDsnbjsi53tlZjqs6AgYnJlYWsg66W8IOq5jOuoueyngOunkOyekFxyXG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgUkVUV0VFVF9SRVFVRVNUOlxyXG5cdFx0XHRkcmFmdC5yZXR3ZWV0TG9hZGluZyA9IHRydWVcclxuXHRcdFx0ZHJhZnQucmV0d2VldERvbmUgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC5yZXR3ZWV0RXJyb3IgPSBudWxsXHJcblx0XHRcdGNvbnNvbGUubG9nKCdyZWR1Y2VyIFJFVFdFRVRfUkVRVUVTVCDsmpTssq06OicpXHJcblx0XHRcdGJyZWFrXHJcblx0XHRjYXNlIFJFVFdFRVRfU1VDQ0VTUzoge1xyXG5cdFx0XHRkcmFmdC5yZXR3ZWV0TG9hZGluZyA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LnJldHdlZXREb25lID0gdHJ1ZVxyXG5cdFx0XHRkcmFmdC5tYWluUG9zdHMudW5zaGlmdChhY3Rpb24uZGF0YSkgLy8g66as7Yq47JyX65CcIOqyjOyLnOq4gCDrqZTsnbjtj6zsiqTtirjsl5Ag7LaU6rCAXHJcblx0XHRcdGNvbnNvbGUubG9nKCdyZWR1Y2VyIFJFVFdFRVRfU1VDQ0VTUyDshLHqs7U6OicpXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBSRVRXRUVUX0ZBSUxVUkU6XHJcblx0XHRcdGRyYWZ0LnJldHdlZXRMb2FkaW5nID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQucmV0d2VldEVycm9yID0gYWN0aW9uLmVycm9yXHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoJ3JlZHVjZXIgUkVUV0VFVF9GQUlMVVJFIOyLpO2MqDo6JywgYWN0aW9uLmRhdGEpXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBSRU1PVkVfSU1BR0U6XHJcblx0XHRcdGRyYWZ0LmltYWdlUGF0aHMgPSBkcmFmdC5pbWFnZVBhdGhzLmZpbHRlcigodiwgaSkgPT4gaSAhPT0gYWN0aW9uLmRhdGEpXHJcblx0XHRcdGNvbnNvbGUubG9nKCdyZWR1Y2VyIFJFTU9WRV9JTUFHRSDshLHqs7UnKVxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgVVBMT0FEX0lNQUdFU19SRVFVRVNUOlxyXG5cdFx0XHRkcmFmdC51cGxvYWRJbWFnZXNMb2FkaW5nID0gdHJ1ZVxyXG5cdFx0XHRkcmFmdC51cGxvYWRJbWFnZXNEb25lID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQudXBsb2FkSW1hZ2VzRXJyb3IgPSBudWxsXHJcblx0XHRcdGNvbnNvbGUubG9nKCdyZWR1Y2VyIFVQTE9BRF9JTUFHRVNfUkVRVUVTVCDsmpTssq06OicpXHJcblx0XHRcdGJyZWFrXHJcblx0XHRjYXNlIFVQTE9BRF9JTUFHRVNfU1VDQ0VTUzoge1xyXG5cdFx0XHRkcmFmdC5pbWFnZVBhdGhzID0gZHJhZnQuaW1hZ2VQYXRocy5jb25jYXQoYWN0aW9uLmRhdGEpLy/quLDsobTsnbTrr7jsp4DqsIDsnojsnLzrqbQg6riw7KG07J2066+47KeA7JeQIOy2lOqwgOuQnCDsnbTrr7jsp4Ag6rCZ7J20IOyXheuhnOuTnOuQmOqyjFxyXG5cdFx0XHRkcmFmdC51cGxvYWRJbWFnZXNMb2FkaW5nID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQudXBsb2FkSW1hZ2VzRG9uZSA9IHRydWVcclxuXHRcdFx0Y29uc29sZS5sb2coJ3JlZHVjZXIgVVBMT0FEX0lNQUdFU19TVUNDRVNTIOyEseqztTo6JylcclxuXHRcdFx0YnJlYWtcclxuXHRcdH1cclxuXHRcdGNhc2UgVVBMT0FEX0lNQUdFU19GQUlMVVJFOlxyXG5cdFx0XHRkcmFmdC51cGxvYWRJbWFnZXNMb2FkaW5nID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQudXBsb2FkSW1hZ2VzRXJyb3IgPSBhY3Rpb24uZXJyb3JcclxuXHRcdFx0Y29uc29sZS5lcnJvcigncmVkdWNlciBVUExPQURfSU1BR0VTX0ZBSUxVUkUg7Iuk7YyoOjo6JywgYWN0aW9uLmVycm9yKVxyXG5cdFx0XHRicmVha1xyXG5cdFx0Y2FzZSBMSUtFX1BPU1RfUkVRVUVTVDpcclxuXHRcdFx0ZHJhZnQubGlrZVBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuXHRcdFx0ZHJhZnQubGlrZVBvc3REb25lID0gZmFsc2U7XHJcblx0XHRcdGRyYWZ0Lmxpa2VQb3N0RXJyb3IgPSBudWxsO1xyXG5cdFx0XHRjb25zb2xlLmxvZygncmVkdWNlciBMSUtFX1BPU1RfUkVRVUVTVCDsmpTssq06OicpXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBMSUtFX1BPU1RfU1VDQ0VTUzoge1xyXG5cdFx0XHQvLyBtYWluUG9zdHMg7JeQ7IScIGlkIOqwgCDslaHshZjrjbDsnbTthLDtj6zsiqTtirjslYTsnbTrlJTrpbwg7LC+7JWE7IScXHJcblx0XHRcdGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEuUG9zdElkKTtcclxuXHRcdFx0Ly8g6rKM7Iuc6riAIOyii+yVhOyalCDriITrpbgg7IKs656M65Ok7JeQ6rKMIOyCrOyaqeyekCDslYTsnbTrlJTrpbwg64Sj7Ja07KSA64ukXHJcblx0XHRcdHBvc3QuTGlrZXJzLnB1c2goe2lkOiBhY3Rpb24uZGF0YS5Vc2VySWR9KTtcclxuXHRcdFx0ZHJhZnQubGlrZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcblx0XHRcdGRyYWZ0Lmxpa2VQb3N0RG9uZSA9IHRydWU7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdyZWR1Y2VyIExJS0VfUE9TVF9TVUNDRVNTIOyEseqztTo6JylcclxuXHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblx0XHRjYXNlIExJS0VfUE9TVF9GQUlMVVJFOlxyXG5cdFx0XHRkcmFmdC5saWtlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuXHRcdFx0ZHJhZnQubGlrZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuXHRcdFx0Y29uc29sZS5lcnJvcigncmVkdWNlciBMSUtFX1BPU1RfRkFJTFVSRSDsi6TtjKg6OjonLCBhY3Rpb24uZXJyb3IpXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBVTkxJS0VfUE9TVF9SRVFVRVNUOlxyXG5cdFx0XHRkcmFmdC51bmxpa2VQb3N0TG9hZGluZyA9IHRydWU7XHJcblx0XHRcdGRyYWZ0LnVubGlrZVBvc3REb25lID0gZmFsc2U7XHJcblx0XHRcdGRyYWZ0LnVubGlrZVBvc3RFcnJvciA9IG51bGw7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdyZWR1Y2VyIFVOTElLRV9QT1NUX1JFUVVFU1Qg7JqU7LKtOjonKVxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgVU5MSUtFX1BPU1RfU1VDQ0VTUzoge1xyXG5cdFx0XHRjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLlBvc3RJZCk7XHJcblx0XHRcdHBvc3QuTGlrZXJzID0gcG9zdC5MaWtlcnMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YS5Vc2VySWQpO1xyXG5cdFx0XHRkcmFmdC51bmxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG5cdFx0XHRkcmFmdC51bmxpa2VQb3N0RG9uZSA9IHRydWU7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdyZWR1Y2VyIFVOTElLRV9QT1NUX1NVQ0NFU1Mg7ISx6rO1OjonKVxyXG5cdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHRcdGNhc2UgVU5MSUtFX1BPU1RfRkFJTFVSRTpcclxuXHRcdFx0ZHJhZnQudW5saWtlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuXHRcdFx0ZHJhZnQudW5saWtlUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG5cdFx0XHRjb25zb2xlLmVycm9yKCdyZWR1Y2VyIFVOTElLRV9QT1NUX0ZBSUxVUkUg7Iuk7YyoOjo6JywgYWN0aW9uLmVycm9yKVxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgTE9BRF9QT1NUX1JFUVVFU1Q6XHJcblx0XHRcdGRyYWZ0LmxvYWRQb3N0TG9hZGluZyA9IHRydWVcclxuXHRcdFx0ZHJhZnQubG9hZFBvc3REb25lID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQubG9hZFBvc3RFcnJvciA9IG51bGxcclxuXHRcdFx0Y29uc29sZS5sb2coJ3JlZHVjZXIgTE9BRF9QT1NUX1JFUVVFU1Qg7JqU7LKtOjogJylcclxuXHRcdFx0YnJlYWtcclxuXHRcdGNhc2UgTE9BRF9QT1NUX1NVQ0NFU1M6XHJcblx0XHRcdGRyYWZ0LmxvYWRQb3N0TG9hZGluZyA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LmxvYWRQb3N0RG9uZSA9IHRydWVcclxuXHRcdFx0ZHJhZnQuc2luZ2xlUG9zdCA9IGFjdGlvbi5kYXRhOyAvLyDtlZjrgpjsnZgg6rKM7Iuc66y866eMIOuhnOuTnFxyXG5cdFx0XHRjb25zb2xlLmxvZygncmVkdWNlciBMT0FEX1BPU1RfU1VDQ0VTUyDshLHqs7U6OiAnKVxyXG5cdFx0XHRicmVha1xyXG5cdFx0Y2FzZSBMT0FEX1BPU1RfRkFJTFVSRTpcclxuXHRcdFx0ZHJhZnQubG9hZFBvc3RMb2FkaW5nID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQubG9hZFBvc3RFcnJvciA9IGFjdGlvbi5lcnJvclxyXG5cdFx0XHRicmVhaztcclxuXHRcdFx0Lyrrs7TthrUg7J2066CH6rKMIOqwmeydtCDsk7jsiJjsnojripQg6rK97Jqw64qUIO2VnCDtjpjsnbTsp4Dsl5DshJwg7JWh7IWYIOuRkOqwnOqwgCDqsJnsnbQg7IKs7Jqp65CY7KeAIOyViuydhOuVjOuKlCDsg4Htg5zqsIAg7ISc66GcIOqzteycoOuQmOuPhCDrkJzri6QqL1xyXG5cdFx0Y2FzZSBMT0FEX1VTRVJfUE9TVFNfUkVRVUVTVDpcclxuXHRcdGNhc2UgTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1Q6XHJcblx0XHRjYXNlIExPQURfUE9TVFNfUkVRVUVTVDpcclxuXHRcdFx0ZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IHRydWU7XHJcblx0XHRcdGRyYWZ0LmxvYWRQb3N0c0RvbmUgPSBmYWxzZTtcclxuXHRcdFx0ZHJhZnQubG9hZFBvc3RzRXJyb3IgPSBudWxsO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgTE9BRF9VU0VSX1BPU1RTX1NVQ0NFU1M6XHJcblx0XHRjYXNlIExPQURfSEFTSFRBR19QT1NUU19TVUNDRVNTOlxyXG5cdFx0Y2FzZSBMT0FEX1BPU1RTX1NVQ0NFU1M6XHJcblx0XHRcdGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSBmYWxzZTtcclxuXHRcdFx0ZHJhZnQubG9hZFBvc3RzRG9uZSA9IHRydWU7XHJcblx0XHRcdC8vIGFjdGlvbi5kYXRhIOyXkCBkdW1teSBkYXRhIOqwgCDrk6TslrTsnojsnYTqsoPsnbTrqbAsIOq4sOyhtOuNsOydtO2EsOyZgCDtlanss5Dso7zripTqsoNcclxuXHRcdFx0Ly8gY29uY2F0IOydhCDtlaDrlZAg7ZWt7IOBIOyVnuyXkCDrjIDsnoXsnYQg7ZW07KSY7JW87ZWc64ukIOq3uOuemOyVvCDtlanss5Dsp5BcclxuXHRcdFx0Ly9kcmFmdC5tYWluUG9zdHMgPSBhY3Rpb24uZGF0YS5jb25jYXQoZHJhZnQubWFpblBvc3RzKSBmcm9udFxyXG5cdFx0XHRkcmFmdC5tYWluUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMuY29uY2F0KGFjdGlvbi5kYXRhKTtcclxuXHRcdFx0Ly8g6rKM7Iuc66y87J2EIDUwIOqwnOq5jOyngOunjCDqsIDsoLjsmKTqsqDri6RcclxuXHRcdFx0Ly9kcmFmdC5oYXNNb3JlUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMubGVuZ3RoIDwgNTAgZnJvbnRcclxuXHRcdFx0ZHJhZnQuaGFzTW9yZVBvc3RzID0gYWN0aW9uLmRhdGEubGVuZ3RoID09PSAxMDtcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIExPQURfVVNFUl9QT1NUU19GQUlMVVJFOlxyXG5cdFx0Y2FzZSBMT0FEX0hBU0hUQUdfUE9TVFNfRkFJTFVSRTpcclxuXHRcdGNhc2UgTE9BRF9QT1NUU19GQUlMVVJFOlxyXG5cdFx0XHRkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gZmFsc2U7XHJcblx0XHRcdGRyYWZ0LmxvYWRQb3N0c0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgQUREX1BPU1RfUkVRVUVTVDpcclxuXHRcdFx0ZHJhZnQuYWRkUG9zdExvYWRpbmcgPSB0cnVlO1xyXG5cdFx0XHRkcmFmdC5hZGRQb3N0RG9uZSA9IGZhbHNlO1xyXG5cdFx0XHRkcmFmdC5hZGRQb3N0RXJyb3IgPSBudWxsO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgQUREX1BPU1RfU1VDQ0VTUzpcclxuXHRcdFx0Ly8gZHJhZnQubWFpblBvc3RzLnVuc2hpZnQoZHVtbXlQb3N0KGFjdGlvbi5kYXRhKSkgLy8gZnJvbnQgZHVtbXlcclxuXHRcdFx0ZHJhZnQuYWRkUG9zdExvYWRpbmcgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC5hZGRQb3N0RG9uZSA9IHRydWVcclxuXHRcdFx0ZHJhZnQubWFpblBvc3RzLnVuc2hpZnQoYWN0aW9uLmRhdGEpIC8vIGJhY2sg7Iuk7KCcIOuNsOydtO2EsFxyXG5cdFx0XHRkcmFmdC5pbWFnZVBhdGhzID0gW107IC8vIGFkZCBwb3N0IOyEseqztSDsi5wsIOyCrOyaqeyekCDqsozsi5zquIAg7J6R7ISx7JeQIOydtOuvuOyngCDstIjquLDtmZRcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIEFERF9QT1NUX0ZBSUxVUkU6XHJcblx0XHRcdGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcblx0XHRcdGRyYWZ0LmFkZFBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFVQREFURV9QT1NUX1JFUVVFU1Q6XHJcblx0XHRcdGRyYWZ0LnVwZGF0ZVBvc3RMb2FkaW5nPXRydWU7XHJcblx0XHRcdGRyYWZ0LnVwZGF0ZVBvc3REb25lPWZhbHNlO1xyXG5cdFx0XHRkcmFmdC51cGRhdGVQb3N0RXJyb3I9bnVsbDtcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFVQREFURV9QT1NUX1NVQ0NFU1M6XHJcblx0XHRcdGRyYWZ0LnVwZGF0ZVBvc3RMb2FkaW5nPWZhbHNlO1xyXG5cdFx0XHRkcmFmdC51cGRhdGVQb3N0RG9uZT10cnVlO1xyXG5cdFx0XHRkcmFmdC5tYWluUG9zdHMuZmluZCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEuUG9zdElkKS5jb250ZW50ID0gYWN0aW9uLmRhdGEuY29udGVudDtcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFVQREFURV9QT1NUX0ZBSUxVUkU6XHJcblx0XHRcdGRyYWZ0LnVwZGF0ZVBvc3RMb2FkaW5nPWZhbHNlO1xyXG5cdFx0XHRkcmFmdC51cGRhdGVQb3N0RXJyb3I9IGFjdGlvbi5lcnJvcjtcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFJFTU9WRV9QT1NUX1JFUVVFU1Q6XHJcblx0XHRcdGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gdHJ1ZVxyXG5cdFx0XHRkcmFmdC5yZW1vdmVQb3N0RG9uZSA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LnJlbW92ZVBvc3RFcnJvciA9IG51bGxcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFJFTU9WRV9QT1NUX1NVQ0NFU1M6XHJcblx0XHRcdGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQucmVtb3ZlUG9zdERvbmUgPSB0cnVlXHJcblx0XHRcdGRyYWZ0Lm1haW5Qb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLlBvc3RJZCk7IC8vIOyngOyauOuVkCDrs7TthrUgZmlsdGVyIOqwgCDtjrjtlZjri6RcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFJFTU9WRV9QT1NUX0ZBSUxVUkU6XHJcblx0XHRcdGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQucmVtb3ZlUG9zdEVycm9yID0gYWN0aW9uLmVycm9yXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBBRERfQ09NTUVOVF9SRVFVRVNUOlxyXG5cdFx0XHRkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IHRydWVcclxuXHRcdFx0ZHJhZnQuYWRkQ29tbWVudERvbmUgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC5hZGRDb21tZW50RXJyb3IgPSBudWxsXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBBRERfQ09NTUVOVF9TVUNDRVNTOiB7XHJcblx0XHRcdC8vYWN0aW9uLmRhdGEuY29udGVudCwgcG9zdElkLCB1c2VySWRcclxuXHRcdFx0Ly9jb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLnBvc3RJZCkgLy8g6rKM7Iuc6riAIOumrOyKpO2KuOykkeyXkCBwb3N0IOywvuq4sCBmcm9udFxyXG5cdFx0XHRjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLlBvc3RJZCkgLy8g6rKM7Iuc6riAIOumrOyKpO2KuOykkeyXkCBwb3N0IOywvuq4sCBiYWtcclxuXHRcdFx0Ly9wb3N0LkNvbW1lbnRzLnVuc2hpZnQoZHVtbXlDb21tZW50KGFjdGlvbi5kYXRhLmNvbnRlbnQpKSAvLyDssL7snYAgcG9zdCDsl5Ag66eoIOyVnuyXkCDqsIDsp5wg64yT6riAIO2VmOuCmCDrhKPslrTspIwgRlJPTlRcclxuXHRcdFx0cG9zdC5Db21tZW50cy51bnNoaWZ0KGFjdGlvbi5kYXRhKSAvLyDssL7snYAgcG9zdCDsl5Ag7Iuk7KCcIOuNsOydtO2EsCBiYWNrXHJcblx0XHRcdGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQuYWRkQ29tbWVudERvbmUgPSB0cnVlXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBBRERfQ09NTUVOVF9GQUlMVVJFOlxyXG5cdFx0XHRkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LmFkZENvbW1lbnRFcnJvciA9IGFjdGlvbi5lcnJvclxyXG5cdFx0XHRicmVhaztcclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdGJyZWFrO1xyXG5cdH1cclxufSlcclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlclxyXG4iLCIvL2ltcG9ydCBwcm9kdWNlIGZyb20gJ2ltbWVyJ1xyXG5pbXBvcnQgcHJvZHVjZSBmcm9tICcuLi91dGlsL3Byb2R1Y2UnIC8vIGllMTEg7KeA7JuQ7ZWY6riw7JyE7ZW0IOuUsOuhnCBwcm9kdWNlIO2VqOyImCDrp4zrk6xcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcblx0bG9hZFVzZXJMb2FkaW5nOiBmYWxzZSwgLy8g7IOB64yAIOygleuztCDrs7TquLAg7Iuc64+E7KSR7J2865WQIOuhnOuUqeykkSDrnYTsmrjqsbDsnoRcclxuXHRsb2FkVXNlckRvbmU6IGZhbHNlLCAvLyDsg4HrjIAg7KCV67O0IOuztOq4sCDrkKhcclxuXHRsb2FkVXNlckVycm9yOiBudWxsLCAvLyDsg4HrjIAg7KCV67O0IOuztOq4sOykkeydvOuVjCDsl5Drn6wg7JeG7JWwXHJcblx0bG9hZE15SW5mb0xvYWRpbmc6IGZhbHNlLCAvLyDsnKDsoIAg7KCV67O0IOuztOq4sCDsi5zrj4TspJHsnbzrlZAg66Gc65Sp7KSRIOudhOyauOqxsOyehFxyXG5cdGxvYWRNeUluZm9Eb25lOiBmYWxzZSwgLy8g7Jyg7KCAIOygleuztCDrs7TquLAg65CoXHJcblx0bG9hZE15SW5mb0Vycm9yOiBudWxsLCAvLyDsnKDsoIAg7KCV67O0IOuztOq4sOykkeydvOuVjCDsl5Drn6wg7JeG7JWwXHJcblx0cmVtb3ZlRm9sbG93ZXJMb2FkaW5nOiBmYWxzZSwgLy8g7YyU66Gc7JuMIOycoOyggCDsgq3soJwg7Iuc64+E7KSR7J2865WQIOuhnOuUqeykkSDrnYTsmrjqsbDsnoRcclxuXHRyZW1vdmVGb2xsb3dlckRvbmU6IGZhbHNlLCAvLyDtjJTroZzsm4wg7Jyg7KCAIOyCreygnCDrkKhcclxuXHRyZW1vdmVGb2xsb3dlckVycm9yOiBudWxsLCAvLyDtjJTroZzsm4wg7Jyg7KCAIOyCreygnCDspJHsnbzrlYwg7JeQ65+sIOyXhuyVsFxyXG5cdGZvbGxvd0xvYWRpbmc6IGZhbHNlLCAvLyDtjJTroZzsmrAg7Iuc64+E7KSR7J2865WQIOuhnOuUqeykkSDrnYTsmrjqsbDsnoRcclxuXHRmb2xsb3dEb25lOiBmYWxzZSwgLy8g7YyU66Gc7JqwIOuQqFxyXG5cdGZvbGxvd0Vycm9yOiBudWxsLCAvLyDtjJTroZzsmrDspJHsnbzrlYwg7JeQ65+sIOyXhuyVsFxyXG5cdHVuZm9sbG93TG9hZGluZzogZmFsc2UsIC8vIOyWuO2MlOuhnOyasCDsi5zrj4TspJHsnbzrlZAg66Gc65Sp7KSRIOudhOyauOqxsOyehFxyXG5cdHVuZm9sbG93RG9uZTogZmFsc2UsIC8vIOyWuO2MlOuhnOyasCDrkKhcclxuXHR1bmZvbGxvd0Vycm9yOiBudWxsLCAvLyDslrjtjJTroZzsmrDspJHsnbzrlYwg7JeQ65+sIOyXhuyVsFxyXG5cdGxvYWRGb2xsb3dlcnNMb2FkaW5nOiBmYWxzZSwgLy8g7YyU66Gc7JuMIOyLnOuPhOykkeydvOuVkCDroZzrlKnspJEg652E7Jq46rGw7J6EXHJcblx0bG9hZEZvbGxvd2Vyc0RvbmU6IGZhbHNlLCAvLyDtjJTroZzsm4wg65CoXHJcblx0bG9hZEZvbGxvd2Vyc0Vycm9yOiBudWxsLCAvLyDtjJTroZzsm4zsnbzrlYwg7JeQ65+sIOyXhuyVsFxyXG5cdGxvYWRGb2xsb3dpbmdzTG9hZGluZzogZmFsc2UsIC8vIO2MlOuhnOycmSDsi5zrj4TspJHsnbzrlZAg66Gc65Sp7KSRIOudhOyauOqxsOyehFxyXG5cdGxvYWRGb2xsb3dpbmdzRG9uZTogZmFsc2UsIC8vIO2MlOuhnOycmSDrkKhcclxuXHRsb2FkRm9sbG93aW5nc0Vycm9yOiBudWxsLCAvLyDtjJTroZzsnJkg7KSR7J2865WMIOyXkOufrCDsl4bslbBcclxuXHRsb2dJbkxvYWRpbmc6IGZhbHNlLCAvLyDroZzqt7jsnbgg7Iuc64+E7KSR7J2865WQIOuhnOuUqeykkSDrnYTsmrjqsbDsnoRcclxuXHRsb2dJbkRvbmU6IGZhbHNlLCAvLyDroZzqt7jsnbgg65CoXHJcblx0bG9nSW5FcnJvcjogbnVsbCwgLy8g66Gc65Sp7KSR7J2865WMIOyXkOufrCDsl4bslbBcclxuXHRsb2dPdXRMb2FkaW5nOiBmYWxzZSwgLy8g66Gc6re47JWE7JuDIOyLnOuPhOykkVxyXG5cdGxvZ091dERvbmU6IGZhbHNlLCAvLyDroZzqt7jslYTsm4Mg7JmE66OMXHJcblx0bG9nT3V0RXJyb3I6IG51bGwsXHJcblx0c2lnblVwTG9hZGluZzogZmFsc2UsIC8vIO2ajOybkOqwgOyehSDroZzrlKnspJFcclxuXHRzaWduVXBEb25lOiBmYWxzZSwgLy8g7ZqM7JuQIOqwgOyehSDsmYTro4xcclxuXHRzaWduVXBFcnJvcjogbnVsbCxcclxuXHRjaGFuZ2VOaWNrbmFtZUxvYWRpbmc6IGZhbHNlLCAvLyDri4nrhKTsnoQg67OA6rK9IOuhnOuUqeykkVxyXG5cdGNoYW5nZU5pY2tuYW1lRG9uZTogZmFsc2UsIC8vIOuLieuEpOyehCDrs4Dqsr0g7JmE66OMXHJcblx0Y2hhbmdlTmlja25hbWVFcnJvcjogbnVsbCxcclxuXHRtZTogbnVsbCxcclxuXHRzaWduVXBEYXRhOiB7fSwgLy8g7ZqM7JuQIOqwgOyehSDrjbDsnbTthLBcclxuXHRsb2dpbkRhdGE6IHt9LFxyXG5cdHVzZXJJbmZvOiBudWxsLFxyXG59XHJcblxyXG4vLyDroZzqt7jsnbgg7JWh7IWYIOyDneyEseq4sCB0aHVua1xyXG4vLyBleHBvcnQgY29uc3QgbG9naW5BY3Rpb24gPSAoZGF0YSkgPT4geyAvLyDtlajsiJjrpbwg66as7YS07ZWY64qUIOu5hOuPmeq4sCDslaHshZgg7YGs66as7JeQ7J207YSw6rCAIOy2lOqwgFxyXG4vLyBcdHJldHVybiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XHJcbi8vIFx0XHRjb25zdCBzdGF0ZSA9IGdldFN0YXRlKClcclxuLy8gXHRcdGRpc3BhdGNoKGxvZ2luUmVxdWVzdEFjdGlvbigpKVxyXG4vLyBcdFx0YXhpb3MucG9zdCgnL2FwaS9sb2dpbicpXHJcbi8vIFx0XHRcdFx0LnRoZW4oKHJlcykgPT4ge1xyXG4vLyBcdFx0XHRcdFx0ZGlzcGF0Y2gobG9naW5TdWNjZXNzQWN0aW9uKHJlcy5kYXRhKSlcclxuLy8gXHRcdFx0XHR9KVxyXG4vLyBcdFx0XHRcdC5jYXRjaCgoZXJyb3IpID0+IHtcclxuLy8gXHRcdFx0XHRcdGRpc3BhdGNoKGxvZ2luRmFpbHVyZUFjdGlvbihlcnJvcikpXHJcbi8vIFx0XHRcdFx0fSlcclxuLy8gXHR9XHJcbi8vIH1cclxuXHJcbi8vIGFjdGlvbnNcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9SRVFVRVNUID0gJ0xPQURfVVNFUl9SRVFVRVNUJ1xyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1NVQ0NFU1MgPSAnTE9BRF9VU0VSX1NVQ0NFU1MnXHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfRkFJTFVSRSA9ICdMT0FEX1VTRVJfRkFJTFVSRSdcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX01ZX0lORk9fUkVRVUVTVCA9ICdMT0FEX01ZX0lORk9fUkVRVUVTVCdcclxuZXhwb3J0IGNvbnN0IExPQURfTVlfSU5GT19TVUNDRVNTID0gJ0xPQURfTVlfSU5GT19TVUNDRVNTJ1xyXG5leHBvcnQgY29uc3QgTE9BRF9NWV9JTkZPX0ZBSUxVUkUgPSAnTE9BRF9NWV9JTkZPX0ZBSUxVUkUnXHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1QgPSAnUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1QnXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUyA9ICdSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUydcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFID0gJ1JFTU9WRV9GT0xMT1dFUl9GQUlMVVJFJ1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19JTl9SRVFVRVNUID0gJ0xPR19JTl9SRVFVRVNUJ1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX1NVQ0NFU1MgPSAnTE9HX0lOX1NVQ0NFU1MnXHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fRkFJTFVSRSA9ICdMT0dfSU5fRkFJTFVSRSdcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1JFUVVFU1QgPSAnTE9HX09VVF9SRVFVRVNUJ1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9TVUNDRVNTID0gJ0xPR19PVVRfU1VDQ0VTUydcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfRkFJTFVSRSA9ICdMT0dfT1VUX0ZBSUxVUkUnXHJcblxyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9SRVFVRVNUID0gJ1NJR05fVVBfUkVRVUVTVCdcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfU1VDQ0VTUyA9ICdTSUdOX1VQX1NVQ0NFU1MnXHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX0ZBSUxVUkUgPSAnU0lHTl9VUF9GQUlMVVJFJ1xyXG5cclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9SRVFVRVNUID0gJ0NIQU5HRV9OSUNLTkFNRV9SRVFVRVNUJ1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MgPSAnQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MnXHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSA9ICdDSEFOR0VfTklDS05BTUVfRkFJTFVSRSdcclxuXHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfUkVRVUVTVCA9ICdGT0xMT1dfUkVRVUVTVCdcclxuZXhwb3J0IGNvbnN0IEZPTExPV19TVUNDRVNTID0gJ0ZPTExPV19TVUNDRVNTJ1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX0ZBSUxVUkUgPSAnRk9MTE9XX0ZBSUxVUkUnXHJcblxyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfUkVRVUVTVCA9ICdVTkZPTExPV19SRVFVRVNUJ1xyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfU1VDQ0VTUyA9ICdVTkZPTExPV19TVUNDRVNTJ1xyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfRkFJTFVSRSA9ICdVTkZPTExPV19GQUlMVVJFJ1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XRVJTX1JFUVVFU1QgPSAnTE9BRF9GT0xMT1dFUlNfUkVRVUVTVCdcclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XRVJTX1NVQ0NFU1MgPSAnTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUydcclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XRVJTX0ZBSUxVUkUgPSAnTE9BRF9GT0xMT1dFUlNfRkFJTFVSRSdcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVCA9ICdMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVCdcclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XSU5HU19TVUNDRVNTID0gJ0xPQURfRk9MTE9XSU5HU19TVUNDRVNTJ1xyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkUgPSAnTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkUnXHJcblxyXG4vLyDsnKDsoIAg66as65OA7ISc7J2YIOyDge2DnOulvCDrsJTqv4DsiJjsnojripQg7JWh7IWYIOyDneyEsVxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfVE9fTUUgPSAnQUREX1BPU1RfVE9fTUUnXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9PRl9NRSA9ICdSRU1PVkVfUE9TVF9PRl9NRSdcclxuXHJcbi8qIGZyb250XHJcbmNvbnN0IGR1bW15VXNlciA9IChkYXRhKSA9PiAoe1xyXG5cdC4uLmRhdGEsXHJcblx0bmlja25hbWU6ICfruYTtg4Drr7wnLFxyXG5cdGlkOiAxLFxyXG5cdFBvc3RzOiBbe2lkOiAxfV0sXHJcblx0Rm9sbG93aW5nczogW3tuaWNrbmFtZTogJ+yZuOuFuCd9LCB7bmlja25hbWU6ICfsnYzrqZQnfSwge25pY2tuYW1lOiAn7I29J30sIHtuaWNrbmFtZTogJ+yYpOuMlSd9LCB7bmlja25hbWU6ICfrp4zrvYAnfV0sXHJcblx0Rm9sbG93ZXJzOiBbe25pY2tuYW1lOiAn6rmM66ekJ30sIHtuaWNrbmFtZTogJ+unjOuRkCd9LCB7bmlja25hbWU6ICfrs7TssZknfSwge25pY2tuYW1lOiAn65K36rCAJ30sIHtuaWNrbmFtZTogJ+yVvOuNqSd9XSxcclxufSkqL1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2luUmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiAoe1xyXG5cdHR5cGU6IExPR19JTl9SRVFVRVNULFxyXG5cdGRhdGEsXHJcbn0pO1xyXG4vLyDroZzqt7jslYTsm4Mg7JWh7IWYIOyDneyEseq4sCB0aHVua1xyXG4vLyBleHBvcnQgY29uc3QgbG9nb3V0QWN0aW9uID0gKGRhdGEpID0+IHtcclxuLy8gXHRyZXR1cm4gKGRpc3BhdGNoKSA9PiB7XHJcbi8vIFx0XHRheGlvcy5wb3N0KCcvYXBpL2xvZ291dCcpXHJcbi8vIFx0XHRcdFx0LnRoZW4oKCkgPT4ge1xyXG4vLyBcdFx0XHRcdFx0ZGlzcGF0Y2gobG9nb3V0U3VjY2Vzc0FjdGlvbigpKVxyXG4vLyBcdFx0XHRcdH0pXHJcbi8vIFx0XHRcdFx0LmNhdGNoKCgpID0+IHtcclxuLy8gXHRcdFx0XHRcdGRpc3BhdGNoKGxvZ291dEZhaWx1cmVBY3Rpb24oKSlcclxuLy8gXHRcdFx0XHR9KVxyXG4vLyBcdH1cclxuLy8gfVxyXG5leHBvcnQgY29uc3QgbG9nb3V0UmVxdWVzdEFjdGlvbiA9ICgpID0+ICh7XHJcblx0dHlwZTogTE9HX09VVF9SRVFVRVNULFxyXG59KVxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIFJFTU9WRV9GT0xMT1dFUl9SRVFVRVNUOlxyXG5cdFx0XHRkcmFmdC5yZW1vdmVGb2xsb3dlckxvYWRpbmcgPSB0cnVlXHJcblx0XHRcdGRyYWZ0LnJlbW92ZUZvbGxvd2VyRXJyb3IgPSBudWxsXHJcblx0XHRcdGRyYWZ0LnJlbW92ZUZvbGxvd2VyRG9uZSA9IGZhbHNlXHJcblx0XHRcdGNvbnNvbGUubG9nKCdyZWR1Y2VyIHJlbW92ZUZvbGxvd2VyIOyalOyyrScpXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUzpcclxuXHRcdFx0Ly8g64KY7J2YIO2MlOuhnOybjCDsoJzqsbBcclxuXHRcdFx0ZHJhZnQucmVtb3ZlRm9sbG93ZXJMb2FkaW5nID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQubWUuRm9sbG93ZXJzID0gZHJhZnQubWUuRm9sbG93ZXJzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEuVXNlcklkKVxyXG5cdFx0XHRkcmFmdC5yZW1vdmVGb2xsb3dlckRvbmUgPSB0cnVlXHJcblx0XHRcdGNvbnNvbGUubG9nKCdyZWR1Y2VyIHJlbW92ZUZvbGxvd2VyIOyEseqztScpXHJcblx0XHRcdGJyZWFrXHJcblx0XHRjYXNlIFJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFOlxyXG5cdFx0XHRjb25zb2xlLmVycm9yKCdyZW1vdmVGb2xsb3dlckZhaWwg7Iuk7YyoOjogJyArIGFjdGlvbi5lcnJvcilcclxuXHRcdFx0ZHJhZnQucmVtb3ZlRm9sbG93ZXJMb2FkaW5nID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQucmVtb3ZlRm9sbG93ZXJFcnJvciA9IGFjdGlvbi5lcnJvclxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1Q6XHJcblx0XHRcdGRyYWZ0LmxvYWRGb2xsb3dpbmdzTG9hZGluZyA9IHRydWVcclxuXHRcdFx0ZHJhZnQubG9hZEZvbGxvd2luZ3NFcnJvciA9IG51bGxcclxuXHRcdFx0ZHJhZnQubG9hZEZvbGxvd2luZ3NEb25lID0gZmFsc2VcclxuXHRcdFx0Y29uc29sZS5sb2coJ3JlZHVjZXIgTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1Qg7JqU7LKtJylcclxuXHRcdFx0YnJlYWtcclxuXHRcdGNhc2UgTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1M6XHJcblx0XHRcdGRyYWZ0LmxvYWRGb2xsb3dpbmdzTG9hZGluZyA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0Lm1lLkZvbGxvd2luZ3MgPSBhY3Rpb24uZGF0YVxyXG5cdFx0XHRkcmFmdC5sb2FkRm9sbG93aW5nc0RvbmUgPSB0cnVlXHJcblx0XHRcdGNvbnNvbGUubG9nKCdyZWR1Y2VyIExPQURfRk9MTE9XSU5HU19TVUNDRVNTIOyEseqztScpXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRTpcclxuXHRcdFx0ZHJhZnQubG9hZEZvbGxvd2luZ3NMb2FkaW5nID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQubG9hZEZvbGxvd2luZ3NFcnJvciA9IGFjdGlvbi5lcnJvclxyXG5cdFx0XHRjb25zb2xlLmVycm9yKCdyZWR1Y2VyIExPQURfRk9MTE9XSU5HUyDsi6TtjKgnLCBhY3Rpb24uZXJyb3IpXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBMT0FEX0ZPTExPV0VSU19SRVFVRVNUOlxyXG5cdFx0XHRkcmFmdC5sb2FkRm9sbG93ZXJzTG9hZGluZyA9IHRydWVcclxuXHRcdFx0ZHJhZnQubG9hZEZvbGxvd2Vyc0Vycm9yID0gbnVsbFxyXG5cdFx0XHRkcmFmdC5sb2FkRm9sbG93ZXJzRG9uZSA9IGZhbHNlXHJcblx0XHRcdGNvbnNvbGUubG9nKCdyZWR1Y2VyIExPQURfRk9MTE9XRVJTX1JFUVVFU1Qg7JqU7LKtJylcclxuXHRcdFx0YnJlYWtcclxuXHRcdGNhc2UgTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUzpcclxuXHRcdFx0ZHJhZnQubG9hZEZvbGxvd2Vyc0xvYWRpbmcgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC5tZS5Gb2xsb3dlcnMgPSBhY3Rpb24uZGF0YVxyXG5cdFx0XHRkcmFmdC5sb2FkRm9sbG93ZXJzRG9uZSA9IHRydWVcclxuXHRcdFx0Y29uc29sZS5sb2coJ3JlZHVjZXIgTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUyDshLHqs7UnKVxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgTE9BRF9GT0xMT1dFUlNfRkFJTFVSRTpcclxuXHRcdFx0ZHJhZnQubG9hZEZvbGxvd2Vyc0xvYWRpbmcgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC5sb2FkRm9sbG93ZXJzRXJyb3IgPSBhY3Rpb24uZXJyb3JcclxuXHRcdFx0Y29uc29sZS5lcnJvcigncmVkdWNlciBMT0FEX0ZPTExPV0VSUyDsi6TtjKgnLCBhY3Rpb24uZXJyb3IpXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBMT0FEX01ZX0lORk9fUkVRVUVTVDpcclxuXHRcdFx0Ly8gc3RvcmUg7JeQ7IScIOuztOuCuCBzdGF0ZSDqsIAg66eM65Ok7Ja07KeQLCBzdGF0ZSDsnpDssrTqsIAgdXNlci5qcyDsnZggc3RhdGUg7J6EXHJcblx0XHRcdGRyYWZ0LmxvYWRNeUluZm9Mb2FkaW5nID0gdHJ1ZVxyXG5cdFx0XHRkcmFmdC5sb2FkTXlJbmZvRXJyb3IgPSBudWxsIC8vIOuhnOuUqSDspJHsnbzrlYzripQg7JeQ65+sIOyXhuyVsFxyXG5cdFx0XHRkcmFmdC5sb2FkTXlJbmZvRG9uZSA9IGZhbHNlXHJcblx0XHRcdGNvbnNvbGUubG9nKCdyZWR1Y2VyIG15SW5mbyDsmpTssq0nKVxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgTE9BRF9NWV9JTkZPX1NVQ0NFU1M6XHJcblx0XHRcdGRyYWZ0Lm1lID0gYWN0aW9uLmRhdGEgLy8gYmFjayDrgrQg7KCV67O06rCAIOuTpOyWtOyeiOydjFxyXG5cdFx0XHRkcmFmdC5sb2FkTXlJbmZvTG9hZGluZyA9IGZhbHNlXHJcblx0XHRcdC8vZHJhZnQubWUgPSBkdW1teVVzZXIoYWN0aW9uLmRhdGEpXHJcblx0XHRcdGRyYWZ0LmxvYWRNeUluZm9Eb25lID0gdHJ1ZVxyXG5cdFx0XHRjb25zb2xlLmxvZygncmVkdWNlciBteUluZm8g7ISx6rO1JylcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIExPQURfTVlfSU5GT19GQUlMVVJFOlxyXG5cdFx0XHRjb25zb2xlLmVycm9yKCdsb2FkTXlJbmZvRmFpbCDsi6TtjKg6OiAnICsgYWN0aW9uLmVycm9yKVxyXG5cdFx0XHRkcmFmdC5sb2FkTXlJbmZvTG9hZGluZyA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LmxvYWRNeUluZm9FcnJvciA9IGFjdGlvbi5lcnJvclxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgTE9BRF9VU0VSX1JFUVVFU1Q6XHJcblx0XHRcdC8vIHN0b3JlIOyXkOyEnCDrs7Trgrggc3RhdGUg6rCAIOunjOuTpOyWtOynkCwgc3RhdGUg7J6Q7LK06rCAIHVzZXIuanMg7J2YIHN0YXRlIOyehFxyXG5cdFx0XHRkcmFmdC5sb2FkVXNlckxvYWRpbmcgPSB0cnVlXHJcblx0XHRcdGRyYWZ0LmxvYWRVc2VyRG9uZSA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LmxvYWRVc2VyRXJyb3IgPSBudWxsIC8vIOuhnOuUqSDspJHsnbzrlYzripQg7JeQ65+sIOyXhuyVsFxyXG5cdFx0XHRjb25zb2xlLmxvZygncmVkdWNlciBteUluZm8g7JqU7LKtJylcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIExPQURfVVNFUl9TVUNDRVNTOlxyXG5cdFx0XHRkcmFmdC5sb2FkVXNlckxvYWRpbmcgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC51c2VySW5mbyA9IGFjdGlvbi5kYXRhIC8vIGJhY2sg7IOB64yAIOygleuztOqwgCDrk6TslrTsnojsnYxcclxuXHRcdFx0ZHJhZnQubG9hZFVzZXJEb25lID0gdHJ1ZVxyXG5cdFx0XHQvL2RyYWZ0Lm1lID0gZHVtbXlVc2VyKGFjdGlvbi5kYXRhKVxyXG5cdFx0XHRjb25zb2xlLmxvZygncmVkdWNlciBteUluZm8g7ISx6rO1JylcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIExPQURfVVNFUl9GQUlMVVJFOlxyXG5cdFx0XHRjb25zb2xlLmVycm9yKCdsb2FkVXNlckZhaWwg7Iuk7YyoOjogJyArIGFjdGlvbi5lcnJvcilcclxuXHRcdFx0ZHJhZnQubG9hZFVzZXJMb2FkaW5nID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQubG9hZFVzZXJFcnJvciA9IGFjdGlvbi5lcnJvclxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgRk9MTE9XX1JFUVVFU1Q6XHJcblx0XHRcdC8vIHN0b3JlIOyXkOyEnCDrs7Trgrggc3RhdGUg6rCAIOunjOuTpOyWtOynkCwgc3RhdGUg7J6Q7LK06rCAIHVzZXIuanMg7J2YIHN0YXRlIOyehFxyXG5cdFx0XHRkcmFmdC5mb2xsb3dMb2FkaW5nID0gdHJ1ZVxyXG5cdFx0XHRkcmFmdC5mb2xsb3dFcnJvciA9IG51bGwgLy8g66Gc65SpIOykkeydvOuVjOuKlCDsl5Drn6wg7JeG7JWwXHJcblx0XHRcdGRyYWZ0LmZvbGxvd0RvbmUgPSBmYWxzZVxyXG5cdFx0XHRjb25zb2xlLmxvZygncmVkdWNlciBGT0xMT1dfUkVRVUVTVCDsmpTssq0nKVxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgRk9MTE9XX1NVQ0NFU1M6XHJcblx0XHRcdGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC5mb2xsb3dEb25lID0gdHJ1ZVxyXG5cdFx0XHQvL2RyYWZ0Lm1lID0gZHVtbXlVc2VyKGFjdGlvbi5kYXRhKVxyXG5cdFx0XHRkcmFmdC5tZS5Gb2xsb3dpbmdzLnB1c2goe2lkOiBhY3Rpb24uZGF0YS5Vc2VySWR9KVxyXG5cdFx0XHRjb25zb2xlLmxvZygncmVkdWNlciBGT0xMT1dfU1VDQ0VTUyDshLHqs7UnKVxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgRk9MTE9XX0ZBSUxVUkU6XHJcblx0XHRcdGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC5mb2xsb3dFcnJvciA9IGFjdGlvbi5lcnJvclxyXG5cdFx0XHRjb25zb2xlLmVycm9yKCdyZWR1Y2VyIEZPTExPV19GQUlMVVJFIOyLpO2MqDo6JywgYWN0aW9uLmVycm9yKVxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgVU5GT0xMT1dfUkVRVUVTVDpcclxuXHRcdFx0Ly8gc3RvcmUg7JeQ7IScIOuztOuCuCBzdGF0ZSDqsIAg66eM65Ok7Ja07KeQLCBzdGF0ZSDsnpDssrTqsIAgdXNlci5qcyDsnZggc3RhdGUg7J6EXHJcblx0XHRcdGRyYWZ0LnVuZm9sbG93TG9hZGluZyA9IHRydWVcclxuXHRcdFx0ZHJhZnQudW5mb2xsb3dFcnJvciA9IG51bGwgLy8g66Gc65SpIOykkeydvOuVjOuKlCDsl5Drn6wg7JeG7JWwXHJcblx0XHRcdGRyYWZ0LnVuZm9sbG93RG9uZSA9IGZhbHNlXHJcblx0XHRcdGNvbnNvbGUubG9nKCdyZWR1Y2VyIHVuZm9sbG93IOyalOyyrScpXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBVTkZPTExPV19TVUNDRVNTOlxyXG5cdFx0XHRkcmFmdC51bmZvbGxvd0xvYWRpbmcgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC51bmZvbGxvd0RvbmUgPSB0cnVlXHJcblx0XHRcdC8vZHJhZnQubWUgPSBkdW1teVVzZXIoYWN0aW9uLmRhdGEpXHJcblx0XHRcdC8vIOyWuO2MlOuhnOyasCDtlZwg7IKs656M66eMIOu5oOyngOqyjFxyXG5cdFx0XHRkcmFmdC5tZS5Gb2xsb3dpbmdzID0gZHJhZnQubWUuRm9sbG93aW5ncy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLlVzZXJJZClcclxuXHRcdFx0Y29uc29sZS5sb2coJ3JlZHVjZXIgdW5mb2xsb3cg7ISx6rO1JylcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFVORk9MTE9XX0ZBSUxVUkU6XHJcblx0XHRcdGRyYWZ0LnVuZm9sbG93TG9hZGluZyA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LnVuZm9sbG93RXJyb3IgPSBhY3Rpb24uZXJyb3JcclxuXHRcdFx0Y29uc29sZS5lcnJvcigncmVkdWNlciB1bmZvbGxvdyDsi6TtjKg6OicsIGFjdGlvbi5lcnJvcilcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIExPR19JTl9SRVFVRVNUOlxyXG5cdFx0XHRkcmFmdC5sb2dJbkxvYWRpbmcgPSB0cnVlXHJcblx0XHRcdGRyYWZ0LmxvZ0luRXJyb3IgPSBudWxsXHJcblx0XHRcdGRyYWZ0LmxvZ0luRG9uZSA9IGZhbHNlXHJcblx0XHRcdGNvbnNvbGUubG9nKCdyZWR1Y2VyIGxvZ2luIOyalOyyrScpXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBMT0dfSU5fU1VDQ0VTUzpcclxuXHRcdFx0ZHJhZnQubG9nSW5Mb2FkaW5nID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQubG9nSW5Eb25lID0gdHJ1ZVxyXG5cdFx0XHQvL2RyYWZ0Lm1lID0gZHVtbXlVc2VyKGFjdGlvbi5kYXRhKSBmcm9udFxyXG5cdFx0XHRkcmFmdC5tZSA9IGFjdGlvbi5kYXRhIC8vIGJhY2tcclxuXHRcdFx0Y29uc29sZS5sb2coJ3JlZHVjZXIgbG9naW4g7ISx6rO1JylcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIExPR19JTl9GQUlMVVJFOlxyXG5cdFx0XHRkcmFmdC5sb2dJbkxvYWRpbmcgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC5sb2dJbkVycm9yID0gYWN0aW9uLmVycm9yXHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoJ3JlZHVjZXIgbG9naW4g7Iuk7YyoOjogJywgYWN0aW9uLmVycm9yKVxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgTE9HX09VVF9SRVFVRVNUOlxyXG5cdFx0XHRkcmFmdC5sb2dPdXRMb2FkaW5nID0gdHJ1ZVxyXG5cdFx0XHRkcmFmdC5sb2dPdXREb25lID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQubG9nT3V0RXJyb3IgPSBudWxsXHJcblx0XHRcdGNvbnNvbGUubG9nKCdyZWR1Y2VyIGxvZ291dCDsmpTssq0nKVxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgTE9HX09VVF9TVUNDRVNTOlxyXG5cdFx0XHRkcmFmdC5sb2dPdXRMb2FkaW5nID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQubG9nT3V0RG9uZSA9IHRydWVcclxuXHRcdFx0ZHJhZnQubWUgPSBudWxsXHJcblx0XHRcdGNvbnNvbGUubG9nKCdyZWR1Y2VyIGxvZ291dCDshLHqs7UnKVxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgTE9HX09VVF9GQUlMVVJFOlxyXG5cdFx0XHRkcmFmdC5sb2dPdXRMb2FkaW5nID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQubG9nT3V0RXJyb3IgPSBhY3Rpb24uZXJyb3JcclxuXHRcdFx0Y29uc29sZS5lcnJvcigncmVkdWNlciBsb2dvdXQg7Iuk7YyoJywgYWN0aW9uLmVycm9yKVxyXG5cdFx0XHRicmVha1xyXG5cdFx0Y2FzZSBTSUdOX1VQX1JFUVVFU1Q6XHJcblx0XHRcdGRyYWZ0LnNpZ25VcExvYWRpbmcgPSB0cnVlXHJcblx0XHRcdGRyYWZ0LnNpZ25VcERvbmUgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC5zaWduVXBFcnJvciA9IG51bGxcclxuXHRcdFx0Y29uc29sZS5sb2coJ3JlZHVjZXIgc2lnbnVwIOyalOyyrScpXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBTSUdOX1VQX1NVQ0NFU1M6XHJcblx0XHRcdGRyYWZ0LnNpZ25VcExvYWRpbmcgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC5zaWduVXBEb25lID0gdHJ1ZVxyXG5cdFx0XHRjb25zb2xlLmxvZygncmVkdWNlciBzaWduVXAg7ISx6rO1JylcclxuXHRcdFx0YnJlYWtcclxuXHRcdGNhc2UgU0lHTl9VUF9GQUlMVVJFOlxyXG5cdFx0XHRkcmFmdC5zaWduVXBMb2FkaW5nID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQuc2lnblVwRXJyb3IgPSBhY3Rpb24uZXJyb3JcclxuXHRcdFx0Y29uc29sZS5lcnJvcigncmVkdWNlciBzaWduVXAg7Iuk7YyoJywgYWN0aW9uLmVycm9yKVxyXG5cdFx0XHRicmVha1xyXG5cdFx0Y2FzZSBDSEFOR0VfTklDS05BTUVfUkVRVUVTVDpcclxuXHRcdFx0ZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nID0gdHJ1ZVxyXG5cdFx0XHRkcmFmdC5jaGFuZ2VOaWNrbmFtZURvbmUgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC5jaGFuZ2VOaWNrbmFtZUVycm9yID0gbnVsbFxyXG5cdFx0XHRjb25zb2xlLmxvZygncmVkdWNlciBDSEFOR0VfTklDS05BTUVfUkVRVUVTVCDsmpTssq0nKVxyXG5cdFx0XHRicmVha1xyXG5cdFx0Y2FzZSBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUzpcclxuXHRcdFx0ZHJhZnQubWUubmlja25hbWUgPSBhY3Rpb24uZGF0YS5uaWNrbmFtZTtcclxuXHRcdFx0ZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQuY2hhbmdlTmlja25hbWVEb25lID0gdHJ1ZVxyXG5cdFx0XHRjb25zb2xlLmxvZygncmVkdWNlciBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyDshLHqs7UnKVxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkU6XHJcblx0XHRcdGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LmNoYW5nZU5pY2tuYW1lRXJyb3IgPSBhY3Rpb24uZXJyb3JcclxuXHRcdFx0Y29uc29sZS5lcnJvcigncmVkdWNlciBDSEFOR0VfTklDS05BTUUg7Iuk7YyoJywgYWN0aW9uLmVycm9yKVxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgQUREX1BPU1RfVE9fTUU6IC8vIOqyjOyLnOq4gOydhCDsk7DrqbQg6rKM7Iuc6riAIOyVhOydtOuUlOqwgCDsl6zquLDroZwg65Ok7Ja07JmA7IScIO2VmOuCmOqwgCDstpTqsIDrkJzri6RcclxuXHRcdFx0ZHJhZnQubWUuUG9zdHMudW5zaGlmdCh7aWQ6IGFjdGlvbi5kYXRhfSlcclxuXHRcdFx0Y29uc29sZS5sb2coJ0FERF9QT1NUX1RPX01FIOyEseqztScpXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0XHQvLyByZXR1cm4ge1xyXG5cdFx0XHQvLyBcdC4uLnN0YXRlLFxyXG5cdFx0XHQvLyBcdG1lOiB7XHJcblx0XHRcdC8vIFx0XHQuLi5zdGF0ZS5tZSxcclxuXHRcdFx0Ly8gXHRcdFBvc3RzOiBbe2lkOiBhY3Rpb24uZGF0YX0sIC4uLnN0YXRlLm1lLlBvc3RzXSxcclxuXHRcdFx0Ly8gXHR9XHJcblx0XHRcdC8vIH1cclxuXHRcdGNhc2UgUkVNT1ZFX1BPU1RfT0ZfTUU6XHJcblx0XHRcdGRyYWZ0Lm1lLlBvc3RzID0gZHJhZnQubWUuUG9zdHMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YSlcclxuXHRcdFx0Y29uc29sZS5sb2coJ1JFTU9WRV9QT1NUX09GX01FJylcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRcdC8vIHJldHVybiB7IC8vIOu2iOuzgOyEseydhCDsp4DtgqTrqbAg6rKM7Iuc6riA7J2EIOyngOybjOyVvO2VnOuLpC5cclxuXHRcdFx0Ly8gXHQuLi5zdGF0ZSxcclxuXHRcdFx0Ly8gXHRtZToge1xyXG5cdFx0XHQvLyBcdFx0Li4uc3RhdGUubWUsXHJcblx0XHRcdC8vIFx0XHRQb3N0czogc3RhdGUubWUuUG9zdHMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YSlcclxuXHRcdFx0Ly8gXHR9XHJcblx0XHRcdC8vIH1cclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdGJyZWFrO1xyXG5cdH1cclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7IiwiLy9pbXBvcnQge2FsbCwgZm9yaywgdGFrZUxhdGVzdCwgY2FsbCwgcHV0LCBkZWxheX0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcclxuaW1wb3J0IHthbGwsIGZvcmt9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHBvc3RTYWdhIGZyb20gJy4vcG9zdCdcclxuaW1wb3J0IHVzZXJTYWdhIGZyb20gJy4vdXNlcidcclxuaW1wb3J0IHtiYWNrVXJsfSBmcm9tIFwiLi4vY29uZmlnL2NvbmZpZ1wiO1xyXG5cclxuYXhpb3MuZGVmYXVsdHMuYmFzZVVSTCA9ICdodHRwOi8vbG9jYWxob3N0OjMwNjUnIC8vIGZyb250XHJcbi8vYXhpb3MuZGVmYXVsdHMuYmFzZVVSTCA9IGJhY2tVcmwgLy8gYmFjaywgYXdzIGlwXHJcblxyXG5heGlvcy5kZWZhdWx0cy53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHJvb3RTYWdhKCkge1xyXG5cdHlpZWxkIGFsbChbIC8vIEFMTCDrsLDsl7TslYjsl5Ag7ZWc67Cp7JeQIOyLpO2Wie2VtOykjFxyXG5cdFx0Zm9yayhwb3N0U2FnYSksIC8vIGZvcmsg64qUICjtlajsiJgp7Iuk7ZaJXHJcblx0XHRmb3JrKHVzZXJTYWdhKSxcdC8vIGNhbGwg7J20656R7J2AIOuLpOultOuLpC5cclxuXHRdKVxyXG59IiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgYWxsLCBmb3JrLCBwdXQsIHRha2VMYXRlc3QsIHRocm90dGxlLCBjYWxsIH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcclxuXHJcbmltcG9ydCB7XHJcblx0QUREX0NPTU1FTlRfRkFJTFVSRSxcclxuXHRBRERfQ09NTUVOVF9SRVFVRVNULFxyXG5cdEFERF9DT01NRU5UX1NVQ0NFU1MsXHJcblx0QUREX1BPU1RfRkFJTFVSRSxcclxuXHRBRERfUE9TVF9SRVFVRVNULFxyXG5cdEFERF9QT1NUX1NVQ0NFU1MsXHJcblx0TElLRV9QT1NUX0ZBSUxVUkUsXHJcblx0TElLRV9QT1NUX1JFUVVFU1QsXHJcblx0TElLRV9QT1NUX1NVQ0NFU1MsXHJcblx0TE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkUsXHJcblx0TE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1QsIExPQURfSEFTSFRBR19QT1NUU19TVUNDRVNTLFxyXG5cdExPQURfUE9TVF9GQUlMVVJFLFxyXG5cdExPQURfUE9TVF9SRVFVRVNULFxyXG5cdExPQURfUE9TVF9TVUNDRVNTLFxyXG5cdC8vZ2VuZXJhdGVEdW1teVBvc3QsIGZyb250XHJcblx0TE9BRF9QT1NUU19GQUlMVVJFLFxyXG5cdExPQURfUE9TVFNfUkVRVUVTVCxcclxuXHRMT0FEX1BPU1RTX1NVQ0NFU1MsIExPQURfVVNFUl9QT1NUU19GQUlMVVJFLFxyXG5cdExPQURfVVNFUl9QT1NUU19SRVFVRVNULCBMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTUyxcclxuXHRSRU1PVkVfUE9TVF9GQUlMVVJFLFxyXG5cdFJFTU9WRV9QT1NUX1JFUVVFU1QsXHJcblx0UkVNT1ZFX1BPU1RfU1VDQ0VTUyxcclxuXHRSRVRXRUVUX0ZBSUxVUkUsXHJcblx0UkVUV0VFVF9SRVFVRVNULFxyXG5cdFJFVFdFRVRfU1VDQ0VTUyxcclxuXHRVTkxJS0VfUE9TVF9GQUlMVVJFLFxyXG5cdFVOTElLRV9QT1NUX1JFUVVFU1QsXHJcblx0VU5MSUtFX1BPU1RfU1VDQ0VTUywgVVBEQVRFX1BPU1RfRkFJTFVSRSwgVVBEQVRFX1BPU1RfUkVRVUVTVCwgVVBEQVRFX1BPU1RfU1VDQ0VTUyxcclxuXHRVUExPQURfSU1BR0VTX0ZBSUxVUkUsXHJcblx0VVBMT0FEX0lNQUdFU19SRVFVRVNULFxyXG5cdFVQTE9BRF9JTUFHRVNfU1VDQ0VTUyxcclxufSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0JztcclxuaW1wb3J0IHsgQUREX1BPU1RfVE9fTUUsIFJFTU9WRV9QT1NUX09GX01FIH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcblxyXG4vL2ltcG9ydCBzaG9ydElkIGZyb20gXCJzaG9ydGlkXCI7IGZyb250XHJcblxyXG4vLyByZXN0QVBJXHJcbmZ1bmN0aW9uIHJldHdlZXRBUEkoZGF0YSkge1xyXG5cdHJldHVybiBheGlvcy5wb3N0KGAvcG9zdC8ke2RhdGF9L3JldHdlZXRgKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHJldHdlZXQoYWN0aW9uKSB7XHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwocmV0d2VldEFQSSwgYWN0aW9uLmRhdGEpXHJcblx0XHRjb25zb2xlLmxvZygnc2FnYSByZXR3ZWV0IOyLpO2WiTo6OicsIGFjdGlvbi5kYXRhKVxyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogUkVUV0VFVF9TVUNDRVNTLFxyXG5cdFx0XHRkYXRhOiByZXN1bHQuZGF0YSxcclxuXHRcdH0pXHJcblx0XHRjb25zb2xlLmxvZygnc2FnYSByZXR3ZWV0IOyEseqztTo6OicsIHJlc3VsdClcclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoJ3NhZ2EgcmV0d2VldCDsi6TtjKggOjo6ICcsIGVycilcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IFJFVFdFRVRfRkFJTFVSRSxcclxuXHRcdFx0ZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhXHJcblx0XHR9KVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gdXBsb2FkSW1hZ2VzQVBJKGRhdGEpIHtcclxuXHRyZXR1cm4gYXhpb3MucG9zdCgnL3Bvc3QvaW1hZ2VzJywgZGF0YSkgLy8gZm9ybSBkYXRhIOulvCB7bmFtZTpkYXRhfSDtmJXsi53snLzroZwg6rCQ7Iu466m0IGpzb24g65CY6riw65WM66y47JeQIOyCrOyaqe2VmOuptCDslYjrkKhcclxufVxyXG5cclxuZnVuY3Rpb24qIHVwbG9hZEltYWdlcyhhY3Rpb24pIHtcclxuXHR0cnkge1xyXG5cdFx0Y29uc3QgcmVzdWx0ID0geWllbGQgY2FsbCh1cGxvYWRJbWFnZXNBUEksIGFjdGlvbi5kYXRhKVxyXG5cdFx0Y29uc29sZS5sb2coJ3NhZ2EgdXBsb2FkSW1hZ2VzIOyLpO2WiTo6OiAnLCBhY3Rpb24uZGF0YSlcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IFVQTE9BRF9JTUFHRVNfU1VDQ0VTUyxcclxuXHRcdFx0ZGF0YTogcmVzdWx0LmRhdGFcclxuXHRcdH0pXHJcblx0XHRjb25zb2xlLmxvZygnc2FnYSB1cGxvYWRJbWFnZXMg7ISx6rO1Ojo6ICcsIHJlc3VsdClcclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoJ3NhZ2EgdXBsb2FkSW1hZ2VzIGVycm9yOjo6ICcsIGVycilcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IFVQTE9BRF9JTUFHRVNfRkFJTFVSRSxcclxuXHRcdFx0ZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhXHJcblx0XHR9KVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gbGlrZVBvc3RBUEkoZGF0YSkgeyAvLyAzIOyghOuLrOuQmOuptFxyXG5cdHJldHVybiBheGlvcy5wYXRjaChgL3Bvc3QvJHtkYXRhfS9saWtlYCkgLy8gNCDrjbDsnbTthLDqsIAg6rCE64ukLCBsaWtlICYgdW5saWtlIOuKlCBwYXRjaCAoIOqyjOyLnOq4gOyXkCDsnbzrtoDrtoQg7IiY7KCV7J206riw65WM66y4IClcclxufVxyXG5cclxuZnVuY3Rpb24qIGxpa2VQb3N0KGFjdGlvbikgeyAvLyAxIOyVoeyFmOyXkOyEnFxyXG5cdHRyeSB7XHJcblx0XHRjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxpa2VQb3N0QVBJLCBhY3Rpb24uZGF0YSkgLy8gMiDrjbDsnbTthLDrpbwg6rq864K07IScXHJcblx0XHRjb25zb2xlLmxvZygnbGlrZVBvc3Qg7Iuk7ZaJ7KSROjo6JywgcmVzdWx0KVxyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogTElLRV9QT1NUX1NVQ0NFU1MsXHJcblx0XHRcdGRhdGE6IHJlc3VsdC5kYXRhLCAvLyBiYWNrLCBwb3N0SWQsIHVzZXJJZCDrk6TslrTsnojsnYxcclxuXHRcdH0pXHJcblx0XHRjb25zb2xlLmxvZygnbGlrZVBvc3Qg7JmE66OMOjo6JywgcmVzdWx0KVxyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0Y29uc29sZS5lcnJvcignbGlrZVBvc3QgZXJyb3I6OjogJywgZXJyKVxyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogTElLRV9QT1NUX0ZBSUxVUkUsXHJcblx0XHRcdGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuXHRcdH0pXHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiB1bmxpa2VQb3N0QVBJKGRhdGEpIHsgLy8gMyDsoITri6zrkJjrqbRcclxuXHRyZXR1cm4gYXhpb3MuZGVsZXRlKGAvcG9zdC8ke2RhdGF9L2xpa2VgKSAvLyA0IOuNsOydtO2EsOqwgCDqsITri6RcclxufVxyXG5cclxuZnVuY3Rpb24qIHVubGlrZVBvc3QoYWN0aW9uKSB7IC8vIDEg7JWh7IWY7JeQ7IScXHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwodW5saWtlUG9zdEFQSSwgYWN0aW9uLmRhdGEpIC8vIDIg642w7J207YSw66W8IOq6vOuCtOyEnFxyXG5cdFx0Y29uc29sZS5sb2coJ3VubGlrZVBvc3Qg7Iuk7ZaJ7KSROjo6JywgcmVzdWx0KVxyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogVU5MSUtFX1BPU1RfU1VDQ0VTUyxcclxuXHRcdFx0ZGF0YTogcmVzdWx0LmRhdGEsIC8vIGJhY2ssIHBvc3RJZCx1c2VySWQg65Ok7Ja07J6I7J2MXHJcblx0XHR9KVxyXG5cdFx0Y29uc29sZS5sb2coJ1VOTElLRVBvc3Qg7JmE66OMOjo6JywgcmVzdWx0KVxyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0Y29uc29sZS5lcnJvcignVU5MSUtFUG9zdCBlcnJvcjo6OiAnLCBlcnIpXHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOiBVTkxJS0VfUE9TVF9GQUlMVVJFLFxyXG5cdFx0XHRlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGFcclxuXHRcdH0pXHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkUG9zdEFQSShkYXRhKSB7XHJcblx0cmV0dXJuIGF4aW9zLmdldChgL3Bvc3QvJHtkYXRhfWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZFBvc3QoYWN0aW9uKSB7XHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZFBvc3RBUEksIGFjdGlvbi5kYXRhKVxyXG5cdFx0Y29uc29sZS5sb2coJ3NhZ2EgbG9hZFBvc3Qg7JqU7LKtIDo6OiAnLCBhY3Rpb24uZGF0YSlcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IExPQURfUE9TVF9TVUNDRVNTLFxyXG5cdFx0XHRkYXRhOiByZXN1bHQuZGF0YSxcclxuXHRcdH0pXHJcblx0XHRjb25zb2xlLmxvZygnc2FnYSBsb2FkUG9zdCDshLHqs7UgOjo6ICcsIHJlc3VsdClcclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdGNvbnNvbGUuZGlyKCdzYWdhIGxvYWRQb3N0IOyLpO2MqCA6OjogJywgZXJyKVxyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogTE9BRF9QT1NUX0ZBSUxVUkUsXHJcblx0XHRcdGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuXHRcdH0pXHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkSGFzaHRhZ1Bvc3RzQVBJKGRhdGEsIGxhc3RJZCkgeyAvLyDsnbjsnpDrpbwg65GQIOqwnCDrhJjqsqjspITsiJjrj4Qg7J6I64ukXHJcblx0Ly8g7ZWc6riAIG9yIO2KueyImOusuOyekCDrk6TslrTqsIDrqbQgZXJyb3IsIGVuY29kZSDroZwg6rCQ7Iu47KO87J6QXHJcblx0cmV0dXJuIGF4aW9zLmdldChgL2hhc2h0YWcvJHtlbmNvZGVVUklDb21wb25lbnQoZGF0YSl9P2xhc3RJZD0ke2xhc3RJZCB8fCAwfWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZEhhc2h0YWdQb3N0cyhhY3Rpb24pIHtcclxuXHR0cnkge1xyXG5cdFx0Y29uc29sZS5sb2coYGxvYWRIYXNodGFnUG9zdHMgbG9nIDo6OmApXHJcblx0XHRjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRIYXNodGFnUG9zdHNBUEksIGFjdGlvbi5kYXRhLCBhY3Rpb24ubGFzdElkKTtcclxuXHRcdGNvbnNvbGUubG9nKCdzYWdhIGxvYWRIYXNodGFnUG9zdHMg7JqU7LKtIDo6OiAnLCBhY3Rpb24uZGF0YSwgYWN0aW9uLmxhc3RJZClcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IExPQURfSEFTSFRBR19QT1NUU19TVUNDRVNTLFxyXG5cdFx0XHRkYXRhOiByZXN1bHQuZGF0YSxcclxuXHRcdH0pXHJcblx0XHRjb25zb2xlLmxvZygnc2FnYSBsb2FkSGFzaHRhZ1Bvc3RzIOyEseqztSA6OjogJylcclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoJ3NhZ2EgbG9hZEhhc2h0YWdQb3N0cyBlcnJvciA6OjogJywgZXJyKVxyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkUsXHJcblx0XHRcdGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuXHRcdH0pXHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkVXNlclBvc3RzQVBJKGRhdGEsIGxhc3RJZCkge1xyXG5cdHJldHVybiBheGlvcy5nZXQoYC91c2VyLyR7ZGF0YX0vcG9zdHM/bGFzdElkPSR7bGFzdElkIHx8IDB9YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkVXNlclBvc3RzKGFjdGlvbikge1xyXG5cdHRyeSB7XHJcblx0XHRjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRVc2VyUG9zdHNBUEksIGFjdGlvbi5kYXRhLCBhY3Rpb24ubGFzdElkKTtcclxuXHRcdGNvbnNvbGUubG9nKCdzYWdhIGxvYWRVc2VyUG9zdHMg7Iuk7ZaJIDo6OiAnLCBhY3Rpb24uZGF0YSwgYWN0aW9uLmxhc3RJZClcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IExPQURfVVNFUl9QT1NUU19TVUNDRVNTLFxyXG5cdFx0XHRkYXRhOiByZXN1bHQuZGF0YSxcclxuXHRcdH0pXHJcblx0XHRjb25zb2xlLmxvZygnc2FnYSBsb2FkUG9zdHNTdWNjZXNzIOyEseqztTo6OiAnLCByZXN1bHQpXHJcblx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRjb25zb2xlLmRpcignc2FnYSBsb2FkVXNlclBvc3RzIGVycm9yIDo6OiAnLCBlcnIpXHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOiBMT0FEX1VTRVJfUE9TVFNfRkFJTFVSRSxcclxuXHRcdFx0ZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkUG9zdHNBUEkobGFzdElkKSB7IC8vIDMg7KCE64us65CY66m0XHJcblx0Ly9yZXR1cm4gYXhpb3MuZ2V0KCcvYXBpL3Bvc3RzJywgZGF0YSkgLy8gNCDrjbDsnbTthLDqsIAg6rCE64ukIGZyb250XHJcblx0Ly8g67O07Ya1IGdldCDrsKnsi53snYAg642w7J207YSw66W8IOuquyDrhKPquLDrlYzrrLjsl5Ag7L+866as7Iqk7Yq466eB7Jy866GcIOuEo+yWtOykmOyVvO2VnOuLpCAo7KO87IaMKSwgZXRjIDogbGltaXQ9MTAmb2Zmc2V0PTEwXHJcblx0Ly8g7Y+s7Iqk7Yq4IOuTseydgCDrjbDsnbTthLAg7LqQ7Iux7J20IOyViOuQmOyngOunjCwg6rKf7J2AIOuNsOydtO2EsCDsupDsi7HsnYQg6rCZ7J20IO2VoCDsiJgg7J6I64ukXHJcblx0Ly8gbGFzdElkIOqwgCB1bmRlZmluZWQg7J24IOqyveyasCAwXHJcblx0cmV0dXJuIGF4aW9zLmdldChgL3Bvc3RzP2xhc3RJZD0ke2xhc3RJZCB8fCAwfWApOyAvLyA0IOuNsOydtO2EsOqwgCDqsITri6QgLFxyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZFBvc3RzKGFjdGlvbikgeyAvLyAxIOyVoeyFmOyXkOyEnFxyXG5cdHRyeSB7XHJcblx0XHRjb25zb2xlLmxvZygnU2FnYXMgbG9hZFBvc3RzIOyLpO2WieykkTo6OiAnLCBhY3Rpb24ubGFzdElkKVxyXG5cdFx0Y29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkUG9zdHNBUEksIGFjdGlvbi5sYXN0SWQpOyAvLyAyIOuNsOydtO2EsOulvCDqurzrgrTshJxcclxuXHRcdC8veWllbGQgZGVsYXkoMTAwMCkgZnJvbnRcclxuXHRcdGNvbnNvbGUubG9nKCdzYWdhcyBsb2FkUG9zdHMg7JmE66OMOjo6ICcsIHJlc3VsdClcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IExPQURfUE9TVFNfU1VDQ0VTUyxcclxuXHRcdFx0Ly8gZGF0YTogZ2VuZXJhdGVEdW1teVBvc3QoMTApLCAvLyBkYXRhIDEwIOqwnCBmcm9udFxyXG5cdFx0XHRkYXRhOiByZXN1bHQuZGF0YSxcclxuXHRcdH0pO1xyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0Y29uc29sZS5kaXIoJ3NhZ2EgbG9hZFBvc3RzIGVycm9yOiAnLCBlcnIpO1xyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogTE9BRF9QT1NUU19GQUlMVVJFLFxyXG5cdFx0XHRlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBhZGRQb3N0QVBJKGRhdGEpIHsgLy8gMyDsoITri6zrkJjrqbRcclxuXHQvL3JldHVybiBheGlvcy5wb3N0KCcvYXBpL3Bvc3QnLCBkYXRhKSAvLyA0IOuNsOydtO2EsOqwgCDqsITri6QgZnJvbnRcclxuXHQvLyBkYXRhIGNvbnRlbnQg6rCAIHJlcS5ib2R5LmNvbnRlbnQg66GcIOuwseyXlOuTnOyXkCDrs4DtmZhcclxuXHQvL3JldHVybiBheGlvcy5wb3N0KCcvcG9zdCcsIHtjb250ZW50OiBkYXRhfSkgLy8gNCDrjbDsnbTthLDqsIAg6rCE64ukLFxyXG5cdC8vIGZvcm0gZGF0YSDripQge2NvbnRlbnQ6IGRhdGF9IOyZgCDqsJnsnbQg6rCQ7Iu466m0IOyViOuQnOuLpCwg67CU66GcIGRhdGEg66GcIOuEo+yWtOykmOyVvO2VqFxyXG5cdHJldHVybiBheGlvcy5wb3N0KCcvcG9zdCcsIGRhdGEpIC8vIDQg642w7J207YSw6rCAIOqwhOuLpFxyXG59XHJcblxyXG5mdW5jdGlvbiogYWRkUG9zdChhY3Rpb24pIHsgLy8gMSDslaHshZjsl5DshJxcclxuXHR0cnkge1xyXG5cdFx0Y29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRQb3N0QVBJLCBhY3Rpb24uZGF0YSkgLy8gMiDrjbDsnbTthLDrpbwg6rq864K07IScXHJcblx0XHQvL3lpZWxkIGRlbGF5KDEwMDApIGZyb250XHJcblx0XHQvL2NvbnN0IGlkID0gc2hvcnRJZC5nZW5lcmF0ZSgpIC8vIGZyb250IOydmCDrjZTrr7gg7JWE65SUXHJcblx0XHRjb25zb2xlLmxvZygnYWRkUG9zdCDsi6TtlonspJE6OjonLCByZXN1bHQpXHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOiBBRERfUE9TVF9TVUNDRVNTLFxyXG5cdFx0XHQvKmRhdGE6IHsgLy8gZnJvbnQgZHVtbXlcclxuXHRcdFx0XHRpZCxcclxuXHRcdFx0XHRjb250ZW50OiBhY3Rpb24uZGF0YSxcclxuXHRcdFx0fSovXHJcblx0XHRcdGRhdGE6IHJlc3VsdC5kYXRhLCAvLyBiYWNrLCDsi6TsoJzroZwg6rKM7Iuc6riA7J20IOuTpOyWtOyeiOydjFxyXG5cdFx0fSlcclxuXHRcdGNvbnNvbGUubG9nKCdhZGRQb3N0IOyZhOujjDo6OicsIHJlc3VsdClcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IEFERF9QT1NUX1RPX01FLFxyXG5cdFx0XHQvLyBkYXRhOiBpZCwgLy8gZnJvbnQgZHVtbXlcclxuXHRcdFx0ZGF0YTogcmVzdWx0LmRhdGEuaWQsIC8vIGJhY2tcclxuXHRcdH0pXHJcblx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRjb25zb2xlLmVycm9yKCdzYWdhIGFkZFBvc3QgZXJyb3I6OjogJywgZXJyKVxyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogQUREX1BPU1RfRkFJTFVSRSxcclxuXHRcdFx0ZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhXHJcblx0XHR9KVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlUG9zdEFQSShkYXRhKXtcclxuXHRyZXR1cm4gYXhpb3MucGF0Y2goYC9wb3N0LyR7ZGF0YS5pZH1gLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHVwZGF0ZVBvc3QoYWN0aW9uKXtcclxuXHR0cnl7XHJcblx0XHRjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHVwZGF0ZVBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuXHRcdGNvbnNvbGUubG9nKCd1cGRhdGVQb3N0IOyLpO2WiTo6OiAnLCBhY3Rpb24uZGF0YSlcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IFVQREFURV9QT1NUX1NVQ0NFU1MsXHJcblx0XHRcdGRhdGE6IHJlc3VsdC5kYXRhLFxyXG5cdFx0fSlcclxuXHRcdGNvbnNvbGUubG9nKCd1cGRhdGVQb3N0IOyEseqztTo6OiAnLCByZXN1bHQuZGF0YSlcclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOiBVUERBVEVfUE9TVF9GQUlMVVJFLFxyXG5cdFx0XHRlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcblx0XHR9KVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlUG9zdEFQSShkYXRhKSB7IC8vIDMg7KCE64us65CY66m0XHJcblx0Ly9yZXR1cm4gYXhpb3MucG9zdCgnL2FwaS9wb3N0JywgZGF0YSkgLy8gNCDrjbDsnbTthLDqsIAg6rCE64ukIGZyb250XHJcblx0cmV0dXJuIGF4aW9zLmRlbGV0ZShgL3Bvc3QvJHtkYXRhfWApIC8vIDQg642w7J207YSw6rCAIOqwhOuLpCBiYWNrIC8vZGVsZXRlIOydmCBkYXRhIOuKlCBwb3N0LmlkIChQb3N0Q2FyZC5qcynsl5DshJwg7ZmV7J24IOqwgOuKpVxyXG59XHJcblxyXG5mdW5jdGlvbiogcmVtb3ZlUG9zdChhY3Rpb24pIHsgLy8gMSDslaHshZjsl5DshJxcclxuXHR0cnkgeyAvLyDtj6zsiqTtirgg66as65OA7ISc7IOB7YOc7JmAIOycoOyggOumrOuTgOyEnOyDge2DnOyZgCDrj5nsi5zsl5Ag7ZWc67Cp7JeQIOuwlOq/gOyImCDsl4bquLDrlYzrrLjsl5Ag7JWh7IWY7J2EIOuRkOuyiOycvOuhnCDrsJTqv5TspIDri6QsXHJcblx0XHRjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHJlbW92ZVBvc3RBUEksIGFjdGlvbi5kYXRhKSAvLyAyIOuNsOydtO2EsOulvCDqurzrgrTshJxcclxuXHRcdC8veWllbGQgZGVsYXkoMTAwMCkgZnJvbnRcclxuXHRcdGNvbnNvbGUubG9nKCdyZW1vdmVQb3N0IOyLpO2WiTo6OiAnLCBhY3Rpb24uZGF0YSlcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IFJFTU9WRV9QT1NUX1NVQ0NFU1MsXHJcblx0XHRcdGRhdGE6IHJlc3VsdC5kYXRhLCAvLyDslrTrlqQg6rKM7Iuc66y87J2EIOyngOyboOuKlOyngCBpZCDqsIDsnojsnYTqsoMsXHJcblx0XHR9KVxyXG5cdFx0Y29uc29sZS5sb2coJ3JlbW92ZVBvc3Qg7JmE66OMOjo6ICcsIHJlc3VsdClcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IFJFTU9WRV9QT1NUX09GX01FLFxyXG5cdFx0XHQvL2RhdGE6IGFjdGlvbi5kYXRhLCBmcm9udFxyXG5cdFx0XHRkYXRhOiBhY3Rpb24uZGF0YSwgIC8vIGFjdGlvbiDsnbQg65Ok7Ja07JmU7J2E65WMIOuNsOydtO2EsFxyXG5cdFx0fSlcclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoJ3NhZ2EgcmVtb3ZlUG9zdCBlcnJvcjogJywgZXJyKVxyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogUkVNT1ZFX1BPU1RfRkFJTFVSRSxcclxuXHRcdFx0ZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhXHJcblx0XHR9KVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gYWRkQ29tbWVudEFQSShkYXRhKSB7IC8vIDMg7KCE64us65CY66m0XHJcblx0Ly/so7zshozripQg67Cx7JeU65Oc7JmAIO2UhOuhoO2KuOydmCDslb3sho3snbzrv5Ag7KCV7ZW07KeE6rG07JeG64ukXHJcblx0Ly9yZXR1cm4gYXhpb3MucG9zdChgL2FwaS9wb3N0LyR7ZGF0YS5wb3N0SWR9L2NvbW1lbnRgLCBkYXRhKSAvLyA0IOuNsOydtO2EsOqwgCDqsITri6QgLy8gZnJvbnRcclxuXHRyZXR1cm4gYXhpb3MucG9zdChgL3Bvc3QvJHtkYXRhLnBvc3RJZH0vY29tbWVudGAsIGRhdGEpIC8vIDQg642w7J207YSw6rCAIOqwhOuLpCAvLyBQT1NUIC9wb3N0LzEvY29tbWVudFxyXG59XHJcblxyXG5mdW5jdGlvbiogYWRkQ29tbWVudChhY3Rpb24pIHsgLy8gMSDslaHshZjsl5DshJxcclxuXHR0cnkge1xyXG5cdFx0Y29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRDb21tZW50QVBJLCBhY3Rpb24uZGF0YSkgLy8gMiDrjbDsnbTthLDrpbwg6rq864K07IScIC8vYmFja1xyXG5cdFx0Ly95aWVsZCBkZWxheSgxMDAwKSBmcm9udFxyXG5cdFx0Y29uc29sZS5sb2coJ2FkZENvbW1lbnQg7Iuk7ZaJ7KSRIDo6OicsIGFjdGlvbi5kYXRhKVxyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogQUREX0NPTU1FTlRfU1VDQ0VTUyxcclxuXHRcdFx0Ly9kYXRhOiBhY3Rpb24uZGF0YSAvLyBmcm9udFxyXG5cdFx0XHRkYXRhOiByZXN1bHQuZGF0YSxcclxuXHRcdH0pXHJcblx0XHRjb25zb2xlLmxvZygnYWRkQ29tbWVudCDsmYTro4w6OjonLCByZXN1bHQpXHJcblx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRjb25zb2xlLmVycm9yKCdzYWdhIGFkZENvbW1lbnQgZXJyb3I6OjogJywgZXJyKVxyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogQUREX0NPTU1FTlRfRkFJTFVSRSxcclxuXHRcdFx0ZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhXHJcblx0XHR9KVxyXG5cdH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFJldHdlZXQoKSB7XHJcblx0eWllbGQgdGFrZUxhdGVzdChSRVRXRUVUX1JFUVVFU1QsIHJldHdlZXQpXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFVwbG9hZEltYWdlcygpIHtcclxuXHR5aWVsZCB0YWtlTGF0ZXN0KFVQTE9BRF9JTUFHRVNfUkVRVUVTVCwgdXBsb2FkSW1hZ2VzKVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMaWtlUG9zdCgpIHtcclxuXHR5aWVsZCB0YWtlTGF0ZXN0KExJS0VfUE9TVF9SRVFVRVNULCBsaWtlUG9zdClcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoVW5saWtlUG9zdCgpIHtcclxuXHR5aWVsZCB0YWtlTGF0ZXN0KFVOTElLRV9QT1NUX1JFUVVFU1QsIHVubGlrZVBvc3QpXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRQb3N0KCkge1xyXG5cdHlpZWxkIHRha2VMYXRlc3QoTE9BRF9QT1NUX1JFUVVFU1QsIGxvYWRQb3N0KVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkSGFzaHRhZ1Bvc3RzKCkge1xyXG5cdHlpZWxkIHRocm90dGxlKDUwMDAsIExPQURfSEFTSFRBR19QT1NUU19SRVFVRVNULCBsb2FkSGFzaHRhZ1Bvc3RzKVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkVXNlclBvc3RzKCkge1xyXG5cdHlpZWxkIHRocm90dGxlKDUwMDAsIExPQURfVVNFUl9QT1NUU19SRVFVRVNULCBsb2FkVXNlclBvc3RzKVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkUG9zdHMoKSB7XHJcblx0eWllbGQgdGhyb3R0bGUoNTAwMCwgTE9BRF9QT1NUU19SRVFVRVNULCBsb2FkUG9zdHMpXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEFkZFBvc3QoKSB7XHJcblx0eWllbGQgdGFrZUxhdGVzdChBRERfUE9TVF9SRVFVRVNULCBhZGRQb3N0KVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hVcGRhdGVQb3N0KCl7XHJcblx0eWllbGQgdGFrZUxhdGVzdChVUERBVEVfUE9TVF9SRVFVRVNULCB1cGRhdGVQb3N0KVxyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaFJlbW92ZVBvc3QoKSB7XHJcblx0eWllbGQgdGFrZUxhdGVzdChSRU1PVkVfUE9TVF9SRVFVRVNULCByZW1vdmVQb3N0KVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hBZGRDb21tZW50KCkge1xyXG5cdHlpZWxkIHRha2VMYXRlc3QoQUREX0NPTU1FTlRfUkVRVUVTVCwgYWRkQ29tbWVudClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHBvc3RTYWdhKCkge1xyXG5cdHlpZWxkIGFsbChbXHJcblx0XHRmb3JrKHdhdGNoUmV0d2VldCksXHJcblx0XHRmb3JrKHdhdGNoVXBsb2FkSW1hZ2VzKSxcclxuXHRcdGZvcmsod2F0Y2hMaWtlUG9zdCksXHJcblx0XHRmb3JrKHdhdGNoVW5saWtlUG9zdCksXHJcblx0XHRmb3JrKHdhdGNoQWRkUG9zdCksXHJcblx0XHRmb3JrKHdhdGNoTG9hZFBvc3QpLFxyXG5cdFx0Zm9yayh3YXRjaExvYWRVc2VyUG9zdHMpLFxyXG5cdFx0Zm9yayh3YXRjaExvYWRIYXNodGFnUG9zdHMpLFxyXG5cdFx0Zm9yayh3YXRjaExvYWRQb3N0cyksXHJcblx0XHRmb3JrKHdhdGNoVXBkYXRlUG9zdCksXHJcblx0XHRmb3JrKHdhdGNoUmVtb3ZlUG9zdCksXHJcblx0XHRmb3JrKHdhdGNoQWRkQ29tbWVudCksXHJcblx0XSk7XHJcbn0iLCJpbXBvcnQge2FsbCwgY2FsbCwgZm9yaywgcHV0LCB0YWtlTGF0ZXN0fSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHtcclxuXHRDSEFOR0VfTklDS05BTUVfRkFJTFVSRSxcclxuXHRDSEFOR0VfTklDS05BTUVfUkVRVUVTVCxcclxuXHRDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyxcclxuXHRGT0xMT1dfRkFJTFVSRSxcclxuXHRGT0xMT1dfUkVRVUVTVCxcclxuXHRGT0xMT1dfU1VDQ0VTUywgTE9BRF9GT0xMT1dFUlNfRkFJTFVSRSwgTE9BRF9GT0xMT1dFUlNfUkVRVUVTVCxcclxuXHRMT0FEX0ZPTExPV0VSU19TVUNDRVNTLCBMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRSwgTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1QsIExPQURfRk9MTE9XSU5HU19TVUNDRVNTLFxyXG5cdExPQURfTVlfSU5GT19GQUlMVVJFLFxyXG5cdExPQURfTVlfSU5GT19SRVFVRVNULFxyXG5cdExPQURfTVlfSU5GT19TVUNDRVNTLCBMT0FEX1VTRVJfRkFJTFVSRSwgTE9BRF9VU0VSX1JFUVVFU1QsIExPQURfVVNFUl9TVUNDRVNTLFxyXG5cdExPR19JTl9GQUlMVVJFLFxyXG5cdExPR19JTl9SRVFVRVNULFxyXG5cdExPR19JTl9TVUNDRVNTLFxyXG5cdExPR19PVVRfRkFJTFVSRSxcclxuXHRMT0dfT1VUX1JFUVVFU1QsXHJcblx0TE9HX09VVF9TVUNDRVNTLCBSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRSwgUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1QsIFJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTLFxyXG5cdFNJR05fVVBfRkFJTFVSRSxcclxuXHRTSUdOX1VQX1JFUVVFU1QsXHJcblx0U0lHTl9VUF9TVUNDRVNTLFxyXG5cdFVORk9MTE9XX0ZBSUxVUkUsXHJcblx0VU5GT0xMT1dfUkVRVUVTVCxcclxuXHRVTkZPTExPV19TVUNDRVNTLFxyXG59IGZyb20gXCIuLi9yZWR1Y2Vycy91c2VyXCI7XHJcblxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlRm9sbG93ZXJBUEkoZGF0YSkge1xyXG5cdHJldHVybiBheGlvcy5kZWxldGUoYC91c2VyL2ZvbGxvd2VyLyR7ZGF0YX1gKSAvLyDrqofrsojsp7jsnZgg7YyU66Gc7JuM66W8IOygnOqxsO2VnOuLpFxyXG59XHJcblxyXG5mdW5jdGlvbiogcmVtb3ZlRm9sbG93ZXIoYWN0aW9uKSB7XHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwocmVtb3ZlRm9sbG93ZXJBUEksIGFjdGlvbi5kYXRhKVxyXG5cdFx0Y29uc29sZS5sb2coJ3NhZ2EgcmVtb3ZlRm9sbG93ZXIg7JqU7LKtOjogJywgYWN0aW9uLmRhdGEpXHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOiBSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUyxcclxuXHRcdFx0ZGF0YTogcmVzdWx0LmRhdGEsXHJcblx0XHR9KVxyXG5cdFx0Y29uc29sZS5sb2coJ3NhZ2EgcmVtb3ZlRm9sbG93ZXIg7ISx6rO1OjogJywgcmVzdWx0KVxyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0Y29uc29sZS5lcnJvcignc2FnYSByZW1vdmVGb2xsb3dlciDsi6TtjKg6OiAnLCBlcnIpXHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOiBSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRSxcclxuXHRcdFx0ZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhXHJcblx0XHR9KVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZEZvbGxvd2Vyc0FQSShkYXRhKSB7XHJcblx0cmV0dXJuIGF4aW9zLmdldCgnL3VzZXIvZm9sbG93ZXJzJywgZGF0YSlcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRGb2xsb3dlcnMoYWN0aW9uKSB7XHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZEZvbGxvd2Vyc0FQSSwgYWN0aW9uLmRhdGEpXHJcblx0XHRjb25zb2xlLmxvZygnc2FnYSBmb2xsb3dlcnM6OiDsmpTssq0nLCBhY3Rpb24uZGF0YSlcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IExPQURfRk9MTE9XRVJTX1NVQ0NFU1MsXHJcblx0XHRcdGRhdGE6IHJlc3VsdC5kYXRhLFxyXG5cdFx0fSlcclxuXHRcdGNvbnNvbGUubG9nKCdzYWdhIGZvbGxvd2Vyczo6IOyEseqztScsIHJlc3VsdClcclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoJ3NhZ2EgZm9sbG93ZXJzOjonLCBlcnIpXHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOiBMT0FEX0ZPTExPV0VSU19GQUlMVVJFLFxyXG5cdFx0XHRlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcblx0XHR9KVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZEZvbGxvd2luZ3NBUEkoZGF0YSkge1xyXG5cdHJldHVybiBheGlvcy5nZXQoJy91c2VyL2ZvbGxvd2luZ3MnLCBkYXRhKVxyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZEZvbGxvd2luZ3MoYWN0aW9uKSB7XHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZEZvbGxvd2luZ3NBUEksIGFjdGlvbi5kYXRhKVxyXG5cdFx0Y29uc29sZS5sb2coJ3NhZ2EgZm9sbG93aW5ncyDsmpTssq06OicsIGFjdGlvbi5kYXRhKVxyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1MsXHJcblx0XHRcdGRhdGE6IHJlc3VsdC5kYXRhLFxyXG5cdFx0fSlcclxuXHRcdGNvbnNvbGUubG9nKCdzYWdhIGZvbGxvd2luZ3Mg7ISx6rO1OjonLCByZXN1bHQpXHJcblx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRjb25zb2xlLmVycm9yKCdzYWdhIGZvbGxvd2luZ3Mg7Iuk7YyoOjonLCBlcnIpXHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOiBMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRSxcclxuXHRcdFx0ZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG5cdFx0fSlcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoYW5nZU5pY2tuYW1lQVBJKGRhdGEpIHsgLy8gZ2VuZXJhdG9yIOyVhOuLmFxyXG5cdC8vIOyLpOygnCDshJzrsoTsl5Ag66Gc6re47J24IOyalOyyreydhCDrs7Trg4QgLy8gYmFja1xyXG5cdC8vcmV0dXJuIGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzA2NS91c2VyL2xvZ2luJywgZGF0YSlcclxuXHQvLyBsb2NhbGhvc3Qg7KSR67O1IOyXhuyVoOq4sFxyXG5cdHJldHVybiBheGlvcy5wYXRjaCgnL3VzZXIvbmlja25hbWUnLCB7bmlja25hbWU6IGRhdGF9KVxyXG59XHJcblxyXG5mdW5jdGlvbiogY2hhbmdlTmlja25hbWUoYWN0aW9uKSB7IC8vIGxvZ2luIGFjdGlvbiByZXF1ZXN0IOqwgCBhY3Rpb24g7JeQIOyghOuLrFxyXG5cdHRyeSB7IC8vIOyalOyyrSDsi6TtjKgg64yA67mEXHJcblx0XHQvL3lpZWxkIGRlbGF5KDEwMDApIC8vIGZyb250XHJcblx0XHRjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGNoYW5nZU5pY2tuYW1lQVBJLCBhY3Rpb24uZGF0YSkgLy8g7ISc67KE7JeQ7IScIOuwm+ydgCDqsrDqs7wg6rCS7J2EIOuwm+ydjFxyXG5cdFx0Y29uc29sZS5sb2coJ3NhZ2EgY2hhbmdlTmlja25hbWUg7Iuk7ZaJ7KSROjonLCBhY3Rpb24uZGF0YSlcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTLFxyXG5cdFx0XHQvL2RhdGE6IGFjdGlvbi5kYXRhLCAvLyBmcm9udFxyXG5cdFx0XHRkYXRhOiByZXN1bHQuZGF0YSAvLyAo7ISx6rO1IOqysOqzvCDri7TquYApIGJhY2tcclxuXHRcdH0pXHJcblx0XHRjb25zb2xlLmxvZygnc2FnYSBjaGFuZ2VOaWNrbmFtZSDsmYTro4wgOjonLCByZXN1bHQpXHJcblx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRjb25zb2xlLmVycm9yKCdjaGFuZ2VOaWNrbmFtZScsIGVycilcclxuXHRcdHlpZWxkIHB1dCh7IC8vIHB1dCDsnYAgZGlzcGF0Y2gg65286rOgIOyDneqwge2VmOyekFxyXG5cdFx0XHR0eXBlOiBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSxcclxuXHRcdFx0ZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhIC8vICjsi6TtjKgg6rKw6rO8IOuLtOq5gClcclxuXHRcdH0pXHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkVXNlckFQSShkYXRhKSB7XHJcblx0cmV0dXJuIGF4aW9zLmdldChgL3VzZXIvJHtkYXRhfWApXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkVXNlcihhY3Rpb24pIHtcclxuXHR0cnkge1xyXG5cdFx0Y29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkVXNlckFQSSwgYWN0aW9uLmRhdGEpXHJcblx0XHRjb25zb2xlLmxvZygnc2FnYSBsb2FkVXNlciDsi6TtlokgOjogJywgcmVzdWx0LmRhdGEpXHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOiBMT0FEX1VTRVJfU1VDQ0VTUyxcclxuXHRcdFx0ZGF0YTogcmVzdWx0LmRhdGFcclxuXHRcdH0pXHJcblx0XHRjb25zb2xlLmxvZygnc2FnYSBsb2FkVXNlciDshLHqs7UgOjogJywgcmVzdWx0KVxyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0Y29uc29sZS5lcnJvcignc2FnYSBsb2FkVXNlciBGYWlsdXJlIOyLpO2MqCA6OiAnLCBlcnIpXHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOiBMT0FEX1VTRVJfRkFJTFVSRSxcclxuXHRcdFx0ZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG5cdFx0fSlcclxuXHR9XHJcbn1cclxuXHJcbi8vZnVuY3Rpb24gbG9hZE15SW5mb0FQSSh1c2VySWQpIHtcclxuZnVuY3Rpb24gbG9hZE15SW5mb0FQSSgpIHtcclxuXHQvLyDshJzrsoTsl5Ag7JqU7LKt7J2EIOuztOuCtOuKlCDrtoDrtoRcclxuXHRyZXR1cm4gYXhpb3MuZ2V0KCcvdXNlcicpOyAvLyDshJzrsoTsgqzsnbTrk5zroIzrjZTrp4Hsnbwg65WM64qULCDruIzrnbzsmrDsoIDqsIAg7JeG7Ja07JqULlxyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZE15SW5mbygpIHtcclxuXHR0cnkge1xyXG5cdFx0Y29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkTXlJbmZvQVBJKVxyXG5cdFx0Y29uc29sZS5sb2coJ3NhZ2EgbG9hZE15SW5mbyDsi6TtlokgOjogJylcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IExPQURfTVlfSU5GT19TVUNDRVNTLFxyXG5cdFx0XHRkYXRhOiByZXN1bHQuZGF0YSxcclxuXHRcdH0pXHJcblx0XHRjb25zb2xlLmxvZygnc2FnYSBsb2FkTXlJbmZvIOyEseqztTo6ICcsIHJlc3VsdClcclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoJ3NhZ2EgbG9hZE15SW5mbyBlcnJvciA6OiAnLCBlcnIpXHJcblx0XHRjb25zb2xlLmRpcignc2FnYSBsb2FkTXlJbmZvIGVycm9yIDo6ICcsIGVycilcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IExPQURfTVlfSU5GT19GQUlMVVJFLFxyXG5cdFx0XHRlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvZ0luQVBJKGRhdGEpIHsgLy8gZ2VuZXJhdG9yIOyVhOuLmFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vcmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvbG9naW4nLCBkYXRhKSAvLyDsi6TsoJwg7ISc67KE7JeQIOuhnOq3uOyduCDsmpTssq3snYQg67O064OEIC8vIGZyb250XHJcblxyXG5cdC8vIOyLpOygnCDshJzrsoTsl5Ag66Gc6re47J24IOyalOyyreydhCDrs7Trg4QgLy8gYmFja1xyXG5cdC8vcmV0dXJuIGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzA2NS91c2VyL2xvZ2luJywgZGF0YSlcclxuXHJcblx0Ly8gbG9jYWxob3N0IOykkeuztSDsl4bslaDquLBcclxuXHRyZXR1cm4gYXhpb3MucG9zdCgnL3VzZXIvbG9naW4nLCBkYXRhKVxyXG59XHJcblxyXG4vLyDthYzsiqTtirgg7L2U65OcXHJcbi8vIGNvbnN0IGwgPSBsb2dJbih7dHlwZTogJ0xPR19JTl9SRVFVRVNUJywgZGF0YToge2lkOiAncmxhYWxzZG44QG5hdmVyLmNvbSd9fSlcclxuLy8gXHRcdGwubmV4dCgpO1xyXG4vLyBcdFx0bC5uZXh0KCk7XHJcbi8vLy8vLy8vLy8vLy8vLy8vXHJcbmZ1bmN0aW9uKiBsb2dJbihhY3Rpb24pIHsgLy8gbG9naW4gYWN0aW9uIHJlcXVlc3Qg6rCAIGFjdGlvbiDsl5Ag7KCE64usXHJcblx0dHJ5IHsgLy8g7JqU7LKtIOyLpO2MqCDrjIDruYRcclxuXHRcdC8veWllbGQgZGVsYXkoMTAwMCkgLy8gZnJvbnRcclxuXHRcdGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9nSW5BUEksIGFjdGlvbi5kYXRhKSAvLyDshJzrsoTsl5DshJwg67Cb7J2AIOqysOqzvCDqsJLsnYQg67Cb7J2MXHJcblx0XHRjb25zb2xlLmxvZygnc2FnYSBsb2dJbiDsi6TtlonspJE6OicsIGFjdGlvbi5kYXRhKVxyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogTE9HX0lOX1NVQ0NFU1MsXHJcblx0XHRcdC8vZGF0YTogYWN0aW9uLmRhdGEsIC8vIGZyb250XHJcblx0XHRcdGRhdGE6IHJlc3VsdC5kYXRhIC8vICjshLHqs7Ug6rKw6rO8IOuLtOq5gCkgYmFja1xyXG5cdFx0fSlcclxuXHRcdGNvbnNvbGUubG9nKCdzYWdhIGxvZ0luIOyZhOujjCA6OicsIHJlc3VsdClcclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoJ2xvZ0luJywgZXJyKVxyXG5cdFx0eWllbGQgcHV0KHsgLy8gcHV0IOydgCBkaXNwYXRjaCDrnbzqs6Ag7IOd6rCB7ZWY7J6QXHJcblx0XHRcdHR5cGU6IExPR19JTl9GQUlMVVJFLFxyXG5cdFx0XHRlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEgLy8gKOyLpO2MqCDqsrDqs7wg64u06rmAKVxyXG5cdFx0fSlcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvZ091dEFQSSgpIHtcclxuXHQvLyByZXR1cm4gYXhpb3MucG9zdCgnL2FwaS9sb2dvdXQnKSBmcm9udFxyXG5cdHJldHVybiBheGlvcy5wb3N0KCcvdXNlci9sb2dvdXQnKVxyXG59XHJcblxyXG5mdW5jdGlvbiogbG9nT3V0KCkge1xyXG5cdHRyeSB7IC8vIOyalOyyrSDsi6TtjKgg64yA67mEXHJcblx0XHQvL3lpZWxkIGRlbGF5KDEwMDApIGZyb250XHJcblx0XHR5aWVsZCBjYWxsKGxvZ091dEFQSSkgLy8g7ISc67KE7JeQ7IScIOuwm+ydgCDqsrDqs7wg6rCS7J2EIOuwm+ydjCBiYWNrXHJcblx0XHRjb25zb2xlLmxvZygnc2FnYXM6OiBsb2dvdXQg7Iuk7ZaJJylcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IExPR19PVVRfU1VDQ0VTUyxcclxuXHRcdH0pXHJcblx0XHRjb25zb2xlLmxvZygnc2FnYXM6OiBsb2dvdXQg7JmE66OMJylcclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoJ2Zyb250IGxvZ091dCA6ICcsIGVycilcclxuXHRcdHlpZWxkIHB1dCh7IC8vIHB1dCDsnYAgZGlzcGF0Y2gg65286rOgIOyDneqwge2VmOyekFxyXG5cdFx0XHR0eXBlOiBMT0dfT1VUX0ZBSUxVUkUsXHJcblx0XHRcdGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSAvLyAo7Iuk7YyoIOqysOqzvCDri7TquYApXHJcblx0XHR9KVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2lnblVwQVBJKGRhdGEpIHtcclxuXHQvLyBiYWNrIGVuZCBzZXJ2ZXIgYWRkclxyXG5cdC8vIGRhdGEg64qUIGVtYWlsLCBuaWNrbmFtZSwgcGFzc3dvcmQgb2JqZWN0XHJcblx0Ly9yZXR1cm4gYXhpb3MucG9zdCgnL2FwaS9zaWdudXAnLCBkYXRhKSAvLyBmcm9udFxyXG5cdHJldHVybiBheGlvcy5wb3N0KCcvdXNlcicsIGRhdGEpIC8vIGJhY2tcclxufVxyXG5cclxuZnVuY3Rpb24qIHNpZ25VcChhY3Rpb24pIHtcclxuXHR0cnkge1xyXG5cdFx0Ly95aWVsZCBkZWxheSgxMDAwKVxyXG5cdFx0Y29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChzaWduVXBBUEksIGFjdGlvbi5kYXRhKVxyXG5cdFx0Y29uc29sZS5sb2coJ3NhZ2Egc2lnbiB1cCByZXN1bHQg7Iuk7ZaJ7KSRIDo6ICcsIGFjdGlvbi5kYXRhKVxyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogU0lHTl9VUF9TVUNDRVNTLFxyXG5cdFx0XHQvL2RhdGE6IHJlc3VsdC5kYXRhXHJcblx0XHR9KVxyXG5cdFx0Y29uc29sZS5sb2coJ3NhZ2Egc2lnbiB1cCDsmYTro4wgOjogJywgcmVzdWx0KVxyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0Y29uc29sZS5lcnJvcignc2FnYSBzaWduVXAgZXJyb3IgOiAnLCBlcnIpXHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOiBTSUdOX1VQX0ZBSUxVUkUsXHJcblx0XHRcdGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YVxyXG5cdFx0fSlcclxuXHR9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBmb2xsb3dBUEkoZGF0YSkgeyAvLyBkYXRhIOyXkCDsgqzsmqnsnpAgaWQg64Sj7Ja07KO86riwXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IC8vIHJldHVybiBheGlvcy5wb3N0KCcvYXBpL2ZvbGxvdycsIGRhdGEpIGZyb250XHJcblx0cmV0dXJuIGF4aW9zLnBhdGNoKGAvdXNlci8ke2RhdGF9L2ZvbGxvd2ApXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBmb2xsb3coYWN0aW9uKSB7XHJcblx0dHJ5IHtcclxuXHRcdC8veWllbGQgZGVsYXkoMTAwMCkgZnJvbnRcclxuXHRcdGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoZm9sbG93QVBJLCBhY3Rpb24uZGF0YSlcclxuXHRcdGNvbnNvbGUubG9nKCdzYWdhIGZvbGxvdyDsi6TtlokgOiAnLCByZXN1bHQpXHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOiBGT0xMT1dfU1VDQ0VTUyxcclxuXHRcdFx0Ly9kYXRhOiBhY3Rpb24uZGF0YSBmcm9udFxyXG5cdFx0XHRkYXRhOiByZXN1bHQuZGF0YVxyXG5cdFx0fSlcclxuXHRcdGNvbnNvbGUubG9nKCdzYWdhIGZvbGxvdyDsmYTro4wgOjogJywgcmVzdWx0KVxyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0Y29uc29sZS5lcnJvcignc2FnYSBmb2xsb3cgZXJyb3IgOjogJywgZXJyKVxyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogRk9MTE9XX0ZBSUxVUkUsXHJcblx0XHRcdGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuXHRcdH0pXHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiB1bmZvbGxvd0FQSShkYXRhKSB7Ly8gZGF0YSDsl5Ag7IKs7Jqp7J6QIGlkIOuEo+yWtOyjvOq4sFxyXG5cdC8vcmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvdW5mb2xsb3cnLCBkYXRhKSBmcm9udFxyXG5cdHJldHVybiBheGlvcy5kZWxldGUoYC91c2VyLyR7ZGF0YX0vZm9sbG93YClcclxufVxyXG5cclxuZnVuY3Rpb24qIHVuZm9sbG93KGFjdGlvbikge1xyXG5cdHRyeSB7XHJcblx0XHRjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHVuZm9sbG93QVBJLCBhY3Rpb24uZGF0YSlcclxuXHRcdC8veWllbGQgZGVsYXkoMTAwMCkgZnJvbnRcclxuXHRcdGNvbnNvbGUubG9nKCdzYWdhIHVuZm9sbG93IOyalOyyrSA6OiAnLCBhY3Rpb24uZGF0YSlcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IFVORk9MTE9XX1NVQ0NFU1MsXHJcblx0XHRcdC8vZGF0YTogYWN0aW9uLmRhdGEgZnJvbnRcclxuXHRcdFx0ZGF0YTogcmVzdWx0LmRhdGFcclxuXHRcdH0pXHJcblx0XHRjb25zb2xlLmxvZygnc2FnYSB1bmZvbGxvdyDshLHqs7U6OiAnLCByZXN1bHQpXHJcblx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRjb25zb2xlLmVycm9yKCdzYWdhIHVuZm9sbG93IGVycm9yOjogJywgZXJyKVxyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogVU5GT0xMT1dfRkFJTFVSRSxcclxuXHRcdFx0ZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG5cdFx0fSlcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFJlbW92ZUZvbGxvd2VyKCkge1xyXG5cdHlpZWxkIHRha2VMYXRlc3QoUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1QsIHJlbW92ZUZvbGxvd2VyKVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkRm9sbG93ZXJzKCkge1xyXG5cdHlpZWxkIHRha2VMYXRlc3QoTE9BRF9GT0xMT1dFUlNfUkVRVUVTVCwgbG9hZEZvbGxvd2VycylcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZEZvbGxvd2luZ3MoKSB7XHJcblx0eWllbGQgdGFrZUxhdGVzdChMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVCwgbG9hZEZvbGxvd2luZ3MpXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaENoYW5nZU5pY2tuYW1lKCkge1xyXG5cdHlpZWxkIHRha2VMYXRlc3QoQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QsIGNoYW5nZU5pY2tuYW1lKVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkVXNlcigpIHtcclxuXHR5aWVsZCB0YWtlTGF0ZXN0KExPQURfVVNFUl9SRVFVRVNULCBsb2FkVXNlcilcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZE15SW5mbygpIHtcclxuXHR5aWVsZCB0YWtlTGF0ZXN0KExPQURfTVlfSU5GT19SRVFVRVNULCBsb2FkTXlJbmZvKVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hGb2xsb3coKSB7XHJcblx0eWllbGQgdGFrZUxhdGVzdChGT0xMT1dfUkVRVUVTVCwgZm9sbG93KVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hVbmZvbGxvdygpIHtcclxuXHR5aWVsZCB0YWtlTGF0ZXN0KFVORk9MTE9XX1JFUVVFU1QsIHVuZm9sbG93KVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2dJbigpIHtcdC8vIOuhnOq3uOyduCDslaHshZjsnbQg7Iuk7ZaJ65Cg65WM6rmM7KeAIOq4sOuLpOumrOqyoOuLpOuKlCDrnLtcclxuXHR5aWVsZCB0YWtlTGF0ZXN0KExPR19JTl9SRVFVRVNULCBsb2dJbikgLy9MT0dfSU5fUkVRVUVTVCDslaHshZjsnbQg7Iuk7ZaJ65CY66m0IGxvZ0luIO2VqOyImCDsi6TtlolcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9nT3V0KCkge1x0Ly8g66Gc6re47JWE7JuDIOyVoeyFmOydtCDsi6TtlonrkKDrlYzquYzsp4Ag6riw64uk66as6rKg64uk64qUIOucu1xyXG5cdHlpZWxkIHRha2VMYXRlc3QoTE9HX09VVF9SRVFVRVNULCBsb2dPdXQpIC8vTE9HX09VVF9SRVFVRVNUIOyVoeyFmOydtCDsi6TtlonrkJjrqbQgbG9nSW4g7ZWo7IiYIOyLpO2WiVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hTaWduVXAoKSB7XHQvLyDtmozsm5DqsIDsnoUg7JWh7IWY7J20IOyLpO2WieuQoOuVjOq5jOyngCDquLDri6TrpqzqsqDri6TripQg65y7XHJcblx0eWllbGQgdGFrZUxhdGVzdChTSUdOX1VQX1JFUVVFU1QsIHNpZ25VcCkgLy8gU0lHTl9VUF9SRVFVRVNUIOyVoeyFmOydtCDsi6TtlonrkJjrqbQgbG9nSW4g7ZWo7IiYIOyLpO2WiVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogdXNlclNhZ2EoKSB7XHJcblx0eWllbGQgYWxsKFtcclxuXHRcdGZvcmsod2F0Y2hMb2FkVXNlciksXHJcblx0XHRmb3JrKHdhdGNoUmVtb3ZlRm9sbG93ZXIpLFxyXG5cdFx0Zm9yayh3YXRjaExvYWRGb2xsb3dlcnMpLFxyXG5cdFx0Zm9yayh3YXRjaExvYWRGb2xsb3dpbmdzKSxcclxuXHRcdGZvcmsod2F0Y2hDaGFuZ2VOaWNrbmFtZSksXHJcblx0XHRmb3JrKHdhdGNoTG9hZE15SW5mbyksXHJcblx0XHRmb3JrKHdhdGNoRm9sbG93KSxcclxuXHRcdGZvcmsod2F0Y2hVbmZvbGxvdyksXHJcblx0XHRmb3JrKHdhdGNoTG9nSW4pLFxyXG5cdFx0Zm9yayh3YXRjaExvZ091dCksXHJcblx0XHRmb3JrKHdhdGNoU2lnblVwKSxcclxuXHRdKVxyXG59XHJcbiIsImltcG9ydCB7Y3JlYXRlV3JhcHBlcn0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJ1xyXG5pbXBvcnQge2FwcGx5TWlkZGxld2FyZSwgY29tcG9zZSwgY3JlYXRlU3RvcmV9IGZyb20gJ3JlZHV4J1xyXG5pbXBvcnQge2NvbXBvc2VXaXRoRGV2VG9vbHN9IGZyb20gJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbidcclxuLy9pbXBvcnQgdGh1bmtNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXRodW5rJ1xyXG5pbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUgZnJvbSAncmVkdXgtc2FnYSdcclxuXHJcbmltcG9ydCByZWR1Y2VyIGZyb20gJy4uL3JlZHVjZXJzJ1xyXG5pbXBvcnQgcm9vdFNhZ2EgZnJvbSAnLi4vc2FnYXMnXHJcblxyXG5cclxuY29uc3QgbG9nZ2VyTWlkZGxld2FyZSA9ICh7ZGlzcGF0Y2gsIGdldFN0YXRlfSkgPT4gKG5leHQpID0+IChhY3Rpb24pID0+IHtcclxuXHRjb25zb2xlLmxvZyhhY3Rpb24pIC8vIOuvuOuTpOybqOyWtOulvCDtmZzsmqntlbQg66as642V7IqkIOuNsOu4jO2ItOymiCDsspjrn7wg7JWh7IWYIOuhnOq3uCDssI3tnojqsowg7ZWY6riwXHJcblx0cmV0dXJuIG5leHQoYWN0aW9uKVxyXG59XHJcblxyXG5jb25zdCBjb25maWd1cmVTdG9yZSA9ICgpID0+IHtcclxuXHRjb25zb2xlLmxvZygnY29uZmlndXJlU3RvcmUgY29udGV4dCA6OiAnKVxyXG5cdGNvbnN0IHNhZ2FNaWRkbGV3YXJlID0gY3JlYXRlU2FnYU1pZGRsZXdhcmUoKSAvLyBzYWdhIOyEpOyglSDrsKnrspVcclxuXHRjb25zdCBtaWRkbGV3YXJlcyA9IFtzYWdhTWlkZGxld2FyZSwgbG9nZ2VyTWlkZGxld2FyZV1cclxuXHRjb25zdCBlbmhhbmNlciA9XHJcblx0XHRcdHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbidcclxuXHRcdFx0XHRcdD8gY29tcG9zZShhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKVxyXG5cdFx0XHRcdFx0OiBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpXHJcblx0Y29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyLCBlbmhhbmNlcilcclxuXHRzdG9yZS5zYWdhVGFzayA9IHNhZ2FNaWRkbGV3YXJlLnJ1bihyb290U2FnYSlcclxuXHRyZXR1cm4gc3RvcmVcclxufVxyXG5jb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihjb25maWd1cmVTdG9yZSxcdFx0Ly8g7Ji17IWY6rCd7LK0IOuUlOuyhOq3uOqwgCDtirjro6jsnbTrqbQg66as642V7Iqk7JeQ6rSA7ZW07IScIOyekOyEuO2VnCDshKTrqoXsnbTrgpjsmKTquLDrlYzrrLjsl5Ag6rCc67Cc7ZWg65WQIHRydWUg66GcIOuGk+yekFxyXG5cdFx0e1xyXG5cdFx0XHRkZWJ1ZzogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcsXHJcblx0XHR9KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXI7XHJcbiIsImltcG9ydCBwcm9kdWNlLCB7ZW5hYmxlRVM1fSBmcm9tIFwiaW1tZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICguLi5hcmdzKSA9PiB7IC8vIO2UhOuhnOuTgOyKpCDtlajsiJgg7ZmV7J6lXHJcblx0ZW5hYmxlRVM1KClcclxuXHRyZXR1cm4gcHJvZHVjZSguLi5hcmdzKVxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaW1tZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yZWR1eC13cmFwcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2EvZWZmZWN0c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9