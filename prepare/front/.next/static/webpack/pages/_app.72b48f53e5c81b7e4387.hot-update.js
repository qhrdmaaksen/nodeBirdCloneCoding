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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJpc0xvZ2dlZEluIiwibWUiLCJzaWduVXBEYXRhIiwibG9naW5EYXRhIiwibG9naW5BY3Rpb24iLCJkYXRhIiwiZGlzcGF0Y2giLCJsb2dpblJlcXVlc3RBY3Rpb24iLCJheGlvcyIsInBvc3QiLCJ0aGVuIiwicmVzIiwibG9naW5TdWNjZXNzQWN0aW9uIiwiZXJyIiwibG9naW5GYWlsdXJlQWN0aW9uIiwidHlwZSIsImxvZ291dEFjdGlvbiIsImxvZ291dFN1Y2Nlc3NBY3Rpb24iLCJsb2dvdXRGYWlsdXJlQWN0aW9uIiwibG9nb3V0UmVxdWVzdEFjdGlvbiIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sSUFBTUEsWUFBWSxHQUFHO0FBQzNCQyxZQUFVLEVBQUUsS0FEZTtBQUUzQkMsSUFBRSxFQUFFLElBRnVCO0FBRzNCQyxZQUFVLEVBQUUsRUFIZTtBQUkzQkMsV0FBUyxFQUFFO0FBSmdCLENBQXJCLEMsQ0FPUDs7QUFDTyxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxJQUFELEVBQVU7QUFDcEMsU0FBTyxVQUFDQyxRQUFELEVBQWM7QUFDcEJBLFlBQVEsQ0FBQ0Msa0JBQWtCLEVBQW5CLENBQVI7QUFDQUMsU0FBSyxDQUFDQyxJQUFOLENBQVcsWUFBWCxFQUNHQyxJQURILENBQ1EsVUFBQ0MsR0FBRCxFQUFTO0FBQ2RMLGNBQVEsQ0FBQ00sa0JBQWtCLENBQUNELEdBQUcsQ0FBQ04sSUFBTCxDQUFuQixDQUFSO0FBQ0EsS0FISCxXQUlTLFVBQUNRLEdBQUQsRUFBUztBQUNmUCxjQUFRLENBQUNRLGtCQUFrQixDQUFDRCxHQUFELENBQW5CLENBQVI7QUFDQSxLQU5IO0FBT0EsR0FURDtBQVVBLENBWE07QUFZQSxJQUFNTixrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNGLElBQUQsRUFBVTtBQUMzQyxTQUFPO0FBQ05VLFFBQUksRUFBRSxnQkFEQTtBQUVOVixRQUFJLEVBQUpBO0FBRk0sR0FBUDtBQUlBLENBTE07QUFNQSxJQUFNTyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNQLElBQUQsRUFBVTtBQUMzQyxTQUFPO0FBQ05VLFFBQUksRUFBRSxnQkFEQTtBQUVOVixRQUFJLEVBQUpBO0FBRk0sR0FBUDtBQUlBLENBTE07QUFNQSxJQUFNUyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNULElBQUQsRUFBVTtBQUMzQyxTQUFPO0FBQ05VLFFBQUksRUFBRSxnQkFEQTtBQUVOVixRQUFJLEVBQUpBO0FBRk0sR0FBUDtBQUlBLENBTE0sQyxDQU1QOztBQUNPLElBQU1XLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNYLElBQUQsRUFBVTtBQUNyQyxTQUFPLFVBQUNDLFFBQUQsRUFBYztBQUNwQkUsU0FBSyxDQUFDQyxJQUFOLENBQVcsYUFBWCxFQUNHQyxJQURILENBQ1EsWUFBTTtBQUNYSixjQUFRLENBQUNXLG1CQUFtQixFQUFwQixDQUFSO0FBQ0EsS0FISCxXQUlTLFlBQU07QUFDWlgsY0FBUSxDQUFDWSxtQkFBbUIsRUFBcEIsQ0FBUjtBQUNBLEtBTkg7QUFPQSxHQVJEO0FBU0EsQ0FWTTtBQVdBLElBQU1DLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsR0FBTTtBQUN4QyxTQUFPO0FBQ05KLFFBQUksRUFBRTtBQURBLEdBQVA7QUFHQSxDQUpNO0FBS0EsSUFBTUUsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixHQUFNO0FBQ3hDLFNBQU87QUFDTkYsUUFBSSxFQUFFO0FBREEsR0FBUDtBQUdBLENBSk07QUFLQSxJQUFNRyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLEdBQU07QUFDeEMsU0FBTztBQUNOSCxRQUFJLEVBQUU7QUFEQSxHQUFQO0FBR0EsQ0FKTTs7QUFNUCxJQUFNSyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFrQztBQUFBLE1BQWpDQyxLQUFpQyx1RUFBekJ0QixZQUF5QjtBQUFBLE1BQVh1QixNQUFXOztBQUNqRCxVQUFRQSxNQUFNLENBQUNQLElBQWY7QUFDQyxTQUFLLFFBQUw7QUFDQyw2Q0FFSU0sS0FGSjtBQUdDckIsa0JBQVUsRUFBRSxJQUhiO0FBSUNDLFVBQUUsRUFBRXFCLE1BQU0sQ0FBQ2pCO0FBSlo7O0FBTUQsU0FBSyxTQUFMO0FBQ0MsNkNBRUlnQixLQUZKO0FBR0NyQixrQkFBVSxFQUFFLEtBSGI7QUFJQ0MsVUFBRSxFQUFFO0FBSkw7O0FBTUQ7QUFDQyxhQUFPb0IsS0FBUDtBQWhCRjtBQWtCQSxDQW5CRDs7QUFxQmVELHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNzJiNDhmNTNlNWM4MWI3ZTQzODcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcblx0aXNMb2dnZWRJbjogZmFsc2UsXHJcblx0bWU6IG51bGwsXHJcblx0c2lnblVwRGF0YToge30sXHJcblx0bG9naW5EYXRhOiB7fSxcclxufVxyXG5cclxuLy8g66Gc6re47J24IOyVoeyFmCDsg53shLHquLBcclxuZXhwb3J0IGNvbnN0IGxvZ2luQWN0aW9uID0gKGRhdGEpID0+IHtcclxuXHRyZXR1cm4gKGRpc3BhdGNoKSA9PiB7XHJcblx0XHRkaXNwYXRjaChsb2dpblJlcXVlc3RBY3Rpb24oKSlcclxuXHRcdGF4aW9zLnBvc3QoJy9hcGkvbG9naW4nKVxyXG5cdFx0XHRcdC50aGVuKChyZXMpID0+IHtcclxuXHRcdFx0XHRcdGRpc3BhdGNoKGxvZ2luU3VjY2Vzc0FjdGlvbihyZXMuZGF0YSkpXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHQuY2F0Y2goKGVycikgPT4ge1xyXG5cdFx0XHRcdFx0ZGlzcGF0Y2gobG9naW5GYWlsdXJlQWN0aW9uKGVycikpXHJcblx0XHRcdFx0fSlcclxuXHR9XHJcbn1cclxuZXhwb3J0IGNvbnN0IGxvZ2luUmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHR5cGU6ICdMT0dfSU5fUkVRVUVTVCcsXHJcblx0XHRkYXRhLFxyXG5cdH1cclxufVxyXG5leHBvcnQgY29uc3QgbG9naW5TdWNjZXNzQWN0aW9uID0gKGRhdGEpID0+IHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTogJ0xPR19JTl9TVUNDRVNTJyxcclxuXHRcdGRhdGEsXHJcblx0fVxyXG59XHJcbmV4cG9ydCBjb25zdCBsb2dpbkZhaWx1cmVBY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG5cdHJldHVybiB7XHJcblx0XHR0eXBlOiAnTE9HX0lOX0ZBSUxVUkUnLFxyXG5cdFx0ZGF0YSxcclxuXHR9XHJcbn1cclxuLy8g66Gc6re47JWE7JuDIOyVoeyFmCDsg53shLHquLBcclxuZXhwb3J0IGNvbnN0IGxvZ291dEFjdGlvbiA9IChkYXRhKSA9PiB7XHJcblx0cmV0dXJuIChkaXNwYXRjaCkgPT4ge1xyXG5cdFx0YXhpb3MucG9zdCgnL2FwaS9sb2dvdXQnKVxyXG5cdFx0XHRcdC50aGVuKCgpID0+IHtcclxuXHRcdFx0XHRcdGRpc3BhdGNoKGxvZ291dFN1Y2Nlc3NBY3Rpb24oKSlcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdC5jYXRjaCgoKSA9PiB7XHJcblx0XHRcdFx0XHRkaXNwYXRjaChsb2dvdXRGYWlsdXJlQWN0aW9uKCkpXHJcblx0XHRcdFx0fSlcclxuXHR9XHJcbn1cclxuZXhwb3J0IGNvbnN0IGxvZ291dFJlcXVlc3RBY3Rpb24gPSAoKSA9PiB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHR5cGU6ICdMT0dfT1VUX1JFUVVFU1QnLFxyXG5cdH1cclxufVxyXG5leHBvcnQgY29uc3QgbG9nb3V0U3VjY2Vzc0FjdGlvbiA9ICgpID0+IHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTogJ0xPR19PVVRfU1VDQ0VTUycsXHJcblx0fVxyXG59XHJcbmV4cG9ydCBjb25zdCBsb2dvdXRGYWlsdXJlQWN0aW9uID0gKCkgPT4ge1xyXG5cdHJldHVybiB7XHJcblx0XHR0eXBlOiAnTE9HX09VVF9GQUlMVVJFJyxcclxuXHR9XHJcbn1cclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgJ0xPR19JTic6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Ly8gc3RvcmUg7JeQ7IScIOuztOuCuCBzdGF0ZSDqsIAg66eM65Ok7Ja07KeQLCBzdGF0ZSDsnpDssrTqsIAgdWlzZXIuanMg7J2YIHN0YXRlIOyehFxyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGlzTG9nZ2VkSW46IHRydWUsXHJcblx0XHRcdFx0bWU6IGFjdGlvbi5kYXRhLFxyXG5cdFx0XHR9XHJcblx0XHRjYXNlICdMT0dfT1VUJzpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQvLyBzdG9yZSDsl5DshJwg67O064K4IHN0YXRlIOqwgCDrp4zrk6TslrTsp5BcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRpc0xvZ2dlZEluOiBmYWxzZSxcclxuXHRcdFx0XHRtZTogbnVsbCxcclxuXHRcdFx0fVxyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiXSwic291cmNlUm9vdCI6IiJ9