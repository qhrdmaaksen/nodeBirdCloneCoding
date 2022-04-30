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
  }, singlePost.User.nickname, " \uB2D8\uC758 \uAE00"), __jsx("meta", {
    name: "description",
    content: singlePost.content,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 6
    }
  }), __jsx("meta", {
    property: "or:title",
    content: "".concat(singlePost.User.nickname, " \uB2D8\uC758 \uAC8C\uC2DC\uAE00"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 6
    }
  }), __jsx("meta", {
    property: "or:description",
    content: singlePost.content,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 6
    }
  }), __jsx("meta", {
    property: "or:image",
    content: singlePost.Images[0] ? singlePost.Images[0].src : 'https://nodebirds.com/favicon.ico',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 6
    }
  }), __jsx("meta", {
    property: "or:url",
    content: "https://nodebird.com/post/".concat(id),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 6
    }
  })), __jsx(_component_PostCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    post: singlePost,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdC8uanMiXSwibmFtZXMiOlsiUG9zdCIsInJvdXRlciIsInVzZVJvdXRlciIsImlkIiwicXVlcnkiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwicG9zdCIsInNpbmdsZVBvc3QiLCJVc2VyIiwibmlja25hbWUiLCJjb250ZW50IiwiSW1hZ2VzIiwic3JjIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBQ2xCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxNQUFPQyxFQUFQLEdBQWFGLE1BQU0sQ0FBQ0csS0FBcEIsQ0FBT0QsRUFBUDs7QUFDQSxxQkFBcUJFLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBakI7QUFBQSxHQUFELENBQWhDO0FBQUEsTUFBT0MsVUFBUCxnQkFBT0EsVUFBUDs7QUFFQSxTQUNFLE1BQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRUEsVUFBVSxDQUFDQyxJQUFYLENBQWdCQyxRQURsQix5QkFERCxFQUlDO0FBQU0sUUFBSSxFQUFDLGFBQVg7QUFBeUIsV0FBTyxFQUFFRixVQUFVLENBQUNHLE9BQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRCxFQUtDO0FBQU0sWUFBUSxFQUFDLFVBQWY7QUFBMEIsV0FBTyxZQUFLSCxVQUFVLENBQUNDLElBQVgsQ0FBZ0JDLFFBQXJCLHFDQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEQsRUFNQztBQUFNLFlBQVEsRUFBQyxnQkFBZjtBQUFnQyxXQUFPLEVBQUVGLFVBQVUsQ0FBQ0csT0FBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5ELEVBT0M7QUFBTSxZQUFRLEVBQUMsVUFBZjtBQUEwQixXQUFPLEVBQUVILFVBQVUsQ0FBQ0ksTUFBWCxDQUFrQixDQUFsQixJQUF1QkosVUFBVSxDQUFDSSxNQUFYLENBQWtCLENBQWxCLEVBQXFCQyxHQUE1QyxHQUFrRCxtQ0FBckY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVBELEVBUUM7QUFBTSxZQUFRLEVBQUMsUUFBZjtBQUF3QixXQUFPLHNDQUErQlYsRUFBL0IsQ0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJELENBREQsRUFXQyxNQUFDLDJEQUFEO0FBQVUsUUFBSSxFQUFFSyxVQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWEQsQ0FERjtBQWVBLENBcEJEO0FBc0JBO0FBQ0E7OztHQXZCTVIsSTtVQUNVRSxxRCxFQUVNRyx1RDs7O0tBSGhCTCxJOztBQTBDU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdC9baWRdLjQ1Yzc1ZmQ4MjZkNTBiMmIwODZlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyDrj5nsoIEg65287Jqw7YyF7JqpIO2OmOydtOyngFxyXG4vLyBwb3N0L1tpZF0uanNcclxuXHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHdyYXBwZXIgZnJvbSBcIi4uLy4uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHtFTkR9IGZyb20gJ3JlZHV4LXNhZ2EnXHJcbmltcG9ydCB7TE9BRF9NWV9JTkZPX1JFUVVFU1R9IGZyb20gXCIuLi8uLi9yZWR1Y2Vycy91c2VyXCI7XHJcbmltcG9ydCB7TE9BRF9QT1NUX1JFUVVFU1R9IGZyb20gJy4uLy4uL3JlZHVjZXJzL3Bvc3QnXHJcbmltcG9ydCB7Z2V0U3RhdGljUHJvcHN9IGZyb20gXCIuLi9hYm91dFwiO1xyXG5pbXBvcnQgQXBwTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudC9BcHBMYXlvdXQnXHJcbmltcG9ydCBQb3N0Q2FyZCBmcm9tIFwiLi4vLi4vY29tcG9uZW50L1Bvc3RDYXJkXCI7XHJcbmltcG9ydCB7dXNlU2VsZWN0b3J9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcblxyXG5cclxuY29uc3QgUG9zdCA9ICgpID0+IHtcclxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cdGNvbnN0IHtpZH0gPSByb3V0ZXIucXVlcnlcclxuXHRjb25zdCB7c2luZ2xlUG9zdH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBvc3QpXHJcblxyXG5cdHJldHVybiAoXHJcblx0XHRcdDxBcHBMYXlvdXQ+XHJcblx0XHRcdFx0PEhlYWQ+XHJcblx0XHRcdFx0XHQ8dGl0bGU+XHJcblx0XHRcdFx0XHRcdHtzaW5nbGVQb3N0LlVzZXIubmlja25hbWV9IOuLmOydmCDquIBcclxuXHRcdFx0XHRcdDwvdGl0bGU+XHJcblx0XHRcdFx0XHQ8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtzaW5nbGVQb3N0LmNvbnRlbnR9IC8+XHJcblx0XHRcdFx0XHQ8bWV0YSBwcm9wZXJ0eT1cIm9yOnRpdGxlXCIgY29udGVudD17YCR7c2luZ2xlUG9zdC5Vc2VyLm5pY2tuYW1lfSDri5jsnZgg6rKM7Iuc6riAYH0gLz5cclxuXHRcdFx0XHRcdDxtZXRhIHByb3BlcnR5PVwib3I6ZGVzY3JpcHRpb25cIiBjb250ZW50PXtzaW5nbGVQb3N0LmNvbnRlbnR9IC8+XHJcblx0XHRcdFx0XHQ8bWV0YSBwcm9wZXJ0eT1cIm9yOmltYWdlXCIgY29udGVudD17c2luZ2xlUG9zdC5JbWFnZXNbMF0gPyBzaW5nbGVQb3N0LkltYWdlc1swXS5zcmMgOiAnaHR0cHM6Ly9ub2RlYmlyZHMuY29tL2Zhdmljb24uaWNvJ30gLz5cclxuXHRcdFx0XHRcdDxtZXRhIHByb3BlcnR5PVwib3I6dXJsXCIgY29udGVudD17YGh0dHBzOi8vbm9kZWJpcmQuY29tL3Bvc3QvJHtpZH1gfSAvPlxyXG5cdFx0XHRcdDwvSGVhZD5cclxuXHRcdFx0XHQ8UG9zdENhcmQgcG9zdD17c2luZ2xlUG9zdH0vPlxyXG5cdFx0XHQ8L0FwcExheW91dD5cclxuXHQpXHJcbn1cclxuXHJcbi8qZ2V0U2VydmVyU2lkZVByb3BzJmdldFN0YXRpY1Byb3BzIOyViOydmCBjb250ZXh0IOyXkOyEnOuKlCBjb250ZXh0LnBhcmFtcy5pZCZjb250ZXh0LnF1ZXJ5LmlkIO2VmOuptFxyXG51c2VSb3V0ZXIg7JeQIOuYkeqwmeydtCDsoJHqt7wg7ZWgIOyImCDsnojri6QqL1xyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gd3JhcHBlci5nZXRTZXJ2ZXJTaWRlUHJvcHMoYXN5bmMgKGNvbnRleHQpID0+IHtcclxuXHRjb25zdCBjb29raWUgPSBjb250ZXh0LnJlcSA/IGNvbnRleHQucmVxLmhlYWRlcnMuY29va2llIDogJyc7XHJcblx0Y29uc29sZS5sb2coJ2R5bmFtaWMgcm91dGluZyBQb3N0IGdldFNlcnZlclNpZGVQcm9wcyBTdGFydCA6OicpXHJcblx0YXhpb3MuZGVmYXVsdHMuaGVhZGVycy5Db29raWUgPSAnJ1xyXG5cdGlmIChjb250ZXh0LnJlcSAmJiBjb29raWUpIHtcclxuXHRcdGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuQ29va2llID0gY29va2llXHJcblx0fVxyXG5cdGNvbnRleHQuc3RvcmUuZGlzcGF0Y2goeyAvLyDrgrQg7KCV67O0IOyalOyyrVxyXG5cdFx0dHlwZTogTE9BRF9NWV9JTkZPX1JFUVVFU1QsXHJcblx0fSlcclxuXHRjb250ZXh0LnN0b3JlLmRpc3BhdGNoKHsgLy8g64uo7J28IOqyjOyLnOq4gCDsmpTssq1cclxuXHRcdHR5cGU6IExPQURfUE9TVF9SRVFVRVNULFxyXG5cdFx0ZGF0YTogY29udGV4dC5wYXJhbXMuaWQsIC8vXHJcblx0fSlcclxuXHRjb250ZXh0LnN0b3JlLmRpc3BhdGNoKEVORClcclxuXHRhd2FpdCBjb250ZXh0LnN0b3JlLnNhZ2FUYXNrLnRvUHJvbWlzZSgpXHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Il0sInNvdXJjZVJvb3QiOiIifQ==