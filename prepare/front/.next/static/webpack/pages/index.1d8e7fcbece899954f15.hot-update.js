webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _component_AppLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/AppLayout */ "./component/AppLayout.js");
/* harmony import */ var _component_PostForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/PostForm */ "./component/PostForm.js");
/* harmony import */ var _component_PostCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component/PostCard */ "./component/PostCard.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
var _this = undefined,
    _jsxFileName = "D:\\intellijProjects\\react-nodebird\\prepare\\front\\pages\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // Next 에서는 이 구문이 필요가 없다.







var Home = function Home() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_5__["LOAD_POSTS_REQUEST"]
    });
  }, []);

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me;

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.post;
  }),
      mainPosts = _useSelector2.mainPosts;

  return __jsx(_component_AppLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 4
    }
  }, me && __jsx(_component_PostForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 12
    }
  }), " ", mainPosts.map(function (post) {
    return __jsx(_component_PostCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: post.id,
      post: post,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 7
      }
    });
  }));
};

_s(Home, "lSj3zPiDBkX9kG8p/QZ2Bmh3iP8=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"]];
});

_c = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, generateDummyPost, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, addPost, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
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
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shortid */ "./node_modules/shortid/index.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! faker */ "./node_modules/faker/index.js");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_2__);



var initialState = {
  mainPosts: [],
  imagePaths: [],
  // 이미지 경로들이 저장됨
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

var generateDummyPost = function generateDummyPost(number) {
  return Array(20).fill().map(function () {
    return {
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
    };
  });
}; // concat 을 할땐 항상 앞에 대입을 해줘야한다 그래야 합쳐짐

initialState.mainPosts = initialState.mainPosts.concat(generateDummyPost(10)); //게시글 작성하는 액션

var LOAD_POSTS_REQUEST = ' LOAD_POSTS_REQUEST'; // 화면을 로딩하면 바로 LOAD_POSTS_REQUEST 를 호출해줄것

var LOAD_POSTS_SUCCESS = ' LOAD_POSTS_SUCCESS';
var LOAD_POSTS_FAILURE = ' LOAD_POSTS_FAILURE';
var ADD_POST_REQUEST = 'ADD_POST_REQUEST'; // 변수로 따로 만들어줘야 중간에 오타가나는 일을 막을 수 있다

var ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
var ADD_POST_FAILURE = 'ADD_POST_FAILURE';
var REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
var REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
var REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';
var ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
var ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
var ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';
var addPost = function addPost(data) {
  return {
    type: ADD_POST_REQUEST,
    data: data
  };
}; // dynamic action create

var addComment = function addComment(data) {
  return {
    type: ADD_COMMENT_REQUEST,
    data: data
  };
};

var dummyPost = function dummyPost(data) {
  return {
    id: data.id,
    content: data.content,
    User: {
      id: 1,
      nickname: '비타민'
    },
    Images: [],
    Comments: []
  };
};

var dummyComment = function dummyComment(data) {
  return {
    id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
    content: data,
    User: {
      id: 1,
      nickname: '비타민'
    }
  };
}; // 이전 상태를 액션을 통해 다음 상태로 만들어내는 함수


var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return Object(immer__WEBPACK_IMPORTED_MODULE_1__["default"])(state, function (draft) {
    // immer 사용시 state 를 draft 로 교체해주며, switch 문인걸 인식하고 break 를 까먹지말자
    switch (action.type) {
      case ADD_POST_REQUEST:
        draft.addPostLoading = true;
        draft.addPostDone = false;
        draft.addPostError = null;
        break;

      case ADD_POST_SUCCESS:
        draft.mainPosts.unshift(dummyPost(action.data));
        draft.addPostLoading = false;
        draft.addPostDone = true;
        break;

      case ADD_POST_FAILURE:
        draft.addPostLoading = false;
        draft.addPostError = action.data;
        break;

      case REMOVE_POST_REQUEST:
        draft.removePostLoading = true;
        draft.removePostDone = false;
        draft.removePostError = null;
        break;

      case REMOVE_POST_SUCCESS:
        draft.mainPosts = draft.mainPosts.filter(function (v) {
          return v.id !== action.data;
        }); // 지울땐 보통 filter 가 편하다

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
          var post = draft.mainPosts.find(function (v) {
            return v.id === action.data.postId;
          }); // 게시글 리스트중에 post 찾기

          post.Comments.unshift(dummyComment(action.data.content)); // 찾은 post 에 맨 앞에 가짜 댓글 하나 넣어줌

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
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3JlZHVjZXJzL3Bvc3QuanMiXSwibmFtZXMiOlsiSG9tZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VFZmZlY3QiLCJ0eXBlIiwiTE9BRF9QT1NUU19SRVFVRVNUIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJtZSIsInBvc3QiLCJtYWluUG9zdHMiLCJtYXAiLCJpZCIsImluaXRpYWxTdGF0ZSIsImltYWdlUGF0aHMiLCJhZGRQb3N0TG9hZGluZyIsImFkZFBvc3REb25lIiwiYWRkUG9zdEVycm9yIiwicmVtb3ZlUG9zdExvYWRpbmciLCJyZW1vdmVQb3N0RG9uZSIsInJlbW92ZVBvc3RFcnJvciIsImFkZENvbW1lbnRMb2FkaW5nIiwiYWRkQ29tbWVudERvbmUiLCJhZGRDb21tZW50RXJyb3IiLCJnZW5lcmF0ZUR1bW15UG9zdCIsIm51bWJlciIsIkFycmF5IiwiZmlsbCIsInNob3J0SWQiLCJnZW5lcmF0ZSIsIlVzZXIiLCJuaWNrbmFtZSIsImZha2VyIiwibmFtZSIsImZpbmROYW1lIiwiY29udGVudCIsImxvcmVtIiwicGFyYWdyYXBoIiwiSW1hZ2VzIiwic3JjIiwiaW1hZ2UiLCJDb21tZW50cyIsInNlbnRlbmNlIiwiY29uY2F0IiwiTE9BRF9QT1NUU19TVUNDRVNTIiwiTE9BRF9QT1NUU19GQUlMVVJFIiwiQUREX1BPU1RfUkVRVUVTVCIsIkFERF9QT1NUX1NVQ0NFU1MiLCJBRERfUE9TVF9GQUlMVVJFIiwiUkVNT1ZFX1BPU1RfUkVRVUVTVCIsIlJFTU9WRV9QT1NUX1NVQ0NFU1MiLCJSRU1PVkVfUE9TVF9GQUlMVVJFIiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsIkFERF9DT01NRU5UX1NVQ0NFU1MiLCJBRERfQ09NTUVOVF9GQUlMVVJFIiwiYWRkUG9zdCIsImRhdGEiLCJhZGRDb21tZW50IiwiZHVtbXlQb3N0IiwiZHVtbXlDb21tZW50IiwicmVkdWNlciIsImFjdGlvbiIsInByb2R1Y2UiLCJkcmFmdCIsInVuc2hpZnQiLCJmaWx0ZXIiLCJ2IiwiUG9zdExvYWRpbmciLCJQb3N0RG9uZSIsImVycm9yIiwiZmluZCIsInBvc3RJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FBdUM7O0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUFBOztBQUNsQixNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBQ0FDLHlEQUFTLENBQUMsWUFBTTtBQUNmRixZQUFRLENBQUM7QUFDUkcsVUFBSSxFQUFFQyxpRUFBa0JBO0FBRGhCLEtBQUQsQ0FBUjtBQUdBLEdBSlEsRUFJTixFQUpNLENBQVQ7O0FBTUEscUJBQWFDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBakI7QUFBQSxHQUFELENBQXhCO0FBQUEsTUFBT0MsRUFBUCxnQkFBT0EsRUFBUDs7QUFDQSxzQkFBb0JILCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0csSUFBakI7QUFBQSxHQUFELENBQS9CO0FBQUEsTUFBT0MsU0FBUCxpQkFBT0EsU0FBUDs7QUFDQSxTQUNFLE1BQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUdFRixFQUFFLElBQUksTUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSFIsT0FJRUUsU0FBUyxDQUFDQyxHQUFWLENBQWMsVUFBQ0YsSUFBRDtBQUFBLFdBQ2IsTUFBQywyREFBRDtBQUFVLFNBQUcsRUFBRUEsSUFBSSxDQUFDRyxFQUFwQjtBQUF3QixVQUFJLEVBQUVILElBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFEYTtBQUFBLEdBQWQsQ0FKRixDQURGO0FBV0EsQ0FyQkQ7O0dBQU1WLEk7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QUssQ0FBQ3hDLGVBQU4sR0FBd0IsSUFBeEI7QUFDQTs7QUFDRCxXQUFLOEIsbUJBQUw7QUFBMEI7QUFDekI7QUFDQSxjQUFNNUMsSUFBSSxHQUFHc0QsS0FBSyxDQUFDckQsU0FBTixDQUFnQjRELElBQWhCLENBQXFCLFVBQUNKLENBQUQ7QUFBQSxtQkFBT0EsQ0FBQyxDQUFDdEQsRUFBRixLQUFTaUQsTUFBTSxDQUFDTCxJQUFQLENBQVllLE1BQTVCO0FBQUEsV0FBckIsQ0FBYixDQUZ5QixDQUU2Qzs7QUFDdEU5RCxjQUFJLENBQUNnQyxRQUFMLENBQWN1QixPQUFkLENBQXNCTCxZQUFZLENBQUNFLE1BQU0sQ0FBQ0wsSUFBUCxDQUFZckIsT0FBYixDQUFsQyxFQUh5QixDQUdnQzs7QUFDekQ0QixlQUFLLENBQUMxQyxpQkFBTixHQUEwQixLQUExQjtBQUNBMEMsZUFBSyxDQUFDekMsY0FBTixHQUF1QixJQUF2QjtBQUNBO0FBQ0E7O0FBQ0QsV0FBS2dDLG1CQUFMO0FBQ0NTLGFBQUssQ0FBQzFDLGlCQUFOLEdBQTBCLEtBQTFCO0FBQ0EwQyxhQUFLLENBQUN4QyxlQUFOLEdBQXdCc0MsTUFBTSxDQUFDUSxLQUEvQjtBQUNBOztBQUNEO0FBQ0M7QUEvQ0Y7QUFpREEsR0FuRHdELENBQXpDO0FBQUEsQ0FBaEI7O0FBb0RlVCxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xZDhlN2ZjYmVjZTg5OTk1NGYxNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0fSBmcm9tICdyZWFjdCcgLy8gTmV4dCDsl5DshJzripQg7J20IOq1rOusuOydtCDtlYTsmpTqsIAg7JeG64ukLlxyXG5pbXBvcnQge3VzZURpc3BhdGNoLCB1c2VTZWxlY3Rvcn0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCBBcHBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50L0FwcExheW91dCdcclxuaW1wb3J0IFBvc3RGb3JtIGZyb20gJy4uL2NvbXBvbmVudC9Qb3N0Rm9ybSdcclxuaW1wb3J0IFBvc3RDYXJkIGZyb20gXCIuLi9jb21wb25lbnQvUG9zdENhcmRcIjtcclxuaW1wb3J0IHtMT0FEX1BPU1RTX1JFUVVFU1R9IGZyb20gJy4uL3JlZHVjZXJzL3Bvc3QnXHJcblxyXG5jb25zdCBIb21lID0gKCkgPT4ge1xyXG5cdGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRkaXNwYXRjaCh7XHJcblx0XHRcdHR5cGU6IExPQURfUE9TVFNfUkVRVUVTVCxcclxuXHRcdH0pXHJcblx0fSwgW10pO1xyXG5cdFxyXG5cdGNvbnN0IHttZX0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpXHJcblx0Y29uc3Qge21haW5Qb3N0c30gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBvc3QpXHJcblx0cmV0dXJuIChcclxuXHRcdFx0PEFwcExheW91dD5cclxuXHRcdFx0XHR7LypBcHBMYXlvdXQg7J2EIOyCrOyaqe2VnOuLpCwg66eM7JW9IOuLpOuluCDroIjsnbTslYTsm4PsnYQg7IKs7Jqp7ZWY6rOg7Iu264uk66m0IOuUsOuhnCBjb21wb25lbnTsl5Ag66eM65Ok7Ja07IScIOydtOyZgOqwmeydtCDqsJDsi7jrqbTrkJzri6QuKi99XHJcblx0XHRcdFx0ey8q662U6rCAIOustuydvCDsiJgg7J6I64qUIOuLqOychOqwgOyeiOydhCDqsoMg6rCZ7Jy866m0IOuovOyggCDsu7Ttj6zrhIztirgg7J2066aE7J2EIOygle2VtOyjvOyekCovfVxyXG5cdFx0XHRcdHttZSAmJiA8UG9zdEZvcm0vPn0gey8q66qo65GQIOywuCDsnbjqsr3smrAg66eI7KeA66eJIO2UvCDsl7DsgrDsnpDrpbwg67CY7ZmYKi99XHJcblx0XHRcdFx0e21haW5Qb3N0cy5tYXAoKHBvc3QpID0+IChcclxuXHRcdFx0XHRcdFx0PFBvc3RDYXJkIGtleT17cG9zdC5pZH0gcG9zdD17cG9zdH0vPlxyXG5cdFx0XHRcdCkpfVxyXG5cdFx0XHRcdHsvKuydtOyZgOqwmeydtCBBcHBMYXlvdXQg7Jy866GcIOqwkOyLvCDsnbTrtoDrtoTsnYAgQXBwTGF5b3V0IOydmCBjaGlsZHJlbiDsnbTrkJzri6QuKi99XHJcblx0XHRcdDwvQXBwTGF5b3V0PlxyXG5cdClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVxyXG4iLCJpbXBvcnQgc2hvcnRJZCBmcm9tICdzaG9ydGlkJ1xyXG5pbXBvcnQgcHJvZHVjZSBmcm9tICdpbW1lcidcclxuaW1wb3J0IGZha2VyIGZyb20gJ2Zha2VyJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuXHRtYWluUG9zdHM6IFtcdF0sXHJcblx0aW1hZ2VQYXRoczogW10sIC8vIOydtOuvuOyngCDqsr3roZzrk6TsnbQg7KCA7J6l65CoXHJcblx0YWRkUG9zdExvYWRpbmc6IGZhbHNlLCAvLyDqsozsi5zrrLwg65Ox66Gd7KSRIOuhnOuUqVxyXG5cdGFkZFBvc3REb25lOiBmYWxzZSwgLy8g6rKM7Iuc66y8IOy2lOqwgOqwgCDsmYTro4zrkJjsl4jsnYTrlYwgdHJ1ZSDrs4DtmZhcclxuXHRhZGRQb3N0RXJyb3I6IG51bGwsXHJcblx0cmVtb3ZlUG9zdExvYWRpbmc6IGZhbHNlLCAvLyDqsozsi5zrrLwg7IKt7KCc7KSRIOuhnOuUqVxyXG5cdHJlbW92ZVBvc3REb25lOiBmYWxzZSwgLy8g6rKM7Iuc66y8IOyCreygnOqwgCDsmYTro4zrkJjsl4jsnYTrlYwgdHJ1ZSDrs4DtmZhcclxuXHRyZW1vdmVQb3N0RXJyb3I6IG51bGwsXHJcblx0YWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLCAvLyDrjJPquIAg65Ox66Gd7KSRIOuhnOuUqVxyXG5cdGFkZENvbW1lbnREb25lOiBmYWxzZSwgLy8g6rKM7Iuc66y8IOy2lOqwgOqwgCDsmYTro4zrkJjsl4jsnYTrlYwgdHJ1ZSDrs4DtmZhcclxuXHRhZGRDb21tZW50RXJyb3I6IG51bGwsXHJcbn1cclxuLy8g7J2067aA67aE7J2EIOyCrOyaqe2VtOyEnCDrrLTtlZwg7Iqk7YGs66Gk66eB7J2EIOunjOuTpOqyg1xyXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVEdW1teVBvc3QgPSAobnVtYmVyKSA9PiBBcnJheSgyMCkuZmlsbCgpLm1hcCgoKSA9PiAoe1xyXG5cdGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcblx0VXNlcjoge1xyXG5cdFx0aWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuXHRcdG5pY2tuYW1lOiBmYWtlci5uYW1lLmZpbmROYW1lKCksXHJcblx0fSxcclxuXHRjb250ZW50OiBmYWtlci5sb3JlbS5wYXJhZ3JhcGgoKSxcclxuXHRJbWFnZXM6IFt7XHJcblx0XHRzcmM6IGZha2VyLmltYWdlLmltYWdlKCksXHJcblx0fV0sXHJcblx0Q29tbWVudHM6IFt7XHJcblx0XHRVc2VyOiB7XHJcblx0XHRcdGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcblx0XHRcdG5pY2tuYW1lOiBmYWtlci5uYW1lLmZpbmROYW1lKCksXHJcblx0XHR9LFxyXG5cdFx0Y29udGVudDogZmFrZXIubG9yZW0uc2VudGVuY2UoKSxcclxuXHR9XSxcclxufSkpXHJcblxyXG4vLyBjb25jYXQg7J2EIO2VoOuVkCDtla3sg4Eg7JWe7JeQIOuMgOyeheydhCDtlbTspJjslbztlZzri6Qg6re4656Y7JW8IO2VqeyzkOynkFxyXG5pbml0aWFsU3RhdGUubWFpblBvc3RzID0gaW5pdGlhbFN0YXRlLm1haW5Qb3N0cy5jb25jYXQoXHJcblx0XHRnZW5lcmF0ZUR1bW15UG9zdCgxMClcclxuKTtcclxuXHJcbi8v6rKM7Iuc6riAIOyekeyEse2VmOuKlCDslaHshZhcclxuZXhwb3J0IGNvbnN0ICBMT0FEX1BPU1RTX1JFUVVFU1QgPSAnIExPQURfUE9TVFNfUkVRVUVTVCc7IC8vIO2ZlOuptOydhCDroZzrlKntlZjrqbQg67CU66GcIExPQURfUE9TVFNfUkVRVUVTVCDrpbwg7Zi47Lac7ZW07KSE6rKDXHJcbmV4cG9ydCBjb25zdCAgTE9BRF9QT1NUU19TVUNDRVNTID0gJyBMT0FEX1BPU1RTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgIExPQURfUE9TVFNfRkFJTFVSRSA9ICcgTE9BRF9QT1NUU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9SRVFVRVNUID0gJ0FERF9QT1NUX1JFUVVFU1QnOyAvLyDrs4DsiJjroZwg65Sw66GcIOunjOuTpOyWtOykmOyVvCDspJHqsITsl5Ag7Jik7YOA6rCA64KY64qUIOydvOydhCDrp4nsnYQg7IiYIOyeiOuLpFxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfU1VDQ0VTUyA9ICdBRERfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX0ZBSUxVUkUgPSAnQUREX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfUkVRVUVTVCA9ICdSRU1PVkVfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1NVQ0NFU1MgPSAnUkVNT1ZFX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9GQUlMVVJFID0gJ1JFTU9WRV9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1JFUVVFU1QgPSAnQUREX0NPTU1FTlRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9TVUNDRVNTID0gJ0FERF9DT01NRU5UX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfRkFJTFVSRSA9ICdBRERfQ09NTUVOVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRQb3N0ID0gKGRhdGEpID0+ICh7XHJcblx0dHlwZTogQUREX1BPU1RfUkVRVUVTVCxcclxuXHRkYXRhLFxyXG59KVxyXG5cclxuLy8gZHluYW1pYyBhY3Rpb24gY3JlYXRlXHJcbmV4cG9ydCBjb25zdCBhZGRDb21tZW50ID0gKGRhdGEpID0+ICh7XHJcblx0dHlwZTogQUREX0NPTU1FTlRfUkVRVUVTVCxcclxuXHRkYXRhLFxyXG59KVxyXG5cclxuY29uc3QgZHVtbXlQb3N0ID0gKGRhdGEpID0+ICh7XHJcblx0aWQ6IGRhdGEuaWQsXHJcblx0Y29udGVudDogZGF0YS5jb250ZW50LFxyXG5cdFVzZXI6IHtcclxuXHRcdGlkOiAxLFxyXG5cdFx0bmlja25hbWU6ICfruYTtg4Drr7wnLFxyXG5cdH0sXHJcblx0SW1hZ2VzOiBbXSxcclxuXHRDb21tZW50czogW10sXHJcbn0pXHJcblxyXG5jb25zdCBkdW1teUNvbW1lbnQgPSAoZGF0YSkgPT4gKHtcclxuXHRpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG5cdGNvbnRlbnQ6IGRhdGEsXHJcblx0VXNlcjoge1xyXG5cdFx0aWQ6IDEsXHJcblx0XHRuaWNrbmFtZTogJ+u5hO2DgOuvvCcsXHJcblx0fVxyXG59KVxyXG4vLyDsnbTsoIQg7IOB7YOc66W8IOyVoeyFmOydhCDthrXtlbQg64uk7J2MIOyDge2DnOuhnCDrp4zrk6TslrTrgrTripQg7ZWo7IiYXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcblx0Ly8gaW1tZXIg7IKs7Jqp7IucIHN0YXRlIOulvCBkcmFmdCDroZwg6rWQ7LK07ZW07KO866mwLCBzd2l0Y2gg66y47J246rG4IOyduOyLne2VmOqzoCBicmVhayDrpbwg6rmM66i57KeA66eQ7J6QXHJcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSBBRERfUE9TVF9SRVFVRVNUOlxyXG5cdFx0XHRkcmFmdC5hZGRQb3N0TG9hZGluZyA9IHRydWU7XHJcblx0XHRcdGRyYWZ0LmFkZFBvc3REb25lID0gZmFsc2U7XHJcblx0XHRcdGRyYWZ0LmFkZFBvc3RFcnJvciA9IG51bGw7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBBRERfUE9TVF9TVUNDRVNTOlxyXG5cdFx0XHRkcmFmdC5tYWluUG9zdHMudW5zaGlmdChkdW1teVBvc3QoYWN0aW9uLmRhdGEpKVxyXG5cdFx0XHRkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LmFkZFBvc3REb25lID0gdHJ1ZVxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgQUREX1BPU1RfRkFJTFVSRTpcclxuXHRcdFx0ZHJhZnQuYWRkUG9zdExvYWRpbmcgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC5hZGRQb3N0RXJyb3IgPSBhY3Rpb24uZGF0YVxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgUkVNT1ZFX1BPU1RfUkVRVUVTVDpcclxuXHRcdFx0ZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSB0cnVlXHJcblx0XHRcdGRyYWZ0LnJlbW92ZVBvc3REb25lID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQucmVtb3ZlUG9zdEVycm9yID0gbnVsbFxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgUkVNT1ZFX1BPU1RfU1VDQ0VTUzpcclxuXHRcdFx0ZHJhZnQubWFpblBvc3RzID0gZHJhZnQubWFpblBvc3RzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEpIC8vIOyngOyauOuVkCDrs7TthrUgZmlsdGVyIOqwgCDtjrjtlZjri6RcclxuXHRcdFx0ZHJhZnQuUG9zdExvYWRpbmcgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC5Qb3N0RG9uZSA9IHRydWVcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFJFTU9WRV9QT1NUX0ZBSUxVUkU6XHJcblx0XHRcdGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQucmVtb3ZlUG9zdEVycm9yID0gYWN0aW9uLmVycm9yXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBBRERfQ09NTUVOVF9SRVFVRVNUOlxyXG5cdFx0XHRkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IHRydWVcclxuXHRcdFx0ZHJhZnQuYWRkQ29tbWVudERvbmUgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC5hZGRDb21tZW50RXJyb3IgPSBudWxsXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBBRERfQ09NTUVOVF9TVUNDRVNTOiB7XHJcblx0XHRcdC8vYWN0aW9uLmRhdGEuY29udGVudCwgcG9zdElkLCB1c2VySWRcclxuXHRcdFx0Y29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5wb3N0SWQpIC8vIOqyjOyLnOq4gCDrpqzsiqTtirjspJHsl5AgcG9zdCDssL7quLBcclxuXHRcdFx0cG9zdC5Db21tZW50cy51bnNoaWZ0KGR1bW15Q29tbWVudChhY3Rpb24uZGF0YS5jb250ZW50KSkgLy8g7LC+7J2AIHBvc3Qg7JeQIOunqCDslZ7sl5Ag6rCA7KecIOuMk+q4gCDtlZjrgpgg64Sj7Ja07KSMXHJcblx0XHRcdGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQuYWRkQ29tbWVudERvbmUgPSB0cnVlXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBBRERfQ09NTUVOVF9GQUlMVVJFOlxyXG5cdFx0XHRkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LmFkZENvbW1lbnRFcnJvciA9IGFjdGlvbi5lcnJvclxyXG5cdFx0XHRicmVhaztcclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdGJyZWFrO1xyXG5cdH1cclxufSlcclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlclxyXG4iXSwic291cmNlUm9vdCI6IiJ9