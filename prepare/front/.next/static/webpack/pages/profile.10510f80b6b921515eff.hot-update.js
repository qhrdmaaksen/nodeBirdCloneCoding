webpackHotUpdate_N_E("pages/profile",{

/***/ "./pages/profile.js":
/*!**************************!*\
  !*** ./pages/profile.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _component_AppLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/AppLayout */ "./component/AppLayout.js");
/* harmony import */ var _component_NicknameEditForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/NicknameEditForm */ "./component/NicknameEditForm.js");
/* harmony import */ var _component_FollowList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component/FollowList */ "./component/FollowList.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
var _this = undefined,
    _jsxFileName = "D:\\intellijProjects\\react-nodebird\\prepare\\front\\pages\\profile.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






 //import FollowerList from '../component/FollowerList'

var Profile = function Profile() {
  _s();

  // const followingList = [{nickname: '비타민'}, {nickname: '엠알민'}, {nickname: '올마스터'}]
  // const followerList = [{nickname: '비타민'}, {nickname: '엠알민'}, {nickname: '올마스터'}]
  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!(me && me.id)) {
      next_router__WEBPACK_IMPORTED_MODULE_6__["Router"].push('/');
    }
  }, [me && me.id]);

  if (!me) {
    return null;
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 6
    }
  }, "\uB0B4 \uD504\uB85C\uD544 | NodeBird")), __jsx(_component_AppLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }, __jsx(_component_NicknameEditForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 6
    }
  }), __jsx(_component_FollowList__WEBPACK_IMPORTED_MODULE_4__["default"], {
    header: "\uD314\uB85C\uC719 \uBAA9\uB85D",
    data: me.Followings,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 6
    }
  }), __jsx(_component_FollowList__WEBPACK_IMPORTED_MODULE_4__["default"], {
    header: "\uD314\uB85C\uC6CC \uBAA9\uB85D",
    data: me.Followers,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 6
    }
  })));
};

_s(Profile, "dXV5Ddi7LLTWnG2eWiuuh7S2+8o=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"]];
});

_c = Profile;
/* harmony default export */ __webpack_exports__["default"] = (Profile);

var _c;

$RefreshReg$(_c, "Profile");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJQcm9maWxlIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJtZSIsInVzZUVmZmVjdCIsImlkIiwiUm91dGVyIiwicHVzaCIsIkZvbGxvd2luZ3MiLCJGb2xsb3dlcnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7O0FBR0EsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUFBOztBQUNyQjtBQUNBO0FBQ0EscUJBQWVDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVVBLEtBQUssQ0FBQ0MsSUFBaEI7QUFBQSxHQUFELENBQTFCO0FBQUEsTUFBUUMsRUFBUixnQkFBUUEsRUFBUjs7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2YsUUFBSSxFQUFFRCxFQUFFLElBQUlBLEVBQUUsQ0FBQ0UsRUFBWCxDQUFKLEVBQW9CO0FBQ25CQyx3REFBTSxDQUFDQyxJQUFQLENBQVksR0FBWjtBQUNBO0FBQ0QsR0FKUSxFQUlOLENBQUNKLEVBQUUsSUFBSUEsRUFBRSxDQUFDRSxFQUFWLENBSk0sQ0FBVDs7QUFLQSxNQUFJLENBQUNGLEVBQUwsRUFBUztBQUNSLFdBQU8sSUFBUDtBQUNBOztBQUVELFNBQ0UsbUVBQ0MsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0Q0FERCxDQURELEVBSUMsTUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxtRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsRUFFQyxNQUFDLDZEQUFEO0FBQVksVUFBTSxFQUFDLGlDQUFuQjtBQUE0QixRQUFJLEVBQUVBLEVBQUUsQ0FBQ0ssVUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZELEVBR0MsTUFBQyw2REFBRDtBQUFZLFVBQU0sRUFBQyxpQ0FBbkI7QUFBNEIsUUFBSSxFQUFFTCxFQUFFLENBQUNNLFNBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRCxDQUpELENBREY7QUFZQSxDQTFCRDs7R0FBTVYsTztVQUdVQyx1RDs7O0tBSFZELE87QUE0QlNBLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGUuMTA1MTBmODBiNmI5MjE1MTVlZmYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgQXBwTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudC9BcHBMYXlvdXQnXG5pbXBvcnQgTmlja25hbWVFZGl0Rm9ybSBmcm9tICcuLi9jb21wb25lbnQvTmlja25hbWVFZGl0Rm9ybSdcbmltcG9ydCBGb2xsb3dMaXN0IGZyb20gJy4uL2NvbXBvbmVudC9Gb2xsb3dMaXN0J1xuaW1wb3J0IHt1c2VTZWxlY3Rvcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG4vL2ltcG9ydCBGb2xsb3dlckxpc3QgZnJvbSAnLi4vY29tcG9uZW50L0ZvbGxvd2VyTGlzdCdcblxuXG5jb25zdCBQcm9maWxlID0gKCkgPT4ge1xuXHQvLyBjb25zdCBmb2xsb3dpbmdMaXN0ID0gW3tuaWNrbmFtZTogJ+u5hO2DgOuvvCd9LCB7bmlja25hbWU6ICfsl6DslYzrr7wnfSwge25pY2tuYW1lOiAn7Jis66eI7Iqk7YSwJ31dXG5cdC8vIGNvbnN0IGZvbGxvd2VyTGlzdCA9IFt7bmlja25hbWU6ICfruYTtg4Drr7wnfSwge25pY2tuYW1lOiAn7Jeg7JWM66+8J30sIHtuaWNrbmFtZTogJ+yYrOuniOyKpO2EsCd9XVxuXHRjb25zdCB7IG1lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpPT4gc3RhdGUudXNlcilcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGlmICghKG1lICYmIG1lLmlkKSkge1xuXHRcdFx0Um91dGVyLnB1c2goJy8nKVxuXHRcdH1cblx0fSwgW21lICYmIG1lLmlkXSlcblx0aWYgKCFtZSkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIChcblx0XHRcdDw+XG5cdFx0XHRcdDxIZWFkPlxuXHRcdFx0XHRcdDx0aXRsZT7rgrQg7ZSE66Gc7ZWEIHwgTm9kZUJpcmQ8L3RpdGxlPlxuXHRcdFx0XHQ8L0hlYWQ+XG5cdFx0XHRcdDxBcHBMYXlvdXQ+XG5cdFx0XHRcdFx0PE5pY2tuYW1lRWRpdEZvcm0vPlxuXHRcdFx0XHRcdDxGb2xsb3dMaXN0IGhlYWRlcj1cIu2MlOuhnOycmSDrqqnroZ1cIiBkYXRhPXttZS5Gb2xsb3dpbmdzfS8+XG5cdFx0XHRcdFx0PEZvbGxvd0xpc3QgaGVhZGVyPVwi7YyU66Gc7JuMIOuqqeuhnVwiIGRhdGE9e21lLkZvbGxvd2Vyc30vPlxuXHRcdFx0XHQ8L0FwcExheW91dD5cblx0XHRcdDwvPlxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGVcbiJdLCJzb3VyY2VSb290IjoiIn0=