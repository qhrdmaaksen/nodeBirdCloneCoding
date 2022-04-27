webpackHotUpdate_N_E("pages/index",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, LIKE_POST_REQUEST, LIKE_POST_SUCCESS, LIKE_POST_FAILURE, UNLIKE_POST_REQUEST, UNLIKE_POST_SUCCESS, UNLIKE_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, addPost, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_REQUEST", function() { return LOAD_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_SUCCESS", function() { return LOAD_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_FAILURE", function() { return LOAD_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_REQUEST", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_SUCCESS", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_FAILURE", function() { return ADD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_REQUEST", function() { return LIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_SUCCESS", function() { return LIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_FAILURE", function() { return LIKE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_REQUEST", function() { return UNLIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_SUCCESS", function() { return UNLIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_FAILURE", function() { return UNLIKE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_REQUEST", function() { return REMOVE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_SUCCESS", function() { return REMOVE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_FAILURE", function() { return REMOVE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_REQUEST", function() { return ADD_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_SUCCESS", function() { return ADD_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_FAILURE", function() { return ADD_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPost", function() { return addPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addComment", function() { return addComment; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");
//import shortId from 'shortid' front
 //import faker from 'faker' front

var initialState = {
  mainPosts: [],
  imagePaths: [],
  // 이미지 경로들이 저장됨
  hasMorePosts: true,
  // 더 많은 게시물 가져오기
  likePostLoading: false,
  // 라이크 로드중 로딩
  likePostDone: false,
  // 라이크 완료했을때 true 변환
  likePostError: null,
  unlikePostLoading: false,
  unlikePostDone: false,
  unlikePostError: null,
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

var LOAD_POSTS_REQUEST = ' LOAD_POSTS_REQUEST'; // 화면을 로딩하면 바로 LOAD_POSTS_REQUEST 를 호출해줄것

var LOAD_POSTS_SUCCESS = ' LOAD_POSTS_SUCCESS';
var LOAD_POSTS_FAILURE = ' LOAD_POSTS_FAILURE';
var ADD_POST_REQUEST = 'ADD_POST_REQUEST'; // 변수로 따로 만들어줘야 중간에 오타가나는 일을 막을 수 있다

var ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
var ADD_POST_FAILURE = 'ADD_POST_FAILURE';
var LIKE_POST_REQUEST = 'LIKE_POST_REQUEST';
var LIKE_POST_SUCCESS = 'LIKE_POST_SUCCESS';
var LIKE_POST_FAILURE = 'LIKE_POST_FAILURE';
var UNLIKE_POST_REQUEST = 'UNLIKE_POST_REQUEST';
var UNLIKE_POST_SUCCESS = 'UNLIKE_POST_SUCCESS';
var UNLIKE_POST_FAILURE = 'UNLIKE_POST_FAILURE';
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
  return Object(immer__WEBPACK_IMPORTED_MODULE_0__["default"])(state, function (draft) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpbWFnZVBhdGhzIiwiaGFzTW9yZVBvc3RzIiwibGlrZVBvc3RMb2FkaW5nIiwibGlrZVBvc3REb25lIiwibGlrZVBvc3RFcnJvciIsInVubGlrZVBvc3RMb2FkaW5nIiwidW5saWtlUG9zdERvbmUiLCJ1bmxpa2VQb3N0RXJyb3IiLCJsb2FkUG9zdHNMb2FkaW5nIiwibG9hZFBvc3RzRG9uZSIsImxvYWRQb3N0c0Vycm9yIiwiYWRkUG9zdExvYWRpbmciLCJhZGRQb3N0RG9uZSIsImFkZFBvc3RFcnJvciIsInJlbW92ZVBvc3RMb2FkaW5nIiwicmVtb3ZlUG9zdERvbmUiLCJyZW1vdmVQb3N0RXJyb3IiLCJhZGRDb21tZW50TG9hZGluZyIsImFkZENvbW1lbnREb25lIiwiYWRkQ29tbWVudEVycm9yIiwiTE9BRF9QT1NUU19SRVFVRVNUIiwiTE9BRF9QT1NUU19TVUNDRVNTIiwiTE9BRF9QT1NUU19GQUlMVVJFIiwiQUREX1BPU1RfUkVRVUVTVCIsIkFERF9QT1NUX1NVQ0NFU1MiLCJBRERfUE9TVF9GQUlMVVJFIiwiTElLRV9QT1NUX1JFUVVFU1QiLCJMSUtFX1BPU1RfU1VDQ0VTUyIsIkxJS0VfUE9TVF9GQUlMVVJFIiwiVU5MSUtFX1BPU1RfUkVRVUVTVCIsIlVOTElLRV9QT1NUX1NVQ0NFU1MiLCJVTkxJS0VfUE9TVF9GQUlMVVJFIiwiUkVNT1ZFX1BPU1RfUkVRVUVTVCIsIlJFTU9WRV9QT1NUX1NVQ0NFU1MiLCJSRU1PVkVfUE9TVF9GQUlMVVJFIiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsIkFERF9DT01NRU5UX1NVQ0NFU1MiLCJBRERfQ09NTUVOVF9GQUlMVVJFIiwiYWRkUG9zdCIsImRhdGEiLCJ0eXBlIiwiYWRkQ29tbWVudCIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInByb2R1Y2UiLCJkcmFmdCIsImNvbmNhdCIsImxlbmd0aCIsImVycm9yIiwidW5zaGlmdCIsImZpbHRlciIsInYiLCJpZCIsIlBvc3RMb2FkaW5nIiwiUG9zdERvbmUiLCJwb3N0IiwiZmluZCIsIlBvc3RJZCIsIkNvbW1lbnRzIiwiY29udGVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtDQUVBOztBQUVPLElBQU1BLFlBQVksR0FBRztBQUMzQkMsV0FBUyxFQUFFLEVBRGdCO0FBRTNCQyxZQUFVLEVBQUUsRUFGZTtBQUVYO0FBQ2hCQyxjQUFZLEVBQUUsSUFIYTtBQUdQO0FBQ3BCQyxpQkFBZSxFQUFFLEtBSlU7QUFJSDtBQUN4QkMsY0FBWSxFQUFFLEtBTGE7QUFLTjtBQUNyQkMsZUFBYSxFQUFFLElBTlk7QUFPM0JDLG1CQUFpQixFQUFFLEtBUFE7QUFRM0JDLGdCQUFjLEVBQUUsS0FSVztBQVMzQkMsaUJBQWUsRUFBRSxJQVRVO0FBVTNCQyxrQkFBZ0IsRUFBRSxLQVZTO0FBVUY7QUFDekJDLGVBQWEsRUFBRSxLQVhZO0FBV0w7QUFDdEJDLGdCQUFjLEVBQUUsSUFaVztBQWEzQkMsZ0JBQWMsRUFBRSxLQWJXO0FBYUo7QUFDdkJDLGFBQVcsRUFBRSxLQWRjO0FBY1A7QUFDcEJDLGNBQVksRUFBRSxJQWZhO0FBZ0IzQkMsbUJBQWlCLEVBQUUsS0FoQlE7QUFnQkQ7QUFDMUJDLGdCQUFjLEVBQUUsS0FqQlc7QUFpQko7QUFDdkJDLGlCQUFlLEVBQUUsSUFsQlU7QUFtQjNCQyxtQkFBaUIsRUFBRSxLQW5CUTtBQW1CRDtBQUMxQkMsZ0JBQWMsRUFBRSxLQXBCVztBQW9CSjtBQUN2QkMsaUJBQWUsRUFBRTtBQXJCVSxDQUFyQixDLENBdUJQOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QTs7QUFDRCxXQUFLaUIsbUJBQUw7QUFBMEI7QUFDekI7QUFDQTtBQUNBLGNBQU1vQixJQUFJLEdBQUdWLEtBQUssQ0FBQy9DLFNBQU4sQ0FBZ0IwRCxJQUFoQixDQUFxQixVQUFDTCxDQUFEO0FBQUEsbUJBQU9BLENBQUMsQ0FBQ0MsRUFBRixLQUFTVCxNQUFNLENBQUNMLElBQVAsQ0FBWW1CLE1BQTVCO0FBQUEsV0FBckIsQ0FBYixDQUh5QixDQUc2QztBQUN0RTs7QUFDQUYsY0FBSSxDQUFDRyxRQUFMLENBQWNULE9BQWQsQ0FBc0JOLE1BQU0sQ0FBQ0wsSUFBUCxDQUFZcUIsT0FBbEMsRUFMeUIsQ0FLa0I7O0FBQzNDZCxlQUFLLENBQUM3QixpQkFBTixHQUEwQixLQUExQjtBQUNBNkIsZUFBSyxDQUFDNUIsY0FBTixHQUF1QixJQUF2QjtBQUNBO0FBQ0E7O0FBQ0QsV0FBS21CLG1CQUFMO0FBQ0NTLGFBQUssQ0FBQzdCLGlCQUFOLEdBQTBCLEtBQTFCO0FBQ0E2QixhQUFLLENBQUMzQixlQUFOLEdBQXdCeUIsTUFBTSxDQUFDSyxLQUEvQjtBQUNBOztBQUNEO0FBQ0M7QUFwRUY7QUFzRUEsR0F4RXdELENBQXpDO0FBQUEsQ0FBaEI7O0FBeUVlUCxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iODA0NzE0ZGI5NDVjNGU5ZDc0Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbXBvcnQgc2hvcnRJZCBmcm9tICdzaG9ydGlkJyBmcm9udFxyXG5pbXBvcnQgcHJvZHVjZSBmcm9tICdpbW1lcidcclxuLy9pbXBvcnQgZmFrZXIgZnJvbSAnZmFrZXInIGZyb250XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG5cdG1haW5Qb3N0czogW10sXHJcblx0aW1hZ2VQYXRoczogW10sIC8vIOydtOuvuOyngCDqsr3roZzrk6TsnbQg7KCA7J6l65CoXHJcblx0aGFzTW9yZVBvc3RzOiB0cnVlLCAvLyDrjZQg66eO7J2AIOqyjOyLnOusvCDqsIDsoLjsmKTquLBcclxuXHRsaWtlUG9zdExvYWRpbmc6IGZhbHNlLCAvLyDrnbzsnbTtgawg66Gc65Oc7KSRIOuhnOuUqVxyXG5cdGxpa2VQb3N0RG9uZTogZmFsc2UsIC8vIOudvOydtO2BrCDsmYTro4ztlojsnYTrlYwgdHJ1ZSDrs4DtmZhcclxuXHRsaWtlUG9zdEVycm9yOiBudWxsLFxyXG5cdHVubGlrZVBvc3RMb2FkaW5nOiBmYWxzZSxcclxuXHR1bmxpa2VQb3N0RG9uZTogZmFsc2UsXHJcblx0dW5saWtlUG9zdEVycm9yOiBudWxsLFxyXG5cdGxvYWRQb3N0c0xvYWRpbmc6IGZhbHNlLCAvLyDtmZTrqbQg66Gc65Oc7KSRIOuhnOuUqVxyXG5cdGxvYWRQb3N0c0RvbmU6IGZhbHNlLCAvLyDtmZTrqbQg66Gc65OcIOyZhOujjOuQmOyXiOydhOuVjCB0cnVlIOuzgO2ZmFxyXG5cdGxvYWRQb3N0c0Vycm9yOiBudWxsLFxyXG5cdGFkZFBvc3RMb2FkaW5nOiBmYWxzZSwgLy8g6rKM7Iuc66y8IOuTseuhneykkSDroZzrlKlcclxuXHRhZGRQb3N0RG9uZTogZmFsc2UsIC8vIOqyjOyLnOusvCDstpTqsIDqsIAg7JmE66OM65CY7JeI7J2E65WMIHRydWUg67OA7ZmYXHJcblx0YWRkUG9zdEVycm9yOiBudWxsLFxyXG5cdHJlbW92ZVBvc3RMb2FkaW5nOiBmYWxzZSwgLy8g6rKM7Iuc66y8IOyCreygnOykkSDroZzrlKlcclxuXHRyZW1vdmVQb3N0RG9uZTogZmFsc2UsIC8vIOqyjOyLnOusvCDsgq3soJzqsIAg7JmE66OM65CY7JeI7J2E65WMIHRydWUg67OA7ZmYXHJcblx0cmVtb3ZlUG9zdEVycm9yOiBudWxsLFxyXG5cdGFkZENvbW1lbnRMb2FkaW5nOiBmYWxzZSwgLy8g64yT6riAIOuTseuhneykkSDroZzrlKlcclxuXHRhZGRDb21tZW50RG9uZTogZmFsc2UsIC8vIOqyjOyLnOusvCDstpTqsIDqsIAg7JmE66OM65CY7JeI7J2E65WMIHRydWUg67OA7ZmYXHJcblx0YWRkQ29tbWVudEVycm9yOiBudWxsLFxyXG59XHJcbi8vIOydtOu2gOu2hOydhCDsgqzsmqntlbTshJwg66y07ZWcIOyKpO2BrOuhpOungeydhCDrp4zrk6TqsoMgZnJvbnRcclxuLypleHBvcnQgY29uc3QgZ2VuZXJhdGVEdW1teVBvc3QgPSAobnVtYmVyKSA9PiBBcnJheShudW1iZXIpLmZpbGwoKS5tYXAoKCkgPT4gKHtcclxuXHRpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG5cdFVzZXI6IHtcclxuXHRcdGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcblx0XHRuaWNrbmFtZTogZmFrZXIubmFtZS5maW5kTmFtZSgpLFxyXG5cdH0sXHJcblx0Y29udGVudDogZmFrZXIubG9yZW0ucGFyYWdyYXBoKCksXHJcblx0SW1hZ2VzOiBbe1xyXG5cdFx0c3JjOiBmYWtlci5pbWFnZS5pbWFnZSgpLFxyXG5cdH1dLFxyXG5cdENvbW1lbnRzOiBbe1xyXG5cdFx0VXNlcjoge1xyXG5cdFx0XHRpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG5cdFx0XHRuaWNrbmFtZTogZmFrZXIubmFtZS5maW5kTmFtZSgpLFxyXG5cdFx0fSxcclxuXHRcdGNvbnRlbnQ6IGZha2VyLmxvcmVtLnNlbnRlbmNlKCksXHJcblx0fV0sXHJcbn0pKSovXHJcblxyXG4vL+qyjOyLnOq4gCDslaHshZhcclxuZXhwb3J0IGNvbnN0ICBMT0FEX1BPU1RTX1JFUVVFU1QgPSAnIExPQURfUE9TVFNfUkVRVUVTVCc7IC8vIO2ZlOuptOydhCDroZzrlKntlZjrqbQg67CU66GcIExPQURfUE9TVFNfUkVRVUVTVCDrpbwg7Zi47Lac7ZW07KSE6rKDXHJcbmV4cG9ydCBjb25zdCAgTE9BRF9QT1NUU19TVUNDRVNTID0gJyBMT0FEX1BPU1RTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgIExPQURfUE9TVFNfRkFJTFVSRSA9ICcgTE9BRF9QT1NUU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9SRVFVRVNUID0gJ0FERF9QT1NUX1JFUVVFU1QnOyAvLyDrs4DsiJjroZwg65Sw66GcIOunjOuTpOyWtOykmOyVvCDspJHqsITsl5Ag7Jik7YOA6rCA64KY64qUIOydvOydhCDrp4nsnYQg7IiYIOyeiOuLpFxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfU1VDQ0VTUyA9ICdBRERfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX0ZBSUxVUkUgPSAnQUREX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX1JFUVVFU1QgPSAnTElLRV9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX1NVQ0NFU1MgPSAnTElLRV9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX0ZBSUxVUkUgPSAnTElLRV9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVOTElLRV9QT1NUX1JFUVVFU1QgPSAnVU5MSUtFX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9TVUNDRVNTID0gJ1VOTElLRV9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgVU5MSUtFX1BPU1RfRkFJTFVSRSA9ICdVTkxJS0VfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9SRVFVRVNUID0gJ1JFTU9WRV9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfU1VDQ0VTUyA9ICdSRU1PVkVfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX0ZBSUxVUkUgPSAnUkVNT1ZFX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfUkVRVUVTVCA9ICdBRERfQ09NTUVOVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1NVQ0NFU1MgPSAnQUREX0NPTU1FTlRfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9GQUlMVVJFID0gJ0FERF9DT01NRU5UX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFBvc3QgPSAoZGF0YSkgPT4gKHtcclxuXHR0eXBlOiBBRERfUE9TVF9SRVFVRVNULFxyXG5cdGRhdGEsXHJcbn0pXHJcblxyXG4vLyBkeW5hbWljIGFjdGlvbiBjcmVhdGVcclxuZXhwb3J0IGNvbnN0IGFkZENvbW1lbnQgPSAoZGF0YSkgPT4gKHtcclxuXHR0eXBlOiBBRERfQ09NTUVOVF9SRVFVRVNULFxyXG5cdGRhdGEsXHJcbn0pXHJcblxyXG4vKiBmcm9udCBkdW1teVxyXG5jb25zdCBkdW1teVBvc3QgPSAoZGF0YSkgPT4gKHtcclxuXHRpZDogZGF0YS5pZCxcclxuXHRjb250ZW50OiBkYXRhLmNvbnRlbnQsXHJcblx0VXNlcjoge1xyXG5cdFx0aWQ6IDEsXHJcblx0XHRuaWNrbmFtZTogJ+u5hO2DgOuvvCcsXHJcblx0fSxcclxuXHRJbWFnZXM6IFtdLFxyXG5cdENvbW1lbnRzOiBbXSxcclxufSlcclxuKi9cclxuXHJcbi8qIGZyb250IGR1bW15XHJcbmNvbnN0IGR1bW15Q29tbWVudCA9IChkYXRhKSA9PiAoe1xyXG5cdGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcblx0Y29udGVudDogZGF0YSxcclxuXHRVc2VyOiB7XHJcblx0XHRpZDogMSxcclxuXHRcdG5pY2tuYW1lOiAn67mE7YOA66+8JyxcclxuXHR9XHJcbn0pKi9cclxuLy8g7J207KCEIOyDge2DnOulvCDslaHshZjsnYQg7Ya17ZW0IOuLpOydjCDsg4Htg5zroZwg66eM65Ok7Ja064K064qUIO2VqOyImFxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xyXG5cdC8vIGltbWVyIOyCrOyaqeyLnCBzdGF0ZSDrpbwgZHJhZnQg66GcIOq1kOyytO2VtOyjvOupsCwgc3dpdGNoIOusuOyduOqxuCDsnbjsi53tlZjqs6AgYnJlYWsg66W8IOq5jOuoueyngOunkOyekFxyXG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgTE9BRF9QT1NUU19SRVFVRVNUOlxyXG5cdFx0XHRkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gdHJ1ZTtcclxuXHRcdFx0ZHJhZnQubG9hZFBvc3RzRG9uZSA9IGZhbHNlO1xyXG5cdFx0XHRkcmFmdC5sb2FkUG9zdHNFcnJvciA9IG51bGw7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBMT0FEX1BPU1RTX1NVQ0NFU1M6XHJcblx0XHRcdGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC5sb2FkUG9zdHNEb25lID0gdHJ1ZVxyXG5cdFx0XHQvLyBhY3Rpb24uZGF0YSDsl5AgZHVtbXkgZGF0YSDqsIAg65Ok7Ja07J6I7J2E6rKD7J2066mwLCDquLDsobTrjbDsnbTthLDsmYAg7ZWp7LOQ7KO864qU6rKDXHJcblx0XHRcdC8vIGNvbmNhdCDsnYQg7ZWg65WQIO2VreyDgSDslZ7sl5Ag64yA7J6F7J2EIO2VtOykmOyVvO2VnOuLpCDqt7jrnpjslbwg7ZWp7LOQ7KeQXHJcblx0XHRcdGRyYWZ0Lm1haW5Qb3N0cyA9IGFjdGlvbi5kYXRhLmNvbmNhdChkcmFmdC5tYWluUG9zdHMpXHJcblx0XHRcdC8vIOqyjOyLnOusvOydhCA1MCDqsJzquYzsp4Drp4wg6rCA7KC47Jik6rKg64ukXHJcblx0XHRcdGRyYWZ0Lmhhc01vcmVQb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5sZW5ndGggPCA1MFxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgTE9BRF9QT1NUU19GQUlMVVJFOlxyXG5cdFx0XHRkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQubG9hZFBvc3RzRXJyb3IgPSBhY3Rpb24uZXJyb3JcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIEFERF9QT1NUX1JFUVVFU1Q6XHJcblx0XHRcdGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuXHRcdFx0ZHJhZnQuYWRkUG9zdERvbmUgPSBmYWxzZTtcclxuXHRcdFx0ZHJhZnQuYWRkUG9zdEVycm9yID0gbnVsbDtcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIEFERF9QT1NUX1NVQ0NFU1M6XHJcblx0XHRcdC8vIGRyYWZ0Lm1haW5Qb3N0cy51bnNoaWZ0KGR1bW15UG9zdChhY3Rpb24uZGF0YSkpIC8vIGZyb250IGR1bW15XHJcblx0XHRcdGRyYWZ0Lm1haW5Qb3N0cy51bnNoaWZ0KGFjdGlvbi5kYXRhKSAvLyBiYWNrIOyLpOygnCDrjbDsnbTthLBcclxuXHRcdFx0ZHJhZnQuYWRkUG9zdExvYWRpbmcgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC5hZGRQb3N0RG9uZSA9IHRydWVcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIEFERF9QT1NUX0ZBSUxVUkU6XHJcblx0XHRcdGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQuYWRkUG9zdEVycm9yID0gYWN0aW9uLmVycm9yXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBSRU1PVkVfUE9TVF9SRVFVRVNUOlxyXG5cdFx0XHRkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IHRydWVcclxuXHRcdFx0ZHJhZnQucmVtb3ZlUG9zdERvbmUgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC5yZW1vdmVQb3N0RXJyb3IgPSBudWxsXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBSRU1PVkVfUE9TVF9TVUNDRVNTOlxyXG5cdFx0XHRkcmFmdC5tYWluUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YSkgLy8g7KeA7Jq465WQIOuztO2GtSBmaWx0ZXIg6rCAIO2OuO2VmOuLpFxyXG5cdFx0XHRkcmFmdC5Qb3N0TG9hZGluZyA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LlBvc3REb25lID0gdHJ1ZVxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgUkVNT1ZFX1BPU1RfRkFJTFVSRTpcclxuXHRcdFx0ZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC5yZW1vdmVQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3JcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIEFERF9DT01NRU5UX1JFUVVFU1Q6XHJcblx0XHRcdGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gdHJ1ZVxyXG5cdFx0XHRkcmFmdC5hZGRDb21tZW50RG9uZSA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LmFkZENvbW1lbnRFcnJvciA9IG51bGxcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIEFERF9DT01NRU5UX1NVQ0NFU1M6IHtcclxuXHRcdFx0Ly9hY3Rpb24uZGF0YS5jb250ZW50LCBwb3N0SWQsIHVzZXJJZFxyXG5cdFx0XHQvL2NvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEucG9zdElkKSAvLyDqsozsi5zquIAg66as7Iqk7Yq47KSR7JeQIHBvc3Qg7LC+6riwIGZyb250XHJcblx0XHRcdGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEuUG9zdElkKSAvLyDqsozsi5zquIAg66as7Iqk7Yq47KSR7JeQIHBvc3Qg7LC+6riwIGJha1xyXG5cdFx0XHQvL3Bvc3QuQ29tbWVudHMudW5zaGlmdChkdW1teUNvbW1lbnQoYWN0aW9uLmRhdGEuY29udGVudCkpIC8vIOywvuydgCBwb3N0IOyXkCDrp6gg7JWe7JeQIOqwgOynnCDrjJPquIAg7ZWY64KYIOuEo+yWtOykjCBGUk9OVFxyXG5cdFx0XHRwb3N0LkNvbW1lbnRzLnVuc2hpZnQoYWN0aW9uLmRhdGEuY29udGVudCkgLy8g7LC+7J2AIHBvc3Qg7JeQIOyLpOygnCDrjbDsnbTthLAgYmFja1xyXG5cdFx0XHRkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LmFkZENvbW1lbnREb25lID0gdHJ1ZVxyXG5cdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHRcdGNhc2UgQUREX0NPTU1FTlRfRkFJTFVSRTpcclxuXHRcdFx0ZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC5hZGRDb21tZW50RXJyb3IgPSBhY3Rpb24uZXJyb3JcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRicmVhaztcclxuXHR9XHJcbn0pXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXJcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==