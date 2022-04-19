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
      hasMorePost = _useSelector2.hasMorePost,
      loadingPostsLoading = _useSelector2.loadingPostsLoading;

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

      if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
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
  }, [hasMorePost, loadingPostsLoading]);
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

_s(Home, "0cHOhKIuc+K4A1CxFprq1TUEAIs=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm1lIiwicG9zdCIsIm1haW5Qb3N0cyIsImhhc01vcmVQb3N0IiwibG9hZGluZ1Bvc3RzTG9hZGluZyIsInVzZUVmZmVjdCIsInR5cGUiLCJMT0FEX1BPU1RTX1JFUVVFU1QiLCJvblNjcm9sbCIsImNvbnNvbGUiLCJsb2ciLCJ3aW5kb3ciLCJzY3JvbGxZIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm1hcCIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUF1Qzs7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBQ2xCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBQ0EscUJBQWFDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBakI7QUFBQSxHQUFELENBQXhCO0FBQUEsTUFBT0MsRUFBUCxnQkFBT0EsRUFBUDs7QUFDQSxzQkFBc0RILCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0csSUFBakI7QUFBQSxHQUFELENBQWpFO0FBQUEsTUFBT0MsU0FBUCxpQkFBT0EsU0FBUDtBQUFBLE1BQWtCQyxXQUFsQixpQkFBa0JBLFdBQWxCO0FBQUEsTUFBK0JDLG1CQUEvQixpQkFBK0JBLG1CQUEvQjs7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQUU7QUFDakJWLFlBQVEsQ0FBQztBQUNSVyxVQUFJLEVBQUVDLGlFQUFrQkE7QUFEaEIsS0FBRCxDQUFSO0FBR0EsR0FKUSxFQUlOLEVBSk0sQ0FBVCxDQUxrQixDQVdsQjs7QUFDQTtBQUNEOztBQUNDRix5REFBUyxDQUFDLFlBQU07QUFDZixhQUFTRyxRQUFULEdBQW9CO0FBQ25CO0FBQ0FDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZQyxNQUFNLENBQUNDLE9BQW5CLEVBQTRCQyxRQUFRLENBQUNDLGVBQVQsQ0FBeUJDLFlBQXJELEVBQW1FRixRQUFRLENBQUNDLGVBQVQsQ0FBeUJFLFlBQTVGOztBQUNBLFVBQUlMLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQkMsUUFBUSxDQUFDQyxlQUFULENBQXlCQyxZQUExQyxHQUF5REYsUUFBUSxDQUFDQyxlQUFULENBQXlCRSxZQUF6QixHQUF3QyxHQUFyRyxFQUEwRztBQUN6RyxZQUFJYixXQUFKLEVBQWlCO0FBQ2hCUixrQkFBUSxDQUFDO0FBQUU7QUFDVlcsZ0JBQUksRUFBRUMsaUVBQWtCQTtBQURoQixXQUFELENBQVI7QUFHQTtBQUNEO0FBQ0Q7O0FBRURJLFVBQU0sQ0FBQ00sZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NULFFBQWxDO0FBQ0EsV0FBTyxZQUFNO0FBQ1pHLFlBQU0sQ0FBQ08sbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUNWLFFBQXJDO0FBQ0EsS0FGRDtBQUdBLEdBakJRLEVBaUJOLENBQUNMLFdBQUQsRUFBY0MsbUJBQWQsQ0FqQk0sQ0FBVDtBQW1CQSxTQUNFLE1BQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUdFSixFQUFFLElBQUksTUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSFIsT0FJRUUsU0FBUyxDQUFDaUIsR0FBVixDQUFjLFVBQUNsQixJQUFEO0FBQUEsV0FDYixNQUFDLDJEQUFEO0FBQVUsU0FBRyxFQUFFQSxJQUFJLENBQUNtQixFQUFwQjtBQUF3QixVQUFJLEVBQUVuQixJQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRGE7QUFBQSxHQUFkLENBSkYsQ0FERjtBQVdBLENBNUNEOztHQUFNUCxJO1VBQ1lFLHVELEVBQ0pDLHVELEVBQ3lDQSx1RDs7O0tBSGpESCxJO0FBOENTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4yZDQzODI1NTM1OWIzNmJkNzdjYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0fSBmcm9tICdyZWFjdCcgLy8gTmV4dCDsl5DshJzripQg7J20IOq1rOusuOydtCDtlYTsmpTqsIAg7JeG64ukLlxyXG5pbXBvcnQge3VzZURpc3BhdGNoLCB1c2VTZWxlY3Rvcn0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCBBcHBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50L0FwcExheW91dCdcclxuaW1wb3J0IFBvc3RGb3JtIGZyb20gJy4uL2NvbXBvbmVudC9Qb3N0Rm9ybSdcclxuaW1wb3J0IFBvc3RDYXJkIGZyb20gXCIuLi9jb21wb25lbnQvUG9zdENhcmRcIjtcclxuaW1wb3J0IHtMT0FEX1BPU1RTX1JFUVVFU1R9IGZyb20gJy4uL3JlZHVjZXJzL3Bvc3QnXHJcblxyXG5jb25zdCBIb21lID0gKCkgPT4ge1xyXG5cdGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG5cdGNvbnN0IHttZX0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpXHJcblx0Y29uc3Qge21haW5Qb3N0cywgaGFzTW9yZVBvc3QsIGxvYWRpbmdQb3N0c0xvYWRpbmd9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KVxyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4geyAvLyDsu7Ttj6zrhIztirgg65SU65Oc66eI7Jq07Yq47JmAIOqwmeydgCDtmqjqs7wg6rCA64qlICwg65Kk7JeQIOu5iOuwsOyXtOunjCDrhKPripTri6TrqbRcclxuXHRcdGRpc3BhdGNoKHtcclxuXHRcdFx0dHlwZTogTE9BRF9QT1NUU19SRVFVRVNULFxyXG5cdFx0fSlcclxuXHR9LCBbXSk7XHJcblxyXG5cdC8vIOyKpO2BrOuhpOydtCDrgZ3quYzsp4Ag64K066Ck6rCU7J2E65WMIOuLpOyLnCDroZzrlKntlZjqsoztlZjripTsvZTrk5xcclxuXHQvKuycoOymiCDsnbTtjpntirjsl5DshJwg7JyI64+E7JqwIGFkZEV2ZW50TGlzdGVuZXIg66W8IOyCrOyaqe2VoOuVkCDtla3sg4Eg66as7YS07J2EIO2VtOykmOyVvO2VnOuLpC5cclxuXHRcdFx07Iqk7YGs66Gk7ZaI642Y6rGwIO2VtOygnO2VtOykmOyVvO2VnOuLpCwg7JWI6re465+s66m0IOuplOuqqOumrOyXkCDsjJPsl6zsnojripTri6QuKi9cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0ZnVuY3Rpb24gb25TY3JvbGwoKSB7XHJcblx0XHRcdC8vICjrhpLsnbTrpbwg64KY7YOA64K064qU6rKD7KSRKXNjcm9sbFksY2xpZW50SGVpZ2h0LHNjcm9sbEhlaWdodCDrpbwg66eO7J207IKs7JqpXHJcblx0XHRcdGNvbnNvbGUubG9nKHdpbmRvdy5zY3JvbGxZLCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0KVxyXG5cdFx0XHRpZiAod2luZG93LnNjcm9sbFkgKyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0ID4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCAtIDMwMCkge1xyXG5cdFx0XHRcdGlmIChoYXNNb3JlUG9zdCkge1xyXG5cdFx0XHRcdFx0ZGlzcGF0Y2goeyAvLyDri6Qg64K066as66m0IOq3uOuVjCDsg4jroZzsmrQg6rKDIOuhnOuUqVxyXG5cdFx0XHRcdFx0XHR0eXBlOiBMT0FEX1BPU1RTX1JFUVVFU1QsXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvblNjcm9sbClcclxuXHRcdHJldHVybiAoKSA9PiB7XHJcblx0XHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvblNjcm9sbClcclxuXHRcdH07XHJcblx0fSwgW2hhc01vcmVQb3N0LCBsb2FkaW5nUG9zdHNMb2FkaW5nXSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHRcdDxBcHBMYXlvdXQ+XHJcblx0XHRcdFx0ey8qQXBwTGF5b3V0IOydhCDsgqzsmqntlZzri6QsIOunjOyVvSDri6Trpbgg66CI7J207JWE7JuD7J2EIOyCrOyaqe2VmOqzoOyLtuuLpOuptCDrlLDroZwgY29tcG9uZW507JeQIOunjOuTpOyWtOyEnCDsnbTsmYDqsJnsnbQg6rCQ7Iu466m065Cc64ukLiovfVxyXG5cdFx0XHRcdHsvKuutlOqwgCDrrLbsnbwg7IiYIOyeiOuKlCDri6jsnITqsIDsnojsnYQg6rKDIOqwmeycvOuptCDrqLzsoIAg7Lu07Y+s64SM7Yq4IOydtOumhOydhCDsoJXtlbTso7zsnpAqL31cclxuXHRcdFx0XHR7bWUgJiYgPFBvc3RGb3JtLz59IHsvKuuqqOuRkCDssLgg7J246rK97JqwIOuniOyngOuniSDtlLwg7Jew7IKw7J6Q66W8IOuwmO2ZmCovfVxyXG5cdFx0XHRcdHttYWluUG9zdHMubWFwKChwb3N0KSA9PiAoXHJcblx0XHRcdFx0XHRcdDxQb3N0Q2FyZCBrZXk9e3Bvc3QuaWR9IHBvc3Q9e3Bvc3R9Lz5cclxuXHRcdFx0XHQpKX1cclxuXHRcdFx0XHR7LyrsnbTsmYDqsJnsnbQgQXBwTGF5b3V0IOycvOuhnCDqsJDsi7wg7J2067aA67aE7J2AIEFwcExheW91dCDsnZggY2hpbGRyZW4g7J2065Cc64ukLiovfVxyXG5cdFx0XHQ8L0FwcExheW91dD5cclxuXHQpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==