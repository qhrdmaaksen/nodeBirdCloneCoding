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
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
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
      hasMorePosts = _useSelector2.hasMorePosts,
      loadPostsLoading = _useSelector2.loadPostsLoading,
      retweetError = _useSelector2.retweetError;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    // retweet 실패 시 alert 출력
    if (retweetError) {
      alert(retweetError);
    }
  }, [retweetError]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    // 컴포넌트 디드마운트와 같은 효과 가능 , 뒤에 빈배열만 넣는다면
    dispatch({
      // 매번 로그인 상태를 복구해주기 위해서 만듬
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_6__["LOAD_MY_INFO_REQUEST"]
    });
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

      if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
        if (hasMorePosts && !loadPostsLoading) {
          var _mainPosts;

          // 기존에 로딩을 하고있을땐 이부분이 실행이안됨, 로딩이 끝나면 실행
          var lastId = (_mainPosts = mainPosts[mainPosts.length - 1]) === null || _mainPosts === void 0 ? void 0 : _mainPosts.id; // 마지막 게시글의 id

          dispatch({
            // 다 내리면 그때 새로운 것 로딩
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_5__["LOAD_POSTS_REQUEST"],
            lastId: lastId
          });
        }
      }
    }

    window.addEventListener('scroll', onScroll);
    return function () {
      window.removeEventListener('scroll', onScroll);
    };
  }, [mainPosts, hasMorePosts, loadPostsLoading]);
  return __jsx(_component_AppLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 4
    }
  }, me && __jsx(_component_PostForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 12
    }
  }), " ", mainPosts.map(function (post) {
    return __jsx(_component_PostCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: post.id,
      post: post,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 7
      }
    });
  }));
};

