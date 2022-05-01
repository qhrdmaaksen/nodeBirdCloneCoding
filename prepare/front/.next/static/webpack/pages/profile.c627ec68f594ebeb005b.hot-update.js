webpackHotUpdate_N_E("pages/profile",{

/***/ "./pages/profile.js":
/*!**************************!*\
  !*** ./pages/profile.js ***!
  \**************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _component_AppLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/AppLayout */ "./component/AppLayout.js");
/* harmony import */ var _component_NicknameEditForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/NicknameEditForm */ "./component/NicknameEditForm.js");
/* harmony import */ var _component_FollowList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component/FollowList */ "./component/FollowList.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swr */ "./node_modules/swr/dist/index.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
var _this = undefined,
    _jsxFileName = "D:\\intellijProjects\\react-nodebird\\prepare\\front\\pages\\profile.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











//import FollowerList from '../component/FollowerList'
// fetcher 를 다른걸로 바꾸면 graphql 도 쓸수있다
var fetcher = function fetcher(url) {
  return axios__WEBPACK_IMPORTED_MODULE_5___default.a.get(url, {
    withCredentials: true
  }).then(function (result) {
    return result.data;
  });
};

var Profile = function Profile() {
  _s();

  /* front
  const dispatch = useDispatch();
  const followingList = [{nickname: '비타민'}, {nickname: '엠알민'}, {nickname: '올마스터'}] front early
  const followerList = [{nickname: '비타민'}, {nickname: '엠알민'}, {nickname: '올마스터'}]*/
  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(3),
      followersLimit = _useState[0],
      setFollowersLimit = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(3),
      followingsLimit = _useState2[0],
      setFollowingsLimit = _useState2[1];
  /*useEffect(() => {
  	dispatch({
  		type: LOAD_FOLLOWERS_REQUEST,
  	});
  	dispatch({
  		type: LOAD_FOLLOWINGS_REQUEST,
  	});
  }, []);*/
  //followers 불러오기
  // data, error 가 둘다 있다면 성공했거나, 실패했거나, 둘다 없다면 로딩중


  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_6__["default"])("http://localhost:3065/user/followers?limit=".concat(followersLimit), fetcher),
      followersData = _useSWR.data,
      followerError = _useSWR.error; //fetcher 가 url 를 어떻게 가져올지에 대한걸적어줌
  //followings 불러오기


  var _useSWR2 = Object(swr__WEBPACK_IMPORTED_MODULE_6__["default"])("http://localhost:3065/user/followings?limit=".concat(followingsLimit), fetcher),
      followingsData = _useSWR2.data,
      followingError = _useSWR2.error; //fetcher 가 url 를 어떻게 가져올지에 대한걸적어줌


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!(me && me.id)) {
      // 프로필 페이지에서 로그아웃했을 경우 main 화면으로
      next_router__WEBPACK_IMPORTED_MODULE_8___default.a.push('/');
    }
  }, [me && me.id]); // callback 함수는 최소한 return 위쪽에 적자
  // 버튼을 눌러주면 limit 가 기존 limit 보다 3 씩 늘어난다

  var loadMoreFollowings = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setFollowingsLimit(function (prev) {
      return prev + 3;
    });
  }, []);
  var loadMoreFollowersLimit = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setFollowersLimit(function (prev) {
      return prev + 3;
    });
  }, []);

  if (!me) {
    // 내가 없으면 못들어가게
    return '내 정보 로딩중...';
  }

  if (followerError || followingError) {
    console.error(followerError || followingError);
    return '팔로잉/팔로워 로딩 중 에러가 발생했습니다.';
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 5
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 6
    }
  }, "\uB0B4 \uD504\uB85C\uD544 | NodeBird")), __jsx(_component_AppLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 5
    }
  }, __jsx(_component_NicknameEditForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 6
    }
  }), __jsx(_component_FollowList__WEBPACK_IMPORTED_MODULE_4__["default"], {
    header: "\uD314\uB85C\uC719 \uBAA9\uB85D",
    data: followingsData,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 6
    }
  }), __jsx(_component_FollowList__WEBPACK_IMPORTED_MODULE_4__["default"], {
    header: "\uD314\uB85C\uC6CC \uBAA9\uB85D",
    data: followersData,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 6
    }
  })));
};

