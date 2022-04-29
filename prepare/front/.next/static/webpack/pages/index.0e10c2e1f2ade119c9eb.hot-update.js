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
          // 기존에 로딩을 하고있을땐 이부분이 실행이안됨, 로딩이 끝나면 실행
          var lastId = mainPosts[mainPosts.length - 1].id; // 마지막 게시글의 id

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm1lIiwicG9zdCIsIm1haW5Qb3N0cyIsImhhc01vcmVQb3N0cyIsImxvYWRQb3N0c0xvYWRpbmciLCJyZXR3ZWV0RXJyb3IiLCJ1c2VFZmZlY3QiLCJhbGVydCIsInR5cGUiLCJMT0FEX01ZX0lORk9fUkVRVUVTVCIsIkxPQURfUE9TVFNfUkVRVUVTVCIsIm9uU2Nyb2xsIiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsInNjcm9sbFkiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudEhlaWdodCIsInNjcm9sbEhlaWdodCIsImxhc3RJZCIsImxlbmd0aCIsImlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJtYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUF1Qzs7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFDbEIsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1Qjs7QUFDQSxxQkFBYUMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFqQjtBQUFBLEdBQUQsQ0FBeEI7QUFBQSxNQUFPQyxFQUFQLGdCQUFPQSxFQUFQOztBQUNBLHNCQUFrRUgsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDRyxJQUFqQjtBQUFBLEdBQUQsQ0FBN0U7QUFBQSxNQUFPQyxTQUFQLGlCQUFPQSxTQUFQO0FBQUEsTUFBa0JDLFlBQWxCLGlCQUFrQkEsWUFBbEI7QUFBQSxNQUFnQ0MsZ0JBQWhDLGlCQUFnQ0EsZ0JBQWhDO0FBQUEsTUFBa0RDLFlBQWxELGlCQUFrREEsWUFBbEQ7O0FBR0FDLHlEQUFTLENBQUMsWUFBTTtBQUFFO0FBQ2pCLFFBQUlELFlBQUosRUFBa0I7QUFDakJFLFdBQUssQ0FBQ0YsWUFBRCxDQUFMO0FBQ0E7QUFDRCxHQUpRLEVBSU4sQ0FBQ0EsWUFBRCxDQUpNLENBQVQ7QUFNQUMseURBQVMsQ0FBQyxZQUFNO0FBQUU7QUFDakJYLFlBQVEsQ0FBQztBQUFFO0FBQ1ZhLFVBQUksRUFBRUMsbUVBQW9CQTtBQURsQixLQUFELENBQVI7QUFHQWQsWUFBUSxDQUFDO0FBQ1JhLFVBQUksRUFBRUUsaUVBQWtCQTtBQURoQixLQUFELENBQVI7QUFHQSxHQVBRLEVBT04sRUFQTSxDQUFULENBWmtCLENBcUJsQjs7QUFDQTtBQUNEOztBQUNDSix5REFBUyxDQUFDLFlBQU07QUFDZixhQUFTSyxRQUFULEdBQW9CO0FBQ25CO0FBQ0FDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZQyxNQUFNLENBQUNDLE9BQW5CLEVBQTRCQyxRQUFRLENBQUNDLGVBQVQsQ0FBeUJDLFlBQXJELEVBQW1FRixRQUFRLENBQUNDLGVBQVQsQ0FBeUJFLFlBQTVGOztBQUNBLFVBQUlMLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQkMsUUFBUSxDQUFDQyxlQUFULENBQXlCQyxZQUExQyxHQUF5REYsUUFBUSxDQUFDQyxlQUFULENBQXlCRSxZQUF6QixHQUF3QyxHQUFyRyxFQUEwRztBQUN6RyxZQUFJaEIsWUFBWSxJQUFJLENBQUNDLGdCQUFyQixFQUF1QztBQUFFO0FBQ3hDLGNBQU1nQixNQUFNLEdBQUdsQixTQUFTLENBQUNBLFNBQVMsQ0FBQ21CLE1BQVYsR0FBbUIsQ0FBcEIsQ0FBVCxDQUFnQ0MsRUFBL0MsQ0FEc0MsQ0FDWTs7QUFDbEQzQixrQkFBUSxDQUFDO0FBQUU7QUFDVmEsZ0JBQUksRUFBRUUsaUVBREU7QUFFUlUsa0JBQU0sRUFBTkE7QUFGUSxXQUFELENBQVI7QUFJQTtBQUNEO0FBQ0Q7O0FBRUROLFVBQU0sQ0FBQ1MsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NaLFFBQWxDO0FBQ0EsV0FBTyxZQUFNO0FBQ1pHLFlBQU0sQ0FBQ1UsbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUNiLFFBQXJDO0FBQ0EsS0FGRDtBQUdBLEdBbkJRLEVBbUJOLENBQUNULFNBQUQsRUFBWUMsWUFBWixFQUEwQkMsZ0JBQTFCLENBbkJNLENBQVQ7QUFxQkEsU0FDRSxNQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FHRUosRUFBRSxJQUFJLE1BQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhSLE9BSUVFLFNBQVMsQ0FBQ3VCLEdBQVYsQ0FBYyxVQUFDeEIsSUFBRDtBQUFBLFdBQ2IsTUFBQywyREFBRDtBQUFVLFNBQUcsRUFBRUEsSUFBSSxDQUFDcUIsRUFBcEI7QUFBd0IsVUFBSSxFQUFFckIsSUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURhO0FBQUEsR0FBZCxDQUpGLENBREY7QUFXQSxDQXhERDs7R0FBTVAsSTtVQUNZRSx1RCxFQUNKQyx1RCxFQUNxREEsdUQ7OztLQUg3REgsSTtBQTBEU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMGUxMGMyZTFmMmFkZTExOWM5ZWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdH0gZnJvbSAncmVhY3QnIC8vIE5leHQg7JeQ7ISc64qUIOydtCDqtazrrLjsnbQg7ZWE7JqU6rCAIOyXhuuLpC5cclxuaW1wb3J0IHt1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3J9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgQXBwTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudC9BcHBMYXlvdXQnXHJcbmltcG9ydCBQb3N0Rm9ybSBmcm9tICcuLi9jb21wb25lbnQvUG9zdEZvcm0nXHJcbmltcG9ydCBQb3N0Q2FyZCBmcm9tIFwiLi4vY29tcG9uZW50L1Bvc3RDYXJkXCI7XHJcbmltcG9ydCB7TE9BRF9QT1NUU19SRVFVRVNUfSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0J1xyXG5pbXBvcnQge0xPQURfTVlfSU5GT19SRVFVRVNUfSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJ1xyXG5cclxuY29uc3QgSG9tZSA9ICgpID0+IHtcclxuXHRjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuXHRjb25zdCB7bWV9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKVxyXG5cdGNvbnN0IHttYWluUG9zdHMsIGhhc01vcmVQb3N0cywgbG9hZFBvc3RzTG9hZGluZywgcmV0d2VldEVycm9yfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9zdClcclxuXHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7IC8vIHJldHdlZXQg7Iuk7YyoIOyLnCBhbGVydCDstpzroKVcclxuXHRcdGlmIChyZXR3ZWV0RXJyb3IpIHtcclxuXHRcdFx0YWxlcnQocmV0d2VldEVycm9yKVxyXG5cdFx0fVxyXG5cdH0sIFtyZXR3ZWV0RXJyb3JdKVxyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4geyAvLyDsu7Ttj6zrhIztirgg65SU65Oc66eI7Jq07Yq47JmAIOqwmeydgCDtmqjqs7wg6rCA64qlICwg65Kk7JeQIOu5iOuwsOyXtOunjCDrhKPripTri6TrqbRcclxuXHRcdGRpc3BhdGNoKHsgLy8g66ek67KIIOuhnOq3uOyduCDsg4Htg5zrpbwg67O16rWs7ZW07KO86riwIOychO2VtOyEnCDrp4zrk6xcclxuXHRcdFx0dHlwZTogTE9BRF9NWV9JTkZPX1JFUVVFU1QsXHJcblx0XHR9KTtcclxuXHRcdGRpc3BhdGNoKHtcclxuXHRcdFx0dHlwZTogTE9BRF9QT1NUU19SRVFVRVNULFxyXG5cdFx0fSk7XHJcblx0fSwgW10pO1xyXG5cclxuXHQvLyDsiqTtgazroaTsnbQg64Gd6rmM7KeAIOuCtOugpOqwlOydhOuVjCDri6Tsi5wg66Gc65Sp7ZWY6rKM7ZWY64qU7L2U65OcXHJcblx0LyrsnKDspogg7J207Y6Z7Yq47JeQ7IScIOyciOuPhOyasCBhZGRFdmVudExpc3RlbmVyIOulvCDsgqzsmqntlaDrlZAg7ZWt7IOBIOumrO2EtOydhCDtlbTspJjslbztlZzri6QuXHJcblx0XHRcdOyKpO2BrOuhpO2WiOuNmOqxsCDtlbTsoJztlbTspJjslbztlZzri6QsIOyViOq3uOufrOuptCDrqZTrqqjrpqzsl5Ag7IyT7Jes7J6I64qU64ukLiovXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGZ1bmN0aW9uIG9uU2Nyb2xsKCkge1xyXG5cdFx0XHQvLyAo64aS7J2066W8IOuCmO2DgOuCtOuKlOqyg+ykkSlzY3JvbGxZLGNsaWVudEhlaWdodCxzY3JvbGxIZWlnaHQg66W8IOunjuydtOyCrOyaqVxyXG5cdFx0XHRjb25zb2xlLmxvZyh3aW5kb3cuc2Nyb2xsWSwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodClcclxuXHRcdFx0aWYgKHdpbmRvdy5zY3JvbGxZICsgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCA+IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQgLSAzMDApIHtcclxuXHRcdFx0XHRpZiAoaGFzTW9yZVBvc3RzICYmICFsb2FkUG9zdHNMb2FkaW5nKSB7IC8vIOq4sOyhtOyXkCDroZzrlKnsnYQg7ZWY6rOg7J6I7J2E65WQIOydtOu2gOu2hOydtCDsi6TtlonsnbTslYjrkKgsIOuhnOuUqeydtCDrgZ3rgpjrqbQg7Iuk7ZaJXHJcblx0XHRcdFx0XHRjb25zdCBsYXN0SWQgPSBtYWluUG9zdHNbbWFpblBvc3RzLmxlbmd0aCAtIDFdLmlkIC8vIOuniOyngOuniSDqsozsi5zquIDsnZggaWRcclxuXHRcdFx0XHRcdGRpc3BhdGNoKHsgLy8g64ukIOuCtOumrOuptCDqt7jrlYwg7IOI66Gc7Jq0IOqygyDroZzrlKlcclxuXHRcdFx0XHRcdFx0dHlwZTogTE9BRF9QT1NUU19SRVFVRVNULFxyXG5cdFx0XHRcdFx0XHRsYXN0SWQsXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvblNjcm9sbClcclxuXHRcdHJldHVybiAoKSA9PiB7XHJcblx0XHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvblNjcm9sbClcclxuXHRcdH07XHJcblx0fSwgW21haW5Qb3N0cywgaGFzTW9yZVBvc3RzLCBsb2FkUG9zdHNMb2FkaW5nXSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHRcdDxBcHBMYXlvdXQ+XHJcblx0XHRcdFx0ey8qQXBwTGF5b3V0IOydhCDsgqzsmqntlZzri6QsIOunjOyVvSDri6Trpbgg66CI7J207JWE7JuD7J2EIOyCrOyaqe2VmOqzoOyLtuuLpOuptCDrlLDroZwgY29tcG9uZW50IOyXkCDrp4zrk6TslrTshJwg7J207JmA6rCZ7J20IOqwkOyLuOuptOuQnOuLpC4qL31cclxuXHRcdFx0XHR7LyrrrZTqsIAg66y27J28IOyImCDsnojripQg64uo7JyE6rCA7J6I7J2EIOqygyDqsJnsnLzrqbQg66i87KCAIOy7tO2PrOuEjO2KuCDsnbTrpoTsnYQg7KCV7ZW07KO87J6QKi99XHJcblx0XHRcdFx0e21lICYmIDxQb3N0Rm9ybS8+fSB7LyrrqqjrkZAg7LC4IOyduOqyveyasCDrp4jsp4Drp4kg7ZS8IOyXsOyCsOyekOulvCDrsJjtmZgqL31cclxuXHRcdFx0XHR7bWFpblBvc3RzLm1hcCgocG9zdCkgPT4gKFxyXG5cdFx0XHRcdFx0XHQ8UG9zdENhcmQga2V5PXtwb3N0LmlkfSBwb3N0PXtwb3N0fS8+XHJcblx0XHRcdFx0KSl9XHJcblx0XHRcdFx0ey8q7J207JmA6rCZ7J20IEFwcExheW91dCDsnLzroZwg6rCQ7Iu8IOydtOu2gOu2hOydgCBBcHBMYXlvdXQg7J2YIGNoaWxkcmVuIOydtOuQnOuLpC4qL31cclxuXHRcdFx0PC9BcHBMYXlvdXQ+XHJcblx0KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=