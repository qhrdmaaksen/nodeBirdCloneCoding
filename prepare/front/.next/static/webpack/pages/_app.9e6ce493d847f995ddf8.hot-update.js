webpackHotUpdate_N_E("pages/_app",{

/***/ "./sagas/post.js":
/*!***********************!*\
  !*** ./sagas/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return postSaga; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");


var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(loadPosts),
    _marked2 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(likePost),
    _marked3 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(unlikePost),
    _marked4 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(addPost),
    _marked5 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(removePost),
    _marked6 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(addComment),
    _marked7 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLikePost),
    _marked8 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchUnlikePost),
    _marked9 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLoadPosts),
    _marked10 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchAddPost),
    _marked11 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchRemovePost),
    _marked12 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchAddComment),
    _marked13 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(postSaga);




 //import shortId from "shortid"; front
// restAPI

function loadPostsAPI(data) {
  // 3 전달되면
  //return axios.get('/api/posts', data) // 4 데이터가 간다 front
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/posts', data); // 4 데이터가 간다 ,
}

function loadPosts(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function loadPosts$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          console.log('Sagas:: loadPosts 실행중', action.data);
          _context.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadPostsAPI, action.data);

        case 4:
          result = _context.sent;
          // 2 데이터를 꺼내서
          //yield delay(1000) front
          console.log('loadPosts 완료:: ', result);
          _context.next = 8;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_POSTS_SUCCESS"],
            // data: generateDummyPost(10), // data 10 개 front
            data: result.data
          });

        case 8:
          _context.next = 15;
          break;

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          console.error('loadPosts : ', _context.t0);
          _context.next = 15;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_POSTS_FAILURE"],
            error: _context.t0.response.data
          });

        case 15:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 10]]);
}

function likePostAPI(data) {
  // 3 전달되면
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.patch("/post/".concat(data, "/like")); // 4 데이터가 간다, like & unlike 는 patch ( 게시글에 일부분 수정이기때문 )
}

function likePost(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function likePost$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(likePostAPI, action.data);

        case 3:
          result = _context2.sent;
          // 2 데이터를 꺼내서
          console.log('likePost 실행중::', result);
          _context2.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LIKE_POST_SUCCESS"],
            data: result.data // back, postId, userId 들어있음

          });

        case 7:
          console.log('likePost 완료::', result);
          _context2.next = 15;
          break;

        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](0);
          console.error('likePost error:: ', _context2.t0);
          _context2.next = 15;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LIKE_POST_FAILURE"],
            error: _context2.t0.response.data
          });

        case 15:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[0, 10]]);
}

function unlikePostAPI(data) {
  // 3 전달되면
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a["delete"]("/post/".concat(data, "/like")); // 4 데이터가 간다
}

function unlikePost(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function unlikePost$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(unlikePostAPI, action.data);

        case 3:
          result = _context3.sent;
          // 2 데이터를 꺼내서
          console.log('unlikePost 실행중::', result);
          _context3.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["UNLIKE_POST_SUCCESS"],
            data: result.data // back, postId,userId 들어있음

          });

        case 7:
          console.log('UNLIKEPost 완료::', result);
          _context3.next = 15;
          break;

        case 10:
          _context3.prev = 10;
          _context3.t0 = _context3["catch"](0);
          console.error('UNLIKEPost error:: ', _context3.t0);
          _context3.next = 15;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["UNLIKE_POST_FAILURE"],
            error: _context3.t0.response.data
          });

        case 15:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[0, 10]]);
}

function addPostAPI(data) {
  // 3 전달되면
  //return axios.post('/api/post', data) // 4 데이터가 간다 front
  // data content 가 req.body.content 로 백엔드에 변환
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/post', {
    content: data
  }); // 4 데이터가 간다
}

function addPost(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function addPost$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(addPostAPI, action.data);

        case 3:
          result = _context4.sent;
          // 2 데이터를 꺼내서
          //yield delay(1000) front
          //const id = shortId.generate() // front 의 더미 아디
          console.log('addPost 실행중::', result);
          _context4.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_SUCCESS"],

            /*data: { // front dummy
            	id,
            	content: action.data,
            }*/
            data: result.data // back, 실제로 게시글이 들어있음

          });

        case 7:
          console.log('addPost 완료::', result);
          _context4.next = 10;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["ADD_POST_TO_ME"],
            // data: id, // front dummy
            data: result.data.id // back

          });

        case 10:
          _context4.next = 17;
          break;

        case 12:
          _context4.prev = 12;
          _context4.t0 = _context4["catch"](0);
          console.error('addPost error:: ', _context4.t0);
          _context4.next = 17;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_FAILURE"],
            error: _context4.t0.response.data
          });

        case 17:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4, null, [[0, 12]]);
}

function removePostAPI(data) {
  // 3 전달되면
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/api/post', data); // 4 데이터가 간다
}

function removePost(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function removePost$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(removePostAPI, action.data);

        case 3:
          result = _context5.sent;
          _context5.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_SUCCESS"],
            data: action.data // 어떤 게시물을 지웠는지 id 가있을것

          });

        case 6:
          _context5.next = 8;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["REMOVE_POST_OF_ME"],
            data: action.data
          });

        case 8:
          _context5.next = 15;
          break;

        case 10:
          _context5.prev = 10;
          _context5.t0 = _context5["catch"](0);
          console.error('removePost : ', _context5.t0);
          _context5.next = 15;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_FAILURE"],
            error: _context5.t0.response.data
          });

        case 15:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5, null, [[0, 10]]);
}

