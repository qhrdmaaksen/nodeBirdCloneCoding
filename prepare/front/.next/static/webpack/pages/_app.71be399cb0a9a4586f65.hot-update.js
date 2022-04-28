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
    _marked3 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(changeNickname),
    _marked4 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(loadMyInfo),
    _marked5 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(follow),
    _marked6 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(unfollow),
    _marked7 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(signUp),
    _marked8 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchChangeNickname),
    _marked9 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLoadMyInfo),
    _marked10 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchFollow),
    _marked11 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchUnFollow),
    _marked12 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLogIn),
    _marked13 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLogOut),
    _marked14 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchSignUp),
    _marked15 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(userSaga);





function logInAPI(data) {
  // generator 아님
  //return axios.post('/api/login', data) // 실제 서버에 로그인 요청을 보냄 // front
  // 실제 서버에 로그인 요청을 보냄 // back
  //return axios.post('http://localhost:3065/user/login', data)
  // localhost 중복 없애기
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/user/login', data);
} // 테스트 코드
// const l = logIn({type: 'LOG_IN_REQUEST', data: {id: 'rlaalsdn8@naver.com'}})
// 		l.next();
// 		l.next();
/////////////////


function logIn(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function logIn$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(logInAPI, action.data);

        case 3:
          result = _context.sent;
          // 서버에서 받은 결과 값을 받음
          console.log('saga logIn 실행중::', action.data);
          _context.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOG_IN_SUCCESS"],
            //data: action.data, // front
            data: result.data // (성공 결과 담김) back

          });

        case 7:
          console.log('saga logIn 완료 ::', result);
          _context.next = 15;
          break;

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          console.error('logIn', _context.t0);
          _context.next = 15;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            // put 은 dispatch 라고 생각하자
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOG_IN_FAILURE"],
            error: _context.t0.response.data // (실패 결과 담김)

          });

        case 15:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 10]]);
}

function logOutAPI() {
  // return axios.post('/api/logout') front
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/user/logout');
}

function logOut() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function logOut$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(logOutAPI);

        case 3:
          // 서버에서 받은 결과 값을 받음 back
          console.log('sagas:: logout 실행');
          _context2.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOG_OUT_SUCCESS"]
          });

        case 6:
          console.log('sagas:: logout 완료');
          _context2.next = 14;
          break;

        case 9:
          _context2.prev = 9;
          _context2.t0 = _context2["catch"](0);
          console.error('front logOut : ', _context2.t0);
          _context2.next = 14;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            // put 은 dispatch 라고 생각하자
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOG_OUT_FAILURE"],
            error: _context2.t0.response.data // (실패 결과 담김)

          });

        case 14:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[0, 9]]);
}

function changeNicknameAPI(data) {
  // generator 아님
  // 실제 서버에 로그인 요청을 보냄 // back
  //return axios.post('http://localhost:3065/user/login', data)
  // localhost 중복 없애기
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.patch('/user/nickname', {
    nickname: data
  });
}

function changeNickname(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function changeNickname$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(changeNicknameAPI, action.data);

        case 3:
          result = _context3.sent;
          // 서버에서 받은 결과 값을 받음
          console.log('saga changeNickname 실행중::', action.data);
          _context3.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["CHANGE_NICKNAME_SUCCESS"],
            //data: action.data, // front
            data: result.data // (성공 결과 담김) back

          });

        case 7:
          console.log('saga changeNickname 완료 ::', result);
          _context3.next = 15;
          break;

        case 10:
          _context3.prev = 10;
          _context3.t0 = _context3["catch"](0);
          console.error('changeNickname', _context3.t0);
          _context3.next = 15;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            // put 은 dispatch 라고 생각하자
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["CHANGE_NICKNAME_FAILURE"],
            error: _context3.t0.response.data // (실패 결과 담김)

          });

        case 15:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[0, 10]]);
}

function loadMyInfoAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/user');
}

function loadMyInfo(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function loadMyInfo$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadMyInfoAPI, action.data);

        case 3:
          result = _context4.sent;
          console.log('saga loadMyInfo 실행중::', action.data);
          _context4.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOAD_MY_INFO_SUCCESS"],
            data: result.data
          });

        case 7:
          console.log('saga loadMyInfo 완료', result);
          _context4.next = 15;
          break;

        case 10:
          _context4.prev = 10;
          _context4.t0 = _context4["catch"](0);
          console.error('saga loadMyInfo error : ', _context4.t0);
          _context4.next = 15;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOAD_MY_INFO_FAILURE"],
            error: _context4.t0.response.data
          });

        case 15:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4, null, [[0, 10]]);
}

function followAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/api/follow', data);
}

function follow(action) {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function follow$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000);

        case 3:
          _context5.next = 5;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["FOLLOW_SUCCESS"],
            data: action.data
          });

        case 5:
          _context5.next = 12;
          break;

        case 7:
          _context5.prev = 7;
          _context5.t0 = _context5["catch"](0);
          console.error('saga follow error :: ', _context5.t0);
          _context5.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["FOLLOW_FAILURE"],
            error: _context5.t0.response.data
          });

        case 12:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5, null, [[0, 7]]);
}

function unfollowAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/api/unfollow', data);
}

function unfollow(action) {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function unfollow$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000);

        case 3:
          _context6.next = 5;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["UNFOLLOW_SUCCESS"],
            data: action.data
          });

        case 5:
          _context6.next = 12;
          break;

        case 7:
          _context6.prev = 7;
          _context6.t0 = _context6["catch"](0);
          console.error('unfollow error : ', _context6.t0);
          _context6.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["UNFOLLOW_FAILURE"],
            error: _context6.t0.response.data
          });

        case 12:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6, null, [[0, 7]]);
}

function signUpAPI(data) {
  // back end server addr
  // data 는 email, nickname, password object
  //return axios.post('/api/signup', data) // front
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/user', data); // back
}

function signUp(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function signUp$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          _context7.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(signUpAPI, action.data);

        case 3:
          result = _context7.sent;
          console.log('saga sign up result 실행중 :: ', action.data);
          _context7.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["SIGN_UP_SUCCESS"] //data: result.data

          });

        case 7:
          console.log('saga sign up 완료 :: ', result);
          _context7.next = 15;
          break;

        case 10:
          _context7.prev = 10;
          _context7.t0 = _context7["catch"](0);
          console.error('saga signUp error : ', _context7.t0);
          _context7.next = 15;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["SIGN_UP_FAILURE"],
            error: _context7.t0.response.data
          });

        case 15:
        case "end":
          return _context7.stop();
      }
    }
  }, _marked7, null, [[0, 10]]);
}

function watchChangeNickname() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchChangeNickname$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_3__["CHANGE_NICKNAME_REQUEST"], changeNickname);

        case 2:
        case "end":
          return _context8.stop();
      }
    }
  }, _marked8);
}

function watchLoadMyInfo() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLoadMyInfo$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOAD_MY_INFO_REQUEST"], loadMyInfo);

        case 2:
        case "end":
          return _context9.stop();
      }
    }
  }, _marked9);
}

function watchFollow() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchFollow$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          _context10.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_3__["FOLLOW_REQUEST"], follow);

        case 2:
        case "end":
          return _context10.stop();
      }
    }
  }, _marked10);
}

function watchUnFollow() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchUnFollow$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          _context11.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_3__["UNFOLLOW_REQUEST"], unfollow);

        case 2:
        case "end":
          return _context11.stop();
      }
    }
  }, _marked11);
}

function watchLogIn() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLogIn$(_context12) {
    while (1) {
      switch (_context12.prev = _context12.next) {
        case 0:
          _context12.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOG_IN_REQUEST"], logIn);

        case 2:
        case "end":
          return _context12.stop();
      }
    }
  }, _marked12);
}

function watchLogOut() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLogOut$(_context13) {
    while (1) {
      switch (_context13.prev = _context13.next) {
        case 0:
          _context13.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOG_OUT_REQUEST"], logOut);

        case 2:
        case "end":
          return _context13.stop();
      }
    }
  }, _marked13);
}

function watchSignUp() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchSignUp$(_context14) {
    while (1) {
      switch (_context14.prev = _context14.next) {
        case 0:
          _context14.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_3__["SIGN_UP_REQUEST"], signUp);

        case 2:
        case "end":
          return _context14.stop();
      }
    }
  }, _marked14);
}

