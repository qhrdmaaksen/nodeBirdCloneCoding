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
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/configureStore */ "./store/configureStore.js");
var _jsxFileName = "D:\\intellijProjects\\react-nodebird\\prepare\\front\\pages\\_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const NodeBird = ({
  Component
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx("meta", {
    charSet: "utf-8",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 6
    }
  }), __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 6
    }
  }, "NodeBird")), __jsx(Component, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }));
};

NodeBird.propTypes = {
  // props Types 로 점검 해두면 좀더 서비스의 안정성이 높아진다
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
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])({
  // user 이니셜스테이트, post 이니셜스테이트 컴바인 리듀서가 알아서 한방에 묶어줌
  index: (state = {}, action) => {
    switch (action.type) {
      case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["HYDRATE"]:
        console.log('HYDRATE', action);
        return _objectSpread(_objectSpread({}, state), action.payload);

      default:
        return state;
    }
  },
  user: _user__WEBPACK_IMPORTED_MODULE_2__["default"],
  post: _post__WEBPACK_IMPORTED_MODULE_3__["default"]
});
/*reducers/index.js 보시면 user랑 post를 불러와서 합치고 있습니다.
rootReducer가 state고, user와 post는 각각 state.user, state.post가 됩니다.
user.js의 me는 state.user.me가 됩니다.*/

/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, generateDummyPost, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, addPost, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateDummyPost", function() { return generateDummyPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_REQUEST", function() { return LOAD_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_SUCCESS", function() { return LOAD_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_FAILURE", function() { return LOAD_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_REQUEST", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_SUCCESS", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_FAILURE", function() { return ADD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_REQUEST", function() { return REMOVE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_SUCCESS", function() { return REMOVE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_FAILURE", function() { return REMOVE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_REQUEST", function() { return ADD_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_SUCCESS", function() { return ADD_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_FAILURE", function() { return ADD_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPost", function() { return addPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addComment", function() { return addComment; });
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shortid */ "shortid");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! faker */ "faker");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_2__);



const initialState = {
  mainPosts: [],
  imagePaths: [],
  // 이미지 경로들이 저장됨
  hasMorePosts: true,
  // 더 많은 게시물 가져오기
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
}; // 이부분을 사용해서 무한 스크롤링을 만들것

const generateDummyPost = number => Array(number).fill().map(() => ({
  id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
  User: {
    id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
    nickname: faker__WEBPACK_IMPORTED_MODULE_2___default.a.name.findName()
  },
  content: faker__WEBPACK_IMPORTED_MODULE_2___default.a.lorem.paragraph(),
  Images: [{
    src: faker__WEBPACK_IMPORTED_MODULE_2___default.a.image.image()
  }],
  Comments: [{
    User: {
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      nickname: faker__WEBPACK_IMPORTED_MODULE_2___default.a.name.findName()
    },
    content: faker__WEBPACK_IMPORTED_MODULE_2___default.a.lorem.sentence()
  }]
})); //게시글 작성하는 액션

const LOAD_POSTS_REQUEST = ' LOAD_POSTS_REQUEST'; // 화면을 로딩하면 바로 LOAD_POSTS_REQUEST 를 호출해줄것

const LOAD_POSTS_SUCCESS = ' LOAD_POSTS_SUCCESS';
const LOAD_POSTS_FAILURE = ' LOAD_POSTS_FAILURE';
const ADD_POST_REQUEST = 'ADD_POST_REQUEST'; // 변수로 따로 만들어줘야 중간에 오타가나는 일을 막을 수 있다

const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
const ADD_POST_FAILURE = 'ADD_POST_FAILURE';
const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';
const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';
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

const reducer = (state = initialState, action) => immer__WEBPACK_IMPORTED_MODULE_1___default()(state, draft => {
  // immer 사용시 state 를 draft 로 교체해주며, switch 문인걸 인식하고 break 를 까먹지말자
  switch (action.type) {
    case LOAD_POSTS_REQUEST:
      draft.loadPostsLoading = true;
      draft.loadPostsDone = false;
      draft.loadPostsError = null;
      break;

    case LOAD_POSTS_SUCCESS:
      draft.loadPostsLoading = false;
      draft.loadPostsDone = true; // action.data 에 dummy data 가 들어있을것이며, 기존데이터와 합쳐주는것
      // concat 을 할땐 항상 앞에 대입을 해줘야한다 그래야 합쳐짐

      draft.mainPosts = draft.mainPosts.concat(action.data); // 게시물을 50 개까지만 가져오겠다

      draft.hasMorePosts = draft.mainPosts.length < 50;
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
      draft.mainPosts = draft.mainPosts.filter(v => v.id !== action.data); // 지울땐 보통 filter 가 편하다

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

        post.Comments.unshift(action.data.content); // 찾은 post 에 실제 데이터 back

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
/*! exports provided: initialState, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, CHANGE_NICKNAME_REQUEST, CHANGE_NICKNAME_SUCCESS, CHANGE_NICKNAME_FAILURE, FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE, ADD_POST_TO_ME, REMOVE_POST_OF_ME, loginRequestAction, logoutRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_TO_ME", function() { return ADD_POST_TO_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_OF_ME", function() { return REMOVE_POST_OF_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginRequestAction", function() { return loginRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutRequestAction", function() { return logoutRequestAction; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
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
  // 팔로우중일때 에러 없앰
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
  loginData: {}
}; // 로그인 액션 생성기 thunk
// export const loginAction = (data) => { // 함수를 리턴하는 비동기 액션 크리에이터가 추가
// 	return (dispatch, getState) => {
// 		const state = getState()
// 		dispatch(loginRequestAction())
// 		axios.post('/api/login')
// 				.then((res) => {
// 					dispatch(loginSuccessAction(res.data))
// 				})
// 				.catch((err) => {
// 					dispatch(loginFailureAction(err))
// 				})
// 	}
// }
// actions

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
const UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE'; // 유저 리듀서의 상태를 바꿀수있는 액션 생성

const ADD_POST_TO_ME = 'ADD_POST_TO_ME';
const REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME';

const dummyUser = data => _objectSpread(_objectSpread({}, data), {}, {
  nickname: '비타민',
  id: 1,
  Posts: [{
    id: 1
  }],
  Followings: [{
    nickname: '외노'
  }, {
    nickname: '음메'
  }, {
    nickname: '썽'
  }, {
    nickname: '오댕'
  }, {
    nickname: '만뽀'
  }],
  Followers: [{
    nickname: '까매'
  }, {
    nickname: '만두'
  }, {
    nickname: '보챙'
  }, {
    nickname: '뒷가'
  }, {
    nickname: '야덩'
  }]
});

const loginRequestAction = data => {
  return {
    type: LOG_IN_REQUEST,
    data
  };
}; // 로그아웃 액션 생성기 thunk
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
    case FOLLOW_REQUEST:
      console.log('reducer follow'); // store 에서 보낸 state 가 만들어짐, state 자체가 user.js 의 state 임

      draft.followLoading = true;
      draft.followError = null; // 로딩 중일때는 에러 없앰

      draft.followDone = false;
      break;

    case FOLLOW_SUCCESS:
      draft.followLoading = false;
      draft.followDone = true; //draft.me = dummyUser(action.data)

      draft.me.Followings.push({
        id: action.data
      });
      break;

    case FOLLOW_FAILURE:
      console.error('followFail : ' + action.error);
      draft.followLoading = false;
      draft.followError = action.error;
      break;

    case UNFOLLOW_REQUEST:
      console.log('reducer follow'); // store 에서 보낸 state 가 만들어짐, state 자체가 user.js 의 state 임

      draft.unfollowLoading = true;
      draft.unfollowError = null; // 로딩 중일때는 에러 없앰

      draft.unfollowDone = false;
      break;

    case UNFOLLOW_SUCCESS:
      draft.unfollowLoading = false;
      draft.unfollowDone = true; //draft.me = dummyUser(action.data)
      // 언팔로우 한 사람만 빠지게

      draft.me.Followings = draft.me.Followings.filter(v => v.id !== action.data);
      break;

    case UNFOLLOW_FAILURE:
      console.error('unfollowFail : ' + action.error);
      draft.unfollowLoading = false;
      draft.unfollowError = action.error;
      break;

    case LOG_IN_REQUEST:
      console.log('reducer login');
      draft.logInLoading = true;
      draft.logInError = null;
      draft.logInDone = false;
      break;

    case LOG_IN_SUCCESS:
      draft.logInLoading = false;
      draft.logInDone = true; //draft.me = dummyUser(action.data) front

      draft.me = action.data; // back

      break;

    case LOG_IN_FAILURE:
      console.error('loginFail : ' + action.error);
      draft.logInLoading = false;
      draft.logInError = action.error;
      break;

    case LOG_OUT_REQUEST:
      draft.logOutLoading = true;
      draft.logOutDone = false;
      draft.logOutError = null;
      break;

    case LOG_OUT_SUCCESS:
      draft.logOutLoading = false;
      draft.logOutDone = true;
      draft.me = null;
      break;

    case LOG_OUT_FAILURE:
      console.error('logoutFail : ' + action.error);
      draft.logOutLoading = false;
      draft.logOutError = action.error;
      break;

    case SIGN_UP_REQUEST:
      draft.signUpLoading = true;
      draft.signUpDone = false;
      draft.signUpError = null;
      break;

    case SIGN_UP_SUCCESS:
      draft.signUpLoading = false;
      draft.signUpDone = true;
      break;

    case SIGN_UP_FAILURE:
      console.error('signUpFail : ' + action.error);
      draft.signUpLoading = false;
      draft.signUpError = action.error;
      break;

    case CHANGE_NICKNAME_REQUEST:
      draft.changeNicknameLoading = true;
      draft.changeNicknameDone = false;
      draft.changeNicknameError = null;
      break;

    case CHANGE_NICKNAME_SUCCESS:
      draft.changeNicknameLoading = false;
      draft.changeNicknameDone = true;
      break;

    case CHANGE_NICKNAME_FAILURE:
      console.error('changeNickFail : ' + action.error);
      draft.changeNicknameLoading = false;
      draft.changeNicknameError = action.error;
      break;

    case ADD_POST_TO_ME:
      // 게시글을 쓰면 게시글 아이디가 여기로 들어와서 하나가 추가된다
      draft.me.Posts.unshift({
        id: action.data
      });
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
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shortid */ "shortid");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_4__);






function loadPostsAPI(data) {
  // 3 전달되면
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/api/posts', data); // 4 데이터가 간다
}

function* loadPosts(action) {
  // 1 액션에서
  try {
    //const result = yield call(loadPostsAPI, action.data) // 2 데이터를 꺼내서
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_SUCCESS"],
      data: Object(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["generateDummyPost"])(10) // data 10 개

    });
  } catch (err) {
    console.error('loadPosts : ' + err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_FAILURE"],
      data: err.response.data
    });
  }
}

function addPostAPI(data) {
  // 3 전달되면
  //return axios.post('/api/post', data) // 4 데이터가 간다 front
  // data content 가 req.body.content 로 백엔드에 변환
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/post', {
    content: data
  }); // 4 데이터가 간다
}

