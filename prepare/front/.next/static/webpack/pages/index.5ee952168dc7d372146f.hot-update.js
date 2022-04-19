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
      hasMorePosts = _useSelector2.hasMorePosts,
      loadPostsLoading = _useSelector2.loadPostsLoading;

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
        if (hasMorePosts && !loadPostsLoading) {
          // 기존에 로딩을 하고있을땐 이부분이 실행이안됨, 로딩이 끝나면 실행
          dispatch({
            // 다 내리면 그때 새로운 것 로딩
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_5__["LOAD_POSTS_REQUEST"],
            data: mainPosts[mainPosts.length - 1].id
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
      lineNumber: 43,
      columnNumber: 4
    }
  }, me && __jsx(_component_PostForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 12
    }
  }), " ", mainPosts.map(function (c) {
    return __jsx(_component_PostCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: c.id,
      post: c,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 7
      }
    });
  }));
};

_s(Home, "OIa3Q9vMa5IZ2MSrKF2X9h2vtkg=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm1lIiwicG9zdCIsIm1haW5Qb3N0cyIsImhhc01vcmVQb3N0cyIsImxvYWRQb3N0c0xvYWRpbmciLCJ1c2VFZmZlY3QiLCJ0eXBlIiwiTE9BRF9QT1NUU19SRVFVRVNUIiwib25TY3JvbGwiLCJjb25zb2xlIiwibG9nIiwid2luZG93Iiwic2Nyb2xsWSIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50SGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0IiwiZGF0YSIsImxlbmd0aCIsImlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJtYXAiLCJjIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUF1Qzs7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBQ2xCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBQ0EscUJBQWFDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBakI7QUFBQSxHQUFELENBQXhCO0FBQUEsTUFBT0MsRUFBUCxnQkFBT0EsRUFBUDs7QUFDQSxzQkFBb0RILCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0csSUFBakI7QUFBQSxHQUFELENBQS9EO0FBQUEsTUFBT0MsU0FBUCxpQkFBT0EsU0FBUDtBQUFBLE1BQWtCQyxZQUFsQixpQkFBa0JBLFlBQWxCO0FBQUEsTUFBZ0NDLGdCQUFoQyxpQkFBZ0NBLGdCQUFoQzs7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQUU7QUFDakJWLFlBQVEsQ0FBQztBQUNSVyxVQUFJLEVBQUVDLGlFQUFrQkE7QUFEaEIsS0FBRCxDQUFSO0FBR0EsR0FKUSxFQUlOLEVBSk0sQ0FBVCxDQUxrQixDQVdsQjs7QUFDQTtBQUNEOztBQUNDRix5REFBUyxDQUFDLFlBQU07QUFDZixhQUFTRyxRQUFULEdBQW9CO0FBQ25CO0FBQ0FDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZQyxNQUFNLENBQUNDLE9BQW5CLEVBQTRCQyxRQUFRLENBQUNDLGVBQVQsQ0FBeUJDLFlBQXJELEVBQW1FRixRQUFRLENBQUNDLGVBQVQsQ0FBeUJFLFlBQTVGOztBQUNBLFVBQUlMLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQkMsUUFBUSxDQUFDQyxlQUFULENBQXlCQyxZQUExQyxHQUF5REYsUUFBUSxDQUFDQyxlQUFULENBQXlCRSxZQUF6QixHQUF3QyxHQUFyRyxFQUEwRztBQUN6RyxZQUFJYixZQUFZLElBQUksQ0FBQ0MsZ0JBQXJCLEVBQXVDO0FBQUU7QUFDeENULGtCQUFRLENBQUM7QUFBRTtBQUNWVyxnQkFBSSxFQUFFQyxpRUFERTtBQUVSVSxnQkFBSSxFQUFFZixTQUFTLENBQUNBLFNBQVMsQ0FBQ2dCLE1BQVYsR0FBbUIsQ0FBcEIsQ0FBVCxDQUFnQ0M7QUFGOUIsV0FBRCxDQUFSO0FBSUE7QUFDRDtBQUNEOztBQUVEUixVQUFNLENBQUNTLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDWixRQUFsQztBQUNBLFdBQU8sWUFBTTtBQUNaRyxZQUFNLENBQUNVLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDYixRQUFyQztBQUNBLEtBRkQ7QUFHQSxHQWxCUSxFQWtCTixDQUFDTixTQUFELEVBQVlDLFlBQVosRUFBMEJDLGdCQUExQixDQWxCTSxDQUFUO0FBb0JBLFNBQ0UsTUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBR0VKLEVBQUUsSUFBSSxNQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIUixPQUlFRSxTQUFTLENBQUNvQixHQUFWLENBQWMsVUFBQ0MsQ0FBRDtBQUFBLFdBQ2IsTUFBQywyREFBRDtBQUFVLFNBQUcsRUFBRUEsQ0FBQyxDQUFDSixFQUFqQjtBQUFxQixVQUFJLEVBQUVJLENBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFEYTtBQUFBLEdBQWQsQ0FKRixDQURGO0FBV0EsQ0E3Q0Q7O0dBQU03QixJO1VBQ1lFLHVELEVBQ0pDLHVELEVBQ3VDQSx1RDs7O0tBSC9DSCxJO0FBK0NTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41ZWU5NTIxNjhkYzdkMzcyMTQ2Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0fSBmcm9tICdyZWFjdCcgLy8gTmV4dCDsl5DshJzripQg7J20IOq1rOusuOydtCDtlYTsmpTqsIAg7JeG64ukLlxyXG5pbXBvcnQge3VzZURpc3BhdGNoLCB1c2VTZWxlY3Rvcn0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCBBcHBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50L0FwcExheW91dCdcclxuaW1wb3J0IFBvc3RGb3JtIGZyb20gJy4uL2NvbXBvbmVudC9Qb3N0Rm9ybSdcclxuaW1wb3J0IFBvc3RDYXJkIGZyb20gXCIuLi9jb21wb25lbnQvUG9zdENhcmRcIjtcclxuaW1wb3J0IHtMT0FEX1BPU1RTX1JFUVVFU1R9IGZyb20gJy4uL3JlZHVjZXJzL3Bvc3QnXHJcblxyXG5jb25zdCBIb21lID0gKCkgPT4ge1xyXG5cdGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG5cdGNvbnN0IHttZX0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpXHJcblx0Y29uc3Qge21haW5Qb3N0cywgaGFzTW9yZVBvc3RzLCBsb2FkUG9zdHNMb2FkaW5nfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9zdClcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHsgLy8g7Lu07Y+s64SM7Yq4IOuUlOuTnOuniOyatO2KuOyZgCDqsJnsnYAg7Zqo6rO8IOqwgOuKpSAsIOuSpOyXkCDruYjrsLDsl7Trp4wg64Sj64qU64uk66m0XHJcblx0XHRkaXNwYXRjaCh7XHJcblx0XHRcdHR5cGU6IExPQURfUE9TVFNfUkVRVUVTVCxcclxuXHRcdH0pXHJcblx0fSwgW10pO1xyXG5cclxuXHQvLyDsiqTtgazroaTsnbQg64Gd6rmM7KeAIOuCtOugpOqwlOydhOuVjCDri6Tsi5wg66Gc65Sp7ZWY6rKM7ZWY64qU7L2U65OcXHJcblx0LyrsnKDspogg7J207Y6Z7Yq47JeQ7IScIOyciOuPhOyasCBhZGRFdmVudExpc3RlbmVyIOulvCDsgqzsmqntlaDrlZAg7ZWt7IOBIOumrO2EtOydhCDtlbTspJjslbztlZzri6QuXHJcblx0XHRcdOyKpO2BrOuhpO2WiOuNmOqxsCDtlbTsoJztlbTspJjslbztlZzri6QsIOyViOq3uOufrOuptCDrqZTrqqjrpqzsl5Ag7IyT7Jes7J6I64qU64ukLiovXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGZ1bmN0aW9uIG9uU2Nyb2xsKCkge1xyXG5cdFx0XHQvLyAo64aS7J2066W8IOuCmO2DgOuCtOuKlOqyg+ykkSlzY3JvbGxZLGNsaWVudEhlaWdodCxzY3JvbGxIZWlnaHQg66W8IOunjuydtOyCrOyaqVxyXG5cdFx0XHRjb25zb2xlLmxvZyh3aW5kb3cuc2Nyb2xsWSwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodClcclxuXHRcdFx0aWYgKHdpbmRvdy5zY3JvbGxZICsgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCA+IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQgLSAzMDApIHtcclxuXHRcdFx0XHRpZiAoaGFzTW9yZVBvc3RzICYmICFsb2FkUG9zdHNMb2FkaW5nKSB7IC8vIOq4sOyhtOyXkCDroZzrlKnsnYQg7ZWY6rOg7J6I7J2E65WQIOydtOu2gOu2hOydtCDsi6TtlonsnbTslYjrkKgsIOuhnOuUqeydtCDrgZ3rgpjrqbQg7Iuk7ZaJXHJcblx0XHRcdFx0XHRkaXNwYXRjaCh7IC8vIOuLpCDrgrTrpqzrqbQg6re465WMIOyDiOuhnOyatCDqsoMg66Gc65SpXHJcblx0XHRcdFx0XHRcdHR5cGU6IExPQURfUE9TVFNfUkVRVUVTVCxcclxuXHRcdFx0XHRcdFx0ZGF0YTogbWFpblBvc3RzW21haW5Qb3N0cy5sZW5ndGggLSAxXS5pZCxcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uU2Nyb2xsKVxyXG5cdFx0cmV0dXJuICgpID0+IHtcclxuXHRcdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uU2Nyb2xsKVxyXG5cdFx0fTtcclxuXHR9LCBbbWFpblBvc3RzLCBoYXNNb3JlUG9zdHMsIGxvYWRQb3N0c0xvYWRpbmddKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdFx0PEFwcExheW91dD5cclxuXHRcdFx0XHR7LypBcHBMYXlvdXQg7J2EIOyCrOyaqe2VnOuLpCwg66eM7JW9IOuLpOuluCDroIjsnbTslYTsm4PsnYQg7IKs7Jqp7ZWY6rOg7Iu264uk66m0IOuUsOuhnCBjb21wb25lbnTsl5Ag66eM65Ok7Ja07IScIOydtOyZgOqwmeydtCDqsJDsi7jrqbTrkJzri6QuKi99XHJcblx0XHRcdFx0ey8q662U6rCAIOustuydvCDsiJgg7J6I64qUIOuLqOychOqwgOyeiOydhCDqsoMg6rCZ7Jy866m0IOuovOyggCDsu7Ttj6zrhIztirgg7J2066aE7J2EIOygle2VtOyjvOyekCovfVxyXG5cdFx0XHRcdHttZSAmJiA8UG9zdEZvcm0vPn0gey8q66qo65GQIOywuCDsnbjqsr3smrAg66eI7KeA66eJIO2UvCDsl7DsgrDsnpDrpbwg67CY7ZmYKi99XHJcblx0XHRcdFx0e21haW5Qb3N0cy5tYXAoKGMpID0+IChcclxuXHRcdFx0XHRcdFx0PFBvc3RDYXJkIGtleT17Yy5pZH0gcG9zdD17Y30vPlxyXG5cdFx0XHRcdCkpfVxyXG5cdFx0XHRcdHsvKuydtOyZgOqwmeydtCBBcHBMYXlvdXQg7Jy866GcIOqwkOyLvCDsnbTrtoDrtoTsnYAgQXBwTGF5b3V0IOydmCBjaGlsZHJlbiDsnbTrkJzri6QuKi99XHJcblx0XHRcdDwvQXBwTGF5b3V0PlxyXG5cdClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVxyXG4iXSwic291cmNlUm9vdCI6IiJ9