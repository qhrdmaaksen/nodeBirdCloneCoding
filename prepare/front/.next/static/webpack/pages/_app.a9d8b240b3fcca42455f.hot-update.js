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
      console.log('reducer rootReducer HYDRATE :: ', action);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvaW5kZXguanMiXSwibmFtZXMiOlsicm9vdFJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJIWURSQVRFIiwiY29uc29sZSIsImxvZyIsInBheWxvYWQiLCJjb21iaW5lZFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJ1c2VyIiwicG9zdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtDQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUNBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUFFO0FBQ3hDLFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNDLFNBQUtDLDBEQUFMO0FBQ0NDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLGlDQUFaLEVBQStDSixNQUEvQztBQUNBLGFBQU9BLE1BQU0sQ0FBQ0ssT0FBZDs7QUFDRDtBQUFTO0FBQ1IsWUFBTUMsZUFBZSxHQUFHQyw2REFBZSxDQUFDO0FBQ3ZDQyxjQUFJLEVBQUpBLDZDQUR1QztBQUV2Q0MsY0FBSSxFQUFKQSw2Q0FBSUE7QUFGbUMsU0FBRCxDQUF2QztBQUlBLGVBQU9ILGVBQWUsQ0FBQ1AsS0FBRCxFQUFRQyxNQUFSLENBQXRCO0FBQ0E7QUFWRjtBQVlBLENBYkQ7QUFlQTtBQUNBO0FBQ0E7OztBQUNlRiwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmE5ZDhiMjQwYjNmY2NhNDI0NTVmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydCB7IHN0b3JlIH0gZnJvbSAnbmV4dC9kaXN0L2J1aWxkL291dHB1dC9zdG9yZSdcclxuaW1wb3J0IHtIWURSQVRFfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInXHJcbmltcG9ydCB7Y29tYmluZVJlZHVjZXJzfSBmcm9tICdyZWR1eCdcclxuaW1wb3J0IHVzZXIgZnJvbSAnLi91c2VyJ1xyXG5pbXBvcnQgcG9zdCBmcm9tICcuL3Bvc3QnXHJcblxyXG4vLyBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbi8vIFx0dXNlcjoge30sXHJcbi8vIFx0cG9zdDoge30sXHJcbi8vIH1cclxuXHJcbi8vIOu5hOuPmeq4sCDslaHshZgg7IOd7ISx6riwXHJcblxyXG4vLyDslaHshZgg7IOd7ISx6riwXHJcbi8qY29uc3QgY2hhbmdlTmlja25hbWUgPSAoZGF0YSkgPT4ge1xyXG5cdHJldHVybiB7XHJcblx0XHR0eXBlOiAnQ0hBTkdFX05JQ0tOQU1FJyxcclxuXHRcdGRhdGEsXHJcblx0fVxyXG59XHJcbmNoYW5nZU5pY2tuYW1lKCd2aXRhbWluNzc3JykqL1xyXG4vKntcclxuXHRcdHR5cGU6ICdDSEFOR0VfTklDS05BTUUnLFxyXG5cdFx0ZGF0YTogJ3ZpdGFtaW43NzcnLFxyXG59Ki9cclxuXHJcbi8qc3RvcmUuZGlzcGF0Y2goY2hhbmdlTmlja25hbWUoJ3ZpdGFtaW43Nzc3Nzc3JykpKi9cclxuXHJcbi8vIOumrOuTgOyEnCA6IOydtOyghOyDge2DnOyZgCDslaHshZjsnYQg7Ya17ZW0IOuLpOydjCDsg4Htg5zrpbwg66eM65Ok7Ja064K064qUIO2VqOyImFxyXG4vKiBDU1IgUkVEVUNFUlxyXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcblx0Ly8gdXNlciDsnbTri4jshZzsiqTthYzsnbTtirgsIHBvc3Qg7J2064uI7IWc7Iqk7YWM7J207Yq4IOy7tOuwlOyduCDrpqzrk4DshJzqsIAg7JWM7JWE7IScIO2VnOuwqeyXkCDrrLbslrTspIxcclxuXHRpbmRleDogKHN0YXRlID0ge30sIGFjdGlvbikgPT4ge1xyXG5cdFx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0XHRjYXNlIEhZRFJBVEU6XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ0hZRFJBVEUnLCBhY3Rpb24pXHJcblx0XHRcdFx0cmV0dXJuIHsuLi5zdGF0ZSwgLi4uYWN0aW9uLnBheWxvYWR9XHJcblx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0cmV0dXJuIHN0YXRlXHJcblx0XHR9XHJcblx0fSxcclxuXHR1c2VyLFxyXG5cdHBvc3QsXHJcbn0pKi9cclxuXHJcbi8vIFNTUlxyXG5jb25zdCByb290UmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7IC8vICjsnbTsoITsg4Htg5wgc3RhdGUsIOyVoeyFmCkgPT4g64uk7J2M7IOB7YOcXHJcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSBIWURSQVRFOlxyXG5cdFx0XHRjb25zb2xlLmxvZygncmVkdWNlciByb290UmVkdWNlciBIWURSQVRFIDo6ICcsIGFjdGlvbilcclxuXHRcdFx0cmV0dXJuIGFjdGlvbi5wYXlsb2FkXHJcblx0XHRkZWZhdWx0OiB7XHJcblx0XHRcdGNvbnN0IGNvbWJpbmVkUmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcblx0XHRcdFx0dXNlcixcclxuXHRcdFx0XHRwb3N0LFxyXG5cdFx0XHR9KVxyXG5cdFx0XHRyZXR1cm4gY29tYmluZWRSZWR1Y2VyKHN0YXRlLCBhY3Rpb24pXHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG4vKnJlZHVjZXJzL2luZGV4LmpzIOuztOyLnOuptCB1c2Vy656RIHBvc3Trpbwg67aI65+s7JmA7IScIO2Vqey5mOqzoCDsnojsirXri4jri6QuXHJcbnJvb3RSZWR1Y2Vy6rCAIHN0YXRl6rOgLCB1c2Vy7JmAIHBvc3TripQg6rCB6rCBIHN0YXRlLnVzZXIsIHN0YXRlLnBvc3TqsIAg65Cp64uI64ukLlxyXG51c2VyLmpz7J2YIG1l64qUIHN0YXRlLnVzZXIubWXqsIAg65Cp64uI64ukLiovXHJcbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=