webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: loginAction, logoutAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginAction", function() { return loginAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutAction", function() { return logoutAction; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var next_dist_build_output_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/build/output/store */ "./node_modules/next/dist/build/output/store.js");
/* harmony import */ var next_dist_build_output_store__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_build_output_store__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-redux-wrapper */ "./node_modules/next-redux-wrapper/es6/index.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }



var initialState = {
  user: {},
  post: {
    mainPosts: []
  }
}; // 액션 생성기

var loginAction = function loginAction(data) {
  return {
    type: 'LOG_IN',
    data: data
  };
};
var logoutAction = function logoutAction() {
  return {
    type: 'LOG_OUT'
  };
}; // 비동기 액션 생성기
// 액션 생성기

/*const changeNickname = (data) => {
	return {
		type: 'CHANGE_NICKNAME',
		data,
	}
}
changeNickname('vitamin777')*/

/*{
		type: 'CHANGE_NICKNAME',
		data: 'vitamin777',
}*/

/*store.dispatch(changeNickname('vitamin7777777'))*/
// 이전상태와 액션을 통해 다음 상태를 만들어내는 함수

var rootReducer = function rootReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type // 예전 상태에서 액션에따라 데이터를 바꿔 다음 상태를 리턴
  ) {
    case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__["HYDRATE"]:
      console.log('HYDRATE', action);
      return _objectSpread(_objectSpread({}, state), action.payload);

    case 'LOG_IN':
      return _objectSpread(_objectSpread({}, state), {}, {
        user: _objectSpread(_objectSpread({}, state.user), {}, {
          isLoggedIn: true,
          user: action.data
        })
      });

    case 'LOG_OUT':
      return _objectSpread(_objectSpread({}, state), {}, {
        user: _objectSpread(_objectSpread({}, state.user), {}, {
          isLoggedIn: false,
          user: null
        })
      });

    default:
      return _objectSpread({}, state);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvaW5kZXguanMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwidXNlciIsInBvc3QiLCJtYWluUG9zdHMiLCJsb2dpbkFjdGlvbiIsImRhdGEiLCJ0eXBlIiwibG9nb3V0QWN0aW9uIiwicm9vdFJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsIkhZRFJBVEUiLCJjb25zb2xlIiwibG9nIiwicGF5bG9hZCIsImlzTG9nZ2VkSW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLFlBQVksR0FBRztBQUNuQkMsTUFBSSxFQUFFLEVBRGE7QUFJbkJDLE1BQUksRUFBRTtBQUNKQyxhQUFTLEVBQUU7QUFEUDtBQUphLENBQXJCLEMsQ0FRQTs7QUFDTyxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxJQUFELEVBQVU7QUFDbkMsU0FBTztBQUNMQyxRQUFJLEVBQUUsUUFERDtBQUVMRCxRQUFJLEVBQUpBO0FBRkssR0FBUDtBQUlELENBTE07QUFNQSxJQUFNRSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ2hDLFNBQU87QUFDTEQsUUFBSSxFQUFFO0FBREQsR0FBUDtBQUdELENBSk0sQyxDQUtQO0FBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFFQTs7QUFDQSxJQUFNRSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFrQztBQUFBLE1BQWpDQyxLQUFpQyx1RUFBekJULFlBQXlCO0FBQUEsTUFBWFUsTUFBVzs7QUFDcEQsVUFDRUEsTUFBTSxDQUFDSixJQURULENBQ2M7QUFEZDtBQUdFLFNBQUtLLDBEQUFMO0FBQ0VDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVosRUFBdUJILE1BQXZCO0FBQ0EsNkNBQ0tELEtBREwsR0FFS0MsTUFBTSxDQUFDSSxPQUZaOztBQUlGLFNBQUssUUFBTDtBQUNFLDZDQUVLTCxLQUZMO0FBR0VSLFlBQUksa0NBQ0NRLEtBQUssQ0FBQ1IsSUFEUDtBQUVGYyxvQkFBVSxFQUFFLElBRlY7QUFHRmQsY0FBSSxFQUFFUyxNQUFNLENBQUNMO0FBSFg7QUFITjs7QUFTRixTQUFLLFNBQUw7QUFDRSw2Q0FFS0ksS0FGTDtBQUdFUixZQUFJLGtDQUNDUSxLQUFLLENBQUNSLElBRFA7QUFFRmMsb0JBQVUsRUFBRSxLQUZWO0FBR0ZkLGNBQUksRUFBRTtBQUhKO0FBSE47O0FBU0Y7QUFDRSwrQkFDS1EsS0FETDtBQTlCSjtBQWtDRCxDQW5DRDs7QUFxQ2VELDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMDRjODg2MDQ0ZTAyZjIwY2I3ZjYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHN0b3JlIH0gZnJvbSAnbmV4dC9kaXN0L2J1aWxkL291dHB1dC9zdG9yZSdcbmltcG9ydCB7IEhZRFJBVEV9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICB1c2VyOiB7XG5cbiAgfSxcbiAgcG9zdDoge1xuICAgIG1haW5Qb3N0czogW10sXG4gIH0sXG59XG4vLyDslaHshZgg7IOd7ISx6riwXG5leHBvcnQgY29uc3QgbG9naW5BY3Rpb24gPSAoZGF0YSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdMT0dfSU4nLFxuICAgIGRhdGEsXG4gIH1cbn1cbmV4cG9ydCBjb25zdCBsb2dvdXRBY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ0xPR19PVVQnLFxuICB9XG59XG4vLyDruYTrj5nquLAg7JWh7IWYIOyDneyEseq4sFxuXG4vLyDslaHshZgg7IOd7ISx6riwXG4vKmNvbnN0IGNoYW5nZU5pY2tuYW1lID0gKGRhdGEpID0+IHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiAnQ0hBTkdFX05JQ0tOQU1FJyxcblx0XHRkYXRhLFxuXHR9XG59XG5jaGFuZ2VOaWNrbmFtZSgndml0YW1pbjc3NycpKi9cbi8qe1xuXHRcdHR5cGU6ICdDSEFOR0VfTklDS05BTUUnLFxuXHRcdGRhdGE6ICd2aXRhbWluNzc3Jyxcbn0qL1xuXG4vKnN0b3JlLmRpc3BhdGNoKGNoYW5nZU5pY2tuYW1lKCd2aXRhbWluNzc3Nzc3NycpKSovXG5cbi8vIOydtOyghOyDge2DnOyZgCDslaHshZjsnYQg7Ya17ZW0IOuLpOydjCDsg4Htg5zrpbwg66eM65Ok7Ja064K064qUIO2VqOyImFxuY29uc3Qgcm9vdFJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKFxuICAgIGFjdGlvbi50eXBlIC8vIOyYiOyghCDsg4Htg5zsl5DshJwg7JWh7IWY7JeQ65Sw6528IOuNsOydtO2EsOulvCDrsJTqv5Qg64uk7J2MIOyDge2DnOulvCDrpqzthLRcbiAgKSB7XG4gICAgY2FzZSBIWURSQVRFOlxuICAgICAgY29uc29sZS5sb2coJ0hZRFJBVEUnLCBhY3Rpb24pXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgLi4uYWN0aW9uLnBheWxvYWQsXG4gICAgICB9XG4gICAgY2FzZSAnTE9HX0lOJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC8vIHN0b3JlIOyXkOyEnCDrs7Trgrggc3RhdGUg6rCAIOunjOuTpOyWtOynkFxuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgdXNlcjoge1xuICAgICAgICAgIC4uLnN0YXRlLnVzZXIsXG4gICAgICAgICAgaXNMb2dnZWRJbjogdHJ1ZSxcbiAgICAgICAgICB1c2VyOiBhY3Rpb24uZGF0YSxcbiAgICAgICAgfSxcbiAgICAgIH1cbiAgICBjYXNlICdMT0dfT1VUJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC8vIHN0b3JlIOyXkOyEnCDrs7Trgrggc3RhdGUg6rCAIOunjOuTpOyWtOynkFxuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgdXNlcjoge1xuICAgICAgICAgIC4uLnN0YXRlLnVzZXIsXG4gICAgICAgICAgaXNMb2dnZWRJbjogZmFsc2UsXG4gICAgICAgICAgdXNlcjogbnVsbCxcbiAgICAgICAgfSxcbiAgICAgIH1cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXJcbiJdLCJzb3VyY2VSb290IjoiIn0=