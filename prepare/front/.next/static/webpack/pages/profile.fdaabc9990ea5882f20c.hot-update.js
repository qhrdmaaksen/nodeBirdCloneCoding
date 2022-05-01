webpackHotUpdate_N_E("pages/profile",{

/***/ "./component/FollowList.js":
/*!*********************************!*\
  !*** ./component/FollowList.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
var _this = undefined,
    _jsxFileName = "D:\\intellijProjects\\react-nodebird\\prepare\\front\\component\\FollowList.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





 // eslint-disable-next-line react/prop-types

var FollowList = function FollowList(_ref) {
  _s();

  var header = _ref.header,
      data = _ref.data,
      onClickMore = _ref.onClickMore,
      loading = _ref.loading;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  /*반복문 안에서 onClick 이있다면 반복문에 대한 데이터는 온클릭으로 넘김
  고차 함수를 사용해서 아이템에 대한 데이터를 보내고 싶을때 사용*/

  var onCancel = function onCancel(id) {
    return function () {
      // follow 취소
      if (header === '팔로잉') {
        dispatch({
          type: _reducers_user__WEBPACK_IMPORTED_MODULE_5__["UNFOLLOW_REQUEST"],
          data: id
        });
      }

      dispatch({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_5__["REMOVE_FOLLOWER_REQUEST"],
        data: id
      });
    };
  };

  return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["List"], {
    style: {
      marginBottom: 20
    },
    grind: {
      gutter: 4,
      xs: 2,
      sm: 2,
      md: 3,
      lg: 3,
      xl: 3,
      xxl: 4
    },
    size: "small",
    header: __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 14
      }
    }, header),
    loadMore: __jsx("div", {
      style: {
        textAlign: 'center',
        margin: '10px 0'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 7
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      onClick: onClickMore,
      loading: loading,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 8
      }
    }, "\uB354 \uBCF4\uAE30")),
    bordered: true,
    dataSource: data,
    renderItem: function renderItem(item) {
      return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["List"].Item, {
        style: {
          marginTop: 20
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 8
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Card"], {
        actions: [__jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["StopOutlined"], {
          key: "stop",
          onClick: onCancel(item.id),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 25
          }
        })],
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 9
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Card"].Meta, {
        description: item.nickname,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 10
        }
      })));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 4
    }
  });
};

_s(FollowList, "rgTLoBID190wEKCp9+G8W6F7A5M=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"]];
});

