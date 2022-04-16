webpackHotUpdate_N_E("pages/_app",{

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
  isLoggedIn: false,
  me: null,
  signUpData: {},
  loginData: {}
}; // 로그인 액션 생성기

var loginAction = function loginAction(data) {
  return function (dispatch) {
    dispatch(loginRequestAction());
    axios.post('/api/login').then(function () {
      dispatch(loginSuccessAction());
    })["catch"](function () {
      dispatch(loginFailureAction());
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
    case 'LOG_IN':
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoggedIn: true,
        me: action.data
      });

    case 'LOG_OUT':
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoggedIn: false,
        me: null
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJpc0xvZ2dlZEluIiwibWUiLCJzaWduVXBEYXRhIiwibG9naW5EYXRhIiwibG9naW5BY3Rpb24iLCJkYXRhIiwiZGlzcGF0Y2giLCJsb2dpblJlcXVlc3RBY3Rpb24iLCJheGlvcyIsInBvc3QiLCJ0aGVuIiwibG9naW5TdWNjZXNzQWN0aW9uIiwibG9naW5GYWlsdXJlQWN0aW9uIiwidHlwZSIsImxvZ291dEFjdGlvbiIsImxvZ291dFN1Y2Nlc3NBY3Rpb24iLCJsb2dvdXRGYWlsdXJlQWN0aW9uIiwibG9nb3V0UmVxdWVzdEFjdGlvbiIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sSUFBTUEsWUFBWSxHQUFHO0FBQzNCQyxZQUFVLEVBQUUsS0FEZTtBQUUzQkMsSUFBRSxFQUFFLElBRnVCO0FBRzNCQyxZQUFVLEVBQUUsRUFIZTtBQUkzQkMsV0FBUyxFQUFFO0FBSmdCLENBQXJCLEMsQ0FPUDs7QUFDTyxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxJQUFELEVBQVU7QUFDcEMsU0FBTyxVQUFDQyxRQUFELEVBQWM7QUFDcEJBLFlBQVEsQ0FBQ0Msa0JBQWtCLEVBQW5CLENBQVI7QUFDQUMsU0FBSyxDQUFDQyxJQUFOLENBQVcsWUFBWCxFQUNHQyxJQURILENBQ1EsWUFBTTtBQUNYSixjQUFRLENBQUNLLGtCQUFrQixFQUFuQixDQUFSO0FBQ0EsS0FISCxXQUlTLFlBQU07QUFDWkwsY0FBUSxDQUFDTSxrQkFBa0IsRUFBbkIsQ0FBUjtBQUNBLEtBTkg7QUFPQSxHQVREO0FBVUEsQ0FYTTtBQVlBLElBQU1MLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ0YsSUFBRCxFQUFVO0FBQzNDLFNBQU87QUFDTlEsUUFBSSxFQUFFLGdCQURBO0FBRU5SLFFBQUksRUFBSkE7QUFGTSxHQUFQO0FBSUEsQ0FMTTtBQU1BLElBQU1NLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ04sSUFBRCxFQUFVO0FBQzNDLFNBQU87QUFDTlEsUUFBSSxFQUFFLGdCQURBO0FBRU5SLFFBQUksRUFBSkE7QUFGTSxHQUFQO0FBSUEsQ0FMTTtBQU1BLElBQU1PLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ1AsSUFBRCxFQUFVO0FBQzNDLFNBQU87QUFDTlEsUUFBSSxFQUFFLGdCQURBO0FBRU5SLFFBQUksRUFBSkE7QUFGTSxHQUFQO0FBSUEsQ0FMTSxDLENBTVA7O0FBQ08sSUFBTVMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ1QsSUFBRCxFQUFVO0FBQ3JDLFNBQU8sVUFBQ0MsUUFBRCxFQUFjO0FBQ3BCRSxTQUFLLENBQUNDLElBQU4sQ0FBVyxhQUFYLEVBQ0dDLElBREgsQ0FDUSxZQUFNO0FBQ1hKLGNBQVEsQ0FBQ1MsbUJBQW1CLEVBQXBCLENBQVI7QUFDQSxLQUhILFdBSVMsWUFBTTtBQUNaVCxjQUFRLENBQUNVLG1CQUFtQixFQUFwQixDQUFSO0FBQ0EsS0FOSDtBQU9BLEdBUkQ7QUFTQSxDQVZNO0FBV0EsSUFBTUMsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixHQUFNO0FBQ3hDLFNBQU87QUFDTkosUUFBSSxFQUFFO0FBREEsR0FBUDtBQUdBLENBSk07QUFLQSxJQUFNRSxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLEdBQU07QUFDeEMsU0FBTztBQUNORixRQUFJLEVBQUU7QUFEQSxHQUFQO0FBR0EsQ0FKTTtBQUtBLElBQU1HLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsR0FBTTtBQUN4QyxTQUFPO0FBQ05ILFFBQUksRUFBRTtBQURBLEdBQVA7QUFHQSxDQUpNOztBQU1QLElBQU1LLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQWtDO0FBQUEsTUFBakNDLEtBQWlDLHVFQUF6QnBCLFlBQXlCO0FBQUEsTUFBWHFCLE1BQVc7O0FBQ2pELFVBQVFBLE1BQU0sQ0FBQ1AsSUFBZjtBQUNDLFNBQUssUUFBTDtBQUNDLDZDQUVJTSxLQUZKO0FBR0NuQixrQkFBVSxFQUFFLElBSGI7QUFJQ0MsVUFBRSxFQUFFbUIsTUFBTSxDQUFDZjtBQUpaOztBQU1ELFNBQUssU0FBTDtBQUNDLDZDQUVJYyxLQUZKO0FBR0NuQixrQkFBVSxFQUFFLEtBSGI7QUFJQ0MsVUFBRSxFQUFFO0FBSkw7O0FBTUQ7QUFDQyxhQUFPa0IsS0FBUDtBQWhCRjtBQWtCQSxDQW5CRDs7QUFxQmVELHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuYmUxMDAxODY0MzQ3OWYyZjA2ZmYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcblx0aXNMb2dnZWRJbjogZmFsc2UsXHJcblx0bWU6IG51bGwsXHJcblx0c2lnblVwRGF0YToge30sXHJcblx0bG9naW5EYXRhOiB7fSxcclxufVxyXG5cclxuLy8g66Gc6re47J24IOyVoeyFmCDsg53shLHquLBcclxuZXhwb3J0IGNvbnN0IGxvZ2luQWN0aW9uID0gKGRhdGEpID0+IHtcclxuXHRyZXR1cm4gKGRpc3BhdGNoKSA9PiB7XHJcblx0XHRkaXNwYXRjaChsb2dpblJlcXVlc3RBY3Rpb24oKSlcclxuXHRcdGF4aW9zLnBvc3QoJy9hcGkvbG9naW4nKVxyXG5cdFx0XHRcdC50aGVuKCgpID0+IHtcclxuXHRcdFx0XHRcdGRpc3BhdGNoKGxvZ2luU3VjY2Vzc0FjdGlvbigpKVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0LmNhdGNoKCgpID0+IHtcclxuXHRcdFx0XHRcdGRpc3BhdGNoKGxvZ2luRmFpbHVyZUFjdGlvbigpKVxyXG5cdFx0XHRcdH0pXHJcblx0fVxyXG59XHJcbmV4cG9ydCBjb25zdCBsb2dpblJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG5cdHJldHVybiB7XHJcblx0XHR0eXBlOiAnTE9HX0lOX1JFUVVFU1QnLFxyXG5cdFx0ZGF0YSxcclxuXHR9XHJcbn1cclxuZXhwb3J0IGNvbnN0IGxvZ2luU3VjY2Vzc0FjdGlvbiA9IChkYXRhKSA9PiB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHR5cGU6ICdMT0dfSU5fU1VDQ0VTUycsXHJcblx0XHRkYXRhLFxyXG5cdH1cclxufVxyXG5leHBvcnQgY29uc3QgbG9naW5GYWlsdXJlQWN0aW9uID0gKGRhdGEpID0+IHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTogJ0xPR19JTl9GQUlMVVJFJyxcclxuXHRcdGRhdGEsXHJcblx0fVxyXG59XHJcbi8vIOuhnOq3uOyVhOybgyDslaHshZgg7IOd7ISx6riwXHJcbmV4cG9ydCBjb25zdCBsb2dvdXRBY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG5cdHJldHVybiAoZGlzcGF0Y2gpID0+IHtcclxuXHRcdGF4aW9zLnBvc3QoJy9hcGkvbG9nb3V0JylcclxuXHRcdFx0XHQudGhlbigoKSA9PiB7XHJcblx0XHRcdFx0XHRkaXNwYXRjaChsb2dvdXRTdWNjZXNzQWN0aW9uKCkpXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHQuY2F0Y2goKCkgPT4ge1xyXG5cdFx0XHRcdFx0ZGlzcGF0Y2gobG9nb3V0RmFpbHVyZUFjdGlvbigpKVxyXG5cdFx0XHRcdH0pXHJcblx0fVxyXG59XHJcbmV4cG9ydCBjb25zdCBsb2dvdXRSZXF1ZXN0QWN0aW9uID0gKCkgPT4ge1xyXG5cdHJldHVybiB7XHJcblx0XHR0eXBlOiAnTE9HX09VVF9SRVFVRVNUJyxcclxuXHR9XHJcbn1cclxuZXhwb3J0IGNvbnN0IGxvZ291dFN1Y2Nlc3NBY3Rpb24gPSAoKSA9PiB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHR5cGU6ICdMT0dfT1VUX1NVQ0NFU1MnLFxyXG5cdH1cclxufVxyXG5leHBvcnQgY29uc3QgbG9nb3V0RmFpbHVyZUFjdGlvbiA9ICgpID0+IHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTogJ0xPR19PVVRfRkFJTFVSRScsXHJcblx0fVxyXG59XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlICdMT0dfSU4nOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC8vIHN0b3JlIOyXkOyEnCDrs7Trgrggc3RhdGUg6rCAIOunjOuTpOyWtOynkCwgc3RhdGUg7J6Q7LK06rCAIHVpc2VyLmpzIOydmCBzdGF0ZSDsnoRcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRpc0xvZ2dlZEluOiB0cnVlLFxyXG5cdFx0XHRcdG1lOiBhY3Rpb24uZGF0YSxcclxuXHRcdFx0fVxyXG5cdFx0Y2FzZSAnTE9HX09VVCc6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Ly8gc3RvcmUg7JeQ7IScIOuztOuCuCBzdGF0ZSDqsIAg66eM65Ok7Ja07KeQXHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0aXNMb2dnZWRJbjogZmFsc2UsXHJcblx0XHRcdFx0bWU6IG51bGwsXHJcblx0XHRcdH1cclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==