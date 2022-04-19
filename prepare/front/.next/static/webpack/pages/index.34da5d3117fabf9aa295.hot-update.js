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
  }, [hasMorePost]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm1lIiwicG9zdCIsIm1haW5Qb3N0cyIsImhhc01vcmVQb3N0IiwidXNlRWZmZWN0IiwidHlwZSIsIkxPQURfUE9TVFNfUkVRVUVTVCIsIm9uU2Nyb2xsIiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsInNjcm9sbFkiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudEhlaWdodCIsInNjcm9sbEhlaWdodCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibWFwIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQXVDOztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFDbEIsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1Qjs7QUFDQSxxQkFBYUMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFqQjtBQUFBLEdBQUQsQ0FBeEI7QUFBQSxNQUFPQyxFQUFQLGdCQUFPQSxFQUFQOztBQUNBLHNCQUFpQ0gsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDRyxJQUFqQjtBQUFBLEdBQUQsQ0FBNUM7QUFBQSxNQUFPQyxTQUFQLGlCQUFPQSxTQUFQO0FBQUEsTUFBa0JDLFdBQWxCLGlCQUFrQkEsV0FBbEI7O0FBRUFDLHlEQUFTLENBQUMsWUFBTTtBQUFFO0FBQ2pCVCxZQUFRLENBQUM7QUFDUlUsVUFBSSxFQUFFQyxpRUFBa0JBO0FBRGhCLEtBQUQsQ0FBUjtBQUdBLEdBSlEsRUFJTixFQUpNLENBQVQsQ0FMa0IsQ0FXbEI7O0FBQ0E7QUFDRDs7QUFDQ0YseURBQVMsQ0FBQyxZQUFNO0FBQ2YsYUFBU0csUUFBVCxHQUFvQjtBQUNuQjtBQUNBQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUMsTUFBTSxDQUFDQyxPQUFuQixFQUE0QkMsUUFBUSxDQUFDQyxlQUFULENBQXlCQyxZQUFyRCxFQUFtRUYsUUFBUSxDQUFDQyxlQUFULENBQXlCRSxZQUE1Rjs7QUFDQSxVQUFJTCxNQUFNLENBQUNDLE9BQVAsR0FBaUJDLFFBQVEsQ0FBQ0MsZUFBVCxDQUF5QkMsWUFBMUMsR0FBeURGLFFBQVEsQ0FBQ0MsZUFBVCxDQUF5QkUsWUFBekIsR0FBd0MsR0FBckcsRUFBMEc7QUFDekcsWUFBSVosV0FBSixFQUFpQjtBQUNoQlIsa0JBQVEsQ0FBQztBQUFFO0FBQ1ZVLGdCQUFJLEVBQUVDLGlFQUFrQkE7QUFEaEIsV0FBRCxDQUFSO0FBR0E7QUFDRDtBQUNEOztBQUVESSxVQUFNLENBQUNNLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDVCxRQUFsQztBQUNBLFdBQU8sWUFBTTtBQUNaRyxZQUFNLENBQUNPLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDVixRQUFyQztBQUNBLEtBRkQ7QUFHQSxHQWpCUSxFQWlCTixDQUFDSixXQUFELENBakJNLENBQVQ7QUFtQkEsU0FDRSxNQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FHRUgsRUFBRSxJQUFJLE1BQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhSLE9BSUVFLFNBQVMsQ0FBQ2dCLEdBQVYsQ0FBYyxVQUFDakIsSUFBRDtBQUFBLFdBQ2IsTUFBQywyREFBRDtBQUFVLFNBQUcsRUFBRUEsSUFBSSxDQUFDa0IsRUFBcEI7QUFBd0IsVUFBSSxFQUFFbEIsSUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURhO0FBQUEsR0FBZCxDQUpGLENBREY7QUFXQSxDQTVDRDs7R0FBTVAsSTtVQUNZRSx1RCxFQUNKQyx1RCxFQUNvQkEsdUQ7OztLQUg1QkgsSTtBQThDU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMzRkYTVkMzExN2ZhYmY5YWEyOTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdH0gZnJvbSAncmVhY3QnIC8vIE5leHQg7JeQ7ISc64qUIOydtCDqtazrrLjsnbQg7ZWE7JqU6rCAIOyXhuuLpC5cclxuaW1wb3J0IHt1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3J9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgQXBwTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudC9BcHBMYXlvdXQnXHJcbmltcG9ydCBQb3N0Rm9ybSBmcm9tICcuLi9jb21wb25lbnQvUG9zdEZvcm0nXHJcbmltcG9ydCBQb3N0Q2FyZCBmcm9tIFwiLi4vY29tcG9uZW50L1Bvc3RDYXJkXCI7XHJcbmltcG9ydCB7TE9BRF9QT1NUU19SRVFVRVNUfSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0J1xyXG5cclxuY29uc3QgSG9tZSA9ICgpID0+IHtcclxuXHRjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuXHRjb25zdCB7bWV9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKVxyXG5cdGNvbnN0IHttYWluUG9zdHMsIGhhc01vcmVQb3N0fSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9zdClcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHsgLy8g7Lu07Y+s64SM7Yq4IOuUlOuTnOuniOyatO2KuOyZgCDqsJnsnYAg7Zqo6rO8IOqwgOuKpSAsIOuSpOyXkCDruYjrsLDsl7Trp4wg64Sj64qU64uk66m0XHJcblx0XHRkaXNwYXRjaCh7XHJcblx0XHRcdHR5cGU6IExPQURfUE9TVFNfUkVRVUVTVCxcclxuXHRcdH0pXHJcblx0fSwgW10pO1xyXG5cclxuXHQvLyDsiqTtgazroaTsnbQg64Gd6rmM7KeAIOuCtOugpOqwlOydhOuVjCDri6Tsi5wg66Gc65Sp7ZWY6rKM7ZWY64qU7L2U65OcXHJcblx0LyrsnKDspogg7J207Y6Z7Yq47JeQ7IScIOyciOuPhOyasCBhZGRFdmVudExpc3RlbmVyIOulvCDsgqzsmqntlaDrlZAg7ZWt7IOBIOumrO2EtOydhCDtlbTspJjslbztlZzri6QuXHJcblx0XHRcdOyKpO2BrOuhpO2WiOuNmOqxsCDtlbTsoJztlbTspJjslbztlZzri6QsIOyViOq3uOufrOuptCDrqZTrqqjrpqzsl5Ag7IyT7Jes7J6I64qU64ukLiovXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGZ1bmN0aW9uIG9uU2Nyb2xsKCkge1xyXG5cdFx0XHQvLyAo64aS7J2066W8IOuCmO2DgOuCtOuKlOqyg+ykkSlzY3JvbGxZLGNsaWVudEhlaWdodCxzY3JvbGxIZWlnaHQg66W8IOunjuydtOyCrOyaqVxyXG5cdFx0XHRjb25zb2xlLmxvZyh3aW5kb3cuc2Nyb2xsWSwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodClcclxuXHRcdFx0aWYgKHdpbmRvdy5zY3JvbGxZICsgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCA+IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQgLSAzMDApIHtcclxuXHRcdFx0XHRpZiAoaGFzTW9yZVBvc3QpIHtcclxuXHRcdFx0XHRcdGRpc3BhdGNoKHsgLy8g64ukIOuCtOumrOuptCDqt7jrlYwg7IOI66Gc7Jq0IOqygyDroZzrlKlcclxuXHRcdFx0XHRcdFx0dHlwZTogTE9BRF9QT1NUU19SRVFVRVNULFxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25TY3JvbGwpXHJcblx0XHRyZXR1cm4gKCkgPT4ge1xyXG5cdFx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25TY3JvbGwpXHJcblx0XHR9O1xyXG5cdH0sIFtoYXNNb3JlUG9zdF0pO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0XHQ8QXBwTGF5b3V0PlxyXG5cdFx0XHRcdHsvKkFwcExheW91dCDsnYQg7IKs7Jqp7ZWc64ukLCDrp4zslb0g64uk66W4IOugiOydtOyVhOybg+ydhCDsgqzsmqntlZjqs6Dsi7bri6TrqbQg65Sw66GcIGNvbXBvbmVudOyXkCDrp4zrk6TslrTshJwg7J207JmA6rCZ7J20IOqwkOyLuOuptOuQnOuLpC4qL31cclxuXHRcdFx0XHR7LyrrrZTqsIAg66y27J28IOyImCDsnojripQg64uo7JyE6rCA7J6I7J2EIOqygyDqsJnsnLzrqbQg66i87KCAIOy7tO2PrOuEjO2KuCDsnbTrpoTsnYQg7KCV7ZW07KO87J6QKi99XHJcblx0XHRcdFx0e21lICYmIDxQb3N0Rm9ybS8+fSB7LyrrqqjrkZAg7LC4IOyduOqyveyasCDrp4jsp4Drp4kg7ZS8IOyXsOyCsOyekOulvCDrsJjtmZgqL31cclxuXHRcdFx0XHR7bWFpblBvc3RzLm1hcCgocG9zdCkgPT4gKFxyXG5cdFx0XHRcdFx0XHQ8UG9zdENhcmQga2V5PXtwb3N0LmlkfSBwb3N0PXtwb3N0fS8+XHJcblx0XHRcdFx0KSl9XHJcblx0XHRcdFx0ey8q7J207JmA6rCZ7J20IEFwcExheW91dCDsnLzroZwg6rCQ7Iu8IOydtOu2gOu2hOydgCBBcHBMYXlvdXQg7J2YIGNoaWxkcmVuIOydtOuQnOuLpC4qL31cclxuXHRcdFx0PC9BcHBMYXlvdXQ+XHJcblx0KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=