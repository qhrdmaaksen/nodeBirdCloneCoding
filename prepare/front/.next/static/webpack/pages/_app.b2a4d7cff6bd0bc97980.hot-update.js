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
    _marked8 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(loadFollowers),
    _marked9 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(loadFollowings),
    _marked10 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(removeFollower),
    _marked11 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(loadUser),
    _marked12 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLoadUser),
    _marked13 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchRemoveFollower),
    _marked14 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLoadFollowers),
    _marked15 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLoadFollowings),
    _marked16 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchChangeNickname),
    _marked17 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLoadMyInfo),
    _marked18 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchFollow),
    _marked19 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchUnFollow),
    _marked20 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLogIn),
    _marked21 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLogOut),
    _marked22 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchSignUp),
    _marked23 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(userSaga);





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

function loadMyInfoAPI(userId) {
  // 서버에 요청을 보내는 부분
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(userId ? "/user/".concat(userId) : '/user/', {
    withCredentials: true // 클라이언트에서 요청 보낼 때는 브라우저가 쿠키를 같이 동봉해줘요

  }); // 서버사이드렌더링일 때는, 브라우저가 없어요.
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
          console.log('saga loadMyInfo 실행 :: ', action.data);
          _context4.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOAD_MY_INFO_SUCCESS"],
            data: result.data,
            me: !action.data
          });

        case 7:
          console.log('saga loadMyInfo 성공:: ', result);
          _context4.next = 15;
          break;

        case 10:
          _context4.prev = 10;
          _context4.t0 = _context4["catch"](0);
          console.error('saga loadMyInfo error :: ', _context4.t0);
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
  // data 에 사용자 id 넣어주기
  // return axios.post('/api/follow', data) front
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.patch("/user/".concat(data, "/follow"));
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
            //data: action.data front
            data: result.data
          });

        case 7:
          console.log('saga follow 완료 :: ', result);
          _context5.next = 15;
          break;

        case 10:
          _context5.prev = 10;
          _context5.t0 = _context5["catch"](0);
          console.error('saga follow error :: ', _context5.t0);
          _context5.next = 15;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["FOLLOW_FAILURE"],
            error: _context5.t0.response.data
          });

        case 15:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5, null, [[0, 10]]);
}

function unfollowAPI(data) {
  // data 에 사용자 id 넣어주기
  //return axios.post('/api/unfollow', data) front
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a["delete"]("/user/".concat(data, "/follow"));
}

function unfollow(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function unfollow$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(unfollowAPI, action.data);

        case 3:
          result = _context6.sent;
          //yield delay(1000) front
          console.log('saga unfollow 요청 :: ', action.data);
          _context6.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["UNFOLLOW_SUCCESS"],
            //data: action.data front
            data: result.data
          });

        case 7:
          console.log('saga unfollow 성공:: ', result);
          _context6.next = 15;
          break;

        case 10:
          _context6.prev = 10;
          _context6.t0 = _context6["catch"](0);
          console.error('saga unfollow error:: ', _context6.t0);
          _context6.next = 15;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["UNFOLLOW_FAILURE"],
            error: _context6.t0.response.data
          });

        case 15:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6, null, [[0, 10]]);
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

function loadFollowersAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/user/followers', data);
}

function loadFollowers(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function loadFollowers$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          _context8.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadFollowersAPI, action.data);

        case 3:
          result = _context8.sent;
          console.log('saga followers:: 요청', action.data);
          _context8.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOAD_FOLLOWERS_SUCCESS"],
            data: result.data
          });

        case 7:
          console.log('saga followers:: 성공', result);
          _context8.next = 15;
          break;

        case 10:
          _context8.prev = 10;
          _context8.t0 = _context8["catch"](0);
          console.error('saga followers::', _context8.t0);
          _context8.next = 15;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOAD_FOLLOWERS_FAILURE"],
            error: _context8.t0.response.data
          });

        case 15:
        case "end":
          return _context8.stop();
      }
    }
  }, _marked8, null, [[0, 10]]);
}

function loadFollowingsAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/user/followings', data);
}

function loadFollowings(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function loadFollowings$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          _context9.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadFollowingsAPI, action.data);

        case 3:
          result = _context9.sent;
          console.log('saga followings 요청::', action.data);
          _context9.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOAD_FOLLOWINGS_SUCCESS"],
            data: result.data
          });

        case 7:
          console.log('saga followings 성공::', result);
          _context9.next = 15;
          break;

        case 10:
          _context9.prev = 10;
          _context9.t0 = _context9["catch"](0);
          console.error('saga followings 실패::', _context9.t0);
          _context9.next = 15;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOAD_FOLLOWINGS_FAILURE"],
            error: _context9.t0.response.data
          });

        case 15:
        case "end":
          return _context9.stop();
      }
    }
  }, _marked9, null, [[0, 10]]);
}

function removeFollowerAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a["delete"]("/user/follower/".concat(data)); // 몇번째의 팔로워를 제거한다
}

