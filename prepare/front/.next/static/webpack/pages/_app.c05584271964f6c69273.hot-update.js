webpackHotUpdate_N_E("pages/_app",{

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
  hasMorePost: false,
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
      case LOAD_POSTS_REQUEST:
        draft.loadPostsLoading = true;
        draft.loadPostsDone = false;
        draft.loadPostsError = null;
        break;

      case LOAD_POSTS_SUCCESS:
        // action.data 에 dummy data 가 들어있을것이며, 기존데이터와 합쳐주는것
        draft.mainPosts = action.data.concat(draft.mainPosts);
        draft.loadPostsLoading = false;
        draft.loadPostsDone = true;
        break;

      case LOAD_POSTS_FAILURE:
        draft.loadPostsLoading = false;
        draft.loadPostsError = action.data;
        break;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpbWFnZVBhdGhzIiwiaGFzTW9yZVBvc3QiLCJsb2FkUG9zdHNMb2FkaW5nIiwibG9hZFBvc3RzRG9uZSIsImxvYWRQb3N0c0Vycm9yIiwiYWRkUG9zdExvYWRpbmciLCJhZGRQb3N0RG9uZSIsImFkZFBvc3RFcnJvciIsInJlbW92ZVBvc3RMb2FkaW5nIiwicmVtb3ZlUG9zdERvbmUiLCJyZW1vdmVQb3N0RXJyb3IiLCJhZGRDb21tZW50TG9hZGluZyIsImFkZENvbW1lbnREb25lIiwiYWRkQ29tbWVudEVycm9yIiwiZ2VuZXJhdGVEdW1teVBvc3QiLCJudW1iZXIiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJpZCIsInNob3J0SWQiLCJnZW5lcmF0ZSIsIlVzZXIiLCJuaWNrbmFtZSIsImZha2VyIiwibmFtZSIsImZpbmROYW1lIiwiY29udGVudCIsImxvcmVtIiwicGFyYWdyYXBoIiwiSW1hZ2VzIiwic3JjIiwiaW1hZ2UiLCJDb21tZW50cyIsInNlbnRlbmNlIiwiY29uY2F0IiwiTE9BRF9QT1NUU19SRVFVRVNUIiwiTE9BRF9QT1NUU19TVUNDRVNTIiwiTE9BRF9QT1NUU19GQUlMVVJFIiwiQUREX1BPU1RfUkVRVUVTVCIsIkFERF9QT1NUX1NVQ0NFU1MiLCJBRERfUE9TVF9GQUlMVVJFIiwiUkVNT1ZFX1BPU1RfUkVRVUVTVCIsIlJFTU9WRV9QT1NUX1NVQ0NFU1MiLCJSRU1PVkVfUE9TVF9GQUlMVVJFIiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsIkFERF9DT01NRU5UX1NVQ0NFU1MiLCJBRERfQ09NTUVOVF9GQUlMVVJFIiwiYWRkUG9zdCIsImRhdGEiLCJ0eXBlIiwiYWRkQ29tbWVudCIsImR1bW15UG9zdCIsImR1bW15Q29tbWVudCIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInByb2R1Y2UiLCJkcmFmdCIsInVuc2hpZnQiLCJmaWx0ZXIiLCJ2IiwiUG9zdExvYWRpbmciLCJQb3N0RG9uZSIsImVycm9yIiwicG9zdCIsImZpbmQiLCJwb3N0SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLFlBQVksR0FBRztBQUMzQkMsV0FBUyxFQUFFLEVBRGdCO0FBRTNCQyxZQUFVLEVBQUUsRUFGZTtBQUVYO0FBQ2hCQyxhQUFXLEVBQUUsS0FIYztBQUkzQkMsa0JBQWdCLEVBQUUsS0FKUztBQUlGO0FBQ3pCQyxlQUFhLEVBQUUsS0FMWTtBQUtMO0FBQ3RCQyxnQkFBYyxFQUFFLElBTlc7QUFPM0JDLGdCQUFjLEVBQUUsS0FQVztBQU9KO0FBQ3ZCQyxhQUFXLEVBQUUsS0FSYztBQVFQO0FBQ3BCQyxjQUFZLEVBQUUsSUFUYTtBQVUzQkMsbUJBQWlCLEVBQUUsS0FWUTtBQVVEO0FBQzFCQyxnQkFBYyxFQUFFLEtBWFc7QUFXSjtBQUN2QkMsaUJBQWUsRUFBRSxJQVpVO0FBYTNCQyxtQkFBaUIsRUFBRSxLQWJRO0FBYUQ7QUFDMUJDLGdCQUFjLEVBQUUsS0FkVztBQWNKO0FBQ3ZCQyxpQkFBZSxFQUFFO0FBZlUsQ0FBckIsQyxDQWlCUDs7QUFDTyxJQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNDLE1BQUQ7QUFBQSxTQUFZQyxLQUFLLENBQUMsRUFBRCxDQUFMLENBQVVDLElBQVYsR0FBaUJDLEdBQWpCLENBQXFCO0FBQUEsV0FBTztBQUN4RUMsUUFBRSxFQUFFQyw4Q0FBTyxDQUFDQyxRQUFSLEVBRG9FO0FBRXhFQyxVQUFJLEVBQUU7QUFDTEgsVUFBRSxFQUFFQyw4Q0FBTyxDQUFDQyxRQUFSLEVBREM7QUFFTEUsZ0JBQVEsRUFBRUMsNENBQUssQ0FBQ0MsSUFBTixD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QTtBQUNBOztBQUNELFdBQUttQyxtQkFBTDtBQUNDVyxhQUFLLENBQUMvQyxpQkFBTixHQUEwQixLQUExQjtBQUNBK0MsYUFBSyxDQUFDN0MsZUFBTixHQUF3QjJDLE1BQU0sQ0FBQ1EsS0FBL0I7QUFDQTs7QUFDRDtBQUNDO0FBOURGO0FBZ0VBLEdBbEV3RCxDQUF6QztBQUFBLENBQWhCOztBQW1FZVYsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5jMDU1ODQyNzE5NjRmNmM2OTI3My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNob3J0SWQgZnJvbSAnc2hvcnRpZCdcclxuaW1wb3J0IHByb2R1Y2UgZnJvbSAnaW1tZXInXHJcbmltcG9ydCBmYWtlciBmcm9tICdmYWtlcidcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcblx0bWFpblBvc3RzOiBbXHRdLFxyXG5cdGltYWdlUGF0aHM6IFtdLCAvLyDsnbTrr7jsp4Ag6rK966Gc65Ok7J20IOyggOyepeuQqFxyXG5cdGhhc01vcmVQb3N0OiBmYWxzZSxcclxuXHRsb2FkUG9zdHNMb2FkaW5nOiBmYWxzZSwgLy8g7ZmU66m0IOuhnOuTnOykkSDroZzrlKlcclxuXHRsb2FkUG9zdHNEb25lOiBmYWxzZSwgLy8g7ZmU66m0IOuhnOuTnCDsmYTro4zrkJjsl4jsnYTrlYwgdHJ1ZSDrs4DtmZhcclxuXHRsb2FkUG9zdHNFcnJvcjogbnVsbCxcclxuXHRhZGRQb3N0TG9hZGluZzogZmFsc2UsIC8vIOqyjOyLnOusvCDrk7HroZ3spJEg66Gc65SpXHJcblx0YWRkUG9zdERvbmU6IGZhbHNlLCAvLyDqsozsi5zrrLwg7LaU6rCA6rCAIOyZhOujjOuQmOyXiOydhOuVjCB0cnVlIOuzgO2ZmFxyXG5cdGFkZFBvc3RFcnJvcjogbnVsbCxcclxuXHRyZW1vdmVQb3N0TG9hZGluZzogZmFsc2UsIC8vIOqyjOyLnOusvCDsgq3soJzspJEg66Gc65SpXHJcblx0cmVtb3ZlUG9zdERvbmU6IGZhbHNlLCAvLyDqsozsi5zrrLwg7IKt7KCc6rCAIOyZhOujjOuQmOyXiOydhOuVjCB0cnVlIOuzgO2ZmFxyXG5cdHJlbW92ZVBvc3RFcnJvcjogbnVsbCxcclxuXHRhZGRDb21tZW50TG9hZGluZzogZmFsc2UsIC8vIOuMk+q4gCDrk7HroZ3spJEg66Gc65SpXHJcblx0YWRkQ29tbWVudERvbmU6IGZhbHNlLCAvLyDqsozsi5zrrLwg7LaU6rCA6rCAIOyZhOujjOuQmOyXiOydhOuVjCB0cnVlIOuzgO2ZmFxyXG5cdGFkZENvbW1lbnRFcnJvcjogbnVsbCxcclxufVxyXG4vLyDsnbTrtoDrtoTsnYQg7IKs7Jqp7ZW07IScIOustO2VnCDsiqTtgazroaTrp4HsnYQg66eM65Ok6rKDXHJcbmV4cG9ydCBjb25zdCBnZW5lcmF0ZUR1bW15UG9zdCA9IChudW1iZXIpID0+IEFycmF5KDIwKS5maWxsKCkubWFwKCgpID0+ICh7XHJcblx0aWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuXHRVc2VyOiB7XHJcblx0XHRpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG5cdFx0bmlja25hbWU6IGZha2VyLm5hbWUuZmluZE5hbWUoKSxcclxuXHR9LFxyXG5cdGNvbnRlbnQ6IGZha2VyLmxvcmVtLnBhcmFncmFwaCgpLFxyXG5cdEltYWdlczogW3tcclxuXHRcdHNyYzogZmFrZXIuaW1hZ2UuaW1hZ2UoKSxcclxuXHR9XSxcclxuXHRDb21tZW50czogW3tcclxuXHRcdFVzZXI6IHtcclxuXHRcdFx0aWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuXHRcdFx0bmlja25hbWU6IGZha2VyLm5hbWUuZmluZE5hbWUoKSxcclxuXHRcdH0sXHJcblx0XHRjb250ZW50OiBmYWtlci5sb3JlbS5zZW50ZW5jZSgpLFxyXG5cdH1dLFxyXG59KSlcclxuXHJcbi8vIGNvbmNhdCDsnYQg7ZWg65WQIO2VreyDgSDslZ7sl5Ag64yA7J6F7J2EIO2VtOykmOyVvO2VnOuLpCDqt7jrnpjslbwg7ZWp7LOQ7KeQXHJcbmluaXRpYWxTdGF0ZS5tYWluUG9zdHMgPSBpbml0aWFsU3RhdGUubWFpblBvc3RzLmNvbmNhdChcclxuXHRcdGdlbmVyYXRlRHVtbXlQb3N0KDEwKVxyXG4pO1xyXG5cclxuLy/qsozsi5zquIAg7J6R7ISx7ZWY64qUIOyVoeyFmFxyXG5leHBvcnQgY29uc3QgIExPQURfUE9TVFNfUkVRVUVTVCA9ICcgTE9BRF9QT1NUU19SRVFVRVNUJzsgLy8g7ZmU66m07J2EIOuhnOuUqe2VmOuptCDrsJTroZwgTE9BRF9QT1NUU19SRVFVRVNUIOulvCDtmLjstpztlbTspITqsoNcclxuZXhwb3J0IGNvbnN0ICBMT0FEX1BPU1RTX1NVQ0NFU1MgPSAnIExPQURfUE9TVFNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCAgTE9BRF9QT1NUU19GQUlMVVJFID0gJyBMT0FEX1BPU1RTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1JFUVVFU1QgPSAnQUREX1BPU1RfUkVRVUVTVCc7IC8vIOuzgOyImOuhnCDrlLDroZwg66eM65Ok7Ja07KSY7JW8IOykkeqwhOyXkCDsmKTtg4DqsIDrgpjripQg7J287J2EIOunieydhCDsiJgg7J6I64ukXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9TVUNDRVNTID0gJ0FERF9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfRkFJTFVSRSA9ICdBRERfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9SRVFVRVNUID0gJ1JFTU9WRV9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfU1VDQ0VTUyA9ICdSRU1PVkVfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX0ZBSUxVUkUgPSAnUkVNT1ZFX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfUkVRVUVTVCA9ICdBRERfQ09NTUVOVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1NVQ0NFU1MgPSAnQUREX0NPTU1FTlRfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9GQUlMVVJFID0gJ0FERF9DT01NRU5UX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFBvc3QgPSAoZGF0YSkgPT4gKHtcclxuXHR0eXBlOiBBRERfUE9TVF9SRVFVRVNULFxyXG5cdGRhdGEsXHJcbn0pXHJcblxyXG4vLyBkeW5hbWljIGFjdGlvbiBjcmVhdGVcclxuZXhwb3J0IGNvbnN0IGFkZENvbW1lbnQgPSAoZGF0YSkgPT4gKHtcclxuXHR0eXBlOiBBRERfQ09NTUVOVF9SRVFVRVNULFxyXG5cdGRhdGEsXHJcbn0pXHJcblxyXG5jb25zdCBkdW1teVBvc3QgPSAoZGF0YSkgPT4gKHtcclxuXHRpZDogZGF0YS5pZCxcclxuXHRjb250ZW50OiBkYXRhLmNvbnRlbnQsXHJcblx0VXNlcjoge1xyXG5cdFx0aWQ6IDEsXHJcblx0XHRuaWNrbmFtZTogJ+u5hO2DgOuvvCcsXHJcblx0fSxcclxuXHRJbWFnZXM6IFtdLFxyXG5cdENvbW1lbnRzOiBbXSxcclxufSlcclxuXHJcbmNvbnN0IGR1bW15Q29tbWVudCA9IChkYXRhKSA9PiAoe1xyXG5cdGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcblx0Y29udGVudDogZGF0YSxcclxuXHRVc2VyOiB7XHJcblx0XHRpZDogMSxcclxuXHRcdG5pY2tuYW1lOiAn67mE7YOA66+8JyxcclxuXHR9XHJcbn0pXHJcbi8vIOydtOyghCDsg4Htg5zrpbwg7JWh7IWY7J2EIO2Gte2VtCDri6TsnYwg7IOB7YOc66GcIOunjOuTpOyWtOuCtOuKlCDtlajsiJhcclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcclxuXHQvLyBpbW1lciDsgqzsmqnsi5wgc3RhdGUg66W8IGRyYWZ0IOuhnCDqtZDssrTtlbTso7zrqbAsIHN3aXRjaCDrrLjsnbjqsbgg7J247Iud7ZWY6rOgIGJyZWFrIOulvCDquYzrqLnsp4Drp5DsnpBcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIExPQURfUE9TVFNfUkVRVUVTVDpcclxuXHRcdFx0ZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IHRydWU7XHJcblx0XHRcdGRyYWZ0LmxvYWRQb3N0c0RvbmUgPSBmYWxzZTtcclxuXHRcdFx0ZHJhZnQubG9hZFBvc3RzRXJyb3IgPSBudWxsO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgTE9BRF9QT1NUU19TVUNDRVNTOlxyXG5cdFx0XHQvLyBhY3Rpb24uZGF0YSDsl5AgZHVtbXkgZGF0YSDqsIAg65Ok7Ja07J6I7J2E6rKD7J2066mwLCDquLDsobTrjbDsnbTthLDsmYAg7ZWp7LOQ7KO864qU6rKDXHJcblx0XHRcdGRyYWZ0Lm1haW5Qb3N0cyA9IGFjdGlvbi5kYXRhLmNvbmNhdChkcmFmdC5tYWluUG9zdHMpXHJcblx0XHRcdGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC5sb2FkUG9zdHNEb25lID0gdHJ1ZVxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgTE9BRF9QT1NUU19GQUlMVVJFOlxyXG5cdFx0XHRkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQubG9hZFBvc3RzRXJyb3IgPSBhY3Rpb24uZGF0YVxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgQUREX1BPU1RfUkVRVUVTVDpcclxuXHRcdFx0ZHJhZnQuYWRkUG9zdExvYWRpbmcgPSB0cnVlO1xyXG5cdFx0XHRkcmFmdC5hZGRQb3N0RG9uZSA9IGZhbHNlO1xyXG5cdFx0XHRkcmFmdC5hZGRQb3N0RXJyb3IgPSBudWxsO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgQUREX1BPU1RfU1VDQ0VTUzpcclxuXHRcdFx0ZHJhZnQubWFpblBvc3RzLnVuc2hpZnQoZHVtbXlQb3N0KGFjdGlvbi5kYXRhKSlcclxuXHRcdFx0ZHJhZnQuYWRkUG9zdExvYWRpbmcgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC5hZGRQb3N0RG9uZSA9IHRydWVcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIEFERF9QT1NUX0ZBSUxVUkU6XHJcblx0XHRcdGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQuYWRkUG9zdEVycm9yID0gYWN0aW9uLmRhdGFcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFJFTU9WRV9QT1NUX1JFUVVFU1Q6XHJcblx0XHRcdGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gdHJ1ZVxyXG5cdFx0XHRkcmFmdC5yZW1vdmVQb3N0RG9uZSA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LnJlbW92ZVBvc3RFcnJvciA9IG51bGxcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFJFTU9WRV9QT1NUX1NVQ0NFU1M6XHJcblx0XHRcdGRyYWZ0Lm1haW5Qb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhKSAvLyDsp4DsmrjrlZAg67O07Ya1IGZpbHRlciDqsIAg7Y647ZWY64ukXHJcblx0XHRcdGRyYWZ0LlBvc3RMb2FkaW5nID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQuUG9zdERvbmUgPSB0cnVlXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBSRU1PVkVfUE9TVF9GQUlMVVJFOlxyXG5cdFx0XHRkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LnJlbW92ZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvclxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgQUREX0NPTU1FTlRfUkVRVUVTVDpcclxuXHRcdFx0ZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSB0cnVlXHJcblx0XHRcdGRyYWZ0LmFkZENvbW1lbnREb25lID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQuYWRkQ29tbWVudEVycm9yID0gbnVsbFxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgQUREX0NPTU1FTlRfU1VDQ0VTUzoge1xyXG5cdFx0XHQvL2FjdGlvbi5kYXRhLmNvbnRlbnQsIHBvc3RJZCwgdXNlcklkXHJcblx0XHRcdGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEucG9zdElkKSAvLyDqsozsi5zquIAg66as7Iqk7Yq47KSR7JeQIHBvc3Qg7LC+6riwXHJcblx0XHRcdHBvc3QuQ29tbWVudHMudW5zaGlmdChkdW1teUNvbW1lbnQoYWN0aW9uLmRhdGEuY29udGVudCkpIC8vIOywvuydgCBwb3N0IOyXkCDrp6gg7JWe7JeQIOqwgOynnCDrjJPquIAg7ZWY64KYIOuEo+yWtOykjFxyXG5cdFx0XHRkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LmFkZENvbW1lbnREb25lID0gdHJ1ZVxyXG5cdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHRcdGNhc2UgQUREX0NPTU1FTlRfRkFJTFVSRTpcclxuXHRcdFx0ZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC5hZGRDb21tZW50RXJyb3IgPSBhY3Rpb24uZXJyb3JcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRicmVhaztcclxuXHR9XHJcbn0pXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXJcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==