function addCommentAPI(data) {
  // 3 전달되면
  //주소는 백엔드와 프론트의 약속일뿐 정해진건없다
  //return axios.post(`/api/post/${data.postId}/comment`, data) // 4 데이터가 간다 // front
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("/post/".concat(data.postId, "/comment"), data); // 4 데이터가 간다 // POST /post/1/comment
}

function addComment(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function addComment$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(addCommentAPI, action.data);

        case 3:
          result = _context6.sent;
          // 2 데이터를 꺼내서 //back
          //yield delay(1000) front
          console.log('addComment 실행중 ::', action.data);
          _context6.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_COMMENT_SUCCESS"],
            //data: action.data // front
            data: result.data
          });

        case 7:
          console.log('addComment 완료::', result);
          _context6.next = 15;
          break;

        case 10:
          _context6.prev = 10;
          _context6.t0 = _context6["catch"](0);
          console.error('addComment error:: ', _context6.t0);
          _context6.next = 15;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_COMMENT_FAILURE"],
            error: _context6.t0.response.data
          });

        case 15:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6, null, [[0, 10]]);
}

function watchLikePost() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLikePost$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["LIKE_POST_REQUEST"], likePost);

        case 2:
        case "end":
          return _context7.stop();
      }
    }
  }, _marked7);
}

function watchUnlikePost() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchUnlikePost$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["UNLIKE_POST_REQUEST"], unlikePost);

        case 2:
        case "end":
          return _context8.stop();
      }
    }
  }, _marked8);
}

function watchLoadPosts() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLoadPosts$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["throttle"])(5000, _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_POSTS_REQUEST"], loadPosts);

        case 2:
        case "end":
          return _context9.stop();
      }
    }
  }, _marked9);
}

function watchAddPost() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchAddPost$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          _context10.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_REQUEST"], addPost);

        case 2:
        case "end":
          return _context10.stop();
      }
    }
  }, _marked10);
}

function watchRemovePost() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchRemovePost$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          _context11.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_REQUEST"], removePost);

        case 2:
        case "end":
          return _context11.stop();
      }
    }
  }, _marked11);
}

function watchAddComment() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchAddComment$(_context12) {
    while (1) {
      switch (_context12.prev = _context12.next) {
        case 0:
          _context12.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_COMMENT_REQUEST"], addComment);

        case 2:
        case "end":
          return _context12.stop();
      }
    }
  }, _marked12);
}