function removeFollower(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function removeFollower$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;
          _context10.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(removeFollowerAPI, action.data);

        case 3:
          result = _context10.sent;
          console.log('saga removeFollower 요청:: ', action.data);
          _context10.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["REMOVE_FOLLOWER_SUCCESS"],
            data: result.data
          });

        case 7:
          console.log('saga removeFollower 성공:: ', result);
          _context10.next = 15;
          break;

        case 10:
          _context10.prev = 10;
          _context10.t0 = _context10["catch"](0);
          console.error('saga removeFollower 실패:: ', _context10.t0);
          _context10.next = 15;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["REMOVE_FOLLOWER_FAILURE"],
            error: _context10.t0.response.data
          });

        case 15:
        case "end":
          return _context10.stop();
      }
    }
  }, _marked10, null, [[0, 10]]);
}

function loadUserAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/user/".concat(data));
}

function loadUser(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function loadUser$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          _context11.prev = 0;
          _context11.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadUserAPI, action.data);

        case 3:
          result = _context11.sent;
          console.log('saga loadUser 실행 :: ', action.data);
          _context11.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: LOAD_USER_
          });

        case 7:
          _context11.next = 11;
          break;

        case 9:
          _context11.prev = 9;
          _context11.t0 = _context11["catch"](0);

        case 11:
        case "end":
          return _context11.stop();
      }
    }
  }, _marked11, null, [[0, 9]]);
}

function watchLoadUser() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLoadUser$(_context12) {
    while (1) {
      switch (_context12.prev = _context12.next) {
        case 0:
          _context12.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(LOAD_USER_REQUEST, loadUser);

        case 2:
        case "end":
          return _context12.stop();
      }
    }
  }, _marked12);
}

function watchRemoveFollower() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchRemoveFollower$(_context13) {
    while (1) {
      switch (_context13.prev = _context13.next) {
        case 0:
          _context13.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_3__["REMOVE_FOLLOWER_REQUEST"], removeFollower);

        case 2:
        case "end":
          return _context13.stop();
      }
    }
  }, _marked13);
}

function watchLoadFollowers() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLoadFollowers$(_context14) {
    while (1) {
      switch (_context14.prev = _context14.next) {
        case 0:
          _context14.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOAD_FOLLOWERS_REQUEST"], loadFollowers);

        case 2:
        case "end":
          return _context14.stop();
      }
    }
  }, _marked14);
}

function watchLoadFollowings() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLoadFollowings$(_context15) {
    while (1) {
      switch (_context15.prev = _context15.next) {
        case 0:
          _context15.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOAD_FOLLOWINGS_REQUEST"], loadFollowings);

        case 2:
        case "end":
          return _context15.stop();
      }
    }
  }, _marked15);
}

function watchChangeNickname() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchChangeNickname$(_context16) {
    while (1) {
      switch (_context16.prev = _context16.next) {
        case 0:
          _context16.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_3__["CHANGE_NICKNAME_REQUEST"], changeNickname);

        case 2:
        case "end":
          return _context16.stop();
      }
    }
  }, _marked16);
}

function watchLoadMyInfo() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLoadMyInfo$(_context17) {
    while (1) {
      switch (_context17.prev = _context17.next) {
        case 0:
          _context17.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOAD_MY_INFO_REQUEST"], loadMyInfo);

        case 2:
        case "end":
          return _context17.stop();
      }
    }
  }, _marked17);
}

function watchFollow() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchFollow$(_context18) {
    while (1) {
      switch (_context18.prev = _context18.next) {
        case 0:
          _context18.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_3__["FOLLOW_REQUEST"], follow);

        case 2:
        case "end":
          return _context18.stop();
      }
    }
  }, _marked18);
}

function watchUnFollow() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchUnFollow$(_context19) {
    while (1) {
      switch (_context19.prev = _context19.next) {
        case 0:
          _context19.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_3__["UNFOLLOW_REQUEST"], unfollow);

        case 2:
        case "end":
          return _context19.stop();
      }
    }
  }, _marked19);
}

function watchLogIn() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLogIn$(_context20) {
    while (1) {
      switch (_context20.prev = _context20.next) {
        case 0:
          _context20.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOG_IN_REQUEST"], logIn);

        case 2:
        case "end":
          return _context20.stop();
      }
    }
  }, _marked20);
}

function watchLogOut() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLogOut$(_context21) {
    while (1) {
      switch (_context21.prev = _context21.next) {
        case 0:
          _context21.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOG_OUT_REQUEST"], logOut);

        case 2:
        case "end":
          return _context21.stop();
      }
    }
  }, _marked21);
}

function watchSignUp() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchSignUp$(_context22) {
    while (1) {
      switch (_context22.prev = _context22.next) {
        case 0:
          _context22.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_3__["SIGN_UP_REQUEST"], signUp);

        case 2:
        case "end":
          return _context22.stop();
      }
    }
  }, _marked22);
}

