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
      onClickMore = _ref.onClickMore;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L0ZvbGxvd0xpc3QuanMiXSwibmFtZXMiOlsiRm9sbG93TGlzdCIsImhlYWRlciIsImRhdGEiLCJvbkNsaWNrTW9yZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJvbkNhbmNlbCIsImlkIiwidHlwZSIsIlVORk9MTE9XX1JFUVVFU1QiLCJSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCIsIm1hcmdpbkJvdHRvbSIsImd1dHRlciIsInhzIiwic20iLCJtZCIsImxnIiwieGwiLCJ4eGwiLCJ0ZXh0QWxpZ24iLCJtYXJnaW4iLCJpdGVtIiwibWFyZ2luVG9wIiwibmlja25hbWUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiYXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FJQTs7QUFDQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUFtQztBQUFBOztBQUFBLE1BQWpDQyxNQUFpQyxRQUFqQ0EsTUFBaUM7QUFBQSxNQUF6QkMsSUFBeUIsUUFBekJBLElBQXlCO0FBQUEsTUFBbkJDLFdBQW1CLFFBQW5CQSxXQUFtQjtBQUNyRCxNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBRUE7QUFDRDs7QUFDQyxNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxFQUFEO0FBQUEsV0FBUSxZQUFNO0FBQUU7QUFDaEMsVUFBSU4sTUFBTSxLQUFLLEtBQWYsRUFBc0I7QUFDckJHLGdCQUFRLENBQUM7QUFDUkksY0FBSSxFQUFFQywrREFERTtBQUVSUCxjQUFJLEVBQUVLO0FBRkUsU0FBRCxDQUFSO0FBSUE7O0FBQ0RILGNBQVEsQ0FBQztBQUNSSSxZQUFJLEVBQUVFLHNFQURFO0FBRVJSLFlBQUksRUFBRUs7QUFGRSxPQUFELENBQVI7QUFJQSxLQVhnQjtBQUFBLEdBQWpCOztBQVlBLFNBQ0UsTUFBQyx5Q0FBRDtBQUNFLFNBQUssRUFBRTtBQUFDSSxrQkFBWSxFQUFFO0FBQWYsS0FEVDtBQUVFLFNBQUssRUFBRTtBQUFDQyxZQUFNLEVBQUUsQ0FBVDtBQUFZQyxRQUFFLEVBQUUsQ0FBaEI7QUFBbUJDLFFBQUUsRUFBRSxDQUF2QjtBQUEwQkMsUUFBRSxFQUFFLENBQTlCO0FBQWlDQyxRQUFFLEVBQUUsQ0FBckM7QUFBd0NDLFFBQUUsRUFBRSxDQUE1QztBQUErQ0MsU0FBRyxFQUFFO0FBQXBELEtBRlQ7QUFHRSxRQUFJLEVBQUMsT0FIUDtBQUlFLFVBQU0sRUFBRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQU1qQixNQUFOLENBSlY7QUFLRSxZQUFRLEVBQ1A7QUFBSyxXQUFLLEVBQUU7QUFBQ2tCLGlCQUFTLEVBQUUsUUFBWjtBQUFzQkMsY0FBTSxFQUFFO0FBQTlCLE9BQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNDLE1BQUMsMkNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFERCxDQU5IO0FBVUUsWUFBUSxNQVZWO0FBV0UsY0FBVSxFQUFFbEIsSUFYZDtBQVlFLGNBQVUsRUFBRSxvQkFBQ21CLElBQUQ7QUFBQSxhQUNWLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0FBQVcsYUFBSyxFQUFFO0FBQUNDLG1CQUFTLEVBQUU7QUFBWixTQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0MsTUFBQyx5Q0FBRDtBQUFNLGVBQU8sRUFBRSxDQUFDLE1BQUMsOERBQUQ7QUFBYyxhQUFHLEVBQUMsTUFBbEI7QUFBeUIsaUJBQU8sRUFBRWhCLFFBQVEsQ0FBQ2UsSUFBSSxDQUFDZCxFQUFOLENBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBRCxDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDQyxNQUFDLHlDQUFELENBQU0sSUFBTjtBQUFXLG1CQUFXLEVBQUVjLElBQUksQ0FBQ0UsUUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURELENBREQsQ0FEVTtBQUFBLEtBWmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGO0FBc0JBLENBdkNEOztHQUFNdkIsVTtVQUNZSyx1RDs7O0tBRFpMLFU7QUF3Q05BLFVBQVUsQ0FBQ3dCLFNBQVgsR0FBdUI7QUFDdEJ2QixRQUFNLEVBQUV3QixpREFBUyxDQUFDQyxNQUFWLENBQWlCQyxVQURIO0FBRXRCekIsTUFBSSxFQUFFdUIsaURBQVMsQ0FBQ0csS0FBVixDQUFnQkQ7QUFGQSxDQUF2QjtBQUtlM0IseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZmlsZS5lNDQ1M2I5ZDQ3YzQ0NDJjMTA2Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHtMaXN0LCBCdXR0b24sIENhcmR9IGZyb20gJ2FudGQnXG5pbXBvcnQge1N0b3BPdXRsaW5lZH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnXG5pbXBvcnQge3VzZURpc3BhdGNofSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7Rk9MTE9XX1JFUVVFU1QsIFVORk9MTE9XX1JFUVVFU1QsIFJFTU9WRV9GT0xMT1dFUl9SRVFVRVNUfSBmcm9tIFwiLi4vcmVkdWNlcnMvdXNlclwiO1xuXG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9wcm9wLXR5cGVzXG5jb25zdCBGb2xsb3dMaXN0ID0gKHtoZWFkZXIsIGRhdGEsIG9uQ2xpY2tNb3JlLCB9KSA9PiB7XG5cdGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxuXG5cdC8q67CY67O166y4IOyViOyXkOyEnCBvbkNsaWNrIOydtOyeiOuLpOuptCDrsJjrs7XrrLjsl5Ag64yA7ZWcIOuNsOydtO2EsOuKlCDsmKjtgbTrpq3snLzroZwg64SY6rmAXG5cdOqzoOywqCDtlajsiJjrpbwg7IKs7Jqp7ZW07IScIOyVhOydtO2FnOyXkCDrjIDtlZwg642w7J207YSw66W8IOuztOuCtOqzoCDsi7bsnYTrlYwg7IKs7JqpKi9cblx0Y29uc3Qgb25DYW5jZWwgPSAoaWQpID0+ICgpID0+IHsgLy8gZm9sbG93IOy3qOyGjFxuXHRcdGlmIChoZWFkZXIgPT09ICftjJTroZzsnoknKSB7XG5cdFx0XHRkaXNwYXRjaCh7XG5cdFx0XHRcdHR5cGU6IFVORk9MTE9XX1JFUVVFU1QsXG5cdFx0XHRcdGRhdGE6IGlkLFxuXHRcdFx0fSlcblx0XHR9XG5cdFx0ZGlzcGF0Y2goe1xuXHRcdFx0dHlwZTogUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1QsXG5cdFx0XHRkYXRhOiBpZCxcblx0XHR9KVxuXHR9XG5cdHJldHVybiAoXG5cdFx0XHQ8TGlzdFxuXHRcdFx0XHRcdHN0eWxlPXt7bWFyZ2luQm90dG9tOiAyMH19XG5cdFx0XHRcdFx0Z3JpbmQ9e3tndXR0ZXI6IDQsIHhzOiAyLCBzbTogMiwgbWQ6IDMsIGxnOiAzLCB4bDogMywgeHhsOiA0fX1cblx0XHRcdFx0XHRzaXplPVwic21hbGxcIlxuXHRcdFx0XHRcdGhlYWRlcj17PGRpdj57aGVhZGVyfTwvZGl2Pn1cblx0XHRcdFx0XHRsb2FkTW9yZT17XG5cdFx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7dGV4dEFsaWduOiAnY2VudGVyJywgbWFyZ2luOiAnMTBweCAwJ319PlxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uPuuNlCDrs7TquLA8L0J1dHRvbj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRib3JkZXJlZFxuXHRcdFx0XHRcdGRhdGFTb3VyY2U9e2RhdGF9XG5cdFx0XHRcdFx0cmVuZGVySXRlbT17KGl0ZW0pID0+IChcblx0XHRcdFx0XHRcdFx0PExpc3QuSXRlbSBzdHlsZT17e21hcmdpblRvcDogMjB9fT5cblx0XHRcdFx0XHRcdFx0XHQ8Q2FyZCBhY3Rpb25zPXtbPFN0b3BPdXRsaW5lZCBrZXk9XCJzdG9wXCIgb25DbGljaz17b25DYW5jZWwoaXRlbS5pZCl9Lz5dfT5cblx0XHRcdFx0XHRcdFx0XHRcdDxDYXJkLk1ldGEgZGVzY3JpcHRpb249e2l0ZW0ubmlja25hbWV9Lz5cblx0XHRcdFx0XHRcdFx0XHQ8L0NhcmQ+XG5cdFx0XHRcdFx0XHRcdDwvTGlzdC5JdGVtPlxuXHRcdFx0XHRcdCl9XG5cdFx0XHQvPlxuXHQpXG59XG5Gb2xsb3dMaXN0LnByb3BUeXBlcyA9IHtcblx0aGVhZGVyOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdGRhdGE6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxufVxuXG5leHBvcnQgZGVmYXVsdCBGb2xsb3dMaXN0XG4iXSwic291cmNlUm9vdCI6IiJ9