function* addPost(action) {
  // 1 액션에서
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(addPostAPI, action.data); // 2 데이터를 꺼내서
    //yield delay(1000) front
    //const id = shortId.generate() // front 의 더미 아디

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_SUCCESS"],

      /*data: { // front dummy
      	id,
      	content: action.data,
      }*/
      data: result.data // back, 실제로 게시글이 들어있음

    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_TO_ME"],
      // data: id, // front dummy
      data: result.data.id // back

    });
  } catch (err) {
    console.error('addPost : ' + err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_FAILURE"],
      error: err.response.data
    });
  }
}

function removePostAPI(data) {
  // 3 전달되면
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/post', data); // 4 데이터가 간다
}

function* removePost(action) {
  // 1 액션에서
  try {
    // 포스트 리듀서상태와 유저리듀서상태와 동시에 한방에 바꿀수 없기때문에 액션을 두번으로 바꿔준다,
    //const result = yield call(removePostAPI, action.data) // 2 데이터를 꺼내서
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_SUCCESS"],
      data: action.data // 어떤 게시물을 지웠는지 id 가있을것

    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_OF_ME"],
      data: action.data
    });
  } catch (err) {
    console.error('removePost : ' + err);
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

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_SUCCESS"],
      //data: action.data // front
      data: result.data
    });
  } catch (err) {
    console.error('addComment : ' + err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_FAILURE"],
      error: err.response.data
    });
  }
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
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRemovePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddComment)]);
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
  // gererator 아님
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
    console.log('saga logIn'); //yield delay(1000) // front

    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(logInAPI, action.data); // 서버에서 받은 결과 값을 받음

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_SUCCESS"],
      //data: action.data, // front
      data: result.data // (성공 결과 담김) back

    });
  } catch (err) {
    console.error('logIn' + err);
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

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_SUCCESS"]
    });
  } catch (err) {
    console.error('front logOut : ' + err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      // put 은 dispatch 라고 생각하자
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_FAILURE"],
      error: err.response.data // (실패 결과 담김)

    });
  }
}

function followAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/follow', data);
}

function* follow(action) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_SUCCESS"],
      data: action.data
    });
  } catch (err) {
    console.error('follow error : ' + err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_FAILURE"],
      data: err.response.data
    });
  }
}

function unfollowAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/unfollow', data);
}

function* unfollow(action) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_SUCCESS"],
      data: action.data
    });
  } catch (err) {
    console.error('unfollow error : ' + err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_FAILURE"],
      data: err.response.data
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
    console.log('sign up result : ' + result);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_SUCCESS"] //data: result.data

    });
  } catch (err) {
    console.error('signUp error : ' + err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_FAILURE"],
      error: err.response.data
    });
  }
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
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchFollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUnFollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogIn), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogOut), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchSignUp)]);
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
  console.log(context);
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

/***/ "faker":
/*!************************!*\
  !*** external "faker" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("faker");

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

/***/ }),