function userSaga() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function userSaga$(_context23) {
    while (1) {
      switch (_context23.prev = _context23.next) {
        case 0:
          _context23.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadUser), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchRemoveFollower), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadFollowers), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadFollowings), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchChangeNickname), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadMyInfo), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchFollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchUnFollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLogIn), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLogOut), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchSignUp)]);

        case 2:
        case "end":
          return _context23.stop();
      }
    }
  }, _marked23);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvdXNlci5qcyJdLCJuYW1lcyI6WyJsb2dJbiIsImxvZ091dCIsImNoYW5nZU5pY2tuYW1lIiwibG9hZE15SW5mbyIsImZvbGxvdyIsInVuZm9sbG93Iiwic2lnblVwIiwibG9hZEZvbGxvd2VycyIsImxvYWRGb2xsb3dpbmdzIiwicmVtb3ZlRm9sbG93ZXIiLCJsb2FkVXNlciIsIndhdGNoTG9hZFVzZXIiLCJ3YXRjaFJlbW92ZUZvbGxvd2VyIiwid2F0Y2hMb2FkRm9sbG93ZXJzIiwid2F0Y2hMb2FkRm9sbG93aW5ncyIsIndhdGNoQ2hhbmdlTmlja25hbWUiLCJ3YXRjaExvYWRNeUluZm8iLCJ3YXRjaEZvbGxvdyIsIndhdGNoVW5Gb2xsb3ciLCJ3YXRjaExvZ0luIiwid2F0Y2hMb2dPdXQiLCJ3YXRjaFNpZ25VcCIsInVzZXJTYWdhIiwibG9nSW5BUEkiLCJkYXRhIiwiYXhpb3MiLCJwb3N0IiwiYWN0aW9uIiwiY2FsbCIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJwdXQiLCJ0eXBlIiwiTE9HX0lOX1NVQ0NFU1MiLCJlcnJvciIsIkxPR19JTl9GQUlMVVJFIiwicmVzcG9uc2UiLCJsb2dPdXRBUEkiLCJMT0dfT1VUX1NVQ0NFU1MiLCJMT0dfT1VUX0ZBSUxVUkUiLCJjaGFuZ2VOaWNrbmFtZUFQSSIsInBhdGNoIiwibmlja25hbWUiLCJDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyIsIkNIQU5HRV9OSUNLTkFNRV9GQUlMVVJFIiwibG9hZE15SW5mb0FQSSIsInVzZXJJZCIsImdldCIsIndpdGhDcmVkZW50aWFscyIsIkxPQURfTVlfSU5GT19TVUNDRVNTIiwibWUiLCJMT0FEX01ZX0lORk9fRkFJTFVSRSIsImZvbGxvd0FQSSIsIkZPTExPV19TVUNDRVNTIiwiRk9MTE9XX0ZBSUxVUkUiLCJ1bmZvbGxvd0FQSSIsIlVORk9MTE9XX1NVQ0NFU1MiLCJVTkZPTExPV19GQUlMVVJFIiwic2lnblVwQVBJIiwiU0lHTl9VUF9TVUNDRVNTIiwiU0lHTl9VUF9GQUlMVVJFIiwibG9hZEZvbGxvd2Vyc0FQSSIsIkxPQURfRk9MTE9XRVJTX1NVQ0NFU1MiLCJMT0FEX0ZPTExPV0VSU19GQUlMVVJFIiwibG9hZEZvbGxvd2luZ3NBUEkiLCJMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUyIsIkxPQURfRk9MTE9XSU5HU19GQUlMVVJFIiwicmVtb3ZlRm9sbG93ZXJBUEkiLCJSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUyIsIlJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFIiwibG9hZFVzZXJBUEkiLCJMT0FEX1VTRVJfIiwidGFrZUxhdGVzdCIsIkxPQURfVVNFUl9SRVFVRVNUIiwiUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1QiLCJMT0FEX0ZPTExPV0VSU19SRVFVRVNUIiwiTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1QiLCJDSEFOR0VfTklDS05BTUVfUkVRVUVTVCIsIkxPQURfTVlfSU5GT19SRVFVRVNUIiwiRk9MTE9XX1JFUVVFU1QiLCJVTkZPTExPV19SRVFVRVNUIiwiTE9HX0lOX1JFUVVFU1QiLCJMT0dfT1VUX1JFUVVFU1QiLCJTSUdOX1VQX1JFUVVFU1QiLCJhbGwiLCJmb3JrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrR0EyQ1VBLEs7bUdBeUJBQyxNO21HQXlCQUMsYzttR0EyQkFDLFU7bUdBd0JBQyxNO21HQXlCQUMsUTttR0EyQkFDLE07bUdBdUJBQyxhO21HQXNCQUMsYztvR0FzQkFDLGM7b0dBb0JBQyxRO29HQVdBQyxhO29HQUdBQyxtQjtvR0FJQUMsa0I7b0dBSUFDLG1CO29HQUlBQyxtQjtvR0FJQUMsZTtvR0FJQUMsVztvR0FJQUMsYTtvR0FJQUMsVTtvR0FJQUMsVztvR0FJQUMsVztvR0FJZUMsUTs7QUFqVnpCO0FBQ0E7QUFDQTs7QUEwQkEsU0FBU0MsUUFBVCxDQUFrQkMsSUFBbEIsRUFBd0I7QUFBRTtBQUNiO0FBRVo7QUFDQTtBQUVBO0FBQ0EsU0FBT0MsNENBQUssQ0FBQ0MsSUFBTixDQUFX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ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YWxsLCBjYWxsLCBkZWxheSwgZm9yaywgcHV0LCB0YWtlTGF0ZXN0fSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHtcclxuXHRDSEFOR0VfTklDS05BTUVfRkFJTFVSRSxcclxuXHRDSEFOR0VfTklDS05BTUVfUkVRVUVTVCxcclxuXHRDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyxcclxuXHRGT0xMT1dfRkFJTFVSRSxcclxuXHRGT0xMT1dfUkVRVUVTVCxcclxuXHRGT0xMT1dfU1VDQ0VTUywgTE9BRF9GT0xMT1dFUlNfRkFJTFVSRSwgTE9BRF9GT0xMT1dFUlNfUkVRVUVTVCxcclxuXHRMT0FEX0ZPTExPV0VSU19TVUNDRVNTLCBMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRSwgTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1QsIExPQURfRk9MTE9XSU5HU19TVUNDRVNTLFxyXG5cdExPQURfTVlfSU5GT19GQUlMVVJFLFxyXG5cdExPQURfTVlfSU5GT19SRVFVRVNULFxyXG5cdExPQURfTVlfSU5GT19TVUNDRVNTLFxyXG5cdExPR19JTl9GQUlMVVJFLFxyXG5cdExPR19JTl9SRVFVRVNULFxyXG5cdExPR19JTl9TVUNDRVNTLFxyXG5cdExPR19PVVRfRkFJTFVSRSxcclxuXHRMT0dfT1VUX1JFUVVFU1QsXHJcblx0TE9HX09VVF9TVUNDRVNTLCBSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRSwgUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1QsIFJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTLFxyXG5cdFNJR05fVVBfRkFJTFVSRSxcclxuXHRTSUdOX1VQX1JFUVVFU1QsXHJcblx0U0lHTl9VUF9TVUNDRVNTLFxyXG5cdFVORk9MTE9XX0ZBSUxVUkUsXHJcblx0VU5GT0xMT1dfUkVRVUVTVCxcclxuXHRVTkZPTExPV19TVUNDRVNTLFxyXG59IGZyb20gXCIuLi9yZWR1Y2Vycy91c2VyXCI7XHJcblxyXG5cclxuZnVuY3Rpb24gbG9nSW5BUEkoZGF0YSkgeyAvLyBnZW5lcmF0b3Ig7JWE64uYXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly9yZXR1cm4gYXhpb3MucG9zdCgnL2FwaS9sb2dpbicsIGRhdGEpIC8vIOyLpOygnCDshJzrsoTsl5Ag66Gc6re47J24IOyalOyyreydhCDrs7Trg4QgLy8gZnJvbnRcclxuXHJcblx0Ly8g7Iuk7KCcIOyEnOuyhOyXkCDroZzqt7jsnbgg7JqU7LKt7J2EIOuztOuDhCAvLyBiYWNrXHJcblx0Ly9yZXR1cm4gYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDY1L3VzZXIvbG9naW4nLCBkYXRhKVxyXG5cclxuXHQvLyBsb2NhbGhvc3Qg7KSR67O1IOyXhuyVoOq4sFxyXG5cdHJldHVybiBheGlvcy5wb3N0KCcvdXNlci9sb2dpbicsIGRhdGEpXHJcbn1cclxuXHJcbi8vIO2FjOyKpO2KuCDsvZTrk5xcclxuLy8gY29uc3QgbCA9IGxvZ0luKHt0eXBlOiAnTE9HX0lOX1JFUVVFU1QnLCBkYXRhOiB7aWQ6ICdybGFhbHNkbjhAbmF2ZXIuY29tJ319KVxyXG4vLyBcdFx0bC5uZXh0KCk7XHJcbi8vIFx0XHRsLm5leHQoKTtcclxuLy8vLy8vLy8vLy8vLy8vLy9cclxuZnVuY3Rpb24qIGxvZ0luKGFjdGlvbikgeyAvLyBsb2dpbiBhY3Rpb24gcmVxdWVzdCDqsIAgYWN0aW9uIOyXkCDsoITri6xcclxuXHR0cnkgeyAvLyDsmpTssq0g7Iuk7YyoIOuMgOu5hFxyXG5cdFx0Ly95aWVsZCBkZWxheSgxMDAwKSAvLyBmcm9udFxyXG5cdFx0Y29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2dJbkFQSSwgYWN0aW9uLmRhdGEpIC8vIOyEnOuyhOyXkOyEnCDrsJvsnYAg6rKw6rO8IOqwkuydhCDrsJvsnYxcclxuXHRcdGNvbnNvbGUubG9nKCdzYWdhIGxvZ0luIOyLpO2WieykkTo6JywgYWN0aW9uLmRhdGEpXHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOiBMT0dfSU5fU1VDQ0VTUyxcclxuXHRcdFx0Ly9kYXRhOiBhY3Rpb24uZGF0YSwgLy8gZnJvbnRcclxuXHRcdFx0ZGF0YTogcmVzdWx0LmRhdGEgLy8gKOyEseqztSDqsrDqs7wg64u06rmAKSBiYWNrXHJcblx0XHR9KVxyXG5cdFx0Y29uc29sZS5sb2coJ3NhZ2EgbG9nSW4g7JmE66OMIDo6JywgcmVzdWx0KVxyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0Y29uc29sZS5lcnJvcignbG9nSW4nLCBlcnIpXHJcblx0XHR5aWVsZCBwdXQoeyAvLyBwdXQg7J2AIGRpc3BhdGNoIOudvOqzoCDsg53qsIHtlZjsnpBcclxuXHRcdFx0dHlwZTogTE9HX0lOX0ZBSUxVUkUsXHJcblx0XHRcdGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSAvLyAo7Iuk7YyoIOqysOqzvCDri7TquYApXHJcblx0XHR9KVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9nT3V0QVBJKCkge1xyXG5cdC8vIHJldHVybiBheGlvcy5wb3N0KCcvYXBpL2xvZ291dCcpIGZyb250XHJcblx0cmV0dXJuIGF4aW9zLnBvc3QoJy91c2VyL2xvZ291dCcpXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2dPdXQoKSB7XHJcblx0dHJ5IHsgLy8g7JqU7LKtIOyLpO2MqCDrjIDruYRcclxuXHRcdC8veWllbGQgZGVsYXkoMTAwMCkgZnJvbnRcclxuXHRcdHlpZWxkIGNhbGwobG9nT3V0QVBJKSAvLyDshJzrsoTsl5DshJwg67Cb7J2AIOqysOqzvCDqsJLsnYQg67Cb7J2MIGJhY2tcclxuXHRcdGNvbnNvbGUubG9nKCdzYWdhczo6IGxvZ291dCDsi6TtloknKVxyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogTE9HX09VVF9TVUNDRVNTLFxyXG5cdFx0fSlcclxuXHRcdGNvbnNvbGUubG9nKCdzYWdhczo6IGxvZ291dCDsmYTro4wnKVxyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0Y29uc29sZS5lcnJvcignZnJvbnQgbG9nT3V0IDogJywgZXJyKVxyXG5cdFx0eWllbGQgcHV0KHsgLy8gcHV0IOydgCBkaXNwYXRjaCDrnbzqs6Ag7IOd6rCB7ZWY7J6QXHJcblx0XHRcdHR5cGU6IExPR19PVVRfRkFJTFVSRSxcclxuXHRcdFx0ZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhIC8vICjsi6TtjKgg6rKw6rO8IOuLtOq5gClcclxuXHRcdH0pXHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VOaWNrbmFtZUFQSShkYXRhKSB7IC8vIGdlbmVyYXRvciDslYTri5hcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAvLyDsi6TsoJwg7ISc67KE7JeQIOuhnOq3uOyduCDsmpTssq3snYQg67O064OEIC8vIGJhY2tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAvL3JldHVybiBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwNjUvdXNlci9sb2dpbicsIGRhdGEpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgLy8gbG9jYWxob3N0IOykkeuztSDsl4bslaDquLBcclxuXHRyZXR1cm4gYXhpb3MucGF0Y2goJy91c2VyL25pY2tuYW1lJywge25pY2tuYW1lOiBkYXRhfSlcclxufVxyXG5cclxuZnVuY3Rpb24qIGNoYW5nZU5pY2tuYW1lKGFjdGlvbikgeyAvLyBsb2dpbiBhY3Rpb24gcmVxdWVzdCDqsIAgYWN0aW9uIOyXkCDsoITri6xcclxuXHR0cnkgeyAvLyDsmpTssq0g7Iuk7YyoIOuMgOu5hFxyXG5cdFx0Ly95aWVsZCBkZWxheSgxMDAwKSAvLyBmcm9udFxyXG5cdFx0Y29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChjaGFuZ2VOaWNrbmFtZUFQSSwgYWN0aW9uLmRhdGEpIC8vIOyEnOuyhOyXkOyEnCDrsJvsnYAg6rKw6rO8IOqwkuydhCDrsJvsnYxcclxuXHRcdGNvbnNvbGUubG9nKCdzYWdhIGNoYW5nZU5pY2tuYW1lIOyLpO2WieykkTo6JywgYWN0aW9uLmRhdGEpXHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOiBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyxcclxuXHRcdFx0Ly9kYXRhOiBhY3Rpb24uZGF0YSwgLy8gZnJvbnRcclxuXHRcdFx0ZGF0YTogcmVzdWx0LmRhdGEgLy8gKOyEseqztSDqsrDqs7wg64u06rmAKSBiYWNrXHJcblx0XHR9KVxyXG5cdFx0Y29uc29sZS5sb2coJ3NhZ2EgY2hhbmdlTmlja25hbWUg7JmE66OMIDo6JywgcmVzdWx0KVxyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0Y29uc29sZS5lcnJvcignY2hhbmdlTmlja25hbWUnLCBlcnIpXHJcblx0XHR5aWVsZCBwdXQoeyAvLyBwdXQg7J2AIGRpc3BhdGNoIOudvOqzoCDsg53qsIHtlZjsnpBcclxuXHRcdFx0dHlwZTogQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUsXHJcblx0XHRcdGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSAvLyAo7Iuk7YyoIOqysOqzvCDri7TquYApXHJcblx0XHR9KVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZE15SW5mb0FQSSh1c2VySWQpIHtcclxuXHQvLyDshJzrsoTsl5Ag7JqU7LKt7J2EIOuztOuCtOuKlCDrtoDrtoRcclxuXHRyZXR1cm4gYXhpb3MuZ2V0KHVzZXJJZCA/IGAvdXNlci8ke3VzZXJJZH1gIDogJy91c2VyLycsIHtcclxuXHRcdHdpdGhDcmVkZW50aWFsczogdHJ1ZSwvLyDtgbTrnbzsnbTslrjtirjsl5DshJwg7JqU7LKtIOuztOuCvCDrlYzripQg67iM65287Jqw7KCA6rCAIOy/oO2CpOulvCDqsJnsnbQg64+Z67SJ7ZW07KSY7JqUXHJcblx0fSk7IC8vIOyEnOuyhOyCrOydtOuTnOugjOuNlOungeydvCDrlYzripQsIOu4jOudvOyasOyggOqwgCDsl4bslrTsmpQuXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkTXlJbmZvKGFjdGlvbikge1xyXG5cdHRyeSB7XHJcblx0XHRjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRNeUluZm9BUEksIGFjdGlvbi5kYXRhKVxyXG5cdFx0Y29uc29sZS5sb2coJ3NhZ2EgbG9hZE15SW5mbyDsi6TtlokgOjogJywgYWN0aW9uLmRhdGEpXHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOiBMT0FEX01ZX0lORk9fU1VDQ0VTUyxcclxuXHRcdFx0ZGF0YTogcmVzdWx0LmRhdGEsXHJcblx0XHRcdG1lOiAhYWN0aW9uLmRhdGFcclxuXHRcdH0pXHJcblx0XHRjb25zb2xlLmxvZygnc2FnYSBsb2FkTXlJbmZvIOyEseqztTo6ICcsIHJlc3VsdClcclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoJ3NhZ2EgbG9hZE15SW5mbyBlcnJvciA6OiAnLCBlcnIpXHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOiBMT0FEX01ZX0lORk9fRkFJTFVSRSxcclxuXHRcdFx0ZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhXHJcblx0XHR9KVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gZm9sbG93QVBJKGRhdGEpIHsgLy8gZGF0YSDsl5Ag7IKs7Jqp7J6QIGlkIOuEo+yWtOyjvOq4sFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAvLyByZXR1cm4gYXhpb3MucG9zdCgnL2FwaS9mb2xsb3cnLCBkYXRhKSBmcm9udFxyXG5cdHJldHVybiBheGlvcy5wYXRjaChgL3VzZXIvJHtkYXRhfS9mb2xsb3dgKVxyXG59XHJcblxyXG5mdW5jdGlvbiogZm9sbG93KGFjdGlvbikge1xyXG5cdHRyeSB7XHJcblx0XHQvL3lpZWxkIGRlbGF5KDEwMDApIGZyb250XHJcblx0XHRjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGZvbGxvd0FQSSwgYWN0aW9uLmRhdGEpXHJcblx0XHRjb25zb2xlLmxvZygnc2FnYSBmb2xsb3cg7Iuk7ZaJIDogJywgcmVzdWx0KVxyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogRk9MTE9XX1NVQ0NFU1MsXHJcblx0XHRcdC8vZGF0YTogYWN0aW9uLmRhdGEgZnJvbnRcclxuXHRcdFx0ZGF0YTogcmVzdWx0LmRhdGFcclxuXHRcdH0pXHJcblx0XHRjb25zb2xlLmxvZygnc2FnYSBmb2xsb3cg7JmE66OMIDo6ICcsIHJlc3VsdClcclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoJ3NhZ2EgZm9sbG93IGVycm9yIDo6ICcsIGVycilcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IEZPTExPV19GQUlMVVJFLFxyXG5cdFx0XHRlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcblx0XHR9KVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gdW5mb2xsb3dBUEkoZGF0YSkgey8vIGRhdGEg7JeQIOyCrOyaqeyekCBpZCDrhKPslrTso7zquLBcclxuXHQvL3JldHVybiBheGlvcy5wb3N0KCcvYXBpL3VuZm9sbG93JywgZGF0YSkgZnJvbnRcclxuXHRyZXR1cm4gYXhpb3MuZGVsZXRlKGAvdXNlci8ke2RhdGF9L2ZvbGxvd2ApXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB1bmZvbGxvdyhhY3Rpb24pIHtcclxuXHR0cnkge1xyXG5cdFx0Y29uc3QgcmVzdWx0ID0geWllbGQgY2FsbCh1bmZvbGxvd0FQSSwgYWN0aW9uLmRhdGEpXHJcblx0XHQvL3lpZWxkIGRlbGF5KDEwMDApIGZyb250XHJcblx0XHRjb25zb2xlLmxvZygnc2FnYSB1bmZvbGxvdyDsmpTssq0gOjogJywgYWN0aW9uLmRhdGEpXHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOiBVTkZPTExPV19TVUNDRVNTLFxyXG5cdFx0XHQvL2RhdGE6IGFjdGlvbi5kYXRhIGZyb250XHJcblx0XHRcdGRhdGE6IHJlc3VsdC5kYXRhXHJcblx0XHR9KVxyXG5cdFx0Y29uc29sZS5sb2coJ3NhZ2EgdW5mb2xsb3cg7ISx6rO1OjogJywgcmVzdWx0KVxyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0Y29uc29sZS5lcnJvcignc2FnYSB1bmZvbGxvdyBlcnJvcjo6ICcsIGVycilcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IFVORk9MTE9XX0ZBSUxVUkUsXHJcblx0XHRcdGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuXHRcdH0pXHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBzaWduVXBBUEkoZGF0YSkge1xyXG5cdC8vIGJhY2sgZW5kIHNlcnZlciBhZGRyXHJcblx0Ly8gZGF0YSDripQgZW1haWwsIG5pY2tuYW1lLCBwYXNzd29yZCBvYmplY3RcclxuXHQvL3JldHVybiBheGlvcy5wb3N0KCcvYXBpL3NpZ251cCcsIGRhdGEpIC8vIGZyb250XHJcblx0cmV0dXJuIGF4aW9zLnBvc3QoJy91c2VyJywgZGF0YSkgLy8gYmFja1xyXG59XHJcblxyXG5mdW5jdGlvbiogc2lnblVwKGFjdGlvbikge1xyXG5cdHRyeSB7XHJcblx0XHQvL3lpZWxkIGRlbGF5KDEwMDApXHJcblx0XHRjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHNpZ25VcEFQSSwgYWN0aW9uLmRhdGEpXHJcblx0XHRjb25zb2xlLmxvZygnc2FnYSBzaWduIHVwIHJlc3VsdCDsi6TtlonspJEgOjogJywgYWN0aW9uLmRhdGEpXHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOiBTSUdOX1VQX1NVQ0NFU1MsXHJcblx0XHRcdC8vZGF0YTogcmVzdWx0LmRhdGFcclxuXHRcdH0pXHJcblx0XHRjb25zb2xlLmxvZygnc2FnYSBzaWduIHVwIOyZhOujjCA6OiAnLCByZXN1bHQpXHJcblx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRjb25zb2xlLmVycm9yKCdzYWdhIHNpZ25VcCBlcnJvciA6ICcsIGVycilcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IFNJR05fVVBfRkFJTFVSRSxcclxuXHRcdFx0ZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhXHJcblx0XHR9KVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZEZvbGxvd2Vyc0FQSShkYXRhKSB7XHJcblx0cmV0dXJuIGF4aW9zLmdldCgnL3VzZXIvZm9sbG93ZXJzJywgZGF0YSlcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRGb2xsb3dlcnMoYWN0aW9uKSB7XHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZEZvbGxvd2Vyc0FQSSwgYWN0aW9uLmRhdGEpXHJcblx0XHRjb25zb2xlLmxvZygnc2FnYSBmb2xsb3dlcnM6OiDsmpTssq0nLCBhY3Rpb24uZGF0YSlcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IExPQURfRk9MTE9XRVJTX1NVQ0NFU1MsXHJcblx0XHRcdGRhdGE6IHJlc3VsdC5kYXRhLFxyXG5cdFx0fSlcclxuXHRcdGNvbnNvbGUubG9nKCdzYWdhIGZvbGxvd2Vyczo6IOyEseqztScsIHJlc3VsdClcclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoJ3NhZ2EgZm9sbG93ZXJzOjonLCBlcnIpXHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOiBMT0FEX0ZPTExPV0VSU19GQUlMVVJFLFxyXG5cdFx0XHRlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcblx0XHR9KVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZEZvbGxvd2luZ3NBUEkoZGF0YSkge1xyXG5cdHJldHVybiBheGlvcy5nZXQoJy91c2VyL2ZvbGxvd2luZ3MnLCBkYXRhKVxyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZEZvbGxvd2luZ3MoYWN0aW9uKSB7XHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZEZvbGxvd2luZ3NBUEksIGFjdGlvbi5kYXRhKVxyXG5cdFx0Y29uc29sZS5sb2coJ3NhZ2EgZm9sbG93aW5ncyDsmpTssq06OicsIGFjdGlvbi5kYXRhKVxyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1MsXHJcblx0XHRcdGRhdGE6IHJlc3VsdC5kYXRhXHJcblx0XHR9KVxyXG5cdFx0Y29uc29sZS5sb2coJ3NhZ2EgZm9sbG93aW5ncyDshLHqs7U6OicsIHJlc3VsdClcclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoJ3NhZ2EgZm9sbG93aW5ncyDsi6TtjKg6OicsIGVycilcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IExPQURfRk9MTE9XSU5HU19GQUlMVVJFLFxyXG5cdFx0XHRlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGFcclxuXHRcdH0pXHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVGb2xsb3dlckFQSShkYXRhKSB7XHJcblx0cmV0dXJuIGF4aW9zLmRlbGV0ZShgL3VzZXIvZm9sbG93ZXIvJHtkYXRhfWApIC8vIOuqh+uyiOynuOydmCDtjJTroZzsm4zrpbwg7KCc6rGw7ZWc64ukXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiByZW1vdmVGb2xsb3dlcihhY3Rpb24pIHtcclxuXHR0cnkge1xyXG5cdFx0Y29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChyZW1vdmVGb2xsb3dlckFQSSwgYWN0aW9uLmRhdGEpXHJcblx0XHRjb25zb2xlLmxvZygnc2FnYSByZW1vdmVGb2xsb3dlciDsmpTssq06OiAnLCBhY3Rpb24uZGF0YSlcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IFJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTLFxyXG5cdFx0XHRkYXRhOiByZXN1bHQuZGF0YVxyXG5cdFx0fSlcclxuXHRcdGNvbnNvbGUubG9nKCdzYWdhIHJlbW92ZUZvbGxvd2VyIOyEseqztTo6ICcsIHJlc3VsdClcclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoJ3NhZ2EgcmVtb3ZlRm9sbG93ZXIg7Iuk7YyoOjogJywgZXJyKVxyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkUsXHJcblx0XHRcdGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YVxyXG5cdFx0fSlcclxuXHR9XHJcbn1cclxuZnVuY3Rpb24gbG9hZFVzZXJBUEkoZGF0YSl7XHJcblx0cmV0dXJuIGF4aW9zLmdldChgL3VzZXIvJHtkYXRhfWApXHJcbn1cclxuZnVuY3Rpb24qIGxvYWRVc2VyKGFjdGlvbil7XHJcblx0dHJ5IHtcclxuXHQgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkVXNlckFQSSwgYWN0aW9uLmRhdGEpXHJcblx0XHRjb25zb2xlLmxvZygnc2FnYSBsb2FkVXNlciDsi6TtlokgOjogJywgYWN0aW9uLmRhdGEpXHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOiBMT0FEX1VTRVJfXHJcblx0XHR9KVxyXG5cdH1jYXRjaCAoZXJyKSB7XHJcblxyXG5cdH1cclxufVxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkVXNlcigpe1xyXG5cdHlpZWxkIHRha2VMYXRlc3QoTE9BRF9VU0VSX1JFUVVFU1QsIGxvYWRVc2VyKVxyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaFJlbW92ZUZvbGxvd2VyKCkge1xyXG5cdHlpZWxkIHRha2VMYXRlc3QoUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1QsIHJlbW92ZUZvbGxvd2VyKVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkRm9sbG93ZXJzKCkge1xyXG5cdHlpZWxkIHRha2VMYXRlc3QoTE9BRF9GT0xMT1dFUlNfUkVRVUVTVCwgbG9hZEZvbGxvd2VycylcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZEZvbGxvd2luZ3MoKSB7XHJcblx0eWllbGQgdGFrZUxhdGVzdChMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVCwgbG9hZEZvbGxvd2luZ3MpXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaENoYW5nZU5pY2tuYW1lKCkge1xyXG5cdHlpZWxkIHRha2VMYXRlc3QoQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QsIGNoYW5nZU5pY2tuYW1lKVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkTXlJbmZvKCkge1xyXG5cdHlpZWxkIHRha2VMYXRlc3QoTE9BRF9NWV9JTkZPX1JFUVVFU1QsIGxvYWRNeUluZm8pXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEZvbGxvdygpIHtcclxuXHR5aWVsZCB0YWtlTGF0ZXN0KEZPTExPV19SRVFVRVNULCBmb2xsb3cpXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFVuRm9sbG93KCkge1xyXG5cdHlpZWxkIHRha2VMYXRlc3QoVU5GT0xMT1dfUkVRVUVTVCwgdW5mb2xsb3cpXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvZ0luKCkge1x0Ly8g66Gc6re47J24IOyVoeyFmOydtCDsi6TtlonrkKDrlYzquYzsp4Ag6riw64uk66as6rKg64uk64qUIOucu1xyXG5cdHlpZWxkIHRha2VMYXRlc3QoTE9HX0lOX1JFUVVFU1QsIGxvZ0luKSAvL0xPR19JTl9SRVFVRVNUIOyVoeyFmOydtCDsi6TtlonrkJjrqbQgbG9nSW4g7ZWo7IiYIOyLpO2WiVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2dPdXQoKSB7XHQvLyDroZzqt7jslYTsm4Mg7JWh7IWY7J20IOyLpO2WieuQoOuVjOq5jOyngCDquLDri6TrpqzqsqDri6TripQg65y7XHJcblx0eWllbGQgdGFrZUxhdGVzdChMT0dfT1VUX1JFUVVFU1QsIGxvZ091dCkgLy9MT0dfT1VUX1JFUVVFU1Qg7JWh7IWY7J20IOyLpO2WieuQmOuptCBsb2dJbiDtlajsiJgg7Iuk7ZaJXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFNpZ25VcCgpIHtcdC8vIO2ajOybkOqwgOyehSDslaHshZjsnbQg7Iuk7ZaJ65Cg65WM6rmM7KeAIOq4sOuLpOumrOqyoOuLpOuKlCDrnLtcclxuXHR5aWVsZCB0YWtlTGF0ZXN0KFNJR05fVVBfUkVRVUVTVCwgc2lnblVwKSAvLyBTSUdOX1VQX1JFUVVFU1Qg7JWh7IWY7J20IOyLpO2WieuQmOuptCBsb2dJbiDtlajsiJgg7Iuk7ZaJXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiB1c2VyU2FnYSgpIHtcclxuXHR5aWVsZCBhbGwoW1xyXG5cdFx0XHRmb3JrKHdhdGNoTG9hZFVzZXIpLFxyXG5cdFx0Zm9yayh3YXRjaFJlbW92ZUZvbGxvd2VyKSxcclxuXHRcdGZvcmsod2F0Y2hMb2FkRm9sbG93ZXJzKSxcclxuXHRcdGZvcmsod2F0Y2hMb2FkRm9sbG93aW5ncyksXHJcblx0XHRmb3JrKHdhdGNoQ2hhbmdlTmlja25hbWUpLFxyXG5cdFx0Zm9yayh3YXRjaExvYWRNeUluZm8pLFxyXG5cdFx0Zm9yayh3YXRjaEZvbGxvdyksXHJcblx0XHRmb3JrKHdhdGNoVW5Gb2xsb3cpLFxyXG5cdFx0Zm9yayh3YXRjaExvZ0luKSxcclxuXHRcdGZvcmsod2F0Y2hMb2dPdXQpLFxyXG5cdFx0Zm9yayh3YXRjaFNpZ25VcCksXHJcblx0XSlcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9