webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _component_AppLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/AppLayout */ "./component/AppLayout.js");
/* harmony import */ var _component_PostForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/PostForm */ "./component/PostForm.js");
/* harmony import */ var _component_PostCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component/PostCard */ "./component/PostCard.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
var _this = undefined,
    _jsxFileName = "D:\\intellijProjects\\react-nodebird\\prepare\\front\\pages\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // Next 에서는 이 구문이 필요가 없다.







var Home = function Home() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me;

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.post;
  }),
      mainPosts = _useSelector2.mainPosts,
      hasMorePost = _useSelector2.hasMorePost;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    // 컴포넌트 디드마운트와 같은 효과 가능 , 뒤에 빈배열만 넣는다면
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_5__["LOAD_POSTS_REQUEST"]
    });
  }, []); // 스크롤이 끝까지 내려갔을때 다시 로딩하게하는코드

  /*유즈 이펙트에서 윈도우 addEventListener 를 사용할땐 항상 리턴을 해줘야한다.
  		스크롤했던거 해제해줘야한다, 안그러면 메모리에 쌓여있는다.*/

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    function onScroll() {
      // (높이를 나타내는것중)scrollY,clientHeight,scrollHeight 를 많이사용
      console.log(window.scrollY, document.documentElement.clientHeight, document.documentElement.scrollHeight);

      if (window.scrollY + document.documentElement.clientHeight === document.documentElement.scrollHeight) {
        if (hasMorePost) {
          dispatch({
            // 다 내리면 그때 새로운 것 로딩
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_5__["LOAD_POSTS_REQUEST"]
          });
        }
      }
    }

    window.addEventListener('scroll', onScroll);
    return function () {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);
  return __jsx(_component_AppLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 4
    }
  }, me && __jsx(_component_PostForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 12
    }
  }), " ", mainPosts.map(function (post) {
    return __jsx(_component_PostCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: post.id,
      post: post,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 7
      }
    });
  }));
};

_s(Home, "Jke51tRrfMtWDrT5pkPhzAFreuw=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"]];
});