_c = FollowList;
FollowList.propTypes = {
  header: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
  onClickMore: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  loading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (FollowList);

var _c;

$RefreshReg$(_c, "FollowList");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L0ZvbGxvd0xpc3QuanMiXSwibmFtZXMiOlsiRm9sbG93TGlzdCIsImhlYWRlciIsImRhdGEiLCJvbkNsaWNrTW9yZSIsImxvYWRpbmciLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwib25DYW5jZWwiLCJpZCIsInR5cGUiLCJVTkZPTExPV19SRVFVRVNUIiwiUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1QiLCJtYXJnaW5Cb3R0b20iLCJndXR0ZXIiLCJ4cyIsInNtIiwibWQiLCJsZyIsInhsIiwieHhsIiwidGV4dEFsaWduIiwibWFyZ2luIiwiaXRlbSIsIm1hcmdpblRvcCIsIm5pY2tuYW1lIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImFycmF5IiwiZnVuYyIsImJvb2wiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FJQTs7QUFDQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUEwQztBQUFBOztBQUFBLE1BQXhDQyxNQUF3QyxRQUF4Q0EsTUFBd0M7QUFBQSxNQUFoQ0MsSUFBZ0MsUUFBaENBLElBQWdDO0FBQUEsTUFBMUJDLFdBQTBCLFFBQTFCQSxXQUEwQjtBQUFBLE1BQWJDLE9BQWEsUUFBYkEsT0FBYTtBQUM1RCxNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBRUE7QUFDRDs7QUFDQyxNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxFQUFEO0FBQUEsV0FBUSxZQUFNO0FBQUU7QUFDaEMsVUFBSVAsTUFBTSxLQUFLLEtBQWYsRUFBc0I7QUFDckJJLGdCQUFRLENBQUM7QUFDUkksY0FBSSxFQUFFQywrREFERTtBQUVSUixjQUFJLEVBQUVNO0FBRkUsU0FBRCxDQUFSO0FBSUE7O0FBQ0RILGNBQVEsQ0FBQztBQUNSSSxZQUFJLEVBQUVFLHNFQURFO0FBRVJULFlBQUksRUFBRU07QUFGRSxPQUFELENBQVI7QUFJQSxLQVhnQjtBQUFBLEdBQWpCOztBQVlBLFNBQ0UsTUFBQyx5Q0FBRDtBQUNFLFNBQUssRUFBRTtBQUFDSSxrQkFBWSxFQUFFO0FBQWYsS0FEVDtBQUVFLFNBQUssRUFBRTtBQUFDQyxZQUFNLEVBQUUsQ0FBVDtBQUFZQyxRQUFFLEVBQUUsQ0FBaEI7QUFBbUJDLFFBQUUsRUFBRSxDQUF2QjtBQUEwQkMsUUFBRSxFQUFFLENBQTlCO0FBQWlDQyxRQUFFLEVBQUUsQ0FBckM7QUFBd0NDLFFBQUUsRUFBRSxDQUE1QztBQUErQ0MsU0FBRyxFQUFFO0FBQXBELEtBRlQ7QUFHRSxRQUFJLEVBQUMsT0FIUDtBQUlFLFVBQU0sRUFBRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQU1sQixNQUFOLENBSlY7QUFLRSxZQUFRLEVBQ1A7QUFBSyxXQUFLLEVBQUU7QUFBQ21CLGlCQUFTLEVBQUUsUUFBWjtBQUFzQkMsY0FBTSxFQUFFO0FBQTlCLE9BQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNDLE1BQUMsMkNBQUQ7QUFBUSxhQUFPLEVBQUVsQixXQUFqQjtBQUE4QixhQUFPLEVBQUVDLE9BQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBREQsQ0FOSDtBQVVFLFlBQVEsTUFWVjtBQVdFLGNBQVUsRUFBRUYsSUFYZDtBQVlFLGNBQVUsRUFBRSxvQkFBQ29CLElBQUQ7QUFBQSxhQUNWLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0FBQVcsYUFBSyxFQUFFO0FBQUNDLG1CQUFTLEVBQUU7QUFBWixTQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0MsTUFBQyx5Q0FBRDtBQUFNLGVBQU8sRUFBRSxDQUFDLE1BQUMsOERBQUQ7QUFBYyxhQUFHLEVBQUMsTUFBbEI7QUFBeUIsaUJBQU8sRUFBRWhCLFFBQVEsQ0FBQ2UsSUFBSSxDQUFDZCxFQUFOLENBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBRCxDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDQyxNQUFDLHlDQUFELENBQU0sSUFBTjtBQUFXLG1CQUFXLEVBQUVjLElBQUksQ0FBQ0UsUUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURELENBREQsQ0FEVTtBQUFBLEtBWmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGO0FBc0JBLENBdkNEOztHQUFNeEIsVTtVQUNZTSx1RDs7O0tBRFpOLFU7QUF3Q05BLFVBQVUsQ0FBQ3lCLFNBQVgsR0FBdUI7QUFDdEJ4QixRQUFNLEVBQUV5QixpREFBUyxDQUFDQyxNQUFWLENBQWlCQyxVQURIO0FBRXRCMUIsTUFBSSxFQUFFd0IsaURBQVMsQ0FBQ0csS0FBVixDQUFnQkQsVUFGQTtBQUd0QnpCLGFBQVcsRUFBRXVCLGlEQUFTLENBQUNJLElBQVYsQ0FBZUYsVUFITjtBQUl0QnhCLFNBQU8sRUFBQ3NCLGlEQUFTLENBQUNLLElBQVYsQ0FBZUg7QUFKRCxDQUF2QjtBQU9lNUIseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZmlsZS5mZGFhYmM5OTkwZWE1ODgyZjIwYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHtMaXN0LCBCdXR0b24sIENhcmR9IGZyb20gJ2FudGQnXG5pbXBvcnQge1N0b3BPdXRsaW5lZH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnXG5pbXBvcnQge3VzZURpc3BhdGNofSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7Rk9MTE9XX1JFUVVFU1QsIFVORk9MTE9XX1JFUVVFU1QsIFJFTU9WRV9GT0xMT1dFUl9SRVFVRVNUfSBmcm9tIFwiLi4vcmVkdWNlcnMvdXNlclwiO1xuXG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9wcm9wLXR5cGVzXG5jb25zdCBGb2xsb3dMaXN0ID0gKHtoZWFkZXIsIGRhdGEsIG9uQ2xpY2tNb3JlLCBsb2FkaW5nfSkgPT4ge1xuXHRjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcblxuXHQvKuuwmOuzteusuCDslYjsl5DshJwgb25DbGljayDsnbTsnojri6TrqbQg67CY67O166y47JeQIOuMgO2VnCDrjbDsnbTthLDripQg7Jio7YG066at7Jy866GcIOuEmOq5gFxuXHTqs6DssKgg7ZWo7IiY66W8IOyCrOyaqe2VtOyEnCDslYTsnbTthZzsl5Ag64yA7ZWcIOuNsOydtO2EsOulvCDrs7TrgrTqs6Ag7Iu27J2E65WMIOyCrOyaqSovXG5cdGNvbnN0IG9uQ2FuY2VsID0gKGlkKSA9PiAoKSA9PiB7IC8vIGZvbGxvdyDst6jshoxcblx0XHRpZiAoaGVhZGVyID09PSAn7YyU66Gc7J6JJykge1xuXHRcdFx0ZGlzcGF0Y2goe1xuXHRcdFx0XHR0eXBlOiBVTkZPTExPV19SRVFVRVNULFxuXHRcdFx0XHRkYXRhOiBpZCxcblx0XHRcdH0pXG5cdFx0fVxuXHRcdGRpc3BhdGNoKHtcblx0XHRcdHR5cGU6IFJFTU9WRV9GT0xMT1dFUl9SRVFVRVNULFxuXHRcdFx0ZGF0YTogaWQsXG5cdFx0fSlcblx0fVxuXHRyZXR1cm4gKFxuXHRcdFx0PExpc3Rcblx0XHRcdFx0XHRzdHlsZT17e21hcmdpbkJvdHRvbTogMjB9fVxuXHRcdFx0XHRcdGdyaW5kPXt7Z3V0dGVyOiA0LCB4czogMiwgc206IDIsIG1kOiAzLCBsZzogMywgeGw6IDMsIHh4bDogNH19XG5cdFx0XHRcdFx0c2l6ZT1cInNtYWxsXCJcblx0XHRcdFx0XHRoZWFkZXI9ezxkaXY+e2hlYWRlcn08L2Rpdj59XG5cdFx0XHRcdFx0bG9hZE1vcmU9e1xuXHRcdFx0XHRcdFx0PGRpdiBzdHlsZT17e3RleHRBbGlnbjogJ2NlbnRlcicsIG1hcmdpbjogJzEwcHggMCd9fT5cblx0XHRcdFx0XHRcdFx0PEJ1dHRvbiBvbkNsaWNrPXtvbkNsaWNrTW9yZX0gbG9hZGluZz17bG9hZGluZ30+642UIOuztOq4sDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJvcmRlcmVkXG5cdFx0XHRcdFx0ZGF0YVNvdXJjZT17ZGF0YX1cblx0XHRcdFx0XHRyZW5kZXJJdGVtPXsoaXRlbSkgPT4gKFxuXHRcdFx0XHRcdFx0XHQ8TGlzdC5JdGVtIHN0eWxlPXt7bWFyZ2luVG9wOiAyMH19PlxuXHRcdFx0XHRcdFx0XHRcdDxDYXJkIGFjdGlvbnM9e1s8U3RvcE91dGxpbmVkIGtleT1cInN0b3BcIiBvbkNsaWNrPXtvbkNhbmNlbChpdGVtLmlkKX0vPl19PlxuXHRcdFx0XHRcdFx0XHRcdFx0PENhcmQuTWV0YSBkZXNjcmlwdGlvbj17aXRlbS5uaWNrbmFtZX0vPlxuXHRcdFx0XHRcdFx0XHRcdDwvQ2FyZD5cblx0XHRcdFx0XHRcdFx0PC9MaXN0Lkl0ZW0+XG5cdFx0XHRcdFx0KX1cblx0XHRcdC8+XG5cdClcbn1cbkZvbGxvd0xpc3QucHJvcFR5cGVzID0ge1xuXHRoZWFkZXI6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblx0ZGF0YTogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG5cdG9uQ2xpY2tNb3JlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuXHRsb2FkaW5nOlByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvbGxvd0xpc3RcbiJdLCJzb3VyY2VSb290IjoiIn0=