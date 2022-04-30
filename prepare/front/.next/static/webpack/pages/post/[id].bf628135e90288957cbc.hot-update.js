webpackHotUpdate_N_E("pages/post/[id]",{

/***/ "./pages/post/[id].js":
/*!****************************!*\
  !*** ./pages/post/[id].js ***!
  \****************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../about */ "./pages/about.js");
/* harmony import */ var _component_AppLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../component/AppLayout */ "./component/AppLayout.js");
/* harmony import */ var _component_PostCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../component/PostCard */ "./component/PostCard.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _this = undefined,
    _jsxFileName = "D:\\intellijProjects\\react-nodebird\\prepare\\front\\pages\\post\\[id].js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// 동적 라우팅용 페이지
// post/[id].js






var Post = function Post() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  var id = router.query.id;

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(function (state) {
    return state.post;
  }),
      singlePost = _useSelector.singlePost;

  return __jsx(_component_AppLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 4
    }
  }, __jsx(_component_PostCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    post: singlePost,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }));
};
/*getServerSideProps&getStaticProps 안의 context 에서는 context.params.id&context.query.id 하면
useRouter 에 똑같이 접근 할 수 있다*/


_s(Post, "O7z5LS2bVHdYMLLoaFOX6nOgThc=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"], react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"]];
});

_c = Post;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (Post);

var _c;

$RefreshReg$(_c, "Post");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdC8uanMiXSwibmFtZXMiOlsiUG9zdCIsInJvdXRlciIsInVzZVJvdXRlciIsImlkIiwicXVlcnkiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwicG9zdCIsInNpbmdsZVBvc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUFBOztBQUNsQixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBT0MsRUFBUCxHQUFhRixNQUFNLENBQUNHLEtBQXBCLENBQU9ELEVBQVA7O0FBQ0EscUJBQXFCRSwrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLElBQWpCO0FBQUEsR0FBRCxDQUFoQztBQUFBLE1BQU9DLFVBQVAsZ0JBQU9BLFVBQVA7O0FBRUEsU0FDRSxNQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLDJEQUFEO0FBQVUsUUFBSSxFQUFFQSxVQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsQ0FERjtBQUtBLENBVkQ7QUFZQTtBQUNBOzs7R0FiTVIsSTtVQUNVRSxxRCxFQUVNRyx1RDs7O0tBSGhCTCxJOztBQWdDU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdC9baWRdLmJmNjI4MTM1ZTkwMjg4OTU3Y2JjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyDrj5nsoIEg65287Jqw7YyF7JqpIO2OmOydtOyngFxyXG4vLyBwb3N0L1tpZF0uanNcclxuXHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHdyYXBwZXIgZnJvbSBcIi4uLy4uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHtFTkR9IGZyb20gJ3JlZHV4LXNhZ2EnXHJcbmltcG9ydCB7TE9BRF9NWV9JTkZPX1JFUVVFU1R9IGZyb20gXCIuLi8uLi9yZWR1Y2Vycy91c2VyXCI7XHJcbmltcG9ydCB7TE9BRF9QT1NUX1JFUVVFU1R9IGZyb20gJy4uLy4uL3JlZHVjZXJzL3Bvc3QnXHJcbmltcG9ydCB7Z2V0U3RhdGljUHJvcHN9IGZyb20gXCIuLi9hYm91dFwiO1xyXG5pbXBvcnQgQXBwTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudC9BcHBMYXlvdXQnXHJcbmltcG9ydCBQb3N0Q2FyZCBmcm9tIFwiLi4vLi4vY29tcG9uZW50L1Bvc3RDYXJkXCI7XHJcbmltcG9ydCB7dXNlU2VsZWN0b3J9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5cclxuXHJcbmNvbnN0IFBvc3QgPSAoKSA9PiB7XHJcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHRjb25zdCB7aWR9ID0gcm91dGVyLnF1ZXJ5XHJcblx0Y29uc3Qge3NpbmdsZVBvc3R9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KVxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0XHQ8QXBwTGF5b3V0PlxyXG5cdFx0XHRcdDxQb3N0Q2FyZCBwb3N0PXtzaW5nbGVQb3N0fS8+XHJcblx0XHRcdDwvQXBwTGF5b3V0PlxyXG5cdClcclxufVxyXG5cclxuLypnZXRTZXJ2ZXJTaWRlUHJvcHMmZ2V0U3RhdGljUHJvcHMg7JWI7J2YIGNvbnRleHQg7JeQ7ISc64qUIGNvbnRleHQucGFyYW1zLmlkJmNvbnRleHQucXVlcnkuaWQg7ZWY66m0XHJcbnVzZVJvdXRlciDsl5Ag65iR6rCZ7J20IOygkeq3vCDtlaAg7IiYIOyeiOuLpCovXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSB3cmFwcGVyLmdldFNlcnZlclNpZGVQcm9wcyhhc3luYyAoY29udGV4dCkgPT4ge1xyXG5cdGNvbnN0IGNvb2tpZSA9IGNvbnRleHQucmVxID8gY29udGV4dC5yZXEuaGVhZGVycy5jb29raWUgOiAnJztcclxuXHRjb25zb2xlLmxvZygnZHluYW1pYyByb3V0aW5nIFBvc3QgZ2V0U2VydmVyU2lkZVByb3BzIFN0YXJ0IDo6JylcclxuXHRheGlvcy5kZWZhdWx0cy5oZWFkZXJzLkNvb2tpZSA9ICcnXHJcblx0aWYgKGNvbnRleHQucmVxICYmIGNvb2tpZSkge1xyXG5cdFx0YXhpb3MuZGVmYXVsdHMuaGVhZGVycy5Db29raWUgPSBjb29raWVcclxuXHR9XHJcblx0Y29udGV4dC5zdG9yZS5kaXNwYXRjaCh7IC8vIOuCtCDsoJXrs7Qg7JqU7LKtXHJcblx0XHR0eXBlOiBMT0FEX01ZX0lORk9fUkVRVUVTVCxcclxuXHR9KVxyXG5cdGNvbnRleHQuc3RvcmUuZGlzcGF0Y2goeyAvLyDri6jsnbwg6rKM7Iuc6riAIOyalOyyrVxyXG5cdFx0dHlwZTogTE9BRF9QT1NUX1JFUVVFU1QsXHJcblx0XHRkYXRhOiBjb250ZXh0LnBhcmFtcy5pZCwgLy9cclxuXHR9KVxyXG5cdGNvbnRleHQuc3RvcmUuZGlzcGF0Y2goRU5EKVxyXG5cdGF3YWl0IGNvbnRleHQuc3RvcmUuc2FnYVRhc2sudG9Qcm9taXNlKClcclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3QiXSwic291cmNlUm9vdCI6IiJ9