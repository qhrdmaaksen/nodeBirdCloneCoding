webpackHotUpdate_N_E("pages/post/[id]",{

/***/ "./node_modules/next/dist/next-server/lib/constants.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/document-context.js":
false,

/***/ "./node_modules/next/dist/next-server/server/get-page-files.js":
false,

/***/ "./node_modules/next/dist/next-server/server/normalize-page-path.js":
false,

/***/ "./node_modules/next/dist/next-server/server/utils.js":
false,

/***/ "./node_modules/next/dist/pages/_document.js":
false,

/***/ "./node_modules/next/dist/server/htmlescape.js":
false,

/***/ "./node_modules/next/document.js":
false,

/***/ "./node_modules/next/node_modules/prop-types/checkPropTypes.js":
false,

/***/ "./node_modules/next/node_modules/prop-types/factoryWithTypeCheckers.js":
false,

/***/ "./node_modules/next/node_modules/prop-types/index.js":
false,

/***/ "./node_modules/next/node_modules/prop-types/lib/ReactPropTypesSecret.js":
false,

/***/ "./node_modules/node-libs-browser/node_modules/path-browserify/index.js":
false,

/***/ "./node_modules/string-hash/index.js":
false,

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
false,

/***/ "./node_modules/styled-jsx/dist/server.js":
false,

/***/ "./node_modules/styled-jsx/dist/style.js":
false,

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
false,

/***/ "./node_modules/styled-jsx/server.js":
false,

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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
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
      lineNumber: 23,
      columnNumber: 4
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 6
    }
  })), __jsx(_component_PostCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    post: singlePost,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdC8uanMiXSwibmFtZXMiOlsiUG9zdCIsInJvdXRlciIsInVzZVJvdXRlciIsImlkIiwicXVlcnkiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwicG9zdCIsInNpbmdsZVBvc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFDbEIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLE1BQU9DLEVBQVAsR0FBYUYsTUFBTSxDQUFDRyxLQUFwQixDQUFPRCxFQUFQOztBQUNBLHFCQUFxQkUsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFqQjtBQUFBLEdBQUQsQ0FBaEM7QUFBQSxNQUFPQyxVQUFQLGdCQUFPQSxVQUFQOztBQUVBLFNBQ0UsTUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELENBREQsRUFJQyxNQUFDLDJEQUFEO0FBQVUsUUFBSSxFQUFFQSxVQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkQsQ0FERjtBQVFBLENBYkQ7QUFlQTtBQUNBOzs7R0FoQk1SLEk7VUFDVUUscUQsRUFFTUcsdUQ7OztLQUhoQkwsSTs7QUFtQ1NBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3QvW2lkXS5kYjJiZjgzYTYyNDZhMjU3MDgwYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8g64+Z7KCBIOudvOyasO2MheyaqSDtjpjsnbTsp4BcclxuLy8gcG9zdC9baWRdLmpzXHJcblxyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB3cmFwcGVyIGZyb20gXCIuLi8uLi9zdG9yZS9jb25maWd1cmVTdG9yZVwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCB7RU5EfSBmcm9tICdyZWR1eC1zYWdhJ1xyXG5pbXBvcnQge0xPQURfTVlfSU5GT19SRVFVRVNUfSBmcm9tIFwiLi4vLi4vcmVkdWNlcnMvdXNlclwiO1xyXG5pbXBvcnQge0xPQURfUE9TVF9SRVFVRVNUfSBmcm9tICcuLi8uLi9yZWR1Y2Vycy9wb3N0J1xyXG5pbXBvcnQge2dldFN0YXRpY1Byb3BzfSBmcm9tIFwiLi4vYWJvdXRcIjtcclxuaW1wb3J0IEFwcExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnQvQXBwTGF5b3V0J1xyXG5pbXBvcnQgUG9zdENhcmQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudC9Qb3N0Q2FyZFwiO1xyXG5pbXBvcnQge3VzZVNlbGVjdG9yfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5cclxuXHJcbmNvbnN0IFBvc3QgPSAoKSA9PiB7XHJcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHRjb25zdCB7aWR9ID0gcm91dGVyLnF1ZXJ5XHJcblx0Y29uc3Qge3NpbmdsZVBvc3R9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KVxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0XHQ8QXBwTGF5b3V0PlxyXG5cdFx0XHRcdDxIZWFkPlxyXG5cdFx0XHRcdFx0PHRpdGxlPjwvdGl0bGU+XHJcblx0XHRcdFx0PC9IZWFkPlxyXG5cdFx0XHRcdDxQb3N0Q2FyZCBwb3N0PXtzaW5nbGVQb3N0fS8+XHJcblx0XHRcdDwvQXBwTGF5b3V0PlxyXG5cdClcclxufVxyXG5cclxuLypnZXRTZXJ2ZXJTaWRlUHJvcHMmZ2V0U3RhdGljUHJvcHMg7JWI7J2YIGNvbnRleHQg7JeQ7ISc64qUIGNvbnRleHQucGFyYW1zLmlkJmNvbnRleHQucXVlcnkuaWQg7ZWY66m0XHJcbnVzZVJvdXRlciDsl5Ag65iR6rCZ7J20IOygkeq3vCDtlaAg7IiYIOyeiOuLpCovXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSB3cmFwcGVyLmdldFNlcnZlclNpZGVQcm9wcyhhc3luYyAoY29udGV4dCkgPT4ge1xyXG5cdGNvbnN0IGNvb2tpZSA9IGNvbnRleHQucmVxID8gY29udGV4dC5yZXEuaGVhZGVycy5jb29raWUgOiAnJztcclxuXHRjb25zb2xlLmxvZygnZHluYW1pYyByb3V0aW5nIFBvc3QgZ2V0U2VydmVyU2lkZVByb3BzIFN0YXJ0IDo6JylcclxuXHRheGlvcy5kZWZhdWx0cy5oZWFkZXJzLkNvb2tpZSA9ICcnXHJcblx0aWYgKGNvbnRleHQucmVxICYmIGNvb2tpZSkge1xyXG5cdFx0YXhpb3MuZGVmYXVsdHMuaGVhZGVycy5Db29raWUgPSBjb29raWVcclxuXHR9XHJcblx0Y29udGV4dC5zdG9yZS5kaXNwYXRjaCh7IC8vIOuCtCDsoJXrs7Qg7JqU7LKtXHJcblx0XHR0eXBlOiBMT0FEX01ZX0lORk9fUkVRVUVTVCxcclxuXHR9KVxyXG5cdGNvbnRleHQuc3RvcmUuZGlzcGF0Y2goeyAvLyDri6jsnbwg6rKM7Iuc6riAIOyalOyyrVxyXG5cdFx0dHlwZTogTE9BRF9QT1NUX1JFUVVFU1QsXHJcblx0XHRkYXRhOiBjb250ZXh0LnBhcmFtcy5pZCwgLy9cclxuXHR9KVxyXG5cdGNvbnRleHQuc3RvcmUuZGlzcGF0Y2goRU5EKVxyXG5cdGF3YWl0IGNvbnRleHQuc3RvcmUuc2FnYVRhc2sudG9Qcm9taXNlKClcclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3QiXSwic291cmNlUm9vdCI6IiJ9