webpackHotUpdate_N_E("pages/index",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE, LOAD_POST_REQUEST, LOAD_POST_SUCCESS, LOAD_POST_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, LIKE_POST_REQUEST, LIKE_POST_SUCCESS, LIKE_POST_FAILURE, UPLOAD_IMAGES_REQUEST, UPLOAD_IMAGES_SUCCESS, UPLOAD_IMAGES_FAILURE, UNLIKE_POST_REQUEST, UNLIKE_POST_SUCCESS, UNLIKE_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, RETWEET_REQUEST, RETWEET_SUCCESS, RETWEET_FAILURE, REMOVE_IMAGE, addPost, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_REQUEST", function() { return LOAD_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_SUCCESS", function() { return LOAD_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_FAILURE", function() { return LOAD_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_REQUEST", function() { return LOAD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_SUCCESS", function() { return LOAD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_FAILURE", function() { return LOAD_POST_FAILURE; });
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RETWEET_REQUEST", function() { return RETWEET_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RETWEET_SUCCESS", function() { return RETWEET_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RETWEET_FAILURE", function() { return RETWEET_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_IMAGE", function() { return REMOVE_IMAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPost", function() { return addPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addComment", function() { return addComment; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");
//import shortId from 'shortid' front
 //import faker from 'faker' front

var initialState = {
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
  loadPostLoading: false,
  // 게시글 로드중 로딩
  loadPostDone: false,
  // 게시글 로드 완료되었을때 true 변환
  loadPostError: null,
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
var LOAD_POST_REQUEST = 'LOAD_POST_REQUEST'; // 게시물을 로딩하면 바로 LOAD_POST_REQUEST 를 호출해줄것

var LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS';
var LOAD_POST_FAILURE = 'LOAD_POST_FAILURE';
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
var RETWEET_REQUEST = 'RETWEET_REQUEST';
var RETWEET_SUCCESS = 'RETWEET_SUCCESS';
var RETWEET_FAILURE = 'RETWEET_FAILURE';
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
      case LOAD_POST_REQUEST:
        draft.loadPostLoading = true;
        draft.loadPostDone = false;
        draft.loadPostError = null;
        console.log('reducer LOAD_POST_REQUEST 요청:: ');
        break;

      case LOAD_POST_SUCCESS:
        draft.singlePost = action.data; // 하나의 게시물만 로드

        draft.loadPostLoading = false;
        draft.loadPostDone = true;
        console.log('reducer LOAD_POST_SUCCESS 성공:: ');
        break;

      case LOAD_POST_FAILURE:
        draft.loadPostLoading = false;
        draft.loadPostError = action.error;
        console.error('reducer LOAD_POST_FAILURE 실패:: ', action.error);

      case REMOVE_IMAGE:
        draft.imagePaths = draft.imagePaths.filter(function (v, i) {
          return i !== action.data;
        });
        console.log('reducer REMOVE_IMAGE 성공');
        break;

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
        //draft.mainPosts = action.data.concat(draft.mainPosts) front

        draft.mainPosts = draft.mainPosts.concat(action.data); // 게시물을 50 개까지만 가져오겠다
        //draft.hasMorePosts = draft.mainPosts.length < 50 front

        draft.hasMorePosts = action.data.length === 10;
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
        draft.imagePaths = []; // add post 성공 시, 사용자 게시글 작성에 이미지 초기화

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


          _post2.Comments.unshift(action.data); // 찾은 post 에 실제 데이터 back


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJzaW5nbGVQb3N0IiwiaW1hZ2VQYXRocyIsImhhc01vcmVQb3N0cyIsImxpa2VQb3N0TG9hZGluZyIsImxpa2VQb3N0RG9uZSIsImxpa2VQb3N0RXJyb3IiLCJyZXR3ZWV0TG9hZGluZyIsInJldHdlZXREb25lIiwicmV0d2VldEVycm9yIiwidW5saWtlUG9zdExvYWRpbmciLCJ1bmxpa2VQb3N0RG9uZSIsInVubGlrZVBvc3RFcnJvciIsInVwbG9hZEltYWdlc0xvYWRpbmciLCJ1cGxvYWRJbWFnZXNEb25lIiwidXBsb2FkSW1hZ2VzRXJyb3IiLCJsb2FkUG9zdHNMb2FkaW5nIiwibG9hZFBvc3RzRG9uZSIsImxvYWRQb3N0c0Vycm9yIiwibG9hZFBvc3RMb2FkaW5nIiwibG9hZFBvc3REb25lIiwibG9hZFBvc3RFcnJvciIsImFkZFBvc3RMb2FkaW5nIiwiYWRkUG9zdERvbmUiLCJhZGRQb3N0RXJyb3IiLCJyZW1vdmVQb3N0TG9hZGluZyIsInJlbW92ZVBvc3REb25lIiwicmVtb3ZlUG9zdEVycm9yIiwiYWRkQ29tbWVudExvYWRpbmciLCJhZGRDb21tZW50RG9uZSIsImFkZENvbW1lbnRFcnJvciIsIkxPQURfUE9TVFNfUkVRVUVTVCIsIkxPQURfUE9TVFNfU1VDQ0VTUyIsIkxPQURfUE9TVFNfRkFJTFVSRSIsIkxPQURfUE9TVF9SRVFVRVNUIiwiTE9BRF9QT1NUX1NVQ0NFU1MiLCJMT0FEX1BPU1RfRkFJTFVSRSIsIkFERF9QT1NUX1JFUVVFU1QiLCJBRERfUE9TVF9TVUNDRVNTIiwiQUREX1BPU1RfRkFJTFVSRSIsIkxJS0VfUE9TVF9SRVFVRVNUIiwiTElLRV9QT1NUX1NVQ0NFU1MiLCJMSUtFX1BPU1RfRkFJTFVSRSIsIlVQTE9BRF9JTUFHRVNfUkVRVUVTVCIsIlVQTE9BRF9JTUFHRVNfU1VDQ0VTUyIsIlVQTE9BRF9JTUFHRVNfRkFJTFVSRSIsIlVOTElLRV9QT1NUX1JFUVVFU1QiLCJVTkxJS0VfUE9TVF9TVUNDRVNTIiwiVU5MSUtFX1BPU1RfRkFJTFVSRSIsIlJFTU9WRV9QT1NUX1JFUVVFU1QiLCJSRU1PVkVfUE9TVF9TVUNDRVNTIiwiUkVNT1ZFX1BPU1RfRkFJTFVSRSIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJBRERfQ09NTUVOVF9TVUNDRVNTIiwiQUREX0NPTU1FTlRfRkFJTFVSRSIsIlJFVFdFRVRfUkVRVUVTVCIsIlJFVFdFRVRfU1VDQ0VTUyIsIlJFVFdFRVRfRkFJTFVSRSIsIlJFTU9WRV9JTUFHRSIsImFkZFBvc3QiLCJkYXRhIiwidHlwZSIsImFkZENvbW1lbnQiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJwcm9kdWNlIiwiZHJhZnQiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJmaWx0ZXIiLCJ2IiwiaSIsInVuc2hpZnQiLCJwb3N0IiwiZmluZCIsImlkIiwiUG9zdElkIiwiTGlrZXJzIiwicHVzaCIsIlVzZXJJZCIsImNvbmNhdCIsImxlbmd0aCIsIlBvc3RMb2FkaW5nIiwiUG9zdERvbmUiLCJDb21tZW50cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0NBRUE7O0FBRU8sSUFBTUEsWUFBWSxHQUFHO0FBQzNCQyxXQUFTLEVBQUUsRUFEZ0I7QUFDWjtBQUNmQyxZQUFVLEVBQUUsSUFGZTtBQUVUO0FBQ2xCQyxZQUFVLEVBQUUsRUFIZTtBQUdYO0FBQ2hCQyxjQUFZLEVBQUUsSUFKYTtBQUlQO0FBQ3BCQyxpQkFBZSxFQUFFLEtBTFU7QUFLSDtBQUN4QkMsY0FBWSxFQUFFLEtB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Q25FLFNBQU4sQ0FBZ0I0RSxJQUFoQixDQUFxQixVQUFDSixDQUFEO0FBQUEsbUJBQU9BLENBQUMsQ0FBQ0ssRUFBRixLQUFTWixNQUFNLENBQUNMLElBQVAsQ0FBWWtCLE1BQTVCO0FBQUEsV0FBckIsQ0FBYixDQUh5QixDQUc2QztBQUN0RTs7O0FBQ0FILGdCQUFJLENBQUNXLFFBQUwsQ0FBY1osT0FBZCxDQUFzQlQsTUFBTSxDQUFDTCxJQUE3QixFQUx5QixDQUtVOzs7QUFDbkNPLGVBQUssQ0FBQ3ZDLGlCQUFOLEdBQTBCLEtBQTFCO0FBQ0F1QyxlQUFLLENBQUN0QyxjQUFOLEdBQXVCLElBQXZCO0FBQ0E7QUFDQTs7QUFDRCxXQUFLeUIsbUJBQUw7QUFDQ2EsYUFBSyxDQUFDdkMsaUJBQU4sR0FBMEIsS0FBMUI7QUFDQXVDLGFBQUssQ0FBQ3JDLGVBQU4sR0FBd0JtQyxNQUFNLENBQUNLLEtBQS9CO0FBQ0E7O0FBQ0Q7QUFDQztBQXRLRjtBQXdLQSxHQTFLd0QsQ0FBekM7QUFBQSxDQUFoQjs7QUEyS2VQLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmI3ZWE2N2NjN2NkNDM3Yzk5Y2UyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydCBzaG9ydElkIGZyb20gJ3Nob3J0aWQnIGZyb250XHJcbmltcG9ydCBwcm9kdWNlIGZyb20gJ2ltbWVyJ1xyXG4vL2ltcG9ydCBmYWtlciBmcm9tICdmYWtlcicgZnJvbnRcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcblx0bWFpblBvc3RzOiBbXSwgLy8g6rKM7Iuc66y8IOyXrOufrOqwnFxyXG5cdHNpbmdsZVBvc3Q6IG51bGwsIC8vIOqyjOyLnOusvCDtlZjrgpjrp4xcclxuXHRpbWFnZVBhdGhzOiBbXSwgLy8g7J2066+47KeAIOqyveuhnOuTpOydtCDsoIDsnqXrkKhcclxuXHRoYXNNb3JlUG9zdHM6IHRydWUsIC8vIOuNlCDrp47snYAg6rKM7Iuc66y8IOqwgOyguOyYpOq4sFxyXG5cdGxpa2VQb3N0TG9hZGluZzogZmFsc2UsIC8vIOudvOydtO2BrCDroZzrk5zspJEg66Gc65SpXHJcblx0bGlrZVBvc3REb25lOiBmYWxzZSwgLy8g65287J207YGsIOyZhOujjO2WiOydhOuVjCB0cnVlIOuzgO2ZmFxyXG5cdGxpa2VQb3N0RXJyb3I6IG51bGwsXHJcblx0cmV0d2VldExvYWRpbmc6IGZhbHNlLCAvLyDrpqztirjsnJcg66Gc65Oc7KSRIOuhnOuUqVxyXG5cdHJldHdlZXREb25lOiBmYWxzZSwgLy8g66as7Yq47JyXIOyZhOujjOykkSDroZzrlKlcclxuXHRyZXR3ZWV0RXJyb3I6IG51bGwsXHJcblx0dW5saWtlUG9zdExvYWRpbmc6IGZhbHNlLCAvLyDslrjrnbzsnbTtgawg66Gc65OcIOykkSDroZzrlKlcclxuXHR1bmxpa2VQb3N0RG9uZTogZmFsc2UsIC8vIOyWuOudvOydtO2BrCDsmYTro4ztlojsnYTrlYwgdHJ1ZSDrs4DtmZhcclxuXHR1bmxpa2VQb3N0RXJyb3I6IG51bGwsXHJcblx0dXBsb2FkSW1hZ2VzTG9hZGluZzogZmFsc2UsIC8vIOydtOuvuOyngCDroZzrk5wg7KSRIOuhnOuUqVxyXG5cdHVwbG9hZEltYWdlc0RvbmU6IGZhbHNlLCAvLyDsnbTrr7jsp4Ag66Gc65OcIOyZhOujjO2WiOydhOuVjCB0cnVlIOuzgO2ZmFxyXG5cdHVwbG9hZEltYWdlc0Vycm9yOiBudWxsLFxyXG5cdGxvYWRQb3N0c0xvYWRpbmc6IGZhbHNlLCAvLyDtmZTrqbQg66Gc65Oc7KSRIOuhnOuUqVxyXG5cdGxvYWRQb3N0c0RvbmU6IGZhbHNlLCAvLyDtmZTrqbQg66Gc65OcIOyZhOujjOuQmOyXiOydhOuVjCB0cnVlIOuzgO2ZmFxyXG5cdGxvYWRQb3N0c0Vycm9yOiBudWxsLFxyXG5cdGxvYWRQb3N0TG9hZGluZzogZmFsc2UsIC8vIOqyjOyLnOq4gCDroZzrk5zspJEg66Gc65SpXHJcblx0bG9hZFBvc3REb25lOiBmYWxzZSwgLy8g6rKM7Iuc6riAIOuhnOuTnCDsmYTro4zrkJjsl4jsnYTrlYwgdHJ1ZSDrs4DtmZhcclxuXHRsb2FkUG9zdEVycm9yOiBudWxsLFxyXG5cdGFkZFBvc3RMb2FkaW5nOiBmYWxzZSwgLy8g6rKM7Iuc66y8IOuTseuhneykkSDroZzrlKlcclxuXHRhZGRQb3N0RG9uZTogZmFsc2UsIC8vIOqyjOyLnOusvCDstpTqsIDqsIAg7JmE66OM65CY7JeI7J2E65WMIHRydWUg67OA7ZmYXHJcblx0YWRkUG9zdEVycm9yOiBudWxsLFxyXG5cdHJlbW92ZVBvc3RMb2FkaW5nOiBmYWxzZSwgLy8g6rKM7Iuc66y8IOyCreygnOykkSDroZzrlKlcclxuXHRyZW1vdmVQb3N0RG9uZTogZmFsc2UsIC8vIOqyjOyLnOusvCDsgq3soJzqsIAg7JmE66OM65CY7JeI7J2E65WMIHRydWUg67OA7ZmYXHJcblx0cmVtb3ZlUG9zdEVycm9yOiBudWxsLFxyXG5cdGFkZENvbW1lbnRMb2FkaW5nOiBmYWxzZSwgLy8g64yT6riAIOuTseuhneykkSDroZzrlKlcclxuXHRhZGRDb21tZW50RG9uZTogZmFsc2UsIC8vIOqyjOyLnOusvCDstpTqsIDqsIAg7JmE66OM65CY7JeI7J2E65WMIHRydWUg67OA7ZmYXHJcblx0YWRkQ29tbWVudEVycm9yOiBudWxsLFxyXG59XHJcbi8vIOydtOu2gOu2hOydhCDsgqzsmqntlbTshJwg66y07ZWcIOyKpO2BrOuhpOungeydhCDrp4zrk6TqsoMgZnJvbnRcclxuLypleHBvcnQgY29uc3QgZ2VuZXJhdGVEdW1teVBvc3QgPSAobnVtYmVyKSA9PiBBcnJheShudW1iZXIpLmZpbGwoKS5tYXAoKCkgPT4gKHtcclxuXHRpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG5cdFVzZXI6IHtcclxuXHRcdGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcblx0XHRuaWNrbmFtZTogZmFrZXIubmFtZS5maW5kTmFtZSgpLFxyXG5cdH0sXHJcblx0Y29udGVudDogZmFrZXIubG9yZW0ucGFyYWdyYXBoKCksXHJcblx0SW1hZ2VzOiBbe1xyXG5cdFx0c3JjOiBmYWtlci5pbWFnZS5pbWFnZSgpLFxyXG5cdH1dLFxyXG5cdENvbW1lbnRzOiBbe1xyXG5cdFx0VXNlcjoge1xyXG5cdFx0XHRpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG5cdFx0XHRuaWNrbmFtZTogZmFrZXIubmFtZS5maW5kTmFtZSgpLFxyXG5cdFx0fSxcclxuXHRcdGNvbnRlbnQ6IGZha2VyLmxvcmVtLnNlbnRlbmNlKCksXHJcblx0fV0sXHJcbn0pKSovXHJcblxyXG4vL+qyjOyLnOq4gCDslaHshZhcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfUkVRVUVTVCA9ICcgTE9BRF9QT1NUU19SRVFVRVNUJzsgLy8g7ZmU66m07J2EIOuhnOuUqe2VmOuptCDrsJTroZwgTE9BRF9QT1NUU19SRVFVRVNUIOulvCDtmLjstpztlbTspITqsoNcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfU1VDQ0VTUyA9ICcgTE9BRF9QT1NUU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfRkFJTFVSRSA9ICcgTE9BRF9QT1NUU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RfUkVRVUVTVCA9ICdMT0FEX1BPU1RfUkVRVUVTVCcgLy8g6rKM7Iuc66y87J2EIOuhnOuUqe2VmOuptCDrsJTroZwgTE9BRF9QT1NUX1JFUVVFU1Qg66W8IO2YuOy2nO2VtOykhOqyg1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUX1NVQ0NFU1MgPSAnTE9BRF9QT1NUX1NVQ0NFU1MnXHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RfRkFJTFVSRSA9ICdMT0FEX1BPU1RfRkFJTFVSRSdcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9SRVFVRVNUID0gJ0FERF9QT1NUX1JFUVVFU1QnOyAvLyDrs4DsiJjroZwg65Sw66GcIOunjOuTpOyWtOykmOyVvCDspJHqsITsl5Ag7Jik7YOA6rCA64KY64qUIOydvOydhCDrp4nsnYQg7IiYIOyeiOuLpFxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfU1VDQ0VTUyA9ICdBRERfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX0ZBSUxVUkUgPSAnQUREX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX1JFUVVFU1QgPSAnTElLRV9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX1NVQ0NFU1MgPSAnTElLRV9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX0ZBSUxVUkUgPSAnTElLRV9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVQTE9BRF9JTUFHRVNfUkVRVUVTVCA9ICdVUExPQURfSU1BR0VTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgVVBMT0FEX0lNQUdFU19TVUNDRVNTID0gJ1VQTE9BRF9JTUFHRVNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBVUExPQURfSU1BR0VTX0ZBSUxVUkUgPSAnVVBMT0FEX0lNQUdFU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9SRVFVRVNUID0gJ1VOTElLRV9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgVU5MSUtFX1BPU1RfU1VDQ0VTUyA9ICdVTkxJS0VfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFVOTElLRV9QT1NUX0ZBSUxVUkUgPSAnVU5MSUtFX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfUkVRVUVTVCA9ICdSRU1PVkVfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1NVQ0NFU1MgPSAnUkVNT1ZFX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9GQUlMVVJFID0gJ1JFTU9WRV9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1JFUVVFU1QgPSAnQUREX0NPTU1FTlRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9TVUNDRVNTID0gJ0FERF9DT01NRU5UX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfRkFJTFVSRSA9ICdBRERfQ09NTUVOVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBSRVRXRUVUX1JFUVVFU1QgPSAnUkVUV0VFVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFJFVFdFRVRfU1VDQ0VTUyA9ICdSRVRXRUVUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgUkVUV0VFVF9GQUlMVVJFID0gJ1JFVFdFRVRfRkFJTFVSRSdcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfSU1BR0UgPSAnUkVNT1ZFX0lNQUdFJzsgLy8g64+Z6riwIOyYteyFmOydgCDtlZjrgpjrp4wg66eM65Ok7Ja064+EIOuQnOuLpFxyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFBvc3QgPSAoZGF0YSkgPT4gKHtcclxuXHR0eXBlOiBBRERfUE9TVF9SRVFVRVNULFxyXG5cdGRhdGEsXHJcbn0pXHJcblxyXG4vLyBkeW5hbWljIGFjdGlvbiBjcmVhdGVcclxuZXhwb3J0IGNvbnN0IGFkZENvbW1lbnQgPSAoZGF0YSkgPT4gKHtcclxuXHR0eXBlOiBBRERfQ09NTUVOVF9SRVFVRVNULFxyXG5cdGRhdGEsXHJcbn0pXHJcblxyXG4vKiBmcm9udCBkdW1teVxyXG5jb25zdCBkdW1teVBvc3QgPSAoZGF0YSkgPT4gKHtcclxuXHRpZDogZGF0YS5pZCxcclxuXHRjb250ZW50OiBkYXRhLmNvbnRlbnQsXHJcblx0VXNlcjoge1xyXG5cdFx0aWQ6IDEsXHJcblx0XHRuaWNrbmFtZTogJ+u5hO2DgOuvvCcsXHJcblx0fSxcclxuXHRJbWFnZXM6IFtdLFxyXG5cdENvbW1lbnRzOiBbXSxcclxufSlcclxuKi9cclxuXHJcbi8qIGZyb250IGR1bW15XHJcbmNvbnN0IGR1bW15Q29tbWVudCA9IChkYXRhKSA9PiAoe1xyXG5cdGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcblx0Y29udGVudDogZGF0YSxcclxuXHRVc2VyOiB7XHJcblx0XHRpZDogMSxcclxuXHRcdG5pY2tuYW1lOiAn67mE7YOA66+8JyxcclxuXHR9XHJcbn0pKi9cclxuLy8g7J207KCEIOyDge2DnOulvCDslaHshZjsnYQg7Ya17ZW0IOuLpOydjCDsg4Htg5zroZwg66eM65Ok7Ja064K064qUIO2VqOyImFxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xyXG5cdC8vIGltbWVyIOyCrOyaqeyLnCBzdGF0ZSDrpbwgZHJhZnQg66GcIOq1kOyytO2VtOyjvOupsCwgc3dpdGNoIOusuOyduOqxuCDsnbjsi53tlZjqs6AgYnJlYWsg66W8IOq5jOuoueyngOunkOyekFxyXG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgTE9BRF9QT1NUX1JFUVVFU1Q6XHJcblx0XHRcdGRyYWZ0LmxvYWRQb3N0TG9hZGluZyA9IHRydWVcclxuXHRcdFx0ZHJhZnQubG9hZFBvc3REb25lID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQubG9hZFBvc3RFcnJvciA9IG51bGxcclxuXHRcdFx0Y29uc29sZS5sb2coJ3JlZHVjZXIgTE9BRF9QT1NUX1JFUVVFU1Qg7JqU7LKtOjogJylcclxuXHRcdFx0YnJlYWtcclxuXHRcdGNhc2UgTE9BRF9QT1NUX1NVQ0NFU1M6XHJcblx0XHRcdGRyYWZ0LnNpbmdsZVBvc3QgPSBhY3Rpb24uZGF0YSAvLyDtlZjrgpjsnZgg6rKM7Iuc66y866eMIOuhnOuTnFxyXG5cdFx0XHRkcmFmdC5sb2FkUG9zdExvYWRpbmcgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC5sb2FkUG9zdERvbmUgPSB0cnVlXHJcblx0XHRcdGNvbnNvbGUubG9nKCdyZWR1Y2VyIExPQURfUE9TVF9TVUNDRVNTIOyEseqztTo6ICcpXHJcblx0XHRcdGJyZWFrXHJcblx0XHRjYXNlIExPQURfUE9TVF9GQUlMVVJFOlxyXG5cdFx0XHRkcmFmdC5sb2FkUG9zdExvYWRpbmcgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC5sb2FkUG9zdEVycm9yID0gYWN0aW9uLmVycm9yXHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoJ3JlZHVjZXIgTE9BRF9QT1NUX0ZBSUxVUkUg7Iuk7YyoOjogJywgYWN0aW9uLmVycm9yKVxyXG5cdFx0Y2FzZSBSRU1PVkVfSU1BR0U6XHJcblx0XHRcdGRyYWZ0LmltYWdlUGF0aHMgPSBkcmFmdC5pbWFnZVBhdGhzLmZpbHRlcigodiwgaSkgPT4gaSAhPT0gYWN0aW9uLmRhdGEpXHJcblx0XHRcdGNvbnNvbGUubG9nKCdyZWR1Y2VyIFJFTU9WRV9JTUFHRSDshLHqs7UnKVxyXG5cdFx0XHRicmVha1xyXG5cdFx0Y2FzZSBSRVRXRUVUX1JFUVVFU1Q6XHJcblx0XHRcdGRyYWZ0LnJldHdlZXRMb2FkaW5nID0gdHJ1ZVxyXG5cdFx0XHRkcmFmdC5yZXR3ZWV0RG9uZSA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LnJldHdlZXRFcnJvciA9IG51bGxcclxuXHRcdFx0Y29uc29sZS5sb2coJ3JlZHVjZXIgUkVUV0VFVF9SRVFVRVNUIOyalOyyrTo6JylcclxuXHRcdFx0YnJlYWtcclxuXHRcdGNhc2UgUkVUV0VFVF9TVUNDRVNTOiB7XHJcblx0XHRcdGRyYWZ0LnJldHdlZXRMb2FkaW5nID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQucmV0d2VldERvbmUgPSB0cnVlXHJcblx0XHRcdGRyYWZ0Lm1haW5Qb3N0cy51bnNoaWZ0KGFjdGlvbi5kYXRhKSAvLyDrpqztirjsnJfrkJwg6rKM7Iuc6riAIOuplOyduO2PrOyKpO2KuOyXkCDstpTqsIBcclxuXHRcdFx0Y29uc29sZS5sb2coJ3JlZHVjZXIgUkVUV0VFVF9TVUNDRVNTIOyEseqztTo6JylcclxuXHRcdFx0YnJlYWtcclxuXHRcdH1cclxuXHRcdGNhc2UgUkVUV0VFVF9GQUlMVVJFOlxyXG5cdFx0XHRkcmFmdC5yZXR3ZWV0TG9hZGluZyA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LnJldHdlZXRFcnJvciA9IGFjdGlvbi5lcnJvclxyXG5cdFx0XHRjb25zb2xlLmVycm9yKCdyZWR1Y2VyIFJFVFdFRVRfRkFJTFVSRSDsi6TtjKg6OicsIGFjdGlvbi5kYXRhKVxyXG5cdFx0XHRicmVha1xyXG5cdFx0Y2FzZSBMSUtFX1BPU1RfUkVRVUVTVDpcclxuXHRcdFx0ZHJhZnQubGlrZVBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuXHRcdFx0ZHJhZnQubGlrZVBvc3REb25lID0gZmFsc2U7XHJcblx0XHRcdGRyYWZ0Lmxpa2VQb3N0RXJyb3IgPSBudWxsO1xyXG5cdFx0XHRjb25zb2xlLmxvZygncmVkdWNlciBMSUtFX1BPU1RfUkVRVUVTVCDsmpTssq06OicpXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBMSUtFX1BPU1RfU1VDQ0VTUzoge1xyXG5cdFx0XHQvLyBtYWluUG9zdHMg7JeQ7IScIGlkIOqwgCDslaHshZjrjbDsnbTthLDtj6zsiqTtirjslYTsnbTrlJTrpbwg7LC+7JWE7IScXHJcblx0XHRcdGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEuUG9zdElkKTtcclxuXHRcdFx0Ly8g6rKM7Iuc6riAIOyii+yVhOyalCDriITrpbgg7IKs656M65Ok7JeQ6rKMIOyCrOyaqeyekCDslYTsnbTrlJTrpbwg64Sj7Ja07KSA64ukXHJcblx0XHRcdHBvc3QuTGlrZXJzLnB1c2goe2lkOiBhY3Rpb24uZGF0YS5Vc2VySWR9KTtcclxuXHRcdFx0ZHJhZnQubGlrZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcblx0XHRcdGRyYWZ0Lmxpa2VQb3N0RG9uZSA9IHRydWU7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdyZWR1Y2VyIExJS0VfUE9TVF9TVUNDRVNTIOyEseqztTo6JylcclxuXHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblx0XHRjYXNlIExJS0VfUE9TVF9GQUlMVVJFOlxyXG5cdFx0XHRkcmFmdC5saWtlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuXHRcdFx0ZHJhZnQubGlrZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuXHRcdFx0Y29uc29sZS5lcnJvcigncmVkdWNlciBMSUtFX1BPU1RfRkFJTFVSRSDsi6TtjKg6OjonLCBhY3Rpb24uZXJyb3IpXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBVTkxJS0VfUE9TVF9SRVFVRVNUOlxyXG5cdFx0XHRkcmFmdC51bmxpa2VQb3N0TG9hZGluZyA9IHRydWU7XHJcblx0XHRcdGRyYWZ0LnVubGlrZVBvc3REb25lID0gZmFsc2U7XHJcblx0XHRcdGRyYWZ0LnVubGlrZVBvc3RFcnJvciA9IG51bGw7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdyZWR1Y2VyIFVOTElLRV9QT1NUX1JFUVVFU1Qg7JqU7LKtOjonKVxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgVU5MSUtFX1BPU1RfU1VDQ0VTUzoge1xyXG5cdFx0XHRjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLlBvc3RJZCk7XHJcblx0XHRcdHBvc3QuTGlrZXJzID0gcG9zdC5MaWtlcnMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YS5Vc2VySWQpO1xyXG5cdFx0XHRkcmFmdC51bmxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG5cdFx0XHRkcmFmdC51bmxpa2VQb3N0RG9uZSA9IHRydWU7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdyZWR1Y2VyIFVOTElLRV9QT1NUX1NVQ0NFU1Mg7ISx6rO1OjonKVxyXG5cdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHRcdGNhc2UgVU5MSUtFX1BPU1RfRkFJTFVSRTpcclxuXHRcdFx0ZHJhZnQudW5saWtlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuXHRcdFx0ZHJhZnQudW5saWtlUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG5cdFx0XHRjb25zb2xlLmVycm9yKCdyZWR1Y2VyIFVOTElLRV9QT1NUX0ZBSUxVUkUg7Iuk7YyoOjo6JywgYWN0aW9uLmVycm9yKVxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgVVBMT0FEX0lNQUdFU19SRVFVRVNUOlxyXG5cdFx0XHRkcmFmdC51cGxvYWRJbWFnZXNMb2FkaW5nID0gdHJ1ZVxyXG5cdFx0XHRkcmFmdC51cGxvYWRJbWFnZXNEb25lID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQudXBsb2FkSW1hZ2VzRXJyb3IgPSBudWxsXHJcblx0XHRcdGNvbnNvbGUubG9nKCdyZWR1Y2VyIFVQTE9BRF9JTUFHRVNfUkVRVUVTVCDsmpTssq06OicpXHJcblx0XHRcdGJyZWFrXHJcblx0XHRjYXNlIFVQTE9BRF9JTUFHRVNfU1VDQ0VTUzpcclxuXHRcdFx0ZHJhZnQuaW1hZ2VQYXRocyA9IGFjdGlvbi5kYXRhXHJcblx0XHRcdGRyYWZ0LnVwbG9hZEltYWdlc0xvYWRpbmcgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC51cGxvYWRJbWFnZXNEb25lID0gdHJ1ZVxyXG5cdFx0XHRjb25zb2xlLmxvZygncmVkdWNlciBVUExPQURfSU1BR0VTX1NVQ0NFU1Mg7ISx6rO1OjonKVxyXG5cdFx0XHRicmVha1xyXG5cdFx0Y2FzZSBVUExPQURfSU1BR0VTX0ZBSUxVUkU6XHJcblx0XHRcdGRyYWZ0LnVwbG9hZEltYWdlc0xvYWRpbmcgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC51cGxvYWRJbWFnZXNFcnJvciA9IGFjdGlvbi5lcnJvclxyXG5cdFx0XHRjb25zb2xlLmVycm9yKCdyZWR1Y2VyIFVQTE9BRF9JTUFHRVNfRkFJTFVSRSDsi6TtjKg6OjonLCBhY3Rpb24uZXJyb3IpXHJcblx0XHRcdGJyZWFrXHJcblx0XHRjYXNlIExPQURfUE9TVFNfUkVRVUVTVDpcclxuXHRcdFx0ZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IHRydWU7XHJcblx0XHRcdGRyYWZ0LmxvYWRQb3N0c0RvbmUgPSBmYWxzZTtcclxuXHRcdFx0ZHJhZnQubG9hZFBvc3RzRXJyb3IgPSBudWxsO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgTE9BRF9QT1NUU19TVUNDRVNTOlxyXG5cdFx0XHRkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQubG9hZFBvc3RzRG9uZSA9IHRydWVcclxuXHRcdFx0Ly8gYWN0aW9uLmRhdGEg7JeQIGR1bW15IGRhdGEg6rCAIOuTpOyWtOyeiOydhOqyg+ydtOupsCwg6riw7KG0642w7J207YSw7JmAIO2VqeyzkOyjvOuKlOqyg1xyXG5cdFx0XHQvLyBjb25jYXQg7J2EIO2VoOuVkCDtla3sg4Eg7JWe7JeQIOuMgOyeheydhCDtlbTspJjslbztlZzri6Qg6re4656Y7JW8IO2VqeyzkOynkFxyXG5cdFx0XHQvL2RyYWZ0Lm1haW5Qb3N0cyA9IGFjdGlvbi5kYXRhLmNvbmNhdChkcmFmdC5tYWluUG9zdHMpIGZyb250XHJcblx0XHRcdGRyYWZ0Lm1haW5Qb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5jb25jYXQoYWN0aW9uLmRhdGEpXHJcblx0XHRcdC8vIOqyjOyLnOusvOydhCA1MCDqsJzquYzsp4Drp4wg6rCA7KC47Jik6rKg64ukXHJcblx0XHRcdC8vZHJhZnQuaGFzTW9yZVBvc3RzID0gZHJhZnQubWFpblBvc3RzLmxlbmd0aCA8IDUwIGZyb250XHJcblx0XHRcdGRyYWZ0Lmhhc01vcmVQb3N0cyA9IGFjdGlvbi5kYXRhLmxlbmd0aCA9PT0gMTBcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIExPQURfUE9TVFNfRkFJTFVSRTpcclxuXHRcdFx0ZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LmxvYWRQb3N0c0Vycm9yID0gYWN0aW9uLmVycm9yXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBBRERfUE9TVF9SRVFVRVNUOlxyXG5cdFx0XHRkcmFmdC5hZGRQb3N0TG9hZGluZyA9IHRydWU7XHJcblx0XHRcdGRyYWZ0LmFkZFBvc3REb25lID0gZmFsc2U7XHJcblx0XHRcdGRyYWZ0LmFkZFBvc3RFcnJvciA9IG51bGw7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBBRERfUE9TVF9TVUNDRVNTOlxyXG5cdFx0XHQvLyBkcmFmdC5tYWluUG9zdHMudW5zaGlmdChkdW1teVBvc3QoYWN0aW9uLmRhdGEpKSAvLyBmcm9udCBkdW1teVxyXG5cdFx0XHRkcmFmdC5tYWluUG9zdHMudW5zaGlmdChhY3Rpb24uZGF0YSkgLy8gYmFjayDsi6TsoJwg642w7J207YSwXHJcblx0XHRcdGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQuYWRkUG9zdERvbmUgPSB0cnVlXHJcblx0XHRcdGRyYWZ0LmltYWdlUGF0aHMgPSBbXSAvLyBhZGQgcG9zdCDshLHqs7Ug7IucLCDsgqzsmqnsnpAg6rKM7Iuc6riAIOyekeyEseyXkCDsnbTrr7jsp4Ag7LSI6riw7ZmUXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBBRERfUE9TVF9GQUlMVVJFOlxyXG5cdFx0XHRkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LmFkZFBvc3RFcnJvciA9IGFjdGlvbi5lcnJvclxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgUkVNT1ZFX1BPU1RfUkVRVUVTVDpcclxuXHRcdFx0ZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSB0cnVlXHJcblx0XHRcdGRyYWZ0LnJlbW92ZVBvc3REb25lID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQucmVtb3ZlUG9zdEVycm9yID0gbnVsbFxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgUkVNT1ZFX1BPU1RfU1VDQ0VTUzpcclxuXHRcdFx0ZHJhZnQubWFpblBvc3RzID0gZHJhZnQubWFpblBvc3RzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEuUG9zdElkKSAvLyDsp4DsmrjrlZAg67O07Ya1IGZpbHRlciDqsIAg7Y647ZWY64ukXHJcblx0XHRcdGRyYWZ0LlBvc3RMb2FkaW5nID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQuUG9zdERvbmUgPSB0cnVlXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBSRU1PVkVfUE9TVF9GQUlMVVJFOlxyXG5cdFx0XHRkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LnJlbW92ZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvclxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgQUREX0NPTU1FTlRfUkVRVUVTVDpcclxuXHRcdFx0ZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSB0cnVlXHJcblx0XHRcdGRyYWZ0LmFkZENvbW1lbnREb25lID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQuYWRkQ29tbWVudEVycm9yID0gbnVsbFxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgQUREX0NPTU1FTlRfU1VDQ0VTUzoge1xyXG5cdFx0XHQvL2FjdGlvbi5kYXRhLmNvbnRlbnQsIHBvc3RJZCwgdXNlcklkXHJcblx0XHRcdC8vY29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5wb3N0SWQpIC8vIOqyjOyLnOq4gCDrpqzsiqTtirjspJHsl5AgcG9zdCDssL7quLAgZnJvbnRcclxuXHRcdFx0Y29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5Qb3N0SWQpIC8vIOqyjOyLnOq4gCDrpqzsiqTtirjspJHsl5AgcG9zdCDssL7quLAgYmFrXHJcblx0XHRcdC8vcG9zdC5Db21tZW50cy51bnNoaWZ0KGR1bW15Q29tbWVudChhY3Rpb24uZGF0YS5jb250ZW50KSkgLy8g7LC+7J2AIHBvc3Qg7JeQIOunqCDslZ7sl5Ag6rCA7KecIOuMk+q4gCDtlZjrgpgg64Sj7Ja07KSMIEZST05UXHJcblx0XHRcdHBvc3QuQ29tbWVudHMudW5zaGlmdChhY3Rpb24uZGF0YSkgLy8g7LC+7J2AIHBvc3Qg7JeQIOyLpOygnCDrjbDsnbTthLAgYmFja1xyXG5cdFx0XHRkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LmFkZENvbW1lbnREb25lID0gdHJ1ZVxyXG5cdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHRcdGNhc2UgQUREX0NPTU1FTlRfRkFJTFVSRTpcclxuXHRcdFx0ZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC5hZGRDb21tZW50RXJyb3IgPSBhY3Rpb24uZXJyb3JcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRicmVhaztcclxuXHR9XHJcbn0pXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXJcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==