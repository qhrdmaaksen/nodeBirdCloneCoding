webpackHotUpdate_N_E("pages/index",{

/***/ "./component/PostForm.js":
/*!*******************************!*\
  !*** ./component/PostForm.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");


var _this = undefined,
    _jsxFileName = "D:\\intellijProjects\\react-nodebird\\prepare\\front\\component\\PostForm.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






var PostForm = function PostForm() {
  _s();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.post;
  }),
      imagePaths = _useSelector.imagePaths,
      addPostDone = _useSelector.addPostDone;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();

  var _useInput = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_5__["default"])(''),
      _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput, 3),
      text = _useInput2[0],
      onChangeText = _useInput2[1],
      setText = _useInput2[2];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (addPostDone) {
      setText('');
    }
  }, [addPostDone]);
  var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    if (!text || !text.trim()) {
      // 게시글이 없다면 게시글 작성 alert 
      return alert('게시글을 작성하세요.');
    }

    var formData = new FormData();
    imagePaths.forEach(function (p) {
      formData.append('image', p);
    });
    formData.append('content', text);
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_4__["ADD_POST_REQUEST"],
      data: formData
    });
  }, [text, imagePaths]);
  var imageInput = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  var onClickImageUpload = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    imageInput.current.click();
  }, [imageInput.current]);
  var onChangeImages = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (e) {
    console.log('images info :: ', e.target.files); // 이미지에 대한 정보가 담겨있음

    var imageFormData = new FormData(); // form data 를 multipart 형식으로 서버로 보냄

    [].forEach.call(e.target.files, function (f) {
      // 배열에 forEach 를 빌려 쓰는 것
      imageFormData.append('image', f); // image 키랑 f 값
    });
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_4__["UPLOAD_IMAGES_REQUEST"],
      data: imageFormData
    });
  }, []);
  var onRemoveImage = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (index) {
    return function () {
      dispatch({
        type: _reducers_post__WEBPACK_IMPORTED_MODULE_4__["REMOVE_IMAGE"],
        data: index
      });
    };
  }, []);
  return (// post Form
    __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
      style: {
        margin: '10px 0 20px'
      },
      encType: "multipart/form-data",
      onFinish: onSubmit,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 4
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].TextArea, {
      value: text,
      onChange: onChangeText,
      maxLength: 140,
      placeholder: "\uC5B4\uB5A4 \uC2E0\uAE30\uD55C \uC77C\uC774 \uC788\uC5C8\uB098\uC694?",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 5
      }
    }), __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 5
      }
    }, __jsx("input", {
      type: "file",
      name: "image",
      multiple: true,
      hidden: true,
      ref: imageInput,
      onChange: onChangeImages,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 6
      }
    }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      onClick: onClickImageUpload,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 6
      }
    }, "\uC774\uBBF8\uC9C0 \uC5C5\uB85C\uB4DC"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      type: "primary",
      style: {
        "float": 'right'
      },
      htmlType: "submit",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 6
      }
    }, "\uC9F9\uC9F9")), __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 5
      }
    }, imagePaths.map(function (v, i) {
      return (// 이미지 등록을 했을 시, 이미지 경로가 저장되며, 반복문으로 표시해줌
        __jsx("div", {
          key: v,
          style: {
            display: 'inline-block'
          },
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 9
          }
        }, __jsx("img", {
          src: "http://localhost:3065/".concat(v),
          style: {
            width: '200px'
          },
          alt: v,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 10
          }
        }), __jsx("div", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 10
          }
        }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          onClick: onRemoveImage(i),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 11
          }
        }, "\uC81C\uAC70")))
      );
    })))
  );
};

_s(PostForm, "3FK2zRZPNgg8Zyo/ctJDr8anxN0=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_5__["default"]];
});

_c = PostForm;
/* harmony default export */ __webpack_exports__["default"] = (PostForm);

var _c;

$RefreshReg$(_c, "PostForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L1Bvc3RGb3JtLmpzIl0sIm5hbWVzIjpbIlBvc3RGb3JtIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInBvc3QiLCJpbWFnZVBhdGhzIiwiYWRkUG9zdERvbmUiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlSW5wdXQiLCJ0ZXh0Iiwib25DaGFuZ2VUZXh0Iiwic2V0VGV4dCIsInVzZUVmZmVjdCIsIm9uU3VibWl0IiwidXNlQ2FsbGJhY2siLCJ0cmltIiwiYWxlcnQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiZm9yRWFjaCIsInAiLCJhcHBlbmQiLCJ0eXBlIiwiQUREX1BPU1RfUkVRVUVTVCIsImRhdGEiLCJpbWFnZUlucHV0IiwidXNlUmVmIiwib25DbGlja0ltYWdlVXBsb2FkIiwiY3VycmVudCIsImNsaWNrIiwib25DaGFuZ2VJbWFnZXMiLCJlIiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsImZpbGVzIiwiaW1hZ2VGb3JtRGF0YSIsImNhbGwiLCJmIiwiVVBMT0FEX0lNQUdFU19SRVFVRVNUIiwib25SZW1vdmVJbWFnZSIsImluZGV4IiwiUkVNT1ZFX0lNQUdFIiwibWFyZ2luIiwibWFwIiwidiIsImkiLCJkaXNwbGF5Iiwid2lkdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFBQTs7QUFDdEIscUJBQWtDQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLElBQWpCO0FBQUEsR0FBRCxDQUE3QztBQUFBLE1BQU9DLFVBQVAsZ0JBQU9BLFVBQVA7QUFBQSxNQUFtQkMsV0FBbkIsZ0JBQW1CQSxXQUFuQjs7QUFDQSxNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztBQUNBLGtCQUFzQ0MsK0RBQVEsQ0FBQyxFQUFELENB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LEVBQ2pCTSx1RCxFQUNxQkMsdUQ7OztLQUhqQ1IsUTtBQWtGU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZDExOTE2MmJhZmM5NGNjNmVkYmUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Rm9ybSwgSW5wdXQsIEJ1dHRvbn0gZnJvbSAnYW50ZCdcclxuaW1wb3J0IFJlYWN0LCB7dXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7dXNlU2VsZWN0b3IsIHVzZURpc3BhdGNofSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHthZGRQb3N0LCBVUExPQURfSU1BR0VTX1JFUVVFU1QsIFJFTU9WRV9JTUFHRSwgQUREX1BPU1RfUkVRVUVTVH0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCdcclxuaW1wb3J0IHVzZUlucHV0IGZyb20gXCIuLi9ob29rcy91c2VJbnB1dFwiO1xyXG5cclxuY29uc3QgUG9zdEZvcm0gPSAoKSA9PiB7XHJcblx0Y29uc3Qge2ltYWdlUGF0aHMsIGFkZFBvc3REb25lfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9zdClcclxuXHRjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuXHRjb25zdCBbdGV4dCwgb25DaGFuZ2VUZXh0LCBzZXRUZXh0XSA9IHVzZUlucHV0KCcnKVxyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0aWYgKGFkZFBvc3REb25lKSB7XHJcblx0XHRcdHNldFRleHQoJycpXHJcblx0XHR9XHJcblx0fSwgW2FkZFBvc3REb25lXSlcclxuXHJcblx0Y29uc3Qgb25TdWJtaXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcblx0XHRpZiAoIXRleHQgfHwgIXRleHQudHJpbSgpKSB7IC8vIOqyjOyLnOq4gOydtCDsl4bri6TrqbQg6rKM7Iuc6riAIOyekeyEsSBhbGVydCBcclxuXHRcdFx0cmV0dXJuIGFsZXJ0KCfqsozsi5zquIDsnYQg7J6R7ISx7ZWY7IS47JqULicpXHJcblx0XHR9XHJcblx0XHRjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG5cdFx0aW1hZ2VQYXRocy5mb3JFYWNoKChwKT0+e1xyXG5cdFx0XHRmb3JtRGF0YS5hcHBlbmQoJ2ltYWdlJywgcClcclxuXHRcdH0pXHJcblx0XHRmb3JtRGF0YS5hcHBlbmQoJ2NvbnRlbnQnLCB0ZXh0KVxyXG5cdFx0ZGlzcGF0Y2goe1xyXG5cdFx0XHR0eXBlOiBBRERfUE9TVF9SRVFVRVNULFxyXG5cdFx0XHRkYXRhOiBmb3JtRGF0YSxcclxuXHRcdH0pXHJcblx0fSwgW3RleHQsIGltYWdlUGF0aHNdKVxyXG5cclxuXHRjb25zdCBpbWFnZUlucHV0ID0gdXNlUmVmKClcclxuXHRjb25zdCBvbkNsaWNrSW1hZ2VVcGxvYWQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcblx0XHRpbWFnZUlucHV0LmN1cnJlbnQuY2xpY2soKTtcclxuXHR9LCBbaW1hZ2VJbnB1dC5jdXJyZW50XSlcclxuXHJcblx0Y29uc3Qgb25DaGFuZ2VJbWFnZXMgPSB1c2VDYWxsYmFjayhcclxuXHRcdFx0KGUpID0+IHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZygnaW1hZ2VzIGluZm8gOjogJywgZS50YXJnZXQuZmlsZXMpIC8vIOydtOuvuOyngOyXkCDrjIDtlZwg7KCV67O06rCAIOuLtOqyqOyeiOydjFxyXG5cdFx0XHRcdGNvbnN0IGltYWdlRm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTsgLy8gZm9ybSBkYXRhIOulvCBtdWx0aXBhcnQg7ZiV7Iud7Jy866GcIOyEnOuyhOuhnCDrs7Trg4RcclxuXHRcdFx0XHRbXS5mb3JFYWNoLmNhbGwoZS50YXJnZXQuZmlsZXMsIChmKSA9PiB7IC8vIOuwsOyXtOyXkCBmb3JFYWNoIOulvCDruYzroKQg7JOw64qUIOqyg1xyXG5cdFx0XHRcdFx0aW1hZ2VGb3JtRGF0YS5hcHBlbmQoJ2ltYWdlJywgZikgLy8gaW1hZ2Ug7YKk656RIGYg6rCSXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHRkaXNwYXRjaCh7XHJcblx0XHRcdFx0XHR0eXBlOiBVUExPQURfSU1BR0VTX1JFUVVFU1QsXHJcblx0XHRcdFx0XHRkYXRhOiBpbWFnZUZvcm1EYXRhLFxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdFtdLFxyXG5cdCk7XHJcblxyXG5cdGNvbnN0IG9uUmVtb3ZlSW1hZ2UgPSB1c2VDYWxsYmFjaygoaW5kZXgpPT4oKT0+e1xyXG5cdFx0ZGlzcGF0Y2goe1xyXG5cdFx0XHR0eXBlOiBSRU1PVkVfSU1BR0UsXHJcblx0XHRcdGRhdGE6IGluZGV4LFxyXG5cdFx0fSlcclxuXHR9LCBbXSlcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdFx0Ly8gcG9zdCBGb3JtXHJcblx0XHRcdDxGb3JtIHN0eWxlPXt7bWFyZ2luOiAnMTBweCAwIDIwcHgnfX0gZW5jVHlwZT1cIm11bHRpcGFydC9mb3JtLWRhdGFcIiBvbkZpbmlzaD17b25TdWJtaXR9PlxyXG5cdFx0XHRcdDxJbnB1dC5UZXh0QXJlYSB2YWx1ZT17dGV4dH0gb25DaGFuZ2U9e29uQ2hhbmdlVGV4dH0gbWF4TGVuZ3RoPXsxNDB9IHBsYWNlaG9sZGVyPVwi7Ja065akIOyLoOq4sO2VnCDsnbzsnbQg7J6I7JeI64KY7JqUP1wiLz5cclxuXHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJmaWxlXCIgbmFtZT1cImltYWdlXCIgbXVsdGlwbGUgaGlkZGVuIHJlZj17aW1hZ2VJbnB1dH1cclxuXHRcdFx0XHRcdFx0XHRcdCBvbkNoYW5nZT17b25DaGFuZ2VJbWFnZXN9Lz5cclxuXHRcdFx0XHRcdDxCdXR0b24gb25DbGljaz17b25DbGlja0ltYWdlVXBsb2FkfT7snbTrr7jsp4Ag7JeF66Gc65OcPC9CdXR0b24+XHJcblx0XHRcdFx0XHQ8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgc3R5bGU9e3tmbG9hdDogJ3JpZ2h0J319IGh0bWxUeXBlPVwic3VibWl0XCI+XHJcblx0XHRcdFx0XHRcdOynueynuVxyXG5cdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdHtpbWFnZVBhdGhzLm1hcCgodiwgaSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdFx0XHRcdFx0Ly8g7J2066+47KeAIOuTseuhneydhCDtlojsnYQg7IucLCDsnbTrr7jsp4Ag6rK966Gc6rCAIOyggOyepeuQmOupsCwg67CY67O166y47Jy866GcIO2RnOyLnO2VtOykjFxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBrZXk9e3Z9IHN0eWxlPXt7ZGlzcGxheTogJ2lubGluZS1ibG9jayd9fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9e2BodHRwOi8vbG9jYWxob3N0OjMwNjUvJHt2fWB9IHN0eWxlPXt7d2lkdGg6ICcyMDBweCd9fSBhbHQ9e3Z9Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uIG9uQ2xpY2s9e29uUmVtb3ZlSW1hZ2UoaSl9PuygnOqxsDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQpXHJcblx0XHRcdFx0XHR9KX1cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9Gb3JtPlxyXG5cdClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdEZvcm1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==