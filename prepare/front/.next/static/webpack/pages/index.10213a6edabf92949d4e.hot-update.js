webpackHotUpdate_N_E("pages/index",{

/***/ "./component/ImagesZoom/index.js":
/*!***************************************!*\
  !*** ./component/ImagesZoom/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
var _this = undefined,
    _jsxFileName = "D:\\intellijProjects\\react-nodebird\\prepare\\front\\component\\ImagesZoom\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var ImagesZoom = function ImagesZoom(_ref) {
  _s();

  var images = _ref.images,
      onClose = _ref.onClose;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      currentSlide = _useState[0],
      setCurrentSlide = _useState[1];

  return __jsx(Overlay, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 4
    }
  }, __jsx(Global, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }), __jsx(Header, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 6
    }
  }, "\uC0C1\uC138 \uC774\uBBF8\uC9C0"), __jsx(CloseBtn, {
    onClick: onClose,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 6
    }
  }, "X")), __jsx(SlickWrapper, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 6
    }
  }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, {
    initialSlike: 0 // 첫번째를 어떤 이미지로 할지
    ,
    afterChange: function afterChange(slide) {
      return setCurrentSlide(slide);
    } // 슬라이드를 넘기면 번호가 저장
    ,
    infinite: true // 무한반복
    ,
    arrows: false // 이미지 양 옆 클릭해서 넘기는 화살표 버튼 없앰
    ,
    slidesToShow: 1 //한번에 하나씩 보여주며
    ,
    slidesToScroll: 1 // 한번에 하나씩 넘긴다
    ,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, images.map(function (v) {
    return __jsx(ImgWrapper, {
      key: v.src,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 10
      }
    }, __jsx("img", {
      src: v.src,
      alt: v.src,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 11
      }
    }));
  })), __jsx(Indicator, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 8
    }
  }, " ", currentSlide + 1, ' ', "/", images.length)))));
};

_s(ImagesZoom, "VQw0KpRgltXDNPWBgmV3GhZXdQE=");

_c = ImagesZoom;
ImagesZoom.propTypes = {
  images: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object).isRequired,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ImagesZoom);

var _c;

$RefreshReg$(_c, "ImagesZoom");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L0ltYWdlc1pvb20vaW5kZXguanMiXSwibmFtZXMiOlsiSW1hZ2VzWm9vbSIsImltYWdlcyIsIm9uQ2xvc2UiLCJ1c2VTdGF0ZSIsImN1cnJlbnRTbGlkZSIsInNldEN1cnJlbnRTbGlkZSIsInNsaWRlIiwibWFwIiwidiIsInNyYyIsImxlbmd0aCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFycmF5T2YiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFJQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUF1QjtBQUFBOztBQUFBLE1BQXJCQyxNQUFxQixRQUFyQkEsTUFBcUI7QUFBQSxNQUFiQyxPQUFhLFFBQWJBLE9BQWE7O0FBQ3pDLGtCQUF3Q0Msc0RBQVEsQ0FBQyxDQUFELENBQWhEO0FBQUEsTUFBT0MsWUFBUDtBQUFBLE1BQXFCQyxlQUFyQjs7QUFDQSxTQUNFLE1BQUMsT0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxNQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxFQUVDLE1BQUMsTUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1Q0FERCxFQUVDLE1BQUMsUUFBRDtBQUFVLFdBQU8sRUFBRUgsT0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUZELENBRkQsRUFNQyxNQUFDLFlBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLGtEQUFEO0FBQ0UsZ0JBQVksRUFBRSxDQURoQixDQUNtQjtBQURuQjtBQUVFLGVBQVcsRUFBRSxxQkFBQ0ksS0FBRDtBQUFBLGFBQVdELGVBQWUsQ0FBQ0MsS0FBRCxDQUExQjtBQUFBLEtBRmYsQ0FFa0Q7QUFGbEQ7QUFHRSxZQUFRLE1BSFYsQ0FHVztBQUhYO0FBSUUsVUFBTSxFQUFFLEtBSlYsQ0FJaUI7QUFKakI7QUFLRSxnQkFBWSxFQUFFLENBTGhCLENBS21CO0FBTG5CO0FBTUUsa0JBQWMsRUFBRSxDQU5sQixDQU1xQjtBQU5yQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBUUVMLE1BQU0sQ0FBQ00sR0FBUCxDQUFXLFVBQUNDLENBQUQ7QUFBQSxXQUNWLE1BQUMsVUFBRDtBQUFZLFNBQUcsRUFBRUEsQ0FBQyxDQUFDQyxHQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0M7QUFBSyxTQUFHLEVBQUVELENBQUMsQ0FBQ0MsR0FBWjtBQUFpQixTQUFHLEVBQUVELENBQUMsQ0FBQ0MsR0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURELENBRFU7QUFBQSxHQUFYLENBUkYsQ0FERCxFQWVDLE1BQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUNFTCxZQUFZLEdBQUcsQ0FEakIsRUFFRSxHQUZGLE9BSUVILE1BQU0sQ0FBQ1MsTUFKVCxDQURELENBZkQsQ0FERCxDQU5ELENBREY7QUFtQ0EsQ0FyQ0Q7O0dBQU1WLFU7O0tBQUFBLFU7QUFzQ05BLFVBQVUsQ0FBQ1csU0FBWCxHQUF1QjtBQUN0QlYsUUFBTSxFQUFFVyxpREFBUyxDQUFDQyxPQUFWLENBQWtCRCxpREFBUyxDQUFDRSxNQUE1QixFQUFvQ0MsVUFEdEI7QUFFdEJiLFNBQU8sRUFBRVUsaURBQVMsQ0FBQ0ksSUFBVixDQUFlRDtBQUZGLENBQXZCO0FBSWVmLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjEwMjEzYTZlZGFiZjkyOTQ5ZDRlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCJcclxuaW1wb3J0IFNsaWNrIGZyb20gJ3JlYWN0LXNsaWNrJ1xyXG5pbXBvcnQgc3R5bGVkLCB7Y3JlYXRlR2xvYmFsU3R5bGV9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQge0Nsb3NlT3V0bGluZWR9IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xyXG5cclxuXHJcblxyXG5jb25zdCBJbWFnZXNab29tID0gKHtpbWFnZXMsIG9uQ2xvc2V9KSA9PiB7XHJcblx0Y29uc3QgW2N1cnJlbnRTbGlkZSwgc2V0Q3VycmVudFNsaWRlXSA9IHVzZVN0YXRlKDApXHJcblx0cmV0dXJuIChcclxuXHRcdFx0PE92ZXJsYXk+XHJcblx0XHRcdFx0PEdsb2JhbC8+XHJcblx0XHRcdFx0PEhlYWRlcj5cclxuXHRcdFx0XHRcdDxoMT7sg4HshLgg7J2066+47KeAPC9oMT5cclxuXHRcdFx0XHRcdDxDbG9zZUJ0biBvbkNsaWNrPXtvbkNsb3NlfT5YPC9DbG9zZUJ0bj5cclxuXHRcdFx0XHQ8L0hlYWRlcj5cclxuXHRcdFx0XHQ8U2xpY2tXcmFwcGVyPlxyXG5cdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0PFNsaWNrXHJcblx0XHRcdFx0XHRcdFx0XHRpbml0aWFsU2xpa2U9ezB9IC8vIOyyq+uyiOynuOulvCDslrTrlqQg7J2066+47KeA66GcIO2VoOyngFxyXG5cdFx0XHRcdFx0XHRcdFx0YWZ0ZXJDaGFuZ2U9eyhzbGlkZSkgPT4gc2V0Q3VycmVudFNsaWRlKHNsaWRlKX0gLy8g7Iqs65287J2065Oc66W8IOuEmOq4sOuptCDrsojtmLjqsIAg7KCA7J6lXHJcblx0XHRcdFx0XHRcdFx0XHRpbmZpbml0ZSAvLyDrrLTtlZzrsJjrs7VcclxuXHRcdFx0XHRcdFx0XHRcdGFycm93cz17ZmFsc2V9IC8vIOydtOuvuOyngCDslpEg7JiGIO2BtOumre2VtOyEnCDrhJjquLDripQg7ZmU7IK07ZGcIOuyhO2KvCDsl4bslbBcclxuXHRcdFx0XHRcdFx0XHRcdHNsaWRlc1RvU2hvdz17MX0gLy/tlZzrsojsl5Ag7ZWY64KY7JSpIOuztOyXrOyjvOupsFxyXG5cdFx0XHRcdFx0XHRcdFx0c2xpZGVzVG9TY3JvbGw9ezF9IC8vIO2VnOuyiOyXkCDtlZjrgpjslKkg64SY6ri064ukXHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHR7aW1hZ2VzLm1hcCgodikgPT4gKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8SW1nV3JhcHBlciBrZXk9e3Yuc3JjfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz17di5zcmN9IGFsdD17di5zcmN9Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9JbWdXcmFwcGVyPlxyXG5cdFx0XHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdFx0XHQ8L1NsaWNrPlxyXG5cdFx0XHRcdFx0XHQ8SW5kaWNhdG9yPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXY+IHsvKuyEuOyepSDspJHsl5Ag66qHIOuyiOynuCDqsoPsnYQg67O06rOgIOyeiOuKlOyngCDqsIDrpqztgqTripQg7Iqk7YOA7J2865OcIOy7tO2PrOuEjO2KuCovfVxyXG5cdFx0XHRcdFx0XHRcdFx0e2N1cnJlbnRTbGlkZSArIDF9XHJcblx0XHRcdFx0XHRcdFx0XHR7JyAnfVxyXG5cdFx0XHRcdFx0XHRcdFx0L1xyXG5cdFx0XHRcdFx0XHRcdFx0e2ltYWdlcy5sZW5ndGh9XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvSW5kaWNhdG9yPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9TbGlja1dyYXBwZXI+XHJcblx0XHRcdDwvT3ZlcmxheT5cclxuXHQpXHJcbn1cclxuSW1hZ2VzWm9vbS5wcm9wVHlwZXMgPSB7XHJcblx0aW1hZ2VzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KS5pc1JlcXVpcmVkLFxyXG5cdG9uQ2xvc2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcclxufVxyXG5leHBvcnQgZGVmYXVsdCBJbWFnZXNab29tXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9