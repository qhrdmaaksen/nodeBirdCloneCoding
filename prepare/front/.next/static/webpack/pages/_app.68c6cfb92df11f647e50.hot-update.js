webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
var initialState = {
  mainPosts: [{
    id: 1,
    User: {
      id: 1,
      nickname: '비타민'
    },
    content: '첫 번째 게시글 #해시태그 #익스프레스',
    Images: [{
      src: ''
    }, {
      src: ''
    }, {
      src: ''
    }],
    Comments: [{
      User: {
        nickname: 'nero'
      },
      content: '개정판이 나왔네요!?'
    }, {
      User: {
        nickname: 'hero'
      },
      content: '정말정말 신기하당!'
    }]
  }]
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpZCIsIlVzZXIiLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJJbWFnZXMiLCJzcmMiLCJDb21tZW50cyIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQU8sSUFBTUEsWUFBWSxHQUFHO0FBQzNCQyxXQUFTLEVBQUUsQ0FBQztBQUNYQyxNQUFFLEVBQUUsQ0FETztBQUVYQyxRQUFJLEVBQUU7QUFDTEQsUUFBRSxFQUFFLENBREM7QUFFTEUsY0FBUSxFQUFFO0FBRkwsS0FGSztBQU1YQyxXQUFPLEVBQUUsdUJBTkU7QUFPWEMsVUFBTSxFQUFFLENBQ1A7QUFBQ0MsU0FBRyxFQUFFO0FBQU4sS0FETyxFQUVQO0FBQUNBLFNBQUcsRUFBRTtBQUFOLEtBRk8sRUFHUDtBQUFDQSxTQUFHLEVBQUU7QUFBTixLQUhPLENBUEc7QUFZWEMsWUFBUSxFQUFFLENBQUM7QUFDVkwsVUFBSSxFQUFFO0FBQ0xDLGdCQUFRLEVBQUU7QUFETCxPQURJO0FBSVZDLGFBQU8sRUFBRTtBQUpDLEtBQUQsRUFLUjtBQUNERixVQUFJLEVBQUU7QUFDTEMsZ0JBQVEsRUFBRTtBQURMLE9BREw7QUFJREMsYUFBTyxFQUFFO0FBSlIsS0FMUTtBQVpDLEdBQUQ7QUFEZ0IsQ0FBckI7O0FBMkJQLElBQU1JLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQWtDO0FBQUEsTUFBakNDLEtBQWlDLHVFQUF6QlYsWUFBeUI7QUFBQSxNQUFYVyxNQUFXOztBQUNqRCxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDQztBQUNDLGFBQU9GLEtBQVA7QUFGRjtBQUlBLENBTEQ7O0FBT2VELHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNjhjNmNmYjkyZGYxMWY2NDdlNTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcblx0bWFpblBvc3RzOiBbe1xyXG5cdFx0aWQ6IDEsXHJcblx0XHRVc2VyOiB7XHJcblx0XHRcdGlkOiAxLFxyXG5cdFx0XHRuaWNrbmFtZTogJ+u5hO2DgOuvvCcsXHJcblx0XHR9LFxyXG5cdFx0Y29udGVudDogJ+yyqyDrsojsp7gg6rKM7Iuc6riAICPtlbTsi5ztg5zqt7ggI+ydteyKpO2UhOugiOyKpCcsXHJcblx0XHRJbWFnZXM6IFtcclxuXHRcdFx0e3NyYzogJyd9LFxyXG5cdFx0XHR7c3JjOiAnJ30sXHJcblx0XHRcdHtzcmM6ICcnfVxyXG5cdFx0XSxcclxuXHRcdENvbW1lbnRzOiBbe1xyXG5cdFx0XHRVc2VyOiB7XHJcblx0XHRcdFx0bmlja25hbWU6ICduZXJvJyxcclxuXHRcdFx0fSxcclxuXHRcdFx0Y29udGVudDogJ+qwnOygle2MkOydtCDrgpjsmZTrhKTsmpQhPycsXHJcblx0XHR9LHtcclxuXHRcdFx0VXNlcjoge1xyXG5cdFx0XHRcdG5pY2tuYW1lOiAnaGVybycsXHJcblx0XHRcdH0sXHJcblx0XHRcdGNvbnRlbnQ6ICfsoJXrp5DsoJXrp5Ag7Iug6riw7ZWY64u5IScsXHJcblx0XHR9XVxyXG5cdH1dLFxyXG59XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyOyJdLCJzb3VyY2VSb290IjoiIn0=