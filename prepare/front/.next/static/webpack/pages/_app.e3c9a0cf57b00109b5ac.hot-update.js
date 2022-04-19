webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, generateDummyPost, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, addPost, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateDummyPost", function() { return generateDummyPost; });
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
};
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpbWFnZVBhdGhzIiwiYWRkUG9zdExvYWRpbmciLCJhZGRQb3N0RG9uZSIsImFkZFBvc3RFcnJvciIsInJlbW92ZVBvc3RMb2FkaW5nIiwicmVtb3ZlUG9zdERvbmUiLCJyZW1vdmVQb3N0RXJyb3IiLCJhZGRDb21tZW50TG9hZGluZyIsImFkZENvbW1lbnREb25lIiwiYWRkQ29tbWVudEVycm9yIiwiZ2VuZXJhdGVEdW1teVBvc3QiLCJudW1iZXIiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJpZCIsInNob3J0SWQiLCJnZW5lcmF0ZSIsIlVzZXIiLCJuaWNrbmFtZSIsImZha2VyIiwibmFtZSIsImZpbmROYW1lIiwiY29udGVudCIsImxvcmVtIiwicGFyYWdyYXBoIiwiSW1hZ2VzIiwic3JjIiwiaW1hZ2UiLCJDb21tZW50cyIsInNlbnRlbmNlIiwiY29uY2F0IiwiQUREX1BPU1RfUkVRVUVTVCIsIkFERF9QT1NUX1NVQ0NFU1MiLCJBRERfUE9TVF9GQUlMVVJFIiwiUkVNT1ZFX1BPU1RfUkVRVUVTVCIsIlJFTU9WRV9QT1NUX1NVQ0NFU1MiLCJSRU1PVkVfUE9TVF9GQUlMVVJFIiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsIkFERF9DT01NRU5UX1NVQ0NFU1MiLCJBRERfQ09NTUVOVF9GQUlMVVJFIiwiYWRkUG9zdCIsImRhdGEiLCJ0eXBlIiwiYWRkQ29tbWVudCIsImR1bW15UG9zdCIsImR1bW15Q29tbWVudCIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInByb2R1Y2UiLCJkcmFmdCIsInVuc2hpZnQiLCJmaWx0ZXIiLCJ2IiwiUG9zdExvYWRpbmciLCJQb3N0RG9uZSIsImVycm9yIiwicG9zdCIsImZpbmQiLCJwb3N0SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7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QVAsQ0FBWW5CLE9BQWIsQ0FBbEMsRUFIeUIsQ0FHZ0M7O0FBQ3pENEIsZUFBSyxDQUFDNUMsaUJBQU4sR0FBMEIsS0FBMUI7QUFDQTRDLGVBQUssQ0FBQzNDLGNBQU4sR0FBdUIsSUFBdkI7QUFDQTtBQUNBOztBQUNELFdBQUtnQyxtQkFBTDtBQUNDVyxhQUFLLENBQUM1QyxpQkFBTixHQUEwQixLQUExQjtBQUNBNEMsYUFBSyxDQUFDMUMsZUFBTixHQUF3QndDLE1BQU0sQ0FBQ1EsS0FBL0I7QUFDQTs7QUFDRDtBQUNDO0FBL0NGO0FBaURBLEdBbkR3RCxDQUF6QztBQUFBLENBQWhCOztBQW9EZVYsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5lM2M5YTBjZjU3YjAwMTA5YjVhYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNob3J0SWQgZnJvbSAnc2hvcnRpZCdcclxuaW1wb3J0IHByb2R1Y2UgZnJvbSAnaW1tZXInXHJcbmltcG9ydCBmYWtlciBmcm9tICdmYWtlcidcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcblx0bWFpblBvc3RzOiBbXHRdLFxyXG5cdGltYWdlUGF0aHM6IFtdLCAvLyDsnbTrr7jsp4Ag6rK966Gc65Ok7J20IOyggOyepeuQqFxyXG5cdGFkZFBvc3RMb2FkaW5nOiBmYWxzZSwgLy8g6rKM7Iuc66y8IOuTseuhneykkSDroZzrlKlcclxuXHRhZGRQb3N0RG9uZTogZmFsc2UsIC8vIOqyjOyLnOusvCDstpTqsIDqsIAg7JmE66OM65CY7JeI7J2E65WMIHRydWUg67OA7ZmYXHJcblx0YWRkUG9zdEVycm9yOiBudWxsLFxyXG5cdHJlbW92ZVBvc3RMb2FkaW5nOiBmYWxzZSwgLy8g6rKM7Iuc66y8IOyCreygnOykkSDroZzrlKlcclxuXHRyZW1vdmVQb3N0RG9uZTogZmFsc2UsIC8vIOqyjOyLnOusvCDsgq3soJzqsIAg7JmE66OM65CY7JeI7J2E65WMIHRydWUg67OA7ZmYXHJcblx0cmVtb3ZlUG9zdEVycm9yOiBudWxsLFxyXG5cdGFkZENvbW1lbnRMb2FkaW5nOiBmYWxzZSwgLy8g64yT6riAIOuTseuhneykkSDroZzrlKlcclxuXHRhZGRDb21tZW50RG9uZTogZmFsc2UsIC8vIOqyjOyLnOusvCDstpTqsIDqsIAg7JmE66OM65CY7JeI7J2E65WMIHRydWUg67OA7ZmYXHJcblx0YWRkQ29tbWVudEVycm9yOiBudWxsLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVEdW1teVBvc3QgPSAobnVtYmVyKSA9PiBBcnJheSgyMCkuZmlsbCgpLm1hcCgoKSA9PiAoe1xyXG5cdGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcblx0VXNlcjoge1xyXG5cdFx0aWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuXHRcdG5pY2tuYW1lOiBmYWtlci5uYW1lLmZpbmROYW1lKCksXHJcblx0fSxcclxuXHRjb250ZW50OiBmYWtlci5sb3JlbS5wYXJhZ3JhcGgoKSxcclxuXHRJbWFnZXM6IFt7XHJcblx0XHRzcmM6IGZha2VyLmltYWdlLmltYWdlKCksXHJcblx0fV0sXHJcblx0Q29tbWVudHM6IFt7XHJcblx0XHRVc2VyOiB7XHJcblx0XHRcdGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcblx0XHRcdG5pY2tuYW1lOiBmYWtlci5uYW1lLmZpbmROYW1lKCksXHJcblx0XHR9LFxyXG5cdFx0Y29udGVudDogZmFrZXIubG9yZW0uc2VudGVuY2UoKSxcclxuXHR9XSxcclxufSkpXHJcblxyXG4vLyBjb25jYXQg7J2EIO2VoOuVkCDtla3sg4Eg7JWe7JeQIOuMgOyeheydhCDtlbTspJjslbztlZzri6Qg6re4656Y7JW8IO2VqeyzkOynkFxyXG5pbml0aWFsU3RhdGUubWFpblBvc3RzID0gaW5pdGlhbFN0YXRlLm1haW5Qb3N0cy5jb25jYXQoXHJcblx0XHRnZW5lcmF0ZUR1bW15UG9zdCgxMClcclxuKTtcclxuXHJcbi8v6rKM7Iuc6riAIOyekeyEse2VmOuKlCDslaHshZhcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1JFUVVFU1QgPSAnQUREX1BPU1RfUkVRVUVTVCc7IC8vIOuzgOyImOuhnCDrlLDroZwg66eM65Ok7Ja07KSY7JW8IOykkeqwhOyXkCDsmKTtg4DqsIDrgpjripQg7J287J2EIOunieydhCDsiJgg7J6I64ukXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9TVUNDRVNTID0gJ0FERF9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfRkFJTFVSRSA9ICdBRERfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9SRVFVRVNUID0gJ1JFTU9WRV9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfU1VDQ0VTUyA9ICdSRU1PVkVfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX0ZBSUxVUkUgPSAnUkVNT1ZFX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfUkVRVUVTVCA9ICdBRERfQ09NTUVOVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1NVQ0NFU1MgPSAnQUREX0NPTU1FTlRfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9GQUlMVVJFID0gJ0FERF9DT01NRU5UX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFBvc3QgPSAoZGF0YSkgPT4gKHtcclxuXHR0eXBlOiBBRERfUE9TVF9SRVFVRVNULFxyXG5cdGRhdGEsXHJcbn0pXHJcblxyXG4vLyBkeW5hbWljIGFjdGlvbiBjcmVhdGVcclxuZXhwb3J0IGNvbnN0IGFkZENvbW1lbnQgPSAoZGF0YSkgPT4gKHtcclxuXHR0eXBlOiBBRERfQ09NTUVOVF9SRVFVRVNULFxyXG5cdGRhdGEsXHJcbn0pXHJcblxyXG5jb25zdCBkdW1teVBvc3QgPSAoZGF0YSkgPT4gKHtcclxuXHRpZDogZGF0YS5pZCxcclxuXHRjb250ZW50OiBkYXRhLmNvbnRlbnQsXHJcblx0VXNlcjoge1xyXG5cdFx0aWQ6IDEsXHJcblx0XHRuaWNrbmFtZTogJ+u5hO2DgOuvvCcsXHJcblx0fSxcclxuXHRJbWFnZXM6IFtdLFxyXG5cdENvbW1lbnRzOiBbXSxcclxufSlcclxuXHJcbmNvbnN0IGR1bW15Q29tbWVudCA9IChkYXRhKSA9PiAoe1xyXG5cdGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcblx0Y29udGVudDogZGF0YSxcclxuXHRVc2VyOiB7XHJcblx0XHRpZDogMSxcclxuXHRcdG5pY2tuYW1lOiAn67mE7YOA66+8JyxcclxuXHR9XHJcbn0pXHJcbi8vIOydtOyghCDsg4Htg5zrpbwg7JWh7IWY7J2EIO2Gte2VtCDri6TsnYwg7IOB7YOc66GcIOunjOuTpOyWtOuCtOuKlCDtlajsiJhcclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcclxuXHQvLyBpbW1lciDsgqzsmqnsi5wgc3RhdGUg66W8IGRyYWZ0IOuhnCDqtZDssrTtlbTso7zrqbAsIHN3aXRjaCDrrLjsnbjqsbgg7J247Iud7ZWY6rOgIGJyZWFrIOulvCDquYzrqLnsp4Drp5DsnpBcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIEFERF9QT1NUX1JFUVVFU1Q6XHJcblx0XHRcdGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuXHRcdFx0ZHJhZnQuYWRkUG9zdERvbmUgPSBmYWxzZTtcclxuXHRcdFx0ZHJhZnQuYWRkUG9zdEVycm9yID0gbnVsbDtcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIEFERF9QT1NUX1NVQ0NFU1M6XHJcblx0XHRcdGRyYWZ0Lm1haW5Qb3N0cy51bnNoaWZ0KGR1bW15UG9zdChhY3Rpb24uZGF0YSkpXHJcblx0XHRcdGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQuYWRkUG9zdERvbmUgPSB0cnVlXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBBRERfUE9TVF9GQUlMVVJFOlxyXG5cdFx0XHRkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LmFkZFBvc3RFcnJvciA9IGFjdGlvbi5kYXRhXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBSRU1PVkVfUE9TVF9SRVFVRVNUOlxyXG5cdFx0XHRkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IHRydWVcclxuXHRcdFx0ZHJhZnQucmVtb3ZlUG9zdERvbmUgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC5yZW1vdmVQb3N0RXJyb3IgPSBudWxsXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBSRU1PVkVfUE9TVF9TVUNDRVNTOlxyXG5cdFx0XHRkcmFmdC5tYWluUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YSkgLy8g7KeA7Jq465WQIOuztO2GtSBmaWx0ZXIg6rCAIO2OuO2VmOuLpFxyXG5cdFx0XHRkcmFmdC5Qb3N0TG9hZGluZyA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LlBvc3REb25lID0gdHJ1ZVxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgUkVNT1ZFX1BPU1RfRkFJTFVSRTpcclxuXHRcdFx0ZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC5yZW1vdmVQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3JcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIEFERF9DT01NRU5UX1JFUVVFU1Q6XHJcblx0XHRcdGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gdHJ1ZVxyXG5cdFx0XHRkcmFmdC5hZGRDb21tZW50RG9uZSA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LmFkZENvbW1lbnRFcnJvciA9IG51bGxcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIEFERF9DT01NRU5UX1NVQ0NFU1M6IHtcclxuXHRcdFx0Ly9hY3Rpb24uZGF0YS5jb250ZW50LCBwb3N0SWQsIHVzZXJJZFxyXG5cdFx0XHRjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLnBvc3RJZCkgLy8g6rKM7Iuc6riAIOumrOyKpO2KuOykkeyXkCBwb3N0IOywvuq4sFxyXG5cdFx0XHRwb3N0LkNvbW1lbnRzLnVuc2hpZnQoZHVtbXlDb21tZW50KGFjdGlvbi5kYXRhLmNvbnRlbnQpKSAvLyDssL7snYAgcG9zdCDsl5Ag66eoIOyVnuyXkCDqsIDsp5wg64yT6riAIO2VmOuCmCDrhKPslrTspIxcclxuXHRcdFx0ZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC5hZGRDb21tZW50RG9uZSA9IHRydWVcclxuXHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblx0XHRjYXNlIEFERF9DT01NRU5UX0ZBSUxVUkU6XHJcblx0XHRcdGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQuYWRkQ29tbWVudEVycm9yID0gYWN0aW9uLmVycm9yXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0YnJlYWs7XHJcblx0fVxyXG59KVxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=