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
/*! exports provided: initialState, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, addPost, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_REQUEST", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_SUCCESS", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_FAILURE", function() { return ADD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_REQUEST", function() { return ADD_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_SUCCESS", function() { return ADD_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_FAILURE", function() { return ADD_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPost", function() { return addPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addComment", function() { return addComment; });
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shortid */ "shortid");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  mainPosts: [{
    id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
    User: {
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      nickname: '비타민'
    },
    content: '첫 번째 게시글 #해시태그 #익스프레스',
    Images: [{
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      src: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726'
    }, {
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      src: 'https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg'
    }, {
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      src: 'https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg'
    }],
    Comments: [{
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      User: {
        id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
        nickname: 'nero'
      },
      content: '개정판이 나왔네요!?'
    }, {
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      User: {
        id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
        nickname: 'hero'
      },
      content: '정말정말 신기하당!'
    }]
  }],
  imagePaths: [],
  // 이미지 경로들이 저장됨
  addPostLoading: false,
  addPostDone: false,
  // 게시물 추가가 완료되었을때 true 변환
  addPostError: null,
  addCommentLoading: false,
  addCommentDone: false,
  // 게시물 추가가 완료되었을때 true 변환
  addCommentError: null
}; //게시글 작성하는 액션

const ADD_POST_REQUEST = 'ADD_POST_REQUEST'; // 변수로 따로 만들어줘야 중간에 오타가나는 일을 막을 수 있다

const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
const ADD_POST_FAILURE = 'ADD_POST_FAILURE';
const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST'; // 변수로 따로 만들어줘야 중간에 오타가나는 일을 막을 수 있다

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

const dummyPost = data => ({
  id: data.id,
  content: data.content,
  User: {
    id: 1,
    nickname: '비타민'
  },
  Images: [],
  Comments: []
});

const dummyComment = data => ({
  id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
  content: data,
  User: {
    id: 1,
    nickname: '비타민'
  }
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        addPostLoading: true,
        addPostDone: false,
        addPostError: null
      });

    case ADD_POST_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        mainPosts: [dummyPost(action.data), ...state.mainPosts],
        // 불변성 지켜주며 앞에다가 추가해야 게시글 위에올라감
        addPostLoading: false,
        addPostDone: true
      });

    case ADD_POST_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        addPostLoading: false,
        addPostError: action.error
      });

    case ADD_COMMENT_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        addCommentLoading: true,
        addCommentDone: false,
        addCommentError: null
      });

    case ADD_COMMENT_SUCCESS:
      {
        //action.data.content, postId, userId
        const postIndex = state.mainPosts.findIndex(v => v.id === action.data.postId);

        const post = _objectSpread({}, state.mainPosts[postIndex]);

        post.Comments = [dummyComment(action.data.content), ...post.Comments];
        const mainPosts = [...state.mainPosts];
        mainPosts[postIndex] = post;
        return _objectSpread(_objectSpread({}, state), {}, {
          mainPosts,
          //mainPosts: [dummyPost, ...state.mainPosts], // 불변성 지켜주며 앞에다가 추가해야 게시글 위에올라감
          addCommentLoading: false,
          addCommentDone: true
        });
      }

    case ADD_COMMENT_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        addCommentLoading: false,
        addCommentError: action.error
      });

    default:
      return _objectSpread({}, state);
  }
};

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
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const initialState = {
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

const logoutRequestAction = () => {
  return {
    type: LOG_OUT_REQUEST
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN_REQUEST:
      console.log('reducer login');
      return _objectSpread(_objectSpread({}, state), {}, {
        logInLoading: true,
        logInError: null,
        // 로딩 중일때는 에러 없앰
        logInDone: false
      });

    case LOG_IN_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        logInLoading: false,
        logInDone: true,
        me: dummyUser(action.data)
      });

    case LOG_IN_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        logInLoading: false,
        logInDone: false
      });

    case LOG_OUT_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        logOutLoading: true,
        logOutDone: false,
        logOutError: null
      });

    case LOG_OUT_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        logOutLoading: false,
        logOutDone: true,
        me: null
      });

    case LOG_OUT_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        logOutLoading: false,
        logOutError: action.error
      });

    case SIGN_UP_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        signUpLoading: true,
        signUpDone: false,
        signUpError: null
      });

    case SIGN_UP_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        signUpLoading: false,
        signUpDone: true,
        me: null
      });

    case SIGN_UP_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        signUpLoading: false,
        signUpError: action.error
      });

    case CHANGE_NICKNAME_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        changeNicknameLoading: true,
        changeNicknameDone: false,
        changeNicknameError: null
      });

    case CHANGE_NICKNAME_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        changeNicknameLoading: false,
        changeNicknameDone: true,
        me: null
      });

    case CHANGE_NICKNAME_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        changeNicknameLoading: false,
        changeNicknameError: action.error
      });

    case ADD_POST_TO_ME:
      return _objectSpread(_objectSpread({}, state), {}, {
        me: _objectSpread(_objectSpread({}, state.me), {}, {
          Posts: [{
            id: action.data
          }, ...state.me.Posts]
        })
      });

    default:
      return state;
  }
};

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






function addPostAPI(data) {
  // 3 전달되면
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/post', data); // 4 데이터가 간다
}

function* addPost(action) {
  // 1 액션에서
  try {
    //const result = yield call(addPostAPI, action.data) // 2 데이터를 꺼내서
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
    const id = shortid__WEBPACK_IMPORTED_MODULE_4___default.a.generate();
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_SUCCESS"],
      data: {
        id,
        content: action.data
      }
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_TO_ME"],
      data: id
    });
  } catch (err) {
    console.error('addPost : ' + err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_FAILURE"],
      error: err.response.data
    });
  }
}

function addCommentAPI(data) {
  // 3 전달되면
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`/api/post/${data.postId}/comment`, data); // 4 데이터가 간다
}

function* addComment(action) {
  // 1 액션에서
  try {
    //const result = yield call(addCommentAPI, action.data) // 2 데이터를 꺼내서
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_SUCCESS"],
      data: action.data //data: result.data

    });
  } catch (err) {
    console.error('addComment : ' + err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_FAILURE"],
      error: err.response.data
    });
  }
}

function* watchAddPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_REQUEST"], addPost);
}

function* watchAddComment() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_REQUEST"], addComment);
}

function* postSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddComment)]);
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
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/login', data); // 실제 서버에 로그인 요청을 보냄
} // 테스트 코드
// const l = logIn({type: 'LOG_IN_REQUEST', data: {id: 'rlaalsdn8@naver.com'}})
// 		l.next();
// 		l.next();
/////////////////


function* logIn(action) {
  // login action request 가 action 에 전달
  try {
    // 요청 실패 대비
    console.log('saga logIn');
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000); //const result = yield call(logInAPI, action.data) // 서버에서 받은 결과 값을 받음

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_SUCCESS"],
      data: action.data //data: result.data // (성공 결과 담김)

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
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/logout');
}

function* logOut() {
  try {
    // 요청 실패 대비
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000); //const result = yield call(logOutAPI) // 서버에서 받은 결과 값을 받음

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_SUCCESS"] //data: result.data // (성공 결과 담김)

    });
  } catch (err) {
    console.error('logOut : ' + err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      // put 은 dispatch 라고 생각하자
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_FAILURE"],
      error: err.response.data // (실패 결과 담김)

    });
  }
}

function signUpAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/signup');
}

