webpackHotUpdate_N_E("pages/index",{

/***/ "./component/AppLayout.js":
/*!********************************!*\
  !*** ./component/AppLayout.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _component_UserProfile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../component/UserProfile */ "./component/UserProfile.js");
/* harmony import */ var _component_LoginForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../component/LoginForm */ "./component/LoginForm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _this = undefined,
    _jsxFileName = "D:\\intellijProjects\\react-nodebird\\prepare\\front\\component\\AppLayout.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



 // antd 에 Menu 사용





var Global = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["createGlobalStyle"])([".ant-row{margin-right:0 !important;margin-left:0 !important;}.ant-col:first-child{padding-left:0 !important;}.ant-col:last-child{padding-right:0 !important;}"]); // antd 에서 사용한 Input.Search 를 styled component 로 바꿔 넣어줌

_c = Global;
var SearchInput = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])(antd__WEBPACK_IMPORTED_MODULE_3__["Input"].Search).withConfig({
  displayName: "AppLayout__SearchInput",
  componentId: "sc-199h940-0"
})(["vertical-align:middle;"]);
_c2 = SearchInput;

var AppLayout = function AppLayout(_ref) {
  _s();

  var children = _ref.children;
  //const [isLoggedIn, setIsLoggedIn] = useState(false)
  // 유저 자체를 받아와서 유저 안에서 isLoggedIn 을 구조분해 할당
  //const { isLoggedIn } = useSelector((state) => state.user)
  var isLoggedIn = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(function (state) {
    return state.user.isLoggedIn;
  });
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 4
    }
  }, __jsx(Global, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"], {
    mode: "horizontal",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    key: "home",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 6
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 8
    }
  }, "\uB178\uB4DC\uBC84\uB4DC"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    key: "profile",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 6
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/profile",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 8
    }
  }, "\uD504\uB85C\uD544"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    key: "mail",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 6
    }
  }, __jsx(SearchInput, {
    enterButton: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    key: "signup",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 6
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/signup",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 8
    }
  }, "\uD68C\uC6D0\uAC00\uC785")))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    gutter: 8,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    xs: 24,
    md: 6,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 6
    }
  }, isLoggedIn ? __jsx(_component_UserProfile__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 21
    }
  }) : __jsx(_component_LoginForm__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 38
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    xs: 24,
    md: 12,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 6
    }
  }, children, " "), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    xs: 24,
    md: 6,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 6
    }
  }, __jsx("a", {
    href: "https://qhrdmaaksen.github.io/",
    target: '_blank',
    rel: "noreferrer noopener",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }
  }, "Made in Vitamin"))));
};

_s(AppLayout, "wwozkPYuXjHFfszlt2mcSB3o0is=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"]];
});

_c3 = AppLayout;
AppLayout.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (AppLayout);

var _c, _c2, _c3;

