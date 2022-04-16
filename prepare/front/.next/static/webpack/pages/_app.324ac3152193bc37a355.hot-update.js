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
  // 함수를 리턴하는 비동기 액션 크리에이터가 추가
  return function (dispatch, getState) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJpc0xvZ2dlZEluIiwibWUiLCJzaWduVXBEYXRhIiwibG9naW5EYXRhIiwibG9naW5BY3Rpb24iLCJkYXRhIiwiZGlzcGF0Y2giLCJnZXRTdGF0ZSIsImxvZ2luUmVxdWVzdEFjdGlvbiIsImF4aW9zIiwicG9zdCIsInRoZW4iLCJyZXMiLCJsb2dpblN1Y2Nlc3NBY3Rpb24iLCJlcnIiLCJsb2dpbkZhaWx1cmVBY3Rpb24iLCJ0eXBlIiwibG9nb3V0QWN0aW9uIiwibG9nb3V0U3VjY2Vzc0FjdGlvbiIsImxvZ291dEZhaWx1cmVBY3Rpb24iLCJsb2dvdXRSZXF1ZXN0QWN0aW9uIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTyxJQUFNQSxZQUFZLEdBQUc7QUFDM0JDLFlBQVUsRUFBRSxLQURlO0FBRTNCQyxJQUFFLEVBQUUsSUFGdUI7QUFHM0JDLFlBQVUsRUFBRSxFQUhlO0FBSTNCQyxXQUFTLEVBQUU7QUFKZ0IsQ0FBckIsQyxDQU9QOztBQUNPLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLElBQUQsRUFBVTtBQUFFO0FBQ3RDLFNBQU8sVUFBQ0MsUUFBRCxFQUFXQyxRQUFYLEVBQXdCO0FBQzlCRCxZQUFRLENBQUNFLGtCQUFrQixFQUFuQixDQUFSO0FBQ0FDLFNBQUssQ0FBQ0MsSUFBTixDQUFXLFlBQVgsRUFDR0MsSUFESCxDQUNRLFVBQUNDLEdBQUQsRUFBUztBQUNkTixjQUFRLENBQUNPLGtCQUFrQixDQUFDRCxHQUFHLENBQUNQLElBQUwsQ0FBbkIsQ0FBUjtBQUNBLEtBSEgsV0FJUyxVQUFDUyxHQUFELEVBQVM7QUFDZlIsY0FBUSxDQUFDUyxrQkFBa0IsQ0FBQ0QsR0FBRCxDQUFuQixDQUFSO0FBQ0EsS0FOSDtBQU9BLEdBVEQ7QUFVQSxDQVhNO0FBWUEsSUFBTU4sa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDSCxJQUFELEVBQVU7QUFDM0MsU0FBTztBQUNOVyxRQUFJLEVBQUUsZ0JBREE7QUFFTlgsUUFBSSxFQUFKQTtBQUZNLEdBQVA7QUFJQSxDQUxNO0FBTUEsSUFBTVEsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDUixJQUFELEVBQVU7QUFDM0MsU0FBTztBQUNOVyxRQUFJLEVBQUUsZ0JBREE7QUFFTlgsUUFBSSxFQUFKQTtBQUZNLEdBQVA7QUFJQSxDQUxNO0FBTUEsSUFBTVUsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDVixJQUFELEVBQVU7QUFDM0MsU0FBTztBQUNOVyxRQUFJLEVBQUUsZ0JBREE7QUFFTlgsUUFBSSxFQUFKQTtBQUZNLEdBQVA7QUFJQSxDQUxNLEMsQ0FNUDs7QUFDTyxJQUFNWSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDWixJQUFELEVBQVU7QUFDckMsU0FBTyxVQUFDQyxRQUFELEVBQWM7QUFDcEJHLFNBQUssQ0FBQ0MsSUFBTixDQUFXLGFBQVgsRUFDR0MsSUFESCxDQUNRLFlBQU07QUFDWEwsY0FBUSxDQUFDWSxtQkFBbUIsRUFBcEIsQ0FBUjtBQUNBLEtBSEgsV0FJUyxZQUFNO0FBQ1paLGNBQVEsQ0FBQ2EsbUJBQW1CLEVBQXBCLENBQVI7QUFDQSxLQU5IO0FBT0EsR0FSRDtBQVNBLENBVk07QUFXQSxJQUFNQyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLEdBQU07QUFDeEMsU0FBTztBQUNOSixRQUFJLEVBQUU7QUFEQSxHQUFQO0FBR0EsQ0FKTTtBQUtBLElBQU1FLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsR0FBTTtBQUN4QyxTQUFPO0FBQ05GLFFBQUksRUFBRTtBQURBLEdBQVA7QUFHQSxDQUpNO0FBS0EsSUFBTUcsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixHQUFNO0FBQ3hDLFNBQU87QUFDTkgsUUFBSSxFQUFFO0FBREEsR0FBUDtBQUdBLENBSk07O0FBTVAsSUFBTUssT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBa0M7QUFBQSxNQUFqQ0MsS0FBaUMsdUVBQXpCdkIsWUFBeUI7QUFBQSxNQUFYd0IsTUFBVzs7QUFDakQsVUFBUUEsTUFBTSxDQUFDUCxJQUFmO0FBQ0MsU0FBSyxRQUFMO0FBQ0MsNkNBRUlNLEtBRko7QUFHQ3RCLGtCQUFVLEVBQUUsSUFIYjtBQUlDQyxVQUFFLEVBQUVzQixNQUFNLENBQUNsQjtBQUpaOztBQU1ELFNBQUssU0FBTDtBQUNDLDZDQUVJaUIsS0FGSjtBQUdDdEIsa0JBQVUsRUFBRSxLQUhiO0FBSUNDLFVBQUUsRUFBRTtBQUpMOztBQU1EO0FBQ0MsYUFBT3FCLEtBQVA7QUFoQkY7QUFrQkEsQ0FuQkQ7O0FBcUJlRCxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjMyNGFjMzE1MjE5M2JjMzdhMzU1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG5cdGlzTG9nZ2VkSW46IGZhbHNlLFxyXG5cdG1lOiBudWxsLFxyXG5cdHNpZ25VcERhdGE6IHt9LFxyXG5cdGxvZ2luRGF0YToge30sXHJcbn1cclxuXHJcbi8vIOuhnOq3uOyduCDslaHshZgg7IOd7ISx6riwXHJcbmV4cG9ydCBjb25zdCBsb2dpbkFjdGlvbiA9IChkYXRhKSA9PiB7IC8vIO2VqOyImOulvCDrpqzthLTtlZjripQg67mE64+Z6riwIOyVoeyFmCDtgazrpqzsl5DsnbTthLDqsIAg7LaU6rCAXHJcblx0cmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcclxuXHRcdGRpc3BhdGNoKGxvZ2luUmVxdWVzdEFjdGlvbigpKVxyXG5cdFx0YXhpb3MucG9zdCgnL2FwaS9sb2dpbicpXHJcblx0XHRcdFx0LnRoZW4oKHJlcykgPT4ge1xyXG5cdFx0XHRcdFx0ZGlzcGF0Y2gobG9naW5TdWNjZXNzQWN0aW9uKHJlcy5kYXRhKSlcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdC5jYXRjaCgoZXJyKSA9PiB7XHJcblx0XHRcdFx0XHRkaXNwYXRjaChsb2dpbkZhaWx1cmVBY3Rpb24oZXJyKSlcclxuXHRcdFx0XHR9KVxyXG5cdH1cclxufVxyXG5leHBvcnQgY29uc3QgbG9naW5SZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+IHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTogJ0xPR19JTl9SRVFVRVNUJyxcclxuXHRcdGRhdGEsXHJcblx0fVxyXG59XHJcbmV4cG9ydCBjb25zdCBsb2dpblN1Y2Nlc3NBY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG5cdHJldHVybiB7XHJcblx0XHR0eXBlOiAnTE9HX0lOX1NVQ0NFU1MnLFxyXG5cdFx0ZGF0YSxcclxuXHR9XHJcbn1cclxuZXhwb3J0IGNvbnN0IGxvZ2luRmFpbHVyZUFjdGlvbiA9IChkYXRhKSA9PiB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHR5cGU6ICdMT0dfSU5fRkFJTFVSRScsXHJcblx0XHRkYXRhLFxyXG5cdH1cclxufVxyXG4vLyDroZzqt7jslYTsm4Mg7JWh7IWYIOyDneyEseq4sFxyXG5leHBvcnQgY29uc3QgbG9nb3V0QWN0aW9uID0gKGRhdGEpID0+IHtcclxuXHRyZXR1cm4gKGRpc3BhdGNoKSA9PiB7XHJcblx0XHRheGlvcy5wb3N0KCcvYXBpL2xvZ291dCcpXHJcblx0XHRcdFx0LnRoZW4oKCkgPT4ge1xyXG5cdFx0XHRcdFx0ZGlzcGF0Y2gobG9nb3V0U3VjY2Vzc0FjdGlvbigpKVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0LmNhdGNoKCgpID0+IHtcclxuXHRcdFx0XHRcdGRpc3BhdGNoKGxvZ291dEZhaWx1cmVBY3Rpb24oKSlcclxuXHRcdFx0XHR9KVxyXG5cdH1cclxufVxyXG5leHBvcnQgY29uc3QgbG9nb3V0UmVxdWVzdEFjdGlvbiA9ICgpID0+IHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dHlwZTogJ0xPR19PVVRfUkVRVUVTVCcsXHJcblx0fVxyXG59XHJcbmV4cG9ydCBjb25zdCBsb2dvdXRTdWNjZXNzQWN0aW9uID0gKCkgPT4ge1xyXG5cdHJldHVybiB7XHJcblx0XHR0eXBlOiAnTE9HX09VVF9TVUNDRVNTJyxcclxuXHR9XHJcbn1cclxuZXhwb3J0IGNvbnN0IGxvZ291dEZhaWx1cmVBY3Rpb24gPSAoKSA9PiB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHR5cGU6ICdMT0dfT1VUX0ZBSUxVUkUnLFxyXG5cdH1cclxufVxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSAnTE9HX0lOJzpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQvLyBzdG9yZSDsl5DshJwg67O064K4IHN0YXRlIOqwgCDrp4zrk6TslrTsp5AsIHN0YXRlIOyekOyytOqwgCB1aXNlci5qcyDsnZggc3RhdGUg7J6EXHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0aXNMb2dnZWRJbjogdHJ1ZSxcclxuXHRcdFx0XHRtZTogYWN0aW9uLmRhdGEsXHJcblx0XHRcdH1cclxuXHRcdGNhc2UgJ0xPR19PVVQnOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC8vIHN0b3JlIOyXkOyEnCDrs7Trgrggc3RhdGUg6rCAIOunjOuTpOyWtOynkFxyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGlzTG9nZ2VkSW46IGZhbHNlLFxyXG5cdFx0XHRcdG1lOiBudWxsLFxyXG5cdFx0XHR9XHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyOyJdLCJzb3VyY2VSb290IjoiIn0=