function* signUp() {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_SUCCESS"] // data: result.data

    });
  } catch (err) {
    console.error('signUp : ' + err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_FAILURE"],
      error: err.response.data
    });
  }
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
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogIn), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogOut), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchSignUp)]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9wb3N0LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvcG9zdC5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy91c2VyLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1yZWR1eC13cmFwcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYS9lZmZlY3RzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2hvcnRpZFwiIl0sIm5hbWVzIjpbIk5vZGVCaXJkIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZWxlbWVudFR5cGUiLCJpc1JlcXVpcmVkIiwid3JhcHBlciIsIndpdGhSZWR1eCIsInJvb3RSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwiaW5kZXgiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJIWURSQVRFIiwiY29uc29sZSIsImxvZyIsInBheWxvYWQiLCJ1c2VyIiwicG9zdCIsImluaXRpYWxTdGF0ZSIsIm1haW5Qb3N0cyIsImlkIiwic2hvcnRJZCIsImdlbmVyYXRlIiwiVXNlciIsIm5pY2tuYW1lIiwiY29udGVudCIsIkltYWdlcyIsInNyYyIsIkNvbW1lbnRzIiwiaW1hZ2VQYXRocyIsImFkZFBvc3RMb2FkaW5nIiwiYWRkUG9zdERvbmUiLCJhZGRQb3N0RXJyb3IiLCJhZGRDb21tZW50TG9hZGluZyIsImFkZENvbW1lbnREb25lIiwiYWRkQ29tbWVudEVycm9yIiwiQUREX1BPU1RfUkVRVUVTVCIsIkFERF9QT1NUX1NVQ0NFU1MiLCJBRERfUE9TVF9GQUlMVVJFIiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsIkFERF9DT01NRU5UX1NVQ0NFU1MiLCJBRERfQ09NTUVOVF9GQUlMVVJFIiwiYWRkUG9zdCIsImRhdGEiLCJhZGRDb21tZW50IiwiZHVtbXlQb3N0IiwiZHVtbXlDb21tZW50IiwicmVkdWNlciIsImVycm9yIiwicG9zdEluZGV4IiwiZmluZEluZGV4IiwidiIsInBvc3RJZCIsImxvZ0luTG9hZGluZyIsImxvZ0luRG9uZSIsImxvZ0luRXJyb3IiLCJsb2dPdXRMb2FkaW5nIiwibG9nT3V0RG9uZSIsImxvZ091dEVycm9yIiwic2lnblVwTG9hZGluZyIsInNpZ25VcERvbmUiLCJzaWduVXBFcnJvciIsImNoYW5nZU5pY2tuYW1lTG9hZGluZyIsImNoYW5nZU5pY2tuYW1lRG9uZSIsImNoYW5nZU5pY2tuYW1lRXJyb3IiLCJtZSIsInNpZ25VcERhdGEiLCJsb2dpbkRhdGEiLCJMT0dfSU5fUkVRVUVTVCIsIkxPR19JTl9TVUNDRVNTIiwiTE9HX0lOX0ZBSUxVUkUiLCJMT0dfT1VUX1JFUVVFU1QiLCJMT0dfT1VUX1NVQ0NFU1MiLCJMT0dfT1VUX0ZBSUxVUkUiLCJTSUdOX1VQX1JFUVVFU1QiLCJTSUdOX1VQX1NVQ0NFU1MiLCJTSUdOX1VQX0ZBSUxVUkUiLCJDSEFOR0VfTklDS05BTUVfUkVRVUVTVCIsIkNIQU5HRV9OSUNLTkFNRV9TVUNDRVNTIiwiQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUiLCJGT0xMT1dfUkVRVUVTVCIsIkZPTExPV19TVUNDRVNTIiwiRk9MTE9XX0ZBSUxVUkUiLCJVTkZPTExPV19SRVFVRVNUIiwiVU5GT0xMT1dfU1VDQ0VTUyIsIlVORk9MTE9XX0ZBSUxVUkUiLCJBRERfUE9TVF9UT19NRSIsIlJFTU9WRV9QT1NUX09GX01FIiwiZHVtbXlVc2VyIiwiUG9zdHMiLCJGb2xsb3dpbmdzIiwiRm9sbG93ZXJzIiwibG9naW5SZXF1ZXN0QWN0aW9uIiwibG9nb3V0UmVxdWVzdEFjdGlvbiIsInJvb3RTYWdhIiwiYWxsIiwiZm9yayIsInBvc3RTYWdhIiwidXNlclNhZ2EiLCJhZGRQb3N0QVBJIiwiYXhpb3MiLCJkZWxheSIsInB1dCIsImVyciIsInJlc3BvbnNlIiwiYWRkQ29tbWVudEFQSSIsIndhdGNoQWRkUG9zdCIsInRha2VMYXRlc3QiLCJ3YXRjaEFkZENvbW1lbnQiLCJsb2dJbkFQSSIsImxvZ0luIiwibG9nT3V0QVBJIiwibG9nT3V0Iiwic2lnblVwQVBJIiwic2lnblVwIiwid2F0Y2hMb2dJbiIsIndhdGNoTG9nT3V0Iiwid2F0Y2hTaWduVXAiLCJjb25maWd1cmVTdG9yZSIsImNvbnRleHQiLCJzYWdhTWlkZGxld2FyZSIsImNyZWF0ZVNhZ2FNaWRkbGV3YXJlIiwibWlkZGxld2FyZXMiLCJlbmhhbmNlciIsImNvbXBvc2UiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsInNhZ2FUYXNrIiwicnVuIiwiY3JlYXRlV3JhcHBlciIsImRlYnVnIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FB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R0FBUixDQUFZeUcsT0FBWjtBQUNBLFFBQU1DLGNBQWMsR0FBR0MsaURBQW9CLEVBQTNDLENBRm1DLENBRVc7O0FBQzlDLFFBQU1DLFdBQVcsR0FBRyxDQUFDRixjQUFELENBQXBCO0FBQ0EsUUFBTUcsUUFBUSxHQUNaLFFBQ0lDLFNBREosR0FFSUMsb0ZBQW1CLENBQUNDLDZEQUFlLENBQUMsR0FBR0osV0FBSixDQUFoQixDQUh6QjtBQUlBLFFBQU1LLEtBQUssR0FBR0MseURBQVcsQ0FBQ2pGLGlEQUFELEVBQVU0RSxRQUFWLENBQXpCO0FBQ0FJLE9BQUssQ0FBQ0UsUUFBTixHQUFpQlQsY0FBYyxDQUFDVSxHQUFmLENBQW1CcEMsOENBQW5CLENBQWpCO0FBQ0EsU0FBT2lDLEtBQVA7QUFDQSxDQVhEOztBQVlBLE1BQU0zSCxPQUFPLEdBQUcrSCx3RUFBYSxDQUMzQmIsY0FEMkIsRUFFM0I7QUFDQTtBQUFDYyxPQUFLO0FBQU4sQ0FIMkIsQ0FBN0I7QUFNZWhJLHNFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaENBLGtDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLG9DIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgJ2FudGQvZGlzdC9hbnRkLmNzcydcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB3cmFwcGVyIGZyb20gJy4uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlJ1xuXG5jb25zdCBOb2RlQmlyZCA9ICh7Q29tcG9uZW50fSkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdFx0PD5cblx0XHRcdFx0PEhlYWQ+XG5cdFx0XHRcdFx0PG1ldGEgY2hhclNldD1cInV0Zi04XCIvPlxuXHRcdFx0XHRcdDx0aXRsZT5Ob2RlQmlyZDwvdGl0bGU+XG5cdFx0XHRcdDwvSGVhZD5cblx0XHRcdFx0PENvbXBvbmVudC8+XG5cdFx0XHQ8Lz5cblx0KVxufVxuXG5Ob2RlQmlyZC5wcm9wVHlwZXMgPSB7XG5cdC8vIHByb3BzIFR5cGVzIOuhnCDsoJDqsoAg7ZW065GQ66m0IOyigOuNlCDshJzruYTsiqTsnZgg7JWI7KCV7ISx7J20IOuGkuyVhOynhOuLpFxuXHRDb21wb25lbnQ6IFByb3BUeXBlcy5lbGVtZW50VHlwZS5pc1JlcXVpcmVkLFxufVxuXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyLndpdGhSZWR1eChOb2RlQmlyZClcbiIsIi8vaW1wb3J0IHsgc3RvcmUgfSBmcm9tICduZXh0L2Rpc3QvYnVpbGQvb3V0cHV0L3N0b3JlJ1xyXG5pbXBvcnQge0hZRFJBVEV9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcidcclxuaW1wb3J0IHtjb21iaW5lUmVkdWNlcnN9IGZyb20gJ3JlZHV4J1xyXG5pbXBvcnQgdXNlciBmcm9tICcuL3VzZXInXHJcbmltcG9ydCBwb3N0IGZyb20gJy4vcG9zdCdcclxuXHJcbi8vIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuLy8gXHR1c2VyOiB7fSxcclxuLy8gXHRwb3N0OiB7fSxcclxuLy8gfVxyXG5cclxuLy8g67mE64+Z6riwIOyVoeyFmCDsg53shLHquLBcclxuXHJcbi8vIOyVoeyFmCDsg53shLHquLBcclxuLypjb25zdCBjaGFuZ2VOaWNrbmFtZSA9IChkYXRhKSA9PiB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHR5cGU6ICdDSEFOR0VfTklDS05BTUUnLFxyXG5cdFx0ZGF0YSxcclxuXHR9XHJcbn1cclxuY2hhbmdlTmlja25hbWUoJ3ZpdGFtaW43NzcnKSovXHJcbi8qe1xyXG5cdFx0dHlwZTogJ0NIQU5HRV9OSUNLTkFNRScsXHJcblx0XHRkYXRhOiAndml0YW1pbjc3NycsXHJcbn0qL1xyXG5cclxuLypzdG9yZS5kaXNwYXRjaChjaGFuZ2VOaWNrbmFtZSgndml0YW1pbjc3Nzc3NzcnKSkqL1xyXG5cclxuLy8g66as65OA7IScIDog7J207KCE7IOB7YOc7JmAIOyVoeyFmOydhCDthrXtlbQg64uk7J2MIOyDge2DnOulvCDrp4zrk6TslrTrgrTripQg7ZWo7IiYXHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuXHQvLyB1c2VyIOydtOuLiOyFnOyKpO2FjOydtO2KuCwgcG9zdCDsnbTri4jshZzsiqTthYzsnbTtirgg7Lu067CU7J24IOumrOuTgOyEnOqwgCDslYzslYTshJwg7ZWc67Cp7JeQIOustuyWtOykjFxyXG5cdGluZGV4OiAoc3RhdGUgPSB7fSwgYWN0aW9uKSA9PiB7XHJcblx0XHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRcdGNhc2UgSFlEUkFURTpcclxuXHRcdFx0XHRjb25zb2xlLmxvZygnSFlEUkFURScsIGFjdGlvbilcclxuXHRcdFx0XHRyZXR1cm4gey4uLnN0YXRlLCAuLi5hY3Rpb24ucGF5bG9hZH1cclxuXHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRyZXR1cm4gc3RhdGVcclxuXHRcdH1cclxuXHR9LFxyXG5cdHVzZXIsXHJcblx0cG9zdCxcclxufSlcclxuLypyZWR1Y2Vycy9pbmRleC5qcyDrs7Tsi5zrqbQgdXNlcuuekSBwb3N066W8IOu2iOufrOyZgOyEnCDtlansuZjqs6Ag7J6I7Iq164uI64ukLlxyXG5yb290UmVkdWNlcuqwgCBzdGF0ZeqzoCwgdXNlcuyZgCBwb3N064qUIOqwgeqwgSBzdGF0ZS51c2VyLCBzdGF0ZS5wb3N06rCAIOuQqeuLiOuLpC5cclxudXNlci5qc+ydmCBtZeuKlCBzdGF0ZS51c2VyLm1l6rCAIOuQqeuLiOuLpC4qL1xyXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlclxyXG4iLCJpbXBvcnQgc2hvcnRJZCBmcm9tICdzaG9ydGlkJ1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcblx0bWFpblBvc3RzOiBbXHJcblx0XHR7XHJcblx0XHRcdGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcblx0XHRcdFVzZXI6IHtcclxuXHRcdFx0XHRpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG5cdFx0XHRcdG5pY2tuYW1lOiAn67mE7YOA66+8JyxcclxuXHRcdFx0fSxcclxuXHRcdFx0Y29udGVudDogJ+yyqyDrsojsp7gg6rKM7Iuc6riAICPtlbTsi5ztg5zqt7ggI+ydteyKpO2UhOugiOyKpCcsXHJcblx0XHRcdEltYWdlczogW3tcclxuXHRcdFx0XHRpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG5cdFx0XHRcdHNyYzogJ2h0dHBzOi8vYm9va3RodW1iLXBoaW5mLnBzdGF0aWMubmV0L2NvdmVyLzEzNy85OTUvMTM3OTk1ODUuanBnP3VkYXRlPTIwMTgwNzI2JyxcclxuXHRcdFx0fSwge1xyXG5cdFx0XHRcdGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcblx0XHRcdFx0c3JjOiAnaHR0cHM6Ly9naW1nLmdpbGJ1dC5jby5rci9ib29rL0JOMDAxOTU4L3JuX3ZpZXdfQk4wMDE5NTguanBnJyxcclxuXHRcdFx0fSwge1xyXG5cdFx0XHRcdGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcblx0XHRcdFx0c3JjOiAnaHR0cHM6Ly9naW1nLmdpbGJ1dC5jby5rci9ib29rL0JOMDAxOTk4L3JuX3ZpZXdfQk4wMDE5OTguanBnJyxcclxuXHRcdFx0fV0sXHJcblx0XHRcdENvbW1lbnRzOiBbXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuXHRcdFx0XHRcdFVzZXI6IHtcclxuXHRcdFx0XHRcdFx0aWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuXHRcdFx0XHRcdFx0bmlja25hbWU6ICduZXJvJyxcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRjb250ZW50OiAn6rCc7KCV7YyQ7J20IOuCmOyZlOuEpOyalCE/JyxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcblx0XHRcdFx0XHRVc2VyOiB7XHJcblx0XHRcdFx0XHRcdGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcblx0XHRcdFx0XHRcdG5pY2tuYW1lOiAnaGVybycsXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0Y29udGVudDogJ+ygleunkOygleunkCDsi6DquLDtlZjri7khJyxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRdLFxyXG5cdFx0fSxcclxuXHRdLFxyXG5cdGltYWdlUGF0aHM6IFtdLCAvLyDsnbTrr7jsp4Ag6rK966Gc65Ok7J20IOyggOyepeuQqFxyXG5cdGFkZFBvc3RMb2FkaW5nOiBmYWxzZSxcclxuXHRhZGRQb3N0RG9uZTogZmFsc2UsIC8vIOqyjOyLnOusvCDstpTqsIDqsIAg7JmE66OM65CY7JeI7J2E65WMIHRydWUg67OA7ZmYXHJcblx0YWRkUG9zdEVycm9yOiBudWxsLFxyXG5cdGFkZENvbW1lbnRMb2FkaW5nOiBmYWxzZSxcclxuXHRhZGRDb21tZW50RG9uZTogZmFsc2UsIC8vIOqyjOyLnOusvCDstpTqsIDqsIAg7JmE66OM65CY7JeI7J2E65WMIHRydWUg67OA7ZmYXHJcblx0YWRkQ29tbWVudEVycm9yOiBudWxsLFxyXG59XHJcblxyXG4vL+qyjOyLnOq4gCDsnpHshLHtlZjripQg7JWh7IWYXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9SRVFVRVNUID0gJ0FERF9QT1NUX1JFUVVFU1QnOyAvLyDrs4DsiJjroZwg65Sw66GcIOunjOuTpOyWtOykmOyVvCDspJHqsITsl5Ag7Jik7YOA6rCA64KY64qUIOydvOydhCDrp4nsnYQg7IiYIOyeiOuLpFxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfU1VDQ0VTUyA9ICdBRERfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX0ZBSUxVUkUgPSAnQUREX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfUkVRVUVTVCA9ICdBRERfQ09NTUVOVF9SRVFVRVNUJzsgLy8g67OA7IiY66GcIOuUsOuhnCDrp4zrk6TslrTspJjslbwg7KSR6rCE7JeQIOyYpO2DgOqwgOuCmOuKlCDsnbzsnYQg66eJ7J2EIOyImCDsnojri6RcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1NVQ0NFU1MgPSAnQUREX0NPTU1FTlRfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9GQUlMVVJFID0gJ0FERF9DT01NRU5UX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFBvc3QgPSAoZGF0YSkgPT4gKHtcclxuXHR0eXBlOiBBRERfUE9TVF9SRVFVRVNULFxyXG5cdGRhdGEsXHJcbn0pXHJcblxyXG4vLyBkeW5hbWljIGFjdGlvbiBjcmVhdGVcclxuZXhwb3J0IGNvbnN0IGFkZENvbW1lbnQgPSAoZGF0YSkgPT4gKHtcclxuXHR0eXBlOiBBRERfQ09NTUVOVF9SRVFVRVNULFxyXG5cdGRhdGEsXHJcbn0pXHJcblxyXG5jb25zdCBkdW1teVBvc3QgPSAoZGF0YSkgPT4gKHtcclxuXHRpZDogZGF0YS5pZCxcclxuXHRjb250ZW50OiBkYXRhLmNvbnRlbnQsXHJcblx0VXNlcjoge1xyXG5cdFx0aWQ6IDEsXHJcblx0XHRuaWNrbmFtZTogJ+u5hO2DgOuvvCcsXHJcblx0fSxcclxuXHRJbWFnZXM6IFtdLFxyXG5cdENvbW1lbnRzOiBbXSxcclxufSlcclxuXHJcbmNvbnN0IGR1bW15Q29tbWVudCA9IChkYXRhKSA9PiAoe1xyXG5cdGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcblx0Y29udGVudDogZGF0YSxcclxuXHRVc2VyOiB7XHJcblx0XHRpZDogMSxcclxuXHRcdG5pY2tuYW1lOiAn67mE7YOA66+8JyxcclxuXHR9XHJcbn0pXHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIEFERF9QT1NUX1JFUVVFU1Q6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0YWRkUG9zdExvYWRpbmc6IHRydWUsXHJcblx0XHRcdFx0YWRkUG9zdERvbmU6IGZhbHNlLFxyXG5cdFx0XHRcdGFkZFBvc3RFcnJvcjogbnVsbCxcclxuXHRcdFx0fVxyXG5cdFx0Y2FzZSBBRERfUE9TVF9TVUNDRVNTOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdG1haW5Qb3N0czogW2R1bW15UG9zdChhY3Rpb24uZGF0YSksIC4uLnN0YXRlLm1haW5Qb3N0c10sIC8vIOu2iOuzgOyEsSDsp4DsvJzso7zrqbAg7JWe7JeQ64uk6rCAIOy2lOqwgO2VtOyVvCDqsozsi5zquIAg7JyE7JeQ7Jis65286rCQXHJcblx0XHRcdFx0YWRkUG9zdExvYWRpbmc6IGZhbHNlLFxyXG5cdFx0XHRcdGFkZFBvc3REb25lOiB0cnVlLFxyXG5cdFx0XHR9XHJcblx0XHRjYXNlIEFERF9QT1NUX0ZBSUxVUkU6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0YWRkUG9zdExvYWRpbmc6IGZhbHNlLFxyXG5cdFx0XHRcdGFkZFBvc3RFcnJvcjogYWN0aW9uLmVycm9yLFxyXG5cdFx0XHR9XHJcblx0XHRjYXNlIEFERF9DT01NRU5UX1JFUVVFU1Q6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0YWRkQ29tbWVudExvYWRpbmc6IHRydWUsXHJcblx0XHRcdFx0YWRkQ29tbWVudERvbmU6IGZhbHNlLFxyXG5cdFx0XHRcdGFkZENvbW1lbnRFcnJvcjogbnVsbCxcclxuXHRcdFx0fVxyXG5cdFx0Y2FzZSBBRERfQ09NTUVOVF9TVUNDRVNTOntcclxuXHRcdFx0Ly9hY3Rpb24uZGF0YS5jb250ZW50LCBwb3N0SWQsIHVzZXJJZFxyXG5cdFx0XHRjb25zdCBwb3N0SW5kZXggPSBzdGF0ZS5tYWluUG9zdHMuZmluZEluZGV4KCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5wb3N0SWQpXHJcblx0XHRcdGNvbnN0IHBvc3QgPSB7Li4uc3RhdGUubWFpblBvc3RzW3Bvc3RJbmRleF19XHJcblx0XHRcdHBvc3QuQ29tbWVudHMgPSBbZHVtbXlDb21tZW50KGFjdGlvbi5kYXRhLmNvbnRlbnQpLCAuLi5wb3N0LkNvbW1lbnRzXVxyXG5cdFx0XHRjb25zdCBtYWluUG9zdHMgPSBbLi4uc3RhdGUubWFpblBvc3RzXVxyXG5cdFx0XHRtYWluUG9zdHNbcG9zdEluZGV4XSA9IHBvc3RcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRtYWluUG9zdHMsXHJcblx0XHRcdFx0Ly9tYWluUG9zdHM6IFtkdW1teVBvc3QsIC4uLnN0YXRlLm1haW5Qb3N0c10sIC8vIOu2iOuzgOyEsSDsp4DsvJzso7zrqbAg7JWe7JeQ64uk6rCAIOy2lOqwgO2VtOyVvCDqsozsi5zquIAg7JyE7JeQ7Jis65286rCQXHJcblx0XHRcdFx0YWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLFxyXG5cdFx0XHRcdGFkZENvbW1lbnREb25lOiB0cnVlLFxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRjYXNlIEFERF9DT01NRU5UX0ZBSUxVUkU6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0YWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLFxyXG5cdFx0XHRcdGFkZENvbW1lbnRFcnJvcjogYWN0aW9uLmVycm9yLFxyXG5cdFx0XHR9XHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHR9XHJcblx0fVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXJcclxuIiwiZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuXHRsb2dJbkxvYWRpbmc6IGZhbHNlLCAvLyDroZzqt7jsnbgg7Iuc64+E7KSR7J2865WQIOuhnOuUqeykkSDrnYTsmrjqsbDsnoRcclxuXHRsb2dJbkRvbmU6IGZhbHNlLCAvLyDroZzqt7jsnbgg65CoXHJcblx0bG9nSW5FcnJvcjogbnVsbCwgLy8g66Gc65Sp7KSR7J2865WMIOyXkOufrCDsl4bslbBcclxuXHRsb2dPdXRMb2FkaW5nOiBmYWxzZSwgLy8g66Gc6re47JWE7JuDIOyLnOuPhOykkVxyXG5cdGxvZ091dERvbmU6IGZhbHNlLCAvLyDroZzqt7jslYTsm4Mg7JmE66OMXHJcblx0bG9nT3V0RXJyb3I6IG51bGwsXHJcblx0c2lnblVwTG9hZGluZzogZmFsc2UsIC8vIO2ajOybkOqwgOyehSDroZzrlKnspJFcclxuXHRzaWduVXBEb25lOiBmYWxzZSwgLy8g7ZqM7JuQIOqwgOyehSDsmYTro4xcclxuXHRzaWduVXBFcnJvcjogbnVsbCxcclxuXHRjaGFuZ2VOaWNrbmFtZUxvYWRpbmc6IGZhbHNlLCAvLyDri4nrhKTsnoQg67OA6rK9IOuhnOuUqeykkVxyXG5cdGNoYW5nZU5pY2tuYW1lRG9uZTogZmFsc2UsIC8vIOuLieuEpOyehCDrs4Dqsr0g7JmE66OMXHJcblx0Y2hhbmdlTmlja25hbWVFcnJvcjogbnVsbCxcclxuXHRtZTogbnVsbCxcclxuXHRzaWduVXBEYXRhOiB7fSwgLy8g7ZqM7JuQIOqwgOyehSDrjbDsnbTthLBcclxuXHRsb2dpbkRhdGE6IHt9LFxyXG59XHJcblxyXG4vLyDroZzqt7jsnbgg7JWh7IWYIOyDneyEseq4sCB0aHVua1xyXG4vLyBleHBvcnQgY29uc3QgbG9naW5BY3Rpb24gPSAoZGF0YSkgPT4geyAvLyDtlajsiJjrpbwg66as7YS07ZWY64qUIOu5hOuPmeq4sCDslaHshZgg7YGs66as7JeQ7J207YSw6rCAIOy2lOqwgFxyXG4vLyBcdHJldHVybiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XHJcbi8vIFx0XHRjb25zdCBzdGF0ZSA9IGdldFN0YXRlKClcclxuLy8gXHRcdGRpc3BhdGNoKGxvZ2luUmVxdWVzdEFjdGlvbigpKVxyXG4vLyBcdFx0YXhpb3MucG9zdCgnL2FwaS9sb2dpbicpXHJcbi8vIFx0XHRcdFx0LnRoZW4oKHJlcykgPT4ge1xyXG4vLyBcdFx0XHRcdFx0ZGlzcGF0Y2gobG9naW5TdWNjZXNzQWN0aW9uKHJlcy5kYXRhKSlcclxuLy8gXHRcdFx0XHR9KVxyXG4vLyBcdFx0XHRcdC5jYXRjaCgoZXJyKSA9PiB7XHJcbi8vIFx0XHRcdFx0XHRkaXNwYXRjaChsb2dpbkZhaWx1cmVBY3Rpb24oZXJyKSlcclxuLy8gXHRcdFx0XHR9KVxyXG4vLyBcdH1cclxuLy8gfVxyXG5cclxuLy8gYWN0aW9uc1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX1JFUVVFU1QgPSAnTE9HX0lOX1JFUVVFU1QnXHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fU1VDQ0VTUyA9ICdMT0dfSU5fU1VDQ0VTUydcclxuZXhwb3J0IGNvbnN0IExPR19JTl9GQUlMVVJFID0gJ0xPR19JTl9GQUlMVVJFJ1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19PVVRfUkVRVUVTVCA9ICdMT0dfT1VUX1JFUVVFU1QnXHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1NVQ0NFU1MgPSAnTE9HX09VVF9TVUNDRVNTJ1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9GQUlMVVJFID0gJ0xPR19PVVRfRkFJTFVSRSdcclxuXHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1JFUVVFU1QgPSAnU0lHTl9VUF9SRVFVRVNUJ1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9TVUNDRVNTID0gJ1NJR05fVVBfU1VDQ0VTUydcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfRkFJTFVSRSA9ICdTSUdOX1VQX0ZBSUxVUkUnXHJcblxyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QgPSAnQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QnXHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyA9ICdDSEFOR0VfTklDS05BTUVfU1VDQ0VTUydcclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFID0gJ0NIQU5HRV9OSUNLTkFNRV9GQUlMVVJFJ1xyXG5cclxuZXhwb3J0IGNvbnN0IEZPTExPV19SRVFVRVNUID0gJ0ZPTExPV19SRVFVRVNUJ1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX1NVQ0NFU1MgPSAnRk9MTE9XX1NVQ0NFU1MnXHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfRkFJTFVSRSA9ICdGT0xMT1dfRkFJTFVSRSdcclxuXHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19SRVFVRVNUID0gJ1VORk9MTE9XX1JFUVVFU1QnXHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19TVUNDRVNTID0gJ1VORk9MTE9XX1NVQ0NFU1MnXHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19GQUlMVVJFID0gJ1VORk9MTE9XX0ZBSUxVUkUnXHJcblxyXG4vLyDsnKDsoIAg66as65OA7ISc7J2YIOyDge2DnOulvCDrsJTqv4DsiJjsnojripQg7JWh7IWYIOyDneyEsVxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfVE9fTUUgPSAnQUREX1BPU1RfVE9fTUUnXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9PRl9NRSA9ICdSRU1PVkVfUE9TVF9PRl9NRSdcclxuXHJcbmNvbnN0IGR1bW15VXNlciA9IChkYXRhKSA9PiAoe1xyXG5cdC4uLmRhdGEsXHJcblx0bmlja25hbWU6ICfruYTtg4Drr7wnLFxyXG5cdGlkOiAxLFxyXG5cdFBvc3RzOiBbe2lkOiAxfV0sXHJcblx0Rm9sbG93aW5nczogW3tuaWNrbmFtZTogJ+yZuOuFuCd9LCB7bmlja25hbWU6ICfsnYzrqZQnfSwge25pY2tuYW1lOiAn7I29J30sIHtuaWNrbmFtZTogJ+yYpOuMlSd9LCB7bmlja25hbWU6ICfrp4zrvYAnfV0sXHJcblx0Rm9sbG93ZXJzOiBbe25pY2tuYW1lOiAn6rmM66ekJ30sIHtuaWNrbmFtZTogJ+unjOuRkCd9LCB7bmlja25hbWU6ICfrs7TssZknfSwge25pY2tuYW1lOiAn65K36rCAJ30sIHtuaWNrbmFtZTogJ+yVvOuNqSd9XSxcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpblJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG5cdHJldHVybiB7XHJcblx0XHR0eXBlOiBMT0dfSU5fUkVRVUVTVCxcclxuXHRcdGRhdGEsXHJcblx0fVxyXG59XHJcbi8vIOuhnOq3uOyVhOybgyDslaHshZgg7IOd7ISx6riwIHRodW5rXHJcbi8vIGV4cG9ydCBjb25zdCBsb2dvdXRBY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4vLyBcdHJldHVybiAoZGlzcGF0Y2gpID0+IHtcclxuLy8gXHRcdGF4aW9zLnBvc3QoJy9hcGkvbG9nb3V0JylcclxuLy8gXHRcdFx0XHQudGhlbigoKSA9PiB7XHJcbi8vIFx0XHRcdFx0XHRkaXNwYXRjaChsb2dvdXRTdWNjZXNzQWN0aW9uKCkpXHJcbi8vIFx0XHRcdFx0fSlcclxuLy8gXHRcdFx0XHQuY2F0Y2goKCkgPT4ge1xyXG4vLyBcdFx0XHRcdFx0ZGlzcGF0Y2gobG9nb3V0RmFpbHVyZUFjdGlvbigpKVxyXG4vLyBcdFx0XHRcdH0pXHJcbi8vIFx0fVxyXG4vLyB9XHJcbmV4cG9ydCBjb25zdCBsb2dvdXRSZXF1ZXN0QWN0aW9uID0gKCkgPT4ge1xyXG5cdHJldHVybiB7XHJcblx0XHR0eXBlOiBMT0dfT1VUX1JFUVVFU1QsXHJcblx0fVxyXG59XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIExPR19JTl9SRVFVRVNUOlxyXG5cdFx0XHRjb25zb2xlLmxvZygncmVkdWNlciBsb2dpbicpXHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Ly8gc3RvcmUg7JeQ7IScIOuztOuCuCBzdGF0ZSDqsIAg66eM65Ok7Ja07KeQLCBzdGF0ZSDsnpDssrTqsIAgdWlzZXIuanMg7J2YIHN0YXRlIOyehFxyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGxvZ0luTG9hZGluZzogdHJ1ZSxcclxuXHRcdFx0XHRsb2dJbkVycm9yOiBudWxsLCAvLyDroZzrlKkg7KSR7J2865WM64qUIOyXkOufrCDsl4bslbBcclxuXHRcdFx0XHRsb2dJbkRvbmU6IGZhbHNlLFxyXG5cdFx0XHR9XHJcblx0XHRjYXNlIExPR19JTl9TVUNDRVNTOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGxvZ0luTG9hZGluZzogZmFsc2UsXHJcblx0XHRcdFx0bG9nSW5Eb25lOiB0cnVlLFxyXG5cdFx0XHRcdG1lOiBkdW1teVVzZXIoYWN0aW9uLmRhdGEpLFxyXG5cdFx0XHR9XHJcblx0XHRjYXNlIExPR19JTl9GQUlMVVJFOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGxvZ0luTG9hZGluZzogZmFsc2UsXHJcblx0XHRcdFx0bG9nSW5Eb25lOiBmYWxzZSxcclxuXHRcdFx0fVxyXG5cdFx0Y2FzZSBMT0dfT1VUX1JFUVVFU1Q6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0bG9nT3V0TG9hZGluZzogdHJ1ZSxcclxuXHRcdFx0XHRsb2dPdXREb25lOiBmYWxzZSxcclxuXHRcdFx0XHRsb2dPdXRFcnJvcjogbnVsbCxcclxuXHRcdFx0fVxyXG5cdFx0Y2FzZSBMT0dfT1VUX1NVQ0NFU1M6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0bG9nT3V0TG9hZGluZzogZmFsc2UsXHJcblx0XHRcdFx0bG9nT3V0RG9uZTogdHJ1ZSxcclxuXHRcdFx0XHRtZTogbnVsbCxcclxuXHRcdFx0fVxyXG5cdFx0Y2FzZSBMT0dfT1VUX0ZBSUxVUkU6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0bG9nT3V0TG9hZGluZzogZmFsc2UsXHJcblx0XHRcdFx0bG9nT3V0RXJyb3I6IGFjdGlvbi5lcnJvcixcclxuXHRcdFx0fVxyXG5cdFx0Y2FzZSBTSUdOX1VQX1JFUVVFU1Q6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0c2lnblVwTG9hZGluZzogdHJ1ZSxcclxuXHRcdFx0XHRzaWduVXBEb25lOiBmYWxzZSxcclxuXHRcdFx0XHRzaWduVXBFcnJvcjogbnVsbCxcclxuXHRcdFx0fVxyXG5cdFx0Y2FzZSBTSUdOX1VQX1NVQ0NFU1M6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0c2lnblVwTG9hZGluZzogZmFsc2UsXHJcblx0XHRcdFx0c2lnblVwRG9uZTogdHJ1ZSxcclxuXHRcdFx0XHRtZTogbnVsbCxcclxuXHRcdFx0fVxyXG5cdFx0Y2FzZSBTSUdOX1VQX0ZBSUxVUkU6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0c2lnblVwTG9hZGluZzogZmFsc2UsXHJcblx0XHRcdFx0c2lnblVwRXJyb3I6IGFjdGlvbi5lcnJvcixcclxuXHRcdFx0fVxyXG5cdFx0Y2FzZSBDSEFOR0VfTklDS05BTUVfUkVRVUVTVDpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRjaGFuZ2VOaWNrbmFtZUxvYWRpbmc6IHRydWUsXHJcblx0XHRcdFx0Y2hhbmdlTmlja25hbWVEb25lOiBmYWxzZSxcclxuXHRcdFx0XHRjaGFuZ2VOaWNrbmFtZUVycm9yOiBudWxsLFxyXG5cdFx0XHR9XHJcblx0XHRjYXNlIENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGNoYW5nZU5pY2tuYW1lTG9hZGluZzogZmFsc2UsXHJcblx0XHRcdFx0Y2hhbmdlTmlja25hbWVEb25lOiB0cnVlLFxyXG5cdFx0XHRcdG1lOiBudWxsLFxyXG5cdFx0XHR9XHJcblx0XHRjYXNlIENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGNoYW5nZU5pY2tuYW1lTG9hZGluZzogZmFsc2UsXHJcblx0XHRcdFx0Y2hhbmdlTmlja25hbWVFcnJvcjogYWN0aW9uLmVycm9yLFxyXG5cdFx0XHR9XHJcblx0XHRjYXNlIEFERF9QT1NUX1RPX01FOlxyXG5cdFx0XHRyZXR1cm4geyAvLyDqsozsi5zquIDsnYQg7JOw66m0IOqyjOyLnOq4gCDslYTsnbTrlJTqsIAg7Jes6riw66GcIOuTpOyWtOyZgOyEnCDtlZjrgpjqsIAg7LaU6rCA65Cc64ukXHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0bWU6IHtcclxuXHRcdFx0XHRcdC4uLnN0YXRlLm1lLFxyXG5cdFx0XHRcdFx0UG9zdHM6IFt7aWQ6IGFjdGlvbi5kYXRhfSwgLi4uc3RhdGUubWUuUG9zdHNdLFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiLCJpbXBvcnQge2FsbCwgZm9yaywgdGFrZUxhdGVzdCwgY2FsbCwgcHV0LCBkZWxheX0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgcG9zdFNhZ2EgZnJvbSAnLi9wb3N0J1xyXG5pbXBvcnQgdXNlclNhZ2EgZnJvbSAnLi91c2VyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHJvb3RTYWdhKCkge1xyXG5cdHlpZWxkIGFsbChbIC8vIEFMTCDrsLDsl7TslYjsl5Ag7ZWc67Cp7JeQIOyLpO2Wie2VtOykjFxyXG5cdFx0Zm9yayhwb3N0U2FnYSksIC8vIGZvcmsg64qUICjtlajsiJgp7Iuk7ZaJXHJcblx0XHRmb3JrKHVzZXJTYWdhKSxcdC8vIGNhbGwg7J20656R7J2AIOuLpOultOuLpC5cclxuXHRdKVxyXG59IiwiaW1wb3J0IHthbGwsIGRlbGF5LCBmb3JrLCBwdXQsIHRha2VMYXRlc3R9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQge1xyXG5cdEFERF9DT01NRU5UX0ZBSUxVUkUsXHJcblx0QUREX0NPTU1FTlRfUkVRVUVTVCxcclxuXHRBRERfQ09NTUVOVF9TVUNDRVNTLFxyXG5cdEFERF9QT1NUX0ZBSUxVUkUsXHJcblx0QUREX1BPU1RfUkVRVUVTVCxcclxuXHRBRERfUE9TVF9TVUNDRVNTLFxyXG59IGZyb20gXCIuLi9yZWR1Y2Vycy9wb3N0XCI7XHJcbmltcG9ydCB7QUREX1BPU1RfVE9fTUV9IGZyb20gXCIuLi9yZWR1Y2Vycy91c2VyXCI7XHJcbmltcG9ydCBzaG9ydElkIGZyb20gXCJzaG9ydGlkXCI7XHJcblxyXG5mdW5jdGlvbiBhZGRQb3N0QVBJKGRhdGEpIHsgLy8gMyDsoITri6zrkJjrqbRcclxuXHRyZXR1cm4gYXhpb3MucG9zdCgnL2FwaS9wb3N0JywgZGF0YSkgLy8gNCDrjbDsnbTthLDqsIAg6rCE64ukXHJcbn1cclxuZnVuY3Rpb24qIGFkZFBvc3QoYWN0aW9uKSB7IC8vIDEg7JWh7IWY7JeQ7IScXHJcblx0dHJ5IHtcclxuXHRcdC8vY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRQb3N0QVBJLCBhY3Rpb24uZGF0YSkgLy8gMiDrjbDsnbTthLDrpbwg6rq864K07IScXHJcblx0XHR5aWVsZCBkZWxheSgxMDAwKVxyXG5cdFx0Y29uc3QgaWQgPSBzaG9ydElkLmdlbmVyYXRlKClcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IEFERF9QT1NUX1NVQ0NFU1MsXHJcblx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRpZCxcclxuXHRcdFx0XHRjb250ZW50OiBhY3Rpb24uZGF0YSxcclxuXHRcdFx0fVxyXG5cdFx0fSlcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IEFERF9QT1NUX1RPX01FLFxyXG5cdFx0XHRkYXRhOiBpZCxcclxuXHRcdH0pXHJcblx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRjb25zb2xlLmVycm9yKCdhZGRQb3N0IDogJyArIGVycilcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IEFERF9QT1NUX0ZBSUxVUkUsXHJcblx0XHRcdGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YVxyXG5cdFx0fSlcclxuXHR9XHJcbn1cclxuZnVuY3Rpb24gYWRkQ29tbWVudEFQSShkYXRhKSB7IC8vIDMg7KCE64us65CY66m0XHJcblx0cmV0dXJuIGF4aW9zLnBvc3QoYC9hcGkvcG9zdC8ke2RhdGEucG9zdElkfS9jb21tZW50YCwgZGF0YSkgLy8gNCDrjbDsnbTthLDqsIAg6rCE64ukXHJcbn1cclxuZnVuY3Rpb24qIGFkZENvbW1lbnQoYWN0aW9uKSB7IC8vIDEg7JWh7IWY7JeQ7IScXHJcblx0dHJ5IHtcclxuXHRcdC8vY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRDb21tZW50QVBJLCBhY3Rpb24uZGF0YSkgLy8gMiDrjbDsnbTthLDrpbwg6rq864K07IScXHJcblx0XHR5aWVsZCBkZWxheSgxMDAwKVxyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogQUREX0NPTU1FTlRfU1VDQ0VTUyxcclxuXHRcdFx0ZGF0YTogYWN0aW9uLmRhdGFcclxuXHRcdFx0Ly9kYXRhOiByZXN1bHQuZGF0YVxyXG5cdFx0fSlcclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoJ2FkZENvbW1lbnQgOiAnICsgZXJyKVxyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogQUREX0NPTU1FTlRfRkFJTFVSRSxcclxuXHRcdFx0ZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhXHJcblx0XHR9KVxyXG5cdH1cclxufVxyXG5mdW5jdGlvbiogd2F0Y2hBZGRQb3N0KCkge1xyXG5cdHlpZWxkIHRha2VMYXRlc3QoQUREX1BPU1RfUkVRVUVTVCwgYWRkUG9zdClcclxuXHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoQWRkQ29tbWVudCgpIHtcclxuXHR5aWVsZCB0YWtlTGF0ZXN0KEFERF9DT01NRU5UX1JFUVVFU1QsIGFkZENvbW1lbnQpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBwb3N0U2FnYSgpIHtcclxuXHR5aWVsZCBhbGwoW1xyXG5cdFx0Zm9yayh3YXRjaEFkZFBvc3QpLFxyXG5cdFx0XHRmb3JrKHdhdGNoQWRkQ29tbWVudCksXHJcblx0XSlcclxufSIsImltcG9ydCB7YWxsLCBkZWxheSwgZm9yaywgcHV0LCB0YWtlTGF0ZXN0fSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHtcclxuXHRMT0dfSU5fRkFJTFVSRSxcclxuXHRMT0dfSU5fUkVRVUVTVCxcclxuXHRMT0dfSU5fU1VDQ0VTUyxcclxuXHRMT0dfT1VUX0ZBSUxVUkUsXHJcblx0TE9HX09VVF9SRVFVRVNULFxyXG5cdExPR19PVVRfU1VDQ0VTUyxcclxuXHRTSUdOX1VQX0ZBSUxVUkUsXHJcblx0U0lHTl9VUF9SRVFVRVNULFxyXG5cdFNJR05fVVBfU1VDQ0VTUyxcclxufSBmcm9tIFwiLi4vcmVkdWNlcnMvdXNlclwiO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGxvZ0luQVBJKGRhdGEpIHsgLy8gZ2VyZXJhdG9yIOyVhOuLmFxyXG5cdHJldHVybiBheGlvcy5wb3N0KCcvYXBpL2xvZ2luJywgZGF0YSkgLy8g7Iuk7KCcIOyEnOuyhOyXkCDroZzqt7jsnbgg7JqU7LKt7J2EIOuztOuDhFxyXG59XHJcblxyXG4vLyDthYzsiqTtirgg7L2U65OcXHJcbi8vIGNvbnN0IGwgPSBsb2dJbih7dHlwZTogJ0xPR19JTl9SRVFVRVNUJywgZGF0YToge2lkOiAncmxhYWxzZG44QG5hdmVyLmNvbSd9fSlcclxuLy8gXHRcdGwubmV4dCgpO1xyXG4vLyBcdFx0bC5uZXh0KCk7XHJcbi8vLy8vLy8vLy8vLy8vLy8vXHJcbmZ1bmN0aW9uKiBsb2dJbihhY3Rpb24pIHsgLy8gbG9naW4gYWN0aW9uIHJlcXVlc3Qg6rCAIGFjdGlvbiDsl5Ag7KCE64usXHJcblx0dHJ5IHsgLy8g7JqU7LKtIOyLpO2MqCDrjIDruYRcclxuXHRcdGNvbnNvbGUubG9nKCdzYWdhIGxvZ0luJylcclxuXHRcdHlpZWxkIGRlbGF5KDEwMDApXHJcblx0XHQvL2NvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9nSW5BUEksIGFjdGlvbi5kYXRhKSAvLyDshJzrsoTsl5DshJwg67Cb7J2AIOqysOqzvCDqsJLsnYQg67Cb7J2MXHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOiBMT0dfSU5fU1VDQ0VTUyxcclxuXHRcdFx0ZGF0YTogYWN0aW9uLmRhdGEsXHJcblx0XHRcdC8vZGF0YTogcmVzdWx0LmRhdGEgLy8gKOyEseqztSDqsrDqs7wg64u06rmAKVxyXG5cdFx0fSlcclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoJ2xvZ0luJyArIGVycilcclxuXHRcdHlpZWxkIHB1dCh7IC8vIHB1dCDsnYAgZGlzcGF0Y2gg65286rOgIOyDneqwge2VmOyekFxyXG5cdFx0XHR0eXBlOiBMT0dfSU5fRkFJTFVSRSxcclxuXHRcdFx0ZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhIC8vICjsi6TtjKgg6rKw6rO8IOuLtOq5gClcclxuXHRcdH0pXHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2dPdXRBUEkoKSB7XHJcblx0cmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvbG9nb3V0JylcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvZ091dCgpIHtcclxuXHR0cnkgeyAvLyDsmpTssq0g7Iuk7YyoIOuMgOu5hFxyXG5cdFx0eWllbGQgZGVsYXkoMTAwMClcclxuXHRcdC8vY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2dPdXRBUEkpIC8vIOyEnOuyhOyXkOyEnCDrsJvsnYAg6rKw6rO8IOqwkuydhCDrsJvsnYxcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IExPR19PVVRfU1VDQ0VTUyxcclxuXHRcdFx0Ly9kYXRhOiByZXN1bHQuZGF0YSAvLyAo7ISx6rO1IOqysOqzvCDri7TquYApXHJcblx0XHR9KVxyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0Y29uc29sZS5lcnJvcignbG9nT3V0IDogJyArIGVycilcclxuXHRcdHlpZWxkIHB1dCh7IC8vIHB1dCDsnYAgZGlzcGF0Y2gg65286rOgIOyDneqwge2VmOyekFxyXG5cdFx0XHR0eXBlOiBMT0dfT1VUX0ZBSUxVUkUsXHJcblx0XHRcdGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSAvLyAo7Iuk7YyoIOqysOqzvCDri7TquYApXHJcblx0XHR9KVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2lnblVwQVBJKCkge1xyXG5cdHJldHVybiBheGlvcy5wb3N0KCcvYXBpL3NpZ251cCcpXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBzaWduVXAoKSB7XHJcblx0dHJ5IHtcclxuXHRcdHlpZWxkIGRlbGF5KDEwMDApXHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOiBTSUdOX1VQX1NVQ0NFU1MsXHJcblx0XHRcdC8vIGRhdGE6IHJlc3VsdC5kYXRhXHJcblx0XHR9KVxyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0Y29uc29sZS5lcnJvcignc2lnblVwIDogJyArIGVycilcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IFNJR05fVVBfRkFJTFVSRSxcclxuXHRcdFx0ZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhXHJcblx0XHR9KVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9nSW4oKSB7XHQvLyDroZzqt7jsnbgg7JWh7IWY7J20IOyLpO2WieuQoOuVjOq5jOyngCDquLDri6TrpqzqsqDri6TripQg65y7XHJcblx0eWllbGQgdGFrZUxhdGVzdChMT0dfSU5fUkVRVUVTVCwgbG9nSW4pIC8vTE9HX0lOX1JFUVVFU1Qg7JWh7IWY7J20IOyLpO2WieuQmOuptCBsb2dJbiDtlajsiJgg7Iuk7ZaJXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvZ091dCgpIHtcdC8vIOuhnOq3uOyVhOybgyDslaHshZjsnbQg7Iuk7ZaJ65Cg65WM6rmM7KeAIOq4sOuLpOumrOqyoOuLpOuKlCDrnLtcclxuXHR5aWVsZCB0YWtlTGF0ZXN0KExPR19PVVRfUkVRVUVTVCwgbG9nT3V0KSAvL0xPR19PVVRfUkVRVUVTVCDslaHshZjsnbQg7Iuk7ZaJ65CY66m0IGxvZ0luIO2VqOyImCDsi6TtlolcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoU2lnblVwKCkge1x0Ly8g7ZqM7JuQ6rCA7J6FIOyVoeyFmOydtCDsi6TtlonrkKDrlYzquYzsp4Ag6riw64uk66as6rKg64uk64qUIOucu1xyXG5cdHlpZWxkIHRha2VMYXRlc3QoU0lHTl9VUF9SRVFVRVNULCBzaWduVXApIC8vIFNJR05fVVBfUkVRVUVTVCDslaHshZjsnbQg7Iuk7ZaJ65CY66m0IGxvZ0luIO2VqOyImCDsi6TtlolcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHVzZXJTYWdhKCkge1xyXG5cdHlpZWxkIGFsbChbXHJcblx0XHRmb3JrKHdhdGNoTG9nSW4pLFxyXG5cdFx0Zm9yayh3YXRjaExvZ091dCksXHJcblx0XHRmb3JrKHdhdGNoU2lnblVwKSxcclxuXHRdKVxyXG59IiwiaW1wb3J0IHtjcmVhdGVXcmFwcGVyfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInXHJcbmltcG9ydCB7YXBwbHlNaWRkbGV3YXJlLCBjb21wb3NlLCBjcmVhdGVTdG9yZX0gZnJvbSAncmVkdXgnXHJcbmltcG9ydCB7Y29tcG9zZVdpdGhEZXZUb29sc30gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJ1xyXG4vL2ltcG9ydCB0aHVua01pZGRsZXdhcmUgZnJvbSAncmVkdXgtdGh1bmsnXHJcbmltcG9ydCBjcmVhdGVTYWdhTWlkZGxld2FyZSBmcm9tICdyZWR1eC1zYWdhJ1xyXG5pbXBvcnQgcmVkdWNlciBmcm9tICcuLi9yZWR1Y2VycydcclxuaW1wb3J0IHJvb3RTYWdhIGZyb20gJy4uL3NhZ2FzJ1xyXG5cclxuXHJcbi8vIGNvbnN0IGxvZ2dlck1pZGRsZXdhcmUgPSAoeyBkaXNwYXRjaCwgZ2V0U3RhdGV9KSA9PiAobmV4dCkgPT4gKGFjdGlvbikgPT4ge1xyXG4vLyAgIGNvbnNvbGUubG9nKGFjdGlvbikgLy8g66+465Ok7Juo7Ja066W8IO2ZnOyaqe2VtCDrpqzrjZXsiqQg642w67iM7Yi07KaIIOyymOufvCDslaHshZgg66Gc6re4IOywje2eiOqyjCDtlZjquLBcclxuLy8gICByZXR1cm4gbmV4dChhY3Rpb24pXHJcbi8vIH1cclxuXHJcbmNvbnN0IGNvbmZpZ3VyZVN0b3JlID0gKGNvbnRleHQpID0+IHtcclxuXHRjb25zb2xlLmxvZyhjb250ZXh0KVxyXG5cdGNvbnN0IHNhZ2FNaWRkbGV3YXJlID0gY3JlYXRlU2FnYU1pZGRsZXdhcmUoKSAvLyBzYWdhIOyEpOyglSDrsKnrspVcclxuXHRjb25zdCBtaWRkbGV3YXJlcyA9IFtzYWdhTWlkZGxld2FyZV1cclxuXHRjb25zdCBlbmhhbmNlciA9XHJcblx0XHRcdHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbidcclxuXHRcdFx0XHRcdD8gY29tcG9zZShhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKVxyXG5cdFx0XHRcdFx0OiBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpXHJcblx0Y29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyLCBlbmhhbmNlcilcclxuXHRzdG9yZS5zYWdhVGFzayA9IHNhZ2FNaWRkbGV3YXJlLnJ1bihyb290U2FnYSlcclxuXHRyZXR1cm4gc3RvcmVcclxufVxyXG5jb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihcclxuXHRcdGNvbmZpZ3VyZVN0b3JlLFxyXG5cdFx0Ly8g7Ji17IWY6rCd7LK0IOuUlOuyhOq3uOqwgCDtirjro6jsnbTrqbQg66as642V7Iqk7JeQ6rSA7ZW07IScIOyekOyEuO2VnCDshKTrqoXsnbTrgpjsmKTquLDrlYzrrLjsl5Ag6rCc67Cc7ZWg65WQIHRydWUg66GcIOuGk+yekFxyXG5cdFx0e2RlYnVnOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50J30sXHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXJcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yZWR1eC13cmFwcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2EvZWZmZWN0c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzaG9ydGlkXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=