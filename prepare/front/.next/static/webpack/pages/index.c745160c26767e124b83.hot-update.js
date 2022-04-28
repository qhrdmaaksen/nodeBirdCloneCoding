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
      unfollowLoading = _useSelector.unfollowLoading;

  if (post.User.id === me.id) {// 포스트의 id 와 
  } // v.id 가 포스트 작성자의 id 라면


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
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    loading: followLoading || unfollowLoading,
    onClick: onClickButton,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L0ZvbGxvd0J1dHRvbi5qcyJdLCJuYW1lcyI6WyJGb2xsb3dCdXR0b24iLCJwb3N0IiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJmb2xsb3dMb2FkaW5nIiwidW5mb2xsb3dMb2FkaW5nIiwiVXNlciIsImlkIiwiaXNGb2xsb3dpbmciLCJGb2xsb3dpbmdzIiwiZmluZCIsInYiLCJvbkNsaWNrQnV0dG9uIiwidXNlQ2FsbGJhY2siLCJ0eXBlIiwiVU5GT0xMT1dfUkVRVUVTVCIsImRhdGEiLCJGT0xMT1dfUkVRVUVTVCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUFZO0FBQUE7O0FBQUEsTUFBVkMsSUFBVSxRQUFWQSxJQUFVO0FBQ2hDLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBQ0EscUJBQTZDQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLElBQWpCO0FBQUEsR0FBRCxDQUF4RDtBQUFBLE1BQU9DLEVBQVAsZ0JBQU9BLEVBQVA7QUFBQSxNQUFXQyxhQUFYLGdCQUFXQSxhQUFYO0FBQUEsTUFBMEJDLGVBQTFCLGdCQUEwQkEsZUFBMUI7O0FBQ0EsTUFBSVIsSUFBSSxDQUFDUyxJQUFMLENBQVVDLEVBQVYsS0FBaUJKLEVBQUUsQ0FBQ0ksRUFBeEIsRUFBNEIsQ0FBRTtBQUM3QixHQUorQixDQUtoQzs7O0FBQ0EsTUFBTUMsV0FBVyxHQUFHTCxFQUFILGFBQUdBLEVBQUgsdUJBQUdBLEVBQUUsQ0FBRU0sVUFBSixDQUFlQyxJQUFmLENBQW9CLFVBQUNDLENBQUQ7QUFBQSxXQUFPQSxDQUFDLENBQUNKLEVBQUYsS0FBU1YsSUFBSSxDQUFDUyxJQUFMLENBQVVDLEVBQTFCO0FBQUEsR0FBcEIsQ0FBcEI7QUFFQSxNQUFNSyxhQUFhLEdBQUdDLHlEQUFXLENBQUMsWUFBTTtBQUN2QyxRQUFJTCxXQUFKLEVBQWlCO0FBQ2hCVixjQUFRLENBQUM7QUFDUmdCLFlBQUksRUFBRUMsK0RBREU7QUFFUkMsWUFBSSxFQUFFbkIsSUFBSSxDQUFDUyxJQUFMLENBQVVDO0FBQUk7O0FBRlosT0FBRCxDQUFSO0FBSUEsS0FMRCxNQUtPO0FBQ05ULGNBQVEsQ0FBQztBQUNSZ0IsWUFBSSxFQUFFRyw2REFERTtBQUVSRCxZQUFJLEVBQUVuQixJQUFJLENBQUNTLElBQUwsQ0FBVUM7QUFGUixPQUFELENBQVI7QUFJQTtBQUNELEdBWmdDLEVBWTlCLENBQUNDLFdBQUQsQ0FaOEIsQ0FBakM7QUFhQSxTQUNFLE1BQUMsMkNBQUQ7QUFBUSxXQUFPLEVBQUVKLGFBQWEsSUFBSUMsZUFBbEM7QUFBbUQsV0FBTyxFQUFFTyxhQUE1RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0VKLFdBQVcsR0FBRyxNQUFILEdBQVksS0FEekIsTUFERjtBQUtBLENBMUJEOztHQUFNWixZO1VBQ1lHLHVELEVBQzRCQyx1RDs7O0tBRnhDSixZO0FBMkJOQSxZQUFZLENBQUNzQixTQUFiLEdBQXlCO0FBQ3hCckIsTUFBSSxFQUFFc0IsaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkM7QUFEQyxDQUF6QjtBQUdlekIsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzc0NTE2MGMyNjc2N2UxMjRiODMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUNhbGxiYWNrfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IHtCdXR0b259IGZyb20gJ2FudGQnXHJcbmltcG9ydCB7dXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHtGT0xMT1dfUkVRVUVTVCwgVU5GT0xMT1dfUkVRVUVTVH0gZnJvbSBcIi4uL3JlZHVjZXJzL3VzZXJcIjtcclxuXHJcbmNvbnN0IEZvbGxvd0J1dHRvbiA9ICh7cG9zdH0pID0+IHtcclxuXHRjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuXHRjb25zdCB7bWUsIGZvbGxvd0xvYWRpbmcsIHVuZm9sbG93TG9hZGluZ30gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpXHJcblx0aWYgKHBvc3QuVXNlci5pZCA9PT0gbWUuaWQpIHsgLy8g7Y+s7Iqk7Yq47J2YIGlkIOyZgCBcclxuXHR9XHJcblx0Ly8gdi5pZCDqsIAg7Y+s7Iqk7Yq4IOyekeyEseyekOydmCBpZCDrnbzrqbRcclxuXHRjb25zdCBpc0ZvbGxvd2luZyA9IG1lPy5Gb2xsb3dpbmdzLmZpbmQoKHYpID0+IHYuaWQgPT09IHBvc3QuVXNlci5pZClcclxuXHJcblx0Y29uc3Qgb25DbGlja0J1dHRvbiA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuXHRcdGlmIChpc0ZvbGxvd2luZykge1xyXG5cdFx0XHRkaXNwYXRjaCh7XHJcblx0XHRcdFx0dHlwZTogVU5GT0xMT1dfUkVRVUVTVCxcclxuXHRcdFx0XHRkYXRhOiBwb3N0LlVzZXIuaWQsIC8q7YyU66Gc7Jqw7ZWg65WMIOyCrOyaqeyekOydmCDsoJXrs7Trpbwg67O064K07KO864qU6rOzKi9cclxuXHRcdFx0fSlcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGRpc3BhdGNoKHtcclxuXHRcdFx0XHR0eXBlOiBGT0xMT1dfUkVRVUVTVCxcclxuXHRcdFx0XHRkYXRhOiBwb3N0LlVzZXIuaWQsXHJcblx0XHRcdH0pXHJcblx0XHR9XHJcblx0fSwgW2lzRm9sbG93aW5nXSlcclxuXHRyZXR1cm4gKFxyXG5cdFx0XHQ8QnV0dG9uIGxvYWRpbmc9e2ZvbGxvd0xvYWRpbmcgfHwgdW5mb2xsb3dMb2FkaW5nfSBvbkNsaWNrPXtvbkNsaWNrQnV0dG9ufT5cclxuXHRcdFx0XHR7aXNGb2xsb3dpbmcgPyAn7Ja47YyU66Gc7JqwJyA6ICftjJTroZzsmrAnfSB7LyrtjJTroZzsmrDsg4Htg5zrnbzrqbQgdHJ1ZSDsg4Htg5zrqbQg7Ja47YyU66Gc7JqwLCBmYWxzZSDrnbzrqbQg7YyU66Gc7JqwKi99XHJcblx0XHRcdDwvQnV0dG9uPlxyXG5cdClcclxufVxyXG5Gb2xsb3dCdXR0b24ucHJvcFR5cGVzID0ge1xyXG5cdHBvc3Q6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxufVxyXG5leHBvcnQgZGVmYXVsdCBGb2xsb3dCdXR0b24iXSwic291cmNlUm9vdCI6IiJ9