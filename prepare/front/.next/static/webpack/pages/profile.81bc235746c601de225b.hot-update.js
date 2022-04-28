webpackHotUpdate_N_E("pages/profile",{

/***/ "./component/NicknameEditForm.js":
/*!***************************************!*\
  !*** ./component/NicknameEditForm.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");


var _this = undefined,
    _jsxFileName = "D:\\intellijProjects\\react-nodebird\\prepare\\front\\component\\NicknameEditForm.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var NicknameEditForm = function NicknameEditForm() {
  _s();

  var style = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return {
      marginBottom: '28px',
      border: '1px solid #d9d9d9',
      padding: '28px'
    };
  }, []);

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me;

  var _useInput = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_5__["default"])((me === null || me === void 0 ? void 0 : me.nickname) || ''),
      _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput, 2),
      nickname = _useInput2[0],
      onChangeNickname = _useInput2[1];

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["CHANGE_NICKNAME_REQUEST"],
      data: nickname
    });
  }, [nickname]);
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    style: style,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 4
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"].Search, {
    value: nickname,
    onChange: onChangeNickname,
    addonBefore: "\uB2C9\uB124\uC784",
    enterButton: "\uC218\uC815",
    onSearch: onSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }));
};

_s(NicknameEditForm, "Zha6UXZU2tN4mcvoFW9oxl563JE=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_5__["default"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"]];
});

_c = NicknameEditForm;
/* harmony default export */ __webpack_exports__["default"] = (NicknameEditForm);

var _c;

$RefreshReg$(_c, "NicknameEditForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L05pY2tuYW1lRWRpdEZvcm0uanMiXSwibmFtZXMiOlsiTmlja25hbWVFZGl0Rm9ybSIsInN0eWxlIiwidXNlTWVtbyIsIm1hcmdpbkJvdHRvbSIsImJvcmRlciIsInBhZGRpbmciLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm1lIiwidXNlSW5wdXQiLCJuaWNrbmFtZSIsIm9uQ2hhbmdlTmlja25hbWUiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwib25TdWJtaXQiLCJ1c2VDYWxsYmFjayIsInR5cGUiLCJDSEFOR0VfTklDS05BTUVfUkVRVUVTVCIsImRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLElBQU1BLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsR0FBTTtBQUFBOztBQUM5QixNQUFNQyxLQUFLLEdBQUdDLHFEQUFPLENBQUM7QUFBQSxXQUFPO0FBQUNDLGtCQUFZLEVBQUUsTUFBZjtBQUF1QkMsWUFBTSxFQUFFLG1CQUEvQjtBQUFvREMsYUFBTyxFQUFFO0FBQTdELEtBQVA7QUFBQSxHQUFELEVBQStFLEVBQS9FLENBQXJCOztBQUNBLHFCQUFZQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFVQSxLQUFLLENBQUNDLElBQWhCO0FBQUEsR0FBRCxDQUF2QjtBQUFBLE1BQU9DLEVBQVAsZ0JBQU9BLEVBQVA7O0FBQ0Esa0JBQXFDQywrREFBUSxDQUFDLENBQUFELEVBQUUsU0FBRixJQUFBQSxFQUFFLFdBQUYsWUFBQUEsRUFBRSxDQUFFRSxRQUFKLEtBQWdCLEVBQWpCLENBQTdDO0FBQUE7QUFBQSxNQUFPQSxRQUFQO0FBQUEsTUFBaUJDLGdCQUFqQjs7QUFDQSxNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHQyx5REFBVyxDQUMxQixZQUFNO0FBQ0xILFlBQVEsQ0FBQztBQUNSSSxVQUFJLEVBQUVDLHNFQURFO0FBRVJDLFVBQUksRUFBRVI7QUFGRSxLQUFELENBQVI7QUFJQSxHQU55QixFQU8xQixDQUFDQSxRQUFELENBUDBCLENBQTVCO0FBU0EsU0FDRSxNQUFDLHlDQUFEO0FBQ0UsU0FBSyxFQUFFVixLQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FHQyxNQUFDLDBDQUFELENBQU8sTUFBUDtBQUNFLFNBQUssRUFBRVUsUUFEVDtBQUVFLFlBQVEsRUFBRUMsZ0JBRlo7QUFHRSxlQUFXLEVBQUMsb0JBSGQ7QUFJRSxlQUFXLEVBQUMsY0FKZDtBQUtFLFlBQVEsRUFBRUcsUUFMWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEQsQ0FERjtBQWFBLENBM0JEOztHQUFNZixnQjtVQUVPTSx1RCxFQUN5QkksdUQsRUFDcEJJLHVEOzs7S0FKWmQsZ0I7QUE0QlNBLCtFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGUuODFiYzIzNTc0NmM2MDFkZTIyNWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUNhbGxiYWNrLCB1c2VNZW1vfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7Rm9ybSwgSW5wdXR9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQge3VzZURpc3BhdGNoLCB1c2VTZWxlY3Rvcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7Q0hBTkdFX05JQ0tOQU1FX1JFUVVFU1R9IGZyb20gXCIuLi9yZWR1Y2Vycy91c2VyXCI7XHJcbmltcG9ydCB1c2VJbnB1dCBmcm9tIFwiLi4vaG9va3MvdXNlSW5wdXRcIjtcclxuXHJcblxyXG5jb25zdCBOaWNrbmFtZUVkaXRGb3JtID0gKCkgPT4ge1xyXG5cdGNvbnN0IHN0eWxlID0gdXNlTWVtbygoKSA9PiAoe21hcmdpbkJvdHRvbTogJzI4cHgnLCBib3JkZXI6ICcxcHggc29saWQgI2Q5ZDlkOScsIHBhZGRpbmc6ICcyOHB4J30pLCBbXSlcclxuXHRjb25zdCB7bWV9PSB1c2VTZWxlY3Rvcigoc3RhdGUpPT4gc3RhdGUudXNlcilcclxuXHRjb25zdCBbbmlja25hbWUsIG9uQ2hhbmdlTmlja25hbWVdID0gdXNlSW5wdXQobWU/Lm5pY2tuYW1lIHx8ICcnKVxyXG5cdGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG5cdGNvbnN0IG9uU3VibWl0ID0gdXNlQ2FsbGJhY2soXHJcblx0XHRcdCgpID0+IHtcclxuXHRcdFx0XHRkaXNwYXRjaCh7XHJcblx0XHRcdFx0XHR0eXBlOiBDSEFOR0VfTklDS05BTUVfUkVRVUVTVCxcclxuXHRcdFx0XHRcdGRhdGE6IG5pY2tuYW1lLFxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdFtuaWNrbmFtZV0sXHJcblx0KTtcclxuXHRyZXR1cm4gKFxyXG5cdFx0XHQ8Rm9ybVxyXG5cdFx0XHRcdFx0c3R5bGU9e3N0eWxlfVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PElucHV0LlNlYXJjaFxyXG5cdFx0XHRcdFx0XHR2YWx1ZT17bmlja25hbWV9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtvbkNoYW5nZU5pY2tuYW1lfVxyXG5cdFx0XHRcdFx0XHRhZGRvbkJlZm9yZT1cIuuLieuEpOyehFwiXHJcblx0XHRcdFx0XHRcdGVudGVyQnV0dG9uPVwi7IiY7KCVXCJcclxuXHRcdFx0XHRcdFx0b25TZWFyY2g9e29uU3VibWl0fVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdDwvRm9ybT5cclxuXHQpXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTmlja25hbWVFZGl0Rm9ybSJdLCJzb3VyY2VSb290IjoiIn0=