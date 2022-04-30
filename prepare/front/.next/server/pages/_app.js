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
/*! exports provided: initialState, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE, LOAD_POST_REQUEST, LOAD_POST_SUCCESS, LOAD_POST_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, LIKE_POST_REQUEST, LIKE_POST_SUCCESS, LIKE_POST_FAILURE, UPLOAD_IMAGES_REQUEST, UPLOAD_IMAGES_SUCCESS, UPLOAD_IMAGES_FAILURE, UNLIKE_POST_REQUEST, UNLIKE_POST_SUCCESS, UNLIKE_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, RETWEET_REQUEST, RETWEET_SUCCESS, RETWEET_FAILURE, REMOVE_IMAGE, addPost, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_REQUEST", function() { return LOAD_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_SUCCESS", function() { return LOAD_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_FAILURE", function() { return LOAD_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_REQUEST", function() { return LOAD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_SUCCESS", function() { return LOAD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_FAILURE", function() { return LOAD_POST_FAILURE; });
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

const reducer = (state = initialState, action) => immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
  // immer 사용시 state 를 draft 로 교체해주며, switch 문인걸 인식하고 break 를 까먹지말자
  switch (action.type) {
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
    console.log('Sagas:: loadPosts 실행중', action.lastId);
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

function loadPostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/post/${data}`);
}

function* loadPost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadPostAPI, action.data);
    console.log('saga loadPost 요청 :: ', action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POST_SUCCESS"],
      data: result.data
    });
    console.log('saga loadPost 성공 :: ', result);
  } catch (err) {
    console.error('saga loadPost 실패 :: ', err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POST_FAILURE"],
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

function* watchLoadPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POST_REQUEST"], loadPost);
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
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRetweet), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUploadImages), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUnlikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRemovePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddComment)]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9wb3N0LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvcG9zdC5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy91c2VyLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaW1tZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2FcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhL2VmZmVjdHNcIiJdLCJuYW1lcyI6WyJOb2RlQmlyZCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImVsZW1lbnRUeXBlIiwiaXNSZXF1aXJlZCIsIndyYXBwZXIiLCJ3aXRoUmVkdXgiLCJyb290UmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIkhZRFJBVEUiLCJjb25zb2xlIiwibG9nIiwicGF5bG9hZCIsImNvbWJpbmVkUmVkdWNlciIsImNvbWJpbmVSZWR1Y2VycyIsInVzZXIiLCJwb3N0IiwiaW5pdGlhbFN0YXRlIiwibWFpblBvc3RzIiwic2luZ2xlUG9zdCIsImltYWdlUGF0aHMiLCJoYXNNb3JlUG9zdHMiLCJsaWtlUG9zdExvYWRpbmciLCJsaWtlUG9zdERvbmUiLCJsaWtlUG9zdEVycm9yIiwicmV0d2VldExvYWRpbmciLCJyZXR3ZWV0RG9uZSIsInJldHdlZXRFcnJvciIsInVubGlrZVBvc3RMb2FkaW5nIiwidW5saWtlUG9zdERvbmUiLCJ1bmxpa2VQb3N0RXJyb3IiLCJ1cGxvYWRJbWFnZXNMb2FkaW5nIiwidXBsb2FkSW1hZ2VzRG9uZSIsInVwbG9hZEltYWdlc0Vycm9yIiwibG9hZFBvc3RzTG9hZGluZyIsImxvYWRQb3N0c0RvbmUiLCJsb2FkUG9zdHNFcnJvciIsImxvYWRQb3N0TG9hZGluZyIsImxvYWRQb3N0RG9uZSIsImxvYWRQb3N0RXJyb3IiLCJhZGRQb3N0TG9hZGluZyIsImFkZFBvc3REb25lIiwiYWRkUG9zdEVycm9yIiwicmVtb3ZlUG9zdExvYWRpbmciLCJyZW1vdmVQb3N0RG9uZSIsInJlbW92ZVBvc3RFcnJvciIsImFkZENvbW1lbnRMb2FkaW5nIiwiYWRkQ29tbWVudERvbmUiLCJhZGRDb21tZW50RXJyb3IiLCJMT0FEX1BPU1RTX1JFUVVFU1QiLCJMT0FEX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX1BPU1RTX0ZBSUxVUkUiLCJMT0FEX1BPU1RfUkVRVUVTVCIsIkxPQURfUE9TVF9TVUNDRVNTIiwiTE9BRF9QT1NUX0ZBSUxVUkUiLCJBRERfUE9TVF9SRVFVRVNUIiwiQUREX1BPU1RfU1VDQ0VTUyIsIkFERF9QT1NUX0ZBSUxVUkUiLCJMSUtFX1BPU1RfUkVRVUVTVCIsIkxJS0VfUE9TVF9TVUNDRVNTIiwiTElLRV9QT1NUX0ZBSUxVUkUiLCJVUExPQURfSU1BR0VTX1JFUVVFU1QiLCJVUExPQURfSU1BR0VTX1NVQ0NFU1MiLCJVUExPQURfSU1BR0VTX0ZBSUxVUkUiLCJVTkxJS0VfUE9TVF9SRVFVRVNUIiwiVU5MSUtFX1BPU1RfU1VDQ0VTUyIsIlVOTElLRV9QT1NUX0ZBSUxVUkUiLCJSRU1PVkVfUE9TVF9SRVFVRVNUIiwiUkVNT1ZFX1BPU1RfU1VDQ0VTUyIsIlJFTU9WRV9QT1NUX0ZBSUxVUkUiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwiQUREX0NPTU1FTlRfU1VDQ0VTUyIsIkFERF9DT01NRU5UX0ZBSUxVUkUiLCJSRVRXRUVUX1JFUVVFU1QiLCJSRVRXRUVUX1NVQ0NFU1MiLCJSRVRXRUVUX0ZBSUxVUkUiLCJSRU1PVkVfSU1BR0UiLCJhZGRQb3N0IiwiZGF0YSIsImFkZENvbW1lbnQiLCJyZWR1Y2VyIiwicHJvZHVjZSIsImRyYWZ0IiwiZXJyb3IiLCJmaWx0ZXIiLCJ2IiwiaSIsInVuc2hpZnQiLCJmaW5kIiwiaWQiLCJQb3N0SWQiLCJMaWtlcnMiLCJwdXNoIiwiVXNlcklkIiwiY29uY2F0IiwibGVuZ3RoIiwiUG9zdExvYWRpbmciLCJQb3N0RG9uZSIsIkNvbW1lbnRzIiwibG9hZFVzZXJMb2FkaW5nIiwibG9hZFVzZXJEb25lIiwibG9hZFVzZXJFcnJvciIsImxvYWRNeUluZm9Mb2FkaW5nIiwibG9hZE15SW5mb0RvbmUiLCJsb2FkTXlJbmZvRXJyb3IiLCJyZW1vdmVGb2xsb3dlckxvYWRpbmciLCJyZW1vdmVGb2xsb3dlckRvbmUiLCJyZW1vdmVGb2xsb3dlckVycm9yIiwiZm9sbG93TG9hZGluZyIsImZvbGxvd0RvbmUiLCJmb2xsb3dFcnJvciIsInVuZm9sbG93TG9hZGluZyIsInVuZm9sbG93RG9uZSIsInVuZm9sbG93RXJyb3IiLCJsb2FkRm9sbG93ZXJzTG9hZGluZyIsImxvYWRGb2xsb3dlcnNEb25lIiwibG9hZEZvbGxvd2Vyc0Vycm9yIiwibG9hZEZvbGxvd2luZ3NMb2FkaW5nIiwibG9hZEZvbGxvd2luZ3NEb25lIiwibG9hZEZvbGxvd2luZ3NFcnJvciIsImxvZ0luTG9hZGluZyIsImxvZ0luRG9uZSIsImxvZ0luRXJyb3IiLCJsb2dPdXRMb2FkaW5nIiwibG9nT3V0RG9uZSIsImxvZ091dEVycm9yIiwic2lnblVwTG9hZGluZyIsInNpZ25VcERvbmUiLCJzaWduVXBFcnJvciIsImNoYW5nZU5pY2tuYW1lTG9hZGluZyIsImNoYW5nZU5pY2tuYW1lRG9uZSIsImNoYW5nZU5pY2tuYW1lRXJyb3IiLCJtZSIsInNpZ25VcERhdGEiLCJsb2dpbkRhdGEiLCJ1c2VySW5mbyIsIkxPQURfVVNFUl9SRVFVRVNUIiwiTE9BRF9VU0VSX1NVQ0NFU1MiLCJMT0FEX1VTRVJfRkFJTFVSRSIsIkxPQURfTVlfSU5GT19SRVFVRVNUIiwiTE9BRF9NWV9JTkZPX1NVQ0NFU1MiLCJMT0FEX01ZX0lORk9fRkFJTFVSRSIsIlJFTU9WRV9GT0xMT1dFUl9SRVFVRVNUIiwiUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1MiLCJSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRSIsIkxPR19JTl9SRVFVRVNUIiwiTE9HX0lOX1NVQ0NFU1MiLCJMT0dfSU5fRkFJTFVSRSIsIkxPR19PVVRfUkVRVUVTVCIsIkxPR19PVVRfU1VDQ0VTUyIsIkxPR19PVVRfRkFJTFVSRSIsIlNJR05fVVBfUkVRVUVTVCIsIlNJR05fVVBfU1VDQ0VTUyIsIlNJR05fVVBfRkFJTFVSRSIsIkNIQU5HRV9OSUNLTkFNRV9SRVFVRVNUIiwiQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MiLCJDSEFOR0VfTklDS05BTUVfRkFJTFVSRSIsIkZPTExPV19SRVFVRVNUIiwiRk9MTE9XX1NVQ0NFU1MiLCJGT0xMT1dfRkFJTFVSRSIsIlVORk9MTE9XX1JFUVVFU1QiLCJVTkZPTExPV19TVUNDRVNTIiwiVU5GT0xMT1dfRkFJTFVSRSIsIkxPQURfRk9MTE9XRVJTX1JFUVVFU1QiLCJMT0FEX0ZPTExPV0VSU19TVUNDRVNTIiwiTE9BRF9GT0xMT1dFUlNfRkFJTFVSRSIsIkxPQURfRk9MTE9XSU5HU19SRVFVRVNUIiwiTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1MiLCJMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRSIsIkFERF9QT1NUX1RPX01FIiwiUkVNT1ZFX1BPU1RfT0ZfTUUiLCJsb2dpblJlcXVlc3RBY3Rpb24iLCJsb2dvdXRSZXF1ZXN0QWN0aW9uIiwiRm9sbG93ZXJzIiwiRm9sbG93aW5ncyIsIlBvc3RzIiwiYXhpb3MiLCJkZWZhdWx0cyIsImJhc2VVUkwiLCJ3aXRoQ3JlZGVudGlhbHMiLCJyb290U2FnYSIsImFsbCIsImZvcmsiLCJwb3N0U2FnYSIsInVzZXJTYWdhIiwicmV0d2VldEFQSSIsInJldHdlZXQiLCJyZXN1bHQiLCJjYWxsIiwicHV0IiwiZXJyIiwicmVzcG9uc2UiLCJ1cGxvYWRJbWFnZXNBUEkiLCJ1cGxvYWRJbWFnZXMiLCJsaWtlUG9zdEFQSSIsInBhdGNoIiwibGlrZVBvc3QiLCJ1bmxpa2VQb3N0QVBJIiwiZGVsZXRlIiwidW5saWtlUG9zdCIsImxvYWRQb3N0c0FQSSIsImxhc3RJZCIsImdldCIsImxvYWRQb3N0cyIsImxvYWRQb3N0QVBJIiwibG9hZFBvc3QiLCJhZGRQb3N0QVBJIiwicmVtb3ZlUG9zdEFQSSIsInJlbW92ZVBvc3QiLCJhZGRDb21tZW50QVBJIiwicG9zdElkIiwid2F0Y2hMb2FkUG9zdCIsInRha2VMYXRlc3QiLCJ3YXRjaFJldHdlZXQiLCJ3YXRjaFVwbG9hZEltYWdlcyIsIndhdGNoTGlrZVBvc3QiLCJ3YXRjaFVubGlrZVBvc3QiLCJ3YXRjaExvYWRQb3N0cyIsInRocm90dGxlIiwid2F0Y2hBZGRQb3N0Iiwid2F0Y2hSZW1vdmVQb3N0Iiwid2F0Y2hBZGRDb21tZW50IiwibG9nSW5BUEkiLCJsb2dJbiIsImxvZ091dEFQSSIsImxvZ091dCIsImNoYW5nZU5pY2tuYW1lQVBJIiwibmlja25hbWUiLCJjaGFuZ2VOaWNrbmFtZSIsImxvYWRNeUluZm9BUEkiLCJ1c2VySWQiLCJsb2FkTXlJbmZvIiwiZm9sbG93QVBJIiwiZm9sbG93IiwidW5mb2xsb3dBUEkiLCJ1bmZvbGxvdyIsInNpZ25VcEFQSSIsInNpZ25VcCIsImxvYWRGb2xsb3dlcnNBUEkiLCJsb2FkRm9sbG93ZXJzIiwibG9hZEZvbGxvd2luZ3NBUEkiLCJsb2FkRm9sbG93aW5ncyIsInJlbW92ZUZvbGxvd2VyQVBJIiwicmVtb3ZlRm9sbG93ZXIiLCJsb2FkVXNlckFQSSIsImxvYWRVc2VyIiwid2F0Y2hMb2FkVXNlciIsIndhdGNoUmVtb3ZlRm9sbG93ZXIiLCJ3YXRjaExvYWRGb2xsb3dlcnMiLCJ3YXRjaExvYWRGb2xsb3dpbmdzIiwid2F0Y2hDaGFuZ2VOaWNrbmFtZSIsIndhdGNoTG9hZE15SW5mbyIsIndhdGNoRm9sbG93Iiwid2F0Y2hVbkZvbGxvdyIsIndhdGNoTG9nSW4iLCJ3YXRjaExvZ091dCIsIndhdGNoU2lnblVwIiwiY29uZmlndXJlU3RvcmUiLCJjb250ZXh0Iiwic2FnYU1pZGRsZXdhcmUiLCJjcmVhdGVTYWdhTWlkZGxld2FyZSIsIm1pZGRsZXdhcmVzIiwiZW5oYW5jZXIiLCJjb21wb3NlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsImFwcGx5TWlkZGxld2FyZSIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJzYWdhVGFzayIsInJ1biIsImNyZWF0ZVdyYXBwZXIiLCJkZWJ1ZyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUEsTUFBTUEsUUFBUSxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQ2YsbUVBQ0MsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0M7QUFBTSxTQUFPLEVBQUMsT0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBREQsRUFFQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkQsQ0FERCxFQUtDLE1BQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBTEQsQ0FERjs7QUFVQUQsUUFBUSxDQUFDRSxTQUFULEdBQXFCO0FBQ3BCRCxXQUFTLEVBQUVFLGlEQUFTLENBQUNDLFdBQVYsQ0FBc0JDO0FBRGIsQ0FBckI7QUFJZUMsNEhBQU8sQ0FBQ0MsU0FBUixDQUFrQlAsUUFBbEIsQ0FBZixFOzs7Ozs7Ozs7Ozs7QUNyQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtDQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUNBLE1BQU1RLFdBQVcsR0FBRyxDQUFDQyxLQUFELEVBQVFDLE1BQVIsS0FBbUI7QUFBRTtBQUN4QyxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDQyxTQUFLQywwREFBTDtBQUNDQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxpQ0FBWixFQUErQ0osTUFBL0M7QUFDQSxhQUFPQSxNQUFNLENBQUNLLE9BQWQ7O0FBQ0Q7QUFBUztBQUNSLGNBQU1DLGVBQWUsR0FBR0MsNkRBQWUsQ0FBQztBQUN2Q0MsNkRBRHVDO0FBRXZDQyw2REFBSUE7QUFGbUMsU0FBRCxDQUF2QztBQUlBLGVBQU9ILGVBQWUsQ0FBQ1AsS0FBRCxFQUFRQyxNQUFSLENBQXRCO0FBQ0E7QUFWRjtBQVlBLENBYkQ7QUFlQTtBQUNBO0FBQ0E7OztBQUNlRiwwRUFBZixFOzs7Ozs7Ozs7Ozs7QUNoRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtDQUVBOztBQUVPLE1BQU1ZLFlBQVksR0FBRztBQUMzQkMsV0FBUyxFQUFFLEVBRGdCO0FBQ1o7QUFDZkMsWUFBVSxFQUFFLElBRmU7QUFFVDtBQUNsQkMsWUFBVSxFQUFFLEVBSGU7QUFHWDtBQUNoQkMsY0FBWSxFQUFFLElBSmE7QUFJUDtBQUNwQkMsaUJBQWUsRUFBRSxLQUxVO0FBS0g7QUFDeEJDLGNBQVksRUFBRSxLQU5hO0FBTU47QUFDckJDLGVBQWEsRUFBRSxJQVBZO0FBUTNCQyxnQkFBYyxFQUFFLEtBUlc7QUFRSjtBQUN2QkMsYUFBVyxFQUFFLEtBVGM7QUFTUDtBQUNwQkMsY0FBWSxFQUFFLElBVmE7QUFXM0JDLG1CQUFpQixFQUFFLEtBWFE7QUFXRDtBQUMxQkMsZ0JBQWMsRUFBRSxLQVpXO0FBWUo7QUFDdkJDLGlCQUFlLEVBQUUsSUFiVTtBQWMzQkMscUJBQW1CLEVBQUUsS0FkTTtBQWNDO0FBQzVCQyxrQkFBZ0IsRUFBRSxLQWZTO0FBZUY7QUFDekJDLG1CQUFpQixFQUFFLElBaEJRO0FBaUIzQkMsa0JBQWdCLEVBQUUsS0FqQlM7QUFpQkY7QUFDekJDLGVBQWEsRUFBRSxLQWxCWTtBQWtCTDtBQUN0QkMsZ0JBQWMsRUFBRSxJQW5CVztBQW9CM0JDLGlCQUFlLEVBQUUsS0FwQlU7QUFvQkg7QUFDeEJDLGNBQVksRUFBRSxLQXJCYTtBQXFCTjtBQUNyQkMsZUFBYSxFQUFFLElBdEJZO0FBdUIzQkMsZ0JBQWMsRUFBRSxLQXZCVztBQXVCSjtBQUN2QkMsYUFBVyxFQUFFLEtBeEJjO0FBd0JQO0FBQ3BCQyxjQUFZLEVBQUUsSUF6QmE7QUEwQjNCQyxtQkFBaUIsRUFBRSxLQTFCUTtBQTBCRDtBQUMxQkMsZ0JBQWMsRUFBRSxLQTNCVztBQTJCSjtBQUN2QkMsaUJBQWUsRUFBRSxJQTVCVTtBQTZCM0JDLG1CQUFpQixFQUFFLEtBN0JRO0FBNkJEO0FBQzFCQyxnQkFBYyxFQUFFLEtBOUJXO0FBOEJKO0FBQ3ZCQyxpQkFBZSxFQUFFO0FBL0JVLENBQXJCLEMsQ0FpQ1A7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQ08sTUFBTUMsa0JBQWtCLEdBQUcscUJBQTNCLEMsQ0FBa0Q7O0FBQ2xELE1BQU1DLGtCQUFrQixHQUFHLHFCQUEzQjtBQUNBLE1BQU1DLGtCQUFrQixHQUFHLHFCQUEzQjtBQUVBLE1BQU1DLGlCQUFpQixHQUFHLG1CQUExQixDLENBQThDOztBQUM5QyxNQUFNQyxpQkFBaUIsR0FBRyxtQkFBMUI7QUFDQSxNQUFNQyxpQkFBaUIsR0FBRyxtQkFBMUI7QUFFQSxNQUFNQyxnQkFBZ0IsR0FBRyxrQkFBekIsQyxDQUE2Qzs7QUFDN0MsTUFBTUMsZ0JBQWdCLEdBQUcsa0JBQXpCO0FBQ0EsTUFBTUMsZ0JBQWdCLEdBQUcsa0JBQXpCO0FBRUEsTUFBTUMsaUJBQWlCLEdBQUcsbUJBQTFCO0FBQ0EsTUFBTUMsaUJBQWlCLEdBQUcsbUJBQTFCO0FBQ0EsTUFBTUMsaUJBQWlCLEdBQUcsbUJBQTFCO0FBRUEsTUFBTUMscUJBQXFCLEdBQUcsdUJBQTlCO0FBQ0EsTUFBTUMscUJBQXFCLEdBQUcsdUJBQTlCO0FBQ0EsTUFBTUMscUJBQXFCLEdBQUcsdUJBQTlCO0FBRUEsTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0EsTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0EsTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBRUEsTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0EsTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0EsTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBRUEsTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0EsTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0EsTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBRUEsTUFBTUMsZUFBZSxHQUFHLGlCQUF4QjtBQUNBLE1BQU1DLGVBQWUsR0FBRyxpQkFBeEI7QUFDQSxNQUFNQyxlQUFlLEdBQUcsaUJBQXhCO0FBRUEsTUFBTUMsWUFBWSxHQUFHLGNBQXJCLEMsQ0FBcUM7O0FBRXJDLE1BQU1DLE9BQU8sR0FBSUMsSUFBRCxLQUFXO0FBQ2pDdEUsTUFBSSxFQUFFK0MsZ0JBRDJCO0FBRWpDdUI7QUFGaUMsQ0FBWCxDQUFoQixDLENBS1A7O0FBQ08sTUFBTUMsVUFBVSxHQUFJRCxJQUFELEtBQVc7QUFDcEN0RSxNQUFJLEVBQUU4RCxtQkFEOEI7QUFFcENRO0FBRm9DLENBQVgsQ0FBbkI7QUFLUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsTUFBTUUsT0FBTyxHQUFHLENBQUMxRSxLQUFLLEdBQUdXLFlBQVQsRUFBdUJWLE1BQXZCLEtBQWtDMEUsNENBQU8sQ0FBQzNFLEtBQUQsRUFBUzRFLEtBQUQsSUFBVztBQUMzRTtBQUNBLFVBQVEzRSxNQUFNLENBQUNDLElBQWY7QUFDQyxTQUFLNEMsaUJBQUw7QUFDQzhCLFdBQUssQ0FBQzdDLGVBQU4sR0FBd0IsSUFBeEI7QUFDQTZDLFdBQUssQ0FBQzVDLFlBQU4sR0FBcUIsS0FBckI7QUFDQTRDLFdBQUssQ0FBQzNDLGFBQU4sR0FBc0IsSUFBdEI7QUFDQTdCLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLGlDQUFaO0FBQ0E7O0FBQ0QsU0FBSzBDLGlCQUFMO0FBQ0M2QixXQUFLLENBQUMvRCxVQUFOLEdBQW1CWixNQUFNLENBQUN1RSxJQUExQixDQURELENBQ2dDOztBQUMvQkksV0FBSyxDQUFDN0MsZUFBTixHQUF3QixLQUF4QjtBQUNBNkMsV0FBSyxDQUFDNUMsWUFBTixHQUFxQixJQUFyQjtBQUNBNUIsYUFBTyxDQUFDQyxHQUFSLENBQVksaUNBQVo7QUFDQTs7QUFDRCxTQUFLMkMsaUJBQUw7QUFDQzRCLFdBQUssQ0FBQzdDLGVBQU4sR0FBd0IsS0FBeEI7QUFDQTZDLFdBQUssQ0FBQzNDLGFBQU4sR0FBc0JoQyxNQUFNLENBQUM0RSxLQUE3QjtBQUNBekUsYUFBTyxDQUFDeUUsS0FBUixDQUFjLGlDQUFkLEVBQWlENUUsTUFBTSxDQUFDNEUsS0FBeEQ7O0FBQ0QsU0FBS1AsWUFBTDtBQUNDTSxXQUFLLENBQUM5RCxVQUFOLEdBQW1COEQsS0FBSyxDQUFDOUQsVUFBTixDQUFpQmdFLE1BQWpCLENBQXdCLENBQUNDLENBQUQsRUFBSUMsQ0FBSixLQUFVQSxDQUFDLEtBQUsvRSxNQUFNLENBQUN1RSxJQUEvQyxDQUFuQjtBQUNBcEUsYUFBTyxDQUFDQyxHQUFSLENBQVkseUJBQVo7QUFDQTs7QUFDRCxTQUFLOEQsZUFBTDtBQUNDUyxXQUFLLENBQUN6RCxjQUFOLEdBQXVCLElBQXZCO0FBQ0F5RCxXQUFLLENBQUN4RCxXQUFOLEdBQW9CLEtBQXBCO0FBQ0F3RCxXQUFLLENBQUN2RCxZQUFOLEdBQXFCLElBQXJCO0FBQ0FqQixhQUFPLENBQUNDLEdBQVIsQ0FBWSw4QkFBWjtBQUNBOztBQUNELFNBQUsrRCxlQUFMO0FBQXNCO0FBQ3JCUSxhQUFLLENBQUN6RCxjQUFOLEdBQXVCLEtBQXZCO0FBQ0F5RCxhQUFLLENBQUN4RCxXQUFOLEdBQW9CLElBQXBCO0FBQ0F3RCxhQUFLLENBQUNoRSxTQUFOLENBQWdCcUUsT0FBaEIsQ0FBd0JoRixNQUFNLENBQUN1RSxJQUEvQixFQUhxQixDQUdnQjs7QUFDckNwRSxlQUFPLENBQUNDLEdBQVIsQ0FBWSw4QkFBWjtBQUNBO0FBQ0E7O0FBQ0QsU0FBS2dFLGVBQUw7QUFDQ08sV0FBSyxDQUFDekQsY0FBTixHQUF1QixLQUF2QjtBQUNBeUQsV0FBSyxDQUFDdkQsWUFBTixHQUFxQnBCLE1BQU0sQ0FBQzRFLEtBQTVCO0FBQ0F6RSxhQUFPLENBQUN5RSxLQUFSLENBQWMsOEJBQWQsRUFBOEM1RSxNQUFNLENBQUN1RSxJQUFyRDtBQUNBOztBQUNELFNBQUtwQixpQkFBTDtBQUNDd0IsV0FBSyxDQUFDNUQsZUFBTixHQUF3QixJQUF4QjtBQUNBNEQsV0FBSyxDQUFDM0QsWUFBTixHQUFxQixLQUFyQjtBQUNBMkQsV0FBSyxDQUFDMUQsYUFBTixHQUFzQixJQUF0QjtBQUNBZCxhQUFPLENBQUNDLEdBQVIsQ0FBWSxnQ0FBWjtBQUNBOztBQUNELFNBQUtnRCxpQkFBTDtBQUF3QjtBQUN2QjtBQUNBLGNBQU0zQyxJQUFJLEdBQUdrRSxLQUFLLENBQUNoRSxTQUFOLENBQWdCc0UsSUFBaEIsQ0FBc0JILENBQUQsSUFBT0EsQ0FBQyxDQUFDSSxFQUFGLEtBQVNsRixNQUFNLENBQUN1RSxJQUFQLENBQVlZLE1BQWpELENBQWIsQ0FGdUIsQ0FHdkI7O0FBQ0ExRSxZQUFJLENBQUMyRSxNQUFMLENBQVlDLElBQVosQ0FBaUI7QUFBQ0gsWUFBRSxFQUFFbEYsTUFBTSxDQUFDdUUsSUFBUCxDQUFZZTtBQUFqQixTQUFqQjtBQUNBWCxhQUFLLENBQUM1RCxlQUFOLEdBQXdCLEtBQXhCO0FBQ0E0RCxhQUFLLENBQUMzRCxZQUFOLEdBQXFCLElBQXJCO0FBQ0FiLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLGdDQUFaO0FBQ0E7QUFDQTs7QUFDRCxTQUFLaUQsaUJBQUw7QUFDQ3NCLFdBQUssQ0FBQzVELGVBQU4sR0FBd0IsS0FBeEI7QUFDQTRELFdBQUssQ0FBQzFELGFBQU4sR0FBc0JqQixNQUFNLENBQUM0RSxLQUE3QjtBQUNBekUsYUFBTyxDQUFDeUUsS0FBUixDQUFjLGlDQUFkLEVBQWlENUUsTUFBTSxDQUFDNEUsS0FBeEQ7QUFDQTs7QUFDRCxTQUFLbkIsbUJBQUw7QUFDQ2tCLFdBQUssQ0FBQ3RELGlCQUFOLEdBQTBCLElBQTFCO0FBQ0FzRCxXQUFLLENBQUNyRCxjQUFOLEdBQXVCLEtBQXZCO0FBQ0FxRCxXQUFLLENBQUNwRCxlQUFOLEdBQXdCLElBQXhCO0FBQ0FwQixhQUFPLENBQUNDLEdBQVIsQ0FBWSxrQ0FBWjtBQUNBOztBQUNELFNBQUtzRCxtQkFBTDtBQUEwQjtBQUN6QixjQUFNakQsSUFBSSxHQUFHa0UsS0FBSyxDQUFDaEUsU0FBTixDQUFnQnNFLElBQWhCLENBQXNCSCxDQUFELElBQU9BLENBQUMsQ0FBQ0ksRUFBRixLQUFTbEYsTUFBTSxDQUFDdUUsSUFBUCxDQUFZWSxNQUFqRCxDQUFiO0FBQ0ExRSxZQUFJLENBQUMyRSxNQUFMLEdBQWMzRSxJQUFJLENBQUMyRSxNQUFMLENBQVlQLE1BQVosQ0FBb0JDLENBQUQsSUFBT0EsQ0FBQyxDQUFDSSxFQUFGLEtBQVNsRixNQUFNLENBQUN1RSxJQUFQLENBQVllLE1BQS9DLENBQWQ7QUFDQVgsYUFBSyxDQUFDdEQsaUJBQU4sR0FBMEIsS0FBMUI7QUFDQXNELGFBQUssQ0FBQ3JELGNBQU4sR0FBdUIsSUFBdkI7QUFDQW5CLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLGtDQUFaO0FBQ0E7QUFDQTs7QUFDRCxTQUFLdUQsbUJBQUw7QUFDQ2dCLFdBQUssQ0FBQ3RELGlCQUFOLEdBQTBCLEtBQTFCO0FBQ0FzRCxXQUFLLENBQUNwRCxlQUFOLEdBQXdCdkIsTUFBTSxDQUFDNEUsS0FBL0I7QUFDQXpFLGFBQU8sQ0FBQ3lFLEtBQVIsQ0FBYyxtQ0FBZCxFQUFtRDVFLE1BQU0sQ0FBQzRFLEtBQTFEO0FBQ0E7O0FBQ0QsU0FBS3RCLHFCQUFMO0FBQ0NxQixXQUFLLENBQUNuRCxtQkFBTixHQUE0QixJQUE1QjtBQUNBbUQsV0FBSyxDQUFDbEQsZ0JBQU4sR0FBeUIsS0FBekI7QUFDQWtELFdBQUssQ0FBQ2pELGlCQUFOLEdBQTBCLElBQTFCO0FBQ0F2QixhQUFPLENBQUNDLEdBQVIsQ0FBWSxvQ0FBWjtBQUNBOztBQUNELFNBQUttRCxxQkFBTDtBQUNDb0IsV0FBSyxDQUFDOUQsVUFBTixHQUFtQmIsTUFBTSxDQUFDdUUsSUFBMUI7QUFDQUksV0FBSyxDQUFDbkQsbUJBQU4sR0FBNEIsS0FBNUI7QUFDQW1ELFdBQUssQ0FBQ2xELGdCQUFOLEdBQXlCLElBQXpCO0FBQ0F0QixhQUFPLENBQUNDLEdBQVIsQ0FBWSxvQ0FBWjtBQUNBOztBQUNELFNBQUtvRCxxQkFBTDtBQUNDbUIsV0FBSyxDQUFDbkQsbUJBQU4sR0FBNEIsS0FBNUI7QUFDQW1ELFdBQUssQ0FBQ2pELGlCQUFOLEdBQTBCMUIsTUFBTSxDQUFDNEUsS0FBakM7QUFDQXpFLGFBQU8sQ0FBQ3lFLEtBQVIsQ0FBYyxxQ0FBZCxFQUFxRDVFLE1BQU0sQ0FBQzRFLEtBQTVEO0FBQ0E7O0FBQ0QsU0FBS2xDLGtCQUFMO0FBQ0NpQyxXQUFLLENBQUNoRCxnQkFBTixHQUF5QixJQUF6QjtBQUNBZ0QsV0FBSyxDQUFDL0MsYUFBTixHQUFzQixLQUF0QjtBQUNBK0MsV0FBSyxDQUFDOUMsY0FBTixHQUF1QixJQUF2QjtBQUNBOztBQUNELFNBQUtjLGtCQUFMO0FBQ0NnQyxXQUFLLENBQUNoRCxnQkFBTixHQUF5QixLQUF6QjtBQUNBZ0QsV0FBSyxDQUFDL0MsYUFBTixHQUFzQixJQUF0QixDQUZELENBR0M7QUFDQTtBQUNBOztBQUNBK0MsV0FBSyxDQUFDaEUsU0FBTixHQUFrQmdFLEtBQUssQ0FBQ2hFLFNBQU4sQ0FBZ0I0RSxNQUFoQixDQUF1QnZGLE1BQU0sQ0FBQ3VFLElBQTlCLENBQWxCLENBTkQsQ0FPQztBQUNBOztBQUNBSSxXQUFLLENBQUM3RCxZQUFOLEdBQXFCZCxNQUFNLENBQUN1RSxJQUFQLENBQVlpQixNQUFaLEtBQXVCLEVBQTVDO0FBQ0E7O0FBQ0QsU0FBSzVDLGtCQUFMO0FBQ0MrQixXQUFLLENBQUNoRCxnQkFBTixHQUF5QixLQUF6QjtBQUNBZ0QsV0FBSyxDQUFDOUMsY0FBTixHQUF1QjdCLE1BQU0sQ0FBQzRFLEtBQTlCO0FBQ0E7O0FBQ0QsU0FBSzVCLGdCQUFMO0FBQ0MyQixXQUFLLENBQUMxQyxjQUFOLEdBQXVCLElBQXZCO0FBQ0EwQyxXQUFLLENBQUN6QyxXQUFOLEdBQW9CLEtBQXBCO0FBQ0F5QyxXQUFLLENBQUN4QyxZQUFOLEdBQXFCLElBQXJCO0FBQ0E7O0FBQ0QsU0FBS2MsZ0JBQUw7QUFDQztBQUNBMEIsV0FBSyxDQUFDaEUsU0FBTixDQUFnQnFFLE9BQWhCLENBQXdCaEYsTUFBTSxDQUFDdUUsSUFBL0IsRUFGRCxDQUVzQzs7QUFDckNJLFdBQUssQ0FBQzFDLGNBQU4sR0FBdUIsS0FBdkI7QUFDQTBDLFdBQUssQ0FBQ3pDLFdBQU4sR0FBb0IsSUFBcEI7QUFDQXlDLFdBQUssQ0FBQzlELFVBQU4sR0FBbUIsRUFBbkIsQ0FMRCxDQUt1Qjs7QUFDdEI7O0FBQ0QsU0FBS3FDLGdCQUFMO0FBQ0N5QixXQUFLLENBQUMxQyxjQUFOLEdBQXVCLEtBQXZCO0FBQ0EwQyxXQUFLLENBQUN4QyxZQUFOLEdBQXFCbkMsTUFBTSxDQUFDNEUsS0FBNUI7QUFDQTs7QUFDRCxTQUFLaEIsbUJBQUw7QUFDQ2UsV0FBSyxDQUFDdkMsaUJBQU4sR0FBMEIsSUFBMUI7QUFDQXVDLFdBQUssQ0FBQ3RDLGNBQU4sR0FBdUIsS0FBdkI7QUFDQXNDLFdBQUssQ0FBQ3JDLGVBQU4sR0FBd0IsSUFBeEI7QUFDQTs7QUFDRCxTQUFLdUIsbUJBQUw7QUFDQ2MsV0FBSyxDQUFDaEUsU0FBTixHQUFrQmdFLEtBQUssQ0FBQ2hFLFNBQU4sQ0FBZ0JrRSxNQUFoQixDQUF3QkMsQ0FBRCxJQUFPQSxDQUFDLENBQUNJLEVBQUYsS0FBU2xGLE1BQU0sQ0FBQ3VFLElBQVAsQ0FBWVksTUFBbkQsQ0FBbEIsQ0FERCxDQUM4RTs7QUFDN0VSLFdBQUssQ0FBQ2MsV0FBTixHQUFvQixLQUFwQjtBQUNBZCxXQUFLLENBQUNlLFFBQU4sR0FBaUIsSUFBakI7QUFDQTs7QUFDRCxTQUFLNUIsbUJBQUw7QUFDQ2EsV0FBSyxDQUFDdkMsaUJBQU4sR0FBMEIsS0FBMUI7QUFDQXVDLFdBQUssQ0FBQ3JDLGVBQU4sR0FBd0J0QyxNQUFNLENBQUM0RSxLQUEvQjtBQUNBOztBQUNELFNBQUtiLG1CQUFMO0FBQ0NZLFdBQUssQ0FBQ3BDLGlCQUFOLEdBQTBCLElBQTFCO0FBQ0FvQyxXQUFLLENBQUNuQyxjQUFOLEdBQXVCLEtBQXZCO0FBQ0FtQyxXQUFLLENBQUNsQyxlQUFOLEdBQXdCLElBQXhCO0FBQ0E7O0FBQ0QsU0FBS3VCLG1CQUFMO0FBQTBCO0FBQ3pCO0FBQ0E7QUFDQSxjQUFNdkQsSUFBSSxHQUFHa0UsS0FBSyxDQUFDaEUsU0FBTixDQUFnQnNFLElBQWhCLENBQXNCSCxDQUFELElBQU9BLENBQUMsQ0FBQ0ksRUFBRixLQUFTbEYsTUFBTSxDQUFDdUUsSUFBUCxDQUFZWSxNQUFqRCxDQUFiLENBSHlCLENBRzZDO0FBQ3RFOztBQUNBMUUsWUFBSSxDQUFDa0YsUUFBTCxDQUFjWCxPQUFkLENBQXNCaEYsTUFBTSxDQUFDdUUsSUFBN0IsRUFMeUIsQ0FLVTs7QUFDbkNJLGFBQUssQ0FBQ3BDLGlCQUFOLEdBQTBCLEtBQTFCO0FBQ0FvQyxhQUFLLENBQUNuQyxjQUFOLEdBQXVCLElBQXZCO0FBQ0E7QUFDQTs7QUFDRCxTQUFLeUIsbUJBQUw7QUFDQ1UsV0FBSyxDQUFDcEMsaUJBQU4sR0FBMEIsS0FBMUI7QUFDQW9DLFdBQUssQ0FBQ2xDLGVBQU4sR0FBd0J6QyxNQUFNLENBQUM0RSxLQUEvQjtBQUNBOztBQUNEO0FBQ0M7QUF0S0Y7QUF3S0EsQ0ExS3dELENBQXpEOztBQTJLZUgsc0VBQWYsRTs7Ozs7Ozs7Ozs7O0FDN1NBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLE1BQU0vRCxZQUFZLEdBQUc7QUFDM0JrRixpQkFBZSxFQUFFLEtBRFU7QUFDSDtBQUN4QkMsY0FBWSxFQUFFLEtBRmE7QUFFTjtBQUNyQkMsZUFBYSxFQUFFLElBSFk7QUFHTjtBQUNyQkMsbUJBQWlCLEVBQUUsS0FKUTtBQUlEO0FBQzFCQyxnQkFBYyxFQUFFLEtBTFc7QUFLSjtBQUN2QkMsaUJBQWUsRUFBRSxJQU5VO0FBTUo7QUFDdkJDLHVCQUFxQixFQUFFLEtBUEk7QUFPRztBQUM5QkMsb0JBQWtCLEVBQUUsS0FSTztBQVFBO0FBQzNCQyxxQkFBbUIsRUFBRSxJQVRNO0FBU0E7QUFDM0JDLGVBQWEsRUFBRSxLQVZZO0FBVUw7QUFDdEJDLFlBQVUsRUFBRSxLQVhlO0FBV1I7QUFDbkJDLGFBQVcsRUFBRSxJQVpjO0FBWVI7QUFDbkJDLGlCQUFlLEVBQUUsS0FiVTtBQWFIO0FBQ3hCQyxjQUFZLEVBQUUsS0FkYTtBQWNOO0FBQ3JCQyxlQUFhLEVBQUUsSUFmWTtBQWVOO0FBQ3JCQyxzQkFBb0IsRUFBRSxLQWhCSztBQWdCRTtBQUM3QkMsbUJBQWlCLEVBQUUsS0FqQlE7QUFpQkQ7QUFDMUJDLG9CQUFrQixFQUFFLElBbEJPO0FBa0JEO0FBQzFCQyx1QkFBcUIsRUFBRSxLQW5CSTtBQW1CRztBQUM5QkMsb0JBQWtCLEVBQUUsS0FwQk87QUFvQkE7QUFDM0JDLHFCQUFtQixFQUFFLElBckJNO0FBcUJBO0FBQzNCQyxjQUFZLEVBQUUsS0F0QmE7QUFzQk47QUFDckJDLFdBQVMsRUFBRSxLQXZCZ0I7QUF1QlQ7QUFDbEJDLFlBQVUsRUFBRSxJQXhCZTtBQXdCVDtBQUNsQkMsZUFBYSxFQUFFLEtBekJZO0FBeUJMO0FBQ3RCQyxZQUFVLEVBQUUsS0ExQmU7QUEwQlI7QUFDbkJDLGFBQVcsRUFBRSxJQTNCYztBQTRCM0JDLGVBQWEsRUFBRSxLQTVCWTtBQTRCTDtBQUN0QkMsWUFBVSxFQUFFLEtBN0JlO0FBNkJSO0FBQ25CQyxhQUFXLEVBQUUsSUE5QmM7QUErQjNCQyx1QkFBcUIsRUFBRSxLQS9CSTtBQStCRztBQUM5QkMsb0JBQWtCLEVBQUUsS0FoQ087QUFnQ0E7QUFDM0JDLHFCQUFtQixFQUFFLElBakNNO0FBa0MzQkMsSUFBRSxFQUFFLElBbEN1QjtBQW1DM0JDLFlBQVUsRUFBRSxFQW5DZTtBQW1DWDtBQUNoQkMsV0FBUyxFQUFFLEVBcENnQjtBQXFDM0JDLFVBQVEsRUFBRTtBQXJDaUIsQ0FBckIsQyxDQXdDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQ08sTUFBTUMsaUJBQWlCLEdBQUcsbUJBQTFCO0FBQ0EsTUFBTUMsaUJBQWlCLEdBQUcsbUJBQTFCO0FBQ0EsTUFBTUMsaUJBQWlCLEdBQUcsbUJBQTFCO0FBRUEsTUFBTUMsb0JBQW9CLEdBQUcsc0JBQTdCO0FBQ0EsTUFBTUMsb0JBQW9CLEdBQUcsc0JBQTdCO0FBQ0EsTUFBTUMsb0JBQW9CLEdBQUcsc0JBQTdCO0FBRUEsTUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDO0FBQ0EsTUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDO0FBQ0EsTUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDO0FBRUEsTUFBTUMsY0FBYyxHQUFHLGdCQUF2QjtBQUNBLE1BQU1DLGNBQWMsR0FBRyxnQkFBdkI7QUFDQSxNQUFNQyxjQUFjLEdBQUcsZ0JBQXZCO0FBRUEsTUFBTUMsZUFBZSxHQUFHLGlCQUF4QjtBQUNBLE1BQU1DLGVBQWUsR0FBRyxpQkFBeEI7QUFDQSxNQUFNQyxlQUFlLEdBQUcsaUJBQXhCO0FBRUEsTUFBTUMsZUFBZSxHQUFHLGlCQUF4QjtBQUNBLE1BQU1DLGVBQWUsR0FBRyxpQkFBeEI7QUFDQSxNQUFNQyxlQUFlLEdBQUcsaUJBQXhCO0FBRUEsTUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDO0FBQ0EsTUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDO0FBQ0EsTUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDO0FBRUEsTUFBTUMsY0FBYyxHQUFHLGdCQUF2QjtBQUNBLE1BQU1DLGNBQWMsR0FBRyxnQkFBdkI7QUFDQSxNQUFNQyxjQUFjLEdBQUcsZ0JBQXZCO0FBRUEsTUFBTUMsZ0JBQWdCLEdBQUcsa0JBQXpCO0FBQ0EsTUFBTUMsZ0JBQWdCLEdBQUcsa0JBQXpCO0FBQ0EsTUFBTUMsZ0JBQWdCLEdBQUcsa0JBQXpCO0FBRUEsTUFBTUMsc0JBQXNCLEdBQUcsd0JBQS9CO0FBQ0EsTUFBTUMsc0JBQXNCLEdBQUcsd0JBQS9CO0FBQ0EsTUFBTUMsc0JBQXNCLEdBQUcsd0JBQS9CO0FBRUEsTUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDO0FBQ0EsTUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDO0FBQ0EsTUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDLEMsQ0FFUDs7QUFDTyxNQUFNQyxjQUFjLEdBQUcsZ0JBQXZCO0FBQ0EsTUFBTUMsaUJBQWlCLEdBQUcsbUJBQTFCO0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPLE1BQU1DLGtCQUFrQixHQUFJN0YsSUFBRCxLQUFXO0FBQzVDdEUsTUFBSSxFQUFFeUksY0FEc0M7QUFFNUNuRTtBQUY0QyxDQUFYLENBQTNCLEMsQ0FJUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sTUFBTThGLG1CQUFtQixHQUFHLE9BQU87QUFDekNwSyxNQUFJLEVBQUU0STtBQURtQyxDQUFQLENBQTVCOztBQUlQLE1BQU1wRSxPQUFPLEdBQUcsQ0FBQzFFLEtBQUssR0FBR1csWUFBVCxFQUF1QlYsTUFBdkIsS0FBa0MwRSw0Q0FBTyxDQUFDM0UsS0FBRCxFQUFTNEUsS0FBRCxJQUFXO0FBQzNFLFVBQVEzRSxNQUFNLENBQUNDLElBQWY7QUFDQyxTQUFLZ0ksaUJBQUw7QUFDQztBQUNBdEQsV0FBSyxDQUFDaUIsZUFBTixHQUF3QixJQUF4QjtBQUNBakIsV0FBSyxDQUFDa0IsWUFBTixHQUFxQixLQUFyQjtBQUNBbEIsV0FBSyxDQUFDbUIsYUFBTixHQUFzQixJQUF0QixDQUpELENBSTRCOztBQUMzQjNGLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLG1CQUFaO0FBQ0E7O0FBQ0QsU0FBSzhILGlCQUFMO0FBQ0N2RCxXQUFLLENBQUNxRCxRQUFOLEdBQWlCaEksTUFBTSxDQUFDdUUsSUFBeEIsQ0FERCxDQUM4Qjs7QUFDN0JJLFdBQUssQ0FBQ2lCLGVBQU4sR0FBd0IsS0FBeEI7QUFDQWpCLFdBQUssQ0FBQ2tCLFlBQU4sR0FBcUIsSUFBckIsQ0FIRCxDQUlDOztBQUNBMUYsYUFBTyxDQUFDQyxHQUFSLENBQVksbUJBQVo7QUFDQTs7QUFDRCxTQUFLK0gsaUJBQUw7QUFDQ2hJLGFBQU8sQ0FBQ3lFLEtBQVIsQ0FBYyx1QkFBdUI1RSxNQUFNLENBQUM0RSxLQUE1QztBQUNBRCxXQUFLLENBQUNpQixlQUFOLEdBQXdCLEtBQXhCO0FBQ0FqQixXQUFLLENBQUNtQixhQUFOLEdBQXNCOUYsTUFBTSxDQUFDNEUsS0FBN0I7QUFDQTs7QUFDRCxTQUFLd0Qsb0JBQUw7QUFDQztBQUNBekQsV0FBSyxDQUFDb0IsaUJBQU4sR0FBMEIsSUFBMUI7QUFDQXBCLFdBQUssQ0FBQ3FCLGNBQU4sR0FBdUIsS0FBdkI7QUFDQXJCLFdBQUssQ0FBQ3NCLGVBQU4sR0FBd0IsSUFBeEIsQ0FKRCxDQUk4Qjs7QUFDN0I5RixhQUFPLENBQUNDLEdBQVIsQ0FBWSxtQkFBWjtBQUNBOztBQUNELFNBQUtpSSxvQkFBTDtBQUNDMUQsV0FBSyxDQUFDa0QsRUFBTixHQUFXN0gsTUFBTSxDQUFDdUUsSUFBbEIsQ0FERCxDQUN3Qjs7QUFDdkJJLFdBQUssQ0FBQ29CLGlCQUFOLEdBQTBCLEtBQTFCO0FBQ0FwQixXQUFLLENBQUNxQixjQUFOLEdBQXVCLElBQXZCLENBSEQsQ0FJQzs7QUFDQTdGLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLG1CQUFaO0FBQ0E7O0FBQ0QsU0FBS2tJLG9CQUFMO0FBQ0NuSSxhQUFPLENBQUN5RSxLQUFSLENBQWMseUJBQXlCNUUsTUFBTSxDQUFDNEUsS0FBOUM7QUFDQUQsV0FBSyxDQUFDb0IsaUJBQU4sR0FBMEIsS0FBMUI7QUFDQXBCLFdBQUssQ0FBQ3NCLGVBQU4sR0FBd0JqRyxNQUFNLENBQUM0RSxLQUEvQjtBQUNBOztBQUNELFNBQUsyRCx1QkFBTDtBQUNDNUQsV0FBSyxDQUFDdUIscUJBQU4sR0FBOEIsSUFBOUI7QUFDQXZCLFdBQUssQ0FBQ3dCLGtCQUFOLEdBQTJCLEtBQTNCO0FBQ0F4QixXQUFLLENBQUN5QixtQkFBTixHQUE0QixJQUE1QjtBQUNBakcsYUFBTyxDQUFDQyxHQUFSLENBQVksMkJBQVo7QUFDQTs7QUFDRCxTQUFLb0ksdUJBQUw7QUFDQztBQUNBN0QsV0FBSyxDQUFDa0QsRUFBTixDQUFTeUMsU0FBVCxHQUFxQjNGLEtBQUssQ0FBQ2tELEVBQU4sQ0FBU3lDLFNBQVQsQ0FBbUJ6RixNQUFuQixDQUEyQkMsQ0FBRCxJQUFPQSxDQUFDLENBQUNJLEVBQUYsS0FBU2xGLE1BQU0sQ0FBQ3VFLElBQVAsQ0FBWWUsTUFBdEQsQ0FBckI7QUFDQVgsV0FBSyxDQUFDdUIscUJBQU4sR0FBOEIsS0FBOUI7QUFDQXZCLFdBQUssQ0FBQ3dCLGtCQUFOLEdBQTJCLElBQTNCO0FBQ0FoRyxhQUFPLENBQUNDLEdBQVIsQ0FBWSwyQkFBWjtBQUNBOztBQUNELFNBQUtxSSx1QkFBTDtBQUNDdEksYUFBTyxDQUFDeUUsS0FBUixDQUFjLDZCQUE2QjVFLE1BQU0sQ0FBQzRFLEtBQWxEO0FBQ0FELFdBQUssQ0FBQ3VCLHFCQUFOLEdBQThCLEtBQTlCO0FBQ0F2QixXQUFLLENBQUN5QixtQkFBTixHQUE0QnBHLE1BQU0sQ0FBQzRFLEtBQW5DOztBQUNELFNBQUswRSxjQUFMO0FBQ0M7QUFDQTNFLFdBQUssQ0FBQzBCLGFBQU4sR0FBc0IsSUFBdEI7QUFDQTFCLFdBQUssQ0FBQzRCLFdBQU4sR0FBb0IsSUFBcEIsQ0FIRCxDQUcwQjs7QUFDekI1QixXQUFLLENBQUMyQixVQUFOLEdBQW1CLEtBQW5CO0FBQ0FuRyxhQUFPLENBQUNDLEdBQVIsQ0FBWSwyQkFBWjtBQUNBOztBQUNELFNBQUttSixjQUFMO0FBQ0M1RSxXQUFLLENBQUMwQixhQUFOLEdBQXNCLEtBQXRCO0FBQ0ExQixXQUFLLENBQUMyQixVQUFOLEdBQW1CLElBQW5CLENBRkQsQ0FHQzs7QUFDQTNCLFdBQUssQ0FBQ2tELEVBQU4sQ0FBUzBDLFVBQVQsQ0FBb0JsRixJQUFwQixDQUF5QjtBQUFDSCxVQUFFLEVBQUVsRixNQUFNLENBQUN1RSxJQUFQLENBQVllO0FBQWpCLE9BQXpCO0FBQ0FuRixhQUFPLENBQUNDLEdBQVIsQ0FBWSwyQkFBWjtBQUNBOztBQUNELFNBQUtvSixjQUFMO0FBQ0M3RSxXQUFLLENBQUMwQixhQUFOLEdBQXNCLEtBQXRCO0FBQ0ExQixXQUFLLENBQUM0QixXQUFOLEdBQW9CdkcsTUFBTSxDQUFDNEUsS0FBM0I7QUFDQXpFLGFBQU8sQ0FBQ3lFLEtBQVIsQ0FBYyw2QkFBZCxFQUE2QzVFLE1BQU0sQ0FBQzRFLEtBQXBEO0FBQ0E7O0FBQ0QsU0FBSzZFLGdCQUFMO0FBQ0M7QUFDQTlFLFdBQUssQ0FBQzZCLGVBQU4sR0FBd0IsSUFBeEI7QUFDQTdCLFdBQUssQ0FBQytCLGFBQU4sR0FBc0IsSUFBdEIsQ0FIRCxDQUc0Qjs7QUFDM0IvQixXQUFLLENBQUM4QixZQUFOLEdBQXFCLEtBQXJCO0FBQ0F0RyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxxQkFBWjtBQUNBOztBQUNELFNBQUtzSixnQkFBTDtBQUNDL0UsV0FBSyxDQUFDNkIsZUFBTixHQUF3QixLQUF4QjtBQUNBN0IsV0FBSyxDQUFDOEIsWUFBTixHQUFxQixJQUFyQixDQUZELENBR0M7QUFDQTs7QUFDQTlCLFdBQUssQ0FBQ2tELEVBQU4sQ0FBUzBDLFVBQVQsR0FBc0I1RixLQUFLLENBQUNrRCxFQUFOLENBQVMwQyxVQUFULENBQW9CMUYsTUFBcEIsQ0FBNEJDLENBQUQsSUFBT0EsQ0FBQyxDQUFDSSxFQUFGLEtBQVNsRixNQUFNLENBQUN1RSxJQUFQLENBQVllLE1BQXZELENBQXRCO0FBQ0FuRixhQUFPLENBQUNDLEdBQVIsQ0FBWSxxQkFBWjtBQUNBOztBQUNELFNBQUt1SixnQkFBTDtBQUNDaEYsV0FBSyxDQUFDNkIsZUFBTixHQUF3QixLQUF4QjtBQUNBN0IsV0FBSyxDQUFDK0IsYUFBTixHQUFzQjFHLE1BQU0sQ0FBQzRFLEtBQTdCO0FBQ0F6RSxhQUFPLENBQUN5RSxLQUFSLENBQWMsdUJBQWQsRUFBdUM1RSxNQUFNLENBQUM0RSxLQUE5QztBQUNBOztBQUNELFNBQUs4RCxjQUFMO0FBQ0MvRCxXQUFLLENBQUNzQyxZQUFOLEdBQXFCLElBQXJCO0FBQ0F0QyxXQUFLLENBQUN3QyxVQUFOLEdBQW1CLElBQW5CO0FBQ0F4QyxXQUFLLENBQUN1QyxTQUFOLEdBQWtCLEtBQWxCO0FBQ0EvRyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxrQkFBWjtBQUNBOztBQUNELFNBQUt1SSxjQUFMO0FBQ0NoRSxXQUFLLENBQUNzQyxZQUFOLEdBQXFCLEtBQXJCO0FBQ0F0QyxXQUFLLENBQUN1QyxTQUFOLEdBQWtCLElBQWxCLENBRkQsQ0FHQzs7QUFDQXZDLFdBQUssQ0FBQ2tELEVBQU4sR0FBVzdILE1BQU0sQ0FBQ3VFLElBQWxCLENBSkQsQ0FJd0I7O0FBQ3ZCcEUsYUFBTyxDQUFDQyxHQUFSLENBQVksa0JBQVo7QUFDQTs7QUFDRCxTQUFLd0ksY0FBTDtBQUNDakUsV0FBSyxDQUFDc0MsWUFBTixHQUFxQixLQUFyQjtBQUNBdEMsV0FBSyxDQUFDd0MsVUFBTixHQUFtQm5ILE1BQU0sQ0FBQzRFLEtBQTFCO0FBQ0F6RSxhQUFPLENBQUN5RSxLQUFSLENBQWMscUJBQWQsRUFBcUM1RSxNQUFNLENBQUM0RSxLQUE1QztBQUNBOztBQUNELFNBQUtpRSxlQUFMO0FBQ0NsRSxXQUFLLENBQUN5QyxhQUFOLEdBQXNCLElBQXRCO0FBQ0F6QyxXQUFLLENBQUMwQyxVQUFOLEdBQW1CLEtBQW5CO0FBQ0ExQyxXQUFLLENBQUMyQyxXQUFOLEdBQW9CLElBQXBCO0FBQ0FuSCxhQUFPLENBQUNDLEdBQVIsQ0FBWSxtQkFBWjtBQUNBOztBQUNELFNBQUswSSxlQUFMO0FBQ0NuRSxXQUFLLENBQUN5QyxhQUFOLEdBQXNCLEtBQXRCO0FBQ0F6QyxXQUFLLENBQUMwQyxVQUFOLEdBQW1CLElBQW5CO0FBQ0ExQyxXQUFLLENBQUNrRCxFQUFOLEdBQVcsSUFBWDtBQUNBMUgsYUFBTyxDQUFDQyxHQUFSLENBQVksbUJBQVo7QUFDQTs7QUFDRCxTQUFLMkksZUFBTDtBQUNDcEUsV0FBSyxDQUFDeUMsYUFBTixHQUFzQixLQUF0QjtBQUNBekMsV0FBSyxDQUFDMkMsV0FBTixHQUFvQnRILE1BQU0sQ0FBQzRFLEtBQTNCO0FBQ0F6RSxhQUFPLENBQUN5RSxLQUFSLENBQWMsbUJBQWQsRUFBbUM1RSxNQUFNLENBQUM0RSxLQUExQztBQUNBOztBQUNELFNBQUtvRSxlQUFMO0FBQ0NyRSxXQUFLLENBQUM0QyxhQUFOLEdBQXNCLElBQXRCO0FBQ0E1QyxXQUFLLENBQUM2QyxVQUFOLEdBQW1CLEtBQW5CO0FBQ0E3QyxXQUFLLENBQUM4QyxXQUFOLEdBQW9CLElBQXBCO0FBQ0F0SCxhQUFPLENBQUNDLEdBQVIsQ0FBWSxtQkFBWjtBQUNBOztBQUNELFNBQUs2SSxlQUFMO0FBQ0N0RSxXQUFLLENBQUM0QyxhQUFOLEdBQXNCLEtBQXRCO0FBQ0E1QyxXQUFLLENBQUM2QyxVQUFOLEdBQW1CLElBQW5CO0FBQ0FySCxhQUFPLENBQUNDLEdBQVIsQ0FBWSxtQkFBWjtBQUNBOztBQUNELFNBQUs4SSxlQUFMO0FBQ0N2RSxXQUFLLENBQUM0QyxhQUFOLEdBQXNCLEtBQXRCO0FBQ0E1QyxXQUFLLENBQUM4QyxXQUFOLEdBQW9CekgsTUFBTSxDQUFDNEUsS0FBM0I7QUFDQXpFLGFBQU8sQ0FBQ3lFLEtBQVIsQ0FBYyxtQkFBZCxFQUFtQzVFLE1BQU0sQ0FBQzRFLEtBQTFDO0FBQ0E7O0FBQ0QsU0FBS3VFLHVCQUFMO0FBQ0N4RSxXQUFLLENBQUMrQyxxQkFBTixHQUE4QixJQUE5QjtBQUNBL0MsV0FBSyxDQUFDZ0Qsa0JBQU4sR0FBMkIsS0FBM0I7QUFDQWhELFdBQUssQ0FBQ2lELG1CQUFOLEdBQTRCLElBQTVCO0FBQ0F6SCxhQUFPLENBQUNDLEdBQVIsQ0FBWSxvQ0FBWjtBQUNBOztBQUNELFNBQUtnSix1QkFBTDtBQUNDekUsV0FBSyxDQUFDK0MscUJBQU4sR0FBOEIsS0FBOUI7QUFDQS9DLFdBQUssQ0FBQ2dELGtCQUFOLEdBQTJCLElBQTNCO0FBQ0F4SCxhQUFPLENBQUNDLEdBQVIsQ0FBWSxvQ0FBWjtBQUNBOztBQUNELFNBQUtpSix1QkFBTDtBQUNDMUUsV0FBSyxDQUFDK0MscUJBQU4sR0FBOEIsS0FBOUI7QUFDQS9DLFdBQUssQ0FBQ2lELG1CQUFOLEdBQTRCNUgsTUFBTSxDQUFDNEUsS0FBbkM7QUFDQXpFLGFBQU8sQ0FBQ3lFLEtBQVIsQ0FBYyw0QkFBZCxFQUE0QzVFLE1BQU0sQ0FBQzRFLEtBQW5EO0FBQ0E7O0FBQ0QsU0FBS2dGLHNCQUFMO0FBQ0NqRixXQUFLLENBQUNnQyxvQkFBTixHQUE2QixJQUE3QjtBQUNBaEMsV0FBSyxDQUFDaUMsaUJBQU4sR0FBMEIsS0FBMUI7QUFDQWpDLFdBQUssQ0FBQ2tDLGtCQUFOLEdBQTJCLElBQTNCO0FBQ0ExRyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxtQ0FBWjtBQUNBOztBQUNELFNBQUt5SixzQkFBTDtBQUNDbEYsV0FBSyxDQUFDZ0Msb0JBQU4sR0FBNkIsS0FBN0I7QUFDQWhDLFdBQUssQ0FBQ2lDLGlCQUFOLEdBQTBCLElBQTFCO0FBQ0FqQyxXQUFLLENBQUNrRCxFQUFOLENBQVN5QyxTQUFULEdBQXFCdEssTUFBTSxDQUFDdUUsSUFBNUI7QUFDQXBFLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLG1DQUFaO0FBQ0E7O0FBQ0QsU0FBSzBKLHNCQUFMO0FBQ0NuRixXQUFLLENBQUNnQyxvQkFBTixHQUE2QixLQUE3QjtBQUNBaEMsV0FBSyxDQUFDa0Msa0JBQU4sR0FBMkI3RyxNQUFNLENBQUM0RSxLQUFsQztBQUNBekUsYUFBTyxDQUFDeUUsS0FBUixDQUFjLDJCQUFkLEVBQTJDNUUsTUFBTSxDQUFDNEUsS0FBbEQ7QUFDQTs7QUFDRCxTQUFLbUYsdUJBQUw7QUFDQ3BGLFdBQUssQ0FBQ21DLHFCQUFOLEdBQThCLElBQTlCO0FBQ0FuQyxXQUFLLENBQUNvQyxrQkFBTixHQUEyQixLQUEzQjtBQUNBcEMsV0FBSyxDQUFDcUMsbUJBQU4sR0FBNEIsSUFBNUI7QUFDQTdHLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLG9DQUFaO0FBQ0E7O0FBQ0QsU0FBSzRKLHVCQUFMO0FBQ0NyRixXQUFLLENBQUNtQyxxQkFBTixHQUE4QixLQUE5QjtBQUNBbkMsV0FBSyxDQUFDb0Msa0JBQU4sR0FBMkIsSUFBM0I7QUFDQXBDLFdBQUssQ0FBQ2tELEVBQU4sQ0FBUzBDLFVBQVQsR0FBc0J2SyxNQUFNLENBQUN1RSxJQUE3QjtBQUNBcEUsYUFBTyxDQUFDQyxHQUFSLENBQVksb0NBQVo7QUFDQTs7QUFDRCxTQUFLNkosdUJBQUw7QUFDQ3RGLFdBQUssQ0FBQ21DLHFCQUFOLEdBQThCLEtBQTlCO0FBQ0FuQyxXQUFLLENBQUNxQyxtQkFBTixHQUE0QmhILE1BQU0sQ0FBQzRFLEtBQW5DO0FBQ0F6RSxhQUFPLENBQUN5RSxLQUFSLENBQWMsNEJBQWQsRUFBNEM1RSxNQUFNLENBQUM0RSxLQUFuRDtBQUNBOztBQUNELFNBQUtzRixjQUFMO0FBQXFCO0FBQ3BCdkYsV0FBSyxDQUFDa0QsRUFBTixDQUFTMkMsS0FBVCxDQUFleEYsT0FBZixDQUF1QjtBQUFDRSxVQUFFLEVBQUVsRixNQUFNLENBQUN1RTtBQUFaLE9BQXZCO0FBQ0FwRSxhQUFPLENBQUNDLEdBQVIsQ0FBWSxtQkFBWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0QsU0FBSytKLGlCQUFMO0FBQ0N4RixXQUFLLENBQUNrRCxFQUFOLENBQVMyQyxLQUFULEdBQWlCN0YsS0FBSyxDQUFDa0QsRUFBTixDQUFTMkMsS0FBVCxDQUFlM0YsTUFBZixDQUF1QkMsQ0FBRCxJQUFPQSxDQUFDLENBQUNJLEVBQUYsS0FBU2xGLE1BQU0sQ0FBQ3VFLElBQTdDLENBQWpCO0FBQ0FwRSxhQUFPLENBQUNDLEdBQVIsQ0FBWSxtQkFBWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0Q7QUFDQztBQTNORjtBQTZOQSxDQTlOd0QsQ0FBekQ7O0FBZ09lcUUsc0VBQWYsRTs7Ozs7Ozs7Ozs7O0FDeFdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBZ0csNENBQUssQ0FBQ0MsUUFBTixDQUFlQyxPQUFmLEdBQXlCLHVCQUF6QjtBQUNBRiw0Q0FBSyxDQUFDQyxRQUFOLENBQWVFLGVBQWYsR0FBaUMsSUFBakM7QUFFZSxVQUFVQyxRQUFWLEdBQXFCO0FBQ25DLFFBQU1DLDhEQUFHLENBQUMsQ0FBRTtBQUNYQyxpRUFBSSxDQUFDQyw2Q0FBRCxDQURLLEVBQ087QUFDaEJELGlFQUFJLENBQUNFLDZDQUFELENBRkssQ0FFTztBQUZQLEdBQUQsQ0FBVDtBQUlBLEM7Ozs7Ozs7Ozs7OztBQ2JEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Q0E0QkE7QUFFQTs7QUFDQSxTQUFTQyxVQUFULENBQW9CM0csSUFBcEIsRUFBMEI7QUFDekIsU0FBT2tHLDRDQUFLLENBQUNoSyxJQUFOLENBQVksU0FBUThELElBQUssVUFBekIsQ0FBUDtBQUNBOztBQUVELFVBQVU0RyxPQUFWLENBQWtCbkwsTUFBbEIsRUFBMEI7QUFDekIsTUFBSTtBQUNILFVBQU1vTCxNQUFNLEdBQUcsTUFBTUMsK0RBQUksQ0FBQ0gsVUFBRCxFQUFhbEwsTUFBTSxDQUFDdUUsSUFBcEIsQ0FBekI7QUFDQXBFLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLG1CQUFaLEVBQWlDSixNQUFNLENBQUN1RSxJQUF4QztBQUNBLFVBQU0rRyw4REFBRyxDQUFDO0FBQ1RyTCxVQUFJLEVBQUVrRSw4REFERztBQUVUSSxVQUFJLEVBQUU2RyxNQUFNLENBQUM3RztBQUZKLEtBQUQsQ0FBVDtBQUlBcEUsV0FBTyxDQUFDQyxHQUFSLENBQVksbUJBQVosRUFBaUNnTCxNQUFqQztBQUNBLEdBUkQsQ0FRRSxPQUFPRyxHQUFQLEVBQVk7QUFDYnBMLFdBQU8sQ0FBQ3lFLEtBQVIsQ0FBYyxxQkFBZCxFQUFxQzJHLEdBQXJDO0FBQ0EsVUFBTUQsOERBQUcsQ0FBQztBQUNUckwsVUFBSSxFQUFFbUUsOERBREc7QUFFVFEsV0FBSyxFQUFFMkcsR0FBRyxDQUFDQyxRQUFKLENBQWFqSDtBQUZYLEtBQUQsQ0FBVDtBQUlBO0FBQ0Q7O0FBRUQsU0FBU2tILGVBQVQsQ0FBeUJsSCxJQUF6QixFQUErQjtBQUM5QixTQUFPa0csNENBQUssQ0FBQ2hLLElBQU4sQ0FBVyxjQUFYLEVBQTJCOEQsSUFBM0IsQ0FBUCxDQUQ4QixDQUNVO0FBQ3hDOztBQUVELFVBQVVtSCxZQUFWLENBQXVCMUwsTUFBdkIsRUFBK0I7QUFDOUIsTUFBSTtBQUNILFVBQU1vTCxNQUFNLEdBQUcsTUFBTUMsK0RBQUksQ0FBQ0ksZUFBRCxFQUFrQnpMLE1BQU0sQ0FBQ3VFLElBQXpCLENBQXpCO0FBQ0FwRSxXQUFPLENBQUNDLEdBQVIsQ0FBWSx5QkFBWixFQUF1Q0osTUFBTSxDQUFDdUUsSUFBOUM7QUFDQSxVQUFNK0csOERBQUcsQ0FBQztBQUNUckwsVUFBSSxFQUFFc0Qsb0VBREc7QUFFVGdCLFVBQUksRUFBRTZHLE1BQU0sQ0FBQzdHO0FBRkosS0FBRCxDQUFUO0FBSUFwRSxXQUFPLENBQUNDLEdBQVIsQ0FBWSx5QkFBWixFQUF1Q2dMLE1BQXZDO0FBQ0EsR0FSRCxDQVFFLE9BQU9HLEdBQVAsRUFBWTtBQUNicEwsV0FBTyxDQUFDeUUsS0FBUixDQUFjLDRCQUFkLEVBQTRDMkcsR0FBNUM7QUFDQSxVQUFNRCw4REFBRyxDQUFDO0FBQ1RyTCxVQUFJLEVBQUV1RCxvRUFERztBQUVUb0IsV0FBSyxFQUFFMkcsR0FBRyxDQUFDQyxRQUFKLENBQWFqSDtBQUZYLEtBQUQsQ0FBVDtBQUlBO0FBQ0Q7O0FBRUQsU0FBU29ILFdBQVQsQ0FBcUJwSCxJQUFyQixFQUEyQjtBQUFFO0FBQzVCLFNBQU9rRyw0Q0FBSyxDQUFDbUIsS0FBTixDQUFhLFNBQVFySCxJQUFLLE9BQTFCLENBQVAsQ0FEMEIsQ0FDZTtBQUN6Qzs7QUFFRCxVQUFVc0gsUUFBVixDQUFtQjdMLE1BQW5CLEVBQTJCO0FBQUU7QUFDNUIsTUFBSTtBQUNILFVBQU1vTCxNQUFNLEdBQUcsTUFBTUMsK0RBQUksQ0FBQ00sV0FBRCxFQUFjM0wsTUFBTSxDQUFDdUUsSUFBckIsQ0FBekIsQ0FERyxDQUNpRDs7QUFDcERwRSxXQUFPLENBQUNDLEdBQVIsQ0FBWSxnQkFBWixFQUE4QmdMLE1BQTlCO0FBQ0EsVUFBTUUsOERBQUcsQ0FBQztBQUNUckwsVUFBSSxFQUFFbUQsZ0VBREc7QUFFVG1CLFVBQUksRUFBRTZHLE1BQU0sQ0FBQzdHLElBRkosQ0FFVTs7QUFGVixLQUFELENBQVQ7QUFJQXBFLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVosRUFBNkJnTCxNQUE3QjtBQUNBLEdBUkQsQ0FRRSxPQUFPRyxHQUFQLEVBQVk7QUFDYnBMLFdBQU8sQ0FBQ3lFLEtBQVIsQ0FBYyxtQkFBZCxFQUFtQzJHLEdBQW5DO0FBQ0EsVUFBTUQsOERBQUcsQ0FBQztBQUNUckwsVUFBSSxFQUFFb0QsZ0VBREc7QUFFVHVCLFdBQUssRUFBRTJHLEdBQUcsQ0FBQ0MsUUFBSixDQUFhakg7QUFGWCxLQUFELENBQVQ7QUFJQTtBQUNEOztBQUVELFNBQVN1SCxhQUFULENBQXVCdkgsSUFBdkIsRUFBNkI7QUFBRTtBQUM5QixTQUFPa0csNENBQUssQ0FBQ3NCLE1BQU4sQ0FBYyxTQUFReEgsSUFBSyxPQUEzQixDQUFQLENBRDRCLENBQ2M7QUFDMUM7O0FBRUQsVUFBVXlILFVBQVYsQ0FBcUJoTSxNQUFyQixFQUE2QjtBQUFFO0FBQzlCLE1BQUk7QUFDSCxVQUFNb0wsTUFBTSxHQUFHLE1BQU1DLCtEQUFJLENBQUNTLGFBQUQsRUFBZ0I5TCxNQUFNLENBQUN1RSxJQUF2QixDQUF6QixDQURHLENBQ21EOztBQUN0RHBFLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGtCQUFaLEVBQWdDZ0wsTUFBaEM7QUFDQSxVQUFNRSw4REFBRyxDQUFDO0FBQ1RyTCxVQUFJLEVBQUV5RCxrRUFERztBQUVUYSxVQUFJLEVBQUU2RyxNQUFNLENBQUM3RyxJQUZKLENBRVU7O0FBRlYsS0FBRCxDQUFUO0FBSUFwRSxXQUFPLENBQUNDLEdBQVIsQ0FBWSxpQkFBWixFQUErQmdMLE1BQS9CO0FBQ0EsR0FSRCxDQVFFLE9BQU9HLEdBQVAsRUFBWTtBQUNicEwsV0FBTyxDQUFDeUUsS0FBUixDQUFjLHFCQUFkLEVBQXFDMkcsR0FBckM7QUFDQSxVQUFNRCw4REFBRyxDQUFDO0FBQ1RyTCxVQUFJLEVBQUUwRCxrRUFERztBQUVUaUIsV0FBSyxFQUFFMkcsR0FBRyxDQUFDQyxRQUFKLENBQWFqSDtBQUZYLEtBQUQsQ0FBVDtBQUlBO0FBQ0Q7O0FBRUQsU0FBUzBILFlBQVQsQ0FBc0JDLE1BQXRCLEVBQThCO0FBQUU7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFPekIsNENBQUssQ0FBQzBCLEdBQU4sQ0FBVyxpQkFBZ0JELE1BQU0sSUFBSSxDQUFFLEVBQXZDLENBQVAsQ0FMNkIsQ0FLb0I7QUFDakQ7O0FBRUQsVUFBVUUsU0FBVixDQUFvQnBNLE1BQXBCLEVBQTRCO0FBQUU7QUFDN0IsTUFBSTtBQUNIRyxXQUFPLENBQUNDLEdBQVIsQ0FBWSx1QkFBWixFQUFxQ0osTUFBTSxDQUFDa00sTUFBNUM7QUFDQSxVQUFNZCxNQUFNLEdBQUcsTUFBTUMsK0RBQUksQ0FBQ1ksWUFBRCxFQUFlak0sTUFBTSxDQUFDa00sTUFBdEIsQ0FBekIsQ0FGRyxDQUVvRDtBQUN2RDs7QUFDQS9MLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFaLEVBQStCZ0wsTUFBL0I7QUFDQSxVQUFNRSw4REFBRyxDQUFDO0FBQ1RyTCxVQUFJLEVBQUUwQyxpRUFERztBQUVUO0FBQ0E0QixVQUFJLEVBQUU2RyxNQUFNLENBQUM3RztBQUhKLEtBQUQsQ0FBVDtBQUtBLEdBVkQsQ0FVRSxPQUFPZ0gsR0FBUCxFQUFZO0FBQ2JwTCxXQUFPLENBQUN5RSxLQUFSLENBQWMsbUJBQWQsRUFBbUMyRyxHQUFuQztBQUNBLFVBQU1ELDhEQUFHLENBQUM7QUFDVHJMLFVBQUksRUFBRTJDLGlFQURHO0FBRVRnQyxXQUFLLEVBQUUyRyxHQUFHLENBQUNDLFFBQUosQ0FBYWpIO0FBRlgsS0FBRCxDQUFUO0FBSUE7QUFDRDs7QUFFRCxTQUFTOEgsV0FBVCxDQUFxQjlILElBQXJCLEVBQTJCO0FBQzFCLFNBQU9rRyw0Q0FBSyxDQUFDMEIsR0FBTixDQUFXLFNBQVE1SCxJQUFLLEVBQXhCLENBQVA7QUFDQTs7QUFFRCxVQUFVK0gsUUFBVixDQUFtQnRNLE1BQW5CLEVBQTJCO0FBQzFCLE1BQUk7QUFDSCxVQUFNb0wsTUFBTSxHQUFHLE1BQU1DLCtEQUFJLENBQUNnQixXQUFELEVBQWNyTSxNQUFNLENBQUN1RSxJQUFyQixDQUF6QjtBQUNBcEUsV0FBTyxDQUFDQyxHQUFSLENBQVksc0JBQVosRUFBb0NKLE1BQU0sQ0FBQ3VFLElBQTNDO0FBQ0EsVUFBTStHLDhEQUFHLENBQUM7QUFDVHJMLFVBQUksRUFBRTZDLGdFQURHO0FBRVR5QixVQUFJLEVBQUU2RyxNQUFNLENBQUM3RztBQUZKLEtBQUQsQ0FBVDtBQUlBcEUsV0FBTyxDQUFDQyxHQUFSLENBQVksc0JBQVosRUFBb0NnTCxNQUFwQztBQUNBLEdBUkQsQ0FRRSxPQUFPRyxHQUFQLEVBQVk7QUFDYnBMLFdBQU8sQ0FBQ3lFLEtBQVIsQ0FBYyxzQkFBZCxFQUFzQzJHLEdBQXRDO0FBQ0EsVUFBTUQsOERBQUcsQ0FBQztBQUNUckwsVUFBSSxFQUFFOEMsZ0VBREc7QUFFVDZCLFdBQUssRUFBRTJHLEdBQUcsQ0FBQ0MsUUFBSixDQUFhakg7QUFGWCxLQUFELENBQVQ7QUFJQTtBQUNEOztBQUdELFNBQVNnSSxVQUFULENBQW9CaEksSUFBcEIsRUFBMEI7QUFBRTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQU9rRyw0Q0FBSyxDQUFDaEssSUFBTixDQUFXLE9BQVgsRUFBb0I4RCxJQUFwQixDQUFQLENBTHlCLENBS1E7QUFDakM7O0FBRUQsVUFBVUQsT0FBVixDQUFrQnRFLE1BQWxCLEVBQTBCO0FBQUU7QUFDM0IsTUFBSTtBQUNILFVBQU1vTCxNQUFNLEdBQUcsTUFBTUMsK0RBQUksQ0FBQ2tCLFVBQUQsRUFBYXZNLE1BQU0sQ0FBQ3VFLElBQXBCLENBQXpCLENBREcsQ0FDZ0Q7QUFDbkQ7QUFDQTs7QUFDQXBFLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVosRUFBNkJnTCxNQUE3QjtBQUNBLFVBQU1FLDhEQUFHLENBQUM7QUFDVHJMLFVBQUksRUFBRWdELCtEQURHOztBQUVUO0FBQ0g7QUFDQTtBQUNBO0FBQ0dzQixVQUFJLEVBQUU2RyxNQUFNLENBQUM3RyxJQU5KLENBTVU7O0FBTlYsS0FBRCxDQUFUO0FBUUFwRSxXQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFaLEVBQTRCZ0wsTUFBNUI7QUFDQSxVQUFNRSw4REFBRyxDQUFDO0FBQ1RyTCxVQUFJLEVBQUVpSyw2REFERztBQUVUO0FBQ0EzRixVQUFJLEVBQUU2RyxNQUFNLENBQUM3RyxJQUFQLENBQVlXLEVBSFQsQ0FHYTs7QUFIYixLQUFELENBQVQ7QUFLQSxHQW5CRCxDQW1CRSxPQUFPcUcsR0FBUCxFQUFZO0FBQ2JwTCxXQUFPLENBQUN5RSxLQUFSLENBQWMsa0JBQWQsRUFBa0MyRyxHQUFsQztBQUNBLFVBQU1ELDhEQUFHLENBQUM7QUFDVHJMLFVBQUksRUFBRWlELCtEQURHO0FBRVQwQixXQUFLLEVBQUUyRyxHQUFHLENBQUNDLFFBQUosQ0FBYWpIO0FBRlgsS0FBRCxDQUFUO0FBSUE7QUFDRDs7QUFFRCxTQUFTaUksYUFBVCxDQUF1QmpJLElBQXZCLEVBQTZCO0FBQUU7QUFDOUI7QUFDQSxTQUFPa0csNENBQUssQ0FBQ3NCLE1BQU4sQ0FBYyxTQUFReEgsSUFBSyxFQUEzQixDQUFQLENBRjRCLENBRVM7QUFDckM7O0FBRUQsVUFBVWtJLFVBQVYsQ0FBcUJ6TSxNQUFyQixFQUE2QjtBQUFFO0FBQzlCLE1BQUk7QUFBRTtBQUNMLFVBQU1vTCxNQUFNLEdBQUcsTUFBTUMsK0RBQUksQ0FBQ21CLGFBQUQsRUFBZ0J4TSxNQUFNLENBQUN1RSxJQUF2QixDQUF6QixDQURHLENBQ21EO0FBQ3REOztBQUNBcEUsV0FBTyxDQUFDQyxHQUFSLENBQVksa0JBQVosRUFBZ0NKLE1BQU0sQ0FBQ3VFLElBQXZDO0FBQ0EsVUFBTStHLDhEQUFHLENBQUM7QUFDVHJMLFVBQUksRUFBRTRELGtFQURHO0FBRVRVLFVBQUksRUFBRTZHLE1BQU0sQ0FBQzdHLElBRkosQ0FFVTs7QUFGVixLQUFELENBQVQ7QUFJQXBFLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGtCQUFaLEVBQWdDZ0wsTUFBaEM7QUFDQSxVQUFNRSw4REFBRyxDQUFDO0FBQ1RyTCxVQUFJLEVBQUVrSyxnRUFERztBQUVUO0FBQ0E1RixVQUFJLEVBQUV2RSxNQUFNLENBQUN1RSxJQUhKLENBR1c7O0FBSFgsS0FBRCxDQUFUO0FBS0EsR0FkRCxDQWNFLE9BQU9nSCxHQUFQLEVBQVk7QUFDYnBMLFdBQU8sQ0FBQ3lFLEtBQVIsQ0FBYyxvQkFBZCxFQUFvQzJHLEdBQXBDO0FBQ0EsVUFBTUQsOERBQUcsQ0FBQztBQUNUckwsVUFBSSxFQUFFNkQsa0VBREc7QUFFVGMsV0FBSyxFQUFFMkcsR0FBRyxDQUFDQyxRQUFKLENBQWFqSDtBQUZYLEtBQUQsQ0FBVDtBQUlBO0FBQ0Q7O0FBRUQsU0FBU21JLGFBQVQsQ0FBdUJuSSxJQUF2QixFQUE2QjtBQUFFO0FBQzlCO0FBQ0E7QUFDQSxTQUFPa0csNENBQUssQ0FBQ2hLLElBQU4sQ0FBWSxTQUFROEQsSUFBSSxDQUFDb0ksTUFBTyxVQUFoQyxFQUEyQ3BJLElBQTNDLENBQVAsQ0FINEIsQ0FHNEI7QUFDeEQ7O0FBRUQsVUFBVUMsVUFBVixDQUFxQnhFLE1BQXJCLEVBQTZCO0FBQUU7QUFDOUIsTUFBSTtBQUNILFVBQU1vTCxNQUFNLEdBQUcsTUFBTUMsK0RBQUksQ0FBQ3FCLGFBQUQsRUFBZ0IxTSxNQUFNLENBQUN1RSxJQUF2QixDQUF6QixDQURHLENBQ21EO0FBQ3REOztBQUNBcEUsV0FBTyxDQUFDQyxHQUFSLENBQVksbUJBQVosRUFBaUNKLE1BQU0sQ0FBQ3VFLElBQXhDO0FBQ0EsVUFBTStHLDhEQUFHLENBQUM7QUFDVHJMLFVBQUksRUFBRStELGtFQURHO0FBRVQ7QUFDQU8sVUFBSSxFQUFFNkcsTUFBTSxDQUFDN0c7QUFISixLQUFELENBQVQ7QUFLQXBFLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFaLEVBQStCZ0wsTUFBL0I7QUFDQSxHQVZELENBVUUsT0FBT0csR0FBUCxFQUFZO0FBQ2JwTCxXQUFPLENBQUN5RSxLQUFSLENBQWMscUJBQWQsRUFBcUMyRyxHQUFyQztBQUNBLFVBQU1ELDhEQUFHLENBQUM7QUFDVHJMLFVBQUksRUFBRWdFLGtFQURHO0FBRVRXLFdBQUssRUFBRTJHLEdBQUcsQ0FBQ0MsUUFBSixDQUFhakg7QUFGWCxLQUFELENBQVQ7QUFJQTtBQUNEOztBQUVELFVBQVVxSSxhQUFWLEdBQTBCO0FBQ3pCLFFBQU1DLHFFQUFVLENBQUNoSyxnRUFBRCxFQUFvQnlKLFFBQXBCLENBQWhCO0FBQ0E7O0FBRUQsVUFBVVEsWUFBVixHQUF5QjtBQUN4QixRQUFNRCxxRUFBVSxDQUFDM0ksOERBQUQsRUFBa0JpSCxPQUFsQixDQUFoQjtBQUNBOztBQUVELFVBQVU0QixpQkFBVixHQUE4QjtBQUM3QixRQUFNRixxRUFBVSxDQUFDdkosb0VBQUQsRUFBd0JvSSxZQUF4QixDQUFoQjtBQUNBOztBQUVELFVBQVVzQixhQUFWLEdBQTBCO0FBQ3pCLFFBQU1ILHFFQUFVLENBQUMxSixnRUFBRCxFQUFvQjBJLFFBQXBCLENBQWhCO0FBQ0E7O0FBRUQsVUFBVW9CLGVBQVYsR0FBNEI7QUFDM0IsUUFBTUoscUVBQVUsQ0FBQ3BKLGtFQUFELEVBQXNCdUksVUFBdEIsQ0FBaEI7QUFDQTs7QUFFRCxVQUFVa0IsY0FBVixHQUEyQjtBQUMxQixRQUFNQyxtRUFBUSxDQUFDLElBQUQsRUFBT3pLLGlFQUFQLEVBQTJCMEosU0FBM0IsQ0FBZDtBQUNBOztBQUVELFVBQVVnQixZQUFWLEdBQXlCO0FBQ3hCLFFBQU1QLHFFQUFVLENBQUM3SiwrREFBRCxFQUFtQnNCLE9BQW5CLENBQWhCO0FBQ0E7O0FBRUQsVUFBVStJLGVBQVYsR0FBNEI7QUFDM0IsUUFBTVIscUVBQVUsQ0FBQ2pKLGtFQUFELEVBQXNCNkksVUFBdEIsQ0FBaEI7QUFDQTs7QUFFRCxVQUFVYSxlQUFWLEdBQTRCO0FBQzNCLFFBQU1ULHFFQUFVLENBQUM5SSxrRUFBRCxFQUFzQlMsVUFBdEIsQ0FBaEI7QUFDQTs7QUFFYyxVQUFVd0csUUFBVixHQUFxQjtBQUNuQyxRQUFNRiw4REFBRyxDQUFDLENBQ1RDLCtEQUFJLENBQUM2QixhQUFELENBREssRUFFVDdCLCtEQUFJLENBQUMrQixZQUFELENBRkssRUFHVC9CLCtEQUFJLENBQUNnQyxpQkFBRCxDQUhLLEVBSVRoQywrREFBSSxDQUFDaUMsYUFBRCxDQUpLLEVBS1RqQywrREFBSSxDQUFDa0MsZUFBRCxDQUxLLEVBTVRsQywrREFBSSxDQUFDbUMsY0FBRCxDQU5LLEVBT1RuQywrREFBSSxDQUFDcUMsWUFBRCxDQVBLLEVBUVRyQywrREFBSSxDQUFDc0MsZUFBRCxDQVJLLEVBU1R0QywrREFBSSxDQUFDdUMsZUFBRCxDQVRLLENBQUQsQ0FBVDtBQVdBLEM7Ozs7Ozs7Ozs7OztBQ3hURDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUEwQkEsU0FBU0MsUUFBVCxDQUFrQmhKLElBQWxCLEVBQXdCO0FBQUU7QUFDYjtBQUVaO0FBQ0E7QUFFQTtBQUNBLFNBQU9rRyw0Q0FBSyxDQUFDaEssSUFBTixDQUFXLGFBQVgsRUFBMEI4RCxJQUExQixDQUFQO0FBQ0EsQyxDQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLFVBQVVpSixLQUFWLENBQWdCeE4sTUFBaEIsRUFBd0I7QUFBRTtBQUN6QixNQUFJO0FBQUU7QUFDTDtBQUNBLFVBQU1vTCxNQUFNLEdBQUcsTUFBTUMsK0RBQUksQ0FBQ2tDLFFBQUQsRUFBV3ZOLE1BQU0sQ0FBQ3VFLElBQWxCLENBQXpCLENBRkcsQ0FFOEM7O0FBQ2pEcEUsV0FBTyxDQUFDQyxHQUFSLENBQVksa0JBQVosRUFBZ0NKLE1BQU0sQ0FBQ3VFLElBQXZDO0FBQ0EsVUFBTStHLDhEQUFHLENBQUM7QUFDVHJMLFVBQUksRUFBRTBJLDZEQURHO0FBRVQ7QUFDQXBFLFVBQUksRUFBRTZHLE1BQU0sQ0FBQzdHLElBSEosQ0FHUzs7QUFIVCxLQUFELENBQVQ7QUFLQXBFLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGtCQUFaLEVBQWdDZ0wsTUFBaEM7QUFDQSxHQVZELENBVUUsT0FBT0csR0FBUCxFQUFZO0FBQ2JwTCxXQUFPLENBQUN5RSxLQUFSLENBQWMsT0FBZCxFQUF1QjJHLEdBQXZCO0FBQ0EsVUFBTUQsOERBQUcsQ0FBQztBQUFFO0FBQ1hyTCxVQUFJLEVBQUUySSw2REFERztBQUVUaEUsV0FBSyxFQUFFMkcsR0FBRyxDQUFDQyxRQUFKLENBQWFqSCxJQUZYLENBRWdCOztBQUZoQixLQUFELENBQVQ7QUFJQTtBQUNEOztBQUVELFNBQVNrSixTQUFULEdBQXFCO0FBQ3BCO0FBQ0EsU0FBT2hELDRDQUFLLENBQUNoSyxJQUFOLENBQVcsY0FBWCxDQUFQO0FBQ0E7O0FBRUQsVUFBVWlOLE1BQVYsR0FBbUI7QUFDbEIsTUFBSTtBQUFFO0FBQ0w7QUFDQSxVQUFNckMsK0RBQUksQ0FBQ29DLFNBQUQsQ0FBVixDQUZHLENBRW1COztBQUN0QnROLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLG1CQUFaO0FBQ0EsVUFBTWtMLDhEQUFHLENBQUM7QUFDVHJMLFVBQUksRUFBRTZJLDhEQUFlQTtBQURaLEtBQUQsQ0FBVDtBQUdBM0ksV0FBTyxDQUFDQyxHQUFSLENBQVksbUJBQVo7QUFDQSxHQVJELENBUUUsT0FBT21MLEdBQVAsRUFBWTtBQUNicEwsV0FBTyxDQUFDeUUsS0FBUixDQUFjLGlCQUFkLEVBQWlDMkcsR0FBakM7QUFDQSxVQUFNRCw4REFBRyxDQUFDO0FBQUU7QUFDWHJMLFVBQUksRUFBRThJLDhEQURHO0FBRVRuRSxXQUFLLEVBQUUyRyxHQUFHLENBQUNDLFFBQUosQ0FBYWpILElBRlgsQ0FFZ0I7O0FBRmhCLEtBQUQsQ0FBVDtBQUlBO0FBQ0Q7O0FBRUQsU0FBU29KLGlCQUFULENBQTJCcEosSUFBM0IsRUFBaUM7QUFBRTtBQUNqQjtBQUNBO0FBQ0E7QUFDakIsU0FBT2tHLDRDQUFLLENBQUNtQixLQUFOLENBQVksZ0JBQVosRUFBOEI7QUFBQ2dDLFlBQVEsRUFBRXJKO0FBQVgsR0FBOUIsQ0FBUDtBQUNBOztBQUVELFVBQVVzSixjQUFWLENBQXlCN04sTUFBekIsRUFBaUM7QUFBRTtBQUNsQyxNQUFJO0FBQUU7QUFDTDtBQUNBLFVBQU1vTCxNQUFNLEdBQUcsTUFBTUMsK0RBQUksQ0FBQ3NDLGlCQUFELEVBQW9CM04sTUFBTSxDQUFDdUUsSUFBM0IsQ0FBekIsQ0FGRyxDQUV1RDs7QUFDMURwRSxXQUFPLENBQUNDLEdBQVIsQ0FBWSwyQkFBWixFQUF5Q0osTUFBTSxDQUFDdUUsSUFBaEQ7QUFDQSxVQUFNK0csOERBQUcsQ0FBQztBQUNUckwsVUFBSSxFQUFFbUosc0VBREc7QUFFVDtBQUNBN0UsVUFBSSxFQUFFNkcsTUFBTSxDQUFDN0csSUFISixDQUdTOztBQUhULEtBQUQsQ0FBVDtBQUtBcEUsV0FBTyxDQUFDQyxHQUFSLENBQVksMkJBQVosRUFBeUNnTCxNQUF6QztBQUNBLEdBVkQsQ0FVRSxPQUFPRyxHQUFQLEVBQVk7QUFDYnBMLFdBQU8sQ0FBQ3lFLEtBQVIsQ0FBYyxnQkFBZCxFQUFnQzJHLEdBQWhDO0FBQ0EsVUFBTUQsOERBQUcsQ0FBQztBQUFFO0FBQ1hyTCxVQUFJLEVBQUVvSixzRUFERztBQUVUekUsV0FBSyxFQUFFMkcsR0FBRyxDQUFDQyxRQUFKLENBQWFqSCxJQUZYLENBRWdCOztBQUZoQixLQUFELENBQVQ7QUFJQTtBQUNEOztBQUVELFNBQVN1SixhQUFULENBQXVCQyxNQUF2QixFQUErQjtBQUM5QjtBQUNBLFNBQU90RCw0Q0FBSyxDQUFDMEIsR0FBTixDQUFVNEIsTUFBTSxHQUFJLFNBQVFBLE1BQU8sRUFBbkIsR0FBdUIsUUFBdkMsRUFBaUQ7QUFDdkRuRCxtQkFBZSxFQUFFLElBRHNDLENBQ2pDOztBQURpQyxHQUFqRCxDQUFQLENBRjhCLENBSTFCO0FBQ0o7O0FBRUQsVUFBVW9ELFVBQVYsQ0FBcUJoTyxNQUFyQixFQUE2QjtBQUM1QixNQUFJO0FBQ0gsVUFBTW9MLE1BQU0sR0FBRyxNQUFNQywrREFBSSxDQUFDeUMsYUFBRCxFQUFnQjlOLE1BQU0sQ0FBQ3VFLElBQXZCLENBQXpCO0FBQ0FwRSxXQUFPLENBQUNDLEdBQVIsQ0FBWSx3QkFBWixFQUFzQ0osTUFBTSxDQUFDdUUsSUFBN0M7QUFDQSxVQUFNK0csOERBQUcsQ0FBQztBQUNUckwsVUFBSSxFQUFFb0ksbUVBREc7QUFFVDlELFVBQUksRUFBRTZHLE1BQU0sQ0FBQzdHLElBRko7QUFHVHNELFFBQUUsRUFBRSxDQUFDN0gsTUFBTSxDQUFDdUU7QUFISCxLQUFELENBQVQ7QUFLQXBFLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLHVCQUFaLEVBQXFDZ0wsTUFBckM7QUFDQSxHQVRELENBU0UsT0FBT0csR0FBUCxFQUFZO0FBQ2JwTCxXQUFPLENBQUN5RSxLQUFSLENBQWMsMkJBQWQsRUFBMkMyRyxHQUEzQztBQUNBLFVBQU1ELDhEQUFHLENBQUM7QUFDVHJMLFVBQUksRUFBRXFJLG1FQURHO0FBRVQxRCxXQUFLLEVBQUUyRyxHQUFHLENBQUNDLFFBQUosQ0FBYWpIO0FBRlgsS0FBRCxDQUFUO0FBSUE7QUFDRDs7QUFFRCxTQUFTMEosU0FBVCxDQUFtQjFKLElBQW5CLEVBQXlCO0FBQUU7QUFDYjtBQUNiLFNBQU9rRyw0Q0FBSyxDQUFDbUIsS0FBTixDQUFhLFNBQVFySCxJQUFLLFNBQTFCLENBQVA7QUFDQTs7QUFFRCxVQUFVMkosTUFBVixDQUFpQmxPLE1BQWpCLEVBQXlCO0FBQ3hCLE1BQUk7QUFDSDtBQUNBLFVBQU1vTCxNQUFNLEdBQUcsTUFBTUMsK0RBQUksQ0FBQzRDLFNBQUQsRUFBWWpPLE1BQU0sQ0FBQ3VFLElBQW5CLENBQXpCO0FBQ0FwRSxXQUFPLENBQUNDLEdBQVIsQ0FBWSxtQkFBWixFQUFpQ2dMLE1BQWpDO0FBQ0EsVUFBTUUsOERBQUcsQ0FBQztBQUNUckwsVUFBSSxFQUFFc0osNkRBREc7QUFFVDtBQUNBaEYsVUFBSSxFQUFFNkcsTUFBTSxDQUFDN0c7QUFISixLQUFELENBQVQ7QUFLQXBFLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLG9CQUFaLEVBQWtDZ0wsTUFBbEM7QUFDQSxHQVZELENBVUUsT0FBT0csR0FBUCxFQUFZO0FBQ2JwTCxXQUFPLENBQUN5RSxLQUFSLENBQWMsdUJBQWQsRUFBdUMyRyxHQUF2QztBQUNBLFVBQU1ELDhEQUFHLENBQUM7QUFDVHJMLFVBQUksRUFBRXVKLDZEQURHO0FBRVQ1RSxXQUFLLEVBQUUyRyxHQUFHLENBQUNDLFFBQUosQ0FBYWpIO0FBRlgsS0FBRCxDQUFUO0FBSUE7QUFDRDs7QUFFRCxTQUFTNEosV0FBVCxDQUFxQjVKLElBQXJCLEVBQTJCO0FBQUM7QUFDM0I7QUFDQSxTQUFPa0csNENBQUssQ0FBQ3NCLE1BQU4sQ0FBYyxTQUFReEgsSUFBSyxTQUEzQixDQUFQO0FBQ0E7O0FBRUQsVUFBVTZKLFFBQVYsQ0FBbUJwTyxNQUFuQixFQUEyQjtBQUMxQixNQUFJO0FBQ0gsVUFBTW9MLE1BQU0sR0FBRyxNQUFNQywrREFBSSxDQUFDOEMsV0FBRCxFQUFjbk8sTUFBTSxDQUFDdUUsSUFBckIsQ0FBekIsQ0FERyxDQUVIOztBQUNBcEUsV0FBTyxDQUFDQyxHQUFSLENBQVksc0JBQVosRUFBb0NKLE1BQU0sQ0FBQ3VFLElBQTNDO0FBQ0EsVUFBTStHLDhEQUFHLENBQUM7QUFDVHJMLFVBQUksRUFBRXlKLCtEQURHO0FBRVQ7QUFDQW5GLFVBQUksRUFBRTZHLE1BQU0sQ0FBQzdHO0FBSEosS0FBRCxDQUFUO0FBS0FwRSxXQUFPLENBQUNDLEdBQVIsQ0FBWSxxQkFBWixFQUFtQ2dMLE1BQW5DO0FBQ0EsR0FWRCxDQVVFLE9BQU9HLEdBQVAsRUFBWTtBQUNicEwsV0FBTyxDQUFDeUUsS0FBUixDQUFjLHdCQUFkLEVBQXdDMkcsR0FBeEM7QUFDQSxVQUFNRCw4REFBRyxDQUFDO0FBQ1RyTCxVQUFJLEVBQUUwSiwrREFERztBQUVUL0UsV0FBSyxFQUFFMkcsR0FBRyxDQUFDQyxRQUFKLENBQWFqSDtBQUZYLEtBQUQsQ0FBVDtBQUlBO0FBQ0Q7O0FBRUQsU0FBUzhKLFNBQVQsQ0FBbUI5SixJQUFuQixFQUF5QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQSxTQUFPa0csNENBQUssQ0FBQ2hLLElBQU4sQ0FBVyxPQUFYLEVBQW9COEQsSUFBcEIsQ0FBUCxDQUp3QixDQUlTO0FBQ2pDOztBQUVELFVBQVUrSixNQUFWLENBQWlCdE8sTUFBakIsRUFBeUI7QUFDeEIsTUFBSTtBQUNIO0FBQ0EsVUFBTW9MLE1BQU0sR0FBRyxNQUFNQywrREFBSSxDQUFDZ0QsU0FBRCxFQUFZck8sTUFBTSxDQUFDdUUsSUFBbkIsQ0FBekI7QUFDQXBFLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLDZCQUFaLEVBQTJDSixNQUFNLENBQUN1RSxJQUFsRDtBQUNBLFVBQU0rRyw4REFBRyxDQUFDO0FBQ1RyTCxVQUFJLEVBQUVnSiw4REFERyxDQUVUOztBQUZTLEtBQUQsQ0FBVDtBQUlBOUksV0FBTyxDQUFDQyxHQUFSLENBQVkscUJBQVosRUFBbUNnTCxNQUFuQztBQUNBLEdBVEQsQ0FTRSxPQUFPRyxHQUFQLEVBQVk7QUFDYnBMLFdBQU8sQ0FBQ3lFLEtBQVIsQ0FBYyxzQkFBZCxFQUFzQzJHLEdBQXRDO0FBQ0EsVUFBTUQsOERBQUcsQ0FBQztBQUNUckwsVUFBSSxFQUFFaUosOERBREc7QUFFVHRFLFdBQUssRUFBRTJHLEdBQUcsQ0FBQ0MsUUFBSixDQUFhakg7QUFGWCxLQUFELENBQVQ7QUFJQTtBQUNEOztBQUVELFNBQVNnSyxnQkFBVCxDQUEwQmhLLElBQTFCLEVBQWdDO0FBQy9CLFNBQU9rRyw0Q0FBSyxDQUFDMEIsR0FBTixDQUFVLGlCQUFWLEVBQTZCNUgsSUFBN0IsQ0FBUDtBQUNBOztBQUVELFVBQVVpSyxhQUFWLENBQXdCeE8sTUFBeEIsRUFBZ0M7QUFDL0IsTUFBSTtBQUNILFVBQU1vTCxNQUFNLEdBQUcsTUFBTUMsK0RBQUksQ0FBQ2tELGdCQUFELEVBQW1Cdk8sTUFBTSxDQUFDdUUsSUFBMUIsQ0FBekI7QUFDQXBFLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLHFCQUFaLEVBQW1DSixNQUFNLENBQUN1RSxJQUExQztBQUNBLFVBQU0rRyw4REFBRyxDQUFDO0FBQ1RyTCxVQUFJLEVBQUU0SixxRUFERztBQUVUdEYsVUFBSSxFQUFFNkcsTUFBTSxDQUFDN0c7QUFGSixLQUFELENBQVQ7QUFJQXBFLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLHFCQUFaLEVBQW1DZ0wsTUFBbkM7QUFDQSxHQVJELENBUUUsT0FBT0csR0FBUCxFQUFZO0FBQ2JwTCxXQUFPLENBQUN5RSxLQUFSLENBQWMsa0JBQWQsRUFBa0MyRyxHQUFsQztBQUNBLFVBQU1ELDhEQUFHLENBQUM7QUFDVHJMLFVBQUksRUFBRTZKLHFFQURHO0FBRVRsRixXQUFLLEVBQUUyRyxHQUFHLENBQUNDLFFBQUosQ0FBYWpIO0FBRlgsS0FBRCxDQUFUO0FBSUE7QUFDRDs7QUFFRCxTQUFTa0ssaUJBQVQsQ0FBMkJsSyxJQUEzQixFQUFpQztBQUNoQyxTQUFPa0csNENBQUssQ0FBQzBCLEdBQU4sQ0FBVSxrQkFBVixFQUE4QjVILElBQTlCLENBQVA7QUFDQTs7QUFFRCxVQUFVbUssY0FBVixDQUF5QjFPLE1BQXpCLEVBQWlDO0FBQ2hDLE1BQUk7QUFDSCxVQUFNb0wsTUFBTSxHQUFHLE1BQU1DLCtEQUFJLENBQUNvRCxpQkFBRCxFQUFvQnpPLE1BQU0sQ0FBQ3VFLElBQTNCLENBQXpCO0FBQ0FwRSxXQUFPLENBQUNDLEdBQVIsQ0FBWSxzQkFBWixFQUFvQ0osTUFBTSxDQUFDdUUsSUFBM0M7QUFDQSxVQUFNK0csOERBQUcsQ0FBQztBQUNUckwsVUFBSSxFQUFFK0osc0VBREc7QUFFVHpGLFVBQUksRUFBRTZHLE1BQU0sQ0FBQzdHO0FBRkosS0FBRCxDQUFUO0FBSUFwRSxXQUFPLENBQUNDLEdBQVIsQ0FBWSxzQkFBWixFQUFvQ2dMLE1BQXBDO0FBQ0EsR0FSRCxDQVFFLE9BQU9HLEdBQVAsRUFBWTtBQUNicEwsV0FBTyxDQUFDeUUsS0FBUixDQUFjLHNCQUFkLEVBQXNDMkcsR0FBdEM7QUFDQSxVQUFNRCw4REFBRyxDQUFDO0FBQ1RyTCxVQUFJLEVBQUVnSyxzRUFERztBQUVUckYsV0FBSyxFQUFFMkcsR0FBRyxDQUFDQyxRQUFKLENBQWFqSDtBQUZYLEtBQUQsQ0FBVDtBQUlBO0FBQ0Q7O0FBRUQsU0FBU29LLGlCQUFULENBQTJCcEssSUFBM0IsRUFBaUM7QUFDaEMsU0FBT2tHLDRDQUFLLENBQUNzQixNQUFOLENBQWMsa0JBQWlCeEgsSUFBSyxFQUFwQyxDQUFQLENBRGdDLENBQ2M7QUFDOUM7O0FBRUQsVUFBVXFLLGNBQVYsQ0FBeUI1TyxNQUF6QixFQUFpQztBQUNoQyxNQUFJO0FBQ0gsVUFBTW9MLE1BQU0sR0FBRyxNQUFNQywrREFBSSxDQUFDc0QsaUJBQUQsRUFBb0IzTyxNQUFNLENBQUN1RSxJQUEzQixDQUF6QjtBQUNBcEUsV0FBTyxDQUFDQyxHQUFSLENBQVksMkJBQVosRUFBeUNKLE1BQU0sQ0FBQ3VFLElBQWhEO0FBQ0EsVUFBTStHLDhEQUFHLENBQUM7QUFDVHJMLFVBQUksRUFBRXVJLHNFQURHO0FBRVRqRSxVQUFJLEVBQUU2RyxNQUFNLENBQUM3RztBQUZKLEtBQUQsQ0FBVDtBQUlBcEUsV0FBTyxDQUFDQyxHQUFSLENBQVksMkJBQVosRUFBeUNnTCxNQUF6QztBQUNBLEdBUkQsQ0FRRSxPQUFPRyxHQUFQLEVBQVk7QUFDYnBMLFdBQU8sQ0FBQ3lFLEtBQVIsQ0FBYywyQkFBZCxFQUEyQzJHLEdBQTNDO0FBQ0EsVUFBTUQsOERBQUcsQ0FBQztBQUNUckwsVUFBSSxFQUFFd0ksc0VBREc7QUFFVDdELFdBQUssRUFBRTJHLEdBQUcsQ0FBQ0MsUUFBSixDQUFhakg7QUFGWCxLQUFELENBQVQ7QUFJQTtBQUNEOztBQUNELFNBQVNzSyxXQUFULENBQXFCdEssSUFBckIsRUFBMEI7QUFDekIsU0FBT2tHLDRDQUFLLENBQUMwQixHQUFOLENBQVcsU0FBUTVILElBQUssRUFBeEIsQ0FBUDtBQUNBOztBQUNELFVBQVV1SyxRQUFWLENBQW1COU8sTUFBbkIsRUFBMEI7QUFDekIsTUFBSTtBQUNBLFVBQU1vTCxNQUFNLEdBQUcsTUFBTUMsK0RBQUksQ0FBQ3dELFdBQUQsRUFBYzdPLE1BQU0sQ0FBQ3VFLElBQXJCLENBQXpCO0FBQ0hwRSxXQUFPLENBQUNDLEdBQVIsQ0FBWSxzQkFBWixFQUFvQ0osTUFBTSxDQUFDdUUsSUFBM0M7QUFDQSxVQUFNK0csOERBQUcsQ0FBQztBQUNUckwsVUFBSSxFQUFFaUksZ0VBREc7QUFFVDNELFVBQUksRUFBRTZHLE1BQU0sQ0FBQzdHO0FBRkosS0FBRCxDQUFUO0FBSUFwRSxXQUFPLENBQUNDLEdBQVIsQ0FBWSxzQkFBWixFQUFvQ2dMLE1BQXBDO0FBQ0EsR0FSRCxDQVFDLE9BQU9HLEdBQVAsRUFBWTtBQUNacEwsV0FBTyxDQUFDeUUsS0FBUixDQUFjLDhCQUFkLEVBQThDMkcsR0FBOUM7QUFDQSxVQUFNRCw4REFBRyxDQUFDO0FBQ1RyTCxVQUFJLEVBQUVrSSxnRUFERztBQUVUdkQsV0FBSyxFQUFFMkcsR0FBRyxDQUFDQyxRQUFKLENBQWFqSDtBQUZYLEtBQUQsQ0FBVDtBQUlBO0FBQ0Q7O0FBQ0QsVUFBVXdLLGFBQVYsR0FBeUI7QUFDeEIsUUFBTWxDLHFFQUFVLENBQUM1RSxnRUFBRCxFQUFvQjZHLFFBQXBCLENBQWhCO0FBQ0E7O0FBQ0QsVUFBVUUsbUJBQVYsR0FBZ0M7QUFDL0IsUUFBTW5DLHFFQUFVLENBQUN0RSxzRUFBRCxFQUEwQnFHLGNBQTFCLENBQWhCO0FBQ0E7O0FBRUQsVUFBVUssa0JBQVYsR0FBK0I7QUFDOUIsUUFBTXBDLHFFQUFVLENBQUNqRCxxRUFBRCxFQUF5QjRFLGFBQXpCLENBQWhCO0FBQ0E7O0FBRUQsVUFBVVUsbUJBQVYsR0FBZ0M7QUFDL0IsUUFBTXJDLHFFQUFVLENBQUM5QyxzRUFBRCxFQUEwQjJFLGNBQTFCLENBQWhCO0FBQ0E7O0FBRUQsVUFBVVMsbUJBQVYsR0FBZ0M7QUFDL0IsUUFBTXRDLHFFQUFVLENBQUMxRCxzRUFBRCxFQUEwQjBFLGNBQTFCLENBQWhCO0FBQ0E7O0FBRUQsVUFBVXVCLGVBQVYsR0FBNEI7QUFDM0IsUUFBTXZDLHFFQUFVLENBQUN6RSxtRUFBRCxFQUF1QjRGLFVBQXZCLENBQWhCO0FBQ0E7O0FBRUQsVUFBVXFCLFdBQVYsR0FBd0I7QUFDdkIsUUFBTXhDLHFFQUFVLENBQUN2RCw2REFBRCxFQUFpQjRFLE1BQWpCLENBQWhCO0FBQ0E7O0FBRUQsVUFBVW9CLGFBQVYsR0FBMEI7QUFDekIsUUFBTXpDLHFFQUFVLENBQUNwRCwrREFBRCxFQUFtQjJFLFFBQW5CLENBQWhCO0FBQ0E7O0FBRUQsVUFBVW1CLFVBQVYsR0FBdUI7QUFBRTtBQUN4QixRQUFNMUMscUVBQVUsQ0FBQ25FLDZEQUFELEVBQWlCOEUsS0FBakIsQ0FBaEIsQ0FEc0IsQ0FDa0I7QUFDeEM7O0FBRUQsVUFBVWdDLFdBQVYsR0FBd0I7QUFBRTtBQUN6QixRQUFNM0MscUVBQVUsQ0FBQ2hFLDhEQUFELEVBQWtCNkUsTUFBbEIsQ0FBaEIsQ0FEdUIsQ0FDbUI7QUFDMUM7O0FBRUQsVUFBVStCLFdBQVYsR0FBd0I7QUFBRTtBQUN6QixRQUFNNUMscUVBQVUsQ0FBQzdELDhEQUFELEVBQWtCc0YsTUFBbEIsQ0FBaEIsQ0FEdUIsQ0FDbUI7QUFDMUM7O0FBRWMsVUFBVXJELFFBQVYsR0FBcUI7QUFDbkMsUUFBTUgsOERBQUcsQ0FBQyxDQUNSQywrREFBSSxDQUFDZ0UsYUFBRCxDQURJLEVBRVRoRSwrREFBSSxDQUFDaUUsbUJBQUQsQ0FGSyxFQUdUakUsK0RBQUksQ0FBQ2tFLGtCQUFELENBSEssRUFJVGxFLCtEQUFJLENBQUNtRSxtQkFBRCxDQUpLLEVBS1RuRSwrREFBSSxDQUFDb0UsbUJBQUQsQ0FMSyxFQU1UcEUsK0RBQUksQ0FBQ3FFLGVBQUQsQ0FOSyxFQU9UckUsK0RBQUksQ0FBQ3NFLFdBQUQsQ0FQSyxFQVFUdEUsK0RBQUksQ0FBQ3VFLGFBQUQsQ0FSSyxFQVNUdkUsK0RBQUksQ0FBQ3dFLFVBQUQsQ0FUSyxFQVVUeEUsK0RBQUksQ0FBQ3lFLFdBQUQsQ0FWSyxFQVdUekUsK0RBQUksQ0FBQzBFLFdBQUQsQ0FYSyxDQUFELENBQVQ7QUFhQSxDOzs7Ozs7Ozs7Ozs7QUNyV0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7Q0FFQTs7QUFDQTtBQUNBO0NBSUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUMsY0FBYyxHQUFJQyxPQUFELElBQWE7QUFDbkN4UCxTQUFPLENBQUNDLEdBQVIsQ0FBWSw0QkFBWixFQUEwQ3VQLE9BQTFDO0FBQ0EsUUFBTUMsY0FBYyxHQUFHQyxpREFBb0IsRUFBM0MsQ0FGbUMsQ0FFVzs7QUFDOUMsUUFBTUMsV0FBVyxHQUFHLENBQUNGLGNBQUQsQ0FBcEI7QUFDQSxRQUFNRyxRQUFRLEdBQ1osUUFDSUMsU0FESixHQUVJQyxvRkFBbUIsQ0FBQ0MsNkRBQWUsQ0FBQyxHQUFHSixXQUFKLENBQWhCLENBSHpCO0FBSUEsUUFBTUssS0FBSyxHQUFHQyx5REFBVyxDQUFDM0wsaURBQUQsRUFBVXNMLFFBQVYsQ0FBekI7QUFDQUksT0FBSyxDQUFDRSxRQUFOLEdBQWlCVCxjQUFjLENBQUNVLEdBQWYsQ0FBbUJ6Riw4Q0FBbkIsQ0FBakI7QUFDQSxTQUFPc0YsS0FBUDtBQUNBLENBWEQ7O0FBWUEsTUFBTXZRLE9BQU8sR0FBRzJRLHdFQUFhLENBQzNCYixjQUQyQixFQUUzQjtBQUNBO0FBQUNjLE9BQUs7QUFBTixDQUgyQixDQUE3QjtBQU1lNVEsc0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQ0Esa0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsK0MiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCAnYW50ZC9kaXN0L2FudGQuY3NzJztcblxuaW1wb3J0IHdyYXBwZXIgZnJvbSAnLi4vc3RvcmUvY29uZmlndXJlU3RvcmUnO1xuXG5jb25zdCBOb2RlQmlyZCA9ICh7IENvbXBvbmVudCB9KSA9PiAoXG5cdFx0PD5cblx0XHRcdDxIZWFkPlxuXHRcdFx0XHQ8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuXHRcdFx0XHQ8dGl0bGU+Tm9kZUJpcmQ8L3RpdGxlPlxuXHRcdFx0PC9IZWFkPlxuXHRcdFx0PENvbXBvbmVudCAvPlxuXHRcdDwvPlxuKTtcblxuTm9kZUJpcmQucHJvcFR5cGVzID0ge1xuXHRDb21wb25lbnQ6IFByb3BUeXBlcy5lbGVtZW50VHlwZS5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgoTm9kZUJpcmQpOyIsIi8vaW1wb3J0IHsgc3RvcmUgfSBmcm9tICduZXh0L2Rpc3QvYnVpbGQvb3V0cHV0L3N0b3JlJ1xyXG5pbXBvcnQge0hZRFJBVEV9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcidcclxuaW1wb3J0IHtjb21iaW5lUmVkdWNlcnN9IGZyb20gJ3JlZHV4J1xyXG5pbXBvcnQgdXNlciBmcm9tICcuL3VzZXInXHJcbmltcG9ydCBwb3N0IGZyb20gJy4vcG9zdCdcclxuXHJcbi8vIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuLy8gXHR1c2VyOiB7fSxcclxuLy8gXHRwb3N0OiB7fSxcclxuLy8gfVxyXG5cclxuLy8g67mE64+Z6riwIOyVoeyFmCDsg53shLHquLBcclxuXHJcbi8vIOyVoeyFmCDsg53shLHquLBcclxuLypjb25zdCBjaGFuZ2VOaWNrbmFtZSA9IChkYXRhKSA9PiB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHR5cGU6ICdDSEFOR0VfTklDS05BTUUnLFxyXG5cdFx0ZGF0YSxcclxuXHR9XHJcbn1cclxuY2hhbmdlTmlja25hbWUoJ3ZpdGFtaW43NzcnKSovXHJcbi8qe1xyXG5cdFx0dHlwZTogJ0NIQU5HRV9OSUNLTkFNRScsXHJcblx0XHRkYXRhOiAndml0YW1pbjc3NycsXHJcbn0qL1xyXG5cclxuLypzdG9yZS5kaXNwYXRjaChjaGFuZ2VOaWNrbmFtZSgndml0YW1pbjc3Nzc3NzcnKSkqL1xyXG5cclxuLy8g66as65OA7IScIDog7J207KCE7IOB7YOc7JmAIOyVoeyFmOydhCDthrXtlbQg64uk7J2MIOyDge2DnOulvCDrp4zrk6TslrTrgrTripQg7ZWo7IiYXHJcbi8qIENTUiBSRURVQ0VSXHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuXHQvLyB1c2VyIOydtOuLiOyFnOyKpO2FjOydtO2KuCwgcG9zdCDsnbTri4jshZzsiqTthYzsnbTtirgg7Lu067CU7J24IOumrOuTgOyEnOqwgCDslYzslYTshJwg7ZWc67Cp7JeQIOustuyWtOykjFxyXG5cdGluZGV4OiAoc3RhdGUgPSB7fSwgYWN0aW9uKSA9PiB7XHJcblx0XHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRcdGNhc2UgSFlEUkFURTpcclxuXHRcdFx0XHRjb25zb2xlLmxvZygnSFlEUkFURScsIGFjdGlvbilcclxuXHRcdFx0XHRyZXR1cm4gey4uLnN0YXRlLCAuLi5hY3Rpb24ucGF5bG9hZH1cclxuXHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRyZXR1cm4gc3RhdGVcclxuXHRcdH1cclxuXHR9LFxyXG5cdHVzZXIsXHJcblx0cG9zdCxcclxufSkqL1xyXG5cclxuLy8gU1NSXHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHsgLy8gKOydtOyghOyDge2DnCBzdGF0ZSwg7JWh7IWYKSA9PiDri6TsnYzsg4Htg5xcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIEhZRFJBVEU6XHJcblx0XHRcdGNvbnNvbGUubG9nKCdyZWR1Y2VyIHJvb3RSZWR1Y2VyIEhZRFJBVEUgOjogJywgYWN0aW9uKVxyXG5cdFx0XHRyZXR1cm4gYWN0aW9uLnBheWxvYWRcclxuXHRcdGRlZmF1bHQ6IHtcclxuXHRcdFx0Y29uc3QgY29tYmluZWRSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuXHRcdFx0XHR1c2VyLFxyXG5cdFx0XHRcdHBvc3QsXHJcblx0XHRcdH0pXHJcblx0XHRcdHJldHVybiBjb21iaW5lZFJlZHVjZXIoc3RhdGUsIGFjdGlvbilcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbi8qcmVkdWNlcnMvaW5kZXguanMg67O07Iuc66m0IHVzZXLrnpEgcG9zdOulvCDrtojrn6zsmYDshJwg7ZWp7LmY6rOgIOyeiOyKteuLiOuLpC5cclxucm9vdFJlZHVjZXLqsIAgc3RhdGXqs6AsIHVzZXLsmYAgcG9zdOuKlCDqsIHqsIEgc3RhdGUudXNlciwgc3RhdGUucG9zdOqwgCDrkKnri4jri6QuXHJcbnVzZXIuanPsnZggbWXripQgc3RhdGUudXNlci5tZeqwgCDrkKnri4jri6QuKi9cclxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXJcclxuIiwiLy9pbXBvcnQgc2hvcnRJZCBmcm9tICdzaG9ydGlkJyBmcm9udFxyXG5pbXBvcnQgcHJvZHVjZSBmcm9tICdpbW1lcidcclxuLy9pbXBvcnQgZmFrZXIgZnJvbSAnZmFrZXInIGZyb250XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG5cdG1haW5Qb3N0czogW10sIC8vIOqyjOyLnOusvCDsl6zrn6zqsJxcclxuXHRzaW5nbGVQb3N0OiBudWxsLCAvLyDqsozsi5zrrLwg7ZWY64KY66eMXHJcblx0aW1hZ2VQYXRoczogW10sIC8vIOydtOuvuOyngCDqsr3roZzrk6TsnbQg7KCA7J6l65CoXHJcblx0aGFzTW9yZVBvc3RzOiB0cnVlLCAvLyDrjZQg66eO7J2AIOqyjOyLnOusvCDqsIDsoLjsmKTquLBcclxuXHRsaWtlUG9zdExvYWRpbmc6IGZhbHNlLCAvLyDrnbzsnbTtgawg66Gc65Oc7KSRIOuhnOuUqVxyXG5cdGxpa2VQb3N0RG9uZTogZmFsc2UsIC8vIOudvOydtO2BrCDsmYTro4ztlojsnYTrlYwgdHJ1ZSDrs4DtmZhcclxuXHRsaWtlUG9zdEVycm9yOiBudWxsLFxyXG5cdHJldHdlZXRMb2FkaW5nOiBmYWxzZSwgLy8g66as7Yq47JyXIOuhnOuTnOykkSDroZzrlKlcclxuXHRyZXR3ZWV0RG9uZTogZmFsc2UsIC8vIOumrO2KuOyclyDsmYTro4zspJEg66Gc65SpXHJcblx0cmV0d2VldEVycm9yOiBudWxsLFxyXG5cdHVubGlrZVBvc3RMb2FkaW5nOiBmYWxzZSwgLy8g7Ja465287J207YGsIOuhnOuTnCDspJEg66Gc65SpXHJcblx0dW5saWtlUG9zdERvbmU6IGZhbHNlLCAvLyDslrjrnbzsnbTtgawg7JmE66OM7ZaI7J2E65WMIHRydWUg67OA7ZmYXHJcblx0dW5saWtlUG9zdEVycm9yOiBudWxsLFxyXG5cdHVwbG9hZEltYWdlc0xvYWRpbmc6IGZhbHNlLCAvLyDsnbTrr7jsp4Ag66Gc65OcIOykkSDroZzrlKlcclxuXHR1cGxvYWRJbWFnZXNEb25lOiBmYWxzZSwgLy8g7J2066+47KeAIOuhnOuTnCDsmYTro4ztlojsnYTrlYwgdHJ1ZSDrs4DtmZhcclxuXHR1cGxvYWRJbWFnZXNFcnJvcjogbnVsbCxcclxuXHRsb2FkUG9zdHNMb2FkaW5nOiBmYWxzZSwgLy8g7ZmU66m0IOuhnOuTnOykkSDroZzrlKlcclxuXHRsb2FkUG9zdHNEb25lOiBmYWxzZSwgLy8g7ZmU66m0IOuhnOuTnCDsmYTro4zrkJjsl4jsnYTrlYwgdHJ1ZSDrs4DtmZhcclxuXHRsb2FkUG9zdHNFcnJvcjogbnVsbCxcclxuXHRsb2FkUG9zdExvYWRpbmc6IGZhbHNlLCAvLyDqsozsi5zquIAg66Gc65Oc7KSRIOuhnOuUqVxyXG5cdGxvYWRQb3N0RG9uZTogZmFsc2UsIC8vIOqyjOyLnOq4gCDroZzrk5wg7JmE66OM65CY7JeI7J2E65WMIHRydWUg67OA7ZmYXHJcblx0bG9hZFBvc3RFcnJvcjogbnVsbCxcclxuXHRhZGRQb3N0TG9hZGluZzogZmFsc2UsIC8vIOqyjOyLnOusvCDrk7HroZ3spJEg66Gc65SpXHJcblx0YWRkUG9zdERvbmU6IGZhbHNlLCAvLyDqsozsi5zrrLwg7LaU6rCA6rCAIOyZhOujjOuQmOyXiOydhOuVjCB0cnVlIOuzgO2ZmFxyXG5cdGFkZFBvc3RFcnJvcjogbnVsbCxcclxuXHRyZW1vdmVQb3N0TG9hZGluZzogZmFsc2UsIC8vIOqyjOyLnOusvCDsgq3soJzspJEg66Gc65SpXHJcblx0cmVtb3ZlUG9zdERvbmU6IGZhbHNlLCAvLyDqsozsi5zrrLwg7IKt7KCc6rCAIOyZhOujjOuQmOyXiOydhOuVjCB0cnVlIOuzgO2ZmFxyXG5cdHJlbW92ZVBvc3RFcnJvcjogbnVsbCxcclxuXHRhZGRDb21tZW50TG9hZGluZzogZmFsc2UsIC8vIOuMk+q4gCDrk7HroZ3spJEg66Gc65SpXHJcblx0YWRkQ29tbWVudERvbmU6IGZhbHNlLCAvLyDqsozsi5zrrLwg7LaU6rCA6rCAIOyZhOujjOuQmOyXiOydhOuVjCB0cnVlIOuzgO2ZmFxyXG5cdGFkZENvbW1lbnRFcnJvcjogbnVsbCxcclxufVxyXG4vLyDsnbTrtoDrtoTsnYQg7IKs7Jqp7ZW07IScIOustO2VnCDsiqTtgazroaTrp4HsnYQg66eM65Ok6rKDIGZyb250XHJcbi8qZXhwb3J0IGNvbnN0IGdlbmVyYXRlRHVtbXlQb3N0ID0gKG51bWJlcikgPT4gQXJyYXkobnVtYmVyKS5maWxsKCkubWFwKCgpID0+ICh7XHJcblx0aWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuXHRVc2VyOiB7XHJcblx0XHRpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG5cdFx0bmlja25hbWU6IGZha2VyLm5hbWUuZmluZE5hbWUoKSxcclxuXHR9LFxyXG5cdGNvbnRlbnQ6IGZha2VyLmxvcmVtLnBhcmFncmFwaCgpLFxyXG5cdEltYWdlczogW3tcclxuXHRcdHNyYzogZmFrZXIuaW1hZ2UuaW1hZ2UoKSxcclxuXHR9XSxcclxuXHRDb21tZW50czogW3tcclxuXHRcdFVzZXI6IHtcclxuXHRcdFx0aWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuXHRcdFx0bmlja25hbWU6IGZha2VyLm5hbWUuZmluZE5hbWUoKSxcclxuXHRcdH0sXHJcblx0XHRjb250ZW50OiBmYWtlci5sb3JlbS5zZW50ZW5jZSgpLFxyXG5cdH1dLFxyXG59KSkqL1xyXG5cclxuLy/qsozsi5zquIAg7JWh7IWYXHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX1JFUVVFU1QgPSAnIExPQURfUE9TVFNfUkVRVUVTVCc7IC8vIO2ZlOuptOydhCDroZzrlKntlZjrqbQg67CU66GcIExPQURfUE9TVFNfUkVRVUVTVCDrpbwg7Zi47Lac7ZW07KSE6rKDXHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX1NVQ0NFU1MgPSAnIExPQURfUE9TVFNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX0ZBSUxVUkUgPSAnIExPQURfUE9TVFNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUX1JFUVVFU1QgPSAnTE9BRF9QT1NUX1JFUVVFU1QnIC8vIOqyjOyLnOusvOydhCDroZzrlKntlZjrqbQg67CU66GcIExPQURfUE9TVF9SRVFVRVNUIOulvCDtmLjstpztlbTspITqsoNcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVF9TVUNDRVNTID0gJ0xPQURfUE9TVF9TVUNDRVNTJ1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUX0ZBSUxVUkUgPSAnTE9BRF9QT1NUX0ZBSUxVUkUnXHJcblxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfUkVRVUVTVCA9ICdBRERfUE9TVF9SRVFVRVNUJzsgLy8g67OA7IiY66GcIOuUsOuhnCDrp4zrk6TslrTspJjslbwg7KSR6rCE7JeQIOyYpO2DgOqwgOuCmOuKlCDsnbzsnYQg66eJ7J2EIOyImCDsnojri6RcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1NVQ0NFU1MgPSAnQUREX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9GQUlMVVJFID0gJ0FERF9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExJS0VfUE9TVF9SRVFVRVNUID0gJ0xJS0VfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExJS0VfUE9TVF9TVUNDRVNTID0gJ0xJS0VfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExJS0VfUE9TVF9GQUlMVVJFID0gJ0xJS0VfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBVUExPQURfSU1BR0VTX1JFUVVFU1QgPSAnVVBMT0FEX0lNQUdFU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFVQTE9BRF9JTUFHRVNfU1VDQ0VTUyA9ICdVUExPQURfSU1BR0VTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgVVBMT0FEX0lNQUdFU19GQUlMVVJFID0gJ1VQTE9BRF9JTUFHRVNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgVU5MSUtFX1BPU1RfUkVRVUVTVCA9ICdVTkxJS0VfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFVOTElLRV9QT1NUX1NVQ0NFU1MgPSAnVU5MSUtFX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9GQUlMVVJFID0gJ1VOTElLRV9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1JFUVVFU1QgPSAnUkVNT1ZFX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9TVUNDRVNTID0gJ1JFTU9WRV9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfRkFJTFVSRSA9ICdSRU1PVkVfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9SRVFVRVNUID0gJ0FERF9DT01NRU5UX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfU1VDQ0VTUyA9ICdBRERfQ09NTUVOVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX0ZBSUxVUkUgPSAnQUREX0NPTU1FTlRfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgUkVUV0VFVF9SRVFVRVNUID0gJ1JFVFdFRVRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBSRVRXRUVUX1NVQ0NFU1MgPSAnUkVUV0VFVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFJFVFdFRVRfRkFJTFVSRSA9ICdSRVRXRUVUX0ZBSUxVUkUnXHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0lNQUdFID0gJ1JFTU9WRV9JTUFHRSc7IC8vIOuPmeq4sCDsmLXshZjsnYAg7ZWY64KY66eMIOunjOuTpOyWtOuPhCDrkJzri6RcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRQb3N0ID0gKGRhdGEpID0+ICh7XHJcblx0dHlwZTogQUREX1BPU1RfUkVRVUVTVCxcclxuXHRkYXRhLFxyXG59KVxyXG5cclxuLy8gZHluYW1pYyBhY3Rpb24gY3JlYXRlXHJcbmV4cG9ydCBjb25zdCBhZGRDb21tZW50ID0gKGRhdGEpID0+ICh7XHJcblx0dHlwZTogQUREX0NPTU1FTlRfUkVRVUVTVCxcclxuXHRkYXRhLFxyXG59KVxyXG5cclxuLyogZnJvbnQgZHVtbXlcclxuY29uc3QgZHVtbXlQb3N0ID0gKGRhdGEpID0+ICh7XHJcblx0aWQ6IGRhdGEuaWQsXHJcblx0Y29udGVudDogZGF0YS5jb250ZW50LFxyXG5cdFVzZXI6IHtcclxuXHRcdGlkOiAxLFxyXG5cdFx0bmlja25hbWU6ICfruYTtg4Drr7wnLFxyXG5cdH0sXHJcblx0SW1hZ2VzOiBbXSxcclxuXHRDb21tZW50czogW10sXHJcbn0pXHJcbiovXHJcblxyXG4vKiBmcm9udCBkdW1teVxyXG5jb25zdCBkdW1teUNvbW1lbnQgPSAoZGF0YSkgPT4gKHtcclxuXHRpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG5cdGNvbnRlbnQ6IGRhdGEsXHJcblx0VXNlcjoge1xyXG5cdFx0aWQ6IDEsXHJcblx0XHRuaWNrbmFtZTogJ+u5hO2DgOuvvCcsXHJcblx0fVxyXG59KSovXHJcbi8vIOydtOyghCDsg4Htg5zrpbwg7JWh7IWY7J2EIO2Gte2VtCDri6TsnYwg7IOB7YOc66GcIOunjOuTpOyWtOuCtOuKlCDtlajsiJhcclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcclxuXHQvLyBpbW1lciDsgqzsmqnsi5wgc3RhdGUg66W8IGRyYWZ0IOuhnCDqtZDssrTtlbTso7zrqbAsIHN3aXRjaCDrrLjsnbjqsbgg7J247Iud7ZWY6rOgIGJyZWFrIOulvCDquYzrqLnsp4Drp5DsnpBcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIExPQURfUE9TVF9SRVFVRVNUOlxyXG5cdFx0XHRkcmFmdC5sb2FkUG9zdExvYWRpbmcgPSB0cnVlXHJcblx0XHRcdGRyYWZ0LmxvYWRQb3N0RG9uZSA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LmxvYWRQb3N0RXJyb3IgPSBudWxsXHJcblx0XHRcdGNvbnNvbGUubG9nKCdyZWR1Y2VyIExPQURfUE9TVF9SRVFVRVNUIOyalOyyrTo6ICcpXHJcblx0XHRcdGJyZWFrXHJcblx0XHRjYXNlIExPQURfUE9TVF9TVUNDRVNTOlxyXG5cdFx0XHRkcmFmdC5zaW5nbGVQb3N0ID0gYWN0aW9uLmRhdGEgLy8g7ZWY64KY7J2YIOqyjOyLnOusvOunjCDroZzrk5xcclxuXHRcdFx0ZHJhZnQubG9hZFBvc3RMb2FkaW5nID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQubG9hZFBvc3REb25lID0gdHJ1ZVxyXG5cdFx0XHRjb25zb2xlLmxvZygncmVkdWNlciBMT0FEX1BPU1RfU1VDQ0VTUyDshLHqs7U6OiAnKVxyXG5cdFx0XHRicmVha1xyXG5cdFx0Y2FzZSBMT0FEX1BPU1RfRkFJTFVSRTpcclxuXHRcdFx0ZHJhZnQubG9hZFBvc3RMb2FkaW5nID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQubG9hZFBvc3RFcnJvciA9IGFjdGlvbi5lcnJvclxyXG5cdFx0XHRjb25zb2xlLmVycm9yKCdyZWR1Y2VyIExPQURfUE9TVF9GQUlMVVJFIOyLpO2MqDo6ICcsIGFjdGlvbi5lcnJvcilcclxuXHRcdGNhc2UgUkVNT1ZFX0lNQUdFOlxyXG5cdFx0XHRkcmFmdC5pbWFnZVBhdGhzID0gZHJhZnQuaW1hZ2VQYXRocy5maWx0ZXIoKHYsIGkpID0+IGkgIT09IGFjdGlvbi5kYXRhKVxyXG5cdFx0XHRjb25zb2xlLmxvZygncmVkdWNlciBSRU1PVkVfSU1BR0Ug7ISx6rO1JylcclxuXHRcdFx0YnJlYWtcclxuXHRcdGNhc2UgUkVUV0VFVF9SRVFVRVNUOlxyXG5cdFx0XHRkcmFmdC5yZXR3ZWV0TG9hZGluZyA9IHRydWVcclxuXHRcdFx0ZHJhZnQucmV0d2VldERvbmUgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC5yZXR3ZWV0RXJyb3IgPSBudWxsXHJcblx0XHRcdGNvbnNvbGUubG9nKCdyZWR1Y2VyIFJFVFdFRVRfUkVRVUVTVCDsmpTssq06OicpXHJcblx0XHRcdGJyZWFrXHJcblx0XHRjYXNlIFJFVFdFRVRfU1VDQ0VTUzoge1xyXG5cdFx0XHRkcmFmdC5yZXR3ZWV0TG9hZGluZyA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LnJldHdlZXREb25lID0gdHJ1ZVxyXG5cdFx0XHRkcmFmdC5tYWluUG9zdHMudW5zaGlmdChhY3Rpb24uZGF0YSkgLy8g66as7Yq47JyX65CcIOqyjOyLnOq4gCDrqZTsnbjtj6zsiqTtirjsl5Ag7LaU6rCAXHJcblx0XHRcdGNvbnNvbGUubG9nKCdyZWR1Y2VyIFJFVFdFRVRfU1VDQ0VTUyDshLHqs7U6OicpXHJcblx0XHRcdGJyZWFrXHJcblx0XHR9XHJcblx0XHRjYXNlIFJFVFdFRVRfRkFJTFVSRTpcclxuXHRcdFx0ZHJhZnQucmV0d2VldExvYWRpbmcgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC5yZXR3ZWV0RXJyb3IgPSBhY3Rpb24uZXJyb3JcclxuXHRcdFx0Y29uc29sZS5lcnJvcigncmVkdWNlciBSRVRXRUVUX0ZBSUxVUkUg7Iuk7YyoOjonLCBhY3Rpb24uZGF0YSlcclxuXHRcdFx0YnJlYWtcclxuXHRcdGNhc2UgTElLRV9QT1NUX1JFUVVFU1Q6XHJcblx0XHRcdGRyYWZ0Lmxpa2VQb3N0TG9hZGluZyA9IHRydWU7XHJcblx0XHRcdGRyYWZ0Lmxpa2VQb3N0RG9uZSA9IGZhbHNlO1xyXG5cdFx0XHRkcmFmdC5saWtlUG9zdEVycm9yID0gbnVsbDtcclxuXHRcdFx0Y29uc29sZS5sb2coJ3JlZHVjZXIgTElLRV9QT1NUX1JFUVVFU1Qg7JqU7LKtOjonKVxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgTElLRV9QT1NUX1NVQ0NFU1M6IHtcclxuXHRcdFx0Ly8gbWFpblBvc3RzIOyXkOyEnCBpZCDqsIAg7JWh7IWY642w7J207YSw7Y+s7Iqk7Yq47JWE7J2065SU66W8IOywvuyVhOyEnFxyXG5cdFx0XHRjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLlBvc3RJZCk7XHJcblx0XHRcdC8vIOqyjOyLnOq4gCDsoovslYTsmpQg64iE66W4IOyCrOuejOuTpOyXkOqyjCDsgqzsmqnsnpAg7JWE7J2065SU66W8IOuEo+yWtOykgOuLpFxyXG5cdFx0XHRwb3N0Lkxpa2Vycy5wdXNoKHtpZDogYWN0aW9uLmRhdGEuVXNlcklkfSk7XHJcblx0XHRcdGRyYWZ0Lmxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG5cdFx0XHRkcmFmdC5saWtlUG9zdERvbmUgPSB0cnVlO1xyXG5cdFx0XHRjb25zb2xlLmxvZygncmVkdWNlciBMSUtFX1BPU1RfU1VDQ0VTUyDshLHqs7U6OicpXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBMSUtFX1BPU1RfRkFJTFVSRTpcclxuXHRcdFx0ZHJhZnQubGlrZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcblx0XHRcdGRyYWZ0Lmxpa2VQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoJ3JlZHVjZXIgTElLRV9QT1NUX0ZBSUxVUkUg7Iuk7YyoOjo6JywgYWN0aW9uLmVycm9yKVxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgVU5MSUtFX1BPU1RfUkVRVUVTVDpcclxuXHRcdFx0ZHJhZnQudW5saWtlUG9zdExvYWRpbmcgPSB0cnVlO1xyXG5cdFx0XHRkcmFmdC51bmxpa2VQb3N0RG9uZSA9IGZhbHNlO1xyXG5cdFx0XHRkcmFmdC51bmxpa2VQb3N0RXJyb3IgPSBudWxsO1xyXG5cdFx0XHRjb25zb2xlLmxvZygncmVkdWNlciBVTkxJS0VfUE9TVF9SRVFVRVNUIOyalOyyrTo6JylcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFVOTElLRV9QT1NUX1NVQ0NFU1M6IHtcclxuXHRcdFx0Y29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5Qb3N0SWQpO1xyXG5cdFx0XHRwb3N0Lkxpa2VycyA9IHBvc3QuTGlrZXJzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEuVXNlcklkKTtcclxuXHRcdFx0ZHJhZnQudW5saWtlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuXHRcdFx0ZHJhZnQudW5saWtlUG9zdERvbmUgPSB0cnVlO1xyXG5cdFx0XHRjb25zb2xlLmxvZygncmVkdWNlciBVTkxJS0VfUE9TVF9TVUNDRVNTIOyEseqztTo6JylcclxuXHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblx0XHRjYXNlIFVOTElLRV9QT1NUX0ZBSUxVUkU6XHJcblx0XHRcdGRyYWZ0LnVubGlrZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcblx0XHRcdGRyYWZ0LnVubGlrZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuXHRcdFx0Y29uc29sZS5lcnJvcigncmVkdWNlciBVTkxJS0VfUE9TVF9GQUlMVVJFIOyLpO2MqDo6OicsIGFjdGlvbi5lcnJvcilcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFVQTE9BRF9JTUFHRVNfUkVRVUVTVDpcclxuXHRcdFx0ZHJhZnQudXBsb2FkSW1hZ2VzTG9hZGluZyA9IHRydWVcclxuXHRcdFx0ZHJhZnQudXBsb2FkSW1hZ2VzRG9uZSA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LnVwbG9hZEltYWdlc0Vycm9yID0gbnVsbFxyXG5cdFx0XHRjb25zb2xlLmxvZygncmVkdWNlciBVUExPQURfSU1BR0VTX1JFUVVFU1Qg7JqU7LKtOjonKVxyXG5cdFx0XHRicmVha1xyXG5cdFx0Y2FzZSBVUExPQURfSU1BR0VTX1NVQ0NFU1M6XHJcblx0XHRcdGRyYWZ0LmltYWdlUGF0aHMgPSBhY3Rpb24uZGF0YVxyXG5cdFx0XHRkcmFmdC51cGxvYWRJbWFnZXNMb2FkaW5nID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQudXBsb2FkSW1hZ2VzRG9uZSA9IHRydWVcclxuXHRcdFx0Y29uc29sZS5sb2coJ3JlZHVjZXIgVVBMT0FEX0lNQUdFU19TVUNDRVNTIOyEseqztTo6JylcclxuXHRcdFx0YnJlYWtcclxuXHRcdGNhc2UgVVBMT0FEX0lNQUdFU19GQUlMVVJFOlxyXG5cdFx0XHRkcmFmdC51cGxvYWRJbWFnZXNMb2FkaW5nID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQudXBsb2FkSW1hZ2VzRXJyb3IgPSBhY3Rpb24uZXJyb3JcclxuXHRcdFx0Y29uc29sZS5lcnJvcigncmVkdWNlciBVUExPQURfSU1BR0VTX0ZBSUxVUkUg7Iuk7YyoOjo6JywgYWN0aW9uLmVycm9yKVxyXG5cdFx0XHRicmVha1xyXG5cdFx0Y2FzZSBMT0FEX1BPU1RTX1JFUVVFU1Q6XHJcblx0XHRcdGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSB0cnVlO1xyXG5cdFx0XHRkcmFmdC5sb2FkUG9zdHNEb25lID0gZmFsc2U7XHJcblx0XHRcdGRyYWZ0LmxvYWRQb3N0c0Vycm9yID0gbnVsbDtcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIExPQURfUE9TVFNfU1VDQ0VTUzpcclxuXHRcdFx0ZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LmxvYWRQb3N0c0RvbmUgPSB0cnVlXHJcblx0XHRcdC8vIGFjdGlvbi5kYXRhIOyXkCBkdW1teSBkYXRhIOqwgCDrk6TslrTsnojsnYTqsoPsnbTrqbAsIOq4sOyhtOuNsOydtO2EsOyZgCDtlanss5Dso7zripTqsoNcclxuXHRcdFx0Ly8gY29uY2F0IOydhCDtlaDrlZAg7ZWt7IOBIOyVnuyXkCDrjIDsnoXsnYQg7ZW07KSY7JW87ZWc64ukIOq3uOuemOyVvCDtlanss5Dsp5BcclxuXHRcdFx0Ly9kcmFmdC5tYWluUG9zdHMgPSBhY3Rpb24uZGF0YS5jb25jYXQoZHJhZnQubWFpblBvc3RzKSBmcm9udFxyXG5cdFx0XHRkcmFmdC5tYWluUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMuY29uY2F0KGFjdGlvbi5kYXRhKVxyXG5cdFx0XHQvLyDqsozsi5zrrLzsnYQgNTAg6rCc6rmM7KeA66eMIOqwgOyguOyYpOqyoOuLpFxyXG5cdFx0XHQvL2RyYWZ0Lmhhc01vcmVQb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5sZW5ndGggPCA1MCBmcm9udFxyXG5cdFx0XHRkcmFmdC5oYXNNb3JlUG9zdHMgPSBhY3Rpb24uZGF0YS5sZW5ndGggPT09IDEwXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBMT0FEX1BPU1RTX0ZBSUxVUkU6XHJcblx0XHRcdGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC5sb2FkUG9zdHNFcnJvciA9IGFjdGlvbi5lcnJvclxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgQUREX1BPU1RfUkVRVUVTVDpcclxuXHRcdFx0ZHJhZnQuYWRkUG9zdExvYWRpbmcgPSB0cnVlO1xyXG5cdFx0XHRkcmFmdC5hZGRQb3N0RG9uZSA9IGZhbHNlO1xyXG5cdFx0XHRkcmFmdC5hZGRQb3N0RXJyb3IgPSBudWxsO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgQUREX1BPU1RfU1VDQ0VTUzpcclxuXHRcdFx0Ly8gZHJhZnQubWFpblBvc3RzLnVuc2hpZnQoZHVtbXlQb3N0KGFjdGlvbi5kYXRhKSkgLy8gZnJvbnQgZHVtbXlcclxuXHRcdFx0ZHJhZnQubWFpblBvc3RzLnVuc2hpZnQoYWN0aW9uLmRhdGEpIC8vIGJhY2sg7Iuk7KCcIOuNsOydtO2EsFxyXG5cdFx0XHRkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LmFkZFBvc3REb25lID0gdHJ1ZVxyXG5cdFx0XHRkcmFmdC5pbWFnZVBhdGhzID0gW10gLy8gYWRkIHBvc3Qg7ISx6rO1IOyLnCwg7IKs7Jqp7J6QIOqyjOyLnOq4gCDsnpHshLHsl5Ag7J2066+47KeAIOy0iOq4sO2ZlFxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgQUREX1BPU1RfRkFJTFVSRTpcclxuXHRcdFx0ZHJhZnQuYWRkUG9zdExvYWRpbmcgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC5hZGRQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3JcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFJFTU9WRV9QT1NUX1JFUVVFU1Q6XHJcblx0XHRcdGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gdHJ1ZVxyXG5cdFx0XHRkcmFmdC5yZW1vdmVQb3N0RG9uZSA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LnJlbW92ZVBvc3RFcnJvciA9IG51bGxcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFJFTU9WRV9QT1NUX1NVQ0NFU1M6XHJcblx0XHRcdGRyYWZ0Lm1haW5Qb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLlBvc3RJZCkgLy8g7KeA7Jq465WQIOuztO2GtSBmaWx0ZXIg6rCAIO2OuO2VmOuLpFxyXG5cdFx0XHRkcmFmdC5Qb3N0TG9hZGluZyA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LlBvc3REb25lID0gdHJ1ZVxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgUkVNT1ZFX1BPU1RfRkFJTFVSRTpcclxuXHRcdFx0ZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC5yZW1vdmVQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3JcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIEFERF9DT01NRU5UX1JFUVVFU1Q6XHJcblx0XHRcdGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gdHJ1ZVxyXG5cdFx0XHRkcmFmdC5hZGRDb21tZW50RG9uZSA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LmFkZENvbW1lbnRFcnJvciA9IG51bGxcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIEFERF9DT01NRU5UX1NVQ0NFU1M6IHtcclxuXHRcdFx0Ly9hY3Rpb24uZGF0YS5jb250ZW50LCBwb3N0SWQsIHVzZXJJZFxyXG5cdFx0XHQvL2NvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEucG9zdElkKSAvLyDqsozsi5zquIAg66as7Iqk7Yq47KSR7JeQIHBvc3Qg7LC+6riwIGZyb250XHJcblx0XHRcdGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEuUG9zdElkKSAvLyDqsozsi5zquIAg66as7Iqk7Yq47KSR7JeQIHBvc3Qg7LC+6riwIGJha1xyXG5cdFx0XHQvL3Bvc3QuQ29tbWVudHMudW5zaGlmdChkdW1teUNvbW1lbnQoYWN0aW9uLmRhdGEuY29udGVudCkpIC8vIOywvuydgCBwb3N0IOyXkCDrp6gg7JWe7JeQIOqwgOynnCDrjJPquIAg7ZWY64KYIOuEo+yWtOykjCBGUk9OVFxyXG5cdFx0XHRwb3N0LkNvbW1lbnRzLnVuc2hpZnQoYWN0aW9uLmRhdGEpIC8vIOywvuydgCBwb3N0IOyXkCDsi6TsoJwg642w7J207YSwIGJhY2tcclxuXHRcdFx0ZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC5hZGRDb21tZW50RG9uZSA9IHRydWVcclxuXHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblx0XHRjYXNlIEFERF9DT01NRU5UX0ZBSUxVUkU6XHJcblx0XHRcdGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQuYWRkQ29tbWVudEVycm9yID0gYWN0aW9uLmVycm9yXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0YnJlYWs7XHJcblx0fVxyXG59KVxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyXHJcbiIsImltcG9ydCBwcm9kdWNlIGZyb20gJ2ltbWVyJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuXHRsb2FkVXNlckxvYWRpbmc6IGZhbHNlLCAvLyDsg4HrjIAg7KCV67O0IOuztOq4sCDsi5zrj4TspJHsnbzrlZAg66Gc65Sp7KSRIOudhOyauOqxsOyehFxyXG5cdGxvYWRVc2VyRG9uZTogZmFsc2UsIC8vIOyDgeuMgCDsoJXrs7Qg67O06riwIOuQqFxyXG5cdGxvYWRVc2VyRXJyb3I6IG51bGwsIC8vIOyDgeuMgCDsoJXrs7Qg67O06riw7KSR7J2865WMIOyXkOufrCDsl4bslbBcclxuXHRsb2FkTXlJbmZvTG9hZGluZzogZmFsc2UsIC8vIOycoOyggCDsoJXrs7Qg67O06riwIOyLnOuPhOykkeydvOuVkCDroZzrlKnspJEg652E7Jq46rGw7J6EXHJcblx0bG9hZE15SW5mb0RvbmU6IGZhbHNlLCAvLyDsnKDsoIAg7KCV67O0IOuztOq4sCDrkKhcclxuXHRsb2FkTXlJbmZvRXJyb3I6IG51bGwsIC8vIOycoOyggCDsoJXrs7Qg67O06riw7KSR7J2865WMIOyXkOufrCDsl4bslbBcclxuXHRyZW1vdmVGb2xsb3dlckxvYWRpbmc6IGZhbHNlLCAvLyDtjJTroZzsm4wg7Jyg7KCAIOyCreygnCDsi5zrj4TspJHsnbzrlZAg66Gc65Sp7KSRIOudhOyauOqxsOyehFxyXG5cdHJlbW92ZUZvbGxvd2VyRG9uZTogZmFsc2UsIC8vIO2MlOuhnOybjCDsnKDsoIAg7IKt7KCcIOuQqFxyXG5cdHJlbW92ZUZvbGxvd2VyRXJyb3I6IG51bGwsIC8vIO2MlOuhnOybjCDsnKDsoIAg7IKt7KCcIOykkeydvOuVjCDsl5Drn6wg7JeG7JWwXHJcblx0Zm9sbG93TG9hZGluZzogZmFsc2UsIC8vIO2MlOuhnOyasCDsi5zrj4TspJHsnbzrlZAg66Gc65Sp7KSRIOudhOyauOqxsOyehFxyXG5cdGZvbGxvd0RvbmU6IGZhbHNlLCAvLyDtjJTroZzsmrAg65CoXHJcblx0Zm9sbG93RXJyb3I6IG51bGwsIC8vIO2MlOuhnOyasOykkeydvOuVjCDsl5Drn6wg7JeG7JWwXHJcblx0dW5mb2xsb3dMb2FkaW5nOiBmYWxzZSwgLy8g7Ja47YyU66Gc7JqwIOyLnOuPhOykkeydvOuVkCDroZzrlKnspJEg652E7Jq46rGw7J6EXHJcblx0dW5mb2xsb3dEb25lOiBmYWxzZSwgLy8g7Ja47YyU66Gc7JqwIOuQqFxyXG5cdHVuZm9sbG93RXJyb3I6IG51bGwsIC8vIOyWuO2MlOuhnOyasOykkeydvOuVjCDsl5Drn6wg7JeG7JWwXHJcblx0bG9hZEZvbGxvd2Vyc0xvYWRpbmc6IGZhbHNlLCAvLyDtjJTroZzsm4wg7Iuc64+E7KSR7J2865WQIOuhnOuUqeykkSDrnYTsmrjqsbDsnoRcclxuXHRsb2FkRm9sbG93ZXJzRG9uZTogZmFsc2UsIC8vIO2MlOuhnOybjCDrkKhcclxuXHRsb2FkRm9sbG93ZXJzRXJyb3I6IG51bGwsIC8vIO2MlOuhnOybjOydvOuVjCDsl5Drn6wg7JeG7JWwXHJcblx0bG9hZEZvbGxvd2luZ3NMb2FkaW5nOiBmYWxzZSwgLy8g7YyU66Gc7JyZIOyLnOuPhOykkeydvOuVkCDroZzrlKnspJEg652E7Jq46rGw7J6EXHJcblx0bG9hZEZvbGxvd2luZ3NEb25lOiBmYWxzZSwgLy8g7YyU66Gc7JyZIOuQqFxyXG5cdGxvYWRGb2xsb3dpbmdzRXJyb3I6IG51bGwsIC8vIO2MlOuhnOycmSDspJHsnbzrlYwg7JeQ65+sIOyXhuyVsFxyXG5cdGxvZ0luTG9hZGluZzogZmFsc2UsIC8vIOuhnOq3uOyduCDsi5zrj4TspJHsnbzrlZAg66Gc65Sp7KSRIOudhOyauOqxsOyehFxyXG5cdGxvZ0luRG9uZTogZmFsc2UsIC8vIOuhnOq3uOyduCDrkKhcclxuXHRsb2dJbkVycm9yOiBudWxsLCAvLyDroZzrlKnspJHsnbzrlYwg7JeQ65+sIOyXhuyVsFxyXG5cdGxvZ091dExvYWRpbmc6IGZhbHNlLCAvLyDroZzqt7jslYTsm4Mg7Iuc64+E7KSRXHJcblx0bG9nT3V0RG9uZTogZmFsc2UsIC8vIOuhnOq3uOyVhOybgyDsmYTro4xcclxuXHRsb2dPdXRFcnJvcjogbnVsbCxcclxuXHRzaWduVXBMb2FkaW5nOiBmYWxzZSwgLy8g7ZqM7JuQ6rCA7J6FIOuhnOuUqeykkVxyXG5cdHNpZ25VcERvbmU6IGZhbHNlLCAvLyDtmozsm5Ag6rCA7J6FIOyZhOujjFxyXG5cdHNpZ25VcEVycm9yOiBudWxsLFxyXG5cdGNoYW5nZU5pY2tuYW1lTG9hZGluZzogZmFsc2UsIC8vIOuLieuEpOyehCDrs4Dqsr0g66Gc65Sp7KSRXHJcblx0Y2hhbmdlTmlja25hbWVEb25lOiBmYWxzZSwgLy8g64uJ64Sk7J6EIOuzgOqyvSDsmYTro4xcclxuXHRjaGFuZ2VOaWNrbmFtZUVycm9yOiBudWxsLFxyXG5cdG1lOiBudWxsLFxyXG5cdHNpZ25VcERhdGE6IHt9LCAvLyDtmozsm5Ag6rCA7J6FIOuNsOydtO2EsFxyXG5cdGxvZ2luRGF0YToge30sXHJcblx0dXNlckluZm86IG51bGwsXHJcbn1cclxuXHJcbi8vIOuhnOq3uOyduCDslaHshZgg7IOd7ISx6riwIHRodW5rXHJcbi8vIGV4cG9ydCBjb25zdCBsb2dpbkFjdGlvbiA9IChkYXRhKSA9PiB7IC8vIO2VqOyImOulvCDrpqzthLTtlZjripQg67mE64+Z6riwIOyVoeyFmCDtgazrpqzsl5DsnbTthLDqsIAg7LaU6rCAXHJcbi8vIFx0cmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcclxuLy8gXHRcdGNvbnN0IHN0YXRlID0gZ2V0U3RhdGUoKVxyXG4vLyBcdFx0ZGlzcGF0Y2gobG9naW5SZXF1ZXN0QWN0aW9uKCkpXHJcbi8vIFx0XHRheGlvcy5wb3N0KCcvYXBpL2xvZ2luJylcclxuLy8gXHRcdFx0XHQudGhlbigocmVzKSA9PiB7XHJcbi8vIFx0XHRcdFx0XHRkaXNwYXRjaChsb2dpblN1Y2Nlc3NBY3Rpb24ocmVzLmRhdGEpKVxyXG4vLyBcdFx0XHRcdH0pXHJcbi8vIFx0XHRcdFx0LmNhdGNoKChlcnJvcikgPT4ge1xyXG4vLyBcdFx0XHRcdFx0ZGlzcGF0Y2gobG9naW5GYWlsdXJlQWN0aW9uKGVycm9yKSlcclxuLy8gXHRcdFx0XHR9KVxyXG4vLyBcdH1cclxuLy8gfVxyXG5cclxuLy8gYWN0aW9uc1xyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1JFUVVFU1QgPSAnTE9BRF9VU0VSX1JFUVVFU1QnXHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfU1VDQ0VTUyA9ICdMT0FEX1VTRVJfU1VDQ0VTUydcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9GQUlMVVJFID0gJ0xPQURfVVNFUl9GQUlMVVJFJ1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfTVlfSU5GT19SRVFVRVNUID0gJ0xPQURfTVlfSU5GT19SRVFVRVNUJ1xyXG5leHBvcnQgY29uc3QgTE9BRF9NWV9JTkZPX1NVQ0NFU1MgPSAnTE9BRF9NWV9JTkZPX1NVQ0NFU1MnXHJcbmV4cG9ydCBjb25zdCBMT0FEX01ZX0lORk9fRkFJTFVSRSA9ICdMT0FEX01ZX0lORk9fRkFJTFVSRSdcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCA9ICdSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCdcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTID0gJ1JFTU9WRV9GT0xMT1dFUl9TVUNDRVNTJ1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkUgPSAnUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkUnXHJcblxyXG5leHBvcnQgY29uc3QgTE9HX0lOX1JFUVVFU1QgPSAnTE9HX0lOX1JFUVVFU1QnXHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fU1VDQ0VTUyA9ICdMT0dfSU5fU1VDQ0VTUydcclxuZXhwb3J0IGNvbnN0IExPR19JTl9GQUlMVVJFID0gJ0xPR19JTl9GQUlMVVJFJ1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19PVVRfUkVRVUVTVCA9ICdMT0dfT1VUX1JFUVVFU1QnXHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1NVQ0NFU1MgPSAnTE9HX09VVF9TVUNDRVNTJ1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9GQUlMVVJFID0gJ0xPR19PVVRfRkFJTFVSRSdcclxuXHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1JFUVVFU1QgPSAnU0lHTl9VUF9SRVFVRVNUJ1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9TVUNDRVNTID0gJ1NJR05fVVBfU1VDQ0VTUydcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfRkFJTFVSRSA9ICdTSUdOX1VQX0ZBSUxVUkUnXHJcblxyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QgPSAnQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QnXHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyA9ICdDSEFOR0VfTklDS05BTUVfU1VDQ0VTUydcclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFID0gJ0NIQU5HRV9OSUNLTkFNRV9GQUlMVVJFJ1xyXG5cclxuZXhwb3J0IGNvbnN0IEZPTExPV19SRVFVRVNUID0gJ0ZPTExPV19SRVFVRVNUJ1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX1NVQ0NFU1MgPSAnRk9MTE9XX1NVQ0NFU1MnXHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfRkFJTFVSRSA9ICdGT0xMT1dfRkFJTFVSRSdcclxuXHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19SRVFVRVNUID0gJ1VORk9MTE9XX1JFUVVFU1QnXHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19TVUNDRVNTID0gJ1VORk9MTE9XX1NVQ0NFU1MnXHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19GQUlMVVJFID0gJ1VORk9MTE9XX0ZBSUxVUkUnXHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dFUlNfUkVRVUVTVCA9ICdMT0FEX0ZPTExPV0VSU19SRVFVRVNUJ1xyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUyA9ICdMT0FEX0ZPTExPV0VSU19TVUNDRVNTJ1xyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dFUlNfRkFJTFVSRSA9ICdMT0FEX0ZPTExPV0VSU19GQUlMVVJFJ1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XSU5HU19SRVFVRVNUID0gJ0xPQURfRk9MTE9XSU5HU19SRVFVRVNUJ1xyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1MgPSAnTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1MnXHJcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRSA9ICdMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRSdcclxuXHJcbi8vIOycoOyggCDrpqzrk4DshJzsnZgg7IOB7YOc66W8IOuwlOq/gOyImOyeiOuKlCDslaHshZgg7IOd7ISxXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9UT19NRSA9ICdBRERfUE9TVF9UT19NRSdcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX09GX01FID0gJ1JFTU9WRV9QT1NUX09GX01FJ1xyXG5cclxuLyogZnJvbnRcclxuY29uc3QgZHVtbXlVc2VyID0gKGRhdGEpID0+ICh7XHJcblx0Li4uZGF0YSxcclxuXHRuaWNrbmFtZTogJ+u5hO2DgOuvvCcsXHJcblx0aWQ6IDEsXHJcblx0UG9zdHM6IFt7aWQ6IDF9XSxcclxuXHRGb2xsb3dpbmdzOiBbe25pY2tuYW1lOiAn7Jm464W4J30sIHtuaWNrbmFtZTogJ+ydjOuplCd9LCB7bmlja25hbWU6ICfsjb0nfSwge25pY2tuYW1lOiAn7Jik64yVJ30sIHtuaWNrbmFtZTogJ+unjOu9gCd9XSxcclxuXHRGb2xsb3dlcnM6IFt7bmlja25hbWU6ICfquYzrp6QnfSwge25pY2tuYW1lOiAn66eM65GQJ30sIHtuaWNrbmFtZTogJ+uztOyxmSd9LCB7bmlja25hbWU6ICfrkrfqsIAnfSwge25pY2tuYW1lOiAn7JW8642pJ31dLFxyXG59KSovXHJcblxyXG5leHBvcnQgY29uc3QgbG9naW5SZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+ICh7XHJcblx0dHlwZTogTE9HX0lOX1JFUVVFU1QsXHJcblx0ZGF0YSxcclxufSk7XHJcbi8vIOuhnOq3uOyVhOybgyDslaHshZgg7IOd7ISx6riwIHRodW5rXHJcbi8vIGV4cG9ydCBjb25zdCBsb2dvdXRBY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4vLyBcdHJldHVybiAoZGlzcGF0Y2gpID0+IHtcclxuLy8gXHRcdGF4aW9zLnBvc3QoJy9hcGkvbG9nb3V0JylcclxuLy8gXHRcdFx0XHQudGhlbigoKSA9PiB7XHJcbi8vIFx0XHRcdFx0XHRkaXNwYXRjaChsb2dvdXRTdWNjZXNzQWN0aW9uKCkpXHJcbi8vIFx0XHRcdFx0fSlcclxuLy8gXHRcdFx0XHQuY2F0Y2goKCkgPT4ge1xyXG4vLyBcdFx0XHRcdFx0ZGlzcGF0Y2gobG9nb3V0RmFpbHVyZUFjdGlvbigpKVxyXG4vLyBcdFx0XHRcdH0pXHJcbi8vIFx0fVxyXG4vLyB9XHJcbmV4cG9ydCBjb25zdCBsb2dvdXRSZXF1ZXN0QWN0aW9uID0gKCkgPT4gKHtcclxuXHR0eXBlOiBMT0dfT1VUX1JFUVVFU1QsXHJcbn0pXHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xyXG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgTE9BRF9VU0VSX1JFUVVFU1Q6XHJcblx0XHRcdC8vIHN0b3JlIOyXkOyEnCDrs7Trgrggc3RhdGUg6rCAIOunjOuTpOyWtOynkCwgc3RhdGUg7J6Q7LK06rCAIHVzZXIuanMg7J2YIHN0YXRlIOyehFxyXG5cdFx0XHRkcmFmdC5sb2FkVXNlckxvYWRpbmcgPSB0cnVlXHJcblx0XHRcdGRyYWZ0LmxvYWRVc2VyRG9uZSA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LmxvYWRVc2VyRXJyb3IgPSBudWxsIC8vIOuhnOuUqSDspJHsnbzrlYzripQg7JeQ65+sIOyXhuyVsFxyXG5cdFx0XHRjb25zb2xlLmxvZygncmVkdWNlciBteUluZm8g7JqU7LKtJylcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIExPQURfVVNFUl9TVUNDRVNTOlxyXG5cdFx0XHRkcmFmdC51c2VySW5mbyA9IGFjdGlvbi5kYXRhIC8vIGJhY2sg7IOB64yAIOygleuztOqwgCDrk6TslrTsnojsnYxcclxuXHRcdFx0ZHJhZnQubG9hZFVzZXJMb2FkaW5nID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQubG9hZFVzZXJEb25lID0gdHJ1ZVxyXG5cdFx0XHQvL2RyYWZ0Lm1lID0gZHVtbXlVc2VyKGFjdGlvbi5kYXRhKVxyXG5cdFx0XHRjb25zb2xlLmxvZygncmVkdWNlciBteUluZm8g7ISx6rO1JylcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIExPQURfVVNFUl9GQUlMVVJFOlxyXG5cdFx0XHRjb25zb2xlLmVycm9yKCdsb2FkVXNlckZhaWwg7Iuk7YyoOjogJyArIGFjdGlvbi5lcnJvcilcclxuXHRcdFx0ZHJhZnQubG9hZFVzZXJMb2FkaW5nID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQubG9hZFVzZXJFcnJvciA9IGFjdGlvbi5lcnJvclxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgTE9BRF9NWV9JTkZPX1JFUVVFU1Q6XHJcblx0XHRcdC8vIHN0b3JlIOyXkOyEnCDrs7Trgrggc3RhdGUg6rCAIOunjOuTpOyWtOynkCwgc3RhdGUg7J6Q7LK06rCAIHVzZXIuanMg7J2YIHN0YXRlIOyehFxyXG5cdFx0XHRkcmFmdC5sb2FkTXlJbmZvTG9hZGluZyA9IHRydWVcclxuXHRcdFx0ZHJhZnQubG9hZE15SW5mb0RvbmUgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC5sb2FkTXlJbmZvRXJyb3IgPSBudWxsIC8vIOuhnOuUqSDspJHsnbzrlYzripQg7JeQ65+sIOyXhuyVsFxyXG5cdFx0XHRjb25zb2xlLmxvZygncmVkdWNlciBteUluZm8g7JqU7LKtJylcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIExPQURfTVlfSU5GT19TVUNDRVNTOlxyXG5cdFx0XHRkcmFmdC5tZSA9IGFjdGlvbi5kYXRhIC8vIGJhY2sg64K0IOygleuztOqwgCDrk6TslrTsnojsnYxcclxuXHRcdFx0ZHJhZnQubG9hZE15SW5mb0xvYWRpbmcgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC5sb2FkTXlJbmZvRG9uZSA9IHRydWVcclxuXHRcdFx0Ly9kcmFmdC5tZSA9IGR1bW15VXNlcihhY3Rpb24uZGF0YSlcclxuXHRcdFx0Y29uc29sZS5sb2coJ3JlZHVjZXIgbXlJbmZvIOyEseqztScpXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBMT0FEX01ZX0lORk9fRkFJTFVSRTpcclxuXHRcdFx0Y29uc29sZS5lcnJvcignbG9hZE15SW5mb0ZhaWwg7Iuk7YyoOjogJyArIGFjdGlvbi5lcnJvcilcclxuXHRcdFx0ZHJhZnQubG9hZE15SW5mb0xvYWRpbmcgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC5sb2FkTXlJbmZvRXJyb3IgPSBhY3Rpb24uZXJyb3JcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFJFTU9WRV9GT0xMT1dFUl9SRVFVRVNUOlxyXG5cdFx0XHRkcmFmdC5yZW1vdmVGb2xsb3dlckxvYWRpbmcgPSB0cnVlXHJcblx0XHRcdGRyYWZ0LnJlbW92ZUZvbGxvd2VyRG9uZSA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LnJlbW92ZUZvbGxvd2VyRXJyb3IgPSBudWxsXHJcblx0XHRcdGNvbnNvbGUubG9nKCdyZWR1Y2VyIHJlbW92ZUZvbGxvd2VyIOyalOyyrScpXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUzpcclxuXHRcdFx0Ly8g64KY7J2YIO2MlOuhnOybjCDsoJzqsbBcclxuXHRcdFx0ZHJhZnQubWUuRm9sbG93ZXJzID0gZHJhZnQubWUuRm9sbG93ZXJzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEuVXNlcklkKVxyXG5cdFx0XHRkcmFmdC5yZW1vdmVGb2xsb3dlckxvYWRpbmcgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC5yZW1vdmVGb2xsb3dlckRvbmUgPSB0cnVlXHJcblx0XHRcdGNvbnNvbGUubG9nKCdyZWR1Y2VyIHJlbW92ZUZvbGxvd2VyIOyEseqztScpXHJcblx0XHRcdGJyZWFrXHJcblx0XHRjYXNlIFJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFOlxyXG5cdFx0XHRjb25zb2xlLmVycm9yKCdyZW1vdmVGb2xsb3dlckZhaWwg7Iuk7YyoOjogJyArIGFjdGlvbi5lcnJvcilcclxuXHRcdFx0ZHJhZnQucmVtb3ZlRm9sbG93ZXJMb2FkaW5nID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQucmVtb3ZlRm9sbG93ZXJFcnJvciA9IGFjdGlvbi5lcnJvclxyXG5cdFx0Y2FzZSBGT0xMT1dfUkVRVUVTVDpcclxuXHRcdFx0Ly8gc3RvcmUg7JeQ7IScIOuztOuCuCBzdGF0ZSDqsIAg66eM65Ok7Ja07KeQLCBzdGF0ZSDsnpDssrTqsIAgdXNlci5qcyDsnZggc3RhdGUg7J6EXHJcblx0XHRcdGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSB0cnVlXHJcblx0XHRcdGRyYWZ0LmZvbGxvd0Vycm9yID0gbnVsbCAvLyDroZzrlKkg7KSR7J2865WM64qUIOyXkOufrCDsl4bslbBcclxuXHRcdFx0ZHJhZnQuZm9sbG93RG9uZSA9IGZhbHNlXHJcblx0XHRcdGNvbnNvbGUubG9nKCdyZWR1Y2VyIEZPTExPV19SRVFVRVNUIOyalOyyrScpXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBGT0xMT1dfU1VDQ0VTUzpcclxuXHRcdFx0ZHJhZnQuZm9sbG93TG9hZGluZyA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LmZvbGxvd0RvbmUgPSB0cnVlXHJcblx0XHRcdC8vZHJhZnQubWUgPSBkdW1teVVzZXIoYWN0aW9uLmRhdGEpXHJcblx0XHRcdGRyYWZ0Lm1lLkZvbGxvd2luZ3MucHVzaCh7aWQ6IGFjdGlvbi5kYXRhLlVzZXJJZH0pXHJcblx0XHRcdGNvbnNvbGUubG9nKCdyZWR1Y2VyIEZPTExPV19TVUNDRVNTIOyEseqztScpXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBGT0xMT1dfRkFJTFVSRTpcclxuXHRcdFx0ZHJhZnQuZm9sbG93TG9hZGluZyA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LmZvbGxvd0Vycm9yID0gYWN0aW9uLmVycm9yXHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoJ3JlZHVjZXIgRk9MTE9XX0ZBSUxVUkUg7Iuk7YyoOjonLCBhY3Rpb24uZXJyb3IpXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBVTkZPTExPV19SRVFVRVNUOlxyXG5cdFx0XHQvLyBzdG9yZSDsl5DshJwg67O064K4IHN0YXRlIOqwgCDrp4zrk6TslrTsp5AsIHN0YXRlIOyekOyytOqwgCB1c2VyLmpzIOydmCBzdGF0ZSDsnoRcclxuXHRcdFx0ZHJhZnQudW5mb2xsb3dMb2FkaW5nID0gdHJ1ZVxyXG5cdFx0XHRkcmFmdC51bmZvbGxvd0Vycm9yID0gbnVsbCAvLyDroZzrlKkg7KSR7J2865WM64qUIOyXkOufrCDsl4bslbBcclxuXHRcdFx0ZHJhZnQudW5mb2xsb3dEb25lID0gZmFsc2VcclxuXHRcdFx0Y29uc29sZS5sb2coJ3JlZHVjZXIgdW5mb2xsb3cg7JqU7LKtJylcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFVORk9MTE9XX1NVQ0NFU1M6XHJcblx0XHRcdGRyYWZ0LnVuZm9sbG93TG9hZGluZyA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LnVuZm9sbG93RG9uZSA9IHRydWVcclxuXHRcdFx0Ly9kcmFmdC5tZSA9IGR1bW15VXNlcihhY3Rpb24uZGF0YSlcclxuXHRcdFx0Ly8g7Ja47YyU66Gc7JqwIO2VnCDsgqzrnozrp4wg67mg7KeA6rKMXHJcblx0XHRcdGRyYWZ0Lm1lLkZvbGxvd2luZ3MgPSBkcmFmdC5tZS5Gb2xsb3dpbmdzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEuVXNlcklkKVxyXG5cdFx0XHRjb25zb2xlLmxvZygncmVkdWNlciB1bmZvbGxvdyDshLHqs7UnKVxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgVU5GT0xMT1dfRkFJTFVSRTpcclxuXHRcdFx0ZHJhZnQudW5mb2xsb3dMb2FkaW5nID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQudW5mb2xsb3dFcnJvciA9IGFjdGlvbi5lcnJvclxyXG5cdFx0XHRjb25zb2xlLmVycm9yKCdyZWR1Y2VyIHVuZm9sbG93IOyLpO2MqDo6JywgYWN0aW9uLmVycm9yKVxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgTE9HX0lOX1JFUVVFU1Q6XHJcblx0XHRcdGRyYWZ0LmxvZ0luTG9hZGluZyA9IHRydWVcclxuXHRcdFx0ZHJhZnQubG9nSW5FcnJvciA9IG51bGxcclxuXHRcdFx0ZHJhZnQubG9nSW5Eb25lID0gZmFsc2VcclxuXHRcdFx0Y29uc29sZS5sb2coJ3JlZHVjZXIgbG9naW4g7JqU7LKtJylcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIExPR19JTl9TVUNDRVNTOlxyXG5cdFx0XHRkcmFmdC5sb2dJbkxvYWRpbmcgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC5sb2dJbkRvbmUgPSB0cnVlXHJcblx0XHRcdC8vZHJhZnQubWUgPSBkdW1teVVzZXIoYWN0aW9uLmRhdGEpIGZyb250XHJcblx0XHRcdGRyYWZ0Lm1lID0gYWN0aW9uLmRhdGEgLy8gYmFja1xyXG5cdFx0XHRjb25zb2xlLmxvZygncmVkdWNlciBsb2dpbiDshLHqs7UnKVxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgTE9HX0lOX0ZBSUxVUkU6XHJcblx0XHRcdGRyYWZ0LmxvZ0luTG9hZGluZyA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LmxvZ0luRXJyb3IgPSBhY3Rpb24uZXJyb3JcclxuXHRcdFx0Y29uc29sZS5lcnJvcigncmVkdWNlciBsb2dpbiDsi6TtjKg6OiAnLCBhY3Rpb24uZXJyb3IpXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBMT0dfT1VUX1JFUVVFU1Q6XHJcblx0XHRcdGRyYWZ0LmxvZ091dExvYWRpbmcgPSB0cnVlXHJcblx0XHRcdGRyYWZ0LmxvZ091dERvbmUgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC5sb2dPdXRFcnJvciA9IG51bGxcclxuXHRcdFx0Y29uc29sZS5sb2coJ3JlZHVjZXIgbG9nb3V0IOyalOyyrScpXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBMT0dfT1VUX1NVQ0NFU1M6XHJcblx0XHRcdGRyYWZ0LmxvZ091dExvYWRpbmcgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC5sb2dPdXREb25lID0gdHJ1ZVxyXG5cdFx0XHRkcmFmdC5tZSA9IG51bGxcclxuXHRcdFx0Y29uc29sZS5sb2coJ3JlZHVjZXIgbG9nb3V0IOyEseqztScpXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBMT0dfT1VUX0ZBSUxVUkU6XHJcblx0XHRcdGRyYWZ0LmxvZ091dExvYWRpbmcgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC5sb2dPdXRFcnJvciA9IGFjdGlvbi5lcnJvclxyXG5cdFx0XHRjb25zb2xlLmVycm9yKCdyZWR1Y2VyIGxvZ291dCDsi6TtjKgnLCBhY3Rpb24uZXJyb3IpXHJcblx0XHRcdGJyZWFrXHJcblx0XHRjYXNlIFNJR05fVVBfUkVRVUVTVDpcclxuXHRcdFx0ZHJhZnQuc2lnblVwTG9hZGluZyA9IHRydWVcclxuXHRcdFx0ZHJhZnQuc2lnblVwRG9uZSA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LnNpZ25VcEVycm9yID0gbnVsbFxyXG5cdFx0XHRjb25zb2xlLmxvZygncmVkdWNlciBzaWdudXAg7JqU7LKtJylcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFNJR05fVVBfU1VDQ0VTUzpcclxuXHRcdFx0ZHJhZnQuc2lnblVwTG9hZGluZyA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LnNpZ25VcERvbmUgPSB0cnVlXHJcblx0XHRcdGNvbnNvbGUubG9nKCdyZWR1Y2VyIHNpZ25VcCDshLHqs7UnKVxyXG5cdFx0XHRicmVha1xyXG5cdFx0Y2FzZSBTSUdOX1VQX0ZBSUxVUkU6XHJcblx0XHRcdGRyYWZ0LnNpZ25VcExvYWRpbmcgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC5zaWduVXBFcnJvciA9IGFjdGlvbi5lcnJvclxyXG5cdFx0XHRjb25zb2xlLmVycm9yKCdyZWR1Y2VyIHNpZ25VcCDsi6TtjKgnLCBhY3Rpb24uZXJyb3IpXHJcblx0XHRcdGJyZWFrXHJcblx0XHRjYXNlIENIQU5HRV9OSUNLTkFNRV9SRVFVRVNUOlxyXG5cdFx0XHRkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmcgPSB0cnVlXHJcblx0XHRcdGRyYWZ0LmNoYW5nZU5pY2tuYW1lRG9uZSA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LmNoYW5nZU5pY2tuYW1lRXJyb3IgPSBudWxsXHJcblx0XHRcdGNvbnNvbGUubG9nKCdyZWR1Y2VyIENIQU5HRV9OSUNLTkFNRV9SRVFVRVNUIOyalOyyrScpXHJcblx0XHRcdGJyZWFrXHJcblx0XHRjYXNlIENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTOlxyXG5cdFx0XHRkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmcgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC5jaGFuZ2VOaWNrbmFtZURvbmUgPSB0cnVlXHJcblx0XHRcdGNvbnNvbGUubG9nKCdyZWR1Y2VyIENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTIOyEseqztScpXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBDSEFOR0VfTklDS05BTUVfRkFJTFVSRTpcclxuXHRcdFx0ZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQuY2hhbmdlTmlja25hbWVFcnJvciA9IGFjdGlvbi5lcnJvclxyXG5cdFx0XHRjb25zb2xlLmVycm9yKCdyZWR1Y2VyIENIQU5HRV9OSUNLTkFNRSDsi6TtjKgnLCBhY3Rpb24uZXJyb3IpXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBMT0FEX0ZPTExPV0VSU19SRVFVRVNUOlxyXG5cdFx0XHRkcmFmdC5sb2FkRm9sbG93ZXJzTG9hZGluZyA9IHRydWVcclxuXHRcdFx0ZHJhZnQubG9hZEZvbGxvd2Vyc0RvbmUgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC5sb2FkRm9sbG93ZXJzRXJyb3IgPSBudWxsXHJcblx0XHRcdGNvbnNvbGUubG9nKCdyZWR1Y2VyIExPQURfRk9MTE9XRVJTX1JFUVVFU1Qg7JqU7LKtJylcclxuXHRcdFx0YnJlYWtcclxuXHRcdGNhc2UgTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUzpcclxuXHRcdFx0ZHJhZnQubG9hZEZvbGxvd2Vyc0xvYWRpbmcgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC5sb2FkRm9sbG93ZXJzRG9uZSA9IHRydWVcclxuXHRcdFx0ZHJhZnQubWUuRm9sbG93ZXJzID0gYWN0aW9uLmRhdGFcclxuXHRcdFx0Y29uc29sZS5sb2coJ3JlZHVjZXIgTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUyDshLHqs7UnKVxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgTE9BRF9GT0xMT1dFUlNfRkFJTFVSRTpcclxuXHRcdFx0ZHJhZnQubG9hZEZvbGxvd2Vyc0xvYWRpbmcgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC5sb2FkRm9sbG93ZXJzRXJyb3IgPSBhY3Rpb24uZXJyb3JcclxuXHRcdFx0Y29uc29sZS5lcnJvcigncmVkdWNlciBMT0FEX0ZPTExPV0VSUyDsi6TtjKgnLCBhY3Rpb24uZXJyb3IpXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVDpcclxuXHRcdFx0ZHJhZnQubG9hZEZvbGxvd2luZ3NMb2FkaW5nID0gdHJ1ZVxyXG5cdFx0XHRkcmFmdC5sb2FkRm9sbG93aW5nc0RvbmUgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC5sb2FkRm9sbG93aW5nc0Vycm9yID0gbnVsbFxyXG5cdFx0XHRjb25zb2xlLmxvZygncmVkdWNlciBMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVCDsmpTssq0nKVxyXG5cdFx0XHRicmVha1xyXG5cdFx0Y2FzZSBMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUzpcclxuXHRcdFx0ZHJhZnQubG9hZEZvbGxvd2luZ3NMb2FkaW5nID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQubG9hZEZvbGxvd2luZ3NEb25lID0gdHJ1ZVxyXG5cdFx0XHRkcmFmdC5tZS5Gb2xsb3dpbmdzID0gYWN0aW9uLmRhdGFcclxuXHRcdFx0Y29uc29sZS5sb2coJ3JlZHVjZXIgTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1Mg7ISx6rO1JylcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIExPQURfRk9MTE9XSU5HU19GQUlMVVJFOlxyXG5cdFx0XHRkcmFmdC5sb2FkRm9sbG93aW5nc0xvYWRpbmcgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC5sb2FkRm9sbG93aW5nc0Vycm9yID0gYWN0aW9uLmVycm9yXHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoJ3JlZHVjZXIgTE9BRF9GT0xMT1dJTkdTIOyLpO2MqCcsIGFjdGlvbi5lcnJvcilcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIEFERF9QT1NUX1RPX01FOiAvLyDqsozsi5zquIDsnYQg7JOw66m0IOqyjOyLnOq4gCDslYTsnbTrlJTqsIAg7Jes6riw66GcIOuTpOyWtOyZgOyEnCDtlZjrgpjqsIAg7LaU6rCA65Cc64ukXHJcblx0XHRcdGRyYWZ0Lm1lLlBvc3RzLnVuc2hpZnQoe2lkOiBhY3Rpb24uZGF0YX0pXHJcblx0XHRcdGNvbnNvbGUubG9nKCdBRERfUE9TVF9UT19NRSDshLHqs7UnKVxyXG5cdFx0XHRicmVha1xyXG5cdFx0XHQvLyByZXR1cm4ge1xyXG5cdFx0XHQvLyBcdC4uLnN0YXRlLFxyXG5cdFx0XHQvLyBcdG1lOiB7XHJcblx0XHRcdC8vIFx0XHQuLi5zdGF0ZS5tZSxcclxuXHRcdFx0Ly8gXHRcdFBvc3RzOiBbe2lkOiBhY3Rpb24uZGF0YX0sIC4uLnN0YXRlLm1lLlBvc3RzXSxcclxuXHRcdFx0Ly8gXHR9XHJcblx0XHRcdC8vIH1cclxuXHRcdGNhc2UgUkVNT1ZFX1BPU1RfT0ZfTUU6XHJcblx0XHRcdGRyYWZ0Lm1lLlBvc3RzID0gZHJhZnQubWUuUG9zdHMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YSlcclxuXHRcdFx0Y29uc29sZS5sb2coJ1JFTU9WRV9QT1NUX09GX01FJylcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRcdC8vIHJldHVybiB7IC8vIOu2iOuzgOyEseydhCDsp4DtgqTrqbAg6rKM7Iuc6riA7J2EIOyngOybjOyVvO2VnOuLpC5cclxuXHRcdFx0Ly8gXHQuLi5zdGF0ZSxcclxuXHRcdFx0Ly8gXHRtZToge1xyXG5cdFx0XHQvLyBcdFx0Li4uc3RhdGUubWUsXHJcblx0XHRcdC8vIFx0XHRQb3N0czogc3RhdGUubWUuUG9zdHMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YSlcclxuXHRcdFx0Ly8gXHR9XHJcblx0XHRcdC8vIH1cclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdGJyZWFrO1xyXG5cdH1cclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7IiwiaW1wb3J0IHthbGwsIGZvcmssIHRha2VMYXRlc3QsIGNhbGwsIHB1dCwgZGVsYXl9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHBvc3RTYWdhIGZyb20gJy4vcG9zdCdcclxuaW1wb3J0IHVzZXJTYWdhIGZyb20gJy4vdXNlcidcclxuXHJcbmF4aW9zLmRlZmF1bHRzLmJhc2VVUkwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDY1J1xyXG5heGlvcy5kZWZhdWx0cy53aXRoQ3JlZGVudGlhbHMgPSB0cnVlXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcm9vdFNhZ2EoKSB7XHJcblx0eWllbGQgYWxsKFsgLy8gQUxMIOuwsOyXtOyViOyXkCDtlZzrsKnsl5Ag7Iuk7ZaJ7ZW07KSMXHJcblx0XHRmb3JrKHBvc3RTYWdhKSwgLy8gZm9yayDripQgKO2VqOyImCnsi6TtlolcclxuXHRcdGZvcmsodXNlclNhZ2EpLFx0Ly8gY2FsbCDsnbTrnpHsnYAg64uk66W064ukLlxyXG5cdF0pXHJcbn0iLCJpbXBvcnQge2FsbCwgY2FsbCwgZGVsYXksIGZvcmssIHB1dCwgdGFrZUxhdGVzdCwgdGhyb3R0bGV9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQge1xyXG5cdEFERF9DT01NRU5UX0ZBSUxVUkUsXHJcblx0QUREX0NPTU1FTlRfUkVRVUVTVCxcclxuXHRBRERfQ09NTUVOVF9TVUNDRVNTLFxyXG5cdEFERF9QT1NUX0ZBSUxVUkUsXHJcblx0QUREX1BPU1RfUkVRVUVTVCxcclxuXHRBRERfUE9TVF9TVUNDRVNTLFxyXG5cdExJS0VfUE9TVF9GQUlMVVJFLFxyXG5cdExJS0VfUE9TVF9SRVFVRVNULFxyXG5cdExJS0VfUE9TVF9TVUNDRVNTLCBMT0FEX1BPU1RfRkFJTFVSRSwgTE9BRF9QT1NUX1JFUVVFU1QsIExPQURfUE9TVF9TVUNDRVNTLFxyXG5cdC8vZ2VuZXJhdGVEdW1teVBvc3QsIGZyb250XHJcblx0TE9BRF9QT1NUU19GQUlMVVJFLFxyXG5cdExPQURfUE9TVFNfUkVRVUVTVCxcclxuXHRMT0FEX1BPU1RTX1NVQ0NFU1MsXHJcblx0UkVNT1ZFX1BPU1RfRkFJTFVSRSxcclxuXHRSRU1PVkVfUE9TVF9SRVFVRVNULFxyXG5cdFJFTU9WRV9QT1NUX1NVQ0NFU1MsIFJFVFdFRVRfRkFJTFVSRSwgUkVUV0VFVF9SRVFVRVNULCBSRVRXRUVUX1NVQ0NFU1MsXHJcblx0VU5MSUtFX1BPU1RfRkFJTFVSRSxcclxuXHRVTkxJS0VfUE9TVF9SRVFVRVNULFxyXG5cdFVOTElLRV9QT1NUX1NVQ0NFU1MsIFVQTE9BRF9JTUFHRVNfRkFJTFVSRSxcclxuXHRVUExPQURfSU1BR0VTX1JFUVVFU1QsXHJcblx0VVBMT0FEX0lNQUdFU19TVUNDRVNTLFxyXG59IGZyb20gXCIuLi9yZWR1Y2Vycy9wb3N0XCI7XHJcbmltcG9ydCB7XHJcblx0QUREX1BPU1RfVE9fTUUsXHJcblx0UkVNT1ZFX1BPU1RfT0ZfTUUsXHJcbn0gZnJvbSBcIi4uL3JlZHVjZXJzL3VzZXJcIjtcclxuXHJcbi8vaW1wb3J0IHNob3J0SWQgZnJvbSBcInNob3J0aWRcIjsgZnJvbnRcclxuXHJcbi8vIHJlc3RBUElcclxuZnVuY3Rpb24gcmV0d2VldEFQSShkYXRhKSB7XHJcblx0cmV0dXJuIGF4aW9zLnBvc3QoYC9wb3N0LyR7ZGF0YX0vcmV0d2VldGApXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiByZXR3ZWV0KGFjdGlvbikge1xyXG5cdHRyeSB7XHJcblx0XHRjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHJldHdlZXRBUEksIGFjdGlvbi5kYXRhKVxyXG5cdFx0Y29uc29sZS5sb2coJ3NhZ2EgcmV0d2VldCDsi6Ttlok6OicsIGFjdGlvbi5kYXRhKVxyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogUkVUV0VFVF9TVUNDRVNTLFxyXG5cdFx0XHRkYXRhOiByZXN1bHQuZGF0YSxcclxuXHRcdH0pXHJcblx0XHRjb25zb2xlLmxvZygnc2FnYSByZXR3ZWV0IOyEseqztTo6JywgcmVzdWx0KVxyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0Y29uc29sZS5lcnJvcignc2FnYSByZXR3ZWV0IOyLpO2MqCA6OiAnLCBlcnIpXHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOiBSRVRXRUVUX0ZBSUxVUkUsXHJcblx0XHRcdGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YVxyXG5cdFx0fSlcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwbG9hZEltYWdlc0FQSShkYXRhKSB7XHJcblx0cmV0dXJuIGF4aW9zLnBvc3QoJy9wb3N0L2ltYWdlcycsIGRhdGEpIC8vIGZvcm0gZGF0YSDrpbwge25hbWU6ZGF0YX0g7ZiV7Iud7Jy866GcIOqwkOyLuOuptCBqc29uIOuQmOq4sOuVjOusuOyXkCDsgqzsmqntlZjrqbQg7JWI65CoXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB1cGxvYWRJbWFnZXMoYWN0aW9uKSB7XHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwodXBsb2FkSW1hZ2VzQVBJLCBhY3Rpb24uZGF0YSlcclxuXHRcdGNvbnNvbGUubG9nKCdzYWdhIHVwbG9hZEltYWdlcyDsi6Ttlok6OiAnLCBhY3Rpb24uZGF0YSlcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IFVQTE9BRF9JTUFHRVNfU1VDQ0VTUyxcclxuXHRcdFx0ZGF0YTogcmVzdWx0LmRhdGFcclxuXHRcdH0pXHJcblx0XHRjb25zb2xlLmxvZygnc2FnYSB1cGxvYWRJbWFnZXMg7ISx6rO1OjogJywgcmVzdWx0KVxyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0Y29uc29sZS5lcnJvcignc2FnYSB1cGxvYWRJbWFnZXMgZXJyb3I6OiAnLCBlcnIpXHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOiBVUExPQURfSU1BR0VTX0ZBSUxVUkUsXHJcblx0XHRcdGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YVxyXG5cdFx0fSlcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxpa2VQb3N0QVBJKGRhdGEpIHsgLy8gMyDsoITri6zrkJjrqbRcclxuXHRyZXR1cm4gYXhpb3MucGF0Y2goYC9wb3N0LyR7ZGF0YX0vbGlrZWApIC8vIDQg642w7J207YSw6rCAIOqwhOuLpCwgbGlrZSAmIHVubGlrZSDripQgcGF0Y2ggKCDqsozsi5zquIDsl5Ag7J2867aA67aEIOyImOygleydtOq4sOuVjOusuCApXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsaWtlUG9zdChhY3Rpb24pIHsgLy8gMSDslaHshZjsl5DshJxcclxuXHR0cnkge1xyXG5cdFx0Y29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsaWtlUG9zdEFQSSwgYWN0aW9uLmRhdGEpIC8vIDIg642w7J207YSw66W8IOq6vOuCtOyEnFxyXG5cdFx0Y29uc29sZS5sb2coJ2xpa2VQb3N0IOyLpO2WieykkTo6JywgcmVzdWx0KVxyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogTElLRV9QT1NUX1NVQ0NFU1MsXHJcblx0XHRcdGRhdGE6IHJlc3VsdC5kYXRhLCAvLyBiYWNrLCBwb3N0SWQsIHVzZXJJZCDrk6TslrTsnojsnYxcclxuXHRcdH0pXHJcblx0XHRjb25zb2xlLmxvZygnbGlrZVBvc3Qg7JmE66OMOjonLCByZXN1bHQpXHJcblx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRjb25zb2xlLmVycm9yKCdsaWtlUG9zdCBlcnJvcjo6ICcsIGVycilcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IExJS0VfUE9TVF9GQUlMVVJFLFxyXG5cdFx0XHRlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcblx0XHR9KVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gdW5saWtlUG9zdEFQSShkYXRhKSB7IC8vIDMg7KCE64us65CY66m0XHJcblx0cmV0dXJuIGF4aW9zLmRlbGV0ZShgL3Bvc3QvJHtkYXRhfS9saWtlYCkgLy8gNCDrjbDsnbTthLDqsIAg6rCE64ukXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB1bmxpa2VQb3N0KGFjdGlvbikgeyAvLyAxIOyVoeyFmOyXkOyEnFxyXG5cdHRyeSB7XHJcblx0XHRjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHVubGlrZVBvc3RBUEksIGFjdGlvbi5kYXRhKSAvLyAyIOuNsOydtO2EsOulvCDqurzrgrTshJxcclxuXHRcdGNvbnNvbGUubG9nKCd1bmxpa2VQb3N0IOyLpO2WieykkTo6JywgcmVzdWx0KVxyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogVU5MSUtFX1BPU1RfU1VDQ0VTUyxcclxuXHRcdFx0ZGF0YTogcmVzdWx0LmRhdGEsIC8vIGJhY2ssIHBvc3RJZCx1c2VySWQg65Ok7Ja07J6I7J2MXHJcblx0XHR9KVxyXG5cdFx0Y29uc29sZS5sb2coJ1VOTElLRVBvc3Qg7JmE66OMOjonLCByZXN1bHQpXHJcblx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRjb25zb2xlLmVycm9yKCdVTkxJS0VQb3N0IGVycm9yOjogJywgZXJyKVxyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogVU5MSUtFX1BPU1RfRkFJTFVSRSxcclxuXHRcdFx0ZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhXHJcblx0XHR9KVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZFBvc3RzQVBJKGxhc3RJZCkgeyAvLyAzIOyghOuLrOuQmOuptFxyXG5cdC8vcmV0dXJuIGF4aW9zLmdldCgnL2FwaS9wb3N0cycsIGRhdGEpIC8vIDQg642w7J207YSw6rCAIOqwhOuLpCBmcm9udFxyXG5cdC8vIOuztO2GtSBnZXQg67Cp7Iud7J2AIOuNsOydtO2EsOulvCDrqrsg64Sj6riw65WM66y47JeQIOy/vOumrOyKpO2KuOungeycvOuhnCDrhKPslrTspJjslbztlZzri6QgKOyjvOyGjCksIGV0YyA6IGxpbWl0PTEwJm9mZnNldD0xMFxyXG5cdC8vIO2PrOyKpO2KuCDrk7HsnYAg642w7J207YSwIOy6kOyLseydtCDslYjrkJjsp4Drp4wsIOqyn+ydgCDrjbDsnbTthLAg7LqQ7Iux7J2EIOqwmeydtCDtlaAg7IiYIOyeiOuLpFxyXG5cdC8vIGxhc3RJZCDqsIAgdW5kZWZpbmVkIOyduCDqsr3smrAgMFxyXG5cdHJldHVybiBheGlvcy5nZXQoYC9wb3N0cz9sYXN0SWQ9JHtsYXN0SWQgfHwgMH1gKSAvLyA0IOuNsOydtO2EsOqwgCDqsITri6QgLFxyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZFBvc3RzKGFjdGlvbikgeyAvLyAxIOyVoeyFmOyXkOyEnFxyXG5cdHRyeSB7XHJcblx0XHRjb25zb2xlLmxvZygnU2FnYXM6OiBsb2FkUG9zdHMg7Iuk7ZaJ7KSRJywgYWN0aW9uLmxhc3RJZClcclxuXHRcdGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZFBvc3RzQVBJLCBhY3Rpb24ubGFzdElkKSAvLyAyIOuNsOydtO2EsOulvCDqurzrgrTshJxcclxuXHRcdC8veWllbGQgZGVsYXkoMTAwMCkgZnJvbnRcclxuXHRcdGNvbnNvbGUubG9nKCdsb2FkUG9zdHMg7JmE66OMOjogJywgcmVzdWx0KVxyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogTE9BRF9QT1NUU19TVUNDRVNTLFxyXG5cdFx0XHQvLyBkYXRhOiBnZW5lcmF0ZUR1bW15UG9zdCgxMCksIC8vIGRhdGEgMTAg6rCcIGZyb250XHJcblx0XHRcdGRhdGE6IHJlc3VsdC5kYXRhLFxyXG5cdFx0fSlcclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoJ2xvYWRQb3N0cyBlcnJvcjogJywgZXJyKVxyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogTE9BRF9QT1NUU19GQUlMVVJFLFxyXG5cdFx0XHRlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRQb3N0QVBJKGRhdGEpIHtcclxuXHRyZXR1cm4gYXhpb3MuZ2V0KGAvcG9zdC8ke2RhdGF9YClcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRQb3N0KGFjdGlvbikge1xyXG5cdHRyeSB7XHJcblx0XHRjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRQb3N0QVBJLCBhY3Rpb24uZGF0YSlcclxuXHRcdGNvbnNvbGUubG9nKCdzYWdhIGxvYWRQb3N0IOyalOyyrSA6OiAnLCBhY3Rpb24uZGF0YSlcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IExPQURfUE9TVF9TVUNDRVNTLFxyXG5cdFx0XHRkYXRhOiByZXN1bHQuZGF0YSxcclxuXHRcdH0pXHJcblx0XHRjb25zb2xlLmxvZygnc2FnYSBsb2FkUG9zdCDshLHqs7UgOjogJywgcmVzdWx0KVxyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0Y29uc29sZS5lcnJvcignc2FnYSBsb2FkUG9zdCDsi6TtjKggOjogJywgZXJyKVxyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogTE9BRF9QT1NUX0ZBSUxVUkUsXHJcblx0XHRcdGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuXHRcdH0pXHJcblx0fVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gYWRkUG9zdEFQSShkYXRhKSB7IC8vIDMg7KCE64us65CY66m0XHJcblx0Ly9yZXR1cm4gYXhpb3MucG9zdCgnL2FwaS9wb3N0JywgZGF0YSkgLy8gNCDrjbDsnbTthLDqsIAg6rCE64ukIGZyb250XHJcblx0Ly8gZGF0YSBjb250ZW50IOqwgCByZXEuYm9keS5jb250ZW50IOuhnCDrsLHsl5Trk5zsl5Ag67OA7ZmYXHJcblx0Ly9yZXR1cm4gYXhpb3MucG9zdCgnL3Bvc3QnLCB7Y29udGVudDogZGF0YX0pIC8vIDQg642w7J207YSw6rCAIOqwhOuLpCxcclxuXHQvLyBmb3JtIGRhdGEg64qUIHtjb250ZW50OiBkYXRhfSDsmYAg6rCZ7J20IOqwkOyLuOuptCDslYjrkJzri6QsIOuwlOuhnCBkYXRhIOuhnCDrhKPslrTspJjslbztlahcclxuXHRyZXR1cm4gYXhpb3MucG9zdCgnL3Bvc3QnLCBkYXRhKSAvLyA0IOuNsOydtO2EsOqwgCDqsITri6RcclxufVxyXG5cclxuZnVuY3Rpb24qIGFkZFBvc3QoYWN0aW9uKSB7IC8vIDEg7JWh7IWY7JeQ7IScXHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkUG9zdEFQSSwgYWN0aW9uLmRhdGEpIC8vIDIg642w7J207YSw66W8IOq6vOuCtOyEnFxyXG5cdFx0Ly95aWVsZCBkZWxheSgxMDAwKSBmcm9udFxyXG5cdFx0Ly9jb25zdCBpZCA9IHNob3J0SWQuZ2VuZXJhdGUoKSAvLyBmcm9udCDsnZgg642U66+4IOyVhOuUlFxyXG5cdFx0Y29uc29sZS5sb2coJ2FkZFBvc3Qg7Iuk7ZaJ7KSROjonLCByZXN1bHQpXHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOiBBRERfUE9TVF9TVUNDRVNTLFxyXG5cdFx0XHQvKmRhdGE6IHsgLy8gZnJvbnQgZHVtbXlcclxuXHRcdFx0XHRpZCxcclxuXHRcdFx0XHRjb250ZW50OiBhY3Rpb24uZGF0YSxcclxuXHRcdFx0fSovXHJcblx0XHRcdGRhdGE6IHJlc3VsdC5kYXRhLCAvLyBiYWNrLCDsi6TsoJzroZwg6rKM7Iuc6riA7J20IOuTpOyWtOyeiOydjFxyXG5cdFx0fSlcclxuXHRcdGNvbnNvbGUubG9nKCdhZGRQb3N0IOyZhOujjDo6JywgcmVzdWx0KVxyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogQUREX1BPU1RfVE9fTUUsXHJcblx0XHRcdC8vIGRhdGE6IGlkLCAvLyBmcm9udCBkdW1teVxyXG5cdFx0XHRkYXRhOiByZXN1bHQuZGF0YS5pZCwgLy8gYmFja1xyXG5cdFx0fSlcclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoJ2FkZFBvc3QgZXJyb3I6OiAnLCBlcnIpXHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOiBBRERfUE9TVF9GQUlMVVJFLFxyXG5cdFx0XHRlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGFcclxuXHRcdH0pXHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVQb3N0QVBJKGRhdGEpIHsgLy8gMyDsoITri6zrkJjrqbRcclxuXHQvL3JldHVybiBheGlvcy5wb3N0KCcvYXBpL3Bvc3QnLCBkYXRhKSAvLyA0IOuNsOydtO2EsOqwgCDqsITri6QgZnJvbnRcclxuXHRyZXR1cm4gYXhpb3MuZGVsZXRlKGAvcG9zdC8ke2RhdGF9YCkgLy8gNCDrjbDsnbTthLDqsIAg6rCE64ukIGJhY2sgLy9kZWxldGUg7J2YIGRhdGEg64qUIHBvc3QuaWQgKFBvc3RDYXJkLmpzKeyXkOyEnCDtmZXsnbgg6rCA64qlXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiByZW1vdmVQb3N0KGFjdGlvbikgeyAvLyAxIOyVoeyFmOyXkOyEnFxyXG5cdHRyeSB7IC8vIO2PrOyKpO2KuCDrpqzrk4DshJzsg4Htg5zsmYAg7Jyg7KCA66as65OA7ISc7IOB7YOc7JmAIOuPmeyLnOyXkCDtlZzrsKnsl5Ag67CU6r+A7IiYIOyXhuq4sOuVjOusuOyXkCDslaHshZjsnYQg65GQ67KI7Jy866GcIOuwlOq/lOykgOuLpCxcclxuXHRcdGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwocmVtb3ZlUG9zdEFQSSwgYWN0aW9uLmRhdGEpIC8vIDIg642w7J207YSw66W8IOq6vOuCtOyEnFxyXG5cdFx0Ly95aWVsZCBkZWxheSgxMDAwKSBmcm9udFxyXG5cdFx0Y29uc29sZS5sb2coJ3JlbW92ZVBvc3Qg7Iuk7ZaJOjogJywgYWN0aW9uLmRhdGEpXHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOiBSRU1PVkVfUE9TVF9TVUNDRVNTLFxyXG5cdFx0XHRkYXRhOiByZXN1bHQuZGF0YSwgLy8g7Ja065akIOqyjOyLnOusvOydhCDsp4Dsm6DripTsp4AgaWQg6rCA7J6I7J2E6rKDLFxyXG5cdFx0fSlcclxuXHRcdGNvbnNvbGUubG9nKCdyZW1vdmVQb3N0IOyZhOujjDo6ICcsIHJlc3VsdClcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IFJFTU9WRV9QT1NUX09GX01FLFxyXG5cdFx0XHQvL2RhdGE6IGFjdGlvbi5kYXRhLCBmcm9udFxyXG5cdFx0XHRkYXRhOiBhY3Rpb24uZGF0YSwgIC8vIGFjdGlvbiDsnbQg65Ok7Ja07JmU7J2E65WMIOuNsOydtO2EsFxyXG5cdFx0fSlcclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoJ3JlbW92ZVBvc3QgZXJyb3I6ICcsIGVycilcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IFJFTU9WRV9QT1NUX0ZBSUxVUkUsXHJcblx0XHRcdGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YVxyXG5cdFx0fSlcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZENvbW1lbnRBUEkoZGF0YSkgeyAvLyAzIOyghOuLrOuQmOuptFxyXG5cdC8v7KO87IaM64qUIOuwseyXlOuTnOyZgCDtlITroaDtirjsnZgg7JW97IaN7J2867+QIOygle2VtOynhOqxtOyXhuuLpFxyXG5cdC8vcmV0dXJuIGF4aW9zLnBvc3QoYC9hcGkvcG9zdC8ke2RhdGEucG9zdElkfS9jb21tZW50YCwgZGF0YSkgLy8gNCDrjbDsnbTthLDqsIAg6rCE64ukIC8vIGZyb250XHJcblx0cmV0dXJuIGF4aW9zLnBvc3QoYC9wb3N0LyR7ZGF0YS5wb3N0SWR9L2NvbW1lbnRgLCBkYXRhKSAvLyA0IOuNsOydtO2EsOqwgCDqsITri6QgLy8gUE9TVCAvcG9zdC8xL2NvbW1lbnRcclxufVxyXG5cclxuZnVuY3Rpb24qIGFkZENvbW1lbnQoYWN0aW9uKSB7IC8vIDEg7JWh7IWY7JeQ7IScXHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkQ29tbWVudEFQSSwgYWN0aW9uLmRhdGEpIC8vIDIg642w7J207YSw66W8IOq6vOuCtOyEnCAvL2JhY2tcclxuXHRcdC8veWllbGQgZGVsYXkoMTAwMCkgZnJvbnRcclxuXHRcdGNvbnNvbGUubG9nKCdhZGRDb21tZW50IOyLpO2WieykkSA6OicsIGFjdGlvbi5kYXRhKVxyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogQUREX0NPTU1FTlRfU1VDQ0VTUyxcclxuXHRcdFx0Ly9kYXRhOiBhY3Rpb24uZGF0YSAvLyBmcm9udFxyXG5cdFx0XHRkYXRhOiByZXN1bHQuZGF0YSxcclxuXHRcdH0pXHJcblx0XHRjb25zb2xlLmxvZygnYWRkQ29tbWVudCDsmYTro4w6OicsIHJlc3VsdClcclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoJ2FkZENvbW1lbnQgZXJyb3I6OiAnLCBlcnIpXHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOiBBRERfQ09NTUVOVF9GQUlMVVJFLFxyXG5cdFx0XHRlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGFcclxuXHRcdH0pXHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkUG9zdCgpIHtcclxuXHR5aWVsZCB0YWtlTGF0ZXN0KExPQURfUE9TVF9SRVFVRVNULCBsb2FkUG9zdClcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoUmV0d2VldCgpIHtcclxuXHR5aWVsZCB0YWtlTGF0ZXN0KFJFVFdFRVRfUkVRVUVTVCwgcmV0d2VldClcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoVXBsb2FkSW1hZ2VzKCkge1xyXG5cdHlpZWxkIHRha2VMYXRlc3QoVVBMT0FEX0lNQUdFU19SRVFVRVNULCB1cGxvYWRJbWFnZXMpXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExpa2VQb3N0KCkge1xyXG5cdHlpZWxkIHRha2VMYXRlc3QoTElLRV9QT1NUX1JFUVVFU1QsIGxpa2VQb3N0KVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hVbmxpa2VQb3N0KCkge1xyXG5cdHlpZWxkIHRha2VMYXRlc3QoVU5MSUtFX1BPU1RfUkVRVUVTVCwgdW5saWtlUG9zdClcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZFBvc3RzKCkge1xyXG5cdHlpZWxkIHRocm90dGxlKDUwMDAsIExPQURfUE9TVFNfUkVRVUVTVCwgbG9hZFBvc3RzKVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hBZGRQb3N0KCkge1xyXG5cdHlpZWxkIHRha2VMYXRlc3QoQUREX1BPU1RfUkVRVUVTVCwgYWRkUG9zdClcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoUmVtb3ZlUG9zdCgpIHtcclxuXHR5aWVsZCB0YWtlTGF0ZXN0KFJFTU9WRV9QT1NUX1JFUVVFU1QsIHJlbW92ZVBvc3QpXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEFkZENvbW1lbnQoKSB7XHJcblx0eWllbGQgdGFrZUxhdGVzdChBRERfQ09NTUVOVF9SRVFVRVNULCBhZGRDb21tZW50KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcG9zdFNhZ2EoKSB7XHJcblx0eWllbGQgYWxsKFtcclxuXHRcdGZvcmsod2F0Y2hMb2FkUG9zdCksXHJcblx0XHRmb3JrKHdhdGNoUmV0d2VldCksXHJcblx0XHRmb3JrKHdhdGNoVXBsb2FkSW1hZ2VzKSxcclxuXHRcdGZvcmsod2F0Y2hMaWtlUG9zdCksXHJcblx0XHRmb3JrKHdhdGNoVW5saWtlUG9zdCksXHJcblx0XHRmb3JrKHdhdGNoTG9hZFBvc3RzKSxcclxuXHRcdGZvcmsod2F0Y2hBZGRQb3N0KSxcclxuXHRcdGZvcmsod2F0Y2hSZW1vdmVQb3N0KSxcclxuXHRcdGZvcmsod2F0Y2hBZGRDb21tZW50KSxcclxuXHRdKVxyXG59IiwiaW1wb3J0IHthbGwsIGNhbGwsIGRlbGF5LCBmb3JrLCBwdXQsIHRha2VMYXRlc3R9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQge1xyXG5cdENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFLFxyXG5cdENIQU5HRV9OSUNLTkFNRV9SRVFVRVNULFxyXG5cdENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTLFxyXG5cdEZPTExPV19GQUlMVVJFLFxyXG5cdEZPTExPV19SRVFVRVNULFxyXG5cdEZPTExPV19TVUNDRVNTLCBMT0FEX0ZPTExPV0VSU19GQUlMVVJFLCBMT0FEX0ZPTExPV0VSU19SRVFVRVNULFxyXG5cdExPQURfRk9MTE9XRVJTX1NVQ0NFU1MsIExPQURfRk9MTE9XSU5HU19GQUlMVVJFLCBMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVCwgTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1MsXHJcblx0TE9BRF9NWV9JTkZPX0ZBSUxVUkUsXHJcblx0TE9BRF9NWV9JTkZPX1JFUVVFU1QsXHJcblx0TE9BRF9NWV9JTkZPX1NVQ0NFU1MsIExPQURfVVNFUl9GQUlMVVJFLCBMT0FEX1VTRVJfUkVRVUVTVCwgTE9BRF9VU0VSX1NVQ0NFU1MsXHJcblx0TE9HX0lOX0ZBSUxVUkUsXHJcblx0TE9HX0lOX1JFUVVFU1QsXHJcblx0TE9HX0lOX1NVQ0NFU1MsXHJcblx0TE9HX09VVF9GQUlMVVJFLFxyXG5cdExPR19PVVRfUkVRVUVTVCxcclxuXHRMT0dfT1VUX1NVQ0NFU1MsIFJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFLCBSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCwgUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1MsXHJcblx0U0lHTl9VUF9GQUlMVVJFLFxyXG5cdFNJR05fVVBfUkVRVUVTVCxcclxuXHRTSUdOX1VQX1NVQ0NFU1MsXHJcblx0VU5GT0xMT1dfRkFJTFVSRSxcclxuXHRVTkZPTExPV19SRVFVRVNULFxyXG5cdFVORk9MTE9XX1NVQ0NFU1MsXHJcbn0gZnJvbSBcIi4uL3JlZHVjZXJzL3VzZXJcIjtcclxuXHJcblxyXG5mdW5jdGlvbiBsb2dJbkFQSShkYXRhKSB7IC8vIGdlbmVyYXRvciDslYTri5hcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvL3JldHVybiBheGlvcy5wb3N0KCcvYXBpL2xvZ2luJywgZGF0YSkgLy8g7Iuk7KCcIOyEnOuyhOyXkCDroZzqt7jsnbgg7JqU7LKt7J2EIOuztOuDhCAvLyBmcm9udFxyXG5cclxuXHQvLyDsi6TsoJwg7ISc67KE7JeQIOuhnOq3uOyduCDsmpTssq3snYQg67O064OEIC8vIGJhY2tcclxuXHQvL3JldHVybiBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwNjUvdXNlci9sb2dpbicsIGRhdGEpXHJcblxyXG5cdC8vIGxvY2FsaG9zdCDspJHrs7Ug7JeG7JWg6riwXHJcblx0cmV0dXJuIGF4aW9zLnBvc3QoJy91c2VyL2xvZ2luJywgZGF0YSlcclxufVxyXG5cclxuLy8g7YWM7Iqk7Yq4IOy9lOuTnFxyXG4vLyBjb25zdCBsID0gbG9nSW4oe3R5cGU6ICdMT0dfSU5fUkVRVUVTVCcsIGRhdGE6IHtpZDogJ3JsYWFsc2RuOEBuYXZlci5jb20nfX0pXHJcbi8vIFx0XHRsLm5leHQoKTtcclxuLy8gXHRcdGwubmV4dCgpO1xyXG4vLy8vLy8vLy8vLy8vLy8vL1xyXG5mdW5jdGlvbiogbG9nSW4oYWN0aW9uKSB7IC8vIGxvZ2luIGFjdGlvbiByZXF1ZXN0IOqwgCBhY3Rpb24g7JeQIOyghOuLrFxyXG5cdHRyeSB7IC8vIOyalOyyrSDsi6TtjKgg64yA67mEXHJcblx0XHQvL3lpZWxkIGRlbGF5KDEwMDApIC8vIGZyb250XHJcblx0XHRjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvZ0luQVBJLCBhY3Rpb24uZGF0YSkgLy8g7ISc67KE7JeQ7IScIOuwm+ydgCDqsrDqs7wg6rCS7J2EIOuwm+ydjFxyXG5cdFx0Y29uc29sZS5sb2coJ3NhZ2EgbG9nSW4g7Iuk7ZaJ7KSROjonLCBhY3Rpb24uZGF0YSlcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IExPR19JTl9TVUNDRVNTLFxyXG5cdFx0XHQvL2RhdGE6IGFjdGlvbi5kYXRhLCAvLyBmcm9udFxyXG5cdFx0XHRkYXRhOiByZXN1bHQuZGF0YSAvLyAo7ISx6rO1IOqysOqzvCDri7TquYApIGJhY2tcclxuXHRcdH0pXHJcblx0XHRjb25zb2xlLmxvZygnc2FnYSBsb2dJbiDsmYTro4wgOjonLCByZXN1bHQpXHJcblx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRjb25zb2xlLmVycm9yKCdsb2dJbicsIGVycilcclxuXHRcdHlpZWxkIHB1dCh7IC8vIHB1dCDsnYAgZGlzcGF0Y2gg65286rOgIOyDneqwge2VmOyekFxyXG5cdFx0XHR0eXBlOiBMT0dfSU5fRkFJTFVSRSxcclxuXHRcdFx0ZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhIC8vICjsi6TtjKgg6rKw6rO8IOuLtOq5gClcclxuXHRcdH0pXHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2dPdXRBUEkoKSB7XHJcblx0Ly8gcmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvbG9nb3V0JykgZnJvbnRcclxuXHRyZXR1cm4gYXhpb3MucG9zdCgnL3VzZXIvbG9nb3V0JylcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvZ091dCgpIHtcclxuXHR0cnkgeyAvLyDsmpTssq0g7Iuk7YyoIOuMgOu5hFxyXG5cdFx0Ly95aWVsZCBkZWxheSgxMDAwKSBmcm9udFxyXG5cdFx0eWllbGQgY2FsbChsb2dPdXRBUEkpIC8vIOyEnOuyhOyXkOyEnCDrsJvsnYAg6rKw6rO8IOqwkuydhCDrsJvsnYwgYmFja1xyXG5cdFx0Y29uc29sZS5sb2coJ3NhZ2FzOjogbG9nb3V0IOyLpO2WiScpXHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOiBMT0dfT1VUX1NVQ0NFU1MsXHJcblx0XHR9KVxyXG5cdFx0Y29uc29sZS5sb2coJ3NhZ2FzOjogbG9nb3V0IOyZhOujjCcpXHJcblx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRjb25zb2xlLmVycm9yKCdmcm9udCBsb2dPdXQgOiAnLCBlcnIpXHJcblx0XHR5aWVsZCBwdXQoeyAvLyBwdXQg7J2AIGRpc3BhdGNoIOudvOqzoCDsg53qsIHtlZjsnpBcclxuXHRcdFx0dHlwZTogTE9HX09VVF9GQUlMVVJFLFxyXG5cdFx0XHRlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEgLy8gKOyLpO2MqCDqsrDqs7wg64u06rmAKVxyXG5cdFx0fSlcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoYW5nZU5pY2tuYW1lQVBJKGRhdGEpIHsgLy8gZ2VuZXJhdG9yIOyVhOuLmFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IC8vIOyLpOygnCDshJzrsoTsl5Ag66Gc6re47J24IOyalOyyreydhCDrs7Trg4QgLy8gYmFja1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IC8vcmV0dXJuIGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzA2NS91c2VyL2xvZ2luJywgZGF0YSlcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAvLyBsb2NhbGhvc3Qg7KSR67O1IOyXhuyVoOq4sFxyXG5cdHJldHVybiBheGlvcy5wYXRjaCgnL3VzZXIvbmlja25hbWUnLCB7bmlja25hbWU6IGRhdGF9KVxyXG59XHJcblxyXG5mdW5jdGlvbiogY2hhbmdlTmlja25hbWUoYWN0aW9uKSB7IC8vIGxvZ2luIGFjdGlvbiByZXF1ZXN0IOqwgCBhY3Rpb24g7JeQIOyghOuLrFxyXG5cdHRyeSB7IC8vIOyalOyyrSDsi6TtjKgg64yA67mEXHJcblx0XHQvL3lpZWxkIGRlbGF5KDEwMDApIC8vIGZyb250XHJcblx0XHRjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGNoYW5nZU5pY2tuYW1lQVBJLCBhY3Rpb24uZGF0YSkgLy8g7ISc67KE7JeQ7IScIOuwm+ydgCDqsrDqs7wg6rCS7J2EIOuwm+ydjFxyXG5cdFx0Y29uc29sZS5sb2coJ3NhZ2EgY2hhbmdlTmlja25hbWUg7Iuk7ZaJ7KSROjonLCBhY3Rpb24uZGF0YSlcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTLFxyXG5cdFx0XHQvL2RhdGE6IGFjdGlvbi5kYXRhLCAvLyBmcm9udFxyXG5cdFx0XHRkYXRhOiByZXN1bHQuZGF0YSAvLyAo7ISx6rO1IOqysOqzvCDri7TquYApIGJhY2tcclxuXHRcdH0pXHJcblx0XHRjb25zb2xlLmxvZygnc2FnYSBjaGFuZ2VOaWNrbmFtZSDsmYTro4wgOjonLCByZXN1bHQpXHJcblx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRjb25zb2xlLmVycm9yKCdjaGFuZ2VOaWNrbmFtZScsIGVycilcclxuXHRcdHlpZWxkIHB1dCh7IC8vIHB1dCDsnYAgZGlzcGF0Y2gg65286rOgIOyDneqwge2VmOyekFxyXG5cdFx0XHR0eXBlOiBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSxcclxuXHRcdFx0ZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhIC8vICjsi6TtjKgg6rKw6rO8IOuLtOq5gClcclxuXHRcdH0pXHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkTXlJbmZvQVBJKHVzZXJJZCkge1xyXG5cdC8vIOyEnOuyhOyXkCDsmpTssq3snYQg67O064K064qUIOu2gOu2hFxyXG5cdHJldHVybiBheGlvcy5nZXQodXNlcklkID8gYC91c2VyLyR7dXNlcklkfWAgOiAnL3VzZXIvJywge1xyXG5cdFx0d2l0aENyZWRlbnRpYWxzOiB0cnVlLC8vIO2BtOudvOydtOyWuO2KuOyXkOyEnCDsmpTssq0g67O064K8IOuVjOuKlCDruIzrnbzsmrDsoIDqsIAg7L+g7YKk66W8IOqwmeydtCDrj5nrtIntlbTspJjsmpRcclxuXHR9KTsgLy8g7ISc67KE7IKs7J2065Oc66CM642U66eB7J28IOuVjOuKlCwg67iM65287Jqw7KCA6rCAIOyXhuyWtOyalC5cclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRNeUluZm8oYWN0aW9uKSB7XHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZE15SW5mb0FQSSwgYWN0aW9uLmRhdGEpXHJcblx0XHRjb25zb2xlLmxvZygnc2FnYSBsb2FkTXlJbmZvIOyLpO2WiSA6OiAnLCBhY3Rpb24uZGF0YSlcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IExPQURfTVlfSU5GT19TVUNDRVNTLFxyXG5cdFx0XHRkYXRhOiByZXN1bHQuZGF0YSxcclxuXHRcdFx0bWU6ICFhY3Rpb24uZGF0YVxyXG5cdFx0fSlcclxuXHRcdGNvbnNvbGUubG9nKCdzYWdhIGxvYWRNeUluZm8g7ISx6rO1OjogJywgcmVzdWx0KVxyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0Y29uc29sZS5lcnJvcignc2FnYSBsb2FkTXlJbmZvIGVycm9yIDo6ICcsIGVycilcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IExPQURfTVlfSU5GT19GQUlMVVJFLFxyXG5cdFx0XHRlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGFcclxuXHRcdH0pXHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBmb2xsb3dBUEkoZGF0YSkgeyAvLyBkYXRhIOyXkCDsgqzsmqnsnpAgaWQg64Sj7Ja07KO86riwXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IC8vIHJldHVybiBheGlvcy5wb3N0KCcvYXBpL2ZvbGxvdycsIGRhdGEpIGZyb250XHJcblx0cmV0dXJuIGF4aW9zLnBhdGNoKGAvdXNlci8ke2RhdGF9L2ZvbGxvd2ApXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBmb2xsb3coYWN0aW9uKSB7XHJcblx0dHJ5IHtcclxuXHRcdC8veWllbGQgZGVsYXkoMTAwMCkgZnJvbnRcclxuXHRcdGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoZm9sbG93QVBJLCBhY3Rpb24uZGF0YSlcclxuXHRcdGNvbnNvbGUubG9nKCdzYWdhIGZvbGxvdyDsi6TtlokgOiAnLCByZXN1bHQpXHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOiBGT0xMT1dfU1VDQ0VTUyxcclxuXHRcdFx0Ly9kYXRhOiBhY3Rpb24uZGF0YSBmcm9udFxyXG5cdFx0XHRkYXRhOiByZXN1bHQuZGF0YVxyXG5cdFx0fSlcclxuXHRcdGNvbnNvbGUubG9nKCdzYWdhIGZvbGxvdyDsmYTro4wgOjogJywgcmVzdWx0KVxyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0Y29uc29sZS5lcnJvcignc2FnYSBmb2xsb3cgZXJyb3IgOjogJywgZXJyKVxyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogRk9MTE9XX0ZBSUxVUkUsXHJcblx0XHRcdGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuXHRcdH0pXHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiB1bmZvbGxvd0FQSShkYXRhKSB7Ly8gZGF0YSDsl5Ag7IKs7Jqp7J6QIGlkIOuEo+yWtOyjvOq4sFxyXG5cdC8vcmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvdW5mb2xsb3cnLCBkYXRhKSBmcm9udFxyXG5cdHJldHVybiBheGlvcy5kZWxldGUoYC91c2VyLyR7ZGF0YX0vZm9sbG93YClcclxufVxyXG5cclxuZnVuY3Rpb24qIHVuZm9sbG93KGFjdGlvbikge1xyXG5cdHRyeSB7XHJcblx0XHRjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHVuZm9sbG93QVBJLCBhY3Rpb24uZGF0YSlcclxuXHRcdC8veWllbGQgZGVsYXkoMTAwMCkgZnJvbnRcclxuXHRcdGNvbnNvbGUubG9nKCdzYWdhIHVuZm9sbG93IOyalOyyrSA6OiAnLCBhY3Rpb24uZGF0YSlcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IFVORk9MTE9XX1NVQ0NFU1MsXHJcblx0XHRcdC8vZGF0YTogYWN0aW9uLmRhdGEgZnJvbnRcclxuXHRcdFx0ZGF0YTogcmVzdWx0LmRhdGFcclxuXHRcdH0pXHJcblx0XHRjb25zb2xlLmxvZygnc2FnYSB1bmZvbGxvdyDshLHqs7U6OiAnLCByZXN1bHQpXHJcblx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRjb25zb2xlLmVycm9yKCdzYWdhIHVuZm9sbG93IGVycm9yOjogJywgZXJyKVxyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogVU5GT0xMT1dfRkFJTFVSRSxcclxuXHRcdFx0ZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG5cdFx0fSlcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNpZ25VcEFQSShkYXRhKSB7XHJcblx0Ly8gYmFjayBlbmQgc2VydmVyIGFkZHJcclxuXHQvLyBkYXRhIOuKlCBlbWFpbCwgbmlja25hbWUsIHBhc3N3b3JkIG9iamVjdFxyXG5cdC8vcmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvc2lnbnVwJywgZGF0YSkgLy8gZnJvbnRcclxuXHRyZXR1cm4gYXhpb3MucG9zdCgnL3VzZXInLCBkYXRhKSAvLyBiYWNrXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBzaWduVXAoYWN0aW9uKSB7XHJcblx0dHJ5IHtcclxuXHRcdC8veWllbGQgZGVsYXkoMTAwMClcclxuXHRcdGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoc2lnblVwQVBJLCBhY3Rpb24uZGF0YSlcclxuXHRcdGNvbnNvbGUubG9nKCdzYWdhIHNpZ24gdXAgcmVzdWx0IOyLpO2WieykkSA6OiAnLCBhY3Rpb24uZGF0YSlcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IFNJR05fVVBfU1VDQ0VTUyxcclxuXHRcdFx0Ly9kYXRhOiByZXN1bHQuZGF0YVxyXG5cdFx0fSlcclxuXHRcdGNvbnNvbGUubG9nKCdzYWdhIHNpZ24gdXAg7JmE66OMIDo6ICcsIHJlc3VsdClcclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoJ3NhZ2Egc2lnblVwIGVycm9yIDogJywgZXJyKVxyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogU0lHTl9VUF9GQUlMVVJFLFxyXG5cdFx0XHRlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGFcclxuXHRcdH0pXHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkRm9sbG93ZXJzQVBJKGRhdGEpIHtcclxuXHRyZXR1cm4gYXhpb3MuZ2V0KCcvdXNlci9mb2xsb3dlcnMnLCBkYXRhKVxyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZEZvbGxvd2VycyhhY3Rpb24pIHtcclxuXHR0cnkge1xyXG5cdFx0Y29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkRm9sbG93ZXJzQVBJLCBhY3Rpb24uZGF0YSlcclxuXHRcdGNvbnNvbGUubG9nKCdzYWdhIGZvbGxvd2Vyczo6IOyalOyyrScsIGFjdGlvbi5kYXRhKVxyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUyxcclxuXHRcdFx0ZGF0YTogcmVzdWx0LmRhdGEsXHJcblx0XHR9KVxyXG5cdFx0Y29uc29sZS5sb2coJ3NhZ2EgZm9sbG93ZXJzOjog7ISx6rO1JywgcmVzdWx0KVxyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0Y29uc29sZS5lcnJvcignc2FnYSBmb2xsb3dlcnM6OicsIGVycilcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IExPQURfRk9MTE9XRVJTX0ZBSUxVUkUsXHJcblx0XHRcdGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuXHRcdH0pXHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkRm9sbG93aW5nc0FQSShkYXRhKSB7XHJcblx0cmV0dXJuIGF4aW9zLmdldCgnL3VzZXIvZm9sbG93aW5ncycsIGRhdGEpXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkRm9sbG93aW5ncyhhY3Rpb24pIHtcclxuXHR0cnkge1xyXG5cdFx0Y29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkRm9sbG93aW5nc0FQSSwgYWN0aW9uLmRhdGEpXHJcblx0XHRjb25zb2xlLmxvZygnc2FnYSBmb2xsb3dpbmdzIOyalOyyrTo6JywgYWN0aW9uLmRhdGEpXHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOiBMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUyxcclxuXHRcdFx0ZGF0YTogcmVzdWx0LmRhdGFcclxuXHRcdH0pXHJcblx0XHRjb25zb2xlLmxvZygnc2FnYSBmb2xsb3dpbmdzIOyEseqztTo6JywgcmVzdWx0KVxyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0Y29uc29sZS5lcnJvcignc2FnYSBmb2xsb3dpbmdzIOyLpO2MqDo6JywgZXJyKVxyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkUsXHJcblx0XHRcdGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YVxyXG5cdFx0fSlcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZUZvbGxvd2VyQVBJKGRhdGEpIHtcclxuXHRyZXR1cm4gYXhpb3MuZGVsZXRlKGAvdXNlci9mb2xsb3dlci8ke2RhdGF9YCkgLy8g66qH67KI7Ke47J2YIO2MlOuhnOybjOulvCDsoJzqsbDtlZzri6RcclxufVxyXG5cclxuZnVuY3Rpb24qIHJlbW92ZUZvbGxvd2VyKGFjdGlvbikge1xyXG5cdHRyeSB7XHJcblx0XHRjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHJlbW92ZUZvbGxvd2VyQVBJLCBhY3Rpb24uZGF0YSlcclxuXHRcdGNvbnNvbGUubG9nKCdzYWdhIHJlbW92ZUZvbGxvd2VyIOyalOyyrTo6ICcsIGFjdGlvbi5kYXRhKVxyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1MsXHJcblx0XHRcdGRhdGE6IHJlc3VsdC5kYXRhXHJcblx0XHR9KVxyXG5cdFx0Y29uc29sZS5sb2coJ3NhZ2EgcmVtb3ZlRm9sbG93ZXIg7ISx6rO1OjogJywgcmVzdWx0KVxyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0Y29uc29sZS5lcnJvcignc2FnYSByZW1vdmVGb2xsb3dlciDsi6TtjKg6OiAnLCBlcnIpXHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOiBSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRSxcclxuXHRcdFx0ZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhXHJcblx0XHR9KVxyXG5cdH1cclxufVxyXG5mdW5jdGlvbiBsb2FkVXNlckFQSShkYXRhKXtcclxuXHRyZXR1cm4gYXhpb3MuZ2V0KGAvdXNlci8ke2RhdGF9YClcclxufVxyXG5mdW5jdGlvbiogbG9hZFVzZXIoYWN0aW9uKXtcclxuXHR0cnkge1xyXG5cdCAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRVc2VyQVBJLCBhY3Rpb24uZGF0YSlcclxuXHRcdGNvbnNvbGUubG9nKCdzYWdhIGxvYWRVc2VyIOyLpO2WiSA6OiAnLCBhY3Rpb24uZGF0YSlcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IExPQURfVVNFUl9TVUNDRVNTLFxyXG5cdFx0XHRkYXRhOiByZXN1bHQuZGF0YVxyXG5cdFx0fSlcclxuXHRcdGNvbnNvbGUubG9nKCdzYWdhIGxvYWRVc2VyIOyEseqztSA6OiAnLCByZXN1bHQpXHJcblx0fWNhdGNoIChlcnIpIHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoJ3NhZ2EgbG9hZFVzZXIgRmFpbHVyZSDsi6TtjKggOjogJywgZXJyKVxyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogTE9BRF9VU0VSX0ZBSUxVUkUsXHJcblx0XHRcdGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YVxyXG5cdFx0fSlcclxuXHR9XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoTG9hZFVzZXIoKXtcclxuXHR5aWVsZCB0YWtlTGF0ZXN0KExPQURfVVNFUl9SRVFVRVNULCBsb2FkVXNlcilcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hSZW1vdmVGb2xsb3dlcigpIHtcclxuXHR5aWVsZCB0YWtlTGF0ZXN0KFJFTU9WRV9GT0xMT1dFUl9SRVFVRVNULCByZW1vdmVGb2xsb3dlcilcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZEZvbGxvd2VycygpIHtcclxuXHR5aWVsZCB0YWtlTGF0ZXN0KExPQURfRk9MTE9XRVJTX1JFUVVFU1QsIGxvYWRGb2xsb3dlcnMpXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRGb2xsb3dpbmdzKCkge1xyXG5cdHlpZWxkIHRha2VMYXRlc3QoTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1QsIGxvYWRGb2xsb3dpbmdzKVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hDaGFuZ2VOaWNrbmFtZSgpIHtcclxuXHR5aWVsZCB0YWtlTGF0ZXN0KENIQU5HRV9OSUNLTkFNRV9SRVFVRVNULCBjaGFuZ2VOaWNrbmFtZSlcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZE15SW5mbygpIHtcclxuXHR5aWVsZCB0YWtlTGF0ZXN0KExPQURfTVlfSU5GT19SRVFVRVNULCBsb2FkTXlJbmZvKVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hGb2xsb3coKSB7XHJcblx0eWllbGQgdGFrZUxhdGVzdChGT0xMT1dfUkVRVUVTVCwgZm9sbG93KVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hVbkZvbGxvdygpIHtcclxuXHR5aWVsZCB0YWtlTGF0ZXN0KFVORk9MTE9XX1JFUVVFU1QsIHVuZm9sbG93KVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2dJbigpIHtcdC8vIOuhnOq3uOyduCDslaHshZjsnbQg7Iuk7ZaJ65Cg65WM6rmM7KeAIOq4sOuLpOumrOqyoOuLpOuKlCDrnLtcclxuXHR5aWVsZCB0YWtlTGF0ZXN0KExPR19JTl9SRVFVRVNULCBsb2dJbikgLy9MT0dfSU5fUkVRVUVTVCDslaHshZjsnbQg7Iuk7ZaJ65CY66m0IGxvZ0luIO2VqOyImCDsi6TtlolcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9nT3V0KCkge1x0Ly8g66Gc6re47JWE7JuDIOyVoeyFmOydtCDsi6TtlonrkKDrlYzquYzsp4Ag6riw64uk66as6rKg64uk64qUIOucu1xyXG5cdHlpZWxkIHRha2VMYXRlc3QoTE9HX09VVF9SRVFVRVNULCBsb2dPdXQpIC8vTE9HX09VVF9SRVFVRVNUIOyVoeyFmOydtCDsi6TtlonrkJjrqbQgbG9nSW4g7ZWo7IiYIOyLpO2WiVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hTaWduVXAoKSB7XHQvLyDtmozsm5DqsIDsnoUg7JWh7IWY7J20IOyLpO2WieuQoOuVjOq5jOyngCDquLDri6TrpqzqsqDri6TripQg65y7XHJcblx0eWllbGQgdGFrZUxhdGVzdChTSUdOX1VQX1JFUVVFU1QsIHNpZ25VcCkgLy8gU0lHTl9VUF9SRVFVRVNUIOyVoeyFmOydtCDsi6TtlonrkJjrqbQgbG9nSW4g7ZWo7IiYIOyLpO2WiVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogdXNlclNhZ2EoKSB7XHJcblx0eWllbGQgYWxsKFtcclxuXHRcdFx0Zm9yayh3YXRjaExvYWRVc2VyKSxcclxuXHRcdGZvcmsod2F0Y2hSZW1vdmVGb2xsb3dlciksXHJcblx0XHRmb3JrKHdhdGNoTG9hZEZvbGxvd2VycyksXHJcblx0XHRmb3JrKHdhdGNoTG9hZEZvbGxvd2luZ3MpLFxyXG5cdFx0Zm9yayh3YXRjaENoYW5nZU5pY2tuYW1lKSxcclxuXHRcdGZvcmsod2F0Y2hMb2FkTXlJbmZvKSxcclxuXHRcdGZvcmsod2F0Y2hGb2xsb3cpLFxyXG5cdFx0Zm9yayh3YXRjaFVuRm9sbG93KSxcclxuXHRcdGZvcmsod2F0Y2hMb2dJbiksXHJcblx0XHRmb3JrKHdhdGNoTG9nT3V0KSxcclxuXHRcdGZvcmsod2F0Y2hTaWduVXApLFxyXG5cdF0pXHJcbn1cclxuIiwiaW1wb3J0IHtjcmVhdGVXcmFwcGVyfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInXHJcbmltcG9ydCB7YXBwbHlNaWRkbGV3YXJlLCBjb21wb3NlLCBjcmVhdGVTdG9yZX0gZnJvbSAncmVkdXgnXHJcbmltcG9ydCB7Y29tcG9zZVdpdGhEZXZUb29sc30gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJ1xyXG4vL2ltcG9ydCB0aHVua01pZGRsZXdhcmUgZnJvbSAncmVkdXgtdGh1bmsnXHJcbmltcG9ydCBjcmVhdGVTYWdhTWlkZGxld2FyZSBmcm9tICdyZWR1eC1zYWdhJ1xyXG5pbXBvcnQgcmVkdWNlciBmcm9tICcuLi9yZWR1Y2VycydcclxuaW1wb3J0IHJvb3RTYWdhIGZyb20gJy4uL3NhZ2FzJ1xyXG5cclxuXHJcbi8vIGNvbnN0IGxvZ2dlck1pZGRsZXdhcmUgPSAoeyBkaXNwYXRjaCwgZ2V0U3RhdGV9KSA9PiAobmV4dCkgPT4gKGFjdGlvbikgPT4ge1xyXG4vLyAgIGNvbnNvbGUubG9nKGFjdGlvbikgLy8g66+465Ok7Juo7Ja066W8IO2ZnOyaqe2VtCDrpqzrjZXsiqQg642w67iM7Yi07KaIIOyymOufvCDslaHshZgg66Gc6re4IOywje2eiOqyjCDtlZjquLBcclxuLy8gICByZXR1cm4gbmV4dChhY3Rpb24pXHJcbi8vIH1cclxuXHJcbmNvbnN0IGNvbmZpZ3VyZVN0b3JlID0gKGNvbnRleHQpID0+IHtcclxuXHRjb25zb2xlLmxvZygnY29uZmlndXJlU3RvcmUgY29udGV4dCA6OiAnLCBjb250ZXh0KVxyXG5cdGNvbnN0IHNhZ2FNaWRkbGV3YXJlID0gY3JlYXRlU2FnYU1pZGRsZXdhcmUoKSAvLyBzYWdhIOyEpOyglSDrsKnrspVcclxuXHRjb25zdCBtaWRkbGV3YXJlcyA9IFtzYWdhTWlkZGxld2FyZV1cclxuXHRjb25zdCBlbmhhbmNlciA9XHJcblx0XHRcdHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbidcclxuXHRcdFx0XHRcdD8gY29tcG9zZShhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKVxyXG5cdFx0XHRcdFx0OiBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpXHJcblx0Y29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyLCBlbmhhbmNlcilcclxuXHRzdG9yZS5zYWdhVGFzayA9IHNhZ2FNaWRkbGV3YXJlLnJ1bihyb290U2FnYSlcclxuXHRyZXR1cm4gc3RvcmVcclxufVxyXG5jb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihcclxuXHRcdGNvbmZpZ3VyZVN0b3JlLFxyXG5cdFx0Ly8g7Ji17IWY6rCd7LK0IOuUlOuyhOq3uOqwgCDtirjro6jsnbTrqbQg66as642V7Iqk7JeQ6rSA7ZW07IScIOyekOyEuO2VnCDshKTrqoXsnbTrgpjsmKTquLDrlYzrrLjsl5Ag6rCc67Cc7ZWg65WQIHRydWUg66GcIOuGk+yekFxyXG5cdFx0e2RlYnVnOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50J30sXHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXJcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaW1tZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yZWR1eC13cmFwcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2EvZWZmZWN0c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9