/***/ "shortid":
/*!**************************!*\
  !*** external "shortid" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("shortid");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9wb3N0LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvcG9zdC5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy91c2VyLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmFrZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpbW1lclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtcmVkdXgtd3JhcHBlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNob3J0aWRcIiJdLCJuYW1lcyI6WyJOb2RlQmlyZCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImVsZW1lbnRUeXBlIiwiaXNSZXF1aXJlZCIsIndyYXBwZXIiLCJ3aXRoUmVkdXgiLCJyb290UmVkdWNlciIsImNvbWJpbmVSZWR1Y2VycyIsImluZGV4Iiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiSFlEUkFURSIsImNvbnNvbGUiLCJsb2ciLCJwYXlsb2FkIiwidXNlciIsInBvc3QiLCJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpbWFnZVBhdGhzIiwiaGFzTW9yZVBvc3RzIiwibG9hZFBvc3RzTG9hZGluZyIsImxvYWRQb3N0c0RvbmUiLCJsb2FkUG9zdHNFcnJvciIsImFkZFBvc3RMb2FkaW5nIiwiYWRkUG9zdERvbmUiLCJhZGRQb3N0RXJyb3IiLCJyZW1vdmVQb3N0TG9hZGluZyIsInJlbW92ZVBvc3REb25lIiwicmVtb3ZlUG9zdEVycm9yIiwiYWRkQ29tbWVudExvYWRpbmciLCJhZGRDb21tZW50RG9uZSIsImFkZENvbW1lbnRFcnJvciIsImdlbmVyYXRlRHVtbXlQb3N0IiwibnVtYmVyIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiaWQiLCJzaG9ydElkIiwiZ2VuZXJhdGUiLCJVc2VyIiwibmlja25hbWUiLCJmYWtlciIsIm5hbWUiLCJmaW5kTmFtZSIsImNvbnRlbnQiLCJsb3JlbSIsInBhcmFncmFwaCIsIkltYWdlcyIsInNyYyIsImltYWdlIiwiQ29tbWVudHMiLCJzZW50ZW5jZSIsIkxPQURfUE9TVFNfUkVRVUVTVCIsIkxPQURfUE9TVFNfU1VDQ0VTUyIsIkxPQURfUE9TVFNfRkFJTFVSRSIsIkFERF9QT1NUX1JFUVVFU1QiLCJBRERfUE9TVF9TVUNDRVNTIiwiQUREX1BPU1RfRkFJTFVSRSIsIlJFTU9WRV9QT1NUX1JFUVVFU1QiLCJSRU1PVkVfUE9TVF9TVUNDRVNTIiwiUkVNT1ZFX1BPU1RfRkFJTFVSRSIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJBRERfQ09NTUVOVF9TVUNDRVNTIiwiQUREX0NPTU1FTlRfRkFJTFVSRSIsImFkZFBvc3QiLCJkYXRhIiwiYWRkQ29tbWVudCIsInJlZHVjZXIiLCJwcm9kdWNlIiwiZHJhZnQiLCJjb25jYXQiLCJsZW5ndGgiLCJlcnJvciIsInVuc2hpZnQiLCJmaWx0ZXIiLCJ2IiwiUG9zdExvYWRpbmciLCJQb3N0RG9uZSIsImZpbmQiLCJQb3N0SWQiLCJmb2xsb3dMb2FkaW5nIiwiZm9sbG93RG9uZSIsImZvbGxvd0Vycm9yIiwidW5mb2xsb3dMb2FkaW5nIiwidW5mb2xsb3dEb25lIiwidW5mb2xsb3dFcnJvciIsImxvZ0luTG9hZGluZyIsImxvZ0luRG9uZSIsImxvZ0luRXJyb3IiLCJsb2dPdXRMb2FkaW5nIiwibG9nT3V0RG9uZSIsImxvZ091dEVycm9yIiwic2lnblVwTG9hZGluZyIsInNpZ25VcERvbmUiLCJzaWduVXBFcnJvciIsImNoYW5nZU5pY2tuYW1lTG9hZGluZyIsImNoYW5nZU5pY2tuYW1lRG9uZSIsImNoYW5nZU5pY2tuYW1lRXJyb3IiLCJtZSIsInNpZ25VcERhdGEiLCJsb2dpbkRhdGEiLCJMT0dfSU5fUkVRVUVTVCIsIkxPR19JTl9TVUNDRVNTIiwiTE9HX0lOX0ZBSUxVUkUiLCJMT0dfT1VUX1JFUVVFU1QiLCJMT0dfT1VUX1NVQ0NFU1MiLCJMT0dfT1VUX0ZBSUxVUkUiLCJTSUdOX1VQX1JFUVVFU1QiLCJTSUdOX1VQX1NVQ0NFU1MiLCJTSUdOX1VQX0ZBSUxVUkUiLCJDSEFOR0VfTklDS05BTUVfUkVRVUVTVCIsIkNIQU5HRV9OSUNLTkFNRV9TVUNDRVNTIiwiQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUiLCJGT0xMT1dfUkVRVUVTVCIsIkZPTExPV19TVUNDRVNTIiwiRk9MTE9XX0ZBSUxVUkUiLCJVTkZPTExPV19SRVFVRVNUIiwiVU5GT0xMT1dfU1VDQ0VTUyIsIlVORk9MTE9XX0ZBSUxVUkUiLCJBRERfUE9TVF9UT19NRSIsIlJFTU9WRV9QT1NUX09GX01FIiwiZHVtbXlVc2VyIiwiUG9zdHMiLCJGb2xsb3dpbmdzIiwiRm9sbG93ZXJzIiwibG9naW5SZXF1ZXN0QWN0aW9uIiwibG9nb3V0UmVxdWVzdEFjdGlvbiIsInB1c2giLCJheGlvcyIsImRlZmF1bHRzIiwiYmFzZVVSTCIsInJvb3RTYWdhIiwiYWxsIiwiZm9yayIsInBvc3RTYWdhIiwidXNlclNhZ2EiLCJsb2FkUG9zdHNBUEkiLCJnZXQiLCJsb2FkUG9zdHMiLCJkZWxheSIsInB1dCIsImVyciIsInJlc3BvbnNlIiwiYWRkUG9zdEFQSSIsInJlc3VsdCIsImNhbGwiLCJyZW1vdmVQb3N0QVBJIiwicmVtb3ZlUG9zdCIsImFkZENvbW1lbnRBUEkiLCJwb3N0SWQiLCJ3YXRjaExvYWRQb3N0cyIsInRocm90dGxlIiwid2F0Y2hBZGRQb3N0IiwidGFrZUxhdGVzdCIsIndhdGNoUmVtb3ZlUG9zdCIsIndhdGNoQWRkQ29tbWVudCIsImxvZ0luQVBJIiwibG9nSW4iLCJsb2dPdXRBUEkiLCJsb2dPdXQiLCJmb2xsb3dBUEkiLCJmb2xsb3ciLCJ1bmZvbGxvd0FQSSIsInVuZm9sbG93Iiwic2lnblVwQVBJIiwic2lnblVwIiwid2F0Y2hGb2xsb3ciLCJ3YXRjaFVuRm9sbG93Iiwid2F0Y2hMb2dJbiIsIndhdGNoTG9nT3V0Iiwid2F0Y2hTaWduVXAiLCJjb25maWd1cmVTdG9yZSIsImNvbnRleHQiLCJzYWdhTWlkZGxld2FyZSIsImNyZWF0ZVNhZ2FNaWRkbGV3YXJlIiwibWlkZGxld2FyZXMiLCJlbmhhbmNlciIsImNvbXBvc2UiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsInNhZ2FUYXNrIiwicnVuIiwiY3JlYXRlV3JhcHBlciIsImRlYnVnIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFp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QUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsb0MiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCAnYW50ZC9kaXN0L2FudGQuY3NzJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHdyYXBwZXIgZnJvbSAnLi4vc3RvcmUvY29uZmlndXJlU3RvcmUnXG5cbmNvbnN0IE5vZGVCaXJkID0gKHtDb21wb25lbnR9KSA9PiB7XG5cdHJldHVybiAoXG5cdFx0XHQ8PlxuXHRcdFx0XHQ8SGVhZD5cblx0XHRcdFx0XHQ8bWV0YSBjaGFyU2V0PVwidXRmLThcIi8+XG5cdFx0XHRcdFx0PHRpdGxlPk5vZGVCaXJkPC90aXRsZT5cblx0XHRcdFx0PC9IZWFkPlxuXHRcdFx0XHQ8Q29tcG9uZW50Lz5cblx0XHRcdDwvPlxuXHQpXG59XG5cbk5vZGVCaXJkLnByb3BUeXBlcyA9IHtcblx0Ly8gcHJvcHMgVHlwZXMg66GcIOygkOqygCDtlbTrkZDrqbQg7KKA642UIOyEnOu5hOyKpOydmCDslYjsoJXshLHsnbQg64aS7JWE7KeE64ukXG5cdENvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLmlzUmVxdWlyZWQsXG59XG5cbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KE5vZGVCaXJkKVxuIiwiLy9pbXBvcnQgeyBzdG9yZSB9IGZyb20gJ25leHQvZGlzdC9idWlsZC9vdXRwdXQvc3RvcmUnXHJcbmltcG9ydCB7SFlEUkFURX0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJ1xyXG5pbXBvcnQge2NvbWJpbmVSZWR1Y2Vyc30gZnJvbSAncmVkdXgnXHJcbmltcG9ydCB1c2VyIGZyb20gJy4vdXNlcidcclxuaW1wb3J0IHBvc3QgZnJvbSAnLi9wb3N0J1xyXG5cclxuLy8gY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4vLyBcdHVzZXI6IHt9LFxyXG4vLyBcdHBvc3Q6IHt9LFxyXG4vLyB9XHJcblxyXG4vLyDruYTrj5nquLAg7JWh7IWYIOyDneyEseq4sFxyXG5cclxuLy8g7JWh7IWYIOyDneyEseq4sFxyXG4vKmNvbnN0IGNoYW5nZU5pY2tuYW1lID0gKGRhdGEpID0+IHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTogJ0NIQU5HRV9OSUNLTkFNRScsXHJcblx0XHRkYXRhLFxyXG5cdH1cclxufVxyXG5jaGFuZ2VOaWNrbmFtZSgndml0YW1pbjc3NycpKi9cclxuLyp7XHJcblx0XHR0eXBlOiAnQ0hBTkdFX05JQ0tOQU1FJyxcclxuXHRcdGRhdGE6ICd2aXRhbWluNzc3JyxcclxufSovXHJcblxyXG4vKnN0b3JlLmRpc3BhdGNoKGNoYW5nZU5pY2tuYW1lKCd2aXRhbWluNzc3Nzc3NycpKSovXHJcblxyXG4vLyDrpqzrk4DshJwgOiDsnbTsoITsg4Htg5zsmYAg7JWh7IWY7J2EIO2Gte2VtCDri6TsnYwg7IOB7YOc66W8IOunjOuTpOyWtOuCtOuKlCDtlajsiJhcclxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG5cdC8vIHVzZXIg7J2064uI7IWc7Iqk7YWM7J207Yq4LCBwb3N0IOydtOuLiOyFnOyKpO2FjOydtO2KuCDsu7TrsJTsnbgg66as65OA7ISc6rCAIOyVjOyVhOyEnCDtlZzrsKnsl5Ag66y27Ja07KSMXHJcblx0aW5kZXg6IChzdGF0ZSA9IHt9LCBhY3Rpb24pID0+IHtcclxuXHRcdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHRcdFx0Y2FzZSBIWURSQVRFOlxyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCdIWURSQVRFJywgYWN0aW9uKVxyXG5cdFx0XHRcdHJldHVybiB7Li4uc3RhdGUsIC4uLmFjdGlvbi5wYXlsb2FkfVxyXG5cdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdHJldHVybiBzdGF0ZVxyXG5cdFx0fVxyXG5cdH0sXHJcblx0dXNlcixcclxuXHRwb3N0LFxyXG59KVxyXG4vKnJlZHVjZXJzL2luZGV4LmpzIOuztOyLnOuptCB1c2Vy656RIHBvc3Trpbwg67aI65+s7JmA7IScIO2Vqey5mOqzoCDsnojsirXri4jri6QuXHJcbnJvb3RSZWR1Y2Vy6rCAIHN0YXRl6rOgLCB1c2Vy7JmAIHBvc3TripQg6rCB6rCBIHN0YXRlLnVzZXIsIHN0YXRlLnBvc3TqsIAg65Cp64uI64ukLlxyXG51c2VyLmpz7J2YIG1l64qUIHN0YXRlLnVzZXIubWXqsIAg65Cp64uI64ukLiovXHJcbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyXHJcbiIsImltcG9ydCBzaG9ydElkIGZyb20gJ3Nob3J0aWQnXHJcbmltcG9ydCBwcm9kdWNlIGZyb20gJ2ltbWVyJ1xyXG5pbXBvcnQgZmFrZXIgZnJvbSAnZmFrZXInXHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG5cdG1haW5Qb3N0czogW1x0XSxcclxuXHRpbWFnZVBhdGhzOiBbXSwgLy8g7J2066+47KeAIOqyveuhnOuTpOydtCDsoIDsnqXrkKhcclxuXHRoYXNNb3JlUG9zdHM6IHRydWUsIC8vIOuNlCDrp47snYAg6rKM7Iuc66y8IOqwgOyguOyYpOq4sFxyXG5cdGxvYWRQb3N0c0xvYWRpbmc6IGZhbHNlLCAvLyDtmZTrqbQg66Gc65Oc7KSRIOuhnOuUqVxyXG5cdGxvYWRQb3N0c0RvbmU6IGZhbHNlLCAvLyDtmZTrqbQg66Gc65OcIOyZhOujjOuQmOyXiOydhOuVjCB0cnVlIOuzgO2ZmFxyXG5cdGxvYWRQb3N0c0Vycm9yOiBudWxsLFxyXG5cdGFkZFBvc3RMb2FkaW5nOiBmYWxzZSwgLy8g6rKM7Iuc66y8IOuTseuhneykkSDroZzrlKlcclxuXHRhZGRQb3N0RG9uZTogZmFsc2UsIC8vIOqyjOyLnOusvCDstpTqsIDqsIAg7JmE66OM65CY7JeI7J2E65WMIHRydWUg67OA7ZmYXHJcblx0YWRkUG9zdEVycm9yOiBudWxsLFxyXG5cdHJlbW92ZVBvc3RMb2FkaW5nOiBmYWxzZSwgLy8g6rKM7Iuc66y8IOyCreygnOykkSDroZzrlKlcclxuXHRyZW1vdmVQb3N0RG9uZTogZmFsc2UsIC8vIOqyjOyLnOusvCDsgq3soJzqsIAg7JmE66OM65CY7JeI7J2E65WMIHRydWUg67OA7ZmYXHJcblx0cmVtb3ZlUG9zdEVycm9yOiBudWxsLFxyXG5cdGFkZENvbW1lbnRMb2FkaW5nOiBmYWxzZSwgLy8g64yT6riAIOuTseuhneykkSDroZzrlKlcclxuXHRhZGRDb21tZW50RG9uZTogZmFsc2UsIC8vIOqyjOyLnOusvCDstpTqsIDqsIAg7JmE66OM65CY7JeI7J2E65WMIHRydWUg67OA7ZmYXHJcblx0YWRkQ29tbWVudEVycm9yOiBudWxsLFxyXG59XHJcbi8vIOydtOu2gOu2hOydhCDsgqzsmqntlbTshJwg66y07ZWcIOyKpO2BrOuhpOungeydhCDrp4zrk6TqsoNcclxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlRHVtbXlQb3N0ID0gKG51bWJlcikgPT4gQXJyYXkobnVtYmVyKS5maWxsKCkubWFwKCgpID0+ICh7XHJcblx0aWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuXHRVc2VyOiB7XHJcblx0XHRpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG5cdFx0bmlja25hbWU6IGZha2VyLm5hbWUuZmluZE5hbWUoKSxcclxuXHR9LFxyXG5cdGNvbnRlbnQ6IGZha2VyLmxvcmVtLnBhcmFncmFwaCgpLFxyXG5cdEltYWdlczogW3tcclxuXHRcdHNyYzogZmFrZXIuaW1hZ2UuaW1hZ2UoKSxcclxuXHR9XSxcclxuXHRDb21tZW50czogW3tcclxuXHRcdFVzZXI6IHtcclxuXHRcdFx0aWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuXHRcdFx0bmlja25hbWU6IGZha2VyLm5hbWUuZmluZE5hbWUoKSxcclxuXHRcdH0sXHJcblx0XHRjb250ZW50OiBmYWtlci5sb3JlbS5zZW50ZW5jZSgpLFxyXG5cdH1dLFxyXG59KSlcclxuXHJcbi8v6rKM7Iuc6riAIOyekeyEse2VmOuKlCDslaHshZhcclxuZXhwb3J0IGNvbnN0ICBMT0FEX1BPU1RTX1JFUVVFU1QgPSAnIExPQURfUE9TVFNfUkVRVUVTVCc7IC8vIO2ZlOuptOydhCDroZzrlKntlZjrqbQg67CU66GcIExPQURfUE9TVFNfUkVRVUVTVCDrpbwg7Zi47Lac7ZW07KSE6rKDXHJcbmV4cG9ydCBjb25zdCAgTE9BRF9QT1NUU19TVUNDRVNTID0gJyBMT0FEX1BPU1RTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgIExPQURfUE9TVFNfRkFJTFVSRSA9ICcgTE9BRF9QT1NUU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9SRVFVRVNUID0gJ0FERF9QT1NUX1JFUVVFU1QnOyAvLyDrs4DsiJjroZwg65Sw66GcIOunjOuTpOyWtOykmOyVvCDspJHqsITsl5Ag7Jik7YOA6rCA64KY64qUIOydvOydhCDrp4nsnYQg7IiYIOyeiOuLpFxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfU1VDQ0VTUyA9ICdBRERfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX0ZBSUxVUkUgPSAnQUREX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfUkVRVUVTVCA9ICdSRU1PVkVfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1NVQ0NFU1MgPSAnUkVNT1ZFX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9GQUlMVVJFID0gJ1JFTU9WRV9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1JFUVVFU1QgPSAnQUREX0NPTU1FTlRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9TVUNDRVNTID0gJ0FERF9DT01NRU5UX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfRkFJTFVSRSA9ICdBRERfQ09NTUVOVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRQb3N0ID0gKGRhdGEpID0+ICh7XHJcblx0dHlwZTogQUREX1BPU1RfUkVRVUVTVCxcclxuXHRkYXRhLFxyXG59KVxyXG5cclxuLy8gZHluYW1pYyBhY3Rpb24gY3JlYXRlXHJcbmV4cG9ydCBjb25zdCBhZGRDb21tZW50ID0gKGRhdGEpID0+ICh7XHJcblx0dHlwZTogQUREX0NPTU1FTlRfUkVRVUVTVCxcclxuXHRkYXRhLFxyXG59KVxyXG5cclxuLyogZnJvbnQgZHVtbXlcclxuY29uc3QgZHVtbXlQb3N0ID0gKGRhdGEpID0+ICh7XHJcblx0aWQ6IGRhdGEuaWQsXHJcblx0Y29udGVudDogZGF0YS5jb250ZW50LFxyXG5cdFVzZXI6IHtcclxuXHRcdGlkOiAxLFxyXG5cdFx0bmlja25hbWU6ICfruYTtg4Drr7wnLFxyXG5cdH0sXHJcblx0SW1hZ2VzOiBbXSxcclxuXHRDb21tZW50czogW10sXHJcbn0pXHJcbiovXHJcblxyXG4vKiBmcm9udCBkdW1teVxyXG5jb25zdCBkdW1teUNvbW1lbnQgPSAoZGF0YSkgPT4gKHtcclxuXHRpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG5cdGNvbnRlbnQ6IGRhdGEsXHJcblx0VXNlcjoge1xyXG5cdFx0aWQ6IDEsXHJcblx0XHRuaWNrbmFtZTogJ+u5hO2DgOuvvCcsXHJcblx0fVxyXG59KSovXHJcbi8vIOydtOyghCDsg4Htg5zrpbwg7JWh7IWY7J2EIO2Gte2VtCDri6TsnYwg7IOB7YOc66GcIOunjOuTpOyWtOuCtOuKlCDtlajsiJhcclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcclxuXHQvLyBpbW1lciDsgqzsmqnsi5wgc3RhdGUg66W8IGRyYWZ0IOuhnCDqtZDssrTtlbTso7zrqbAsIHN3aXRjaCDrrLjsnbjqsbgg7J247Iud7ZWY6rOgIGJyZWFrIOulvCDquYzrqLnsp4Drp5DsnpBcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIExPQURfUE9TVFNfUkVRVUVTVDpcclxuXHRcdFx0ZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IHRydWU7XHJcblx0XHRcdGRyYWZ0LmxvYWRQb3N0c0RvbmUgPSBmYWxzZTtcclxuXHRcdFx0ZHJhZnQubG9hZFBvc3RzRXJyb3IgPSBudWxsO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgTE9BRF9QT1NUU19TVUNDRVNTOlxyXG5cdFx0XHRkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQubG9hZFBvc3RzRG9uZSA9IHRydWVcclxuXHRcdFx0Ly8gYWN0aW9uLmRhdGEg7JeQIGR1bW15IGRhdGEg6rCAIOuTpOyWtOyeiOydhOqyg+ydtOupsCwg6riw7KG0642w7J207YSw7JmAIO2VqeyzkOyjvOuKlOqyg1xyXG5cdFx0XHQvLyBjb25jYXQg7J2EIO2VoOuVkCDtla3sg4Eg7JWe7JeQIOuMgOyeheydhCDtlbTspJjslbztlZzri6Qg6re4656Y7JW8IO2VqeyzkOynkFxyXG5cdFx0XHRkcmFmdC5tYWluUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMuY29uY2F0KGFjdGlvbi5kYXRhKVxyXG5cdFx0XHQvLyDqsozsi5zrrLzsnYQgNTAg6rCc6rmM7KeA66eMIOqwgOyguOyYpOqyoOuLpFxyXG5cdFx0XHRkcmFmdC5oYXNNb3JlUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMubGVuZ3RoIDwgNTBcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIExPQURfUE9TVFNfRkFJTFVSRTpcclxuXHRcdFx0ZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LmxvYWRQb3N0c0Vycm9yID0gYWN0aW9uLmVycm9yXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBBRERfUE9TVF9SRVFVRVNUOlxyXG5cdFx0XHRkcmFmdC5hZGRQb3N0TG9hZGluZyA9IHRydWU7XHJcblx0XHRcdGRyYWZ0LmFkZFBvc3REb25lID0gZmFsc2U7XHJcblx0XHRcdGRyYWZ0LmFkZFBvc3RFcnJvciA9IG51bGw7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBBRERfUE9TVF9TVUNDRVNTOlxyXG5cdFx0XHQvLyBkcmFmdC5tYWluUG9zdHMudW5zaGlmdChkdW1teVBvc3QoYWN0aW9uLmRhdGEpKSAvLyBmcm9udCBkdW1teVxyXG5cdFx0XHRkcmFmdC5tYWluUG9zdHMudW5zaGlmdChhY3Rpb24uZGF0YSkgLy8gYmFjayDsi6TsoJwg642w7J207YSwXHJcblx0XHRcdGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQuYWRkUG9zdERvbmUgPSB0cnVlXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBBRERfUE9TVF9GQUlMVVJFOlxyXG5cdFx0XHRkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LmFkZFBvc3RFcnJvciA9IGFjdGlvbi5lcnJvclxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgUkVNT1ZFX1BPU1RfUkVRVUVTVDpcclxuXHRcdFx0ZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSB0cnVlXHJcblx0XHRcdGRyYWZ0LnJlbW92ZVBvc3REb25lID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQucmVtb3ZlUG9zdEVycm9yID0gbnVsbFxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgUkVNT1ZFX1BPU1RfU1VDQ0VTUzpcclxuXHRcdFx0ZHJhZnQubWFpblBvc3RzID0gZHJhZnQubWFpblBvc3RzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEpIC8vIOyngOyauOuVkCDrs7TthrUgZmlsdGVyIOqwgCDtjrjtlZjri6RcclxuXHRcdFx0ZHJhZnQuUG9zdExvYWRpbmcgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC5Qb3N0RG9uZSA9IHRydWVcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFJFTU9WRV9QT1NUX0ZBSUxVUkU6XHJcblx0XHRcdGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQucmVtb3ZlUG9zdEVycm9yID0gYWN0aW9uLmVycm9yXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBBRERfQ09NTUVOVF9SRVFVRVNUOlxyXG5cdFx0XHRkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IHRydWVcclxuXHRcdFx0ZHJhZnQuYWRkQ29tbWVudERvbmUgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC5hZGRDb21tZW50RXJyb3IgPSBudWxsXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBBRERfQ09NTUVOVF9TVUNDRVNTOiB7XHJcblx0XHRcdC8vYWN0aW9uLmRhdGEuY29udGVudCwgcG9zdElkLCB1c2VySWRcclxuXHRcdFx0Ly9jb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLnBvc3RJZCkgLy8g6rKM7Iuc6riAIOumrOyKpO2KuOykkeyXkCBwb3N0IOywvuq4sCBmcm9udFxyXG5cdFx0XHRjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLlBvc3RJZCkgLy8g6rKM7Iuc6riAIOumrOyKpO2KuOykkeyXkCBwb3N0IOywvuq4sCBiYWtcclxuXHRcdFx0Ly9wb3N0LkNvbW1lbnRzLnVuc2hpZnQoZHVtbXlDb21tZW50KGFjdGlvbi5kYXRhLmNvbnRlbnQpKSAvLyDssL7snYAgcG9zdCDsl5Ag66eoIOyVnuyXkCDqsIDsp5wg64yT6riAIO2VmOuCmCDrhKPslrTspIwgRlJPTlRcclxuXHRcdFx0cG9zdC5Db21tZW50cy51bnNoaWZ0KGFjdGlvbi5kYXRhLmNvbnRlbnQpIC8vIOywvuydgCBwb3N0IOyXkCDsi6TsoJwg642w7J207YSwIGJhY2tcclxuXHRcdFx0ZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC5hZGRDb21tZW50RG9uZSA9IHRydWVcclxuXHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblx0XHRjYXNlIEFERF9DT01NRU5UX0ZBSUxVUkU6XHJcblx0XHRcdGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQuYWRkQ29tbWVudEVycm9yID0gYWN0aW9uLmVycm9yXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0YnJlYWs7XHJcblx0fVxyXG59KVxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyXHJcbiIsImltcG9ydCBwcm9kdWNlIGZyb20gJ2ltbWVyJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuXHRmb2xsb3dMb2FkaW5nOiBmYWxzZSwgLy8g7YyU66Gc7JqwIOyLnOuPhOykkeydvOuVkCDroZzrlKnspJEg652E7Jq46rGw7J6EXHJcblx0Zm9sbG93RG9uZTogZmFsc2UsIC8vIO2MlOuhnOyasCDrkKhcclxuXHRmb2xsb3dFcnJvcjogbnVsbCwgLy8g7YyU66Gc7Jqw7KSR7J2865WMIOyXkOufrCDsl4bslbBcclxuXHR1bmZvbGxvd0xvYWRpbmc6IGZhbHNlLCAvLyDslrjtjJTroZzsmrAg7Iuc64+E7KSR7J2865WQIOuhnOuUqeykkSDrnYTsmrjqsbDsnoRcclxuXHR1bmZvbGxvd0RvbmU6IGZhbHNlLCAvLyDslrjtjJTroZzsmrAg65CoXHJcblx0dW5mb2xsb3dFcnJvcjogbnVsbCwgLy8g7YyU66Gc7Jqw7KSR7J2865WMIOyXkOufrCDsl4bslbBcclxuXHRsb2dJbkxvYWRpbmc6IGZhbHNlLCAvLyDroZzqt7jsnbgg7Iuc64+E7KSR7J2865WQIOuhnOuUqeykkSDrnYTsmrjqsbDsnoRcclxuXHRsb2dJbkRvbmU6IGZhbHNlLCAvLyDroZzqt7jsnbgg65CoXHJcblx0bG9nSW5FcnJvcjogbnVsbCwgLy8g66Gc65Sp7KSR7J2865WMIOyXkOufrCDsl4bslbBcclxuXHRsb2dPdXRMb2FkaW5nOiBmYWxzZSwgLy8g66Gc6re47JWE7JuDIOyLnOuPhOykkVxyXG5cdGxvZ091dERvbmU6IGZhbHNlLCAvLyDroZzqt7jslYTsm4Mg7JmE66OMXHJcblx0bG9nT3V0RXJyb3I6IG51bGwsXHJcblx0c2lnblVwTG9hZGluZzogZmFsc2UsIC8vIO2ajOybkOqwgOyehSDroZzrlKnspJFcclxuXHRzaWduVXBEb25lOiBmYWxzZSwgLy8g7ZqM7JuQIOqwgOyehSDsmYTro4xcclxuXHRzaWduVXBFcnJvcjogbnVsbCxcclxuXHRjaGFuZ2VOaWNrbmFtZUxvYWRpbmc6IGZhbHNlLCAvLyDri4nrhKTsnoQg67OA6rK9IOuhnOuUqeykkVxyXG5cdGNoYW5nZU5pY2tuYW1lRG9uZTogZmFsc2UsIC8vIOuLieuEpOyehCDrs4Dqsr0g7JmE66OMXHJcblx0Y2hhbmdlTmlja25hbWVFcnJvcjogbnVsbCxcclxuXHRtZTogbnVsbCxcclxuXHRzaWduVXBEYXRhOiB7fSwgLy8g7ZqM7JuQIOqwgOyehSDrjbDsnbTthLBcclxuXHRsb2dpbkRhdGE6IHt9LFxyXG59XHJcblxyXG4vLyDroZzqt7jsnbgg7JWh7IWYIOyDneyEseq4sCB0aHVua1xyXG4vLyBleHBvcnQgY29uc3QgbG9naW5BY3Rpb24gPSAoZGF0YSkgPT4geyAvLyDtlajsiJjrpbwg66as7YS07ZWY64qUIOu5hOuPmeq4sCDslaHshZgg7YGs66as7JeQ7J207YSw6rCAIOy2lOqwgFxyXG4vLyBcdHJldHVybiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XHJcbi8vIFx0XHRjb25zdCBzdGF0ZSA9IGdldFN0YXRlKClcclxuLy8gXHRcdGRpc3BhdGNoKGxvZ2luUmVxdWVzdEFjdGlvbigpKVxyXG4vLyBcdFx0YXhpb3MucG9zdCgnL2FwaS9sb2dpbicpXHJcbi8vIFx0XHRcdFx0LnRoZW4oKHJlcykgPT4ge1xyXG4vLyBcdFx0XHRcdFx0ZGlzcGF0Y2gobG9naW5TdWNjZXNzQWN0aW9uKHJlcy5kYXRhKSlcclxuLy8gXHRcdFx0XHR9KVxyXG4vLyBcdFx0XHRcdC5jYXRjaCgoZXJyKSA9PiB7XHJcbi8vIFx0XHRcdFx0XHRkaXNwYXRjaChsb2dpbkZhaWx1cmVBY3Rpb24oZXJyKSlcclxuLy8gXHRcdFx0XHR9KVxyXG4vLyBcdH1cclxuLy8gfVxyXG5cclxuLy8gYWN0aW9uc1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX1JFUVVFU1QgPSAnTE9HX0lOX1JFUVVFU1QnXHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fU1VDQ0VTUyA9ICdMT0dfSU5fU1VDQ0VTUydcclxuZXhwb3J0IGNvbnN0IExPR19JTl9GQUlMVVJFID0gJ0xPR19JTl9GQUlMVVJFJ1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19PVVRfUkVRVUVTVCA9ICdMT0dfT1VUX1JFUVVFU1QnXHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1NVQ0NFU1MgPSAnTE9HX09VVF9TVUNDRVNTJ1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9GQUlMVVJFID0gJ0xPR19PVVRfRkFJTFVSRSdcclxuXHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1JFUVVFU1QgPSAnU0lHTl9VUF9SRVFVRVNUJ1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9TVUNDRVNTID0gJ1NJR05fVVBfU1VDQ0VTUydcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfRkFJTFVSRSA9ICdTSUdOX1VQX0ZBSUxVUkUnXHJcblxyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QgPSAnQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QnXHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyA9ICdDSEFOR0VfTklDS05BTUVfU1VDQ0VTUydcclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFID0gJ0NIQU5HRV9OSUNLTkFNRV9GQUlMVVJFJ1xyXG5cclxuZXhwb3J0IGNvbnN0IEZPTExPV19SRVFVRVNUID0gJ0ZPTExPV19SRVFVRVNUJ1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX1NVQ0NFU1MgPSAnRk9MTE9XX1NVQ0NFU1MnXHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfRkFJTFVSRSA9ICdGT0xMT1dfRkFJTFVSRSdcclxuXHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19SRVFVRVNUID0gJ1VORk9MTE9XX1JFUVVFU1QnXHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19TVUNDRVNTID0gJ1VORk9MTE9XX1NVQ0NFU1MnXHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19GQUlMVVJFID0gJ1VORk9MTE9XX0ZBSUxVUkUnXHJcblxyXG4vLyDsnKDsoIAg66as65OA7ISc7J2YIOyDge2DnOulvCDrsJTqv4DsiJjsnojripQg7JWh7IWYIOyDneyEsVxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfVE9fTUUgPSAnQUREX1BPU1RfVE9fTUUnXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9PRl9NRSA9ICdSRU1PVkVfUE9TVF9PRl9NRSdcclxuXHJcbmNvbnN0IGR1bW15VXNlciA9IChkYXRhKSA9PiAoe1xyXG5cdC4uLmRhdGEsXHJcblx0bmlja25hbWU6ICfruYTtg4Drr7wnLFxyXG5cdGlkOiAxLFxyXG5cdFBvc3RzOiBbe2lkOiAxfV0sXHJcblx0Rm9sbG93aW5nczogW3tuaWNrbmFtZTogJ+yZuOuFuCd9LCB7bmlja25hbWU6ICfsnYzrqZQnfSwge25pY2tuYW1lOiAn7I29J30sIHtuaWNrbmFtZTogJ+yYpOuMlSd9LCB7bmlja25hbWU6ICfrp4zrvYAnfV0sXHJcblx0Rm9sbG93ZXJzOiBbe25pY2tuYW1lOiAn6rmM66ekJ30sIHtuaWNrbmFtZTogJ+unjOuRkCd9LCB7bmlja25hbWU6ICfrs7TssZknfSwge25pY2tuYW1lOiAn65K36rCAJ30sIHtuaWNrbmFtZTogJ+yVvOuNqSd9XSxcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpblJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG5cdHJldHVybiB7XHJcblx0XHR0eXBlOiBMT0dfSU5fUkVRVUVTVCxcclxuXHRcdGRhdGEsXHJcblx0fVxyXG59XHJcbi8vIOuhnOq3uOyVhOybgyDslaHshZgg7IOd7ISx6riwIHRodW5rXHJcbi8vIGV4cG9ydCBjb25zdCBsb2dvdXRBY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4vLyBcdHJldHVybiAoZGlzcGF0Y2gpID0+IHtcclxuLy8gXHRcdGF4aW9zLnBvc3QoJy9hcGkvbG9nb3V0JylcclxuLy8gXHRcdFx0XHQudGhlbigoKSA9PiB7XHJcbi8vIFx0XHRcdFx0XHRkaXNwYXRjaChsb2dvdXRTdWNjZXNzQWN0aW9uKCkpXHJcbi8vIFx0XHRcdFx0fSlcclxuLy8gXHRcdFx0XHQuY2F0Y2goKCkgPT4ge1xyXG4vLyBcdFx0XHRcdFx0ZGlzcGF0Y2gobG9nb3V0RmFpbHVyZUFjdGlvbigpKVxyXG4vLyBcdFx0XHRcdH0pXHJcbi8vIFx0fVxyXG4vLyB9XHJcbmV4cG9ydCBjb25zdCBsb2dvdXRSZXF1ZXN0QWN0aW9uID0gKCkgPT4gKHtcclxuXHRcdHR5cGU6IExPR19PVVRfUkVRVUVTVCxcclxufSlcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSBGT0xMT1dfUkVRVUVTVDpcclxuXHRcdFx0Y29uc29sZS5sb2coJ3JlZHVjZXIgZm9sbG93JylcclxuXHRcdFx0Ly8gc3RvcmUg7JeQ7IScIOuztOuCuCBzdGF0ZSDqsIAg66eM65Ok7Ja07KeQLCBzdGF0ZSDsnpDssrTqsIAgdXNlci5qcyDsnZggc3RhdGUg7J6EXHJcblx0XHRcdGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSB0cnVlXHJcblx0XHRcdGRyYWZ0LmZvbGxvd0Vycm9yID0gbnVsbCAvLyDroZzrlKkg7KSR7J2865WM64qUIOyXkOufrCDsl4bslbBcclxuXHRcdFx0ZHJhZnQuZm9sbG93RG9uZSA9IGZhbHNlXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBGT0xMT1dfU1VDQ0VTUzpcclxuXHRcdFx0ZHJhZnQuZm9sbG93TG9hZGluZyA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LmZvbGxvd0RvbmUgPSB0cnVlXHJcblx0XHRcdC8vZHJhZnQubWUgPSBkdW1teVVzZXIoYWN0aW9uLmRhdGEpXHJcblx0XHRcdGRyYWZ0Lm1lLkZvbGxvd2luZ3MucHVzaCh7aWQ6IGFjdGlvbi5kYXRhfSlcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIEZPTExPV19GQUlMVVJFOlxyXG5cdFx0XHRjb25zb2xlLmVycm9yKCdmb2xsb3dGYWlsIDogJyArIGFjdGlvbi5lcnJvcilcclxuXHRcdFx0ZHJhZnQuZm9sbG93TG9hZGluZyA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LmZvbGxvd0Vycm9yID0gYWN0aW9uLmVycm9yXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBVTkZPTExPV19SRVFVRVNUOlxyXG5cdFx0XHRjb25zb2xlLmxvZygncmVkdWNlciBmb2xsb3cnKVxyXG5cdFx0XHQvLyBzdG9yZSDsl5DshJwg67O064K4IHN0YXRlIOqwgCDrp4zrk6TslrTsp5AsIHN0YXRlIOyekOyytOqwgCB1c2VyLmpzIOydmCBzdGF0ZSDsnoRcclxuXHRcdFx0ZHJhZnQudW5mb2xsb3dMb2FkaW5nID0gdHJ1ZVxyXG5cdFx0XHRkcmFmdC51bmZvbGxvd0Vycm9yID0gbnVsbCAvLyDroZzrlKkg7KSR7J2865WM64qUIOyXkOufrCDsl4bslbBcclxuXHRcdFx0ZHJhZnQudW5mb2xsb3dEb25lID0gZmFsc2VcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFVORk9MTE9XX1NVQ0NFU1M6XHJcblx0XHRcdGRyYWZ0LnVuZm9sbG93TG9hZGluZyA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LnVuZm9sbG93RG9uZSA9IHRydWVcclxuXHRcdFx0Ly9kcmFmdC5tZSA9IGR1bW15VXNlcihhY3Rpb24uZGF0YSlcclxuXHRcdFx0Ly8g7Ja47YyU66Gc7JqwIO2VnCDsgqzrnozrp4wg67mg7KeA6rKMXHJcblx0XHRcdGRyYWZ0Lm1lLkZvbGxvd2luZ3MgPSBkcmFmdC5tZS5Gb2xsb3dpbmdzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEpXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBVTkZPTExPV19GQUlMVVJFOlxyXG5cdFx0XHRjb25zb2xlLmVycm9yKCd1bmZvbGxvd0ZhaWwgOiAnICsgYWN0aW9uLmVycm9yKVxyXG5cdFx0XHRkcmFmdC51bmZvbGxvd0xvYWRpbmcgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC51bmZvbGxvd0Vycm9yID0gYWN0aW9uLmVycm9yXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBMT0dfSU5fUkVRVUVTVDpcclxuXHRcdFx0Y29uc29sZS5sb2coJ3JlZHVjZXIgbG9naW4nKVxyXG5cdFx0XHRkcmFmdC5sb2dJbkxvYWRpbmcgPSB0cnVlXHJcblx0XHRcdGRyYWZ0LmxvZ0luRXJyb3IgPSBudWxsXHJcblx0XHRcdGRyYWZ0LmxvZ0luRG9uZSA9IGZhbHNlXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBMT0dfSU5fU1VDQ0VTUzpcclxuXHRcdFx0ZHJhZnQubG9nSW5Mb2FkaW5nID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQubG9nSW5Eb25lID0gdHJ1ZVxyXG5cdFx0XHQvL2RyYWZ0Lm1lID0gZHVtbXlVc2VyKGFjdGlvbi5kYXRhKSBmcm9udFxyXG5cdFx0XHRkcmFmdC5tZSA9IGFjdGlvbi5kYXRhIC8vIGJhY2tcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIExPR19JTl9GQUlMVVJFOlxyXG5cdFx0XHRjb25zb2xlLmVycm9yKCdsb2dpbkZhaWwgOiAnICsgYWN0aW9uLmVycm9yKVxyXG5cdFx0XHRkcmFmdC5sb2dJbkxvYWRpbmcgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC5sb2dJbkVycm9yID0gYWN0aW9uLmVycm9yXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBMT0dfT1VUX1JFUVVFU1Q6XHJcblx0XHRcdGRyYWZ0LmxvZ091dExvYWRpbmcgPSB0cnVlXHJcblx0XHRcdGRyYWZ0LmxvZ091dERvbmUgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC5sb2dPdXRFcnJvciA9IG51bGxcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIExPR19PVVRfU1VDQ0VTUzpcclxuXHRcdFx0ZHJhZnQubG9nT3V0TG9hZGluZyA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LmxvZ091dERvbmUgPSB0cnVlXHJcblx0XHRcdGRyYWZ0Lm1lID0gbnVsbFxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgTE9HX09VVF9GQUlMVVJFOlxyXG5cdFx0XHRjb25zb2xlLmVycm9yKCdsb2dvdXRGYWlsIDogJyArIGFjdGlvbi5lcnJvcilcclxuXHRcdFx0ZHJhZnQubG9nT3V0TG9hZGluZyA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LmxvZ091dEVycm9yID0gYWN0aW9uLmVycm9yXHJcblx0XHRcdGJyZWFrXHJcblx0XHRjYXNlIFNJR05fVVBfUkVRVUVTVDpcclxuXHRcdFx0ZHJhZnQuc2lnblVwTG9hZGluZyA9IHRydWVcclxuXHRcdFx0ZHJhZnQuc2lnblVwRG9uZSA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LnNpZ25VcEVycm9yID0gbnVsbFxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgU0lHTl9VUF9TVUNDRVNTOlxyXG5cdFx0XHRkcmFmdC5zaWduVXBMb2FkaW5nID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQuc2lnblVwRG9uZSA9IHRydWVcclxuXHRcdFx0YnJlYWtcclxuXHRcdGNhc2UgU0lHTl9VUF9GQUlMVVJFOlxyXG5cdFx0XHRjb25zb2xlLmVycm9yKCdzaWduVXBGYWlsIDogJyArIGFjdGlvbi5lcnJvcilcclxuXHRcdFx0ZHJhZnQuc2lnblVwTG9hZGluZyA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LnNpZ25VcEVycm9yID0gYWN0aW9uLmVycm9yXHJcblx0XHRcdGJyZWFrXHJcblx0XHRjYXNlIENIQU5HRV9OSUNLTkFNRV9SRVFVRVNUOlxyXG5cdFx0XHRkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmcgPSB0cnVlXHJcblx0XHRcdGRyYWZ0LmNoYW5nZU5pY2tuYW1lRG9uZSA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LmNoYW5nZU5pY2tuYW1lRXJyb3IgPSBudWxsXHJcblx0XHRcdGJyZWFrXHJcblx0XHRjYXNlIENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTOlxyXG5cdFx0XHRkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmcgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC5jaGFuZ2VOaWNrbmFtZURvbmUgPSB0cnVlXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBDSEFOR0VfTklDS05BTUVfRkFJTFVSRTpcclxuXHRcdFx0Y29uc29sZS5lcnJvcignY2hhbmdlTmlja0ZhaWwgOiAnICsgYWN0aW9uLmVycm9yKVxyXG5cdFx0XHRkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmcgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC5jaGFuZ2VOaWNrbmFtZUVycm9yID0gYWN0aW9uLmVycm9yXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBBRERfUE9TVF9UT19NRTogLy8g6rKM7Iuc6riA7J2EIOyTsOuptCDqsozsi5zquIAg7JWE7J2065SU6rCAIOyXrOq4sOuhnCDrk6TslrTsmYDshJwg7ZWY64KY6rCAIOy2lOqwgOuQnOuLpFxyXG5cdFx0XHRkcmFmdC5tZS5Qb3N0cy51bnNoaWZ0KHtpZDogYWN0aW9uLmRhdGF9KVxyXG5cdFx0XHRicmVha1xyXG5cdFx0XHQvLyByZXR1cm4ge1xyXG5cdFx0XHQvLyBcdC4uLnN0YXRlLFxyXG5cdFx0XHQvLyBcdG1lOiB7XHJcblx0XHRcdC8vIFx0XHQuLi5zdGF0ZS5tZSxcclxuXHRcdFx0Ly8gXHRcdFBvc3RzOiBbe2lkOiBhY3Rpb24uZGF0YX0sIC4uLnN0YXRlLm1lLlBvc3RzXSxcclxuXHRcdFx0Ly8gXHR9XHJcblx0XHRcdC8vIH1cclxuXHRcdGNhc2UgUkVNT1ZFX1BPU1RfT0ZfTUU6XHJcblx0XHRcdGRyYWZ0Lm1lLlBvc3RzID0gZHJhZnQubWUuUG9zdHMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YSlcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRcdC8vIHJldHVybiB7IC8vIOu2iOuzgOyEseydhCDsp4DtgqTrqbAg6rKM7Iuc6riA7J2EIOyngOybjOyVvO2VnOuLpC5cclxuXHRcdFx0Ly8gXHQuLi5zdGF0ZSxcclxuXHRcdFx0Ly8gXHRtZToge1xyXG5cdFx0XHQvLyBcdFx0Li4uc3RhdGUubWUsXHJcblx0XHRcdC8vIFx0XHRQb3N0czogc3RhdGUubWUuUG9zdHMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YSlcclxuXHRcdFx0Ly8gXHR9XHJcblx0XHRcdC8vIH1cclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdGJyZWFrO1xyXG5cdH1cclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7IiwiaW1wb3J0IHthbGwsIGZvcmssIHRha2VMYXRlc3QsIGNhbGwsIHB1dCwgZGVsYXl9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHBvc3RTYWdhIGZyb20gJy4vcG9zdCdcclxuaW1wb3J0IHVzZXJTYWdhIGZyb20gJy4vdXNlcidcclxuXHJcbmF4aW9zLmRlZmF1bHRzLmJhc2VVUkwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDY1J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHJvb3RTYWdhKCkge1xyXG5cdHlpZWxkIGFsbChbIC8vIEFMTCDrsLDsl7TslYjsl5Ag7ZWc67Cp7JeQIOyLpO2Wie2VtOykjFxyXG5cdFx0Zm9yayhwb3N0U2FnYSksIC8vIGZvcmsg64qUICjtlajsiJgp7Iuk7ZaJXHJcblx0XHRmb3JrKHVzZXJTYWdhKSxcdC8vIGNhbGwg7J20656R7J2AIOuLpOultOuLpC5cclxuXHRdKVxyXG59IiwiaW1wb3J0IHthbGwsIGNhbGwsIGRlbGF5LCBmb3JrLCBwdXQsIHRha2VMYXRlc3QsIHRocm90dGxlfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHtcclxuXHRBRERfQ09NTUVOVF9GQUlMVVJFLFxyXG5cdEFERF9DT01NRU5UX1JFUVVFU1QsXHJcblx0QUREX0NPTU1FTlRfU1VDQ0VTUyxcclxuXHRBRERfUE9TVF9GQUlMVVJFLFxyXG5cdEFERF9QT1NUX1JFUVVFU1QsXHJcblx0QUREX1BPU1RfU1VDQ0VTUywgZ2VuZXJhdGVEdW1teVBvc3QsIExPQURfUE9TVFNfRkFJTFVSRSxcclxuXHRMT0FEX1BPU1RTX1JFUVVFU1QsXHJcblx0TE9BRF9QT1NUU19TVUNDRVNTLFxyXG5cdFJFTU9WRV9QT1NUX0ZBSUxVUkUsXHJcblx0UkVNT1ZFX1BPU1RfUkVRVUVTVCxcclxuXHRSRU1PVkVfUE9TVF9TVUNDRVNTLFxyXG59IGZyb20gXCIuLi9yZWR1Y2Vycy9wb3N0XCI7XHJcbmltcG9ydCB7XHJcblx0QUREX1BPU1RfVE9fTUUsXHJcblx0UkVNT1ZFX1BPU1RfT0ZfTUUsXHJcbn0gZnJvbSBcIi4uL3JlZHVjZXJzL3VzZXJcIjtcclxuaW1wb3J0IHNob3J0SWQgZnJvbSBcInNob3J0aWRcIjtcclxuXHJcblxyXG5mdW5jdGlvbiBsb2FkUG9zdHNBUEkoZGF0YSkgeyAvLyAzIOyghOuLrOuQmOuptFxyXG5cdHJldHVybiBheGlvcy5nZXQoJy9hcGkvcG9zdHMnLCBkYXRhKSAvLyA0IOuNsOydtO2EsOqwgCDqsITri6RcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRQb3N0cyhhY3Rpb24pIHsgLy8gMSDslaHshZjsl5DshJxcclxuXHR0cnkge1xyXG5cdFx0Ly9jb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRQb3N0c0FQSSwgYWN0aW9uLmRhdGEpIC8vIDIg642w7J207YSw66W8IOq6vOuCtOyEnFxyXG5cdFx0eWllbGQgZGVsYXkoMTAwMClcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IExPQURfUE9TVFNfU1VDQ0VTUyxcclxuXHRcdFx0ZGF0YTogZ2VuZXJhdGVEdW1teVBvc3QoMTApLCAvLyBkYXRhIDEwIOqwnFxyXG5cdFx0fSlcclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoJ2xvYWRQb3N0cyA6ICcgKyBlcnIpXHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOiBMT0FEX1BPU1RTX0ZBSUxVUkUsXHJcblx0XHRcdGRhdGE6IGVyci5yZXNwb25zZS5kYXRhXHJcblx0XHR9KVxyXG5cdH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGFkZFBvc3RBUEkoZGF0YSkgeyAvLyAzIOyghOuLrOuQmOuptFxyXG5cdC8vcmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvcG9zdCcsIGRhdGEpIC8vIDQg642w7J207YSw6rCAIOqwhOuLpCBmcm9udFxyXG5cdC8vIGRhdGEgY29udGVudCDqsIAgcmVxLmJvZHkuY29udGVudCDroZwg67Cx7JeU65Oc7JeQIOuzgO2ZmFxyXG5cdHJldHVybiBheGlvcy5wb3N0KCcvcG9zdCcsIHtjb250ZW50OiBkYXRhfSkgLy8gNCDrjbDsnbTthLDqsIAg6rCE64ukXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBhZGRQb3N0KGFjdGlvbikgeyAvLyAxIOyVoeyFmOyXkOyEnFxyXG5cdHRyeSB7XHJcblx0XHRjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGFkZFBvc3RBUEksIGFjdGlvbi5kYXRhKSAvLyAyIOuNsOydtO2EsOulvCDqurzrgrTshJxcclxuXHRcdC8veWllbGQgZGVsYXkoMTAwMCkgZnJvbnRcclxuXHRcdC8vY29uc3QgaWQgPSBzaG9ydElkLmdlbmVyYXRlKCkgLy8gZnJvbnQg7J2YIOuNlOuvuCDslYTrlJRcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IEFERF9QT1NUX1NVQ0NFU1MsXHJcblx0XHRcdC8qZGF0YTogeyAvLyBmcm9udCBkdW1teVxyXG5cdFx0XHRcdGlkLFxyXG5cdFx0XHRcdGNvbnRlbnQ6IGFjdGlvbi5kYXRhLFxyXG5cdFx0XHR9Ki9cclxuXHRcdFx0ZGF0YTogcmVzdWx0LmRhdGEsIC8vIGJhY2ssIOyLpOygnOuhnCDqsozsi5zquIDsnbQg65Ok7Ja07J6I7J2MXHJcblx0XHR9KVxyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogQUREX1BPU1RfVE9fTUUsXHJcblx0XHRcdC8vIGRhdGE6IGlkLCAvLyBmcm9udCBkdW1teVxyXG5cdFx0XHRkYXRhOiByZXN1bHQuZGF0YS5pZCAvLyBiYWNrXHJcblx0XHR9KVxyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0Y29uc29sZS5lcnJvcignYWRkUG9zdCA6ICcgKyBlcnIpXHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOiBBRERfUE9TVF9GQUlMVVJFLFxyXG5cdFx0XHRlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGFcclxuXHRcdH0pXHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVQb3N0QVBJKGRhdGEpIHsgLy8gMyDsoITri6zrkJjrqbRcclxuXHRyZXR1cm4gYXhpb3MucG9zdCgnL2FwaS9wb3N0JywgZGF0YSkgLy8gNCDrjbDsnbTthLDqsIAg6rCE64ukXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiByZW1vdmVQb3N0KGFjdGlvbikgeyAvLyAxIOyVoeyFmOyXkOyEnFxyXG5cdHRyeSB7IC8vIO2PrOyKpO2KuCDrpqzrk4DshJzsg4Htg5zsmYAg7Jyg7KCA66as65OA7ISc7IOB7YOc7JmAIOuPmeyLnOyXkCDtlZzrsKnsl5Ag67CU6r+A7IiYIOyXhuq4sOuVjOusuOyXkCDslaHshZjsnYQg65GQ67KI7Jy866GcIOuwlOq/lOykgOuLpCxcclxuXHRcdC8vY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChyZW1vdmVQb3N0QVBJLCBhY3Rpb24uZGF0YSkgLy8gMiDrjbDsnbTthLDrpbwg6rq864K07IScXHJcblx0XHR5aWVsZCBkZWxheSgxMDAwKVxyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogUkVNT1ZFX1BPU1RfU1VDQ0VTUyxcclxuXHRcdFx0ZGF0YTogYWN0aW9uLmRhdGEsIC8vIOyWtOuWpCDqsozsi5zrrLzsnYQg7KeA7Jug64qU7KeAIGlkIOqwgOyeiOydhOqyg1xyXG5cdFx0fSlcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IFJFTU9WRV9QT1NUX09GX01FLFxyXG5cdFx0XHRkYXRhOiBhY3Rpb24uZGF0YSxcclxuXHRcdH0pXHJcblx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRjb25zb2xlLmVycm9yKCdyZW1vdmVQb3N0IDogJyArIGVycilcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IFJFTU9WRV9QT1NUX0ZBSUxVUkUsXHJcblx0XHRcdGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YVxyXG5cdFx0fSlcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZENvbW1lbnRBUEkoZGF0YSkgeyAvLyAzIOyghOuLrOuQmOuptFxyXG5cdC8v7KO87IaM64qUIOuwseyXlOuTnOyZgCDtlITroaDtirjsnZgg7JW97IaN7J2867+QIOygle2VtOynhOqxtOyXhuuLpFxyXG5cdC8vcmV0dXJuIGF4aW9zLnBvc3QoYC9hcGkvcG9zdC8ke2RhdGEucG9zdElkfS9jb21tZW50YCwgZGF0YSkgLy8gNCDrjbDsnbTthLDqsIAg6rCE64ukIC8vIGZyb250XHJcblx0cmV0dXJuIGF4aW9zLnBvc3QoYC9wb3N0LyR7ZGF0YS5wb3N0SWR9L2NvbW1lbnRgLCBkYXRhKSAvLyA0IOuNsOydtO2EsOqwgCDqsITri6QgLy8gUE9TVCAvcG9zdC8xL2NvbW1lbnRcclxufVxyXG5cclxuZnVuY3Rpb24qIGFkZENvbW1lbnQoYWN0aW9uKSB7IC8vIDEg7JWh7IWY7JeQ7IScXHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkQ29tbWVudEFQSSwgYWN0aW9uLmRhdGEpIC8vIDIg642w7J207YSw66W8IOq6vOuCtOyEnCAvL2JhY2tcclxuXHRcdC8veWllbGQgZGVsYXkoMTAwMCkgZnJvbnRcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IEFERF9DT01NRU5UX1NVQ0NFU1MsXHJcblx0XHRcdC8vZGF0YTogYWN0aW9uLmRhdGEgLy8gZnJvbnRcclxuXHRcdFx0ZGF0YTogcmVzdWx0LmRhdGFcclxuXHRcdH0pXHJcblx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRjb25zb2xlLmVycm9yKCdhZGRDb21tZW50IDogJyArIGVycilcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IEFERF9DT01NRU5UX0ZBSUxVUkUsXHJcblx0XHRcdGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YVxyXG5cdFx0fSlcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRQb3N0cygpIHtcclxuXHR5aWVsZCB0aHJvdHRsZSg1MDAwLCBMT0FEX1BPU1RTX1JFUVVFU1QsIGxvYWRQb3N0cylcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoQWRkUG9zdCgpIHtcclxuXHR5aWVsZCB0YWtlTGF0ZXN0KEFERF9QT1NUX1JFUVVFU1QsIGFkZFBvc3QpXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFJlbW92ZVBvc3QoKSB7XHJcblx0eWllbGQgdGFrZUxhdGVzdChSRU1PVkVfUE9TVF9SRVFVRVNULCByZW1vdmVQb3N0KVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hBZGRDb21tZW50KCkge1xyXG5cdHlpZWxkIHRha2VMYXRlc3QoQUREX0NPTU1FTlRfUkVRVUVTVCwgYWRkQ29tbWVudClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHBvc3RTYWdhKCkge1xyXG5cdHlpZWxkIGFsbChbXHJcblx0XHRmb3JrKHdhdGNoTG9hZFBvc3RzKSxcclxuXHRcdGZvcmsod2F0Y2hBZGRQb3N0KSxcclxuXHRcdGZvcmsod2F0Y2hSZW1vdmVQb3N0KSxcclxuXHRcdGZvcmsod2F0Y2hBZGRDb21tZW50KSxcclxuXHRdKVxyXG59IiwiaW1wb3J0IHthbGwsIGNhbGwsIGRlbGF5LCBmb3JrLCBwdXQsIHRha2VMYXRlc3R9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQge1xyXG5cdEZPTExPV19GQUlMVVJFLFxyXG5cdEZPTExPV19SRVFVRVNULCBGT0xMT1dfU1VDQ0VTUyxcclxuXHRMT0dfSU5fRkFJTFVSRSxcclxuXHRMT0dfSU5fUkVRVUVTVCxcclxuXHRMT0dfSU5fU1VDQ0VTUyxcclxuXHRMT0dfT1VUX0ZBSUxVUkUsXHJcblx0TE9HX09VVF9SRVFVRVNULFxyXG5cdExPR19PVVRfU1VDQ0VTUyxcclxuXHRTSUdOX1VQX0ZBSUxVUkUsXHJcblx0U0lHTl9VUF9SRVFVRVNULFxyXG5cdFNJR05fVVBfU1VDQ0VTUywgVU5GT0xMT1dfRkFJTFVSRSwgVU5GT0xMT1dfUkVRVUVTVCwgVU5GT0xMT1dfU1VDQ0VTUyxcclxufSBmcm9tIFwiLi4vcmVkdWNlcnMvdXNlclwiO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGxvZ0luQVBJKGRhdGEpIHsgLy8gZ2VyZXJhdG9yIOyVhOuLmFxyXG5cdC8vcmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvbG9naW4nLCBkYXRhKSAvLyDsi6TsoJwg7ISc67KE7JeQIOuhnOq3uOyduCDsmpTssq3snYQg67O064OEIC8vIGZyb250XHJcblxyXG5cdC8vIOyLpOygnCDshJzrsoTsl5Ag66Gc6re47J24IOyalOyyreydhCDrs7Trg4QgLy8gYmFja1xyXG5cdC8vcmV0dXJuIGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzA2NS91c2VyL2xvZ2luJywgZGF0YSlcclxuXHJcblx0Ly8gbG9jYWxob3N0IOykkeuztSDsl4bslaDquLBcclxuXHRyZXR1cm4gYXhpb3MucG9zdCgnL3VzZXIvbG9naW4nLCBkYXRhKVxyXG59XHJcblxyXG4vLyDthYzsiqTtirgg7L2U65OcXHJcbi8vIGNvbnN0IGwgPSBsb2dJbih7dHlwZTogJ0xPR19JTl9SRVFVRVNUJywgZGF0YToge2lkOiAncmxhYWxzZG44QG5hdmVyLmNvbSd9fSlcclxuLy8gXHRcdGwubmV4dCgpO1xyXG4vLyBcdFx0bC5uZXh0KCk7XHJcbi8vLy8vLy8vLy8vLy8vLy8vXHJcbmZ1bmN0aW9uKiBsb2dJbihhY3Rpb24pIHsgLy8gbG9naW4gYWN0aW9uIHJlcXVlc3Qg6rCAIGFjdGlvbiDsl5Ag7KCE64usXHJcblx0dHJ5IHsgLy8g7JqU7LKtIOyLpO2MqCDrjIDruYRcclxuXHRcdGNvbnNvbGUubG9nKCdzYWdhIGxvZ0luJylcclxuXHRcdC8veWllbGQgZGVsYXkoMTAwMCkgLy8gZnJvbnRcclxuXHRcdGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9nSW5BUEksIGFjdGlvbi5kYXRhKSAvLyDshJzrsoTsl5DshJwg67Cb7J2AIOqysOqzvCDqsJLsnYQg67Cb7J2MXHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOiBMT0dfSU5fU1VDQ0VTUyxcclxuXHRcdFx0Ly9kYXRhOiBhY3Rpb24uZGF0YSwgLy8gZnJvbnRcclxuXHRcdFx0ZGF0YTogcmVzdWx0LmRhdGEgLy8gKOyEseqztSDqsrDqs7wg64u06rmAKSBiYWNrXHJcblx0XHR9KVxyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0Y29uc29sZS5lcnJvcignbG9nSW4nICsgZXJyKVxyXG5cdFx0eWllbGQgcHV0KHsgLy8gcHV0IOydgCBkaXNwYXRjaCDrnbzqs6Ag7IOd6rCB7ZWY7J6QXHJcblx0XHRcdHR5cGU6IExPR19JTl9GQUlMVVJFLFxyXG5cdFx0XHRlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEgLy8gKOyLpO2MqCDqsrDqs7wg64u06rmAKVxyXG5cdFx0fSlcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvZ091dEFQSSgpIHtcclxuXHQvLyByZXR1cm4gYXhpb3MucG9zdCgnL2FwaS9sb2dvdXQnKSBmcm9udFxyXG5cdHJldHVybiBheGlvcy5wb3N0KCcvdXNlci9sb2dvdXQnKVxyXG59XHJcblxyXG5mdW5jdGlvbiogbG9nT3V0KCkge1xyXG5cdHRyeSB7IC8vIOyalOyyrSDsi6TtjKgg64yA67mEXHJcblx0XHQvL3lpZWxkIGRlbGF5KDEwMDApIGZyb250XHJcblx0XHR5aWVsZCBjYWxsKGxvZ091dEFQSSkgLy8g7ISc67KE7JeQ7IScIOuwm+ydgCDqsrDqs7wg6rCS7J2EIOuwm+ydjCBiYWNrXHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOiBMT0dfT1VUX1NVQ0NFU1MsXHJcblx0XHR9KVxyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0Y29uc29sZS5lcnJvcignZnJvbnQgbG9nT3V0IDogJyArIGVycilcclxuXHRcdHlpZWxkIHB1dCh7IC8vIHB1dCDsnYAgZGlzcGF0Y2gg65286rOgIOyDneqwge2VmOyekFxyXG5cdFx0XHR0eXBlOiBMT0dfT1VUX0ZBSUxVUkUsXHJcblx0XHRcdGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSAvLyAo7Iuk7YyoIOqysOqzvCDri7TquYApXHJcblx0XHR9KVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gZm9sbG93QVBJKGRhdGEpIHtcclxuXHRyZXR1cm4gYXhpb3MucG9zdCgnL2FwaS9mb2xsb3cnLCBkYXRhKVxyXG59XHJcblxyXG5mdW5jdGlvbiogZm9sbG93KGFjdGlvbikge1xyXG5cdHRyeSB7XHJcblx0XHR5aWVsZCBkZWxheSgxMDAwKVxyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogRk9MTE9XX1NVQ0NFU1MsXHJcblx0XHRcdGRhdGE6IGFjdGlvbi5kYXRhXHJcblx0XHR9KVxyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0Y29uc29sZS5lcnJvcignZm9sbG93IGVycm9yIDogJyArIGVycilcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IEZPTExPV19GQUlMVVJFLFxyXG5cdFx0XHRkYXRhOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuXHRcdH0pXHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiB1bmZvbGxvd0FQSShkYXRhKSB7XHJcblx0cmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvdW5mb2xsb3cnLCBkYXRhKVxyXG59XHJcblxyXG5mdW5jdGlvbiogdW5mb2xsb3coYWN0aW9uKSB7XHJcblx0dHJ5IHtcclxuXHRcdHlpZWxkIGRlbGF5KDEwMDApXHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOiBVTkZPTExPV19TVUNDRVNTLFxyXG5cdFx0XHRkYXRhOiBhY3Rpb24uZGF0YVxyXG5cdFx0fSlcclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoJ3VuZm9sbG93IGVycm9yIDogJyArIGVycilcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IFVORk9MTE9XX0ZBSUxVUkUsXHJcblx0XHRcdGRhdGE6IGVyci5yZXNwb25zZS5kYXRhLFxyXG5cdFx0fSlcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNpZ25VcEFQSShkYXRhKSB7XHJcblx0Ly8gYmFjayBlbmQgc2VydmVyIGFkZHJcclxuXHQvLyBkYXRhIOuKlCBlbWFpbCwgbmlja25hbWUsIHBhc3N3b3JkIG9iamVjdFxyXG5cdC8vcmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvc2lnbnVwJywgZGF0YSkgLy8gZnJvbnRcclxuXHRyZXR1cm4gYXhpb3MucG9zdCgnL3VzZXInLCBkYXRhKSAvLyBiYWNrXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBzaWduVXAoYWN0aW9uKSB7XHJcblx0dHJ5IHtcclxuXHRcdC8veWllbGQgZGVsYXkoMTAwMClcclxuXHRcdGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoc2lnblVwQVBJLCBhY3Rpb24uZGF0YSlcclxuXHRcdGNvbnNvbGUubG9nKCdzaWduIHVwIHJlc3VsdCA6ICcgKyByZXN1bHQpXHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOiBTSUdOX1VQX1NVQ0NFU1MsXHJcblx0XHRcdC8vZGF0YTogcmVzdWx0LmRhdGFcclxuXHRcdH0pXHJcblx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRjb25zb2xlLmVycm9yKCdzaWduVXAgZXJyb3IgOiAnICsgZXJyKVxyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogU0lHTl9VUF9GQUlMVVJFLFxyXG5cdFx0XHRlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGFcclxuXHRcdH0pXHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hGb2xsb3coKSB7XHJcblx0eWllbGQgdGFrZUxhdGVzdChGT0xMT1dfUkVRVUVTVCwgZm9sbG93KVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hVbkZvbGxvdygpIHtcclxuXHR5aWVsZCB0YWtlTGF0ZXN0KFVORk9MTE9XX1JFUVVFU1QsIHVuZm9sbG93KVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2dJbigpIHtcdC8vIOuhnOq3uOyduCDslaHshZjsnbQg7Iuk7ZaJ65Cg65WM6rmM7KeAIOq4sOuLpOumrOqyoOuLpOuKlCDrnLtcclxuXHR5aWVsZCB0YWtlTGF0ZXN0KExPR19JTl9SRVFVRVNULCBsb2dJbikgLy9MT0dfSU5fUkVRVUVTVCDslaHshZjsnbQg7Iuk7ZaJ65CY66m0IGxvZ0luIO2VqOyImCDsi6TtlolcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9nT3V0KCkge1x0Ly8g66Gc6re47JWE7JuDIOyVoeyFmOydtCDsi6TtlonrkKDrlYzquYzsp4Ag6riw64uk66as6rKg64uk64qUIOucu1xyXG5cdHlpZWxkIHRha2VMYXRlc3QoTE9HX09VVF9SRVFVRVNULCBsb2dPdXQpIC8vTE9HX09VVF9SRVFVRVNUIOyVoeyFmOydtCDsi6TtlonrkJjrqbQgbG9nSW4g7ZWo7IiYIOyLpO2WiVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hTaWduVXAoKSB7XHQvLyDtmozsm5DqsIDsnoUg7JWh7IWY7J20IOyLpO2WieuQoOuVjOq5jOyngCDquLDri6TrpqzqsqDri6TripQg65y7XHJcblx0eWllbGQgdGFrZUxhdGVzdChTSUdOX1VQX1JFUVVFU1QsIHNpZ25VcCkgLy8gU0lHTl9VUF9SRVFVRVNUIOyVoeyFmOydtCDsi6TtlonrkJjrqbQgbG9nSW4g7ZWo7IiYIOyLpO2WiVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogdXNlclNhZ2EoKSB7XHJcblx0eWllbGQgYWxsKFtcclxuXHRcdGZvcmsod2F0Y2hGb2xsb3cpLFxyXG5cdFx0Zm9yayh3YXRjaFVuRm9sbG93KSxcclxuXHRcdGZvcmsod2F0Y2hMb2dJbiksXHJcblx0XHRmb3JrKHdhdGNoTG9nT3V0KSxcclxuXHRcdGZvcmsod2F0Y2hTaWduVXApLFxyXG5cdF0pXHJcbn0iLCJpbXBvcnQge2NyZWF0ZVdyYXBwZXJ9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcidcclxuaW1wb3J0IHthcHBseU1pZGRsZXdhcmUsIGNvbXBvc2UsIGNyZWF0ZVN0b3JlfSBmcm9tICdyZWR1eCdcclxuaW1wb3J0IHtjb21wb3NlV2l0aERldlRvb2xzfSBmcm9tICdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nXHJcbi8vaW1wb3J0IHRodW5rTWlkZGxld2FyZSBmcm9tICdyZWR1eC10aHVuaydcclxuaW1wb3J0IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXNhZ2EnXHJcbmltcG9ydCByZWR1Y2VyIGZyb20gJy4uL3JlZHVjZXJzJ1xyXG5pbXBvcnQgcm9vdFNhZ2EgZnJvbSAnLi4vc2FnYXMnXHJcblxyXG5cclxuLy8gY29uc3QgbG9nZ2VyTWlkZGxld2FyZSA9ICh7IGRpc3BhdGNoLCBnZXRTdGF0ZX0pID0+IChuZXh0KSA9PiAoYWN0aW9uKSA9PiB7XHJcbi8vICAgY29uc29sZS5sb2coYWN0aW9uKSAvLyDrr7jrk6Tsm6jslrTrpbwg7Zmc7Jqp7ZW0IOumrOuNleyKpCDrjbDruIztiLTspogg7LKY65+8IOyVoeyFmCDroZzqt7gg7LCN7Z6I6rKMIO2VmOq4sFxyXG4vLyAgIHJldHVybiBuZXh0KGFjdGlvbilcclxuLy8gfVxyXG5cclxuY29uc3QgY29uZmlndXJlU3RvcmUgPSAoY29udGV4dCkgPT4ge1xyXG5cdGNvbnNvbGUubG9nKGNvbnRleHQpXHJcblx0Y29uc3Qgc2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhTWlkZGxld2FyZSgpIC8vIHNhZ2Eg7ISk7KCVIOuwqeuylVxyXG5cdGNvbnN0IG1pZGRsZXdhcmVzID0gW3NhZ2FNaWRkbGV3YXJlXVxyXG5cdGNvbnN0IGVuaGFuY2VyID1cclxuXHRcdFx0cHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJ1xyXG5cdFx0XHRcdFx0PyBjb21wb3NlKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpXHJcblx0XHRcdFx0XHQ6IGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSlcclxuXHRjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGVuaGFuY2VyKVxyXG5cdHN0b3JlLnNhZ2FUYXNrID0gc2FnYU1pZGRsZXdhcmUucnVuKHJvb3RTYWdhKVxyXG5cdHJldHVybiBzdG9yZVxyXG59XHJcbmNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKFxyXG5cdFx0Y29uZmlndXJlU3RvcmUsXHJcblx0XHQvLyDsmLXshZjqsJ3ssrQg65SU67KE6re46rCAIO2KuOujqOydtOuptCDrpqzrjZXsiqTsl5DqtIDtlbTshJwg7J6Q7IS47ZWcIOyEpOuqheydtOuCmOyYpOq4sOuVjOusuOyXkCDqsJzrsJztlaDrlZAgdHJ1ZSDroZwg64aT7J6QXHJcblx0XHR7ZGVidWc6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnfSxcclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlclxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmYWtlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpbW1lclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJlZHV4LXdyYXBwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2FcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYS9lZmZlY3RzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNob3J0aWRcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==