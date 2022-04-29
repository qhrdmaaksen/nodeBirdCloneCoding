webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, LIKE_POST_REQUEST, LIKE_POST_SUCCESS, LIKE_POST_FAILURE, UPLOAD_IMAGES_REQUEST, UPLOAD_IMAGES_SUCCESS, UPLOAD_IMAGES_FAILURE, UNLIKE_POST_REQUEST, UNLIKE_POST_SUCCESS, UNLIKE_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, REMOVE_IMAGE, addPost, addComment, default */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_IMAGE", function() { return REMOVE_IMAGE; });
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
  // 언라이크 로드 중 로딩
  unlikePostDone: false,
  // 언라이크 완료했을때 true 변환
  unlikePostError: null,
  uploadImagesLoading: false,
  // 이미지 로드 중 로딩
  uploadImagesDone: false,
  // 이미지 로드 완료했을때 true 변환
  uploadImagesError: null,
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
var UPLOAD_IMAGES_REQUEST = 'UPLOAD_IMAGES_REQUEST';
var UPLOAD_IMAGES_SUCCESS = 'UPLOAD_IMAGES_SUCCESS';
var UPLOAD_IMAGES_FAILURE = 'UPLOAD_IMAGES_FAILURE';
var UNLIKE_POST_REQUEST = 'UNLIKE_POST_REQUEST';
var UNLIKE_POST_SUCCESS = 'UNLIKE_POST_SUCCESS';
var UNLIKE_POST_FAILURE = 'UNLIKE_POST_FAILURE';
var REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
var REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
var REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';
var ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
var ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
var ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';
var REMOVE_IMAGE = 'REMOVE_IMAGE';
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
      case LIKE_POST_REQUEST:
        draft.likePostLoading = true;
        draft.likePostDone = false;
        draft.likePostError = null;
        console.log('reducer LIKE_POST_REQUEST 요청::');
        break;

      case LIKE_POST_SUCCESS:
        {
          // mainPosts 에서 id 가 액션데이터포스트아이디를 찾아서
          var post = draft.mainPosts.find(function (v) {
            return v.id === action.data.PostId;
          }); // 게시글 좋아요 누른 사람들에게 사용자 아이디를 넣어준다

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
          var _post = draft.mainPosts.find(function (v) {
            return v.id === action.data.PostId;
          });

          _post.Likers = _post.Likers.filter(function (v) {
            return v.id !== action.data.UserId;
          });
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

      case UPLOAD_IMAGES_REQUEST:
        draft.uploadImagesLoading = true;
        draft.uploadImagesDone = false;
        draft.uploadImagesError = null;
        console.log('reducer UPLOAD_IMAGES_REQUEST 요청::');
        break;

      case UPLOAD_IMAGES_SUCCESS:
        draft.imagePaths = action.data;
        draft.uploadImagesLoading = false;
        draft.uploadImagesDone = true;
        console.log('reducer UPLOAD_IMAGES_SUCCESS 성공::');
        break;

      case UPLOAD_IMAGES_FAILURE:
        draft.uploadImagesLoading = false;
        draft.uploadImagesError = action.error;
        console.error('reducer UPLOAD_IMAGES_FAILURE 실패:::', action.error);
        break;

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
          return v.id !== action.data.PostId;
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
          var _post2 = draft.mainPosts.find(function (v) {
            return v.id === action.data.PostId;
          }); // 게시글 리스트중에 post 찾기 bak
          //post.Comments.unshift(dummyComment(action.data.content)) // 찾은 post 에 맨 앞에 가짜 댓글 하나 넣어줌 FRONT


          _post2.Comments.unshift(action.data.content); // 찾은 post 에 실제 데이터 back


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpbWFnZVBhdGhzIiwiaGFzTW9yZVBvc3RzIiwibGlrZVBvc3RMb2FkaW5nIiwibGlrZVBvc3REb25lIiwibGlrZVBvc3RFcnJvciIsInVubGlrZVBvc3RMb2FkaW5nIiwidW5saWtlUG9zdERvbmUiLCJ1bmxpa2VQb3N0RXJyb3IiLCJ1cGxvYWRJbWFnZXNMb2FkaW5nIiwidXBsb2FkSW1hZ2VzRG9uZSIsInVwbG9hZEltYWdlc0Vycm9yIiwibG9hZFBvc3RzTG9hZGluZyIsImxvYWRQb3N0c0RvbmUiLCJsb2FkUG9zdHNFcnJvciIsImFkZFBvc3RMb2FkaW5nIiwiYWRkUG9zdERvbmUiLCJhZGRQb3N0RXJyb3IiLCJyZW1vdmVQb3N0TG9hZGluZyIsInJlbW92ZVBvc3REb25lIiwicmVtb3ZlUG9zdEVycm9yIiwiYWRkQ29tbWVudExvYWRpbmciLCJhZGRDb21tZW50RG9uZSIsImFkZENvbW1lbnRFcnJvciIsIkxPQURfUE9TVFNfUkVRVUVTVCIsIkxPQURfUE9TVFNfU1VDQ0VTUyIsIkxPQURfUE9TVFNfRkFJTFVSRSIsIkFERF9QT1NUX1JFUVVFU1QiLCJBRERfUE9TVF9TVUNDRVNTIiwiQUREX1BPU1RfRkFJTFVSRSIsIkxJS0VfUE9TVF9SRVFVRVNUIiwiTElLRV9QT1NUX1NVQ0NFU1MiLCJMSUtFX1BPU1RfRkFJTFVSRSIsIlVQTE9BRF9JTUFHRVNfUkVRVUVTVCIsIlVQTE9BRF9JTUFHRVNfU1VDQ0VTUyIsIlVQTE9BRF9JTUFHRVNfRkFJTFVSRSIsIlVOTElLRV9QT1NUX1JFUVVFU1QiLCJVTkxJS0VfUE9TVF9TVUNDRVNTIiwiVU5MSUtFX1BPU1RfRkFJTFVSRSIsIlJFTU9WRV9QT1NUX1JFUVVFU1QiLCJSRU1PVkVfUE9TVF9TVUNDRVNTIiwiUkVNT1ZFX1BPU1RfRkFJTFVSRSIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJBRERfQ09NTUVOVF9TVUNDRVNTIiwiQUREX0NPTU1FTlRfRkFJTFVSRSIsIlJFTU9WRV9JTUFHRSIsImFkZFBvc3QiLCJkYXRhIiwidHlwZSIsImFkZENvbW1lbnQiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJwcm9kdWNlIiwiZHJhZnQiLCJjb25zb2xlIiwibG9nIiwicG9zdCIsImZpbmQiLCJ2IiwiaWQiLCJQb3N0SWQiLCJMaWtlcnMiLCJwdXNoIiwiVXNlcklkIiwiZXJyb3IiLCJmaWx0ZXIiLCJjb25jYXQiLCJsZW5ndGgiLCJ1bnNoaWZ0IiwiUG9zdExvYWRpbmciLCJQb3N0RG9uZSIsIkNvbW1lbnRzIiwiY29udGVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0NBRUE7O0FBRU8sSUFBTUEsWUFBWSxHQUFHO0FBQzNCQyxXQUFTLEVBQUUsRUFEZ0I7QUFFM0JDLFlBQVUsRUFBRSxFQUZlO0FBRVg7QUFDaEJDLGNBQVksRUFBRSxJQUhhO0FBR1A7QUFDcEJDLGlCQUFlLEVBQUUsS0FKVTtBQUlIO0FBQ3hCQyxjQUFZLEVBQUUsS0FMYTtBQUtOO0FBQ3JCQyxlQUFhLEVBQUUsSUFOWTtBQU8zQkMsbUJBQWlCLEVBQUUsS0FQUTtBQU9EO0FBQzFCQyxnQkFBYyxFQUFFLEtBUlc7QUFRSjtBQUN2QkMsaUJBQWUsRUFBRSxJQVRVO0FBVTNCQyxxQkFBbUIsRUFBRSxLQVZNO0FBVUM7QUFDNUJDLGtCQUFnQixFQUFFLEtBWFM7QUFXRjtBQUN6QkMsbUJBQWlCLEVBQUUsSUFaUTtBQWEzQkMsa0JBQWdCLEVBQUUsS0FiUztBQWFGO0FBQ3pCQyxlQUFhLEVBQUUsS0FkWTtBQWNMO0FBQ3RCQyxnQkFBYyxFQUFFLElBZlc7QUFnQjNC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Y0gsT0FBZCxDQUFzQmpCLE1BQU0sQ0FBQ0wsSUFBUCxDQUFZMEIsT0FBbEMsRUFMeUIsQ0FLa0I7OztBQUMzQ25CLGVBQUssQ0FBQ2pDLGlCQUFOLEdBQTBCLEtBQTFCO0FBQ0FpQyxlQUFLLENBQUNoQyxjQUFOLEdBQXVCLElBQXZCO0FBQ0E7QUFDQTs7QUFDRCxXQUFLc0IsbUJBQUw7QUFDQ1UsYUFBSyxDQUFDakMsaUJBQU4sR0FBMEIsS0FBMUI7QUFDQWlDLGFBQUssQ0FBQy9CLGVBQU4sR0FBd0I2QixNQUFNLENBQUNhLEtBQS9CO0FBQ0E7O0FBQ0Q7QUFDQztBQTdIRjtBQStIQSxHQWpJd0QsQ0FBekM7QUFBQSxDQUFoQjs7QUFrSWVmLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuYjA4MDc3ZTE4OTQ5ZGU4YWI1YTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vaW1wb3J0IHNob3J0SWQgZnJvbSAnc2hvcnRpZCcgZnJvbnRcclxuaW1wb3J0IHByb2R1Y2UgZnJvbSAnaW1tZXInXHJcbi8vaW1wb3J0IGZha2VyIGZyb20gJ2Zha2VyJyBmcm9udFxyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuXHRtYWluUG9zdHM6IFtdLFxyXG5cdGltYWdlUGF0aHM6IFtdLCAvLyDsnbTrr7jsp4Ag6rK966Gc65Ok7J20IOyggOyepeuQqFxyXG5cdGhhc01vcmVQb3N0czogdHJ1ZSwgLy8g642UIOunjuydgCDqsozsi5zrrLwg6rCA7KC47Jik6riwXHJcblx0bGlrZVBvc3RMb2FkaW5nOiBmYWxzZSwgLy8g65287J207YGsIOuhnOuTnOykkSDroZzrlKlcclxuXHRsaWtlUG9zdERvbmU6IGZhbHNlLCAvLyDrnbzsnbTtgawg7JmE66OM7ZaI7J2E65WMIHRydWUg67OA7ZmYXHJcblx0bGlrZVBvc3RFcnJvcjogbnVsbCxcclxuXHR1bmxpa2VQb3N0TG9hZGluZzogZmFsc2UsIC8vIOyWuOudvOydtO2BrCDroZzrk5wg7KSRIOuhnOuUqVxyXG5cdHVubGlrZVBvc3REb25lOiBmYWxzZSwgLy8g7Ja465287J207YGsIOyZhOujjO2WiOydhOuVjCB0cnVlIOuzgO2ZmFxyXG5cdHVubGlrZVBvc3RFcnJvcjogbnVsbCxcclxuXHR1cGxvYWRJbWFnZXNMb2FkaW5nOiBmYWxzZSwgLy8g7J2066+47KeAIOuhnOuTnCDspJEg66Gc65SpXHJcblx0dXBsb2FkSW1hZ2VzRG9uZTogZmFsc2UsIC8vIOydtOuvuOyngCDroZzrk5wg7JmE66OM7ZaI7J2E65WMIHRydWUg67OA7ZmYXHJcblx0dXBsb2FkSW1hZ2VzRXJyb3I6IG51bGwsXHJcblx0bG9hZFBvc3RzTG9hZGluZzogZmFsc2UsIC8vIO2ZlOuptCDroZzrk5zspJEg66Gc65SpXHJcblx0bG9hZFBvc3RzRG9uZTogZmFsc2UsIC8vIO2ZlOuptCDroZzrk5wg7JmE66OM65CY7JeI7J2E65WMIHRydWUg67OA7ZmYXHJcblx0bG9hZFBvc3RzRXJyb3I6IG51bGwsXHJcblx0YWRkUG9zdExvYWRpbmc6IGZhbHNlLCAvLyDqsozsi5zrrLwg65Ox66Gd7KSRIOuhnOuUqVxyXG5cdGFkZFBvc3REb25lOiBmYWxzZSwgLy8g6rKM7Iuc66y8IOy2lOqwgOqwgCDsmYTro4zrkJjsl4jsnYTrlYwgdHJ1ZSDrs4DtmZhcclxuXHRhZGRQb3N0RXJyb3I6IG51bGwsXHJcblx0cmVtb3ZlUG9zdExvYWRpbmc6IGZhbHNlLCAvLyDqsozsi5zrrLwg7IKt7KCc7KSRIOuhnOuUqVxyXG5cdHJlbW92ZVBvc3REb25lOiBmYWxzZSwgLy8g6rKM7Iuc66y8IOyCreygnOqwgCDsmYTro4zrkJjsl4jsnYTrlYwgdHJ1ZSDrs4DtmZhcclxuXHRyZW1vdmVQb3N0RXJyb3I6IG51bGwsXHJcblx0YWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLCAvLyDrjJPquIAg65Ox66Gd7KSRIOuhnOuUqVxyXG5cdGFkZENvbW1lbnREb25lOiBmYWxzZSwgLy8g6rKM7Iuc66y8IOy2lOqwgOqwgCDsmYTro4zrkJjsl4jsnYTrlYwgdHJ1ZSDrs4DtmZhcclxuXHRhZGRDb21tZW50RXJyb3I6IG51bGwsXHJcbn1cclxuLy8g7J2067aA67aE7J2EIOyCrOyaqe2VtOyEnCDrrLTtlZwg7Iqk7YGs66Gk66eB7J2EIOunjOuTpOqygyBmcm9udFxyXG4vKmV4cG9ydCBjb25zdCBnZW5lcmF0ZUR1bW15UG9zdCA9IChudW1iZXIpID0+IEFycmF5KG51bWJlcikuZmlsbCgpLm1hcCgoKSA9PiAoe1xyXG5cdGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcblx0VXNlcjoge1xyXG5cdFx0aWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuXHRcdG5pY2tuYW1lOiBmYWtlci5uYW1lLmZpbmROYW1lKCksXHJcblx0fSxcclxuXHRjb250ZW50OiBmYWtlci5sb3JlbS5wYXJhZ3JhcGgoKSxcclxuXHRJbWFnZXM6IFt7XHJcblx0XHRzcmM6IGZha2VyLmltYWdlLmltYWdlKCksXHJcblx0fV0sXHJcblx0Q29tbWVudHM6IFt7XHJcblx0XHRVc2VyOiB7XHJcblx0XHRcdGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcblx0XHRcdG5pY2tuYW1lOiBmYWtlci5uYW1lLmZpbmROYW1lKCksXHJcblx0XHR9LFxyXG5cdFx0Y29udGVudDogZmFrZXIubG9yZW0uc2VudGVuY2UoKSxcclxuXHR9XSxcclxufSkpKi9cclxuXHJcbi8v6rKM7Iuc6riAIOyVoeyFmFxyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19SRVFVRVNUID0gJyBMT0FEX1BPU1RTX1JFUVVFU1QnOyAvLyDtmZTrqbTsnYQg66Gc65Sp7ZWY66m0IOuwlOuhnCBMT0FEX1BPU1RTX1JFUVVFU1Qg66W8IO2YuOy2nO2VtOykhOqyg1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19TVUNDRVNTID0gJyBMT0FEX1BPU1RTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19GQUlMVVJFID0gJyBMT0FEX1BPU1RTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1JFUVVFU1QgPSAnQUREX1BPU1RfUkVRVUVTVCc7IC8vIOuzgOyImOuhnCDrlLDroZwg66eM65Ok7Ja07KSY7JW8IOykkeqwhOyXkCDsmKTtg4DqsIDrgpjripQg7J287J2EIOunieydhCDsiJgg7J6I64ukXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9TVUNDRVNTID0gJ0FERF9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfRkFJTFVSRSA9ICdBRERfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMSUtFX1BPU1RfUkVRVUVTVCA9ICdMSUtFX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMSUtFX1BPU1RfU1VDQ0VTUyA9ICdMSUtFX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMSUtFX1BPU1RfRkFJTFVSRSA9ICdMSUtFX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgVVBMT0FEX0lNQUdFU19SRVFVRVNUID0gJ1VQTE9BRF9JTUFHRVNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBVUExPQURfSU1BR0VTX1NVQ0NFU1MgPSAnVVBMT0FEX0lNQUdFU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFVQTE9BRF9JTUFHRVNfRkFJTFVSRSA9ICdVUExPQURfSU1BR0VTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVOTElLRV9QT1NUX1JFUVVFU1QgPSAnVU5MSUtFX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9TVUNDRVNTID0gJ1VOTElLRV9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgVU5MSUtFX1BPU1RfRkFJTFVSRSA9ICdVTkxJS0VfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9SRVFVRVNUID0gJ1JFTU9WRV9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfU1VDQ0VTUyA9ICdSRU1PVkVfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX0ZBSUxVUkUgPSAnUkVNT1ZFX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfUkVRVUVTVCA9ICdBRERfQ09NTUVOVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1NVQ0NFU1MgPSAnQUREX0NPTU1FTlRfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9GQUlMVVJFID0gJ0FERF9DT01NRU5UX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9JTUFHRSA9ICdSRU1PVkVfSU1BR0UnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFBvc3QgPSAoZGF0YSkgPT4gKHtcclxuXHR0eXBlOiBBRERfUE9TVF9SRVFVRVNULFxyXG5cdGRhdGEsXHJcbn0pXHJcblxyXG4vLyBkeW5hbWljIGFjdGlvbiBjcmVhdGVcclxuZXhwb3J0IGNvbnN0IGFkZENvbW1lbnQgPSAoZGF0YSkgPT4gKHtcclxuXHR0eXBlOiBBRERfQ09NTUVOVF9SRVFVRVNULFxyXG5cdGRhdGEsXHJcbn0pXHJcblxyXG4vKiBmcm9udCBkdW1teVxyXG5jb25zdCBkdW1teVBvc3QgPSAoZGF0YSkgPT4gKHtcclxuXHRpZDogZGF0YS5pZCxcclxuXHRjb250ZW50OiBkYXRhLmNvbnRlbnQsXHJcblx0VXNlcjoge1xyXG5cdFx0aWQ6IDEsXHJcblx0XHRuaWNrbmFtZTogJ+u5hO2DgOuvvCcsXHJcblx0fSxcclxuXHRJbWFnZXM6IFtdLFxyXG5cdENvbW1lbnRzOiBbXSxcclxufSlcclxuKi9cclxuXHJcbi8qIGZyb250IGR1bW15XHJcbmNvbnN0IGR1bW15Q29tbWVudCA9IChkYXRhKSA9PiAoe1xyXG5cdGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcblx0Y29udGVudDogZGF0YSxcclxuXHRVc2VyOiB7XHJcblx0XHRpZDogMSxcclxuXHRcdG5pY2tuYW1lOiAn67mE7YOA66+8JyxcclxuXHR9XHJcbn0pKi9cclxuLy8g7J207KCEIOyDge2DnOulvCDslaHshZjsnYQg7Ya17ZW0IOuLpOydjCDsg4Htg5zroZwg66eM65Ok7Ja064K064qUIO2VqOyImFxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xyXG5cdC8vIGltbWVyIOyCrOyaqeyLnCBzdGF0ZSDrpbwgZHJhZnQg66GcIOq1kOyytO2VtOyjvOupsCwgc3dpdGNoIOusuOyduOqxuCDsnbjsi53tlZjqs6AgYnJlYWsg66W8IOq5jOuoueyngOunkOyekFxyXG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgTElLRV9QT1NUX1JFUVVFU1Q6XHJcblx0XHRcdGRyYWZ0Lmxpa2VQb3N0TG9hZGluZyA9IHRydWU7XHJcblx0XHRcdGRyYWZ0Lmxpa2VQb3N0RG9uZSA9IGZhbHNlO1xyXG5cdFx0XHRkcmFmdC5saWtlUG9zdEVycm9yID0gbnVsbDtcclxuXHRcdFx0Y29uc29sZS5sb2coJ3JlZHVjZXIgTElLRV9QT1NUX1JFUVVFU1Qg7JqU7LKtOjonKVxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgTElLRV9QT1NUX1NVQ0NFU1M6IHtcclxuXHRcdFx0Ly8gbWFpblBvc3RzIOyXkOyEnCBpZCDqsIAg7JWh7IWY642w7J207YSw7Y+s7Iqk7Yq47JWE7J2065SU66W8IOywvuyVhOyEnFxyXG5cdFx0XHRjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLlBvc3RJZCk7XHJcblx0XHRcdC8vIOqyjOyLnOq4gCDsoovslYTsmpQg64iE66W4IOyCrOuejOuTpOyXkOqyjCDsgqzsmqnsnpAg7JWE7J2065SU66W8IOuEo+yWtOykgOuLpFxyXG5cdFx0XHRwb3N0Lkxpa2Vycy5wdXNoKHtpZDogYWN0aW9uLmRhdGEuVXNlcklkfSk7XHJcblx0XHRcdGRyYWZ0Lmxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG5cdFx0XHRkcmFmdC5saWtlUG9zdERvbmUgPSB0cnVlO1xyXG5cdFx0XHRjb25zb2xlLmxvZygncmVkdWNlciBMSUtFX1BPU1RfU1VDQ0VTUyDshLHqs7U6OicpXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBMSUtFX1BPU1RfRkFJTFVSRTpcclxuXHRcdFx0ZHJhZnQubGlrZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcblx0XHRcdGRyYWZ0Lmxpa2VQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoJ3JlZHVjZXIgTElLRV9QT1NUX0ZBSUxVUkUg7Iuk7YyoOjo6JywgYWN0aW9uLmVycm9yKVxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgVU5MSUtFX1BPU1RfUkVRVUVTVDpcclxuXHRcdFx0ZHJhZnQudW5saWtlUG9zdExvYWRpbmcgPSB0cnVlO1xyXG5cdFx0XHRkcmFmdC51bmxpa2VQb3N0RG9uZSA9IGZhbHNlO1xyXG5cdFx0XHRkcmFmdC51bmxpa2VQb3N0RXJyb3IgPSBudWxsO1xyXG5cdFx0XHRjb25zb2xlLmxvZygncmVkdWNlciBVTkxJS0VfUE9TVF9SRVFVRVNUIOyalOyyrTo6JylcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFVOTElLRV9QT1NUX1NVQ0NFU1M6IHtcclxuXHRcdFx0Y29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5Qb3N0SWQpO1xyXG5cdFx0XHRwb3N0Lkxpa2VycyA9IHBvc3QuTGlrZXJzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEuVXNlcklkKTtcclxuXHRcdFx0ZHJhZnQudW5saWtlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuXHRcdFx0ZHJhZnQudW5saWtlUG9zdERvbmUgPSB0cnVlO1xyXG5cdFx0XHRjb25zb2xlLmxvZygncmVkdWNlciBVTkxJS0VfUE9TVF9TVUNDRVNTIOyEseqztTo6JylcclxuXHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblx0XHRjYXNlIFVOTElLRV9QT1NUX0ZBSUxVUkU6XHJcblx0XHRcdGRyYWZ0LnVubGlrZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcblx0XHRcdGRyYWZ0LnVubGlrZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuXHRcdFx0Y29uc29sZS5lcnJvcigncmVkdWNlciBVTkxJS0VfUE9TVF9GQUlMVVJFIOyLpO2MqDo6OicsIGFjdGlvbi5lcnJvcilcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFVQTE9BRF9JTUFHRVNfUkVRVUVTVDpcclxuXHRcdFx0ZHJhZnQudXBsb2FkSW1hZ2VzTG9hZGluZyA9IHRydWVcclxuXHRcdFx0ZHJhZnQudXBsb2FkSW1hZ2VzRG9uZSA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LnVwbG9hZEltYWdlc0Vycm9yID0gbnVsbFxyXG5cdFx0XHRjb25zb2xlLmxvZygncmVkdWNlciBVUExPQURfSU1BR0VTX1JFUVVFU1Qg7JqU7LKtOjonKVxyXG5cdFx0XHRicmVha1xyXG5cdFx0Y2FzZSBVUExPQURfSU1BR0VTX1NVQ0NFU1M6XHJcblx0XHRcdGRyYWZ0LmltYWdlUGF0aHMgPSBhY3Rpb24uZGF0YVxyXG5cdFx0XHRkcmFmdC51cGxvYWRJbWFnZXNMb2FkaW5nID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQudXBsb2FkSW1hZ2VzRG9uZSA9IHRydWVcclxuXHRcdFx0Y29uc29sZS5sb2coJ3JlZHVjZXIgVVBMT0FEX0lNQUdFU19TVUNDRVNTIOyEseqztTo6JylcclxuXHRcdFx0YnJlYWtcclxuXHRcdGNhc2UgVVBMT0FEX0lNQUdFU19GQUlMVVJFOlxyXG5cdFx0XHRkcmFmdC51cGxvYWRJbWFnZXNMb2FkaW5nID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQudXBsb2FkSW1hZ2VzRXJyb3IgPSBhY3Rpb24uZXJyb3JcclxuXHRcdFx0Y29uc29sZS5lcnJvcigncmVkdWNlciBVUExPQURfSU1BR0VTX0ZBSUxVUkUg7Iuk7YyoOjo6JywgYWN0aW9uLmVycm9yKVxyXG5cdFx0XHRicmVha1xyXG5cdFx0Y2FzZSBMT0FEX1BPU1RTX1JFUVVFU1Q6XHJcblx0XHRcdGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSB0cnVlO1xyXG5cdFx0XHRkcmFmdC5sb2FkUG9zdHNEb25lID0gZmFsc2U7XHJcblx0XHRcdGRyYWZ0LmxvYWRQb3N0c0Vycm9yID0gbnVsbDtcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIExPQURfUE9TVFNfU1VDQ0VTUzpcclxuXHRcdFx0ZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LmxvYWRQb3N0c0RvbmUgPSB0cnVlXHJcblx0XHRcdC8vIGFjdGlvbi5kYXRhIOyXkCBkdW1teSBkYXRhIOqwgCDrk6TslrTsnojsnYTqsoPsnbTrqbAsIOq4sOyhtOuNsOydtO2EsOyZgCDtlanss5Dso7zripTqsoNcclxuXHRcdFx0Ly8gY29uY2F0IOydhCDtlaDrlZAg7ZWt7IOBIOyVnuyXkCDrjIDsnoXsnYQg7ZW07KSY7JW87ZWc64ukIOq3uOuemOyVvCDtlanss5Dsp5BcclxuXHRcdFx0ZHJhZnQubWFpblBvc3RzID0gYWN0aW9uLmRhdGEuY29uY2F0KGRyYWZ0Lm1haW5Qb3N0cylcclxuXHRcdFx0Ly8g6rKM7Iuc66y87J2EIDUwIOqwnOq5jOyngOunjCDqsIDsoLjsmKTqsqDri6RcclxuXHRcdFx0ZHJhZnQuaGFzTW9yZVBvc3RzID0gZHJhZnQubWFpblBvc3RzLmxlbmd0aCA8IDUwXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBMT0FEX1BPU1RTX0ZBSUxVUkU6XHJcblx0XHRcdGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC5sb2FkUG9zdHNFcnJvciA9IGFjdGlvbi5lcnJvclxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgQUREX1BPU1RfUkVRVUVTVDpcclxuXHRcdFx0ZHJhZnQuYWRkUG9zdExvYWRpbmcgPSB0cnVlO1xyXG5cdFx0XHRkcmFmdC5hZGRQb3N0RG9uZSA9IGZhbHNlO1xyXG5cdFx0XHRkcmFmdC5hZGRQb3N0RXJyb3IgPSBudWxsO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgQUREX1BPU1RfU1VDQ0VTUzpcclxuXHRcdFx0Ly8gZHJhZnQubWFpblBvc3RzLnVuc2hpZnQoZHVtbXlQb3N0KGFjdGlvbi5kYXRhKSkgLy8gZnJvbnQgZHVtbXlcclxuXHRcdFx0ZHJhZnQubWFpblBvc3RzLnVuc2hpZnQoYWN0aW9uLmRhdGEpIC8vIGJhY2sg7Iuk7KCcIOuNsOydtO2EsFxyXG5cdFx0XHRkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LmFkZFBvc3REb25lID0gdHJ1ZVxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgQUREX1BPU1RfRkFJTFVSRTpcclxuXHRcdFx0ZHJhZnQuYWRkUG9zdExvYWRpbmcgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC5hZGRQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3JcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFJFTU9WRV9QT1NUX1JFUVVFU1Q6XHJcblx0XHRcdGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gdHJ1ZVxyXG5cdFx0XHRkcmFmdC5yZW1vdmVQb3N0RG9uZSA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LnJlbW92ZVBvc3RFcnJvciA9IG51bGxcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFJFTU9WRV9QT1NUX1NVQ0NFU1M6XHJcblx0XHRcdGRyYWZ0Lm1haW5Qb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLlBvc3RJZCkgLy8g7KeA7Jq465WQIOuztO2GtSBmaWx0ZXIg6rCAIO2OuO2VmOuLpFxyXG5cdFx0XHRkcmFmdC5Qb3N0TG9hZGluZyA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LlBvc3REb25lID0gdHJ1ZVxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgUkVNT1ZFX1BPU1RfRkFJTFVSRTpcclxuXHRcdFx0ZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC5yZW1vdmVQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3JcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIEFERF9DT01NRU5UX1JFUVVFU1Q6XHJcblx0XHRcdGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gdHJ1ZVxyXG5cdFx0XHRkcmFmdC5hZGRDb21tZW50RG9uZSA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LmFkZENvbW1lbnRFcnJvciA9IG51bGxcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIEFERF9DT01NRU5UX1NVQ0NFU1M6IHtcclxuXHRcdFx0Ly9hY3Rpb24uZGF0YS5jb250ZW50LCBwb3N0SWQsIHVzZXJJZFxyXG5cdFx0XHQvL2NvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEucG9zdElkKSAvLyDqsozsi5zquIAg66as7Iqk7Yq47KSR7JeQIHBvc3Qg7LC+6riwIGZyb250XHJcblx0XHRcdGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEuUG9zdElkKSAvLyDqsozsi5zquIAg66as7Iqk7Yq47KSR7JeQIHBvc3Qg7LC+6riwIGJha1xyXG5cdFx0XHQvL3Bvc3QuQ29tbWVudHMudW5zaGlmdChkdW1teUNvbW1lbnQoYWN0aW9uLmRhdGEuY29udGVudCkpIC8vIOywvuydgCBwb3N0IOyXkCDrp6gg7JWe7JeQIOqwgOynnCDrjJPquIAg7ZWY64KYIOuEo+yWtOykjCBGUk9OVFxyXG5cdFx0XHRwb3N0LkNvbW1lbnRzLnVuc2hpZnQoYWN0aW9uLmRhdGEuY29udGVudCkgLy8g7LC+7J2AIHBvc3Qg7JeQIOyLpOygnCDrjbDsnbTthLAgYmFja1xyXG5cdFx0XHRkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LmFkZENvbW1lbnREb25lID0gdHJ1ZVxyXG5cdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHRcdGNhc2UgQUREX0NPTU1FTlRfRkFJTFVSRTpcclxuXHRcdFx0ZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC5hZGRDb21tZW50RXJyb3IgPSBhY3Rpb24uZXJyb3JcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRicmVhaztcclxuXHR9XHJcbn0pXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXJcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==