_c = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm1lIiwicG9zdCIsIm1haW5Qb3N0cyIsImhhc01vcmVQb3N0IiwidXNlRWZmZWN0IiwidHlwZSIsIkxPQURfUE9TVFNfUkVRVUVTVCIsIm9uU2Nyb2xsIiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsInNjcm9sbFkiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudEhlaWdodCIsInNjcm9sbEhlaWdodCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibWFwIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQXVDOztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFDbEIsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1Qjs7QUFDQSxxQkFBYUMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFqQjtBQUFBLEdBQUQsQ0FBeEI7QUFBQSxNQUFPQyxFQUFQLGdCQUFPQSxFQUFQOztBQUNBLHNCQUFpQ0gsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDRyxJQUFqQjtBQUFBLEdBQUQsQ0FBNUM7QUFBQSxNQUFPQyxTQUFQLGlCQUFPQSxTQUFQO0FBQUEsTUFBa0JDLFdBQWxCLGlCQUFrQkEsV0FBbEI7O0FBRUFDLHlEQUFTLENBQUMsWUFBTTtBQUFFO0FBQ2pCVCxZQUFRLENBQUM7QUFDUlUsVUFBSSxFQUFFQyxpRUFBa0JBO0FBRGhCLEtBQUQsQ0FBUjtBQUdBLEdBSlEsRUFJTixFQUpNLENBQVQsQ0FMa0IsQ0FXbEI7O0FBQ0E7QUFDRDs7QUFDQ0YseURBQVMsQ0FBQyxZQUFNO0FBQ2YsYUFBU0csUUFBVCxHQUFvQjtBQUNuQjtBQUNBQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUMsTUFBTSxDQUFDQyxPQUFuQixFQUE0QkMsUUFBUSxDQUFDQyxlQUFULENBQXlCQyxZQUFyRCxFQUFtRUYsUUFBUSxDQUFDQyxlQUFULENBQXlCRSxZQUE1Rjs7QUFDQSxVQUFJTCxNQUFNLENBQUNDLE9BQVAsR0FBaUJDLFFBQVEsQ0FBQ0MsZUFBVCxDQUF5QkMsWUFBMUMsS0FBMkRGLFFBQVEsQ0FBQ0MsZUFBVCxDQUF5QkUsWUFBeEYsRUFBc0c7QUFDckcsWUFBSVosV0FBSixFQUFpQjtBQUNoQlIsa0JBQVEsQ0FBQztBQUFFO0FBQ1ZVLGdCQUFJLEVBQUVDLGlFQUFrQkE7QUFEaEIsV0FBRCxDQUFSO0FBR0E7QUFDRDtBQUNEOztBQUVESSxVQUFNLENBQUNNLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDVCxRQUFsQztBQUNBLFdBQU8sWUFBTTtBQUNaRyxZQUFNLENBQUNPLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDVixRQUFyQztBQUNBLEtBRkQ7QUFHQSxHQWpCUSxFQWlCTixFQWpCTSxDQUFUO0FBbUJBLFNBQ0UsTUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBR0VQLEVBQUUsSUFBSSxNQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIUixPQUlFRSxTQUFTLENBQUNnQixHQUFWLENBQWMsVUFBQ2pCLElBQUQ7QUFBQSxXQUNiLE1BQUMsMkRBQUQ7QUFBVSxTQUFHLEVBQUVBLElBQUksQ0FBQ2tCLEVBQXBCO0FBQXdCLFVBQUksRUFBRWxCLElBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFEYTtBQUFBLEdBQWQsQ0FKRixDQURGO0FBV0EsQ0E1Q0Q7O0dBQU1QLEk7VUFDWUUsdUQsRUFDSkMsdUQsRUFDb0JBLHVEOzs7S0FINUJILEk7QUE4Q1NBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjVhZmRmZWJmNjYzOWViYmE2OTQ1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JyAvLyBOZXh0IOyXkOyEnOuKlCDsnbQg6rWs66y47J20IO2VhOyalOqwgCDsl4bri6QuXHJcbmltcG9ydCB7dXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IEFwcExheW91dCBmcm9tICcuLi9jb21wb25lbnQvQXBwTGF5b3V0J1xyXG5pbXBvcnQgUG9zdEZvcm0gZnJvbSAnLi4vY29tcG9uZW50L1Bvc3RGb3JtJ1xyXG5pbXBvcnQgUG9zdENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudC9Qb3N0Q2FyZFwiO1xyXG5pbXBvcnQge0xPQURfUE9TVFNfUkVRVUVTVH0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCdcclxuXHJcbmNvbnN0IEhvbWUgPSAoKSA9PiB7XHJcblx0Y29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcblx0Y29uc3Qge21lfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcilcclxuXHRjb25zdCB7bWFpblBvc3RzLCBoYXNNb3JlUG9zdH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBvc3QpXHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7IC8vIOy7tO2PrOuEjO2KuCDrlJTrk5zrp4jsmrTtirjsmYAg6rCZ7J2AIO2aqOqzvCDqsIDriqUgLCDrkqTsl5Ag67mI67Cw7Je066eMIOuEo+uKlOuLpOuptFxyXG5cdFx0ZGlzcGF0Y2goe1xyXG5cdFx0XHR0eXBlOiBMT0FEX1BPU1RTX1JFUVVFU1QsXHJcblx0XHR9KVxyXG5cdH0sIFtdKTtcclxuXHJcblx0Ly8g7Iqk7YGs66Gk7J20IOuBneq5jOyngCDrgrTroKTqsJTsnYTrlYwg64uk7IucIOuhnOuUqe2VmOqyjO2VmOuKlOy9lOuTnFxyXG5cdC8q7Jyg7KaIIOydtO2Ome2KuOyXkOyEnCDsnIjrj4TsmrAgYWRkRXZlbnRMaXN0ZW5lciDrpbwg7IKs7Jqp7ZWg65WQIO2VreyDgSDrpqzthLTsnYQg7ZW07KSY7JW87ZWc64ukLlxyXG5cdFx0XHTsiqTtgazroaTtlojrjZjqsbAg7ZW07KCc7ZW07KSY7JW87ZWc64ukLCDslYjqt7jrn6zrqbQg66mU66qo66as7JeQIOyMk+yXrOyeiOuKlOuLpC4qL1xyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRmdW5jdGlvbiBvblNjcm9sbCgpIHtcclxuXHRcdFx0Ly8gKOuGkuydtOulvCDrgpjtg4DrgrTripTqsoPspJEpc2Nyb2xsWSxjbGllbnRIZWlnaHQsc2Nyb2xsSGVpZ2h0IOulvCDrp47snbTsgqzsmqlcclxuXHRcdFx0Y29uc29sZS5sb2cod2luZG93LnNjcm9sbFksIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQsIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQpXHJcblx0XHRcdGlmICh3aW5kb3cuc2Nyb2xsWSArIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgPT09IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQpIHtcclxuXHRcdFx0XHRpZiAoaGFzTW9yZVBvc3QpIHtcclxuXHRcdFx0XHRcdGRpc3BhdGNoKHsgLy8g64ukIOuCtOumrOuptCDqt7jrlYwg7IOI66Gc7Jq0IOqygyDroZzrlKlcclxuXHRcdFx0XHRcdFx0dHlwZTogTE9BRF9QT1NUU19SRVFVRVNULFxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25TY3JvbGwpXHJcblx0XHRyZXR1cm4gKCkgPT4ge1xyXG5cdFx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25TY3JvbGwpXHJcblx0XHR9O1xyXG5cdH0sIFtdKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdFx0PEFwcExheW91dD5cclxuXHRcdFx0XHR7LypBcHBMYXlvdXQg7J2EIOyCrOyaqe2VnOuLpCwg66eM7JW9IOuLpOuluCDroIjsnbTslYTsm4PsnYQg7IKs7Jqp7ZWY6rOg7Iu264uk66m0IOuUsOuhnCBjb21wb25lbnTsl5Ag66eM65Ok7Ja07IScIOydtOyZgOqwmeydtCDqsJDsi7jrqbTrkJzri6QuKi99XHJcblx0XHRcdFx0ey8q662U6rCAIOustuydvCDsiJgg7J6I64qUIOuLqOychOqwgOyeiOydhCDqsoMg6rCZ7Jy866m0IOuovOyggCDsu7Ttj6zrhIztirgg7J2066aE7J2EIOygle2VtOyjvOyekCovfVxyXG5cdFx0XHRcdHttZSAmJiA8UG9zdEZvcm0vPn0gey8q66qo65GQIOywuCDsnbjqsr3smrAg66eI7KeA66eJIO2UvCDsl7DsgrDsnpDrpbwg67CY7ZmYKi99XHJcblx0XHRcdFx0e21haW5Qb3N0cy5tYXAoKHBvc3QpID0+IChcclxuXHRcdFx0XHRcdFx0PFBvc3RDYXJkIGtleT17cG9zdC5pZH0gcG9zdD17cG9zdH0vPlxyXG5cdFx0XHRcdCkpfVxyXG5cdFx0XHRcdHsvKuydtOyZgOqwmeydtCBBcHBMYXlvdXQg7Jy866GcIOqwkOyLvCDsnbTrtoDrtoTsnYAgQXBwTGF5b3V0IOydmCBjaGlsZHJlbiDsnbTrkJzri6QuKi99XHJcblx0XHRcdDwvQXBwTGF5b3V0PlxyXG5cdClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVxyXG4iXSwic291cmNlUm9vdCI6IiJ9