_s(Home, "JP6PWBuUBAyhh2Ii59A1Gr5b57U=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm1lIiwicG9zdCIsIm1haW5Qb3N0cyIsImhhc01vcmVQb3N0cyIsImxvYWRQb3N0c0xvYWRpbmciLCJyZXR3ZWV0RXJyb3IiLCJ1c2VFZmZlY3QiLCJhbGVydCIsInR5cGUiLCJMT0FEX01ZX0lORk9fUkVRVUVTVCIsIkxPQURfUE9TVFNfUkVRVUVTVCIsIm9uU2Nyb2xsIiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsInNjcm9sbFkiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudEhlaWdodCIsInNjcm9sbEhlaWdodCIsImxhc3RJZCIsImxlbmd0aCIsImlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJtYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUF1Qzs7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFDbEIsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1Qjs7QUFDQSxxQkFBYUMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFqQjtBQUFBLEdBQUQsQ0FBeEI7QUFBQSxNQUFPQyxFQUFQLGdCQUFPQSxFQUFQOztBQUNBLHNCQUFrRUgsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDRyxJQUFqQjtBQUFBLEdBQUQsQ0FBN0U7QUFBQSxNQUFPQyxTQUFQLGlCQUFPQSxTQUFQO0FBQUEsTUFBa0JDLFlBQWxCLGlCQUFrQkEsWUFBbEI7QUFBQSxNQUFnQ0MsZ0JBQWhDLGlCQUFnQ0EsZ0JBQWhDO0FBQUEsTUFBa0RDLFlBQWxELGlCQUFrREEsWUFBbEQ7O0FBR0FDLHlEQUFTLENBQUMsWUFBTTtBQUFFO0FBQ2pCLFFBQUlELFlBQUosRUFBa0I7QUFDakJFLFdBQUssQ0FBQ0YsWUFBRCxDQUFMO0FBQ0E7QUFDRCxHQUpRLEVBSU4sQ0FBQ0EsWUFBRCxDQUpNLENBQVQ7QUFNQUMseURBQVMsQ0FBQyxZQUFNO0FBQUU7QUFDakJYLFlBQVEsQ0FBQztBQUFFO0FBQ1ZhLFVBQUksRUFBRUMsbUVBQW9CQTtBQURsQixLQUFELENBQVI7QUFHQWQsWUFBUSxDQUFDO0FBQ1JhLFVBQUksRUFBRUUsaUVBQWtCQTtBQURoQixLQUFELENBQVI7QUFHQSxHQVBRLEVBT04sRUFQTSxDQUFULENBWmtCLENBcUJsQjs7QUFDQTtBQUNEOztBQUNDSix5REFBUyxDQUFDLFlBQU07QUFDZixhQUFTSyxRQUFULEdBQW9CO0FBQ25CO0FBQ0FDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZQyxNQUFNLENBQUNDLE9BQW5CLEVBQTRCQyxRQUFRLENBQUNDLGVBQVQsQ0FBeUJDLFlBQXJELEVBQW1FRixRQUFRLENBQUNDLGVBQVQsQ0FBeUJFLFlBQTVGOztBQUNBLFVBQUlMLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQkMsUUFBUSxDQUFDQyxlQUFULENBQXlCQyxZQUExQyxHQUF5REYsUUFBUSxDQUFDQyxlQUFULENBQXlCRSxZQUF6QixHQUF3QyxHQUFyRyxFQUEwRztBQUN6RyxZQUFJaEIsWUFBWSxJQUFJLENBQUNDLGdCQUFyQixFQUF1QztBQUFBOztBQUFFO0FBQ3hDLGNBQU1nQixNQUFNLGlCQUFHbEIsU0FBUyxDQUFDQSxTQUFTLENBQUNtQixNQUFWLEdBQW1CLENBQXBCLENBQVosK0NBQUcsV0FBaUNDLEVBQWhELENBRHNDLENBQ2E7O0FBQ25EM0Isa0JBQVEsQ0FBQztBQUFFO0FBQ1ZhLGdCQUFJLEVBQUVFLGlFQURFO0FBRVJVLGtCQUFNLEVBQU5BO0FBRlEsV0FBRCxDQUFSO0FBSUE7QUFDRDtBQUNEOztBQUVETixVQUFNLENBQUNTLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDWixRQUFsQztBQUNBLFdBQU8sWUFBTTtBQUNaRyxZQUFNLENBQUNVLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDYixRQUFyQztBQUNBLEtBRkQ7QUFHQSxHQW5CUSxFQW1CTixDQUFDVCxTQUFELEVBQVlDLFlBQVosRUFBMEJDLGdCQUExQixDQW5CTSxDQUFUO0FBcUJBLFNBQ0UsTUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBR0VKLEVBQUUsSUFBSSxNQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIUixPQUlFRSxTQUFTLENBQUN1QixHQUFWLENBQWMsVUFBQ3hCLElBQUQ7QUFBQSxXQUNiLE1BQUMsMkRBQUQ7QUFBVSxTQUFHLEVBQUVBLElBQUksQ0FBQ3FCLEVBQXBCO0FBQXdCLFVBQUksRUFBRXJCLElBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFEYTtBQUFBLEdBQWQsQ0FKRixDQURGO0FBV0EsQ0F4REQ7O0dBQU1QLEk7VUFDWUUsdUQsRUFDSkMsdUQsRUFDcURBLHVEOzs7S0FIN0RILEk7QUEwRFNBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljg2YThjOTQ4MDdiMWE0NGZhZDIzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JyAvLyBOZXh0IOyXkOyEnOuKlCDsnbQg6rWs66y47J20IO2VhOyalOqwgCDsl4bri6QuXHJcbmltcG9ydCB7dXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IEFwcExheW91dCBmcm9tICcuLi9jb21wb25lbnQvQXBwTGF5b3V0J1xyXG5pbXBvcnQgUG9zdEZvcm0gZnJvbSAnLi4vY29tcG9uZW50L1Bvc3RGb3JtJ1xyXG5pbXBvcnQgUG9zdENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudC9Qb3N0Q2FyZFwiO1xyXG5pbXBvcnQge0xPQURfUE9TVFNfUkVRVUVTVH0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCdcclxuaW1wb3J0IHtMT0FEX01ZX0lORk9fUkVRVUVTVH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcidcclxuXHJcbmNvbnN0IEhvbWUgPSAoKSA9PiB7XHJcblx0Y29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcblx0Y29uc3Qge21lfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcilcclxuXHRjb25zdCB7bWFpblBvc3RzLCBoYXNNb3JlUG9zdHMsIGxvYWRQb3N0c0xvYWRpbmcsIHJldHdlZXRFcnJvcn0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBvc3QpXHJcblxyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4geyAvLyByZXR3ZWV0IOyLpO2MqCDsi5wgYWxlcnQg7Lac66ClXHJcblx0XHRpZiAocmV0d2VldEVycm9yKSB7XHJcblx0XHRcdGFsZXJ0KHJldHdlZXRFcnJvcilcclxuXHRcdH1cclxuXHR9LCBbcmV0d2VldEVycm9yXSlcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHsgLy8g7Lu07Y+s64SM7Yq4IOuUlOuTnOuniOyatO2KuOyZgCDqsJnsnYAg7Zqo6rO8IOqwgOuKpSAsIOuSpOyXkCDruYjrsLDsl7Trp4wg64Sj64qU64uk66m0XHJcblx0XHRkaXNwYXRjaCh7IC8vIOunpOuyiCDroZzqt7jsnbgg7IOB7YOc66W8IOuzteq1rO2VtOyjvOq4sCDsnITtlbTshJwg66eM65OsXHJcblx0XHRcdHR5cGU6IExPQURfTVlfSU5GT19SRVFVRVNULFxyXG5cdFx0fSk7XHJcblx0XHRkaXNwYXRjaCh7XHJcblx0XHRcdHR5cGU6IExPQURfUE9TVFNfUkVRVUVTVCxcclxuXHRcdH0pO1xyXG5cdH0sIFtdKTtcclxuXHJcblx0Ly8g7Iqk7YGs66Gk7J20IOuBneq5jOyngCDrgrTroKTqsJTsnYTrlYwg64uk7IucIOuhnOuUqe2VmOqyjO2VmOuKlOy9lOuTnFxyXG5cdC8q7Jyg7KaIIOydtO2Ome2KuOyXkOyEnCDsnIjrj4TsmrAgYWRkRXZlbnRMaXN0ZW5lciDrpbwg7IKs7Jqp7ZWg65WQIO2VreyDgSDrpqzthLTsnYQg7ZW07KSY7JW87ZWc64ukLlxyXG5cdFx0XHTsiqTtgazroaTtlojrjZjqsbAg7ZW07KCc7ZW07KSY7JW87ZWc64ukLCDslYjqt7jrn6zrqbQg66mU66qo66as7JeQIOyMk+yXrOyeiOuKlOuLpC4qL1xyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRmdW5jdGlvbiBvblNjcm9sbCgpIHtcclxuXHRcdFx0Ly8gKOuGkuydtOulvCDrgpjtg4DrgrTripTqsoPspJEpc2Nyb2xsWSxjbGllbnRIZWlnaHQsc2Nyb2xsSGVpZ2h0IOulvCDrp47snbTsgqzsmqlcclxuXHRcdFx0Y29uc29sZS5sb2cod2luZG93LnNjcm9sbFksIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQsIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQpXHJcblx0XHRcdGlmICh3aW5kb3cuc2Nyb2xsWSArIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgPiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0IC0gMzAwKSB7XHJcblx0XHRcdFx0aWYgKGhhc01vcmVQb3N0cyAmJiAhbG9hZFBvc3RzTG9hZGluZykgeyAvLyDquLDsobTsl5Ag66Gc65Sp7J2EIO2VmOqzoOyeiOydhOuVkCDsnbTrtoDrtoTsnbQg7Iuk7ZaJ7J207JWI65CoLCDroZzrlKnsnbQg64Gd64KY66m0IOyLpO2WiVxyXG5cdFx0XHRcdFx0Y29uc3QgbGFzdElkID0gbWFpblBvc3RzW21haW5Qb3N0cy5sZW5ndGggLSAxXT8uaWQgLy8g66eI7KeA66eJIOqyjOyLnOq4gOydmCBpZFxyXG5cdFx0XHRcdFx0ZGlzcGF0Y2goeyAvLyDri6Qg64K066as66m0IOq3uOuVjCDsg4jroZzsmrQg6rKDIOuhnOuUqVxyXG5cdFx0XHRcdFx0XHR0eXBlOiBMT0FEX1BPU1RTX1JFUVVFU1QsXHJcblx0XHRcdFx0XHRcdGxhc3RJZCxcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uU2Nyb2xsKVxyXG5cdFx0cmV0dXJuICgpID0+IHtcclxuXHRcdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uU2Nyb2xsKVxyXG5cdFx0fTtcclxuXHR9LCBbbWFpblBvc3RzLCBoYXNNb3JlUG9zdHMsIGxvYWRQb3N0c0xvYWRpbmddKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdFx0PEFwcExheW91dD5cclxuXHRcdFx0XHR7LypBcHBMYXlvdXQg7J2EIOyCrOyaqe2VnOuLpCwg66eM7JW9IOuLpOuluCDroIjsnbTslYTsm4PsnYQg7IKs7Jqp7ZWY6rOg7Iu264uk66m0IOuUsOuhnCBjb21wb25lbnQg7JeQIOunjOuTpOyWtOyEnCDsnbTsmYDqsJnsnbQg6rCQ7Iu466m065Cc64ukLiovfVxyXG5cdFx0XHRcdHsvKuutlOqwgCDrrLbsnbwg7IiYIOyeiOuKlCDri6jsnITqsIDsnojsnYQg6rKDIOqwmeycvOuptCDrqLzsoIAg7Lu07Y+s64SM7Yq4IOydtOumhOydhCDsoJXtlbTso7zsnpAqL31cclxuXHRcdFx0XHR7bWUgJiYgPFBvc3RGb3JtLz59IHsvKuuqqOuRkCDssLgg7J246rK97JqwIOuniOyngOuniSDtlLwg7Jew7IKw7J6Q66W8IOuwmO2ZmCovfVxyXG5cdFx0XHRcdHttYWluUG9zdHMubWFwKChwb3N0KSA9PiAoXHJcblx0XHRcdFx0XHRcdDxQb3N0Q2FyZCBrZXk9e3Bvc3QuaWR9IHBvc3Q9e3Bvc3R9Lz5cclxuXHRcdFx0XHQpKX1cclxuXHRcdFx0XHR7LyrsnbTsmYDqsJnsnbQgQXBwTGF5b3V0IOycvOuhnCDqsJDsi7wg7J2067aA67aE7J2AIEFwcExheW91dCDsnZggY2hpbGRyZW4g7J2065Cc64ukLiovfVxyXG5cdFx0XHQ8L0FwcExheW91dD5cclxuXHQpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==