function postSaga() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function postSaga$(_context13) {
    while (1) {
      switch (_context13.prev = _context13.next) {
        case 0:
          _context13.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchUnlikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchAddPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchRemovePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchAddComment)]);

        case 2:
        case "end":
          return _context13.stop();
      }
    }
  }, _marked13);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvcG9zdC5qcyJdLCJuYW1lcyI6WyJsb2FkUG9zdHMiLCJsaWtlUG9zdCIsInVubGlrZVBvc3QiLCJhZGRQb3N0IiwicmVtb3ZlUG9zdCIsImFkZENvbW1lbnQiLCJ3YXRjaExpa2VQb3N0Iiwid2F0Y2hVbmxpa2VQb3N0Iiwid2F0Y2hMb2FkUG9zdHMiLCJ3YXRjaEFkZFBvc3QiLCJ3YXRjaFJlbW92ZVBvc3QiLCJ3YXRjaEFkZENvbW1lbnQiLCJwb3N0U2FnYSIsImxvYWRQb3N0c0FQSSIsImRhdGEiLCJheGlvcyIsImdldCIsImFjdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJjYWxsIiwicmVzdWx0IiwicHV0IiwidHlwZSIsIkxPQURfUE9TVFNfU1VDQ0VTUyIsImVycm9yIiwiTE9BRF9QT1NUU19GQUlMVVJFIiwicmVzcG9uc2UiLCJsaWtlUG9zdEFQSSIsInBhdGNoIiwiTElLRV9QT1NUX1NVQ0NFU1MiLCJMSUtFX1BPU1RfRkFJTFVSRSIsInVubGlrZVBvc3RBUEkiLCJVTkxJS0VfUE9TVF9TVUNDRVNTIiwiVU5MSUtFX1BPU1RfRkFJTFVSRSIsImFkZFBvc3RBUEkiLCJwb3N0IiwiY29udGVudCIsIkFERF9QT1NUX1NVQ0NFU1MiLCJBRERfUE9TVF9UT19NRSIsImlkIiwiQUREX1BPU1RfRkFJTFVSRSIsInJlbW92ZVBvc3RBUEkiLCJSRU1PVkVfUE9TVF9TVUNDRVNTIiwiUkVNT1ZFX1BPU1RfT0ZfTUUiLCJSRU1PVkVfUE9TVF9GQUlMVVJFIiwiYWRkQ29tbWVudEFQSSIsInBvc3RJZCIsIkFERF9DT01NRU5UX1NVQ0NFU1MiLCJBRERfQ09NTUVOVF9GQUlMVVJFIiwidGFrZUxhdGVzdCIsIkxJS0VfUE9TVF9SRVFVRVNUIiwiVU5MSUtFX1BPU1RfUkVRVUVTVCIsInRocm90dGxlIiwiTE9BRF9QT1NUU19SRVFVRVNUIiwiQUREX1BPU1RfUkVRVUVTVCIsIlJFTU9WRV9QT1NUX1JFUVVFU1QiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwiYWxsIiwiZm9yayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tHQThCVUEsUzttR0F3QkFDLFE7bUdBc0JBQyxVO21HQXdCQUMsTzttR0FpQ0FDLFU7bUdBMkJBQyxVO21HQW9CQUMsYTttR0FJQUMsZTttR0FJQUMsYztvR0FJQUMsWTtvR0FJQUMsZTtvR0FJQUMsZTtvR0FJZUMsUTs7QUE1TXpCO0FBQ0E7QUFDQTtDQW9CQTtBQUVBOztBQUNBLFNBQVNDLFlBQVQsQ0FBc0JDLElBQXRCLEVBQTRCO0FBQUU7QUFDN0I7QUFDQSxTQUFPQyw0Q0FBSyxDQUFDQyxHQUFOLENBQVUsUUFBVixFQUFvQkYsSUFBcEIsQ0FBUCxDQUYyQixDQUVNO0FBQ2pDOztBQUVELFNBQVVkLFNBQVYsQ0FBb0JpQixNQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVFQyxpQkFBTyxDQUFDQyxHQUFSLENBQVksdUJBQVosRUFBcUNGLE1BQU0sQ0FBQ0gsSUFBNUM7QUFGRjtBQUdpQixpQkFBTU0sK0RBQUksQ0FBQ1AsWUFBRCxFQUFlSSxNQUFNLENBQUNILElBQXRCLENBQVY7O0FBSGpCO0FBR1FPLGdCQUhSO0FBR3VEO0FBQ3JEO0FBQ0FILGlCQUFPLENBQUNDLEdBQVIsQ0FBWSxpQkFBWixFQUErQkUsTUFBL0I7QUFMRjtBQU1FLGlCQUFNQyw4REFBRyxDQUFDO0FBQ1RDLGdCQUFJLEVBQUVDLGlFQURHO0FBRVQ7QUFDQVYsZ0JBQUksRUFBRU8sTUFBTSxDQUFDUDtBQUhKLFdBQUQsQ0FBVDs7QUFORjtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBWUVJLGlCQUFPLENBQUNPLEtBQVIsQ0FBYyxjQUFkO0FBWkY7QUFhRSxpQkFBTUgsOERBQUcsQ0FBQztBQUNUQyxnQkFBSSxFQUFFRyxpRUFERztBQUVURCxpQkFBSyxFQUFFLFlBQUlFLFFBQUosQ0FBYWI7QUFGWCxXQUFELENBQVQ7O0FBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBb0JBLFNBQVNjLFdBQVQsQ0FBcUJkLElBQXJCLEVBQTJCO0FBQUU7QUFDNUIsU0FBT0MsNENBQUssQ0FBQ2MsS0FBTixpQkFBcUJmLElBQXJCLFdBQVAsQ0FEMEIsQ0FDZTtBQUN6Qzs7QUFFRCxTQUFVYixRQUFWLENBQW1CZ0IsTUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVpQixpQkFBTUcsK0RBQUksQ0FBQ1EsV0FBRCxFQUFjWCxNQUFNLENBQUNILElBQXJCLENBQVY7O0FBRmpCO0FBRVFPLGdCQUZSO0FBRXNEO0FBQ3BESCxpQkFBTyxDQUFDQyxHQUFSLENBQVksZ0JBQVosRUFBOEJFLE1BQTlCO0FBSEY7QUFJRSxpQkFBTUMsOERBQUcsQ0FBQztBQUNUQyxnQkFBSSxFQUFFTyxnRUFERztBQUVUaEIsZ0JBQUksRUFBRU8sTUFBTSxDQUFDUCxJQUZKLENBRVU7O0FBRlYsV0FBRCxDQUFUOztBQUpGO0FBUUVJLGlCQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFaLEVBQTZCRSxNQUE3QjtBQVJGO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBVUVILGlCQUFPLENBQUNPLEtBQVIsQ0FBYyxtQkFBZDtBQVZGO0FBV0UsaUJBQU1ILDhEQUFHLENBQUM7QUFDVEMsZ0JBQUksRUFBRVEsZ0VBREc7QUFFVE4saUJBQUssRUFBRSxhQUFJRSxRQUFKLENBQWFiO0FBRlgsV0FBRCxDQUFUOztBQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQWtCQSxTQUFTa0IsYUFBVCxDQUF1QmxCLElBQXZCLEVBQTZCO0FBQUU7QUFDOUIsU0FBT0MsNENBQUssVUFBTCxpQkFBc0JELElBQXRCLFdBQVAsQ0FENEIsQ0FDYztBQUMxQzs7QUFFRCxTQUFVWixVQUFWLENBQXFCZSxNQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRWlCLGlCQUFNRywrREFBSSxDQUFDWSxhQUFELEVBQWdCZixNQUFNLENBQUNILElBQXZCLENBQVY7O0FBRmpCO0FBRVFPLGdCQUZSO0FBRXdEO0FBQ3RESCxpQkFBTyxDQUFDQyxHQUFSLENBQVksa0JBQVosRUFBZ0NFLE1BQWhDO0FBSEY7QUFJRSxpQkFBTUMsOERBQUcsQ0FBQztBQUNUQyxnQkFBSSxFQUFFVSxrRUFERztBQUVUbkIsZ0JBQUksRUFBRU8sTUFBTSxDQUFDUCxJQUZKLENBRVU7O0FBRlYsV0FBRCxDQUFUOztBQUpGO0FBUUVJLGlCQUFPLENBQUNDLEdBQVIsQ0FBWSxpQkFBWixFQUErQkUsTUFBL0I7QUFSRjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQVVFSCxpQkFBTyxDQUFDTyxLQUFSLENBQWMscUJBQWQ7QUFWRjtBQVdFLGlCQUFNSCw4REFBRyxDQUFDO0FBQ1RDLGdCQUFJLEVBQUVXLGtFQURHO0FBRVRULGlCQUFLLEVBQUUsYUFBSUUsUUFBSixDQUFhYjtBQUZYLFdBQUQsQ0FBVDs7QUFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFrQkEsU0FBU3FCLFVBQVQsQ0FBb0JyQixJQUFwQixFQUEwQjtBQUFFO0FBQzNCO0FBQ0E7QUFDQSxTQUFPQyw0Q0FBSyxDQUFDcUIsSUFBTixDQUFXLE9BQVgsRUFBb0I7QUFBQ0MsV0FBTyxFQUFFdkI7QUFBVixHQUFwQixDQUFQLENBSHlCLENBR21CO0FBQzVDOztBQUVELFNBQVVYLE9BQVYsQ0FBa0JjLE1BQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFaUIsaUJBQU1HLCtEQUFJLENBQUNlLFVBQUQsRUFBYWxCLE1BQU0sQ0FBQ0gsSUFBcEIsQ0FBVjs7QUFGakI7QUFFUU8sZ0JBRlI7QUFFcUQ7QUFDbkQ7QUFDQTtBQUNBSCxpQkFBTyxDQUFDQyxHQUFSLENBQVksZUFBWixFQUE2QkUsTUFBN0I7QUFMRjtBQU1FLGlCQUFNQyw4REFBRyxDQUFDO0FBQ1RDLGdCQUFJLEVBQUVlLCtEQURHOztBQUVUO0FBQ0g7QUFDQTtBQUNBO0FBQ0d4QixnQkFBSSxFQUFFTyxNQUFNLENBQUNQLElBTkosQ0FNVTs7QUFOVixXQUFELENBQVQ7O0FBTkY7QUFjRUksaUJBQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQVosRUFBNEJFLE1BQTVCO0FBZEY7QUFlRSxpQkFBTUMsOERBQUcsQ0FBQztBQUNUQyxnQkFBSSxFQUFFZ0IsNkRBREc7QUFFVDtBQUNBekIsZ0JBQUksRUFBRU8sTUFBTSxDQUFDUCxJQUFQLENBQVkwQixFQUhULENBR1k7O0FBSFosV0FBRCxDQUFUOztBQWZGO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFxQkV0QixpQkFBTyxDQUFDTyxLQUFSLENBQWMsa0JBQWQ7QUFyQkY7QUFzQkUsaUJBQU1ILDhEQUFHLENBQUM7QUFDVEMsZ0JBQUksRUFBRWtCLCtEQURHO0FBRVRoQixpQkFBSyxFQUFFLGFBQUlFLFFBQUosQ0FBYWI7QUFGWCxXQUFELENBQVQ7O0FBdEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQTZCQSxTQUFTNEIsYUFBVCxDQUF1QjVCLElBQXZCLEVBQTZCO0FBQUU7QUFDOUIsU0FBT0MsNENBQUssQ0FBQ3FCLElBQU4sQ0FBVyxXQUFYLEVBQXdCdEIsSUFBeEIsQ0FBUCxDQUQ0QixDQUNTO0FBQ3JDOztBQUVELFNBQVVWLFVBQVYsQ0FBcUJhLE1BQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFaUIsaUJBQU1HLCtEQUFJLENBQUNzQixhQUFELEVBQWdCekIsTUFBTSxDQUFDSCxJQUF2QixDQUFWOztBQUZqQjtBQUVRTyxnQkFGUjtBQUFBO0FBSUUsaUJBQU1DLDhEQUFHLENBQUM7QUFDVEMsZ0JBQUksRUFBRW9CLGtFQURHO0FBRVQ3QixnQkFBSSxFQUFFRyxNQUFNLENBQUNILElBRkosQ0FFVTs7QUFGVixXQUFELENBQVQ7O0FBSkY7QUFBQTtBQVFFLGlCQUFNUSw4REFBRyxDQUFDO0FBQ1RDLGdCQUFJLEVBQUVxQixnRUFERztBQUVUOUIsZ0JBQUksRUFBRUcsTUFBTSxDQUFDSDtBQUZKLFdBQUQsQ0FBVDs7QUFSRjtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBYUVJLGlCQUFPLENBQUNPLEtBQVIsQ0FBYyxlQUFkO0FBYkY7QUFjRSxpQkFBTUgsOERBQUcsQ0FBQztBQUNUQyxnQkFBSSxFQUFFc0Isa0VBREc7QUFFVHBCLGlCQUFLLEVBQUUsYUFBSUUsUUFBSixDQUFhYjtBQUZYLFdBQUQsQ0FBVDs7QUFkRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFxQkEsU0FBU2dDLGFBQVQsQ0FBdUJoQyxJQUF2QixFQUE2QjtBQUFFO0FBQzlCO0FBQ0E7QUFDQSxTQUFPQyw0Q0FBSyxDQUFDcUIsSUFBTixpQkFBb0J0QixJQUFJLENBQUNpQyxNQUF6QixlQUEyQ2pDLElBQTNDLENBQVAsQ0FINEIsQ0FHNEI7QUFDeEQ7O0FBRUQsU0FBVVQsVUFBVixDQUFxQlksTUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVpQixpQkFBTUcsK0RBQUksQ0FBQzBCLGFBQUQsRUFBZ0I3QixNQUFNLENBQUNILElBQXZCLENBQVY7O0FBRmpCO0FBRVFPLGdCQUZSO0FBRXdEO0FBQ3REO0FBQ0FILGlCQUFPLENBQUNDLEdBQVIsQ0FBWSxtQkFBWixFQUFpQ0YsTUFBTSxDQUFDSCxJQUF4QztBQUpGO0FBS0UsaUJBQU1RLDhEQUFHLENBQUM7QUFDVEMsZ0JBQUksRUFBRXlCLGtFQURHO0FBRVQ7QUFDQWxDLGdCQUFJLEVBQUVPLE1BQU0sQ0FBQ1A7QUFISixXQUFELENBQVQ7O0FBTEY7QUFVRUksaUJBQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFaLEVBQStCRSxNQUEvQjtBQVZGO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBWUVILGlCQUFPLENBQUNPLEtBQVIsQ0FBYyxxQkFBZDtBQVpGO0FBYUUsaUJBQU1ILDhEQUFHLENBQUM7QUFDVEMsZ0JBQUksRUFBRTBCLGtFQURHO0FBRVR4QixpQkFBSyxFQUFFLGFBQUlFLFFBQUosQ0FBYWI7QUFGWCxXQUFELENBQVQ7O0FBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBb0JBLFNBQVVSLGFBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0MsaUJBQU00QyxxRUFBVSxDQUFDQyxnRUFBRCxFQUFvQmxELFFBQXBCLENBQWhCOztBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUlBLFNBQVVNLGVBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0MsaUJBQU0yQyxxRUFBVSxDQUFDRSxrRUFBRCxFQUFzQmxELFVBQXRCLENBQWhCOztBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUlBLFNBQVVNLGNBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0MsaUJBQU02QyxtRUFBUSxDQUFDLElBQUQsRUFBT0MsaUVBQVAsRUFBMkJ0RCxTQUEzQixDQUFkOztBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUlBLFNBQVVTLFlBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0MsaUJBQU15QyxxRUFBVSxDQUFDSywrREFBRCxFQUFtQnBELE9BQW5CLENBQWhCOztBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUlBLFNBQVVPLGVBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0MsaUJBQU13QyxxRUFBVSxDQUFDTSxrRUFBRCxFQUFzQnBELFVBQXRCLENBQWhCOztBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUlBLFNBQVVPLGVBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0MsaUJBQU11QyxxRUFBVSxDQUFDTyxrRUFBRCxFQUFzQnBELFVBQXRCLENBQWhCOztBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUllLFNBQVVPLFFBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2QsaUJBQU04Qyw4REFBRyxDQUFDLENBQ1RDLCtEQUFJLENBQUNyRCxhQUFELENBREssRUFFVHFELCtEQUFJLENBQUNwRCxlQUFELENBRkssRUFHVG9ELCtEQUFJLENBQUNuRCxjQUFELENBSEssRUFJVG1ELCtEQUFJLENBQUNsRCxZQUFELENBSkssRUFLVGtELCtEQUFJLENBQUNqRCxlQUFELENBTEssRUFNVGlELCtEQUFJLENBQUNoRCxlQUFELENBTkssQ0FBRCxDQUFUOztBQURjO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuOWU2Y2U0OTNkODQ3Zjk5NWRkZjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YWxsLCBjYWxsLCBkZWxheSwgZm9yaywgcHV0LCB0YWtlTGF0ZXN0LCB0aHJvdHRsZX0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7XHJcblx0QUREX0NPTU1FTlRfRkFJTFVSRSxcclxuXHRBRERfQ09NTUVOVF9SRVFVRVNULFxyXG5cdEFERF9DT01NRU5UX1NVQ0NFU1MsXHJcblx0QUREX1BPU1RfRkFJTFVSRSxcclxuXHRBRERfUE9TVF9SRVFVRVNULFxyXG5cdEFERF9QT1NUX1NVQ0NFU1MsIExJS0VfUE9TVF9GQUlMVVJFLCBMSUtFX1BPU1RfUkVRVUVTVCwgTElLRV9QT1NUX1NVQ0NFU1MsXHJcblx0Ly9nZW5lcmF0ZUR1bW15UG9zdCwgZnJvbnRcclxuXHRMT0FEX1BPU1RTX0ZBSUxVUkUsXHJcblx0TE9BRF9QT1NUU19SRVFVRVNULFxyXG5cdExPQURfUE9TVFNfU1VDQ0VTUyxcclxuXHRSRU1PVkVfUE9TVF9GQUlMVVJFLFxyXG5cdFJFTU9WRV9QT1NUX1JFUVVFU1QsXHJcblx0UkVNT1ZFX1BPU1RfU1VDQ0VTUywgVU5MSUtFX1BPU1RfRkFJTFVSRSwgVU5MSUtFX1BPU1RfUkVRVUVTVCwgVU5MSUtFX1BPU1RfU1VDQ0VTUyxcclxufSBmcm9tIFwiLi4vcmVkdWNlcnMvcG9zdFwiO1xyXG5pbXBvcnQge1xyXG5cdEFERF9QT1NUX1RPX01FLFxyXG5cdFJFTU9WRV9QT1NUX09GX01FLFxyXG59IGZyb20gXCIuLi9yZWR1Y2Vycy91c2VyXCI7XHJcblxyXG4vL2ltcG9ydCBzaG9ydElkIGZyb20gXCJzaG9ydGlkXCI7IGZyb250XHJcblxyXG4vLyByZXN0QVBJXHJcbmZ1bmN0aW9uIGxvYWRQb3N0c0FQSShkYXRhKSB7IC8vIDMg7KCE64us65CY66m0XHJcblx0Ly9yZXR1cm4gYXhpb3MuZ2V0KCcvYXBpL3Bvc3RzJywgZGF0YSkgLy8gNCDrjbDsnbTthLDqsIAg6rCE64ukIGZyb250XHJcblx0cmV0dXJuIGF4aW9zLmdldCgnL3Bvc3RzJywgZGF0YSkgLy8gNCDrjbDsnbTthLDqsIAg6rCE64ukICxcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRQb3N0cyhhY3Rpb24pIHsgLy8gMSDslaHshZjsl5DshJxcclxuXHR0cnkge1xyXG5cdFx0Y29uc29sZS5sb2coJ1NhZ2FzOjogbG9hZFBvc3RzIOyLpO2WieykkScsIGFjdGlvbi5kYXRhKVxyXG5cdFx0Y29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkUG9zdHNBUEksIGFjdGlvbi5kYXRhKSAvLyAyIOuNsOydtO2EsOulvCDqurzrgrTshJxcclxuXHRcdC8veWllbGQgZGVsYXkoMTAwMCkgZnJvbnRcclxuXHRcdGNvbnNvbGUubG9nKCdsb2FkUG9zdHMg7JmE66OMOjogJywgcmVzdWx0KVxyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogTE9BRF9QT1NUU19TVUNDRVNTLFxyXG5cdFx0XHQvLyBkYXRhOiBnZW5lcmF0ZUR1bW15UG9zdCgxMCksIC8vIGRhdGEgMTAg6rCcIGZyb250XHJcblx0XHRcdGRhdGE6IHJlc3VsdC5kYXRhXHJcblx0XHR9KVxyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0Y29uc29sZS5lcnJvcignbG9hZFBvc3RzIDogJywgZXJyKVxyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogTE9BRF9QT1NUU19GQUlMVVJFLFxyXG5cdFx0XHRlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGFcclxuXHRcdH0pXHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBsaWtlUG9zdEFQSShkYXRhKSB7IC8vIDMg7KCE64us65CY66m0XHJcblx0cmV0dXJuIGF4aW9zLnBhdGNoKGAvcG9zdC8ke2RhdGF9L2xpa2VgKSAvLyA0IOuNsOydtO2EsOqwgCDqsITri6QsIGxpa2UgJiB1bmxpa2Ug64qUIHBhdGNoICgg6rKM7Iuc6riA7JeQIOydvOu2gOu2hCDsiJjsoJXsnbTquLDrlYzrrLggKVxyXG59XHJcblxyXG5mdW5jdGlvbiogbGlrZVBvc3QoYWN0aW9uKSB7IC8vIDEg7JWh7IWY7JeQ7IScXHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobGlrZVBvc3RBUEksIGFjdGlvbi5kYXRhKSAvLyAyIOuNsOydtO2EsOulvCDqurzrgrTshJxcclxuXHRcdGNvbnNvbGUubG9nKCdsaWtlUG9zdCDsi6TtlonspJE6OicsIHJlc3VsdClcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IExJS0VfUE9TVF9TVUNDRVNTLFxyXG5cdFx0XHRkYXRhOiByZXN1bHQuZGF0YSwgLy8gYmFjaywgcG9zdElkLCB1c2VySWQg65Ok7Ja07J6I7J2MXHJcblx0XHR9KVxyXG5cdFx0Y29uc29sZS5sb2coJ2xpa2VQb3N0IOyZhOujjDo6JywgcmVzdWx0KVxyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0Y29uc29sZS5lcnJvcignbGlrZVBvc3QgZXJyb3I6OiAnLCBlcnIpXHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOiBMSUtFX1BPU1RfRkFJTFVSRSxcclxuXHRcdFx0ZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhXHJcblx0XHR9KVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gdW5saWtlUG9zdEFQSShkYXRhKSB7IC8vIDMg7KCE64us65CY66m0XHJcblx0cmV0dXJuIGF4aW9zLmRlbGV0ZShgL3Bvc3QvJHtkYXRhfS9saWtlYCkgLy8gNCDrjbDsnbTthLDqsIAg6rCE64ukXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB1bmxpa2VQb3N0KGFjdGlvbikgeyAvLyAxIOyVoeyFmOyXkOyEnFxyXG5cdHRyeSB7XHJcblx0XHRjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHVubGlrZVBvc3RBUEksIGFjdGlvbi5kYXRhKSAvLyAyIOuNsOydtO2EsOulvCDqurzrgrTshJxcclxuXHRcdGNvbnNvbGUubG9nKCd1bmxpa2VQb3N0IOyLpO2WieykkTo6JywgcmVzdWx0KVxyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogVU5MSUtFX1BPU1RfU1VDQ0VTUyxcclxuXHRcdFx0ZGF0YTogcmVzdWx0LmRhdGEsIC8vIGJhY2ssIHBvc3RJZCx1c2VySWQg65Ok7Ja07J6I7J2MXHJcblx0XHR9KVxyXG5cdFx0Y29uc29sZS5sb2coJ1VOTElLRVBvc3Qg7JmE66OMOjonLCByZXN1bHQpXHJcblx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRjb25zb2xlLmVycm9yKCdVTkxJS0VQb3N0IGVycm9yOjogJywgZXJyKVxyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogVU5MSUtFX1BPU1RfRkFJTFVSRSxcclxuXHRcdFx0ZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhXHJcblx0XHR9KVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gYWRkUG9zdEFQSShkYXRhKSB7IC8vIDMg7KCE64us65CY66m0XHJcblx0Ly9yZXR1cm4gYXhpb3MucG9zdCgnL2FwaS9wb3N0JywgZGF0YSkgLy8gNCDrjbDsnbTthLDqsIAg6rCE64ukIGZyb250XHJcblx0Ly8gZGF0YSBjb250ZW50IOqwgCByZXEuYm9keS5jb250ZW50IOuhnCDrsLHsl5Trk5zsl5Ag67OA7ZmYXHJcblx0cmV0dXJuIGF4aW9zLnBvc3QoJy9wb3N0Jywge2NvbnRlbnQ6IGRhdGF9KSAvLyA0IOuNsOydtO2EsOqwgCDqsITri6RcclxufVxyXG5cclxuZnVuY3Rpb24qIGFkZFBvc3QoYWN0aW9uKSB7IC8vIDEg7JWh7IWY7JeQ7IScXHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkUG9zdEFQSSwgYWN0aW9uLmRhdGEpIC8vIDIg642w7J207YSw66W8IOq6vOuCtOyEnFxyXG5cdFx0Ly95aWVsZCBkZWxheSgxMDAwKSBmcm9udFxyXG5cdFx0Ly9jb25zdCBpZCA9IHNob3J0SWQuZ2VuZXJhdGUoKSAvLyBmcm9udCDsnZgg642U66+4IOyVhOuUlFxyXG5cdFx0Y29uc29sZS5sb2coJ2FkZFBvc3Qg7Iuk7ZaJ7KSROjonLCByZXN1bHQpXHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOiBBRERfUE9TVF9TVUNDRVNTLFxyXG5cdFx0XHQvKmRhdGE6IHsgLy8gZnJvbnQgZHVtbXlcclxuXHRcdFx0XHRpZCxcclxuXHRcdFx0XHRjb250ZW50OiBhY3Rpb24uZGF0YSxcclxuXHRcdFx0fSovXHJcblx0XHRcdGRhdGE6IHJlc3VsdC5kYXRhLCAvLyBiYWNrLCDsi6TsoJzroZwg6rKM7Iuc6riA7J20IOuTpOyWtOyeiOydjFxyXG5cdFx0fSlcclxuXHRcdGNvbnNvbGUubG9nKCdhZGRQb3N0IOyZhOujjDo6JywgcmVzdWx0KVxyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogQUREX1BPU1RfVE9fTUUsXHJcblx0XHRcdC8vIGRhdGE6IGlkLCAvLyBmcm9udCBkdW1teVxyXG5cdFx0XHRkYXRhOiByZXN1bHQuZGF0YS5pZCAvLyBiYWNrXHJcblx0XHR9KVxyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0Y29uc29sZS5lcnJvcignYWRkUG9zdCBlcnJvcjo6ICcsIGVycilcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IEFERF9QT1NUX0ZBSUxVUkUsXHJcblx0XHRcdGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YVxyXG5cdFx0fSlcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVBvc3RBUEkoZGF0YSkgeyAvLyAzIOyghOuLrOuQmOuptFxyXG5cdHJldHVybiBheGlvcy5wb3N0KCcvYXBpL3Bvc3QnLCBkYXRhKSAvLyA0IOuNsOydtO2EsOqwgCDqsITri6RcclxufVxyXG5cclxuZnVuY3Rpb24qIHJlbW92ZVBvc3QoYWN0aW9uKSB7IC8vIDEg7JWh7IWY7JeQ7IScXHJcblx0dHJ5IHsgLy8g7Y+s7Iqk7Yq4IOumrOuTgOyEnOyDge2DnOyZgCDsnKDsoIDrpqzrk4DshJzsg4Htg5zsmYAg64+Z7Iuc7JeQIO2VnOuwqeyXkCDrsJTqv4DsiJgg7JeG6riw65WM66y47JeQIOyVoeyFmOydhCDrkZDrsojsnLzroZwg67CU6r+U7KSA64ukLFxyXG5cdFx0Y29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChyZW1vdmVQb3N0QVBJLCBhY3Rpb24uZGF0YSkgLy8gMiDrjbDsnbTthLDrpbwg6rq864K07IScXHJcblx0XHQvL3lpZWxkIGRlbGF5KDEwMDApIGZyb250XHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOiBSRU1PVkVfUE9TVF9TVUNDRVNTLFxyXG5cdFx0XHRkYXRhOiBhY3Rpb24uZGF0YSwgLy8g7Ja065akIOqyjOyLnOusvOydhCDsp4Dsm6DripTsp4AgaWQg6rCA7J6I7J2E6rKDXHJcblx0XHR9KVxyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogUkVNT1ZFX1BPU1RfT0ZfTUUsXHJcblx0XHRcdGRhdGE6IGFjdGlvbi5kYXRhLFxyXG5cdFx0fSlcclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoJ3JlbW92ZVBvc3QgOiAnLCBlcnIpXHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOiBSRU1PVkVfUE9TVF9GQUlMVVJFLFxyXG5cdFx0XHRlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGFcclxuXHRcdH0pXHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRDb21tZW50QVBJKGRhdGEpIHsgLy8gMyDsoITri6zrkJjrqbRcclxuXHQvL+yjvOyGjOuKlCDrsLHsl5Trk5zsmYAg7ZSE66Gg7Yq47J2YIOyVveyGjeydvOu/kCDsoJXtlbTsp4TqsbTsl4bri6RcclxuXHQvL3JldHVybiBheGlvcy5wb3N0KGAvYXBpL3Bvc3QvJHtkYXRhLnBvc3RJZH0vY29tbWVudGAsIGRhdGEpIC8vIDQg642w7J207YSw6rCAIOqwhOuLpCAvLyBmcm9udFxyXG5cdHJldHVybiBheGlvcy5wb3N0KGAvcG9zdC8ke2RhdGEucG9zdElkfS9jb21tZW50YCwgZGF0YSkgLy8gNCDrjbDsnbTthLDqsIAg6rCE64ukIC8vIFBPU1QgL3Bvc3QvMS9jb21tZW50XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBhZGRDb21tZW50KGFjdGlvbikgeyAvLyAxIOyVoeyFmOyXkOyEnFxyXG5cdHRyeSB7XHJcblx0XHRjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGFkZENvbW1lbnRBUEksIGFjdGlvbi5kYXRhKSAvLyAyIOuNsOydtO2EsOulvCDqurzrgrTshJwgLy9iYWNrXHJcblx0XHQvL3lpZWxkIGRlbGF5KDEwMDApIGZyb250XHJcblx0XHRjb25zb2xlLmxvZygnYWRkQ29tbWVudCDsi6TtlonspJEgOjonLCBhY3Rpb24uZGF0YSlcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IEFERF9DT01NRU5UX1NVQ0NFU1MsXHJcblx0XHRcdC8vZGF0YTogYWN0aW9uLmRhdGEgLy8gZnJvbnRcclxuXHRcdFx0ZGF0YTogcmVzdWx0LmRhdGEsXHJcblx0XHR9KVxyXG5cdFx0Y29uc29sZS5sb2coJ2FkZENvbW1lbnQg7JmE66OMOjonLCByZXN1bHQpXHJcblx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRjb25zb2xlLmVycm9yKCdhZGRDb21tZW50IGVycm9yOjogJywgZXJyKVxyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogQUREX0NPTU1FTlRfRkFJTFVSRSxcclxuXHRcdFx0ZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhXHJcblx0XHR9KVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTGlrZVBvc3QoKSB7XHJcblx0eWllbGQgdGFrZUxhdGVzdChMSUtFX1BPU1RfUkVRVUVTVCwgbGlrZVBvc3QpXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFVubGlrZVBvc3QoKSB7XHJcblx0eWllbGQgdGFrZUxhdGVzdChVTkxJS0VfUE9TVF9SRVFVRVNULCB1bmxpa2VQb3N0KVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkUG9zdHMoKSB7XHJcblx0eWllbGQgdGhyb3R0bGUoNTAwMCwgTE9BRF9QT1NUU19SRVFVRVNULCBsb2FkUG9zdHMpXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEFkZFBvc3QoKSB7XHJcblx0eWllbGQgdGFrZUxhdGVzdChBRERfUE9TVF9SRVFVRVNULCBhZGRQb3N0KVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hSZW1vdmVQb3N0KCkge1xyXG5cdHlpZWxkIHRha2VMYXRlc3QoUkVNT1ZFX1BPU1RfUkVRVUVTVCwgcmVtb3ZlUG9zdClcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoQWRkQ29tbWVudCgpIHtcclxuXHR5aWVsZCB0YWtlTGF0ZXN0KEFERF9DT01NRU5UX1JFUVVFU1QsIGFkZENvbW1lbnQpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBwb3N0U2FnYSgpIHtcclxuXHR5aWVsZCBhbGwoW1xyXG5cdFx0Zm9yayh3YXRjaExpa2VQb3N0KSxcclxuXHRcdGZvcmsod2F0Y2hVbmxpa2VQb3N0KSxcclxuXHRcdGZvcmsod2F0Y2hMb2FkUG9zdHMpLFxyXG5cdFx0Zm9yayh3YXRjaEFkZFBvc3QpLFxyXG5cdFx0Zm9yayh3YXRjaFJlbW92ZVBvc3QpLFxyXG5cdFx0Zm9yayh3YXRjaEFkZENvbW1lbnQpLFxyXG5cdF0pXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9