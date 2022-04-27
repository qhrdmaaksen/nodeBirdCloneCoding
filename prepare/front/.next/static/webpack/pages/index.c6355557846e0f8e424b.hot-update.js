webpackHotUpdate_N_E("pages/index",{

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

var generateDummyPost = function generateDummyPost(number) {
  return Array(number).fill().map(function () {
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
}; //게시글 작성하는 액션

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
        draft.loadPostsLoading = false;
        draft.loadPostsDone = true; // action.data 에 dummy data 가 들어있을것이며, 기존데이터와 합쳐주는것
        // concat 을 할땐 항상 앞에 대입을 해줘야한다 그래야 합쳐짐
        //draft.mainPosts = draft.mainPosts.concat(action.data) front

        draft.mainPosts = action.data.concat(draft.mainPosts); // 게시물을 50 개까지만 가져오겠다

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
          //const post = draft.mainPosts.find((v) => v.id === action.data.postId) // 게시글 리스트중에 post 찾기 front
          var post = draft.mainPosts.find(function (v) {
            return v.id === action.data.PostId;
          }); // 게시글 리스트중에 post 찾기 bak
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpbWFnZVBhdGhzIiwiaGFzTW9yZVBvc3RzIiwibG9hZFBvc3RzTG9hZGluZyIsImxvYWRQb3N0c0RvbmUiLCJsb2FkUG9zdHNFcnJvciIsImFkZFBvc3RMb2FkaW5nIiwiYWRkUG9zdERvbmUiLCJhZGRQb3N0RXJyb3IiLCJyZW1vdmVQb3N0TG9hZGluZyIsInJlbW92ZVBvc3REb25lIiwicmVtb3ZlUG9zdEVycm9yIiwiYWRkQ29tbWVudExvYWRpbmciLCJhZGRDb21tZW50RG9uZSIsImFkZENvbW1lbnRFcnJvciIsImdlbmVyYXRlRHVtbXlQb3N0IiwibnVtYmVyIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiaWQiLCJzaG9ydElkIiwiZ2VuZXJhdGUiLCJVc2VyIiwibmlja25hbWUiLCJmYWtlciIsIm5hbWUiLCJmaW5kTmFtZSIsImNvbnRlbnQiLCJsb3JlbSIsInBhcmFncmFwaCIsIkltYWdlcyIsInNyYyIsImltYWdlIiwiQ29tbWVudHMiLCJzZW50ZW5jZSIsIkxPQURfUE9TVFNfUkVRVUVTVCIsIkxPQURfUE9TVFNfU1VDQ0VTUyIsIkxPQURfUE9TVFNfRkFJTFVSRSIsIkFERF9QT1NUX1JFUVVFU1QiLCJBRERfUE9TVF9TVUNDRVNTIiwiQUREX1BPU1RfRkFJTFVSRSIsIlJFTU9WRV9QT1NUX1JFUVVFU1QiLCJSRU1PVkVfUE9TVF9TVUNDRVNTIiwiUkVNT1ZFX1BPU1RfRkFJTFVSRSIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJBRERfQ09NTUVOVF9TVUNDRVNTIiwiQUREX0NPTU1FTlRfRkFJTFVSRSIsImFkZFBvc3QiLCJkYXRhIiwidHlwZSIsImFkZENvbW1lbnQiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJwcm9kdWNlIiwiZHJhZnQiLCJjb25jYXQiLCJsZW5ndGgiLCJlcnJvciIsInVuc2hpZnQiLCJm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QyxNQUFNLENBQUNLLEtBQS9CO0FBQ0E7O0FBQ0QsV0FBS2QsbUJBQUw7QUFDQ1csYUFBSyxDQUFDNUMsaUJBQU4sR0FBMEIsSUFBMUI7QUFDQTRDLGFBQUssQ0FBQzNDLGNBQU4sR0FBdUIsS0FBdkI7QUFDQTJDLGFBQUssQ0FBQzFDLGVBQU4sR0FBd0IsSUFBeEI7QUFDQTs7QUFDRCxXQUFLZ0MsbUJBQUw7QUFBMEI7QUFDekI7QUFDQTtBQUNBLGNBQU1tQixJQUFJLEdBQUdULEtBQUssQ0FBQ3hELFNBQU4sQ0FBZ0JrRSxJQUFoQixDQUFxQixVQUFDSixDQUFEO0FBQUEsbUJBQU9BLENBQUMsQ0FBQzFDLEVBQUYsS0FBU2tDLE1BQU0sQ0FBQ0wsSUFBUCxDQUFZa0IsTUFBNUI7QUFBQSxXQUFyQixDQUFiLENBSHlCLENBRzZDO0FBQ3RFOztBQUNBRixjQUFJLENBQUMvQixRQUFMLENBQWMwQixPQUFkLENBQXNCTixNQUFNLENBQUNMLElBQVAsQ0FBWXJCLE9BQWxDLEVBTHlCLENBS2tCOztBQUMzQzRCLGVBQUssQ0FBQzVDLGlCQUFOLEdBQTBCLEtBQTFCO0FBQ0E0QyxlQUFLLENBQUMzQyxjQUFOLEdBQXVCLElBQXZCO0FBQ0E7QUFDQTs7QUFDRCxXQUFLa0MsbUJBQUw7QUFDQ1MsYUFBSyxDQUFDNUMsaUJBQU4sR0FBMEIsS0FBMUI7QUFDQTRDLGFBQUssQ0FBQzFDLGVBQU4sR0FBd0J3QyxNQUFNLENBQUNLLEtBQS9CO0FBQ0E7O0FBQ0Q7QUFDQztBQXJFRjtBQXVFQSxHQXpFd0QsQ0FBekM7QUFBQSxDQUFoQjs7QUEwRWVQLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmM2MzU1NTU3ODQ2ZTBmOGU0MjRiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2hvcnRJZCBmcm9tICdzaG9ydGlkJ1xyXG5pbXBvcnQgcHJvZHVjZSBmcm9tICdpbW1lcidcclxuaW1wb3J0IGZha2VyIGZyb20gJ2Zha2VyJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuXHRtYWluUG9zdHM6IFtcdF0sXHJcblx0aW1hZ2VQYXRoczogW10sIC8vIOydtOuvuOyngCDqsr3roZzrk6TsnbQg7KCA7J6l65CoXHJcblx0aGFzTW9yZVBvc3RzOiB0cnVlLCAvLyDrjZQg66eO7J2AIOqyjOyLnOusvCDqsIDsoLjsmKTquLBcclxuXHRsb2FkUG9zdHNMb2FkaW5nOiBmYWxzZSwgLy8g7ZmU66m0IOuhnOuTnOykkSDroZzrlKlcclxuXHRsb2FkUG9zdHNEb25lOiBmYWxzZSwgLy8g7ZmU66m0IOuhnOuTnCDsmYTro4zrkJjsl4jsnYTrlYwgdHJ1ZSDrs4DtmZhcclxuXHRsb2FkUG9zdHNFcnJvcjogbnVsbCxcclxuXHRhZGRQb3N0TG9hZGluZzogZmFsc2UsIC8vIOqyjOyLnOusvCDrk7HroZ3spJEg66Gc65SpXHJcblx0YWRkUG9zdERvbmU6IGZhbHNlLCAvLyDqsozsi5zrrLwg7LaU6rCA6rCAIOyZhOujjOuQmOyXiOydhOuVjCB0cnVlIOuzgO2ZmFxyXG5cdGFkZFBvc3RFcnJvcjogbnVsbCxcclxuXHRyZW1vdmVQb3N0TG9hZGluZzogZmFsc2UsIC8vIOqyjOyLnOusvCDsgq3soJzspJEg66Gc65SpXHJcblx0cmVtb3ZlUG9zdERvbmU6IGZhbHNlLCAvLyDqsozsi5zrrLwg7IKt7KCc6rCAIOyZhOujjOuQmOyXiOydhOuVjCB0cnVlIOuzgO2ZmFxyXG5cdHJlbW92ZVBvc3RFcnJvcjogbnVsbCxcclxuXHRhZGRDb21tZW50TG9hZGluZzogZmFsc2UsIC8vIOuMk+q4gCDrk7HroZ3spJEg66Gc65SpXHJcblx0YWRkQ29tbWVudERvbmU6IGZhbHNlLCAvLyDqsozsi5zrrLwg7LaU6rCA6rCAIOyZhOujjOuQmOyXiOydhOuVjCB0cnVlIOuzgO2ZmFxyXG5cdGFkZENvbW1lbnRFcnJvcjogbnVsbCxcclxufVxyXG4vLyDsnbTrtoDrtoTsnYQg7IKs7Jqp7ZW07IScIOustO2VnCDsiqTtgazroaTrp4HsnYQg66eM65Ok6rKDXHJcbmV4cG9ydCBjb25zdCBnZW5lcmF0ZUR1bW15UG9zdCA9IChudW1iZXIpID0+IEFycmF5KG51bWJlcikuZmlsbCgpLm1hcCgoKSA9PiAoe1xyXG5cdGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcblx0VXNlcjoge1xyXG5cdFx0aWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuXHRcdG5pY2tuYW1lOiBmYWtlci5uYW1lLmZpbmROYW1lKCksXHJcblx0fSxcclxuXHRjb250ZW50OiBmYWtlci5sb3JlbS5wYXJhZ3JhcGgoKSxcclxuXHRJbWFnZXM6IFt7XHJcblx0XHRzcmM6IGZha2VyLmltYWdlLmltYWdlKCksXHJcblx0fV0sXHJcblx0Q29tbWVudHM6IFt7XHJcblx0XHRVc2VyOiB7XHJcblx0XHRcdGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcblx0XHRcdG5pY2tuYW1lOiBmYWtlci5uYW1lLmZpbmROYW1lKCksXHJcblx0XHR9LFxyXG5cdFx0Y29udGVudDogZmFrZXIubG9yZW0uc2VudGVuY2UoKSxcclxuXHR9XSxcclxufSkpXHJcblxyXG4vL+qyjOyLnOq4gCDsnpHshLHtlZjripQg7JWh7IWYXHJcbmV4cG9ydCBjb25zdCAgTE9BRF9QT1NUU19SRVFVRVNUID0gJyBMT0FEX1BPU1RTX1JFUVVFU1QnOyAvLyDtmZTrqbTsnYQg66Gc65Sp7ZWY66m0IOuwlOuhnCBMT0FEX1BPU1RTX1JFUVVFU1Qg66W8IO2YuOy2nO2VtOykhOqyg1xyXG5leHBvcnQgY29uc3QgIExPQURfUE9TVFNfU1VDQ0VTUyA9ICcgTE9BRF9QT1NUU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0ICBMT0FEX1BPU1RTX0ZBSUxVUkUgPSAnIExPQURfUE9TVFNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfUkVRVUVTVCA9ICdBRERfUE9TVF9SRVFVRVNUJzsgLy8g67OA7IiY66GcIOuUsOuhnCDrp4zrk6TslrTspJjslbwg7KSR6rCE7JeQIOyYpO2DgOqwgOuCmOuKlCDsnbzsnYQg66eJ7J2EIOyImCDsnojri6RcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1NVQ0NFU1MgPSAnQUREX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9GQUlMVVJFID0gJ0FERF9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1JFUVVFU1QgPSAnUkVNT1ZFX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9TVUNDRVNTID0gJ1JFTU9WRV9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfRkFJTFVSRSA9ICdSRU1PVkVfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9SRVFVRVNUID0gJ0FERF9DT01NRU5UX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfU1VDQ0VTUyA9ICdBRERfQ09NTUVOVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX0ZBSUxVUkUgPSAnQUREX0NPTU1FTlRfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkUG9zdCA9IChkYXRhKSA9PiAoe1xyXG5cdHR5cGU6IEFERF9QT1NUX1JFUVVFU1QsXHJcblx0ZGF0YSxcclxufSlcclxuXHJcbi8vIGR5bmFtaWMgYWN0aW9uIGNyZWF0ZVxyXG5leHBvcnQgY29uc3QgYWRkQ29tbWVudCA9IChkYXRhKSA9PiAoe1xyXG5cdHR5cGU6IEFERF9DT01NRU5UX1JFUVVFU1QsXHJcblx0ZGF0YSxcclxufSlcclxuXHJcbi8qIGZyb250IGR1bW15XHJcbmNvbnN0IGR1bW15UG9zdCA9IChkYXRhKSA9PiAoe1xyXG5cdGlkOiBkYXRhLmlkLFxyXG5cdGNvbnRlbnQ6IGRhdGEuY29udGVudCxcclxuXHRVc2VyOiB7XHJcblx0XHRpZDogMSxcclxuXHRcdG5pY2tuYW1lOiAn67mE7YOA66+8JyxcclxuXHR9LFxyXG5cdEltYWdlczogW10sXHJcblx0Q29tbWVudHM6IFtdLFxyXG59KVxyXG4qL1xyXG5cclxuLyogZnJvbnQgZHVtbXlcclxuY29uc3QgZHVtbXlDb21tZW50ID0gKGRhdGEpID0+ICh7XHJcblx0aWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuXHRjb250ZW50OiBkYXRhLFxyXG5cdFVzZXI6IHtcclxuXHRcdGlkOiAxLFxyXG5cdFx0bmlja25hbWU6ICfruYTtg4Drr7wnLFxyXG5cdH1cclxufSkqL1xyXG4vLyDsnbTsoIQg7IOB7YOc66W8IOyVoeyFmOydhCDthrXtlbQg64uk7J2MIOyDge2DnOuhnCDrp4zrk6TslrTrgrTripQg7ZWo7IiYXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcblx0Ly8gaW1tZXIg7IKs7Jqp7IucIHN0YXRlIOulvCBkcmFmdCDroZwg6rWQ7LK07ZW07KO866mwLCBzd2l0Y2gg66y47J246rG4IOyduOyLne2VmOqzoCBicmVhayDrpbwg6rmM66i57KeA66eQ7J6QXHJcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSBMT0FEX1BPU1RTX1JFUVVFU1Q6XHJcblx0XHRcdGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSB0cnVlO1xyXG5cdFx0XHRkcmFmdC5sb2FkUG9zdHNEb25lID0gZmFsc2U7XHJcblx0XHRcdGRyYWZ0LmxvYWRQb3N0c0Vycm9yID0gbnVsbDtcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIExPQURfUE9TVFNfU1VDQ0VTUzpcclxuXHRcdFx0ZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LmxvYWRQb3N0c0RvbmUgPSB0cnVlXHJcblx0XHRcdC8vIGFjdGlvbi5kYXRhIOyXkCBkdW1teSBkYXRhIOqwgCDrk6TslrTsnojsnYTqsoPsnbTrqbAsIOq4sOyhtOuNsOydtO2EsOyZgCDtlanss5Dso7zripTqsoNcclxuXHRcdFx0Ly8gY29uY2F0IOydhCDtlaDrlZAg7ZWt7IOBIOyVnuyXkCDrjIDsnoXsnYQg7ZW07KSY7JW87ZWc64ukIOq3uOuemOyVvCDtlanss5Dsp5BcclxuXHRcdFx0Ly9kcmFmdC5tYWluUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMuY29uY2F0KGFjdGlvbi5kYXRhKSBmcm9udFxyXG5cdFx0XHRkcmFmdC5tYWluUG9zdHMgPSBhY3Rpb24uZGF0YS5jb25jYXQoZHJhZnQubWFpblBvc3RzKVxyXG5cdFx0XHQvLyDqsozsi5zrrLzsnYQgNTAg6rCc6rmM7KeA66eMIOqwgOyguOyYpOqyoOuLpFxyXG5cdFx0XHRkcmFmdC5oYXNNb3JlUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMubGVuZ3RoIDwgNTBcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIExPQURfUE9TVFNfRkFJTFVSRTpcclxuXHRcdFx0ZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LmxvYWRQb3N0c0Vycm9yID0gYWN0aW9uLmVycm9yXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBBRERfUE9TVF9SRVFVRVNUOlxyXG5cdFx0XHRkcmFmdC5hZGRQb3N0TG9hZGluZyA9IHRydWU7XHJcblx0XHRcdGRyYWZ0LmFkZFBvc3REb25lID0gZmFsc2U7XHJcblx0XHRcdGRyYWZ0LmFkZFBvc3RFcnJvciA9IG51bGw7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBBRERfUE9TVF9TVUNDRVNTOlxyXG5cdFx0XHQvLyBkcmFmdC5tYWluUG9zdHMudW5zaGlmdChkdW1teVBvc3QoYWN0aW9uLmRhdGEpKSAvLyBmcm9udCBkdW1teVxyXG5cdFx0XHRkcmFmdC5tYWluUG9zdHMudW5zaGlmdChhY3Rpb24uZGF0YSkgLy8gYmFjayDsi6TsoJwg642w7J207YSwXHJcblx0XHRcdGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQuYWRkUG9zdERvbmUgPSB0cnVlXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBBRERfUE9TVF9GQUlMVVJFOlxyXG5cdFx0XHRkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LmFkZFBvc3RFcnJvciA9IGFjdGlvbi5lcnJvclxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgUkVNT1ZFX1BPU1RfUkVRVUVTVDpcclxuXHRcdFx0ZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSB0cnVlXHJcblx0XHRcdGRyYWZ0LnJlbW92ZVBvc3REb25lID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQucmVtb3ZlUG9zdEVycm9yID0gbnVsbFxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgUkVNT1ZFX1BPU1RfU1VDQ0VTUzpcclxuXHRcdFx0ZHJhZnQubWFpblBvc3RzID0gZHJhZnQubWFpblBvc3RzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEpIC8vIOyngOyauOuVkCDrs7TthrUgZmlsdGVyIOqwgCDtjrjtlZjri6RcclxuXHRcdFx0ZHJhZnQuUG9zdExvYWRpbmcgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC5Qb3N0RG9uZSA9IHRydWVcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFJFTU9WRV9QT1NUX0ZBSUxVUkU6XHJcblx0XHRcdGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQucmVtb3ZlUG9zdEVycm9yID0gYWN0aW9uLmVycm9yXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBBRERfQ09NTUVOVF9SRVFVRVNUOlxyXG5cdFx0XHRkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IHRydWVcclxuXHRcdFx0ZHJhZnQuYWRkQ29tbWVudERvbmUgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC5hZGRDb21tZW50RXJyb3IgPSBudWxsXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBBRERfQ09NTUVOVF9TVUNDRVNTOiB7XHJcblx0XHRcdC8vYWN0aW9uLmRhdGEuY29udGVudCwgcG9zdElkLCB1c2VySWRcclxuXHRcdFx0Ly9jb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLnBvc3RJZCkgLy8g6rKM7Iuc6riAIOumrOyKpO2KuOykkeyXkCBwb3N0IOywvuq4sCBmcm9udFxyXG5cdFx0XHRjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLlBvc3RJZCkgLy8g6rKM7Iuc6riAIOumrOyKpO2KuOykkeyXkCBwb3N0IOywvuq4sCBiYWtcclxuXHRcdFx0Ly9wb3N0LkNvbW1lbnRzLnVuc2hpZnQoZHVtbXlDb21tZW50KGFjdGlvbi5kYXRhLmNvbnRlbnQpKSAvLyDssL7snYAgcG9zdCDsl5Ag66eoIOyVnuyXkCDqsIDsp5wg64yT6riAIO2VmOuCmCDrhKPslrTspIwgRlJPTlRcclxuXHRcdFx0cG9zdC5Db21tZW50cy51bnNoaWZ0KGFjdGlvbi5kYXRhLmNvbnRlbnQpIC8vIOywvuydgCBwb3N0IOyXkCDsi6TsoJwg642w7J207YSwIGJhY2tcclxuXHRcdFx0ZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC5hZGRDb21tZW50RG9uZSA9IHRydWVcclxuXHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblx0XHRjYXNlIEFERF9DT01NRU5UX0ZBSUxVUkU6XHJcblx0XHRcdGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQuYWRkQ29tbWVudEVycm9yID0gYWN0aW9uLmVycm9yXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0YnJlYWs7XHJcblx0fVxyXG59KVxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=