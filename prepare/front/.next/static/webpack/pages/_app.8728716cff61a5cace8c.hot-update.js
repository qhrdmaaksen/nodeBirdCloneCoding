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
  // return axios.post('/api/follow', data) front
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("/user/".concat(data, "/follow"));
}

function follow(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function follow$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(followAPI, action.data);

        case 3:
          result = _context5.sent;
          console.log('saga follow 실행 : ', result);
          _context5.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["FOLLOW_SUCCESS"],
            data: action.data
          });

        case 7:
          _context5.next = 14;
          break;

        case 9:
          _context5.prev = 9;
          _context5.t0 = _context5["catch"](0);
          console.error('saga follow error :: ', _context5.t0);
          _context5.next = 14;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["FOLLOW_FAILURE"],
            error: _context5.t0.response.data
          });

        case 14:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5, null, [[0, 9]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvdXNlci5qcyJdLCJuYW1lcyI6WyJsb2dJbiIsImxvZ091dCIsImNoYW5nZU5pY2tuYW1lIiwibG9hZE15SW5mbyIsImZvbGxvdyIsInVuZm9sbG93Iiwic2lnblVwIiwid2F0Y2hDaGFuZ2VOaWNrbmFtZSIsIndhdGNoTG9hZE15SW5mbyIsIndhdGNoRm9sbG93Iiwid2F0Y2hVbkZvbGxvdyIsIndhdGNoTG9nSW4iLCJ3YXRjaExvZ091dCIsIndhdGNoU2lnblVwIiwidXNlclNhZ2EiLCJsb2dJbkFQSSIsImRhdGEiLCJheGlvcyIsInBvc3QiLCJhY3Rpb24iLCJjYWxsIiwicmVzdWx0IiwiY29uc29sZSIsImxvZyIsInB1dCIsInR5cGUiLCJMT0dfSU5fU1VDQ0VTUyIsImVycm9yIiwiTE9HX0lOX0ZBSUxVUkUiLCJyZXNwb25zZSIsImxvZ091dEFQSSIsIkxPR19PVVRfU1VDQ0VTUyIsIkxPR19PVVRfRkFJTFVSRSIsImNoYW5nZU5pY2tuYW1lQVBJIiwicGF0Y2giLCJuaWNrbmFtZSIsIkNIQU5HRV9OSUNLTkFNRV9TVUNDRVNTIiwiQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUiLCJsb2FkTXlJbmZvQVBJIiwiZ2V0IiwiTE9BRF9NWV9JTkZPX1NVQ0NFU1MiLCJMT0FEX01ZX0lORk9fRkFJTFVSRSIsImZvbGxvd0FQSSIsIkZPTExPV19TVUNDRVNTIiwiRk9MTE9XX0ZBSUxVUkUiLCJ1bmZvbGxvd0FQSSIsImRlbGF5IiwiVU5GT0xMT1dfU1VDQ0VTUyIsIlVORk9MTE9XX0ZBSUxVUkUiLCJzaWduVXBBUEkiLCJTSUdOX1VQX1NVQ0NFU1MiLCJTSUdOX1VQX0ZBSUxVUkUiLCJ0YWtlTGF0ZXN0IiwiQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QiLCJMT0FEX01ZX0lORk9fUkVRVUVTVCIsIkZPTExPV19SRVFVRVNUIiwiVU5GT0xMT1dfUkVRVUVTVCIsIkxPR19JTl9SRVFVRVNUIiwiTE9HX09VVF9SRVFVRVNUIiwi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VVksV0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQyxpQkFBTXVDLHFFQUFVLENBQUNPLDhEQUFELEVBQWtCckQsTUFBbEIsQ0FBaEI7O0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBSWUsU0FBVVEsUUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDZCxpQkFBTThDLDhEQUFHLENBQUMsQ0FDVEMsK0RBQUksQ0FBQ3RELG1CQUFELENBREssRUFFVHNELCtEQUFJLENBQUNyRCxlQUFELENBRkssRUFHVHFELCtEQUFJLENBQUNwRCxXQUFELENBSEssRUFJVG9ELCtEQUFJLENBQUNuRCxhQUFELENBSkssRUFLVG1ELCtEQUFJLENBQUNsRCxVQUFELENBTEssRUFNVGtELCtEQUFJLENBQUNqRCxXQUFELENBTkssRUFPVGlELCtEQUFJLENBQUNoRCxXQUFELENBUEssQ0FBRCxDQUFUOztBQURjO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuODcyODcxNmNmZjYxYTVjYWNlOGMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YWxsLCBjYWxsLCBkZWxheSwgZm9yaywgcHV0LCB0YWtlTGF0ZXN0fSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHtcclxuXHRDSEFOR0VfTklDS05BTUVfRkFJTFVSRSxcclxuXHRDSEFOR0VfTklDS05BTUVfUkVRVUVTVCwgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MsXHJcblx0Rk9MTE9XX0ZBSUxVUkUsXHJcblx0Rk9MTE9XX1JFUVVFU1QsIEZPTExPV19TVUNDRVNTLCBMT0FEX01ZX0lORk9fRkFJTFVSRSwgTE9BRF9NWV9JTkZPX1JFUVVFU1QsIExPQURfTVlfSU5GT19TVUNDRVNTLFxyXG5cdExPR19JTl9GQUlMVVJFLFxyXG5cdExPR19JTl9SRVFVRVNULFxyXG5cdExPR19JTl9TVUNDRVNTLFxyXG5cdExPR19PVVRfRkFJTFVSRSxcclxuXHRMT0dfT1VUX1JFUVVFU1QsXHJcblx0TE9HX09VVF9TVUNDRVNTLFxyXG5cdFNJR05fVVBfRkFJTFVSRSxcclxuXHRTSUdOX1VQX1JFUVVFU1QsXHJcblx0U0lHTl9VUF9TVUNDRVNTLCBVTkZPTExPV19GQUlMVVJFLCBVTkZPTExPV19SRVFVRVNULCBVTkZPTExPV19TVUNDRVNTLFxyXG59IGZyb20gXCIuLi9yZWR1Y2Vycy91c2VyXCI7XHJcblxyXG5cclxuZnVuY3Rpb24gbG9nSW5BUEkoZGF0YSkgeyAvLyBnZW5lcmF0b3Ig7JWE64uYXHJcblx0Ly9yZXR1cm4gYXhpb3MucG9zdCgnL2FwaS9sb2dpbicsIGRhdGEpIC8vIOyLpOygnCDshJzrsoTsl5Ag66Gc6re47J24IOyalOyyreydhCDrs7Trg4QgLy8gZnJvbnRcclxuXHJcblx0Ly8g7Iuk7KCcIOyEnOuyhOyXkCDroZzqt7jsnbgg7JqU7LKt7J2EIOuztOuDhCAvLyBiYWNrXHJcblx0Ly9yZXR1cm4gYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDY1L3VzZXIvbG9naW4nLCBkYXRhKVxyXG5cclxuXHQvLyBsb2NhbGhvc3Qg7KSR67O1IOyXhuyVoOq4sFxyXG5cdHJldHVybiBheGlvcy5wb3N0KCcvdXNlci9sb2dpbicsIGRhdGEpXHJcbn1cclxuXHJcbi8vIO2FjOyKpO2KuCDsvZTrk5xcclxuLy8gY29uc3QgbCA9IGxvZ0luKHt0eXBlOiAnTE9HX0lOX1JFUVVFU1QnLCBkYXRhOiB7aWQ6ICdybGFhbHNkbjhAbmF2ZXIuY29tJ319KVxyXG4vLyBcdFx0bC5uZXh0KCk7XHJcbi8vIFx0XHRsLm5leHQoKTtcclxuLy8vLy8vLy8vLy8vLy8vLy9cclxuZnVuY3Rpb24qIGxvZ0luKGFjdGlvbikgeyAvLyBsb2dpbiBhY3Rpb24gcmVxdWVzdCDqsIAgYWN0aW9uIOyXkCDsoITri6xcclxuXHR0cnkgeyAvLyDsmpTssq0g7Iuk7YyoIOuMgOu5hFxyXG5cdFx0Ly95aWVsZCBkZWxheSgxMDAwKSAvLyBmcm9udFxyXG5cdFx0Y29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2dJbkFQSSwgYWN0aW9uLmRhdGEpIC8vIOyEnOuyhOyXkOyEnCDrsJvsnYAg6rKw6rO8IOqwkuydhCDrsJvsnYxcclxuXHRcdGNvbnNvbGUubG9nKCdzYWdhIGxvZ0luIOyLpO2WieykkTo6JywgYWN0aW9uLmRhdGEpXHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOiBMT0dfSU5fU1VDQ0VTUyxcclxuXHRcdFx0Ly9kYXRhOiBhY3Rpb24uZGF0YSwgLy8gZnJvbnRcclxuXHRcdFx0ZGF0YTogcmVzdWx0LmRhdGEgLy8gKOyEseqztSDqsrDqs7wg64u06rmAKSBiYWNrXHJcblx0XHR9KVxyXG5cdFx0Y29uc29sZS5sb2coJ3NhZ2EgbG9nSW4g7JmE66OMIDo6JywgcmVzdWx0KVxyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0Y29uc29sZS5lcnJvcignbG9nSW4nLCBlcnIpXHJcblx0XHR5aWVsZCBwdXQoeyAvLyBwdXQg7J2AIGRpc3BhdGNoIOudvOqzoCDsg53qsIHtlZjsnpBcclxuXHRcdFx0dHlwZTogTE9HX0lOX0ZBSUxVUkUsXHJcblx0XHRcdGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSAvLyAo7Iuk7YyoIOqysOqzvCDri7TquYApXHJcblx0XHR9KVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9nT3V0QVBJKCkge1xyXG5cdC8vIHJldHVybiBheGlvcy5wb3N0KCcvYXBpL2xvZ291dCcpIGZyb250XHJcblx0cmV0dXJuIGF4aW9zLnBvc3QoJy91c2VyL2xvZ291dCcpXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2dPdXQoKSB7XHJcblx0dHJ5IHsgLy8g7JqU7LKtIOyLpO2MqCDrjIDruYRcclxuXHRcdC8veWllbGQgZGVsYXkoMTAwMCkgZnJvbnRcclxuXHRcdHlpZWxkIGNhbGwobG9nT3V0QVBJKSAvLyDshJzrsoTsl5DshJwg67Cb7J2AIOqysOqzvCDqsJLsnYQg67Cb7J2MIGJhY2tcclxuXHRcdGNvbnNvbGUubG9nKCdzYWdhczo6IGxvZ291dCDsi6TtloknKVxyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogTE9HX09VVF9TVUNDRVNTLFxyXG5cdFx0fSlcclxuXHRcdGNvbnNvbGUubG9nKCdzYWdhczo6IGxvZ291dCDsmYTro4wnKVxyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0Y29uc29sZS5lcnJvcignZnJvbnQgbG9nT3V0IDogJywgZXJyKVxyXG5cdFx0eWllbGQgcHV0KHsgLy8gcHV0IOydgCBkaXNwYXRjaCDrnbzqs6Ag7IOd6rCB7ZWY7J6QXHJcblx0XHRcdHR5cGU6IExPR19PVVRfRkFJTFVSRSxcclxuXHRcdFx0ZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhIC8vICjsi6TtjKgg6rKw6rO8IOuLtOq5gClcclxuXHRcdH0pXHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VOaWNrbmFtZUFQSShkYXRhKSB7IC8vIGdlbmVyYXRvciDslYTri5hcclxuXHQvLyDsi6TsoJwg7ISc67KE7JeQIOuhnOq3uOyduCDsmpTssq3snYQg67O064OEIC8vIGJhY2tcclxuXHQvL3JldHVybiBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwNjUvdXNlci9sb2dpbicsIGRhdGEpXHJcblx0Ly8gbG9jYWxob3N0IOykkeuztSDsl4bslaDquLBcclxuXHRyZXR1cm4gYXhpb3MucGF0Y2goJy91c2VyL25pY2tuYW1lJywge25pY2tuYW1lOiBkYXRhfSlcclxufVxyXG5cclxuZnVuY3Rpb24qIGNoYW5nZU5pY2tuYW1lKGFjdGlvbikgeyAvLyBsb2dpbiBhY3Rpb24gcmVxdWVzdCDqsIAgYWN0aW9uIOyXkCDsoITri6xcclxuXHR0cnkgeyAvLyDsmpTssq0g7Iuk7YyoIOuMgOu5hFxyXG5cdFx0Ly95aWVsZCBkZWxheSgxMDAwKSAvLyBmcm9udFxyXG5cdFx0Y29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChjaGFuZ2VOaWNrbmFtZUFQSSwgYWN0aW9uLmRhdGEpIC8vIOyEnOuyhOyXkOyEnCDrsJvsnYAg6rKw6rO8IOqwkuydhCDrsJvsnYxcclxuXHRcdGNvbnNvbGUubG9nKCdzYWdhIGNoYW5nZU5pY2tuYW1lIOyLpO2WieykkTo6JywgYWN0aW9uLmRhdGEpXHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOiBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyxcclxuXHRcdFx0Ly9kYXRhOiBhY3Rpb24uZGF0YSwgLy8gZnJvbnRcclxuXHRcdFx0ZGF0YTogcmVzdWx0LmRhdGEgLy8gKOyEseqztSDqsrDqs7wg64u06rmAKSBiYWNrXHJcblx0XHR9KVxyXG5cdFx0Y29uc29sZS5sb2coJ3NhZ2EgY2hhbmdlTmlja25hbWUg7JmE66OMIDo6JywgcmVzdWx0KVxyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0Y29uc29sZS5lcnJvcignY2hhbmdlTmlja25hbWUnLCBlcnIpXHJcblx0XHR5aWVsZCBwdXQoeyAvLyBwdXQg7J2AIGRpc3BhdGNoIOudvOqzoCDsg53qsIHtlZjsnpBcclxuXHRcdFx0dHlwZTogQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUsXHJcblx0XHRcdGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSAvLyAo7Iuk7YyoIOqysOqzvCDri7TquYApXHJcblx0XHR9KVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZE15SW5mb0FQSSgpIHtcclxuXHRyZXR1cm4gYXhpb3MuZ2V0KCcvdXNlcicpXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkTXlJbmZvKGFjdGlvbikge1xyXG5cdHRyeSB7XHJcblx0XHRjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRNeUluZm9BUEksIGFjdGlvbi5kYXRhKVxyXG5cdFx0Y29uc29sZS5sb2coJ3NhZ2EgbG9hZE15SW5mbyDsi6TtlonspJE6OicsIGFjdGlvbi5kYXRhKVxyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogTE9BRF9NWV9JTkZPX1NVQ0NFU1MsXHJcblx0XHRcdGRhdGE6IHJlc3VsdC5kYXRhXHJcblx0XHR9KVxyXG5cdFx0Y29uc29sZS5sb2coJ3NhZ2EgbG9hZE15SW5mbyDsmYTro4wnLCByZXN1bHQpXHJcblx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRjb25zb2xlLmVycm9yKCdzYWdhIGxvYWRNeUluZm8gZXJyb3IgOiAnLCBlcnIpXHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOiBMT0FEX01ZX0lORk9fRkFJTFVSRSxcclxuXHRcdFx0ZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhXHJcblx0XHR9KVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gZm9sbG93QVBJKGRhdGEpIHtcclxuXHQvLyByZXR1cm4gYXhpb3MucG9zdCgnL2FwaS9mb2xsb3cnLCBkYXRhKSBmcm9udFxyXG5cdHJldHVybiBheGlvcy5wb3N0KGAvdXNlci8ke2RhdGF9L2ZvbGxvd2ApXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBmb2xsb3coYWN0aW9uKSB7XHJcblx0dHJ5IHtcclxuXHRcdC8veWllbGQgZGVsYXkoMTAwMCkgZnJvbnRcclxuXHRcdGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoZm9sbG93QVBJLCBhY3Rpb24uZGF0YSlcclxuXHRcdGNvbnNvbGUubG9nKCdzYWdhIGZvbGxvdyDsi6TtlokgOiAnLCByZXN1bHQpXHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOiBGT0xMT1dfU1VDQ0VTUyxcclxuXHRcdFx0ZGF0YTogYWN0aW9uLmRhdGFcclxuXHRcdH0pXHJcblx0XHQvL2NvbnNvbGUubG9nKCdzYWdhIGZvbGxvdyDsmYTro4wgOjogJywgcmVzdWx0KVxyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0Y29uc29sZS5lcnJvcignc2FnYSBmb2xsb3cgZXJyb3IgOjogJywgZXJyKVxyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogRk9MTE9XX0ZBSUxVUkUsXHJcblx0XHRcdGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuXHRcdH0pXHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiB1bmZvbGxvd0FQSShkYXRhKSB7XHJcblx0cmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvdW5mb2xsb3cnLCBkYXRhKVxyXG59XHJcblxyXG5mdW5jdGlvbiogdW5mb2xsb3coYWN0aW9uKSB7XHJcblx0dHJ5IHtcclxuXHRcdHlpZWxkIGRlbGF5KDEwMDApXHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOiBVTkZPTExPV19TVUNDRVNTLFxyXG5cdFx0XHRkYXRhOiBhY3Rpb24uZGF0YVxyXG5cdFx0fSlcclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoJ3VuZm9sbG93IGVycm9yIDogJywgZXJyKVxyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogVU5GT0xMT1dfRkFJTFVSRSxcclxuXHRcdFx0ZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG5cdFx0fSlcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNpZ25VcEFQSShkYXRhKSB7XHJcblx0Ly8gYmFjayBlbmQgc2VydmVyIGFkZHJcclxuXHQvLyBkYXRhIOuKlCBlbWFpbCwgbmlja25hbWUsIHBhc3N3b3JkIG9iamVjdFxyXG5cdC8vcmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvc2lnbnVwJywgZGF0YSkgLy8gZnJvbnRcclxuXHRyZXR1cm4gYXhpb3MucG9zdCgnL3VzZXInLCBkYXRhKSAvLyBiYWNrXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBzaWduVXAoYWN0aW9uKSB7XHJcblx0dHJ5IHtcclxuXHRcdC8veWllbGQgZGVsYXkoMTAwMClcclxuXHRcdGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoc2lnblVwQVBJLCBhY3Rpb24uZGF0YSlcclxuXHRcdGNvbnNvbGUubG9nKCdzYWdhIHNpZ24gdXAgcmVzdWx0IOyLpO2WieykkSA6OiAnLCBhY3Rpb24uZGF0YSlcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IFNJR05fVVBfU1VDQ0VTUyxcclxuXHRcdFx0Ly9kYXRhOiByZXN1bHQuZGF0YVxyXG5cdFx0fSlcclxuXHRcdGNvbnNvbGUubG9nKCdzYWdhIHNpZ24gdXAg7JmE66OMIDo6ICcsIHJlc3VsdClcclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoJ3NhZ2Egc2lnblVwIGVycm9yIDogJywgZXJyKVxyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogU0lHTl9VUF9GQUlMVVJFLFxyXG5cdFx0XHRlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGFcclxuXHRcdH0pXHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hDaGFuZ2VOaWNrbmFtZSgpIHtcclxuXHR5aWVsZCB0YWtlTGF0ZXN0KENIQU5HRV9OSUNLTkFNRV9SRVFVRVNULCBjaGFuZ2VOaWNrbmFtZSlcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZE15SW5mbygpIHtcclxuXHR5aWVsZCB0YWtlTGF0ZXN0KExPQURfTVlfSU5GT19SRVFVRVNULCBsb2FkTXlJbmZvKVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hGb2xsb3coKSB7XHJcblx0eWllbGQgdGFrZUxhdGVzdChGT0xMT1dfUkVRVUVTVCwgZm9sbG93KVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hVbkZvbGxvdygpIHtcclxuXHR5aWVsZCB0YWtlTGF0ZXN0KFVORk9MTE9XX1JFUVVFU1QsIHVuZm9sbG93KVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2dJbigpIHtcdC8vIOuhnOq3uOyduCDslaHshZjsnbQg7Iuk7ZaJ65Cg65WM6rmM7KeAIOq4sOuLpOumrOqyoOuLpOuKlCDrnLtcclxuXHR5aWVsZCB0YWtlTGF0ZXN0KExPR19JTl9SRVFVRVNULCBsb2dJbikgLy9MT0dfSU5fUkVRVUVTVCDslaHshZjsnbQg7Iuk7ZaJ65CY66m0IGxvZ0luIO2VqOyImCDsi6TtlolcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9nT3V0KCkge1x0Ly8g66Gc6re47JWE7JuDIOyVoeyFmOydtCDsi6TtlonrkKDrlYzquYzsp4Ag6riw64uk66as6rKg64uk64qUIOucu1xyXG5cdHlpZWxkIHRha2VMYXRlc3QoTE9HX09VVF9SRVFVRVNULCBsb2dPdXQpIC8vTE9HX09VVF9SRVFVRVNUIOyVoeyFmOydtCDsi6TtlonrkJjrqbQgbG9nSW4g7ZWo7IiYIOyLpO2WiVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hTaWduVXAoKSB7XHQvLyDtmozsm5DqsIDsnoUg7JWh7IWY7J20IOyLpO2WieuQoOuVjOq5jOyngCDquLDri6TrpqzqsqDri6TripQg65y7XHJcblx0eWllbGQgdGFrZUxhdGVzdChTSUdOX1VQX1JFUVVFU1QsIHNpZ25VcCkgLy8gU0lHTl9VUF9SRVFVRVNUIOyVoeyFmOydtCDsi6TtlonrkJjrqbQgbG9nSW4g7ZWo7IiYIOyLpO2WiVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogdXNlclNhZ2EoKSB7XHJcblx0eWllbGQgYWxsKFtcclxuXHRcdGZvcmsod2F0Y2hDaGFuZ2VOaWNrbmFtZSksXHJcblx0XHRmb3JrKHdhdGNoTG9hZE15SW5mbyksXHJcblx0XHRmb3JrKHdhdGNoRm9sbG93KSxcclxuXHRcdGZvcmsod2F0Y2hVbkZvbGxvdyksXHJcblx0XHRmb3JrKHdhdGNoTG9nSW4pLFxyXG5cdFx0Zm9yayh3YXRjaExvZ091dCksXHJcblx0XHRmb3JrKHdhdGNoU2lnblVwKSxcclxuXHRdKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=