$RefreshReg$(_c, "Global");
$RefreshReg$(_c2, "SearchInput");
$RefreshReg$(_c3, "AppLayout");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L0FwcExheW91dC5qcyJdLCJuYW1lcyI6WyJHbG9iYWwiLCJjcmVhdGVHbG9iYWxTdHlsZSIsIlNlYXJjaElucHV0Iiwic3R5bGVkIiwiSW5wdXQiLCJTZWFyY2giLCJBcHBMYXlvdXQiLCJjaGlsZHJlbiIsImlzTG9nZ2VkSW4iLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm5vZGUiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7Q0FDMkM7O0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBR0EsSUFBTUEsTUFBTSxHQUFHQywyRUFBSCxtS0FBWixDLENBZUE7O0tBZk1ELE07QUFnQk4sSUFBTUUsV0FBVyxHQUFHQyxpRUFBTSxDQUFDQywwQ0FBSyxDQUFDQyxNQUFQLENBQVQ7QUFBQTtBQUFBO0FBQUEsOEJBQWpCO01BQU1ILFc7O0FBSU4sSUFBTUksU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FBZ0I7QUFBQTs7QUFBQSxNQUFkQyxRQUFjLFFBQWRBLFFBQWM7QUFDakM7QUFDQTtBQUNBO0FBQ0EsTUFBTUMsVUFBVSxHQUFHQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLElBQU4sQ0FBV0gsVUFBdEI7QUFBQSxHQUFELENBQTlCO0FBRUEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxNQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxFQUVDLE1BQUMseUNBQUQ7QUFBTSxRQUFJLEVBQUMsWUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBVyxPQUFHLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxHQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQURELENBREQsQ0FERCxFQU1DLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0FBQVcsT0FBRyxFQUFDLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsVUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFERCxDQURELENBTkQsRUFXQyxNQUFDLHlDQUFELENBQU0sSUFBTjtBQUFXLE9BQUcsRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLFdBQUQ7QUFBYSxlQUFXLE1BQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxDQVhELEVBY0MsTUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBVyxPQUFHLEVBQUMsUUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxTQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQURELENBREQsQ0FkRCxDQUZELEVBdUJDLE1BQUMsd0NBQUQ7QUFBSyxVQUFNLEVBQUUsQ0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUMsTUFBQyx3Q0FBRDtBQUFLLE1BQUUsRUFBRSxFQUFUO0FBQWEsTUFBRSxFQUFFLENBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FHRUEsVUFBVSxHQUFHLE1BQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFILEdBQW9CLE1BQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhoQyxDQUZELEVBT0MsTUFBQyx3Q0FBRDtBQUFLLE1BQUUsRUFBRSxFQUFUO0FBQWEsTUFBRSxFQUFFLEVBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRUQsUUFERixNQVBELEVBVUMsTUFBQyx3Q0FBRDtBQUFLLE1BQUUsRUFBRSxFQUFUO0FBQWEsTUFBRSxFQUFFLENBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFHLFFBQUksRUFBQyxnQ0FBUjtBQUF5QyxVQUFNLEVBQUUsUUFBakQ7QUFBMkQsT0FBRyxFQUFDLHFCQUEvRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURELENBVkQsQ0F2QkQsQ0FERjtBQTBDQSxDQWhERDs7R0FBTUQsUztVQUljRyx1RDs7O01BSmRILFM7QUFrRE5BLFNBQVMsQ0FBQ00sU0FBVixHQUFzQjtBQUNyQkwsVUFBUSxFQUFFTSxpREFBUyxDQUFDQyxJQUFWLENBQWVDO0FBREosQ0FBdEI7QUFJZVQsd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNDM5YWVkNzlkMmNjOWQyNGU0MGIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXHJcbmltcG9ydCB7TWVudSwgSW5wdXQsIFJvdywgQ29sfSBmcm9tICdhbnRkJyAvLyBhbnRkIOyXkCBNZW51IOyCrOyaqVxyXG5pbXBvcnQgc3R5bGVkLCB7Y3JlYXRlR2xvYmFsU3R5bGV9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQgVXNlclByb2ZpbGUgZnJvbSAnLi4vY29tcG9uZW50L1VzZXJQcm9maWxlJ1xyXG5pbXBvcnQgTG9naW5Gb3JtIGZyb20gJy4uL2NvbXBvbmVudC9Mb2dpbkZvcm0nXHJcbmltcG9ydCB7dXNlU2VsZWN0b3J9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5cclxuXHJcbmNvbnN0IEdsb2JhbCA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxyXG5cdC5hbnQtcm93IHtcclxuXHRcdG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcclxuXHR9XHJcblxyXG5cdC5hbnQtY29sOmZpcnN0LWNoaWxkIHtcclxuXHRcdHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xyXG5cdH1cclxuXHRcclxuXHQuYW50LWNvbDpsYXN0LWNoaWxkIHtcclxuXHRcdHBhZGRpbmctcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuXHR9XHJcbmBcclxuXHJcbi8vIGFudGQg7JeQ7IScIOyCrOyaqe2VnCBJbnB1dC5TZWFyY2gg66W8IHN0eWxlZCBjb21wb25lbnQg66GcIOuwlOq/lCDrhKPslrTspIxcclxuY29uc3QgU2VhcmNoSW5wdXQgPSBzdHlsZWQoSW5wdXQuU2VhcmNoKWBcclxuXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG5gXHJcblxyXG5jb25zdCBBcHBMYXlvdXQgPSAoe2NoaWxkcmVufSkgPT4ge1xyXG5cdC8vY29uc3QgW2lzTG9nZ2VkSW4sIHNldElzTG9nZ2VkSW5dID0gdXNlU3RhdGUoZmFsc2UpXHJcblx0Ly8g7Jyg7KCAIOyekOyytOulvCDrsJvslYTsmYDshJwg7Jyg7KCAIOyViOyXkOyEnCBpc0xvZ2dlZEluIOydhCDqtazsobDrtoTtlbQg7ZWg64u5XHJcblx0Ly9jb25zdCB7IGlzTG9nZ2VkSW4gfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcilcclxuXHRjb25zdCBpc0xvZ2dlZEluID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyLmlzTG9nZ2VkSW4pXHJcblxyXG5cdHJldHVybiAoXHJcblx0XHRcdDxkaXY+XHJcblx0XHRcdFx0PEdsb2JhbCAvPlxyXG5cdFx0XHRcdDxNZW51IG1vZGU9XCJob3Jpem9udGFsXCI+XHJcblx0XHRcdFx0XHQ8TWVudS5JdGVtIGtleT1cImhvbWVcIj5cclxuXHRcdFx0XHRcdFx0PExpbmsgaHJlZj1cIi9cIj5cclxuXHRcdFx0XHRcdFx0XHQ8YT7rhbjrk5zrsoTrk5w8L2E+XHJcblx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdDwvTWVudS5JdGVtPlxyXG5cdFx0XHRcdFx0PE1lbnUuSXRlbSBrZXk9XCJwcm9maWxlXCI+XHJcblx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvcHJvZmlsZVwiPlxyXG5cdFx0XHRcdFx0XHRcdDxhPu2UhOuhnO2VhDwvYT5cclxuXHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0PC9NZW51Lkl0ZW0+XHJcblx0XHRcdFx0XHQ8TWVudS5JdGVtIGtleT1cIm1haWxcIj5cclxuXHRcdFx0XHRcdFx0PFNlYXJjaElucHV0IGVudGVyQnV0dG9uLz5cclxuXHRcdFx0XHRcdDwvTWVudS5JdGVtPlxyXG5cdFx0XHRcdFx0PE1lbnUuSXRlbSBrZXk9XCJzaWdudXBcIj5cclxuXHRcdFx0XHRcdFx0PExpbmsgaHJlZj1cIi9zaWdudXBcIj5cclxuXHRcdFx0XHRcdFx0XHQ8YT7tmozsm5DqsIDsnoU8L2E+XHJcblx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdDwvTWVudS5JdGVtPlxyXG5cdFx0XHRcdDwvTWVudT5cclxuXHRcdFx0XHR7Lyrsu6zrn7wg7IKs7J207J2YIOqwhOqyqSBndXR0ZXIqL31cclxuXHRcdFx0XHQ8Um93IGd1dHRlcj17OH0+XHJcblx0XHRcdFx0XHR7LyphbnRkIGRlc2lnbiDsnYAg7IS466Gc7KSE7J2EIDI0IO2UveyFgOuhnCDrgpjriJQqL31cclxuXHRcdFx0XHRcdDxDb2wgeHM9ezI0fSBtZD17Nn0+XHJcblx0XHRcdFx0XHRcdHsvKmR1bW15IGRhdGEqL31cclxuXHRcdFx0XHRcdFx0ey8qe2lzTG9nZ2VkSW4gPyA8VXNlclByb2ZpbGUgc2V0SXNMb2dnZWRJbj17c2V0SXNMb2dnZWRJbn0vPiA6IDxMb2dpbkZvcm0gc2V0SXNMb2dnZWRJbj17c2V0SXNMb2dnZWRJbn0gLz59Ki99XHJcblx0XHRcdFx0XHRcdHtpc0xvZ2dlZEluID8gPFVzZXJQcm9maWxlLz4gOiA8TG9naW5Gb3JtLz59XHJcblx0XHRcdFx0XHQ8L0NvbD5cclxuXHRcdFx0XHRcdDxDb2wgeHM9ezI0fSBtZD17MTJ9PlxyXG5cdFx0XHRcdFx0XHR7Y2hpbGRyZW59IHsvKuyXrOq4sOuKlCBBcHBMYXlvdXQg7J2YIGNoaWxkcmVuKi99XHJcblx0XHRcdFx0XHQ8L0NvbD5cclxuXHRcdFx0XHRcdDxDb2wgeHM9ezI0fSBtZD17Nn0+XHJcblx0XHRcdFx0XHRcdDxhIGhyZWY9XCJodHRwczovL3FocmRtYWFrc2VuLmdpdGh1Yi5pby9cIiB0YXJnZXQ9eydfYmxhbmsnfSByZWw9XCJub3JlZmVycmVyIG5vb3BlbmVyXCI+XHJcblx0XHRcdFx0XHRcdFx0TWFkZSBpbiBWaXRhbWluXHJcblx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdDwvQ29sPlxyXG5cdFx0XHRcdDwvUm93PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHQpXHJcbn1cclxuXHJcbkFwcExheW91dC5wcm9wVHlwZXMgPSB7XHJcblx0Y2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcExheW91dFxyXG4iXSwic291cmNlUm9vdCI6IiJ9