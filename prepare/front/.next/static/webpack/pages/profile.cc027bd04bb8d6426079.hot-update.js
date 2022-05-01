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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L0ZvbGxvd0xpc3QuanMiXSwibmFtZXMiOlsiRm9sbG93TGlzdCIsImhlYWRlciIsImRhdGEiLCJvbkNsaWNrTW9yZSIsImxvYWRpbmciLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwib25DYW5jZWwiLCJpZCIsInR5cGUiLCJVTkZPTExPV19SRVFVRVNUIiwiUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1QiLCJtYXJnaW5Cb3R0b20iLCJndXR0ZXIiLCJ4cyIsInNtIiwibWQiLCJsZyIsInhsIiwieHhsIiwidGV4dEFsaWduIiwibWFyZ2luIiwiaXRlbSIsIm1hcmdpblRvcCIsIm5pY2tuYW1lIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImFycmF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBSUE7O0FBQ0EsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FBMEM7QUFBQTs7QUFBQSxNQUF4Q0MsTUFBd0MsUUFBeENBLE1BQXdDO0FBQUEsTUFBaENDLElBQWdDLFFBQWhDQSxJQUFnQztBQUFBLE1BQTFCQyxXQUEwQixRQUExQkEsV0FBMEI7QUFBQSxNQUFiQyxPQUFhLFFBQWJBLE9BQWE7QUFDNUQsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUVBO0FBQ0Q7O0FBQ0MsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsRUFBRDtBQUFBLFdBQVEsWUFBTTtBQUFFO0FBQ2hDLFVBQUlQLE1BQU0sS0FBSyxLQUFmLEVBQXNCO0FBQ3JCSSxnQkFBUSxDQUFDO0FBQ1JJLGNBQUksRUFBRUMsK0RBREU7QUFFUlIsY0FBSSxFQUFFTTtBQUZFLFNBQUQsQ0FBUjtBQUlBOztBQUNESCxjQUFRLENBQUM7QUFDUkksWUFBSSxFQUFFRSxzRUFERTtBQUVSVCxZQUFJLEVBQUVNO0FBRkUsT0FBRCxDQUFSO0FBSUEsS0FYZ0I7QUFBQSxHQUFqQjs7QUFZQSxTQUNFLE1BQUMseUNBQUQ7QUFDRSxTQUFLLEVBQUU7QUFBQ0ksa0JBQVksRUFBRTtBQUFmLEtBRFQ7QUFFRSxTQUFLLEVBQUU7QUFBQ0MsWUFBTSxFQUFFLENBQVQ7QUFBWUMsUUFBRSxFQUFFLENBQWhCO0FBQW1CQyxRQUFFLEVBQUUsQ0FBdkI7QUFBMEJDLFFBQUUsRUFBRSxDQUE5QjtBQUFpQ0MsUUFBRSxFQUFFLENBQXJDO0FBQXdDQyxRQUFFLEVBQUUsQ0FBNUM7QUFBK0NDLFNBQUcsRUFBRTtBQUFwRCxLQUZUO0FBR0UsUUFBSSxFQUFDLE9BSFA7QUFJRSxVQUFNLEVBQUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFNbEIsTUFBTixDQUpWO0FBS0UsWUFBUSxFQUNQO0FBQUssV0FBSyxFQUFFO0FBQUNtQixpQkFBUyxFQUFFLFFBQVo7QUFBc0JDLGNBQU0sRUFBRTtBQUE5QixPQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDQyxNQUFDLDJDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBREQsQ0FOSDtBQVVFLFlBQVEsTUFWVjtBQVdFLGNBQVUsRUFBRW5CLElBWGQ7QUFZRSxjQUFVLEVBQUUsb0JBQUNvQixJQUFEO0FBQUEsYUFDVixNQUFDLHlDQUFELENBQU0sSUFBTjtBQUFXLGFBQUssRUFBRTtBQUFDQyxtQkFBUyxFQUFFO0FBQVosU0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNDLE1BQUMseUNBQUQ7QUFBTSxlQUFPLEVBQUUsQ0FBQyxNQUFDLDhEQUFEO0FBQWMsYUFBRyxFQUFDLE1BQWxCO0FBQXlCLGlCQUFPLEVBQUVoQixRQUFRLENBQUNlLElBQUksQ0FBQ2QsRUFBTixDQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQUQsQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0MsTUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBVyxtQkFBVyxFQUFFYyxJQUFJLENBQUNFLFFBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERCxDQURELENBRFU7QUFBQSxLQVpkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERjtBQXNCQSxDQXZDRDs7R0FBTXhCLFU7VUFDWU0sdUQ7OztLQURaTixVO0FBd0NOQSxVQUFVLENBQUN5QixTQUFYLEdBQXVCO0FBQ3RCeEIsUUFBTSxFQUFFeUIsaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkMsVUFESDtBQUV0QjFCLE1BQUksRUFBRXdCLGlEQUFTLENBQUNHLEtBQVYsQ0FBZ0JEO0FBRkEsQ0FBdkI7QUFLZTVCLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGUuY2MwMjdiZDA0YmI4ZDY0MjYwNzkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7TGlzdCwgQnV0dG9uLCBDYXJkfSBmcm9tICdhbnRkJ1xuaW1wb3J0IHtTdG9wT3V0bGluZWR9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJ1xuaW1wb3J0IHt1c2VEaXNwYXRjaH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQge0ZPTExPV19SRVFVRVNULCBVTkZPTExPV19SRVFVRVNULCBSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVH0gZnJvbSBcIi4uL3JlZHVjZXJzL3VzZXJcIjtcblxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvcHJvcC10eXBlc1xuY29uc3QgRm9sbG93TGlzdCA9ICh7aGVhZGVyLCBkYXRhLCBvbkNsaWNrTW9yZSwgbG9hZGluZ30pID0+IHtcblx0Y29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXG5cblx0LyrrsJjrs7XrrLgg7JWI7JeQ7IScIG9uQ2xpY2sg7J207J6I64uk66m0IOuwmOuzteusuOyXkCDrjIDtlZwg642w7J207YSw64qUIOyYqO2BtOumreycvOuhnCDrhJjquYBcblx06rOg7LCoIO2VqOyImOulvCDsgqzsmqntlbTshJwg7JWE7J207YWc7JeQIOuMgO2VnCDrjbDsnbTthLDrpbwg67O064K06rOgIOyLtuydhOuVjCDsgqzsmqkqL1xuXHRjb25zdCBvbkNhbmNlbCA9IChpZCkgPT4gKCkgPT4geyAvLyBmb2xsb3cg7Leo7IaMXG5cdFx0aWYgKGhlYWRlciA9PT0gJ+2MlOuhnOyeiScpIHtcblx0XHRcdGRpc3BhdGNoKHtcblx0XHRcdFx0dHlwZTogVU5GT0xMT1dfUkVRVUVTVCxcblx0XHRcdFx0ZGF0YTogaWQsXG5cdFx0XHR9KVxuXHRcdH1cblx0XHRkaXNwYXRjaCh7XG5cdFx0XHR0eXBlOiBSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCxcblx0XHRcdGRhdGE6IGlkLFxuXHRcdH0pXG5cdH1cblx0cmV0dXJuIChcblx0XHRcdDxMaXN0XG5cdFx0XHRcdFx0c3R5bGU9e3ttYXJnaW5Cb3R0b206IDIwfX1cblx0XHRcdFx0XHRncmluZD17e2d1dHRlcjogNCwgeHM6IDIsIHNtOiAyLCBtZDogMywgbGc6IDMsIHhsOiAzLCB4eGw6IDR9fVxuXHRcdFx0XHRcdHNpemU9XCJzbWFsbFwiXG5cdFx0XHRcdFx0aGVhZGVyPXs8ZGl2PntoZWFkZXJ9PC9kaXY+fVxuXHRcdFx0XHRcdGxvYWRNb3JlPXtcblx0XHRcdFx0XHRcdDxkaXYgc3R5bGU9e3t0ZXh0QWxpZ246ICdjZW50ZXInLCBtYXJnaW46ICcxMHB4IDAnfX0+XG5cdFx0XHRcdFx0XHRcdDxCdXR0b24+642UIOuztOq4sDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJvcmRlcmVkXG5cdFx0XHRcdFx0ZGF0YVNvdXJjZT17ZGF0YX1cblx0XHRcdFx0XHRyZW5kZXJJdGVtPXsoaXRlbSkgPT4gKFxuXHRcdFx0XHRcdFx0XHQ8TGlzdC5JdGVtIHN0eWxlPXt7bWFyZ2luVG9wOiAyMH19PlxuXHRcdFx0XHRcdFx0XHRcdDxDYXJkIGFjdGlvbnM9e1s8U3RvcE91dGxpbmVkIGtleT1cInN0b3BcIiBvbkNsaWNrPXtvbkNhbmNlbChpdGVtLmlkKX0vPl19PlxuXHRcdFx0XHRcdFx0XHRcdFx0PENhcmQuTWV0YSBkZXNjcmlwdGlvbj17aXRlbS5uaWNrbmFtZX0vPlxuXHRcdFx0XHRcdFx0XHRcdDwvQ2FyZD5cblx0XHRcdFx0XHRcdFx0PC9MaXN0Lkl0ZW0+XG5cdFx0XHRcdFx0KX1cblx0XHRcdC8+XG5cdClcbn1cbkZvbGxvd0xpc3QucHJvcFR5cGVzID0ge1xuXHRoZWFkZXI6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblx0ZGF0YTogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvbGxvd0xpc3RcbiJdLCJzb3VyY2VSb290IjoiIn0=