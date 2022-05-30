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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "./components/AppLayout.js":
/*!*********************************!*\
  !*** ./components/AppLayout.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_UserProfile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/UserProfile */ "./components/UserProfile.js");
/* harmony import */ var _components_LoginForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/LoginForm */ "./components/LoginForm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "D:\\intellijProjects\\react-nodebird\\prepare\\front\\components\\AppLayout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



 // antd 에 Menu 사용







const Global = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["createGlobalStyle"])([".ant-row{margin-right:0 !important;margin-left:0 !important;}.ant-col:first-child{padding-left:0 !important;}.ant-col:last-child{padding-right:0 !important;}"]); // antd 에서 사용한 Input.Search 를 styled components 로 바꿔 넣어줌

const SearchInput = styled_components__WEBPACK_IMPORTED_MODULE_4___default()(antd__WEBPACK_IMPORTED_MODULE_3__["Input"].Search).withConfig({
  displayName: "AppLayout__SearchInput",
  componentId: "sc-1x6xxdo-0"
})(["vertical-align:middle;"]);

const AppLayout = ({
  children
}) => {
  //const [isLoggedIn, setIsLoggedIn] = useState(false)
  // 유저 자체를 받아와서 유저 안에서 isLoggedIn 을 구조분해 할당
  //const { isLoggedIn } = useSelector((state) => state.user)
  const [searchInput, onChangeSearchInput] = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_8__["default"])('');
  const {
    me
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(state => state.user);
  const onSearch = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push(`/hashtag/${searchInput}`); // searchInput 해쉬태그로 이동
  }, [searchInput]);
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 4
    }
  }, __jsx(Global, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 5
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"], {
    mode: "horizontal",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    key: "home",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 6
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 8
    }
  }, "\uB178\uB4DC\uBC84\uB4DC"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    key: "profile",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 6
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/profile",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 8
    }
  }, "\uD504\uB85C\uD544"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    key: "mail",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 6
    }
  }, __jsx(SearchInput // 검색창을 통해 해쉬태그 검색
  , {
    enterButton: true,
    value: searchInput,
    onChange: onChangeSearchInput,
    onSearch: onSearch,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    gutter: 8,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    xs: 24,
    md: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 6
    }
  }, me ? __jsx(_components_UserProfile__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }
  }) : __jsx(_components_LoginForm__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 30
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    xs: 24,
    md: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 6
    }
  }, children, " "), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    xs: 24,
    md: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 6
    }
  }, __jsx("a", {
    href: "https://qhrdmaaksen.github.io/",
    target: '_blank',
    rel: "noreferrer noopener",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }
  }, "Made in Vitamin"))));
};

AppLayout.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (AppLayout);

/***/ }),

/***/ "./components/CommentForm.js":
/*!***********************************!*\
  !*** ./components/CommentForm.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
var _jsxFileName = "D:\\intellijProjects\\react-nodebird\\prepare\\front\\components\\CommentForm.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const CommentForm = ({
  post
}) => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  const id = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(state => {
    var _state$user$me;

    return (_state$user$me = state.user.me) === null || _state$user$me === void 0 ? void 0 : _state$user$me.id;
  });
  const {
    addCommentDone,
    addCommentLoading
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(state => state.post);
  const [commentText, onChangeCommentText, setCommentText] = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_2__["default"])('');
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (addCommentDone) {
      setCommentText('');
    }
  }, [addCommentDone]);
  const onSubmitComment = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    console.log('post.id : ' + post.id + ', commentText : ' + commentText + ', userId : ' + id);
    dispatch({
      // 변수를 사용해서 create, 재사용 될거라면 나중에 함수로 빼는게 좋으며, 컴포넌트에서만 쓰일거면 액션 객체하나로 넣는다
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_5__["ADD_COMMENT_REQUEST"],
      data: {
        content: commentText,
        userId: id,
        postId: post.id
      }
    });
  }, [commentText, id]);
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    onFinish: onSubmitComment,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 4
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    style: {
      position: "relative",
      margin: 0
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].TextArea, {
    value: commentText,
    onChange: onChangeCommentText,
    rows: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 6
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    style: {
      position: 'absolute',
      right: 0,
      bottom: -40,
      zIndex: 1
    },
    type: "primary",
    htmlType: "submit",
    loading: addCommentLoading,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 6
    }
  }, "\uC090\uC57D")));
};

CommentForm.propTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (CommentForm);

/***/ }),

/***/ "./components/FollowButton.js":
/*!************************************!*\
  !*** ./components/FollowButton.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
var _jsxFileName = "D:\\intellijProjects\\react-nodebird\\prepare\\front\\components\\FollowButton.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const FollowButton = ({
  post
}) => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  const {
    me,
    followLoading,
    unfollowLoading
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.user); // v.id 가 포스트 작성자의 id 라면

  const isFollowing = me === null || me === void 0 ? void 0 : me.Followings.find(v => v.id === post.User.id);
  const onClickButton = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    if (isFollowing) {
      dispatch({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["UNFOLLOW_REQUEST"],
        data: post.User.id
        /*팔로우할때 사용자의 정보를 보내주는곳*/

      });
    } else {
      dispatch({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["FOLLOW_REQUEST"],
        data: post.User.id
      });
    }
  }, [isFollowing]);

  if (post.User.id === me.id) {
    // 포스트 작성자의 아이디와 내 아이디가 같다면 팔로우 버튼 null
    return null;
  }

  return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    loading: followLoading || unfollowLoading,
    onClick: onClickButton,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 4
    }
  }, isFollowing ? '언팔로우' : '팔로우', " ");
};

FollowButton.propTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (FollowButton);

/***/ }),

/***/ "./components/ImagesZoom/index.js":
/*!****************************************!*\
  !*** ./components/ImagesZoom/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styled */ "./components/ImagesZoom/styled.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config/config */ "./config/config.js");
var _jsxFileName = "D:\\intellijProjects\\react-nodebird\\prepare\\front\\components\\ImagesZoom\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const ImagesZoom = ({
  images,
  onClose
}) => {
  const {
    0: currentSlide,
    1: setCurrentSlide
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  return __jsx(_styled__WEBPACK_IMPORTED_MODULE_3__["Overlay"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 4
    }
  }, __jsx(_styled__WEBPACK_IMPORTED_MODULE_3__["Global"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }), __jsx(_styled__WEBPACK_IMPORTED_MODULE_3__["Header"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 6
    }
  }, "\uC0C1\uC138 \uC774\uBBF8\uC9C0"), __jsx(_styled__WEBPACK_IMPORTED_MODULE_3__["CloseBtn"], {
    onClick: onClose,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 6
    }
  }, "X")), __jsx(_styled__WEBPACK_IMPORTED_MODULE_3__["SlickWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 6
    }
  }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, {
    initialSlike: 0 // 첫번째를 어떤 이미지로 할지
    ,
    beforeChange: (slide, newSlide) => setCurrentSlide(newSlide) // 슬라이드를 넘기면 번호가 저장
    ,
    infinite: true // 무한반복
    ,
    arrows: false // 이미지 양 옆 클릭해서 넘기는 화살표 버튼 없앰
    ,
    slidesToShow: 1 //한번에 하나씩 보여주며
    ,
    slidesToScroll: 1 // 한번에 하나씩 넘긴다
    ,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, images.map(v => __jsx(_styled__WEBPACK_IMPORTED_MODULE_3__["ImgWrapper"], {
    key: v.src,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 10
    }
  }, "// front \uC5D0\uC11C \uC774\uBBF8\uC9C0 \uC804\uC1A1 \uC2DC \uACBD\uB85C \uC124\uC815", __jsx("img", {
    src: `${v.src.replace(/\/thumb\//, 'original/')}`,
    alt: v.src,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  })))), __jsx(_styled__WEBPACK_IMPORTED_MODULE_3__["Indicator"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 8
    }
  }, " ", currentSlide + 1, ' ', "/", images.length)))));
};

ImagesZoom.propTypes = {
  images: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object).isRequired,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ImagesZoom);

/***/ }),

/***/ "./components/ImagesZoom/styled.js":
/*!*****************************************!*\
  !*** ./components/ImagesZoom/styled.js ***!
  \*****************************************/
/*! exports provided: Overlay, Header, CloseBtn, SlickWrapper, ImgWrapper, Indicator, Global */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Overlay", function() { return Overlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloseBtn", function() { return CloseBtn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlickWrapper", function() { return SlickWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImgWrapper", function() { return ImgWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Indicator", function() { return Indicator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Global", function() { return Global; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__);


const Overlay = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__Overlay",
  componentId: "sc-mghda7-0"
})(["position:fixed;z-index:5000;top:0;left:0;right:0;bottom:0;"]);
const Header = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.header.withConfig({
  displayName: "styled__Header",
  componentId: "sc-mghda7-1"
})(["height:44px;background:white;position:relative;padding:0;text-align:center;& h1{margin:0;font-size:17px;color:#333;line-height:44px;}"]);
const CloseBtn = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["CloseOutlined"]).withConfig({
  displayName: "styled__CloseBtn",
  componentId: "sc-mghda7-2"
})(["position:absolute;right:0;top:0;padding:15px;line-height:14px;cursor:pointer;"]);
const SlickWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__SlickWrapper",
  componentId: "sc-mghda7-3"
})(["height:calc(100% - 44px);background:#090909;"]);
const ImgWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__ImgWrapper",
  componentId: "sc-mghda7-4"
})(["padding:32px;text-align:center;& img{margin:0 auto;max-height:750px;}"]);
const Indicator = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__Indicator",
  componentId: "sc-mghda7-5"
})(["text-align:center;& > div{width:75px;height:30px;line-height:30px;border-radius:15px;background:#313131;display:inline-block;text-align:center;color:white;font-size:15px;}"]);
const Global = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"])([".slick-slide{display:inline-block;}.ant-card-cover{transform:none !important;}"]);

/***/ }),

/***/ "./components/LoginForm.js":
/*!*********************************!*\
  !*** ./components/LoginForm.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
var _jsxFileName = "D:\\intellijProjects\\react-nodebird\\prepare\\front\\components\\LoginForm.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "LoginForm__ButtonWrapper",
  componentId: "sc-k4bay5-0"
})(["margin-top:10px;"]);
const FormWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(antd__WEBPACK_IMPORTED_MODULE_1__["Form"]).withConfig({
  displayName: "LoginForm__FormWrapper",
  componentId: "sc-k4bay5-1"
})(["padding:10px;"]);

const LoginForm = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"])();
  const {
    logInLoading,
    logInError
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(state => state.user);
  const [email, onChangeEmail] = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_5__["default"])('');
  const [password, onChangePassword] = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_5__["default"])(''); // 로그인 에러

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (logInError) {
      alert(logInError);
    }
  }, [logInError]); // const style = useMemo(()=>({ // styled components 를 사용원치 않을때 useMemo 사용
  //   marginTop: 10
  // }), []);

  const onSubmitFrom = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    console.log('email : ' + email + ',' + ' password : ' + password); //setIsLoggedIn(true)

    dispatch(Object(_reducers_user__WEBPACK_IMPORTED_MODULE_7__["loginRequestAction"])({
      email,
      password
    })); // 동적 create
  }, [email, password]);
  return __jsx(FormWrapper, {
    onFinish: onSubmitFrom,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 4
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 5
    }
  }, __jsx("label", {
    htmlFor: "user-email",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 6
    }
  }, "\uC774\uBA54\uC77C"), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 6
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    name: "user-email",
    type: "email",
    value: email,
    onChange: onChangeEmail,
    required: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 6
    }
  })), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5
    }
  }, __jsx("label", {
    htmlFor: "user-password",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 6
    }
  }, "\uBE44\uBC00\uBC88\uD638"), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 6
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    name: "user-password",
    type: "password",
    value: password,
    onChange: onChangePassword,
    required: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 6
    }
  })), __jsx(ButtonWrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "primary",
    htmlType: "submit",
    loading: logInLoading,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 6
    }
  }, "\uB85C\uADF8\uC778 "), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/signup",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 6
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 8
    }
  }, "\uD68C\uC6D0\uAC00\uC785")))));
};
/*LoginForm.propTypes = {
  setIsLoggedIn: PropTypes.func.isRequired,
}*/


/* harmony default export */ __webpack_exports__["default"] = (LoginForm);

/***/ }),

/***/ "./components/PostCard.js":
/*!********************************!*\
  !*** ./components/PostCard.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _PostImages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PostImages */ "./components/PostImages.js");
/* harmony import */ var _CommentForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CommentForm */ "./components/CommentForm.js");
/* harmony import */ var _PostCardContent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./PostCardContent */ "./components/PostCardContent.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _FollowButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./FollowButton */ "./components/FollowButton.js");
var _jsxFileName = "D:\\intellijProjects\\react-nodebird\\prepare\\front\\components\\PostCard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












moment__WEBPACK_IMPORTED_MODULE_6___default.a.locale('ko'); // 한글로 바꾼다

const PostCard = ({
  post
}) => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const {
    removePostLoading
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.post);
  const {
    0: commentFormOpened,
    1: setCommentFormOpened
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const id = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => {
    var _state$user$me;

    return (_state$user$me = state.user.me) === null || _state$user$me === void 0 ? void 0 : _state$user$me.id;
  }); //state.user.me && state.user.me.id
  //	const [liked, setLiked] = useState(false) front

  const {
    0: editMode,
    1: setEditMode
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const onClickUpdate = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    setEditMode(true);
  }, []);
  const onCancelUpdate = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    setEditMode(false);
  }, []);
  /*이미 정보들이 담겨있는 post card 로 위로 끌여 올라온것?*/

  const onChangePost = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(editText => {
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_10__["UPDATE_POST_REQUEST"],
      data: {
        PostId: post.id,
        content: editText
      }
    });
  }, [post]);
  const onLike = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    // 좋아요 클릭
    if (!id) {
      // 로그인이 안되어있다면 바로바로 막아주는게 좋다
      return alert('로그인이 필요합니다!');
    }

    return dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_10__["LIKE_POST_REQUEST"],
      data: post.id // 게시글 아이디

    });
  }, [id]);
  const onUnLike = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    // 좋아요 해제 클릭
    if (!id) {
      // 로그인이 안되어있다면 바로바로 막아주는게 좋다
      return alert('로그인이 필요합니다!');
    }

    return dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_10__["UNLIKE_POST_REQUEST"],
      data: post.id // 게시글 아이디

    });
  }, [id]);
  /* front
  const onToggleLike = useCallback(() => {
  	setLiked((prev) => !prev)
  }, [])*/

  const onToggleComment = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    setCommentFormOpened(prev => !prev);
  }, []);
  const onRemovePost = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    if (!id) {
      return alert('로그인이 필요합니다.');
    }

    return dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_10__["REMOVE_POST_REQUEST"],
      data: post.id
    });
  }, [id]);
  const onRetweet = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    if (!id) {
      // 로그인이 안되어있다면 바로바로 막아주는게 좋다
      return alert('로그인이 필요합니다!');
    }

    return dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_10__["RETWEET_REQUEST"],
      data: post.id
    });
  }, [id]);
  const liked = post.Likers.find(v => v.id === id); // 게시글 좋아요 누른 사람중에 내가 있는지

  return __jsx("div", {
    style: {
      marginBottom: 20
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 4
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Card"], {
    cover: post.Images[0] && __jsx(_PostImages__WEBPACK_IMPORTED_MODULE_7__["default"], {
      images: post.Images,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 32
      }
    }) // 이미지가 한개 이상있을때 포스트 이미지스
    ,
    actions: [__jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["RetweetOutlined"], {
      key: "retweet",
      onClick: onRetweet,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 8
      }
    }), // 리트윗 버튼
    liked ? __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["HeartTwoTone"], {
      twoToneColor: "#eb2f96",
      key: "heart",
      onClick: onUnLike,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 12
      }
    }) // 하트 버튼
    : __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["HeartOutlined"], {
      key: "heart",
      onClick: onLike,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 12
      }
    }), // 하트 버튼
    __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["MessageOutlined"], {
      key: "comment",
      onClick: onToggleComment,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 8
      }
    }), // 댓글 버튼
    __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Popover"], {
      key: "more",
      content: // 더 보기 버튼
      __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"].Group, {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 10
        }
      }, id && post.User.id === id ?
      /*내가 쓴 글이면 수정 삭제 가능*/
      __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, !post.RetweetId && __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        onClick: onClickUpdate,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 36
        }
      }, "\uC218\uC815"), " ", __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        type: "danger",
        loading: removePostLoading,
        onClick: onRemovePost,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 16
        }
      }, "\uC0AD\uC81C")) : __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 15
        }
      }, "\uC2E0\uACE0"), " "),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 8
      }
    }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["EllipsisOutlined"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 9
      }
    }))],
    title: post.RetweetId ? `${post.User.nickname}님이 리트윗 하셨습니다.` : null,
    extra: id && __jsx(_FollowButton__WEBPACK_IMPORTED_MODULE_11__["default"], {
      post: post,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 20
      }
    }) // 우측 추가공간,로그인했을경우만보이게
    ,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 5
    }
  }, post.RetweetId && post.Retweet ? __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Card"], {
    cover: post.Retweet.Images[0] && __jsx(_PostImages__WEBPACK_IMPORTED_MODULE_7__["default"], {
      images: post.Retweet.Images,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 45
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 10
    }
  }, __jsx("div", {
    style: {
      float: 'right'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 11
    }
  }, moment__WEBPACK_IMPORTED_MODULE_6___default()(post.createdAt).format('YYYY.MM.DD')), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Card"].Meta, {
    avatar: __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
      href: `/user/${post.Retweet.User.id}`,
      prefetch: false,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 15
      }
    }, __jsx("a", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 16
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Avatar"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 19
      }
    }, post.Retweet.User.nickname[0]))),
    title: post.Retweet.User.nickname,
    description: __jsx(_PostCardContent__WEBPACK_IMPORTED_MODULE_9__["default"], {
      postData: post.Retweet.content,
      onChangePost: onChangePost,
      onCancelUpdate: onCancelUpdate,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 26
      }
    }) // 특수한 기능을 처리하는 것을 만들기 위해선 따로 컴포넌트로 빼주는게 보기 깔끔하다
    ,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 11
    }
  })) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    style: {
      float: 'right'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 11
    }
  }, moment__WEBPACK_IMPORTED_MODULE_6___default()(post.createdAt).format('YYYY.MM.DD')), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Card"].Meta, {
    avatar:
    /*avatar 누르면 그사람이 쓴 글 볼 수있게*/
    __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
      href: `/user/${post.User.id}`,
      prefetch: false,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 15
      }
    }, __jsx("a", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 16
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Avatar"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 17
      }
    }, post.User.nickname[0]))),
    title: post.User.nickname,
    description: __jsx(_PostCardContent__WEBPACK_IMPORTED_MODULE_9__["default"], {
      editMode: editMode,
      onChangePost: onChangePost,
      onCancelUpdate: onCancelUpdate,
      postData: post.content,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 26
      }
    }) // 특수한 기능을 처리하는 것을 만들기 위해선 따로 컴포넌트로 빼주는게 보기 깔끔하다
    ,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 11
    }
  }))), commentFormOpened && __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 7
    }
  }, __jsx(_CommentForm__WEBPACK_IMPORTED_MODULE_8__["default"], {
    post: post,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 8
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["List"], {
    header: `${post.Comments.length}개의 댓글`,
    itemLayout: "horizontal",
    dataSource: post.Comments,
    renderItem: item => __jsx("li", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 12
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Comment"], {
      author: item.User.nickname,
      avatar:
      /*댓글의 avatar 를 눌러도 그 사람이 쓴 글 볼 수있게*/
      __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        href: `/user/${item.User.id}`,
        prefetch: false,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191,
          columnNumber: 17
        }
      }, __jsx("a", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192,
          columnNumber: 18
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Avatar"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 19
        }
      }, item.User.nickname[0]))),
      content: item.content,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 13
      }
    })),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 8
    }
  })));
};

PostCard.propTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    User: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
    content: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    createdAt: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    Comments: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object),
    Images: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object),
    Likers: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object),
    RetweetId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    Retweet: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.objectOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any)
  }).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (PostCard);

/***/ }),

/***/ "./components/PostCardContent.js":
/*!***************************************!*\
  !*** ./components/PostCardContent.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "D:\\intellijProjects\\react-nodebird\\prepare\\front\\components\\PostCardContent.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const {
  TextArea
} = antd__WEBPACK_IMPORTED_MODULE_2__["Input"];

const PostCardContent = ({
  postData,
  editMode,
  onCancelUpdate,
  onChangePost
}) => {
  const {
    updatePostLoading,
    updatePostDone
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(state => state.post);
  const {
    0: editText,
    1: setEditText
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(postData);
  /*게시글 다 쓰고나면 textArea 없애고, 다시 원래의 postData 로 돌아가도록*/

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (updatePostDone) {
      onCancelUpdate();
    }
  }, [updatePostDone]);
  const onChangeText = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])( // 게시글 수정을 위해 만듬
  e => {
    setEditText(e.target.value);
  }, []);
  return (// 첫 번째 게시글 #해시태그 #익스프레스
    __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 4
      }
    }, editMode ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(TextArea, {
      value: editText,
      onChange: onChangeText,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 10
      }
    }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"].Group, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 10
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      loading: updatePostLoading,
      onClick: onChangePost(editMode),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 11
      }
    }, "\uC218\uC815"), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      type: "danger",
      onClick: onCancelUpdate,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 11
      }
    }, "\uCDE8\uC18C"))) : postData.toString().split(/(#[^\s#]+)/g).map((v, i) => {
      if (v.match(/(#[^\s#]+)/)) {
        // 해시태그와 일치하는지
        return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
          href: `/hashtag/${v.slice(1)}`,
          prefetch: false,
          key: i,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 16
          }
        }, __jsx("a", {
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 79
          }
        }, v));
      }

      return v;
    }))
  );
};

PostCardContent.propTypes = {
  postData: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,
  editMode: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  onCancelUpdate: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  onChangePost: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired
};
PostCardContent.defaultProps = {
  editMode: false
};
/* harmony default export */ __webpack_exports__["default"] = (PostCardContent);

/***/ }),

/***/ "./components/PostForm.js":
/*!********************************!*\
  !*** ./components/PostForm.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config/config */ "./config/config.js");
var _jsxFileName = "D:\\intellijProjects\\react-nodebird\\prepare\\front\\components\\PostForm.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







const PostForm = () => {
  const {
    imagePaths,
    addPostDone
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.post);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const [text, onChangeText, setText] = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_4__["default"])('');
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (addPostDone) {
      setText('');
    }
  }, [addPostDone]);
  const onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(() => {
    if (!text || !text.trim()) {
      // 게시글이 없다면 게시글 작성 alert
      return alert('게시글을 작성하세요.');
    }

    const formData = new FormData();
    imagePaths.forEach(p => {
      formData.append('image', p); // req.body.content
    });
    formData.append('content', text);
    return dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_REQUEST"],
      data: formData
    });
  }, [text, imagePaths]);
  const imageInput = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  const onClickImageUpload = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(() => {
    imageInput.current.click();
  }, [imageInput.current]);
  const onChangeImages = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(e => {
    console.log('images info :: ', e.target.files); // 이미지에 대한 정보가 담겨있음

    const imageFormData = new FormData(); // form data 를 multipart 형식으로 서버로 보냄

    [].forEach.call(e.target.files, f => {
      // 배열에 forEach 를 빌려 쓰는 것
      imageFormData.append('image', f); // image 키랑 f 값
    });
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["UPLOAD_IMAGES_REQUEST"],
      data: imageFormData
    });
  }, []);
  const onRemoveImage = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(index => () => {
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["REMOVE_IMAGE"],
      data: index
    });
  }, []);
  return (// post Form
    __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Form"], {
      style: {
        margin: '10px 0 20px'
      },
      encType: "multipart/form-data",
      onFinish: onSubmit,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 4
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Input"].TextArea, {
      value: text,
      onChange: onChangeText,
      maxLength: 140,
      placeholder: "\uC5B4\uB5A4 \uC2E0\uAE30\uD55C \uC77C\uC774 \uC788\uC5C8\uB098\uC694?",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 5
      }
    }), __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 5
      }
    }, __jsx("input", {
      type: "file",
      name: "image",
      multiple: true,
      hidden: true,
      ref: imageInput,
      onChange: onChangeImages,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 6
      }
    }), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
      onClick: onClickImageUpload,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 6
      }
    }, "\uC774\uBBF8\uC9C0 \uC5C5\uB85C\uB4DC"), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
      type: "primary",
      style: {
        float: 'right'
      },
      htmlType: "submit",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 6
      }
    }, "\uC9F9\uC9F9")), __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 5
      }
    }, imagePaths.map((v, i) => {
      return (// 이미지 등록을 했을 시, 이미지 경로가 저장되며, 반복문으로 표시해줌
        __jsx("div", {
          key: v,
          style: {
            display: 'inline-block'
          },
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 9
          }
        }, __jsx("img", {
          src: v.replace(/\/thumb\//, '/original/'),
          style: {
            width: '200px'
          },
          alt: v,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 10
          }
        }), " ", __jsx("div", {
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 10
          }
        }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
          onClick: onRemoveImage(i),
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 11
          }
        }, "\uC81C\uAC70")))
      );
    })))
  );
};

/* harmony default export */ __webpack_exports__["default"] = (PostForm);

/***/ }),

/***/ "./components/PostImages.js":
/*!**********************************!*\
  !*** ./components/PostImages.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ImagesZoom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ImagesZoom */ "./components/ImagesZoom/index.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config/config */ "./config/config.js");
var _jsxFileName = "D:\\intellijProjects\\react-nodebird\\prepare\\front\\components\\PostImages.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const PostImages = ({
  images
}) => {
  const {
    0: showImagesZoom,
    1: setShowImagesZoom
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const onZoom = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    setShowImagesZoom(true);
  }, []);
  const onClose = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    setShowImagesZoom(false);
  }, []);

  if (images.length === 1) {
    // 화면의 100 % 차지
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("img", {
      role: "presentation",
      src: `${images[0].src}`,
      alt: images[0].src,
      onClick: onZoom,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 6
      }
    }), showImagesZoom && __jsx(_ImagesZoom__WEBPACK_IMPORTED_MODULE_3__["default"], {
      images: images,
      onClose: onClose,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 25
      }
    }));
  }

  if (images.length === 2) {
    // 화면의 50% 차지
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("img", {
      role: "presentation",
      style: {
        width: '50%',
        display: 'inline-block'
      },
      src: `${images[0].src}`,
      alt: images[0].src,
      onClick: onZoom,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 6
      }
    }), __jsx("img", {
      role: "presentation",
      style: {
        width: '50%',
        display: 'inline-block'
      },
      src: `${images[1].src}`,
      alt: images[1].src,
      onClick: onZoom,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 6
      }
    }), showImagesZoom && __jsx(_ImagesZoom__WEBPACK_IMPORTED_MODULE_3__["default"], {
      images: images,
      onClose: onClose,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 25
      }
    }));
  }

  return (// 이미지가 3 개 이상일때엔 첫 번째 이미지는 보여주며 그 옆에 더 보기 버튼이 들어가서 확대해서 넘겨봐야함
    __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 5
      }
    }, __jsx("img", {
      role: "presentation",
      style: {
        width: '50%'
      },
      src: `${images[0].src}`,
      alt: images[0].src,
      onClick: onZoom,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 6
      }
    }), __jsx("div", {
      role: "presentation",
      style: {
        display: 'inline-block',
        width: '50%',
        textAlign: 'center',
        verticalAlign: 'middle'
      },
      onClick: onZoom,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 6
      }
    }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["PlusOutlined"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 7
      }
    }), __jsx("br", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 7
      }
    }), images.length - 1, " \uAC1C\uC758 \uC0AC\uC9C4 \uB354 \uBCF4\uAE30")), showImagesZoom && __jsx(_ImagesZoom__WEBPACK_IMPORTED_MODULE_3__["default"], {
      images: images,
      onClose: onClose,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 24
      }
    }))
  );
};

PostImages.propTypes = {
  images: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (PostImages);

/***/ }),

/***/ "./components/UserProfile.js":
/*!***********************************!*\
  !*** ./components/UserProfile.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "D:\\intellijProjects\\react-nodebird\\prepare\\front\\components\\UserProfile.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




 // eslint-disable-next-line react/prop-types

const UserProfile = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const {
    me,
    logOutLoading
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.user);
  const onLogOut = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    //setIsLoggedIn(false)
    dispatch(Object(_reducers_user__WEBPACK_IMPORTED_MODULE_3__["logoutRequestAction"])());
  }, []);
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    actions: [
    /*리액트에서 배열로 jsx 사용할땐 key 붙여줘야함*/
    __jsx("div", {
      key: "twit",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 7
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: `/user/${me.id}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 8
      }
    }, __jsx("a", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }
    }, "\uC9F9\uC9F9", __jsx("br", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 12
      }
    }), me.Posts.length))), __jsx("div", {
      key: "following",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 7
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/profile",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 8
      }
    }, __jsx("a", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }
    }, "\uD314\uB85C\uC719", __jsx("br", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 13
      }
    }), me.Followings.length))), __jsx("div", {
      key: "follower",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 7
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/profile",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 8
      }
    }, __jsx("a", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }
    }, "\uD314\uB85C\uC6CC", __jsx("br", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 13
      }
    }), me.Followers.length)))],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 4
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
    avatar: // 내 아바타 클릭 시
    __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: `/user/${me.id}`,
      prefetch: false,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }
    }, __jsx("a", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 10
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 11
      }
    }, me.nickname[0]))),
    title: me.nickname,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 5
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: onLogOut,
    loading: logOutLoading,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 5
    }
  }, "\uB85C\uADF8\uC544\uC6C3"));
};

/* harmony default export */ __webpack_exports__["default"] = (UserProfile);

/***/ }),

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

/***/ "./hooks/useInput.js":
/*!***************************!*\
  !*** ./hooks/useInput.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ((initialValue = null) => {
  // 커스텀 hooks
  const {
    0: value,
    1: setValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialValue);
  const handler = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    setValue(e.target.value);
  }, []);
  return [value, handler, setValue];
});

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      if (key === 'as') {
        if (props[key] && typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: typeof props[key]
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && typeof props[key] !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;

  const [childElm, setChildElm] = _react.default.useState();

  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);

  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childProps = {
    ref: el => {
      if (el) setChildElm(el);

      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;

      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)((0, _router.addLocale)(as, router && router.locale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/compiled/path-to-regexp/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/compiled/path-to-regexp/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at " + i);
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at " + j);
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern)
                throw new TypeError("Missing pattern at " + i);
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function () {
        var result = "";
        var value;
        // tslint:disable-next-line
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
exports.parse = parse;
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
exports.compile = compile;
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"" + token.name + "\" to not be empty");
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
        }
        return path;
    };
}
exports.tokensToFunction = tokensToFunction;
/**
 * Create path match function from `path-to-regexp` spec.
 */
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
exports.match = match;
/**
 * Create a path match function from `path-to-regexp` output.
 */
function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            // tslint:disable-next-line
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
exports.regexpToFunction = regexpToFunction;
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) {
        for (var i = 0; i < groups.length; i++) {
            keys.push({
                name: i,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            });
        }
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    }
                    else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                }
                else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            }
            else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict)
            route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
            : // tslint:disable-next-line
                endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
exports.tokensToRegexp = tokensToRegexp;
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
exports.pathToRegexp = pathToRegexp;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

var _escapePathDelimiters = _interopRequireDefault(__webpack_require__(/*! ./utils/escape-path-delimiters */ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${path}` : path;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(_escapePathDelimiters.default).join('/') : (0, _escapePathDelimiters.default)(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');

function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    initialStyleSheets,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        styleSheets: initialStyleSheets,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    as = addLocale(as, this.locale, this.defaultLocale);
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    } // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to


    const pages = await this.pageLoader.getPageList();
    const {
      __rewrites: rewrites
    } = await this.pageLoader.promisedBuildManifest;
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed;
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (true) {
      resolvedAs = (0, _resolveRewrites.default)((0, _parseRelativeUrl.parseRelativeUrl)(as).pathname, pages, basePath, rewrites, query, p => this._resolveHref({
        pathname: p
      }, pages).pathname);

      if (resolvedAs !== as) {
        const potentialHref = (0, _normalizeTrailingSlash.removePathTrailingSlash)(this._resolveHref(Object.assign({}, parsed, {
          pathname: resolvedAs
        }), pages, false).pathname); // if this directly matches a page we need to update the href to
        // allow the correct page chunk to be loaded

        if (pages.includes(potentialHref)) {
          route = potentialHref;
          pathname = potentialHref;
          parsed.pathname = pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props && props.pageProps && props.pageProps.__N_REDIRECT) {
        const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
        // client-navigation if it is falling back to hard navigation if
        // it's not

        if (destination.startsWith('/')) {
          const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

          this._resolveHref(parsedHref, pages);

          if (pages.includes(parsedHref.pathname)) {
            return this.change('replaceState', destination, destination, options);
          }
        }

        window.location.href = destination;
        return new Promise(() => {});
      }

      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, addLocale(as, this.locale, this.defaultLocale), options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      const {
        page: Component,
        styleSheets
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        styleSheets,
        err,
        error: err
      };

      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale, this.defaultLocale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;
    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (true) {
      return;
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath, this.locale, this.defaultLocale), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = escapePathDelimiters; // escape delimiters used by path-to-regexp

function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, char => encodeURIComponent(char));
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

const DUMMY_BASE = new URL(true ? 'http://n' : undefined);
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/path-match.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.pathToRegexp = exports.default = exports.customRouteMatcherOptions = exports.matcherOptions = void 0;

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

exports.pathToRegexp = pathToRegexp;

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

const matcherOptions = {
  sensitive: false,
  delimiter: '/'
};
exports.matcherOptions = matcherOptions;

const customRouteMatcherOptions = _objectSpread(_objectSpread({}, matcherOptions), {}, {
  strict: true
});

exports.customRouteMatcherOptions = customRouteMatcherOptions;

var _default = (customRoute = false) => {
  return path => {
    const keys = [];
    const matcherRegex = pathToRegexp.pathToRegexp(path, keys, customRoute ? customRouteMatcherOptions : matcherOptions);
    const matcher = pathToRegexp.regexpToFunction(matcherRegex, keys);
    return (pathname, params) => {
      const res = pathname == null ? false : matcher(pathname);

      if (!res) {
        return false;
      }

      if (customRoute) {
        for (const key of keys) {
          // unnamed params should be removed as they
          // are not allowed to be used in the destination
          if (typeof key.name === 'number') {
            delete res.params[key.name];
          }
        }
      }

      return _objectSpread(_objectSpread({}, params), res.params);
    };
  };
};

exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.default = prepareDestination;

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _parseRelativeUrl = __webpack_require__(/*! ./parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function prepareDestination(destination, params, query, appendParamsToQuery, basePath) {
  let parsedDestination = {};

  if (destination.startsWith('/')) {
    parsedDestination = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
  } else {
    const {
      pathname,
      searchParams,
      hash,
      hostname,
      port,
      protocol,
      search,
      href
    } = new URL(destination);
    parsedDestination = {
      pathname,
      query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
      hash,
      protocol,
      hostname,
      port,
      search,
      href
    };
  }

  const destQuery = parsedDestination.query;
  const destPath = `${parsedDestination.pathname}${parsedDestination.hash || ''}`;
  const destPathParamKeys = [];
  pathToRegexp.pathToRegexp(destPath, destPathParamKeys);
  const destPathParams = destPathParamKeys.map(key => key.name);
  let destinationCompiler = pathToRegexp.compile(destPath, // we don't validate while compiling the destination since we should
  // have already validated before we got to this point and validating
  // breaks compiling destinations with named pattern params from the source
  // e.g. /something:hello(.*) -> /another/:hello is broken with validation
  // since compile validation is meant for reversing and not for inserting
  // params from a separate path-regex into another
  {
    validate: false
  });
  let newUrl; // update any params in query values

  for (const [key, strOrArray] of Object.entries(destQuery)) {
    let value = Array.isArray(strOrArray) ? strOrArray[0] : strOrArray;

    if (value) {
      // the value needs to start with a forward-slash to be compiled
      // correctly
      value = `/${value}`;
      const queryCompiler = pathToRegexp.compile(value, {
        validate: false
      });
      value = queryCompiler(params).substr(1);
    }

    destQuery[key] = value;
  } // add path params to query if it's not a redirect and not
  // already defined in destination query or path


  const paramKeys = Object.keys(params);

  if (appendParamsToQuery && !paramKeys.some(key => destPathParams.includes(key))) {
    for (const key of paramKeys) {
      if (!(key in destQuery)) {
        destQuery[key] = params[key];
      }
    }
  }

  const shouldAddBasePath = destination.startsWith('/') && basePath;

  try {
    newUrl = `${shouldAddBasePath ? basePath : ''}${destinationCompiler(params)}`;
    const [pathname, hash] = newUrl.split('#');
    parsedDestination.pathname = pathname;
    parsedDestination.hash = `${hash ? '#' : ''}${hash || ''}`;
    delete parsedDestination.search;
  } catch (err) {
    if (err.message.match(/Expected .*? to not repeat, but got an array/)) {
      throw new Error(`To use a multi-match in the destination you must add \`*\` at the end of the param name to signify it should repeat. https://err.sh/vercel/next.js/invalid-multi-match`);
    }

    throw err;
  } // Query merge order lowest priority to highest
  // 1. initial URL query values
  // 2. path segment values
  // 3. destination specified query values


  parsedDestination.query = _objectSpread(_objectSpread({}, query), parsedDestination.query);
  return {
    newUrl,
    parsedDestination
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

var _pathMatch = _interopRequireDefault(__webpack_require__(/*! ./path-match */ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js"));

var _prepareDestination = _interopRequireDefault(__webpack_require__(/*! ./prepare-destination */ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js"));

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const customRouteMatcher = (0, _pathMatch.default)(true);

function resolveRewrites(asPath, pages, basePath, rewrites, query, resolveHref) {
  if (!pages.includes(asPath)) {
    for (const rewrite of rewrites) {
      const matcher = customRouteMatcher(rewrite.source);
      const params = matcher(asPath);

      if (params) {
        if (!rewrite.destination) {
          // this is a proxied rewrite which isn't handled on the client
          break;
        }

        const destRes = (0, _prepareDestination.default)(rewrite.destination, params, query, true, rewrite.basePath === false ? '' : basePath);
        asPath = destRes.parsedDestination.pathname;
        Object.assign(query, destRes.parsedDestination.query);

        if (pages.includes((0, _normalizeTrailingSlash.removePathTrailingSlash)(asPath))) {
          // check if we now match a page as this means we are done
          // resolving the rewrites
          break;
        } // check if we match a dynamic-route, if so we break the rewrites chain


        const resolvedHref = resolveHref(asPath);

        if (resolvedHref !== asPath && pages.includes(resolvedHref)) {
          break;
        }
      }
    }
  }

  return asPath;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) == null ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/AppLayout */ "./components/AppLayout.js");
/* harmony import */ var _components_PostForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/PostForm */ "./components/PostForm.js");
/* harmony import */ var _components_PostCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/PostCard */ "./components/PostCard.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../store/configureStore */ "./store/configureStore.js");
var _jsxFileName = "D:\\intellijProjects\\react-nodebird\\prepare\\front\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // Next 에서는 이 구문이 필요가 없다.











const Home = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const {
    me
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.user);
  const {
    mainPosts,
    hasMorePosts,
    loadPostsLoading,
    retweetError
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.post);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    // retweet 실패 시 alert 출력
    if (retweetError) {
      alert(retweetError);
    }
  }, [retweetError]);
  /* CSR
  useEffect(() => { // 컴포넌트 디드마운트와 같은 효과 가능 , 뒤에 빈배열만 넣는다면
  	dispatch({ // 매번 로그인 상태를 복구해주기 위해서 만듬
  		type: LOAD_MY_INFO_REQUEST,
  	});
  	dispatch({
  		type: LOAD_POSTS_REQUEST,
  	});
  }, []);*/
  // 스크롤이 끝까지 내려갔을때 다시 로딩하게하는코드

  /*유즈 이펙트에서 윈도우 addEventListener 를 사용할땐 항상 리턴을 해줘야한다.
  		스크롤했던거 해제해줘야한다, 안그러면 메모리에 쌓여있는다.*/

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    function onScroll() {
      // (높이를 나타내는것중)scrollY,clientHeight,scrollHeight 를 많이사용
      console.log(window.scrollY, document.documentElement.clientHeight, document.documentElement.scrollHeight);

      if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
        if (hasMorePosts && !loadPostsLoading) {
          var _mainPosts;

          // 기존에 로딩을 하고있을땐 이부분이 실행이안됨, 로딩이 끝나면 실행
          const lastId = (_mainPosts = mainPosts[mainPosts.length - 1]) === null || _mainPosts === void 0 ? void 0 : _mainPosts.id; // 마지막 게시글의 id

          dispatch({
            // 다 내리면 그때 새로운 것 로딩
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_7__["LOAD_POSTS_REQUEST"],
            lastId
          });
        }
      }
    }

    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [hasMorePosts, loadPostsLoading, mainPosts]);
  return __jsx(_components_AppLayout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 4
    }
  }, me && __jsx(_components_PostForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 12
    }
  }), " ", mainPosts.map(post => __jsx(_components_PostCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
    key: post.id,
    post: post,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }
  })));
}; //  Home 보다 먼저 실행이 된다 ( browser 가 아닌 front server 쪽에서 실행) (SSR)
// context 는 요청/응답과 SSR에 관련된 정보가 들어있는 객체이고요

/*(브라우저) 쿠키 프론트서버로 전달 ->  (프론트서버) 전달받은 쿠키 저장해서
백엔드 서버로 요청 -> 백엔드서버 쿠키에 따른 데이터 응답 -> 프론트서버
데이터와 컴포넌트 조합 -> 브라우저*/


const getServerSideProps = _store_configureStore__WEBPACK_IMPORTED_MODULE_9__["default"].getServerSideProps(async context => {
  // server 쪽에서 실행되면 context.req 가 존재함, 서버쪽 쿠키 전달

  /*getServerSideProps는 프론트 서버에서 실행되는 코드입니다. 사용자들은 많은 수의 브라우저로 접근하지만
  프론트 서버는 하나이므로 axios.defaults.headers.Cookie=쿠키 로 쿠키를 설정하게 되면 프론트 서버에
  이 쿠키가 설정되어 버립니다. 모든 브라우저가 프론트 서버를 거쳐 백엔드
  서버로 요청을 보낼 때 같은 쿠키가 적용되어버리는 것입니다.	그래서 한 번 설정했다가 요청을 보낸 다음에는
  axios.defaults.headers.Cookie = ''로 비워주는 것입니다.*/
  const cookie = context.req ? context.req.headers.cookie : '';
  axios__WEBPACK_IMPORTED_MODULE_3___default.a.defaults.headers.Cookie = ''; // 쿠키를 사용하지 않고 요청을 보낼때는 비워줌
  // cookie 공유 문제를 해결 장치

  if (context.req && cookie) {
    // 서버일때와 cookie 가 있을때
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.defaults.headers.Cookie = cookie; // 쿠키를 써서 요청을 보낼땐 쿠키를 넣어줌
  }

  context.store.dispatch({
    // 매번 로그인 상태를 복구해주기 위해서 만듬
    type: _reducers_user__WEBPACK_IMPORTED_MODULE_8__["LOAD_MY_INFO_REQUEST"]
  });
  context.store.dispatch({
    type: _reducers_post__WEBPACK_IMPORTED_MODULE_7__["LOAD_POSTS_REQUEST"]
  }); // request 가 success 로 바뀌기까지 기다려주기 위한 장치

  context.store.dispatch(redux_saga__WEBPACK_IMPORTED_MODULE_2__["END"]);
  await context.store.sagaTask.toPromise();
  console.log('context :: ', context);
});
/* harmony default export */ __webpack_exports__["default"] = (Home);

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
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.patch(`/post/${data.PostId}`, data);
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

/***/ "@ant-design/icons":
/*!************************************!*\
  !*** external "@ant-design/icons" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

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

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

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

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-slick":
/*!******************************!*\
  !*** external "react-slick" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-slick");

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

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQXBwTGF5b3V0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ29tbWVudEZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb2xsb3dCdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9JbWFnZXNab29tL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSW1hZ2VzWm9vbS9zdHlsZWQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Mb2dpbkZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qb3N0Q2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Bvc3RDYXJkQ29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Bvc3RGb3JtLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUG9zdEltYWdlcy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1VzZXJQcm9maWxlLmpzIiwid2VicGFjazovLy8uL2NvbmZpZy9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vaG9va3MvdXNlSW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbGluay50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC93aXRoLXJvdXRlci50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2VzY2FwZS1wYXRoLWRlbGltaXRlcnMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXRoLW1hdGNoLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3ByZXBhcmUtZGVzdGluYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvcG9zdC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy91c2VyLmpzIiwid2VicGFjazovLy8uL3NhZ2FzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NhZ2FzL3Bvc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9jb25maWd1cmVTdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi91dGlsL3Byb2R1Y2UuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFudC1kZXNpZ24vaWNvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpbW1lclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtcmVkdXgtd3JhcHBlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXNsaWNrXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYS9lZmZlY3RzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJuYW1lcyI6WyJHbG9iYWwiLCJjcmVhdGVHbG9iYWxTdHlsZSIsIlNlYXJjaElucHV0Iiwic3R5bGVkIiwiSW5wdXQiLCJTZWFyY2giLCJBcHBMYXlvdXQiLCJjaGlsZHJlbiIsInNlYXJjaElucHV0Iiwib25DaGFuZ2VTZWFyY2hJbnB1dCIsInVzZUlucHV0IiwibWUiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm9uU2VhcmNoIiwidXNlQ2FsbGJhY2siLCJSb3V0ZXIiLCJwdXNoIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwibm9kZSIsImlzUmVxdWlyZWQiLCJDb21tZW50Rm9ybSIsInBvc3QiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiaWQiLCJhZGRDb21tZW50RG9uZSIsImFkZENvbW1lbnRMb2FkaW5nIiwiY29tbWVudFRleHQiLCJvbkNoYW5nZUNvbW1lbnRUZXh0Iiwic2V0Q29tbWVudFRleHQiLCJ1c2VFZmZlY3QiLCJvblN1Ym1pdENvbW1lbnQiLCJjb25zb2xlIiwibG9nIiwidHlwZSIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJkYXRhIiwiY29udGVudCIsInVzZXJJZCIsInBvc3RJZCIsInBvc2l0aW9uIiwibWFyZ2luIiwicmlnaHQiLCJib3R0b20iLCJ6SW5kZXgiLCJvYmplY3QiLCJGb2xsb3dCdXR0b24iLCJmb2xsb3dMb2FkaW5nIiwidW5mb2xsb3dMb2FkaW5nIiwiaXNGb2xsb3dpbmciLCJGb2xsb3dpbmdzIiwiZmluZCIsInYiLCJVc2VyIiwib25DbGlja0J1dHRvbiIsIlVORk9MTE9XX1JFUVVFU1QiLCJGT0xMT1dfUkVRVUVTVCIsIkltYWdlc1pvb20iLCJpbWFnZXMiLCJvbkNsb3NlIiwiY3VycmVudFNsaWRlIiwic2V0Q3VycmVudFNsaWRlIiwidXNlU3RhdGUiLCJzbGlkZSIsIm5ld1NsaWRlIiwibWFwIiwic3JjIiwicmVwbGFjZSIsImxlbmd0aCIsImFycmF5T2YiLCJmdW5jIiwiT3ZlcmxheSIsImRpdiIsIkhlYWRlciIsImhlYWRlciIsIkNsb3NlQnRuIiwiQ2xvc2VPdXRsaW5lZCIsIlNsaWNrV3JhcHBlciIsIkltZ1dyYXBwZXIiLCJJbmRpY2F0b3IiLCJCdXR0b25XcmFwcGVyIiwiRm9ybVdyYXBwZXIiLCJGb3JtIiwiTG9naW5Gb3JtIiwibG9nSW5Mb2FkaW5nIiwibG9nSW5FcnJvciIsImVtYWlsIiwib25DaGFuZ2VFbWFpbCIsInBhc3N3b3JkIiwib25DaGFuZ2VQYXNzd29yZCIsImFsZXJ0Iiwib25TdWJtaXRGcm9tIiwibG9naW5SZXF1ZXN0QWN0aW9uIiwibW9tZW50IiwibG9jYWxlIiwiUG9zdENhcmQiLCJyZW1vdmVQb3N0TG9hZGluZyIsImNvbW1lbnRGb3JtT3BlbmVkIiwic2V0Q29tbWVudEZvcm1PcGVuZWQiLCJlZGl0TW9kZSIsInNldEVkaXRNb2RlIiwib25DbGlja1VwZGF0ZSIsIm9uQ2FuY2VsVXBkYXRlIiwib25DaGFuZ2VQb3N0IiwiZWRpdFRleHQiLCJVUERBVEVfUE9TVF9SRVFVRVNUIiwiUG9zdElkIiwib25MaWtlIiwiTElLRV9QT1NUX1JFUVVFU1QiLCJvblVuTGlrZSIsIlVOTElLRV9QT1NUX1JFUVVFU1QiLCJvblRvZ2dsZUNvbW1lbnQiLCJwcmV2Iiwib25SZW1vdmVQb3N0IiwiUkVNT1ZFX1BPU1RfUkVRVUVTVCIsIm9uUmV0d2VldCIsIlJFVFdFRVRfUkVRVUVTVCIsImxpa2VkIiwiTGlrZXJzIiwibWFyZ2luQm90dG9tIiwiSW1hZ2VzIiwiUmV0d2VldElkIiwibmlja25hbWUiLCJSZXR3ZWV0IiwiZmxvYXQiLCJjcmVhdGVkQXQiLCJmb3JtYXQiLCJDb21tZW50cyIsIml0ZW0iLCJzaGFwZSIsIm51bWJlciIsInN0cmluZyIsIm9iamVjdE9mIiwiYW55IiwiVGV4dEFyZWEiLCJQb3N0Q2FyZENvbnRlbnQiLCJwb3N0RGF0YSIsInVwZGF0ZVBvc3RMb2FkaW5nIiwidXBkYXRlUG9zdERvbmUiLCJzZXRFZGl0VGV4dCIsIm9uQ2hhbmdlVGV4dCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRvU3RyaW5nIiwic3BsaXQiLCJpIiwibWF0Y2giLCJzbGljZSIsImJvb2wiLCJkZWZhdWx0UHJvcHMiLCJQb3N0Rm9ybSIsImltYWdlUGF0aHMiLCJhZGRQb3N0RG9uZSIsInRleHQiLCJzZXRUZXh0Iiwib25TdWJtaXQiLCJ0cmltIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImZvckVhY2giLCJwIiwiYXBwZW5kIiwiQUREX1BPU1RfUkVRVUVTVCIsImltYWdlSW5wdXQiLCJ1c2VSZWYiLCJvbkNsaWNrSW1hZ2VVcGxvYWQiLCJjdXJyZW50IiwiY2xpY2siLCJvbkNoYW5nZUltYWdlcyIsImZpbGVzIiwiaW1hZ2VGb3JtRGF0YSIsImNhbGwiLCJmIiwiVVBMT0FEX0lNQUdFU19SRVFVRVNUIiwib25SZW1vdmVJbWFnZSIsImluZGV4IiwiUkVNT1ZFX0lNQUdFIiwiZGlzcGxheSIsIndpZHRoIiwiUG9zdEltYWdlcyIsInNob3dJbWFnZXNab29tIiwic2V0U2hvd0ltYWdlc1pvb20iLCJvblpvb20iLCJ0ZXh0QWxpZ24iLCJ2ZXJ0aWNhbEFsaWduIiwiVXNlclByb2ZpbGUiLCJsb2dPdXRMb2FkaW5nIiwib25Mb2dPdXQiLCJsb2dvdXRSZXF1ZXN0QWN0aW9uIiwiUG9zdHMiLCJGb2xsb3dlcnMiLCJiYWNrVXJsIiwiaW5pdGlhbFZhbHVlIiwic2V0VmFsdWUiLCJoYW5kbGVyIiwibGlzdGVuZXJzIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJ3aW5kb3ciLCJwcmVmZXRjaGVkIiwiY2FjaGVkT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZW50cnkiLCJjYiIsInJvb3RNYXJnaW4iLCJsaXN0ZW5Ub0ludGVyc2VjdGlvbnMiLCJvYnNlcnZlciIsImdldE9ic2VydmVyIiwicm91dGVyIiwiZXJyIiwiaHJlZiIsImV2ZW50Iiwibm9kZU5hbWUiLCJpc01vZGlmaWVkRXZlbnQiLCJzY3JvbGwiLCJhcyIsInN1Y2Nlc3MiLCJkb2N1bWVudCIsImFyZ3MiLCJrZXkiLCJleHBlY3RlZCIsImFjdHVhbCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJPYmplY3QiLCJwcm9wcyIsImNyZWF0ZVByb3BFcnJvciIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJzaGFsbG93IiwicGFzc0hyZWYiLCJwcmVmZXRjaCIsIm9wdGlvbmFsUHJvcHMiLCJoYXNXYXJuZWQiLCJSZWFjdCIsInBhdGhuYW1lIiwicmVzb2x2ZWRBcyIsImNoaWxkRWxtIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGQiLCJDaGlsZHJlbiIsImNoaWxkUHJvcHMiLCJyZWYiLCJlbCIsInNldENoaWxkRWxtIiwib25DbGljayIsImxpbmtDbGlja2VkIiwicHJpb3JpdHkiLCJMaW5rIiwicGF0aCIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwicHJvY2VzcyIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJnZXQiLCJmaWVsZCIsImdldFJvdXRlciIsImV2ZW50RmllbGQiLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsIl9yb3V0ZXIiLCJpbnN0YW5jZSIsIkFycmF5IiwiQ29tcG9zZWRDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJXaXRoUm91dGVyV3JhcHBlciIsIm5hbWUiLCJhbGwiLCJvbiIsIm9mZiIsImVtaXQiLCJiYXNlUGF0aCIsImNhbmNlbGxlZCIsInByZWZpeCIsImFkZFBhdGhQcmVmaXgiLCJ1cmwiLCJsb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwiaGFzQmFzZVBhdGgiLCJpbnRlcnBvbGF0ZWRSb3V0ZSIsImR5bmFtaWNSZWdleCIsImR5bmFtaWNHcm91cHMiLCJkeW5hbWljTWF0Y2hlcyIsImFzUGF0aG5hbWUiLCJwYXJhbXMiLCJwYXJhbSIsInJlcGxhY2VkIiwicmVwZWF0Iiwib3B0aW9uYWwiLCJlc2NhcGVQYXRoRGVsaW1pdGVycyIsInJlc3VsdCIsImZpbHRlcmVkUXVlcnkiLCJxdWVyeSIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImZpbmFsVXJsIiwiaW50ZXJwb2xhdGVkQXMiLCJpbnRlcnBvbGF0ZUFzIiwiaGFzaCIsIm9taXRQYXJtc0Zyb21RdWVyeSIsInJlc29sdmVkSHJlZiIsInJlc29sdmVBcyIsIlBBR0VfTE9BRF9FUlJPUiIsIlN5bWJvbCIsImFkZEJhc2VQYXRoIiwicmVzb2x2ZUhyZWYiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsImNyZWRlbnRpYWxzIiwicmVzIiwiYXR0ZW1wdHMiLCJmZXRjaFJldHJ5IiwiaXNTZXJ2ZXJSZW5kZXIiLCJtYXJrTG9hZGluZ0Vycm9yIiwiY29uc3RydWN0b3IiLCJyb3V0ZSIsImFzUGF0aCIsImNvbXBvbmVudHMiLCJzZGMiLCJzdWIiLCJjbGMiLCJwYWdlTG9hZGVyIiwiX2JwcyIsImV2ZW50cyIsIl93cmFwQXBwIiwiaXNTc3IiLCJpc0ZhbGxiYWNrIiwiX2luRmxpZ2h0Um91dGUiLCJfc2hhbGxvdyIsImxvY2FsZXMiLCJkZWZhdWx0TG9jYWxlIiwib3B0aW9ucyIsInN0eWxlU2hlZXRzIiwiX19OX1NTRyIsImluaXRpYWxQcm9wcyIsIl9fTl9TU1AiLCJDb21wb25lbnQiLCJfX05FWFRfREFUQV9fIiwicmVsb2FkIiwiYmFjayIsInByZXBhcmVVcmxBcyIsImNoYW5nZSIsImlzTG9jYWxVUkwiLCJTVCIsInBlcmZvcm1hbmNlIiwiYWRkTG9jYWxlIiwiY2xlYW5lZEFzIiwiZGVsTG9jYWxlIiwiZGVsQmFzZVBhdGgiLCJwYWdlcyIsIl9fcmV3cml0ZXMiLCJwYXJzZWQiLCJtZXRob2QiLCJwb3RlbnRpYWxIcmVmIiwicGFyc2VkQXMiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsInNob3VsZEludGVycG9sYXRlIiwibWlzc2luZ1BhcmFtcyIsInJvdXRlSW5mbyIsImRlc3RpbmF0aW9uIiwicGFyc2VkSHJlZiIsImFwcENvbXAiLCJlcnJvciIsImNoYW5nZVN0YXRlIiwiX19OIiwiaGFuZGxlUm91dGVJbmZvRXJyb3IiLCJidWlsZENhbmNlbGxhdGlvbkVycm9yIiwicGFnZSIsImdldFJvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsInJlcXVpcmUiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJkYXRhSHJlZiIsInNldCIsImJlZm9yZVBvcFN0YXRlIiwib25seUFIYXNoQ2hhbmdlIiwibmV3SGFzaCIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJzY3JvbGxUb0hhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJfcmVzb2x2ZUhyZWYiLCJhcHBseUJhc2VQYXRoIiwiY2xlYW5QYXRobmFtZSIsIlByb21pc2UiLCJmZXRjaENvbXBvbmVudCIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsIl9nZXREYXRhIiwiZm4iLCJfZ2V0U3RhdGljRGF0YSIsImZldGNoTmV4dERhdGEiLCJfZ2V0U2VydmVyRGF0YSIsIkFwcFRyZWUiLCJjdHgiLCJhYm9ydENvbXBvbmVudExvYWQiLCJub3RpZnkiLCJzZWdtZW50IiwiY2hhciIsImVuY29kZVVSSUNvbXBvbmVudCIsInNsYXNoZWRQcm90b2NvbHMiLCJwcm90b2NvbCIsInVybE9iaiIsImhvc3QiLCJhdXRoIiwiaG9zdG5hbWUiLCJTdHJpbmciLCJxdWVyeXN0cmluZyIsInNlYXJjaCIsIlRFU1RfUk9VVEUiLCJEVU1NWV9CQVNFIiwicmVzb2x2ZWRCYXNlIiwib3JpZ2luIiwibWF0Y2hlck9wdGlvbnMiLCJzZW5zaXRpdmUiLCJkZWxpbWl0ZXIiLCJjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zIiwic3RyaWN0IiwiY3VzdG9tUm91dGUiLCJrZXlzIiwibWF0Y2hlclJlZ2V4IiwicGF0aFRvUmVnZXhwIiwibWF0Y2hlciIsInBhcnNlZERlc3RpbmF0aW9uIiwiZGVzdFF1ZXJ5IiwiZGVzdFBhdGgiLCJkZXN0UGF0aFBhcmFtS2V5cyIsImRlc3RQYXRoUGFyYW1zIiwiZGVzdGluYXRpb25Db21waWxlciIsInZhbGlkYXRlIiwic3RyT3JBcnJheSIsInF1ZXJ5Q29tcGlsZXIiLCJwYXJhbUtleXMiLCJhcHBlbmRQYXJhbXNUb1F1ZXJ5Iiwic2hvdWxkQWRkQmFzZVBhdGgiLCJuZXdVcmwiLCJzZWFyY2hQYXJhbXMiLCJpc05hTiIsInN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0iLCJzZWFyY2hQYXJhbXNMaXN0IiwiY3VzdG9tUm91dGVNYXRjaGVyIiwicmV3cml0ZSIsImRlc3RSZXMiLCJyZSIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsInNsdWdOYW1lIiwiZyIsImdyb3VwcyIsIm0iLCJzdHIiLCJzZWdtZW50cyIsIm5vcm1hbGl6ZWRSb3V0ZSIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJwYXJzZVBhcmFtZXRlciIsInBvcyIsImVzY2FwZVJlZ2V4Iiwicm91dGVLZXlDaGFyQ29kZSIsInJvdXRlS2V5Q2hhckxlbmd0aCIsImdldFNhZmVSb3V0ZUtleSIsInJvdXRlS2V5Iiwicm91dGVLZXlzIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJjbGVhbmVkS2V5IiwiaW52YWxpZEtleSIsInBhcnNlSW50IiwibmFtZWRSZWdleCIsInVzZWQiLCJwb3J0IiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJBcHAiLCJnZXREaXNwbGF5TmFtZSIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJpc1Jlc1NlbnQiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJIb21lIiwibWFpblBvc3RzIiwiaGFzTW9yZVBvc3RzIiwibG9hZFBvc3RzTG9hZGluZyIsInJldHdlZXRFcnJvciIsIm9uU2Nyb2xsIiwic2Nyb2xsWSIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudEhlaWdodCIsInNjcm9sbEhlaWdodCIsImxhc3RJZCIsIkxPQURfUE9TVFNfUkVRVUVTVCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwid3JhcHBlciIsImNvbnRleHQiLCJjb29raWUiLCJyZXEiLCJoZWFkZXJzIiwiYXhpb3MiLCJkZWZhdWx0cyIsIkNvb2tpZSIsInN0b3JlIiwiTE9BRF9NWV9JTkZPX1JFUVVFU1QiLCJFTkQiLCJzYWdhVGFzayIsInRvUHJvbWlzZSIsInJvb3RSZWR1Y2VyIiwiYWN0aW9uIiwiSFlEUkFURSIsInBheWxvYWQiLCJjb21iaW5lZFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJpbml0aWFsU3RhdGUiLCJzaW5nbGVQb3N0IiwibGlrZVBvc3RMb2FkaW5nIiwibGlrZVBvc3REb25lIiwibGlrZVBvc3RFcnJvciIsInJldHdlZXRMb2FkaW5nIiwicmV0d2VldERvbmUiLCJ1bmxpa2VQb3N0TG9hZGluZyIsInVubGlrZVBvc3REb25lIiwidW5saWtlUG9zdEVycm9yIiwibG9hZFBvc3RMb2FkaW5nIiwibG9hZFBvc3REb25lIiwibG9hZFBvc3RFcnJvciIsInVwbG9hZEltYWdlc0xvYWRpbmciLCJ1cGxvYWRJbWFnZXNEb25lIiwidXBsb2FkSW1hZ2VzRXJyb3IiLCJsb2FkUG9zdHNEb25lIiwibG9hZFBvc3RzRXJyb3IiLCJhZGRQb3N0TG9hZGluZyIsImFkZFBvc3RFcnJvciIsInVwZGF0ZVBvc3RFcnJvciIsInJlbW92ZVBvc3REb25lIiwicmVtb3ZlUG9zdEVycm9yIiwiYWRkQ29tbWVudEVycm9yIiwiTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1QiLCJMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTUyIsIkxPQURfSEFTSFRBR19QT1NUU19GQUlMVVJFIiwiTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1QiLCJMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTUyIsIkxPQURfVVNFUl9QT1NUU19GQUlMVVJFIiwiTE9BRF9QT1NUU19TVUNDRVNTIiwiTE9BRF9QT1NUU19GQUlMVVJFIiwiTE9BRF9QT1NUX1JFUVVFU1QiLCJMT0FEX1BPU1RfU1VDQ0VTUyIsIkxPQURfUE9TVF9GQUlMVVJFIiwiQUREX1BPU1RfU1VDQ0VTUyIsIkFERF9QT1NUX0ZBSUxVUkUiLCJVUERBVEVfUE9TVF9TVUNDRVNTIiwiVVBEQVRFX1BPU1RfRkFJTFVSRSIsIkxJS0VfUE9TVF9TVUNDRVNTIiwiTElLRV9QT1NUX0ZBSUxVUkUiLCJVUExPQURfSU1BR0VTX1NVQ0NFU1MiLCJVUExPQURfSU1BR0VTX0ZBSUxVUkUiLCJVTkxJS0VfUE9TVF9TVUNDRVNTIiwiVU5MSUtFX1BPU1RfRkFJTFVSRSIsIlJFTU9WRV9QT1NUX1NVQ0NFU1MiLCJSRU1PVkVfUE9TVF9GQUlMVVJFIiwiQUREX0NPTU1FTlRfU1VDQ0VTUyIsIkFERF9DT01NRU5UX0ZBSUxVUkUiLCJSRVRXRUVUX1NVQ0NFU1MiLCJSRVRXRUVUX0ZBSUxVUkUiLCJhZGRQb3N0IiwiYWRkQ29tbWVudCIsInJlZHVjZXIiLCJwcm9kdWNlIiwiZHJhZnQiLCJ1bnNoaWZ0IiwiZmlsdGVyIiwiY29uY2F0IiwiVXNlcklkIiwibG9hZFVzZXJMb2FkaW5nIiwibG9hZFVzZXJEb25lIiwibG9hZFVzZXJFcnJvciIsImxvYWRNeUluZm9Mb2FkaW5nIiwibG9hZE15SW5mb0RvbmUiLCJsb2FkTXlJbmZvRXJyb3IiLCJyZW1vdmVGb2xsb3dlckxvYWRpbmciLCJyZW1vdmVGb2xsb3dlckRvbmUiLCJyZW1vdmVGb2xsb3dlckVycm9yIiwiZm9sbG93RG9uZSIsImZvbGxvd0Vycm9yIiwidW5mb2xsb3dEb25lIiwidW5mb2xsb3dFcnJvciIsImxvYWRGb2xsb3dlcnNMb2FkaW5nIiwibG9hZEZvbGxvd2Vyc0RvbmUiLCJsb2FkRm9sbG93ZXJzRXJyb3IiLCJsb2FkRm9sbG93aW5nc0xvYWRpbmciLCJsb2FkRm9sbG93aW5nc0RvbmUiLCJsb2FkRm9sbG93aW5nc0Vycm9yIiwibG9nSW5Eb25lIiwibG9nT3V0RG9uZSIsImxvZ091dEVycm9yIiwic2lnblVwTG9hZGluZyIsInNpZ25VcERvbmUiLCJzaWduVXBFcnJvciIsImNoYW5nZU5pY2tuYW1lTG9hZGluZyIsImNoYW5nZU5pY2tuYW1lRG9uZSIsImNoYW5nZU5pY2tuYW1lRXJyb3IiLCJzaWduVXBEYXRhIiwibG9naW5EYXRhIiwidXNlckluZm8iLCJMT0FEX1VTRVJfUkVRVUVTVCIsIkxPQURfVVNFUl9TVUNDRVNTIiwiTE9BRF9VU0VSX0ZBSUxVUkUiLCJMT0FEX01ZX0lORk9fU1VDQ0VTUyIsIkxPQURfTVlfSU5GT19GQUlMVVJFIiwiUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1QiLCJSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUyIsIlJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFIiwiTE9HX0lOX1JFUVVFU1QiLCJMT0dfSU5fU1VDQ0VTUyIsIkxPR19JTl9GQUlMVVJFIiwiTE9HX09VVF9SRVFVRVNUIiwiTE9HX09VVF9TVUNDRVNTIiwiTE9HX09VVF9GQUlMVVJFIiwiU0lHTl9VUF9SRVFVRVNUIiwiU0lHTl9VUF9TVUNDRVNTIiwiU0lHTl9VUF9GQUlMVVJFIiwiQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QiLCJDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyIsIkNIQU5HRV9OSUNLTkFNRV9GQUlMVVJFIiwiRk9MTE9XX1NVQ0NFU1MiLCJGT0xMT1dfRkFJTFVSRSIsIlVORk9MTE9XX1NVQ0NFU1MiLCJVTkZPTExPV19GQUlMVVJFIiwiTE9BRF9GT0xMT1dFUlNfUkVRVUVTVCIsIkxPQURfRk9MTE9XRVJTX1NVQ0NFU1MiLCJMT0FEX0ZPTExPV0VSU19GQUlMVVJFIiwiTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1QiLCJMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUyIsIkxPQURfRk9MTE9XSU5HU19GQUlMVVJFIiwiQUREX1BPU1RfVE9fTUUiLCJSRU1PVkVfUE9TVF9PRl9NRSIsImJhc2VVUkwiLCJ3aXRoQ3JlZGVudGlhbHMiLCJyb290U2FnYSIsImZvcmsiLCJwb3N0U2FnYSIsInVzZXJTYWdhIiwicmV0d2VldEFQSSIsInJldHdlZXQiLCJwdXQiLCJyZXNwb25zZSIsInVwbG9hZEltYWdlc0FQSSIsInVwbG9hZEltYWdlcyIsImxpa2VQb3N0QVBJIiwicGF0Y2giLCJsaWtlUG9zdCIsInVubGlrZVBvc3RBUEkiLCJkZWxldGUiLCJ1bmxpa2VQb3N0IiwibG9hZFBvc3RBUEkiLCJsb2FkUG9zdCIsImRpciIsImxvYWRIYXNodGFnUG9zdHNBUEkiLCJsb2FkSGFzaHRhZ1Bvc3RzIiwibG9hZFVzZXJQb3N0c0FQSSIsImxvYWRVc2VyUG9zdHMiLCJsb2FkUG9zdHNBUEkiLCJsb2FkUG9zdHMiLCJhZGRQb3N0QVBJIiwidXBkYXRlUG9zdEFQSSIsInVwZGF0ZVBvc3QiLCJyZW1vdmVQb3N0QVBJIiwicmVtb3ZlUG9zdCIsImFkZENvbW1lbnRBUEkiLCJ3YXRjaFJldHdlZXQiLCJ0YWtlTGF0ZXN0Iiwid2F0Y2hVcGxvYWRJbWFnZXMiLCJ3YXRjaExpa2VQb3N0Iiwid2F0Y2hVbmxpa2VQb3N0Iiwid2F0Y2hMb2FkUG9zdCIsIndhdGNoTG9hZEhhc2h0YWdQb3N0cyIsInRocm90dGxlIiwid2F0Y2hMb2FkVXNlclBvc3RzIiwid2F0Y2hMb2FkUG9zdHMiLCJ3YXRjaEFkZFBvc3QiLCJ3YXRjaFVwZGF0ZVBvc3QiLCJ3YXRjaFJlbW92ZVBvc3QiLCJ3YXRjaEFkZENvbW1lbnQiLCJyZW1vdmVGb2xsb3dlckFQSSIsInJlbW92ZUZvbGxvd2VyIiwibG9hZEZvbGxvd2Vyc0FQSSIsImxvYWRGb2xsb3dlcnMiLCJsb2FkRm9sbG93aW5nc0FQSSIsImxvYWRGb2xsb3dpbmdzIiwiY2hhbmdlTmlja25hbWVBUEkiLCJjaGFuZ2VOaWNrbmFtZSIsImxvYWRVc2VyQVBJIiwibG9hZFVzZXIiLCJsb2FkTXlJbmZvQVBJIiwibG9hZE15SW5mbyIsImxvZ0luQVBJIiwibG9nSW4iLCJsb2dPdXRBUEkiLCJsb2dPdXQiLCJzaWduVXBBUEkiLCJzaWduVXAiLCJmb2xsb3dBUEkiLCJmb2xsb3ciLCJ1bmZvbGxvd0FQSSIsInVuZm9sbG93Iiwid2F0Y2hSZW1vdmVGb2xsb3dlciIsIndhdGNoTG9hZEZvbGxvd2VycyIsIndhdGNoTG9hZEZvbGxvd2luZ3MiLCJ3YXRjaENoYW5nZU5pY2tuYW1lIiwid2F0Y2hMb2FkVXNlciIsIndhdGNoTG9hZE15SW5mbyIsIndhdGNoRm9sbG93Iiwid2F0Y2hVbmZvbGxvdyIsIndhdGNoTG9nSW4iLCJ3YXRjaExvZ091dCIsIndhdGNoU2lnblVwIiwibG9nZ2VyTWlkZGxld2FyZSIsImdldFN0YXRlIiwibmV4dCIsImNvbmZpZ3VyZVN0b3JlIiwic2FnYU1pZGRsZXdhcmUiLCJjcmVhdGVTYWdhTWlkZGxld2FyZSIsIm1pZGRsZXdhcmVzIiwiZW5oYW5jZXIiLCJjb21wb3NlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsImFwcGx5TWlkZGxld2FyZSIsImNyZWF0ZVN0b3JlIiwicnVuIiwiY3JlYXRlV3JhcHBlciIsImRlYnVnIiwiZW5hYmxlRVM1Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NB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QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsImltcG9ydCBSZWFjdCwge3VzZUNhbGxiYWNrfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXHJcbmltcG9ydCB7TWVudSwgSW5wdXQsIFJvdywgQ29sfSBmcm9tICdhbnRkJyAvLyBhbnRkIOyXkCBNZW51IOyCrOyaqVxyXG5pbXBvcnQgc3R5bGVkLCB7Y3JlYXRlR2xvYmFsU3R5bGV9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQgVXNlclByb2ZpbGUgZnJvbSAnLi4vY29tcG9uZW50cy9Vc2VyUHJvZmlsZSdcclxuaW1wb3J0IExvZ2luRm9ybSBmcm9tICcuLi9jb21wb25lbnRzL0xvZ2luRm9ybSdcclxuaW1wb3J0IHt1c2VTZWxlY3Rvcn0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB1c2VJbnB1dCBmcm9tIFwiLi4vaG9va3MvdXNlSW5wdXRcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcblxyXG5jb25zdCBHbG9iYWwgPSBjcmVhdGVHbG9iYWxTdHlsZWBcclxuXHQuYW50LXJvdyB7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuXHRcdG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cclxuXHQuYW50LWNvbDpmaXJzdC1jaGlsZCB7XHJcblx0XHRwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcclxuXHR9XHJcblxyXG5cdC5hbnQtY29sOmxhc3QtY2hpbGQge1xyXG5cdFx0cGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50O1xyXG5cdH1cclxuYFxyXG5cclxuLy8gYW50ZCDsl5DshJwg7IKs7Jqp7ZWcIElucHV0LlNlYXJjaCDrpbwgc3R5bGVkIGNvbXBvbmVudHMg66GcIOuwlOq/lCDrhKPslrTspIxcclxuY29uc3QgU2VhcmNoSW5wdXQgPSBzdHlsZWQoSW5wdXQuU2VhcmNoKWBcclxuXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG5gXHJcblxyXG5jb25zdCBBcHBMYXlvdXQgPSAoe2NoaWxkcmVufSkgPT4ge1xyXG5cdC8vY29uc3QgW2lzTG9nZ2VkSW4sIHNldElzTG9nZ2VkSW5dID0gdXNlU3RhdGUoZmFsc2UpXHJcblx0Ly8g7Jyg7KCAIOyekOyytOulvCDrsJvslYTsmYDshJwg7Jyg7KCAIOyViOyXkOyEnCBpc0xvZ2dlZEluIOydhCDqtazsobDrtoTtlbQg7ZWg64u5XHJcblx0Ly9jb25zdCB7IGlzTG9nZ2VkSW4gfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcilcclxuXHRjb25zdCBbc2VhcmNoSW5wdXQsIG9uQ2hhbmdlU2VhcmNoSW5wdXRdID0gdXNlSW5wdXQoJycpXHJcblx0Y29uc3Qge21lfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcilcclxuXHRcclxuXHRjb25zdCBvblNlYXJjaCA9IHVzZUNhbGxiYWNrKFxyXG5cdFx0XHQoKSA9PiB7XHJcblx0XHRcdFx0Um91dGVyLnB1c2goYC9oYXNodGFnLyR7c2VhcmNoSW5wdXR9YCkgLy8gc2VhcmNoSW5wdXQg7ZW07Ims7YOc6re466GcIOydtOuPmVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRbc2VhcmNoSW5wdXRdLFxyXG5cdCk7XHJcblx0XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHRcdDxkaXY+XHJcblx0XHRcdFx0PEdsb2JhbC8+XHJcblx0XHRcdFx0PE1lbnUgbW9kZT1cImhvcml6b250YWxcIj5cclxuXHRcdFx0XHRcdDxNZW51Lkl0ZW0ga2V5PVwiaG9tZVwiPlxyXG5cdFx0XHRcdFx0XHQ8TGluayBocmVmPVwiL1wiPlxyXG5cdFx0XHRcdFx0XHRcdDxhPuuFuOuTnOuyhOuTnDwvYT5cclxuXHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0PC9NZW51Lkl0ZW0+XHJcblx0XHRcdFx0XHQ8TWVudS5JdGVtIGtleT1cInByb2ZpbGVcIj5cclxuXHRcdFx0XHRcdFx0PExpbmsgaHJlZj1cIi9wcm9maWxlXCI+XHJcblx0XHRcdFx0XHRcdFx0PGE+7ZSE66Gc7ZWEPC9hPlxyXG5cdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHQ8L01lbnUuSXRlbT5cclxuXHRcdFx0XHRcdDxNZW51Lkl0ZW0ga2V5PVwibWFpbFwiPlxyXG5cdFx0XHRcdFx0XHQ8U2VhcmNoSW5wdXQgLy8g6rKA7IOJ7LC97J2EIO2Gte2VtCDtlbTsiaztg5zqt7gg6rKA7IOJXHJcblx0XHRcdFx0XHRcdFx0XHRlbnRlckJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3NlYXJjaElucHV0fVxyXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e29uQ2hhbmdlU2VhcmNoSW5wdXR9XHJcblx0XHRcdFx0XHRcdFx0XHRvblNlYXJjaD17b25TZWFyY2h9XHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8L01lbnUuSXRlbT5cclxuXHRcdFx0XHQ8L01lbnU+XHJcblx0XHRcdFx0ey8q7Lus65+8IOyCrOydtOydmCDqsITqsqkgZ3V0dGVyKi99XHJcblx0XHRcdFx0PFJvdyBndXR0ZXI9ezh9PlxyXG5cdFx0XHRcdFx0ey8qYW50ZCBkZXNpZ24g7J2AIOyEuOuhnOykhOydhCAyNCDtlL3shYDroZwg64KY64iUKi99XHJcblx0XHRcdFx0XHQ8Q29sIHhzPXsyNH0gbWQ9ezZ9PlxyXG5cdFx0XHRcdFx0XHR7LypkdW1teSBkYXRhKi99XHJcblx0XHRcdFx0XHRcdHsvKntpc0xvZ2dlZEluID8gPFVzZXJQcm9maWxlIHNldElzTG9nZ2VkSW49e3NldElzTG9nZ2VkSW59Lz4gOiA8TG9naW5Gb3JtIHNldElzTG9nZ2VkSW49e3NldElzTG9nZ2VkSW59IC8+fSovfVxyXG5cdFx0XHRcdFx0XHR7bWUgPyA8VXNlclByb2ZpbGUvPiA6IDxMb2dpbkZvcm0vPn1cclxuXHRcdFx0XHRcdDwvQ29sPlxyXG5cdFx0XHRcdFx0PENvbCB4cz17MjR9IG1kPXsxMn0+XHJcblx0XHRcdFx0XHRcdHtjaGlsZHJlbn0gey8q7Jes6riw64qUIEFwcExheW91dCDsnZggY2hpbGRyZW4qL31cclxuXHRcdFx0XHRcdDwvQ29sPlxyXG5cdFx0XHRcdFx0PENvbCB4cz17MjR9IG1kPXs2fT5cclxuXHRcdFx0XHRcdFx0PGEgaHJlZj1cImh0dHBzOi8vcWhyZG1hYWtzZW4uZ2l0aHViLmlvL1wiIHRhcmdldD17J19ibGFuayd9IHJlbD1cIm5vcmVmZXJyZXIgbm9vcGVuZXJcIj5cclxuXHRcdFx0XHRcdFx0XHRNYWRlIGluIFZpdGFtaW5cclxuXHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0PC9Db2w+XHJcblx0XHRcdFx0PC9Sb3c+XHJcblx0XHRcdDwvZGl2PlxyXG5cdClcclxufVxyXG5cclxuQXBwTGF5b3V0LnByb3BUeXBlcyA9IHtcclxuXHRjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwTGF5b3V0XHJcbiIsImltcG9ydCBSZWFjdCwge3VzZUNhbGxiYWNrLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge0J1dHRvbiwgRm9ybSwgSW5wdXR9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB1c2VJbnB1dCBmcm9tIFwiLi4vaG9va3MvdXNlSW5wdXRcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQge3VzZURpc3BhdGNoLCB1c2VTZWxlY3Rvcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7QUREX0NPTU1FTlRfUkVRVUVTVH0gZnJvbSBcIi4uL3JlZHVjZXJzL3Bvc3RcIjtcclxuXHJcbmNvbnN0IENvbW1lbnRGb3JtID0gKHtwb3N0fSkgPT4ge1xyXG5cdGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG5cdGNvbnN0IGlkID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyLm1lPy5pZClcclxuXHRjb25zdCB7YWRkQ29tbWVudERvbmUsIGFkZENvbW1lbnRMb2FkaW5nfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9zdClcclxuXHRjb25zdCBbY29tbWVudFRleHQsIG9uQ2hhbmdlQ29tbWVudFRleHQsIHNldENvbW1lbnRUZXh0XSA9IHVzZUlucHV0KCcnKVxyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0aWYgKGFkZENvbW1lbnREb25lKSB7XHJcblx0XHRcdHNldENvbW1lbnRUZXh0KCcnKVxyXG5cdFx0fVxyXG5cdH0sIFthZGRDb21tZW50RG9uZV0pXHJcblxyXG5cdGNvbnN0IG9uU3VibWl0Q29tbWVudCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuXHRcdGNvbnNvbGUubG9nKCdwb3N0LmlkIDogJyArIHBvc3QuaWQgKyAnLCBjb21tZW50VGV4dCA6ICcgKyBjb21tZW50VGV4dCArICcsIHVzZXJJZCA6ICcgKyBpZClcclxuXHRcdGRpc3BhdGNoKHsgLy8g67OA7IiY66W8IOyCrOyaqe2VtOyEnCBjcmVhdGUsIOyerOyCrOyaqSDrkKDqsbDrnbzrqbQg64KY7KSR7JeQIO2VqOyImOuhnCDrubzripTqsowg7KKL7Jy866mwLCDsu7Ttj6zrhIztirjsl5DshJzrp4wg7JOw7J286rGw66m0IOyVoeyFmCDqsJ3ssrTtlZjrgpjroZwg64Sj64qU64ukXHJcblx0XHRcdHR5cGU6IEFERF9DT01NRU5UX1JFUVVFU1QsXHJcblx0XHRcdGRhdGE6IHtjb250ZW50OiBjb21tZW50VGV4dCwgdXNlcklkOiBpZCwgcG9zdElkOiBwb3N0LmlkfSxcclxuXHRcdH0pXHJcblx0fSwgW2NvbW1lbnRUZXh0LCBpZF0pXHJcblxyXG5cdHJldHVybiAoXHJcblx0XHRcdDxGb3JtIG9uRmluaXNoPXtvblN1Ym1pdENvbW1lbnR9PlxyXG5cdFx0XHRcdDxGb3JtLkl0ZW0gc3R5bGU9e3twb3NpdGlvbjogXCJyZWxhdGl2ZVwiLCBtYXJnaW46IDB9fT5cclxuXHRcdFx0XHRcdDxJbnB1dC5UZXh0QXJlYSB2YWx1ZT17Y29tbWVudFRleHR9IG9uQ2hhbmdlPXtvbkNoYW5nZUNvbW1lbnRUZXh0fSByb3dzPXs0fS8+XHJcblx0XHRcdFx0XHQ8QnV0dG9uIHN0eWxlPXt7cG9zaXRpb246ICdhYnNvbHV0ZScsIHJpZ2h0OiAwLCBib3R0b206IC00MCwgekluZGV4OiAxfX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cInByaW1hcnlcIiBodG1sVHlwZT1cInN1Ym1pdFwiIGxvYWRpbmc9e2FkZENvbW1lbnRMb2FkaW5nfVxyXG5cdFx0XHRcdFx0PuyCkOyVvVxyXG5cdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0PC9Gb3JtLkl0ZW0+XHJcblx0XHRcdDwvRm9ybT5cclxuXHQpXHJcbn1cclxuQ29tbWVudEZvcm0ucHJvcFR5cGVzID0ge1xyXG5cdHBvc3Q6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxufVxyXG5leHBvcnQgZGVmYXVsdCBDb21tZW50Rm9ybTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7dXNlQ2FsbGJhY2t9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQge0J1dHRvbn0gZnJvbSAnYW50ZCdcclxuaW1wb3J0IHt1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3J9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQge0ZPTExPV19SRVFVRVNULCBVTkZPTExPV19SRVFVRVNUfSBmcm9tIFwiLi4vcmVkdWNlcnMvdXNlclwiO1xyXG5cclxuY29uc3QgRm9sbG93QnV0dG9uID0gKHtwb3N0fSkgPT4ge1xyXG5cdGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG5cdGNvbnN0IHttZSwgZm9sbG93TG9hZGluZywgdW5mb2xsb3dMb2FkaW5nfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcilcclxuXHJcblx0Ly8gdi5pZCDqsIAg7Y+s7Iqk7Yq4IOyekeyEseyekOydmCBpZCDrnbzrqbRcclxuXHRjb25zdCBpc0ZvbGxvd2luZyA9IG1lPy5Gb2xsb3dpbmdzLmZpbmQoKHYpID0+IHYuaWQgPT09IHBvc3QuVXNlci5pZClcclxuXHJcblx0Y29uc3Qgb25DbGlja0J1dHRvbiA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuXHRcdGlmIChpc0ZvbGxvd2luZykge1xyXG5cdFx0XHRkaXNwYXRjaCh7XHJcblx0XHRcdFx0dHlwZTogVU5GT0xMT1dfUkVRVUVTVCxcclxuXHRcdFx0XHRkYXRhOiBwb3N0LlVzZXIuaWQsIC8q7YyU66Gc7Jqw7ZWg65WMIOyCrOyaqeyekOydmCDsoJXrs7Trpbwg67O064K07KO864qU6rOzKi9cclxuXHRcdFx0fSlcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGRpc3BhdGNoKHtcclxuXHRcdFx0XHR0eXBlOiBGT0xMT1dfUkVRVUVTVCxcclxuXHRcdFx0XHRkYXRhOiBwb3N0LlVzZXIuaWQsXHJcblx0XHRcdH0pXHJcblx0XHR9XHJcblx0fSwgW2lzRm9sbG93aW5nXSlcclxuXHJcblx0aWYgKHBvc3QuVXNlci5pZCA9PT0gbWUuaWQpIHsgLy8g7Y+s7Iqk7Yq4IOyekeyEseyekOydmCDslYTsnbTrlJTsmYAg64K0IOyVhOydtOuUlOqwgCDqsJnri6TrqbQg7YyU66Gc7JqwIOuyhO2KvCBudWxsXHJcblx0XHRyZXR1cm4gbnVsbFxyXG5cdH1cclxuXHJcblx0cmV0dXJuIChcclxuXHRcdFx0PEJ1dHRvbiBsb2FkaW5nPXtmb2xsb3dMb2FkaW5nIHx8IHVuZm9sbG93TG9hZGluZ30gb25DbGljaz17b25DbGlja0J1dHRvbn0+XHJcblx0XHRcdFx0e2lzRm9sbG93aW5nID8gJ+yWuO2MlOuhnOyasCcgOiAn7YyU66Gc7JqwJ30gey8q7YyU66Gc7Jqw7IOB7YOc652866m0IHRydWUg7IOB7YOc66m0IOyWuO2MlOuhnOyasCwgZmFsc2Ug652866m0IO2MlOuhnOyasCovfVxyXG5cdFx0XHQ8L0J1dHRvbj5cclxuXHQpXHJcbn1cclxuRm9sbG93QnV0dG9uLnByb3BUeXBlcyA9IHtcclxuXHRwb3N0OiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgRm9sbG93QnV0dG9uIiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiXHJcbmltcG9ydCBTbGljayBmcm9tICdyZWFjdC1zbGljaydcclxuaW1wb3J0IHtDbG9zZUJ0biwgR2xvYmFsLCBIZWFkZXIsIEltZ1dyYXBwZXIsIEluZGljYXRvciwgT3ZlcmxheSwgU2xpY2tXcmFwcGVyfSBmcm9tIFwiLi9zdHlsZWRcIjtcclxuaW1wb3J0IHtiYWNrVXJsfSBmcm9tIFwiLi4vLi4vY29uZmlnL2NvbmZpZ1wiO1xyXG5cclxuXHJcbmNvbnN0IEltYWdlc1pvb20gPSAoe2ltYWdlcywgb25DbG9zZX0pID0+IHtcclxuXHRjb25zdCBbY3VycmVudFNsaWRlLCBzZXRDdXJyZW50U2xpZGVdID0gdXNlU3RhdGUoMClcclxuXHRyZXR1cm4gKFxyXG5cdFx0XHQ8T3ZlcmxheT5cclxuXHRcdFx0XHQ8R2xvYmFsLz5cclxuXHRcdFx0XHQ8SGVhZGVyPlxyXG5cdFx0XHRcdFx0PGgxPuyDgeyEuCDsnbTrr7jsp4A8L2gxPlxyXG5cdFx0XHRcdFx0PENsb3NlQnRuIG9uQ2xpY2s9e29uQ2xvc2V9Plg8L0Nsb3NlQnRuPlxyXG5cdFx0XHRcdDwvSGVhZGVyPlxyXG5cdFx0XHRcdDxTbGlja1dyYXBwZXI+XHJcblx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHQ8U2xpY2tcclxuXHRcdFx0XHRcdFx0XHRcdGluaXRpYWxTbGlrZT17MH0gLy8g7LKr67KI7Ke466W8IOyWtOuWpCDsnbTrr7jsp4DroZwg7ZWg7KeAXHJcblx0XHRcdFx0XHRcdFx0XHRiZWZvcmVDaGFuZ2U9eyhzbGlkZSwgbmV3U2xpZGUpID0+IHNldEN1cnJlbnRTbGlkZShuZXdTbGlkZSl9IC8vIOyKrOudvOydtOuTnOulvCDrhJjquLDrqbQg67KI7Zi46rCAIOyggOyepVxyXG5cdFx0XHRcdFx0XHRcdFx0aW5maW5pdGUgLy8g66y07ZWc67CY67O1XHJcblx0XHRcdFx0XHRcdFx0XHRhcnJvd3M9e2ZhbHNlfSAvLyDsnbTrr7jsp4Ag7JaRIOyYhiDtgbTrpq3tlbTshJwg64SY6riw64qUIO2ZlOyCtO2RnCDrsoTtirwg7JeG7JWwXHJcblx0XHRcdFx0XHRcdFx0XHRzbGlkZXNUb1Nob3c9ezF9IC8v7ZWc67KI7JeQIO2VmOuCmOyUqSDrs7Tsl6zso7zrqbBcclxuXHRcdFx0XHRcdFx0XHRcdHNsaWRlc1RvU2Nyb2xsPXsxfSAvLyDtlZzrsojsl5Ag7ZWY64KY7JSpIOuEmOq4tOuLpFxyXG5cdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0e2ltYWdlcy5tYXAoKHYpID0+IChcclxuXHRcdFx0XHRcdFx0XHRcdFx0PEltZ1dyYXBwZXIga2V5PXt2LnNyY30+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gZnJvbnQg7JeQ7IScIOydtOuvuOyngCDsoITshqEg7IucIOqyveuhnCDshKTsoJVcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7Lyo8aW1nIHNyYz17YGh0dHA6Ly9sb2NhbGhvc3Q6MzA2NS8ke3Yuc3JjfWB9IGFsdD17di5zcmN9Lz4gZnJvbnQqL31cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7Lyo8aW1nIHNyYz17YCR7YmFja1VybH0vJHt2LnNyY31gfSBhbHQ9e3Yuc3JjfS8+czMg66W8IOyCrOyaqe2VmOq4sOyXkCDrjZTsnbTsg4EgYmFja1VybCDtlYTsmpTsl4bsnYwqL31cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7Lyp0aHVtYiDtj7TrjZTrpbwgb3JpZ2luYWwgZm9sZGVyIOuhnCwg7JuQ67O467O06riwICovfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXtgJHt2LnNyYy5yZXBsYWNlKC9cXC90aHVtYlxcLy8sICdvcmlnaW5hbC8nKX1gfSBhbHQ9e3Yuc3JjfS8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvSW1nV3JhcHBlcj5cclxuXHRcdFx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHRcdFx0PC9TbGljaz5cclxuXHRcdFx0XHRcdFx0PEluZGljYXRvcj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2PiB7LyrshLjsnqUg7KSR7JeQIOuqhyDrsojsp7gg6rKD7J2EIOuztOqzoCDsnojripTsp4Ag6rCA66as7YKk64qUIOyKpO2DgOydvOuTnCDsu7Ttj6zrhIztirgqL31cclxuXHRcdFx0XHRcdFx0XHRcdHtjdXJyZW50U2xpZGUgKyAxfVxyXG5cdFx0XHRcdFx0XHRcdFx0eycgJ31cclxuXHRcdFx0XHRcdFx0XHRcdC9cclxuXHRcdFx0XHRcdFx0XHRcdHtpbWFnZXMubGVuZ3RofVxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L0luZGljYXRvcj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvU2xpY2tXcmFwcGVyPlxyXG5cdFx0XHQ8L092ZXJsYXk+XHJcblx0KVxyXG59XHJcbkltYWdlc1pvb20ucHJvcFR5cGVzID0ge1xyXG5cdGltYWdlczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCkuaXNSZXF1aXJlZCxcclxuXHRvbkNsb3NlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VzWm9vbVxyXG5cclxuIiwiaW1wb3J0IHN0eWxlZCwge2NyZWF0ZUdsb2JhbFN0eWxlfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHtDbG9zZU91dGxpbmVkfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBPdmVybGF5ID0gc3R5bGVkLmRpdmBcclxuXHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0ei1pbmRleDogNTAwMDtcclxuXHR0b3A6IDA7IC8vIGZpeGVkIOulvCDtmZTrqbTsnYQg6r2J7LGE7Jqw66Ck66m0IOuqqOuRkCAwIOyjvOuptOuQnOuLpC5cclxuXHRsZWZ0OiAwO1xyXG5cdHJpZ2h0OiAwO1xyXG5cdGJvdHRvbTogMDtcclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IEhlYWRlciA9IHN0eWxlZC5oZWFkZXJgXHJcblx0aGVpZ2h0OiA0NHB4O1xyXG5cdGJhY2tncm91bmQ6IHdoaXRlO1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRwYWRkaW5nOiAwO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcblx0JiBoMSB7XHJcblx0XHRtYXJnaW46IDA7XHJcblx0XHRmb250LXNpemU6IDE3cHg7XHJcblx0XHRjb2xvcjogIzMzMztcclxuXHRcdGxpbmUtaGVpZ2h0OiA0NHB4O1xyXG5cdH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IENsb3NlQnRuID0gc3R5bGVkKENsb3NlT3V0bGluZWQpYFxyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRyaWdodDogMDtcclxuXHR0b3A6IDA7XHJcblx0cGFkZGluZzogMTVweDtcclxuXHRsaW5lLWhlaWdodDogMTRweDtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBTbGlja1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG5cdGhlaWdodDogY2FsYygxMDAlIC0gNDRweCk7XHJcblx0YmFja2dyb3VuZDogIzA5MDkwOTtcclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IEltZ1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG5cdHBhZGRpbmc6IDMycHg7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuXHQmIGltZyB7XHJcblx0XHRtYXJnaW46IDAgYXV0bztcclxuXHRcdG1heC1oZWlnaHQ6IDc1MHB4O1xyXG5cdH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IEluZGljYXRvciA9IHN0eWxlZC5kaXZgXHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuXHQmID4gZGl2IHtcclxuXHRcdHdpZHRoOiA3NXB4O1xyXG5cdFx0aGVpZ2h0OiAzMHB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDMwcHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiAxNXB4O1xyXG5cdFx0YmFja2dyb3VuZDogIzMxMzEzMTtcclxuXHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdGNvbG9yOiB3aGl0ZTtcclxuXHRcdGZvbnQtc2l6ZTogMTVweDtcclxuXHR9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBHbG9iYWwgPSBjcmVhdGVHbG9iYWxTdHlsZWBcclxuXHQuc2xpY2stc2xpZGUge1xyXG5cdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdH1cclxuXHJcblx0LmFudC1jYXJkLWNvdmVyIHtcclxuXHRcdHRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xyXG5cdH1cclxuYCIsImltcG9ydCBSZWFjdCwge3VzZUNhbGxiYWNrLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge0Zvcm0sIElucHV0LCBCdXR0b259IGZyb20gJ2FudGQnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSAnLi4vaG9va3MvdXNlSW5wdXQnXHJcbmltcG9ydCB7dXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHtsb2dpbkFjdGlvbiwgbG9naW5SZXF1ZXN0QWN0aW9ufSBmcm9tIFwiLi4vcmVkdWNlcnMvdXNlclwiO1xyXG5cclxuY29uc3QgQnV0dG9uV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcblx0bWFyZ2luLXRvcDogMTBweDtcclxuYFxyXG5cclxuY29uc3QgRm9ybVdyYXBwZXIgPSBzdHlsZWQoRm9ybSlgXHJcblx0cGFkZGluZzogMTBweDtcclxuYFxyXG5cclxuY29uc3QgTG9naW5Gb3JtID0gKCkgPT4ge1xyXG5cdGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG5cdGNvbnN0IHtsb2dJbkxvYWRpbmcsIGxvZ0luRXJyb3J9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKVxyXG5cdGNvbnN0IFtlbWFpbCwgb25DaGFuZ2VFbWFpbF0gPSB1c2VJbnB1dCgnJylcclxuXHRjb25zdCBbcGFzc3dvcmQsIG9uQ2hhbmdlUGFzc3dvcmRdID0gdXNlSW5wdXQoJycpXHJcblxyXG5cdC8vIOuhnOq3uOyduCDsl5Drn6xcclxuXHR1c2VFZmZlY3QoKCk9PntcclxuXHRcdGlmIChsb2dJbkVycm9yKSB7XHJcblx0XHRcdGFsZXJ0KGxvZ0luRXJyb3IpXHJcblx0XHR9XHJcblx0fSxbbG9nSW5FcnJvcl0pXHJcblxyXG5cdC8vIGNvbnN0IHN0eWxlID0gdXNlTWVtbygoKT0+KHsgLy8gc3R5bGVkIGNvbXBvbmVudHMg66W8IOyCrOyaqeybkOy5mCDslYrsnYTrlYwgdXNlTWVtbyDsgqzsmqlcclxuXHQvLyAgIG1hcmdpblRvcDogMTBcclxuXHQvLyB9KSwgW10pO1xyXG5cclxuXHRjb25zdCBvblN1Ym1pdEZyb20gPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcblx0XHRjb25zb2xlLmxvZygnZW1haWwgOiAnICsgZW1haWwgKyAnLCcgKyAnIHBhc3N3b3JkIDogJyArIHBhc3N3b3JkKVxyXG5cdFx0Ly9zZXRJc0xvZ2dlZEluKHRydWUpXHJcblx0XHRkaXNwYXRjaChsb2dpblJlcXVlc3RBY3Rpb24oe2VtYWlsLCBwYXNzd29yZH0pKSAvLyDrj5nsoIEgY3JlYXRlXHJcblx0fSwgW2VtYWlsLCBwYXNzd29yZF0pXHJcblxyXG5cdHJldHVybiAoXHJcblx0XHRcdDxGb3JtV3JhcHBlciBvbkZpbmlzaD17b25TdWJtaXRGcm9tfT5cclxuXHRcdFx0XHR7LypvbkZpbmlzaCDripQg7J2066+4IGUucHJldmVudERlZmF1bHQoKSDqsIAg7KCB7Jqp65CY7Ja07J6I64ukLiovfVxyXG5cdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cInVzZXItZW1haWxcIj7snbTrqZTsnbw8L2xhYmVsPlxyXG5cdFx0XHRcdFx0PGJyLz5cclxuXHRcdFx0XHRcdDxJbnB1dCBuYW1lPVwidXNlci1lbWFpbFwiIHR5cGU9XCJlbWFpbFwiIHZhbHVlPXtlbWFpbH0gb25DaGFuZ2U9e29uQ2hhbmdlRW1haWx9IHJlcXVpcmVkLz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJ1c2VyLXBhc3N3b3JkXCI+67mE67CA67KI7Zi4PC9sYWJlbD5cclxuXHRcdFx0XHRcdDxici8+XHJcblx0XHRcdFx0XHQ8SW5wdXQgbmFtZT1cInVzZXItcGFzc3dvcmRcIiB0eXBlPVwicGFzc3dvcmRcIiB2YWx1ZT17cGFzc3dvcmR9IG9uQ2hhbmdlPXtvbkNoYW5nZVBhc3N3b3JkfSByZXF1aXJlZC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PEJ1dHRvbldyYXBwZXI+XHJcblx0XHRcdFx0XHQ8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgaHRtbFR5cGU9XCJzdWJtaXRcIiBsb2FkaW5nPXtsb2dJbkxvYWRpbmd9PlxyXG5cdFx0XHRcdFx0XHTroZzqt7jsnbggey8qaHRtbFR5cGUg7J2EIOu2meyXrOykmOyVvCBzdWJtaXQg7J20IOuQnOuLpCovfVxyXG5cdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHQ8TGluayBocmVmPVwiL3NpZ251cFwiPlxyXG5cdFx0XHRcdFx0XHQ8YT5cclxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uPu2ajOybkOqwgOyehTwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0PC9CdXR0b25XcmFwcGVyPlxyXG5cdFx0XHQ8L0Zvcm1XcmFwcGVyPlxyXG5cdClcclxufVxyXG5cclxuLypMb2dpbkZvcm0ucHJvcFR5cGVzID0ge1xyXG4gIHNldElzTG9nZ2VkSW46IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbn0qL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW5Gb3JtXHJcbiIsImltcG9ydCBSZWFjdCwge3VzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5pbXBvcnQge3VzZURpc3BhdGNoLCB1c2VTZWxlY3Rvcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7QXZhdGFyLCBCdXR0b24sIENhcmQsIENvbW1lbnQsIExpc3QsIFBvcG92ZXJ9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7RWxsaXBzaXNPdXRsaW5lZCwgSGVhcnRPdXRsaW5lZCwgTWVzc2FnZU91dGxpbmVkLCBSZXR3ZWV0T3V0bGluZWQsIEhlYXJ0VHdvVG9uZX0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXHJcblxyXG5pbXBvcnQgUG9zdEltYWdlcyBmcm9tIFwiLi9Qb3N0SW1hZ2VzXCI7XHJcbmltcG9ydCBDb21tZW50Rm9ybSBmcm9tIFwiLi9Db21tZW50Rm9ybVwiO1xyXG5pbXBvcnQgUG9zdENhcmRDb250ZW50IGZyb20gXCIuL1Bvc3RDYXJkQ29udGVudFwiO1xyXG5pbXBvcnQge1xyXG5cdExJS0VfUE9TVF9SRVFVRVNULFxyXG5cdFJFTU9WRV9QT1NUX1JFUVVFU1QsXHJcblx0VU5MSUtFX1BPU1RfUkVRVUVTVCxcclxuXHRSRVRXRUVUX1JFUVVFU1QsXHJcblx0VVBEQVRFX1BPU1RfUkVRVUVTVFxyXG59IGZyb20gXCIuLi9yZWR1Y2Vycy9wb3N0XCI7XHJcbmltcG9ydCBGb2xsb3dCdXR0b24gZnJvbSBcIi4vRm9sbG93QnV0dG9uXCI7XHJcblxyXG5cclxubW9tZW50LmxvY2FsZSgna28nKSAvLyDtlZzquIDroZwg67CU6r6864ukXHJcblxyXG5jb25zdCBQb3N0Q2FyZCA9ICh7cG9zdH0pID0+IHtcclxuXHRjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuXHRjb25zdCB7cmVtb3ZlUG9zdExvYWRpbmd9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KVxyXG5cdGNvbnN0IFtjb21tZW50Rm9ybU9wZW5lZCwgc2V0Q29tbWVudEZvcm1PcGVuZWRdID0gdXNlU3RhdGUoZmFsc2UpXHJcblx0Y29uc3QgaWQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIubWU/LmlkKSAvL3N0YXRlLnVzZXIubWUgJiYgc3RhdGUudXNlci5tZS5pZFxyXG4vL1x0Y29uc3QgW2xpa2VkLCBzZXRMaWtlZF0gPSB1c2VTdGF0ZShmYWxzZSkgZnJvbnRcclxuXHRjb25zdCBbZWRpdE1vZGUsIHNldEVkaXRNb2RlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuXHRjb25zdCBvbkNsaWNrVXBkYXRlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG5cdFx0c2V0RWRpdE1vZGUodHJ1ZSlcclxuXHR9LCBbXSlcclxuXHJcblx0Y29uc3Qgb25DYW5jZWxVcGRhdGUgPSB1c2VDYWxsYmFjayhcclxuXHRcdFx0KCkgPT4ge1xyXG5cdFx0XHRcdHNldEVkaXRNb2RlKGZhbHNlKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRbXSxcclxuXHQpO1xyXG5cclxuXHQvKuydtOuvuCDsoJXrs7Trk6TsnbQg64u06rKo7J6I64qUIHBvc3QgY2FyZCDroZwg7JyE66GcIOuBjOyXrCDsmKzrnbzsmKjqsoM/Ki9cclxuXHRjb25zdCBvbkNoYW5nZVBvc3QgPSB1c2VDYWxsYmFjaygoZWRpdFRleHQpID0+IHtcclxuXHRcdGRpc3BhdGNoKHtcclxuXHRcdFx0dHlwZTogVVBEQVRFX1BPU1RfUkVRVUVTVCxcclxuXHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdFBvc3RJZDogcG9zdC5pZCxcclxuXHRcdFx0XHRjb250ZW50OiBlZGl0VGV4dCxcclxuXHRcdFx0fVxyXG5cdFx0fSlcclxuXHR9LCBbcG9zdF0pXHJcblxyXG5cdGNvbnN0IG9uTGlrZSA9IHVzZUNhbGxiYWNrKCgpID0+IHsgLy8g7KKL7JWE7JqUIO2BtOumrVxyXG5cdFx0aWYgKCFpZCkgeyAvLyDroZzqt7jsnbjsnbQg7JWI65CY7Ja07J6I64uk66m0IOuwlOuhnOuwlOuhnCDrp4nslYTso7zripTqsowg7KKL64ukXHJcblx0XHRcdHJldHVybiBhbGVydCgn66Gc6re47J247J20IO2VhOyalO2VqeuLiOuLpCEnKVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGRpc3BhdGNoKHtcclxuXHRcdFx0dHlwZTogTElLRV9QT1NUX1JFUVVFU1QsXHJcblx0XHRcdGRhdGE6IHBvc3QuaWQsIC8vIOqyjOyLnOq4gCDslYTsnbTrlJRcclxuXHRcdH0pXHJcblx0fSwgW2lkXSlcclxuXHRjb25zdCBvblVuTGlrZSA9IHVzZUNhbGxiYWNrKCgpID0+IHsgLy8g7KKL7JWE7JqUIO2VtOygnCDtgbTrpq1cclxuXHRcdGlmICghaWQpIHsgLy8g66Gc6re47J247J20IOyViOuQmOyWtOyeiOuLpOuptCDrsJTroZzrsJTroZwg66eJ7JWE7KO864qU6rKMIOyii+uLpFxyXG5cdFx0XHRyZXR1cm4gYWxlcnQoJ+uhnOq3uOyduOydtCDtlYTsmpTtlanri4jri6QhJylcclxuXHRcdH1cclxuXHRcdHJldHVybiBkaXNwYXRjaCh7XHJcblx0XHRcdHR5cGU6IFVOTElLRV9QT1NUX1JFUVVFU1QsXHJcblx0XHRcdGRhdGE6IHBvc3QuaWQsIC8vIOqyjOyLnOq4gCDslYTsnbTrlJRcclxuXHRcdH0pXHJcblx0fSwgW2lkXSlcclxuXHJcblx0LyogZnJvbnRcclxuXHRjb25zdCBvblRvZ2dsZUxpa2UgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcblx0XHRzZXRMaWtlZCgocHJldikgPT4gIXByZXYpXHJcblx0fSwgW10pKi9cclxuXHJcblx0Y29uc3Qgb25Ub2dnbGVDb21tZW50ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG5cdFx0c2V0Q29tbWVudEZvcm1PcGVuZWQoKHByZXYpID0+ICFwcmV2KVxyXG5cdH0sIFtdKVxyXG5cclxuXHRjb25zdCBvblJlbW92ZVBvc3QgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcblx0XHRpZiAoIWlkKSB7XHJcblx0XHRcdHJldHVybiBhbGVydCgn66Gc6re47J247J20IO2VhOyalO2VqeuLiOuLpC4nKVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGRpc3BhdGNoKHtcclxuXHRcdFx0dHlwZTogUkVNT1ZFX1BPU1RfUkVRVUVTVCxcclxuXHRcdFx0ZGF0YTogcG9zdC5pZCxcclxuXHRcdH0pXHJcblx0fSwgW2lkXSlcclxuXHJcblxyXG5cdGNvbnN0IG9uUmV0d2VldCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuXHRcdGlmICghaWQpIHsgLy8g66Gc6re47J247J20IOyViOuQmOyWtOyeiOuLpOuptCDrsJTroZzrsJTroZwg66eJ7JWE7KO864qU6rKMIOyii+uLpFxyXG5cdFx0XHRyZXR1cm4gYWxlcnQoJ+uhnOq3uOyduOydtCDtlYTsmpTtlanri4jri6QhJylcclxuXHRcdH1cclxuXHRcdHJldHVybiBkaXNwYXRjaCh7XHJcblx0XHRcdHR5cGU6IFJFVFdFRVRfUkVRVUVTVCxcclxuXHRcdFx0ZGF0YTogcG9zdC5pZCxcclxuXHRcdH0pXHJcblx0fSwgW2lkXSk7XHJcblxyXG5cdGNvbnN0IGxpa2VkID0gcG9zdC5MaWtlcnMuZmluZCgodikgPT4gdi5pZCA9PT0gaWQpIC8vIOqyjOyLnOq4gCDsoovslYTsmpQg64iE66W4IOyCrOuejOykkeyXkCDrgrTqsIAg7J6I64qU7KeAXHJcblxyXG5cdHJldHVybiAoXHJcblx0XHRcdDxkaXYgc3R5bGU9e3ttYXJnaW5Cb3R0b206IDIwfX0+XHJcblx0XHRcdFx0PENhcmRcclxuXHRcdFx0XHRcdFx0Y292ZXI9e3Bvc3QuSW1hZ2VzWzBdICYmIDxQb3N0SW1hZ2VzIGltYWdlcz17cG9zdC5JbWFnZXN9Lz59IC8vIOydtOuvuOyngOqwgCDtlZzqsJwg7J207IOB7J6I7J2E65WMIO2PrOyKpO2KuCDsnbTrr7jsp4DsiqRcclxuXHRcdFx0XHRcdFx0YWN0aW9ucz17W1xyXG5cdFx0XHRcdFx0XHRcdDxSZXR3ZWV0T3V0bGluZWQga2V5PVwicmV0d2VldFwiIG9uQ2xpY2s9e29uUmV0d2VldH0vPiwgLy8g66as7Yq47JyXIOuyhO2KvFxyXG5cdFx0XHRcdFx0XHRcdGxpa2VkXHJcblx0XHRcdFx0XHRcdFx0XHRcdD8gPEhlYXJ0VHdvVG9uZSB0d29Ub25lQ29sb3I9XCIjZWIyZjk2XCIga2V5PVwiaGVhcnRcIiBvbkNsaWNrPXtvblVuTGlrZX0vPiAvLyDtlZjtirgg67KE7Yq8XHJcblx0XHRcdFx0XHRcdFx0XHRcdDogPEhlYXJ0T3V0bGluZWQga2V5PVwiaGVhcnRcIiBvbkNsaWNrPXtvbkxpa2V9Lz4sIC8vIO2VmO2KuCDrsoTtirxcclxuXHRcdFx0XHRcdFx0XHQ8TWVzc2FnZU91dGxpbmVkIGtleT1cImNvbW1lbnRcIiBvbkNsaWNrPXtvblRvZ2dsZUNvbW1lbnR9Lz4sIC8vIOuMk+q4gCDrsoTtirxcclxuXHRcdFx0XHRcdFx0XHQ8UG9wb3ZlciBrZXk9XCJtb3JlXCIgY29udGVudD17KCAvLyDrjZQg67O06riwIOuyhO2KvFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uLkdyb3VwPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtpZCAmJiBwb3N0LlVzZXIuaWQgPT09IGlkXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdD8gKCAvKuuCtOqwgCDsk7Qg6riA7J2066m0IOyImOyglSDsgq3soJwg6rCA64qlKi9cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHshcG9zdC5SZXR3ZWV0SWQgJiYgPEJ1dHRvbiBvbkNsaWNrPXtvbkNsaWNrVXBkYXRlfT7siJjsoJU8L0J1dHRvbj59IHsvKuumrO2KuOycl+ydtCDslYTri5Dqsr3smrAg7IiY7KCV6rCA64qlKi99XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b24gdHlwZT1cImRhbmdlclwiIGxvYWRpbmc9e3JlbW92ZVBvc3RMb2FkaW5nfSBvbkNsaWNrPXtvblJlbW92ZVBvc3R9PuyCreygnDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdClcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0OiA8QnV0dG9uPuyLoOqzoDwvQnV0dG9uPn0gey8qIOuCqOydtCDsk7Qg6riA7J2066m0IOyCreygnCDqsIDriqUqL31cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24uR3JvdXA+XHJcblx0XHRcdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8RWxsaXBzaXNPdXRsaW5lZC8+XHJcblx0XHRcdFx0XHRcdFx0PC9Qb3BvdmVyPixcclxuXHRcdFx0XHRcdFx0XX1cclxuXHRcdFx0XHRcdFx0dGl0bGU9e3Bvc3QuUmV0d2VldElkID8gYCR7cG9zdC5Vc2VyLm5pY2tuYW1lfeuLmOydtCDrpqztirjsnJcg7ZWY7IWo7Iq164uI64ukLmAgOiBudWxsfVxyXG5cdFx0XHRcdFx0XHRleHRyYT17aWQgJiYgPEZvbGxvd0J1dHRvbiBwb3N0PXtwb3N0fS8+fSAvLyDsmrDsuKEg7LaU6rCA6rO16rCELOuhnOq3uOyduO2WiOydhOqyveyasOunjOuztOydtOqyjFxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdHsvKnJldHdlZXQg7J24IOqyveyasCDsubTrk5zslYjsl5Ag7Lm065OcIOuEo+yWtOyjvOq4sCovfVxyXG5cdFx0XHRcdFx0e3Bvc3QuUmV0d2VldElkICYmIHBvc3QuUmV0d2VldFxyXG5cdFx0XHRcdFx0XHRcdD8gKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8Q2FyZFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y292ZXI9e3Bvc3QuUmV0d2VldC5JbWFnZXNbMF0gJiYgPFBvc3RJbWFnZXMgaW1hZ2VzPXtwb3N0LlJldHdlZXQuSW1hZ2VzfS8+fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBzdHlsZT17e2Zsb2F0OiAncmlnaHQnfX0+e21vbWVudChwb3N0LmNyZWF0ZWRBdCkuZm9ybWF0KCdZWVlZLk1NLkREJyl9PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PENhcmQuTWV0YVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhdmF0YXI9eyhcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9e2AvdXNlci8ke3Bvc3QuUmV0d2VldC5Vc2VyLmlkfWB9IHByZWZldGNoPXtmYWxzZX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxhPjxBdmF0YXI+e3Bvc3QuUmV0d2VldC5Vc2VyLm5pY2tuYW1lWzBdfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0F2YXRhcj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aXRsZT17cG9zdC5SZXR3ZWV0LlVzZXIubmlja25hbWV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRlc2NyaXB0aW9uPXs8UG9zdENhcmRDb250ZW50XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwb3N0RGF0YT17cG9zdC5SZXR3ZWV0LmNvbnRlbnR9IG9uQ2hhbmdlUG9zdD17b25DaGFuZ2VQb3N0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DYW5jZWxVcGRhdGU9e29uQ2FuY2VsVXBkYXRlfS8+fSAvLyDtirnsiJjtlZwg6riw64ql7J2EIOyymOumrO2VmOuKlCDqsoPsnYQg66eM65Ok6riwIOychO2VtOyEoCDrlLDroZwg7Lu07Y+s64SM7Yq466GcIOu5vOyjvOuKlOqyjCDrs7TquLAg6rmU64GU7ZWY64ukXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9DYXJkPlxyXG5cdFx0XHRcdFx0XHRcdClcclxuXHRcdFx0XHRcdFx0XHQ6IChcclxuXHRcdFx0XHRcdFx0XHRcdFx0PD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7ZmxvYXQ6ICdyaWdodCd9fT57bW9tZW50KHBvc3QuY3JlYXRlZEF0KS5mb3JtYXQoJ1lZWVkuTU0uREQnKX08L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8Q2FyZC5NZXRhXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGF2YXRhcj17KCAvKmF2YXRhciDriITrpbTrqbQg6re47IKs656M7J20IOyTtCDquIAg67O8IOyImOyeiOqyjCovXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPXtgL3VzZXIvJHtwb3N0LlVzZXIuaWR9YH0gcHJlZmV0Y2g9e2ZhbHNlfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGE+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEF2YXRhcj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtwb3N0LlVzZXIubmlja25hbWVbMF19XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9BdmF0YXI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU9e3Bvc3QuVXNlci5uaWNrbmFtZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVzY3JpcHRpb249ezxQb3N0Q2FyZENvbnRlbnRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVkaXRNb2RlPXtlZGl0TW9kZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlUG9zdD17b25DaGFuZ2VQb3N0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DYW5jZWxVcGRhdGU9e29uQ2FuY2VsVXBkYXRlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cG9zdERhdGE9e3Bvc3QuY29udGVudH0vPn0gLy8g7Yq57IiY7ZWcIOq4sOuKpeydhCDsspjrpqztlZjripQg6rKD7J2EIOunjOuTpOq4sCDsnITtlbTshKAg65Sw66GcIOy7tO2PrOuEjO2KuOuhnCDrubzso7zripTqsowg67O06riwIOq5lOuBlO2VmOuLpFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvPlxyXG5cdFx0XHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0PC9DYXJkPlxyXG5cdFx0XHRcdHtjb21tZW50Rm9ybU9wZW5lZCAmJiAoXHJcblx0XHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdFx0PENvbW1lbnRGb3JtIHBvc3Q9e3Bvc3R9Lz5cclxuXHRcdFx0XHRcdFx0XHQ8TGlzdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRoZWFkZXI9e2Ake3Bvc3QuQ29tbWVudHMubGVuZ3RofeqwnOydmCDrjJPquIBgfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRpdGVtTGF5b3V0PVwiaG9yaXpvbnRhbFwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdGRhdGFTb3VyY2U9e3Bvc3QuQ29tbWVudHN9XHJcblx0XHRcdFx0XHRcdFx0XHRcdHJlbmRlckl0ZW09eyhpdGVtKSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGk+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxDb21tZW50XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhdXRob3I9e2l0ZW0uVXNlci5uaWNrbmFtZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGF2YXRhcj17KCAvKuuMk+q4gOydmCBhdmF0YXIg66W8IOuIjOufrOuPhCDqt7gg7IKs656M7J20IOyTtCDquIAg67O8IOyImOyeiOqyjCovXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj17YC91c2VyLyR7aXRlbS5Vc2VyLmlkfWB9IHByZWZldGNoPXtmYWxzZX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEF2YXRhcj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7aXRlbS5Vc2VyLm5pY2tuYW1lWzBdfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0F2YXRhcj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29udGVudD17aXRlbS5jb250ZW50fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj4pfVxyXG5cdFx0XHRcdHsvKjxDb21tZW50Rm9ybSAvPlxyXG5cdFx0XHRcdDxDb21tZW50cyAvPiovfVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHQpXHJcbn1cclxuUG9zdENhcmQucHJvcFR5cGVzID0ge1xyXG5cdHBvc3Q6IFByb3BUeXBlcy5zaGFwZSh7XHJcblx0XHRpZDogUHJvcFR5cGVzLm51bWJlcixcclxuXHRcdFVzZXI6IFByb3BUeXBlcy5vYmplY3QsXHJcblx0XHRjb250ZW50OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG5cdFx0Y3JlYXRlZEF0OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG5cdFx0Q29tbWVudHM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxyXG5cdFx0SW1hZ2VzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcclxuXHRcdExpa2VyczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXHJcblx0XHRSZXR3ZWV0SWQ6IFByb3BUeXBlcy5udW1iZXIsXHJcblx0XHRSZXR3ZWV0OiBQcm9wVHlwZXMub2JqZWN0T2YoUHJvcFR5cGVzLmFueSksXHJcblx0fSkuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RDYXJkIiwiaW1wb3J0IFJlYWN0LCB7dXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7SW5wdXR9IGZyb20gJ2FudGQnXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IHt1c2VTZWxlY3Rvcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7QnV0dG9ufSBmcm9tICdhbnRkJ1xyXG5cclxuXHJcbmNvbnN0IHtUZXh0QXJlYX0gPSBJbnB1dDtcclxuY29uc3QgUG9zdENhcmRDb250ZW50ID0gKHtwb3N0RGF0YSwgZWRpdE1vZGUsIG9uQ2FuY2VsVXBkYXRlLCBvbkNoYW5nZVBvc3R9KSA9PiB7XHJcblx0Y29uc3Qge3VwZGF0ZVBvc3RMb2FkaW5nLCB1cGRhdGVQb3N0RG9uZX0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBvc3QpXHJcblx0Y29uc3QgW2VkaXRUZXh0LCBzZXRFZGl0VGV4dF0gPSB1c2VTdGF0ZShwb3N0RGF0YSlcclxuXHJcblx0Lyrqsozsi5zquIAg64ukIOyTsOqzoOuCmOuptCB0ZXh0QXJlYSDsl4bslaDqs6AsIOuLpOyLnCDsm5DrnpjsnZggcG9zdERhdGEg66GcIOuPjOyVhOqwgOuPhOuhnSovXHJcblx0dXNlRWZmZWN0KCgpPT4ge1xyXG5cdFx0aWYgKHVwZGF0ZVBvc3REb25lKXtcclxuXHRcdFx0b25DYW5jZWxVcGRhdGUoKTtcclxuXHRcdH1cclxuXHR9LCBbdXBkYXRlUG9zdERvbmVdKVxyXG5cclxuXHRjb25zdCBvbkNoYW5nZVRleHQgPSB1c2VDYWxsYmFjayggLy8g6rKM7Iuc6riAIOyImOygleydhCDsnITtlbQg66eM65OsXHJcblx0XHRcdChlKSA9PiB7XHJcblx0XHRcdFx0c2V0RWRpdFRleHQoZS50YXJnZXQudmFsdWUpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRbXSxcclxuXHQpO1xyXG5cclxuXHRyZXR1cm4gKC8vIOyyqyDrsojsp7gg6rKM7Iuc6riAICPtlbTsi5ztg5zqt7ggI+ydteyKpO2UhOugiOyKpFxyXG5cdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdHtlZGl0TW9kZVxyXG5cdFx0XHRcdFx0XHQ/IChcclxuXHRcdFx0XHRcdFx0XHRcdDw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxUZXh0QXJlYSB2YWx1ZT17ZWRpdFRleHR9IG9uQ2hhbmdlPXtvbkNoYW5nZVRleHR9Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvbi5Hcm91cD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uIGxvYWRpbmc9e3VwZGF0ZVBvc3RMb2FkaW5nfSBvbkNsaWNrPXtvbkNoYW5nZVBvc3QoZWRpdE1vZGUpfT7siJjsoJU8L0J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uIHR5cGU9XCJkYW5nZXJcIiBvbkNsaWNrPXtvbkNhbmNlbFVwZGF0ZX0+7Leo7IaMPC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uLkdyb3VwPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC8+XHJcblx0XHRcdFx0XHRcdClcclxuXHRcdFx0XHRcdFx0OiBwb3N0RGF0YS50b1N0cmluZygpLnNwbGl0KC8oI1teXFxzI10rKS9nKS5tYXAoKHYsIGkpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRpZiAodi5tYXRjaCgvKCNbXlxccyNdKykvKSkgeyAvLyDtlbTsi5ztg5zqt7jsmYAg7J287LmY7ZWY64qU7KeAXHJcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gPExpbmsgaHJlZj17YC9oYXNodGFnLyR7di5zbGljZSgxKX1gfSBwcmVmZXRjaD17ZmFsc2V9IGtleT17aX0+PGE+e3Z9PC9hPjwvTGluaz5cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHY7XHJcblx0XHRcdFx0XHRcdH0pfVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHQpXHJcbn1cclxuUG9zdENhcmRDb250ZW50LnByb3BUeXBlcyA9IHtcclxuXHRwb3N0RGF0YTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG5cdGVkaXRNb2RlOiBQcm9wVHlwZXMuYm9vbCxcclxuXHRvbkNhbmNlbFVwZGF0ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuXHRvbkNoYW5nZVBvc3Q6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbn1cclxuXHJcblBvc3RDYXJkQ29udGVudC5kZWZhdWx0UHJvcHMgPSB7XHJcblx0ZWRpdE1vZGU6IGZhbHNlLFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Q2FyZENvbnRlbnQiLCJpbXBvcnQge0Zvcm0sIElucHV0LCBCdXR0b259IGZyb20gJ2FudGQnXHJcbmltcG9ydCBSZWFjdCwge3VzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge3VzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7YWRkUG9zdCwgVVBMT0FEX0lNQUdFU19SRVFVRVNULCBSRU1PVkVfSU1BR0UsIEFERF9QT1NUX1JFUVVFU1R9IGZyb20gJy4uL3JlZHVjZXJzL3Bvc3QnXHJcbmltcG9ydCB1c2VJbnB1dCBmcm9tIFwiLi4vaG9va3MvdXNlSW5wdXRcIjtcclxuaW1wb3J0IHtiYWNrVXJsfSBmcm9tIFwiLi4vY29uZmlnL2NvbmZpZ1wiO1xyXG5cclxuY29uc3QgUG9zdEZvcm0gPSAoKSA9PiB7XHJcblx0Y29uc3Qge2ltYWdlUGF0aHMsIGFkZFBvc3REb25lfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9zdClcclxuXHRjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuXHRjb25zdCBbdGV4dCwgb25DaGFuZ2VUZXh0LCBzZXRUZXh0XSA9IHVzZUlucHV0KCcnKVxyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0aWYgKGFkZFBvc3REb25lKSB7XHJcblx0XHRcdHNldFRleHQoJycpXHJcblx0XHR9XHJcblx0fSwgW2FkZFBvc3REb25lXSlcclxuXHJcblx0Y29uc3Qgb25TdWJtaXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcblx0XHRpZiAoIXRleHQgfHwgIXRleHQudHJpbSgpKSB7IC8vIOqyjOyLnOq4gOydtCDsl4bri6TrqbQg6rKM7Iuc6riAIOyekeyEsSBhbGVydFxyXG5cdFx0XHRyZXR1cm4gYWxlcnQoJ+qyjOyLnOq4gOydhCDsnpHshLHtlZjshLjsmpQuJylcclxuXHRcdH1cclxuXHRcdGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcblx0XHRpbWFnZVBhdGhzLmZvckVhY2goKHApPT57XHJcblx0XHRcdGZvcm1EYXRhLmFwcGVuZCgnaW1hZ2UnLCBwKSAvLyByZXEuYm9keS5jb250ZW50XHJcblx0XHR9KVxyXG5cdFx0Zm9ybURhdGEuYXBwZW5kKCdjb250ZW50JywgdGV4dClcclxuXHRcdHJldHVybiBkaXNwYXRjaCh7XHJcblx0XHRcdHR5cGU6IEFERF9QT1NUX1JFUVVFU1QsXHJcblx0XHRcdGRhdGE6IGZvcm1EYXRhLFxyXG5cdFx0fSlcclxuXHR9LCBbdGV4dCwgaW1hZ2VQYXRoc10pXHJcblxyXG5cdGNvbnN0IGltYWdlSW5wdXQgPSB1c2VSZWYoKVxyXG5cdGNvbnN0IG9uQ2xpY2tJbWFnZVVwbG9hZCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuXHRcdGltYWdlSW5wdXQuY3VycmVudC5jbGljaygpO1xyXG5cdH0sIFtpbWFnZUlucHV0LmN1cnJlbnRdKVxyXG5cclxuXHRjb25zdCBvbkNoYW5nZUltYWdlcyA9IHVzZUNhbGxiYWNrKFxyXG5cdFx0XHQoZSkgPT4ge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCdpbWFnZXMgaW5mbyA6OiAnLCBlLnRhcmdldC5maWxlcykgLy8g7J2066+47KeA7JeQIOuMgO2VnCDsoJXrs7TqsIAg64u06rKo7J6I7J2MXHJcblx0XHRcdFx0Y29uc3QgaW1hZ2VGb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpOyAvLyBmb3JtIGRhdGEg66W8IG11bHRpcGFydCDtmJXsi53snLzroZwg7ISc67KE66GcIOuztOuDhFxyXG5cdFx0XHRcdFtdLmZvckVhY2guY2FsbChlLnRhcmdldC5maWxlcywgKGYpID0+IHsgLy8g67Cw7Je07JeQIGZvckVhY2gg66W8IOu5jOugpCDsk7DripQg6rKDXHJcblx0XHRcdFx0XHRpbWFnZUZvcm1EYXRhLmFwcGVuZCgnaW1hZ2UnLCBmKSAvLyBpbWFnZSDtgqTrnpEgZiDqsJJcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdGRpc3BhdGNoKHtcclxuXHRcdFx0XHRcdHR5cGU6IFVQTE9BRF9JTUFHRVNfUkVRVUVTVCxcclxuXHRcdFx0XHRcdGRhdGE6IGltYWdlRm9ybURhdGEsXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0W10sXHJcblx0KTtcclxuXHJcblx0Y29uc3Qgb25SZW1vdmVJbWFnZSA9IHVzZUNhbGxiYWNrKChpbmRleCk9PigpPT57XHJcblx0XHRkaXNwYXRjaCh7XHJcblx0XHRcdHR5cGU6IFJFTU9WRV9JTUFHRSxcclxuXHRcdFx0ZGF0YTogaW5kZXgsXHJcblx0XHR9KVxyXG5cdH0sIFtdKVxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0XHQvLyBwb3N0IEZvcm1cclxuXHRcdFx0PEZvcm0gc3R5bGU9e3ttYXJnaW46ICcxMHB4IDAgMjBweCd9fSBlbmNUeXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiIG9uRmluaXNoPXtvblN1Ym1pdH0+XHJcblx0XHRcdFx0PElucHV0LlRleHRBcmVhIHZhbHVlPXt0ZXh0fSBvbkNoYW5nZT17b25DaGFuZ2VUZXh0fSBtYXhMZW5ndGg9ezE0MH0gcGxhY2Vob2xkZXI9XCLslrTrlqQg7Iug6riw7ZWcIOydvOydtCDsnojsl4jrgpjsmpQ/XCIvPlxyXG5cdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImZpbGVcIiBuYW1lPVwiaW1hZ2VcIiBtdWx0aXBsZSBoaWRkZW4gcmVmPXtpbWFnZUlucHV0fVxyXG5cdFx0XHRcdFx0XHRcdFx0IG9uQ2hhbmdlPXtvbkNoYW5nZUltYWdlc30vPlxyXG5cdFx0XHRcdFx0PEJ1dHRvbiBvbkNsaWNrPXtvbkNsaWNrSW1hZ2VVcGxvYWR9PuydtOuvuOyngCDsl4XroZzrk5w8L0J1dHRvbj5cclxuXHRcdFx0XHRcdDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBzdHlsZT17e2Zsb2F0OiAncmlnaHQnfX0gaHRtbFR5cGU9XCJzdWJtaXRcIj5cclxuXHRcdFx0XHRcdFx07Ke57Ke5XHJcblx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0e2ltYWdlUGF0aHMubWFwKCh2LCBpKSA9PiB7XHJcblx0XHRcdFx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHRcdFx0XHQvLyDsnbTrr7jsp4Ag65Ox66Gd7J2EIO2WiOydhCDsi5wsIOydtOuvuOyngCDqsr3roZzqsIAg7KCA7J6l65CY66mwLCDrsJjrs7XrrLjsnLzroZwg7ZGc7Iuc7ZW07KSMXHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGtleT17dn0gc3R5bGU9e3tkaXNwbGF5OiAnaW5saW5lLWJsb2NrJ319PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7Lyo8aW1nIHNyYz17YGh0dHA6Ly9sb2NhbGhvc3Q6MzA2NS8ke3Z9YH0gc3R5bGU9e3t3aWR0aDogJzIwMHB4J319IGFsdD17dn0vPiBmcm9udCovfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7Lyo8aW1nIHNyYz17YCR7YmFja1VybH0vJHt2fWB9IHN0eWxlPXt7d2lkdGg6ICcyMDBweCd9fSBhbHQ9e3Z9Lz4gczMg66W8IOyCrOyaqe2VmOq4sOyXkCDrjZTsnbTsg4EgYmFja1VybCDtlYTsmpTsl4bsnYwqL31cclxuXHRcdFx0XHRcdFx0XHRcdFx0ey8q7JuQ67O4IOuztOq4sCB2LnJlcGxhY2UoL1xcL3RodW1iXFwvLywgJy9vcmlnaW5hbC8nKi99XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXt2LnJlcGxhY2UoL1xcL3RodW1iXFwvLywgJy9vcmlnaW5hbC8nKX0gc3R5bGU9e3t3aWR0aDogJzIwMHB4J319IGFsdD17dn0vPiB7LyrsnbTrr7jsp4Ag65287Jqw7YSw7JeQIOuhnOy8gOydtOyFmOydmCDso7zshozqsIAg67CU66GcIOyghOuLrOuQqCovfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b24gb25DbGljaz17b25SZW1vdmVJbWFnZShpKX0+7KCc6rGwPC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdClcclxuXHRcdFx0XHRcdH0pfVxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L0Zvcm0+XHJcblx0KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Rm9ybVxyXG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VDYWxsYmFjaywgdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHtQbHVzT3V0bGluZWR9IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xuaW1wb3J0IEltYWdlc1pvb20gZnJvbSBcIi4vSW1hZ2VzWm9vbVwiO1xuaW1wb3J0IHtiYWNrVXJsfSBmcm9tIFwiLi4vY29uZmlnL2NvbmZpZ1wiO1xuXG5jb25zdCBQb3N0SW1hZ2VzID0gKHtpbWFnZXN9KSA9PiB7XG5cdGNvbnN0IFtzaG93SW1hZ2VzWm9vbSwgc2V0U2hvd0ltYWdlc1pvb21dID0gdXNlU3RhdGUoZmFsc2UpXG5cblx0Y29uc3Qgb25ab29tID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuXHRcdHNldFNob3dJbWFnZXNab29tKHRydWUpXG5cdH0sIFtdKVxuXHRjb25zdCBvbkNsb3NlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuXHRcdHNldFNob3dJbWFnZXNab29tKGZhbHNlKVxuXHR9LCBbXSlcblxuXHRpZiAoaW1hZ2VzLmxlbmd0aCA9PT0gMSkgeyAvLyDtmZTrqbTsnZggMTAwICUg7LCo7KeAXG5cdFx0cmV0dXJuIChcblx0XHRcdFx0PD5cblx0XHRcdFx0XHR7LyogZnJvbnQg7JeQ7IScIOydtOuvuOyngCDsoITshqEg7IucIOqyveuhnCDshKTsoJUqL31cblx0XHRcdFx0XHR7Lyo8aW1nIHJvbGU9XCJwcmVzZW50YXRpb25cIiBzcmM9e2BodHRwOi8vbG9jYWxob3N0OjMwNjUvJHtpbWFnZXNbMF0uc3JjfWB9IGFsdD17aW1hZ2VzWzBdLnNyY30gb25DbGljaz17b25ab29tfS8+IGZyb250Ki99XG5cdFx0XHRcdFx0ey8qPGltZyByb2xlPVwicHJlc2VudGF0aW9uXCIgc3JjPXtgJHtiYWNrVXJsfS8ke2ltYWdlc1swXS5zcmN9YH0gYWx0PXtpbWFnZXNbMF0uc3JjfSBvbkNsaWNrPXtvblpvb219Lz5zMyDrpbwg7IKs7Jqp7ZWY6riw7JeQIOuNlOydtOyDgSBiYWNrVXJsIO2VhOyalOyXhuydjCovfVxuXHRcdFx0XHRcdDxpbWcgcm9sZT1cInByZXNlbnRhdGlvblwiIHNyYz17YCR7aW1hZ2VzWzBdLnNyY31gfSBhbHQ9e2ltYWdlc1swXS5zcmN9IG9uQ2xpY2s9e29uWm9vbX0vPlxuXHRcdFx0XHRcdHtzaG93SW1hZ2VzWm9vbSAmJiA8SW1hZ2VzWm9vbSBpbWFnZXM9e2ltYWdlc30gb25DbG9zZT17b25DbG9zZX0vPn1cblx0XHRcdFx0PC8+XG5cdFx0KVxuXHR9XG5cdGlmIChpbWFnZXMubGVuZ3RoID09PSAyKSB7IC8vIO2ZlOuptOydmCA1MCUg7LCo7KeAXG5cdFx0cmV0dXJuIChcblx0XHRcdFx0PD5cblx0XHRcdFx0XHR7LyogZnJvbnQg7JeQ7IScIOydtOuvuOyngCDsoITshqEg7IucIOqyveuhnCDshKTsoJUqL31cblx0XHRcdFx0XHQ8aW1nIHJvbGU9XCJwcmVzZW50YXRpb25cIiBzdHlsZT17e3dpZHRoOiAnNTAlJywgZGlzcGxheTogJ2lubGluZS1ibG9jayd9fSBzcmM9e2Ake2ltYWdlc1swXS5zcmN9YH1cblx0XHRcdFx0XHRcdFx0IGFsdD17aW1hZ2VzWzBdLnNyY30gb25DbGljaz17b25ab29tfS8+XG5cdFx0XHRcdFx0PGltZyByb2xlPVwicHJlc2VudGF0aW9uXCIgc3R5bGU9e3t3aWR0aDogJzUwJScsIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snfX0gc3JjPXtgJHtpbWFnZXNbMV0uc3JjfWB9XG5cdFx0XHRcdFx0XHRcdCBhbHQ9e2ltYWdlc1sxXS5zcmN9IG9uQ2xpY2s9e29uWm9vbX0vPlxuXHRcdFx0XHRcdHtzaG93SW1hZ2VzWm9vbSAmJiA8SW1hZ2VzWm9vbSBpbWFnZXM9e2ltYWdlc30gb25DbG9zZT17b25DbG9zZX0vPn1cblx0XHRcdFx0PC8+XG5cdFx0KVxuXHR9XG5cdHJldHVybiAoIC8vIOydtOuvuOyngOqwgCAzIOqwnCDsnbTsg4HsnbzrlYzsl5Qg7LKrIOuyiOynuCDsnbTrr7jsp4DripQg67O07Jes7KO866mwIOq3uCDsmIbsl5Ag642UIOuztOq4sCDrsoTtirzsnbQg65Ok7Ja06rCA7IScIO2ZleuMgO2VtOyEnCDrhJjqsqjrtJDslbztlahcblx0XHRcdDw+XG5cdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0PGltZyByb2xlPVwicHJlc2VudGF0aW9uXCIgc3R5bGU9e3t3aWR0aDogJzUwJSd9fSBzcmM9e2Ake2ltYWdlc1swXS5zcmN9YH0gYWx0PXtpbWFnZXNbMF0uc3JjfSBvbkNsaWNrPXtvblpvb219Lz5cblx0XHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0XHRcdHJvbGU9XCJwcmVzZW50YXRpb25cIlxuXHRcdFx0XHRcdFx0XHRzdHlsZT17e2Rpc3BsYXk6ICdpbmxpbmUtYmxvY2snLCB3aWR0aDogJzUwJScsIHRleHRBbGlnbjogJ2NlbnRlcicsIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnfX1cblx0XHRcdFx0XHRcdFx0b25DbGljaz17b25ab29tfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxQbHVzT3V0bGluZWQvPlxuXHRcdFx0XHRcdFx0PGJyLz5cblx0XHRcdFx0XHRcdHtpbWFnZXMubGVuZ3RoIC0gMX0g6rCc7J2YIOyCrOynhCDrjZQg67O06riwXG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHR7c2hvd0ltYWdlc1pvb20gJiYgPEltYWdlc1pvb20gaW1hZ2VzPXtpbWFnZXN9IG9uQ2xvc2U9e29uQ2xvc2V9Lz59XG5cdFx0XHQ8Lz5cblx0KVxufVxuUG9zdEltYWdlcy5wcm9wVHlwZXMgPSB7XG5cdGltYWdlczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCkuaXNSZXF1aXJlZCxcbn1cbmV4cG9ydCBkZWZhdWx0IFBvc3RJbWFnZXNcbiIsImltcG9ydCBSZWFjdCwge3VzZUNhbGxiYWNrfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtDYXJkLCBBdmF0YXIsIEJ1dHRvbn0gZnJvbSAnYW50ZCdcclxuaW1wb3J0IHt1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3J9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQge2xvZ291dFJlcXVlc3RBY3Rpb259IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9wcm9wLXR5cGVzXHJcbmNvbnN0IFVzZXJQcm9maWxlID0gKCkgPT4ge1xyXG5cdGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG5cdGNvbnN0IHttZSwgbG9nT3V0TG9hZGluZ30gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpXHJcblx0Y29uc3Qgb25Mb2dPdXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcblx0XHQvL3NldElzTG9nZ2VkSW4oZmFsc2UpXHJcblx0XHRkaXNwYXRjaChsb2dvdXRSZXF1ZXN0QWN0aW9uKCkpXHJcblx0fSwgW10pXHJcblxyXG5cdHJldHVybiAoXHJcblx0XHRcdDxDYXJkXHJcblx0XHRcdFx0XHRhY3Rpb25zPXtbIC8q66as7JWh7Yq47JeQ7IScIOuwsOyXtOuhnCBqc3gg7IKs7Jqp7ZWg65WQIGtleSDrtpnsl6zspJjslbztlagqL1xyXG5cdFx0XHRcdFx0XHQ8ZGl2IGtleT1cInR3aXRcIj5cclxuXHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPXtgL3VzZXIvJHttZS5pZH1gfT5cclxuXHRcdFx0XHRcdFx0XHRcdDxhPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHTsp7nsp7k8YnIvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7bWUuUG9zdHMubGVuZ3RofVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+LFxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGtleT1cImZvbGxvd2luZ1wiPlxyXG5cdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvcHJvZmlsZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGE+XHJcblx0XHRcdFx0XHRcdFx0XHRcdO2MlOuhnOycmTxici8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHttZS5Gb2xsb3dpbmdzLmxlbmd0aH1cclxuXHRcdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdDwvZGl2PixcclxuXHRcdFx0XHRcdFx0PGRpdiBrZXk9XCJmb2xsb3dlclwiPlxyXG5cdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvcHJvZmlsZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGE+XHJcblx0XHRcdFx0XHRcdFx0XHRcdO2MlOuhnOybjDxici8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHttZS5Gb2xsb3dlcnMubGVuZ3RofVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+LFxyXG5cdFx0XHRcdFx0XX1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdDxDYXJkLk1ldGFcclxuXHRcdFx0XHRcdFx0YXZhdGFyPXsoIC8vIOuCtCDslYTrsJTtg4Ag7YG066atIOyLnFxyXG5cdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj17YC91c2VyLyR7bWUuaWR9YH0gcHJlZmV0Y2g9e2ZhbHNlfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGE+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PEF2YXRhcj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHttZS5uaWNrbmFtZVswXX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0F2YXRhcj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0XHR0aXRsZT17bWUubmlja25hbWV9Lz5cclxuXHRcdFx0XHR7Lyppc0xvZ2dpbmdPdXQg7J20IHRydWUg66m0IOuyhO2KvOydtCDroZzrlKkg67KE7Yq87Jy866GcIOuwlOuAnCovfVxyXG5cdFx0XHRcdDxCdXR0b24gb25DbGljaz17b25Mb2dPdXR9IGxvYWRpbmc9e2xvZ091dExvYWRpbmd9PuuhnOq3uOyVhOybgzwvQnV0dG9uPlxyXG5cdFx0XHQ8L0NhcmQ+XHJcblx0KVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJQcm9maWxlXHJcbiIsImV4cG9ydCBjb25zdCBiYWNrVXJsID0gJ2h0dHA6Ly9hcGkudml0YW1pbjc3Ny5zaG9wJyIsImltcG9ydCB7dXNlU3RhdGUsIHVzZUNhbGxiYWNrfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChpbml0aWFsVmFsdWUgPSBudWxsKSA9PiB7IC8vIOy7pOyKpO2FgCBob29rc1xyXG5cdGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoaW5pdGlhbFZhbHVlKVxyXG5cdGNvbnN0IGhhbmRsZXIgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG5cdFx0c2V0VmFsdWUoZS50YXJnZXQudmFsdWUpXHJcblx0fSwgW10pXHJcblx0cmV0dXJuIFt2YWx1ZSwgaGFuZGxlciwgc2V0VmFsdWVdXHJcbn0iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIGFkZEJhc2VQYXRoLFxuICBhZGRMb2NhbGUsXG4gIGlzTG9jYWxVUkwsXG4gIE5leHRSb3V0ZXIsXG4gIFByZWZldGNoT3B0aW9ucyxcbiAgcmVzb2x2ZUhyZWYsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG50eXBlIFJlcXVpcmVkS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gbmV2ZXIgOiBLXG59W2tleW9mIFRdXG50eXBlIE9wdGlvbmFsS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gSyA6IG5ldmVyXG59W2tleW9mIFRdXG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxufVxudHlwZSBMaW5rUHJvcHNSZXF1aXJlZCA9IFJlcXVpcmVkS2V5czxMaW5rUHJvcHM+XG50eXBlIExpbmtQcm9wc09wdGlvbmFsID0gT3B0aW9uYWxLZXlzPExpbmtQcm9wcz5cblxubGV0IGNhY2hlZE9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuY29uc3QgbGlzdGVuZXJzID0gbmV3IE1hcDxFbGVtZW50LCAoKSA9PiB2b2lkPigpXG5jb25zdCBJbnRlcnNlY3Rpb25PYnNlcnZlciA9XG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyIDogbnVsbFxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIGdldE9ic2VydmVyKCk6IEludGVyc2VjdGlvbk9ic2VydmVyIHwgdW5kZWZpbmVkIHtcbiAgLy8gUmV0dXJuIHNoYXJlZCBpbnN0YW5jZSBvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBhbHJlYWR5IGNyZWF0ZWRcbiAgaWYgKGNhY2hlZE9ic2VydmVyKSB7XG4gICAgcmV0dXJuIGNhY2hlZE9ic2VydmVyXG4gIH1cblxuICAvLyBPbmx5IGNyZWF0ZSBzaGFyZWQgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgc3VwcG9ydGVkIGluIGJyb3dzZXJcbiAgaWYgKCFJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIHJldHVybiAoY2FjaGVkT2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXG4gICAgKGVudHJpZXMpID0+IHtcbiAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgaWYgKCFsaXN0ZW5lcnMuaGFzKGVudHJ5LnRhcmdldCkpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNiID0gbGlzdGVuZXJzLmdldChlbnRyeS50YXJnZXQpIVxuICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwKSB7XG4gICAgICAgICAgY2FjaGVkT2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBsaXN0ZW5lcnMuZGVsZXRlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBjYigpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICB7IHJvb3RNYXJnaW46ICcyMDBweCcgfVxuICApKVxufVxuXG5jb25zdCBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMgPSAoZWw6IEVsZW1lbnQsIGNiOiAoKSA9PiB2b2lkKSA9PiB7XG4gIGNvbnN0IG9ic2VydmVyID0gZ2V0T2JzZXJ2ZXIoKVxuICBpZiAoIW9ic2VydmVyKSB7XG4gICAgcmV0dXJuICgpID0+IHt9XG4gIH1cblxuICBvYnNlcnZlci5vYnNlcnZlKGVsKVxuICBsaXN0ZW5lcnMuc2V0KGVsLCBjYilcbiAgcmV0dXJuICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgfVxuICAgIGxpc3RlbmVycy5kZWxldGUoZWwpXG4gIH1cbn1cblxuZnVuY3Rpb24gcHJlZmV0Y2goXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBvcHRpb25zPzogUHJlZmV0Y2hPcHRpb25zXG4pOiB2b2lkIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm5cbiAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfSlcbiAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXNdID0gdHJ1ZVxufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQpIHtcbiAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgcmV0dXJuIChcbiAgICAodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICBldmVudC5tZXRhS2V5IHx8XG4gICAgZXZlbnQuY3RybEtleSB8fFxuICAgIGV2ZW50LnNoaWZ0S2V5IHx8XG4gICAgZXZlbnQuYWx0S2V5IHx8IC8vIHRyaWdnZXJzIHJlc291cmNlIGRvd25sb2FkXG4gICAgKGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKVxuICApXG59XG5cbmZ1bmN0aW9uIGxpbmtDbGlja2VkKFxuICBlOiBSZWFjdC5Nb3VzZUV2ZW50LFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgcmVwbGFjZT86IGJvb2xlYW4sXG4gIHNoYWxsb3c/OiBib29sZWFuLFxuICBzY3JvbGw/OiBib29sZWFuXG4pOiB2b2lkIHtcbiAgY29uc3QgeyBub2RlTmFtZSB9ID0gZS5jdXJyZW50VGFyZ2V0XG5cbiAgaWYgKG5vZGVOYW1lID09PSAnQScgJiYgKGlzTW9kaWZpZWRFdmVudChlKSB8fCAhaXNMb2NhbFVSTChocmVmKSkpIHtcbiAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbiAgICByZXR1cm5cbiAgfVxuXG4gIGUucHJldmVudERlZmF1bHQoKVxuXG4gIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICBpZiAoc2Nyb2xsID09IG51bGwpIHtcbiAgICBzY3JvbGwgPSBhcy5pbmRleE9mKCcjJykgPCAwXG4gIH1cblxuICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgcm91dGVyW3JlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7IHNoYWxsb3cgfSkudGhlbihcbiAgICAoc3VjY2VzczogYm9vbGVhbikgPT4ge1xuICAgICAgaWYgKCFzdWNjZXNzKSByZXR1cm5cbiAgICAgIGlmIChzY3JvbGwpIHtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKVxuICAgICAgfVxuICAgIH1cbiAgKVxufVxuXG5mdW5jdGlvbiBMaW5rKHByb3BzOiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjxMaW5rUHJvcHM+KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3M6IHtcbiAgICAgIGtleTogc3RyaW5nXG4gICAgICBleHBlY3RlZDogc3RyaW5nXG4gICAgICBhY3R1YWw6IHN0cmluZ1xuICAgIH0pIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAgICAgIGBGYWlsZWQgcHJvcCB0eXBlOiBUaGUgcHJvcCBcXGAke2FyZ3Mua2V5fVxcYCBleHBlY3RzIGEgJHthcmdzLmV4cGVjdGVkfSBpbiBcXGA8TGluaz5cXGAsIGJ1dCBnb3QgXFxgJHthcmdzLmFjdHVhbH1cXGAgaW5zdGVhZC5gICtcbiAgICAgICAgICAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgID8gXCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiXG4gICAgICAgICAgICA6ICcnKVxuICAgICAgKVxuICAgIH1cblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzUmVxdWlyZWQsIHRydWU+ID0ge1xuICAgICAgaHJlZjogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wczogTGlua1Byb3BzUmVxdWlyZWRbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgcmVxdWlyZWRQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNSZXF1aXJlZFtdXG4gICAgcmVxdWlyZWRQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc1JlcXVpcmVkKSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSAnaHJlZicpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzW2tleV0gPT0gbnVsbCB8fFxuICAgICAgICAgICh0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnKVxuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHByb3BzW2tleV0gPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzT3B0aW9uYWwsIHRydWU+ID0ge1xuICAgICAgYXM6IHRydWUsXG4gICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgc2Nyb2xsOiB0cnVlLFxuICAgICAgc2hhbGxvdzogdHJ1ZSxcbiAgICAgIHBhc3NIcmVmOiB0cnVlLFxuICAgICAgcHJlZmV0Y2g6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHM6IExpbmtQcm9wc09wdGlvbmFsW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIG9wdGlvbmFsUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzT3B0aW9uYWxbXVxuICAgIG9wdGlvbmFsUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNPcHRpb25hbCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSAmJlxuICAgICAgICAgIHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJlxuICAgICAgICAgIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0J1xuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGtleSA9PT0gJ3JlcGxhY2UnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Njcm9sbCcgfHxcbiAgICAgICAga2V5ID09PSAnc2hhbGxvdycgfHxcbiAgICAgICAga2V5ID09PSAncGFzc0hyZWYnIHx8XG4gICAgICAgIGtleSA9PT0gJ3ByZWZldGNoJ1xuICAgICAgKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICE9IG51bGwgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdib29sZWFuJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2Bib29sZWFuYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBjb25zdCBoYXNXYXJuZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpXG4gICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgIClcbiAgICB9XG4gIH1cbiAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuXG4gIGNvbnN0IFtjaGlsZEVsbSwgc2V0Q2hpbGRFbG1dID0gUmVhY3QudXNlU3RhdGU8RWxlbWVudD4oKVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHBhdGhuYW1lID0gKHJvdXRlciAmJiByb3V0ZXIucGF0aG5hbWUpIHx8ICcvJ1xuXG4gIGNvbnN0IHsgaHJlZiwgYXMgfSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmhyZWYsIHRydWUpXG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgIGFzOiBwcm9wcy5hc1xuICAgICAgICA/IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5hcylcbiAgICAgICAgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZixcbiAgICB9XG4gIH0sIFtwYXRobmFtZSwgcHJvcHMuaHJlZiwgcHJvcHMuYXNdKVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKFxuICAgICAgcCAmJlxuICAgICAgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgJiZcbiAgICAgIGNoaWxkRWxtICYmXG4gICAgICBjaGlsZEVsbS50YWdOYW1lICYmXG4gICAgICBpc0xvY2FsVVJMKGhyZWYpXG4gICAgKSB7XG4gICAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgICAgY29uc3QgaXNQcmVmZXRjaGVkID0gcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXNdXG4gICAgICBpZiAoIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgICByZXR1cm4gbGlzdGVuVG9JbnRlcnNlY3Rpb25zKGNoaWxkRWxtLCAoKSA9PiB7XG4gICAgICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcylcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtwLCBjaGlsZEVsbSwgaHJlZiwgYXMsIHJvdXRlcl0pXG5cbiAgbGV0IHsgY2hpbGRyZW4sIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCB9ID0gcHJvcHNcbiAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgY2hpbGRyZW4gPSA8YT57Y2hpbGRyZW59PC9hPlxuICB9XG5cbiAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gIGNvbnN0IGNoaWxkOiBhbnkgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICBjb25zdCBjaGlsZFByb3BzOiB7XG4gICAgb25Nb3VzZUVudGVyPzogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIGhyZWY/OiBzdHJpbmdcbiAgICByZWY/OiBhbnlcbiAgfSA9IHtcbiAgICByZWY6IChlbDogYW55KSA9PiB7XG4gICAgICBpZiAoZWwpIHNldENoaWxkRWxtKGVsKVxuXG4gICAgICBpZiAoY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWYpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkLnJlZihlbClcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBjaGlsZC5yZWYuY3VycmVudCA9IGVsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKVxuICAgICAgfVxuICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsKVxuICAgICAgfVxuICAgIH0sXG4gIH1cblxuICBpZiAocCkge1xuICAgIGNoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSlcbiAgICAgIH1cbiAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHsgcHJpb3JpdHk6IHRydWUgfSlcbiAgICB9XG4gIH1cblxuICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gIGlmIChwcm9wcy5wYXNzSHJlZiB8fCAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkpIHtcbiAgICBjaGlsZFByb3BzLmhyZWYgPSBhZGRCYXNlUGF0aChcbiAgICAgIGFkZExvY2FsZShhcywgcm91dGVyICYmIHJvdXRlci5sb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIuZGVmYXVsdExvY2FsZSlcbiAgICApXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCIvKipcbiAqIFJlbW92ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBpZiB0aGVyZSBpcyBvbmUuIFByZXNlcnZlcyB0aGUgcm9vdCBwYXRoIGAvYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoXG59XG5cbi8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIXG4gID8gKHBhdGg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpXG4gICAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gcGF0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLydcbiAgICAgIH1cbiAgICB9XG4gIDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2hcbiIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIsIHsgTmV4dFJvdXRlciB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgUm91dGVyQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dCdcblxudHlwZSBDbGFzc0FyZ3VtZW50czxUPiA9IFQgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGluZmVyIFUpID0+IGFueSA/IFUgOiBhbnlcblxudHlwZSBSb3V0ZXJBcmdzID0gQ2xhc3NBcmd1bWVudHM8dHlwZW9mIFJvdXRlcj5cblxudHlwZSBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IFJvdXRlciB8IG51bGxcbiAgcmVhZHlDYWxsYmFja3M6IEFycmF5PCgpID0+IGFueT5cbiAgcmVhZHkoY2I6ICgpID0+IGFueSk6IHZvaWRcbn1cblxuZXhwb3J0IHsgUm91dGVyLCBOZXh0Um91dGVyIH1cblxuZXhwb3J0IHR5cGUgU2luZ2xldG9uUm91dGVyID0gU2luZ2xldG9uUm91dGVyQmFzZSAmIE5leHRSb3V0ZXJcblxuY29uc3Qgc2luZ2xldG9uUm91dGVyOiBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IG51bGwsIC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG4gIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgcmVhZHkoY2I6ICgpID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpXG4gICAgfVxuICB9LFxufVxuXG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgJ3BhdGhuYW1lJyxcbiAgJ3JvdXRlJyxcbiAgJ3F1ZXJ5JyxcbiAgJ2FzUGF0aCcsXG4gICdjb21wb25lbnRzJyxcbiAgJ2lzRmFsbGJhY2snLFxuICAnYmFzZVBhdGgnLFxuICAnbG9jYWxlJyxcbiAgJ2xvY2FsZXMnLFxuICAnZGVmYXVsdExvY2FsZScsXG5dXG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICdoYXNoQ2hhbmdlQ29tcGxldGUnLFxuXVxuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgJ3B1c2gnLFxuICAncmVwbGFjZScsXG4gICdyZWxvYWQnLFxuICAnYmFjaycsXG4gICdwcmVmZXRjaCcsXG4gICdiZWZvcmVQb3BTdGF0ZScsXG5dXG5cbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gIGdldCgpIHtcbiAgICByZXR1cm4gUm91dGVyLmV2ZW50c1xuICB9LFxufSlcblxudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbiAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0gYXMgc3RyaW5nXG4gICAgfSxcbiAgfSlcbn0pXG5cbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbiAgOyhzaW5nbGV0b25Sb3V0ZXIgYXMgYW55KVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICB9XG59KVxuXG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpID0+IHtcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncykgPT4ge1xuICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoXG4gICAgICAgIDFcbiAgICAgICl9YFxuICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlciBhcyBhbnlcbiAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIGdldFJvdXRlcigpOiBSb3V0ZXIge1xuICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICBjb25zdCBtZXNzYWdlID1cbiAgICAgICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArXG4gICAgICAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG5leHBvcnQgZGVmYXVsdCBzaW5nbGV0b25Sb3V0ZXIgYXMgU2luZ2xldG9uUm91dGVyXG5cbi8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhSb3V0ZXIgfSBmcm9tICcuL3dpdGgtcm91dGVyJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUm91dGVyKCk6IE5leHRSb3V0ZXIge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChSb3V0ZXJDb250ZXh0KVxufVxuXG4vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcblxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiB1c2UgaW5zaWRlIHRoZSBzZXJ2ZXIuXG5leHBvcnQgY29uc3QgY3JlYXRlUm91dGVyID0gKC4uLmFyZ3M6IFJvdXRlckFyZ3MpOiBSb3V0ZXIgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IFJvdXRlciguLi5hcmdzKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IGNiKCkpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdXG5cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXI6IFJvdXRlcik6IE5leHRSb3V0ZXIge1xuICBjb25zdCBfcm91dGVyID0gcm91dGVyIGFzIGFueVxuICBjb25zdCBpbnN0YW5jZSA9IHt9IGFzIGFueVxuXG4gIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpIHtcbiAgICBpZiAodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgQXJyYXkuaXNBcnJheShfcm91dGVyW3Byb3BlcnR5XSkgPyBbXSA6IHt9LFxuICAgICAgICBfcm91dGVyW3Byb3BlcnR5XVxuICAgICAgKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyW3Byb3BlcnR5XVxuICB9XG5cbiAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICBpbnN0YW5jZS5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgcmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmV4dENvbXBvbmVudFR5cGUsIE5leHRQYWdlQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IE5leHRSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG5leHBvcnQgdHlwZSBXaXRoUm91dGVyUHJvcHMgPSB7XG4gIHJvdXRlcjogTmV4dFJvdXRlclxufVxuXG5leHBvcnQgdHlwZSBFeGNsdWRlUm91dGVyUHJvcHM8UD4gPSBQaWNrPFxuICBQLFxuICBFeGNsdWRlPGtleW9mIFAsIGtleW9mIFdpdGhSb3V0ZXJQcm9wcz5cbj5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFJvdXRlcjxcbiAgUCBleHRlbmRzIFdpdGhSb3V0ZXJQcm9wcyxcbiAgQyA9IE5leHRQYWdlQ29udGV4dFxuPihcbiAgQ29tcG9zZWRDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPEMsIGFueSwgUD5cbik6IFJlYWN0LkNvbXBvbmVudFR5cGU8RXhjbHVkZVJvdXRlclByb3BzPFA+PiB7XG4gIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzOiBhbnkpIHtcbiAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHJvdXRlcj17dXNlUm91dGVyKCl9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIDsoV2l0aFJvdXRlcldyYXBwZXIgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzID0gKENvbXBvc2VkQ29tcG9uZW50IGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogVG9rZW5pemUgaW5wdXQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBsZXhlcihzdHIpIHtcbiAgICB2YXIgdG9rZW5zID0gW107XG4gICAgdmFyIGkgPSAwO1xuICAgIHdoaWxlIChpIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICB2YXIgY2hhciA9IHN0cltpXTtcbiAgICAgICAgaWYgKGNoYXIgPT09IFwiKlwiIHx8IGNoYXIgPT09IFwiK1wiIHx8IGNoYXIgPT09IFwiP1wiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiTU9ESUZJRVJcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIlxcXFxcIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkVTQ0FQRURfQ0hBUlwiLCBpbmRleDogaSsrLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJ7XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJPUEVOXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJ9XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJDTE9TRVwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiOlwiKSB7XG4gICAgICAgICAgICB2YXIgbmFtZSA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgaiA9IGkgKyAxO1xuICAgICAgICAgICAgd2hpbGUgKGogPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvZGUgPSBzdHIuY2hhckNvZGVBdChqKTtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgLy8gYDAtOWBcbiAgICAgICAgICAgICAgICAoY29kZSA+PSA0OCAmJiBjb2RlIDw9IDU3KSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgQS1aYFxuICAgICAgICAgICAgICAgICAgICAoY29kZSA+PSA2NSAmJiBjb2RlIDw9IDkwKSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgYS16YFxuICAgICAgICAgICAgICAgICAgICAoY29kZSA+PSA5NyAmJiBjb2RlIDw9IDEyMikgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYF9gXG4gICAgICAgICAgICAgICAgICAgIGNvZGUgPT09IDk1KSB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWUgKz0gc3RyW2orK107XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghbmFtZSlcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWlzc2luZyBwYXJhbWV0ZXIgbmFtZSBhdCBcIiArIGkpO1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk5BTUVcIiwgaW5kZXg6IGksIHZhbHVlOiBuYW1lIH0pO1xuICAgICAgICAgICAgaSA9IGo7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgIHZhciBjb3VudCA9IDE7XG4gICAgICAgICAgICB2YXIgcGF0dGVybiA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgaiA9IGkgKyAxO1xuICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCI/XCIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUGF0dGVybiBjYW5ub3Qgc3RhcnQgd2l0aCBcXFwiP1xcXCIgYXQgXCIgKyBqKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdoaWxlIChqIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiXFxcXFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm4gKz0gc3RyW2orK10gKyBzdHJbaisrXTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiKVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50LS07XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb3VudCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaisrO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoc3RyW2pdID09PSBcIihcIikge1xuICAgICAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RyW2ogKyAxXSAhPT0gXCI/XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYXB0dXJpbmcgZ3JvdXBzIGFyZSBub3QgYWxsb3dlZCBhdCBcIiArIGopO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhdHRlcm4gKz0gc3RyW2orK107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY291bnQpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVuYmFsYW5jZWQgcGF0dGVybiBhdCBcIiArIGkpO1xuICAgICAgICAgICAgaWYgKCFwYXR0ZXJuKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNaXNzaW5nIHBhdHRlcm4gYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJQQVRURVJOXCIsIGluZGV4OiBpLCB2YWx1ZTogcGF0dGVybiB9KTtcbiAgICAgICAgICAgIGkgPSBqO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkNIQVJcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICB9XG4gICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkVORFwiLCBpbmRleDogaSwgdmFsdWU6IFwiXCIgfSk7XG4gICAgcmV0dXJuIHRva2Vucztcbn1cbi8qKlxuICogUGFyc2UgYSBzdHJpbmcgZm9yIHRoZSByYXcgdG9rZW5zLlxuICovXG5mdW5jdGlvbiBwYXJzZShzdHIsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciB0b2tlbnMgPSBsZXhlcihzdHIpO1xuICAgIHZhciBfYSA9IG9wdGlvbnMucHJlZml4ZXMsIHByZWZpeGVzID0gX2EgPT09IHZvaWQgMCA/IFwiLi9cIiA6IF9hO1xuICAgIHZhciBkZWZhdWx0UGF0dGVybiA9IFwiW15cIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCBcIi8jP1wiKSArIFwiXSs/XCI7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHZhciBrZXkgPSAwO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgcGF0aCA9IFwiXCI7XG4gICAgdmFyIHRyeUNvbnN1bWUgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICBpZiAoaSA8IHRva2Vucy5sZW5ndGggJiYgdG9rZW5zW2ldLnR5cGUgPT09IHR5cGUpXG4gICAgICAgICAgICByZXR1cm4gdG9rZW5zW2krK10udmFsdWU7XG4gICAgfTtcbiAgICB2YXIgbXVzdENvbnN1bWUgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICB2YXIgdmFsdWUgPSB0cnlDb25zdW1lKHR5cGUpO1xuICAgICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgdmFyIF9hID0gdG9rZW5zW2ldLCBuZXh0VHlwZSA9IF9hLnR5cGUsIGluZGV4ID0gX2EuaW5kZXg7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmV4cGVjdGVkIFwiICsgbmV4dFR5cGUgKyBcIiBhdCBcIiArIGluZGV4ICsgXCIsIGV4cGVjdGVkIFwiICsgdHlwZSk7XG4gICAgfTtcbiAgICB2YXIgY29uc3VtZVRleHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBcIlwiO1xuICAgICAgICB2YXIgdmFsdWU7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICB3aGlsZSAoKHZhbHVlID0gdHJ5Q29uc3VtZShcIkNIQVJcIikgfHwgdHJ5Q29uc3VtZShcIkVTQ0FQRURfQ0hBUlwiKSkpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgd2hpbGUgKGkgPCB0b2tlbnMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaGFyID0gdHJ5Q29uc3VtZShcIkNIQVJcIik7XG4gICAgICAgIHZhciBuYW1lID0gdHJ5Q29uc3VtZShcIk5BTUVcIik7XG4gICAgICAgIHZhciBwYXR0ZXJuID0gdHJ5Q29uc3VtZShcIlBBVFRFUk5cIik7XG4gICAgICAgIGlmIChuYW1lIHx8IHBhdHRlcm4pIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBjaGFyIHx8IFwiXCI7XG4gICAgICAgICAgICBpZiAocHJlZml4ZXMuaW5kZXhPZihwcmVmaXgpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gcHJlZml4O1xuICAgICAgICAgICAgICAgIHByZWZpeCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgICAgIHBhdGggPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUgfHwga2V5KyssXG4gICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IHBhdHRlcm4gfHwgZGVmYXVsdFBhdHRlcm4sXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUoXCJNT0RJRklFUlwiKSB8fCBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciB2YWx1ZSA9IGNoYXIgfHwgdHJ5Q29uc3VtZShcIkVTQ0FQRURfQ0hBUlwiKTtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBwYXRoICs9IHZhbHVlO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgcGF0aCA9IFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG9wZW4gPSB0cnlDb25zdW1lKFwiT1BFTlwiKTtcbiAgICAgICAgaWYgKG9wZW4pIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBjb25zdW1lVGV4dCgpO1xuICAgICAgICAgICAgdmFyIG5hbWVfMSA9IHRyeUNvbnN1bWUoXCJOQU1FXCIpIHx8IFwiXCI7XG4gICAgICAgICAgICB2YXIgcGF0dGVybl8xID0gdHJ5Q29uc3VtZShcIlBBVFRFUk5cIikgfHwgXCJcIjtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBjb25zdW1lVGV4dCgpO1xuICAgICAgICAgICAgbXVzdENvbnN1bWUoXCJDTE9TRVwiKTtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lXzEgfHwgKHBhdHRlcm5fMSA/IGtleSsrIDogXCJcIiksXG4gICAgICAgICAgICAgICAgcGF0dGVybjogbmFtZV8xICYmICFwYXR0ZXJuXzEgPyBkZWZhdWx0UGF0dGVybiA6IHBhdHRlcm5fMSxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgICAgICBzdWZmaXg6IHN1ZmZpeCxcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogdHJ5Q29uc3VtZShcIk1PRElGSUVSXCIpIHx8IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgbXVzdENvbnN1bWUoXCJFTkRcIik7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnRzLnBhcnNlID0gcGFyc2U7XG4vKipcbiAqIENvbXBpbGUgYSBzdHJpbmcgdG8gYSB0ZW1wbGF0ZSBmdW5jdGlvbiBmb3IgdGhlIHBhdGguXG4gKi9cbmZ1bmN0aW9uIGNvbXBpbGUoc3RyLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRva2Vuc1RvRnVuY3Rpb24ocGFyc2Uoc3RyLCBvcHRpb25zKSwgb3B0aW9ucyk7XG59XG5leHBvcnRzLmNvbXBpbGUgPSBjb21waWxlO1xuLyoqXG4gKiBFeHBvc2UgYSBtZXRob2QgZm9yIHRyYW5zZm9ybWluZyB0b2tlbnMgaW50byB0aGUgcGF0aCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9GdW5jdGlvbih0b2tlbnMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciByZUZsYWdzID0gZmxhZ3Mob3B0aW9ucyk7XG4gICAgdmFyIF9hID0gb3B0aW9ucy5lbmNvZGUsIGVuY29kZSA9IF9hID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9hLCBfYiA9IG9wdGlvbnMudmFsaWRhdGUsIHZhbGlkYXRlID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYjtcbiAgICAvLyBDb21waWxlIGFsbCB0aGUgdG9rZW5zIGludG8gcmVnZXhwcy5cbiAgICB2YXIgbWF0Y2hlcyA9IHRva2Vucy5tYXAoZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUmVnRXhwKFwiXig/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSRcIiwgcmVGbGFncyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgdmFyIHBhdGggPSBcIlwiO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zW2ldO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW47XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBkYXRhID8gZGF0YVt0b2tlbi5uYW1lXSA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHZhciBvcHRpb25hbCA9IHRva2VuLm1vZGlmaWVyID09PSBcIj9cIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCI7XG4gICAgICAgICAgICB2YXIgcmVwZWF0ID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIitcIjtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGlmICghcmVwZWF0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYW4gYXJyYXlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbmFsKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG5vdCBiZSBlbXB0eVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB2YWx1ZS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2VnbWVudCA9IGVuY29kZSh2YWx1ZVtqXSwgdG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGUgJiYgIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIGFsbCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG1hdGNoIFxcXCJcIiArIHRva2VuLnBhdHRlcm4gKyBcIlxcXCIsIGJ1dCBnb3QgXFxcIlwiICsgc2VnbWVudCArIFwiXFxcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeCArIHNlZ21lbnQgKyB0b2tlbi5zdWZmaXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VnbWVudCA9IGVuY29kZShTdHJpbmcodmFsdWUpLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbWF0Y2ggXFxcIlwiICsgdG9rZW4ucGF0dGVybiArIFwiXFxcIiwgYnV0IGdvdCBcXFwiXCIgKyBzZWdtZW50ICsgXCJcXFwiXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeCArIHNlZ21lbnQgKyB0b2tlbi5zdWZmaXg7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0aW9uYWwpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB2YXIgdHlwZU9mTWVzc2FnZSA9IHJlcGVhdCA/IFwiYW4gYXJyYXlcIiA6IFwiYSBzdHJpbmdcIjtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIGJlIFwiICsgdHlwZU9mTWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfTtcbn1cbmV4cG9ydHMudG9rZW5zVG9GdW5jdGlvbiA9IHRva2Vuc1RvRnVuY3Rpb247XG4vKipcbiAqIENyZWF0ZSBwYXRoIG1hdGNoIGZ1bmN0aW9uIGZyb20gYHBhdGgtdG8tcmVnZXhwYCBzcGVjLlxuICovXG5mdW5jdGlvbiBtYXRjaChzdHIsIG9wdGlvbnMpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIHZhciByZSA9IHBhdGhUb1JlZ2V4cChzdHIsIGtleXMsIG9wdGlvbnMpO1xuICAgIHJldHVybiByZWdleHBUb0Z1bmN0aW9uKHJlLCBrZXlzLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMubWF0Y2ggPSBtYXRjaDtcbi8qKlxuICogQ3JlYXRlIGEgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgb3V0cHV0LlxuICovXG5mdW5jdGlvbiByZWdleHBUb0Z1bmN0aW9uKHJlLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgX2EgPSBvcHRpb25zLmRlY29kZSwgZGVjb2RlID0gX2EgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2E7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwYXRobmFtZSkge1xuICAgICAgICB2YXIgbSA9IHJlLmV4ZWMocGF0aG5hbWUpO1xuICAgICAgICBpZiAoIW0pXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHZhciBwYXRoID0gbVswXSwgaW5kZXggPSBtLmluZGV4O1xuICAgICAgICB2YXIgcGFyYW1zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICBpZiAobVtpXSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgIHJldHVybiBcImNvbnRpbnVlXCI7XG4gICAgICAgICAgICB2YXIga2V5ID0ga2V5c1tpIC0gMV07XG4gICAgICAgICAgICBpZiAoa2V5Lm1vZGlmaWVyID09PSBcIipcIiB8fCBrZXkubW9kaWZpZXIgPT09IFwiK1wiKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW2tleS5uYW1lXSA9IG1baV0uc3BsaXQoa2V5LnByZWZpeCArIGtleS5zdWZmaXgpLm1hcChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlY29kZSh2YWx1ZSwga2V5KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBkZWNvZGUobVtpXSwga2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBtLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBfbG9vcF8xKGkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHBhdGg6IHBhdGgsIGluZGV4OiBpbmRleCwgcGFyYW1zOiBwYXJhbXMgfTtcbiAgICB9O1xufVxuZXhwb3J0cy5yZWdleHBUb0Z1bmN0aW9uID0gcmVnZXhwVG9GdW5jdGlvbjtcbi8qKlxuICogRXNjYXBlIGEgcmVndWxhciBleHByZXNzaW9uIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gZXNjYXBlU3RyaW5nKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvKFsuKyo/PV4hOiR7fSgpW1xcXXwvXFxcXF0pL2csIFwiXFxcXCQxXCIpO1xufVxuLyoqXG4gKiBHZXQgdGhlIGZsYWdzIGZvciBhIHJlZ2V4cCBmcm9tIHRoZSBvcHRpb25zLlxuICovXG5mdW5jdGlvbiBmbGFncyhvcHRpb25zKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMgJiYgb3B0aW9ucy5zZW5zaXRpdmUgPyBcIlwiIDogXCJpXCI7XG59XG4vKipcbiAqIFB1bGwgb3V0IGtleXMgZnJvbSBhIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9SZWdleHAocGF0aCwga2V5cykge1xuICAgIGlmICgha2V5cylcbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgLy8gVXNlIGEgbmVnYXRpdmUgbG9va2FoZWFkIHRvIG1hdGNoIG9ubHkgY2FwdHVyaW5nIGdyb3Vwcy5cbiAgICB2YXIgZ3JvdXBzID0gcGF0aC5zb3VyY2UubWF0Y2goL1xcKCg/IVxcPykvZyk7XG4gICAgaWYgKGdyb3Vwcykge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGdyb3Vwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAga2V5cy5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBpLFxuICAgICAgICAgICAgICAgIHByZWZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBzdWZmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IFwiXCIsXG4gICAgICAgICAgICAgICAgcGF0dGVybjogXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG59XG4vKipcbiAqIFRyYW5zZm9ybSBhbiBhcnJheSBpbnRvIGEgcmVnZXhwLlxuICovXG5mdW5jdGlvbiBhcnJheVRvUmVnZXhwKHBhdGhzLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgdmFyIHBhcnRzID0gcGF0aHMubWFwKGZ1bmN0aW9uIChwYXRoKSB7IHJldHVybiBwYXRoVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykuc291cmNlOyB9KTtcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChcIig/OlwiICsgcGFydHMuam9pbihcInxcIikgKyBcIilcIiwgZmxhZ3Mob3B0aW9ucykpO1xufVxuLyoqXG4gKiBDcmVhdGUgYSBwYXRoIHJlZ2V4cCBmcm9tIHN0cmluZyBpbnB1dC5cbiAqL1xuZnVuY3Rpb24gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICAgIHJldHVybiB0b2tlbnNUb1JlZ2V4cChwYXJzZShwYXRoLCBvcHRpb25zKSwga2V5cywgb3B0aW9ucyk7XG59XG4vKipcbiAqIEV4cG9zZSBhIGZ1bmN0aW9uIGZvciB0YWtpbmcgdG9rZW5zIGFuZCByZXR1cm5pbmcgYSBSZWdFeHAuXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvUmVnZXhwKHRva2Vucywga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5zdHJpY3QsIHN0cmljdCA9IF9hID09PSB2b2lkIDAgPyBmYWxzZSA6IF9hLCBfYiA9IG9wdGlvbnMuc3RhcnQsIHN0YXJ0ID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYiwgX2MgPSBvcHRpb25zLmVuZCwgZW5kID0gX2MgPT09IHZvaWQgMCA/IHRydWUgOiBfYywgX2QgPSBvcHRpb25zLmVuY29kZSwgZW5jb2RlID0gX2QgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2Q7XG4gICAgdmFyIGVuZHNXaXRoID0gXCJbXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5lbmRzV2l0aCB8fCBcIlwiKSArIFwiXXwkXCI7XG4gICAgdmFyIGRlbGltaXRlciA9IFwiW1wiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVyIHx8IFwiLyM/XCIpICsgXCJdXCI7XG4gICAgdmFyIHJvdXRlID0gc3RhcnQgPyBcIl5cIiA6IFwiXCI7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIHRoZSB0b2tlbnMgYW5kIGNyZWF0ZSBvdXIgcmVnZXhwIHN0cmluZy5cbiAgICBmb3IgKHZhciBfaSA9IDAsIHRva2Vuc18xID0gdG9rZW5zOyBfaSA8IHRva2Vuc18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNfMVtfaV07XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4pKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuLnByZWZpeCkpO1xuICAgICAgICAgICAgdmFyIHN1ZmZpeCA9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4uc3VmZml4KSk7XG4gICAgICAgICAgICBpZiAodG9rZW4ucGF0dGVybikge1xuICAgICAgICAgICAgICAgIGlmIChrZXlzKVxuICAgICAgICAgICAgICAgICAgICBrZXlzLnB1c2godG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmIChwcmVmaXggfHwgc3VmZml4KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b2tlbi5tb2RpZmllciA9PT0gXCIrXCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbW9kID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiID8gXCI/XCIgOiBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIFwiKCg/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSg/OlwiICsgc3VmZml4ICsgcHJlZml4ICsgXCIoPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikpKilcIiArIHN1ZmZpeCArIFwiKVwiICsgbW9kO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIFwiKFwiICsgdG9rZW4ucGF0dGVybiArIFwiKVwiICsgc3VmZml4ICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgc3VmZml4ICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoZW5kKSB7XG4gICAgICAgIGlmICghc3RyaWN0KVxuICAgICAgICAgICAgcm91dGUgKz0gZGVsaW1pdGVyICsgXCI/XCI7XG4gICAgICAgIHJvdXRlICs9ICFvcHRpb25zLmVuZHNXaXRoID8gXCIkXCIgOiBcIig/PVwiICsgZW5kc1dpdGggKyBcIilcIjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBlbmRUb2tlbiA9IHRva2Vuc1t0b2tlbnMubGVuZ3RoIC0gMV07XG4gICAgICAgIHZhciBpc0VuZERlbGltaXRlZCA9IHR5cGVvZiBlbmRUb2tlbiA9PT0gXCJzdHJpbmdcIlxuICAgICAgICAgICAgPyBkZWxpbWl0ZXIuaW5kZXhPZihlbmRUb2tlbltlbmRUb2tlbi5sZW5ndGggLSAxXSkgPiAtMVxuICAgICAgICAgICAgOiAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgICAgICBlbmRUb2tlbiA9PT0gdW5kZWZpbmVkO1xuICAgICAgICBpZiAoIXN0cmljdCkge1xuICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIGRlbGltaXRlciArIFwiKD89XCIgKyBlbmRzV2l0aCArIFwiKSk/XCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc0VuZERlbGltaXRlZCkge1xuICAgICAgICAgICAgcm91dGUgKz0gXCIoPz1cIiArIGRlbGltaXRlciArIFwifFwiICsgZW5kc1dpdGggKyBcIilcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3IFJlZ0V4cChyb3V0ZSwgZmxhZ3Mob3B0aW9ucykpO1xufVxuZXhwb3J0cy50b2tlbnNUb1JlZ2V4cCA9IHRva2Vuc1RvUmVnZXhwO1xuLyoqXG4gKiBOb3JtYWxpemUgdGhlIGdpdmVuIHBhdGggc3RyaW5nLCByZXR1cm5pbmcgYSByZWd1bGFyIGV4cHJlc3Npb24uXG4gKlxuICogQW4gZW1wdHkgYXJyYXkgY2FuIGJlIHBhc3NlZCBpbiBmb3IgdGhlIGtleXMsIHdoaWNoIHdpbGwgaG9sZCB0aGVcbiAqIHBsYWNlaG9sZGVyIGtleSBkZXNjcmlwdGlvbnMuIEZvciBleGFtcGxlLCB1c2luZyBgL3VzZXIvOmlkYCwgYGtleXNgIHdpbGxcbiAqIGNvbnRhaW4gYFt7IG5hbWU6ICdpZCcsIGRlbGltaXRlcjogJy8nLCBvcHRpb25hbDogZmFsc2UsIHJlcGVhdDogZmFsc2UgfV1gLlxuICovXG5mdW5jdGlvbiBwYXRoVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChwYXRoIGluc3RhbmNlb2YgUmVnRXhwKVxuICAgICAgICByZXR1cm4gcmVnZXhwVG9SZWdleHAocGF0aCwga2V5cyk7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocGF0aCkpXG4gICAgICAgIHJldHVybiBhcnJheVRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpO1xuICAgIHJldHVybiBzdHJpbmdUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMucGF0aFRvUmVnZXhwID0gcGF0aFRvUmVnZXhwO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5cbnR5cGUgSGFuZGxlciA9ICguLi5ldnRzOiBhbnlbXSkgPT4gdm9pZFxuXG5leHBvcnQgdHlwZSBNaXR0RW1pdHRlciA9IHtcbiAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pOiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pdHQoKTogTWl0dEVtaXR0ZXIge1xuICBjb25zdCBhbGw6IHsgW3M6IHN0cmluZ106IEhhbmRsZXJbXSB9ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIHJldHVybiB7XG4gICAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICA7KGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpXG4gICAgfSxcblxuICAgIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICA7KGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXI6IEhhbmRsZXIpID0+IHtcbiAgICAgICAgaGFuZGxlciguLi5ldnRzKVxuICAgICAgfSlcbiAgICB9LFxuICB9XG59XG4iLCIvKiBnbG9iYWwgX19ORVhUX0RBVEFfXyAqL1xuLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoLFxuICByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCxcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaCdcbmltcG9ydCB7IEdvb2RQYWdlQ2FjaGUsIFN0eWxlU2hlZXRUdXBsZSB9IGZyb20gJy4uLy4uLy4uL2NsaWVudC9wYWdlLWxvYWRlcidcbmltcG9ydCB7IGRlbm9ybWFsaXplUGFnZVBhdGggfSBmcm9tICcuLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoJ1xuaW1wb3J0IG1pdHQsIHsgTWl0dEVtaXR0ZXIgfSBmcm9tICcuLi9taXR0J1xuaW1wb3J0IHtcbiAgQXBwQ29udGV4dFR5cGUsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRMb2NhdGlvbk9yaWdpbixcbiAgZ2V0VVJMLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBOZXh0UGFnZUNvbnRleHQsXG4gIFNULFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSAnLi91dGlscy9pcy1keW5hbWljJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vdXRpbHMvcXVlcnlzdHJpbmcnXG5pbXBvcnQgcmVzb2x2ZVJld3JpdGVzIGZyb20gJy4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuaW1wb3J0IGVzY2FwZVBhdGhEZWxpbWl0ZXJzIGZyb20gJy4vdXRpbHMvZXNjYXBlLXBhdGgtZGVsaW1pdGVycydcblxuaW50ZXJmYWNlIFRyYW5zaXRpb25PcHRpb25zIHtcbiAgc2hhbGxvdz86IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIE5leHRIaXN0b3J5U3RhdGUge1xuICB1cmw6IHN0cmluZ1xuICBhczogc3RyaW5nXG4gIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG59XG5cbnR5cGUgSGlzdG9yeVN0YXRlID0gbnVsbCB8IHsgX19OOiBmYWxzZSB9IHwgKHsgX19OOiB0cnVlIH0gJiBOZXh0SGlzdG9yeVN0YXRlKVxuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSwge1xuICAgIGNhbmNlbGxlZDogdHJ1ZSxcbiAgfSlcbn1cblxuZnVuY3Rpb24gYWRkUGF0aFByZWZpeChwYXRoOiBzdHJpbmcsIHByZWZpeD86IHN0cmluZykge1xuICByZXR1cm4gcHJlZml4ICYmIHBhdGguc3RhcnRzV2l0aCgnLycpXG4gICAgPyBwYXRoID09PSAnLydcbiAgICAgID8gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gocHJlZml4KVxuICAgICAgOiBgJHtwcmVmaXh9JHtwYXRofWBcbiAgICA6IHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZExvY2FsZShcbiAgcGF0aDogc3RyaW5nLFxuICBsb2NhbGU/OiBzdHJpbmcsXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbikge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX2kxOG5fU1VQUE9SVCkge1xuICAgIHJldHVybiBsb2NhbGUgJiYgbG9jYWxlICE9PSBkZWZhdWx0TG9jYWxlICYmICFwYXRoLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlKVxuICAgICAgPyBhZGRQYXRoUHJlZml4KHBhdGgsICcvJyArIGxvY2FsZSlcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxMb2NhbGUocGF0aDogc3RyaW5nLCBsb2NhbGU/OiBzdHJpbmcpIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9pMThuX1NVUFBPUlQpIHtcbiAgICByZXR1cm4gbG9jYWxlICYmIHBhdGguc3RhcnRzV2l0aCgnLycgKyBsb2NhbGUpXG4gICAgICA/IHBhdGguc3Vic3RyKGxvY2FsZS5sZW5ndGggKyAxKSB8fCAnLydcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIHBhdGggPT09IGJhc2VQYXRoIHx8IHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCArICcvJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gIHJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsIGJhc2VQYXRoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKSB8fCAnLydcbn1cblxuLyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgcm91dGFibGUgYnkgdGhlIE5leHQuanMgcm91dGVyIChicm93c2VyIG9ubHkpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSkgcmV0dXJuIHRydWVcbiAgdHJ5IHtcbiAgICAvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbiAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbilcbiAgICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpbiAmJiBoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSlcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKFxuICByb3V0ZTogc3RyaW5nLFxuICBhc1BhdGhuYW1lOiBzdHJpbmcsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKSB7XG4gIGxldCBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnXG5cbiAgY29uc3QgZHluYW1pY1JlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgY29uc3QgZHluYW1pY0dyb3VwcyA9IGR5bmFtaWNSZWdleC5ncm91cHNcbiAgY29uc3QgZHluYW1pY01hdGNoZXMgPVxuICAgIC8vIFRyeSB0byBtYXRjaCB0aGUgZHluYW1pYyByb3V0ZSBhZ2FpbnN0IHRoZSBhc1BhdGhcbiAgICAoYXNQYXRobmFtZSAhPT0gcm91dGUgPyBnZXRSb3V0ZU1hdGNoZXIoZHluYW1pY1JlZ2V4KShhc1BhdGhuYW1lKSA6ICcnKSB8fFxuICAgIC8vIEZhbGwgYmFjayB0byByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaHJlZlxuICAgIC8vIFRPRE86IHNob3VsZCB0aGlzIHRha2UgcHJpb3JpdHk7IGFsc28gbmVlZCB0byBjaGFuZ2UgaW4gdGhlIHJvdXRlci5cbiAgICBxdWVyeVxuXG4gIGludGVycG9sYXRlZFJvdXRlID0gcm91dGVcbiAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmtleXMoZHluYW1pY0dyb3VwcylcblxuICBpZiAoXG4gICAgIXBhcmFtcy5ldmVyeSgocGFyYW0pID0+IHtcbiAgICAgIGxldCB2YWx1ZSA9IGR5bmFtaWNNYXRjaGVzW3BhcmFtXSB8fCAnJ1xuICAgICAgY29uc3QgeyByZXBlYXQsIG9wdGlvbmFsIH0gPSBkeW5hbWljR3JvdXBzW3BhcmFtXVxuXG4gICAgICAvLyBzdXBwb3J0IHNpbmdsZS1sZXZlbCBjYXRjaC1hbGxcbiAgICAgIC8vIFRPRE86IG1vcmUgcm9idXN0IGhhbmRsaW5nIGZvciB1c2VyLWVycm9yIChwYXNzaW5nIGAvYClcbiAgICAgIGxldCByZXBsYWNlZCA9IGBbJHtyZXBlYXQgPyAnLi4uJyA6ICcnfSR7cGFyYW19XWBcbiAgICAgIGlmIChvcHRpb25hbCkge1xuICAgICAgICByZXBsYWNlZCA9IGAkeyF2YWx1ZSA/ICcvJyA6ICcnfVske3JlcGxhY2VkfV1gXG4gICAgICB9XG4gICAgICBpZiAocmVwZWF0ICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkgdmFsdWUgPSBbdmFsdWVdXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIChvcHRpb25hbCB8fCBwYXJhbSBpbiBkeW5hbWljTWF0Y2hlcykgJiZcbiAgICAgICAgLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG4gICAgICAgIChpbnRlcnBvbGF0ZWRSb3V0ZSA9XG4gICAgICAgICAgaW50ZXJwb2xhdGVkUm91dGUhLnJlcGxhY2UoXG4gICAgICAgICAgICByZXBsYWNlZCxcbiAgICAgICAgICAgIHJlcGVhdFxuICAgICAgICAgICAgICA/ICh2YWx1ZSBhcyBzdHJpbmdbXSkubWFwKGVzY2FwZVBhdGhEZWxpbWl0ZXJzKS5qb2luKCcvJylcbiAgICAgICAgICAgICAgOiBlc2NhcGVQYXRoRGVsaW1pdGVycyh2YWx1ZSBhcyBzdHJpbmcpXG4gICAgICAgICAgKSB8fCAnLycpXG4gICAgICApXG4gICAgfSlcbiAgKSB7XG4gICAgaW50ZXJwb2xhdGVkUm91dGUgPSAnJyAvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuXG4gICAgLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbiAgICAvLyBkZXZlbG9wbWVudCBpbiB0aGUgYDxMaW5rPmAgY29tcG9uZW50IGRpcmVjdGx5LlxuICB9XG4gIHJldHVybiB7XG4gICAgcGFyYW1zLFxuICAgIHJlc3VsdDogaW50ZXJwb2xhdGVkUm91dGUsXG4gIH1cbn1cblxuZnVuY3Rpb24gb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSwgcGFyYW1zOiBzdHJpbmdbXSkge1xuICBjb25zdCBmaWx0ZXJlZFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG5cbiAgT2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGlmICghcGFyYW1zLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgIGZpbHRlcmVkUXVlcnlba2V5XSA9IHF1ZXJ5W2tleV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBmaWx0ZXJlZFF1ZXJ5XG59XG5cbi8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlSHJlZihcbiAgY3VycmVudFBhdGg6IHN0cmluZyxcbiAgaHJlZjogVXJsLFxuICByZXNvbHZlQXM/OiBib29sZWFuXG4pOiBzdHJpbmcge1xuICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICBjb25zdCBiYXNlID0gbmV3IFVSTChjdXJyZW50UGF0aCwgJ2h0dHA6Ly9uJylcbiAgY29uc3QgdXJsQXNTdHJpbmcgPVxuICAgIHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiBmb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKVxuICB0cnkge1xuICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSlcbiAgICBmaW5hbFVybC5wYXRobmFtZSA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKVxuICAgIGxldCBpbnRlcnBvbGF0ZWRBcyA9ICcnXG5cbiAgICBpZiAoXG4gICAgICBpc0R5bmFtaWNSb3V0ZShmaW5hbFVybC5wYXRobmFtZSkgJiZcbiAgICAgIGZpbmFsVXJsLnNlYXJjaFBhcmFtcyAmJlxuICAgICAgcmVzb2x2ZUFzXG4gICAgKSB7XG4gICAgICBjb25zdCBxdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKVxuXG4gICAgICBjb25zdCB7IHJlc3VsdCwgcGFyYW1zIH0gPSBpbnRlcnBvbGF0ZUFzKFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5XG4gICAgICApXG5cbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgaW50ZXJwb2xhdGVkQXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgcGF0aG5hbWU6IHJlc3VsdCxcbiAgICAgICAgICBoYXNoOiBmaW5hbFVybC5oYXNoLFxuICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcyksXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPVxuICAgICAgZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpblxuICAgICAgICA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aClcbiAgICAgICAgOiBmaW5hbFVybC5ocmVmXG5cbiAgICByZXR1cm4gKHJlc29sdmVBc1xuICAgICAgPyBbcmVzb2x2ZWRIcmVmLCBpbnRlcnBvbGF0ZWRBcyB8fCByZXNvbHZlZEhyZWZdXG4gICAgICA6IHJlc29sdmVkSHJlZikgYXMgc3RyaW5nXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gKHJlc29sdmVBcyA/IFt1cmxBc1N0cmluZ10gOiB1cmxBc1N0cmluZykgYXMgc3RyaW5nXG4gIH1cbn1cblxuY29uc3QgUEFHRV9MT0FEX0VSUk9SID0gU3ltYm9sKCdQQUdFX0xPQURfRVJST1InKVxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtMb2FkaW5nRXJyb3IoZXJyOiBFcnJvcik6IEVycm9yIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsIFBBR0VfTE9BRF9FUlJPUiwge30pXG59XG5cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXI6IE5leHRSb3V0ZXIsIHVybDogVXJsLCBhczogVXJsKSB7XG4gIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICByZXR1cm4ge1xuICAgIHVybDogYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCB1cmwpKSxcbiAgICBhczogYXMgPyBhZGRCYXNlUGF0aChyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIGFzKSkgOiBhcyxcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBCYXNlUm91dGVyID0ge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIFByaXZhdGVSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzID0gUGljazxQcml2YXRlUm91dGVJbmZvLCAnQ29tcG9uZW50JyB8ICdlcnInPiAmIHtcbiAgcm91dGVyOiBSb3V0ZXJcbn0gJiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG5leHBvcnQgdHlwZSBBcHBDb21wb25lbnQgPSBDb21wb25lbnRUeXBlPEFwcFByb3BzPlxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChkYXRhOiBQcml2YXRlUm91dGVJbmZvLCBBcHA6IEFwcENvbXBvbmVudCkgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IE5leHRIaXN0b3J5U3RhdGUpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID1cbiAgcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJlxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5XG5cbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsOiBzdHJpbmcsIGF0dGVtcHRzOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgLy9cbiAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgLy8gPiBvcHRpb24uXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgIC8vXG4gICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICB9KS50aGVuKChyZXMpID0+IHtcbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSlcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzLmpzb24oKVxuICB9KVxufVxuXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmOiBzdHJpbmcsIGlzU2VydmVyUmVuZGVyOiBib29sZWFuKSB7XG4gIHJldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlciA/IDMgOiAxKS5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgLy8gbG9vcC5cbiAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICBtYXJrTG9hZGluZ0Vycm9yKGVycilcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciBpbXBsZW1lbnRzIEJhc2VSb3V0ZXIge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcblxuICAvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi9cbiAgY29tcG9uZW50czogeyBbcGF0aG5hbWU6IHN0cmluZ106IFByaXZhdGVSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICBzdWI6IFN1YnNjcmlwdGlvblxuICBjbGM6IENvbXBvbmVudExvYWRDYW5jZWxcbiAgcGFnZUxvYWRlcjogYW55XG4gIF9icHM6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgfCB1bmRlZmluZWRcbiAgZXZlbnRzOiBNaXR0RW1pdHRlclxuICBfd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgaXNTc3I6IGJvb2xlYW5cbiAgaXNGYWxsYmFjazogYm9vbGVhblxuICBfaW5GbGlnaHRSb3V0ZT86IHN0cmluZ1xuICBfc2hhbGxvdz86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG5cbiAgc3RhdGljIGV2ZW50czogTWl0dEVtaXR0ZXIgPSBtaXR0KClcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHtcbiAgICAgIGluaXRpYWxQcm9wcyxcbiAgICAgIHBhZ2VMb2FkZXIsXG4gICAgICBBcHAsXG4gICAgICB3cmFwQXBwLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgaW5pdGlhbFN0eWxlU2hlZXRzLFxuICAgICAgZXJyLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgaXNGYWxsYmFjayxcbiAgICAgIGxvY2FsZSxcbiAgICAgIGxvY2FsZXMsXG4gICAgICBkZWZhdWx0TG9jYWxlLFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIGluaXRpYWxTdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgICAgIEFwcDogQXBwQ29tcG9uZW50XG4gICAgICB3cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICAgIGxvY2FsZT86IHN0cmluZ1xuICAgICAgbG9jYWxlcz86IHN0cmluZ1tdXG4gICAgICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gICAgfVxuICApIHtcbiAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICB0aGlzLnJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fVxuICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzOiBpbml0aWFsU3R5bGVTaGVldHMsXG4gICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgIGVycixcbiAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0ge1xuICAgICAgQ29tcG9uZW50OiBBcHAgYXMgQ29tcG9uZW50VHlwZSxcbiAgICAgIHN0eWxlU2hlZXRzOiBbXG4gICAgICAgIC8qIC9fYXBwIGRvZXMgbm90IG5lZWQgaXRzIHN0eWxlc2hlZXRzIG1hbmFnZWQgKi9cbiAgICAgIF0sXG4gICAgfVxuXG4gICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlclxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICB0aGlzLmFzUGF0aCA9XG4gICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICBpc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0ID8gcGF0aG5hbWUgOiBhc1xuICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aFxuICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uXG4gICAgdGhpcy5jbGMgPSBudWxsXG4gICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHBcbiAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICB0aGlzLmlzU3NyID0gdHJ1ZVxuXG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFja1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9pMThuX1NVUFBPUlQpIHtcbiAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlXG4gICAgICB0aGlzLmxvY2FsZXMgPSBsb2NhbGVzXG4gICAgICB0aGlzLmRlZmF1bHRMb2NhbGUgPSBkZWZhdWx0TG9jYWxlXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgICBnZXRVUkwoKVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcblxuICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJ1xuXG4gICAgICAgICAgbGV0IHNjcm9sbERlYm91bmNlVGltZW91dDogdW5kZWZpbmVkIHwgTm9kZUpTLlRpbWVvdXRcblxuICAgICAgICAgIGNvbnN0IGRlYm91bmNlZFNjcm9sbFNhdmUgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KSBjbGVhclRpbWVvdXQoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KVxuXG4gICAgICAgICAgICBzY3JvbGxEZWJvdW5jZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgeyB1cmwsIGFzOiBjdXJBcywgb3B0aW9ucyB9ID0gaGlzdG9yeS5zdGF0ZVxuICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBjdXJBcyxcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICAgICAgICAgICAgICBfTl9YOiB3aW5kb3cuc2Nyb2xsWCxcbiAgICAgICAgICAgICAgICAgIF9OX1k6IHdpbmRvdy5zY3JvbGxZLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0sIDEwKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBkZWJvdW5jZWRTY3JvbGxTYXZlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZSA9IChlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlIGFzIEhpc3RvcnlTdGF0ZVxuXG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgZ2V0VVJMKClcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghc3RhdGUuX19OKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMgfSA9IHN0YXRlXG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgIGlmICh0aGlzLmlzU3NyICYmIGFzID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2UoXG4gICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgIHVybCxcbiAgICAgIGFzLFxuICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICBzaGFsbG93OiBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5fc2hhbGxvdyxcbiAgICAgIH0pXG4gICAgKVxuICB9XG5cbiAgcmVsb2FkKCk6IHZvaWQge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9cbiAgYmFjaygpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcHVzaCh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICByZXBsYWNlKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICBhc3luYyBjaGFuZ2UoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKHVybCkpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2gpIHtcbiAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZVxuICAgIH1cbiAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgaWYgKFNUKSB7XG4gICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUpXG4gICAgfVxuXG4gICAgYXMgPSBhZGRMb2NhbGUoYXMsIHRoaXMubG9jYWxlLCB0aGlzLmRlZmF1bHRMb2NhbGUpXG4gICAgY29uc3QgY2xlYW5lZEFzID0gZGVsTG9jYWxlKFxuICAgICAgaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsXG4gICAgICB0aGlzLmxvY2FsZVxuICAgIClcbiAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXNcblxuICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuXG4gICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSkge1xuICAgICAgdGhpcy5hc1BhdGggPSBjbGVhbmVkQXNcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMpXG4gICAgICAvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG4gICAgICB0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpXG4gICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0pXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4gICAgLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4gICAgLy8gd2hlbiByZXdyaXR0ZW4gdG9cbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG4gICAgY29uc3QgeyBfX3Jld3JpdGVzOiByZXdyaXRlcyB9ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLnByb21pc2VkQnVpbGRNYW5pZmVzdFxuXG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSBwYXJzZWRcblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAvLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4gICAgLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICA/IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSlcbiAgICAgIDogcGF0aG5hbWVcblxuICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgIGlmICghdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpKSB7XG4gICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJ1xuICAgIH1cblxuICAgIGxldCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zXG5cbiAgICAvLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuICAgIC8vIHBhZ2VzIHRvIGFsbG93IGJ1aWxkaW5nIHRoZSBkYXRhIFVSTCBjb3JyZWN0bHlcbiAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUykge1xuICAgICAgcmVzb2x2ZWRBcyA9IHJlc29sdmVSZXdyaXRlcyhcbiAgICAgICAgcGFyc2VSZWxhdGl2ZVVybChhcykucGF0aG5hbWUsXG4gICAgICAgIHBhZ2VzLFxuICAgICAgICBiYXNlUGF0aCxcbiAgICAgICAgcmV3cml0ZXMsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICAocDogc3RyaW5nKSA9PiB0aGlzLl9yZXNvbHZlSHJlZih7IHBhdGhuYW1lOiBwIH0sIHBhZ2VzKS5wYXRobmFtZSFcbiAgICAgIClcblxuICAgICAgaWYgKHJlc29sdmVkQXMgIT09IGFzKSB7XG4gICAgICAgIGNvbnN0IHBvdGVudGlhbEhyZWYgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChcbiAgICAgICAgICB0aGlzLl9yZXNvbHZlSHJlZihcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHBhcnNlZCwgeyBwYXRobmFtZTogcmVzb2x2ZWRBcyB9KSxcbiAgICAgICAgICAgIHBhZ2VzLFxuICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICApLnBhdGhuYW1lIVxuICAgICAgICApXG5cbiAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocG90ZW50aWFsSHJlZikpIHtcbiAgICAgICAgICByb3V0ZSA9IHBvdGVudGlhbEhyZWZcbiAgICAgICAgICBwYXRobmFtZSA9IHBvdGVudGlhbEhyZWZcbiAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpLCB0aGlzLmxvY2FsZSlcblxuICAgIGlmIChpc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgIGNvbnN0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChyZXNvbHZlZEFzKVxuICAgICAgY29uc3QgYXNQYXRobmFtZSA9IHBhcnNlZEFzLnBhdGhuYW1lXG5cbiAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKVxuICAgICAgY29uc3Qgc2hvdWxkSW50ZXJwb2xhdGUgPSByb3V0ZSA9PT0gYXNQYXRobmFtZVxuICAgICAgY29uc3QgaW50ZXJwb2xhdGVkQXMgPSBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICA/IGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5KVxuICAgICAgICA6ICh7fSBhcyB7IHJlc3VsdDogdW5kZWZpbmVkOyBwYXJhbXM6IHVuZGVmaW5lZCB9KVxuXG4gICAgICBpZiAoIXJvdXRlTWF0Y2ggfHwgKHNob3VsZEludGVycG9sYXRlICYmICFpbnRlcnBvbGF0ZWRBcy5yZXN1bHQpKSB7XG4gICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKFxuICAgICAgICAgIChwYXJhbSkgPT4gIXF1ZXJ5W3BhcmFtXVxuICAgICAgICApXG5cbiAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/IGBJbnRlcnBvbGF0aW5nIGhyZWZgXG4gICAgICAgICAgICAgICAgICA6IGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGBcbiAgICAgICAgICAgICAgfSBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAoc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgPyBgVGhlIHByb3ZpZGVkIFxcYGhyZWZcXGAgKCR7dXJsfSkgdmFsdWUgaXMgbWlzc2luZyBxdWVyeSB2YWx1ZXMgKCR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9KSB0byBiZSBpbnRlcnBvbGF0ZWQgcHJvcGVybHkuIGBcbiAgICAgICAgICAgICAgOiBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgKSArXG4gICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzLyR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gJ2hyZWYtaW50ZXJwb2xhdGlvbi1mYWlsZWQnXG4gICAgICAgICAgICAgICAgICA6ICdpbmNvbXBhdGlibGUtaHJlZi1hcydcbiAgICAgICAgICAgICAgfWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc2hvdWxkSW50ZXJwb2xhdGUpIHtcbiAgICAgICAgYXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBwYXJzZWRBcywge1xuICAgICAgICAgICAgcGF0aG5hbWU6IGludGVycG9sYXRlZEFzLnJlc3VsdCxcbiAgICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIGludGVycG9sYXRlZEFzLnBhcmFtcyEpLFxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpXG4gICAgICB9XG4gICAgfVxuXG4gICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMpXG5cbiAgICB0cnkge1xuICAgICAgY29uc3Qgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICBzaGFsbG93XG4gICAgICApXG4gICAgICBsZXQgeyBlcnJvciwgcHJvcHMsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICAvLyBoYW5kbGUgcmVkaXJlY3Qgb24gY2xpZW50LXRyYW5zaXRpb25cbiAgICAgIGlmIChcbiAgICAgICAgKF9fTl9TU0cgfHwgX19OX1NTUCkgJiZcbiAgICAgICAgcHJvcHMgJiZcbiAgICAgICAgKHByb3BzIGFzIGFueSkucGFnZVByb3BzICYmXG4gICAgICAgIChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1RcbiAgICAgICkge1xuICAgICAgICBjb25zdCBkZXN0aW5hdGlvbiA9IChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1RcblxuICAgICAgICAvLyBjaGVjayBpZiBkZXN0aW5hdGlvbiBpcyBpbnRlcm5hbCAocmVzb2x2ZXMgdG8gYSBwYWdlKSBhbmQgYXR0ZW1wdFxuICAgICAgICAvLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXG4gICAgICAgIC8vIGl0J3Mgbm90XG4gICAgICAgIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICBjb25zdCBwYXJzZWRIcmVmID0gcGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbilcbiAgICAgICAgICB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWRIcmVmLCBwYWdlcylcblxuICAgICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhwYXJzZWRIcmVmLnBhdGhuYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKFxuICAgICAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICAgICAgZGVzdGluYXRpb24sXG4gICAgICAgICAgICAgIGRlc3RpbmF0aW9uLFxuICAgICAgICAgICAgICBvcHRpb25zXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkZXN0aW5hdGlvblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge30pXG4gICAgICB9XG5cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzKVxuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgbWV0aG9kLFxuICAgICAgICB1cmwsXG4gICAgICAgIGFkZExvY2FsZShhcywgdGhpcy5sb2NhbGUsIHRoaXMuZGVmYXVsdExvY2FsZSksXG4gICAgICAgIG9wdGlvbnNcbiAgICAgIClcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgfVxuXG4gICAgICBhd2FpdCB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUhLCBxdWVyeSwgY2xlYW5lZEFzLCByb3V0ZUluZm8pLmNhdGNoKFxuICAgICAgICAoZSkgPT4ge1xuICAgICAgICAgIGlmIChlLmNhbmNlbGxlZCkgZXJyb3IgPSBlcnJvciB8fCBlXG4gICAgICAgICAgZWxzZSB0aHJvdyBlXG4gICAgICAgIH1cbiAgICAgIClcblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMpXG4gICAgICAgIHRocm93IGVycm9yXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiAmJiAnX05fWCcgaW4gb3B0aW9ucykge1xuICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygob3B0aW9ucyBhcyBhbnkpLl9OX1gsIChvcHRpb25zIGFzIGFueSkuX05fWSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMpXG5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfVxuXG4gIGNoYW5nZVN0YXRlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge31cbiAgKTogdm9pZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCBnZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgIHRoaXMuX3NoYWxsb3cgPSBvcHRpb25zLnNoYWxsb3dcbiAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oXG4gICAgICAgIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgIH0gYXMgSGlzdG9yeVN0YXRlLFxuICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgJycsXG4gICAgICAgIGFzXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgZXJyOiBFcnJvciAmIHsgY29kZTogYW55OyBjYW5jZWxsZWQ6IGJvb2xlYW4gfSxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGxvYWRFcnJvckZhaWw/OiBib29sZWFuXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuXG4gICAgaWYgKFBBR0VfTE9BRF9FUlJPUiBpbiBlcnIgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyLCBhcylcblxuICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG5cbiAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgIC8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICB0aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKClcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBwYWdlOiBDb21wb25lbnQsIHN0eWxlU2hlZXRzIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KFxuICAgICAgICAnL19lcnJvcidcbiAgICAgIClcbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0cyxcbiAgICAgICAgZXJyLFxuICAgICAgICBlcnJvcjogZXJyLFxuICAgICAgfVxuXG4gICAgICB0cnkge1xuICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICBlcnIsXG4gICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgIH0gYXMgYW55KVxuICAgICAgfSBjYXRjaCAoZ2lwRXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycilcbiAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge31cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKHJvdXRlSW5mb0Vycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3Iocm91dGVJbmZvRXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCB0cnVlKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGdldFJvdXRlSW5mbyhcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIHNoYWxsb3c6IGJvb2xlYW4gPSBmYWxzZVxuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXVxuXG4gICAgICBpZiAoc2hhbGxvdyAmJiBjYWNoZWRSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlZFJvdXRlSW5mb1xuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gPSBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgPyBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgOiBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKChyZXMpID0+ICh7XG4gICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgc3R5bGVTaGVldHM6IHJlcy5zdHlsZVNoZWV0cyxcbiAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICB9KSlcblxuICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKVxuICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgZGF0YUhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoX19OX1NTRyB8fCBfX05fU1NQKSB7XG4gICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICAgIGRlbEJhc2VQYXRoKGFzKSxcbiAgICAgICAgICBfX05fU1NHLFxuICAgICAgICAgIHRoaXMubG9jYWxlLFxuICAgICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YTxQcml2YXRlUm91dGVJbmZvPigoKSA9PlxuICAgICAgICBfX05fU1NHXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoXG4gICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICApXG4gICAgICApXG5cbiAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMpXG4gICAgfVxuICB9XG5cbiAgc2V0KFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBQcml2YXRlUm91dGVJbmZvXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlXG5cbiAgICB0aGlzLnJvdXRlID0gcm91dGVcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGJlZm9yZVBvcFN0YXRlKGNiOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5fYnBzID0gY2JcbiAgfVxuXG4gIG9ubHlBSGFzaENoYW5nZShhczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpXG4gICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpXG5cbiAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoXG4gIH1cblxuICBzY3JvbGxUb0hhc2goYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKVxuICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZVxuICAgIGlmIChoYXNoID09PSAnJykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKVxuICAgIGlmIChpZEVsKSB7XG4gICAgICBpZEVsLnNjcm9sbEludG9WaWV3KClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXVxuICAgIGlmIChuYW1lRWwpIHtcbiAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgfVxuICB9XG5cbiAgdXJsSXNOZXcoYXNQYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aFxuICB9XG5cbiAgX3Jlc29sdmVIcmVmKHBhcnNlZEhyZWY6IFVybE9iamVjdCwgcGFnZXM6IHN0cmluZ1tdLCBhcHBseUJhc2VQYXRoID0gdHJ1ZSkge1xuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZEhyZWZcbiAgICBjb25zdCBjbGVhblBhdGhuYW1lID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goXG4gICAgICBkZW5vcm1hbGl6ZVBhZ2VQYXRoKGFwcGx5QmFzZVBhdGggPyBkZWxCYXNlUGF0aChwYXRobmFtZSEpIDogcGF0aG5hbWUhKVxuICAgIClcblxuICAgIGlmIChjbGVhblBhdGhuYW1lID09PSAnLzQwNCcgfHwgY2xlYW5QYXRobmFtZSA9PT0gJy9fZXJyb3InKSB7XG4gICAgICByZXR1cm4gcGFyc2VkSHJlZlxuICAgIH1cblxuICAgIC8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbiAgICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUhKSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgcGFnZXMuc29tZSgocGFnZSkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgaXNEeW5hbWljUm91dGUocGFnZSkgJiZcbiAgICAgICAgICBnZXRSb3V0ZVJlZ2V4KHBhZ2UpLnJlLnRlc3QoY2xlYW5QYXRobmFtZSEpXG4gICAgICAgICkge1xuICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUgPSBhcHBseUJhc2VQYXRoID8gYWRkQmFzZVBhdGgocGFnZSkgOiBwYWdlXG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIGFzeW5jIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRcblxuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLnBhZ2VMb2FkZXIucHJlZmV0Y2hEYXRhKFxuICAgICAgICB1cmwsXG4gICAgICAgIGFzUGF0aCxcbiAgICAgICAgdGhpcy5sb2NhbGUsXG4gICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgKSxcbiAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICBdKVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8R29vZFBhZ2VDYWNoZT4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9KVxuXG4gICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKVxuXG4gICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgY29uc3QgZXJyb3I6IGFueSA9IG5ldyBFcnJvcihcbiAgICAgICAgYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImBcbiAgICAgIClcbiAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuXG4gICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRSZXN1bHRcbiAgfVxuXG4gIF9nZXREYXRhPFQ+KGZuOiAoKSA9PiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH1cbiAgICB0aGlzLmNsYyA9IGNhbmNlbFxuICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgIGNvbnN0IGVycjogYW55ID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJylcbiAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIGNvbnN0IHsgaHJlZjogY2FjaGVLZXkgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuc2RjW2NhY2hlS2V5XSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pXG4gICAgfVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcilcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhcbiAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsXG4gICAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ11cbiAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHAgYXMgQXBwQ29tcG9uZW50KVxuICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZVxuICAgIHJldHVybiBsb2FkR2V0SW5pdGlhbFByb3BzPEFwcENvbnRleHRUeXBlPFJvdXRlcj4+KEFwcCwge1xuICAgICAgQXBwVHJlZSxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgIGN0eCxcbiAgICB9KVxuICB9XG5cbiAgYWJvcnRDb21wb25lbnRMb2FkKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSwgYXMpXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50IGFzIEFwcENvbXBvbmVudClcbiAgfVxufVxuIiwiLy8gZXNjYXBlIGRlbGltaXRlcnMgdXNlZCBieSBwYXRoLXRvLXJlZ2V4cFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXNjYXBlUGF0aERlbGltaXRlcnMoc2VnbWVudDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHNlZ21lbnQucmVwbGFjZSgvWy8jP10vZywgKGNoYXI6IHN0cmluZykgPT4gZW5jb2RlVVJJQ29tcG9uZW50KGNoYXIpKVxufVxuIiwiLy8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCAqIGFzIHF1ZXJ5c3RyaW5nIGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHMgPSAvaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS9cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmo6IFVybE9iamVjdCkge1xuICBsZXQgeyBhdXRoLCBob3N0bmFtZSB9ID0gdXJsT2JqXG4gIGxldCBwcm90b2NvbCA9IHVybE9iai5wcm90b2NvbCB8fCAnJ1xuICBsZXQgcGF0aG5hbWUgPSB1cmxPYmoucGF0aG5hbWUgfHwgJydcbiAgbGV0IGhhc2ggPSB1cmxPYmouaGFzaCB8fCAnJ1xuICBsZXQgcXVlcnkgPSB1cmxPYmoucXVlcnkgfHwgJydcbiAgbGV0IGhvc3Q6IHN0cmluZyB8IGZhbHNlID0gZmFsc2VcblxuICBhdXRoID0gYXV0aCA/IGVuY29kZVVSSUNvbXBvbmVudChhdXRoKS5yZXBsYWNlKC8lM0EvaSwgJzonKSArICdAJyA6ICcnXG5cbiAgaWYgKHVybE9iai5ob3N0KSB7XG4gICAgaG9zdCA9IGF1dGggKyB1cmxPYmouaG9zdFxuICB9IGVsc2UgaWYgKGhvc3RuYW1lKSB7XG4gICAgaG9zdCA9IGF1dGggKyAofmhvc3RuYW1lLmluZGV4T2YoJzonKSA/IGBbJHtob3N0bmFtZX1dYCA6IGhvc3RuYW1lKVxuICAgIGlmICh1cmxPYmoucG9ydCkge1xuICAgICAgaG9zdCArPSAnOicgKyB1cmxPYmoucG9ydFxuICAgIH1cbiAgfVxuXG4gIGlmIChxdWVyeSAmJiB0eXBlb2YgcXVlcnkgPT09ICdvYmplY3QnKSB7XG4gICAgcXVlcnkgPSBTdHJpbmcocXVlcnlzdHJpbmcudXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhxdWVyeSBhcyBQYXJzZWRVcmxRdWVyeSkpXG4gIH1cblxuICBsZXQgc2VhcmNoID0gdXJsT2JqLnNlYXJjaCB8fCAocXVlcnkgJiYgYD8ke3F1ZXJ5fWApIHx8ICcnXG5cbiAgaWYgKHByb3RvY29sICYmIHByb3RvY29sLnN1YnN0cigtMSkgIT09ICc6JykgcHJvdG9jb2wgKz0gJzonXG5cbiAgaWYgKFxuICAgIHVybE9iai5zbGFzaGVzIHx8XG4gICAgKCghcHJvdG9jb2wgfHwgc2xhc2hlZFByb3RvY29scy50ZXN0KHByb3RvY29sKSkgJiYgaG9zdCAhPT0gZmFsc2UpXG4gICkge1xuICAgIGhvc3QgPSAnLy8nICsgKGhvc3QgfHwgJycpXG4gICAgaWYgKHBhdGhuYW1lICYmIHBhdGhuYW1lWzBdICE9PSAnLycpIHBhdGhuYW1lID0gJy8nICsgcGF0aG5hbWVcbiAgfSBlbHNlIGlmICghaG9zdCkge1xuICAgIGhvc3QgPSAnJ1xuICB9XG5cbiAgaWYgKGhhc2ggJiYgaGFzaFswXSAhPT0gJyMnKSBoYXNoID0gJyMnICsgaGFzaFxuICBpZiAoc2VhcmNoICYmIHNlYXJjaFswXSAhPT0gJz8nKSBzZWFyY2ggPSAnPycgKyBzZWFyY2hcblxuICBwYXRobmFtZSA9IHBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZywgZW5jb2RlVVJJQ29tcG9uZW50KVxuICBzZWFyY2ggPSBzZWFyY2gucmVwbGFjZSgnIycsICclMjMnKVxuXG4gIHJldHVybiBgJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YFxufVxuIiwiLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpXG59XG4iLCJpbXBvcnQgeyBnZXRMb2NhdGlvbk9yaWdpbiB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IERVTU1ZX0JBU0UgPSBuZXcgVVJMKFxuICB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/ICdodHRwOi8vbicgOiBnZXRMb2NhdGlvbk9yaWdpbigpXG4pXG5cbi8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZCB3aXRoIG9uZSBleGNlcHRpb24sIGluIHRoZSBicm93c2VyLCBhYnNvbHV0ZSB1cmxzIHRoYXQgYXJlIG9uXG4gKiB0aGUgY3VycmVudCBvcmlnaW4gd2lsbCBiZSBwYXJzZWQgYXMgcmVsYXRpdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsOiBzdHJpbmcsIGJhc2U/OiBzdHJpbmcpIHtcbiAgY29uc3QgcmVzb2x2ZWRCYXNlID0gYmFzZSA/IG5ldyBVUkwoYmFzZSwgRFVNTVlfQkFTRSkgOiBEVU1NWV9CQVNFXG4gIGNvbnN0IHtcbiAgICBwYXRobmFtZSxcbiAgICBzZWFyY2hQYXJhbXMsXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZixcbiAgICBvcmlnaW4sXG4gICAgcHJvdG9jb2wsXG4gIH0gPSBuZXcgVVJMKHVybCwgcmVzb2x2ZWRCYXNlKVxuICBpZiAoXG4gICAgb3JpZ2luICE9PSBEVU1NWV9CQVNFLm9yaWdpbiB8fFxuICAgIChwcm90b2NvbCAhPT0gJ2h0dHA6JyAmJiBwcm90b2NvbCAhPT0gJ2h0dHBzOicpXG4gICkge1xuICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50OiBpbnZhbGlkIHJlbGF0aXZlIFVSTCcpXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBxdWVyeTogc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWY6IGhyZWYuc2xpY2UoRFVNTVlfQkFTRS5vcmlnaW4ubGVuZ3RoKSxcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgcGF0aFRvUmVnZXhwIGZyb20gJ25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cCdcblxuZXhwb3J0IHsgcGF0aFRvUmVnZXhwIH1cblxuZXhwb3J0IGNvbnN0IG1hdGNoZXJPcHRpb25zOiBwYXRoVG9SZWdleHAuVG9rZW5zVG9SZWdleHBPcHRpb25zICZcbiAgcGF0aFRvUmVnZXhwLlBhcnNlT3B0aW9ucyA9IHtcbiAgc2Vuc2l0aXZlOiBmYWxzZSxcbiAgZGVsaW1pdGVyOiAnLycsXG59XG5cbmV4cG9ydCBjb25zdCBjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zOiBwYXRoVG9SZWdleHAuVG9rZW5zVG9SZWdleHBPcHRpb25zICZcbiAgcGF0aFRvUmVnZXhwLlBhcnNlT3B0aW9ucyA9IHtcbiAgLi4ubWF0Y2hlck9wdGlvbnMsXG4gIHN0cmljdDogdHJ1ZSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgKGN1c3RvbVJvdXRlID0gZmFsc2UpID0+IHtcbiAgcmV0dXJuIChwYXRoOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBrZXlzOiBwYXRoVG9SZWdleHAuS2V5W10gPSBbXVxuICAgIGNvbnN0IG1hdGNoZXJSZWdleCA9IHBhdGhUb1JlZ2V4cC5wYXRoVG9SZWdleHAoXG4gICAgICBwYXRoLFxuICAgICAga2V5cyxcbiAgICAgIGN1c3RvbVJvdXRlID8gY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyA6IG1hdGNoZXJPcHRpb25zXG4gICAgKVxuICAgIGNvbnN0IG1hdGNoZXIgPSBwYXRoVG9SZWdleHAucmVnZXhwVG9GdW5jdGlvbihtYXRjaGVyUmVnZXgsIGtleXMpXG5cbiAgICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkLCBwYXJhbXM/OiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IHJlcyA9IHBhdGhuYW1lID09IG51bGwgPyBmYWxzZSA6IG1hdGNoZXIocGF0aG5hbWUpXG4gICAgICBpZiAoIXJlcykge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cblxuICAgICAgaWYgKGN1c3RvbVJvdXRlKSB7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgICAgICAvLyB1bm5hbWVkIHBhcmFtcyBzaG91bGQgYmUgcmVtb3ZlZCBhcyB0aGV5XG4gICAgICAgICAgLy8gYXJlIG5vdCBhbGxvd2VkIHRvIGJlIHVzZWQgaW4gdGhlIGRlc3RpbmF0aW9uXG4gICAgICAgICAgaWYgKHR5cGVvZiBrZXkubmFtZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGRlbGV0ZSAocmVzLnBhcmFtcyBhcyBhbnkpW2tleS5uYW1lXVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4geyAuLi5wYXJhbXMsIC4uLnJlcy5wYXJhbXMgfVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0ICogYXMgcGF0aFRvUmVnZXhwIGZyb20gJ25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cCdcblxudHlwZSBQYXJhbXMgPSB7IFtwYXJhbTogc3RyaW5nXTogYW55IH1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJlcGFyZURlc3RpbmF0aW9uKFxuICBkZXN0aW5hdGlvbjogc3RyaW5nLFxuICBwYXJhbXM6IFBhcmFtcyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICBhcHBlbmRQYXJhbXNUb1F1ZXJ5OiBib29sZWFuLFxuICBiYXNlUGF0aDogc3RyaW5nXG4pIHtcbiAgbGV0IHBhcnNlZERlc3RpbmF0aW9uOiB7XG4gICAgcXVlcnk/OiBQYXJzZWRVcmxRdWVyeVxuICAgIHByb3RvY29sPzogc3RyaW5nXG4gICAgaG9zdG5hbWU/OiBzdHJpbmdcbiAgICBwb3J0Pzogc3RyaW5nXG4gIH0gJiBSZXR1cm5UeXBlPHR5cGVvZiBwYXJzZVJlbGF0aXZlVXJsPiA9IHt9IGFzIGFueVxuXG4gIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICBwYXJzZWREZXN0aW5hdGlvbiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gIH0gZWxzZSB7XG4gICAgY29uc3Qge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBzZWFyY2hQYXJhbXMsXG4gICAgICBoYXNoLFxuICAgICAgaG9zdG5hbWUsXG4gICAgICBwb3J0LFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH0gPSBuZXcgVVJMKGRlc3RpbmF0aW9uKVxuXG4gICAgcGFyc2VkRGVzdGluYXRpb24gPSB7XG4gICAgICBwYXRobmFtZSxcbiAgICAgIHF1ZXJ5OiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyksXG4gICAgICBoYXNoLFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBob3N0bmFtZSxcbiAgICAgIHBvcnQsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGRlc3RRdWVyeSA9IHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5XG4gIGNvbnN0IGRlc3RQYXRoID0gYCR7cGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUhfSR7XG4gICAgcGFyc2VkRGVzdGluYXRpb24uaGFzaCB8fCAnJ1xuICB9YFxuICBjb25zdCBkZXN0UGF0aFBhcmFtS2V5czogcGF0aFRvUmVnZXhwLktleVtdID0gW11cbiAgcGF0aFRvUmVnZXhwLnBhdGhUb1JlZ2V4cChkZXN0UGF0aCwgZGVzdFBhdGhQYXJhbUtleXMpXG5cbiAgY29uc3QgZGVzdFBhdGhQYXJhbXMgPSBkZXN0UGF0aFBhcmFtS2V5cy5tYXAoKGtleSkgPT4ga2V5Lm5hbWUpXG5cbiAgbGV0IGRlc3RpbmF0aW9uQ29tcGlsZXIgPSBwYXRoVG9SZWdleHAuY29tcGlsZShcbiAgICBkZXN0UGF0aCxcbiAgICAvLyB3ZSBkb24ndCB2YWxpZGF0ZSB3aGlsZSBjb21waWxpbmcgdGhlIGRlc3RpbmF0aW9uIHNpbmNlIHdlIHNob3VsZFxuICAgIC8vIGhhdmUgYWxyZWFkeSB2YWxpZGF0ZWQgYmVmb3JlIHdlIGdvdCB0byB0aGlzIHBvaW50IGFuZCB2YWxpZGF0aW5nXG4gICAgLy8gYnJlYWtzIGNvbXBpbGluZyBkZXN0aW5hdGlvbnMgd2l0aCBuYW1lZCBwYXR0ZXJuIHBhcmFtcyBmcm9tIHRoZSBzb3VyY2VcbiAgICAvLyBlLmcuIC9zb21ldGhpbmc6aGVsbG8oLiopIC0+IC9hbm90aGVyLzpoZWxsbyBpcyBicm9rZW4gd2l0aCB2YWxpZGF0aW9uXG4gICAgLy8gc2luY2UgY29tcGlsZSB2YWxpZGF0aW9uIGlzIG1lYW50IGZvciByZXZlcnNpbmcgYW5kIG5vdCBmb3IgaW5zZXJ0aW5nXG4gICAgLy8gcGFyYW1zIGZyb20gYSBzZXBhcmF0ZSBwYXRoLXJlZ2V4IGludG8gYW5vdGhlclxuICAgIHsgdmFsaWRhdGU6IGZhbHNlIH1cbiAgKVxuICBsZXQgbmV3VXJsXG5cbiAgLy8gdXBkYXRlIGFueSBwYXJhbXMgaW4gcXVlcnkgdmFsdWVzXG4gIGZvciAoY29uc3QgW2tleSwgc3RyT3JBcnJheV0gb2YgT2JqZWN0LmVudHJpZXMoZGVzdFF1ZXJ5KSkge1xuICAgIGxldCB2YWx1ZSA9IEFycmF5LmlzQXJyYXkoc3RyT3JBcnJheSkgPyBzdHJPckFycmF5WzBdIDogc3RyT3JBcnJheVxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgLy8gdGhlIHZhbHVlIG5lZWRzIHRvIHN0YXJ0IHdpdGggYSBmb3J3YXJkLXNsYXNoIHRvIGJlIGNvbXBpbGVkXG4gICAgICAvLyBjb3JyZWN0bHlcbiAgICAgIHZhbHVlID0gYC8ke3ZhbHVlfWBcbiAgICAgIGNvbnN0IHF1ZXJ5Q29tcGlsZXIgPSBwYXRoVG9SZWdleHAuY29tcGlsZSh2YWx1ZSwgeyB2YWxpZGF0ZTogZmFsc2UgfSlcbiAgICAgIHZhbHVlID0gcXVlcnlDb21waWxlcihwYXJhbXMpLnN1YnN0cigxKVxuICAgIH1cbiAgICBkZXN0UXVlcnlba2V5XSA9IHZhbHVlXG4gIH1cblxuICAvLyBhZGQgcGF0aCBwYXJhbXMgdG8gcXVlcnkgaWYgaXQncyBub3QgYSByZWRpcmVjdCBhbmQgbm90XG4gIC8vIGFscmVhZHkgZGVmaW5lZCBpbiBkZXN0aW5hdGlvbiBxdWVyeSBvciBwYXRoXG4gIGNvbnN0IHBhcmFtS2V5cyA9IE9iamVjdC5rZXlzKHBhcmFtcylcblxuICBpZiAoXG4gICAgYXBwZW5kUGFyYW1zVG9RdWVyeSAmJlxuICAgICFwYXJhbUtleXMuc29tZSgoa2V5KSA9PiBkZXN0UGF0aFBhcmFtcy5pbmNsdWRlcyhrZXkpKVxuICApIHtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBwYXJhbUtleXMpIHtcbiAgICAgIGlmICghKGtleSBpbiBkZXN0UXVlcnkpKSB7XG4gICAgICAgIGRlc3RRdWVyeVtrZXldID0gcGFyYW1zW2tleV1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCBzaG91bGRBZGRCYXNlUGF0aCA9IGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSAmJiBiYXNlUGF0aFxuXG4gIHRyeSB7XG4gICAgbmV3VXJsID0gYCR7c2hvdWxkQWRkQmFzZVBhdGggPyBiYXNlUGF0aCA6ICcnfSR7ZGVzdGluYXRpb25Db21waWxlcihcbiAgICAgIHBhcmFtc1xuICAgICl9YFxuXG4gICAgY29uc3QgW3BhdGhuYW1lLCBoYXNoXSA9IG5ld1VybC5zcGxpdCgnIycpXG4gICAgcGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHBhcnNlZERlc3RpbmF0aW9uLmhhc2ggPSBgJHtoYXNoID8gJyMnIDogJyd9JHtoYXNoIHx8ICcnfWBcbiAgICBkZWxldGUgcGFyc2VkRGVzdGluYXRpb24uc2VhcmNoXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGlmIChlcnIubWVzc2FnZS5tYXRjaCgvRXhwZWN0ZWQgLio/IHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYW4gYXJyYXkvKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgVG8gdXNlIGEgbXVsdGktbWF0Y2ggaW4gdGhlIGRlc3RpbmF0aW9uIHlvdSBtdXN0IGFkZCBcXGAqXFxgIGF0IHRoZSBlbmQgb2YgdGhlIHBhcmFtIG5hbWUgdG8gc2lnbmlmeSBpdCBzaG91bGQgcmVwZWF0LiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbnZhbGlkLW11bHRpLW1hdGNoYFxuICAgICAgKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfVxuXG4gIC8vIFF1ZXJ5IG1lcmdlIG9yZGVyIGxvd2VzdCBwcmlvcml0eSB0byBoaWdoZXN0XG4gIC8vIDEuIGluaXRpYWwgVVJMIHF1ZXJ5IHZhbHVlc1xuICAvLyAyLiBwYXRoIHNlZ21lbnQgdmFsdWVzXG4gIC8vIDMuIGRlc3RpbmF0aW9uIHNwZWNpZmllZCBxdWVyeSB2YWx1ZXNcbiAgcGFyc2VkRGVzdGluYXRpb24ucXVlcnkgPSB7XG4gICAgLi4ucXVlcnksXG4gICAgLi4ucGFyc2VkRGVzdGluYXRpb24ucXVlcnksXG4gIH1cblxuICByZXR1cm4ge1xuICAgIG5ld1VybCxcbiAgICBwYXJzZWREZXN0aW5hdGlvbixcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoXG4gIHNlYXJjaFBhcmFtczogVVJMU2VhcmNoUGFyYW1zXG4pOiBQYXJzZWRVcmxRdWVyeSB7XG4gIGNvbnN0IHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG4gIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeVtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcXVlcnlba2V5XSA9IHZhbHVlXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKSB7XG4gICAgICA7KHF1ZXJ5W2tleV0gYXMgc3RyaW5nW10pLnB1c2godmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSBhcyBzdHJpbmcsIHZhbHVlXVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHF1ZXJ5XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0ocGFyYW06IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmIChcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdzdHJpbmcnIHx8XG4gICAgKHR5cGVvZiBwYXJhbSA9PT0gJ251bWJlcicgJiYgIWlzTmFOKHBhcmFtKSkgfHxcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdib29sZWFuJ1xuICApIHtcbiAgICByZXR1cm4gU3RyaW5nKHBhcmFtKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAnJ1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cmxRdWVyeVRvU2VhcmNoUGFyYW1zKFxuICB1cmxRdWVyeTogUGFyc2VkVXJsUXVlcnlcbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxuICBPYmplY3QuZW50cmllcyh1cmxRdWVyeSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChpdGVtKSA9PiByZXN1bHQuYXBwZW5kKGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShpdGVtKSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5zZXQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHZhbHVlKSlcbiAgICB9XG4gIH0pXG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbihcbiAgdGFyZ2V0OiBVUkxTZWFyY2hQYXJhbXMsXG4gIC4uLnNlYXJjaFBhcmFtc0xpc3Q6IFVSTFNlYXJjaFBhcmFtc1tdXG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBzZWFyY2hQYXJhbXNMaXN0LmZvckVhY2goKHNlYXJjaFBhcmFtcykgPT4ge1xuICAgIEFycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaCgoa2V5KSA9PiB0YXJnZXQuZGVsZXRlKGtleSkpXG4gICAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHRhcmdldC5hcHBlbmQoa2V5LCB2YWx1ZSkpXG4gIH0pXG4gIHJldHVybiB0YXJnZXRcbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgcGF0aE1hdGNoIGZyb20gJy4vcGF0aC1tYXRjaCdcbmltcG9ydCBwcmVwYXJlRGVzdGluYXRpb24gZnJvbSAnLi9wcmVwYXJlLWRlc3RpbmF0aW9uJ1xuaW1wb3J0IHsgUmV3cml0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9sb2FkLWN1c3RvbS1yb3V0ZXMnXG5pbXBvcnQgeyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCB9IGZyb20gJy4uLy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5cbmNvbnN0IGN1c3RvbVJvdXRlTWF0Y2hlciA9IHBhdGhNYXRjaCh0cnVlKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXNvbHZlUmV3cml0ZXMoXG4gIGFzUGF0aDogc3RyaW5nLFxuICBwYWdlczogc3RyaW5nW10sXG4gIGJhc2VQYXRoOiBzdHJpbmcsXG4gIHJld3JpdGVzOiBSZXdyaXRlW10sXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgcmVzb2x2ZUhyZWY6IChwYXRoOiBzdHJpbmcpID0+IHN0cmluZ1xuKSB7XG4gIGlmICghcGFnZXMuaW5jbHVkZXMoYXNQYXRoKSkge1xuICAgIGZvciAoY29uc3QgcmV3cml0ZSBvZiByZXdyaXRlcykge1xuICAgICAgY29uc3QgbWF0Y2hlciA9IGN1c3RvbVJvdXRlTWF0Y2hlcihyZXdyaXRlLnNvdXJjZSlcbiAgICAgIGNvbnN0IHBhcmFtcyA9IG1hdGNoZXIoYXNQYXRoKVxuXG4gICAgICBpZiAocGFyYW1zKSB7XG4gICAgICAgIGlmICghcmV3cml0ZS5kZXN0aW5hdGlvbikge1xuICAgICAgICAgIC8vIHRoaXMgaXMgYSBwcm94aWVkIHJld3JpdGUgd2hpY2ggaXNuJ3QgaGFuZGxlZCBvbiB0aGUgY2xpZW50XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZXN0UmVzID0gcHJlcGFyZURlc3RpbmF0aW9uKFxuICAgICAgICAgIHJld3JpdGUuZGVzdGluYXRpb24sXG4gICAgICAgICAgcGFyYW1zLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIHRydWUsXG4gICAgICAgICAgcmV3cml0ZS5iYXNlUGF0aCA9PT0gZmFsc2UgPyAnJyA6IGJhc2VQYXRoXG4gICAgICAgIClcbiAgICAgICAgYXNQYXRoID0gZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSFcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5xdWVyeSlcblxuICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goYXNQYXRoKSkpIHtcbiAgICAgICAgICAvLyBjaGVjayBpZiB3ZSBub3cgbWF0Y2ggYSBwYWdlIGFzIHRoaXMgbWVhbnMgd2UgYXJlIGRvbmVcbiAgICAgICAgICAvLyByZXNvbHZpbmcgdGhlIHJld3JpdGVzXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNoZWNrIGlmIHdlIG1hdGNoIGEgZHluYW1pYy1yb3V0ZSwgaWYgc28gd2UgYnJlYWsgdGhlIHJld3JpdGVzIGNoYWluXG4gICAgICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IHJlc29sdmVIcmVmKGFzUGF0aClcblxuICAgICAgICBpZiAocmVzb2x2ZWRIcmVmICE9PSBhc1BhdGggJiYgcGFnZXMuaW5jbHVkZXMocmVzb2x2ZWRIcmVmKSkge1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFzUGF0aFxufVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCJpbnRlcmZhY2UgR3JvdXAge1xuICBwb3M6IG51bWJlclxuICByZXBlYXQ6IGJvb2xlYW5cbiAgb3B0aW9uYWw6IGJvb2xlYW5cbn1cblxuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW06IHN0cmluZykge1xuICBjb25zdCBvcHRpb25hbCA9IHBhcmFtLnN0YXJ0c1dpdGgoJ1snKSAmJiBwYXJhbS5lbmRzV2l0aCgnXScpXG4gIGlmIChvcHRpb25hbCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMSwgLTEpXG4gIH1cbiAgY29uc3QgcmVwZWF0ID0gcGFyYW0uc3RhcnRzV2l0aCgnLi4uJylcbiAgaWYgKHJlcGVhdCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMylcbiAgfVxuICByZXR1cm4geyBrZXk6IHBhcmFtLCByZXBlYXQsIG9wdGlvbmFsIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICByb3V0ZUtleXM/OiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH1cbiAgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH1cbn0ge1xuICBjb25zdCBzZWdtZW50cyA9IChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG4gICAgLnNsaWNlKDEpXG4gICAgLnNwbGl0KCcvJylcblxuICBjb25zdCBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfSA9IHt9XG4gIGxldCBncm91cEluZGV4ID0gMVxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICBncm91cHNba2V5XSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdCwgb3B0aW9uYWwgfVxuICAgICAgICByZXR1cm4gcmVwZWF0ID8gKG9wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgIH1cbiAgICB9KVxuICAgIC5qb2luKCcnKVxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsZXQgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgbGV0IHJvdXRlS2V5Q2hhckxlbmd0aCA9IDFcblxuICAgIC8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbiAgICBjb25zdCBnZXRTYWZlUm91dGVLZXkgPSAoKSA9PiB7XG4gICAgICBsZXQgcm91dGVLZXkgPSAnJ1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlS2V5Q2hhckxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJvdXRlS2V5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocm91dGVLZXlDaGFyQ29kZSlcbiAgICAgICAgcm91dGVLZXlDaGFyQ29kZSsrXG5cbiAgICAgICAgaWYgKHJvdXRlS2V5Q2hhckNvZGUgPiAxMjIpIHtcbiAgICAgICAgICByb3V0ZUtleUNoYXJMZW5ndGgrK1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcm91dGVLZXlcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZUtleXM6IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9XG5cbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICAgIC8vIHJlcGxhY2UgYW55IG5vbi13b3JkIGNoYXJhY3RlcnMgc2luY2UgdGhleSBjYW4gYnJlYWtcbiAgICAgICAgICAvLyB0aGUgbmFtZWQgcmVnZXhcbiAgICAgICAgICBsZXQgY2xlYW5lZEtleSA9IGtleS5yZXBsYWNlKC9cXFcvZywgJycpXG4gICAgICAgICAgbGV0IGludmFsaWRLZXkgPSBmYWxzZVxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4gICAgICAgICAgLy8gc2FmZSBrZXlcbiAgICAgICAgICBpZiAoY2xlYW5lZEtleS5sZW5ndGggPT09IDAgfHwgY2xlYW5lZEtleS5sZW5ndGggPiAzMCkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc05hTihwYXJzZUludChjbGVhbmVkS2V5LnN1YnN0cigwLCAxKSkpKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbnZhbGlkS2V5KSB7XG4gICAgICAgICAgICBjbGVhbmVkS2V5ID0gZ2V0U2FmZVJvdXRlS2V5KClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUtleXNbY2xlYW5lZEtleV0gPSBrZXlcbiAgICAgICAgICByZXR1cm4gcmVwZWF0XG4gICAgICAgICAgICA/IG9wdGlvbmFsXG4gICAgICAgICAgICAgID8gYCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2BcbiAgICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWBcbiAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuam9pbignJylcblxuICAgIHJldHVybiB7XG4gICAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICAgIGdyb3VwcyxcbiAgICAgIHJvdXRlS2V5cyxcbiAgICAgIG5hbWVkUmVnZXg6IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCxcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgIGdyb3VwcyxcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgZm9ybWF0VXJsIH0gZnJvbSAnLi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybCdcbmltcG9ydCB7IE1hbmlmZXN0SXRlbSB9IGZyb20gJy4uL3NlcnZlci9sb2FkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgRW52IH0gZnJvbSAnQG5leHQvZW52J1xuaW1wb3J0IHsgQnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL3NlcnZlci9nZXQtcGFnZS1maWxlcydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbi8qKlxuICogV2ViIHZpdGFscyBwcm92aWRlZCB0byBfYXBwLnJlcG9ydFdlYlZpdGFscyBieSBDb3JlIFdlYiBWaXRhbHMgcGx1Z2luIGRldmVsb3BlZCBieSBHb29nbGUgQ2hyb21lIHRlYW0uXG4gKiBodHRwczovL25leHRqcy5vcmcvYmxvZy9uZXh0LTktNCNpbnRlZ3JhdGVkLXdlYi12aXRhbHMtcmVwb3J0aW5nXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRXZWJWaXRhbHNNZXRyaWMgPSB7XG4gIGlkOiBzdHJpbmdcbiAgbGFiZWw6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgc3RhcnRUaW1lOiBudW1iZXJcbiAgdmFsdWU6IG51bWJlclxufVxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIEhlYWRFbnRyeSA9IFtzdHJpbmcsIHsgW2tleTogc3RyaW5nXTogYW55IH1dXG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IHN0cmluZ1tdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxuICBoZWFkOiBIZWFkRW50cnlbXVxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGRvY0NvbXBvbmVudHNSZW5kZXJlZDoge1xuICAgIEh0bWw/OiBib29sZWFuXG4gICAgTWFpbj86IGJvb2xlYW5cbiAgICBIZWFkPzogYm9vbGVhblxuICAgIE5leHRTY3JpcHQ/OiBib29sZWFuXG4gIH1cbiAgYnVpbGRNYW5pZmVzdDogQnVpbGRNYW5pZmVzdFxuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGR5bmFtaWNJbXBvcnRzOiBNYW5pZmVzdEl0ZW1bXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG4gIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nOiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dEFwaVJlcXVlc3QgZXh0ZW5kcyBJbmNvbWluZ01lc3NhZ2Uge1xuICAvKipcbiAgICogT2JqZWN0IG9mIGBxdWVyeWAgdmFsdWVzIGZyb20gdXJsXG4gICAqL1xuICBxdWVyeToge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdXG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgY29va2llc2AgZnJvbSBoZWFkZXJcbiAgICovXG4gIGNvb2tpZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfVxuXG4gIGJvZHk6IGFueVxuXG4gIGVudjogRW52XG5cbiAgcHJldmlldz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIFByZXZpZXcgZGF0YSBzZXQgb24gdGhlIHJlcXVlc3QsIGlmIGFueVxuICAgKiAqL1xuICBwcmV2aWV3RGF0YT86IGFueVxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHN0YXR1czogbnVtYmVyLCB1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuXG4gIC8qKlxuICAgKiBTZXQgcHJldmlldyBkYXRhIGZvciBOZXh0LmpzJyBwcmVyZW5kZXIgbW9kZVxuICAgKi9cbiAgc2V0UHJldmlld0RhdGE6IChcbiAgICBkYXRhOiBvYmplY3QgfCBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgKGluIHNlY29uZHMpIGZvciB0aGUgcHJldmlldyBzZXNzaW9uIHRvIGxhc3QgZm9yLlxuICAgICAgICogVGhlIGdpdmVuIG51bWJlciB3aWxsIGJlIGNvbnZlcnRlZCB0byBhbiBpbnRlZ2VyIGJ5IHJvdW5kaW5nIGRvd24uXG4gICAgICAgKiBCeSBkZWZhdWx0LCBubyBtYXhpbXVtIGFnZSBpcyBzZXQgYW5kIHRoZSBwcmV2aWV3IHNlc3Npb24gZmluaXNoZXNcbiAgICAgICAqIHdoZW4gdGhlIGNsaWVudCBzaHV0cyBkb3duIChicm93c2VyIGlzIGNsb3NlZCkuXG4gICAgICAgKi9cbiAgICAgIG1heEFnZT86IG51bWJlclxuICAgIH1cbiAgKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgY2xlYXJQcmV2aWV3RGF0YTogKCkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlIYW5kbGVyPFQgPSBhbnk+ID0gKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxUPlxuKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuXG4vKipcbiAqIFV0aWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjT25jZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgZm46IFRcbik6IFQge1xuICBsZXQgdXNlZCA9IGZhbHNlXG4gIGxldCByZXN1bHQ6IFJldHVyblR5cGU8VD5cblxuICByZXR1cm4gKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmICghdXNlZCkge1xuICAgICAgdXNlZCA9IHRydWVcbiAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSkgYXMgVFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb25cbiAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMKCkge1xuICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvblxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWU8UD4oQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPFA+KSB7XG4gIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgID8gQ29tcG9uZW50XG4gICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc1NlbnQocmVzOiBTZXJ2ZXJSZXNwb25zZSkge1xuICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wczxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4oQXBwOiBOZXh0Q29tcG9uZW50VHlwZTxDLCBJUCwgUD4sIGN0eDogQyk6IFByb21pc2U8SVA+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoQXBwLnByb3RvdHlwZT8uZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgQXBwXG4gICAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpXG5cbiAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge30gYXMgSVBcbiAgfVxuXG4gIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG5cbiAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgIHJldHVybiBwcm9wc1xuICB9XG5cbiAgaWYgKCFwcm9wcykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgQXBwXG4gICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGAke2dldERpc3BsYXlOYW1lKFxuICAgICAgICAgIEFwcFxuICAgICAgICApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2BcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHNcbn1cblxuZXhwb3J0IGNvbnN0IHVybE9iamVjdEtleXMgPSBbXG4gICdhdXRoJyxcbiAgJ2hhc2gnLFxuICAnaG9zdCcsXG4gICdob3N0bmFtZScsXG4gICdocmVmJyxcbiAgJ3BhdGgnLFxuICAncGF0aG5hbWUnLFxuICAncG9ydCcsXG4gICdwcm90b2NvbCcsXG4gICdxdWVyeScsXG4gICdzZWFyY2gnLFxuICAnc2xhc2hlcycsXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmw6IFVybE9iamVjdCk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXRVcmwodXJsKVxufVxuXG5leHBvcnQgY29uc3QgU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgU1QgPVxuICBTUCAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJ1xuIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVQYXRoU2VwPW5vcm1hbGl6ZVBhdGhTZXA7ZXhwb3J0cy5kZW5vcm1hbGl6ZVBhZ2VQYXRoPWRlbm9ybWFsaXplUGFnZVBhdGg7ZnVuY3Rpb24gbm9ybWFsaXplUGF0aFNlcChwYXRoKXtyZXR1cm4gcGF0aC5yZXBsYWNlKC9cXFxcL2csJy8nKTt9ZnVuY3Rpb24gZGVub3JtYWxpemVQYWdlUGF0aChwYWdlKXtwYWdlPW5vcm1hbGl6ZVBhdGhTZXAocGFnZSk7aWYocGFnZS5zdGFydHNXaXRoKCcvaW5kZXgvJykpe3BhZ2U9cGFnZS5zbGljZSg2KTt9ZWxzZSBpZihwYWdlPT09Jy9pbmRleCcpe3BhZ2U9Jy8nO31yZXR1cm4gcGFnZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMubWFwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0fSBmcm9tICdyZWFjdCcgLy8gTmV4dCDsl5DshJzripQg7J20IOq1rOusuOydtCDtlYTsmpTqsIAg7JeG64ukLlxyXG5pbXBvcnQge3VzZURpc3BhdGNoLCB1c2VTZWxlY3Rvcn0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7RU5EfSBmcm9tICdyZWR1eC1zYWdhJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCBBcHBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9BcHBMYXlvdXQnXHJcbmltcG9ydCBQb3N0Rm9ybSBmcm9tICcuLi9jb21wb25lbnRzL1Bvc3RGb3JtJ1xyXG5pbXBvcnQgUG9zdENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9zdENhcmRcIjtcclxuaW1wb3J0IHtMT0FEX1BPU1RTX1JFUVVFU1R9IGZyb20gJy4uL3JlZHVjZXJzL3Bvc3QnXHJcbmltcG9ydCB7TE9BRF9NWV9JTkZPX1JFUVVFU1R9IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInXHJcbmltcG9ydCB3cmFwcGVyIGZyb20gXCIuLi9zdG9yZS9jb25maWd1cmVTdG9yZVwiO1xyXG5cclxuY29uc3QgSG9tZSA9ICgpID0+IHtcclxuXHRjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuXHRjb25zdCB7bWV9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKVxyXG5cdGNvbnN0IHttYWluUG9zdHMsIGhhc01vcmVQb3N0cywgbG9hZFBvc3RzTG9hZGluZywgcmV0d2VldEVycm9yfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9zdClcclxuXHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7IC8vIHJldHdlZXQg7Iuk7YyoIOyLnCBhbGVydCDstpzroKVcclxuXHRcdGlmIChyZXR3ZWV0RXJyb3IpIHtcclxuXHRcdFx0YWxlcnQocmV0d2VldEVycm9yKVxyXG5cdFx0fVxyXG5cdH0sIFtyZXR3ZWV0RXJyb3JdKVxyXG5cclxuXHQvKiBDU1JcclxuXHR1c2VFZmZlY3QoKCkgPT4geyAvLyDsu7Ttj6zrhIztirgg65SU65Oc66eI7Jq07Yq47JmAIOqwmeydgCDtmqjqs7wg6rCA64qlICwg65Kk7JeQIOu5iOuwsOyXtOunjCDrhKPripTri6TrqbRcclxuXHRcdGRpc3BhdGNoKHsgLy8g66ek67KIIOuhnOq3uOyduCDsg4Htg5zrpbwg67O16rWs7ZW07KO86riwIOychO2VtOyEnCDrp4zrk6xcclxuXHRcdFx0dHlwZTogTE9BRF9NWV9JTkZPX1JFUVVFU1QsXHJcblx0XHR9KTtcclxuXHRcdGRpc3BhdGNoKHtcclxuXHRcdFx0dHlwZTogTE9BRF9QT1NUU19SRVFVRVNULFxyXG5cdFx0fSk7XHJcblx0fSwgW10pOyovXHJcblxyXG5cdC8vIOyKpO2BrOuhpOydtCDrgZ3quYzsp4Ag64K066Ck6rCU7J2E65WMIOuLpOyLnCDroZzrlKntlZjqsoztlZjripTsvZTrk5xcclxuXHQvKuycoOymiCDsnbTtjpntirjsl5DshJwg7JyI64+E7JqwIGFkZEV2ZW50TGlzdGVuZXIg66W8IOyCrOyaqe2VoOuVkCDtla3sg4Eg66as7YS07J2EIO2VtOykmOyVvO2VnOuLpC5cclxuXHRcdFx07Iqk7YGs66Gk7ZaI642Y6rGwIO2VtOygnO2VtOykmOyVvO2VnOuLpCwg7JWI6re465+s66m0IOuplOuqqOumrOyXkCDsjJPsl6zsnojripTri6QuKi9cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0ZnVuY3Rpb24gb25TY3JvbGwoKSB7XHJcblx0XHRcdC8vICjrhpLsnbTrpbwg64KY7YOA64K064qU6rKD7KSRKXNjcm9sbFksY2xpZW50SGVpZ2h0LHNjcm9sbEhlaWdodCDrpbwg66eO7J207IKs7JqpXHJcblx0XHRcdGNvbnNvbGUubG9nKHdpbmRvdy5zY3JvbGxZLCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0KVxyXG5cdFx0XHRpZiAod2luZG93LnNjcm9sbFkgKyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0ID4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCAtIDMwMCkge1xyXG5cdFx0XHRcdGlmIChoYXNNb3JlUG9zdHMgJiYgIWxvYWRQb3N0c0xvYWRpbmcpIHsgLy8g6riw7KG07JeQIOuhnOuUqeydhCDtlZjqs6DsnojsnYTrlZAg7J2067aA67aE7J20IOyLpO2WieydtOyViOuQqCwg66Gc65Sp7J20IOuBneuCmOuptCDsi6TtlolcclxuXHRcdFx0XHRcdGNvbnN0IGxhc3RJZCA9IG1haW5Qb3N0c1ttYWluUG9zdHMubGVuZ3RoIC0gMV0/LmlkOyAvLyDrp4jsp4Drp4kg6rKM7Iuc6riA7J2YIGlkXHJcblx0XHRcdFx0XHRkaXNwYXRjaCh7IC8vIOuLpCDrgrTrpqzrqbQg6re465WMIOyDiOuhnOyatCDqsoMg66Gc65SpXHJcblx0XHRcdFx0XHRcdHR5cGU6IExPQURfUE9TVFNfUkVRVUVTVCxcclxuXHRcdFx0XHRcdFx0bGFzdElkLFxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25TY3JvbGwpXHJcblx0XHRyZXR1cm4gKCkgPT4ge1xyXG5cdFx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25TY3JvbGwpXHJcblx0XHR9O1xyXG5cdH0sIFtoYXNNb3JlUG9zdHMsIGxvYWRQb3N0c0xvYWRpbmcsIG1haW5Qb3N0c10pO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0XHQ8QXBwTGF5b3V0PlxyXG5cdFx0XHRcdHsvKkFwcExheW91dCDsnYQg7IKs7Jqp7ZWc64ukLCDrp4zslb0g64uk66W4IOugiOydtOyVhOybg+ydhCDsgqzsmqntlZjqs6Dsi7bri6TrqbQg65Sw66GcIGNvbXBvbmVudHMg7JeQIOunjOuTpOyWtOyEnCDsnbTsmYDqsJnsnbQg6rCQ7Iu466m065Cc64ukLiovfVxyXG5cdFx0XHRcdHsvKuutlOqwgCDrrLbsnbwg7IiYIOyeiOuKlCDri6jsnITqsIDsnojsnYQg6rKDIOqwmeycvOuptCDrqLzsoIAg7Lu07Y+s64SM7Yq4IOydtOumhOydhCDsoJXtlbTso7zsnpAqL31cclxuXHRcdFx0XHR7bWUgJiYgPFBvc3RGb3JtLz59IHsvKuuqqOuRkCDssLgg7J246rK97JqwIOuniOyngOuniSDtlLwg7Jew7IKw7J6Q66W8IOuwmO2ZmCovfVxyXG5cdFx0XHRcdHttYWluUG9zdHMubWFwKChwb3N0KSA9PlxyXG5cdFx0XHRcdFx0XHQ8UG9zdENhcmQga2V5PXtwb3N0LmlkfSBwb3N0PXtwb3N0fS8+KX1cclxuXHRcdFx0XHR7LyrsnbTsmYDqsJnsnbQgQXBwTGF5b3V0IOycvOuhnCDqsJDsi7wg7J2067aA67aE7J2AIEFwcExheW91dCDsnZggY2hpbGRyZW4g7J2065Cc64ukLiovfVxyXG5cdFx0XHQ8L0FwcExheW91dD5cclxuXHQpXHJcbn1cclxuXHJcblxyXG4vLyAgSG9tZSDrs7Tri6Qg66i87KCAIOyLpO2WieydtCDrkJzri6QgKCBicm93c2VyIOqwgCDslYTri4wgZnJvbnQgc2VydmVyIOyqveyXkOyEnCDsi6TtlokpIChTU1IpXHJcbi8vIGNvbnRleHQg64qUIOyalOyyrS/snZHri7Xqs7wgU1NS7JeQIOq0gOugqOuQnCDsoJXrs7TqsIAg65Ok7Ja07J6I64qUIOqwneyytOydtOqzoOyalFxyXG4vKijruIzrnbzsmrDsoIApIOy/oO2CpCDtlITroaDtirjshJzrsoTroZwg7KCE64usIC0+ICAo7ZSE66Gg7Yq47ISc67KEKSDsoITri6zrsJvsnYAg7L+g7YKkIOyggOyepe2VtOyEnFxyXG7rsLHsl5Trk5wg7ISc67KE66GcIOyalOyyrSAtPiDrsLHsl5Trk5zshJzrsoQg7L+g7YKk7JeQIOuUsOuluCDrjbDsnbTthLAg7J2R64u1IC0+IO2UhOuhoO2KuOyEnOuyhFxyXG7rjbDsnbTthLDsmYAg7Lu07Y+s64SM7Yq4IOyhsO2VqSAtPiDruIzrnbzsmrDsoIAqL1xyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gd3JhcHBlci5nZXRTZXJ2ZXJTaWRlUHJvcHMoYXN5bmMgKGNvbnRleHQpID0+IHtcclxuXHQvLyBzZXJ2ZXIg7Kq97JeQ7IScIOyLpO2WieuQmOuptCBjb250ZXh0LnJlcSDqsIAg7KG07J6s7ZWoLCDshJzrsoTsqr0g7L+g7YKkIOyghOuLrFxyXG5cdC8qZ2V0U2VydmVyU2lkZVByb3Bz64qUIO2UhOuhoO2KuCDshJzrsoTsl5DshJwg7Iuk7ZaJ65CY64qUIOy9lOuTnOyeheuLiOuLpC4g7IKs7Jqp7J6Q65Ok7J2AIOunjuydgCDsiJjsnZgg67iM65287Jqw7KCA66GcIOygkeq3vO2VmOyngOunjFxyXG5cdO2UhOuhoO2KuCDshJzrsoTripQg7ZWY64KY7J2066+A66GcIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuQ29va2llPey/oO2CpCDroZwg7L+g7YKk66W8IOyEpOygle2VmOqyjCDrkJjrqbQg7ZSE66Gg7Yq4IOyEnOuyhOyXkFxyXG5cdOydtCDsv6DtgqTqsIAg7ISk7KCV65CY7Ja0IOuyhOumveuLiOuLpC4g66qo65OgIOu4jOudvOyasOyggOqwgCDtlITroaDtirgg7ISc67KE66W8IOqxsOyzkCDrsLHsl5Trk5xcclxuXHTshJzrsoTroZwg7JqU7LKt7J2EIOuztOuCvCDrlYwg6rCZ7J2AIOy/oO2CpOqwgCDsoIHsmqnrkJjslrTrsoTrpqzripQg6rKD7J6F64uI64ukLlx06re4656Y7IScIO2VnCDrsogg7ISk7KCV7ZaI64uk6rCAIOyalOyyreydhCDrs7Trgrgg64uk7J2M7JeQ64qUXHJcblx0YXhpb3MuZGVmYXVsdHMuaGVhZGVycy5Db29raWUgPSAnJ+uhnCDruYTsm4zso7zripQg6rKD7J6F64uI64ukLiovXHJcblx0Y29uc3QgY29va2llID0gY29udGV4dC5yZXEgPyBjb250ZXh0LnJlcS5oZWFkZXJzLmNvb2tpZSA6ICcnO1xyXG5cdGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuQ29va2llID0gJyc7IC8vIOy/oO2CpOulvCDsgqzsmqntlZjsp4Ag7JWK6rOgIOyalOyyreydhCDrs7TrgrzrlYzripQg67mE7JuM7KSMXHJcblx0Ly8gY29va2llIOqzteycoCDrrLjsoJzrpbwg7ZW06rKwIOyepey5mFxyXG5cdGlmIChjb250ZXh0LnJlcSAmJiBjb29raWUpIHsgLy8g7ISc67KE7J2865WM7JmAIGNvb2tpZSDqsIAg7J6I7J2E65WMXHJcblx0XHRheGlvcy5kZWZhdWx0cy5oZWFkZXJzLkNvb2tpZSA9IGNvb2tpZTsgLy8g7L+g7YKk66W8IOyNqOyEnCDsmpTssq3snYQg67O064K865WQIOy/oO2CpOulvCDrhKPslrTspIxcclxuXHR9XHJcblx0Y29udGV4dC5zdG9yZS5kaXNwYXRjaCh7IC8vIOunpOuyiCDroZzqt7jsnbgg7IOB7YOc66W8IOuzteq1rO2VtOyjvOq4sCDsnITtlbTshJwg66eM65OsXHJcblx0XHR0eXBlOiBMT0FEX01ZX0lORk9fUkVRVUVTVCxcclxuXHR9KTtcclxuXHRjb250ZXh0LnN0b3JlLmRpc3BhdGNoKHtcclxuXHRcdHR5cGU6IExPQURfUE9TVFNfUkVRVUVTVCxcclxuXHR9KTtcclxuXHQvLyByZXF1ZXN0IOqwgCBzdWNjZXNzIOuhnCDrsJTrgIzquLDquYzsp4Ag6riw64uk66Ck7KO86riwIOychO2VnCDsnqXsuZhcclxuXHRjb250ZXh0LnN0b3JlLmRpc3BhdGNoKEVORClcclxuXHRhd2FpdCBjb250ZXh0LnN0b3JlLnNhZ2FUYXNrLnRvUHJvbWlzZSgpXHJcblx0Y29uc29sZS5sb2coJ2NvbnRleHQgOjogJywgY29udGV4dClcclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVcclxuIiwiLy9pbXBvcnQgeyBzdG9yZSB9IGZyb20gJ25leHQvZGlzdC9idWlsZC9vdXRwdXQvc3RvcmUnXHJcbmltcG9ydCB7SFlEUkFURX0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJ1xyXG5pbXBvcnQge2NvbWJpbmVSZWR1Y2Vyc30gZnJvbSAncmVkdXgnXHJcbmltcG9ydCB1c2VyIGZyb20gJy4vdXNlcidcclxuaW1wb3J0IHBvc3QgZnJvbSAnLi9wb3N0J1xyXG5cclxuLy8gY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4vLyBcdHVzZXI6IHt9LFxyXG4vLyBcdHBvc3Q6IHt9LFxyXG4vLyB9XHJcblxyXG4vLyDruYTrj5nquLAg7JWh7IWYIOyDneyEseq4sFxyXG5cclxuLy8g7JWh7IWYIOyDneyEseq4sFxyXG4vKmNvbnN0IGNoYW5nZU5pY2tuYW1lID0gKGRhdGEpID0+IHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTogJ0NIQU5HRV9OSUNLTkFNRScsXHJcblx0XHRkYXRhLFxyXG5cdH1cclxufVxyXG5jaGFuZ2VOaWNrbmFtZSgndml0YW1pbjc3NycpKi9cclxuLyp7XHJcblx0XHR0eXBlOiAnQ0hBTkdFX05JQ0tOQU1FJyxcclxuXHRcdGRhdGE6ICd2aXRhbWluNzc3JyxcclxufSovXHJcblxyXG4vKnN0b3JlLmRpc3BhdGNoKGNoYW5nZU5pY2tuYW1lKCd2aXRhbWluNzc3Nzc3NycpKSovXHJcblxyXG4vLyDrpqzrk4DshJwgOiDsnbTsoITsg4Htg5zsmYAg7JWh7IWY7J2EIO2Gte2VtCDri6TsnYwg7IOB7YOc66W8IOunjOuTpOyWtOuCtOuKlCDtlajsiJhcclxuLyogQ1NSIFJFRFVDRVJcclxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG5cdC8vIHVzZXIg7J2064uI7IWc7Iqk7YWM7J207Yq4LCBwb3N0IOydtOuLiOyFnOyKpO2FjOydtO2KuCDsu7TrsJTsnbgg66as65OA7ISc6rCAIOyVjOyVhOyEnCDtlZzrsKnsl5Ag66y27Ja07KSMXHJcblx0aW5kZXg6IChzdGF0ZSA9IHt9LCBhY3Rpb24pID0+IHtcclxuXHRcdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHRcdFx0Y2FzZSBIWURSQVRFOlxyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCdIWURSQVRFJywgYWN0aW9uKVxyXG5cdFx0XHRcdHJldHVybiB7Li4uc3RhdGUsIC4uLmFjdGlvbi5wYXlsb2FkfVxyXG5cdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdHJldHVybiBzdGF0ZVxyXG5cdFx0fVxyXG5cdH0sXHJcblx0dXNlcixcclxuXHRwb3N0LFxyXG59KSovXHJcblxyXG4vLyBTU1JcclxuY29uc3Qgcm9vdFJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4geyAvLyAo7J207KCE7IOB7YOcIHN0YXRlLCDslaHshZgpID0+IOuLpOydjOyDge2DnFxyXG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgSFlEUkFURTpcclxuXHRcdFx0Y29uc29sZS5sb2coJ3JlZHVjZXIgcm9vdFJlZHVjZXIgSFlEUkFURSA6OiAnLCBhY3Rpb24pXHJcblx0XHRcdHJldHVybiBhY3Rpb24ucGF5bG9hZFxyXG5cdFx0ZGVmYXVsdDoge1xyXG5cdFx0XHRjb25zdCBjb21iaW5lZFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG5cdFx0XHRcdHVzZXIsXHJcblx0XHRcdFx0cG9zdCxcclxuXHRcdFx0fSlcclxuXHRcdFx0cmV0dXJuIGNvbWJpbmVkUmVkdWNlcihzdGF0ZSwgYWN0aW9uKVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuLypyZWR1Y2Vycy9pbmRleC5qcyDrs7Tsi5zrqbQgdXNlciDrnpEgcG9zdCDrpbwg67aI65+s7JmA7IScIO2Vqey5mOqzoCDsnojsirXri4jri6QuXHJcbnJvb3RSZWR1Y2VyIOqwgCBzdGF0ZSDqs6AsIHVzZXIg7JmAIHBvc3Qg64qUIOqwgeqwgSBzdGF0ZS51c2VyLCBzdGF0ZS5wb3N0IOqwgCDrkKnri4jri6QuXHJcbnVzZXIuanPsnZggbWXripQgc3RhdGUudXNlci5tZeqwgCDrkKnri4jri6QuKi9cclxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXJcclxuIiwiLy9pbXBvcnQgc2hvcnRJZCBmcm9tICdzaG9ydGlkJyBmcm9udFxyXG4vL2ltcG9ydCBwcm9kdWNlIGZyb20gJ2ltbWVyJ1xyXG5pbXBvcnQgcHJvZHVjZSBmcm9tICcuLi91dGlsL3Byb2R1Y2UnOyAvLyBpZTExIOyngOybkO2VmOq4sOychO2VtCDrlLDroZwgcHJvZHVjZSDtlajsiJgg66eM65OsXHJcbi8vaW1wb3J0IGZha2VyIGZyb20gJ2Zha2VyJyBmcm9udFxyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuXHRtYWluUG9zdHM6IFtdLCAvLyDqsozsi5zrrLwg7Jes65+s6rCcXHJcblx0c2luZ2xlUG9zdDogbnVsbCwgLy8g6rKM7Iuc66y8IO2VmOuCmOunjFxyXG5cdGltYWdlUGF0aHM6IFtdLCAvLyDsnbTrr7jsp4Ag6rK966Gc65Ok7J20IOyggOyepeuQqFxyXG5cdGhhc01vcmVQb3N0czogdHJ1ZSwgLy8g642UIOunjuydgCDqsozsi5zrrLwg6rCA7KC47Jik6riwXHJcblx0bGlrZVBvc3RMb2FkaW5nOiBmYWxzZSwgLy8g65287J207YGsIOuhnOuTnOykkSDroZzrlKlcclxuXHRsaWtlUG9zdERvbmU6IGZhbHNlLCAvLyDrnbzsnbTtgawg7JmE66OM7ZaI7J2E65WMIHRydWUg67OA7ZmYXHJcblx0bGlrZVBvc3RFcnJvcjogbnVsbCxcclxuXHRyZXR3ZWV0TG9hZGluZzogZmFsc2UsIC8vIOumrO2KuOyclyDroZzrk5zspJEg66Gc65SpXHJcblx0cmV0d2VldERvbmU6IGZhbHNlLCAvLyDrpqztirjsnJcg7JmE66OM7KSRIOuhnOuUqVxyXG5cdHJldHdlZXRFcnJvcjogbnVsbCxcclxuXHR1bmxpa2VQb3N0TG9hZGluZzogZmFsc2UsIC8vIOyWuOudvOydtO2BrCDroZzrk5wg7KSRIOuhnOuUqVxyXG5cdHVubGlrZVBvc3REb25lOiBmYWxzZSwgLy8g7Ja465287J207YGsIOyZhOujjO2WiOydhOuVjCB0cnVlIOuzgO2ZmFxyXG5cdHVubGlrZVBvc3RFcnJvcjogbnVsbCxcclxuXHRsb2FkUG9zdExvYWRpbmc6IGZhbHNlLCAvLyDqsozsi5zquIAg66Gc65Oc7KSRIOuhnOuUqVxyXG5cdGxvYWRQb3N0RG9uZTogZmFsc2UsIC8vIOqyjOyLnOq4gCDroZzrk5wg7JmE66OM65CY7JeI7J2E65WMIHRydWUg67OA7ZmYXHJcblx0bG9hZFBvc3RFcnJvcjogbnVsbCxcclxuXHR1cGxvYWRJbWFnZXNMb2FkaW5nOiBmYWxzZSwgLy8g7J2066+47KeAIOuhnOuTnCDspJEg66Gc65SpXHJcblx0dXBsb2FkSW1hZ2VzRG9uZTogZmFsc2UsIC8vIOydtOuvuOyngCDroZzrk5wg7JmE66OM7ZaI7J2E65WMIHRydWUg67OA7ZmYXHJcblx0dXBsb2FkSW1hZ2VzRXJyb3I6IG51bGwsXHJcblx0Lypsb2FkVXNlclBvc3RzTG9hZGluZzogZmFsc2UsIC8vIO2KueyglSDsgqzsmqnsnpAg6rKM7Iuc6riAIOuhnOuTnOykkSDroZzrlKlcclxuXHRsb2FkVXNlclBvc3RzRG9uZTogZmFsc2UsIC8vIO2KueyglSDsgqzsmqnsnpAg6rKM7Iuc6riAIOuhnOuTnCDsmYTro4zsi5wgdHJ1ZSDrs4DtmZhcclxuXHRsb2FkVXNlclBvc3RzRXJyb3I6IG51bGwsKi9cclxuXHRsb2FkUG9zdHNMb2FkaW5nOiBmYWxzZSwgLy8g7ZmU66m0IOuhnOuTnOykkSDroZzrlKlcclxuXHRsb2FkUG9zdHNEb25lOiBmYWxzZSwgLy8g7ZmU66m0IOuhnOuTnCDsmYTro4zrkJjsl4jsnYTrlYwgdHJ1ZSDrs4DtmZhcclxuXHRsb2FkUG9zdHNFcnJvcjogbnVsbCxcclxuXHQvKmxvYWRIYXNodGFnUG9zdHNMb2FkaW5nOiBmYWxzZSwgLy8g7ZW07Ims7YOc6re4IOqyjOyLnOq4gOuTpCDroZzrk5zspJEg66Gc65SpXHJcblx0bG9hZEhhc2h0YWdQb3N0c0RvbmU6IGZhbHNlLCAvLyDtlbTsiaztg5zqt7gg6rKM7Iuc6riAIOuhnOuTnCDsmYTro4zrkJjsl4jsnYTrlYwgdHJ1ZSDrs4DtmZhcclxuXHRsb2FkSGFzaHRhZ1Bvc3RzRXJyb3I6IG51bGwsKi9cclxuXHRhZGRQb3N0TG9hZGluZzogZmFsc2UsIC8vIOqyjOyLnOusvCDrk7HroZ3spJEg66Gc65SpXHJcblx0YWRkUG9zdERvbmU6IGZhbHNlLCAvLyDqsozsi5zrrLwg7LaU6rCA6rCAIOyZhOujjOuQmOyXiOydhOuVjCB0cnVlIOuzgO2ZmFxyXG5cdGFkZFBvc3RFcnJvcjogbnVsbCxcclxuXHR1cGRhdGVQb3N0TG9hZGluZzogZmFsc2UsIC8vIOqyjOyLnOq4gCDsiJjsoJUg66Gc65SpXHJcblx0dXBkYXRlUG9zdERvbmU6IGZhbHNlLCAvLyDqsozsi5zquIAg7IiY7KCVIOyZhOujjCDtm4Qg66Gc65SpXHJcblx0dXBkYXRlUG9zdEVycm9yOm51bGwsXHJcblx0cmVtb3ZlUG9zdExvYWRpbmc6IGZhbHNlLCAvLyDqsozsi5zrrLwg7IKt7KCc7KSRIOuhnOuUqVxyXG5cdHJlbW92ZVBvc3REb25lOiBmYWxzZSwgLy8g6rKM7Iuc66y8IOyCreygnOqwgCDsmYTro4zrkJjsl4jsnYTrlYwgdHJ1ZSDrs4DtmZhcclxuXHRyZW1vdmVQb3N0RXJyb3I6IG51bGwsXHJcblx0YWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLCAvLyDrjJPquIAg65Ox66Gd7KSRIOuhnOuUqVxyXG5cdGFkZENvbW1lbnREb25lOiBmYWxzZSwgLy8g6rKM7Iuc66y8IOy2lOqwgOqwgCDsmYTro4zrkJjsl4jsnYTrlYwgdHJ1ZSDrs4DtmZhcclxuXHRhZGRDb21tZW50RXJyb3I6IG51bGwsXHJcbn1cclxuLy8g7J2067aA67aE7J2EIOyCrOyaqe2VtOyEnCDrrLTtlZwg7Iqk7YGs66Gk66eB7J2EIOunjOuTpOqygyBmcm9udFxyXG4vKmV4cG9ydCBjb25zdCBnZW5lcmF0ZUR1bW15UG9zdCA9IChudW1iZXIpID0+IEFycmF5KG51bWJlcikuZmlsbCgpLm1hcCgoKSA9PiAoe1xyXG5cdGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcblx0VXNlcjoge1xyXG5cdFx0aWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuXHRcdG5pY2tuYW1lOiBmYWtlci5uYW1lLmZpbmROYW1lKCksXHJcblx0fSxcclxuXHRjb250ZW50OiBmYWtlci5sb3JlbS5wYXJhZ3JhcGgoKSxcclxuXHRJbWFnZXM6IFt7XHJcblx0XHRzcmM6IGZha2VyLmltYWdlLmltYWdlKCksXHJcblx0fV0sXHJcblx0Q29tbWVudHM6IFt7XHJcblx0XHRVc2VyOiB7XHJcblx0XHRcdGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcblx0XHRcdG5pY2tuYW1lOiBmYWtlci5uYW1lLmZpbmROYW1lKCksXHJcblx0XHR9LFxyXG5cdFx0Y29udGVudDogZmFrZXIubG9yZW0uc2VudGVuY2UoKSxcclxuXHR9XSxcclxufSkpKi9cclxuXHJcbi8v6rKM7Iuc6riAIOyVoeyFmFxyXG5leHBvcnQgY29uc3QgTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1QgPSAnTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1QnXHJcbmV4cG9ydCBjb25zdCBMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTUyA9ICdMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTUydcclxuZXhwb3J0IGNvbnN0IExPQURfSEFTSFRBR19QT1NUU19GQUlMVVJFID0gJ0xPQURfSEFTSFRBR19QT1NUU19GQUlMVVJFJ1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9QT1NUU19SRVFVRVNUID0gJ0xPQURfVVNFUl9QT1NUU19SRVFVRVNUJzsgLy8g7Yq57KCVIOyCrOyaqeyekOydmCDqsozsi5zquIDsnYQg66Gc65Sp7ZWY66m0IOuwlOuhnCBMT0FEX1BPU1RTX1JFUVVFU1Qg66W8IO2YuOy2nO2VtOykhOqyg1xyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1BPU1RTX1NVQ0NFU1MgPSAnTE9BRF9VU0VSX1BPU1RTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1BPU1RTX0ZBSUxVUkUgPSAnTE9BRF9VU0VSX1BPU1RTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfUkVRVUVTVCA9ICdMT0FEX1BPU1RTX1JFUVVFU1QnOyAvLyDtmZTrqbTsnYQg66Gc65Sp7ZWY66m0IOuwlOuhnCBMT0FEX1BPU1RTX1JFUVVFU1Qg66W8IO2YuOy2nO2VtOykhOqyg1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19TVUNDRVNTID0gJ0xPQURfUE9TVFNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX0ZBSUxVUkUgPSAnTE9BRF9QT1NUU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RfUkVRVUVTVCA9ICdMT0FEX1BPU1RfUkVRVUVTVCcgLy8g6rKM7Iuc66y87J2EIOuhnOuUqe2VmOuptCDrsJTroZwgTE9BRF9QT1NUX1JFUVVFU1Qg66W8IO2YuOy2nO2VtOykhOqyg1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUX1NVQ0NFU1MgPSAnTE9BRF9QT1NUX1NVQ0NFU1MnXHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RfRkFJTFVSRSA9ICdMT0FEX1BPU1RfRkFJTFVSRSdcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9SRVFVRVNUID0gJ0FERF9QT1NUX1JFUVVFU1QnOyAvLyDrs4DsiJjroZwg65Sw66GcIOunjOuTpOyWtOykmOyVvCDspJHqsITsl5Ag7Jik7YOA6rCA64KY64qUIOydvOydhCDrp4nsnYQg7IiYIOyeiOuLpFxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfU1VDQ0VTUyA9ICdBRERfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX0ZBSUxVUkUgPSAnQUREX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgVVBEQVRFX1BPU1RfUkVRVUVTVCA9ICdVUERBVEVfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFVQREFURV9QT1NUX1NVQ0NFU1MgPSAnVVBEQVRFX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBVUERBVEVfUE9TVF9GQUlMVVJFID0gJ1VQREFURV9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExJS0VfUE9TVF9SRVFVRVNUID0gJ0xJS0VfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExJS0VfUE9TVF9TVUNDRVNTID0gJ0xJS0VfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExJS0VfUE9TVF9GQUlMVVJFID0gJ0xJS0VfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBVUExPQURfSU1BR0VTX1JFUVVFU1QgPSAnVVBMT0FEX0lNQUdFU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFVQTE9BRF9JTUFHRVNfU1VDQ0VTUyA9ICdVUExPQURfSU1BR0VTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgVVBMT0FEX0lNQUdFU19GQUlMVVJFID0gJ1VQTE9BRF9JTUFHRVNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgVU5MSUtFX1BPU1RfUkVRVUVTVCA9ICdVTkxJS0VfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFVOTElLRV9QT1NUX1NVQ0NFU1MgPSAnVU5MSUtFX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9GQUlMVVJFID0gJ1VOTElLRV9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1JFUVVFU1QgPSAnUkVNT1ZFX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9TVUNDRVNTID0gJ1JFTU9WRV9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfRkFJTFVSRSA9ICdSRU1PVkVfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9SRVFVRVNUID0gJ0FERF9DT01NRU5UX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfU1VDQ0VTUyA9ICdBRERfQ09NTUVOVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX0ZBSUxVUkUgPSAnQUREX0NPTU1FTlRfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgUkVUV0VFVF9SRVFVRVNUID0gJ1JFVFdFRVRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBSRVRXRUVUX1NVQ0NFU1MgPSAnUkVUV0VFVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFJFVFdFRVRfRkFJTFVSRSA9ICdSRVRXRUVUX0ZBSUxVUkUnXHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0lNQUdFID0gJ1JFTU9WRV9JTUFHRSc7IC8vIOuPmeq4sCDsmLXshZjsnYAg7ZWY64KY66eMIOunjOuTpOyWtOuPhCDrkJzri6RcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRQb3N0ID0gKGRhdGEpID0+ICh7XHJcblx0dHlwZTogQUREX1BPU1RfUkVRVUVTVCxcclxuXHRkYXRhLFxyXG59KVxyXG5cclxuLy8gZHluYW1pYyBhY3Rpb24gY3JlYXRlXHJcbmV4cG9ydCBjb25zdCBhZGRDb21tZW50ID0gKGRhdGEpID0+ICh7XHJcblx0dHlwZTogQUREX0NPTU1FTlRfUkVRVUVTVCxcclxuXHRkYXRhLFxyXG59KVxyXG5cclxuLyogZnJvbnQgZHVtbXlcclxuY29uc3QgZHVtbXlQb3N0ID0gKGRhdGEpID0+ICh7XHJcblx0aWQ6IGRhdGEuaWQsXHJcblx0Y29udGVudDogZGF0YS5jb250ZW50LFxyXG5cdFVzZXI6IHtcclxuXHRcdGlkOiAxLFxyXG5cdFx0bmlja25hbWU6ICfruYTtg4Drr7wnLFxyXG5cdH0sXHJcblx0SW1hZ2VzOiBbXSxcclxuXHRDb21tZW50czogW10sXHJcbn0pXHJcbiovXHJcblxyXG4vKiBmcm9udCBkdW1teVxyXG5jb25zdCBkdW1teUNvbW1lbnQgPSAoZGF0YSkgPT4gKHtcclxuXHRpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG5cdGNvbnRlbnQ6IGRhdGEsXHJcblx0VXNlcjoge1xyXG5cdFx0aWQ6IDEsXHJcblx0XHRuaWNrbmFtZTogJ+u5hO2DgOuvvCcsXHJcblx0fVxyXG59KSovXHJcbi8vIOydtOyghCDsg4Htg5zrpbwg7JWh7IWY7J2EIO2Gte2VtCDri6TsnYwg7IOB7YOc66GcIOunjOuTpOyWtOuCtOuKlCDtlajsiJhcclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcclxuXHQvLyBpbW1lciDsgqzsmqnsi5wgc3RhdGUg66W8IGRyYWZ0IOuhnCDqtZDssrTtlbTso7zrqbAsIHN3aXRjaCDrrLjsnbjqsbgg7J247Iud7ZWY6rOgIGJyZWFrIOulvCDquYzrqLnsp4Drp5DsnpBcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIFJFVFdFRVRfUkVRVUVTVDpcclxuXHRcdFx0ZHJhZnQucmV0d2VldExvYWRpbmcgPSB0cnVlXHJcblx0XHRcdGRyYWZ0LnJldHdlZXREb25lID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQucmV0d2VldEVycm9yID0gbnVsbFxyXG5cdFx0XHRjb25zb2xlLmxvZygncmVkdWNlciBSRVRXRUVUX1JFUVVFU1Qg7JqU7LKtOjonKVxyXG5cdFx0XHRicmVha1xyXG5cdFx0Y2FzZSBSRVRXRUVUX1NVQ0NFU1M6IHtcclxuXHRcdFx0ZHJhZnQucmV0d2VldExvYWRpbmcgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC5yZXR3ZWV0RG9uZSA9IHRydWVcclxuXHRcdFx0ZHJhZnQubWFpblBvc3RzLnVuc2hpZnQoYWN0aW9uLmRhdGEpIC8vIOumrO2KuOycl+uQnCDqsozsi5zquIAg66mU7J247Y+s7Iqk7Yq47JeQIOy2lOqwgFxyXG5cdFx0XHRjb25zb2xlLmxvZygncmVkdWNlciBSRVRXRUVUX1NVQ0NFU1Mg7ISx6rO1OjonKVxyXG5cdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHRcdGNhc2UgUkVUV0VFVF9GQUlMVVJFOlxyXG5cdFx0XHRkcmFmdC5yZXR3ZWV0TG9hZGluZyA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LnJldHdlZXRFcnJvciA9IGFjdGlvbi5lcnJvclxyXG5cdFx0XHRjb25zb2xlLmVycm9yKCdyZWR1Y2VyIFJFVFdFRVRfRkFJTFVSRSDsi6TtjKg6OicsIGFjdGlvbi5kYXRhKVxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgUkVNT1ZFX0lNQUdFOlxyXG5cdFx0XHRkcmFmdC5pbWFnZVBhdGhzID0gZHJhZnQuaW1hZ2VQYXRocy5maWx0ZXIoKHYsIGkpID0+IGkgIT09IGFjdGlvbi5kYXRhKVxyXG5cdFx0XHRjb25zb2xlLmxvZygncmVkdWNlciBSRU1PVkVfSU1BR0Ug7ISx6rO1JylcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFVQTE9BRF9JTUFHRVNfUkVRVUVTVDpcclxuXHRcdFx0ZHJhZnQudXBsb2FkSW1hZ2VzTG9hZGluZyA9IHRydWVcclxuXHRcdFx0ZHJhZnQudXBsb2FkSW1hZ2VzRG9uZSA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LnVwbG9hZEltYWdlc0Vycm9yID0gbnVsbFxyXG5cdFx0XHRjb25zb2xlLmxvZygncmVkdWNlciBVUExPQURfSU1BR0VTX1JFUVVFU1Qg7JqU7LKtOjonKVxyXG5cdFx0XHRicmVha1xyXG5cdFx0Y2FzZSBVUExPQURfSU1BR0VTX1NVQ0NFU1M6IHtcclxuXHRcdFx0ZHJhZnQuaW1hZ2VQYXRocyA9IGRyYWZ0LmltYWdlUGF0aHMuY29uY2F0KGFjdGlvbi5kYXRhKS8v6riw7KG07J2066+47KeA6rCA7J6I7Jy866m0IOq4sOyhtOydtOuvuOyngOyXkCDstpTqsIDrkJwg7J2066+47KeAIOqwmeydtCDsl4XroZzrk5zrkJjqsoxcclxuXHRcdFx0ZHJhZnQudXBsb2FkSW1hZ2VzTG9hZGluZyA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LnVwbG9hZEltYWdlc0RvbmUgPSB0cnVlXHJcblx0XHRcdGNvbnNvbGUubG9nKCdyZWR1Y2VyIFVQTE9BRF9JTUFHRVNfU1VDQ0VTUyDshLHqs7U6OicpXHJcblx0XHRcdGJyZWFrXHJcblx0XHR9XHJcblx0XHRjYXNlIFVQTE9BRF9JTUFHRVNfRkFJTFVSRTpcclxuXHRcdFx0ZHJhZnQudXBsb2FkSW1hZ2VzTG9hZGluZyA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LnVwbG9hZEltYWdlc0Vycm9yID0gYWN0aW9uLmVycm9yXHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoJ3JlZHVjZXIgVVBMT0FEX0lNQUdFU19GQUlMVVJFIOyLpO2MqDo6OicsIGFjdGlvbi5lcnJvcilcclxuXHRcdFx0YnJlYWtcclxuXHRcdGNhc2UgTElLRV9QT1NUX1JFUVVFU1Q6XHJcblx0XHRcdGRyYWZ0Lmxpa2VQb3N0TG9hZGluZyA9IHRydWU7XHJcblx0XHRcdGRyYWZ0Lmxpa2VQb3N0RG9uZSA9IGZhbHNlO1xyXG5cdFx0XHRkcmFmdC5saWtlUG9zdEVycm9yID0gbnVsbDtcclxuXHRcdFx0Y29uc29sZS5sb2coJ3JlZHVjZXIgTElLRV9QT1NUX1JFUVVFU1Qg7JqU7LKtOjonKVxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgTElLRV9QT1NUX1NVQ0NFU1M6IHtcclxuXHRcdFx0Ly8gbWFpblBvc3RzIOyXkOyEnCBpZCDqsIAg7JWh7IWY642w7J207YSw7Y+s7Iqk7Yq47JWE7J2065SU66W8IOywvuyVhOyEnFxyXG5cdFx0XHRjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLlBvc3RJZCk7XHJcblx0XHRcdC8vIOqyjOyLnOq4gCDsoovslYTsmpQg64iE66W4IOyCrOuejOuTpOyXkOqyjCDsgqzsmqnsnpAg7JWE7J2065SU66W8IOuEo+yWtOykgOuLpFxyXG5cdFx0XHRwb3N0Lkxpa2Vycy5wdXNoKHtpZDogYWN0aW9uLmRhdGEuVXNlcklkfSk7XHJcblx0XHRcdGRyYWZ0Lmxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG5cdFx0XHRkcmFmdC5saWtlUG9zdERvbmUgPSB0cnVlO1xyXG5cdFx0XHRjb25zb2xlLmxvZygncmVkdWNlciBMSUtFX1BPU1RfU1VDQ0VTUyDshLHqs7U6OicpXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBMSUtFX1BPU1RfRkFJTFVSRTpcclxuXHRcdFx0ZHJhZnQubGlrZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcblx0XHRcdGRyYWZ0Lmxpa2VQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoJ3JlZHVjZXIgTElLRV9QT1NUX0ZBSUxVUkUg7Iuk7YyoOjo6JywgYWN0aW9uLmVycm9yKVxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgVU5MSUtFX1BPU1RfUkVRVUVTVDpcclxuXHRcdFx0ZHJhZnQudW5saWtlUG9zdExvYWRpbmcgPSB0cnVlO1xyXG5cdFx0XHRkcmFmdC51bmxpa2VQb3N0RG9uZSA9IGZhbHNlO1xyXG5cdFx0XHRkcmFmdC51bmxpa2VQb3N0RXJyb3IgPSBudWxsO1xyXG5cdFx0XHRjb25zb2xlLmxvZygncmVkdWNlciBVTkxJS0VfUE9TVF9SRVFVRVNUIOyalOyyrTo6JylcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFVOTElLRV9QT1NUX1NVQ0NFU1M6IHtcclxuXHRcdFx0Y29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5Qb3N0SWQpO1xyXG5cdFx0XHRwb3N0Lkxpa2VycyA9IHBvc3QuTGlrZXJzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEuVXNlcklkKTtcclxuXHRcdFx0ZHJhZnQudW5saWtlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuXHRcdFx0ZHJhZnQudW5saWtlUG9zdERvbmUgPSB0cnVlO1xyXG5cdFx0XHRjb25zb2xlLmxvZygncmVkdWNlciBVTkxJS0VfUE9TVF9TVUNDRVNTIOyEseqztTo6JylcclxuXHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblx0XHRjYXNlIFVOTElLRV9QT1NUX0ZBSUxVUkU6XHJcblx0XHRcdGRyYWZ0LnVubGlrZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcblx0XHRcdGRyYWZ0LnVubGlrZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuXHRcdFx0Y29uc29sZS5lcnJvcigncmVkdWNlciBVTkxJS0VfUE9TVF9GQUlMVVJFIOyLpO2MqDo6OicsIGFjdGlvbi5lcnJvcilcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIExPQURfUE9TVF9SRVFVRVNUOlxyXG5cdFx0XHRkcmFmdC5sb2FkUG9zdExvYWRpbmcgPSB0cnVlXHJcblx0XHRcdGRyYWZ0LmxvYWRQb3N0RG9uZSA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LmxvYWRQb3N0RXJyb3IgPSBudWxsXHJcblx0XHRcdGNvbnNvbGUubG9nKCdyZWR1Y2VyIExPQURfUE9TVF9SRVFVRVNUIOyalOyyrTo6ICcpXHJcblx0XHRcdGJyZWFrXHJcblx0XHRjYXNlIExPQURfUE9TVF9TVUNDRVNTOlxyXG5cdFx0XHRkcmFmdC5sb2FkUG9zdExvYWRpbmcgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC5sb2FkUG9zdERvbmUgPSB0cnVlXHJcblx0XHRcdGRyYWZ0LnNpbmdsZVBvc3QgPSBhY3Rpb24uZGF0YTsgLy8g7ZWY64KY7J2YIOqyjOyLnOusvOunjCDroZzrk5xcclxuXHRcdFx0Y29uc29sZS5sb2coJ3JlZHVjZXIgTE9BRF9QT1NUX1NVQ0NFU1Mg7ISx6rO1OjogJylcclxuXHRcdFx0YnJlYWtcclxuXHRcdGNhc2UgTE9BRF9QT1NUX0ZBSUxVUkU6XHJcblx0XHRcdGRyYWZ0LmxvYWRQb3N0TG9hZGluZyA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LmxvYWRQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3JcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRcdC8q67O07Ya1IOydtOugh+qyjCDqsJnsnbQg7JO47IiY7J6I64qUIOqyveyasOuKlCDtlZwg7Y6Y7J207KeA7JeQ7IScIOyVoeyFmCDrkZDqsJzqsIAg6rCZ7J20IOyCrOyaqeuQmOyngCDslYrsnYTrlYzripQg7IOB7YOc6rCAIOyEnOuhnCDqs7XsnKDrkJjrj4Qg65Cc64ukKi9cclxuXHRcdGNhc2UgTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1Q6XHJcblx0XHRjYXNlIExPQURfSEFTSFRBR19QT1NUU19SRVFVRVNUOlxyXG5cdFx0Y2FzZSBMT0FEX1BPU1RTX1JFUVVFU1Q6XHJcblx0XHRcdGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSB0cnVlO1xyXG5cdFx0XHRkcmFmdC5sb2FkUG9zdHNEb25lID0gZmFsc2U7XHJcblx0XHRcdGRyYWZ0LmxvYWRQb3N0c0Vycm9yID0gbnVsbDtcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIExPQURfVVNFUl9QT1NUU19TVUNDRVNTOlxyXG5cdFx0Y2FzZSBMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTUzpcclxuXHRcdGNhc2UgTE9BRF9QT1NUU19TVUNDRVNTOlxyXG5cdFx0XHRkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gZmFsc2U7XHJcblx0XHRcdGRyYWZ0LmxvYWRQb3N0c0RvbmUgPSB0cnVlO1xyXG5cdFx0XHQvLyBhY3Rpb24uZGF0YSDsl5AgZHVtbXkgZGF0YSDqsIAg65Ok7Ja07J6I7J2E6rKD7J2066mwLCDquLDsobTrjbDsnbTthLDsmYAg7ZWp7LOQ7KO864qU6rKDXHJcblx0XHRcdC8vIGNvbmNhdCDsnYQg7ZWg65WQIO2VreyDgSDslZ7sl5Ag64yA7J6F7J2EIO2VtOykmOyVvO2VnOuLpCDqt7jrnpjslbwg7ZWp7LOQ7KeQXHJcblx0XHRcdC8vZHJhZnQubWFpblBvc3RzID0gYWN0aW9uLmRhdGEuY29uY2F0KGRyYWZ0Lm1haW5Qb3N0cykgZnJvbnRcclxuXHRcdFx0ZHJhZnQubWFpblBvc3RzID0gZHJhZnQubWFpblBvc3RzLmNvbmNhdChhY3Rpb24uZGF0YSk7XHJcblx0XHRcdC8vIOqyjOyLnOusvOydhCA1MCDqsJzquYzsp4Drp4wg6rCA7KC47Jik6rKg64ukXHJcblx0XHRcdC8vZHJhZnQuaGFzTW9yZVBvc3RzID0gZHJhZnQubWFpblBvc3RzLmxlbmd0aCA8IDUwIGZyb250XHJcblx0XHRcdGRyYWZ0Lmhhc01vcmVQb3N0cyA9IGFjdGlvbi5kYXRhLmxlbmd0aCA9PT0gMTA7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBMT0FEX1VTRVJfUE9TVFNfRkFJTFVSRTpcclxuXHRcdGNhc2UgTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkU6XHJcblx0XHRjYXNlIExPQURfUE9TVFNfRkFJTFVSRTpcclxuXHRcdFx0ZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IGZhbHNlO1xyXG5cdFx0XHRkcmFmdC5sb2FkUG9zdHNFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIEFERF9QT1NUX1JFUVVFU1Q6XHJcblx0XHRcdGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuXHRcdFx0ZHJhZnQuYWRkUG9zdERvbmUgPSBmYWxzZTtcclxuXHRcdFx0ZHJhZnQuYWRkUG9zdEVycm9yID0gbnVsbDtcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIEFERF9QT1NUX1NVQ0NFU1M6XHJcblx0XHRcdC8vIGRyYWZ0Lm1haW5Qb3N0cy51bnNoaWZ0KGR1bW15UG9zdChhY3Rpb24uZGF0YSkpIC8vIGZyb250IGR1bW15XHJcblx0XHRcdGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQuYWRkUG9zdERvbmUgPSB0cnVlXHJcblx0XHRcdGRyYWZ0Lm1haW5Qb3N0cy51bnNoaWZ0KGFjdGlvbi5kYXRhKSAvLyBiYWNrIOyLpOygnCDrjbDsnbTthLBcclxuXHRcdFx0ZHJhZnQuaW1hZ2VQYXRocyA9IFtdOyAvLyBhZGQgcG9zdCDshLHqs7Ug7IucLCDsgqzsmqnsnpAg6rKM7Iuc6riAIOyekeyEseyXkCDsnbTrr7jsp4Ag7LSI6riw7ZmUXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBBRERfUE9TVF9GQUlMVVJFOlxyXG5cdFx0XHRkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG5cdFx0XHRkcmFmdC5hZGRQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBVUERBVEVfUE9TVF9SRVFVRVNUOlxyXG5cdFx0XHRkcmFmdC51cGRhdGVQb3N0TG9hZGluZz10cnVlO1xyXG5cdFx0XHRkcmFmdC51cGRhdGVQb3N0RG9uZT1mYWxzZTtcclxuXHRcdFx0ZHJhZnQudXBkYXRlUG9zdEVycm9yPW51bGw7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBVUERBVEVfUE9TVF9TVUNDRVNTOlxyXG5cdFx0XHRkcmFmdC51cGRhdGVQb3N0TG9hZGluZz1mYWxzZTtcclxuXHRcdFx0ZHJhZnQudXBkYXRlUG9zdERvbmU9dHJ1ZTtcclxuXHRcdFx0ZHJhZnQubWFpblBvc3RzLmZpbmQoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLlBvc3RJZCkuY29udGVudCA9IGFjdGlvbi5kYXRhLmNvbnRlbnQ7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBVUERBVEVfUE9TVF9GQUlMVVJFOlxyXG5cdFx0XHRkcmFmdC51cGRhdGVQb3N0TG9hZGluZz1mYWxzZTtcclxuXHRcdFx0ZHJhZnQudXBkYXRlUG9zdEVycm9yPSBhY3Rpb24uZXJyb3I7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBSRU1PVkVfUE9TVF9SRVFVRVNUOlxyXG5cdFx0XHRkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IHRydWVcclxuXHRcdFx0ZHJhZnQucmVtb3ZlUG9zdERvbmUgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC5yZW1vdmVQb3N0RXJyb3IgPSBudWxsXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBSRU1PVkVfUE9TVF9TVUNDRVNTOlxyXG5cdFx0XHRkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LnJlbW92ZVBvc3REb25lID0gdHJ1ZVxyXG5cdFx0XHRkcmFmdC5tYWluUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YS5Qb3N0SWQpOyAvLyDsp4DsmrjrlZAg67O07Ya1IGZpbHRlciDqsIAg7Y647ZWY64ukXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBSRU1PVkVfUE9TVF9GQUlMVVJFOlxyXG5cdFx0XHRkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LnJlbW92ZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvclxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgQUREX0NPTU1FTlRfUkVRVUVTVDpcclxuXHRcdFx0ZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSB0cnVlXHJcblx0XHRcdGRyYWZ0LmFkZENvbW1lbnREb25lID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQuYWRkQ29tbWVudEVycm9yID0gbnVsbFxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgQUREX0NPTU1FTlRfU1VDQ0VTUzoge1xyXG5cdFx0XHQvL2FjdGlvbi5kYXRhLmNvbnRlbnQsIHBvc3RJZCwgdXNlcklkXHJcblx0XHRcdC8vY29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5wb3N0SWQpIC8vIOqyjOyLnOq4gCDrpqzsiqTtirjspJHsl5AgcG9zdCDssL7quLAgZnJvbnRcclxuXHRcdFx0Y29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5Qb3N0SWQpIC8vIOqyjOyLnOq4gCDrpqzsiqTtirjspJHsl5AgcG9zdCDssL7quLAgYmFrXHJcblx0XHRcdC8vcG9zdC5Db21tZW50cy51bnNoaWZ0KGR1bW15Q29tbWVudChhY3Rpb24uZGF0YS5jb250ZW50KSkgLy8g7LC+7J2AIHBvc3Qg7JeQIOunqCDslZ7sl5Ag6rCA7KecIOuMk+q4gCDtlZjrgpgg64Sj7Ja07KSMIEZST05UXHJcblx0XHRcdHBvc3QuQ29tbWVudHMudW5zaGlmdChhY3Rpb24uZGF0YSkgLy8g7LC+7J2AIHBvc3Qg7JeQIOyLpOygnCDrjbDsnbTthLAgYmFja1xyXG5cdFx0XHRkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LmFkZENvbW1lbnREb25lID0gdHJ1ZVxyXG5cdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHRcdGNhc2UgQUREX0NPTU1FTlRfRkFJTFVSRTpcclxuXHRcdFx0ZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC5hZGRDb21tZW50RXJyb3IgPSBhY3Rpb24uZXJyb3JcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRicmVhaztcclxuXHR9XHJcbn0pXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXJcclxuIiwiLy9pbXBvcnQgcHJvZHVjZSBmcm9tICdpbW1lcidcclxuaW1wb3J0IHByb2R1Y2UgZnJvbSAnLi4vdXRpbC9wcm9kdWNlJyAvLyBpZTExIOyngOybkO2VmOq4sOychO2VtCDrlLDroZwgcHJvZHVjZSDtlajsiJgg66eM65OsXHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG5cdGxvYWRVc2VyTG9hZGluZzogZmFsc2UsIC8vIOyDgeuMgCDsoJXrs7Qg67O06riwIOyLnOuPhOykkeydvOuVkCDroZzrlKnspJEg652E7Jq46rGw7J6EXHJcblx0bG9hZFVzZXJEb25lOiBmYWxzZSwgLy8g7IOB64yAIOygleuztCDrs7TquLAg65CoXHJcblx0bG9hZFVzZXJFcnJvcjogbnVsbCwgLy8g7IOB64yAIOygleuztCDrs7TquLDspJHsnbzrlYwg7JeQ65+sIOyXhuyVsFxyXG5cdGxvYWRNeUluZm9Mb2FkaW5nOiBmYWxzZSwgLy8g7Jyg7KCAIOygleuztCDrs7TquLAg7Iuc64+E7KSR7J2865WQIOuhnOuUqeykkSDrnYTsmrjqsbDsnoRcclxuXHRsb2FkTXlJbmZvRG9uZTogZmFsc2UsIC8vIOycoOyggCDsoJXrs7Qg67O06riwIOuQqFxyXG5cdGxvYWRNeUluZm9FcnJvcjogbnVsbCwgLy8g7Jyg7KCAIOygleuztCDrs7TquLDspJHsnbzrlYwg7JeQ65+sIOyXhuyVsFxyXG5cdHJlbW92ZUZvbGxvd2VyTG9hZGluZzogZmFsc2UsIC8vIO2MlOuhnOybjCDsnKDsoIAg7IKt7KCcIOyLnOuPhOykkeydvOuVkCDroZzrlKnspJEg652E7Jq46rGw7J6EXHJcblx0cmVtb3ZlRm9sbG93ZXJEb25lOiBmYWxzZSwgLy8g7YyU66Gc7JuMIOycoOyggCDsgq3soJwg65CoXHJcblx0cmVtb3ZlRm9sbG93ZXJFcnJvcjogbnVsbCwgLy8g7YyU66Gc7JuMIOycoOyggCDsgq3soJwg7KSR7J2865WMIOyXkOufrCDsl4bslbBcclxuXHRmb2xsb3dMb2FkaW5nOiBmYWxzZSwgLy8g7YyU66Gc7JqwIOyLnOuPhOykkeydvOuVkCDroZzrlKnspJEg652E7Jq46rGw7J6EXHJcblx0Zm9sbG93RG9uZTogZmFsc2UsIC8vIO2MlOuhnOyasCDrkKhcclxuXHRmb2xsb3dFcnJvcjogbnVsbCwgLy8g7YyU66Gc7Jqw7KSR7J2865WMIOyXkOufrCDsl4bslbBcclxuXHR1bmZvbGxvd0xvYWRpbmc6IGZhbHNlLCAvLyDslrjtjJTroZzsmrAg7Iuc64+E7KSR7J2865WQIOuhnOuUqeykkSDrnYTsmrjqsbDsnoRcclxuXHR1bmZvbGxvd0RvbmU6IGZhbHNlLCAvLyDslrjtjJTroZzsmrAg65CoXHJcblx0dW5mb2xsb3dFcnJvcjogbnVsbCwgLy8g7Ja47YyU66Gc7Jqw7KSR7J2865WMIOyXkOufrCDsl4bslbBcclxuXHRsb2FkRm9sbG93ZXJzTG9hZGluZzogZmFsc2UsIC8vIO2MlOuhnOybjCDsi5zrj4TspJHsnbzrlZAg66Gc65Sp7KSRIOudhOyauOqxsOyehFxyXG5cdGxvYWRGb2xsb3dlcnNEb25lOiBmYWxzZSwgLy8g7YyU66Gc7JuMIOuQqFxyXG5cdGxvYWRGb2xsb3dlcnNFcnJvcjogbnVsbCwgLy8g7YyU66Gc7JuM7J2865WMIOyXkOufrCDsl4bslbBcclxuXHRsb2FkRm9sbG93aW5nc0xvYWRpbmc6IGZhbHNlLCAvLyDtjJTroZzsnJkg7Iuc64+E7KSR7J2865WQIOuhnOuUqeykkSDrnYTsmrjqsbDsnoRcclxuXHRsb2FkRm9sbG93aW5nc0RvbmU6IGZhbHNlLCAvLyDtjJTroZzsnJkg65CoXHJcblx0bG9hZEZvbGxvd2luZ3NFcnJvcjogbnVsbCwgLy8g7YyU66Gc7JyZIOykkeydvOuVjCDsl5Drn6wg7JeG7JWwXHJcblx0bG9nSW5Mb2FkaW5nOiBmYWxzZSwgLy8g66Gc6re47J24IOyLnOuPhOykkeydvOuVkCDroZzrlKnspJEg652E7Jq46rGw7J6EXHJcblx0bG9nSW5Eb25lOiBmYWxzZSwgLy8g66Gc6re47J24IOuQqFxyXG5cdGxvZ0luRXJyb3I6IG51bGwsIC8vIOuhnOuUqeykkeydvOuVjCDsl5Drn6wg7JeG7JWwXHJcblx0bG9nT3V0TG9hZGluZzogZmFsc2UsIC8vIOuhnOq3uOyVhOybgyDsi5zrj4TspJFcclxuXHRsb2dPdXREb25lOiBmYWxzZSwgLy8g66Gc6re47JWE7JuDIOyZhOujjFxyXG5cdGxvZ091dEVycm9yOiBudWxsLFxyXG5cdHNpZ25VcExvYWRpbmc6IGZhbHNlLCAvLyDtmozsm5DqsIDsnoUg66Gc65Sp7KSRXHJcblx0c2lnblVwRG9uZTogZmFsc2UsIC8vIO2ajOybkCDqsIDsnoUg7JmE66OMXHJcblx0c2lnblVwRXJyb3I6IG51bGwsXHJcblx0Y2hhbmdlTmlja25hbWVMb2FkaW5nOiBmYWxzZSwgLy8g64uJ64Sk7J6EIOuzgOqyvSDroZzrlKnspJFcclxuXHRjaGFuZ2VOaWNrbmFtZURvbmU6IGZhbHNlLCAvLyDri4nrhKTsnoQg67OA6rK9IOyZhOujjFxyXG5cdGNoYW5nZU5pY2tuYW1lRXJyb3I6IG51bGwsXHJcblx0bWU6IG51bGwsXHJcblx0c2lnblVwRGF0YToge30sIC8vIO2ajOybkCDqsIDsnoUg642w7J207YSwXHJcblx0bG9naW5EYXRhOiB7fSxcclxuXHR1c2VySW5mbzogbnVsbCxcclxufVxyXG5cclxuLy8g66Gc6re47J24IOyVoeyFmCDsg53shLHquLAgdGh1bmtcclxuLy8gZXhwb3J0IGNvbnN0IGxvZ2luQWN0aW9uID0gKGRhdGEpID0+IHsgLy8g7ZWo7IiY66W8IOumrO2EtO2VmOuKlCDruYTrj5nquLAg7JWh7IWYIO2BrOumrOyXkOydtO2EsOqwgCDstpTqsIBcclxuLy8gXHRyZXR1cm4gKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xyXG4vLyBcdFx0Y29uc3Qgc3RhdGUgPSBnZXRTdGF0ZSgpXHJcbi8vIFx0XHRkaXNwYXRjaChsb2dpblJlcXVlc3RBY3Rpb24oKSlcclxuLy8gXHRcdGF4aW9zLnBvc3QoJy9hcGkvbG9naW4nKVxyXG4vLyBcdFx0XHRcdC50aGVuKChyZXMpID0+IHtcclxuLy8gXHRcdFx0XHRcdGRpc3BhdGNoKGxvZ2luU3VjY2Vzc0FjdGlvbihyZXMuZGF0YSkpXHJcbi8vIFx0XHRcdFx0fSlcclxuLy8gXHRcdFx0XHQuY2F0Y2goKGVycm9yKSA9PiB7XHJcbi8vIFx0XHRcdFx0XHRkaXNwYXRjaChsb2dpbkZhaWx1cmVBY3Rpb24oZXJyb3IpKVxyXG4vLyBcdFx0XHRcdH0pXHJcbi8vIFx0fVxyXG4vLyB9XHJcblxyXG4vLyBhY3Rpb25zXHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfUkVRVUVTVCA9ICdMT0FEX1VTRVJfUkVRVUVTVCdcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9TVUNDRVNTID0gJ0xPQURfVVNFUl9TVUNDRVNTJ1xyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX0ZBSUxVUkUgPSAnTE9BRF9VU0VSX0ZBSUxVUkUnXHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9NWV9JTkZPX1JFUVVFU1QgPSAnTE9BRF9NWV9JTkZPX1JFUVVFU1QnXHJcbmV4cG9ydCBjb25zdCBMT0FEX01ZX0lORk9fU1VDQ0VTUyA9ICdMT0FEX01ZX0lORk9fU1VDQ0VTUydcclxuZXhwb3J0IGNvbnN0IExPQURfTVlfSU5GT19GQUlMVVJFID0gJ0xPQURfTVlfSU5GT19GQUlMVVJFJ1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9GT0xMT1dFUl9SRVFVRVNUID0gJ1JFTU9WRV9GT0xMT1dFUl9SRVFVRVNUJ1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1MgPSAnUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1MnXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRSA9ICdSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRSdcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fUkVRVUVTVCA9ICdMT0dfSU5fUkVRVUVTVCdcclxuZXhwb3J0IGNvbnN0IExPR19JTl9TVUNDRVNTID0gJ0xPR19JTl9TVUNDRVNTJ1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX0ZBSUxVUkUgPSAnTE9HX0lOX0ZBSUxVUkUnXHJcblxyXG5leHBvcnQgY29uc3QgTE9HX09VVF9SRVFVRVNUID0gJ0xPR19PVVRfUkVRVUVTVCdcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfU1VDQ0VTUyA9ICdMT0dfT1VUX1NVQ0NFU1MnXHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX0ZBSUxVUkUgPSAnTE9HX09VVF9GQUlMVVJFJ1xyXG5cclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfUkVRVUVTVCA9ICdTSUdOX1VQX1JFUVVFU1QnXHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1NVQ0NFU1MgPSAnU0lHTl9VUF9TVUNDRVNTJ1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9GQUlMVVJFID0gJ1NJR05fVVBfRkFJTFVSRSdcclxuXHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfUkVRVUVTVCA9ICdDSEFOR0VfTklDS05BTUVfUkVRVUVTVCdcclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTID0gJ0NIQU5HRV9OSUNLTkFNRV9TVUNDRVNTJ1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUgPSAnQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUnXHJcblxyXG5leHBvcnQgY29uc3QgRk9MTE9XX1JFUVVFU1QgPSAnRk9MTE9XX1JFUVVFU1QnXHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfU1VDQ0VTUyA9ICdGT0xMT1dfU1VDQ0VTUydcclxuZXhwb3J0IGNvbnN0IEZPTExPV19GQUlMVVJFID0gJ0ZPTExPV19GQUlMVVJFJ1xyXG5cclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1JFUVVFU1QgPSAnVU5GT0xMT1dfUkVRVUVTVCdcclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1NVQ0NFU1MgPSAnVU5GT0xMT1dfU1VDQ0VTUydcclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX0ZBSUxVUkUgPSAnVU5GT0xMT1dfRkFJTFVSRSdcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0VSU19SRVFVRVNUID0gJ0xPQURfRk9MTE9XRVJTX1JFUVVFU1QnXHJcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0VSU19TVUNDRVNTID0gJ0xPQURfRk9MTE9XRVJTX1NVQ0NFU1MnXHJcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0VSU19GQUlMVVJFID0gJ0xPQURfRk9MTE9XRVJTX0ZBSUxVUkUnXHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1QgPSAnTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1QnXHJcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUyA9ICdMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUydcclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XSU5HU19GQUlMVVJFID0gJ0xPQURfRk9MTE9XSU5HU19GQUlMVVJFJ1xyXG5cclxuLy8g7Jyg7KCAIOumrOuTgOyEnOydmCDsg4Htg5zrpbwg67CU6r+A7IiY7J6I64qUIOyVoeyFmCDsg53shLFcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1RPX01FID0gJ0FERF9QT1NUX1RPX01FJ1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfT0ZfTUUgPSAnUkVNT1ZFX1BPU1RfT0ZfTUUnXHJcblxyXG4vKiBmcm9udFxyXG5jb25zdCBkdW1teVVzZXIgPSAoZGF0YSkgPT4gKHtcclxuXHQuLi5kYXRhLFxyXG5cdG5pY2tuYW1lOiAn67mE7YOA66+8JyxcclxuXHRpZDogMSxcclxuXHRQb3N0czogW3tpZDogMX1dLFxyXG5cdEZvbGxvd2luZ3M6IFt7bmlja25hbWU6ICfsmbjrhbgnfSwge25pY2tuYW1lOiAn7J2M66mUJ30sIHtuaWNrbmFtZTogJ+yNvSd9LCB7bmlja25hbWU6ICfsmKTrjJUnfSwge25pY2tuYW1lOiAn66eM672AJ31dLFxyXG5cdEZvbGxvd2VyczogW3tuaWNrbmFtZTogJ+q5jOunpCd9LCB7bmlja25hbWU6ICfrp4zrkZAnfSwge25pY2tuYW1lOiAn67O07LGZJ30sIHtuaWNrbmFtZTogJ+uSt+qwgCd9LCB7bmlja25hbWU6ICfslbzrjaknfV0sXHJcbn0pKi9cclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpblJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4gKHtcclxuXHR0eXBlOiBMT0dfSU5fUkVRVUVTVCxcclxuXHRkYXRhLFxyXG59KTtcclxuLy8g66Gc6re47JWE7JuDIOyVoeyFmCDsg53shLHquLAgdGh1bmtcclxuLy8gZXhwb3J0IGNvbnN0IGxvZ291dEFjdGlvbiA9IChkYXRhKSA9PiB7XHJcbi8vIFx0cmV0dXJuIChkaXNwYXRjaCkgPT4ge1xyXG4vLyBcdFx0YXhpb3MucG9zdCgnL2FwaS9sb2dvdXQnKVxyXG4vLyBcdFx0XHRcdC50aGVuKCgpID0+IHtcclxuLy8gXHRcdFx0XHRcdGRpc3BhdGNoKGxvZ291dFN1Y2Nlc3NBY3Rpb24oKSlcclxuLy8gXHRcdFx0XHR9KVxyXG4vLyBcdFx0XHRcdC5jYXRjaCgoKSA9PiB7XHJcbi8vIFx0XHRcdFx0XHRkaXNwYXRjaChsb2dvdXRGYWlsdXJlQWN0aW9uKCkpXHJcbi8vIFx0XHRcdFx0fSlcclxuLy8gXHR9XHJcbi8vIH1cclxuZXhwb3J0IGNvbnN0IGxvZ291dFJlcXVlc3RBY3Rpb24gPSAoKSA9PiAoe1xyXG5cdHR5cGU6IExPR19PVVRfUkVRVUVTVCxcclxufSlcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSBSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVDpcclxuXHRcdFx0ZHJhZnQucmVtb3ZlRm9sbG93ZXJMb2FkaW5nID0gdHJ1ZVxyXG5cdFx0XHRkcmFmdC5yZW1vdmVGb2xsb3dlckVycm9yID0gbnVsbFxyXG5cdFx0XHRkcmFmdC5yZW1vdmVGb2xsb3dlckRvbmUgPSBmYWxzZVxyXG5cdFx0XHRjb25zb2xlLmxvZygncmVkdWNlciByZW1vdmVGb2xsb3dlciDsmpTssq0nKVxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1M6XHJcblx0XHRcdC8vIOuCmOydmCDtjJTroZzsm4wg7KCc6rGwXHJcblx0XHRcdGRyYWZ0LnJlbW92ZUZvbGxvd2VyTG9hZGluZyA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0Lm1lLkZvbGxvd2VycyA9IGRyYWZ0Lm1lLkZvbGxvd2Vycy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLlVzZXJJZClcclxuXHRcdFx0ZHJhZnQucmVtb3ZlRm9sbG93ZXJEb25lID0gdHJ1ZVxyXG5cdFx0XHRjb25zb2xlLmxvZygncmVkdWNlciByZW1vdmVGb2xsb3dlciDshLHqs7UnKVxyXG5cdFx0XHRicmVha1xyXG5cdFx0Y2FzZSBSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRTpcclxuXHRcdFx0Y29uc29sZS5lcnJvcigncmVtb3ZlRm9sbG93ZXJGYWlsIOyLpO2MqDo6ICcgKyBhY3Rpb24uZXJyb3IpXHJcblx0XHRcdGRyYWZ0LnJlbW92ZUZvbGxvd2VyTG9hZGluZyA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LnJlbW92ZUZvbGxvd2VyRXJyb3IgPSBhY3Rpb24uZXJyb3JcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIExPQURfRk9MTE9XSU5HU19SRVFVRVNUOlxyXG5cdFx0XHRkcmFmdC5sb2FkRm9sbG93aW5nc0xvYWRpbmcgPSB0cnVlXHJcblx0XHRcdGRyYWZ0LmxvYWRGb2xsb3dpbmdzRXJyb3IgPSBudWxsXHJcblx0XHRcdGRyYWZ0LmxvYWRGb2xsb3dpbmdzRG9uZSA9IGZhbHNlXHJcblx0XHRcdGNvbnNvbGUubG9nKCdyZWR1Y2VyIExPQURfRk9MTE9XSU5HU19SRVFVRVNUIOyalOyyrScpXHJcblx0XHRcdGJyZWFrXHJcblx0XHRjYXNlIExPQURfRk9MTE9XSU5HU19TVUNDRVNTOlxyXG5cdFx0XHRkcmFmdC5sb2FkRm9sbG93aW5nc0xvYWRpbmcgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC5tZS5Gb2xsb3dpbmdzID0gYWN0aW9uLmRhdGFcclxuXHRcdFx0ZHJhZnQubG9hZEZvbGxvd2luZ3NEb25lID0gdHJ1ZVxyXG5cdFx0XHRjb25zb2xlLmxvZygncmVkdWNlciBMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUyDshLHqs7UnKVxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkU6XHJcblx0XHRcdGRyYWZ0LmxvYWRGb2xsb3dpbmdzTG9hZGluZyA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LmxvYWRGb2xsb3dpbmdzRXJyb3IgPSBhY3Rpb24uZXJyb3JcclxuXHRcdFx0Y29uc29sZS5lcnJvcigncmVkdWNlciBMT0FEX0ZPTExPV0lOR1Mg7Iuk7YyoJywgYWN0aW9uLmVycm9yKVxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgTE9BRF9GT0xMT1dFUlNfUkVRVUVTVDpcclxuXHRcdFx0ZHJhZnQubG9hZEZvbGxvd2Vyc0xvYWRpbmcgPSB0cnVlXHJcblx0XHRcdGRyYWZ0LmxvYWRGb2xsb3dlcnNFcnJvciA9IG51bGxcclxuXHRcdFx0ZHJhZnQubG9hZEZvbGxvd2Vyc0RvbmUgPSBmYWxzZVxyXG5cdFx0XHRjb25zb2xlLmxvZygncmVkdWNlciBMT0FEX0ZPTExPV0VSU19SRVFVRVNUIOyalOyyrScpXHJcblx0XHRcdGJyZWFrXHJcblx0XHRjYXNlIExPQURfRk9MTE9XRVJTX1NVQ0NFU1M6XHJcblx0XHRcdGRyYWZ0LmxvYWRGb2xsb3dlcnNMb2FkaW5nID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQubWUuRm9sbG93ZXJzID0gYWN0aW9uLmRhdGFcclxuXHRcdFx0ZHJhZnQubG9hZEZvbGxvd2Vyc0RvbmUgPSB0cnVlXHJcblx0XHRcdGNvbnNvbGUubG9nKCdyZWR1Y2VyIExPQURfRk9MTE9XRVJTX1NVQ0NFU1Mg7ISx6rO1JylcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIExPQURfRk9MTE9XRVJTX0ZBSUxVUkU6XHJcblx0XHRcdGRyYWZ0LmxvYWRGb2xsb3dlcnNMb2FkaW5nID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQubG9hZEZvbGxvd2Vyc0Vycm9yID0gYWN0aW9uLmVycm9yXHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoJ3JlZHVjZXIgTE9BRF9GT0xMT1dFUlMg7Iuk7YyoJywgYWN0aW9uLmVycm9yKVxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgTE9BRF9NWV9JTkZPX1JFUVVFU1Q6XHJcblx0XHRcdC8vIHN0b3JlIOyXkOyEnCDrs7Trgrggc3RhdGUg6rCAIOunjOuTpOyWtOynkCwgc3RhdGUg7J6Q7LK06rCAIHVzZXIuanMg7J2YIHN0YXRlIOyehFxyXG5cdFx0XHRkcmFmdC5sb2FkTXlJbmZvTG9hZGluZyA9IHRydWVcclxuXHRcdFx0ZHJhZnQubG9hZE15SW5mb0Vycm9yID0gbnVsbCAvLyDroZzrlKkg7KSR7J2865WM64qUIOyXkOufrCDsl4bslbBcclxuXHRcdFx0ZHJhZnQubG9hZE15SW5mb0RvbmUgPSBmYWxzZVxyXG5cdFx0XHRjb25zb2xlLmxvZygncmVkdWNlciBteUluZm8g7JqU7LKtJylcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIExPQURfTVlfSU5GT19TVUNDRVNTOlxyXG5cdFx0XHRkcmFmdC5tZSA9IGFjdGlvbi5kYXRhIC8vIGJhY2sg64K0IOygleuztOqwgCDrk6TslrTsnojsnYxcclxuXHRcdFx0ZHJhZnQubG9hZE15SW5mb0xvYWRpbmcgPSBmYWxzZVxyXG5cdFx0XHQvL2RyYWZ0Lm1lID0gZHVtbXlVc2VyKGFjdGlvbi5kYXRhKVxyXG5cdFx0XHRkcmFmdC5sb2FkTXlJbmZvRG9uZSA9IHRydWVcclxuXHRcdFx0Y29uc29sZS5sb2coJ3JlZHVjZXIgbXlJbmZvIOyEseqztScpXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBMT0FEX01ZX0lORk9fRkFJTFVSRTpcclxuXHRcdFx0Y29uc29sZS5lcnJvcignbG9hZE15SW5mb0ZhaWwg7Iuk7YyoOjogJyArIGFjdGlvbi5lcnJvcilcclxuXHRcdFx0ZHJhZnQubG9hZE15SW5mb0xvYWRpbmcgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC5sb2FkTXlJbmZvRXJyb3IgPSBhY3Rpb24uZXJyb3JcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIExPQURfVVNFUl9SRVFVRVNUOlxyXG5cdFx0XHQvLyBzdG9yZSDsl5DshJwg67O064K4IHN0YXRlIOqwgCDrp4zrk6TslrTsp5AsIHN0YXRlIOyekOyytOqwgCB1c2VyLmpzIOydmCBzdGF0ZSDsnoRcclxuXHRcdFx0ZHJhZnQubG9hZFVzZXJMb2FkaW5nID0gdHJ1ZVxyXG5cdFx0XHRkcmFmdC5sb2FkVXNlckRvbmUgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC5sb2FkVXNlckVycm9yID0gbnVsbCAvLyDroZzrlKkg7KSR7J2865WM64qUIOyXkOufrCDsl4bslbBcclxuXHRcdFx0Y29uc29sZS5sb2coJ3JlZHVjZXIgbXlJbmZvIOyalOyyrScpXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBMT0FEX1VTRVJfU1VDQ0VTUzpcclxuXHRcdFx0ZHJhZnQubG9hZFVzZXJMb2FkaW5nID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQudXNlckluZm8gPSBhY3Rpb24uZGF0YSAvLyBiYWNrIOyDgeuMgCDsoJXrs7TqsIAg65Ok7Ja07J6I7J2MXHJcblx0XHRcdGRyYWZ0LmxvYWRVc2VyRG9uZSA9IHRydWVcclxuXHRcdFx0Ly9kcmFmdC5tZSA9IGR1bW15VXNlcihhY3Rpb24uZGF0YSlcclxuXHRcdFx0Y29uc29sZS5sb2coJ3JlZHVjZXIgbXlJbmZvIOyEseqztScpXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBMT0FEX1VTRVJfRkFJTFVSRTpcclxuXHRcdFx0Y29uc29sZS5lcnJvcignbG9hZFVzZXJGYWlsIOyLpO2MqDo6ICcgKyBhY3Rpb24uZXJyb3IpXHJcblx0XHRcdGRyYWZ0LmxvYWRVc2VyTG9hZGluZyA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LmxvYWRVc2VyRXJyb3IgPSBhY3Rpb24uZXJyb3JcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIEZPTExPV19SRVFVRVNUOlxyXG5cdFx0XHQvLyBzdG9yZSDsl5DshJwg67O064K4IHN0YXRlIOqwgCDrp4zrk6TslrTsp5AsIHN0YXRlIOyekOyytOqwgCB1c2VyLmpzIOydmCBzdGF0ZSDsnoRcclxuXHRcdFx0ZHJhZnQuZm9sbG93TG9hZGluZyA9IHRydWVcclxuXHRcdFx0ZHJhZnQuZm9sbG93RXJyb3IgPSBudWxsIC8vIOuhnOuUqSDspJHsnbzrlYzripQg7JeQ65+sIOyXhuyVsFxyXG5cdFx0XHRkcmFmdC5mb2xsb3dEb25lID0gZmFsc2VcclxuXHRcdFx0Y29uc29sZS5sb2coJ3JlZHVjZXIgRk9MTE9XX1JFUVVFU1Qg7JqU7LKtJylcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIEZPTExPV19TVUNDRVNTOlxyXG5cdFx0XHRkcmFmdC5mb2xsb3dMb2FkaW5nID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQuZm9sbG93RG9uZSA9IHRydWVcclxuXHRcdFx0Ly9kcmFmdC5tZSA9IGR1bW15VXNlcihhY3Rpb24uZGF0YSlcclxuXHRcdFx0ZHJhZnQubWUuRm9sbG93aW5ncy5wdXNoKHtpZDogYWN0aW9uLmRhdGEuVXNlcklkfSlcclxuXHRcdFx0Y29uc29sZS5sb2coJ3JlZHVjZXIgRk9MTE9XX1NVQ0NFU1Mg7ISx6rO1JylcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIEZPTExPV19GQUlMVVJFOlxyXG5cdFx0XHRkcmFmdC5mb2xsb3dMb2FkaW5nID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQuZm9sbG93RXJyb3IgPSBhY3Rpb24uZXJyb3JcclxuXHRcdFx0Y29uc29sZS5lcnJvcigncmVkdWNlciBGT0xMT1dfRkFJTFVSRSDsi6TtjKg6OicsIGFjdGlvbi5lcnJvcilcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFVORk9MTE9XX1JFUVVFU1Q6XHJcblx0XHRcdC8vIHN0b3JlIOyXkOyEnCDrs7Trgrggc3RhdGUg6rCAIOunjOuTpOyWtOynkCwgc3RhdGUg7J6Q7LK06rCAIHVzZXIuanMg7J2YIHN0YXRlIOyehFxyXG5cdFx0XHRkcmFmdC51bmZvbGxvd0xvYWRpbmcgPSB0cnVlXHJcblx0XHRcdGRyYWZ0LnVuZm9sbG93RXJyb3IgPSBudWxsIC8vIOuhnOuUqSDspJHsnbzrlYzripQg7JeQ65+sIOyXhuyVsFxyXG5cdFx0XHRkcmFmdC51bmZvbGxvd0RvbmUgPSBmYWxzZVxyXG5cdFx0XHRjb25zb2xlLmxvZygncmVkdWNlciB1bmZvbGxvdyDsmpTssq0nKVxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgVU5GT0xMT1dfU1VDQ0VTUzpcclxuXHRcdFx0ZHJhZnQudW5mb2xsb3dMb2FkaW5nID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQudW5mb2xsb3dEb25lID0gdHJ1ZVxyXG5cdFx0XHQvL2RyYWZ0Lm1lID0gZHVtbXlVc2VyKGFjdGlvbi5kYXRhKVxyXG5cdFx0XHQvLyDslrjtjJTroZzsmrAg7ZWcIOyCrOuejOunjCDruaDsp4DqsoxcclxuXHRcdFx0ZHJhZnQubWUuRm9sbG93aW5ncyA9IGRyYWZ0Lm1lLkZvbGxvd2luZ3MuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YS5Vc2VySWQpXHJcblx0XHRcdGNvbnNvbGUubG9nKCdyZWR1Y2VyIHVuZm9sbG93IOyEseqztScpXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBVTkZPTExPV19GQUlMVVJFOlxyXG5cdFx0XHRkcmFmdC51bmZvbGxvd0xvYWRpbmcgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC51bmZvbGxvd0Vycm9yID0gYWN0aW9uLmVycm9yXHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoJ3JlZHVjZXIgdW5mb2xsb3cg7Iuk7YyoOjonLCBhY3Rpb24uZXJyb3IpXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBMT0dfSU5fUkVRVUVTVDpcclxuXHRcdFx0ZHJhZnQubG9nSW5Mb2FkaW5nID0gdHJ1ZVxyXG5cdFx0XHRkcmFmdC5sb2dJbkVycm9yID0gbnVsbFxyXG5cdFx0XHRkcmFmdC5sb2dJbkRvbmUgPSBmYWxzZVxyXG5cdFx0XHRjb25zb2xlLmxvZygncmVkdWNlciBsb2dpbiDsmpTssq0nKVxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgTE9HX0lOX1NVQ0NFU1M6XHJcblx0XHRcdGRyYWZ0LmxvZ0luTG9hZGluZyA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LmxvZ0luRG9uZSA9IHRydWVcclxuXHRcdFx0Ly9kcmFmdC5tZSA9IGR1bW15VXNlcihhY3Rpb24uZGF0YSkgZnJvbnRcclxuXHRcdFx0ZHJhZnQubWUgPSBhY3Rpb24uZGF0YSAvLyBiYWNrXHJcblx0XHRcdGNvbnNvbGUubG9nKCdyZWR1Y2VyIGxvZ2luIOyEseqztScpXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBMT0dfSU5fRkFJTFVSRTpcclxuXHRcdFx0ZHJhZnQubG9nSW5Mb2FkaW5nID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQubG9nSW5FcnJvciA9IGFjdGlvbi5lcnJvclxyXG5cdFx0XHRjb25zb2xlLmVycm9yKCdyZWR1Y2VyIGxvZ2luIOyLpO2MqDo6ICcsIGFjdGlvbi5lcnJvcilcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIExPR19PVVRfUkVRVUVTVDpcclxuXHRcdFx0ZHJhZnQubG9nT3V0TG9hZGluZyA9IHRydWVcclxuXHRcdFx0ZHJhZnQubG9nT3V0RG9uZSA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LmxvZ091dEVycm9yID0gbnVsbFxyXG5cdFx0XHRjb25zb2xlLmxvZygncmVkdWNlciBsb2dvdXQg7JqU7LKtJylcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIExPR19PVVRfU1VDQ0VTUzpcclxuXHRcdFx0ZHJhZnQubG9nT3V0TG9hZGluZyA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LmxvZ091dERvbmUgPSB0cnVlXHJcblx0XHRcdGRyYWZ0Lm1lID0gbnVsbFxyXG5cdFx0XHRjb25zb2xlLmxvZygncmVkdWNlciBsb2dvdXQg7ISx6rO1JylcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIExPR19PVVRfRkFJTFVSRTpcclxuXHRcdFx0ZHJhZnQubG9nT3V0TG9hZGluZyA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LmxvZ091dEVycm9yID0gYWN0aW9uLmVycm9yXHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoJ3JlZHVjZXIgbG9nb3V0IOyLpO2MqCcsIGFjdGlvbi5lcnJvcilcclxuXHRcdFx0YnJlYWtcclxuXHRcdGNhc2UgU0lHTl9VUF9SRVFVRVNUOlxyXG5cdFx0XHRkcmFmdC5zaWduVXBMb2FkaW5nID0gdHJ1ZVxyXG5cdFx0XHRkcmFmdC5zaWduVXBEb25lID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQuc2lnblVwRXJyb3IgPSBudWxsXHJcblx0XHRcdGNvbnNvbGUubG9nKCdyZWR1Y2VyIHNpZ251cCDsmpTssq0nKVxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgU0lHTl9VUF9TVUNDRVNTOlxyXG5cdFx0XHRkcmFmdC5zaWduVXBMb2FkaW5nID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQuc2lnblVwRG9uZSA9IHRydWVcclxuXHRcdFx0Y29uc29sZS5sb2coJ3JlZHVjZXIgc2lnblVwIOyEseqztScpXHJcblx0XHRcdGJyZWFrXHJcblx0XHRjYXNlIFNJR05fVVBfRkFJTFVSRTpcclxuXHRcdFx0ZHJhZnQuc2lnblVwTG9hZGluZyA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LnNpZ25VcEVycm9yID0gYWN0aW9uLmVycm9yXHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoJ3JlZHVjZXIgc2lnblVwIOyLpO2MqCcsIGFjdGlvbi5lcnJvcilcclxuXHRcdFx0YnJlYWtcclxuXHRcdGNhc2UgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1Q6XHJcblx0XHRcdGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IHRydWVcclxuXHRcdFx0ZHJhZnQuY2hhbmdlTmlja25hbWVEb25lID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQuY2hhbmdlTmlja25hbWVFcnJvciA9IG51bGxcclxuXHRcdFx0Y29uc29sZS5sb2coJ3JlZHVjZXIgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1Qg7JqU7LKtJylcclxuXHRcdFx0YnJlYWtcclxuXHRcdGNhc2UgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1M6XHJcblx0XHRcdGRyYWZ0Lm1lLm5pY2tuYW1lID0gYWN0aW9uLmRhdGEubmlja25hbWU7XHJcblx0XHRcdGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LmNoYW5nZU5pY2tuYW1lRG9uZSA9IHRydWVcclxuXHRcdFx0Y29uc29sZS5sb2coJ3JlZHVjZXIgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1Mg7ISx6rO1JylcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFOlxyXG5cdFx0XHRkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmcgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC5jaGFuZ2VOaWNrbmFtZUVycm9yID0gYWN0aW9uLmVycm9yXHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoJ3JlZHVjZXIgQ0hBTkdFX05JQ0tOQU1FIOyLpO2MqCcsIGFjdGlvbi5lcnJvcilcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIEFERF9QT1NUX1RPX01FOiAvLyDqsozsi5zquIDsnYQg7JOw66m0IOqyjOyLnOq4gCDslYTsnbTrlJTqsIAg7Jes6riw66GcIOuTpOyWtOyZgOyEnCDtlZjrgpjqsIAg7LaU6rCA65Cc64ukXHJcblx0XHRcdGRyYWZ0Lm1lLlBvc3RzLnVuc2hpZnQoe2lkOiBhY3Rpb24uZGF0YX0pXHJcblx0XHRcdGNvbnNvbGUubG9nKCdBRERfUE9TVF9UT19NRSDshLHqs7UnKVxyXG5cdFx0XHRicmVhaztcclxuXHRcdFx0Ly8gcmV0dXJuIHtcclxuXHRcdFx0Ly8gXHQuLi5zdGF0ZSxcclxuXHRcdFx0Ly8gXHRtZToge1xyXG5cdFx0XHQvLyBcdFx0Li4uc3RhdGUubWUsXHJcblx0XHRcdC8vIFx0XHRQb3N0czogW3tpZDogYWN0aW9uLmRhdGF9LCAuLi5zdGF0ZS5tZS5Qb3N0c10sXHJcblx0XHRcdC8vIFx0fVxyXG5cdFx0XHQvLyB9XHJcblx0XHRjYXNlIFJFTU9WRV9QT1NUX09GX01FOlxyXG5cdFx0XHRkcmFmdC5tZS5Qb3N0cyA9IGRyYWZ0Lm1lLlBvc3RzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEpXHJcblx0XHRcdGNvbnNvbGUubG9nKCdSRU1PVkVfUE9TVF9PRl9NRScpXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0XHQvLyByZXR1cm4geyAvLyDrtojrs4DshLHsnYQg7KeA7YKk66mwIOqyjOyLnOq4gOydhCDsp4Dsm4zslbztlZzri6QuXHJcblx0XHRcdC8vIFx0Li4uc3RhdGUsXHJcblx0XHRcdC8vIFx0bWU6IHtcclxuXHRcdFx0Ly8gXHRcdC4uLnN0YXRlLm1lLFxyXG5cdFx0XHQvLyBcdFx0UG9zdHM6IHN0YXRlLm1lLlBvc3RzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEpXHJcblx0XHRcdC8vIFx0fVxyXG5cdFx0XHQvLyB9XHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRicmVhaztcclxuXHR9XHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyOyIsIi8vaW1wb3J0IHthbGwsIGZvcmssIHRha2VMYXRlc3QsIGNhbGwsIHB1dCwgZGVsYXl9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XHJcbmltcG9ydCB7YWxsLCBmb3JrfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCBwb3N0U2FnYSBmcm9tICcuL3Bvc3QnXHJcbmltcG9ydCB1c2VyU2FnYSBmcm9tICcuL3VzZXInXHJcbmltcG9ydCB7YmFja1VybH0gZnJvbSBcIi4uL2NvbmZpZy9jb25maWdcIjtcclxuXHJcbmF4aW9zLmRlZmF1bHRzLmJhc2VVUkwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDY1JyAvLyBmcm9udFxyXG4vL2F4aW9zLmRlZmF1bHRzLmJhc2VVUkwgPSBiYWNrVXJsIC8vIGJhY2ssIGF3cyBpcFxyXG5cclxuYXhpb3MuZGVmYXVsdHMud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiByb290U2FnYSgpIHtcclxuXHR5aWVsZCBhbGwoWyAvLyBBTEwg67Cw7Je07JWI7JeQIO2VnOuwqeyXkCDsi6TtlontlbTspIxcclxuXHRcdGZvcmsocG9zdFNhZ2EpLCAvLyBmb3JrIOuKlCAo7ZWo7IiYKeyLpO2WiVxyXG5cdFx0Zm9yayh1c2VyU2FnYSksXHQvLyBjYWxsIOydtOuekeydgCDri6TrpbTri6QuXHJcblx0XSlcclxufSIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IGFsbCwgZm9yaywgcHV0LCB0YWtlTGF0ZXN0LCB0aHJvdHRsZSwgY2FsbCB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XHJcblxyXG5pbXBvcnQge1xyXG5cdEFERF9DT01NRU5UX0ZBSUxVUkUsXHJcblx0QUREX0NPTU1FTlRfUkVRVUVTVCxcclxuXHRBRERfQ09NTUVOVF9TVUNDRVNTLFxyXG5cdEFERF9QT1NUX0ZBSUxVUkUsXHJcblx0QUREX1BPU1RfUkVRVUVTVCxcclxuXHRBRERfUE9TVF9TVUNDRVNTLFxyXG5cdExJS0VfUE9TVF9GQUlMVVJFLFxyXG5cdExJS0VfUE9TVF9SRVFVRVNULFxyXG5cdExJS0VfUE9TVF9TVUNDRVNTLFxyXG5cdExPQURfSEFTSFRBR19QT1NUU19GQUlMVVJFLFxyXG5cdExPQURfSEFTSFRBR19QT1NUU19SRVFVRVNULCBMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTUyxcclxuXHRMT0FEX1BPU1RfRkFJTFVSRSxcclxuXHRMT0FEX1BPU1RfUkVRVUVTVCxcclxuXHRMT0FEX1BPU1RfU1VDQ0VTUyxcclxuXHQvL2dlbmVyYXRlRHVtbXlQb3N0LCBmcm9udFxyXG5cdExPQURfUE9TVFNfRkFJTFVSRSxcclxuXHRMT0FEX1BPU1RTX1JFUVVFU1QsXHJcblx0TE9BRF9QT1NUU19TVUNDRVNTLCBMT0FEX1VTRVJfUE9TVFNfRkFJTFVSRSxcclxuXHRMT0FEX1VTRVJfUE9TVFNfUkVRVUVTVCwgTE9BRF9VU0VSX1BPU1RTX1NVQ0NFU1MsXHJcblx0UkVNT1ZFX1BPU1RfRkFJTFVSRSxcclxuXHRSRU1PVkVfUE9TVF9SRVFVRVNULFxyXG5cdFJFTU9WRV9QT1NUX1NVQ0NFU1MsXHJcblx0UkVUV0VFVF9GQUlMVVJFLFxyXG5cdFJFVFdFRVRfUkVRVUVTVCxcclxuXHRSRVRXRUVUX1NVQ0NFU1MsXHJcblx0VU5MSUtFX1BPU1RfRkFJTFVSRSxcclxuXHRVTkxJS0VfUE9TVF9SRVFVRVNULFxyXG5cdFVOTElLRV9QT1NUX1NVQ0NFU1MsIFVQREFURV9QT1NUX0ZBSUxVUkUsIFVQREFURV9QT1NUX1JFUVVFU1QsIFVQREFURV9QT1NUX1NVQ0NFU1MsXHJcblx0VVBMT0FEX0lNQUdFU19GQUlMVVJFLFxyXG5cdFVQTE9BRF9JTUFHRVNfUkVRVUVTVCxcclxuXHRVUExPQURfSU1BR0VTX1NVQ0NFU1MsXHJcbn0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCc7XHJcbmltcG9ydCB7IEFERF9QT1NUX1RPX01FLCBSRU1PVkVfUE9TVF9PRl9NRSB9IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInO1xyXG5cclxuLy9pbXBvcnQgc2hvcnRJZCBmcm9tIFwic2hvcnRpZFwiOyBmcm9udFxyXG5cclxuLy8gcmVzdEFQSVxyXG5mdW5jdGlvbiByZXR3ZWV0QVBJKGRhdGEpIHtcclxuXHRyZXR1cm4gYXhpb3MucG9zdChgL3Bvc3QvJHtkYXRhfS9yZXR3ZWV0YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiByZXR3ZWV0KGFjdGlvbikge1xyXG5cdHRyeSB7XHJcblx0XHRjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHJldHdlZXRBUEksIGFjdGlvbi5kYXRhKVxyXG5cdFx0Y29uc29sZS5sb2coJ3NhZ2EgcmV0d2VldCDsi6Ttlok6OjonLCBhY3Rpb24uZGF0YSlcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IFJFVFdFRVRfU1VDQ0VTUyxcclxuXHRcdFx0ZGF0YTogcmVzdWx0LmRhdGEsXHJcblx0XHR9KVxyXG5cdFx0Y29uc29sZS5sb2coJ3NhZ2EgcmV0d2VldCDshLHqs7U6OjonLCByZXN1bHQpXHJcblx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRjb25zb2xlLmVycm9yKCdzYWdhIHJldHdlZXQg7Iuk7YyoIDo6OiAnLCBlcnIpXHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOiBSRVRXRUVUX0ZBSUxVUkUsXHJcblx0XHRcdGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YVxyXG5cdFx0fSlcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwbG9hZEltYWdlc0FQSShkYXRhKSB7XHJcblx0cmV0dXJuIGF4aW9zLnBvc3QoJy9wb3N0L2ltYWdlcycsIGRhdGEpIC8vIGZvcm0gZGF0YSDrpbwge25hbWU6ZGF0YX0g7ZiV7Iud7Jy866GcIOqwkOyLuOuptCBqc29uIOuQmOq4sOuVjOusuOyXkCDsgqzsmqntlZjrqbQg7JWI65CoXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB1cGxvYWRJbWFnZXMoYWN0aW9uKSB7XHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwodXBsb2FkSW1hZ2VzQVBJLCBhY3Rpb24uZGF0YSlcclxuXHRcdGNvbnNvbGUubG9nKCdzYWdhIHVwbG9hZEltYWdlcyDsi6Ttlok6OjogJywgYWN0aW9uLmRhdGEpXHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOiBVUExPQURfSU1BR0VTX1NVQ0NFU1MsXHJcblx0XHRcdGRhdGE6IHJlc3VsdC5kYXRhXHJcblx0XHR9KVxyXG5cdFx0Y29uc29sZS5sb2coJ3NhZ2EgdXBsb2FkSW1hZ2VzIOyEseqztTo6OiAnLCByZXN1bHQpXHJcblx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRjb25zb2xlLmVycm9yKCdzYWdhIHVwbG9hZEltYWdlcyBlcnJvcjo6OiAnLCBlcnIpXHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOiBVUExPQURfSU1BR0VTX0ZBSUxVUkUsXHJcblx0XHRcdGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YVxyXG5cdFx0fSlcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxpa2VQb3N0QVBJKGRhdGEpIHsgLy8gMyDsoITri6zrkJjrqbRcclxuXHRyZXR1cm4gYXhpb3MucGF0Y2goYC9wb3N0LyR7ZGF0YX0vbGlrZWApIC8vIDQg642w7J207YSw6rCAIOqwhOuLpCwgbGlrZSAmIHVubGlrZSDripQgcGF0Y2ggKCDqsozsi5zquIDsl5Ag7J2867aA67aEIOyImOygleydtOq4sOuVjOusuCApXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsaWtlUG9zdChhY3Rpb24pIHsgLy8gMSDslaHshZjsl5DshJxcclxuXHR0cnkge1xyXG5cdFx0Y29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsaWtlUG9zdEFQSSwgYWN0aW9uLmRhdGEpIC8vIDIg642w7J207YSw66W8IOq6vOuCtOyEnFxyXG5cdFx0Y29uc29sZS5sb2coJ2xpa2VQb3N0IOyLpO2WieykkTo6OicsIHJlc3VsdClcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IExJS0VfUE9TVF9TVUNDRVNTLFxyXG5cdFx0XHRkYXRhOiByZXN1bHQuZGF0YSwgLy8gYmFjaywgcG9zdElkLCB1c2VySWQg65Ok7Ja07J6I7J2MXHJcblx0XHR9KVxyXG5cdFx0Y29uc29sZS5sb2coJ2xpa2VQb3N0IOyZhOujjDo6OicsIHJlc3VsdClcclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoJ2xpa2VQb3N0IGVycm9yOjo6ICcsIGVycilcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IExJS0VfUE9TVF9GQUlMVVJFLFxyXG5cdFx0XHRlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcblx0XHR9KVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gdW5saWtlUG9zdEFQSShkYXRhKSB7IC8vIDMg7KCE64us65CY66m0XHJcblx0cmV0dXJuIGF4aW9zLmRlbGV0ZShgL3Bvc3QvJHtkYXRhfS9saWtlYCkgLy8gNCDrjbDsnbTthLDqsIAg6rCE64ukXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB1bmxpa2VQb3N0KGFjdGlvbikgeyAvLyAxIOyVoeyFmOyXkOyEnFxyXG5cdHRyeSB7XHJcblx0XHRjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHVubGlrZVBvc3RBUEksIGFjdGlvbi5kYXRhKSAvLyAyIOuNsOydtO2EsOulvCDqurzrgrTshJxcclxuXHRcdGNvbnNvbGUubG9nKCd1bmxpa2VQb3N0IOyLpO2WieykkTo6OicsIHJlc3VsdClcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IFVOTElLRV9QT1NUX1NVQ0NFU1MsXHJcblx0XHRcdGRhdGE6IHJlc3VsdC5kYXRhLCAvLyBiYWNrLCBwb3N0SWQsdXNlcklkIOuTpOyWtOyeiOydjFxyXG5cdFx0fSlcclxuXHRcdGNvbnNvbGUubG9nKCdVTkxJS0VQb3N0IOyZhOujjDo6OicsIHJlc3VsdClcclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoJ1VOTElLRVBvc3QgZXJyb3I6OjogJywgZXJyKVxyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogVU5MSUtFX1BPU1RfRkFJTFVSRSxcclxuXHRcdFx0ZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhXHJcblx0XHR9KVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZFBvc3RBUEkoZGF0YSkge1xyXG5cdHJldHVybiBheGlvcy5nZXQoYC9wb3N0LyR7ZGF0YX1gKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRQb3N0KGFjdGlvbikge1xyXG5cdHRyeSB7XHJcblx0XHRjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRQb3N0QVBJLCBhY3Rpb24uZGF0YSlcclxuXHRcdGNvbnNvbGUubG9nKCdzYWdhIGxvYWRQb3N0IOyalOyyrSA6OjogJywgYWN0aW9uLmRhdGEpXHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOiBMT0FEX1BPU1RfU1VDQ0VTUyxcclxuXHRcdFx0ZGF0YTogcmVzdWx0LmRhdGEsXHJcblx0XHR9KVxyXG5cdFx0Y29uc29sZS5sb2coJ3NhZ2EgbG9hZFBvc3Qg7ISx6rO1IDo6OiAnLCByZXN1bHQpXHJcblx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRjb25zb2xlLmRpcignc2FnYSBsb2FkUG9zdCDsi6TtjKggOjo6ICcsIGVycilcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IExPQURfUE9TVF9GQUlMVVJFLFxyXG5cdFx0XHRlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcblx0XHR9KVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZEhhc2h0YWdQb3N0c0FQSShkYXRhLCBsYXN0SWQpIHsgLy8g7J247J6Q66W8IOuRkCDqsJwg64SY6rKo7KSE7IiY64+EIOyeiOuLpFxyXG5cdC8vIO2VnOq4gCBvciDtirnsiJjrrLjsnpAg65Ok7Ja06rCA66m0IGVycm9yLCBlbmNvZGUg66GcIOqwkOyLuOyjvOyekFxyXG5cdHJldHVybiBheGlvcy5nZXQoYC9oYXNodGFnLyR7ZW5jb2RlVVJJQ29tcG9uZW50KGRhdGEpfT9sYXN0SWQ9JHtsYXN0SWQgfHwgMH1gKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRIYXNodGFnUG9zdHMoYWN0aW9uKSB7XHJcblx0dHJ5IHtcclxuXHRcdGNvbnNvbGUubG9nKGBsb2FkSGFzaHRhZ1Bvc3RzIGxvZyA6OjpgKVxyXG5cdFx0Y29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkSGFzaHRhZ1Bvc3RzQVBJLCBhY3Rpb24uZGF0YSwgYWN0aW9uLmxhc3RJZCk7XHJcblx0XHRjb25zb2xlLmxvZygnc2FnYSBsb2FkSGFzaHRhZ1Bvc3RzIOyalOyyrSA6OjogJywgYWN0aW9uLmRhdGEsIGFjdGlvbi5sYXN0SWQpXHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOiBMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTUyxcclxuXHRcdFx0ZGF0YTogcmVzdWx0LmRhdGEsXHJcblx0XHR9KVxyXG5cdFx0Y29uc29sZS5sb2coJ3NhZ2EgbG9hZEhhc2h0YWdQb3N0cyDshLHqs7UgOjo6ICcpXHJcblx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRjb25zb2xlLmVycm9yKCdzYWdhIGxvYWRIYXNodGFnUG9zdHMgZXJyb3IgOjo6ICcsIGVycilcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IExPQURfSEFTSFRBR19QT1NUU19GQUlMVVJFLFxyXG5cdFx0XHRlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcblx0XHR9KVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZFVzZXJQb3N0c0FQSShkYXRhLCBsYXN0SWQpIHtcclxuXHRyZXR1cm4gYXhpb3MuZ2V0KGAvdXNlci8ke2RhdGF9L3Bvc3RzP2xhc3RJZD0ke2xhc3RJZCB8fCAwfWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZFVzZXJQb3N0cyhhY3Rpb24pIHtcclxuXHR0cnkge1xyXG5cdFx0Y29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkVXNlclBvc3RzQVBJLCBhY3Rpb24uZGF0YSwgYWN0aW9uLmxhc3RJZCk7XHJcblx0XHRjb25zb2xlLmxvZygnc2FnYSBsb2FkVXNlclBvc3RzIOyLpO2WiSA6OjogJywgYWN0aW9uLmRhdGEsIGFjdGlvbi5sYXN0SWQpXHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOiBMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTUyxcclxuXHRcdFx0ZGF0YTogcmVzdWx0LmRhdGEsXHJcblx0XHR9KVxyXG5cdFx0Y29uc29sZS5sb2coJ3NhZ2EgbG9hZFBvc3RzU3VjY2VzcyDshLHqs7U6OjogJywgcmVzdWx0KVxyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0Y29uc29sZS5kaXIoJ3NhZ2EgbG9hZFVzZXJQb3N0cyBlcnJvciA6OjogJywgZXJyKVxyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogTE9BRF9VU0VSX1BPU1RTX0ZBSUxVUkUsXHJcblx0XHRcdGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZFBvc3RzQVBJKGxhc3RJZCkgeyAvLyAzIOyghOuLrOuQmOuptFxyXG5cdC8vcmV0dXJuIGF4aW9zLmdldCgnL2FwaS9wb3N0cycsIGRhdGEpIC8vIDQg642w7J207YSw6rCAIOqwhOuLpCBmcm9udFxyXG5cdC8vIOuztO2GtSBnZXQg67Cp7Iud7J2AIOuNsOydtO2EsOulvCDrqrsg64Sj6riw65WM66y47JeQIOy/vOumrOyKpO2KuOungeycvOuhnCDrhKPslrTspJjslbztlZzri6QgKOyjvOyGjCksIGV0YyA6IGxpbWl0PTEwJm9mZnNldD0xMFxyXG5cdC8vIO2PrOyKpO2KuCDrk7HsnYAg642w7J207YSwIOy6kOyLseydtCDslYjrkJjsp4Drp4wsIOqyn+ydgCDrjbDsnbTthLAg7LqQ7Iux7J2EIOqwmeydtCDtlaAg7IiYIOyeiOuLpFxyXG5cdC8vIGxhc3RJZCDqsIAgdW5kZWZpbmVkIOyduCDqsr3smrAgMFxyXG5cdHJldHVybiBheGlvcy5nZXQoYC9wb3N0cz9sYXN0SWQ9JHtsYXN0SWQgfHwgMH1gKTsgLy8gNCDrjbDsnbTthLDqsIAg6rCE64ukICxcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRQb3N0cyhhY3Rpb24pIHsgLy8gMSDslaHshZjsl5DshJxcclxuXHR0cnkge1xyXG5cdFx0Y29uc29sZS5sb2coJ1NhZ2FzIGxvYWRQb3N0cyDsi6TtlonspJE6OjogJywgYWN0aW9uLmxhc3RJZClcclxuXHRcdGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZFBvc3RzQVBJLCBhY3Rpb24ubGFzdElkKTsgLy8gMiDrjbDsnbTthLDrpbwg6rq864K07IScXHJcblx0XHQvL3lpZWxkIGRlbGF5KDEwMDApIGZyb250XHJcblx0XHRjb25zb2xlLmxvZygnc2FnYXMgbG9hZFBvc3RzIOyZhOujjDo6OiAnLCByZXN1bHQpXHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOiBMT0FEX1BPU1RTX1NVQ0NFU1MsXHJcblx0XHRcdC8vIGRhdGE6IGdlbmVyYXRlRHVtbXlQb3N0KDEwKSwgLy8gZGF0YSAxMCDqsJwgZnJvbnRcclxuXHRcdFx0ZGF0YTogcmVzdWx0LmRhdGEsXHJcblx0XHR9KTtcclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdGNvbnNvbGUuZGlyKCdzYWdhIGxvYWRQb3N0cyBlcnJvcjogJywgZXJyKTtcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IExPQURfUE9TVFNfRkFJTFVSRSxcclxuXHRcdFx0ZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gYWRkUG9zdEFQSShkYXRhKSB7IC8vIDMg7KCE64us65CY66m0XHJcblx0Ly9yZXR1cm4gYXhpb3MucG9zdCgnL2FwaS9wb3N0JywgZGF0YSkgLy8gNCDrjbDsnbTthLDqsIAg6rCE64ukIGZyb250XHJcblx0Ly8gZGF0YSBjb250ZW50IOqwgCByZXEuYm9keS5jb250ZW50IOuhnCDrsLHsl5Trk5zsl5Ag67OA7ZmYXHJcblx0Ly9yZXR1cm4gYXhpb3MucG9zdCgnL3Bvc3QnLCB7Y29udGVudDogZGF0YX0pIC8vIDQg642w7J207YSw6rCAIOqwhOuLpCxcclxuXHQvLyBmb3JtIGRhdGEg64qUIHtjb250ZW50OiBkYXRhfSDsmYAg6rCZ7J20IOqwkOyLuOuptCDslYjrkJzri6QsIOuwlOuhnCBkYXRhIOuhnCDrhKPslrTspJjslbztlahcclxuXHRyZXR1cm4gYXhpb3MucG9zdCgnL3Bvc3QnLCBkYXRhKSAvLyA0IOuNsOydtO2EsOqwgCDqsITri6RcclxufVxyXG5cclxuZnVuY3Rpb24qIGFkZFBvc3QoYWN0aW9uKSB7IC8vIDEg7JWh7IWY7JeQ7IScXHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkUG9zdEFQSSwgYWN0aW9uLmRhdGEpIC8vIDIg642w7J207YSw66W8IOq6vOuCtOyEnFxyXG5cdFx0Ly95aWVsZCBkZWxheSgxMDAwKSBmcm9udFxyXG5cdFx0Ly9jb25zdCBpZCA9IHNob3J0SWQuZ2VuZXJhdGUoKSAvLyBmcm9udCDsnZgg642U66+4IOyVhOuUlFxyXG5cdFx0Y29uc29sZS5sb2coJ2FkZFBvc3Qg7Iuk7ZaJ7KSROjo6JywgcmVzdWx0KVxyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogQUREX1BPU1RfU1VDQ0VTUyxcclxuXHRcdFx0LypkYXRhOiB7IC8vIGZyb250IGR1bW15XHJcblx0XHRcdFx0aWQsXHJcblx0XHRcdFx0Y29udGVudDogYWN0aW9uLmRhdGEsXHJcblx0XHRcdH0qL1xyXG5cdFx0XHRkYXRhOiByZXN1bHQuZGF0YSwgLy8gYmFjaywg7Iuk7KCc66GcIOqyjOyLnOq4gOydtCDrk6TslrTsnojsnYxcclxuXHRcdH0pXHJcblx0XHRjb25zb2xlLmxvZygnYWRkUG9zdCDsmYTro4w6OjonLCByZXN1bHQpXHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOiBBRERfUE9TVF9UT19NRSxcclxuXHRcdFx0Ly8gZGF0YTogaWQsIC8vIGZyb250IGR1bW15XHJcblx0XHRcdGRhdGE6IHJlc3VsdC5kYXRhLmlkLCAvLyBiYWNrXHJcblx0XHR9KVxyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0Y29uc29sZS5lcnJvcignc2FnYSBhZGRQb3N0IGVycm9yOjo6ICcsIGVycilcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IEFERF9QT1NUX0ZBSUxVUkUsXHJcblx0XHRcdGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YVxyXG5cdFx0fSlcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZVBvc3RBUEkoZGF0YSl7XHJcblx0cmV0dXJuIGF4aW9zLnBhdGNoKGAvcG9zdC8ke2RhdGEuUG9zdElkfWAsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogdXBkYXRlUG9zdChhY3Rpb24pe1xyXG5cdHRyeXtcclxuXHRcdGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwodXBkYXRlUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG5cdFx0Y29uc29sZS5sb2coJ3VwZGF0ZVBvc3Qg7Iuk7ZaJOjo6ICcsIGFjdGlvbi5kYXRhKVxyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogVVBEQVRFX1BPU1RfU1VDQ0VTUyxcclxuXHRcdFx0ZGF0YTogcmVzdWx0LmRhdGEsXHJcblx0XHR9KVxyXG5cdFx0Y29uc29sZS5sb2coJ3VwZGF0ZVBvc3Qg7ISx6rO1Ojo6ICcsIHJlc3VsdC5kYXRhKVxyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IFVQREFURV9QT1NUX0ZBSUxVUkUsXHJcblx0XHRcdGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuXHRcdH0pXHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVQb3N0QVBJKGRhdGEpIHsgLy8gMyDsoITri6zrkJjrqbRcclxuXHQvL3JldHVybiBheGlvcy5wb3N0KCcvYXBpL3Bvc3QnLCBkYXRhKSAvLyA0IOuNsOydtO2EsOqwgCDqsITri6QgZnJvbnRcclxuXHRyZXR1cm4gYXhpb3MuZGVsZXRlKGAvcG9zdC8ke2RhdGF9YCkgLy8gNCDrjbDsnbTthLDqsIAg6rCE64ukIGJhY2sgLy9kZWxldGUg7J2YIGRhdGEg64qUIHBvc3QuaWQgKFBvc3RDYXJkLmpzKeyXkOyEnCDtmZXsnbgg6rCA64qlXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiByZW1vdmVQb3N0KGFjdGlvbikgeyAvLyAxIOyVoeyFmOyXkOyEnFxyXG5cdHRyeSB7IC8vIO2PrOyKpO2KuCDrpqzrk4DshJzsg4Htg5zsmYAg7Jyg7KCA66as65OA7ISc7IOB7YOc7JmAIOuPmeyLnOyXkCDtlZzrsKnsl5Ag67CU6r+A7IiYIOyXhuq4sOuVjOusuOyXkCDslaHshZjsnYQg65GQ67KI7Jy866GcIOuwlOq/lOykgOuLpCxcclxuXHRcdGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwocmVtb3ZlUG9zdEFQSSwgYWN0aW9uLmRhdGEpIC8vIDIg642w7J207YSw66W8IOq6vOuCtOyEnFxyXG5cdFx0Ly95aWVsZCBkZWxheSgxMDAwKSBmcm9udFxyXG5cdFx0Y29uc29sZS5sb2coJ3JlbW92ZVBvc3Qg7Iuk7ZaJOjo6ICcsIGFjdGlvbi5kYXRhKVxyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogUkVNT1ZFX1BPU1RfU1VDQ0VTUyxcclxuXHRcdFx0ZGF0YTogcmVzdWx0LmRhdGEsIC8vIOyWtOuWpCDqsozsi5zrrLzsnYQg7KeA7Jug64qU7KeAIGlkIOqwgOyeiOydhOqygyxcclxuXHRcdH0pXHJcblx0XHRjb25zb2xlLmxvZygncmVtb3ZlUG9zdCDsmYTro4w6OjogJywgcmVzdWx0KVxyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogUkVNT1ZFX1BPU1RfT0ZfTUUsXHJcblx0XHRcdC8vZGF0YTogYWN0aW9uLmRhdGEsIGZyb250XHJcblx0XHRcdGRhdGE6IGFjdGlvbi5kYXRhLCAgLy8gYWN0aW9uIOydtCDrk6TslrTsmZTsnYTrlYwg642w7J207YSwXHJcblx0XHR9KVxyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0Y29uc29sZS5lcnJvcignc2FnYSByZW1vdmVQb3N0IGVycm9yOiAnLCBlcnIpXHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOiBSRU1PVkVfUE9TVF9GQUlMVVJFLFxyXG5cdFx0XHRlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGFcclxuXHRcdH0pXHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRDb21tZW50QVBJKGRhdGEpIHsgLy8gMyDsoITri6zrkJjrqbRcclxuXHQvL+yjvOyGjOuKlCDrsLHsl5Trk5zsmYAg7ZSE66Gg7Yq47J2YIOyVveyGjeydvOu/kCDsoJXtlbTsp4TqsbTsl4bri6RcclxuXHQvL3JldHVybiBheGlvcy5wb3N0KGAvYXBpL3Bvc3QvJHtkYXRhLnBvc3RJZH0vY29tbWVudGAsIGRhdGEpIC8vIDQg642w7J207YSw6rCAIOqwhOuLpCAvLyBmcm9udFxyXG5cdHJldHVybiBheGlvcy5wb3N0KGAvcG9zdC8ke2RhdGEucG9zdElkfS9jb21tZW50YCwgZGF0YSkgLy8gNCDrjbDsnbTthLDqsIAg6rCE64ukIC8vIFBPU1QgL3Bvc3QvMS9jb21tZW50XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBhZGRDb21tZW50KGFjdGlvbikgeyAvLyAxIOyVoeyFmOyXkOyEnFxyXG5cdHRyeSB7XHJcblx0XHRjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGFkZENvbW1lbnRBUEksIGFjdGlvbi5kYXRhKSAvLyAyIOuNsOydtO2EsOulvCDqurzrgrTshJwgLy9iYWNrXHJcblx0XHQvL3lpZWxkIGRlbGF5KDEwMDApIGZyb250XHJcblx0XHRjb25zb2xlLmxvZygnYWRkQ29tbWVudCDsi6TtlonspJEgOjo6JywgYWN0aW9uLmRhdGEpXHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOiBBRERfQ09NTUVOVF9TVUNDRVNTLFxyXG5cdFx0XHQvL2RhdGE6IGFjdGlvbi5kYXRhIC8vIGZyb250XHJcblx0XHRcdGRhdGE6IHJlc3VsdC5kYXRhLFxyXG5cdFx0fSlcclxuXHRcdGNvbnNvbGUubG9nKCdhZGRDb21tZW50IOyZhOujjDo6OicsIHJlc3VsdClcclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoJ3NhZ2EgYWRkQ29tbWVudCBlcnJvcjo6OiAnLCBlcnIpXHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOiBBRERfQ09NTUVOVF9GQUlMVVJFLFxyXG5cdFx0XHRlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGFcclxuXHRcdH0pXHJcblx0fVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24qIHdhdGNoUmV0d2VldCgpIHtcclxuXHR5aWVsZCB0YWtlTGF0ZXN0KFJFVFdFRVRfUkVRVUVTVCwgcmV0d2VldClcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoVXBsb2FkSW1hZ2VzKCkge1xyXG5cdHlpZWxkIHRha2VMYXRlc3QoVVBMT0FEX0lNQUdFU19SRVFVRVNULCB1cGxvYWRJbWFnZXMpXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExpa2VQb3N0KCkge1xyXG5cdHlpZWxkIHRha2VMYXRlc3QoTElLRV9QT1NUX1JFUVVFU1QsIGxpa2VQb3N0KVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hVbmxpa2VQb3N0KCkge1xyXG5cdHlpZWxkIHRha2VMYXRlc3QoVU5MSUtFX1BPU1RfUkVRVUVTVCwgdW5saWtlUG9zdClcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZFBvc3QoKSB7XHJcblx0eWllbGQgdGFrZUxhdGVzdChMT0FEX1BPU1RfUkVRVUVTVCwgbG9hZFBvc3QpXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRIYXNodGFnUG9zdHMoKSB7XHJcblx0eWllbGQgdGhyb3R0bGUoNTAwMCwgTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1QsIGxvYWRIYXNodGFnUG9zdHMpXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRVc2VyUG9zdHMoKSB7XHJcblx0eWllbGQgdGhyb3R0bGUoNTAwMCwgTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1QsIGxvYWRVc2VyUG9zdHMpXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRQb3N0cygpIHtcclxuXHR5aWVsZCB0aHJvdHRsZSg1MDAwLCBMT0FEX1BPU1RTX1JFUVVFU1QsIGxvYWRQb3N0cylcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoQWRkUG9zdCgpIHtcclxuXHR5aWVsZCB0YWtlTGF0ZXN0KEFERF9QT1NUX1JFUVVFU1QsIGFkZFBvc3QpXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFVwZGF0ZVBvc3QoKXtcclxuXHR5aWVsZCB0YWtlTGF0ZXN0KFVQREFURV9QT1NUX1JFUVVFU1QsIHVwZGF0ZVBvc3QpXHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoUmVtb3ZlUG9zdCgpIHtcclxuXHR5aWVsZCB0YWtlTGF0ZXN0KFJFTU9WRV9QT1NUX1JFUVVFU1QsIHJlbW92ZVBvc3QpXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEFkZENvbW1lbnQoKSB7XHJcblx0eWllbGQgdGFrZUxhdGVzdChBRERfQ09NTUVOVF9SRVFVRVNULCBhZGRDb21tZW50KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcG9zdFNhZ2EoKSB7XHJcblx0eWllbGQgYWxsKFtcclxuXHRcdGZvcmsod2F0Y2hSZXR3ZWV0KSxcclxuXHRcdGZvcmsod2F0Y2hVcGxvYWRJbWFnZXMpLFxyXG5cdFx0Zm9yayh3YXRjaExpa2VQb3N0KSxcclxuXHRcdGZvcmsod2F0Y2hVbmxpa2VQb3N0KSxcclxuXHRcdGZvcmsod2F0Y2hBZGRQb3N0KSxcclxuXHRcdGZvcmsod2F0Y2hMb2FkUG9zdCksXHJcblx0XHRmb3JrKHdhdGNoTG9hZFVzZXJQb3N0cyksXHJcblx0XHRmb3JrKHdhdGNoTG9hZEhhc2h0YWdQb3N0cyksXHJcblx0XHRmb3JrKHdhdGNoTG9hZFBvc3RzKSxcclxuXHRcdGZvcmsod2F0Y2hVcGRhdGVQb3N0KSxcclxuXHRcdGZvcmsod2F0Y2hSZW1vdmVQb3N0KSxcclxuXHRcdGZvcmsod2F0Y2hBZGRDb21tZW50KSxcclxuXHRdKTtcclxufSIsImltcG9ydCB7YWxsLCBjYWxsLCBmb3JrLCBwdXQsIHRha2VMYXRlc3R9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQge1xyXG5cdENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFLFxyXG5cdENIQU5HRV9OSUNLTkFNRV9SRVFVRVNULFxyXG5cdENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTLFxyXG5cdEZPTExPV19GQUlMVVJFLFxyXG5cdEZPTExPV19SRVFVRVNULFxyXG5cdEZPTExPV19TVUNDRVNTLCBMT0FEX0ZPTExPV0VSU19GQUlMVVJFLCBMT0FEX0ZPTExPV0VSU19SRVFVRVNULFxyXG5cdExPQURfRk9MTE9XRVJTX1NVQ0NFU1MsIExPQURfRk9MTE9XSU5HU19GQUlMVVJFLCBMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVCwgTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1MsXHJcblx0TE9BRF9NWV9JTkZPX0ZBSUxVUkUsXHJcblx0TE9BRF9NWV9JTkZPX1JFUVVFU1QsXHJcblx0TE9BRF9NWV9JTkZPX1NVQ0NFU1MsIExPQURfVVNFUl9GQUlMVVJFLCBMT0FEX1VTRVJfUkVRVUVTVCwgTE9BRF9VU0VSX1NVQ0NFU1MsXHJcblx0TE9HX0lOX0ZBSUxVUkUsXHJcblx0TE9HX0lOX1JFUVVFU1QsXHJcblx0TE9HX0lOX1NVQ0NFU1MsXHJcblx0TE9HX09VVF9GQUlMVVJFLFxyXG5cdExPR19PVVRfUkVRVUVTVCxcclxuXHRMT0dfT1VUX1NVQ0NFU1MsIFJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFLCBSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCwgUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1MsXHJcblx0U0lHTl9VUF9GQUlMVVJFLFxyXG5cdFNJR05fVVBfUkVRVUVTVCxcclxuXHRTSUdOX1VQX1NVQ0NFU1MsXHJcblx0VU5GT0xMT1dfRkFJTFVSRSxcclxuXHRVTkZPTExPV19SRVFVRVNULFxyXG5cdFVORk9MTE9XX1NVQ0NFU1MsXHJcbn0gZnJvbSBcIi4uL3JlZHVjZXJzL3VzZXJcIjtcclxuXHJcblxyXG5mdW5jdGlvbiByZW1vdmVGb2xsb3dlckFQSShkYXRhKSB7XHJcblx0cmV0dXJuIGF4aW9zLmRlbGV0ZShgL3VzZXIvZm9sbG93ZXIvJHtkYXRhfWApIC8vIOuqh+uyiOynuOydmCDtjJTroZzsm4zrpbwg7KCc6rGw7ZWc64ukXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiByZW1vdmVGb2xsb3dlcihhY3Rpb24pIHtcclxuXHR0cnkge1xyXG5cdFx0Y29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChyZW1vdmVGb2xsb3dlckFQSSwgYWN0aW9uLmRhdGEpXHJcblx0XHRjb25zb2xlLmxvZygnc2FnYSByZW1vdmVGb2xsb3dlciDsmpTssq06OiAnLCBhY3Rpb24uZGF0YSlcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IFJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTLFxyXG5cdFx0XHRkYXRhOiByZXN1bHQuZGF0YSxcclxuXHRcdH0pXHJcblx0XHRjb25zb2xlLmxvZygnc2FnYSByZW1vdmVGb2xsb3dlciDshLHqs7U6OiAnLCByZXN1bHQpXHJcblx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRjb25zb2xlLmVycm9yKCdzYWdhIHJlbW92ZUZvbGxvd2VyIOyLpO2MqDo6ICcsIGVycilcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IFJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFLFxyXG5cdFx0XHRlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGFcclxuXHRcdH0pXHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkRm9sbG93ZXJzQVBJKGRhdGEpIHtcclxuXHRyZXR1cm4gYXhpb3MuZ2V0KCcvdXNlci9mb2xsb3dlcnMnLCBkYXRhKVxyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZEZvbGxvd2VycyhhY3Rpb24pIHtcclxuXHR0cnkge1xyXG5cdFx0Y29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkRm9sbG93ZXJzQVBJLCBhY3Rpb24uZGF0YSlcclxuXHRcdGNvbnNvbGUubG9nKCdzYWdhIGZvbGxvd2Vyczo6IOyalOyyrScsIGFjdGlvbi5kYXRhKVxyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUyxcclxuXHRcdFx0ZGF0YTogcmVzdWx0LmRhdGEsXHJcblx0XHR9KVxyXG5cdFx0Y29uc29sZS5sb2coJ3NhZ2EgZm9sbG93ZXJzOjog7ISx6rO1JywgcmVzdWx0KVxyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0Y29uc29sZS5lcnJvcignc2FnYSBmb2xsb3dlcnM6OicsIGVycilcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IExPQURfRk9MTE9XRVJTX0ZBSUxVUkUsXHJcblx0XHRcdGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuXHRcdH0pXHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkRm9sbG93aW5nc0FQSShkYXRhKSB7XHJcblx0cmV0dXJuIGF4aW9zLmdldCgnL3VzZXIvZm9sbG93aW5ncycsIGRhdGEpXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkRm9sbG93aW5ncyhhY3Rpb24pIHtcclxuXHR0cnkge1xyXG5cdFx0Y29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkRm9sbG93aW5nc0FQSSwgYWN0aW9uLmRhdGEpXHJcblx0XHRjb25zb2xlLmxvZygnc2FnYSBmb2xsb3dpbmdzIOyalOyyrTo6JywgYWN0aW9uLmRhdGEpXHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOiBMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUyxcclxuXHRcdFx0ZGF0YTogcmVzdWx0LmRhdGEsXHJcblx0XHR9KVxyXG5cdFx0Y29uc29sZS5sb2coJ3NhZ2EgZm9sbG93aW5ncyDshLHqs7U6OicsIHJlc3VsdClcclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoJ3NhZ2EgZm9sbG93aW5ncyDsi6TtjKg6OicsIGVycilcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IExPQURfRk9MTE9XSU5HU19GQUlMVVJFLFxyXG5cdFx0XHRlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcblx0XHR9KVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2hhbmdlTmlja25hbWVBUEkoZGF0YSkgeyAvLyBnZW5lcmF0b3Ig7JWE64uYXHJcblx0Ly8g7Iuk7KCcIOyEnOuyhOyXkCDroZzqt7jsnbgg7JqU7LKt7J2EIOuztOuDhCAvLyBiYWNrXHJcblx0Ly9yZXR1cm4gYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDY1L3VzZXIvbG9naW4nLCBkYXRhKVxyXG5cdC8vIGxvY2FsaG9zdCDspJHrs7Ug7JeG7JWg6riwXHJcblx0cmV0dXJuIGF4aW9zLnBhdGNoKCcvdXNlci9uaWNrbmFtZScsIHtuaWNrbmFtZTogZGF0YX0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBjaGFuZ2VOaWNrbmFtZShhY3Rpb24pIHsgLy8gbG9naW4gYWN0aW9uIHJlcXVlc3Qg6rCAIGFjdGlvbiDsl5Ag7KCE64usXHJcblx0dHJ5IHsgLy8g7JqU7LKtIOyLpO2MqCDrjIDruYRcclxuXHRcdC8veWllbGQgZGVsYXkoMTAwMCkgLy8gZnJvbnRcclxuXHRcdGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoY2hhbmdlTmlja25hbWVBUEksIGFjdGlvbi5kYXRhKSAvLyDshJzrsoTsl5DshJwg67Cb7J2AIOqysOqzvCDqsJLsnYQg67Cb7J2MXHJcblx0XHRjb25zb2xlLmxvZygnc2FnYSBjaGFuZ2VOaWNrbmFtZSDsi6TtlonspJE6OicsIGFjdGlvbi5kYXRhKVxyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MsXHJcblx0XHRcdC8vZGF0YTogYWN0aW9uLmRhdGEsIC8vIGZyb250XHJcblx0XHRcdGRhdGE6IHJlc3VsdC5kYXRhIC8vICjshLHqs7Ug6rKw6rO8IOuLtOq5gCkgYmFja1xyXG5cdFx0fSlcclxuXHRcdGNvbnNvbGUubG9nKCdzYWdhIGNoYW5nZU5pY2tuYW1lIOyZhOujjCA6OicsIHJlc3VsdClcclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoJ2NoYW5nZU5pY2tuYW1lJywgZXJyKVxyXG5cdFx0eWllbGQgcHV0KHsgLy8gcHV0IOydgCBkaXNwYXRjaCDrnbzqs6Ag7IOd6rCB7ZWY7J6QXHJcblx0XHRcdHR5cGU6IENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFLFxyXG5cdFx0XHRlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEgLy8gKOyLpO2MqCDqsrDqs7wg64u06rmAKVxyXG5cdFx0fSlcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRVc2VyQVBJKGRhdGEpIHtcclxuXHRyZXR1cm4gYXhpb3MuZ2V0KGAvdXNlci8ke2RhdGF9YClcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRVc2VyKGFjdGlvbikge1xyXG5cdHRyeSB7XHJcblx0XHRjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRVc2VyQVBJLCBhY3Rpb24uZGF0YSlcclxuXHRcdGNvbnNvbGUubG9nKCdzYWdhIGxvYWRVc2VyIOyLpO2WiSA6OiAnLCByZXN1bHQuZGF0YSlcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IExPQURfVVNFUl9TVUNDRVNTLFxyXG5cdFx0XHRkYXRhOiByZXN1bHQuZGF0YVxyXG5cdFx0fSlcclxuXHRcdGNvbnNvbGUubG9nKCdzYWdhIGxvYWRVc2VyIOyEseqztSA6OiAnLCByZXN1bHQpXHJcblx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRjb25zb2xlLmVycm9yKCdzYWdhIGxvYWRVc2VyIEZhaWx1cmUg7Iuk7YyoIDo6ICcsIGVycilcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IExPQURfVVNFUl9GQUlMVVJFLFxyXG5cdFx0XHRlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcblx0XHR9KVxyXG5cdH1cclxufVxyXG5cclxuLy9mdW5jdGlvbiBsb2FkTXlJbmZvQVBJKHVzZXJJZCkge1xyXG5mdW5jdGlvbiBsb2FkTXlJbmZvQVBJKCkge1xyXG5cdC8vIOyEnOuyhOyXkCDsmpTssq3snYQg67O064K064qUIOu2gOu2hFxyXG5cdHJldHVybiBheGlvcy5nZXQoJy91c2VyJyk7IC8vIOyEnOuyhOyCrOydtOuTnOugjOuNlOungeydvCDrlYzripQsIOu4jOudvOyasOyggOqwgCDsl4bslrTsmpQuXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkTXlJbmZvKCkge1xyXG5cdHRyeSB7XHJcblx0XHRjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRNeUluZm9BUEkpXHJcblx0XHRjb25zb2xlLmxvZygnc2FnYSBsb2FkTXlJbmZvIOyLpO2WiSA6OiAnKVxyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogTE9BRF9NWV9JTkZPX1NVQ0NFU1MsXHJcblx0XHRcdGRhdGE6IHJlc3VsdC5kYXRhLFxyXG5cdFx0fSlcclxuXHRcdGNvbnNvbGUubG9nKCdzYWdhIGxvYWRNeUluZm8g7ISx6rO1OjogJywgcmVzdWx0KVxyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0Y29uc29sZS5lcnJvcignc2FnYSBsb2FkTXlJbmZvIGVycm9yIDo6ICcsIGVycilcclxuXHRcdGNvbnNvbGUuZGlyKCdzYWdhIGxvYWRNeUluZm8gZXJyb3IgOjogJywgZXJyKVxyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogTE9BRF9NWV9JTkZPX0ZBSUxVUkUsXHJcblx0XHRcdGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9nSW5BUEkoZGF0YSkgeyAvLyBnZW5lcmF0b3Ig7JWE64uYXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly9yZXR1cm4gYXhpb3MucG9zdCgnL2FwaS9sb2dpbicsIGRhdGEpIC8vIOyLpOygnCDshJzrsoTsl5Ag66Gc6re47J24IOyalOyyreydhCDrs7Trg4QgLy8gZnJvbnRcclxuXHJcblx0Ly8g7Iuk7KCcIOyEnOuyhOyXkCDroZzqt7jsnbgg7JqU7LKt7J2EIOuztOuDhCAvLyBiYWNrXHJcblx0Ly9yZXR1cm4gYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDY1L3VzZXIvbG9naW4nLCBkYXRhKVxyXG5cclxuXHQvLyBsb2NhbGhvc3Qg7KSR67O1IOyXhuyVoOq4sFxyXG5cdHJldHVybiBheGlvcy5wb3N0KCcvdXNlci9sb2dpbicsIGRhdGEpXHJcbn1cclxuXHJcbi8vIO2FjOyKpO2KuCDsvZTrk5xcclxuLy8gY29uc3QgbCA9IGxvZ0luKHt0eXBlOiAnTE9HX0lOX1JFUVVFU1QnLCBkYXRhOiB7aWQ6ICdybGFhbHNkbjhAbmF2ZXIuY29tJ319KVxyXG4vLyBcdFx0bC5uZXh0KCk7XHJcbi8vIFx0XHRsLm5leHQoKTtcclxuLy8vLy8vLy8vLy8vLy8vLy9cclxuZnVuY3Rpb24qIGxvZ0luKGFjdGlvbikgeyAvLyBsb2dpbiBhY3Rpb24gcmVxdWVzdCDqsIAgYWN0aW9uIOyXkCDsoITri6xcclxuXHR0cnkgeyAvLyDsmpTssq0g7Iuk7YyoIOuMgOu5hFxyXG5cdFx0Ly95aWVsZCBkZWxheSgxMDAwKSAvLyBmcm9udFxyXG5cdFx0Y29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2dJbkFQSSwgYWN0aW9uLmRhdGEpIC8vIOyEnOuyhOyXkOyEnCDrsJvsnYAg6rKw6rO8IOqwkuydhCDrsJvsnYxcclxuXHRcdGNvbnNvbGUubG9nKCdzYWdhIGxvZ0luIOyLpO2WieykkTo6JywgYWN0aW9uLmRhdGEpXHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOiBMT0dfSU5fU1VDQ0VTUyxcclxuXHRcdFx0Ly9kYXRhOiBhY3Rpb24uZGF0YSwgLy8gZnJvbnRcclxuXHRcdFx0ZGF0YTogcmVzdWx0LmRhdGEgLy8gKOyEseqztSDqsrDqs7wg64u06rmAKSBiYWNrXHJcblx0XHR9KVxyXG5cdFx0Y29uc29sZS5sb2coJ3NhZ2EgbG9nSW4g7JmE66OMIDo6JywgcmVzdWx0KVxyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0Y29uc29sZS5lcnJvcignbG9nSW4nLCBlcnIpXHJcblx0XHR5aWVsZCBwdXQoeyAvLyBwdXQg7J2AIGRpc3BhdGNoIOudvOqzoCDsg53qsIHtlZjsnpBcclxuXHRcdFx0dHlwZTogTE9HX0lOX0ZBSUxVUkUsXHJcblx0XHRcdGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSAvLyAo7Iuk7YyoIOqysOqzvCDri7TquYApXHJcblx0XHR9KVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9nT3V0QVBJKCkge1xyXG5cdC8vIHJldHVybiBheGlvcy5wb3N0KCcvYXBpL2xvZ291dCcpIGZyb250XHJcblx0cmV0dXJuIGF4aW9zLnBvc3QoJy91c2VyL2xvZ291dCcpXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2dPdXQoKSB7XHJcblx0dHJ5IHsgLy8g7JqU7LKtIOyLpO2MqCDrjIDruYRcclxuXHRcdC8veWllbGQgZGVsYXkoMTAwMCkgZnJvbnRcclxuXHRcdHlpZWxkIGNhbGwobG9nT3V0QVBJKSAvLyDshJzrsoTsl5DshJwg67Cb7J2AIOqysOqzvCDqsJLsnYQg67Cb7J2MIGJhY2tcclxuXHRcdGNvbnNvbGUubG9nKCdzYWdhczo6IGxvZ291dCDsi6TtloknKVxyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogTE9HX09VVF9TVUNDRVNTLFxyXG5cdFx0fSlcclxuXHRcdGNvbnNvbGUubG9nKCdzYWdhczo6IGxvZ291dCDsmYTro4wnKVxyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0Y29uc29sZS5lcnJvcignZnJvbnQgbG9nT3V0IDogJywgZXJyKVxyXG5cdFx0eWllbGQgcHV0KHsgLy8gcHV0IOydgCBkaXNwYXRjaCDrnbzqs6Ag7IOd6rCB7ZWY7J6QXHJcblx0XHRcdHR5cGU6IExPR19PVVRfRkFJTFVSRSxcclxuXHRcdFx0ZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhIC8vICjsi6TtjKgg6rKw6rO8IOuLtOq5gClcclxuXHRcdH0pXHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBzaWduVXBBUEkoZGF0YSkge1xyXG5cdC8vIGJhY2sgZW5kIHNlcnZlciBhZGRyXHJcblx0Ly8gZGF0YSDripQgZW1haWwsIG5pY2tuYW1lLCBwYXNzd29yZCBvYmplY3RcclxuXHQvL3JldHVybiBheGlvcy5wb3N0KCcvYXBpL3NpZ251cCcsIGRhdGEpIC8vIGZyb250XHJcblx0cmV0dXJuIGF4aW9zLnBvc3QoJy91c2VyJywgZGF0YSkgLy8gYmFja1xyXG59XHJcblxyXG5mdW5jdGlvbiogc2lnblVwKGFjdGlvbikge1xyXG5cdHRyeSB7XHJcblx0XHQvL3lpZWxkIGRlbGF5KDEwMDApXHJcblx0XHRjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHNpZ25VcEFQSSwgYWN0aW9uLmRhdGEpXHJcblx0XHRjb25zb2xlLmxvZygnc2FnYSBzaWduIHVwIHJlc3VsdCDsi6TtlonspJEgOjogJywgYWN0aW9uLmRhdGEpXHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOiBTSUdOX1VQX1NVQ0NFU1MsXHJcblx0XHRcdC8vZGF0YTogcmVzdWx0LmRhdGFcclxuXHRcdH0pXHJcblx0XHRjb25zb2xlLmxvZygnc2FnYSBzaWduIHVwIOyZhOujjCA6OiAnLCByZXN1bHQpXHJcblx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRjb25zb2xlLmVycm9yKCdzYWdhIHNpZ25VcCBlcnJvciA6ICcsIGVycilcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IFNJR05fVVBfRkFJTFVSRSxcclxuXHRcdFx0ZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhXHJcblx0XHR9KVxyXG5cdH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGZvbGxvd0FQSShkYXRhKSB7IC8vIGRhdGEg7JeQIOyCrOyaqeyekCBpZCDrhKPslrTso7zquLBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgLy8gcmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvZm9sbG93JywgZGF0YSkgZnJvbnRcclxuXHRyZXR1cm4gYXhpb3MucGF0Y2goYC91c2VyLyR7ZGF0YX0vZm9sbG93YClcclxufVxyXG5cclxuZnVuY3Rpb24qIGZvbGxvdyhhY3Rpb24pIHtcclxuXHR0cnkge1xyXG5cdFx0Ly95aWVsZCBkZWxheSgxMDAwKSBmcm9udFxyXG5cdFx0Y29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChmb2xsb3dBUEksIGFjdGlvbi5kYXRhKVxyXG5cdFx0Y29uc29sZS5sb2coJ3NhZ2EgZm9sbG93IOyLpO2WiSA6ICcsIHJlc3VsdClcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IEZPTExPV19TVUNDRVNTLFxyXG5cdFx0XHQvL2RhdGE6IGFjdGlvbi5kYXRhIGZyb250XHJcblx0XHRcdGRhdGE6IHJlc3VsdC5kYXRhXHJcblx0XHR9KVxyXG5cdFx0Y29uc29sZS5sb2coJ3NhZ2EgZm9sbG93IOyZhOujjCA6OiAnLCByZXN1bHQpXHJcblx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRjb25zb2xlLmVycm9yKCdzYWdhIGZvbGxvdyBlcnJvciA6OiAnLCBlcnIpXHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOiBGT0xMT1dfRkFJTFVSRSxcclxuXHRcdFx0ZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG5cdFx0fSlcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVuZm9sbG93QVBJKGRhdGEpIHsvLyBkYXRhIOyXkCDsgqzsmqnsnpAgaWQg64Sj7Ja07KO86riwXHJcblx0Ly9yZXR1cm4gYXhpb3MucG9zdCgnL2FwaS91bmZvbGxvdycsIGRhdGEpIGZyb250XHJcblx0cmV0dXJuIGF4aW9zLmRlbGV0ZShgL3VzZXIvJHtkYXRhfS9mb2xsb3dgKVxyXG59XHJcblxyXG5mdW5jdGlvbiogdW5mb2xsb3coYWN0aW9uKSB7XHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwodW5mb2xsb3dBUEksIGFjdGlvbi5kYXRhKVxyXG5cdFx0Ly95aWVsZCBkZWxheSgxMDAwKSBmcm9udFxyXG5cdFx0Y29uc29sZS5sb2coJ3NhZ2EgdW5mb2xsb3cg7JqU7LKtIDo6ICcsIGFjdGlvbi5kYXRhKVxyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogVU5GT0xMT1dfU1VDQ0VTUyxcclxuXHRcdFx0Ly9kYXRhOiBhY3Rpb24uZGF0YSBmcm9udFxyXG5cdFx0XHRkYXRhOiByZXN1bHQuZGF0YVxyXG5cdFx0fSlcclxuXHRcdGNvbnNvbGUubG9nKCdzYWdhIHVuZm9sbG93IOyEseqztTo6ICcsIHJlc3VsdClcclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoJ3NhZ2EgdW5mb2xsb3cgZXJyb3I6OiAnLCBlcnIpXHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOiBVTkZPTExPV19GQUlMVVJFLFxyXG5cdFx0XHRlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcblx0XHR9KVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoUmVtb3ZlRm9sbG93ZXIoKSB7XHJcblx0eWllbGQgdGFrZUxhdGVzdChSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCwgcmVtb3ZlRm9sbG93ZXIpXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRGb2xsb3dlcnMoKSB7XHJcblx0eWllbGQgdGFrZUxhdGVzdChMT0FEX0ZPTExPV0VSU19SRVFVRVNULCBsb2FkRm9sbG93ZXJzKVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkRm9sbG93aW5ncygpIHtcclxuXHR5aWVsZCB0YWtlTGF0ZXN0KExPQURfRk9MTE9XSU5HU19SRVFVRVNULCBsb2FkRm9sbG93aW5ncylcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoQ2hhbmdlTmlja25hbWUoKSB7XHJcblx0eWllbGQgdGFrZUxhdGVzdChDSEFOR0VfTklDS05BTUVfUkVRVUVTVCwgY2hhbmdlTmlja25hbWUpXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRVc2VyKCkge1xyXG5cdHlpZWxkIHRha2VMYXRlc3QoTE9BRF9VU0VSX1JFUVVFU1QsIGxvYWRVc2VyKVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkTXlJbmZvKCkge1xyXG5cdHlpZWxkIHRha2VMYXRlc3QoTE9BRF9NWV9JTkZPX1JFUVVFU1QsIGxvYWRNeUluZm8pXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEZvbGxvdygpIHtcclxuXHR5aWVsZCB0YWtlTGF0ZXN0KEZPTExPV19SRVFVRVNULCBmb2xsb3cpXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFVuZm9sbG93KCkge1xyXG5cdHlpZWxkIHRha2VMYXRlc3QoVU5GT0xMT1dfUkVRVUVTVCwgdW5mb2xsb3cpXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvZ0luKCkge1x0Ly8g66Gc6re47J24IOyVoeyFmOydtCDsi6TtlonrkKDrlYzquYzsp4Ag6riw64uk66as6rKg64uk64qUIOucu1xyXG5cdHlpZWxkIHRha2VMYXRlc3QoTE9HX0lOX1JFUVVFU1QsIGxvZ0luKSAvL0xPR19JTl9SRVFVRVNUIOyVoeyFmOydtCDsi6TtlonrkJjrqbQgbG9nSW4g7ZWo7IiYIOyLpO2WiVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2dPdXQoKSB7XHQvLyDroZzqt7jslYTsm4Mg7JWh7IWY7J20IOyLpO2WieuQoOuVjOq5jOyngCDquLDri6TrpqzqsqDri6TripQg65y7XHJcblx0eWllbGQgdGFrZUxhdGVzdChMT0dfT1VUX1JFUVVFU1QsIGxvZ091dCkgLy9MT0dfT1VUX1JFUVVFU1Qg7JWh7IWY7J20IOyLpO2WieuQmOuptCBsb2dJbiDtlajsiJgg7Iuk7ZaJXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFNpZ25VcCgpIHtcdC8vIO2ajOybkOqwgOyehSDslaHshZjsnbQg7Iuk7ZaJ65Cg65WM6rmM7KeAIOq4sOuLpOumrOqyoOuLpOuKlCDrnLtcclxuXHR5aWVsZCB0YWtlTGF0ZXN0KFNJR05fVVBfUkVRVUVTVCwgc2lnblVwKSAvLyBTSUdOX1VQX1JFUVVFU1Qg7JWh7IWY7J20IOyLpO2WieuQmOuptCBsb2dJbiDtlajsiJgg7Iuk7ZaJXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiB1c2VyU2FnYSgpIHtcclxuXHR5aWVsZCBhbGwoW1xyXG5cdFx0Zm9yayh3YXRjaExvYWRVc2VyKSxcclxuXHRcdGZvcmsod2F0Y2hSZW1vdmVGb2xsb3dlciksXHJcblx0XHRmb3JrKHdhdGNoTG9hZEZvbGxvd2VycyksXHJcblx0XHRmb3JrKHdhdGNoTG9hZEZvbGxvd2luZ3MpLFxyXG5cdFx0Zm9yayh3YXRjaENoYW5nZU5pY2tuYW1lKSxcclxuXHRcdGZvcmsod2F0Y2hMb2FkTXlJbmZvKSxcclxuXHRcdGZvcmsod2F0Y2hGb2xsb3cpLFxyXG5cdFx0Zm9yayh3YXRjaFVuZm9sbG93KSxcclxuXHRcdGZvcmsod2F0Y2hMb2dJbiksXHJcblx0XHRmb3JrKHdhdGNoTG9nT3V0KSxcclxuXHRcdGZvcmsod2F0Y2hTaWduVXApLFxyXG5cdF0pXHJcbn1cclxuIiwiaW1wb3J0IHtjcmVhdGVXcmFwcGVyfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInXHJcbmltcG9ydCB7YXBwbHlNaWRkbGV3YXJlLCBjb21wb3NlLCBjcmVhdGVTdG9yZX0gZnJvbSAncmVkdXgnXHJcbmltcG9ydCB7Y29tcG9zZVdpdGhEZXZUb29sc30gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJ1xyXG4vL2ltcG9ydCB0aHVua01pZGRsZXdhcmUgZnJvbSAncmVkdXgtdGh1bmsnXHJcbmltcG9ydCBjcmVhdGVTYWdhTWlkZGxld2FyZSBmcm9tICdyZWR1eC1zYWdhJ1xyXG5cclxuaW1wb3J0IHJlZHVjZXIgZnJvbSAnLi4vcmVkdWNlcnMnXHJcbmltcG9ydCByb290U2FnYSBmcm9tICcuLi9zYWdhcydcclxuXHJcblxyXG5jb25zdCBsb2dnZXJNaWRkbGV3YXJlID0gKHtkaXNwYXRjaCwgZ2V0U3RhdGV9KSA9PiAobmV4dCkgPT4gKGFjdGlvbikgPT4ge1xyXG5cdGNvbnNvbGUubG9nKGFjdGlvbikgLy8g66+465Ok7Juo7Ja066W8IO2ZnOyaqe2VtCDrpqzrjZXsiqQg642w67iM7Yi07KaIIOyymOufvCDslaHshZgg66Gc6re4IOywje2eiOqyjCDtlZjquLBcclxuXHRyZXR1cm4gbmV4dChhY3Rpb24pXHJcbn1cclxuXHJcbmNvbnN0IGNvbmZpZ3VyZVN0b3JlID0gKCkgPT4ge1xyXG5cdGNvbnNvbGUubG9nKCdjb25maWd1cmVTdG9yZSBjb250ZXh0IDo6ICcpXHJcblx0Y29uc3Qgc2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhTWlkZGxld2FyZSgpIC8vIHNhZ2Eg7ISk7KCVIOuwqeuylVxyXG5cdGNvbnN0IG1pZGRsZXdhcmVzID0gW3NhZ2FNaWRkbGV3YXJlLCBsb2dnZXJNaWRkbGV3YXJlXVxyXG5cdGNvbnN0IGVuaGFuY2VyID1cclxuXHRcdFx0cHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJ1xyXG5cdFx0XHRcdFx0PyBjb21wb3NlKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpXHJcblx0XHRcdFx0XHQ6IGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSlcclxuXHRjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGVuaGFuY2VyKVxyXG5cdHN0b3JlLnNhZ2FUYXNrID0gc2FnYU1pZGRsZXdhcmUucnVuKHJvb3RTYWdhKVxyXG5cdHJldHVybiBzdG9yZVxyXG59XHJcbmNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKGNvbmZpZ3VyZVN0b3JlLFx0XHQvLyDsmLXshZjqsJ3ssrQg65SU67KE6re46rCAIO2KuOujqOydtOuptCDrpqzrjZXsiqTsl5DqtIDtlbTshJwg7J6Q7IS47ZWcIOyEpOuqheydtOuCmOyYpOq4sOuVjOusuOyXkCDqsJzrsJztlaDrlZAgdHJ1ZSDroZwg64aT7J6QXHJcblx0XHR7XHJcblx0XHRcdGRlYnVnOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyxcclxuXHRcdH0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlcjtcclxuIiwiaW1wb3J0IHByb2R1Y2UsIHtlbmFibGVFUzV9IGZyb20gXCJpbW1lclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKC4uLmFyZ3MpID0+IHsgLy8g7ZSE66Gc65OA7IqkIO2VqOyImCDtmZXsnqVcclxuXHRlbmFibGVFUzUoKVxyXG5cdHJldHVybiBwcm9kdWNlKC4uLmFyZ3MpXHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImltbWVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJlZHV4LXdyYXBwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zbGlja1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhL2VmZmVjdHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==