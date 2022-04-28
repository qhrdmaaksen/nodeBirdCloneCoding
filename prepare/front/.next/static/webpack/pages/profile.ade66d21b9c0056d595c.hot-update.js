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
      data = _ref.data;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();

  var onCancel = function onCancel(id) {
    return function () {
      // follow 취소
      if (header === '팔로잉') {
        dispatch({
          type: _reducers_user__WEBPACK_IMPORTED_MODULE_5__["UNFOLLOW_REQUEST"],
          data: id
        });
        dispatch({
          type: REMOVE_FOLLOWER_REQUEST,
          data: id
        });
      }
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
        lineNumber: 30,
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
        lineNumber: 32,
        columnNumber: 7
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
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
          lineNumber: 39,
          columnNumber: 8
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Card"], {
        actions: [__jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["StopOutlined"], {
          key: "stop",
          onClick: onCancel(item.id),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 25
          }
        })],
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 9
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Card"].Meta, {
        description: item.nickname,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 10
        }
      })));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
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
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L0ZvbGxvd0xpc3QuanMiXSwibmFtZXMiOlsiRm9sbG93TGlzdCIsImhlYWRlciIsImRhdGEiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwib25DYW5jZWwiLCJpZCIsInR5cGUiLCJVTkZPTExPV19SRVFVRVNUIiwiUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1QiLCJtYXJnaW5Cb3R0b20iLCJndXR0ZXIiLCJ4cyIsInNtIiwibWQiLCJsZyIsInhsIiwieHhsIiwidGV4dEFsaWduIiwibWFyZ2luIiwiaXRlbSIsIm1hcmdpblRvcCIsIm5pY2tuYW1lIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImFycmF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBSUE7O0FBQ0EsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FBb0I7QUFBQTs7QUFBQSxNQUFsQkMsTUFBa0IsUUFBbEJBLE1BQWtCO0FBQUEsTUFBVkMsSUFBVSxRQUFWQSxJQUFVO0FBQ3RDLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBRUEsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsRUFBRDtBQUFBLFdBQVEsWUFBTTtBQUFFO0FBQ2hDLFVBQUlMLE1BQU0sS0FBSyxLQUFmLEVBQXFCO0FBQ3JCRSxnQkFBUSxDQUFDO0FBQ1JJLGNBQUksRUFBRUMsK0RBREU7QUFFUk4sY0FBSSxFQUFFSTtBQUZFLFNBQUQsQ0FBUjtBQUlBSCxnQkFBUSxDQUFDO0FBQ1JJLGNBQUksRUFBRUUsdUJBREU7QUFFUlAsY0FBSSxFQUFFSTtBQUZFLFNBQUQsQ0FBUjtBQUlDO0FBQ0QsS0FYZ0I7QUFBQSxHQUFqQjs7QUFZQSxTQUNFLE1BQUMseUNBQUQ7QUFDRSxTQUFLLEVBQUU7QUFBQ0ksa0JBQVksRUFBRTtBQUFmLEtBRFQ7QUFFRSxTQUFLLEVBQUU7QUFBQ0MsWUFBTSxFQUFFLENBQVQ7QUFBWUMsUUFBRSxFQUFFLENBQWhCO0FBQW1CQyxRQUFFLEVBQUUsQ0FBdkI7QUFBMEJDLFFBQUUsRUFBRSxDQUE5QjtBQUFpQ0MsUUFBRSxFQUFFLENBQXJDO0FBQXdDQyxRQUFFLEVBQUUsQ0FBNUM7QUFBK0NDLFNBQUcsRUFBRTtBQUFwRCxLQUZUO0FBR0UsUUFBSSxFQUFDLE9BSFA7QUFJRSxVQUFNLEVBQUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFNaEIsTUFBTixDQUpWO0FBS0UsWUFBUSxFQUNQO0FBQUssV0FBSyxFQUFFO0FBQUNpQixpQkFBUyxFQUFFLFFBQVo7QUFBc0JDLGNBQU0sRUFBRTtBQUE5QixPQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDQyxNQUFDLDJDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBREQsQ0FOSDtBQVVFLFlBQVEsTUFWVjtBQVdFLGNBQVUsRUFBRWpCLElBWGQ7QUFZRSxjQUFVLEVBQUUsb0JBQUNrQixJQUFEO0FBQUEsYUFDVixNQUFDLHlDQUFELENBQU0sSUFBTjtBQUFXLGFBQUssRUFBRTtBQUFDQyxtQkFBUyxFQUFFO0FBQVosU0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNDLE1BQUMseUNBQUQ7QUFBTSxlQUFPLEVBQUUsQ0FBQyxNQUFDLDhEQUFEO0FBQWMsYUFBRyxFQUFDLE1BQWxCO0FBQXlCLGlCQUFPLEVBQUVoQixRQUFRLENBQUNlLElBQUksQ0FBQ2QsRUFBTixDQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQUQsQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0MsTUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBVyxtQkFBVyxFQUFFYyxJQUFJLENBQUNFLFFBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERCxDQURELENBRFU7QUFBQSxLQVpkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERjtBQXNCQSxDQXJDRDs7R0FBTXRCLFU7VUFDWUksdUQ7OztLQURaSixVO0FBc0NOQSxVQUFVLENBQUN1QixTQUFYLEdBQXVCO0FBQ3RCdEIsUUFBTSxFQUFFdUIsaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkMsVUFESDtBQUV0QnhCLE1BQUksRUFBRXNCLGlEQUFTLENBQUNHLEtBQVYsQ0FBZ0JEO0FBRkEsQ0FBdkI7QUFLZTFCLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGUuYWRlNjZkMjFiOWMwMDU2ZDU5NWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7TGlzdCwgQnV0dG9uLCBDYXJkfSBmcm9tICdhbnRkJ1xuaW1wb3J0IHtTdG9wT3V0bGluZWR9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJ1xuaW1wb3J0IHt1c2VEaXNwYXRjaH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQge0ZPTExPV19SRVFVRVNULCBVTkZPTExPV19SRVFVRVNUfSBmcm9tIFwiLi4vcmVkdWNlcnMvdXNlclwiO1xuXG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9wcm9wLXR5cGVzXG5jb25zdCBGb2xsb3dMaXN0ID0gKHtoZWFkZXIsIGRhdGF9KSA9PiB7XG5cdGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxuXG5cdGNvbnN0IG9uQ2FuY2VsID0gKGlkKSA9PiAoKSA9PiB7IC8vIGZvbGxvdyDst6jshoxcblx0XHRpZiAoaGVhZGVyID09PSAn7YyU66Gc7J6JJyl7XG5cdFx0ZGlzcGF0Y2goe1xuXHRcdFx0dHlwZTogVU5GT0xMT1dfUkVRVUVTVCxcblx0XHRcdGRhdGE6IGlkLFxuXHRcdH0pXG5cdFx0ZGlzcGF0Y2goe1xuXHRcdFx0dHlwZTogUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1QsXG5cdFx0XHRkYXRhOiBpZCxcblx0XHR9KVxuXHRcdH1cblx0fVxuXHRyZXR1cm4gKFxuXHRcdFx0PExpc3Rcblx0XHRcdFx0XHRzdHlsZT17e21hcmdpbkJvdHRvbTogMjB9fVxuXHRcdFx0XHRcdGdyaW5kPXt7Z3V0dGVyOiA0LCB4czogMiwgc206IDIsIG1kOiAzLCBsZzogMywgeGw6IDMsIHh4bDogNH19XG5cdFx0XHRcdFx0c2l6ZT1cInNtYWxsXCJcblx0XHRcdFx0XHRoZWFkZXI9ezxkaXY+e2hlYWRlcn08L2Rpdj59XG5cdFx0XHRcdFx0bG9hZE1vcmU9e1xuXHRcdFx0XHRcdFx0PGRpdiBzdHlsZT17e3RleHRBbGlnbjogJ2NlbnRlcicsIG1hcmdpbjogJzEwcHggMCd9fT5cblx0XHRcdFx0XHRcdFx0PEJ1dHRvbj7rjZQg67O06riwPC9CdXR0b24+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ym9yZGVyZWRcblx0XHRcdFx0XHRkYXRhU291cmNlPXtkYXRhfVxuXHRcdFx0XHRcdHJlbmRlckl0ZW09eyhpdGVtKSA9PiAoXG5cdFx0XHRcdFx0XHRcdDxMaXN0Lkl0ZW0gc3R5bGU9e3ttYXJnaW5Ub3A6IDIwfX0+XG5cdFx0XHRcdFx0XHRcdFx0PENhcmQgYWN0aW9ucz17WzxTdG9wT3V0bGluZWQga2V5PVwic3RvcFwiIG9uQ2xpY2s9e29uQ2FuY2VsKGl0ZW0uaWQpfS8+XX0+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8Q2FyZC5NZXRhIGRlc2NyaXB0aW9uPXtpdGVtLm5pY2tuYW1lfS8+XG5cdFx0XHRcdFx0XHRcdFx0PC9DYXJkPlxuXHRcdFx0XHRcdFx0XHQ8L0xpc3QuSXRlbT5cblx0XHRcdFx0XHQpfVxuXHRcdFx0Lz5cblx0KVxufVxuRm9sbG93TGlzdC5wcm9wVHlwZXMgPSB7XG5cdGhlYWRlcjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXHRkYXRhOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9sbG93TGlzdFxuIl0sInNvdXJjZVJvb3QiOiIifQ==