_s(Profile, "NMDQKcmmY6UMS/7Eujv+An4z22c=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"], swr__WEBPACK_IMPORTED_MODULE_6__["default"], swr__WEBPACK_IMPORTED_MODULE_6__["default"]];
});

_c = Profile;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (Profile);

var _c;

$RefreshReg$(_c, "Profile");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJmZXRjaGVyIiwidXJsIiwiYXhpb3MiLCJnZXQiLCJ3aXRoQ3JlZGVudGlhbHMiLCJ0aGVuIiwicmVzdWx0IiwiZGF0YSIsIlByb2ZpbGUiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm1lIiwidXNlU3RhdGUiLCJmb2xsb3dlcnNMaW1pdCIsInNldEZvbGxvd2Vyc0xpbWl0IiwiZm9sbG93aW5nc0xpbWl0Iiwic2V0Rm9sbG93aW5nc0xpbWl0IiwidXNlU1dSIiwiZm9sbG93ZXJzRGF0YSIsImZvbGxvd2VyRXJyb3IiLCJlcnJvciIsImZvbGxvd2luZ3NEYXRhIiwiZm9sbG93aW5nRXJyb3IiLCJ1c2VFZmZlY3QiLCJpZCIsIlJvdXRlciIsInB1c2giLCJsb2FkTW9yZUZvbGxvd2luZ3MiLCJ1c2VDYWxsYmFjayIsInByZXYiLCJsb2FkTW9yZUZvbGxvd2Vyc0xpbWl0IiwiY29uc29sZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBRUE7QUFDQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxHQUFEO0FBQUEsU0FBU0MsNENBQUssQ0FBQ0MsR0FBTixDQUFVRixHQUFWLEVBQWU7QUFBQ0csbUJBQWUsRUFBRTtBQUFsQixHQUFmLEVBQXdDQyxJQUF4QyxDQUE2QyxVQUFDQyxNQUFEO0FBQUEsV0FBWUEsTUFBTSxDQUFDQyxJQUFuQjtBQUFBLEdBQTdDLENBQVQ7QUFBQSxDQUFoQjs7QUFFQSxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQUE7O0FBQ3JCO0FBQ0Q7QUFDQTtBQUNBO0FBQ0MscUJBQWFDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBakI7QUFBQSxHQUFELENBQXhCO0FBQUEsTUFBT0MsRUFBUCxnQkFBT0EsRUFBUDs7QUFDQSxrQkFBNENDLHNEQUFRLENBQUMsQ0FBRCxDQUFwRDtBQUFBLE1BQU9DLGNBQVA7QUFBQSxNQUF1QkMsaUJBQXZCOztBQUNBLG1CQUE4Q0Ysc0RBQVEsQ0FBQyxDQUFELENBQXREO0FBQUEsTUFBT0csZUFBUDtBQUFBLE1BQXdCQyxrQkFBeEI7QUFFQTtBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0M7QUFFQTs7O0FBQ0EsZ0JBR0lDLG1EQUFNLHNEQUErQ0osY0FBL0MsR0FBaUVkLE9BQWpFLENBSFY7QUFBQSxNQUNPbUIsYUFEUCxXQUNDWixJQUREO0FBQUEsTUFFUWEsYUFGUixXQUVDQyxLQUZELENBcEJxQixDQXVCK0Q7QUFDcEY7OztBQUNBLGlCQUdJSCxtREFBTSx1REFBZ0RGLGVBQWhELEdBQW1FaEIsT0FBbkUsQ0FIVjtBQUFBLE1BQ09zQixjQURQLFlBQ0NmLElBREQ7QUFBQSxNQUVRZ0IsY0FGUixZQUVDRixLQUZELENBekJxQixDQTRCaUU7OztBQUV0RkcseURBQVMsQ0FBQyxZQUFNO0FBQ2YsUUFBSSxFQUFFWixFQUFFLElBQUlBLEVBQUUsQ0FBQ2EsRUFBWCxDQUFKLEVBQW9CO0FBQUU7QUFDckJDLHdEQUFNLENBQUNDLElBQVAsQ0FBWSxHQUFaO0FBQ0E7QUFDRCxHQUpRLEVBSU4sQ0FBQ2YsRUFBRSxJQUFJQSxFQUFFLENBQUNhLEVBQVYsQ0FKTSxDQUFULENBOUJxQixDQW9DckI7QUFDQTs7QUFDQSxNQUFNRyxrQkFBa0IsR0FBR0MseURBQVcsQ0FDcEMsWUFBTTtBQUNMWixzQkFBa0IsQ0FBQyxVQUFDYSxJQUFEO0FBQUEsYUFBVUEsSUFBSSxHQUFHLENBQWpCO0FBQUEsS0FBRCxDQUFsQjtBQUNBLEdBSG1DLEVBSXBDLEVBSm9DLENBQXRDO0FBT0EsTUFBTUMsc0JBQXNCLEdBQUdGLHlEQUFXLENBQ3hDLFlBQU07QUFDTGQscUJBQWlCLENBQUMsVUFBQ2UsSUFBRDtBQUFBLGFBQVVBLElBQUksR0FBRyxDQUFqQjtBQUFBLEtBQUQsQ0FBakI7QUFDQSxHQUh1QyxFQUl4QyxFQUp3QyxDQUExQzs7QUFRQSxNQUFJLENBQUNsQixFQUFMLEVBQVM7QUFBRTtBQUNWLFdBQU8sYUFBUDtBQUNBOztBQUVELE1BQUlRLGFBQWEsSUFBSUcsY0FBckIsRUFBcUM7QUFDcENTLFdBQU8sQ0FBQ1gsS0FBUixDQUFjRCxhQUFhLElBQUlHLGNBQS9CO0FBQ0EsV0FBTywwQkFBUDtBQUNBOztBQUVELFNBQ0UsbUVBQ0MsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0Q0FERCxDQURELEVBSUMsTUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxtRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsRUFFQyxNQUFDLDZEQUFEO0FBQVksVUFBTSxFQUFDLGlDQUFuQjtBQUE0QixRQUFJLEVBQUVELGNBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRCxFQUdDLE1BQUMsNkRBQUQ7QUFBWSxVQUFNLEVBQUMsaUNBQW5CO0FBQTRCLFFBQUksRUFBRUgsYUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhELENBSkQsQ0FERjtBQVlBLENBMUVEOztHQUFNWCxPO1VBS1FDLHVELEVBa0JUUywyQyxFQUtBQSwyQzs7O0tBNUJDVixPOztBQTRGU0Esc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZmlsZS5jNjI3ZWM2OGY1OTRlYmViMDA1Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEFwcExheW91dCBmcm9tICcuLi9jb21wb25lbnQvQXBwTGF5b3V0J1xuaW1wb3J0IE5pY2tuYW1lRWRpdEZvcm0gZnJvbSAnLi4vY29tcG9uZW50L05pY2tuYW1lRWRpdEZvcm0nXG5pbXBvcnQgRm9sbG93TGlzdCBmcm9tICcuLi9jb21wb25lbnQvRm9sbG93TGlzdCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCB7RU5EfSBmcm9tICdyZWR1eC1zYWdhJ1xuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InXG5pbXBvcnQge3VzZURpc3BhdGNoLCB1c2VTZWxlY3Rvcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHtMT0FEX0ZPTExPV0VSU19SRVFVRVNULCBMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVCwgTE9BRF9NWV9JTkZPX1JFUVVFU1R9IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInXG5pbXBvcnQgd3JhcHBlciBmcm9tIFwiLi4vc3RvcmUvY29uZmlndXJlU3RvcmVcIjtcbi8vaW1wb3J0IEZvbGxvd2VyTGlzdCBmcm9tICcuLi9jb21wb25lbnQvRm9sbG93ZXJMaXN0J1xuXG4vLyBmZXRjaGVyIOulvCDri6TrpbjqsbjroZwg67CU6r6466m0IGdyYXBocWwg64+EIOyTuOyImOyeiOuLpFxuY29uc3QgZmV0Y2hlciA9ICh1cmwpID0+IGF4aW9zLmdldCh1cmwsIHt3aXRoQ3JlZGVudGlhbHM6IHRydWV9KS50aGVuKChyZXN1bHQpID0+IHJlc3VsdC5kYXRhKVxuXG5jb25zdCBQcm9maWxlID0gKCkgPT4ge1xuXHQvKiBmcm9udFxuXHRjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG5cdGNvbnN0IGZvbGxvd2luZ0xpc3QgPSBbe25pY2tuYW1lOiAn67mE7YOA66+8J30sIHtuaWNrbmFtZTogJ+yXoOyVjOuvvCd9LCB7bmlja25hbWU6ICfsmKzrp4jsiqTthLAnfV0gZnJvbnQgZWFybHlcblx0Y29uc3QgZm9sbG93ZXJMaXN0ID0gW3tuaWNrbmFtZTogJ+u5hO2DgOuvvCd9LCB7bmlja25hbWU6ICfsl6DslYzrr7wnfSwge25pY2tuYW1lOiAn7Jis66eI7Iqk7YSwJ31dKi9cblx0Y29uc3Qge21lfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcilcblx0Y29uc3QgW2ZvbGxvd2Vyc0xpbWl0LCBzZXRGb2xsb3dlcnNMaW1pdF0gPSB1c2VTdGF0ZSgzKVxuXHRjb25zdCBbZm9sbG93aW5nc0xpbWl0LCBzZXRGb2xsb3dpbmdzTGltaXRdID0gdXNlU3RhdGUoMylcblxuXHQvKnVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0ZGlzcGF0Y2goe1xuXHRcdFx0dHlwZTogTE9BRF9GT0xMT1dFUlNfUkVRVUVTVCxcblx0XHR9KTtcblx0XHRkaXNwYXRjaCh7XG5cdFx0XHR0eXBlOiBMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVCxcblx0XHR9KTtcblx0fSwgW10pOyovXG5cdC8vZm9sbG93ZXJzIOu2iOufrOyYpOq4sFxuXG5cdC8vIGRhdGEsIGVycm9yIOqwgCDrkZjri6Qg7J6I64uk66m0IOyEseqzte2WiOqxsOuCmCwg7Iuk7Yyo7ZaI6rGw64KYLCDrkZjri6Qg7JeG64uk66m0IOuhnOuUqeykkVxuXHRjb25zdCB7XG5cdFx0ZGF0YTogZm9sbG93ZXJzRGF0YSxcblx0XHRlcnJvcjogZm9sbG93ZXJFcnJvclxuXHR9ID0gdXNlU1dSKGBodHRwOi8vbG9jYWxob3N0OjMwNjUvdXNlci9mb2xsb3dlcnM/bGltaXQ9JHtmb2xsb3dlcnNMaW1pdH1gLCBmZXRjaGVyKSAvL2ZldGNoZXIg6rCAIHVybCDrpbwg7Ja065a76rKMIOqwgOyguOyYrOyngOyXkCDrjIDtlZzqsbjsoIHslrTspIxcblx0Ly9mb2xsb3dpbmdzIOu2iOufrOyYpOq4sFxuXHRjb25zdCB7XG5cdFx0ZGF0YTogZm9sbG93aW5nc0RhdGEsXG5cdFx0ZXJyb3I6IGZvbGxvd2luZ0Vycm9yXG5cdH0gPSB1c2VTV1IoYGh0dHA6Ly9sb2NhbGhvc3Q6MzA2NS91c2VyL2ZvbGxvd2luZ3M/bGltaXQ9JHtmb2xsb3dpbmdzTGltaXR9YCwgZmV0Y2hlcikgLy9mZXRjaGVyIOqwgCB1cmwg66W8IOyWtOuWu+qyjCDqsIDsoLjsmKzsp4Dsl5Ag64yA7ZWc6rG47KCB7Ja07KSMXG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRpZiAoIShtZSAmJiBtZS5pZCkpIHsgLy8g7ZSE66Gc7ZWEIO2OmOydtOyngOyXkOyEnCDroZzqt7jslYTsm4PtlojsnYQg6rK97JqwIG1haW4g7ZmU66m07Jy866GcXG5cdFx0XHRSb3V0ZXIucHVzaCgnLycpXG5cdFx0fVxuXHR9LCBbbWUgJiYgbWUuaWRdKVxuXG5cdC8vIGNhbGxiYWNrIO2VqOyImOuKlCDstZzshoztlZwgcmV0dXJuIOychOyqveyXkCDsoIHsnpBcblx0Ly8g67KE7Yq87J2EIOuIjOufrOyjvOuptCBsaW1pdCDqsIAg6riw7KG0IGxpbWl0IOuztOuLpCAzIOyUqSDripjslrTrgpzri6Rcblx0Y29uc3QgbG9hZE1vcmVGb2xsb3dpbmdzID0gdXNlQ2FsbGJhY2soXG5cdFx0XHQoKSA9PiB7XG5cdFx0XHRcdHNldEZvbGxvd2luZ3NMaW1pdCgocHJldikgPT4gcHJldiArIDMpO1xuXHRcdFx0fSxcblx0XHRcdFtdLFxuXHQpO1xuXG5cdGNvbnN0IGxvYWRNb3JlRm9sbG93ZXJzTGltaXQgPSB1c2VDYWxsYmFjayhcblx0XHRcdCgpID0+IHtcblx0XHRcdFx0c2V0Rm9sbG93ZXJzTGltaXQoKHByZXYpID0+IHByZXYgKyAzKVxuXHRcdFx0fSxcblx0XHRcdFtdLFxuXHQpO1xuXG5cblx0aWYgKCFtZSkgeyAvLyDrgrTqsIAg7JeG7Jy866m0IOuqu+uTpOyWtOqwgOqyjFxuXHRcdHJldHVybiAn64K0IOygleuztCDroZzrlKnspJEuLi4nO1xuXHR9XG5cblx0aWYgKGZvbGxvd2VyRXJyb3IgfHwgZm9sbG93aW5nRXJyb3IpIHtcblx0XHRjb25zb2xlLmVycm9yKGZvbGxvd2VyRXJyb3IgfHwgZm9sbG93aW5nRXJyb3IpXG5cdFx0cmV0dXJuICftjJTroZzsnokv7YyU66Gc7JuMIOuhnOuUqSDspJEg7JeQ65+s6rCAIOuwnOyDne2WiOyKteuLiOuLpC4nXG5cdH1cblxuXHRyZXR1cm4gKFxuXHRcdFx0PD5cblx0XHRcdFx0PEhlYWQ+XG5cdFx0XHRcdFx0PHRpdGxlPuuCtCDtlITroZztlYQgfCBOb2RlQmlyZDwvdGl0bGU+XG5cdFx0XHRcdDwvSGVhZD5cblx0XHRcdFx0PEFwcExheW91dD5cblx0XHRcdFx0XHQ8Tmlja25hbWVFZGl0Rm9ybS8+XG5cdFx0XHRcdFx0PEZvbGxvd0xpc3QgaGVhZGVyPVwi7YyU66Gc7JyZIOuqqeuhnVwiIGRhdGE9e2ZvbGxvd2luZ3NEYXRhfS8+XG5cdFx0XHRcdFx0PEZvbGxvd0xpc3QgaGVhZGVyPVwi7YyU66Gc7JuMIOuqqeuhnVwiIGRhdGE9e2ZvbGxvd2Vyc0RhdGF9Lz5cblx0XHRcdFx0PC9BcHBMYXlvdXQ+XG5cdFx0XHQ8Lz5cblx0KVxufVxuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gd3JhcHBlci5nZXRTZXJ2ZXJTaWRlUHJvcHMoYXN5bmMgKGNvbnRleHQpID0+IHtcblx0Y29uc29sZS5sb2coJ1Byb2ZpbGUgZ2V0U2VydmVyU2lkZVByb3BzIFN0YXJ0Jylcblx0Y29uc29sZS5sb2coY29udGV4dC5yZXEuaGVhZGVycylcblx0Y29uc3QgY29va2llID0gY29udGV4dC5yZXEgPyBjb250ZXh0LnJlcS5oZWFkZXJzLmNvb2tpZSA6ICcnO1xuXHRheGlvcy5kZWZhdWx0cy5oZWFkZXJzLkNvb2tpZSA9ICcnO1xuXHRpZiAoY29udGV4dC5yZXEgJiYgY29va2llKSB7XG5cdFx0YXhpb3MuZGVmYXVsdHMuaGVhZGVycy5Db29raWUgPSBjb29raWU7XG5cdH1cblx0Y29udGV4dC5zdG9yZS5kaXNwYXRjaCh7XG5cdFx0dHlwZTogTE9BRF9NWV9JTkZPX1JFUVVFU1QsXG5cdH0pXG5cdGNvbnRleHQuc3RvcmUuZGlzcGF0Y2goRU5EKVxuXHRjb25zb2xlLmxvZygnUHJvZmlsZSBnZXRTZXJ2ZXJTaWRlUHJvcHMgRU5EJylcblx0YXdhaXQgY29udGV4dC5zdG9yZS5zYWdhVGFzay50b1Byb21pc2UoKVxufSlcblxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZVxuXG4iXSwic291cmNlUm9vdCI6IiJ9