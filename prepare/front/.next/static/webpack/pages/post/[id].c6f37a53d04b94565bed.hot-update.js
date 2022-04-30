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
  }, __jsx(Head, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 6
    }
  })), __jsx(_component_PostCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    post: singlePost,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdC8uanMiXSwibmFtZXMiOlsiUG9zdCIsInJvdXRlciIsInVzZVJvdXRlciIsImlkIiwicXVlcnkiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwicG9zdCIsInNpbmdsZVBvc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUFBOztBQUNsQixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBT0MsRUFBUCxHQUFhRixNQUFNLENBQUNHLEtBQXBCLENBQU9ELEVBQVA7O0FBQ0EscUJBQXFCRSwrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLElBQWpCO0FBQUEsR0FBRCxDQUFoQztBQUFBLE1BQU9DLFVBQVAsZ0JBQU9BLFVBQVA7O0FBRUEsU0FDRSxNQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLElBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxDQURELEVBSUMsTUFBQywyREFBRDtBQUFVLFFBQUksRUFBRUEsVUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpELENBREY7QUFRQSxDQWJEO0FBZUE7QUFDQTs7O0dBaEJNUixJO1VBQ1VFLHFELEVBRU1HLHVEOzs7S0FIaEJMLEk7O0FBbUNTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0L1tpZF0uYzZmMzdhNTNkMDRiOTQ1NjViZWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIOuPmeyggSDrnbzsmrDtjIXsmqkg7Y6Y7J207KeAXHJcbi8vIHBvc3QvW2lkXS5qc1xyXG5cclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgd3JhcHBlciBmcm9tIFwiLi4vLi4vc3RvcmUvY29uZmlndXJlU3RvcmVcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQge0VORH0gZnJvbSAncmVkdXgtc2FnYSdcclxuaW1wb3J0IHtMT0FEX01ZX0lORk9fUkVRVUVTVH0gZnJvbSBcIi4uLy4uL3JlZHVjZXJzL3VzZXJcIjtcclxuaW1wb3J0IHtMT0FEX1BPU1RfUkVRVUVTVH0gZnJvbSAnLi4vLi4vcmVkdWNlcnMvcG9zdCdcclxuaW1wb3J0IHtnZXRTdGF0aWNQcm9wc30gZnJvbSBcIi4uL2Fib3V0XCI7XHJcbmltcG9ydCBBcHBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50L0FwcExheW91dCdcclxuaW1wb3J0IFBvc3RDYXJkIGZyb20gXCIuLi8uLi9jb21wb25lbnQvUG9zdENhcmRcIjtcclxuaW1wb3J0IHt1c2VTZWxlY3Rvcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcblxyXG5cclxuY29uc3QgUG9zdCA9ICgpID0+IHtcclxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cdGNvbnN0IHtpZH0gPSByb3V0ZXIucXVlcnlcclxuXHRjb25zdCB7c2luZ2xlUG9zdH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBvc3QpXHJcblxyXG5cdHJldHVybiAoXHJcblx0XHRcdDxBcHBMYXlvdXQ+XHJcblx0XHRcdFx0PEhlYWQ+XHJcblx0XHRcdFx0XHQ8dGl0bGU+PC90aXRsZT5cclxuXHRcdFx0XHQ8L0hlYWQ+XHJcblx0XHRcdFx0PFBvc3RDYXJkIHBvc3Q9e3NpbmdsZVBvc3R9Lz5cclxuXHRcdFx0PC9BcHBMYXlvdXQ+XHJcblx0KVxyXG59XHJcblxyXG4vKmdldFNlcnZlclNpZGVQcm9wcyZnZXRTdGF0aWNQcm9wcyDslYjsnZggY29udGV4dCDsl5DshJzripQgY29udGV4dC5wYXJhbXMuaWQmY29udGV4dC5xdWVyeS5pZCDtlZjrqbRcclxudXNlUm91dGVyIOyXkCDrmJHqsJnsnbQg7KCR6re8IO2VoCDsiJgg7J6I64ukKi9cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IHdyYXBwZXIuZ2V0U2VydmVyU2lkZVByb3BzKGFzeW5jIChjb250ZXh0KSA9PiB7XHJcblx0Y29uc3QgY29va2llID0gY29udGV4dC5yZXEgPyBjb250ZXh0LnJlcS5oZWFkZXJzLmNvb2tpZSA6ICcnO1xyXG5cdGNvbnNvbGUubG9nKCdkeW5hbWljIHJvdXRpbmcgUG9zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgU3RhcnQgOjonKVxyXG5cdGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuQ29va2llID0gJydcclxuXHRpZiAoY29udGV4dC5yZXEgJiYgY29va2llKSB7XHJcblx0XHRheGlvcy5kZWZhdWx0cy5oZWFkZXJzLkNvb2tpZSA9IGNvb2tpZVxyXG5cdH1cclxuXHRjb250ZXh0LnN0b3JlLmRpc3BhdGNoKHsgLy8g64K0IOygleuztCDsmpTssq1cclxuXHRcdHR5cGU6IExPQURfTVlfSU5GT19SRVFVRVNULFxyXG5cdH0pXHJcblx0Y29udGV4dC5zdG9yZS5kaXNwYXRjaCh7IC8vIOuLqOydvCDqsozsi5zquIAg7JqU7LKtXHJcblx0XHR0eXBlOiBMT0FEX1BPU1RfUkVRVUVTVCxcclxuXHRcdGRhdGE6IGNvbnRleHQucGFyYW1zLmlkLCAvL1xyXG5cdH0pXHJcblx0Y29udGV4dC5zdG9yZS5kaXNwYXRjaChFTkQpXHJcblx0YXdhaXQgY29udGV4dC5zdG9yZS5zYWdhVGFzay50b1Byb21pc2UoKVxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdCJdLCJzb3VyY2VSb290IjoiIn0=