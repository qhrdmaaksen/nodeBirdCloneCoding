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
    var formData = new FormData();
    imagePaths.forEach(function (p) {
      formData.append('image', i);
    });
    formData.append('content', text);
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_4__["ADD_POST_REQUEST"],
      data: data
    });
  }, [text]);
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
        lineNumber: 59,
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
        lineNumber: 60,
        columnNumber: 5
      }
    }), __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
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
        lineNumber: 62,
        columnNumber: 6
      }
    }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      onClick: onClickImageUpload,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
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
        lineNumber: 65,
        columnNumber: 6
      }
    }, "\uC9F9\uC9F9")), __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
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
            lineNumber: 73,
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
            lineNumber: 74,
            columnNumber: 10
          }
        }), __jsx("div", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 10
          }
        }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          onClick: onRemoveImage(i),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L1Bvc3RGb3JtLmpzIl0sIm5hbWVzIjpbIlBvc3RGb3JtIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInBvc3QiLCJpbWFnZVBhdGhzIiwiYWRkUG9zdERvbmUiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlSW5wdXQiLCJ0ZXh0Iiwib25DaGFuZ2VUZXh0Iiwic2V0VGV4dCIsInVzZUVmZmVjdCIsIm9uU3VibWl0IiwidXNlQ2FsbGJhY2siLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiZm9yRWFjaCIsInAiLCJhcHBlbmQiLCJpIiwidHlwZSIsIkFERF9QT1NUX1JFUVVFU1QiLCJkYXRhIiwiaW1hZ2VJbnB1dCIsInVzZVJlZiIsIm9uQ2xpY2tJbWFnZVVwbG9hZCIsImN1cnJlbnQiLCJjbGljayIsIm9uQ2hhbmdlSW1hZ2VzIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJmaWxlcyIsImltYWdlRm9ybURhdGEiLCJjYWxsIiwiZiIsIlVQTE9BRF9JTUFHRVNfUkVRVUVTVCIsIm9uUmVtb3ZlSW1hZ2UiLCJpbmRleCIsIlJFTU9WRV9JTUFHRSIsIm1hcmdpbiIsIm1hcCIsInYiLCJkaXNwbGF5Iiwid2lkdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFBQTs7QUFDdEIscUJBQWtDQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLElBQWpCO0FBQUEsR0FBRCxDQUE3QztBQUFBLE1BQU9DLFVBQVAsZ0JBQU9BLFVBQVA7QUFBQSxNQUFtQkMsV0FBbkIsZ0JBQW1CQSxXQUFuQjs7QUFDQSxNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztBQUNBLGtCQUFzQ0MsK0RBQVEsQ0FBQyxFQUFELENBQTlDO0FBQUE7QUFBQSxN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QywyQ0FBRDtBQUFRLGFBQU8sRUFBRUgsa0JBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0NBSEQsRUFJQyxNQUFDLDJDQUFEO0FBQVEsVUFBSSxFQUFDLFNBQWI7QUFBdUIsV0FBSyxFQUFFO0FBQUMsaUJBQU87QUFBUixPQUE5QjtBQUFnRCxjQUFRLEVBQUMsUUFBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFKRCxDQUZELEVBVUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFdEIsVUFBVSxDQUFDdUMsR0FBWCxDQUFlLFVBQUNDLENBQUQsRUFBSXhCLENBQUosRUFBVTtBQUN6QixhQUNFO0FBQ0E7QUFBSyxhQUFHLEVBQUV3QixDQUFWO0FBQWEsZUFBSyxFQUFFO0FBQUNDLG1CQUFPLEVBQUU7QUFBVixXQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0M7QUFBSyxhQUFHLGtDQUEyQkQsQ0FBM0IsQ0FBUjtBQUF3QyxlQUFLLEVBQUU7QUFBQ0UsaUJBQUssRUFBRTtBQUFSLFdBQS9DO0FBQWlFLGFBQUcsRUFBRUYsQ0FBdEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURELEVBRUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNDLE1BQUMsMkNBQUQ7QUFBUSxpQkFBTyxFQUFFTCxhQUFhLENBQUNuQixDQUFELENBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBREQsQ0FGRDtBQUZGO0FBU0EsS0FWQSxDQURGLENBVkQ7QUFGRjtBQTJCQSxDQTdFRDs7R0FBTXBCLFE7VUFDNkJDLHVELEVBQ2pCTSx1RCxFQUNxQkMsdUQ7OztLQUhqQ1IsUTtBQStFU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguY2ZmMzZkZGIzM2YxMjgwNDcyYWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Rm9ybSwgSW5wdXQsIEJ1dHRvbn0gZnJvbSAnYW50ZCdcclxuaW1wb3J0IFJlYWN0LCB7dXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7dXNlU2VsZWN0b3IsIHVzZURpc3BhdGNofSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHthZGRQb3N0LCBVUExPQURfSU1BR0VTX1JFUVVFU1QsIFJFTU9WRV9JTUFHRSwgQUREX1BPU1RfUkVRVUVTVH0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCdcclxuaW1wb3J0IHVzZUlucHV0IGZyb20gXCIuLi9ob29rcy91c2VJbnB1dFwiO1xyXG5cclxuY29uc3QgUG9zdEZvcm0gPSAoKSA9PiB7XHJcblx0Y29uc3Qge2ltYWdlUGF0aHMsIGFkZFBvc3REb25lfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9zdClcclxuXHRjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuXHRjb25zdCBbdGV4dCwgb25DaGFuZ2VUZXh0LCBzZXRUZXh0XSA9IHVzZUlucHV0KCcnKVxyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0aWYgKGFkZFBvc3REb25lKSB7XHJcblx0XHRcdHNldFRleHQoJycpXHJcblx0XHR9XHJcblx0fSwgW2FkZFBvc3REb25lXSlcclxuXHJcblx0Y29uc3Qgb25TdWJtaXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcblx0XHRjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG5cdFx0aW1hZ2VQYXRocy5mb3JFYWNoKChwKT0+e1xyXG5cdFx0XHRmb3JtRGF0YS5hcHBlbmQoJ2ltYWdlJywgaSlcclxuXHRcdH0pXHJcblx0XHRmb3JtRGF0YS5hcHBlbmQoJ2NvbnRlbnQnLCB0ZXh0KVxyXG5cdFx0ZGlzcGF0Y2goe1xyXG5cdFx0XHR0eXBlOiBBRERfUE9TVF9SRVFVRVNULFxyXG5cdFx0XHRkYXRhLFxyXG5cdFx0fSlcclxuXHR9LCBbdGV4dF0pXHJcblxyXG5cdGNvbnN0IGltYWdlSW5wdXQgPSB1c2VSZWYoKVxyXG5cdGNvbnN0IG9uQ2xpY2tJbWFnZVVwbG9hZCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuXHRcdGltYWdlSW5wdXQuY3VycmVudC5jbGljaygpO1xyXG5cdH0sIFtpbWFnZUlucHV0LmN1cnJlbnRdKVxyXG5cclxuXHRjb25zdCBvbkNoYW5nZUltYWdlcyA9IHVzZUNhbGxiYWNrKFxyXG5cdFx0XHQoZSkgPT4ge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCdpbWFnZXMgaW5mbyA6OiAnLCBlLnRhcmdldC5maWxlcykgLy8g7J2066+47KeA7JeQIOuMgO2VnCDsoJXrs7TqsIAg64u06rKo7J6I7J2MXHJcblx0XHRcdFx0Y29uc3QgaW1hZ2VGb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpOyAvLyBmb3JtIGRhdGEg66W8IG11bHRpcGFydCDtmJXsi53snLzroZwg7ISc67KE66GcIOuztOuDhFxyXG5cdFx0XHRcdFtdLmZvckVhY2guY2FsbChlLnRhcmdldC5maWxlcywgKGYpID0+IHsgLy8g67Cw7Je07JeQIGZvckVhY2gg66W8IOu5jOugpCDsk7DripQg6rKDXHJcblx0XHRcdFx0XHRpbWFnZUZvcm1EYXRhLmFwcGVuZCgnaW1hZ2UnLCBmKSAvLyBpbWFnZSDtgqTrnpEgZiDqsJJcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdGRpc3BhdGNoKHtcclxuXHRcdFx0XHRcdHR5cGU6IFVQTE9BRF9JTUFHRVNfUkVRVUVTVCxcclxuXHRcdFx0XHRcdGRhdGE6IGltYWdlRm9ybURhdGEsXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0W10sXHJcblx0KTtcclxuXHJcblx0Y29uc3Qgb25SZW1vdmVJbWFnZSA9IHVzZUNhbGxiYWNrKChpbmRleCk9PigpPT57XHJcblx0XHRkaXNwYXRjaCh7XHJcblx0XHRcdHR5cGU6IFJFTU9WRV9JTUFHRSxcclxuXHRcdFx0ZGF0YTogaW5kZXgsXHJcblx0XHR9KVxyXG5cdH0sIFtdKVxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0XHQvLyBwb3N0IEZvcm1cclxuXHRcdFx0PEZvcm0gc3R5bGU9e3ttYXJnaW46ICcxMHB4IDAgMjBweCd9fSBlbmNUeXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiIG9uRmluaXNoPXtvblN1Ym1pdH0+XHJcblx0XHRcdFx0PElucHV0LlRleHRBcmVhIHZhbHVlPXt0ZXh0fSBvbkNoYW5nZT17b25DaGFuZ2VUZXh0fSBtYXhMZW5ndGg9ezE0MH0gcGxhY2Vob2xkZXI9XCLslrTrlqQg7Iug6riw7ZWcIOydvOydtCDsnojsl4jrgpjsmpQ/XCIvPlxyXG5cdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImZpbGVcIiBuYW1lPVwiaW1hZ2VcIiBtdWx0aXBsZSBoaWRkZW4gcmVmPXtpbWFnZUlucHV0fVxyXG5cdFx0XHRcdFx0XHRcdFx0IG9uQ2hhbmdlPXtvbkNoYW5nZUltYWdlc30vPlxyXG5cdFx0XHRcdFx0PEJ1dHRvbiBvbkNsaWNrPXtvbkNsaWNrSW1hZ2VVcGxvYWR9PuydtOuvuOyngCDsl4XroZzrk5w8L0J1dHRvbj5cclxuXHRcdFx0XHRcdDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBzdHlsZT17e2Zsb2F0OiAncmlnaHQnfX0gaHRtbFR5cGU9XCJzdWJtaXRcIj5cclxuXHRcdFx0XHRcdFx07Ke57Ke5XHJcblx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0e2ltYWdlUGF0aHMubWFwKCh2LCBpKSA9PiB7XHJcblx0XHRcdFx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHRcdFx0XHQvLyDsnbTrr7jsp4Ag65Ox66Gd7J2EIO2WiOydhCDsi5wsIOydtOuvuOyngCDqsr3roZzqsIAg7KCA7J6l65CY66mwLCDrsJjrs7XrrLjsnLzroZwg7ZGc7Iuc7ZW07KSMXHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGtleT17dn0gc3R5bGU9e3tkaXNwbGF5OiAnaW5saW5lLWJsb2NrJ319PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz17YGh0dHA6Ly9sb2NhbGhvc3Q6MzA2NS8ke3Z9YH0gc3R5bGU9e3t3aWR0aDogJzIwMHB4J319IGFsdD17dn0vPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b24gb25DbGljaz17b25SZW1vdmVJbWFnZShpKX0+7KCc6rGwPC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdClcclxuXHRcdFx0XHRcdH0pfVxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L0Zvcm0+XHJcblx0KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Rm9ybVxyXG4iXSwic291cmNlUm9vdCI6IiJ9