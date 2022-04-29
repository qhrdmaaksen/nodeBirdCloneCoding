webpackHotUpdate_N_E("pages/index",{

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
var REMOVE_IMAGE = 'REMOVE_IMAGE'; // 동기 옵션은 하나만 만들어도 된다

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpbWFnZVBhdGhzIiwiaGFzTW9yZVBvc3RzIiwibGlrZVBvc3RMb2FkaW5nIiwibGlrZVBvc3REb25lIiwibGlrZVBvc3RFcnJvciIsInVubGlrZVBvc3RMb2FkaW5nIiwidW5saWtlUG9zdERvbmUiLCJ1bmxpa2VQb3N0RXJyb3IiLCJ1cGxvYWRJbWFnZXNMb2FkaW5nIiwidXBsb2FkSW1hZ2VzRG9uZSIsInVwbG9hZEltYWdlc0Vycm9yIiwibG9hZFBvc3RzTG9hZGluZyIsImxvYWRQb3N0c0RvbmUiLCJsb2FkUG9zdHNFcnJvciIsImFkZFBvc3RMb2FkaW5nIiwiYWRkUG9zdERvbmUiLCJhZGRQb3N0RXJyb3IiLCJyZW1vdmVQb3N0TG9hZGluZyIsInJlbW92ZVBvc3REb25lIiwicmVtb3ZlUG9zdEVycm9yIiwiYWRkQ29tbWVudExvYWRpbmciLCJhZGRDb21tZW50RG9uZSIsImFkZENvbW1lbnRFcnJvciIsIkxPQURfUE9TVFNfUkVRVUVTVCIsIkxPQURfUE9TVFNfU1VDQ0VTUyIsIkxPQURfUE9TVFNfRkFJTFVSRSIsIkFERF9QT1NUX1JFUVVFU1QiLCJBRERfUE9TVF9TVUNDRVNTIiwiQUREX1BPU1RfRkFJTFVSRSIsIkxJS0VfUE9TVF9SRVFVRVNUIiwiTElLRV9QT1NUX1NVQ0NFU1MiLCJMSUtFX1BPU1RfRkFJTFVSRSIsIlVQTE9BRF9JTUFHRVNfUkVRVUVTVCIsIlVQTE9BRF9JTUFHRVNfU1VDQ0VTUyIsIlVQTE9BRF9JTUFHRVNfRkFJTFVSRSIsIlVOTElLRV9QT1NUX1JFUVVFU1QiLCJVTkxJS0VfUE9TVF9TVUNDRVNTIiwiVU5MSUtFX1BPU1RfRkFJTFVSRSIsIlJFTU9WRV9QT1NUX1JFUVVFU1QiLCJSRU1PVkVfUE9TVF9TVUNDRVNTIiwiUkVNT1ZFX1BPU1RfRkFJTFVSRSIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJBRERfQ09NTUVOVF9TVUNDRVNTIiwiQUREX0NPTU1FTlRfRkFJTFVSRSIsIlJFTU9WRV9JTUFHRSIsImFkZFBvc3QiLCJkYXRhIiwidHlwZSIsImFkZENvbW1lbnQiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJwcm9kdWNlIiwiZHJhZnQiLCJjb25zb2xlIiwibG9nIiwicG9zdCIsImZpbmQiLCJ2IiwiaWQiLCJQb3N0SWQiLCJMaWtlcnMiLCJwdXNoIiwiVXNlcklkIiwiZXJyb3IiLCJmaWx0ZXIiLCJjb25jYXQiLCJsZW5ndGgiLCJ1bnNoaWZ0IiwiUG9zdExvYWRpbmciLCJQb3N0RG9uZSIsIkNvbW1lbnRzIiwiY29udGVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0NBRUE7O0FBRU8sSUFBTUEsWUFBWSxHQUFHO0FBQzNCQyxXQUFTLEVBQUUsRUFEZ0I7QUFFM0JDLFlBQVUsRUFBRSxFQUZlO0FBRVg7QUFDaEJDLGNBQVksRUFBRSxJQUhhO0FBR1A7QUFDcEJDLGlCQUFlLEVBQUUsS0FKVTtBQUlIO0FBQ3hCQyxjQUFZLEVBQUUsS0FMYTtBQUtOO0FBQ3JCQyxlQUFhLEVBQUUsSUFOWTtBQU8zQkMsbUJBQWlCLEVBQUUsS0FQUTtBQU9EO0FBQzFCQyxnQkFBYyxFQUFFLEtBUlc7QUFRSjtBQUN2QkMsaUJBQWUsRUFBRSxJQVRVO0FBVTNCQyxxQkFBbUIsRUFBRSxLQVZNO0FBVUM7QUFDNUJDLGtCQUFnQixFQUFFLEtBWFM7QUFXRjtBQUN6QkMsbUJBQWlCLEVBQUUsSUFaUTtBQWEzQkMsa0JBQWdCLEVBQUUsS0FiUztBQWFGO0FBQ3pCQyxlQUFhLEVBQUUsS0FkWTtBQWNMO0FBQ3RCQyxnQkFBYyxFQUFFLElBZlc7QUFnQjNC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ZSxRQUFMLENBQWNILE9BQWQsQ0FBc0JqQixNQUFNLENBQUNMLElBQVAsQ0FBWTBCLE9BQWxDLEVBTHlCLENBS2tCOzs7QUFDM0NuQixlQUFLLENBQUNqQyxpQkFBTixHQUEwQixLQUExQjtBQUNBaUMsZUFBSyxDQUFDaEMsY0FBTixHQUF1QixJQUF2QjtBQUNBO0FBQ0E7O0FBQ0QsV0FBS3NCLG1CQUFMO0FBQ0NVLGFBQUssQ0FBQ2pDLGlCQUFOLEdBQTBCLEtBQTFCO0FBQ0FpQyxhQUFLLENBQUMvQixlQUFOLEdBQXdCNkIsTUFBTSxDQUFDYSxLQUEvQjtBQUNBOztBQUNEO0FBQ0M7QUE3SEY7QUErSEEsR0FqSXdELENBQXpDO0FBQUEsQ0FBaEI7O0FBa0llZixzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hOTVkNjUxMTdiMWI2MGMxYWVjNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbXBvcnQgc2hvcnRJZCBmcm9tICdzaG9ydGlkJyBmcm9udFxyXG5pbXBvcnQgcHJvZHVjZSBmcm9tICdpbW1lcidcclxuLy9pbXBvcnQgZmFrZXIgZnJvbSAnZmFrZXInIGZyb250XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG5cdG1haW5Qb3N0czogW10sXHJcblx0aW1hZ2VQYXRoczogW10sIC8vIOydtOuvuOyngCDqsr3roZzrk6TsnbQg7KCA7J6l65CoXHJcblx0aGFzTW9yZVBvc3RzOiB0cnVlLCAvLyDrjZQg66eO7J2AIOqyjOyLnOusvCDqsIDsoLjsmKTquLBcclxuXHRsaWtlUG9zdExvYWRpbmc6IGZhbHNlLCAvLyDrnbzsnbTtgawg66Gc65Oc7KSRIOuhnOuUqVxyXG5cdGxpa2VQb3N0RG9uZTogZmFsc2UsIC8vIOudvOydtO2BrCDsmYTro4ztlojsnYTrlYwgdHJ1ZSDrs4DtmZhcclxuXHRsaWtlUG9zdEVycm9yOiBudWxsLFxyXG5cdHVubGlrZVBvc3RMb2FkaW5nOiBmYWxzZSwgLy8g7Ja465287J207YGsIOuhnOuTnCDspJEg66Gc65SpXHJcblx0dW5saWtlUG9zdERvbmU6IGZhbHNlLCAvLyDslrjrnbzsnbTtgawg7JmE66OM7ZaI7J2E65WMIHRydWUg67OA7ZmYXHJcblx0dW5saWtlUG9zdEVycm9yOiBudWxsLFxyXG5cdHVwbG9hZEltYWdlc0xvYWRpbmc6IGZhbHNlLCAvLyDsnbTrr7jsp4Ag66Gc65OcIOykkSDroZzrlKlcclxuXHR1cGxvYWRJbWFnZXNEb25lOiBmYWxzZSwgLy8g7J2066+47KeAIOuhnOuTnCDsmYTro4ztlojsnYTrlYwgdHJ1ZSDrs4DtmZhcclxuXHR1cGxvYWRJbWFnZXNFcnJvcjogbnVsbCxcclxuXHRsb2FkUG9zdHNMb2FkaW5nOiBmYWxzZSwgLy8g7ZmU66m0IOuhnOuTnOykkSDroZzrlKlcclxuXHRsb2FkUG9zdHNEb25lOiBmYWxzZSwgLy8g7ZmU66m0IOuhnOuTnCDsmYTro4zrkJjsl4jsnYTrlYwgdHJ1ZSDrs4DtmZhcclxuXHRsb2FkUG9zdHNFcnJvcjogbnVsbCxcclxuXHRhZGRQb3N0TG9hZGluZzogZmFsc2UsIC8vIOqyjOyLnOusvCDrk7HroZ3spJEg66Gc65SpXHJcblx0YWRkUG9zdERvbmU6IGZhbHNlLCAvLyDqsozsi5zrrLwg7LaU6rCA6rCAIOyZhOujjOuQmOyXiOydhOuVjCB0cnVlIOuzgO2ZmFxyXG5cdGFkZFBvc3RFcnJvcjogbnVsbCxcclxuXHRyZW1vdmVQb3N0TG9hZGluZzogZmFsc2UsIC8vIOqyjOyLnOusvCDsgq3soJzspJEg66Gc65SpXHJcblx0cmVtb3ZlUG9zdERvbmU6IGZhbHNlLCAvLyDqsozsi5zrrLwg7IKt7KCc6rCAIOyZhOujjOuQmOyXiOydhOuVjCB0cnVlIOuzgO2ZmFxyXG5cdHJlbW92ZVBvc3RFcnJvcjogbnVsbCxcclxuXHRhZGRDb21tZW50TG9hZGluZzogZmFsc2UsIC8vIOuMk+q4gCDrk7HroZ3spJEg66Gc65SpXHJcblx0YWRkQ29tbWVudERvbmU6IGZhbHNlLCAvLyDqsozsi5zrrLwg7LaU6rCA6rCAIOyZhOujjOuQmOyXiOydhOuVjCB0cnVlIOuzgO2ZmFxyXG5cdGFkZENvbW1lbnRFcnJvcjogbnVsbCxcclxufVxyXG4vLyDsnbTrtoDrtoTsnYQg7IKs7Jqp7ZW07IScIOustO2VnCDsiqTtgazroaTrp4HsnYQg66eM65Ok6rKDIGZyb250XHJcbi8qZXhwb3J0IGNvbnN0IGdlbmVyYXRlRHVtbXlQb3N0ID0gKG51bWJlcikgPT4gQXJyYXkobnVtYmVyKS5maWxsKCkubWFwKCgpID0+ICh7XHJcblx0aWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuXHRVc2VyOiB7XHJcblx0XHRpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG5cdFx0bmlja25hbWU6IGZha2VyLm5hbWUuZmluZE5hbWUoKSxcclxuXHR9LFxyXG5cdGNvbnRlbnQ6IGZha2VyLmxvcmVtLnBhcmFncmFwaCgpLFxyXG5cdEltYWdlczogW3tcclxuXHRcdHNyYzogZmFrZXIuaW1hZ2UuaW1hZ2UoKSxcclxuXHR9XSxcclxuXHRDb21tZW50czogW3tcclxuXHRcdFVzZXI6IHtcclxuXHRcdFx0aWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuXHRcdFx0bmlja25hbWU6IGZha2VyLm5hbWUuZmluZE5hbWUoKSxcclxuXHRcdH0sXHJcblx0XHRjb250ZW50OiBmYWtlci5sb3JlbS5zZW50ZW5jZSgpLFxyXG5cdH1dLFxyXG59KSkqL1xyXG5cclxuLy/qsozsi5zquIAg7JWh7IWYXHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX1JFUVVFU1QgPSAnIExPQURfUE9TVFNfUkVRVUVTVCc7IC8vIO2ZlOuptOydhCDroZzrlKntlZjrqbQg67CU66GcIExPQURfUE9TVFNfUkVRVUVTVCDrpbwg7Zi47Lac7ZW07KSE6rKDXHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX1NVQ0NFU1MgPSAnIExPQURfUE9TVFNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX0ZBSUxVUkUgPSAnIExPQURfUE9TVFNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfUkVRVUVTVCA9ICdBRERfUE9TVF9SRVFVRVNUJzsgLy8g67OA7IiY66GcIOuUsOuhnCDrp4zrk6TslrTspJjslbwg7KSR6rCE7JeQIOyYpO2DgOqwgOuCmOuKlCDsnbzsnYQg66eJ7J2EIOyImCDsnojri6RcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1NVQ0NFU1MgPSAnQUREX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9GQUlMVVJFID0gJ0FERF9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExJS0VfUE9TVF9SRVFVRVNUID0gJ0xJS0VfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExJS0VfUE9TVF9TVUNDRVNTID0gJ0xJS0VfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExJS0VfUE9TVF9GQUlMVVJFID0gJ0xJS0VfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBVUExPQURfSU1BR0VTX1JFUVVFU1QgPSAnVVBMT0FEX0lNQUdFU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFVQTE9BRF9JTUFHRVNfU1VDQ0VTUyA9ICdVUExPQURfSU1BR0VTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgVVBMT0FEX0lNQUdFU19GQUlMVVJFID0gJ1VQTE9BRF9JTUFHRVNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgVU5MSUtFX1BPU1RfUkVRVUVTVCA9ICdVTkxJS0VfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFVOTElLRV9QT1NUX1NVQ0NFU1MgPSAnVU5MSUtFX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9GQUlMVVJFID0gJ1VOTElLRV9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1JFUVVFU1QgPSAnUkVNT1ZFX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9TVUNDRVNTID0gJ1JFTU9WRV9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfRkFJTFVSRSA9ICdSRU1PVkVfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9SRVFVRVNUID0gJ0FERF9DT01NRU5UX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfU1VDQ0VTUyA9ICdBRERfQ09NTUVOVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX0ZBSUxVUkUgPSAnQUREX0NPTU1FTlRfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0lNQUdFID0gJ1JFTU9WRV9JTUFHRSc7IC8vIOuPmeq4sCDsmLXshZjsnYAg7ZWY64KY66eMIOunjOuTpOyWtOuPhCDrkJzri6RcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRQb3N0ID0gKGRhdGEpID0+ICh7XHJcblx0dHlwZTogQUREX1BPU1RfUkVRVUVTVCxcclxuXHRkYXRhLFxyXG59KVxyXG5cclxuLy8gZHluYW1pYyBhY3Rpb24gY3JlYXRlXHJcbmV4cG9ydCBjb25zdCBhZGRDb21tZW50ID0gKGRhdGEpID0+ICh7XHJcblx0dHlwZTogQUREX0NPTU1FTlRfUkVRVUVTVCxcclxuXHRkYXRhLFxyXG59KVxyXG5cclxuLyogZnJvbnQgZHVtbXlcclxuY29uc3QgZHVtbXlQb3N0ID0gKGRhdGEpID0+ICh7XHJcblx0aWQ6IGRhdGEuaWQsXHJcblx0Y29udGVudDogZGF0YS5jb250ZW50LFxyXG5cdFVzZXI6IHtcclxuXHRcdGlkOiAxLFxyXG5cdFx0bmlja25hbWU6ICfruYTtg4Drr7wnLFxyXG5cdH0sXHJcblx0SW1hZ2VzOiBbXSxcclxuXHRDb21tZW50czogW10sXHJcbn0pXHJcbiovXHJcblxyXG4vKiBmcm9udCBkdW1teVxyXG5jb25zdCBkdW1teUNvbW1lbnQgPSAoZGF0YSkgPT4gKHtcclxuXHRpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG5cdGNvbnRlbnQ6IGRhdGEsXHJcblx0VXNlcjoge1xyXG5cdFx0aWQ6IDEsXHJcblx0XHRuaWNrbmFtZTogJ+u5hO2DgOuvvCcsXHJcblx0fVxyXG59KSovXHJcbi8vIOydtOyghCDsg4Htg5zrpbwg7JWh7IWY7J2EIO2Gte2VtCDri6TsnYwg7IOB7YOc66GcIOunjOuTpOyWtOuCtOuKlCDtlajsiJhcclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcclxuXHQvLyBpbW1lciDsgqzsmqnsi5wgc3RhdGUg66W8IGRyYWZ0IOuhnCDqtZDssrTtlbTso7zrqbAsIHN3aXRjaCDrrLjsnbjqsbgg7J247Iud7ZWY6rOgIGJyZWFrIOulvCDquYzrqLnsp4Drp5DsnpBcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIExJS0VfUE9TVF9SRVFVRVNUOlxyXG5cdFx0XHRkcmFmdC5saWtlUG9zdExvYWRpbmcgPSB0cnVlO1xyXG5cdFx0XHRkcmFmdC5saWtlUG9zdERvbmUgPSBmYWxzZTtcclxuXHRcdFx0ZHJhZnQubGlrZVBvc3RFcnJvciA9IG51bGw7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdyZWR1Y2VyIExJS0VfUE9TVF9SRVFVRVNUIOyalOyyrTo6JylcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIExJS0VfUE9TVF9TVUNDRVNTOiB7XHJcblx0XHRcdC8vIG1haW5Qb3N0cyDsl5DshJwgaWQg6rCAIOyVoeyFmOuNsOydtO2EsO2PrOyKpO2KuOyVhOydtOuUlOulvCDssL7slYTshJxcclxuXHRcdFx0Y29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5Qb3N0SWQpO1xyXG5cdFx0XHQvLyDqsozsi5zquIAg7KKL7JWE7JqUIOuIhOuluCDsgqzrnozrk6Tsl5Dqsowg7IKs7Jqp7J6QIOyVhOydtOuUlOulvCDrhKPslrTspIDri6RcclxuXHRcdFx0cG9zdC5MaWtlcnMucHVzaCh7aWQ6IGFjdGlvbi5kYXRhLlVzZXJJZH0pO1xyXG5cdFx0XHRkcmFmdC5saWtlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuXHRcdFx0ZHJhZnQubGlrZVBvc3REb25lID0gdHJ1ZTtcclxuXHRcdFx0Y29uc29sZS5sb2coJ3JlZHVjZXIgTElLRV9QT1NUX1NVQ0NFU1Mg7ISx6rO1OjonKVxyXG5cdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHRcdGNhc2UgTElLRV9QT1NUX0ZBSUxVUkU6XHJcblx0XHRcdGRyYWZ0Lmxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG5cdFx0XHRkcmFmdC5saWtlUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG5cdFx0XHRjb25zb2xlLmVycm9yKCdyZWR1Y2VyIExJS0VfUE9TVF9GQUlMVVJFIOyLpO2MqDo6OicsIGFjdGlvbi5lcnJvcilcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFVOTElLRV9QT1NUX1JFUVVFU1Q6XHJcblx0XHRcdGRyYWZ0LnVubGlrZVBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuXHRcdFx0ZHJhZnQudW5saWtlUG9zdERvbmUgPSBmYWxzZTtcclxuXHRcdFx0ZHJhZnQudW5saWtlUG9zdEVycm9yID0gbnVsbDtcclxuXHRcdFx0Y29uc29sZS5sb2coJ3JlZHVjZXIgVU5MSUtFX1BPU1RfUkVRVUVTVCDsmpTssq06OicpXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBVTkxJS0VfUE9TVF9TVUNDRVNTOiB7XHJcblx0XHRcdGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEuUG9zdElkKTtcclxuXHRcdFx0cG9zdC5MaWtlcnMgPSBwb3N0Lkxpa2Vycy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLlVzZXJJZCk7XHJcblx0XHRcdGRyYWZ0LnVubGlrZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcblx0XHRcdGRyYWZ0LnVubGlrZVBvc3REb25lID0gdHJ1ZTtcclxuXHRcdFx0Y29uc29sZS5sb2coJ3JlZHVjZXIgVU5MSUtFX1BPU1RfU1VDQ0VTUyDshLHqs7U6OicpXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBVTkxJS0VfUE9TVF9GQUlMVVJFOlxyXG5cdFx0XHRkcmFmdC51bmxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG5cdFx0XHRkcmFmdC51bmxpa2VQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoJ3JlZHVjZXIgVU5MSUtFX1BPU1RfRkFJTFVSRSDsi6TtjKg6OjonLCBhY3Rpb24uZXJyb3IpXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBVUExPQURfSU1BR0VTX1JFUVVFU1Q6XHJcblx0XHRcdGRyYWZ0LnVwbG9hZEltYWdlc0xvYWRpbmcgPSB0cnVlXHJcblx0XHRcdGRyYWZ0LnVwbG9hZEltYWdlc0RvbmUgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC51cGxvYWRJbWFnZXNFcnJvciA9IG51bGxcclxuXHRcdFx0Y29uc29sZS5sb2coJ3JlZHVjZXIgVVBMT0FEX0lNQUdFU19SRVFVRVNUIOyalOyyrTo6JylcclxuXHRcdFx0YnJlYWtcclxuXHRcdGNhc2UgVVBMT0FEX0lNQUdFU19TVUNDRVNTOlxyXG5cdFx0XHRkcmFmdC5pbWFnZVBhdGhzID0gYWN0aW9uLmRhdGFcclxuXHRcdFx0ZHJhZnQudXBsb2FkSW1hZ2VzTG9hZGluZyA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LnVwbG9hZEltYWdlc0RvbmUgPSB0cnVlXHJcblx0XHRcdGNvbnNvbGUubG9nKCdyZWR1Y2VyIFVQTE9BRF9JTUFHRVNfU1VDQ0VTUyDshLHqs7U6OicpXHJcblx0XHRcdGJyZWFrXHJcblx0XHRjYXNlIFVQTE9BRF9JTUFHRVNfRkFJTFVSRTpcclxuXHRcdFx0ZHJhZnQudXBsb2FkSW1hZ2VzTG9hZGluZyA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LnVwbG9hZEltYWdlc0Vycm9yID0gYWN0aW9uLmVycm9yXHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoJ3JlZHVjZXIgVVBMT0FEX0lNQUdFU19GQUlMVVJFIOyLpO2MqDo6OicsIGFjdGlvbi5lcnJvcilcclxuXHRcdFx0YnJlYWtcclxuXHRcdGNhc2UgTE9BRF9QT1NUU19SRVFVRVNUOlxyXG5cdFx0XHRkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gdHJ1ZTtcclxuXHRcdFx0ZHJhZnQubG9hZFBvc3RzRG9uZSA9IGZhbHNlO1xyXG5cdFx0XHRkcmFmdC5sb2FkUG9zdHNFcnJvciA9IG51bGw7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBMT0FEX1BPU1RTX1NVQ0NFU1M6XHJcblx0XHRcdGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC5sb2FkUG9zdHNEb25lID0gdHJ1ZVxyXG5cdFx0XHQvLyBhY3Rpb24uZGF0YSDsl5AgZHVtbXkgZGF0YSDqsIAg65Ok7Ja07J6I7J2E6rKD7J2066mwLCDquLDsobTrjbDsnbTthLDsmYAg7ZWp7LOQ7KO864qU6rKDXHJcblx0XHRcdC8vIGNvbmNhdCDsnYQg7ZWg65WQIO2VreyDgSDslZ7sl5Ag64yA7J6F7J2EIO2VtOykmOyVvO2VnOuLpCDqt7jrnpjslbwg7ZWp7LOQ7KeQXHJcblx0XHRcdGRyYWZ0Lm1haW5Qb3N0cyA9IGFjdGlvbi5kYXRhLmNvbmNhdChkcmFmdC5tYWluUG9zdHMpXHJcblx0XHRcdC8vIOqyjOyLnOusvOydhCA1MCDqsJzquYzsp4Drp4wg6rCA7KC47Jik6rKg64ukXHJcblx0XHRcdGRyYWZ0Lmhhc01vcmVQb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5sZW5ndGggPCA1MFxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgTE9BRF9QT1NUU19GQUlMVVJFOlxyXG5cdFx0XHRkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQubG9hZFBvc3RzRXJyb3IgPSBhY3Rpb24uZXJyb3JcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIEFERF9QT1NUX1JFUVVFU1Q6XHJcblx0XHRcdGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuXHRcdFx0ZHJhZnQuYWRkUG9zdERvbmUgPSBmYWxzZTtcclxuXHRcdFx0ZHJhZnQuYWRkUG9zdEVycm9yID0gbnVsbDtcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIEFERF9QT1NUX1NVQ0NFU1M6XHJcblx0XHRcdC8vIGRyYWZ0Lm1haW5Qb3N0cy51bnNoaWZ0KGR1bW15UG9zdChhY3Rpb24uZGF0YSkpIC8vIGZyb250IGR1bW15XHJcblx0XHRcdGRyYWZ0Lm1haW5Qb3N0cy51bnNoaWZ0KGFjdGlvbi5kYXRhKSAvLyBiYWNrIOyLpOygnCDrjbDsnbTthLBcclxuXHRcdFx0ZHJhZnQuYWRkUG9zdExvYWRpbmcgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC5hZGRQb3N0RG9uZSA9IHRydWVcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIEFERF9QT1NUX0ZBSUxVUkU6XHJcblx0XHRcdGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQuYWRkUG9zdEVycm9yID0gYWN0aW9uLmVycm9yXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBSRU1PVkVfUE9TVF9SRVFVRVNUOlxyXG5cdFx0XHRkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IHRydWVcclxuXHRcdFx0ZHJhZnQucmVtb3ZlUG9zdERvbmUgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC5yZW1vdmVQb3N0RXJyb3IgPSBudWxsXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBSRU1PVkVfUE9TVF9TVUNDRVNTOlxyXG5cdFx0XHRkcmFmdC5tYWluUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YS5Qb3N0SWQpIC8vIOyngOyauOuVkCDrs7TthrUgZmlsdGVyIOqwgCDtjrjtlZjri6RcclxuXHRcdFx0ZHJhZnQuUG9zdExvYWRpbmcgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC5Qb3N0RG9uZSA9IHRydWVcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFJFTU9WRV9QT1NUX0ZBSUxVUkU6XHJcblx0XHRcdGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQucmVtb3ZlUG9zdEVycm9yID0gYWN0aW9uLmVycm9yXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBBRERfQ09NTUVOVF9SRVFVRVNUOlxyXG5cdFx0XHRkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IHRydWVcclxuXHRcdFx0ZHJhZnQuYWRkQ29tbWVudERvbmUgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC5hZGRDb21tZW50RXJyb3IgPSBudWxsXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBBRERfQ09NTUVOVF9TVUNDRVNTOiB7XHJcblx0XHRcdC8vYWN0aW9uLmRhdGEuY29udGVudCwgcG9zdElkLCB1c2VySWRcclxuXHRcdFx0Ly9jb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLnBvc3RJZCkgLy8g6rKM7Iuc6riAIOumrOyKpO2KuOykkeyXkCBwb3N0IOywvuq4sCBmcm9udFxyXG5cdFx0XHRjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLlBvc3RJZCkgLy8g6rKM7Iuc6riAIOumrOyKpO2KuOykkeyXkCBwb3N0IOywvuq4sCBiYWtcclxuXHRcdFx0Ly9wb3N0LkNvbW1lbnRzLnVuc2hpZnQoZHVtbXlDb21tZW50KGFjdGlvbi5kYXRhLmNvbnRlbnQpKSAvLyDssL7snYAgcG9zdCDsl5Ag66eoIOyVnuyXkCDqsIDsp5wg64yT6riAIO2VmOuCmCDrhKPslrTspIwgRlJPTlRcclxuXHRcdFx0cG9zdC5Db21tZW50cy51bnNoaWZ0KGFjdGlvbi5kYXRhLmNvbnRlbnQpIC8vIOywvuydgCBwb3N0IOyXkCDsi6TsoJwg642w7J207YSwIGJhY2tcclxuXHRcdFx0ZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC5hZGRDb21tZW50RG9uZSA9IHRydWVcclxuXHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblx0XHRjYXNlIEFERF9DT01NRU5UX0ZBSUxVUkU6XHJcblx0XHRcdGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQuYWRkQ29tbWVudEVycm9yID0gYWN0aW9uLmVycm9yXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0YnJlYWs7XHJcblx0fVxyXG59KVxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=