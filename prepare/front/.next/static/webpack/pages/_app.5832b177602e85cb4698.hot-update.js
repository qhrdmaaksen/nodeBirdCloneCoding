webpackHotUpdate_N_E("pages/_app",{

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
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }


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
// 				.catch((err) => {
// 					dispatch(loginFailureAction(err))
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

var dummyUser = function dummyUser(data) {
  return _objectSpread(_objectSpread({}, data), {}, {
    nickname: '비타민',
    id: 1,
    Posts: [{
      id: 1
    }],
    Followings: [{
      nickname: '외노'
    }, {
      nickname: '음메'
    }, {
      nickname: '썽'
    }, {
      nickname: '오댕'
    }, {
      nickname: '만뽀'
    }],
    Followers: [{
      nickname: '까매'
    }, {
      nickname: '만두'
    }, {
      nickname: '보챙'
    }, {
      nickname: '뒷가'
    }, {
      nickname: '야덩'
    }]
  });
};

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
  return Object(immer__WEBPACK_IMPORTED_MODULE_1__["default"])(state, function (draft) {
    switch (action.type) {
      case FOLLOW_REQUEST:
        console.log('reducer follow'); // store 에서 보낸 state 가 만들어짐, state 자체가 user.js 의 state 임

        draft.followLoading = true;
        draft.followError = null; // 로딩 중일때는 에러 없앰

        draft.followDone = false;
        break;

      case FOLLOW_SUCCESS:
        draft.followLoading = false;
        draft.followDone = true; //draft.me = dummyUser(action.data)

        draft.me.Followings.push({
          id: action.data
        });
        break;

      case FOLLOW_FAILURE:
        console.error('followFail : ' + action.error);
        draft.followLoading = false;
        draft.followError = action.error;
        break;

      case UNFOLLOW_REQUEST:
        console.log('reducer follow'); // store 에서 보낸 state 가 만들어짐, state 자체가 user.js 의 state 임

        draft.unfollowLoading = true;
        draft.unfollowError = null; // 로딩 중일때는 에러 없앰

        draft.unfollowDone = false;
        break;

      case UNFOLLOW_SUCCESS:
        draft.unfollowLoading = false;
        draft.unfollowDone = true; //draft.me = dummyUser(action.data)
        // 언팔로우 한 사람만 빠지게

        draft.me.Followings = draft.me.Followings.filter(function (v) {
          return v.id !== action.data;
        });
        break;

      case UNFOLLOW_FAILURE:
        console.error('unfollowFail : ' + action.error);
        draft.unfollowLoading = false;
        draft.unfollowError = action.error;
        break;

      case LOG_IN_REQUEST:
        console.log('reducer login');
        draft.logInLoading = true;
        draft.logInError = null;
        draft.logInDone = false;
        break;

      case LOG_IN_SUCCESS:
        draft.logInLoading = false;
        draft.logInDone = true; //draft.me = dummyUser(action.data) front

        draft.me = action.data; // back

        break;

      case LOG_IN_FAILURE:
        console.error('loginFail : ' + action.error);
        draft.logInLoading = false;
        draft.logInError = action.error;
        break;

      case LOG_OUT_REQUEST:
        draft.logOutLoading = true;
        draft.logOutDone = false;
        draft.logOutError = null;
        break;

      case LOG_OUT_SUCCESS:
        draft.logOutLoading = false;
        draft.logOutDone = true;
        draft.me = null;
        break;

      case LOG_OUT_FAILURE:
        console.error('logoutFail : ' + action.error);
        draft.logOutLoading = false;
        draft.logOutError = action.error;
        break;

      case SIGN_UP_REQUEST:
        draft.signUpLoading = true;
        draft.signUpDone = false;
        draft.signUpError = null;
        break;

      case SIGN_UP_SUCCESS:
        draft.signUpLoading = false;
        draft.signUpDone = true;
        break;

      case SIGN_UP_FAILURE:
        console.error('signUpFail : ' + action.error);
        draft.signUpLoading = false;
        draft.signUpError = action.error;
        break;

      case CHANGE_NICKNAME_REQUEST:
        draft.changeNicknameLoading = true;
        draft.changeNicknameDone = false;
        draft.changeNicknameError = null;
        break;

      case CHANGE_NICKNAME_SUCCESS:
        draft.changeNicknameLoading = false;
        draft.changeNicknameDone = true;
        break;

      case CHANGE_NICKNAME_FAILURE:
        console.error('changeNickFail : ' + action.error);
        draft.changeNicknameLoading = false;
        draft.changeNicknameError = action.error;
        break;

      case ADD_POST_TO_ME:
        // 게시글을 쓰면 게시글 아이디가 여기로 들어와서 하나가 추가된다
        draft.me.Posts.unshift({
          id: action.data
        });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJsb2FkTXlJbmZvTG9hZGluZyIsImxvYWRNeUluZm9Eb25lIiwibG9hZE15SW5mb0Vycm9yIiwiZm9sbG93TG9hZGluZyIsImZvbGxvd0RvbmUiLCJmb2xsb3dFcnJvciIsInVuZm9sbG93TG9hZGluZyIsInVuZm9sbG93RG9uZSIsInVuZm9sbG93RXJyb3IiLCJsb2dJbkxvYWRpbmciLCJsb2dJbkRvbmUiLCJsb2dJbkVycm9yIiwibG9nT3V0TG9hZGluZyIsImxvZ091dERvbmUiLCJsb2dPdXRFcnJvciIsInNpZ25VcExvYWRpbmciLCJzaWduVXBEb25lIiwic2lnblVwRXJyb3IiLCJjaGFuZ2VOaWNrbmFtZUxvYWRpbmciLCJjaGFuZ2VOaWNrbmFtZURvbmUiLCJjaGFuZ2VOaWNrbmFtZUVycm9yIiwibWUiLCJzaWduVXBEYXRhIiwibG9naW5EYXRhIiwiTE9BRF9NWV9JTkZPX1JFUVVFU1QiLCJMT0FEX01ZX0lORk9fU1VDQ0VTUyIsIkxPQURfTVlfSU5GT19GQUlMVVJFIiwiTE9HX0lOX1JFUVVFU1QiLCJMT0dfSU5fU1VDQ0VTUyIsIkxPR19JTl9GQUlMVVJFIiwiTE9HX09VVF9SRVFVRVNUIiwiTE9HX09VVF9TVUNDRVNTIiwiTE9HX09VVF9GQUlMVVJFIiwiU0lHTl9VUF9SRVFVRVNUIiwiU0lHTl9VUF9TVUNDRVNTIiwiU0lHTl9VUF9GQUlMVVJFIiwiQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QiLCJDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyIsIkNIQU5HRV9OSUNLTkFNRV9GQUlMVVJFIiwiRk9MTE9XX1JFUVVFU1QiLCJGT0xMT1dfU1VDQ0VTUyIsIkZPTExPV19GQUlMVVJFIiwiVU5GT0xMT1dfUkVRVUVTVCIsIlVORk9MTE9XX1NVQ0NFU1MiLCJVTkZPTExPV19GQUlMVVJFIiwiQUREX1BPU1RfVE9fTUUiLCJSRU1PVkVfUE9TVF9PRl9NRSIsImR1bW15VXNlciIsImRhdGEiLCJuaWNrbmFtZSIsImlkIiwiUG9zdHMiLCJGb2xsb3dpbmdzIiwiRm9sbG93ZXJzIiwibG9naW5SZXF1ZXN0QWN0aW9uIiwidHlwZSIsImxvZ291dFJlcXVlc3RBY3Rpb24iLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJwcm9kdWNlIiwiZHJhZnQiLCJjb25zb2xlIiwibG9nIiwicHVzaCIsImVycm9yIiwiZmlsdGVyIiwidiIsInVuc2hpZnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRU8sSUFBTUEsWUFBWSxHQUFHO0FBQzNCQyxtQkFBaUIsRUFBRSxLQURRO0FBQ0Q7QUFDMUJDLGdCQUFjLEVBQUUsS0FGVztBQUVKO0FBQ3ZCQyxpQkFBZSxFQUFFLElBSFU7QUFHSjtBQUN2QkMsZUFBYSxFQUFFLEtBSlk7QUFJTDtBQUN0QkMsWUFBVSxFQUFFLEtBTGU7QUFLUjtBQUNuQkMsYUFBVyxFQUFFLElBTmM7QUFNUjtBQUNuQkMsaUJBQWUsRUFBRSxLQVBVO0FBT0g7QUFDeEJDLGNBQVksRUFBRSxLQVJhO0FBUU47QUFDckJDLGVBQWEsRUFBRSxJQVRZO0FBU047QUFDckJDLGNBQVksRUFBRSxLQVZhO0FBVU47QUFDckJDLFdBQVMsRUFBRSxLQVhnQjtBQVdUO0FBQ2xCQyxZQUFVLEVBQUUsSUFaZTtBQVlUO0FBQ2xCQyxlQUFhLEVBQUUsS0FiWTtBQWFMO0FBQ3RCQyxZQUFVLEVBQUUsS0FkZTtBQWNSO0FBQ25CQyxhQUFXLEVBQUUsSUFmYztBQWdCM0JDLGVBQWEsRUFBRSxLQWhCWTtBQWdCTDtBQUN0QkMsWUFBVSxFQUFFLEtBakJlO0FBaUJSO0FBQ25CQyxhQUFXLEVBQUUsSUFsQmM7QUFtQjNCQyx1QkFBcUIsRUFBRSxLQW5CSTtBQW1CRztBQUM5QkMsb0JBQWtCLEVBQUUsS0FwQk87QUFvQkE7QUFDM0JDLHFCQUFtQixFQUFFLElBckJNO0FBc0IzQkMsSUFBRSxFQUFF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OztBQUNELFdBQUttQix1QkFBTDtBQUNDd0IsZUFBTyxDQUFDRyxLQUFSLENBQWMsc0JBQXNCTixNQUFNLENBQUNNLEtBQTNDO0FBQ0FKLGFBQUssQ0FBQzNDLHFCQUFOLEdBQThCLEtBQTlCO0FBQ0EyQyxhQUFLLENBQUN6QyxtQkFBTixHQUE0QnVDLE1BQU0sQ0FBQ00sS0FBbkM7QUFDQTs7QUFDRCxXQUFLcEIsY0FBTDtBQUFxQjtBQUNwQmdCLGFBQUssQ0FBQ3hDLEVBQU4sQ0FBUzhCLEtBQVQsQ0FBZWlCLE9BQWYsQ0FBdUI7QUFBQ2xCLFlBQUUsRUFBRVMsTUFBTSxDQUFDWDtBQUFaLFNBQXZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDRCxXQUFLRixpQkFBTDtBQUNDZSxhQUFLLENBQUN4QyxFQUFOLENBQVM4QixLQUFULEdBQWlCVSxLQUFLLENBQUN4QyxFQUFOLENBQVM4QixLQUFULENBQWVlLE1BQWYsQ0FBc0IsVUFBQ0MsQ0FBRDtBQUFBLGlCQUFPQSxDQUFDLENBQUNqQixFQUFGLEtBQVNTLE1BQU0sQ0FBQ1gsSUFBdkI7QUFBQSxTQUF0QixDQUFqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0Q7QUFDQztBQXZIRjtBQXlIQSxHQTFId0QsQ0FBekM7QUFBQSxDQUFoQjs7QUE0SGVTLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNTgzMmIxNzc2MDJlODVjYjQ2OTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwcm9kdWNlIGZyb20gJ2ltbWVyJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuXHRsb2FkTXlJbmZvTG9hZGluZzogZmFsc2UsIC8vIOycoOyggCDsoJXrs7Qg67O06riwIOyLnOuPhOykkeydvOuVkCDroZzrlKnspJEg652E7Jq46rGw7J6EXHJcblx0bG9hZE15SW5mb0RvbmU6IGZhbHNlLCAvLyDsnKDsoIAg7KCV67O0IOuztOq4sCDrkKhcclxuXHRsb2FkTXlJbmZvRXJyb3I6IG51bGwsIC8vIOycoOyggCDsoJXrs7Qg67O06riw7KSR7J2865WMIOyXkOufrCDsl4bslbBcclxuXHRmb2xsb3dMb2FkaW5nOiBmYWxzZSwgLy8g7YyU66Gc7JqwIOyLnOuPhOykkeydvOuVkCDroZzrlKnspJEg652E7Jq46rGw7J6EXHJcblx0Zm9sbG93RG9uZTogZmFsc2UsIC8vIO2MlOuhnOyasCDrkKhcclxuXHRmb2xsb3dFcnJvcjogbnVsbCwgLy8g7YyU66Gc7Jqw7KSR7J2865WMIOyXkOufrCDsl4bslbBcclxuXHR1bmZvbGxvd0xvYWRpbmc6IGZhbHNlLCAvLyDslrjtjJTroZzsmrAg7Iuc64+E7KSR7J2865WQIOuhnOuUqeykkSDrnYTsmrjqsbDsnoRcclxuXHR1bmZvbGxvd0RvbmU6IGZhbHNlLCAvLyDslrjtjJTroZzsmrAg65CoXHJcblx0dW5mb2xsb3dFcnJvcjogbnVsbCwgLy8g7YyU66Gc7Jqw7KSR7J2865WMIOyXkOufrCDsl4bslbBcclxuXHRsb2dJbkxvYWRpbmc6IGZhbHNlLCAvLyDroZzqt7jsnbgg7Iuc64+E7KSR7J2865WQIOuhnOuUqeykkSDrnYTsmrjqsbDsnoRcclxuXHRsb2dJbkRvbmU6IGZhbHNlLCAvLyDroZzqt7jsnbgg65CoXHJcblx0bG9nSW5FcnJvcjogbnVsbCwgLy8g66Gc65Sp7KSR7J2865WMIOyXkOufrCDsl4bslbBcclxuXHRsb2dPdXRMb2FkaW5nOiBmYWxzZSwgLy8g66Gc6re47JWE7JuDIOyLnOuPhOykkVxyXG5cdGxvZ091dERvbmU6IGZhbHNlLCAvLyDroZzqt7jslYTsm4Mg7JmE66OMXHJcblx0bG9nT3V0RXJyb3I6IG51bGwsXHJcblx0c2lnblVwTG9hZGluZzogZmFsc2UsIC8vIO2ajOybkOqwgOyehSDroZzrlKnspJFcclxuXHRzaWduVXBEb25lOiBmYWxzZSwgLy8g7ZqM7JuQIOqwgOyehSDsmYTro4xcclxuXHRzaWduVXBFcnJvcjogbnVsbCxcclxuXHRjaGFuZ2VOaWNrbmFtZUxvYWRpbmc6IGZhbHNlLCAvLyDri4nrhKTsnoQg67OA6rK9IOuhnOuUqeykkVxyXG5cdGNoYW5nZU5pY2tuYW1lRG9uZTogZmFsc2UsIC8vIOuLieuEpOyehCDrs4Dqsr0g7JmE66OMXHJcblx0Y2hhbmdlTmlja25hbWVFcnJvcjogbnVsbCxcclxuXHRtZTogbnVsbCxcclxuXHRzaWduVXBEYXRhOiB7fSwgLy8g7ZqM7JuQIOqwgOyehSDrjbDsnbTthLBcclxuXHRsb2dpbkRhdGE6IHt9LFxyXG59XHJcblxyXG4vLyDroZzqt7jsnbgg7JWh7IWYIOyDneyEseq4sCB0aHVua1xyXG4vLyBleHBvcnQgY29uc3QgbG9naW5BY3Rpb24gPSAoZGF0YSkgPT4geyAvLyDtlajsiJjrpbwg66as7YS07ZWY64qUIOu5hOuPmeq4sCDslaHshZgg7YGs66as7JeQ7J207YSw6rCAIOy2lOqwgFxyXG4vLyBcdHJldHVybiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XHJcbi8vIFx0XHRjb25zdCBzdGF0ZSA9IGdldFN0YXRlKClcclxuLy8gXHRcdGRpc3BhdGNoKGxvZ2luUmVxdWVzdEFjdGlvbigpKVxyXG4vLyBcdFx0YXhpb3MucG9zdCgnL2FwaS9sb2dpbicpXHJcbi8vIFx0XHRcdFx0LnRoZW4oKHJlcykgPT4ge1xyXG4vLyBcdFx0XHRcdFx0ZGlzcGF0Y2gobG9naW5TdWNjZXNzQWN0aW9uKHJlcy5kYXRhKSlcclxuLy8gXHRcdFx0XHR9KVxyXG4vLyBcdFx0XHRcdC5jYXRjaCgoZXJyKSA9PiB7XHJcbi8vIFx0XHRcdFx0XHRkaXNwYXRjaChsb2dpbkZhaWx1cmVBY3Rpb24oZXJyKSlcclxuLy8gXHRcdFx0XHR9KVxyXG4vLyBcdH1cclxuLy8gfVxyXG5cclxuLy8gYWN0aW9uc1xyXG5leHBvcnQgY29uc3QgTE9BRF9NWV9JTkZPX1JFUVVFU1QgPSAnTE9BRF9NWV9JTkZPX1JFUVVFU1QnXHJcbmV4cG9ydCBjb25zdCBMT0FEX01ZX0lORk9fU1VDQ0VTUyA9ICdMT0FEX01ZX0lORk9fU1VDQ0VTUydcclxuZXhwb3J0IGNvbnN0IExPQURfTVlfSU5GT19GQUlMVVJFID0gJ0xPQURfTVlfSU5GT19GQUlMVVJFJ1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19JTl9SRVFVRVNUID0gJ0xPR19JTl9SRVFVRVNUJ1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX1NVQ0NFU1MgPSAnTE9HX0lOX1NVQ0NFU1MnXHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fRkFJTFVSRSA9ICdMT0dfSU5fRkFJTFVSRSdcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1JFUVVFU1QgPSAnTE9HX09VVF9SRVFVRVNUJ1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9TVUNDRVNTID0gJ0xPR19PVVRfU1VDQ0VTUydcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfRkFJTFVSRSA9ICdMT0dfT1VUX0ZBSUxVUkUnXHJcblxyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9SRVFVRVNUID0gJ1NJR05fVVBfUkVRVUVTVCdcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfU1VDQ0VTUyA9ICdTSUdOX1VQX1NVQ0NFU1MnXHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX0ZBSUxVUkUgPSAnU0lHTl9VUF9GQUlMVVJFJ1xyXG5cclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9SRVFVRVNUID0gJ0NIQU5HRV9OSUNLTkFNRV9SRVFVRVNUJ1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MgPSAnQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MnXHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSA9ICdDSEFOR0VfTklDS05BTUVfRkFJTFVSRSdcclxuXHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfUkVRVUVTVCA9ICdGT0xMT1dfUkVRVUVTVCdcclxuZXhwb3J0IGNvbnN0IEZPTExPV19TVUNDRVNTID0gJ0ZPTExPV19TVUNDRVNTJ1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX0ZBSUxVUkUgPSAnRk9MTE9XX0ZBSUxVUkUnXHJcblxyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfUkVRVUVTVCA9ICdVTkZPTExPV19SRVFVRVNUJ1xyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfU1VDQ0VTUyA9ICdVTkZPTExPV19TVUNDRVNTJ1xyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfRkFJTFVSRSA9ICdVTkZPTExPV19GQUlMVVJFJ1xyXG5cclxuLy8g7Jyg7KCAIOumrOuTgOyEnOydmCDsg4Htg5zrpbwg67CU6r+A7IiY7J6I64qUIOyVoeyFmCDsg53shLFcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1RPX01FID0gJ0FERF9QT1NUX1RPX01FJ1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfT0ZfTUUgPSAnUkVNT1ZFX1BPU1RfT0ZfTUUnXHJcblxyXG5jb25zdCBkdW1teVVzZXIgPSAoZGF0YSkgPT4gKHtcclxuXHQuLi5kYXRhLFxyXG5cdG5pY2tuYW1lOiAn67mE7YOA66+8JyxcclxuXHRpZDogMSxcclxuXHRQb3N0czogW3tpZDogMX1dLFxyXG5cdEZvbGxvd2luZ3M6IFt7bmlja25hbWU6ICfsmbjrhbgnfSwge25pY2tuYW1lOiAn7J2M66mUJ30sIHtuaWNrbmFtZTogJ+yNvSd9LCB7bmlja25hbWU6ICfsmKTrjJUnfSwge25pY2tuYW1lOiAn66eM672AJ31dLFxyXG5cdEZvbGxvd2VyczogW3tuaWNrbmFtZTogJ+q5jOunpCd9LCB7bmlja25hbWU6ICfrp4zrkZAnfSwge25pY2tuYW1lOiAn67O07LGZJ30sIHtuaWNrbmFtZTogJ+uSt+qwgCd9LCB7bmlja25hbWU6ICfslbzrjaknfV0sXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgbG9naW5SZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+IHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTogTE9HX0lOX1JFUVVFU1QsXHJcblx0XHRkYXRhLFxyXG5cdH1cclxufVxyXG4vLyDroZzqt7jslYTsm4Mg7JWh7IWYIOyDneyEseq4sCB0aHVua1xyXG4vLyBleHBvcnQgY29uc3QgbG9nb3V0QWN0aW9uID0gKGRhdGEpID0+IHtcclxuLy8gXHRyZXR1cm4gKGRpc3BhdGNoKSA9PiB7XHJcbi8vIFx0XHRheGlvcy5wb3N0KCcvYXBpL2xvZ291dCcpXHJcbi8vIFx0XHRcdFx0LnRoZW4oKCkgPT4ge1xyXG4vLyBcdFx0XHRcdFx0ZGlzcGF0Y2gobG9nb3V0U3VjY2Vzc0FjdGlvbigpKVxyXG4vLyBcdFx0XHRcdH0pXHJcbi8vIFx0XHRcdFx0LmNhdGNoKCgpID0+IHtcclxuLy8gXHRcdFx0XHRcdGRpc3BhdGNoKGxvZ291dEZhaWx1cmVBY3Rpb24oKSlcclxuLy8gXHRcdFx0XHR9KVxyXG4vLyBcdH1cclxuLy8gfVxyXG5leHBvcnQgY29uc3QgbG9nb3V0UmVxdWVzdEFjdGlvbiA9ICgpID0+ICh7XHJcblx0XHR0eXBlOiBMT0dfT1VUX1JFUVVFU1QsXHJcbn0pXHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xyXG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgRk9MTE9XX1JFUVVFU1Q6XHJcblx0XHRcdGNvbnNvbGUubG9nKCdyZWR1Y2VyIGZvbGxvdycpXHJcblx0XHRcdC8vIHN0b3JlIOyXkOyEnCDrs7Trgrggc3RhdGUg6rCAIOunjOuTpOyWtOynkCwgc3RhdGUg7J6Q7LK06rCAIHVzZXIuanMg7J2YIHN0YXRlIOyehFxyXG5cdFx0XHRkcmFmdC5mb2xsb3dMb2FkaW5nID0gdHJ1ZVxyXG5cdFx0XHRkcmFmdC5mb2xsb3dFcnJvciA9IG51bGwgLy8g66Gc65SpIOykkeydvOuVjOuKlCDsl5Drn6wg7JeG7JWwXHJcblx0XHRcdGRyYWZ0LmZvbGxvd0RvbmUgPSBmYWxzZVxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgRk9MTE9XX1NVQ0NFU1M6XHJcblx0XHRcdGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC5mb2xsb3dEb25lID0gdHJ1ZVxyXG5cdFx0XHQvL2RyYWZ0Lm1lID0gZHVtbXlVc2VyKGFjdGlvbi5kYXRhKVxyXG5cdFx0XHRkcmFmdC5tZS5Gb2xsb3dpbmdzLnB1c2goe2lkOiBhY3Rpb24uZGF0YX0pXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBGT0xMT1dfRkFJTFVSRTpcclxuXHRcdFx0Y29uc29sZS5lcnJvcignZm9sbG93RmFpbCA6ICcgKyBhY3Rpb24uZXJyb3IpXHJcblx0XHRcdGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC5mb2xsb3dFcnJvciA9IGFjdGlvbi5lcnJvclxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgVU5GT0xMT1dfUkVRVUVTVDpcclxuXHRcdFx0Y29uc29sZS5sb2coJ3JlZHVjZXIgZm9sbG93JylcclxuXHRcdFx0Ly8gc3RvcmUg7JeQ7IScIOuztOuCuCBzdGF0ZSDqsIAg66eM65Ok7Ja07KeQLCBzdGF0ZSDsnpDssrTqsIAgdXNlci5qcyDsnZggc3RhdGUg7J6EXHJcblx0XHRcdGRyYWZ0LnVuZm9sbG93TG9hZGluZyA9IHRydWVcclxuXHRcdFx0ZHJhZnQudW5mb2xsb3dFcnJvciA9IG51bGwgLy8g66Gc65SpIOykkeydvOuVjOuKlCDsl5Drn6wg7JeG7JWwXHJcblx0XHRcdGRyYWZ0LnVuZm9sbG93RG9uZSA9IGZhbHNlXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBVTkZPTExPV19TVUNDRVNTOlxyXG5cdFx0XHRkcmFmdC51bmZvbGxvd0xvYWRpbmcgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC51bmZvbGxvd0RvbmUgPSB0cnVlXHJcblx0XHRcdC8vZHJhZnQubWUgPSBkdW1teVVzZXIoYWN0aW9uLmRhdGEpXHJcblx0XHRcdC8vIOyWuO2MlOuhnOyasCDtlZwg7IKs656M66eMIOu5oOyngOqyjFxyXG5cdFx0XHRkcmFmdC5tZS5Gb2xsb3dpbmdzID0gZHJhZnQubWUuRm9sbG93aW5ncy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhKVxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgVU5GT0xMT1dfRkFJTFVSRTpcclxuXHRcdFx0Y29uc29sZS5lcnJvcigndW5mb2xsb3dGYWlsIDogJyArIGFjdGlvbi5lcnJvcilcclxuXHRcdFx0ZHJhZnQudW5mb2xsb3dMb2FkaW5nID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQudW5mb2xsb3dFcnJvciA9IGFjdGlvbi5lcnJvclxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgTE9HX0lOX1JFUVVFU1Q6XHJcblx0XHRcdGNvbnNvbGUubG9nKCdyZWR1Y2VyIGxvZ2luJylcclxuXHRcdFx0ZHJhZnQubG9nSW5Mb2FkaW5nID0gdHJ1ZVxyXG5cdFx0XHRkcmFmdC5sb2dJbkVycm9yID0gbnVsbFxyXG5cdFx0XHRkcmFmdC5sb2dJbkRvbmUgPSBmYWxzZVxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgTE9HX0lOX1NVQ0NFU1M6XHJcblx0XHRcdGRyYWZ0LmxvZ0luTG9hZGluZyA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LmxvZ0luRG9uZSA9IHRydWVcclxuXHRcdFx0Ly9kcmFmdC5tZSA9IGR1bW15VXNlcihhY3Rpb24uZGF0YSkgZnJvbnRcclxuXHRcdFx0ZHJhZnQubWUgPSBhY3Rpb24uZGF0YSAvLyBiYWNrXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBMT0dfSU5fRkFJTFVSRTpcclxuXHRcdFx0Y29uc29sZS5lcnJvcignbG9naW5GYWlsIDogJyArIGFjdGlvbi5lcnJvcilcclxuXHRcdFx0ZHJhZnQubG9nSW5Mb2FkaW5nID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQubG9nSW5FcnJvciA9IGFjdGlvbi5lcnJvclxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgTE9HX09VVF9SRVFVRVNUOlxyXG5cdFx0XHRkcmFmdC5sb2dPdXRMb2FkaW5nID0gdHJ1ZVxyXG5cdFx0XHRkcmFmdC5sb2dPdXREb25lID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQubG9nT3V0RXJyb3IgPSBudWxsXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBMT0dfT1VUX1NVQ0NFU1M6XHJcblx0XHRcdGRyYWZ0LmxvZ091dExvYWRpbmcgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC5sb2dPdXREb25lID0gdHJ1ZVxyXG5cdFx0XHRkcmFmdC5tZSA9IG51bGxcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIExPR19PVVRfRkFJTFVSRTpcclxuXHRcdFx0Y29uc29sZS5lcnJvcignbG9nb3V0RmFpbCA6ICcgKyBhY3Rpb24uZXJyb3IpXHJcblx0XHRcdGRyYWZ0LmxvZ091dExvYWRpbmcgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC5sb2dPdXRFcnJvciA9IGFjdGlvbi5lcnJvclxyXG5cdFx0XHRicmVha1xyXG5cdFx0Y2FzZSBTSUdOX1VQX1JFUVVFU1Q6XHJcblx0XHRcdGRyYWZ0LnNpZ25VcExvYWRpbmcgPSB0cnVlXHJcblx0XHRcdGRyYWZ0LnNpZ25VcERvbmUgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC5zaWduVXBFcnJvciA9IG51bGxcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFNJR05fVVBfU1VDQ0VTUzpcclxuXHRcdFx0ZHJhZnQuc2lnblVwTG9hZGluZyA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LnNpZ25VcERvbmUgPSB0cnVlXHJcblx0XHRcdGJyZWFrXHJcblx0XHRjYXNlIFNJR05fVVBfRkFJTFVSRTpcclxuXHRcdFx0Y29uc29sZS5lcnJvcignc2lnblVwRmFpbCA6ICcgKyBhY3Rpb24uZXJyb3IpXHJcblx0XHRcdGRyYWZ0LnNpZ25VcExvYWRpbmcgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC5zaWduVXBFcnJvciA9IGFjdGlvbi5lcnJvclxyXG5cdFx0XHRicmVha1xyXG5cdFx0Y2FzZSBDSEFOR0VfTklDS05BTUVfUkVRVUVTVDpcclxuXHRcdFx0ZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nID0gdHJ1ZVxyXG5cdFx0XHRkcmFmdC5jaGFuZ2VOaWNrbmFtZURvbmUgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC5jaGFuZ2VOaWNrbmFtZUVycm9yID0gbnVsbFxyXG5cdFx0XHRicmVha1xyXG5cdFx0Y2FzZSBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUzpcclxuXHRcdFx0ZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQuY2hhbmdlTmlja25hbWVEb25lID0gdHJ1ZVxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkU6XHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoJ2NoYW5nZU5pY2tGYWlsIDogJyArIGFjdGlvbi5lcnJvcilcclxuXHRcdFx0ZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQuY2hhbmdlTmlja25hbWVFcnJvciA9IGFjdGlvbi5lcnJvclxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgQUREX1BPU1RfVE9fTUU6IC8vIOqyjOyLnOq4gOydhCDsk7DrqbQg6rKM7Iuc6riAIOyVhOydtOuUlOqwgCDsl6zquLDroZwg65Ok7Ja07JmA7IScIO2VmOuCmOqwgCDstpTqsIDrkJzri6RcclxuXHRcdFx0ZHJhZnQubWUuUG9zdHMudW5zaGlmdCh7aWQ6IGFjdGlvbi5kYXRhfSlcclxuXHRcdFx0YnJlYWtcclxuXHRcdFx0Ly8gcmV0dXJuIHtcclxuXHRcdFx0Ly8gXHQuLi5zdGF0ZSxcclxuXHRcdFx0Ly8gXHRtZToge1xyXG5cdFx0XHQvLyBcdFx0Li4uc3RhdGUubWUsXHJcblx0XHRcdC8vIFx0XHRQb3N0czogW3tpZDogYWN0aW9uLmRhdGF9LCAuLi5zdGF0ZS5tZS5Qb3N0c10sXHJcblx0XHRcdC8vIFx0fVxyXG5cdFx0XHQvLyB9XHJcblx0XHRjYXNlIFJFTU9WRV9QT1NUX09GX01FOlxyXG5cdFx0XHRkcmFmdC5tZS5Qb3N0cyA9IGRyYWZ0Lm1lLlBvc3RzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEpXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0XHQvLyByZXR1cm4geyAvLyDrtojrs4DshLHsnYQg7KeA7YKk66mwIOqyjOyLnOq4gOydhCDsp4Dsm4zslbztlZzri6QuXHJcblx0XHRcdC8vIFx0Li4uc3RhdGUsXHJcblx0XHRcdC8vIFx0bWU6IHtcclxuXHRcdFx0Ly8gXHRcdC4uLnN0YXRlLm1lLFxyXG5cdFx0XHQvLyBcdFx0UG9zdHM6IHN0YXRlLm1lLlBvc3RzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEpXHJcblx0XHRcdC8vIFx0fVxyXG5cdFx0XHQvLyB9XHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRicmVhaztcclxuXHR9XHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyOyJdLCJzb3VyY2VSb290IjoiIn0=