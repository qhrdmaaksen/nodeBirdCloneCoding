webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, addPost, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_REQUEST", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_SUCCESS", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_FAILURE", function() { return ADD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_REQUEST", function() { return ADD_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_SUCCESS", function() { return ADD_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_FAILURE", function() { return ADD_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPost", function() { return addPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addComment", function() { return addComment; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shortid */ "./node_modules/shortid/index.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_2__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }


var initialState = {
  mainPosts: [{
    id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),
    User: {
      id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),
      nickname: '비타민'
    },
    content: '첫 번째 게시글 #해시태그 #익스프레스',
    Images: [{
      id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),
      src: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726'
    }, {
      id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),
      src: 'https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg'
    }, {
      id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),
      src: 'https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg'
    }],
    Comments: [{
      id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),
      User: {
        id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),
        nickname: 'nero'
      },
      content: '개정판이 나왔네요!?'
    }, {
      id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),
      User: {
        id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),
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

var ADD_POST_REQUEST = 'ADD_POST_REQUEST'; // 변수로 따로 만들어줘야 중간에 오타가나는 일을 막을 수 있다

var ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
var ADD_POST_FAILURE = 'ADD_POST_FAILURE';
var ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST'; // 변수로 따로 만들어줘야 중간에 오타가나는 일을 막을 수 있다

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
    id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),
    content: data,
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
    id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),
    content: data,
    User: {
      id: 1,
      nickname: '비타민'
    }
  };
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case ADD_POST_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        addPostLoading: true,
        addPostDone: false,
        addPostError: null
      });

    case ADD_POST_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        mainPosts: [dummyPost(action.data)].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.mainPosts)),
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
        var postIndex = state.mainPosts.findIndex(function (v) {
          return v.id === action.data.postId;
        });

        var post = _objectSpread({}, state.mainPosts[postIndex]);

        post.Comments = [dummyComment(action.data.content)].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(post.Comments));

        var mainPosts = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.mainPosts);

        mainPosts[postIndex] = post;
        return _objectSpread(_objectSpread({}, state), {}, {
          mainPosts: mainPosts,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpZCIsInNob3J0SWQiLCJnZW5lcmF0ZSIsIlVzZXIiLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJJbWFnZXMiLCJzcmMiLCJDb21tZW50cyIsImltYWdlUGF0aHMiLCJhZGRQb3N0TG9hZGluZyIsImFkZFBvc3REb25lIiwiYWRkUG9zdEVycm9yIiwiYWRkQ29tbWVudExvYWRpbmciLCJhZGRDb21tZW50RG9uZSIsImFkZENvbW1lbnRFcnJvciIsIkFERF9QT1NUX1JFUVVFU1QiLCJBRERfUE9TVF9TVUNDRVNTIiwiQUREX1BPU1RfRkFJTFVSRSIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJBRERfQ09NTUVOVF9TVUNDRVNTIiwiQUREX0NPTU1FTlRfRkFJTFVSRSIsImFkZFBvc3QiLCJkYXRhIiwidHlwZSIsImFkZENvbW1lbnQiLCJkdW1teVBvc3QiLCJkdW1teUNvbW1lbnQiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJlcnJvciIsInBvc3RJbmRleCIsImZpbmRJbmRleCIsInYiLCJwb3N0SWQiLCJwb3N0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFHTyxJQUFNQSxZQUFZLEdBQUc7QUFDM0JDLFdBQVMsRUFBRSxDQUNWO0FBQ0NDLE1BQUUsRUFBRUMsOENBQU8sQ0FBQ0MsUUFBUixFQURMO0FBRUNDLFFBQUksRUFBRTtBQUNMSCxRQUFFLEVBQUVDLDhDQUFPLENBQUNDLFFBQVIsRUFEQztBQUVMRSxjQUFRLEVBQUU7QUFGTCxLQUZQO0FBTUNDLFdBQU8sRUFBRSx1QkFOVjtBQU9DQyxVQUFNLEVBQUUsQ0FBQztBQUNSTixRQUFFLEVBQUVDLDhDQUFPLENBQUNDLFFBQVIsRUFESTtBQUVSSyxTQUFHLEVBQUU7QUFGRyxLQUFELEVBR0w7QUFDRlAsUUFBRSxFQUFFQyw4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LFNBQUtPLG1CQUFMO0FBQ0MsNkNBQ0lRLEtBREo7QUFFQ2hCLHlCQUFpQixFQUFFLEtBRnBCO0FBR0NFLHVCQUFlLEVBQUVlLE1BQU0sQ0FBQ0M7QUFIekI7O0FBS0Q7QUFDQywrQkFDSUYsS0FESjtBQWxERjtBQXNEQSxDQXZERDs7QUF3RGVELHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMDFjN2U5ZjlhMTI4YTdmYzlkMjQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzaG9ydElkIGZyb20gJ3Nob3J0aWQnXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuXHRtYWluUG9zdHM6IFtcclxuXHRcdHtcclxuXHRcdFx0aWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuXHRcdFx0VXNlcjoge1xyXG5cdFx0XHRcdGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcblx0XHRcdFx0bmlja25hbWU6ICfruYTtg4Drr7wnLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRjb250ZW50OiAn7LKrIOuyiOynuCDqsozsi5zquIAgI+2VtOyLnO2DnOq3uCAj7J217Iqk7ZSE66CI7IqkJyxcclxuXHRcdFx0SW1hZ2VzOiBbe1xyXG5cdFx0XHRcdGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcblx0XHRcdFx0c3JjOiAnaHR0cHM6Ly9ib29rdGh1bWItcGhpbmYucHN0YXRpYy5uZXQvY292ZXIvMTM3Lzk5NS8xMzc5OTU4NS5qcGc/dWRhdGU9MjAxODA3MjYnLFxyXG5cdFx0XHR9LCB7XHJcblx0XHRcdFx0aWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuXHRcdFx0XHRzcmM6ICdodHRwczovL2dpbWcuZ2lsYnV0LmNvLmtyL2Jvb2svQk4wMDE5NTgvcm5fdmlld19CTjAwMTk1OC5qcGcnLFxyXG5cdFx0XHR9LCB7XHJcblx0XHRcdFx0aWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuXHRcdFx0XHRzcmM6ICdodHRwczovL2dpbWcuZ2lsYnV0LmNvLmtyL2Jvb2svQk4wMDE5OTgvcm5fdmlld19CTjAwMTk5OC5qcGcnLFxyXG5cdFx0XHR9XSxcclxuXHRcdFx0Q29tbWVudHM6IFtcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG5cdFx0XHRcdFx0VXNlcjoge1xyXG5cdFx0XHRcdFx0XHRpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG5cdFx0XHRcdFx0XHRuaWNrbmFtZTogJ25lcm8nLFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGNvbnRlbnQ6ICfqsJzsoJXtjJDsnbQg64KY7JmU64Sk7JqUIT8nLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuXHRcdFx0XHRcdFVzZXI6IHtcclxuXHRcdFx0XHRcdFx0aWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuXHRcdFx0XHRcdFx0bmlja25hbWU6ICdoZXJvJyxcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRjb250ZW50OiAn7KCV66eQ7KCV66eQIOyLoOq4sO2VmOuLuSEnLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdF0sXHJcblx0XHR9LFxyXG5cdF0sXHJcblx0aW1hZ2VQYXRoczogW10sIC8vIOydtOuvuOyngCDqsr3roZzrk6TsnbQg7KCA7J6l65CoXHJcblx0YWRkUG9zdExvYWRpbmc6IGZhbHNlLFxyXG5cdGFkZFBvc3REb25lOiBmYWxzZSwgLy8g6rKM7Iuc66y8IOy2lOqwgOqwgCDsmYTro4zrkJjsl4jsnYTrlYwgdHJ1ZSDrs4DtmZhcclxuXHRhZGRQb3N0RXJyb3I6IG51bGwsXHJcblx0YWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLFxyXG5cdGFkZENvbW1lbnREb25lOiBmYWxzZSwgLy8g6rKM7Iuc66y8IOy2lOqwgOqwgCDsmYTro4zrkJjsl4jsnYTrlYwgdHJ1ZSDrs4DtmZhcclxuXHRhZGRDb21tZW50RXJyb3I6IG51bGwsXHJcbn1cclxuXHJcbi8v6rKM7Iuc6riAIOyekeyEse2VmOuKlCDslaHshZhcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1JFUVVFU1QgPSAnQUREX1BPU1RfUkVRVUVTVCc7IC8vIOuzgOyImOuhnCDrlLDroZwg66eM65Ok7Ja07KSY7JW8IOykkeqwhOyXkCDsmKTtg4DqsIDrgpjripQg7J287J2EIOunieydhCDsiJgg7J6I64ukXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9TVUNDRVNTID0gJ0FERF9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfRkFJTFVSRSA9ICdBRERfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9SRVFVRVNUID0gJ0FERF9DT01NRU5UX1JFUVVFU1QnOyAvLyDrs4DsiJjroZwg65Sw66GcIOunjOuTpOyWtOykmOyVvCDspJHqsITsl5Ag7Jik7YOA6rCA64KY64qUIOydvOydhCDrp4nsnYQg7IiYIOyeiOuLpFxyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfU1VDQ0VTUyA9ICdBRERfQ09NTUVOVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX0ZBSUxVUkUgPSAnQUREX0NPTU1FTlRfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkUG9zdCA9IChkYXRhKSA9PiAoe1xyXG5cdHR5cGU6IEFERF9QT1NUX1JFUVVFU1QsXHJcblx0ZGF0YSxcclxufSlcclxuXHJcbi8vIGR5bmFtaWMgYWN0aW9uIGNyZWF0ZVxyXG5leHBvcnQgY29uc3QgYWRkQ29tbWVudCA9IChkYXRhKSA9PiAoe1xyXG5cdHR5cGU6IEFERF9DT01NRU5UX1JFUVVFU1QsXHJcblx0ZGF0YSxcclxufSlcclxuXHJcbmNvbnN0IGR1bW15UG9zdCA9IChkYXRhKSA9PiAoe1xyXG5cdGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcblx0Y29udGVudDogZGF0YSxcclxuXHRVc2VyOiB7XHJcblx0XHRpZDogMSxcclxuXHRcdG5pY2tuYW1lOiAn67mE7YOA66+8JyxcclxuXHR9LFxyXG5cdEltYWdlczogW10sXHJcblx0Q29tbWVudHM6IFtdLFxyXG59KVxyXG5cclxuY29uc3QgZHVtbXlDb21tZW50ID0gKGRhdGEpID0+ICh7XHJcblx0aWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuXHRjb250ZW50OiBkYXRhLFxyXG5cdFVzZXI6IHtcclxuXHRcdGlkOiAxLFxyXG5cdFx0bmlja25hbWU6ICfruYTtg4Drr7wnLFxyXG5cdH1cclxufSlcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgQUREX1BPU1RfUkVRVUVTVDpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRhZGRQb3N0TG9hZGluZzogdHJ1ZSxcclxuXHRcdFx0XHRhZGRQb3N0RG9uZTogZmFsc2UsXHJcblx0XHRcdFx0YWRkUG9zdEVycm9yOiBudWxsLFxyXG5cdFx0XHR9XHJcblx0XHRjYXNlIEFERF9QT1NUX1NVQ0NFU1M6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0bWFpblBvc3RzOiBbZHVtbXlQb3N0KGFjdGlvbi5kYXRhKSwgLi4uc3RhdGUubWFpblBvc3RzXSwgLy8g67aI67OA7ISxIOyngOy8nOyjvOupsCDslZ7sl5Dri6TqsIAg7LaU6rCA7ZW07JW8IOqyjOyLnOq4gCDsnITsl5DsmKzrnbzqsJBcclxuXHRcdFx0XHRhZGRQb3N0TG9hZGluZzogZmFsc2UsXHJcblx0XHRcdFx0YWRkUG9zdERvbmU6IHRydWUsXHJcblx0XHRcdH1cclxuXHRcdGNhc2UgQUREX1BPU1RfRkFJTFVSRTpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRhZGRQb3N0TG9hZGluZzogZmFsc2UsXHJcblx0XHRcdFx0YWRkUG9zdEVycm9yOiBhY3Rpb24uZXJyb3IsXHJcblx0XHRcdH1cclxuXHRcdGNhc2UgQUREX0NPTU1FTlRfUkVRVUVTVDpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRhZGRDb21tZW50TG9hZGluZzogdHJ1ZSxcclxuXHRcdFx0XHRhZGRDb21tZW50RG9uZTogZmFsc2UsXHJcblx0XHRcdFx0YWRkQ29tbWVudEVycm9yOiBudWxsLFxyXG5cdFx0XHR9XHJcblx0XHRjYXNlIEFERF9DT01NRU5UX1NVQ0NFU1M6e1xyXG5cdFx0XHQvL2FjdGlvbi5kYXRhLmNvbnRlbnQsIHBvc3RJZCwgdXNlcklkXHJcblx0XHRcdGNvbnN0IHBvc3RJbmRleCA9IHN0YXRlLm1haW5Qb3N0cy5maW5kSW5kZXgoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLnBvc3RJZClcclxuXHRcdFx0Y29uc3QgcG9zdCA9IHsuLi5zdGF0ZS5tYWluUG9zdHNbcG9zdEluZGV4XX1cclxuXHRcdFx0cG9zdC5Db21tZW50cyA9IFtkdW1teUNvbW1lbnQoYWN0aW9uLmRhdGEuY29udGVudCksIC4uLnBvc3QuQ29tbWVudHNdXHJcblx0XHRcdGNvbnN0IG1haW5Qb3N0cyA9IFsuLi5zdGF0ZS5tYWluUG9zdHNdXHJcblx0XHRcdG1haW5Qb3N0c1twb3N0SW5kZXhdID0gcG9zdFxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdG1haW5Qb3N0cyxcclxuXHRcdFx0XHQvL21haW5Qb3N0czogW2R1bW15UG9zdCwgLi4uc3RhdGUubWFpblBvc3RzXSwgLy8g67aI67OA7ISxIOyngOy8nOyjvOupsCDslZ7sl5Dri6TqsIAg7LaU6rCA7ZW07JW8IOqyjOyLnOq4gCDsnITsl5DsmKzrnbzqsJBcclxuXHRcdFx0XHRhZGRDb21tZW50TG9hZGluZzogZmFsc2UsXHJcblx0XHRcdFx0YWRkQ29tbWVudERvbmU6IHRydWUsXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGNhc2UgQUREX0NPTU1FTlRfRkFJTFVSRTpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRhZGRDb21tZW50TG9hZGluZzogZmFsc2UsXHJcblx0XHRcdFx0YWRkQ29tbWVudEVycm9yOiBhY3Rpb24uZXJyb3IsXHJcblx0XHRcdH1cclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdH1cclxuXHR9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlclxyXG4iXSwic291cmNlUm9vdCI6IiJ9