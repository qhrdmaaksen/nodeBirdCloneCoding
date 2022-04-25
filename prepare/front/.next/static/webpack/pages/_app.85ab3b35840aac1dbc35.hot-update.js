webpackHotUpdate_N_E("pages/_app",{

/***/ "./sagas/user.js":
/*!***********************!*\
  !*** ./sagas/user.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return userSaga; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");


var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(logIn),
    _marked2 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(logOut),
    _marked3 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(follow),
    _marked4 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(unfollow),
    _marked5 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(signUp),
    _marked6 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchFollow),
    _marked7 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchUnFollow),
    _marked8 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLogIn),
    _marked9 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLogOut),
    _marked10 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchSignUp),
    _marked11 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(userSaga);





function logInAPI(data) {
  // gererator 아님
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/api/login', data); // 실제 서버에 로그인 요청을 보냄
} // 테스트 코드
// const l = logIn({type: 'LOG_IN_REQUEST', data: {id: 'rlaalsdn8@naver.com'}})
// 		l.next();
// 		l.next();
/////////////////


function logIn(action) {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function logIn$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          // 요청 실패 대비
          console.log('saga logIn');
          _context.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000);

        case 4:
          _context.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOG_IN_SUCCESS"],
            data: action.data //data: result.data // (성공 결과 담김)

          });

        case 6:
          _context.next = 13;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          console.error('logIn' + _context.t0);
          _context.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            // put 은 dispatch 라고 생각하자
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOG_IN_FAILURE"],
            error: _context.t0.response.data // (실패 결과 담김)

          });

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 8]]);
}

function logOutAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/api/logout');
}

function logOut() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function logOut$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000);

        case 3:
          _context2.next = 5;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOG_OUT_SUCCESS"] //data: result.data // (성공 결과 담김)

          });

        case 5:
          _context2.next = 12;
          break;

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          console.error('logOut : ' + _context2.t0);
          _context2.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            // put 은 dispatch 라고 생각하자
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOG_OUT_FAILURE"],
            error: _context2.t0.response.data // (실패 결과 담김)

          });

        case 12:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[0, 7]]);
}

function followAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/api/follow', data);
}

function follow(action) {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function follow$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000);

        case 3:
          _context3.next = 5;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["FOLLOW_SUCCESS"],
            data: action.data
          });

        case 5:
          _context3.next = 12;
          break;

        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);
          console.error('follow error : ' + _context3.t0);
          _context3.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["FOLLOW_FAILURE"],
            data: _context3.t0.response.data
          });

        case 12:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[0, 7]]);
}

function unfollowAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/api/unfollow', data);
}

function unfollow(action) {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function unfollow$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000);

        case 3:
          _context4.next = 5;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["UNFOLLOW_SUCCESS"],
            data: action.data
          });

        case 5:
          _context4.next = 12;
          break;

        case 7:
          _context4.prev = 7;
          _context4.t0 = _context4["catch"](0);
          console.error('unfollow error : ' + _context4.t0);
          _context4.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["UNFOLLOW_FAILURE"],
            data: _context4.t0.response.data
          });

        case 12:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4, null, [[0, 7]]);
}

function signUpAPI() {
  // back end server addr
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('http://localhost:3065/user');
}

function signUp() {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function signUp$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(signUpAPI);

        case 3:
          result = _context5.sent;
          console.log('sign up result : ' + result);
          _context5.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["SIGN_UP_SUCCESS"],
            data: result.data
          });

        case 7:
          _context5.next = 14;
          break;

        case 9:
          _context5.prev = 9;
          _context5.t0 = _context5["catch"](0);
          console.error('signUp : ' + _context5.t0);
          _context5.next = 14;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["SIGN_UP_FAILURE"],
            error: _context5.t0.response.data
          });

        case 14:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5, null, [[0, 9]]);
}

function watchFollow() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchFollow$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_3__["FOLLOW_REQUEST"], follow);

        case 2:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6);
}

function watchUnFollow() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchUnFollow$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_3__["UNFOLLOW_REQUEST"], unfollow);

        case 2:
        case "end":
          return _context7.stop();
      }
    }
  }, _marked7);
}

function watchLogIn() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLogIn$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOG_IN_REQUEST"], logIn);

        case 2:
        case "end":
          return _context8.stop();
      }
    }
  }, _marked8);
}

function watchLogOut() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLogOut$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOG_OUT_REQUEST"], logOut);

        case 2:
        case "end":
          return _context9.stop();
      }
    }
  }, _marked9);
}

function watchSignUp() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchSignUp$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          _context10.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_3__["SIGN_UP_REQUEST"], signUp);

        case 2:
        case "end":
          return _context10.stop();
      }
    }
  }, _marked10);
}

function userSaga() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function userSaga$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          _context11.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchFollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchUnFollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLogIn), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLogOut), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchSignUp)]);

        case 2:
        case "end":
          return _context11.stop();
      }
    }
  }, _marked11);
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvdXNlci5qcyJdLCJuYW1lcyI6WyJsb2dJbiIsImxvZ091dCIsImZvbGxvdyIsInVuZm9sbG93Iiwic2lnblVwIiwid2F0Y2hGb2xsb3ciLCJ3YXRjaFVuRm9sbG93Iiwid2F0Y2hMb2dJbiIsIndhdGNoTG9nT3V0Iiwid2F0Y2hTaWduVXAiLCJ1c2VyU2FnYSIsImxvZ0luQVBJIiwiZGF0YSIsImF4aW9zIiwicG9zdCIsImFjdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJkZWxheSIsInB1dCIsInR5cGUiLCJMT0dfSU5fU1VDQ0VTUyIsImVycm9yIiwiTE9HX0lOX0ZBSUxVUkUiLCJyZXNwb25zZSIsImxvZ091dEFQSSIsIkxPR19PVVRfU1VDQ0VTUyIsIkxPR19PVVRfRkFJTFVSRSIsImZvbGxvd0FQSSIsIkZPTExPV19TVUNDRVNTIiwiRk9MTE9XX0ZBSUxVUkUiLCJ1bmZvbGxvd0FQSSIsIlVORk9MTE9XX1NVQ0NFU1MiLCJVTkZPTExPV19GQUlMVVJFIiwic2lnblVwQVBJIiwiY2FsbCIsInJlc3VsdCIsIlNJR05fVVBfU1VDQ0VTUyIsIlNJR05fVVBfRkFJTFVSRSIsInRha2VMYXRlc3QiLCJGT0xMT1dfUkVRVUVTVCIsIlVORk9MTE9XX1JFUVVFU1QiLCJMT0dfSU5fUkVRVUVTVCIsIkxPR19PVVRfUkVRVUVTVCIsIlNJR05fVVBfUkVRVUVTVCIsImFsbCIsImZvcmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tHQTBCVUEsSzttR0F1QkFDLE07bUdBcUJBQyxNO21HQW9CQUMsUTttR0FxQkFDLE07bUdBa0JBQyxXO21HQUlBQyxhO21HQUlBQyxVO21HQUlBQyxXO29HQUlBQyxXO29HQUllQyxROztBQXJKekI7QUFDQTtBQUNBOztBQWVBLFNBQVNDLFFBQVQsQ0FBa0JDLElBQWxCLEVBQXdCO0FBQUU7QUFDekIsU0FBT0MsNENBQUssQ0FBQ0MsSUFBTixDQUFXLFlBQVgsRUFBeUJGLElBQXpC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LENBQUNFLCtEQUFELEVBQW1CdEMsUUFBbkIsQ0FBaEI7O0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBSUEsU0FBVUksVUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQyxpQkFBTWdDLHFFQUFVLENBQUNHLDZEQUFELEVBQWlCMUMsS0FBakIsQ0FBaEI7O0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBSUEsU0FBVVEsV0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQyxpQkFBTStCLHFFQUFVLENBQUNJLDhEQUFELEVBQWtCMUMsTUFBbEIsQ0FBaEI7O0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBSUEsU0FBVVEsV0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQyxpQkFBTThCLHFFQUFVLENBQUNLLDhEQUFELEVBQWtCeEMsTUFBbEIsQ0FBaEI7O0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBSWUsU0FBVU0sUUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDZCxpQkFBTW1DLDhEQUFHLENBQUMsQ0FDVEMsK0RBQUksQ0FBQ3pDLFdBQUQsQ0FESyxFQUVUeUMsK0RBQUksQ0FBQ3hDLGFBQUQsQ0FGSyxFQUdUd0MsK0RBQUksQ0FBQ3ZDLFVBQUQsQ0FISyxFQUlUdUMsK0RBQUksQ0FBQ3RDLFdBQUQsQ0FKSyxFQUtUc0MsK0RBQUksQ0FBQ3JDLFdBQUQsQ0FMSyxDQUFELENBQVQ7O0FBRGM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC44NWFiM2IzNTg0MGFhYzFkYmMzNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHthbGwsIGNhbGwsIGRlbGF5LCBmb3JrLCBwdXQsIHRha2VMYXRlc3R9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQge1xyXG5cdEZPTExPV19GQUlMVVJFLFxyXG5cdEZPTExPV19SRVFVRVNULCBGT0xMT1dfU1VDQ0VTUyxcclxuXHRMT0dfSU5fRkFJTFVSRSxcclxuXHRMT0dfSU5fUkVRVUVTVCxcclxuXHRMT0dfSU5fU1VDQ0VTUyxcclxuXHRMT0dfT1VUX0ZBSUxVUkUsXHJcblx0TE9HX09VVF9SRVFVRVNULFxyXG5cdExPR19PVVRfU1VDQ0VTUyxcclxuXHRTSUdOX1VQX0ZBSUxVUkUsXHJcblx0U0lHTl9VUF9SRVFVRVNULFxyXG5cdFNJR05fVVBfU1VDQ0VTUywgVU5GT0xMT1dfRkFJTFVSRSwgVU5GT0xMT1dfUkVRVUVTVCwgVU5GT0xMT1dfU1VDQ0VTUyxcclxufSBmcm9tIFwiLi4vcmVkdWNlcnMvdXNlclwiO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGxvZ0luQVBJKGRhdGEpIHsgLy8gZ2VyZXJhdG9yIOyVhOuLmFxyXG5cdHJldHVybiBheGlvcy5wb3N0KCcvYXBpL2xvZ2luJywgZGF0YSkgLy8g7Iuk7KCcIOyEnOuyhOyXkCDroZzqt7jsnbgg7JqU7LKt7J2EIOuztOuDhFxyXG59XHJcblxyXG4vLyDthYzsiqTtirgg7L2U65OcXHJcbi8vIGNvbnN0IGwgPSBsb2dJbih7dHlwZTogJ0xPR19JTl9SRVFVRVNUJywgZGF0YToge2lkOiAncmxhYWxzZG44QG5hdmVyLmNvbSd9fSlcclxuLy8gXHRcdGwubmV4dCgpO1xyXG4vLyBcdFx0bC5uZXh0KCk7XHJcbi8vLy8vLy8vLy8vLy8vLy8vXHJcbmZ1bmN0aW9uKiBsb2dJbihhY3Rpb24pIHsgLy8gbG9naW4gYWN0aW9uIHJlcXVlc3Qg6rCAIGFjdGlvbiDsl5Ag7KCE64usXHJcblx0dHJ5IHsgLy8g7JqU7LKtIOyLpO2MqCDrjIDruYRcclxuXHRcdGNvbnNvbGUubG9nKCdzYWdhIGxvZ0luJylcclxuXHRcdHlpZWxkIGRlbGF5KDEwMDApXHJcblx0XHQvL2NvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9nSW5BUEksIGFjdGlvbi5kYXRhKSAvLyDshJzrsoTsl5DshJwg67Cb7J2AIOqysOqzvCDqsJLsnYQg67Cb7J2MXHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOiBMT0dfSU5fU1VDQ0VTUyxcclxuXHRcdFx0ZGF0YTogYWN0aW9uLmRhdGEsXHJcblx0XHRcdC8vZGF0YTogcmVzdWx0LmRhdGEgLy8gKOyEseqztSDqsrDqs7wg64u06rmAKVxyXG5cdFx0fSlcclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoJ2xvZ0luJyArIGVycilcclxuXHRcdHlpZWxkIHB1dCh7IC8vIHB1dCDsnYAgZGlzcGF0Y2gg65286rOgIOyDneqwge2VmOyekFxyXG5cdFx0XHR0eXBlOiBMT0dfSU5fRkFJTFVSRSxcclxuXHRcdFx0ZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhIC8vICjsi6TtjKgg6rKw6rO8IOuLtOq5gClcclxuXHRcdH0pXHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2dPdXRBUEkoKSB7XHJcblx0cmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvbG9nb3V0JylcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvZ091dCgpIHtcclxuXHR0cnkgeyAvLyDsmpTssq0g7Iuk7YyoIOuMgOu5hFxyXG5cdFx0eWllbGQgZGVsYXkoMTAwMClcclxuXHRcdC8vY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2dPdXRBUEkpIC8vIOyEnOuyhOyXkOyEnCDrsJvsnYAg6rKw6rO8IOqwkuydhCDrsJvsnYxcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IExPR19PVVRfU1VDQ0VTUyxcclxuXHRcdFx0Ly9kYXRhOiByZXN1bHQuZGF0YSAvLyAo7ISx6rO1IOqysOqzvCDri7TquYApXHJcblx0XHR9KVxyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0Y29uc29sZS5lcnJvcignbG9nT3V0IDogJyArIGVycilcclxuXHRcdHlpZWxkIHB1dCh7IC8vIHB1dCDsnYAgZGlzcGF0Y2gg65286rOgIOyDneqwge2VmOyekFxyXG5cdFx0XHR0eXBlOiBMT0dfT1VUX0ZBSUxVUkUsXHJcblx0XHRcdGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSAvLyAo7Iuk7YyoIOqysOqzvCDri7TquYApXHJcblx0XHR9KVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gZm9sbG93QVBJKGRhdGEpIHtcclxuXHRyZXR1cm4gYXhpb3MucG9zdCgnL2FwaS9mb2xsb3cnLCBkYXRhKVxyXG59XHJcblxyXG5mdW5jdGlvbiogZm9sbG93KGFjdGlvbikge1xyXG5cdHRyeSB7XHJcblx0XHR5aWVsZCBkZWxheSgxMDAwKVxyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogRk9MTE9XX1NVQ0NFU1MsXHJcblx0XHRcdGRhdGE6IGFjdGlvbi5kYXRhXHJcblx0XHR9KVxyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0Y29uc29sZS5lcnJvcignZm9sbG93IGVycm9yIDogJyArIGVycilcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IEZPTExPV19GQUlMVVJFLFxyXG5cdFx0XHRkYXRhOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuXHRcdH0pXHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiB1bmZvbGxvd0FQSShkYXRhKSB7XHJcblx0cmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvdW5mb2xsb3cnLCBkYXRhKVxyXG59XHJcblxyXG5mdW5jdGlvbiogdW5mb2xsb3coYWN0aW9uKSB7XHJcblx0dHJ5IHtcclxuXHRcdHlpZWxkIGRlbGF5KDEwMDApXHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOiBVTkZPTExPV19TVUNDRVNTLFxyXG5cdFx0XHRkYXRhOiBhY3Rpb24uZGF0YVxyXG5cdFx0fSlcclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoJ3VuZm9sbG93IGVycm9yIDogJyArIGVycilcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IFVORk9MTE9XX0ZBSUxVUkUsXHJcblx0XHRcdGRhdGE6IGVyci5yZXNwb25zZS5kYXRhLFxyXG5cdFx0fSlcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNpZ25VcEFQSSgpIHtcclxuXHQvLyBiYWNrIGVuZCBzZXJ2ZXIgYWRkclxyXG5cdHJldHVybiBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwNjUvdXNlcicpXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBzaWduVXAoKSB7XHJcblx0dHJ5IHtcclxuXHRcdC8veWllbGQgZGVsYXkoMTAwMClcclxuXHRcdGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoc2lnblVwQVBJKVxyXG5cdFx0Y29uc29sZS5sb2coJ3NpZ24gdXAgcmVzdWx0IDogJyArIHJlc3VsdClcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IFNJR05fVVBfU1VDQ0VTUyxcclxuXHRcdFx0ZGF0YTogcmVzdWx0LmRhdGFcclxuXHRcdH0pXHJcblx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRjb25zb2xlLmVycm9yKCdzaWduVXAgOiAnICsgZXJyKVxyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogU0lHTl9VUF9GQUlMVVJFLFxyXG5cdFx0XHRlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGFcclxuXHRcdH0pXHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hGb2xsb3coKSB7XHJcblx0eWllbGQgdGFrZUxhdGVzdChGT0xMT1dfUkVRVUVTVCwgZm9sbG93KVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hVbkZvbGxvdygpIHtcclxuXHR5aWVsZCB0YWtlTGF0ZXN0KFVORk9MTE9XX1JFUVVFU1QsIHVuZm9sbG93KVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2dJbigpIHtcdC8vIOuhnOq3uOyduCDslaHshZjsnbQg7Iuk7ZaJ65Cg65WM6rmM7KeAIOq4sOuLpOumrOqyoOuLpOuKlCDrnLtcclxuXHR5aWVsZCB0YWtlTGF0ZXN0KExPR19JTl9SRVFVRVNULCBsb2dJbikgLy9MT0dfSU5fUkVRVUVTVCDslaHshZjsnbQg7Iuk7ZaJ65CY66m0IGxvZ0luIO2VqOyImCDsi6TtlolcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9nT3V0KCkge1x0Ly8g66Gc6re47JWE7JuDIOyVoeyFmOydtCDsi6TtlonrkKDrlYzquYzsp4Ag6riw64uk66as6rKg64uk64qUIOucu1xyXG5cdHlpZWxkIHRha2VMYXRlc3QoTE9HX09VVF9SRVFVRVNULCBsb2dPdXQpIC8vTE9HX09VVF9SRVFVRVNUIOyVoeyFmOydtCDsi6TtlonrkJjrqbQgbG9nSW4g7ZWo7IiYIOyLpO2WiVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hTaWduVXAoKSB7XHQvLyDtmozsm5DqsIDsnoUg7JWh7IWY7J20IOyLpO2WieuQoOuVjOq5jOyngCDquLDri6TrpqzqsqDri6TripQg65y7XHJcblx0eWllbGQgdGFrZUxhdGVzdChTSUdOX1VQX1JFUVVFU1QsIHNpZ25VcCkgLy8gU0lHTl9VUF9SRVFVRVNUIOyVoeyFmOydtCDsi6TtlonrkJjrqbQgbG9nSW4g7ZWo7IiYIOyLpO2WiVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogdXNlclNhZ2EoKSB7XHJcblx0eWllbGQgYWxsKFtcclxuXHRcdGZvcmsod2F0Y2hGb2xsb3cpLFxyXG5cdFx0Zm9yayh3YXRjaFVuRm9sbG93KSxcclxuXHRcdGZvcmsod2F0Y2hMb2dJbiksXHJcblx0XHRmb3JrKHdhdGNoTG9nT3V0KSxcclxuXHRcdGZvcmsod2F0Y2hTaWduVXApLFxyXG5cdF0pXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9