function userSaga() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function userSaga$(_context15) {
    while (1) {
      switch (_context15.prev = _context15.next) {
        case 0:
          _context15.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchChangeNickname), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadMyInfo), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchFollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchUnFollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLogIn), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLogOut), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchSignUp)]);

        case 2:
        case "end":
          return _context15.stop();
      }
    }
  }, _marked15);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvdXNlci5qcyJdLCJuYW1lcyI6WyJsb2dJbiIsImxvZ091dCIsImNoYW5nZU5pY2tuYW1lIiwibG9hZE15SW5mbyIsImZvbGxvdyIsInVuZm9sbG93Iiwic2lnblVwIiwid2F0Y2hDaGFuZ2VOaWNrbmFtZSIsIndhdGNoTG9hZE15SW5mbyIsIndhdGNoRm9sbG93Iiwid2F0Y2hVbkZvbGxvdyIsIndhdGNoTG9nSW4iLCJ3YXRjaExvZ091dCIsIndhdGNoU2lnblVwIiwidXNlclNhZ2EiLCJsb2dJbkFQSSIsImRhdGEiLCJheGlvcyIsInBvc3QiLCJhY3Rpb24iLCJjYWxsIiwicmVzdWx0IiwiY29uc29sZSIsImxvZyIsInB1dCIsInR5cGUiLCJMT0dfSU5fU1VDQ0VTUyIsImVycm9yIiwiTE9HX0lOX0ZBSUxVUkUiLCJyZXNwb25zZSIsImxvZ091dEFQSSIsIkxPR19PVVRfU1VDQ0VTUyIsIkxPR19PVVRfRkFJTFVSRSIsImNoYW5nZU5pY2tuYW1lQVBJIiwicGF0Y2giLCJuaWNrbmFtZSIsIkNIQU5HRV9OSUNLTkFNRV9TVUNDRVNTIiwiQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUiLCJsb2FkTXlJbmZvQVBJIiwiZ2V0IiwiTE9BRF9NWV9JTkZPX1NVQ0NFU1MiLCJMT0FEX01ZX0lORk9fRkFJTFVSRSIsImZvbGxvd0FQSSIsImRlbGF5IiwiRk9MTE9XX1NVQ0NFU1MiLCJGT0xMT1dfRkFJTFVSRSIsInVuZm9sbG93QVBJIiwiVU5GT0xMT1dfU1VDQ0VTUyIsIlVORk9MTE9XX0ZBSUxVUkUiLCJzaWduVXBBUEkiLCJTSUdOX1VQX1NVQ0NFU1MiLCJTSUdOX1VQX0ZBSUxVUkUiLCJ0YWtlTGF0ZXN0IiwiQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QiLCJMT0FEX01ZX0lORk9fUkVRVUVTVCIsIkZPTExPV19SRVFVRVNUIiwiVU5GT0xMT1dfUkVRVUVTVCIsIkxPR19JTl9SRVFVRVNUIiwiTE9HX09VVF9SRVFVRVNUIiwi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QUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUllLFNBQVVRLFFBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2QsaUJBQU04Qyw4REFBRyxDQUFDLENBQ1RDLCtEQUFJLENBQUN0RCxtQkFBRCxDQURLLEVBRVRzRCwrREFBSSxDQUFDckQsZUFBRCxDQUZLLEVBR1RxRCwrREFBSSxDQUFDcEQsV0FBRCxDQUhLLEVBSVRvRCwrREFBSSxDQUFDbkQsYUFBRCxDQUpLLEVBS1RtRCwrREFBSSxDQUFDbEQsVUFBRCxDQUxLLEVBTVRrRCwrREFBSSxDQUFDakQsV0FBRCxDQU5LLEVBT1RpRCwrREFBSSxDQUFDaEQsV0FBRCxDQVBLLENBQUQsQ0FBVDs7QUFEYztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjcxYmUzOTljYjBhOWE0NTg2ZjY1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2FsbCwgY2FsbCwgZGVsYXksIGZvcmssIHB1dCwgdGFrZUxhdGVzdH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7XHJcblx0Q0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUsXHJcblx0Q0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QsIENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTLFxyXG5cdEZPTExPV19GQUlMVVJFLFxyXG5cdEZPTExPV19SRVFVRVNULCBGT0xMT1dfU1VDQ0VTUywgTE9BRF9NWV9JTkZPX0ZBSUxVUkUsIExPQURfTVlfSU5GT19SRVFVRVNULCBMT0FEX01ZX0lORk9fU1VDQ0VTUyxcclxuXHRMT0dfSU5fRkFJTFVSRSxcclxuXHRMT0dfSU5fUkVRVUVTVCxcclxuXHRMT0dfSU5fU1VDQ0VTUyxcclxuXHRMT0dfT1VUX0ZBSUxVUkUsXHJcblx0TE9HX09VVF9SRVFVRVNULFxyXG5cdExPR19PVVRfU1VDQ0VTUyxcclxuXHRTSUdOX1VQX0ZBSUxVUkUsXHJcblx0U0lHTl9VUF9SRVFVRVNULFxyXG5cdFNJR05fVVBfU1VDQ0VTUywgVU5GT0xMT1dfRkFJTFVSRSwgVU5GT0xMT1dfUkVRVUVTVCwgVU5GT0xMT1dfU1VDQ0VTUyxcclxufSBmcm9tIFwiLi4vcmVkdWNlcnMvdXNlclwiO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGxvZ0luQVBJKGRhdGEpIHsgLy8gZ2VuZXJhdG9yIOyVhOuLmFxyXG5cdC8vcmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvbG9naW4nLCBkYXRhKSAvLyDsi6TsoJwg7ISc67KE7JeQIOuhnOq3uOyduCDsmpTssq3snYQg67O064OEIC8vIGZyb250XHJcblxyXG5cdC8vIOyLpOygnCDshJzrsoTsl5Ag66Gc6re47J24IOyalOyyreydhCDrs7Trg4QgLy8gYmFja1xyXG5cdC8vcmV0dXJuIGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzA2NS91c2VyL2xvZ2luJywgZGF0YSlcclxuXHJcblx0Ly8gbG9jYWxob3N0IOykkeuztSDsl4bslaDquLBcclxuXHRyZXR1cm4gYXhpb3MucG9zdCgnL3VzZXIvbG9naW4nLCBkYXRhKVxyXG59XHJcblxyXG4vLyDthYzsiqTtirgg7L2U65OcXHJcbi8vIGNvbnN0IGwgPSBsb2dJbih7dHlwZTogJ0xPR19JTl9SRVFVRVNUJywgZGF0YToge2lkOiAncmxhYWxzZG44QG5hdmVyLmNvbSd9fSlcclxuLy8gXHRcdGwubmV4dCgpO1xyXG4vLyBcdFx0bC5uZXh0KCk7XHJcbi8vLy8vLy8vLy8vLy8vLy8vXHJcbmZ1bmN0aW9uKiBsb2dJbihhY3Rpb24pIHsgLy8gbG9naW4gYWN0aW9uIHJlcXVlc3Qg6rCAIGFjdGlvbiDsl5Ag7KCE64usXHJcblx0dHJ5IHsgLy8g7JqU7LKtIOyLpO2MqCDrjIDruYRcclxuXHRcdC8veWllbGQgZGVsYXkoMTAwMCkgLy8gZnJvbnRcclxuXHRcdGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9nSW5BUEksIGFjdGlvbi5kYXRhKSAvLyDshJzrsoTsl5DshJwg67Cb7J2AIOqysOqzvCDqsJLsnYQg67Cb7J2MXHJcblx0XHRjb25zb2xlLmxvZygnc2FnYSBsb2dJbiDsi6TtlonspJE6OicsIGFjdGlvbi5kYXRhKVxyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogTE9HX0lOX1NVQ0NFU1MsXHJcblx0XHRcdC8vZGF0YTogYWN0aW9uLmRhdGEsIC8vIGZyb250XHJcblx0XHRcdGRhdGE6IHJlc3VsdC5kYXRhIC8vICjshLHqs7Ug6rKw6rO8IOuLtOq5gCkgYmFja1xyXG5cdFx0fSlcclxuXHRcdGNvbnNvbGUubG9nKCdzYWdhIGxvZ0luIOyZhOujjCA6OicsIHJlc3VsdClcclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoJ2xvZ0luJywgZXJyKVxyXG5cdFx0eWllbGQgcHV0KHsgLy8gcHV0IOydgCBkaXNwYXRjaCDrnbzqs6Ag7IOd6rCB7ZWY7J6QXHJcblx0XHRcdHR5cGU6IExPR19JTl9GQUlMVVJFLFxyXG5cdFx0XHRlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEgLy8gKOyLpO2MqCDqsrDqs7wg64u06rmAKVxyXG5cdFx0fSlcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvZ091dEFQSSgpIHtcclxuXHQvLyByZXR1cm4gYXhpb3MucG9zdCgnL2FwaS9sb2dvdXQnKSBmcm9udFxyXG5cdHJldHVybiBheGlvcy5wb3N0KCcvdXNlci9sb2dvdXQnKVxyXG59XHJcblxyXG5mdW5jdGlvbiogbG9nT3V0KCkge1xyXG5cdHRyeSB7IC8vIOyalOyyrSDsi6TtjKgg64yA67mEXHJcblx0XHQvL3lpZWxkIGRlbGF5KDEwMDApIGZyb250XHJcblx0XHR5aWVsZCBjYWxsKGxvZ091dEFQSSkgLy8g7ISc67KE7JeQ7IScIOuwm+ydgCDqsrDqs7wg6rCS7J2EIOuwm+ydjCBiYWNrXHJcblx0XHRjb25zb2xlLmxvZygnc2FnYXM6OiBsb2dvdXQg7Iuk7ZaJJylcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IExPR19PVVRfU1VDQ0VTUyxcclxuXHRcdH0pXHJcblx0XHRjb25zb2xlLmxvZygnc2FnYXM6OiBsb2dvdXQg7JmE66OMJylcclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoJ2Zyb250IGxvZ091dCA6ICcsIGVycilcclxuXHRcdHlpZWxkIHB1dCh7IC8vIHB1dCDsnYAgZGlzcGF0Y2gg65286rOgIOyDneqwge2VmOyekFxyXG5cdFx0XHR0eXBlOiBMT0dfT1VUX0ZBSUxVUkUsXHJcblx0XHRcdGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSAvLyAo7Iuk7YyoIOqysOqzvCDri7TquYApXHJcblx0XHR9KVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2hhbmdlTmlja25hbWVBUEkoZGF0YSkgeyAvLyBnZW5lcmF0b3Ig7JWE64uYXHJcblx0Ly8g7Iuk7KCcIOyEnOuyhOyXkCDroZzqt7jsnbgg7JqU7LKt7J2EIOuztOuDhCAvLyBiYWNrXHJcblx0Ly9yZXR1cm4gYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDY1L3VzZXIvbG9naW4nLCBkYXRhKVxyXG5cdC8vIGxvY2FsaG9zdCDspJHrs7Ug7JeG7JWg6riwXHJcblx0cmV0dXJuIGF4aW9zLnBhdGNoKCcvdXNlci9uaWNrbmFtZScsIHtuaWNrbmFtZTogZGF0YX0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBjaGFuZ2VOaWNrbmFtZShhY3Rpb24pIHsgLy8gbG9naW4gYWN0aW9uIHJlcXVlc3Qg6rCAIGFjdGlvbiDsl5Ag7KCE64usXHJcblx0dHJ5IHsgLy8g7JqU7LKtIOyLpO2MqCDrjIDruYRcclxuXHRcdC8veWllbGQgZGVsYXkoMTAwMCkgLy8gZnJvbnRcclxuXHRcdGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoY2hhbmdlTmlja25hbWVBUEksIGFjdGlvbi5kYXRhKSAvLyDshJzrsoTsl5DshJwg67Cb7J2AIOqysOqzvCDqsJLsnYQg67Cb7J2MXHJcblx0XHRjb25zb2xlLmxvZygnc2FnYSBjaGFuZ2VOaWNrbmFtZSDsi6TtlonspJE6OicsIGFjdGlvbi5kYXRhKVxyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MsXHJcblx0XHRcdC8vZGF0YTogYWN0aW9uLmRhdGEsIC8vIGZyb250XHJcblx0XHRcdGRhdGE6IHJlc3VsdC5kYXRhIC8vICjshLHqs7Ug6rKw6rO8IOuLtOq5gCkgYmFja1xyXG5cdFx0fSlcclxuXHRcdGNvbnNvbGUubG9nKCdzYWdhIGNoYW5nZU5pY2tuYW1lIOyZhOujjCA6OicsIHJlc3VsdClcclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoJ2NoYW5nZU5pY2tuYW1lJywgZXJyKVxyXG5cdFx0eWllbGQgcHV0KHsgLy8gcHV0IOydgCBkaXNwYXRjaCDrnbzqs6Ag7IOd6rCB7ZWY7J6QXHJcblx0XHRcdHR5cGU6IENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFLFxyXG5cdFx0XHRlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEgLy8gKOyLpO2MqCDqsrDqs7wg64u06rmAKVxyXG5cdFx0fSlcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRNeUluZm9BUEkoKSB7XHJcblx0cmV0dXJuIGF4aW9zLmdldCgnL3VzZXInKVxyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZE15SW5mbyhhY3Rpb24pIHtcclxuXHR0cnkge1xyXG5cdFx0Y29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkTXlJbmZvQVBJLCBhY3Rpb24uZGF0YSlcclxuXHRcdGNvbnNvbGUubG9nKCdzYWdhIGxvYWRNeUluZm8g7Iuk7ZaJ7KSROjonLCBhY3Rpb24uZGF0YSlcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IExPQURfTVlfSU5GT19TVUNDRVNTLFxyXG5cdFx0XHRkYXRhOiByZXN1bHQuZGF0YVxyXG5cdFx0fSlcclxuXHRcdGNvbnNvbGUubG9nKCdzYWdhIGxvYWRNeUluZm8g7JmE66OMJywgcmVzdWx0KVxyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0Y29uc29sZS5lcnJvcignc2FnYSBsb2FkTXlJbmZvIGVycm9yIDogJywgZXJyKVxyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogTE9BRF9NWV9JTkZPX0ZBSUxVUkUsXHJcblx0XHRcdGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YVxyXG5cdFx0fSlcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvbGxvd0FQSShkYXRhKSB7XHJcblx0cmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvZm9sbG93JywgZGF0YSlcclxufVxyXG5cclxuZnVuY3Rpb24qIGZvbGxvdyhhY3Rpb24pIHtcclxuXHR0cnkge1xyXG5cdFx0eWllbGQgZGVsYXkoMTAwMClcclxuXHRcdC8vY29uc29sZS5sb2coJ3NhZ2EgZm9sbG93IOyLpO2WiSA6ICcsIHJlc3VsdClcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IEZPTExPV19TVUNDRVNTLFxyXG5cdFx0XHRkYXRhOiBhY3Rpb24uZGF0YVxyXG5cdFx0fSlcclxuXHRcdC8vY29uc29sZS5sb2coJ3NhZ2EgZm9sbG93IOyZhOujjCA6OiAnLCByZXN1bHQpXHJcblx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRjb25zb2xlLmVycm9yKCdzYWdhIGZvbGxvdyBlcnJvciA6OiAnLCBlcnIpXHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOiBGT0xMT1dfRkFJTFVSRSxcclxuXHRcdFx0ZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG5cdFx0fSlcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVuZm9sbG93QVBJKGRhdGEpIHtcclxuXHRyZXR1cm4gYXhpb3MucG9zdCgnL2FwaS91bmZvbGxvdycsIGRhdGEpXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB1bmZvbGxvdyhhY3Rpb24pIHtcclxuXHR0cnkge1xyXG5cdFx0eWllbGQgZGVsYXkoMTAwMClcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IFVORk9MTE9XX1NVQ0NFU1MsXHJcblx0XHRcdGRhdGE6IGFjdGlvbi5kYXRhXHJcblx0XHR9KVxyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0Y29uc29sZS5lcnJvcigndW5mb2xsb3cgZXJyb3IgOiAnLCBlcnIpXHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOiBVTkZPTExPV19GQUlMVVJFLFxyXG5cdFx0XHRlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcblx0XHR9KVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2lnblVwQVBJKGRhdGEpIHtcclxuXHQvLyBiYWNrIGVuZCBzZXJ2ZXIgYWRkclxyXG5cdC8vIGRhdGEg64qUIGVtYWlsLCBuaWNrbmFtZSwgcGFzc3dvcmQgb2JqZWN0XHJcblx0Ly9yZXR1cm4gYXhpb3MucG9zdCgnL2FwaS9zaWdudXAnLCBkYXRhKSAvLyBmcm9udFxyXG5cdHJldHVybiBheGlvcy5wb3N0KCcvdXNlcicsIGRhdGEpIC8vIGJhY2tcclxufVxyXG5cclxuZnVuY3Rpb24qIHNpZ25VcChhY3Rpb24pIHtcclxuXHR0cnkge1xyXG5cdFx0Ly95aWVsZCBkZWxheSgxMDAwKVxyXG5cdFx0Y29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChzaWduVXBBUEksIGFjdGlvbi5kYXRhKVxyXG5cdFx0Y29uc29sZS5sb2coJ3NhZ2Egc2lnbiB1cCByZXN1bHQg7Iuk7ZaJ7KSRIDo6ICcsIGFjdGlvbi5kYXRhKVxyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogU0lHTl9VUF9TVUNDRVNTLFxyXG5cdFx0XHQvL2RhdGE6IHJlc3VsdC5kYXRhXHJcblx0XHR9KVxyXG5cdFx0Y29uc29sZS5sb2coJ3NhZ2Egc2lnbiB1cCDsmYTro4wgOjogJywgcmVzdWx0KVxyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0Y29uc29sZS5lcnJvcignc2FnYSBzaWduVXAgZXJyb3IgOiAnLCBlcnIpXHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOiBTSUdOX1VQX0ZBSUxVUkUsXHJcblx0XHRcdGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YVxyXG5cdFx0fSlcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaENoYW5nZU5pY2tuYW1lKCkge1xyXG5cdHlpZWxkIHRha2VMYXRlc3QoQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QsIGNoYW5nZU5pY2tuYW1lKVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkTXlJbmZvKCkge1xyXG5cdHlpZWxkIHRha2VMYXRlc3QoTE9BRF9NWV9JTkZPX1JFUVVFU1QsIGxvYWRNeUluZm8pXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEZvbGxvdygpIHtcclxuXHR5aWVsZCB0YWtlTGF0ZXN0KEZPTExPV19SRVFVRVNULCBmb2xsb3cpXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFVuRm9sbG93KCkge1xyXG5cdHlpZWxkIHRha2VMYXRlc3QoVU5GT0xMT1dfUkVRVUVTVCwgdW5mb2xsb3cpXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvZ0luKCkge1x0Ly8g66Gc6re47J24IOyVoeyFmOydtCDsi6TtlonrkKDrlYzquYzsp4Ag6riw64uk66as6rKg64uk64qUIOucu1xyXG5cdHlpZWxkIHRha2VMYXRlc3QoTE9HX0lOX1JFUVVFU1QsIGxvZ0luKSAvL0xPR19JTl9SRVFVRVNUIOyVoeyFmOydtCDsi6TtlonrkJjrqbQgbG9nSW4g7ZWo7IiYIOyLpO2WiVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2dPdXQoKSB7XHQvLyDroZzqt7jslYTsm4Mg7JWh7IWY7J20IOyLpO2WieuQoOuVjOq5jOyngCDquLDri6TrpqzqsqDri6TripQg65y7XHJcblx0eWllbGQgdGFrZUxhdGVzdChMT0dfT1VUX1JFUVVFU1QsIGxvZ091dCkgLy9MT0dfT1VUX1JFUVVFU1Qg7JWh7IWY7J20IOyLpO2WieuQmOuptCBsb2dJbiDtlajsiJgg7Iuk7ZaJXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFNpZ25VcCgpIHtcdC8vIO2ajOybkOqwgOyehSDslaHshZjsnbQg7Iuk7ZaJ65Cg65WM6rmM7KeAIOq4sOuLpOumrOqyoOuLpOuKlCDrnLtcclxuXHR5aWVsZCB0YWtlTGF0ZXN0KFNJR05fVVBfUkVRVUVTVCwgc2lnblVwKSAvLyBTSUdOX1VQX1JFUVVFU1Qg7JWh7IWY7J20IOyLpO2WieuQmOuptCBsb2dJbiDtlajsiJgg7Iuk7ZaJXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiB1c2VyU2FnYSgpIHtcclxuXHR5aWVsZCBhbGwoW1xyXG5cdFx0Zm9yayh3YXRjaENoYW5nZU5pY2tuYW1lKSxcclxuXHRcdGZvcmsod2F0Y2hMb2FkTXlJbmZvKSxcclxuXHRcdGZvcmsod2F0Y2hGb2xsb3cpLFxyXG5cdFx0Zm9yayh3YXRjaFVuRm9sbG93KSxcclxuXHRcdGZvcmsod2F0Y2hMb2dJbiksXHJcblx0XHRmb3JrKHdhdGNoTG9nT3V0KSxcclxuXHRcdGZvcmsod2F0Y2hTaWduVXApLFxyXG5cdF0pXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==