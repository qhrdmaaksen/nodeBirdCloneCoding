webpackHotUpdate_N_E("pages/signup",{

/***/ "./component/UserProfile.js":
/*!**********************************!*\
  !*** ./component/UserProfile.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
var _this = undefined,
    _jsxFileName = "D:\\intellijProjects\\react-nodebird\\prepare\\front\\component\\UserProfile.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // eslint-disable-next-line react/prop-types

var UserProfile = function UserProfile(_ref) {
  _s();

  var setIsLoggedIn = _ref.setIsLoggedIn;
  var onLogOut = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setIsLoggedIn(false);
  }, []);
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 4
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    actions: [__jsx("div", {
      key: "twit",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 8
      }
    }, "\uC9F9\uC9F9", __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 26
      }
    }), "0"),
    /*리액트에서 배열로 jsx 사용할땐 key 붙여줘야함*/
    __jsx("div", {
      key: "following",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 8
      }
    }, "\uD314\uB85C\uC719", __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 32
      }
    }), "0"), __jsx("div", {
      key: "follower",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 8
      }
    }, "\uD314\uB85C\uC6CC", __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 31
      }
    }), "0")],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
    avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 15
      }
    }, "mrmin"),
    title: "vitamin777",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: onLogOut(),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, "\uB85C\uADF8\uC544\uC6C3"));
};

_s(UserProfile, "soEkKhOFJiBA5pEh4NHl5+aG1VY=");

_c = UserProfile;
/* harmony default export */ __webpack_exports__["default"] = (UserProfile);

var _c;

$RefreshReg$(_c, "UserProfile");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L1VzZXJQcm9maWxlLmpzIl0sIm5hbWVzIjpbIlVzZXJQcm9maWxlIiwic2V0SXNMb2dnZWRJbiIsIm9uTG9nT3V0IiwidXNlQ2FsbGJhY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUdBOztBQUNBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQXNCO0FBQUE7O0FBQUEsTUFBbkJDLGFBQW1CLFFBQW5CQSxhQUFtQjtBQUN6QyxNQUFNQyxRQUFRLEdBQUdDLHlEQUFXLENBQUMsWUFBTTtBQUNsQ0YsaUJBQWEsQ0FBQyxLQUFELENBQWI7QUFDQSxHQUYyQixFQUV6QixFQUZ5QixDQUE1QjtBQUlBLFNBQ0UsTUFBQyx5Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyx5Q0FBRDtBQUNFLFdBQU8sRUFBRSxDQUNSO0FBQUssU0FBRyxFQUFDLE1BQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFBa0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFsQixNQURRO0FBQ3lCO0FBQ2pDO0FBQUssU0FBRyxFQUFDLFdBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFBd0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUF4QixNQUZRLEVBR1I7QUFBSyxTQUFHLEVBQUMsVUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUF1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQXZCLE1BSFEsQ0FEWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsRUFRQyxNQUFDLHlDQUFELENBQU0sSUFBTjtBQUNFLFVBQU0sRUFBRSxNQUFDLDJDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEVjtBQUVFLFNBQUssRUFBQyxZQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSRCxFQVlDLE1BQUMsMkNBQUQ7QUFBUSxXQUFPLEVBQUVDLFFBQVEsRUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQ0FaRCxDQURGO0FBZ0JBLENBckJEOztHQUFNRixXOztLQUFBQSxXO0FBdUJTQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zaWdudXAuZjIzMjhhZGI4OGU2ZjU5NDdmZGQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUNhbGxiYWNrfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7Q2FyZCwgQXZhdGFyLCBCdXR0b259IGZyb20gJ2FudGQnXG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9wcm9wLXR5cGVzXG5jb25zdCBVc2VyUHJvZmlsZSA9ICh7IHNldElzTG9nZ2VkSW59KSA9PiB7XG5cdGNvbnN0IG9uTG9nT3V0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuXHRcdHNldElzTG9nZ2VkSW4oZmFsc2UpXG5cdH0sIFtdKVxuXG5cdHJldHVybiAoXG5cdFx0XHQ8Q2FyZD5cblx0XHRcdFx0PENhcmRcblx0XHRcdFx0XHRcdGFjdGlvbnM9e1tcblx0XHRcdFx0XHRcdFx0PGRpdiBrZXk9XCJ0d2l0XCI+7Ke57Ke5PGJyLz4wPC9kaXY+LCAgLyrrpqzslaHtirjsl5DshJwg67Cw7Je066GcIGpzeCDsgqzsmqntlaDrlZAga2V5IOu2meyXrOykmOyVvO2VqCovXG5cdFx0XHRcdFx0XHRcdDxkaXYga2V5PVwiZm9sbG93aW5nXCI+7YyU66Gc7JyZPGJyLz4wPC9kaXY+LFxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGtleT1cImZvbGxvd2VyXCI+7YyU66Gc7JuMPGJyLz4wPC9kaXY+XG5cdFx0XHRcdFx0XHRdfT5cblx0XHRcdFx0PC9DYXJkPlxuXHRcdFx0XHQ8Q2FyZC5NZXRhXG5cdFx0XHRcdFx0XHRhdmF0YXI9ezxBdmF0YXI+bXJtaW48L0F2YXRhcj59XG5cdFx0XHRcdFx0XHR0aXRsZT1cInZpdGFtaW43NzdcIlxuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8QnV0dG9uIG9uQ2xpY2s9e29uTG9nT3V0KCl9PuuhnOq3uOyVhOybgzwvQnV0dG9uPlxuXHRcdFx0PC9DYXJkPlxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJQcm9maWxlXG4iXSwic291cmNlUm9vdCI6IiJ9