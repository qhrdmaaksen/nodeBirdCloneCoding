webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "./node_modules/next-redux-wrapper/es6/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./reducers/user.js");
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post */ "./reducers/post.js");
//import { store } from 'next/dist/build/output/store'



 // const initialState = {
// 	user: {},
// 	post: {},
// }
// 비동기 액션 생성기
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
// 리듀서 : 이전상태와 액션을 통해 다음 상태를 만들어내는 함수

/* CSR REDUCER
const rootReducer = combineReducers({
	// user 이니셜스테이트, post 이니셜스테이트 컴바인 리듀서가 알아서 한방에 묶어줌
	index: (state = {}, action) => {
		switch (action.type) {
			case HYDRATE:
				console.log('HYDRATE', action)
				return {...state, ...action.payload}
			default:
				return state
		}
	},
	user,
	post,
})*/
// SSR

var rootReducer = function rootReducer(state, action) {
  // (이전상태 state, 액션) => 다음상태
  switch (action.type) {
    case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["HYDRATE"]:
      console.log('HYDRATE :: ', action);
      return action.payload;

    default:
      {
        var combinedReducer = Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])({
          user: _user__WEBPACK_IMPORTED_MODULE_2__["default"],
          post: _post__WEBPACK_IMPORTED_MODULE_3__["default"]
        });
        return combinedReducer(state, action);
      }
  }
};
/*reducers/index.js 보시면 user랑 post를 불러와서 합치고 있습니다.
rootReducer가 state고, user와 post는 각각 state.user, state.post가 됩니다.
user.js의 me는 state.user.me가 됩니다.*/


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvaW5kZXguanMiXSwibmFtZXMiOlsicm9vdFJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJIWURSQVRFIiwiY29uc29sZSIsImxvZyIsInBheWxvYWQiLCJjb21iaW5lZFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJ1c2VyIiwicG9zdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtDQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUNBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUFFO0FBQ3hDLFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNDLFNBQUtDLDBEQUFMO0FBQ0NDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVosRUFBMkJKLE1BQTNCO0FBQ0EsYUFBT0EsTUFBTSxDQUFDSyxPQUFkOztBQUNEO0FBQVM7QUFDUixZQUFNQyxlQUFlLEdBQUdDLDZEQUFlLENBQUM7QUFDdkNDLGNBQUksRUFBSkEsNkNBRHVDO0FBRXZDQyxjQUFJLEVBQUpBLDZDQUFJQTtBQUZtQyxTQUFELENBQXZDO0FBSUEsZUFBT0gsZUFBZSxDQUFDUCxLQUFELEVBQVFDLE1BQVIsQ0FBdEI7QUFDQTtBQVZGO0FBWUEsQ0FiRDtBQWVBO0FBQ0E7QUFDQTs7O0FBQ2VGLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNWFmYjliNDNlMTdkMmM4MDhmMjQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vaW1wb3J0IHsgc3RvcmUgfSBmcm9tICduZXh0L2Rpc3QvYnVpbGQvb3V0cHV0L3N0b3JlJ1xyXG5pbXBvcnQge0hZRFJBVEV9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcidcclxuaW1wb3J0IHtjb21iaW5lUmVkdWNlcnN9IGZyb20gJ3JlZHV4J1xyXG5pbXBvcnQgdXNlciBmcm9tICcuL3VzZXInXHJcbmltcG9ydCBwb3N0IGZyb20gJy4vcG9zdCdcclxuXHJcbi8vIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuLy8gXHR1c2VyOiB7fSxcclxuLy8gXHRwb3N0OiB7fSxcclxuLy8gfVxyXG5cclxuLy8g67mE64+Z6riwIOyVoeyFmCDsg53shLHquLBcclxuXHJcbi8vIOyVoeyFmCDsg53shLHquLBcclxuLypjb25zdCBjaGFuZ2VOaWNrbmFtZSA9IChkYXRhKSA9PiB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHR5cGU6ICdDSEFOR0VfTklDS05BTUUnLFxyXG5cdFx0ZGF0YSxcclxuXHR9XHJcbn1cclxuY2hhbmdlTmlja25hbWUoJ3ZpdGFtaW43NzcnKSovXHJcbi8qe1xyXG5cdFx0dHlwZTogJ0NIQU5HRV9OSUNLTkFNRScsXHJcblx0XHRkYXRhOiAndml0YW1pbjc3NycsXHJcbn0qL1xyXG5cclxuLypzdG9yZS5kaXNwYXRjaChjaGFuZ2VOaWNrbmFtZSgndml0YW1pbjc3Nzc3NzcnKSkqL1xyXG5cclxuLy8g66as65OA7IScIDog7J207KCE7IOB7YOc7JmAIOyVoeyFmOydhCDthrXtlbQg64uk7J2MIOyDge2DnOulvCDrp4zrk6TslrTrgrTripQg7ZWo7IiYXHJcbi8qIENTUiBSRURVQ0VSXHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuXHQvLyB1c2VyIOydtOuLiOyFnOyKpO2FjOydtO2KuCwgcG9zdCDsnbTri4jshZzsiqTthYzsnbTtirgg7Lu067CU7J24IOumrOuTgOyEnOqwgCDslYzslYTshJwg7ZWc67Cp7JeQIOustuyWtOykjFxyXG5cdGluZGV4OiAoc3RhdGUgPSB7fSwgYWN0aW9uKSA9PiB7XHJcblx0XHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRcdGNhc2UgSFlEUkFURTpcclxuXHRcdFx0XHRjb25zb2xlLmxvZygnSFlEUkFURScsIGFjdGlvbilcclxuXHRcdFx0XHRyZXR1cm4gey4uLnN0YXRlLCAuLi5hY3Rpb24ucGF5bG9hZH1cclxuXHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRyZXR1cm4gc3RhdGVcclxuXHRcdH1cclxuXHR9LFxyXG5cdHVzZXIsXHJcblx0cG9zdCxcclxufSkqL1xyXG5cclxuLy8gU1NSXHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHsgLy8gKOydtOyghOyDge2DnCBzdGF0ZSwg7JWh7IWYKSA9PiDri6TsnYzsg4Htg5xcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIEhZRFJBVEU6XHJcblx0XHRcdGNvbnNvbGUubG9nKCdIWURSQVRFIDo6ICcsIGFjdGlvbilcclxuXHRcdFx0cmV0dXJuIGFjdGlvbi5wYXlsb2FkXHJcblx0XHRkZWZhdWx0OiB7XHJcblx0XHRcdGNvbnN0IGNvbWJpbmVkUmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcblx0XHRcdFx0dXNlcixcclxuXHRcdFx0XHRwb3N0LFxyXG5cdFx0XHR9KVxyXG5cdFx0XHRyZXR1cm4gY29tYmluZWRSZWR1Y2VyKHN0YXRlLCBhY3Rpb24pXHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG4vKnJlZHVjZXJzL2luZGV4LmpzIOuztOyLnOuptCB1c2Vy656RIHBvc3Trpbwg67aI65+s7JmA7IScIO2Vqey5mOqzoCDsnojsirXri4jri6QuXHJcbnJvb3RSZWR1Y2Vy6rCAIHN0YXRl6rOgLCB1c2Vy7JmAIHBvc3TripQg6rCB6rCBIHN0YXRlLnVzZXIsIHN0YXRlLnBvc3TqsIAg65Cp64uI64ukLlxyXG51c2VyLmpz7J2YIG1l64qUIHN0YXRlLnVzZXIubWXqsIAg65Cp64uI64ukLiovXHJcbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=