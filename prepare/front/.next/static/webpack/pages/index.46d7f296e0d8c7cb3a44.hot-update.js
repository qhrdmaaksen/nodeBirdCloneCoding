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
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styled */ "./component/ImagesZoom/styled.js");
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

  return __jsx(_styled__WEBPACK_IMPORTED_MODULE_3__["Overlay"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 4
    }
  }, __jsx(_styled__WEBPACK_IMPORTED_MODULE_3__["Global"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }), __jsx(_styled__WEBPACK_IMPORTED_MODULE_3__["Header"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 6
    }
  }, "\uC0C1\uC138 \uC774\uBBF8\uC9C0"), __jsx(_styled__WEBPACK_IMPORTED_MODULE_3__["CloseBtn"], {
    onClick: onClose,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 6
    }
  }, "X")), __jsx(_styled__WEBPACK_IMPORTED_MODULE_3__["SlickWrapper"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 6
    }
  }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, {
    initialSlike: 0 // 첫번째를 어떤 이미지로 할지
    ,
    beforeChange: function beforeChange(slide, newSlide) {
      return setCurrentSlide(newSlide);
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
      lineNumber: 18,
      columnNumber: 7
    }
  }, images.map(function (v) {
    return __jsx(_styled__WEBPACK_IMPORTED_MODULE_3__["ImgWrapper"], {
      key: v.src,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 10
      }
    }, __jsx("img", {
      src: "http://localhost:3065/".concat(v.src),
      alt: v.src,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 11
      }
    }));
  })), __jsx(_styled__WEBPACK_IMPORTED_MODULE_3__["Indicator"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L0ltYWdlc1pvb20vaW5kZXguanMiXSwibmFtZXMiOlsiSW1hZ2VzWm9vbSIsImltYWdlcyIsIm9uQ2xvc2UiLCJ1c2VTdGF0ZSIsImN1cnJlbnRTbGlkZSIsInNldEN1cnJlbnRTbGlkZSIsInNsaWRlIiwibmV3U2xpZGUiLCJtYXAiLCJ2Iiwic3JjIiwibGVuZ3RoIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYXJyYXlPZiIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BQXVCO0FBQUE7O0FBQUEsTUFBckJDLE1BQXFCLFFBQXJCQSxNQUFxQjtBQUFBLE1BQWJDLE9BQWEsUUFBYkEsT0FBYTs7QUFDekMsa0JBQXdDQyxzREFBUSxDQUFDLENBQUQsQ0FBaEQ7QUFBQSxNQUFPQyxZQUFQO0FBQUEsTUFBcUJDLGVBQXJCOztBQUNBLFNBQ0UsTUFBQywrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsRUFFQyxNQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVDQURELEVBRUMsTUFBQyxnREFBRDtBQUFVLFdBQU8sRUFBRUgsT0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUZELENBRkQsRUFNQyxNQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxrREFBRDtBQUNFLGdCQUFZLEVBQUUsQ0FEaEIsQ0FDbUI7QUFEbkI7QUFFRSxnQkFBWSxFQUFFLHNCQUFDSSxLQUFELEVBQVFDLFFBQVI7QUFBQSxhQUFxQkYsZUFBZSxDQUFDRSxRQUFELENBQXBDO0FBQUEsS0FGaEIsQ0FFZ0U7QUFGaEU7QUFHRSxZQUFRLE1BSFYsQ0FHVztBQUhYO0FBSUUsVUFBTSxFQUFFLEtBSlYsQ0FJaUI7QUFKakI7QUFLRSxnQkFBWSxFQUFFLENBTGhCLENBS21CO0FBTG5CO0FBTUUsa0JBQWMsRUFBRSxDQU5sQixDQU1xQjtBQU5yQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBUUVOLE1BQU0sQ0FBQ08sR0FBUCxDQUFXLFVBQUNDLENBQUQ7QUFBQSxXQUNWLE1BQUMsa0RBQUQ7QUFBWSxTQUFHLEVBQUVBLENBQUMsQ0FBQ0MsR0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNDO0FBQUssU0FBRyxrQ0FBMkJELENBQUMsQ0FBQ0MsR0FBN0IsQ0FBUjtBQUE0QyxTQUFHLEVBQUVELENBQUMsQ0FBQ0MsR0FBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURELENBRFU7QUFBQSxHQUFYLENBUkYsQ0FERCxFQWVDLE1BQUMsaURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFDRU4sWUFBWSxHQUFHLENBRGpCLEVBRUUsR0FGRixPQUlFSCxNQUFNLENBQUNVLE1BSlQsQ0FERCxDQWZELENBREQsQ0FORCxDQURGO0FBbUNBLENBckNEOztHQUFNWCxVOztLQUFBQSxVO0FBc0NOQSxVQUFVLENBQUNZLFNBQVgsR0FBdUI7QUFDdEJYLFFBQU0sRUFBRVksaURBQVMsQ0FBQ0MsT0FBVixDQUFrQkQsaURBQVMsQ0FBQ0UsTUFBNUIsRUFBb0NDLFVBRHRCO0FBRXRCZCxTQUFPLEVBQUVXLGlEQUFTLENBQUNJLElBQVYsQ0FBZUQ7QUFGRixDQUF2QjtBQUllaEIseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNDZkN2YyOTZlMGQ4YzdjYjNhNDQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIlxyXG5pbXBvcnQgU2xpY2sgZnJvbSAncmVhY3Qtc2xpY2snXHJcbmltcG9ydCB7Q2xvc2VCdG4sIEdsb2JhbCwgSGVhZGVyLCBJbWdXcmFwcGVyLCBJbmRpY2F0b3IsIE92ZXJsYXksIFNsaWNrV3JhcHBlcn0gZnJvbSBcIi4vc3R5bGVkXCI7XHJcblxyXG5cclxuY29uc3QgSW1hZ2VzWm9vbSA9ICh7aW1hZ2VzLCBvbkNsb3NlfSkgPT4ge1xyXG5cdGNvbnN0IFtjdXJyZW50U2xpZGUsIHNldEN1cnJlbnRTbGlkZV0gPSB1c2VTdGF0ZSgwKVxyXG5cdHJldHVybiAoXHJcblx0XHRcdDxPdmVybGF5PlxyXG5cdFx0XHRcdDxHbG9iYWwvPlxyXG5cdFx0XHRcdDxIZWFkZXI+XHJcblx0XHRcdFx0XHQ8aDE+7IOB7IS4IOydtOuvuOyngDwvaDE+XHJcblx0XHRcdFx0XHQ8Q2xvc2VCdG4gb25DbGljaz17b25DbG9zZX0+WDwvQ2xvc2VCdG4+XHJcblx0XHRcdFx0PC9IZWFkZXI+XHJcblx0XHRcdFx0PFNsaWNrV3JhcHBlcj5cclxuXHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdDxTbGlja1xyXG5cdFx0XHRcdFx0XHRcdFx0aW5pdGlhbFNsaWtlPXswfSAvLyDssqvrsojsp7jrpbwg7Ja065akIOydtOuvuOyngOuhnCDtlaDsp4BcclxuXHRcdFx0XHRcdFx0XHRcdGJlZm9yZUNoYW5nZT17KHNsaWRlLCBuZXdTbGlkZSkgPT4gc2V0Q3VycmVudFNsaWRlKG5ld1NsaWRlKX0gLy8g7Iqs65287J2065Oc66W8IOuEmOq4sOuptCDrsojtmLjqsIAg7KCA7J6lXHJcblx0XHRcdFx0XHRcdFx0XHRpbmZpbml0ZSAvLyDrrLTtlZzrsJjrs7VcclxuXHRcdFx0XHRcdFx0XHRcdGFycm93cz17ZmFsc2V9IC8vIOydtOuvuOyngCDslpEg7JiGIO2BtOumre2VtOyEnCDrhJjquLDripQg7ZmU7IK07ZGcIOuyhO2KvCDsl4bslbBcclxuXHRcdFx0XHRcdFx0XHRcdHNsaWRlc1RvU2hvdz17MX0gLy/tlZzrsojsl5Ag7ZWY64KY7JSpIOuztOyXrOyjvOupsFxyXG5cdFx0XHRcdFx0XHRcdFx0c2xpZGVzVG9TY3JvbGw9ezF9IC8vIO2VnOuyiOyXkCDtlZjrgpjslKkg64SY6ri064ukXHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHR7aW1hZ2VzLm1hcCgodikgPT4gKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8SW1nV3JhcHBlciBrZXk9e3Yuc3JjfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz17YGh0dHA6Ly9sb2NhbGhvc3Q6MzA2NS8ke3Yuc3JjfWB9IGFsdD17di5zcmN9Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9JbWdXcmFwcGVyPlxyXG5cdFx0XHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdFx0XHQ8L1NsaWNrPlxyXG5cdFx0XHRcdFx0XHQ8SW5kaWNhdG9yPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXY+IHsvKuyEuOyepSDspJHsl5Ag66qHIOuyiOynuCDqsoPsnYQg67O06rOgIOyeiOuKlOyngCDqsIDrpqztgqTripQg7Iqk7YOA7J2865OcIOy7tO2PrOuEjO2KuCovfVxyXG5cdFx0XHRcdFx0XHRcdFx0e2N1cnJlbnRTbGlkZSArIDF9XHJcblx0XHRcdFx0XHRcdFx0XHR7JyAnfVxyXG5cdFx0XHRcdFx0XHRcdFx0L1xyXG5cdFx0XHRcdFx0XHRcdFx0e2ltYWdlcy5sZW5ndGh9XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvSW5kaWNhdG9yPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9TbGlja1dyYXBwZXI+XHJcblx0XHRcdDwvT3ZlcmxheT5cclxuXHQpXHJcbn1cclxuSW1hZ2VzWm9vbS5wcm9wVHlwZXMgPSB7XHJcblx0aW1hZ2VzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KS5pc1JlcXVpcmVkLFxyXG5cdG9uQ2xvc2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcclxufVxyXG5leHBvcnQgZGVmYXVsdCBJbWFnZXNab29tXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9