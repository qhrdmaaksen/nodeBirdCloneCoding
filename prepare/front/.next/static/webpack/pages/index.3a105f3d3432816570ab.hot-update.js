webpackHotUpdate_N_E("pages/index",{

/***/ "./component/FollowButton.js":
/*!***********************************!*\
  !*** ./component/FollowButton.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
var _this = undefined,
    _jsxFileName = "D:\\intellijProjects\\react-nodebird\\prepare\\front\\component\\FollowButton.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var FollowButton = function FollowButton(_ref) {
  _s();

  var post = _ref.post;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me,
      followLoading = _useSelector.followLoading,
      unfollowLoading = _useSelector.unfollowLoading; // v.id 가 포스트 작성자의 id 라면


  var isFollowing = me === null || me === void 0 ? void 0 : me.Followings.find(function (v) {
    return v.id === post.User.id;
  });
  var onClickButton = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    if (isFollowing) {
      dispatch({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["UNFOLLOW_REQUEST"],
        data: post.User.id
        /*팔로우할때 사용자의 정보를 보내주는곳*/

      });
    } else {
      dispatch({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["FOLLOW_REQUEST"],
        data: post.User.id
      });
    }
  }, [isFollowing]);

  if (post.User.id === me.id) {
    // 포스트 작성자의 아이디와 내 아이디가 같다면
    return null;
  }

  return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    loading: followLoading || unfollowLoading,
    onClick: onClickButton,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 4
    }
  }, isFollowing ? '언팔로우' : '팔로우', " ");
};

_s(FollowButton, "T0YYEjHIrEa2NRZePC/t0o+cU1U=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"]];
});

_c = FollowButton;
FollowButton.propTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (FollowButton);

var _c;

