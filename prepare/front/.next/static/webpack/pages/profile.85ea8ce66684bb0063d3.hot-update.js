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

  var onClick = function onClick() {
    dispatch({
      type: UNFOLLOW_REQUEST
    });
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
        lineNumber: 22,
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
        lineNumber: 24,
        columnNumber: 7
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
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
          lineNumber: 31,
          columnNumber: 8
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Card"], {
        actions: [__jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["StopOutlined"], {
          key: "stop",
          onClick: onClick(item.id),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 25
          }
        })],
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 9
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Card"].Meta, {
        description: item.nickname,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 10
        }
      })));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L0ZvbGxvd0xpc3QuanMiXSwibmFtZXMiOlsiRm9sbG93TGlzdCIsImhlYWRlciIsImRhdGEiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwib25DbGljayIsInR5cGUiLCJVTkZPTExPV19SRVFVRVNUIiwibWFyZ2luQm90dG9tIiwiZ3V0dGVyIiwieHMiLCJzbSIsIm1kIiwibGciLCJ4bCIsInh4bCIsInRleHRBbGlnbiIsIm1hcmdpbiIsIml0ZW0iLCJtYXJnaW5Ub3AiLCJpZCIsIm5pY2tuYW1lIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImFycmF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBSUE7O0FBQ0EsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FBb0I7QUFBQTs7QUFBQSxNQUFsQkMsTUFBa0IsUUFBbEJBLE1BQWtCO0FBQUEsTUFBVkMsSUFBVSxRQUFWQSxJQUFVO0FBQ3RDLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBQ0EsTUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUNyQkYsWUFBUSxDQUFDO0FBQ1JHLFVBQUksRUFBRUM7QUFERSxLQUFELENBQVI7QUFHQSxHQUpEOztBQUtBLFNBQ0UsTUFBQyx5Q0FBRDtBQUNFLFNBQUssRUFBRTtBQUFDQyxrQkFBWSxFQUFFO0FBQWYsS0FEVDtBQUVFLFNBQUssRUFBRTtBQUFDQyxZQUFNLEVBQUUsQ0FBVDtBQUFZQyxRQUFFLEVBQUUsQ0FBaEI7QUFBbUJDLFFBQUUsRUFBRSxDQUF2QjtBQUEwQkMsUUFBRSxFQUFFLENBQTlCO0FBQWlDQyxRQUFFLEVBQUUsQ0FBckM7QUFBd0NDLFFBQUUsRUFBRSxDQUE1QztBQUErQ0MsU0FBRyxFQUFFO0FBQXBELEtBRlQ7QUFHRSxRQUFJLEVBQUMsT0FIUDtBQUlFLFVBQU0sRUFBRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQU1kLE1BQU4sQ0FKVjtBQUtFLFlBQVEsRUFDUDtBQUFLLFdBQUssRUFBRTtBQUFDZSxpQkFBUyxFQUFFLFFBQVo7QUFBc0JDLGNBQU0sRUFBRTtBQUE5QixPQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDQyxNQUFDLDJDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBREQsQ0FOSDtBQVVFLFlBQVEsTUFWVjtBQVdFLGNBQVUsRUFBRWYsSUFYZDtBQVlFLGNBQVUsRUFBRSxvQkFBQ2dCLElBQUQ7QUFBQSxhQUNWLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0FBQVcsYUFBSyxFQUFFO0FBQUNDLG1CQUFTLEVBQUU7QUFBWixTQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0MsTUFBQyx5Q0FBRDtBQUFNLGVBQU8sRUFBRSxDQUFDLE1BQUMsOERBQUQ7QUFBYyxhQUFHLEVBQUMsTUFBbEI7QUFBeUIsaUJBQU8sRUFBRWQsT0FBTyxDQUFDYSxJQUFJLENBQUNFLEVBQU4sQ0FBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFELENBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNDLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0FBQVcsbUJBQVcsRUFBRUYsSUFBSSxDQUFDRyxRQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREQsQ0FERCxDQURVO0FBQUEsS0FaZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREY7QUFzQkEsQ0E3QkQ7O0dBQU1yQixVO1VBQ1lJLHVEOzs7S0FEWkosVTtBQThCTkEsVUFBVSxDQUFDc0IsU0FBWCxHQUF1QjtBQUN0QnJCLFFBQU0sRUFBRXNCLGlEQUFTLENBQUNDLE1BQVYsQ0FBaUJDLFVBREg7QUFFdEJ2QixNQUFJLEVBQUVxQixpREFBUyxDQUFDRyxLQUFWLENBQWdCRDtBQUZBLENBQXZCO0FBS2V6Qix5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlLjg1ZWE4Y2U2NjY4NGJiMDA2M2QzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQge0xpc3QsIEJ1dHRvbiwgQ2FyZH0gZnJvbSAnYW50ZCdcbmltcG9ydCB7U3RvcE91dGxpbmVkfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucydcbmltcG9ydCB7dXNlRGlzcGF0Y2h9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHtGT0xMT1dfUkVRVUVTVH0gZnJvbSBcIi4uL3JlZHVjZXJzL3VzZXJcIjtcblxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvcHJvcC10eXBlc1xuY29uc3QgRm9sbG93TGlzdCA9ICh7aGVhZGVyLCBkYXRhfSkgPT4ge1xuXHRjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcblx0Y29uc3Qgb25DbGljayA9ICgpID0+IHtcblx0XHRkaXNwYXRjaCh7XG5cdFx0XHR0eXBlOiBVTkZPTExPV19SRVFVRVNULFxuXHRcdH0pXG5cdH1cblx0cmV0dXJuIChcblx0XHRcdDxMaXN0XG5cdFx0XHRcdFx0c3R5bGU9e3ttYXJnaW5Cb3R0b206IDIwfX1cblx0XHRcdFx0XHRncmluZD17e2d1dHRlcjogNCwgeHM6IDIsIHNtOiAyLCBtZDogMywgbGc6IDMsIHhsOiAzLCB4eGw6IDR9fVxuXHRcdFx0XHRcdHNpemU9XCJzbWFsbFwiXG5cdFx0XHRcdFx0aGVhZGVyPXs8ZGl2PntoZWFkZXJ9PC9kaXY+fVxuXHRcdFx0XHRcdGxvYWRNb3JlPXtcblx0XHRcdFx0XHRcdDxkaXYgc3R5bGU9e3t0ZXh0QWxpZ246ICdjZW50ZXInLCBtYXJnaW46ICcxMHB4IDAnfX0+XG5cdFx0XHRcdFx0XHRcdDxCdXR0b24+642UIOuztOq4sDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJvcmRlcmVkXG5cdFx0XHRcdFx0ZGF0YVNvdXJjZT17ZGF0YX1cblx0XHRcdFx0XHRyZW5kZXJJdGVtPXsoaXRlbSkgPT4gKFxuXHRcdFx0XHRcdFx0XHQ8TGlzdC5JdGVtIHN0eWxlPXt7bWFyZ2luVG9wOiAyMH19PlxuXHRcdFx0XHRcdFx0XHRcdDxDYXJkIGFjdGlvbnM9e1s8U3RvcE91dGxpbmVkIGtleT1cInN0b3BcIiBvbkNsaWNrPXtvbkNsaWNrKGl0ZW0uaWQpfS8+XX0+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8Q2FyZC5NZXRhIGRlc2NyaXB0aW9uPXtpdGVtLm5pY2tuYW1lfS8+XG5cdFx0XHRcdFx0XHRcdFx0PC9DYXJkPlxuXHRcdFx0XHRcdFx0XHQ8L0xpc3QuSXRlbT5cblx0XHRcdFx0XHQpfVxuXHRcdFx0Lz5cblx0KVxufVxuRm9sbG93TGlzdC5wcm9wVHlwZXMgPSB7XG5cdGhlYWRlcjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXHRkYXRhOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9sbG93TGlzdFxuIl0sInNvdXJjZVJvb3QiOiIifQ==