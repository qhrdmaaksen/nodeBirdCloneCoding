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
      src: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726'
    }, {
      src: 'https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg'
    }, {
      src: 'https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg'
    }],
    Comments: [{
      User: {
        nickname: 'nero'
      },
      content: '개정판이 나왔네요!?'
    }, {
      User: {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpZCIsInNob3J0SWQiLCJnZW5lcmF0ZSIsIlVzZXIiLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJJbWFnZXMiLCJzcmMiLCJDb21tZW50cyIsImltYWdlUGF0aHMiLCJhZGRQb3N0TG9hZGluZyIsImFkZFBvc3REb25lIiwiYWRkUG9zdEVycm9yIiwiYWRkQ29tbWVudExvYWRpbmciLCJhZGRDb21tZW50RG9uZSIsImFkZENvbW1lbnRFcnJvciIsIkFERF9QT1NUX1JFUVVFU1QiLCJBRERfUE9TVF9TVUNDRVNTIiwiQUREX1BPU1RfRkFJTFVSRSIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJBRERfQ09NTUVOVF9TVUNDRVNTIiwiQUREX0NPTU1FTlRfRkFJTFVSRSIsImFkZFBvc3QiLCJkYXRhIiwidHlwZSIsImFkZENvbW1lbnQiLCJkdW1teVBvc3QiLCJkdW1teUNvbW1lbnQiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJlcnJvciIsInBvc3RJbmRleCIsImZpbmRJbmRleCIsInYiLCJwb3N0SWQiLCJwb3N0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFHTyxJQUFNQSxZQUFZLEdBQUc7QUFDM0JDLFdBQVMsRUFBRSxDQUNWO0FBQ0NDLE1BQUUsRUFBRUMsOENBQU8sQ0FBQ0MsUUFBUixFQURMO0FBRUNDLFFBQUksRUFBRTtBQUNMSCxRQUFFLEVBQUVDLDhDQUFPLENBQUNDLFFBQVIsRUFEQztBQUVMRSxjQUFRLEVBQUU7QUFGTCxLQUZQO0FBTUNDLFdBQU8sRUFBRSx1QkFOVjtBQU9DQyxVQUFNLEVBQUUsQ0FBQztBQUNSQyxTQUFHLEVBQUU7QUFERyxLQUFELEVBRUw7QUFDRkEsU0FBRyxFQUFFO0FBREgsS0FGSyxFQUlMO0FBQ0ZBLFNBQUcsRUFBRTtBQURILEtBSkss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LEtBREo7QUFFQ2hCLHlCQUFpQixFQUFFLElBRnBCO0FBR0NDLHNCQUFjLEVBQUUsS0FIakI7QUFJQ0MsdUJBQWUsRUFBRTtBQUpsQjs7QUFNRCxTQUFLSyxtQkFBTDtBQUF5QjtBQUN4QjtBQUNBLFlBQU1ZLFNBQVMsR0FBR0gsS0FBSyxDQUFDOUIsU0FBTixDQUFnQmtDLFNBQWhCLENBQTBCLFVBQUNDLENBQUQ7QUFBQSxpQkFBT0EsQ0FBQyxDQUFDbEMsRUFBRixLQUFTOEIsTUFBTSxDQUFDUCxJQUFQLENBQVlZLE1BQTVCO0FBQUEsU0FBMUIsQ0FBbEI7O0FBQ0EsWUFBTUMsSUFBSSxxQkFBT1AsS0FBSyxDQUFDOUIsU0FBTixDQUFnQmlDLFNBQWhCLENBQVAsQ0FBVjs7QUFDQUksWUFBSSxDQUFDNUIsUUFBTCxJQUFpQm1CLFlBQVksQ0FBQ0csTUFBTSxDQUFDUCxJQUFQLENBQVlsQixPQUFiLENBQTdCLHNHQUF1RCtCLElBQUksQ0FBQzVCLFFBQTVEOztBQUNBLFlBQU1ULFNBQVMsR0FBRyw2RkFBSThCLEtBQUssQ0FBQzlCLFNBQWIsQ0FBZjs7QUFDQUEsaUJBQVMsQ0FBQ2lDLFNBQUQsQ0FBVCxHQUF1QkksSUFBdkI7QUFDQSwrQ0FDSVAsS0FESjtBQUVDOUIsbUJBQVMsRUFBVEEsU0FGRDtBQUdDO0FBQ0FjLDJCQUFpQixFQUFFLEtBSnBCO0FBS0NDLHdCQUFjLEVBQUU7QUFMakI7QUFPQTs7QUFDRCxTQUFLTyxtQkFBTDtBQUNDLDZDQUNJUSxLQURKO0FBRUNoQix5QkFBaUIsRUFBRSxLQUZwQjtBQUdDRSx1QkFBZSxFQUFFZSxNQUFNLENBQUNDO0FBSHpCOztBQUtEO0FBQ0MsK0JBQ0lGLEtBREo7QUFsREY7QUFzREEsQ0F2REQ7O0FBd0RlRCxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmNhZWM2ODhhYThkMWRlNWIyNGVkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2hvcnRJZCBmcm9tICdzaG9ydGlkJ1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcblx0bWFpblBvc3RzOiBbXHJcblx0XHR7XHJcblx0XHRcdGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcblx0XHRcdFVzZXI6IHtcclxuXHRcdFx0XHRpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG5cdFx0XHRcdG5pY2tuYW1lOiAn67mE7YOA66+8JyxcclxuXHRcdFx0fSxcclxuXHRcdFx0Y29udGVudDogJ+yyqyDrsojsp7gg6rKM7Iuc6riAICPtlbTsi5ztg5zqt7ggI+ydteyKpO2UhOugiOyKpCcsXHJcblx0XHRcdEltYWdlczogW3tcclxuXHRcdFx0XHRzcmM6ICdodHRwczovL2Jvb2t0aHVtYi1waGluZi5wc3RhdGljLm5ldC9jb3Zlci8xMzcvOTk1LzEzNzk5NTg1LmpwZz91ZGF0ZT0yMDE4MDcyNicsXHJcblx0XHRcdH0sIHtcclxuXHRcdFx0XHRzcmM6ICdodHRwczovL2dpbWcuZ2lsYnV0LmNvLmtyL2Jvb2svQk4wMDE5NTgvcm5fdmlld19CTjAwMTk1OC5qcGcnLFxyXG5cdFx0XHR9LCB7XHJcblx0XHRcdFx0c3JjOiAnaHR0cHM6Ly9naW1nLmdpbGJ1dC5jby5rci9ib29rL0JOMDAxOTk4L3JuX3ZpZXdfQk4wMDE5OTguanBnJyxcclxuXHRcdFx0fV0sXHJcblx0XHRcdENvbW1lbnRzOiBbXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0VXNlcjoge1xyXG5cdFx0XHRcdFx0XHRuaWNrbmFtZTogJ25lcm8nLFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGNvbnRlbnQ6ICfqsJzsoJXtjJDsnbQg64KY7JmU64Sk7JqUIT8nLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0VXNlcjoge1xyXG5cdFx0XHRcdFx0XHRuaWNrbmFtZTogJ2hlcm8nLFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGNvbnRlbnQ6ICfsoJXrp5DsoJXrp5Ag7Iug6riw7ZWY64u5IScsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XSxcclxuXHRcdH0sXHJcblx0XSxcclxuXHRpbWFnZVBhdGhzOiBbXSwgLy8g7J2066+47KeAIOqyveuhnOuTpOydtCDsoIDsnqXrkKhcclxuXHRhZGRQb3N0TG9hZGluZzogZmFsc2UsXHJcblx0YWRkUG9zdERvbmU6IGZhbHNlLCAvLyDqsozsi5zrrLwg7LaU6rCA6rCAIOyZhOujjOuQmOyXiOydhOuVjCB0cnVlIOuzgO2ZmFxyXG5cdGFkZFBvc3RFcnJvcjogbnVsbCxcclxuXHRhZGRDb21tZW50TG9hZGluZzogZmFsc2UsXHJcblx0YWRkQ29tbWVudERvbmU6IGZhbHNlLCAvLyDqsozsi5zrrLwg7LaU6rCA6rCAIOyZhOujjOuQmOyXiOydhOuVjCB0cnVlIOuzgO2ZmFxyXG5cdGFkZENvbW1lbnRFcnJvcjogbnVsbCxcclxufVxyXG5cclxuLy/qsozsi5zquIAg7J6R7ISx7ZWY64qUIOyVoeyFmFxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfUkVRVUVTVCA9ICdBRERfUE9TVF9SRVFVRVNUJzsgLy8g67OA7IiY66GcIOuUsOuhnCDrp4zrk6TslrTspJjslbwg7KSR6rCE7JeQIOyYpO2DgOqwgOuCmOuKlCDsnbzsnYQg66eJ7J2EIOyImCDsnojri6RcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1NVQ0NFU1MgPSAnQUREX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9GQUlMVVJFID0gJ0FERF9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1JFUVVFU1QgPSAnQUREX0NPTU1FTlRfUkVRVUVTVCc7IC8vIOuzgOyImOuhnCDrlLDroZwg66eM65Ok7Ja07KSY7JW8IOykkeqwhOyXkCDsmKTtg4DqsIDrgpjripQg7J287J2EIOunieydhCDsiJgg7J6I64ukXHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9TVUNDRVNTID0gJ0FERF9DT01NRU5UX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfRkFJTFVSRSA9ICdBRERfQ09NTUVOVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRQb3N0ID0gKGRhdGEpID0+ICh7XHJcblx0dHlwZTogQUREX1BPU1RfUkVRVUVTVCxcclxuXHRkYXRhLFxyXG59KVxyXG5cclxuLy8gZHluYW1pYyBhY3Rpb24gY3JlYXRlXHJcbmV4cG9ydCBjb25zdCBhZGRDb21tZW50ID0gKGRhdGEpID0+ICh7XHJcblx0dHlwZTogQUREX0NPTU1FTlRfUkVRVUVTVCxcclxuXHRkYXRhLFxyXG59KVxyXG5cclxuY29uc3QgZHVtbXlQb3N0ID0gKGRhdGEpID0+ICh7XHJcblx0aWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuXHRjb250ZW50OiBkYXRhLFxyXG5cdFVzZXI6IHtcclxuXHRcdGlkOiAxLFxyXG5cdFx0bmlja25hbWU6ICfruYTtg4Drr7wnLFxyXG5cdH0sXHJcblx0SW1hZ2VzOiBbXSxcclxuXHRDb21tZW50czogW10sXHJcbn0pXHJcblxyXG5jb25zdCBkdW1teUNvbW1lbnQgPSAoZGF0YSkgPT4gKHtcclxuXHRpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG5cdGNvbnRlbnQ6IGRhdGEsXHJcblx0VXNlcjoge1xyXG5cdFx0aWQ6IDEsXHJcblx0XHRuaWNrbmFtZTogJ+u5hO2DgOuvvCcsXHJcblx0fVxyXG59KVxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSBBRERfUE9TVF9SRVFVRVNUOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGFkZFBvc3RMb2FkaW5nOiB0cnVlLFxyXG5cdFx0XHRcdGFkZFBvc3REb25lOiBmYWxzZSxcclxuXHRcdFx0XHRhZGRQb3N0RXJyb3I6IG51bGwsXHJcblx0XHRcdH1cclxuXHRcdGNhc2UgQUREX1BPU1RfU1VDQ0VTUzpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRtYWluUG9zdHM6IFtkdW1teVBvc3QoYWN0aW9uLmRhdGEpLCAuLi5zdGF0ZS5tYWluUG9zdHNdLCAvLyDrtojrs4DshLEg7KeA7Lyc7KO866mwIOyVnuyXkOuLpOqwgCDstpTqsIDtlbTslbwg6rKM7Iuc6riAIOychOyXkOyYrOudvOqwkFxyXG5cdFx0XHRcdGFkZFBvc3RMb2FkaW5nOiBmYWxzZSxcclxuXHRcdFx0XHRhZGRQb3N0RG9uZTogdHJ1ZSxcclxuXHRcdFx0fVxyXG5cdFx0Y2FzZSBBRERfUE9TVF9GQUlMVVJFOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGFkZFBvc3RMb2FkaW5nOiBmYWxzZSxcclxuXHRcdFx0XHRhZGRQb3N0RXJyb3I6IGFjdGlvbi5lcnJvcixcclxuXHRcdFx0fVxyXG5cdFx0Y2FzZSBBRERfQ09NTUVOVF9SRVFVRVNUOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGFkZENvbW1lbnRMb2FkaW5nOiB0cnVlLFxyXG5cdFx0XHRcdGFkZENvbW1lbnREb25lOiBmYWxzZSxcclxuXHRcdFx0XHRhZGRDb21tZW50RXJyb3I6IG51bGwsXHJcblx0XHRcdH1cclxuXHRcdGNhc2UgQUREX0NPTU1FTlRfU1VDQ0VTUzp7XHJcblx0XHRcdC8vYWN0aW9uLmRhdGEuY29udGVudCwgcG9zdElkLCB1c2VySWRcclxuXHRcdFx0Y29uc3QgcG9zdEluZGV4ID0gc3RhdGUubWFpblBvc3RzLmZpbmRJbmRleCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEucG9zdElkKVxyXG5cdFx0XHRjb25zdCBwb3N0ID0gey4uLnN0YXRlLm1haW5Qb3N0c1twb3N0SW5kZXhdfVxyXG5cdFx0XHRwb3N0LkNvbW1lbnRzID0gW2R1bW15Q29tbWVudChhY3Rpb24uZGF0YS5jb250ZW50KSwgLi4ucG9zdC5Db21tZW50c11cclxuXHRcdFx0Y29uc3QgbWFpblBvc3RzID0gWy4uLnN0YXRlLm1haW5Qb3N0c11cclxuXHRcdFx0bWFpblBvc3RzW3Bvc3RJbmRleF0gPSBwb3N0XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0bWFpblBvc3RzLFxyXG5cdFx0XHRcdC8vbWFpblBvc3RzOiBbZHVtbXlQb3N0LCAuLi5zdGF0ZS5tYWluUG9zdHNdLCAvLyDrtojrs4DshLEg7KeA7Lyc7KO866mwIOyVnuyXkOuLpOqwgCDstpTqsIDtlbTslbwg6rKM7Iuc6riAIOychOyXkOyYrOudvOqwkFxyXG5cdFx0XHRcdGFkZENvbW1lbnRMb2FkaW5nOiBmYWxzZSxcclxuXHRcdFx0XHRhZGRDb21tZW50RG9uZTogdHJ1ZSxcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0Y2FzZSBBRERfQ09NTUVOVF9GQUlMVVJFOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGFkZENvbW1lbnRMb2FkaW5nOiBmYWxzZSxcclxuXHRcdFx0XHRhZGRDb21tZW50RXJyb3I6IGFjdGlvbi5lcnJvcixcclxuXHRcdFx0fVxyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0fVxyXG5cdH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=