$RefreshReg$(_c, "FollowButton");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L0ZvbGxvd0J1dHRvbi5qcyJdLCJuYW1lcyI6WyJGb2xsb3dCdXR0b24iLCJwb3N0IiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJmb2xsb3dMb2FkaW5nIiwidW5mb2xsb3dMb2FkaW5nIiwiaXNGb2xsb3dpbmciLCJGb2xsb3dpbmdzIiwiZmluZCIsInYiLCJpZCIsIlVzZXIiLCJvbkNsaWNrQnV0dG9uIiwidXNlQ2FsbGJhY2siLCJ0eXBlIiwiVU5GT0xMT1dfUkVRVUVTVCIsImRhdGEiLCJGT0xMT1dfUkVRVUVTVCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUFZO0FBQUE7O0FBQUEsTUFBVkMsSUFBVSxRQUFWQSxJQUFVO0FBQ2hDLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBQ0EscUJBQTZDQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLElBQWpCO0FBQUEsR0FBRCxDQUF4RDtBQUFBLE1BQU9DLEVBQVAsZ0JBQU9BLEVBQVA7QUFBQSxNQUFXQyxhQUFYLGdCQUFXQSxhQUFYO0FBQUEsTUFBMEJDLGVBQTFCLGdCQUEwQkEsZUFBMUIsQ0FGZ0MsQ0FJaEM7OztBQUNBLE1BQU1DLFdBQVcsR0FBR0gsRUFBSCxhQUFHQSxFQUFILHVCQUFHQSxFQUFFLENBQUVJLFVBQUosQ0FBZUMsSUFBZixDQUFvQixVQUFDQyxDQUFEO0FBQUEsV0FBT0EsQ0FBQyxDQUFDQyxFQUFGLEtBQVNiLElBQUksQ0FBQ2MsSUFBTCxDQUFVRCxFQUExQjtBQUFBLEdBQXBCLENBQXBCO0FBRUEsTUFBTUUsYUFBYSxHQUFHQyx5REFBVyxDQUFDLFlBQU07QUFDdkMsUUFBSVAsV0FBSixFQUFpQjtBQUNoQlIsY0FBUSxDQUFDO0FBQ1JnQixZQUFJLEVBQUVDLCtEQURFO0FBRVJDLFlBQUksRUFBRW5CLElBQUksQ0FBQ2MsSUFBTCxDQUFVRDtBQUFJOztBQUZaLE9BQUQsQ0FBUjtBQUlBLEtBTEQsTUFLTztBQUNOWixjQUFRLENBQUM7QUFDUmdCLFlBQUksRUFBRUcsNkRBREU7QUFFUkQsWUFBSSxFQUFFbkIsSUFBSSxDQUFDYyxJQUFMLENBQVVEO0FBRlIsT0FBRCxDQUFSO0FBSUE7QUFDRCxHQVpnQyxFQVk5QixDQUFDSixXQUFELENBWjhCLENBQWpDOztBQWNBLE1BQUlULElBQUksQ0FBQ2MsSUFBTCxDQUFVRCxFQUFWLEtBQWlCUCxFQUFFLENBQUNPLEVBQXhCLEVBQTRCO0FBQUU7QUFDN0IsV0FBTyxJQUFQO0FBQ0E7O0FBRUQsU0FDRSxNQUFDLDJDQUFEO0FBQVEsV0FBTyxFQUFFTixhQUFhLElBQUlDLGVBQWxDO0FBQW1ELFdBQU8sRUFBRU8sYUFBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFTixXQUFXLEdBQUcsTUFBSCxHQUFZLEtBRHpCLE1BREY7QUFLQSxDQTlCRDs7R0FBTVYsWTtVQUNZRyx1RCxFQUM0QkMsdUQ7OztLQUZ4Q0osWTtBQStCTkEsWUFBWSxDQUFDc0IsU0FBYixHQUF5QjtBQUN4QnJCLE1BQUksRUFBRXNCLGlEQUFTLENBQUNDLE1BQVYsQ0FBaUJDO0FBREMsQ0FBekI7QUFHZXpCLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjNhMTA1ZjNkMzQzMjgxNjU3MGFiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VDYWxsYmFja30gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCB7QnV0dG9ufSBmcm9tICdhbnRkJ1xyXG5pbXBvcnQge3VzZURpc3BhdGNoLCB1c2VTZWxlY3Rvcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7Rk9MTE9XX1JFUVVFU1QsIFVORk9MTE9XX1JFUVVFU1R9IGZyb20gXCIuLi9yZWR1Y2Vycy91c2VyXCI7XHJcblxyXG5jb25zdCBGb2xsb3dCdXR0b24gPSAoe3Bvc3R9KSA9PiB7XHJcblx0Y29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcblx0Y29uc3Qge21lLCBmb2xsb3dMb2FkaW5nLCB1bmZvbGxvd0xvYWRpbmd9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKVxyXG5cclxuXHQvLyB2LmlkIOqwgCDtj6zsiqTtirgg7J6R7ISx7J6Q7J2YIGlkIOudvOuptFxyXG5cdGNvbnN0IGlzRm9sbG93aW5nID0gbWU/LkZvbGxvd2luZ3MuZmluZCgodikgPT4gdi5pZCA9PT0gcG9zdC5Vc2VyLmlkKVxyXG5cclxuXHRjb25zdCBvbkNsaWNrQnV0dG9uID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG5cdFx0aWYgKGlzRm9sbG93aW5nKSB7XHJcblx0XHRcdGRpc3BhdGNoKHtcclxuXHRcdFx0XHR0eXBlOiBVTkZPTExPV19SRVFVRVNULFxyXG5cdFx0XHRcdGRhdGE6IHBvc3QuVXNlci5pZCwgLyrtjJTroZzsmrDtlaDrlYwg7IKs7Jqp7J6Q7J2YIOygleuztOulvCDrs7TrgrTso7zripTqs7MqL1xyXG5cdFx0XHR9KVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0ZGlzcGF0Y2goe1xyXG5cdFx0XHRcdHR5cGU6IEZPTExPV19SRVFVRVNULFxyXG5cdFx0XHRcdGRhdGE6IHBvc3QuVXNlci5pZCxcclxuXHRcdFx0fSlcclxuXHRcdH1cclxuXHR9LCBbaXNGb2xsb3dpbmddKVxyXG5cclxuXHRpZiAocG9zdC5Vc2VyLmlkID09PSBtZS5pZCkgeyAvLyDtj6zsiqTtirgg7J6R7ISx7J6Q7J2YIOyVhOydtOuUlOyZgCDrgrQg7JWE7J2065SU6rCAIOqwmeuLpOuptFxyXG5cdFx0cmV0dXJuIG51bGxcclxuXHR9XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHRcdDxCdXR0b24gbG9hZGluZz17Zm9sbG93TG9hZGluZyB8fCB1bmZvbGxvd0xvYWRpbmd9IG9uQ2xpY2s9e29uQ2xpY2tCdXR0b259PlxyXG5cdFx0XHRcdHtpc0ZvbGxvd2luZyA/ICfslrjtjJTroZzsmrAnIDogJ+2MlOuhnOyasCd9IHsvKu2MlOuhnOyasOyDge2DnOudvOuptCB0cnVlIOyDge2DnOuptCDslrjtjJTroZzsmrAsIGZhbHNlIOudvOuptCDtjJTroZzsmrAqL31cclxuXHRcdFx0PC9CdXR0b24+XHJcblx0KVxyXG59XHJcbkZvbGxvd0J1dHRvbi5wcm9wVHlwZXMgPSB7XHJcblx0cG9zdDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEZvbGxvd0J1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=