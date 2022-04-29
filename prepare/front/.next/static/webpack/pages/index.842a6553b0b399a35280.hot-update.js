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
    return dispatch({
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L1Bvc3RGb3JtLmpzIl0sIm5hbWVzIjpbIlBvc3RGb3JtIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInBvc3QiLCJpbWFnZVBhdGhzIiwiYWRkUG9zdERvbmUiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlSW5wdXQiLCJ0ZXh0Iiwib25DaGFuZ2VUZXh0Iiwic2V0VGV4dCIsInVzZUVmZmVjdCIsIm9uU3VibWl0IiwidXNlQ2FsbGJhY2siLCJ0cmltIiwiYWxlcnQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiZm9yRWFjaCIsInAiLCJhcHBlbmQiLCJ0eXBlIiwiQUREX1BPU1RfUkVRVUVTVCIsImRhdGEiLCJpbWFnZUlucHV0IiwidXNlUmVmIiwib25DbGlja0ltYWdlVXBsb2FkIiwiY3VycmVudCIsImNsaWNrIiwib25DaGFuZ2VJbWFnZXMiLCJlIiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsImZpbGVzIiwiaW1hZ2VGb3JtRGF0YSIsImNhbGwiLCJmIiwiVVBMT0FEX0lNQUdFU19SRVFVRVNUIiwib25SZW1vdmVJbWFnZSIsImluZGV4IiwiUkVNT1ZFX0lNQUdFIiwibWFyZ2luIiwibWFwIiwidiIsImkiLCJkaXNwbGF5Iiwid2lkdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFBQTs7QUFDdEIscUJBQWtDQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLElBQWpCO0FBQUEsR0FBRCxDQUE3QztBQUFBLE1BQU9DLFVBQVAsZ0JBQU9BLFVBQVA7QUFBQSxNQUFtQkMsV0FBbkIsZ0JBQW1CQSxXQUFuQjs7QUFDQSxNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztBQUNBLGtCQUFzQ0MsK0RBQVEsQ0FBQyxFQUFELENB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QkMsdUQsRUFDakJNLHVELEVBQ3FCQyx1RDs7O0tBSGpDUixRO0FBa0ZTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44NDJhNjU1M2IwYjM5OWEzNTI4MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtGb3JtLCBJbnB1dCwgQnV0dG9ufSBmcm9tICdhbnRkJ1xyXG5pbXBvcnQgUmVhY3QsIHt1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHt1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2h9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQge2FkZFBvc3QsIFVQTE9BRF9JTUFHRVNfUkVRVUVTVCwgUkVNT1ZFX0lNQUdFLCBBRERfUE9TVF9SRVFVRVNUfSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0J1xyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSBcIi4uL2hvb2tzL3VzZUlucHV0XCI7XHJcblxyXG5jb25zdCBQb3N0Rm9ybSA9ICgpID0+IHtcclxuXHRjb25zdCB7aW1hZ2VQYXRocywgYWRkUG9zdERvbmV9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KVxyXG5cdGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG5cdGNvbnN0IFt0ZXh0LCBvbkNoYW5nZVRleHQsIHNldFRleHRdID0gdXNlSW5wdXQoJycpXHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRpZiAoYWRkUG9zdERvbmUpIHtcclxuXHRcdFx0c2V0VGV4dCgnJylcclxuXHRcdH1cclxuXHR9LCBbYWRkUG9zdERvbmVdKVxyXG5cclxuXHRjb25zdCBvblN1Ym1pdCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuXHRcdGlmICghdGV4dCB8fCAhdGV4dC50cmltKCkpIHsgLy8g6rKM7Iuc6riA7J20IOyXhuuLpOuptCDqsozsi5zquIAg7J6R7ISxIGFsZXJ0XHJcblx0XHRcdHJldHVybiBhbGVydCgn6rKM7Iuc6riA7J2EIOyekeyEse2VmOyEuOyalC4nKVxyXG5cdFx0fVxyXG5cdFx0Y29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuXHRcdGltYWdlUGF0aHMuZm9yRWFjaCgocCk9PntcclxuXHRcdFx0Zm9ybURhdGEuYXBwZW5kKCdpbWFnZScsIHApXHJcblx0XHR9KVxyXG5cdFx0Zm9ybURhdGEuYXBwZW5kKCdjb250ZW50JywgdGV4dClcclxuXHRcdHJldHVybiBkaXNwYXRjaCh7XHJcblx0XHRcdHR5cGU6IEFERF9QT1NUX1JFUVVFU1QsXHJcblx0XHRcdGRhdGE6IGZvcm1EYXRhLFxyXG5cdFx0fSlcclxuXHR9LCBbdGV4dCwgaW1hZ2VQYXRoc10pXHJcblxyXG5cdGNvbnN0IGltYWdlSW5wdXQgPSB1c2VSZWYoKVxyXG5cdGNvbnN0IG9uQ2xpY2tJbWFnZVVwbG9hZCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuXHRcdGltYWdlSW5wdXQuY3VycmVudC5jbGljaygpO1xyXG5cdH0sIFtpbWFnZUlucHV0LmN1cnJlbnRdKVxyXG5cclxuXHRjb25zdCBvbkNoYW5nZUltYWdlcyA9IHVzZUNhbGxiYWNrKFxyXG5cdFx0XHQoZSkgPT4ge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCdpbWFnZXMgaW5mbyA6OiAnLCBlLnRhcmdldC5maWxlcykgLy8g7J2066+47KeA7JeQIOuMgO2VnCDsoJXrs7TqsIAg64u06rKo7J6I7J2MXHJcblx0XHRcdFx0Y29uc3QgaW1hZ2VGb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpOyAvLyBmb3JtIGRhdGEg66W8IG11bHRpcGFydCDtmJXsi53snLzroZwg7ISc67KE66GcIOuztOuDhFxyXG5cdFx0XHRcdFtdLmZvckVhY2guY2FsbChlLnRhcmdldC5maWxlcywgKGYpID0+IHsgLy8g67Cw7Je07JeQIGZvckVhY2gg66W8IOu5jOugpCDsk7DripQg6rKDXHJcblx0XHRcdFx0XHRpbWFnZUZvcm1EYXRhLmFwcGVuZCgnaW1hZ2UnLCBmKSAvLyBpbWFnZSDtgqTrnpEgZiDqsJJcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdGRpc3BhdGNoKHtcclxuXHRcdFx0XHRcdHR5cGU6IFVQTE9BRF9JTUFHRVNfUkVRVUVTVCxcclxuXHRcdFx0XHRcdGRhdGE6IGltYWdlRm9ybURhdGEsXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0W10sXHJcblx0KTtcclxuXHJcblx0Y29uc3Qgb25SZW1vdmVJbWFnZSA9IHVzZUNhbGxiYWNrKChpbmRleCk9PigpPT57XHJcblx0XHRkaXNwYXRjaCh7XHJcblx0XHRcdHR5cGU6IFJFTU9WRV9JTUFHRSxcclxuXHRcdFx0ZGF0YTogaW5kZXgsXHJcblx0XHR9KVxyXG5cdH0sIFtdKVxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0XHQvLyBwb3N0IEZvcm1cclxuXHRcdFx0PEZvcm0gc3R5bGU9e3ttYXJnaW46ICcxMHB4IDAgMjBweCd9fSBlbmNUeXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiIG9uRmluaXNoPXtvblN1Ym1pdH0+XHJcblx0XHRcdFx0PElucHV0LlRleHRBcmVhIHZhbHVlPXt0ZXh0fSBvbkNoYW5nZT17b25DaGFuZ2VUZXh0fSBtYXhMZW5ndGg9ezE0MH0gcGxhY2Vob2xkZXI9XCLslrTrlqQg7Iug6riw7ZWcIOydvOydtCDsnojsl4jrgpjsmpQ/XCIvPlxyXG5cdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImZpbGVcIiBuYW1lPVwiaW1hZ2VcIiBtdWx0aXBsZSBoaWRkZW4gcmVmPXtpbWFnZUlucHV0fVxyXG5cdFx0XHRcdFx0XHRcdFx0IG9uQ2hhbmdlPXtvbkNoYW5nZUltYWdlc30vPlxyXG5cdFx0XHRcdFx0PEJ1dHRvbiBvbkNsaWNrPXtvbkNsaWNrSW1hZ2VVcGxvYWR9PuydtOuvuOyngCDsl4XroZzrk5w8L0J1dHRvbj5cclxuXHRcdFx0XHRcdDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBzdHlsZT17e2Zsb2F0OiAncmlnaHQnfX0gaHRtbFR5cGU9XCJzdWJtaXRcIj5cclxuXHRcdFx0XHRcdFx07Ke57Ke5XHJcblx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0e2ltYWdlUGF0aHMubWFwKCh2LCBpKSA9PiB7XHJcblx0XHRcdFx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHRcdFx0XHQvLyDsnbTrr7jsp4Ag65Ox66Gd7J2EIO2WiOydhCDsi5wsIOydtOuvuOyngCDqsr3roZzqsIAg7KCA7J6l65CY66mwLCDrsJjrs7XrrLjsnLzroZwg7ZGc7Iuc7ZW07KSMXHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGtleT17dn0gc3R5bGU9e3tkaXNwbGF5OiAnaW5saW5lLWJsb2NrJ319PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz17YGh0dHA6Ly9sb2NhbGhvc3Q6MzA2NS8ke3Z9YH0gc3R5bGU9e3t3aWR0aDogJzIwMHB4J319IGFsdD17dn0vPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b24gb25DbGljaz17b25SZW1vdmVJbWFnZShpKX0+7KCc6rGwPC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdClcclxuXHRcdFx0XHRcdH0pfVxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L0Zvcm0+XHJcblx0KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Rm9ybVxyXG4iXSwic291cmNlUm9vdCI6IiJ9