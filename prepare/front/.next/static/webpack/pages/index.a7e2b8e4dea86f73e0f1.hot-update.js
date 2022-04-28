webpackHotUpdate_N_E("pages/index",{

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, LOAD_MY_INFO_REQUEST, LOAD_MY_INFO_SUCCESS, LOAD_MY_INFO_FAILURE, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, CHANGE_NICKNAME_REQUEST, CHANGE_NICKNAME_SUCCESS, CHANGE_NICKNAME_FAILURE, FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE, ADD_POST_TO_ME, REMOVE_POST_OF_ME, loginRequestAction, logoutRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_REQUEST", function() { return LOAD_MY_INFO_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_SUCCESS", function() { return LOAD_MY_INFO_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_FAILURE", function() { return LOAD_MY_INFO_FAILURE; });
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_TO_ME", function() { return ADD_POST_TO_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_OF_ME", function() { return REMOVE_POST_OF_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginRequestAction", function() { return loginRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutRequestAction", function() { return logoutRequestAction; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");

var initialState = {
  loadMyInfoLoading: false,
  // 유저 정보 보기 시도중일땐 로딩중 띄울거임
  loadMyInfoDone: false,
  // 유저 정보 보기 됨
  loadMyInfoError: null,
  // 유저 정보 보기중일때 에러 없앰
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
  // 팔로우중일때 에러 없앰
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
  loginData: {}
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

var LOAD_MY_INFO_REQUEST = 'LOAD_MY_INFO_REQUEST';
var LOAD_MY_INFO_SUCCESS = 'LOAD_MY_INFO_SUCCESS';
var LOAD_MY_INFO_FAILURE = 'LOAD_MY_INFO_FAILURE';
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
var UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE'; // 유저 리듀서의 상태를 바꿀수있는 액션 생성

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
      case LOAD_MY_INFO_REQUEST:
        // store 에서 보낸 state 가 만들어짐, state 자체가 user.js 의 state 임
        draft.loadMyInfoLoading = true;
        draft.loadMyInfoError = null; // 로딩 중일때는 에러 없앰

        draft.loadMyInfoDone = false;
        console.log('reducer myInfo 요청');
        break;

      case LOAD_MY_INFO_SUCCESS:
        draft.loadMyInfoLoading = false;
        draft.me = action.data; // back 사용자 정보가 들어있음

        draft.loadMyInfoDone = true; //draft.me = dummyUser(action.data)

        console.log('reducer myInfo 성공');
        break;

      case LOAD_MY_INFO_FAILURE:
        console.error('loadMyInfoFail :: ' + action.error);
        draft.loadMyInfoLoading = false;
        draft.loadMyInfoError = action.error;
        break;

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJsb2FkTXlJbmZvTG9hZGluZyIsImxvYWRNeUluZm9Eb25lIiwibG9hZE15SW5mb0Vycm9yIiwiZm9sbG93TG9hZGluZyIsImZvbGxvd0RvbmUiLCJmb2xsb3dFcnJvciIsInVuZm9sbG93TG9hZGluZyIsInVuZm9sbG93RG9uZSIsInVuZm9sbG93RXJyb3IiLCJsb2dJbkxvYWRpbmciLCJsb2dJbkRvbmUiLCJsb2dJbkVycm9yIiwibG9nT3V0TG9hZGluZyIsImxvZ091dERvbmUiLCJsb2dPdXRFcnJvciIsInNpZ25VcExvYWRpbmciLCJzaWduVXBEb25lIiwic2lnblVwRXJyb3IiLCJjaGFuZ2VOaWNrbmFtZUxvYWRpbmciLCJjaGFuZ2VOaWNrbmFtZURvbmUiLCJjaGFuZ2VOaWNrbmFtZUVycm9yIiwibWUiLCJzaWduVXBEYXRhIiwibG9naW5EYXRhIiwiTE9BRF9NWV9JTkZPX1JFUVVFU1QiLCJMT0FEX01ZX0lORk9fU1VDQ0VTUyIsIkxPQURfTVlfSU5GT19GQUlMVVJFIiwiTE9HX0lOX1JFUVVFU1QiLCJMT0dfSU5fU1VDQ0VTUyIsIkxPR19JTl9GQUlMVVJFIiwiTE9HX09VVF9SRVFVRVNUIiwiTE9HX09VVF9TVUNDRVNTIiwiTE9HX09VVF9GQUlMVVJFIiwiU0lHTl9VUF9SRVFVRVNUIiwiU0lHTl9VUF9TVUNDRVNTIiwiU0lHTl9VUF9GQUlMVVJFIiwiQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QiLCJDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyIsIkNIQU5HRV9OSUNLTkFNRV9GQUlMVVJFIiwiRk9MTE9XX1JFUVVFU1QiLCJGT0xMT1dfU1VDQ0VTUyIsIkZPTExPV19GQUlMVVJFIiwiVU5GT0xMT1dfUkVRVUVTVCIsIlVORk9MTE9XX1NVQ0NFU1MiLCJVTkZPTExPV19GQUlMVVJFIiwiQUREX1BPU1RfVE9fTUUiLCJSRU1PVkVfUE9TVF9PRl9NRSIsImxvZ2luUmVxdWVzdEFjdGlvbiIsImRhdGEiLCJ0eXBlIiwibG9nb3V0UmVxdWVzdEFjdGlvbiIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInByb2R1Y2UiLCJkcmFmdCIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsIkZvbGxvd2luZ3MiLCJwdXNoIiwiaWQiLCJVc2VySWQiLCJmaWx0ZXIiLCJ2IiwiUG9zdHMiLCJ1bnNoaWZ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLElBQU1BLFlBQVksR0FBRztBQUMzQkMsbUJBQWlCLEVBQUUsS0FEUTtBQUNEO0FBQzFCQyxnQkFBYyxFQUFFLEtBRlc7QUFFSjtBQUN2QkMsaUJBQWUsRUFBRSxJQUhVO0FBR0o7QUFDdkJDLGVBQWEsRUFBRSxLQUpZO0FBSUw7QUFDdEJDLFlBQVUsRUFBRSxLQUxlO0FBS1I7QUFDbkJDLGFBQVcsRUFBRSxJQU5jO0FBTVI7QUFDbkJDLGlCQUFlLEVBQUUsS0FQVTtBQU9IO0FBQ3hCQyxjQUFZLEVBQUUsS0FSYTtBQVFOO0FBQ3JCQyxlQUFhLEVBQUUsSUFUWTtBQVNOO0FBQ3JCQyxjQUFZLEVBQUUsS0FWYTtBQVVOO0FBQ3JCQyxXQUFTLEVBQUUsS0FYZ0I7QUFXVDtBQUNsQkMsWUFBVSxFQUFFLElBWmU7QUFZVDtBQUNsQkMsZUFBYSxFQUFFLEtBYlk7QUFhTDtBQUN0QkMsWUFBVSxFQUFFLEtBZGU7QUFjUjtBQUNuQkMsYUFBVyxFQUFFLElBZmM7QUFnQjNCQyxlQUFhLEVBQUUsS0FoQlk7QUFnQkw7QUFDdEJDLFlBQVUsRUFBRSxLQWpCZTtBQWlCUjtBQUNuQkMsYUFBVyxFQUFFLElBbEJjO0FBbUIzQkMsdUJBQXFCLEVBQUUsS0FuQkk7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LEVBQU4sQ0FBUzRDLEtBQVQsQ0FBZUYsTUFBZixDQUFzQixVQUFDQyxDQUFEO0FBQUEsaUJBQU9BLENBQUMsQ0FBQ0gsRUFBRixLQUFTUixNQUFNLENBQUNMLElBQXZCO0FBQUEsU0FBdEIsQ0FBakI7QUFDQVEsZUFBTyxDQUFDQyxHQUFSLENBQVksbUJBQVo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNEO0FBQ0M7QUFySkY7QUF1SkEsR0F4SndELENBQXpDO0FBQUEsQ0FBaEI7O0FBMEplTixzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hN2UyYjhlNGRlYTg2ZjczZTBmMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHByb2R1Y2UgZnJvbSAnaW1tZXInXHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG5cdGxvYWRNeUluZm9Mb2FkaW5nOiBmYWxzZSwgLy8g7Jyg7KCAIOygleuztCDrs7TquLAg7Iuc64+E7KSR7J2865WQIOuhnOuUqeykkSDrnYTsmrjqsbDsnoRcclxuXHRsb2FkTXlJbmZvRG9uZTogZmFsc2UsIC8vIOycoOyggCDsoJXrs7Qg67O06riwIOuQqFxyXG5cdGxvYWRNeUluZm9FcnJvcjogbnVsbCwgLy8g7Jyg7KCAIOygleuztCDrs7TquLDspJHsnbzrlYwg7JeQ65+sIOyXhuyVsFxyXG5cdGZvbGxvd0xvYWRpbmc6IGZhbHNlLCAvLyDtjJTroZzsmrAg7Iuc64+E7KSR7J2865WQIOuhnOuUqeykkSDrnYTsmrjqsbDsnoRcclxuXHRmb2xsb3dEb25lOiBmYWxzZSwgLy8g7YyU66Gc7JqwIOuQqFxyXG5cdGZvbGxvd0Vycm9yOiBudWxsLCAvLyDtjJTroZzsmrDspJHsnbzrlYwg7JeQ65+sIOyXhuyVsFxyXG5cdHVuZm9sbG93TG9hZGluZzogZmFsc2UsIC8vIOyWuO2MlOuhnOyasCDsi5zrj4TspJHsnbzrlZAg66Gc65Sp7KSRIOudhOyauOqxsOyehFxyXG5cdHVuZm9sbG93RG9uZTogZmFsc2UsIC8vIOyWuO2MlOuhnOyasCDrkKhcclxuXHR1bmZvbGxvd0Vycm9yOiBudWxsLCAvLyDtjJTroZzsmrDspJHsnbzrlYwg7JeQ65+sIOyXhuyVsFxyXG5cdGxvZ0luTG9hZGluZzogZmFsc2UsIC8vIOuhnOq3uOyduCDsi5zrj4TspJHsnbzrlZAg66Gc65Sp7KSRIOudhOyauOqxsOyehFxyXG5cdGxvZ0luRG9uZTogZmFsc2UsIC8vIOuhnOq3uOyduCDrkKhcclxuXHRsb2dJbkVycm9yOiBudWxsLCAvLyDroZzrlKnspJHsnbzrlYwg7JeQ65+sIOyXhuyVsFxyXG5cdGxvZ091dExvYWRpbmc6IGZhbHNlLCAvLyDroZzqt7jslYTsm4Mg7Iuc64+E7KSRXHJcblx0bG9nT3V0RG9uZTogZmFsc2UsIC8vIOuhnOq3uOyVhOybgyDsmYTro4xcclxuXHRsb2dPdXRFcnJvcjogbnVsbCxcclxuXHRzaWduVXBMb2FkaW5nOiBmYWxzZSwgLy8g7ZqM7JuQ6rCA7J6FIOuhnOuUqeykkVxyXG5cdHNpZ25VcERvbmU6IGZhbHNlLCAvLyDtmozsm5Ag6rCA7J6FIOyZhOujjFxyXG5cdHNpZ25VcEVycm9yOiBudWxsLFxyXG5cdGNoYW5nZU5pY2tuYW1lTG9hZGluZzogZmFsc2UsIC8vIOuLieuEpOyehCDrs4Dqsr0g66Gc65Sp7KSRXHJcblx0Y2hhbmdlTmlja25hbWVEb25lOiBmYWxzZSwgLy8g64uJ64Sk7J6EIOuzgOqyvSDsmYTro4xcclxuXHRjaGFuZ2VOaWNrbmFtZUVycm9yOiBudWxsLFxyXG5cdG1lOiBudWxsLFxyXG5cdHNpZ25VcERhdGE6IHt9LCAvLyDtmozsm5Ag6rCA7J6FIOuNsOydtO2EsFxyXG5cdGxvZ2luRGF0YToge30sXHJcbn1cclxuXHJcbi8vIOuhnOq3uOyduCDslaHshZgg7IOd7ISx6riwIHRodW5rXHJcbi8vIGV4cG9ydCBjb25zdCBsb2dpbkFjdGlvbiA9IChkYXRhKSA9PiB7IC8vIO2VqOyImOulvCDrpqzthLTtlZjripQg67mE64+Z6riwIOyVoeyFmCDtgazrpqzsl5DsnbTthLDqsIAg7LaU6rCAXHJcbi8vIFx0cmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcclxuLy8gXHRcdGNvbnN0IHN0YXRlID0gZ2V0U3RhdGUoKVxyXG4vLyBcdFx0ZGlzcGF0Y2gobG9naW5SZXF1ZXN0QWN0aW9uKCkpXHJcbi8vIFx0XHRheGlvcy5wb3N0KCcvYXBpL2xvZ2luJylcclxuLy8gXHRcdFx0XHQudGhlbigocmVzKSA9PiB7XHJcbi8vIFx0XHRcdFx0XHRkaXNwYXRjaChsb2dpblN1Y2Nlc3NBY3Rpb24ocmVzLmRhdGEpKVxyXG4vLyBcdFx0XHRcdH0pXHJcbi8vIFx0XHRcdFx0LmNhdGNoKChlcnJvcikgPT4ge1xyXG4vLyBcdFx0XHRcdFx0ZGlzcGF0Y2gobG9naW5GYWlsdXJlQWN0aW9uKGVycm9yKSlcclxuLy8gXHRcdFx0XHR9KVxyXG4vLyBcdH1cclxuLy8gfVxyXG5cclxuLy8gYWN0aW9uc1xyXG5leHBvcnQgY29uc3QgTE9BRF9NWV9JTkZPX1JFUVVFU1QgPSAnTE9BRF9NWV9JTkZPX1JFUVVFU1QnXHJcbmV4cG9ydCBjb25zdCBMT0FEX01ZX0lORk9fU1VDQ0VTUyA9ICdMT0FEX01ZX0lORk9fU1VDQ0VTUydcclxuZXhwb3J0IGNvbnN0IExPQURfTVlfSU5GT19GQUlMVVJFID0gJ0xPQURfTVlfSU5GT19GQUlMVVJFJ1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19JTl9SRVFVRVNUID0gJ0xPR19JTl9SRVFVRVNUJ1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX1NVQ0NFU1MgPSAnTE9HX0lOX1NVQ0NFU1MnXHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fRkFJTFVSRSA9ICdMT0dfSU5fRkFJTFVSRSdcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1JFUVVFU1QgPSAnTE9HX09VVF9SRVFVRVNUJ1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9TVUNDRVNTID0gJ0xPR19PVVRfU1VDQ0VTUydcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfRkFJTFVSRSA9ICdMT0dfT1VUX0ZBSUxVUkUnXHJcblxyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9SRVFVRVNUID0gJ1NJR05fVVBfUkVRVUVTVCdcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfU1VDQ0VTUyA9ICdTSUdOX1VQX1NVQ0NFU1MnXHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX0ZBSUxVUkUgPSAnU0lHTl9VUF9GQUlMVVJFJ1xyXG5cclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9SRVFVRVNUID0gJ0NIQU5HRV9OSUNLTkFNRV9SRVFVRVNUJ1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MgPSAnQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MnXHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSA9ICdDSEFOR0VfTklDS05BTUVfRkFJTFVSRSdcclxuXHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfUkVRVUVTVCA9ICdGT0xMT1dfUkVRVUVTVCdcclxuZXhwb3J0IGNvbnN0IEZPTExPV19TVUNDRVNTID0gJ0ZPTExPV19TVUNDRVNTJ1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX0ZBSUxVUkUgPSAnRk9MTE9XX0ZBSUxVUkUnXHJcblxyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfUkVRVUVTVCA9ICdVTkZPTExPV19SRVFVRVNUJ1xyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfU1VDQ0VTUyA9ICdVTkZPTExPV19TVUNDRVNTJ1xyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfRkFJTFVSRSA9ICdVTkZPTExPV19GQUlMVVJFJ1xyXG5cclxuLy8g7Jyg7KCAIOumrOuTgOyEnOydmCDsg4Htg5zrpbwg67CU6r+A7IiY7J6I64qUIOyVoeyFmCDsg53shLFcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1RPX01FID0gJ0FERF9QT1NUX1RPX01FJ1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfT0ZfTUUgPSAnUkVNT1ZFX1BPU1RfT0ZfTUUnXHJcblxyXG4vKiBmcm9udFxyXG5jb25zdCBkdW1teVVzZXIgPSAoZGF0YSkgPT4gKHtcclxuXHQuLi5kYXRhLFxyXG5cdG5pY2tuYW1lOiAn67mE7YOA66+8JyxcclxuXHRpZDogMSxcclxuXHRQb3N0czogW3tpZDogMX1dLFxyXG5cdEZvbGxvd2luZ3M6IFt7bmlja25hbWU6ICfsmbjrhbgnfSwge25pY2tuYW1lOiAn7J2M66mUJ30sIHtuaWNrbmFtZTogJ+yNvSd9LCB7bmlja25hbWU6ICfsmKTrjJUnfSwge25pY2tuYW1lOiAn66eM672AJ31dLFxyXG5cdEZvbGxvd2VyczogW3tuaWNrbmFtZTogJ+q5jOunpCd9LCB7bmlja25hbWU6ICfrp4zrkZAnfSwge25pY2tuYW1lOiAn67O07LGZJ30sIHtuaWNrbmFtZTogJ+uSt+qwgCd9LCB7bmlja25hbWU6ICfslbzrjaknfV0sXHJcbn0pKi9cclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpblJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG5cdHJldHVybiB7XHJcblx0XHR0eXBlOiBMT0dfSU5fUkVRVUVTVCxcclxuXHRcdGRhdGEsXHJcblx0fVxyXG59XHJcbi8vIOuhnOq3uOyVhOybgyDslaHshZgg7IOd7ISx6riwIHRodW5rXHJcbi8vIGV4cG9ydCBjb25zdCBsb2dvdXRBY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4vLyBcdHJldHVybiAoZGlzcGF0Y2gpID0+IHtcclxuLy8gXHRcdGF4aW9zLnBvc3QoJy9hcGkvbG9nb3V0JylcclxuLy8gXHRcdFx0XHQudGhlbigoKSA9PiB7XHJcbi8vIFx0XHRcdFx0XHRkaXNwYXRjaChsb2dvdXRTdWNjZXNzQWN0aW9uKCkpXHJcbi8vIFx0XHRcdFx0fSlcclxuLy8gXHRcdFx0XHQuY2F0Y2goKCkgPT4ge1xyXG4vLyBcdFx0XHRcdFx0ZGlzcGF0Y2gobG9nb3V0RmFpbHVyZUFjdGlvbigpKVxyXG4vLyBcdFx0XHRcdH0pXHJcbi8vIFx0fVxyXG4vLyB9XHJcbmV4cG9ydCBjb25zdCBsb2dvdXRSZXF1ZXN0QWN0aW9uID0gKCkgPT4gKHtcclxuXHR0eXBlOiBMT0dfT1VUX1JFUVVFU1QsXHJcbn0pXHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xyXG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgTE9BRF9NWV9JTkZPX1JFUVVFU1Q6XHJcblx0XHRcdC8vIHN0b3JlIOyXkOyEnCDrs7Trgrggc3RhdGUg6rCAIOunjOuTpOyWtOynkCwgc3RhdGUg7J6Q7LK06rCAIHVzZXIuanMg7J2YIHN0YXRlIOyehFxyXG5cdFx0XHRkcmFmdC5sb2FkTXlJbmZvTG9hZGluZyA9IHRydWVcclxuXHRcdFx0ZHJhZnQubG9hZE15SW5mb0Vycm9yID0gbnVsbCAvLyDroZzrlKkg7KSR7J2865WM64qUIOyXkOufrCDsl4bslbBcclxuXHRcdFx0ZHJhZnQubG9hZE15SW5mb0RvbmUgPSBmYWxzZVxyXG5cdFx0XHRjb25zb2xlLmxvZygncmVkdWNlciBteUluZm8g7JqU7LKtJylcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIExPQURfTVlfSU5GT19TVUNDRVNTOlxyXG5cdFx0XHRkcmFmdC5sb2FkTXlJbmZvTG9hZGluZyA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0Lm1lID0gYWN0aW9uLmRhdGEgLy8gYmFjayDsgqzsmqnsnpAg7KCV67O06rCAIOuTpOyWtOyeiOydjFxyXG5cdFx0XHRkcmFmdC5sb2FkTXlJbmZvRG9uZSA9IHRydWVcclxuXHRcdFx0Ly9kcmFmdC5tZSA9IGR1bW15VXNlcihhY3Rpb24uZGF0YSlcclxuXHRcdFx0Y29uc29sZS5sb2coJ3JlZHVjZXIgbXlJbmZvIOyEseqztScpXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBMT0FEX01ZX0lORk9fRkFJTFVSRTpcclxuXHRcdFx0Y29uc29sZS5lcnJvcignbG9hZE15SW5mb0ZhaWwgOjogJyArIGFjdGlvbi5lcnJvcilcclxuXHRcdFx0ZHJhZnQubG9hZE15SW5mb0xvYWRpbmcgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC5sb2FkTXlJbmZvRXJyb3IgPSBhY3Rpb24uZXJyb3JcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIEZPTExPV19SRVFVRVNUOlxyXG5cdFx0XHQvLyBzdG9yZSDsl5DshJwg67O064K4IHN0YXRlIOqwgCDrp4zrk6TslrTsp5AsIHN0YXRlIOyekOyytOqwgCB1c2VyLmpzIOydmCBzdGF0ZSDsnoRcclxuXHRcdFx0ZHJhZnQuZm9sbG93TG9hZGluZyA9IHRydWVcclxuXHRcdFx0ZHJhZnQuZm9sbG93RXJyb3IgPSBudWxsIC8vIOuhnOuUqSDspJHsnbzrlYzripQg7JeQ65+sIOyXhuyVsFxyXG5cdFx0XHRkcmFmdC5mb2xsb3dEb25lID0gZmFsc2VcclxuXHRcdFx0Y29uc29sZS5sb2coJ3JlZHVjZXIgRk9MTE9XX1JFUVVFU1Qg7JqU7LKtJylcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIEZPTExPV19TVUNDRVNTOlxyXG5cdFx0XHRkcmFmdC5mb2xsb3dMb2FkaW5nID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQuZm9sbG93RG9uZSA9IHRydWVcclxuXHRcdFx0Ly9kcmFmdC5tZSA9IGR1bW15VXNlcihhY3Rpb24uZGF0YSlcclxuXHRcdFx0ZHJhZnQubWUuRm9sbG93aW5ncy5wdXNoKHtpZDogYWN0aW9uLmRhdGEuVXNlcklkfSlcclxuXHRcdFx0Y29uc29sZS5sb2coJ3JlZHVjZXIgRk9MTE9XX1NVQ0NFU1Mg7ISx6rO1JylcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIEZPTExPV19GQUlMVVJFOlxyXG5cdFx0XHRkcmFmdC5mb2xsb3dMb2FkaW5nID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQuZm9sbG93RXJyb3IgPSBhY3Rpb24uZXJyb3JcclxuXHRcdFx0Y29uc29sZS5lcnJvcigncmVkdWNlciBGT0xMT1dfRkFJTFVSRSDsi6TtjKg6OicsIGFjdGlvbi5lcnJvcilcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFVORk9MTE9XX1JFUVVFU1Q6XHJcblx0XHRcdC8vIHN0b3JlIOyXkOyEnCDrs7Trgrggc3RhdGUg6rCAIOunjOuTpOyWtOynkCwgc3RhdGUg7J6Q7LK06rCAIHVzZXIuanMg7J2YIHN0YXRlIOyehFxyXG5cdFx0XHRkcmFmdC51bmZvbGxvd0xvYWRpbmcgPSB0cnVlXHJcblx0XHRcdGRyYWZ0LnVuZm9sbG93RXJyb3IgPSBudWxsIC8vIOuhnOuUqSDspJHsnbzrlYzripQg7JeQ65+sIOyXhuyVsFxyXG5cdFx0XHRkcmFmdC51bmZvbGxvd0RvbmUgPSBmYWxzZVxyXG5cdFx0XHRjb25zb2xlLmxvZygncmVkdWNlciB1bmZvbGxvdyDsmpTssq0nKVxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgVU5GT0xMT1dfU1VDQ0VTUzpcclxuXHRcdFx0ZHJhZnQudW5mb2xsb3dMb2FkaW5nID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQudW5mb2xsb3dEb25lID0gdHJ1ZVxyXG5cdFx0XHQvL2RyYWZ0Lm1lID0gZHVtbXlVc2VyKGFjdGlvbi5kYXRhKVxyXG5cdFx0XHQvLyDslrjtjJTroZzsmrAg7ZWcIOyCrOuejOunjCDruaDsp4DqsoxcclxuXHRcdFx0ZHJhZnQubWUuRm9sbG93aW5ncyA9IGRyYWZ0Lm1lLkZvbGxvd2luZ3MuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YS5Vc2VySWQpXHJcblx0XHRcdGNvbnNvbGUubG9nKCdyZWR1Y2VyIHVuZm9sbG93IOyEseqztScpXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBVTkZPTExPV19GQUlMVVJFOlxyXG5cdFx0XHRkcmFmdC51bmZvbGxvd0xvYWRpbmcgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC51bmZvbGxvd0Vycm9yID0gYWN0aW9uLmVycm9yXHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoJ3JlZHVjZXIgdW5mb2xsb3cg7Iuk7YyoOjonLCBhY3Rpb24uZXJyb3IpXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBMT0dfSU5fUkVRVUVTVDpcclxuXHRcdFx0ZHJhZnQubG9nSW5Mb2FkaW5nID0gdHJ1ZVxyXG5cdFx0XHRkcmFmdC5sb2dJbkVycm9yID0gbnVsbFxyXG5cdFx0XHRkcmFmdC5sb2dJbkRvbmUgPSBmYWxzZVxyXG5cdFx0XHRjb25zb2xlLmxvZygncmVkdWNlciBsb2dpbiDsmpTssq0nKVxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgTE9HX0lOX1NVQ0NFU1M6XHJcblx0XHRcdGRyYWZ0LmxvZ0luTG9hZGluZyA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LmxvZ0luRG9uZSA9IHRydWVcclxuXHRcdFx0Ly9kcmFmdC5tZSA9IGR1bW15VXNlcihhY3Rpb24uZGF0YSkgZnJvbnRcclxuXHRcdFx0ZHJhZnQubWUgPSBhY3Rpb24uZGF0YSAvLyBiYWNrXHJcblx0XHRcdGNvbnNvbGUubG9nKCdyZWR1Y2VyIGxvZ2luIOyEseqztScpXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBMT0dfSU5fRkFJTFVSRTpcclxuXHRcdFx0ZHJhZnQubG9nSW5Mb2FkaW5nID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQubG9nSW5FcnJvciA9IGFjdGlvbi5lcnJvclxyXG5cdFx0XHRjb25zb2xlLmVycm9yKCdyZWR1Y2VyIGxvZ2luIOyLpO2MqDo6ICcsIGFjdGlvbi5lcnJvcilcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIExPR19PVVRfUkVRVUVTVDpcclxuXHRcdFx0ZHJhZnQubG9nT3V0TG9hZGluZyA9IHRydWVcclxuXHRcdFx0ZHJhZnQubG9nT3V0RG9uZSA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LmxvZ091dEVycm9yID0gbnVsbFxyXG5cdFx0XHRjb25zb2xlLmxvZygncmVkdWNlciBsb2dvdXQg7JqU7LKtJylcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIExPR19PVVRfU1VDQ0VTUzpcclxuXHRcdFx0ZHJhZnQubG9nT3V0TG9hZGluZyA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LmxvZ091dERvbmUgPSB0cnVlXHJcblx0XHRcdGRyYWZ0Lm1lID0gbnVsbFxyXG5cdFx0XHRjb25zb2xlLmxvZygncmVkdWNlciBsb2dvdXQg7ISx6rO1JylcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIExPR19PVVRfRkFJTFVSRTpcclxuXHRcdFx0ZHJhZnQubG9nT3V0TG9hZGluZyA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LmxvZ091dEVycm9yID0gYWN0aW9uLmVycm9yXHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoJ3JlZHVjZXIgbG9nb3V0IOyLpO2MqCcsIGFjdGlvbi5lcnJvcilcclxuXHRcdFx0YnJlYWtcclxuXHRcdGNhc2UgU0lHTl9VUF9SRVFVRVNUOlxyXG5cdFx0XHRkcmFmdC5zaWduVXBMb2FkaW5nID0gdHJ1ZVxyXG5cdFx0XHRkcmFmdC5zaWduVXBEb25lID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQuc2lnblVwRXJyb3IgPSBudWxsXHJcblx0XHRcdGNvbnNvbGUubG9nKCdyZWR1Y2VyIHNpZ251cCDsmpTssq0nKVxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgU0lHTl9VUF9TVUNDRVNTOlxyXG5cdFx0XHRkcmFmdC5zaWduVXBMb2FkaW5nID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQuc2lnblVwRG9uZSA9IHRydWVcclxuXHRcdFx0Y29uc29sZS5sb2coJ3JlZHVjZXIgc2lnblVwIOyEseqztScpXHJcblx0XHRcdGJyZWFrXHJcblx0XHRjYXNlIFNJR05fVVBfRkFJTFVSRTpcclxuXHRcdFx0ZHJhZnQuc2lnblVwTG9hZGluZyA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LnNpZ25VcEVycm9yID0gYWN0aW9uLmVycm9yXHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoJ3JlZHVjZXIgc2lnblVwIOyLpO2MqCcsIGFjdGlvbi5lcnJvcilcclxuXHRcdFx0YnJlYWtcclxuXHRcdGNhc2UgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1Q6XHJcblx0XHRcdGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IHRydWVcclxuXHRcdFx0ZHJhZnQuY2hhbmdlTmlja25hbWVEb25lID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQuY2hhbmdlTmlja25hbWVFcnJvciA9IG51bGxcclxuXHRcdFx0Y29uc29sZS5sb2coJ3JlZHVjZXIgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1Qg7JqU7LKtJylcclxuXHRcdFx0YnJlYWtcclxuXHRcdGNhc2UgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1M6XHJcblx0XHRcdGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LmNoYW5nZU5pY2tuYW1lRG9uZSA9IHRydWVcclxuXHRcdFx0Y29uc29sZS5sb2coJ3JlZHVjZXIgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1Mg7ISx6rO1JylcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFOlxyXG5cdFx0XHRkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmcgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC5jaGFuZ2VOaWNrbmFtZUVycm9yID0gYWN0aW9uLmVycm9yXHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoJ3JlZHVjZXIgQ0hBTkdFX05JQ0tOQU1FIOyLpO2MqCcsIGFjdGlvbi5lcnJvcilcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIEFERF9QT1NUX1RPX01FOiAvLyDqsozsi5zquIDsnYQg7JOw66m0IOqyjOyLnOq4gCDslYTsnbTrlJTqsIAg7Jes6riw66GcIOuTpOyWtOyZgOyEnCDtlZjrgpjqsIAg7LaU6rCA65Cc64ukXHJcblx0XHRcdGRyYWZ0Lm1lLlBvc3RzLnVuc2hpZnQoe2lkOiBhY3Rpb24uZGF0YX0pXHJcblx0XHRcdGNvbnNvbGUubG9nKCdBRERfUE9TVF9UT19NRSDshLHqs7UnKVxyXG5cdFx0XHRicmVha1xyXG5cdFx0XHQvLyByZXR1cm4ge1xyXG5cdFx0XHQvLyBcdC4uLnN0YXRlLFxyXG5cdFx0XHQvLyBcdG1lOiB7XHJcblx0XHRcdC8vIFx0XHQuLi5zdGF0ZS5tZSxcclxuXHRcdFx0Ly8gXHRcdFBvc3RzOiBbe2lkOiBhY3Rpb24uZGF0YX0sIC4uLnN0YXRlLm1lLlBvc3RzXSxcclxuXHRcdFx0Ly8gXHR9XHJcblx0XHRcdC8vIH1cclxuXHRcdGNhc2UgUkVNT1ZFX1BPU1RfT0ZfTUU6XHJcblx0XHRcdGRyYWZ0Lm1lLlBvc3RzID0gZHJhZnQubWUuUG9zdHMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YSlcclxuXHRcdFx0Y29uc29sZS5sb2coJ1JFTU9WRV9QT1NUX09GX01FJylcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRcdC8vIHJldHVybiB7IC8vIOu2iOuzgOyEseydhCDsp4DtgqTrqbAg6rKM7Iuc6riA7J2EIOyngOybjOyVvO2VnOuLpC5cclxuXHRcdFx0Ly8gXHQuLi5zdGF0ZSxcclxuXHRcdFx0Ly8gXHRtZToge1xyXG5cdFx0XHQvLyBcdFx0Li4uc3RhdGUubWUsXHJcblx0XHRcdC8vIFx0XHRQb3N0czogc3RhdGUubWUuUG9zdHMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YSlcclxuXHRcdFx0Ly8gXHR9XHJcblx0XHRcdC8vIH1cclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdGJyZWFrO1xyXG5cdH1cclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==