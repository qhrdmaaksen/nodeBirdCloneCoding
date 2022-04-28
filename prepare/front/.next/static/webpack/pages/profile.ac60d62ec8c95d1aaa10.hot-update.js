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
      dispatch({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_5__["UNFOLLOW_REQUEST"],
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
        lineNumber: 23,
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
        lineNumber: 25,
        columnNumber: 7
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
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
          lineNumber: 32,
          columnNumber: 8
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Card"], {
        actions: [__jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["StopOutlined"], {
          key: "stop",
          onClick: onCancel(item.id),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 25
          }
        })],
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 9
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Card"].Meta, {
        description: item.nickname,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 10
        }
      })));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L0ZvbGxvd0xpc3QuanMiXSwibmFtZXMiOlsiRm9sbG93TGlzdCIsImhlYWRlciIsImRhdGEiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwib25DYW5jZWwiLCJpZCIsInR5cGUiLCJVTkZPTExPV19SRVFVRVNUIiwibWFyZ2luQm90dG9tIiwiZ3V0dGVyIiwieHMiLCJzbSIsIm1kIiwibGciLCJ4bCIsInh4bCIsInRleHRBbGlnbiIsIm1hcmdpbiIsIml0ZW0iLCJtYXJnaW5Ub3AiLCJuaWNrbmFtZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJhcnJheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUlBOztBQUNBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BQW9CO0FBQUE7O0FBQUEsTUFBbEJDLE1BQWtCLFFBQWxCQSxNQUFrQjtBQUFBLE1BQVZDLElBQVUsUUFBVkEsSUFBVTtBQUN0QyxNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztBQUNBLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLEVBQUQ7QUFBQSxXQUFRLFlBQU07QUFDOUJILGNBQVEsQ0FBQztBQUNSSSxZQUFJLEVBQUVDLCtEQURFO0FBRVJOLFlBQUksRUFBRUk7QUFGRSxPQUFELENBQVI7QUFJQSxLQUxnQjtBQUFBLEdBQWpCOztBQU1BLFNBQ0UsTUFBQyx5Q0FBRDtBQUNFLFNBQUssRUFBRTtBQUFDRyxrQkFBWSxFQUFFO0FBQWYsS0FEVDtBQUVFLFNBQUssRUFBRTtBQUFDQyxZQUFNLEVBQUUsQ0FBVDtBQUFZQyxRQUFFLEVBQUUsQ0FBaEI7QUFBbUJDLFFBQUUsRUFBRSxDQUF2QjtBQUEwQkMsUUFBRSxFQUFFLENBQTlCO0FBQWlDQyxRQUFFLEVBQUUsQ0FBckM7QUFBd0NDLFFBQUUsRUFBRSxDQUE1QztBQUErQ0MsU0FBRyxFQUFFO0FBQXBELEtBRlQ7QUFHRSxRQUFJLEVBQUMsT0FIUDtBQUlFLFVBQU0sRUFBRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQU1mLE1BQU4sQ0FKVjtBQUtFLFlBQVEsRUFDUDtBQUFLLFdBQUssRUFBRTtBQUFDZ0IsaUJBQVMsRUFBRSxRQUFaO0FBQXNCQyxjQUFNLEVBQUU7QUFBOUIsT0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0MsTUFBQywyQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQURELENBTkg7QUFVRSxZQUFRLE1BVlY7QUFXRSxjQUFVLEVBQUVoQixJQVhkO0FBWUUsY0FBVSxFQUFFLG9CQUFDaUIsSUFBRDtBQUFBLGFBQ1YsTUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBVyxhQUFLLEVBQUU7QUFBQ0MsbUJBQVMsRUFBRTtBQUFaLFNBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDQyxNQUFDLHlDQUFEO0FBQU0sZUFBTyxFQUFFLENBQUMsTUFBQyw4REFBRDtBQUFjLGFBQUcsRUFBQyxNQUFsQjtBQUF5QixpQkFBTyxFQUFFZixRQUFRLENBQUNjLElBQUksQ0FBQ2IsRUFBTixDQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQUQsQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0MsTUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBVyxtQkFBVyxFQUFFYSxJQUFJLENBQUNFLFFBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERCxDQURELENBRFU7QUFBQSxLQVpkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERjtBQXNCQSxDQTlCRDs7R0FBTXJCLFU7VUFDWUksdUQ7OztLQURaSixVO0FBK0JOQSxVQUFVLENBQUNzQixTQUFYLEdBQXVCO0FBQ3RCckIsUUFBTSxFQUFFc0IsaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkMsVUFESDtBQUV0QnZCLE1BQUksRUFBRXFCLGlEQUFTLENBQUNHLEtBQVYsQ0FBZ0JEO0FBRkEsQ0FBdkI7QUFLZXpCLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGUuYWM2MGQ2MmVjOGM5NWQxYWFhMTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7TGlzdCwgQnV0dG9uLCBDYXJkfSBmcm9tICdhbnRkJ1xuaW1wb3J0IHtTdG9wT3V0bGluZWR9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJ1xuaW1wb3J0IHt1c2VEaXNwYXRjaH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQge0ZPTExPV19SRVFVRVNULCBVTkZPTExPV19SRVFVRVNUfSBmcm9tIFwiLi4vcmVkdWNlcnMvdXNlclwiO1xuXG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9wcm9wLXR5cGVzXG5jb25zdCBGb2xsb3dMaXN0ID0gKHtoZWFkZXIsIGRhdGF9KSA9PiB7XG5cdGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxuXHRjb25zdCBvbkNhbmNlbCA9IChpZCkgPT4gKCkgPT4ge1xuXHRcdGRpc3BhdGNoKHtcblx0XHRcdHR5cGU6IFVORk9MTE9XX1JFUVVFU1QsXG5cdFx0XHRkYXRhOiBpZCxcblx0XHR9KVxuXHR9XG5cdHJldHVybiAoXG5cdFx0XHQ8TGlzdFxuXHRcdFx0XHRcdHN0eWxlPXt7bWFyZ2luQm90dG9tOiAyMH19XG5cdFx0XHRcdFx0Z3JpbmQ9e3tndXR0ZXI6IDQsIHhzOiAyLCBzbTogMiwgbWQ6IDMsIGxnOiAzLCB4bDogMywgeHhsOiA0fX1cblx0XHRcdFx0XHRzaXplPVwic21hbGxcIlxuXHRcdFx0XHRcdGhlYWRlcj17PGRpdj57aGVhZGVyfTwvZGl2Pn1cblx0XHRcdFx0XHRsb2FkTW9yZT17XG5cdFx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7dGV4dEFsaWduOiAnY2VudGVyJywgbWFyZ2luOiAnMTBweCAwJ319PlxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uPuuNlCDrs7TquLA8L0J1dHRvbj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRib3JkZXJlZFxuXHRcdFx0XHRcdGRhdGFTb3VyY2U9e2RhdGF9XG5cdFx0XHRcdFx0cmVuZGVySXRlbT17KGl0ZW0pID0+IChcblx0XHRcdFx0XHRcdFx0PExpc3QuSXRlbSBzdHlsZT17e21hcmdpblRvcDogMjB9fT5cblx0XHRcdFx0XHRcdFx0XHQ8Q2FyZCBhY3Rpb25zPXtbPFN0b3BPdXRsaW5lZCBrZXk9XCJzdG9wXCIgb25DbGljaz17b25DYW5jZWwoaXRlbS5pZCl9Lz5dfT5cblx0XHRcdFx0XHRcdFx0XHRcdDxDYXJkLk1ldGEgZGVzY3JpcHRpb249e2l0ZW0ubmlja25hbWV9Lz5cblx0XHRcdFx0XHRcdFx0XHQ8L0NhcmQ+XG5cdFx0XHRcdFx0XHRcdDwvTGlzdC5JdGVtPlxuXHRcdFx0XHRcdCl9XG5cdFx0XHQvPlxuXHQpXG59XG5Gb2xsb3dMaXN0LnByb3BUeXBlcyA9IHtcblx0aGVhZGVyOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdGRhdGE6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxufVxuXG5leHBvcnQgZGVmYXVsdCBGb2xsb3dMaXN0XG4iXSwic291cmNlUm9vdCI6IiJ9