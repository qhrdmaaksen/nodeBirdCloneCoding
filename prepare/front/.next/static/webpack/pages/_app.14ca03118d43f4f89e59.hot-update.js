webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAILURE, LOAD_MY_INFO_REQUEST, LOAD_MY_INFO_SUCCESS, LOAD_MY_INFO_FAILURE, REMOVE_FOLLOWER_REQUEST, REMOVE_FOLLOWER_SUCCESS, REMOVE_FOLLOWER_FAILURE, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, CHANGE_NICKNAME_REQUEST, CHANGE_NICKNAME_SUCCESS, CHANGE_NICKNAME_FAILURE, FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE, LOAD_FOLLOWERS_REQUEST, LOAD_FOLLOWERS_SUCCESS, LOAD_FOLLOWERS_FAILURE, LOAD_FOLLOWINGS_REQUEST, LOAD_FOLLOWINGS_SUCCESS, LOAD_FOLLOWINGS_FAILURE, ADD_POST_TO_ME, REMOVE_POST_OF_ME, loginRequestAction, logoutRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_REQUEST", function() { return LOAD_USER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_SUCCESS", function() { return LOAD_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_FAILURE", function() { return LOAD_USER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_REQUEST", function() { return LOAD_MY_INFO_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_SUCCESS", function() { return LOAD_MY_INFO_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_FAILURE", function() { return LOAD_MY_INFO_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FOLLOWER_REQUEST", function() { return REMOVE_FOLLOWER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FOLLOWER_SUCCESS", function() { return REMOVE_FOLLOWER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FOLLOWER_FAILURE", function() { return REMOVE_FOLLOWER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_REQUEST", function() { return LOG_IN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_SUCCESS", function() { return LOG_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_FAILURE", function() { return LOG_IN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_REQUEST", function() { return LOG_OUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_SUCCESS", function() { return LOG_OUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_FAILURE", function() { return LOG_OUT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_REQUEST", function() { return SIGN_UP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_SUCCESS", function() { return SIGN_UP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_FAILURE", function() { return SIGN_UP_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_REQUEST", function() { return CHANGE_NICKNAME_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_SUCCESS", function() { return CHANGE_NICKNAME_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_FAILURE", function() { return CHANGE_NICKNAME_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_REQUEST", function() { return FOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_SUCCESS", function() { return FOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_FAILURE", function() { return FOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_REQUEST", function() { return UNFOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_SUCCESS", function() { return UNFOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_FAILURE", function() { return UNFOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWERS_REQUEST", function() { return LOAD_FOLLOWERS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWERS_SUCCESS", function() { return LOAD_FOLLOWERS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWERS_FAILURE", function() { return LOAD_FOLLOWERS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWINGS_REQUEST", function() { return LOAD_FOLLOWINGS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWINGS_SUCCESS", function() { return LOAD_FOLLOWINGS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWINGS_FAILURE", function() { return LOAD_FOLLOWINGS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_TO_ME", function() { return ADD_POST_TO_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_OF_ME", function() { return REMOVE_POST_OF_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginRequestAction", function() { return loginRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutRequestAction", function() { return logoutRequestAction; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");

var initialState = {
  loadUserLoading: false,
  // 상대 정보 보기 시도중일땐 로딩중 띄울거임
  loadUserDone: false,
  // 상대 정보 보기 됨
  loadUserError: null,
  // 상대 정보 보기중일때 에러 없앰
  loadMyInfoLoading: false,
  // 유저 정보 보기 시도중일땐 로딩중 띄울거임
  loadMyInfoDone: false,
  // 유저 정보 보기 됨
  loadMyInfoError: null,
  // 유저 정보 보기중일때 에러 없앰
  removeFollowerLoading: false,
  // 팔로워 유저 삭제 시도중일땐 로딩중 띄울거임
  removeFollowerDone: false,
  // 팔로워 유저 삭제 됨
  removeFollowerError: null,
  // 팔로워 유저 삭제 중일때 에러 없앰
  followLoading: false,
  // 팔로우 시도중일땐 로딩중 띄울거임
  followDone: false,
  // 팔로우 됨
  followError: null,
  // 팔로우중일때 에러 없앰
  unfollowLoading: false,
  // 언팔로우 시도중일땐 로딩중 띄울거임
  unfollowDone: false,
  // 언팔로우 됨
  unfollowError: null,
  // 언팔로우중일때 에러 없앰
  loadFollowersLoading: false,
  // 팔로워 시도중일땐 로딩중 띄울거임
  loadFollowersDone: false,
  // 팔로워 됨
  loadFollowersError: null,
  // 팔로워일때 에러 없앰
  loadFollowingsLoading: false,
  // 팔로윙 시도중일땐 로딩중 띄울거임
  loadFollowingsDone: false,
  // 팔로윙 됨
  loadFollowingsError: null,
  // 팔로윙 중일때 에러 없앰
  logInLoading: false,
  // 로그인 시도중일땐 로딩중 띄울거임
  logInDone: false,
  // 로그인 됨
  logInError: null,
  // 로딩중일때 에러 없앰
  logOutLoading: false,
  // 로그아웃 시도중
  logOutDone: false,
  // 로그아웃 완료
  logOutError: null,
  signUpLoading: false,
  // 회원가입 로딩중
  signUpDone: false,
  // 회원 가입 완료
  signUpError: null,
  changeNicknameLoading: false,
  // 닉네임 변경 로딩중
  changeNicknameDone: false,
  // 닉네임 변경 완료
  changeNicknameError: null,
  me: null,
  signUpData: {},
  // 회원 가입 데이터
  loginData: {},
  userInfo: null
}; // 로그인 액션 생성기 thunk
// export const loginAction = (data) => { // 함수를 리턴하는 비동기 액션 크리에이터가 추가
// 	return (dispatch, getState) => {
// 		const state = getState()
// 		dispatch(loginRequestAction())
// 		axios.post('/api/login')
// 				.then((res) => {
// 					dispatch(loginSuccessAction(res.data))
// 				})
// 				.catch((error) => {
// 					dispatch(loginFailureAction(error))
// 				})
// 	}
// }
// actions

var LOAD_USER_REQUEST = 'LOAD_USER_REQUEST';
var LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
var LOAD_USER_FAILURE = 'LOAD_USER_FAILURE';
var LOAD_MY_INFO_REQUEST = 'LOAD_MY_INFO_REQUEST';
var LOAD_MY_INFO_SUCCESS = 'LOAD_MY_INFO_SUCCESS';
var LOAD_MY_INFO_FAILURE = 'LOAD_MY_INFO_FAILURE';
var REMOVE_FOLLOWER_REQUEST = 'REMOVE_FOLLOWER_REQUEST';
var REMOVE_FOLLOWER_SUCCESS = 'REMOVE_FOLLOWER_SUCCESS';
var REMOVE_FOLLOWER_FAILURE = 'REMOVE_FOLLOWER_FAILURE';
var LOG_IN_REQUEST = 'LOG_IN_REQUEST';
var LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
var LOG_IN_FAILURE = 'LOG_IN_FAILURE';
var LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
var LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
var LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';
var SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
var SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
var SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
var CHANGE_NICKNAME_REQUEST = 'CHANGE_NICKNAME_REQUEST';
var CHANGE_NICKNAME_SUCCESS = 'CHANGE_NICKNAME_SUCCESS';
var CHANGE_NICKNAME_FAILURE = 'CHANGE_NICKNAME_FAILURE';
var FOLLOW_REQUEST = 'FOLLOW_REQUEST';
var FOLLOW_SUCCESS = 'FOLLOW_SUCCESS';
var FOLLOW_FAILURE = 'FOLLOW_FAILURE';
var UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST';
var UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS';
var UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE';
var LOAD_FOLLOWERS_REQUEST = 'LOAD_FOLLOWERS_REQUEST';
var LOAD_FOLLOWERS_SUCCESS = 'LOAD_FOLLOWERS_SUCCESS';
var LOAD_FOLLOWERS_FAILURE = 'LOAD_FOLLOWERS_FAILURE';
var LOAD_FOLLOWINGS_REQUEST = 'LOAD_FOLLOWINGS_REQUEST';
var LOAD_FOLLOWINGS_SUCCESS = 'LOAD_FOLLOWINGS_SUCCESS';
var LOAD_FOLLOWINGS_FAILURE = 'LOAD_FOLLOWINGS_FAILURE'; // 유저 리듀서의 상태를 바꿀수있는 액션 생성

var ADD_POST_TO_ME = 'ADD_POST_TO_ME';
var REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME';
/* front
const dummyUser = (data) => ({
	...data,
	nickname: '비타민',
	id: 1,
	Posts: [{id: 1}],
	Followings: [{nickname: '외노'}, {nickname: '음메'}, {nickname: '썽'}, {nickname: '오댕'}, {nickname: '만뽀'}],
	Followers: [{nickname: '까매'}, {nickname: '만두'}, {nickname: '보챙'}, {nickname: '뒷가'}, {nickname: '야덩'}],
})*/

var loginRequestAction = function loginRequestAction(data) {
  return {
    type: LOG_IN_REQUEST,
    data: data
  };
}; // 로그아웃 액션 생성기 thunk
// export const logoutAction = (data) => {
// 	return (dispatch) => {
// 		axios.post('/api/logout')
// 				.then(() => {
// 					dispatch(logoutSuccessAction())
// 				})
// 				.catch(() => {
// 					dispatch(logoutFailureAction())
// 				})
// 	}
// }

var logoutRequestAction = function logoutRequestAction() {
  return {
    type: LOG_OUT_REQUEST
  };
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return Object(immer__WEBPACK_IMPORTED_MODULE_0__["default"])(state, function (draft) {
    switch (action.type) {
      case LOAD_USER_REQUEST:
        // store 에서 보낸 state 가 만들어짐, state 자체가 user.js 의 state 임
        draft.loadUserLoading = true;
        draft.loadUserDone = false;
        draft.loadUserError = null; // 로딩 중일때는 에러 없앰

        console.log('reducer myInfo 요청');
        break;

      case LOAD_USER_SUCCESS:
        draft.userInfo = action.data; // back 상대 정보가 들어있음

        draft.loadUserLoading = false;
        draft.loadUserDone = true; //draft.me = dummyUser(action.data)

        console.log('reducer myInfo 성공');
        break;

      case LOAD_USER_FAILURE:
        console.error('loadUserFail 실패:: ' + action.error);
        draft.loadUserLoading = false;
        draft.loadUserError = action.error;
        break;

      case LOAD_MY_INFO_REQUEST:
        // store 에서 보낸 state 가 만들어짐, state 자체가 user.js 의 state 임
        draft.loadMyInfoLoading = true;
        draft.loadMyInfoDone = false;
        draft.loadMyInfoError = null; // 로딩 중일때는 에러 없앰

        console.log('reducer myInfo 요청');
        break;

      case LOAD_MY_INFO_SUCCESS:
        draft.me = action.data; // back 내 정보가 들어있음

        draft.loadMyInfoLoading = false;
        draft.loadMyInfoDone = true; //draft.me = dummyUser(action.data)

        console.log('reducer myInfo 성공');
        break;

      case LOAD_MY_INFO_FAILURE:
        console.error('loadMyInfoFail 실패:: ' + action.error);
        draft.loadMyInfoLoading = false;
        draft.loadMyInfoError = action.error;
        break;

      case REMOVE_FOLLOWER_REQUEST:
        draft.removeFollowerLoading = true;
        draft.removeFollowerDone = false;
        draft.removeFollowerError = null;
        console.log('reducer removeFollower 요청');
        break;

      case REMOVE_FOLLOWER_SUCCESS:
        // 나의 팔로워 제거
        draft.me.Followers = draft.me.Followers.filter(function (v) {
          return v.id !== action.data.UserId;
        });
        draft.removeFollowerLoading = false;
        draft.removeFollowerDone = true;
        console.log('reducer removeFollower 성공');
        break;

      case REMOVE_FOLLOWER_FAILURE:
        console.error('removeFollowerFail 실패:: ' + action.error);
        draft.removeFollowerLoading = false;
        draft.removeFollowerError = action.error;

      case FOLLOW_REQUEST:
        // store 에서 보낸 state 가 만들어짐, state 자체가 user.js 의 state 임
        draft.followLoading = true;
        draft.followError = null; // 로딩 중일때는 에러 없앰

        draft.followDone = false;
        console.log('reducer FOLLOW_REQUEST 요청');
        break;

      case FOLLOW_SUCCESS:
        draft.followLoading = false;
        draft.followDone = true; //draft.me = dummyUser(action.data)

        draft.me.Followings.push({
          id: action.data.UserId
        });
        console.log('reducer FOLLOW_SUCCESS 성공');
        break;

      case FOLLOW_FAILURE:
        draft.followLoading = false;
        draft.followError = action.error;
        console.error('reducer FOLLOW_FAILURE 실패::', action.error);
        break;

      case UNFOLLOW_REQUEST:
        // store 에서 보낸 state 가 만들어짐, state 자체가 user.js 의 state 임
        draft.unfollowLoading = true;
        draft.unfollowError = null; // 로딩 중일때는 에러 없앰

        draft.unfollowDone = false;
        console.log('reducer unfollow 요청');
        break;

      case UNFOLLOW_SUCCESS:
        draft.unfollowLoading = false;
        draft.unfollowDone = true; //draft.me = dummyUser(action.data)
        // 언팔로우 한 사람만 빠지게

        draft.me.Followings = draft.me.Followings.filter(function (v) {
          return v.id !== action.data.UserId;
        });
        console.log('reducer unfollow 성공');
        break;

      case UNFOLLOW_FAILURE:
        draft.unfollowLoading = false;
        draft.unfollowError = action.error;
        console.error('reducer unfollow 실패::', action.error);
        break;

      case LOG_IN_REQUEST:
        draft.logInLoading = true;
        draft.logInError = null;
        draft.logInDone = false;
        console.log('reducer login 요청');
        break;

      case LOG_IN_SUCCESS:
        draft.logInLoading = false;
        draft.logInDone = true; //draft.me = dummyUser(action.data) front

        draft.me = action.data; // back

        console.log('reducer login 성공');
        break;

      case LOG_IN_FAILURE:
        draft.logInLoading = false;
        draft.logInError = action.error;
        console.error('reducer login 실패:: ', action.error);
        break;

      case LOG_OUT_REQUEST:
        draft.logOutLoading = true;
        draft.logOutDone = false;
        draft.logOutError = null;
        console.log('reducer logout 요청');
        break;

      case LOG_OUT_SUCCESS:
        draft.logOutLoading = false;
        draft.logOutDone = true;
        draft.me = null;
        console.log('reducer logout 성공');
        break;

      case LOG_OUT_FAILURE:
        draft.logOutLoading = false;
        draft.logOutError = action.error;
        console.error('reducer logout 실패', action.error);
        break;

      case SIGN_UP_REQUEST:
        draft.signUpLoading = true;
        draft.signUpDone = false;
        draft.signUpError = null;
        console.log('reducer signup 요청');
        break;

      case SIGN_UP_SUCCESS:
        draft.signUpLoading = false;
        draft.signUpDone = true;
        console.log('reducer signUp 성공');
        break;

      case SIGN_UP_FAILURE:
        draft.signUpLoading = false;
        draft.signUpError = action.error;
        console.error('reducer signUp 실패', action.error);
        break;

      case CHANGE_NICKNAME_REQUEST:
        draft.changeNicknameLoading = true;
        draft.changeNicknameDone = false;
        draft.changeNicknameError = null;
        console.log('reducer CHANGE_NICKNAME_REQUEST 요청');
        break;

      case CHANGE_NICKNAME_SUCCESS:
        draft.changeNicknameLoading = false;
        draft.changeNicknameDone = true;
        console.log('reducer CHANGE_NICKNAME_SUCCESS 성공');
        break;

      case CHANGE_NICKNAME_FAILURE:
        draft.changeNicknameLoading = false;
        draft.changeNicknameError = action.error;
        console.error('reducer CHANGE_NICKNAME 실패', action.error);
        break;

      case LOAD_FOLLOWERS_REQUEST:
        draft.loadFollowersLoading = true;
        draft.loadFollowersDone = false;
        draft.loadFollowersError = null;
        console.log('reducer LOAD_FOLLOWERS_REQUEST 요청');
        break;

      case LOAD_FOLLOWERS_SUCCESS:
        draft.loadFollowersLoading = false;
        draft.loadFollowersDone = true;
        draft.me.Followers = action.data;
        console.log('reducer LOAD_FOLLOWERS_SUCCESS 성공');
        break;

      case LOAD_FOLLOWERS_FAILURE:
        draft.loadFollowersLoading = false;
        draft.loadFollowersError = action.error;
        console.error('reducer LOAD_FOLLOWERS 실패', action.error);
        break;

      case LOAD_FOLLOWINGS_REQUEST:
        draft.loadFollowingsLoading = true;
        draft.loadFollowingsDone = false;
        draft.loadFollowingsError = null;
        console.log('reducer LOAD_FOLLOWINGS_REQUEST 요청');
        break;

      case LOAD_FOLLOWINGS_SUCCESS:
        draft.loadFollowingsLoading = false;
        draft.loadFollowingsDone = true;
        draft.me.Followings = action.data;
        console.log('reducer LOAD_FOLLOWINGS_SUCCESS 성공');
        break;

      case LOAD_FOLLOWINGS_FAILURE:
        draft.loadFollowingsLoading = false;
        draft.loadFollowingsError = action.error;
        console.error('reducer LOAD_FOLLOWINGS 실패', action.error);
        break;

      case ADD_POST_TO_ME:
        // 게시글을 쓰면 게시글 아이디가 여기로 들어와서 하나가 추가된다
        draft.me.Posts.unshift({
          id: action.data
        });
        console.log('ADD_POST_TO_ME 성공');
        break;
      // return {
      // 	...state,
      // 	me: {
      // 		...state.me,
      // 		Posts: [{id: action.data}, ...state.me.Posts],
      // 	}
      // }

      case REMOVE_POST_OF_ME:
        draft.me.Posts = draft.me.Posts.filter(function (v) {
          return v.id !== action.data;
        });
        console.log('REMOVE_POST_OF_ME');
        break;
      // return { // 불변성을 지키며 게시글을 지워야한다.
      // 	...state,
      // 	me: {
      // 		...state.me,
      // 		Posts: state.me.Posts.filter((v) => v.id !== action.data)
      // 	}
      // }

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

/***/ }),

/***/ "./sagas/user.js":
/*!***********************!*\
  !*** ./sagas/user.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return userSaga; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");


var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(logIn),
    _marked2 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(logOut),
    _marked3 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(changeNickname),
    _marked4 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(loadMyInfo),
    _marked5 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(follow),
    _marked6 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(unfollow),
    _marked7 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(signUp),
    _marked8 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(loadFollowers),
    _marked9 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(loadFollowings),
    _marked10 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(removeFollower),
    _marked11 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(loadUser),
    _marked12 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLoadUser),
    _marked13 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchRemoveFollower),
    _marked14 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLoadFollowers),
    _marked15 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLoadFollowings),
    _marked16 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchChangeNickname),
    _marked17 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLoadMyInfo),
    _marked18 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchFollow),
    _marked19 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchUnFollow),
    _marked20 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLogIn),
    _marked21 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLogOut),
    _marked22 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchSignUp),
    _marked23 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(userSaga);





function logInAPI(data) {
  // generator 아님
  //return axios.post('/api/login', data) // 실제 서버에 로그인 요청을 보냄 // front
  // 실제 서버에 로그인 요청을 보냄 // back
  //return axios.post('http://localhost:3065/user/login', data)
  // localhost 중복 없애기
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/user/login', data);
} // 테스트 코드
// const l = logIn({type: 'LOG_IN_REQUEST', data: {id: 'rlaalsdn8@naver.com'}})
// 		l.next();
// 		l.next();
/////////////////


function logIn(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function logIn$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(logInAPI, action.data);

        case 3:
          result = _context.sent;
          // 서버에서 받은 결과 값을 받음
          console.log('saga logIn 실행중::', action.data);
          _context.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOG_IN_SUCCESS"],
            //data: action.data, // front
            data: result.data // (성공 결과 담김) back

          });

        case 7:
          console.log('saga logIn 완료 ::', result);
          _context.next = 15;
          break;

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          console.error('logIn', _context.t0);
          _context.next = 15;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            // put 은 dispatch 라고 생각하자
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOG_IN_FAILURE"],
            error: _context.t0.response.data // (실패 결과 담김)

          });

        case 15:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 10]]);
}

function logOutAPI() {
  // return axios.post('/api/logout') front
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/user/logout');
}

function logOut() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function logOut$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(logOutAPI);

        case 3:
          // 서버에서 받은 결과 값을 받음 back
          console.log('sagas:: logout 실행');
          _context2.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOG_OUT_SUCCESS"]
          });

        case 6:
          console.log('sagas:: logout 완료');
          _context2.next = 14;
          break;

        case 9:
          _context2.prev = 9;
          _context2.t0 = _context2["catch"](0);
          console.error('front logOut : ', _context2.t0);
          _context2.next = 14;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            // put 은 dispatch 라고 생각하자
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOG_OUT_FAILURE"],
            error: _context2.t0.response.data // (실패 결과 담김)

          });

        case 14:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[0, 9]]);
}

function changeNicknameAPI(data) {
  // generator 아님
  // 실제 서버에 로그인 요청을 보냄 // back
  //return axios.post('http://localhost:3065/user/login', data)
  // localhost 중복 없애기
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.patch('/user/nickname', {
    nickname: data
  });
}

function changeNickname(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function changeNickname$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(changeNicknameAPI, action.data);

        case 3:
          result = _context3.sent;
          // 서버에서 받은 결과 값을 받음
          console.log('saga changeNickname 실행중::', action.data);
          _context3.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["CHANGE_NICKNAME_SUCCESS"],
            //data: action.data, // front
            data: result.data // (성공 결과 담김) back

          });

        case 7:
          console.log('saga changeNickname 완료 ::', result);
          _context3.next = 15;
          break;

        case 10:
          _context3.prev = 10;
          _context3.t0 = _context3["catch"](0);
          console.error('changeNickname', _context3.t0);
          _context3.next = 15;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            // put 은 dispatch 라고 생각하자
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["CHANGE_NICKNAME_FAILURE"],
            error: _context3.t0.response.data // (실패 결과 담김)

          });

        case 15:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[0, 10]]);
}

function loadMyInfoAPI(userId) {
  // 서버에 요청을 보내는 부분
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(userId ? "/user/".concat(userId) : '/user/', {
    withCredentials: true // 클라이언트에서 요청 보낼 때는 브라우저가 쿠키를 같이 동봉해줘요

  }); // 서버사이드렌더링일 때는, 브라우저가 없어요.
}

function loadMyInfo(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function loadMyInfo$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadMyInfoAPI, action.data);

        case 3:
          result = _context4.sent;
          console.log('saga loadMyInfo 실행 :: ', action.data);
          _context4.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOAD_MY_INFO_SUCCESS"],
            data: result.data,
            me: !action.data
          });

        case 7:
          console.log('saga loadMyInfo 성공:: ', result);
          _context4.next = 15;
          break;

        case 10:
          _context4.prev = 10;
          _context4.t0 = _context4["catch"](0);
          console.error('saga loadMyInfo error :: ', _context4.t0);
          _context4.next = 15;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOAD_MY_INFO_FAILURE"],
            error: _context4.t0.response.data
          });

        case 15:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4, null, [[0, 10]]);
}

function followAPI(data) {
  // data 에 사용자 id 넣어주기
  // return axios.post('/api/follow', data) front
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.patch("/user/".concat(data, "/follow"));
}

function follow(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function follow$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(followAPI, action.data);

        case 3:
          result = _context5.sent;
          console.log('saga follow 실행 : ', result);
          _context5.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["FOLLOW_SUCCESS"],
            //data: action.data front
            data: result.data
          });

        case 7:
          console.log('saga follow 완료 :: ', result);
          _context5.next = 15;
          break;

        case 10:
          _context5.prev = 10;
          _context5.t0 = _context5["catch"](0);
          console.error('saga follow error :: ', _context5.t0);
          _context5.next = 15;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["FOLLOW_FAILURE"],
            error: _context5.t0.response.data
          });

        case 15:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5, null, [[0, 10]]);
}

function unfollowAPI(data) {
  // data 에 사용자 id 넣어주기
  //return axios.post('/api/unfollow', data) front
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a["delete"]("/user/".concat(data, "/follow"));
}

function unfollow(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function unfollow$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(unfollowAPI, action.data);

        case 3:
          result = _context6.sent;
          //yield delay(1000) front
          console.log('saga unfollow 요청 :: ', action.data);
          _context6.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["UNFOLLOW_SUCCESS"],
            //data: action.data front
            data: result.data
          });

        case 7:
          console.log('saga unfollow 성공:: ', result);
          _context6.next = 15;
          break;

        case 10:
          _context6.prev = 10;
          _context6.t0 = _context6["catch"](0);
          console.error('saga unfollow error:: ', _context6.t0);
          _context6.next = 15;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["UNFOLLOW_FAILURE"],
            error: _context6.t0.response.data
          });

        case 15:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6, null, [[0, 10]]);
}

function signUpAPI(data) {
  // back end server addr
  // data 는 email, nickname, password object
  //return axios.post('/api/signup', data) // front
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/user', data); // back
}

function signUp(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function signUp$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          _context7.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(signUpAPI, action.data);

        case 3:
          result = _context7.sent;
          console.log('saga sign up result 실행중 :: ', action.data);
          _context7.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["SIGN_UP_SUCCESS"] //data: result.data

          });

        case 7:
          console.log('saga sign up 완료 :: ', result);
          _context7.next = 15;
          break;

        case 10:
          _context7.prev = 10;
          _context7.t0 = _context7["catch"](0);
          console.error('saga signUp error : ', _context7.t0);
          _context7.next = 15;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["SIGN_UP_FAILURE"],
            error: _context7.t0.response.data
          });

        case 15:
        case "end":
          return _context7.stop();
      }
    }
  }, _marked7, null, [[0, 10]]);
}

function loadFollowersAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/user/followers', data);
}

function loadFollowers(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function loadFollowers$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          _context8.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadFollowersAPI, action.data);

        case 3:
          result = _context8.sent;
          console.log('saga followers:: 요청', action.data);
          _context8.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOAD_FOLLOWERS_SUCCESS"],
            data: result.data
          });

        case 7:
          console.log('saga followers:: 성공', result);
          _context8.next = 15;
          break;

        case 10:
          _context8.prev = 10;
          _context8.t0 = _context8["catch"](0);
          console.error('saga followers::', _context8.t0);
          _context8.next = 15;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOAD_FOLLOWERS_FAILURE"],
            error: _context8.t0.response.data
          });

        case 15:
        case "end":
          return _context8.stop();
      }
    }
  }, _marked8, null, [[0, 10]]);
}

function loadFollowingsAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/user/followings', data);
}

function loadFollowings(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function loadFollowings$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          _context9.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadFollowingsAPI, action.data);

        case 3:
          result = _context9.sent;
          console.log('saga followings 요청::', action.data);
          _context9.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOAD_FOLLOWINGS_SUCCESS"],
            data: result.data
          });

        case 7:
          console.log('saga followings 성공::', result);
          _context9.next = 15;
          break;

        case 10:
          _context9.prev = 10;
          _context9.t0 = _context9["catch"](0);
          console.error('saga followings 실패::', _context9.t0);
          _context9.next = 15;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOAD_FOLLOWINGS_FAILURE"],
            error: _context9.t0.response.data
          });

        case 15:
        case "end":
          return _context9.stop();
      }
    }
  }, _marked9, null, [[0, 10]]);
}

function removeFollowerAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a["delete"]("/user/follower/".concat(data)); // 몇번째의 팔로워를 제거한다
}

function removeFollower(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function removeFollower$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;
          _context10.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(removeFollowerAPI, action.data);

        case 3:
          result = _context10.sent;
          console.log('saga removeFollower 요청:: ', action.data);
          _context10.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["REMOVE_FOLLOWER_SUCCESS"],
            data: result.data
          });

        case 7:
          console.log('saga removeFollower 성공:: ', result);
          _context10.next = 15;
          break;

        case 10:
          _context10.prev = 10;
          _context10.t0 = _context10["catch"](0);
          console.error('saga removeFollower 실패:: ', _context10.t0);
          _context10.next = 15;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["REMOVE_FOLLOWER_FAILURE"],
            error: _context10.t0.response.data
          });

        case 15:
        case "end":
          return _context10.stop();
      }
    }
  }, _marked10, null, [[0, 10]]);
}

function loadUserAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/user/".concat(data));
}

function loadUser(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function loadUser$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          _context11.prev = 0;
          _context11.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadUserAPI, action.data);

        case 3:
          result = _context11.sent;
          console.log('saga loadUser 실행 :: ', action.data);
          _context11.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOAD_USER_SUCCESS"],
            data: result.data
          });

        case 7:
          console.log('saga loadUser 성공 :: ', result);
          _context11.next = 15;
          break;

        case 10:
          _context11.prev = 10;
          _context11.t0 = _context11["catch"](0);
          console.error('saga loadUser Failure 실패 :: ', _context11.t0);
          _context11.next = 15;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOAD_USER_FAILURE"],
            error: _context11.t0.response.data
          });

        case 15:
        case "end":
          return _context11.stop();
      }
    }
  }, _marked11, null, [[0, 10]]);
}

function watchLoadUser() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLoadUser$(_context12) {
    while (1) {
      switch (_context12.prev = _context12.next) {
        case 0:
          _context12.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOAD_USER_REQUEST"], loadUser);

        case 2:
        case "end":
          return _context12.stop();
      }
    }
  }, _marked12);
}

function watchRemoveFollower() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchRemoveFollower$(_context13) {
    while (1) {
      switch (_context13.prev = _context13.next) {
        case 0:
          _context13.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_3__["REMOVE_FOLLOWER_REQUEST"], removeFollower);

        case 2:
        case "end":
          return _context13.stop();
      }
    }
  }, _marked13);
}

function watchLoadFollowers() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLoadFollowers$(_context14) {
    while (1) {
      switch (_context14.prev = _context14.next) {
        case 0:
          _context14.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOAD_FOLLOWERS_REQUEST"], loadFollowers);

        case 2:
        case "end":
          return _context14.stop();
      }
    }
  }, _marked14);
}

function watchLoadFollowings() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLoadFollowings$(_context15) {
    while (1) {
      switch (_context15.prev = _context15.next) {
        case 0:
          _context15.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOAD_FOLLOWINGS_REQUEST"], loadFollowings);

        case 2:
        case "end":
          return _context15.stop();
      }
    }
  }, _marked15);
}

function watchChangeNickname() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchChangeNickname$(_context16) {
    while (1) {
      switch (_context16.prev = _context16.next) {
        case 0:
          _context16.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_3__["CHANGE_NICKNAME_REQUEST"], changeNickname);

        case 2:
        case "end":
          return _context16.stop();
      }
    }
  }, _marked16);
}

function watchLoadMyInfo() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLoadMyInfo$(_context17) {
    while (1) {
      switch (_context17.prev = _context17.next) {
        case 0:
          _context17.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOAD_MY_INFO_REQUEST"], loadMyInfo);

        case 2:
        case "end":
          return _context17.stop();
      }
    }
  }, _marked17);
}

function watchFollow() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchFollow$(_context18) {
    while (1) {
      switch (_context18.prev = _context18.next) {
        case 0:
          _context18.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_3__["FOLLOW_REQUEST"], follow);

        case 2:
        case "end":
          return _context18.stop();
      }
    }
  }, _marked18);
}

function watchUnFollow() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchUnFollow$(_context19) {
    while (1) {
      switch (_context19.prev = _context19.next) {
        case 0:
          _context19.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_3__["UNFOLLOW_REQUEST"], unfollow);

        case 2:
        case "end":
          return _context19.stop();
      }
    }
  }, _marked19);
}

function watchLogIn() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLogIn$(_context20) {
    while (1) {
      switch (_context20.prev = _context20.next) {
        case 0:
          _context20.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOG_IN_REQUEST"], logIn);

        case 2:
        case "end":
          return _context20.stop();
      }
    }
  }, _marked20);
}

function watchLogOut() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLogOut$(_context21) {
    while (1) {
      switch (_context21.prev = _context21.next) {
        case 0:
          _context21.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOG_OUT_REQUEST"], logOut);

        case 2:
        case "end":
          return _context21.stop();
      }
    }
  }, _marked21);
}

function watchSignUp() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchSignUp$(_context22) {
    while (1) {
      switch (_context22.prev = _context22.next) {
        case 0:
          _context22.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_3__["SIGN_UP_REQUEST"], signUp);

        case 2:
        case "end":
          return _context22.stop();
      }
    }
  }, _marked22);
}

function userSaga() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function userSaga$(_context23) {
    while (1) {
      switch (_context23.prev = _context23.next) {
        case 0:
          _context23.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadUser), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchRemoveFollower), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadFollowers), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadFollowings), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchChangeNickname), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadMyInfo), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchFollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchUnFollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLogIn), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLogOut), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchSignUp)]);

        case 2:
        case "end":
          return _context23.stop();
      }
    }
  }, _marked23);
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvdXNlci5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJsb2FkVXNlckxvYWRpbmciLCJsb2FkVXNlckRvbmUiLCJsb2FkVXNlckVycm9yIiwibG9hZE15SW5mb0xvYWRpbmciLCJsb2FkTXlJbmZvRG9uZSIsImxvYWRNeUluZm9FcnJvciIsInJlbW92ZUZvbGxvd2VyTG9hZGluZyIsInJlbW92ZUZvbGxvd2VyRG9uZSIsInJlbW92ZUZvbGxvd2VyRXJyb3IiLCJmb2xsb3dMb2FkaW5nIiwiZm9sbG93RG9uZSIsImZvbGxvd0Vycm9yIiwidW5mb2xsb3dMb2FkaW5nIiwidW5mb2xsb3dEb25lIiwidW5mb2xsb3dFcnJvciIsImxvYWRGb2xsb3dlcnNMb2FkaW5nIiwibG9hZEZvbGxvd2Vyc0RvbmUiLCJsb2FkRm9sbG93ZXJzRXJyb3IiLCJsb2FkRm9sbG93aW5nc0xvYWRpbmciLCJsb2FkRm9sbG93aW5nc0RvbmUiLCJsb2FkRm9sbG93aW5nc0Vycm9yIiwibG9nSW5Mb2FkaW5nIiwibG9nSW5Eb25lIiwibG9nSW5FcnJvciIsImxvZ091dExvYWRpbmciLCJsb2dPdXREb25lIiwibG9nT3V0RXJyb3IiLCJzaWduVXBMb2FkaW5nIiwic2lnblVwRG9uZSIsInNpZ25VcEVycm9yIiwiY2hhbmdlTmlja25hbWVMb2FkaW5nIiwiY2hhbmdlTmlja25hbWVEb25lIiwiY2hhbmdlTmlja25hbWVFcnJvciIsIm1lIiwic2lnblVwRGF0YSIsImxvZ2luRGF0YSIsInVzZXJJbmZvIiwiTE9BRF9VU0VSX1JFUVVFU1QiLCJMT0FEX1VTRVJfU1VDQ0VTUyIsIkxPQURfVVNFUl9GQUlMVVJFIiwiTE9BRF9NWV9JTkZPX1JFUVVFU1QiLCJMT0FEX01ZX0lORk9fU1VDQ0VTUyIsIkxPQURfTVlfSU5GT19GQUlMVVJFIiwiUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1QiLCJSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUyIsIlJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFIiwiTE9HX0lOX1JFUVVFU1QiLCJMT0dfSU5fU1VDQ0VTUyIsIkxPR19JTl9GQUlMVVJFIiwiTE9HX09VVF9SRVFVRVNUIiwiTE9HX09VVF9TVUNDRVNTIiwiTE9HX09VVF9GQUlMVVJFIiwiU0lHTl9VUF9SRVFVRVNUIiwiU0lHTl9VUF9TVUNDRVNTIiwiU0lHTl9VUF9GQUlMVVJFIiwiQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QiLCJDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyIsIkNIQU5HRV9OSUNLTkFNRV9GQUlMVVJFIiwiRk9MTE9XX1JFUVVFU1QiLCJGT0xMT1dfU1VDQ0VTUyIsIkZPTExPV19GQUlMVVJFIiwiVU5GT0xMT1dfUkVRVUVTVCIsIlVORk9MTE9XX1NVQ0NFU1MiLCJVTkZPTExPV19GQUlMVVJFIiwiTE9BRF9GT0xMT1dFUlNfUkVRVUVTVCIsIkxPQURfRk9MTE9XRVJTX1NVQ0NFU1MiLCJMT0FEX0ZPTExPV0VSU19GQUlMVVJFIiwiTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1QiLCJMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUyIsIkxPQURfRk9MTE9XSU5HU19GQUlMVVJFIiwiQUREX1BPU1RfVE9fTUUiLCJSRU1PVkVfUE9TVF9PRl9NRSIsImxvZ2luUmVxdWVzdEFjdGlvbiIsImRhdGEiLCJ0eXBlIiwibG9nb3V0UmVxdWVzdEFjdGlvbiIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInByb2R1Y2UiLCJkcmFmdCIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsIkZvbGxvd2VycyIsImZpbHRlciIsInYiLCJpZCIsIlVzZXJJZCIsIkZvbGxvd2luZ3MiLCJwdXNoIiwiUG9zdHMiLCJ1bnNoaWZ0IiwibG9nSW4iLCJsb2dPdXQiLCJjaGFuZ2VOaWNrbmFtZSIsImxvYWRNeUluZm8iLCJmb2xsb3ciLCJ1bmZvbGxvdyIsInNpZ25VcCIsImxvYWRGb2xsb3dlcnMiLCJsb2FkRm9sbG93aW5ncyIsInJlbW92ZUZvbGxvd2VyIiwibG9hZFVzZXIiLCJ3YXRjaExvYWRVc2VyIiwid2F0Y2hSZW1vdmVGb2xsb3dlciIsIndhdGNoTG9hZEZvbGxvd2VycyIsIndhdGNoTG9hZEZvbGxvd2luZ3MiLCJ3YXRjaENoYW5nZU5pY2tuYW1lIiwid2F0Y2hMb2FkTXlJbmZvIiwid2F0Y2hGb2xsb3ciLCJ3YXRjaFVuRm9sbG93Iiwid2F0Y2hMb2dJbiIsIndhdGNoTG9nT3V0Iiwid2F0Y2hTaWduVXAiLCJ1c2VyU2FnYSIsImxvZ0luQVBJIiwiYXhpb3MiLCJwb3N0IiwiY2FsbCIsInJlc3VsdCIsInB1dCIsInJlc3BvbnNlIiwibG9nT3V0QVBJIiwiY2hhbmdlTmlja25hbWVBUEkiLCJwYXRjaCIsIm5pY2tuYW1lIiwibG9hZE15SW5mb0FQSSIsInVzZXJJZCIsImdldCIsIndpdGhDcmVkZW50aWFscyIsImZvbGxvd0FQSSIsInVuZm9sbG93QVBJIiwic2lnblVwQVBJIiwibG9hZEZvbGxvd2Vyc0FQSSIsImxvYWRGb2xsb3dpbmdzQVBJIiwicmVtb3ZlRm9sbG93ZXJBUEkiLCJsb2FkVXNlckFQSSIsInRha2VMYXRlc3QiLCJhbGwiLCJmb3JrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLElBQU1BLFlBQVksR0FBRztBQUMzQkMsaUJBQWUsRUFBRSxLQURVO0FBQ0g7QUFDeEJDLGNBQVksRUFBRSxLQUZhO0FBRU47QUFDckJDLGVBQWEsRUFBRSxJQUhZO0FBR047QUFDckJDLG1CQUFpQixFQUFFLEtBSlE7QUFJRDtBQUMxQkMsZ0JBQWMs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QUFqQixDQUFoQjs7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFJQSxTQUFVb0IsV0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQyxpQkFBTXlCLHFFQUFVLENBQUN6Riw4REFBRCxFQUFrQjZDLE1BQWxCLENBQWhCOztBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUlBLFNBQVVvQixXQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNDLGlCQUFNd0IscUVBQVUsQ0FBQ3RGLDhEQUFELEVBQWtCK0MsTUFBbEIsQ0FBaEI7O0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBSWUsU0FBVWdCLFFBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2QsaUJBQU13Qiw4REFBRyxDQUFDLENBQ1JDLCtEQUFJLENBQUNwQyxhQUFELENBREksRUFFVG9DLCtEQUFJLENBQUNuQyxtQkFBRCxDQUZLLEVBR1RtQywrREFBSSxDQUFDbEMsa0JBQUQsQ0FISyxFQUlUa0MsK0RBQUksQ0FBQ2pDLG1CQUFELENBSkssRUFLVGlDLCtEQUFJLENBQUNoQyxtQkFBRCxDQUxLLEVBTVRnQywrREFBSSxDQUFDL0IsZUFBRCxDQU5LLEVBT1QrQiwrREFBSSxDQUFDOUIsV0FBRCxDQVBLLEVBUVQ4QiwrREFBSSxDQUFDN0IsYUFBRCxDQVJLLEVBU1Q2QiwrREFBSSxDQUFDNUIsVUFBRCxDQVRLLEVBVVQ0QiwrREFBSSxDQUFDM0IsV0FBRCxDQVZLLEVBV1QyQiwrREFBSSxDQUFDMUIsV0FBRCxDQVhLLENBQUQsQ0FBVDs7QUFEYztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjE0Y2EwMzExOGQ0M2Y0Zjg5ZTU5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcHJvZHVjZSBmcm9tICdpbW1lcidcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcblx0bG9hZFVzZXJMb2FkaW5nOiBmYWxzZSwgLy8g7IOB64yAIOygleuztCDrs7TquLAg7Iuc64+E7KSR7J2865WQIOuhnOuUqeykkSDrnYTsmrjqsbDsnoRcclxuXHRsb2FkVXNlckRvbmU6IGZhbHNlLCAvLyDsg4HrjIAg7KCV67O0IOuztOq4sCDrkKhcclxuXHRsb2FkVXNlckVycm9yOiBudWxsLCAvLyDsg4HrjIAg7KCV67O0IOuztOq4sOykkeydvOuVjCDsl5Drn6wg7JeG7JWwXHJcblx0bG9hZE15SW5mb0xvYWRpbmc6IGZhbHNlLCAvLyDsnKDsoIAg7KCV67O0IOuztOq4sCDsi5zrj4TspJHsnbzrlZAg66Gc65Sp7KSRIOudhOyauOqxsOyehFxyXG5cdGxvYWRNeUluZm9Eb25lOiBmYWxzZSwgLy8g7Jyg7KCAIOygleuztCDrs7TquLAg65CoXHJcblx0bG9hZE15SW5mb0Vycm9yOiBudWxsLCAvLyDsnKDsoIAg7KCV67O0IOuztOq4sOykkeydvOuVjCDsl5Drn6wg7JeG7JWwXHJcblx0cmVtb3ZlRm9sbG93ZXJMb2FkaW5nOiBmYWxzZSwgLy8g7YyU66Gc7JuMIOycoOyggCDsgq3soJwg7Iuc64+E7KSR7J2865WQIOuhnOuUqeykkSDrnYTsmrjqsbDsnoRcclxuXHRyZW1vdmVGb2xsb3dlckRvbmU6IGZhbHNlLCAvLyDtjJTroZzsm4wg7Jyg7KCAIOyCreygnCDrkKhcclxuXHRyZW1vdmVGb2xsb3dlckVycm9yOiBudWxsLCAvLyDtjJTroZzsm4wg7Jyg7KCAIOyCreygnCDspJHsnbzrlYwg7JeQ65+sIOyXhuyVsFxyXG5cdGZvbGxvd0xvYWRpbmc6IGZhbHNlLCAvLyDtjJTroZzsmrAg7Iuc64+E7KSR7J2865WQIOuhnOuUqeykkSDrnYTsmrjqsbDsnoRcclxuXHRmb2xsb3dEb25lOiBmYWxzZSwgLy8g7YyU66Gc7JqwIOuQqFxyXG5cdGZvbGxvd0Vycm9yOiBudWxsLCAvLyDtjJTroZzsmrDspJHsnbzrlYwg7JeQ65+sIOyXhuyVsFxyXG5cdHVuZm9sbG93TG9hZGluZzogZmFsc2UsIC8vIOyWuO2MlOuhnOyasCDsi5zrj4TspJHsnbzrlZAg66Gc65Sp7KSRIOudhOyauOqxsOyehFxyXG5cdHVuZm9sbG93RG9uZTogZmFsc2UsIC8vIOyWuO2MlOuhnOyasCDrkKhcclxuXHR1bmZvbGxvd0Vycm9yOiBudWxsLCAvLyDslrjtjJTroZzsmrDspJHsnbzrlYwg7JeQ65+sIOyXhuyVsFxyXG5cdGxvYWRGb2xsb3dlcnNMb2FkaW5nOiBmYWxzZSwgLy8g7YyU66Gc7JuMIOyLnOuPhOykkeydvOuVkCDroZzrlKnspJEg652E7Jq46rGw7J6EXHJcblx0bG9hZEZvbGxvd2Vyc0RvbmU6IGZhbHNlLCAvLyDtjJTroZzsm4wg65CoXHJcblx0bG9hZEZvbGxvd2Vyc0Vycm9yOiBudWxsLCAvLyDtjJTroZzsm4zsnbzrlYwg7JeQ65+sIOyXhuyVsFxyXG5cdGxvYWRGb2xsb3dpbmdzTG9hZGluZzogZmFsc2UsIC8vIO2MlOuhnOycmSDsi5zrj4TspJHsnbzrlZAg66Gc65Sp7KSRIOudhOyauOqxsOyehFxyXG5cdGxvYWRGb2xsb3dpbmdzRG9uZTogZmFsc2UsIC8vIO2MlOuhnOycmSDrkKhcclxuXHRsb2FkRm9sbG93aW5nc0Vycm9yOiBudWxsLCAvLyDtjJTroZzsnJkg7KSR7J2865WMIOyXkOufrCDsl4bslbBcclxuXHRsb2dJbkxvYWRpbmc6IGZhbHNlLCAvLyDroZzqt7jsnbgg7Iuc64+E7KSR7J2865WQIOuhnOuUqeykkSDrnYTsmrjqsbDsnoRcclxuXHRsb2dJbkRvbmU6IGZhbHNlLCAvLyDroZzqt7jsnbgg65CoXHJcblx0bG9nSW5FcnJvcjogbnVsbCwgLy8g66Gc65Sp7KSR7J2865WMIOyXkOufrCDsl4bslbBcclxuXHRsb2dPdXRMb2FkaW5nOiBmYWxzZSwgLy8g66Gc6re47JWE7JuDIOyLnOuPhOykkVxyXG5cdGxvZ091dERvbmU6IGZhbHNlLCAvLyDroZzqt7jslYTsm4Mg7JmE66OMXHJcblx0bG9nT3V0RXJyb3I6IG51bGwsXHJcblx0c2lnblVwTG9hZGluZzogZmFsc2UsIC8vIO2ajOybkOqwgOyehSDroZzrlKnspJFcclxuXHRzaWduVXBEb25lOiBmYWxzZSwgLy8g7ZqM7JuQIOqwgOyehSDsmYTro4xcclxuXHRzaWduVXBFcnJvcjogbnVsbCxcclxuXHRjaGFuZ2VOaWNrbmFtZUxvYWRpbmc6IGZhbHNlLCAvLyDri4nrhKTsnoQg67OA6rK9IOuhnOuUqeykkVxyXG5cdGNoYW5nZU5pY2tuYW1lRG9uZTogZmFsc2UsIC8vIOuLieuEpOyehCDrs4Dqsr0g7JmE66OMXHJcblx0Y2hhbmdlTmlja25hbWVFcnJvcjogbnVsbCxcclxuXHRtZTogbnVsbCxcclxuXHRzaWduVXBEYXRhOiB7fSwgLy8g7ZqM7JuQIOqwgOyehSDrjbDsnbTthLBcclxuXHRsb2dpbkRhdGE6IHt9LFxyXG5cdHVzZXJJbmZvOiBudWxsLFxyXG59XHJcblxyXG4vLyDroZzqt7jsnbgg7JWh7IWYIOyDneyEseq4sCB0aHVua1xyXG4vLyBleHBvcnQgY29uc3QgbG9naW5BY3Rpb24gPSAoZGF0YSkgPT4geyAvLyDtlajsiJjrpbwg66as7YS07ZWY64qUIOu5hOuPmeq4sCDslaHshZgg7YGs66as7JeQ7J207YSw6rCAIOy2lOqwgFxyXG4vLyBcdHJldHVybiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XHJcbi8vIFx0XHRjb25zdCBzdGF0ZSA9IGdldFN0YXRlKClcclxuLy8gXHRcdGRpc3BhdGNoKGxvZ2luUmVxdWVzdEFjdGlvbigpKVxyXG4vLyBcdFx0YXhpb3MucG9zdCgnL2FwaS9sb2dpbicpXHJcbi8vIFx0XHRcdFx0LnRoZW4oKHJlcykgPT4ge1xyXG4vLyBcdFx0XHRcdFx0ZGlzcGF0Y2gobG9naW5TdWNjZXNzQWN0aW9uKHJlcy5kYXRhKSlcclxuLy8gXHRcdFx0XHR9KVxyXG4vLyBcdFx0XHRcdC5jYXRjaCgoZXJyb3IpID0+IHtcclxuLy8gXHRcdFx0XHRcdGRpc3BhdGNoKGxvZ2luRmFpbHVyZUFjdGlvbihlcnJvcikpXHJcbi8vIFx0XHRcdFx0fSlcclxuLy8gXHR9XHJcbi8vIH1cclxuXHJcbi8vIGFjdGlvbnNcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9SRVFVRVNUID0gJ0xPQURfVVNFUl9SRVFVRVNUJ1xyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1NVQ0NFU1MgPSAnTE9BRF9VU0VSX1NVQ0NFU1MnXHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfRkFJTFVSRSA9ICdMT0FEX1VTRVJfRkFJTFVSRSdcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX01ZX0lORk9fUkVRVUVTVCA9ICdMT0FEX01ZX0lORk9fUkVRVUVTVCdcclxuZXhwb3J0IGNvbnN0IExPQURfTVlfSU5GT19TVUNDRVNTID0gJ0xPQURfTVlfSU5GT19TVUNDRVNTJ1xyXG5leHBvcnQgY29uc3QgTE9BRF9NWV9JTkZPX0ZBSUxVUkUgPSAnTE9BRF9NWV9JTkZPX0ZBSUxVUkUnXHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1QgPSAnUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1QnXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUyA9ICdSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUydcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFID0gJ1JFTU9WRV9GT0xMT1dFUl9GQUlMVVJFJ1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19JTl9SRVFVRVNUID0gJ0xPR19JTl9SRVFVRVNUJ1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX1NVQ0NFU1MgPSAnTE9HX0lOX1NVQ0NFU1MnXHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fRkFJTFVSRSA9ICdMT0dfSU5fRkFJTFVSRSdcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1JFUVVFU1QgPSAnTE9HX09VVF9SRVFVRVNUJ1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9TVUNDRVNTID0gJ0xPR19PVVRfU1VDQ0VTUydcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfRkFJTFVSRSA9ICdMT0dfT1VUX0ZBSUxVUkUnXHJcblxyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9SRVFVRVNUID0gJ1NJR05fVVBfUkVRVUVTVCdcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfU1VDQ0VTUyA9ICdTSUdOX1VQX1NVQ0NFU1MnXHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX0ZBSUxVUkUgPSAnU0lHTl9VUF9GQUlMVVJFJ1xyXG5cclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9SRVFVRVNUID0gJ0NIQU5HRV9OSUNLTkFNRV9SRVFVRVNUJ1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MgPSAnQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MnXHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSA9ICdDSEFOR0VfTklDS05BTUVfRkFJTFVSRSdcclxuXHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfUkVRVUVTVCA9ICdGT0xMT1dfUkVRVUVTVCdcclxuZXhwb3J0IGNvbnN0IEZPTExPV19TVUNDRVNTID0gJ0ZPTExPV19TVUNDRVNTJ1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX0ZBSUxVUkUgPSAnRk9MTE9XX0ZBSUxVUkUnXHJcblxyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfUkVRVUVTVCA9ICdVTkZPTExPV19SRVFVRVNUJ1xyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfU1VDQ0VTUyA9ICdVTkZPTExPV19TVUNDRVNTJ1xyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfRkFJTFVSRSA9ICdVTkZPTExPV19GQUlMVVJFJ1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XRVJTX1JFUVVFU1QgPSAnTE9BRF9GT0xMT1dFUlNfUkVRVUVTVCdcclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XRVJTX1NVQ0NFU1MgPSAnTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUydcclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XRVJTX0ZBSUxVUkUgPSAnTE9BRF9GT0xMT1dFUlNfRkFJTFVSRSdcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVCA9ICdMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVCdcclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XSU5HU19TVUNDRVNTID0gJ0xPQURfRk9MTE9XSU5HU19TVUNDRVNTJ1xyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkUgPSAnTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkUnXHJcblxyXG4vLyDsnKDsoIAg66as65OA7ISc7J2YIOyDge2DnOulvCDrsJTqv4DsiJjsnojripQg7JWh7IWYIOyDneyEsVxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfVE9fTUUgPSAnQUREX1BPU1RfVE9fTUUnXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9PRl9NRSA9ICdSRU1PVkVfUE9TVF9PRl9NRSdcclxuXHJcbi8qIGZyb250XHJcbmNvbnN0IGR1bW15VXNlciA9IChkYXRhKSA9PiAoe1xyXG5cdC4uLmRhdGEsXHJcblx0bmlja25hbWU6ICfruYTtg4Drr7wnLFxyXG5cdGlkOiAxLFxyXG5cdFBvc3RzOiBbe2lkOiAxfV0sXHJcblx0Rm9sbG93aW5nczogW3tuaWNrbmFtZTogJ+yZuOuFuCd9LCB7bmlja25hbWU6ICfsnYzrqZQnfSwge25pY2tuYW1lOiAn7I29J30sIHtuaWNrbmFtZTogJ+yYpOuMlSd9LCB7bmlja25hbWU6ICfrp4zrvYAnfV0sXHJcblx0Rm9sbG93ZXJzOiBbe25pY2tuYW1lOiAn6rmM66ekJ30sIHtuaWNrbmFtZTogJ+unjOuRkCd9LCB7bmlja25hbWU6ICfrs7TssZknfSwge25pY2tuYW1lOiAn65K36rCAJ30sIHtuaWNrbmFtZTogJ+yVvOuNqSd9XSxcclxufSkqL1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2luUmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiAoe1xyXG5cdHR5cGU6IExPR19JTl9SRVFVRVNULFxyXG5cdGRhdGEsXHJcbn0pO1xyXG4vLyDroZzqt7jslYTsm4Mg7JWh7IWYIOyDneyEseq4sCB0aHVua1xyXG4vLyBleHBvcnQgY29uc3QgbG9nb3V0QWN0aW9uID0gKGRhdGEpID0+IHtcclxuLy8gXHRyZXR1cm4gKGRpc3BhdGNoKSA9PiB7XHJcbi8vIFx0XHRheGlvcy5wb3N0KCcvYXBpL2xvZ291dCcpXHJcbi8vIFx0XHRcdFx0LnRoZW4oKCkgPT4ge1xyXG4vLyBcdFx0XHRcdFx0ZGlzcGF0Y2gobG9nb3V0U3VjY2Vzc0FjdGlvbigpKVxyXG4vLyBcdFx0XHRcdH0pXHJcbi8vIFx0XHRcdFx0LmNhdGNoKCgpID0+IHtcclxuLy8gXHRcdFx0XHRcdGRpc3BhdGNoKGxvZ291dEZhaWx1cmVBY3Rpb24oKSlcclxuLy8gXHRcdFx0XHR9KVxyXG4vLyBcdH1cclxuLy8gfVxyXG5leHBvcnQgY29uc3QgbG9nb3V0UmVxdWVzdEFjdGlvbiA9ICgpID0+ICh7XHJcblx0dHlwZTogTE9HX09VVF9SRVFVRVNULFxyXG59KVxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIExPQURfVVNFUl9SRVFVRVNUOlxyXG5cdFx0XHQvLyBzdG9yZSDsl5DshJwg67O064K4IHN0YXRlIOqwgCDrp4zrk6TslrTsp5AsIHN0YXRlIOyekOyytOqwgCB1c2VyLmpzIOydmCBzdGF0ZSDsnoRcclxuXHRcdFx0ZHJhZnQubG9hZFVzZXJMb2FkaW5nID0gdHJ1ZVxyXG5cdFx0XHRkcmFmdC5sb2FkVXNlckRvbmUgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC5sb2FkVXNlckVycm9yID0gbnVsbCAvLyDroZzrlKkg7KSR7J2865WM64qUIOyXkOufrCDsl4bslbBcclxuXHRcdFx0Y29uc29sZS5sb2coJ3JlZHVjZXIgbXlJbmZvIOyalOyyrScpXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBMT0FEX1VTRVJfU1VDQ0VTUzpcclxuXHRcdFx0ZHJhZnQudXNlckluZm8gPSBhY3Rpb24uZGF0YSAvLyBiYWNrIOyDgeuMgCDsoJXrs7TqsIAg65Ok7Ja07J6I7J2MXHJcblx0XHRcdGRyYWZ0LmxvYWRVc2VyTG9hZGluZyA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LmxvYWRVc2VyRG9uZSA9IHRydWVcclxuXHRcdFx0Ly9kcmFmdC5tZSA9IGR1bW15VXNlcihhY3Rpb24uZGF0YSlcclxuXHRcdFx0Y29uc29sZS5sb2coJ3JlZHVjZXIgbXlJbmZvIOyEseqztScpXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBMT0FEX1VTRVJfRkFJTFVSRTpcclxuXHRcdFx0Y29uc29sZS5lcnJvcignbG9hZFVzZXJGYWlsIOyLpO2MqDo6ICcgKyBhY3Rpb24uZXJyb3IpXHJcblx0XHRcdGRyYWZ0LmxvYWRVc2VyTG9hZGluZyA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LmxvYWRVc2VyRXJyb3IgPSBhY3Rpb24uZXJyb3JcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIExPQURfTVlfSU5GT19SRVFVRVNUOlxyXG5cdFx0XHQvLyBzdG9yZSDsl5DshJwg67O064K4IHN0YXRlIOqwgCDrp4zrk6TslrTsp5AsIHN0YXRlIOyekOyytOqwgCB1c2VyLmpzIOydmCBzdGF0ZSDsnoRcclxuXHRcdFx0ZHJhZnQubG9hZE15SW5mb0xvYWRpbmcgPSB0cnVlXHJcblx0XHRcdGRyYWZ0LmxvYWRNeUluZm9Eb25lID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQubG9hZE15SW5mb0Vycm9yID0gbnVsbCAvLyDroZzrlKkg7KSR7J2865WM64qUIOyXkOufrCDsl4bslbBcclxuXHRcdFx0Y29uc29sZS5sb2coJ3JlZHVjZXIgbXlJbmZvIOyalOyyrScpXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBMT0FEX01ZX0lORk9fU1VDQ0VTUzpcclxuXHRcdFx0ZHJhZnQubWUgPSBhY3Rpb24uZGF0YSAvLyBiYWNrIOuCtCDsoJXrs7TqsIAg65Ok7Ja07J6I7J2MXHJcblx0XHRcdGRyYWZ0LmxvYWRNeUluZm9Mb2FkaW5nID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQubG9hZE15SW5mb0RvbmUgPSB0cnVlXHJcblx0XHRcdC8vZHJhZnQubWUgPSBkdW1teVVzZXIoYWN0aW9uLmRhdGEpXHJcblx0XHRcdGNvbnNvbGUubG9nKCdyZWR1Y2VyIG15SW5mbyDshLHqs7UnKVxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgTE9BRF9NWV9JTkZPX0ZBSUxVUkU6XHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoJ2xvYWRNeUluZm9GYWlsIOyLpO2MqDo6ICcgKyBhY3Rpb24uZXJyb3IpXHJcblx0XHRcdGRyYWZ0LmxvYWRNeUluZm9Mb2FkaW5nID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQubG9hZE15SW5mb0Vycm9yID0gYWN0aW9uLmVycm9yXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVDpcclxuXHRcdFx0ZHJhZnQucmVtb3ZlRm9sbG93ZXJMb2FkaW5nID0gdHJ1ZVxyXG5cdFx0XHRkcmFmdC5yZW1vdmVGb2xsb3dlckRvbmUgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC5yZW1vdmVGb2xsb3dlckVycm9yID0gbnVsbFxyXG5cdFx0XHRjb25zb2xlLmxvZygncmVkdWNlciByZW1vdmVGb2xsb3dlciDsmpTssq0nKVxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1M6XHJcblx0XHRcdC8vIOuCmOydmCDtjJTroZzsm4wg7KCc6rGwXHJcblx0XHRcdGRyYWZ0Lm1lLkZvbGxvd2VycyA9IGRyYWZ0Lm1lLkZvbGxvd2Vycy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLlVzZXJJZClcclxuXHRcdFx0ZHJhZnQucmVtb3ZlRm9sbG93ZXJMb2FkaW5nID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQucmVtb3ZlRm9sbG93ZXJEb25lID0gdHJ1ZVxyXG5cdFx0XHRjb25zb2xlLmxvZygncmVkdWNlciByZW1vdmVGb2xsb3dlciDshLHqs7UnKVxyXG5cdFx0XHRicmVha1xyXG5cdFx0Y2FzZSBSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRTpcclxuXHRcdFx0Y29uc29sZS5lcnJvcigncmVtb3ZlRm9sbG93ZXJGYWlsIOyLpO2MqDo6ICcgKyBhY3Rpb24uZXJyb3IpXHJcblx0XHRcdGRyYWZ0LnJlbW92ZUZvbGxvd2VyTG9hZGluZyA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LnJlbW92ZUZvbGxvd2VyRXJyb3IgPSBhY3Rpb24uZXJyb3JcclxuXHRcdGNhc2UgRk9MTE9XX1JFUVVFU1Q6XHJcblx0XHRcdC8vIHN0b3JlIOyXkOyEnCDrs7Trgrggc3RhdGUg6rCAIOunjOuTpOyWtOynkCwgc3RhdGUg7J6Q7LK06rCAIHVzZXIuanMg7J2YIHN0YXRlIOyehFxyXG5cdFx0XHRkcmFmdC5mb2xsb3dMb2FkaW5nID0gdHJ1ZVxyXG5cdFx0XHRkcmFmdC5mb2xsb3dFcnJvciA9IG51bGwgLy8g66Gc65SpIOykkeydvOuVjOuKlCDsl5Drn6wg7JeG7JWwXHJcblx0XHRcdGRyYWZ0LmZvbGxvd0RvbmUgPSBmYWxzZVxyXG5cdFx0XHRjb25zb2xlLmxvZygncmVkdWNlciBGT0xMT1dfUkVRVUVTVCDsmpTssq0nKVxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgRk9MTE9XX1NVQ0NFU1M6XHJcblx0XHRcdGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC5mb2xsb3dEb25lID0gdHJ1ZVxyXG5cdFx0XHQvL2RyYWZ0Lm1lID0gZHVtbXlVc2VyKGFjdGlvbi5kYXRhKVxyXG5cdFx0XHRkcmFmdC5tZS5Gb2xsb3dpbmdzLnB1c2goe2lkOiBhY3Rpb24uZGF0YS5Vc2VySWR9KVxyXG5cdFx0XHRjb25zb2xlLmxvZygncmVkdWNlciBGT0xMT1dfU1VDQ0VTUyDshLHqs7UnKVxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgRk9MTE9XX0ZBSUxVUkU6XHJcblx0XHRcdGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC5mb2xsb3dFcnJvciA9IGFjdGlvbi5lcnJvclxyXG5cdFx0XHRjb25zb2xlLmVycm9yKCdyZWR1Y2VyIEZPTExPV19GQUlMVVJFIOyLpO2MqDo6JywgYWN0aW9uLmVycm9yKVxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgVU5GT0xMT1dfUkVRVUVTVDpcclxuXHRcdFx0Ly8gc3RvcmUg7JeQ7IScIOuztOuCuCBzdGF0ZSDqsIAg66eM65Ok7Ja07KeQLCBzdGF0ZSDsnpDssrTqsIAgdXNlci5qcyDsnZggc3RhdGUg7J6EXHJcblx0XHRcdGRyYWZ0LnVuZm9sbG93TG9hZGluZyA9IHRydWVcclxuXHRcdFx0ZHJhZnQudW5mb2xsb3dFcnJvciA9IG51bGwgLy8g66Gc65SpIOykkeydvOuVjOuKlCDsl5Drn6wg7JeG7JWwXHJcblx0XHRcdGRyYWZ0LnVuZm9sbG93RG9uZSA9IGZhbHNlXHJcblx0XHRcdGNvbnNvbGUubG9nKCdyZWR1Y2VyIHVuZm9sbG93IOyalOyyrScpXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBVTkZPTExPV19TVUNDRVNTOlxyXG5cdFx0XHRkcmFmdC51bmZvbGxvd0xvYWRpbmcgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC51bmZvbGxvd0RvbmUgPSB0cnVlXHJcblx0XHRcdC8vZHJhZnQubWUgPSBkdW1teVVzZXIoYWN0aW9uLmRhdGEpXHJcblx0XHRcdC8vIOyWuO2MlOuhnOyasCDtlZwg7IKs656M66eMIOu5oOyngOqyjFxyXG5cdFx0XHRkcmFmdC5tZS5Gb2xsb3dpbmdzID0gZHJhZnQubWUuRm9sbG93aW5ncy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLlVzZXJJZClcclxuXHRcdFx0Y29uc29sZS5sb2coJ3JlZHVjZXIgdW5mb2xsb3cg7ISx6rO1JylcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFVORk9MTE9XX0ZBSUxVUkU6XHJcblx0XHRcdGRyYWZ0LnVuZm9sbG93TG9hZGluZyA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LnVuZm9sbG93RXJyb3IgPSBhY3Rpb24uZXJyb3JcclxuXHRcdFx0Y29uc29sZS5lcnJvcigncmVkdWNlciB1bmZvbGxvdyDsi6TtjKg6OicsIGFjdGlvbi5lcnJvcilcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIExPR19JTl9SRVFVRVNUOlxyXG5cdFx0XHRkcmFmdC5sb2dJbkxvYWRpbmcgPSB0cnVlXHJcblx0XHRcdGRyYWZ0LmxvZ0luRXJyb3IgPSBudWxsXHJcblx0XHRcdGRyYWZ0LmxvZ0luRG9uZSA9IGZhbHNlXHJcblx0XHRcdGNvbnNvbGUubG9nKCdyZWR1Y2VyIGxvZ2luIOyalOyyrScpXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBMT0dfSU5fU1VDQ0VTUzpcclxuXHRcdFx0ZHJhZnQubG9nSW5Mb2FkaW5nID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQubG9nSW5Eb25lID0gdHJ1ZVxyXG5cdFx0XHQvL2RyYWZ0Lm1lID0gZHVtbXlVc2VyKGFjdGlvbi5kYXRhKSBmcm9udFxyXG5cdFx0XHRkcmFmdC5tZSA9IGFjdGlvbi5kYXRhIC8vIGJhY2tcclxuXHRcdFx0Y29uc29sZS5sb2coJ3JlZHVjZXIgbG9naW4g7ISx6rO1JylcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIExPR19JTl9GQUlMVVJFOlxyXG5cdFx0XHRkcmFmdC5sb2dJbkxvYWRpbmcgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC5sb2dJbkVycm9yID0gYWN0aW9uLmVycm9yXHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoJ3JlZHVjZXIgbG9naW4g7Iuk7YyoOjogJywgYWN0aW9uLmVycm9yKVxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgTE9HX09VVF9SRVFVRVNUOlxyXG5cdFx0XHRkcmFmdC5sb2dPdXRMb2FkaW5nID0gdHJ1ZVxyXG5cdFx0XHRkcmFmdC5sb2dPdXREb25lID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQubG9nT3V0RXJyb3IgPSBudWxsXHJcblx0XHRcdGNvbnNvbGUubG9nKCdyZWR1Y2VyIGxvZ291dCDsmpTssq0nKVxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgTE9HX09VVF9TVUNDRVNTOlxyXG5cdFx0XHRkcmFmdC5sb2dPdXRMb2FkaW5nID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQubG9nT3V0RG9uZSA9IHRydWVcclxuXHRcdFx0ZHJhZnQubWUgPSBudWxsXHJcblx0XHRcdGNvbnNvbGUubG9nKCdyZWR1Y2VyIGxvZ291dCDshLHqs7UnKVxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgTE9HX09VVF9GQUlMVVJFOlxyXG5cdFx0XHRkcmFmdC5sb2dPdXRMb2FkaW5nID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQubG9nT3V0RXJyb3IgPSBhY3Rpb24uZXJyb3JcclxuXHRcdFx0Y29uc29sZS5lcnJvcigncmVkdWNlciBsb2dvdXQg7Iuk7YyoJywgYWN0aW9uLmVycm9yKVxyXG5cdFx0XHRicmVha1xyXG5cdFx0Y2FzZSBTSUdOX1VQX1JFUVVFU1Q6XHJcblx0XHRcdGRyYWZ0LnNpZ25VcExvYWRpbmcgPSB0cnVlXHJcblx0XHRcdGRyYWZ0LnNpZ25VcERvbmUgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC5zaWduVXBFcnJvciA9IG51bGxcclxuXHRcdFx0Y29uc29sZS5sb2coJ3JlZHVjZXIgc2lnbnVwIOyalOyyrScpXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBTSUdOX1VQX1NVQ0NFU1M6XHJcblx0XHRcdGRyYWZ0LnNpZ25VcExvYWRpbmcgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC5zaWduVXBEb25lID0gdHJ1ZVxyXG5cdFx0XHRjb25zb2xlLmxvZygncmVkdWNlciBzaWduVXAg7ISx6rO1JylcclxuXHRcdFx0YnJlYWtcclxuXHRcdGNhc2UgU0lHTl9VUF9GQUlMVVJFOlxyXG5cdFx0XHRkcmFmdC5zaWduVXBMb2FkaW5nID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQuc2lnblVwRXJyb3IgPSBhY3Rpb24uZXJyb3JcclxuXHRcdFx0Y29uc29sZS5lcnJvcigncmVkdWNlciBzaWduVXAg7Iuk7YyoJywgYWN0aW9uLmVycm9yKVxyXG5cdFx0XHRicmVha1xyXG5cdFx0Y2FzZSBDSEFOR0VfTklDS05BTUVfUkVRVUVTVDpcclxuXHRcdFx0ZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nID0gdHJ1ZVxyXG5cdFx0XHRkcmFmdC5jaGFuZ2VOaWNrbmFtZURvbmUgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC5jaGFuZ2VOaWNrbmFtZUVycm9yID0gbnVsbFxyXG5cdFx0XHRjb25zb2xlLmxvZygncmVkdWNlciBDSEFOR0VfTklDS05BTUVfUkVRVUVTVCDsmpTssq0nKVxyXG5cdFx0XHRicmVha1xyXG5cdFx0Y2FzZSBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUzpcclxuXHRcdFx0ZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQuY2hhbmdlTmlja25hbWVEb25lID0gdHJ1ZVxyXG5cdFx0XHRjb25zb2xlLmxvZygncmVkdWNlciBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyDshLHqs7UnKVxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkU6XHJcblx0XHRcdGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LmNoYW5nZU5pY2tuYW1lRXJyb3IgPSBhY3Rpb24uZXJyb3JcclxuXHRcdFx0Y29uc29sZS5lcnJvcigncmVkdWNlciBDSEFOR0VfTklDS05BTUUg7Iuk7YyoJywgYWN0aW9uLmVycm9yKVxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgTE9BRF9GT0xMT1dFUlNfUkVRVUVTVDpcclxuXHRcdFx0ZHJhZnQubG9hZEZvbGxvd2Vyc0xvYWRpbmcgPSB0cnVlXHJcblx0XHRcdGRyYWZ0LmxvYWRGb2xsb3dlcnNEb25lID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQubG9hZEZvbGxvd2Vyc0Vycm9yID0gbnVsbFxyXG5cdFx0XHRjb25zb2xlLmxvZygncmVkdWNlciBMT0FEX0ZPTExPV0VSU19SRVFVRVNUIOyalOyyrScpXHJcblx0XHRcdGJyZWFrXHJcblx0XHRjYXNlIExPQURfRk9MTE9XRVJTX1NVQ0NFU1M6XHJcblx0XHRcdGRyYWZ0LmxvYWRGb2xsb3dlcnNMb2FkaW5nID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQubG9hZEZvbGxvd2Vyc0RvbmUgPSB0cnVlXHJcblx0XHRcdGRyYWZ0Lm1lLkZvbGxvd2VycyA9IGFjdGlvbi5kYXRhXHJcblx0XHRcdGNvbnNvbGUubG9nKCdyZWR1Y2VyIExPQURfRk9MTE9XRVJTX1NVQ0NFU1Mg7ISx6rO1JylcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIExPQURfRk9MTE9XRVJTX0ZBSUxVUkU6XHJcblx0XHRcdGRyYWZ0LmxvYWRGb2xsb3dlcnNMb2FkaW5nID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQubG9hZEZvbGxvd2Vyc0Vycm9yID0gYWN0aW9uLmVycm9yXHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoJ3JlZHVjZXIgTE9BRF9GT0xMT1dFUlMg7Iuk7YyoJywgYWN0aW9uLmVycm9yKVxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1Q6XHJcblx0XHRcdGRyYWZ0LmxvYWRGb2xsb3dpbmdzTG9hZGluZyA9IHRydWVcclxuXHRcdFx0ZHJhZnQubG9hZEZvbGxvd2luZ3NEb25lID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQubG9hZEZvbGxvd2luZ3NFcnJvciA9IG51bGxcclxuXHRcdFx0Y29uc29sZS5sb2coJ3JlZHVjZXIgTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1Qg7JqU7LKtJylcclxuXHRcdFx0YnJlYWtcclxuXHRcdGNhc2UgTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1M6XHJcblx0XHRcdGRyYWZ0LmxvYWRGb2xsb3dpbmdzTG9hZGluZyA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LmxvYWRGb2xsb3dpbmdzRG9uZSA9IHRydWVcclxuXHRcdFx0ZHJhZnQubWUuRm9sbG93aW5ncyA9IGFjdGlvbi5kYXRhXHJcblx0XHRcdGNvbnNvbGUubG9nKCdyZWR1Y2VyIExPQURfRk9MTE9XSU5HU19TVUNDRVNTIOyEseqztScpXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRTpcclxuXHRcdFx0ZHJhZnQubG9hZEZvbGxvd2luZ3NMb2FkaW5nID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQubG9hZEZvbGxvd2luZ3NFcnJvciA9IGFjdGlvbi5lcnJvclxyXG5cdFx0XHRjb25zb2xlLmVycm9yKCdyZWR1Y2VyIExPQURfRk9MTE9XSU5HUyDsi6TtjKgnLCBhY3Rpb24uZXJyb3IpXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBBRERfUE9TVF9UT19NRTogLy8g6rKM7Iuc6riA7J2EIOyTsOuptCDqsozsi5zquIAg7JWE7J2065SU6rCAIOyXrOq4sOuhnCDrk6TslrTsmYDshJwg7ZWY64KY6rCAIOy2lOqwgOuQnOuLpFxyXG5cdFx0XHRkcmFmdC5tZS5Qb3N0cy51bnNoaWZ0KHtpZDogYWN0aW9uLmRhdGF9KVxyXG5cdFx0XHRjb25zb2xlLmxvZygnQUREX1BPU1RfVE9fTUUg7ISx6rO1JylcclxuXHRcdFx0YnJlYWtcclxuXHRcdFx0Ly8gcmV0dXJuIHtcclxuXHRcdFx0Ly8gXHQuLi5zdGF0ZSxcclxuXHRcdFx0Ly8gXHRtZToge1xyXG5cdFx0XHQvLyBcdFx0Li4uc3RhdGUubWUsXHJcblx0XHRcdC8vIFx0XHRQb3N0czogW3tpZDogYWN0aW9uLmRhdGF9LCAuLi5zdGF0ZS5tZS5Qb3N0c10sXHJcblx0XHRcdC8vIFx0fVxyXG5cdFx0XHQvLyB9XHJcblx0XHRjYXNlIFJFTU9WRV9QT1NUX09GX01FOlxyXG5cdFx0XHRkcmFmdC5tZS5Qb3N0cyA9IGRyYWZ0Lm1lLlBvc3RzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEpXHJcblx0XHRcdGNvbnNvbGUubG9nKCdSRU1PVkVfUE9TVF9PRl9NRScpXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0XHQvLyByZXR1cm4geyAvLyDrtojrs4DshLHsnYQg7KeA7YKk66mwIOqyjOyLnOq4gOydhCDsp4Dsm4zslbztlZzri6QuXHJcblx0XHRcdC8vIFx0Li4uc3RhdGUsXHJcblx0XHRcdC8vIFx0bWU6IHtcclxuXHRcdFx0Ly8gXHRcdC4uLnN0YXRlLm1lLFxyXG5cdFx0XHQvLyBcdFx0UG9zdHM6IHN0YXRlLm1lLlBvc3RzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEpXHJcblx0XHRcdC8vIFx0fVxyXG5cdFx0XHQvLyB9XHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRicmVhaztcclxuXHR9XHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyOyIsImltcG9ydCB7YWxsLCBjYWxsLCBkZWxheSwgZm9yaywgcHV0LCB0YWtlTGF0ZXN0fSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHtcclxuXHRDSEFOR0VfTklDS05BTUVfRkFJTFVSRSxcclxuXHRDSEFOR0VfTklDS05BTUVfUkVRVUVTVCxcclxuXHRDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyxcclxuXHRGT0xMT1dfRkFJTFVSRSxcclxuXHRGT0xMT1dfUkVRVUVTVCxcclxuXHRGT0xMT1dfU1VDQ0VTUywgTE9BRF9GT0xMT1dFUlNfRkFJTFVSRSwgTE9BRF9GT0xMT1dFUlNfUkVRVUVTVCxcclxuXHRMT0FEX0ZPTExPV0VSU19TVUNDRVNTLCBMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRSwgTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1QsIExPQURfRk9MTE9XSU5HU19TVUNDRVNTLFxyXG5cdExPQURfTVlfSU5GT19GQUlMVVJFLFxyXG5cdExPQURfTVlfSU5GT19SRVFVRVNULFxyXG5cdExPQURfTVlfSU5GT19TVUNDRVNTLCBMT0FEX1VTRVJfRkFJTFVSRSwgTE9BRF9VU0VSX1JFUVVFU1QsIExPQURfVVNFUl9TVUNDRVNTLFxyXG5cdExPR19JTl9GQUlMVVJFLFxyXG5cdExPR19JTl9SRVFVRVNULFxyXG5cdExPR19JTl9TVUNDRVNTLFxyXG5cdExPR19PVVRfRkFJTFVSRSxcclxuXHRMT0dfT1VUX1JFUVVFU1QsXHJcblx0TE9HX09VVF9TVUNDRVNTLCBSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRSwgUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1QsIFJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTLFxyXG5cdFNJR05fVVBfRkFJTFVSRSxcclxuXHRTSUdOX1VQX1JFUVVFU1QsXHJcblx0U0lHTl9VUF9TVUNDRVNTLFxyXG5cdFVORk9MTE9XX0ZBSUxVUkUsXHJcblx0VU5GT0xMT1dfUkVRVUVTVCxcclxuXHRVTkZPTExPV19TVUNDRVNTLFxyXG59IGZyb20gXCIuLi9yZWR1Y2Vycy91c2VyXCI7XHJcblxyXG5cclxuZnVuY3Rpb24gbG9nSW5BUEkoZGF0YSkgeyAvLyBnZW5lcmF0b3Ig7JWE64uYXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly9yZXR1cm4gYXhpb3MucG9zdCgnL2FwaS9sb2dpbicsIGRhdGEpIC8vIOyLpOygnCDshJzrsoTsl5Ag66Gc6re47J24IOyalOyyreydhCDrs7Trg4QgLy8gZnJvbnRcclxuXHJcblx0Ly8g7Iuk7KCcIOyEnOuyhOyXkCDroZzqt7jsnbgg7JqU7LKt7J2EIOuztOuDhCAvLyBiYWNrXHJcblx0Ly9yZXR1cm4gYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDY1L3VzZXIvbG9naW4nLCBkYXRhKVxyXG5cclxuXHQvLyBsb2NhbGhvc3Qg7KSR67O1IOyXhuyVoOq4sFxyXG5cdHJldHVybiBheGlvcy5wb3N0KCcvdXNlci9sb2dpbicsIGRhdGEpXHJcbn1cclxuXHJcbi8vIO2FjOyKpO2KuCDsvZTrk5xcclxuLy8gY29uc3QgbCA9IGxvZ0luKHt0eXBlOiAnTE9HX0lOX1JFUVVFU1QnLCBkYXRhOiB7aWQ6ICdybGFhbHNkbjhAbmF2ZXIuY29tJ319KVxyXG4vLyBcdFx0bC5uZXh0KCk7XHJcbi8vIFx0XHRsLm5leHQoKTtcclxuLy8vLy8vLy8vLy8vLy8vLy9cclxuZnVuY3Rpb24qIGxvZ0luKGFjdGlvbikgeyAvLyBsb2dpbiBhY3Rpb24gcmVxdWVzdCDqsIAgYWN0aW9uIOyXkCDsoITri6xcclxuXHR0cnkgeyAvLyDsmpTssq0g7Iuk7YyoIOuMgOu5hFxyXG5cdFx0Ly95aWVsZCBkZWxheSgxMDAwKSAvLyBmcm9udFxyXG5cdFx0Y29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2dJbkFQSSwgYWN0aW9uLmRhdGEpIC8vIOyEnOuyhOyXkOyEnCDrsJvsnYAg6rKw6rO8IOqwkuydhCDrsJvsnYxcclxuXHRcdGNvbnNvbGUubG9nKCdzYWdhIGxvZ0luIOyLpO2WieykkTo6JywgYWN0aW9uLmRhdGEpXHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOiBMT0dfSU5fU1VDQ0VTUyxcclxuXHRcdFx0Ly9kYXRhOiBhY3Rpb24uZGF0YSwgLy8gZnJvbnRcclxuXHRcdFx0ZGF0YTogcmVzdWx0LmRhdGEgLy8gKOyEseqztSDqsrDqs7wg64u06rmAKSBiYWNrXHJcblx0XHR9KVxyXG5cdFx0Y29uc29sZS5sb2coJ3NhZ2EgbG9nSW4g7JmE66OMIDo6JywgcmVzdWx0KVxyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0Y29uc29sZS5lcnJvcignbG9nSW4nLCBlcnIpXHJcblx0XHR5aWVsZCBwdXQoeyAvLyBwdXQg7J2AIGRpc3BhdGNoIOudvOqzoCDsg53qsIHtlZjsnpBcclxuXHRcdFx0dHlwZTogTE9HX0lOX0ZBSUxVUkUsXHJcblx0XHRcdGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSAvLyAo7Iuk7YyoIOqysOqzvCDri7TquYApXHJcblx0XHR9KVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9nT3V0QVBJKCkge1xyXG5cdC8vIHJldHVybiBheGlvcy5wb3N0KCcvYXBpL2xvZ291dCcpIGZyb250XHJcblx0cmV0dXJuIGF4aW9zLnBvc3QoJy91c2VyL2xvZ291dCcpXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2dPdXQoKSB7XHJcblx0dHJ5IHsgLy8g7JqU7LKtIOyLpO2MqCDrjIDruYRcclxuXHRcdC8veWllbGQgZGVsYXkoMTAwMCkgZnJvbnRcclxuXHRcdHlpZWxkIGNhbGwobG9nT3V0QVBJKSAvLyDshJzrsoTsl5DshJwg67Cb7J2AIOqysOqzvCDqsJLsnYQg67Cb7J2MIGJhY2tcclxuXHRcdGNvbnNvbGUubG9nKCdzYWdhczo6IGxvZ291dCDsi6TtloknKVxyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogTE9HX09VVF9TVUNDRVNTLFxyXG5cdFx0fSlcclxuXHRcdGNvbnNvbGUubG9nKCdzYWdhczo6IGxvZ291dCDsmYTro4wnKVxyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0Y29uc29sZS5lcnJvcignZnJvbnQgbG9nT3V0IDogJywgZXJyKVxyXG5cdFx0eWllbGQgcHV0KHsgLy8gcHV0IOydgCBkaXNwYXRjaCDrnbzqs6Ag7IOd6rCB7ZWY7J6QXHJcblx0XHRcdHR5cGU6IExPR19PVVRfRkFJTFVSRSxcclxuXHRcdFx0ZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhIC8vICjsi6TtjKgg6rKw6rO8IOuLtOq5gClcclxuXHRcdH0pXHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VOaWNrbmFtZUFQSShkYXRhKSB7IC8vIGdlbmVyYXRvciDslYTri5hcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAvLyDsi6TsoJwg7ISc67KE7JeQIOuhnOq3uOyduCDsmpTssq3snYQg67O064OEIC8vIGJhY2tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAvL3JldHVybiBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwNjUvdXNlci9sb2dpbicsIGRhdGEpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgLy8gbG9jYWxob3N0IOykkeuztSDsl4bslaDquLBcclxuXHRyZXR1cm4gYXhpb3MucGF0Y2goJy91c2VyL25pY2tuYW1lJywge25pY2tuYW1lOiBkYXRhfSlcclxufVxyXG5cclxuZnVuY3Rpb24qIGNoYW5nZU5pY2tuYW1lKGFjdGlvbikgeyAvLyBsb2dpbiBhY3Rpb24gcmVxdWVzdCDqsIAgYWN0aW9uIOyXkCDsoITri6xcclxuXHR0cnkgeyAvLyDsmpTssq0g7Iuk7YyoIOuMgOu5hFxyXG5cdFx0Ly95aWVsZCBkZWxheSgxMDAwKSAvLyBmcm9udFxyXG5cdFx0Y29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChjaGFuZ2VOaWNrbmFtZUFQSSwgYWN0aW9uLmRhdGEpIC8vIOyEnOuyhOyXkOyEnCDrsJvsnYAg6rKw6rO8IOqwkuydhCDrsJvsnYxcclxuXHRcdGNvbnNvbGUubG9nKCdzYWdhIGNoYW5nZU5pY2tuYW1lIOyLpO2WieykkTo6JywgYWN0aW9uLmRhdGEpXHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOiBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyxcclxuXHRcdFx0Ly9kYXRhOiBhY3Rpb24uZGF0YSwgLy8gZnJvbnRcclxuXHRcdFx0ZGF0YTogcmVzdWx0LmRhdGEgLy8gKOyEseqztSDqsrDqs7wg64u06rmAKSBiYWNrXHJcblx0XHR9KVxyXG5cdFx0Y29uc29sZS5sb2coJ3NhZ2EgY2hhbmdlTmlja25hbWUg7JmE66OMIDo6JywgcmVzdWx0KVxyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0Y29uc29sZS5lcnJvcignY2hhbmdlTmlja25hbWUnLCBlcnIpXHJcblx0XHR5aWVsZCBwdXQoeyAvLyBwdXQg7J2AIGRpc3BhdGNoIOudvOqzoCDsg53qsIHtlZjsnpBcclxuXHRcdFx0dHlwZTogQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUsXHJcblx0XHRcdGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSAvLyAo7Iuk7YyoIOqysOqzvCDri7TquYApXHJcblx0XHR9KVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZE15SW5mb0FQSSh1c2VySWQpIHtcclxuXHQvLyDshJzrsoTsl5Ag7JqU7LKt7J2EIOuztOuCtOuKlCDrtoDrtoRcclxuXHRyZXR1cm4gYXhpb3MuZ2V0KHVzZXJJZCA/IGAvdXNlci8ke3VzZXJJZH1gIDogJy91c2VyLycsIHtcclxuXHRcdHdpdGhDcmVkZW50aWFsczogdHJ1ZSwvLyDtgbTrnbzsnbTslrjtirjsl5DshJwg7JqU7LKtIOuztOuCvCDrlYzripQg67iM65287Jqw7KCA6rCAIOy/oO2CpOulvCDqsJnsnbQg64+Z67SJ7ZW07KSY7JqUXHJcblx0fSk7IC8vIOyEnOuyhOyCrOydtOuTnOugjOuNlOungeydvCDrlYzripQsIOu4jOudvOyasOyggOqwgCDsl4bslrTsmpQuXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkTXlJbmZvKGFjdGlvbikge1xyXG5cdHRyeSB7XHJcblx0XHRjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRNeUluZm9BUEksIGFjdGlvbi5kYXRhKVxyXG5cdFx0Y29uc29sZS5sb2coJ3NhZ2EgbG9hZE15SW5mbyDsi6TtlokgOjogJywgYWN0aW9uLmRhdGEpXHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOiBMT0FEX01ZX0lORk9fU1VDQ0VTUyxcclxuXHRcdFx0ZGF0YTogcmVzdWx0LmRhdGEsXHJcblx0XHRcdG1lOiAhYWN0aW9uLmRhdGFcclxuXHRcdH0pXHJcblx0XHRjb25zb2xlLmxvZygnc2FnYSBsb2FkTXlJbmZvIOyEseqztTo6ICcsIHJlc3VsdClcclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoJ3NhZ2EgbG9hZE15SW5mbyBlcnJvciA6OiAnLCBlcnIpXHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOiBMT0FEX01ZX0lORk9fRkFJTFVSRSxcclxuXHRcdFx0ZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhXHJcblx0XHR9KVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gZm9sbG93QVBJKGRhdGEpIHsgLy8gZGF0YSDsl5Ag7IKs7Jqp7J6QIGlkIOuEo+yWtOyjvOq4sFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAvLyByZXR1cm4gYXhpb3MucG9zdCgnL2FwaS9mb2xsb3cnLCBkYXRhKSBmcm9udFxyXG5cdHJldHVybiBheGlvcy5wYXRjaChgL3VzZXIvJHtkYXRhfS9mb2xsb3dgKVxyXG59XHJcblxyXG5mdW5jdGlvbiogZm9sbG93KGFjdGlvbikge1xyXG5cdHRyeSB7XHJcblx0XHQvL3lpZWxkIGRlbGF5KDEwMDApIGZyb250XHJcblx0XHRjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGZvbGxvd0FQSSwgYWN0aW9uLmRhdGEpXHJcblx0XHRjb25zb2xlLmxvZygnc2FnYSBmb2xsb3cg7Iuk7ZaJIDogJywgcmVzdWx0KVxyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogRk9MTE9XX1NVQ0NFU1MsXHJcblx0XHRcdC8vZGF0YTogYWN0aW9uLmRhdGEgZnJvbnRcclxuXHRcdFx0ZGF0YTogcmVzdWx0LmRhdGFcclxuXHRcdH0pXHJcblx0XHRjb25zb2xlLmxvZygnc2FnYSBmb2xsb3cg7JmE66OMIDo6ICcsIHJlc3VsdClcclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoJ3NhZ2EgZm9sbG93IGVycm9yIDo6ICcsIGVycilcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IEZPTExPV19GQUlMVVJFLFxyXG5cdFx0XHRlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcblx0XHR9KVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gdW5mb2xsb3dBUEkoZGF0YSkgey8vIGRhdGEg7JeQIOyCrOyaqeyekCBpZCDrhKPslrTso7zquLBcclxuXHQvL3JldHVybiBheGlvcy5wb3N0KCcvYXBpL3VuZm9sbG93JywgZGF0YSkgZnJvbnRcclxuXHRyZXR1cm4gYXhpb3MuZGVsZXRlKGAvdXNlci8ke2RhdGF9L2ZvbGxvd2ApXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB1bmZvbGxvdyhhY3Rpb24pIHtcclxuXHR0cnkge1xyXG5cdFx0Y29uc3QgcmVzdWx0ID0geWllbGQgY2FsbCh1bmZvbGxvd0FQSSwgYWN0aW9uLmRhdGEpXHJcblx0XHQvL3lpZWxkIGRlbGF5KDEwMDApIGZyb250XHJcblx0XHRjb25zb2xlLmxvZygnc2FnYSB1bmZvbGxvdyDsmpTssq0gOjogJywgYWN0aW9uLmRhdGEpXHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOiBVTkZPTExPV19TVUNDRVNTLFxyXG5cdFx0XHQvL2RhdGE6IGFjdGlvbi5kYXRhIGZyb250XHJcblx0XHRcdGRhdGE6IHJlc3VsdC5kYXRhXHJcblx0XHR9KVxyXG5cdFx0Y29uc29sZS5sb2coJ3NhZ2EgdW5mb2xsb3cg7ISx6rO1OjogJywgcmVzdWx0KVxyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0Y29uc29sZS5lcnJvcignc2FnYSB1bmZvbGxvdyBlcnJvcjo6ICcsIGVycilcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IFVORk9MTE9XX0ZBSUxVUkUsXHJcblx0XHRcdGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuXHRcdH0pXHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBzaWduVXBBUEkoZGF0YSkge1xyXG5cdC8vIGJhY2sgZW5kIHNlcnZlciBhZGRyXHJcblx0Ly8gZGF0YSDripQgZW1haWwsIG5pY2tuYW1lLCBwYXNzd29yZCBvYmplY3RcclxuXHQvL3JldHVybiBheGlvcy5wb3N0KCcvYXBpL3NpZ251cCcsIGRhdGEpIC8vIGZyb250XHJcblx0cmV0dXJuIGF4aW9zLnBvc3QoJy91c2VyJywgZGF0YSkgLy8gYmFja1xyXG59XHJcblxyXG5mdW5jdGlvbiogc2lnblVwKGFjdGlvbikge1xyXG5cdHRyeSB7XHJcblx0XHQvL3lpZWxkIGRlbGF5KDEwMDApXHJcblx0XHRjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHNpZ25VcEFQSSwgYWN0aW9uLmRhdGEpXHJcblx0XHRjb25zb2xlLmxvZygnc2FnYSBzaWduIHVwIHJlc3VsdCDsi6TtlonspJEgOjogJywgYWN0aW9uLmRhdGEpXHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOiBTSUdOX1VQX1NVQ0NFU1MsXHJcblx0XHRcdC8vZGF0YTogcmVzdWx0LmRhdGFcclxuXHRcdH0pXHJcblx0XHRjb25zb2xlLmxvZygnc2FnYSBzaWduIHVwIOyZhOujjCA6OiAnLCByZXN1bHQpXHJcblx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRjb25zb2xlLmVycm9yKCdzYWdhIHNpZ25VcCBlcnJvciA6ICcsIGVycilcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IFNJR05fVVBfRkFJTFVSRSxcclxuXHRcdFx0ZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhXHJcblx0XHR9KVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZEZvbGxvd2Vyc0FQSShkYXRhKSB7XHJcblx0cmV0dXJuIGF4aW9zLmdldCgnL3VzZXIvZm9sbG93ZXJzJywgZGF0YSlcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRGb2xsb3dlcnMoYWN0aW9uKSB7XHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZEZvbGxvd2Vyc0FQSSwgYWN0aW9uLmRhdGEpXHJcblx0XHRjb25zb2xlLmxvZygnc2FnYSBmb2xsb3dlcnM6OiDsmpTssq0nLCBhY3Rpb24uZGF0YSlcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IExPQURfRk9MTE9XRVJTX1NVQ0NFU1MsXHJcblx0XHRcdGRhdGE6IHJlc3VsdC5kYXRhLFxyXG5cdFx0fSlcclxuXHRcdGNvbnNvbGUubG9nKCdzYWdhIGZvbGxvd2Vyczo6IOyEseqztScsIHJlc3VsdClcclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoJ3NhZ2EgZm9sbG93ZXJzOjonLCBlcnIpXHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOiBMT0FEX0ZPTExPV0VSU19GQUlMVVJFLFxyXG5cdFx0XHRlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcblx0XHR9KVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZEZvbGxvd2luZ3NBUEkoZGF0YSkge1xyXG5cdHJldHVybiBheGlvcy5nZXQoJy91c2VyL2ZvbGxvd2luZ3MnLCBkYXRhKVxyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZEZvbGxvd2luZ3MoYWN0aW9uKSB7XHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZEZvbGxvd2luZ3NBUEksIGFjdGlvbi5kYXRhKVxyXG5cdFx0Y29uc29sZS5sb2coJ3NhZ2EgZm9sbG93aW5ncyDsmpTssq06OicsIGFjdGlvbi5kYXRhKVxyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1MsXHJcblx0XHRcdGRhdGE6IHJlc3VsdC5kYXRhXHJcblx0XHR9KVxyXG5cdFx0Y29uc29sZS5sb2coJ3NhZ2EgZm9sbG93aW5ncyDshLHqs7U6OicsIHJlc3VsdClcclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoJ3NhZ2EgZm9sbG93aW5ncyDsi6TtjKg6OicsIGVycilcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IExPQURfRk9MTE9XSU5HU19GQUlMVVJFLFxyXG5cdFx0XHRlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGFcclxuXHRcdH0pXHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVGb2xsb3dlckFQSShkYXRhKSB7XHJcblx0cmV0dXJuIGF4aW9zLmRlbGV0ZShgL3VzZXIvZm9sbG93ZXIvJHtkYXRhfWApIC8vIOuqh+uyiOynuOydmCDtjJTroZzsm4zrpbwg7KCc6rGw7ZWc64ukXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiByZW1vdmVGb2xsb3dlcihhY3Rpb24pIHtcclxuXHR0cnkge1xyXG5cdFx0Y29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChyZW1vdmVGb2xsb3dlckFQSSwgYWN0aW9uLmRhdGEpXHJcblx0XHRjb25zb2xlLmxvZygnc2FnYSByZW1vdmVGb2xsb3dlciDsmpTssq06OiAnLCBhY3Rpb24uZGF0YSlcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IFJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTLFxyXG5cdFx0XHRkYXRhOiByZXN1bHQuZGF0YVxyXG5cdFx0fSlcclxuXHRcdGNvbnNvbGUubG9nKCdzYWdhIHJlbW92ZUZvbGxvd2VyIOyEseqztTo6ICcsIHJlc3VsdClcclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoJ3NhZ2EgcmVtb3ZlRm9sbG93ZXIg7Iuk7YyoOjogJywgZXJyKVxyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkUsXHJcblx0XHRcdGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YVxyXG5cdFx0fSlcclxuXHR9XHJcbn1cclxuZnVuY3Rpb24gbG9hZFVzZXJBUEkoZGF0YSl7XHJcblx0cmV0dXJuIGF4aW9zLmdldChgL3VzZXIvJHtkYXRhfWApXHJcbn1cclxuZnVuY3Rpb24qIGxvYWRVc2VyKGFjdGlvbil7XHJcblx0dHJ5IHtcclxuXHQgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkVXNlckFQSSwgYWN0aW9uLmRhdGEpXHJcblx0XHRjb25zb2xlLmxvZygnc2FnYSBsb2FkVXNlciDsi6TtlokgOjogJywgYWN0aW9uLmRhdGEpXHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOiBMT0FEX1VTRVJfU1VDQ0VTUyxcclxuXHRcdFx0ZGF0YTogcmVzdWx0LmRhdGFcclxuXHRcdH0pXHJcblx0XHRjb25zb2xlLmxvZygnc2FnYSBsb2FkVXNlciDshLHqs7UgOjogJywgcmVzdWx0KVxyXG5cdH1jYXRjaCAoZXJyKSB7XHJcblx0XHRjb25zb2xlLmVycm9yKCdzYWdhIGxvYWRVc2VyIEZhaWx1cmUg7Iuk7YyoIDo6ICcsIGVycilcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IExPQURfVVNFUl9GQUlMVVJFLFxyXG5cdFx0XHRlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGFcclxuXHRcdH0pXHJcblx0fVxyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRVc2VyKCl7XHJcblx0eWllbGQgdGFrZUxhdGVzdChMT0FEX1VTRVJfUkVRVUVTVCwgbG9hZFVzZXIpXHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoUmVtb3ZlRm9sbG93ZXIoKSB7XHJcblx0eWllbGQgdGFrZUxhdGVzdChSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCwgcmVtb3ZlRm9sbG93ZXIpXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRGb2xsb3dlcnMoKSB7XHJcblx0eWllbGQgdGFrZUxhdGVzdChMT0FEX0ZPTExPV0VSU19SRVFVRVNULCBsb2FkRm9sbG93ZXJzKVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkRm9sbG93aW5ncygpIHtcclxuXHR5aWVsZCB0YWtlTGF0ZXN0KExPQURfRk9MTE9XSU5HU19SRVFVRVNULCBsb2FkRm9sbG93aW5ncylcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoQ2hhbmdlTmlja25hbWUoKSB7XHJcblx0eWllbGQgdGFrZUxhdGVzdChDSEFOR0VfTklDS05BTUVfUkVRVUVTVCwgY2hhbmdlTmlja25hbWUpXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRNeUluZm8oKSB7XHJcblx0eWllbGQgdGFrZUxhdGVzdChMT0FEX01ZX0lORk9fUkVRVUVTVCwgbG9hZE15SW5mbylcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoRm9sbG93KCkge1xyXG5cdHlpZWxkIHRha2VMYXRlc3QoRk9MTE9XX1JFUVVFU1QsIGZvbGxvdylcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoVW5Gb2xsb3coKSB7XHJcblx0eWllbGQgdGFrZUxhdGVzdChVTkZPTExPV19SRVFVRVNULCB1bmZvbGxvdylcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9nSW4oKSB7XHQvLyDroZzqt7jsnbgg7JWh7IWY7J20IOyLpO2WieuQoOuVjOq5jOyngCDquLDri6TrpqzqsqDri6TripQg65y7XHJcblx0eWllbGQgdGFrZUxhdGVzdChMT0dfSU5fUkVRVUVTVCwgbG9nSW4pIC8vTE9HX0lOX1JFUVVFU1Qg7JWh7IWY7J20IOyLpO2WieuQmOuptCBsb2dJbiDtlajsiJgg7Iuk7ZaJXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvZ091dCgpIHtcdC8vIOuhnOq3uOyVhOybgyDslaHshZjsnbQg7Iuk7ZaJ65Cg65WM6rmM7KeAIOq4sOuLpOumrOqyoOuLpOuKlCDrnLtcclxuXHR5aWVsZCB0YWtlTGF0ZXN0KExPR19PVVRfUkVRVUVTVCwgbG9nT3V0KSAvL0xPR19PVVRfUkVRVUVTVCDslaHshZjsnbQg7Iuk7ZaJ65CY66m0IGxvZ0luIO2VqOyImCDsi6TtlolcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoU2lnblVwKCkge1x0Ly8g7ZqM7JuQ6rCA7J6FIOyVoeyFmOydtCDsi6TtlonrkKDrlYzquYzsp4Ag6riw64uk66as6rKg64uk64qUIOucu1xyXG5cdHlpZWxkIHRha2VMYXRlc3QoU0lHTl9VUF9SRVFVRVNULCBzaWduVXApIC8vIFNJR05fVVBfUkVRVUVTVCDslaHshZjsnbQg7Iuk7ZaJ65CY66m0IGxvZ0luIO2VqOyImCDsi6TtlolcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHVzZXJTYWdhKCkge1xyXG5cdHlpZWxkIGFsbChbXHJcblx0XHRcdGZvcmsod2F0Y2hMb2FkVXNlciksXHJcblx0XHRmb3JrKHdhdGNoUmVtb3ZlRm9sbG93ZXIpLFxyXG5cdFx0Zm9yayh3YXRjaExvYWRGb2xsb3dlcnMpLFxyXG5cdFx0Zm9yayh3YXRjaExvYWRGb2xsb3dpbmdzKSxcclxuXHRcdGZvcmsod2F0Y2hDaGFuZ2VOaWNrbmFtZSksXHJcblx0XHRmb3JrKHdhdGNoTG9hZE15SW5mbyksXHJcblx0XHRmb3JrKHdhdGNoRm9sbG93KSxcclxuXHRcdGZvcmsod2F0Y2hVbkZvbGxvdyksXHJcblx0XHRmb3JrKHdhdGNoTG9nSW4pLFxyXG5cdFx0Zm9yayh3YXRjaExvZ091dCksXHJcblx0XHRmb3JrKHdhdGNoU2lnblVwKSxcclxuXHRdKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=