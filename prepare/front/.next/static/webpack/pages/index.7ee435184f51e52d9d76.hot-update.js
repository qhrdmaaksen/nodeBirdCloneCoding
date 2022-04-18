webpackHotUpdate_N_E("pages/index",{

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, loginAction, loginRequestAction, loginSuccessAction, loginFailureAction, logoutAction, logoutRequestAction, logoutSuccessAction, logoutFailureAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginAction", function() { return loginAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginRequestAction", function() { return loginRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginSuccessAction", function() { return loginSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginFailureAction", function() { return loginFailureAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutAction", function() { return logoutAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutRequestAction", function() { return logoutRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutSuccessAction", function() { return logoutSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutFailureAction", function() { return logoutFailureAction; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var initialState = {
  isLoggingIn: false,
  // 로그인 시도중일땐 로딩중 띄울거임
  isLoggedIn: false,
  // 로그인 됨
  isLoggedOut: false,
  // 로그아웃 시도중
  me: null,
  signUpData: {},
  // 회원 가입
  loginData: {}
}; // 로그인 액션 생성기

var loginAction = function loginAction(data) {
  // 함수를 리턴하는 비동기 액션 크리에이터가 추가
  return function (dispatch, getState) {
    var state = getState();
    dispatch(loginRequestAction());
    axios.post('/api/login').then(function (res) {
      dispatch(loginSuccessAction(res.data));
    })["catch"](function (err) {
      dispatch(loginFailureAction(err));
    });
  };
};
var loginRequestAction = function loginRequestAction(data) {
  return {
    type: 'LOG_IN_REQUEST',
    data: data
  };
};
var loginSuccessAction = function loginSuccessAction(data) {
  return {
    type: 'LOG_IN_SUCCESS',
    data: data
  };
};
var loginFailureAction = function loginFailureAction(data) {
  return {
    type: 'LOG_IN_FAILURE',
    data: data
  };
}; // 로그아웃 액션 생성기

var logoutAction = function logoutAction(data) {
  return function (dispatch) {
    axios.post('/api/logout').then(function () {
      dispatch(logoutSuccessAction());
    })["catch"](function () {
      dispatch(logoutFailureAction());
    });
  };
};
var logoutRequestAction = function logoutRequestAction() {
  return {
    type: 'LOG_OUT_REQUEST'
  };
};
var logoutSuccessAction = function logoutSuccessAction() {
  return {
    type: 'LOG_OUT_SUCCESS'
  };
};
var logoutFailureAction = function logoutFailureAction() {
  return {
    type: 'LOG_OUT_FAILURE'
  };
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'LOG_IN_REQUEST':
      console.log('reducer login');
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoggingIn: true,
        me: action.data
      });

    case 'LOG_IN_SUCCESS':
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoggingIn: false,
        isLoggedIn: true,
        me: _objectSpread(_objectSpread({}, action.data), {}, {
          nickname: 'vitamin'
        })
      });

    case 'LOG_IN_FAILURE':
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoggingIn: false,
        isLoggedIn: false
      });

    case 'LOG_OUT_REQUEST':
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoggedOut: true
      });

    case 'LOG_OUT_SUCCESS':
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoggedOut: false,
        isLoggedIn: false,
        me: null
      });

    case 'LOG_OUT_FAILURE':
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoggedOut: false,
        isLoggedIn: false
      });

    default:
      return state;
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJpc0xvZ2dpbmdJbiIsImlzTG9nZ2VkSW4iLCJpc0xvZ2dlZE91dCIsIm1lIiwic2lnblVwRGF0YSIsImxvZ2luRGF0YSIsImxvZ2luQWN0aW9uIiwiZGF0YSIsImRpc3BhdGNoIiwiZ2V0U3RhdGUiLCJzdGF0ZSIsImxvZ2luUmVxdWVzdEFjdGlvbiIsImF4aW9zIiwicG9zdCIsInRoZW4iLCJyZXMiLCJsb2dpblN1Y2Nlc3NBY3Rpb24iLCJlcnIiLCJsb2dpbkZhaWx1cmVBY3Rpb24iLCJ0eXBlIiwibG9nb3V0QWN0aW9uIiwibG9nb3V0U3VjY2Vzc0FjdGlvbiIsImxvZ291dEZhaWx1cmVBY3Rpb24iLCJsb2dvdXRSZXF1ZXN0QWN0aW9uIiwicmVkdWNlciIsImFjdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJuaWNrbmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sSUFBTUEsWUFBWSxHQUFHO0FBQzNCQyxhQUFXLEVBQUUsS0FEYztBQUNQO0FBQ3BCQyxZQUFVLEVBQUUsS0FGZTtBQUVSO0FBQ25CQyxhQUFXLEVBQUUsS0FIYztBQUdQO0FBQ3BCQyxJQUFFLEVBQUUsSUFKdUI7QUFLM0JDLFlBQVUsRUFBRSxFQUxlO0FBS1g7QUFDaEJDLFdBQVMsRUFBRTtBQU5nQixDQUFyQixDLENBU1A7O0FBQ08sSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsSUFBRCxFQUFVO0FBQUU7QUFDdEMsU0FBTyxVQUFDQyxRQUFELEVBQVdDLFFBQVgsRUFBd0I7QUFDOUIsUUFBTUMsS0FBSyxHQUFHRCxRQUFRLEVBQXRCO0FBQ0FELFlBQVEsQ0FBQ0csa0JBQWtCLEVBQW5CLENBQVI7QUFDQUMsU0FBSyxDQUFDQyxJQUFOLENBQVcsWUFBWCxFQUNHQyxJQURILENBQ1EsVUFBQ0MsR0FBRCxFQUFTO0FBQ2RQLGNB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ImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43ZWU0MzUxODRmNTFlNTJkOWQ3Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuXHRpc0xvZ2dpbmdJbjogZmFsc2UsIC8vIOuhnOq3uOyduCDsi5zrj4TspJHsnbzrlZAg66Gc65Sp7KSRIOudhOyauOqxsOyehFxyXG5cdGlzTG9nZ2VkSW46IGZhbHNlLCAvLyDroZzqt7jsnbgg65CoXHJcblx0aXNMb2dnZWRPdXQ6IGZhbHNlLCAvLyDroZzqt7jslYTsm4Mg7Iuc64+E7KSRXHJcblx0bWU6IG51bGwsXHJcblx0c2lnblVwRGF0YToge30sIC8vIO2ajOybkCDqsIDsnoVcclxuXHRsb2dpbkRhdGE6IHt9LFxyXG59XHJcblxyXG4vLyDroZzqt7jsnbgg7JWh7IWYIOyDneyEseq4sFxyXG5leHBvcnQgY29uc3QgbG9naW5BY3Rpb24gPSAoZGF0YSkgPT4geyAvLyDtlajsiJjrpbwg66as7YS07ZWY64qUIOu5hOuPmeq4sCDslaHshZgg7YGs66as7JeQ7J207YSw6rCAIOy2lOqwgFxyXG5cdHJldHVybiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XHJcblx0XHRjb25zdCBzdGF0ZSA9IGdldFN0YXRlKClcclxuXHRcdGRpc3BhdGNoKGxvZ2luUmVxdWVzdEFjdGlvbigpKVxyXG5cdFx0YXhpb3MucG9zdCgnL2FwaS9sb2dpbicpXHJcblx0XHRcdFx0LnRoZW4oKHJlcykgPT4ge1xyXG5cdFx0XHRcdFx0ZGlzcGF0Y2gobG9naW5TdWNjZXNzQWN0aW9uKHJlcy5kYXRhKSlcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdC5jYXRjaCgoZXJyKSA9PiB7XHJcblx0XHRcdFx0XHRkaXNwYXRjaChsb2dpbkZhaWx1cmVBY3Rpb24oZXJyKSlcclxuXHRcdFx0XHR9KVxyXG5cdH1cclxufVxyXG5leHBvcnQgY29uc3QgbG9naW5SZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+IHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTogJ0xPR19JTl9SRVFVRVNUJyxcclxuXHRcdGRhdGEsXHJcblx0fVxyXG59XHJcbmV4cG9ydCBjb25zdCBsb2dpblN1Y2Nlc3NBY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG5cdHJldHVybiB7XHJcblx0XHR0eXBlOiAnTE9HX0lOX1NVQ0NFU1MnLFxyXG5cdFx0ZGF0YSxcclxuXHR9XHJcbn1cclxuZXhwb3J0IGNvbnN0IGxvZ2luRmFpbHVyZUFjdGlvbiA9IChkYXRhKSA9PiB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHR5cGU6ICdMT0dfSU5fRkFJTFVSRScsXHJcblx0XHRkYXRhLFxyXG5cdH1cclxufVxyXG4vLyDroZzqt7jslYTsm4Mg7JWh7IWYIOyDneyEseq4sFxyXG5leHBvcnQgY29uc3QgbG9nb3V0QWN0aW9uID0gKGRhdGEpID0+IHtcclxuXHRyZXR1cm4gKGRpc3BhdGNoKSA9PiB7XHJcblx0XHRheGlvcy5wb3N0KCcvYXBpL2xvZ291dCcpXHJcblx0XHRcdFx0LnRoZW4oKCkgPT4ge1xyXG5cdFx0XHRcdFx0ZGlzcGF0Y2gobG9nb3V0U3VjY2Vzc0FjdGlvbigpKVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0LmNhdGNoKCgpID0+IHtcclxuXHRcdFx0XHRcdGRpc3BhdGNoKGxvZ291dEZhaWx1cmVBY3Rpb24oKSlcclxuXHRcdFx0XHR9KVxyXG5cdH1cclxufVxyXG5leHBvcnQgY29uc3QgbG9nb3V0UmVxdWVzdEFjdGlvbiA9ICgpID0+IHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTogJ0xPR19PVVRfUkVRVUVTVCcsXHJcblx0fVxyXG59XHJcbmV4cG9ydCBjb25zdCBsb2dvdXRTdWNjZXNzQWN0aW9uID0gKCkgPT4ge1xyXG5cdHJldHVybiB7XHJcblx0XHR0eXBlOiAnTE9HX09VVF9TVUNDRVNTJyxcclxuXHR9XHJcbn1cclxuZXhwb3J0IGNvbnN0IGxvZ291dEZhaWx1cmVBY3Rpb24gPSAoKSA9PiB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHR5cGU6ICdMT0dfT1VUX0ZBSUxVUkUnLFxyXG5cdH1cclxufVxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSAnTE9HX0lOX1JFUVVFU1QnOlxyXG5cdFx0XHRjb25zb2xlLmxvZygncmVkdWNlciBsb2dpbicpXHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Ly8gc3RvcmUg7JeQ7IScIOuztOuCuCBzdGF0ZSDqsIAg66eM65Ok7Ja07KeQLCBzdGF0ZSDsnpDssrTqsIAgdWlzZXIuanMg7J2YIHN0YXRlIOyehFxyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGlzTG9nZ2luZ0luOiB0cnVlLFxyXG5cdFx0XHRcdG1lOiBhY3Rpb24uZGF0YSxcclxuXHRcdFx0fVxyXG5cdFx0Y2FzZSAnTE9HX0lOX1NVQ0NFU1MnOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC8vIHN0b3JlIOyXkOyEnCDrs7Trgrggc3RhdGUg6rCAIOunjOuTpOyWtOynkCwgc3RhdGUg7J6Q7LK06rCAIHVpc2VyLmpzIOydmCBzdGF0ZSDsnoRcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRpc0xvZ2dpbmdJbjogZmFsc2UsXHJcblx0XHRcdFx0aXNMb2dnZWRJbjogdHJ1ZSxcclxuXHRcdFx0XHRtZTogey4uLmFjdGlvbi5kYXRhLCBuaWNrbmFtZTogJ3ZpdGFtaW4nfSxcclxuXHRcdFx0fVxyXG5cdFx0Y2FzZSAnTE9HX0lOX0ZBSUxVUkUnOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC8vIHN0b3JlIOyXkOyEnCDrs7Trgrggc3RhdGUg6rCAIOunjOuTpOyWtOynkCwgc3RhdGUg7J6Q7LK06rCAIHVpc2VyLmpzIOydmCBzdGF0ZSDsnoRcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRpc0xvZ2dpbmdJbjogZmFsc2UsXHJcblx0XHRcdFx0aXNMb2dnZWRJbjogZmFsc2UsXHJcblx0XHRcdH1cclxuXHRcdGNhc2UgJ0xPR19PVVRfUkVRVUVTVCc6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Ly8gc3RvcmUg7JeQ7IScIOuztOuCuCBzdGF0ZSDqsIAg66eM65Ok7Ja07KeQXHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0aXNMb2dnZWRPdXQ6IHRydWUsXHJcblx0XHRcdH1cclxuXHRcdGNhc2UgJ0xPR19PVVRfU1VDQ0VTUyc6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Ly8gc3RvcmUg7JeQ7IScIOuztOuCuCBzdGF0ZSDqsIAg66eM65Ok7Ja07KeQXHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0aXNMb2dnZWRPdXQ6IGZhbHNlLFxyXG5cdFx0XHRcdGlzTG9nZ2VkSW46IGZhbHNlLFxyXG5cdFx0XHRcdG1lOiBudWxsLFxyXG5cdFx0XHR9XHJcblx0XHRjYXNlICdMT0dfT1VUX0ZBSUxVUkUnOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC8vIHN0b3JlIOyXkOyEnCDrs7Trgrggc3RhdGUg6rCAIOunjOuTpOyWtOynkFxyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGlzTG9nZ2VkT3V0OiBmYWxzZSxcclxuXHRcdFx0XHRpc0xvZ2dlZEluOiBmYWxzZSxcclxuXHRcdFx0fVxyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiXSwic291cmNlUm9vdCI6IiJ9