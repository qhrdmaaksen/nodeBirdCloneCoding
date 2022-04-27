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
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shortid */ "./node_modules/shortid/index.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_5__);


var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(loadPosts),
    _marked2 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(addPost),
    _marked3 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(removePost),
    _marked4 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(addComment),
    _marked5 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLoadPosts),
    _marked6 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchAddPost),
    _marked7 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchRemovePost),
    _marked8 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchAddComment),
    _marked9 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(postSaga);







function loadPostsAPI(data) {
  // 3 전달되면
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/api/posts', data); // 4 데이터가 간다
}

function loadPosts(action) {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function loadPosts$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000);

        case 3:
          _context.next = 5;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_POSTS_SUCCESS"],
            data: Object(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["generateDummyPost"])(10) // data 10 개

          });

        case 5:
          _context.next = 12;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          console.error('loadPosts : ' + _context.t0);
          _context.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_POSTS_FAILURE"],
            data: _context.t0.response.data
          });

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 7]]);
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
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function addPost$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(addPostAPI, action.data);

        case 3:
          result = _context2.sent;
          _context2.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_SUCCESS"],

            /*data: { // front dummy
            	id,
            	content: action.data,
            }*/
            data: result.data // back, 실제로 게시글이 들어있음

          });

        case 6:
          _context2.next = 8;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["ADD_POST_TO_ME"],
            // data: id, // front dummy
            data: result.data.id // back

          });

        case 8:
          _context2.next = 15;
          break;

        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](0);
          console.error('addPost : ' + _context2.t0);
          _context2.next = 15;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_FAILURE"],
            error: _context2.t0.response.data
          });

        case 15:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[0, 10]]);
}

function removePostAPI(data) {
  // 3 전달되면
  // return axios.post('/api/post', data) // 4 데이터가 간다 front
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/api/post', data, {
    withCredentials: true // cookie relay

  }); // 4 데이터가 간다 back
}

function removePost(action) {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function removePost$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000);

        case 3:
          _context3.next = 5;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_SUCCESS"],
            data: action.data // 어떤 게시물을 지웠는지 id 가있을것

          });

        case 5:
          _context3.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["REMOVE_POST_OF_ME"],
            data: action.data
          });

        case 7:
          _context3.next = 14;
          break;

        case 9:
          _context3.prev = 9;
          _context3.t0 = _context3["catch"](0);
          console.error('removePost : ' + _context3.t0);
          _context3.next = 14;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_FAILURE"],
            error: _context3.t0.response.data
          });

        case 14:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[0, 9]]);
}

function addCommentAPI(data) {
  // 3 전달되면
  //주소는 백엔드와 프론트의 약속일뿐 정해진건없다
  //return axios.post(`/api/post/${data.postId}/comment`, data) // 4 데이터가 간다 // front
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("/post/".concat(data.postId, "/comment"), data, {
    withCredentials: true // cookie relay

  }); // 4 데이터가 간다 // POST /post/1/comment
}

function addComment(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function addComment$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(addCommentAPI, action.data);

        case 3:
          result = _context4.sent;
          _context4.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_COMMENT_SUCCESS"],
            //data: action.data // front
            data: result.data
          });

        case 6:
          _context4.next = 13;
          break;

        case 8:
          _context4.prev = 8;
          _context4.t0 = _context4["catch"](0);
          console.error('addComment : ' + _context4.t0);
          _context4.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_COMMENT_FAILURE"],
            error: _context4.t0.response.data
          });

        case 13:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4, null, [[0, 8]]);
}

function watchLoadPosts() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLoadPosts$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["throttle"])(5000, _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_POSTS_REQUEST"], loadPosts);

        case 2:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5);
}

function watchAddPost() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchAddPost$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_REQUEST"], addPost);

        case 2:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6);
}

function watchRemovePost() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchRemovePost$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_REQUEST"], removePost);

        case 2:
        case "end":
          return _context7.stop();
      }
    }
  }, _marked7);
}

function watchAddComment() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchAddComment$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_COMMENT_REQUEST"], addComment);

        case 2:
        case "end":
          return _context8.stop();
      }
    }
  }, _marked8);
}

function postSaga() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function postSaga$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchAddPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchRemovePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchAddComment)]);

        case 2:
        case "end":
          return _context9.stop();
      }
    }
  }, _marked9);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvcG9zdC5qcyJdLCJuYW1lcyI6WyJsb2FkUG9zdHMiLCJhZGRQb3N0IiwicmVtb3ZlUG9zdCIsImFkZENvbW1lbnQiLCJ3YXRjaExvYWRQb3N0cyIsIndhdGNoQWRkUG9zdCIsIndhdGNoUmVtb3ZlUG9zdCIsIndhdGNoQWRkQ29tbWVudCIsInBvc3RTYWdhIiwibG9hZFBvc3RzQVBJIiwiZGF0YSIsImF4aW9zIiwiZ2V0IiwiYWN0aW9uIiwiZGVsYXkiLCJwdXQiLCJ0eXBlIiwiTE9BRF9QT1NUU19TVUNDRVNTIiwiZ2VuZXJhdGVEdW1teVBvc3QiLCJjb25zb2xlIiwiZXJyb3IiLCJMT0FEX1BPU1RTX0ZBSUxVUkUiLCJyZXNwb25zZSIsImFkZFBvc3RBUEkiLCJwb3N0IiwiY29udGVudCIsImNhbGwiLCJyZXN1bHQiLCJBRERfUE9TVF9TVUNDRVNTIiwiQUREX1BPU1RfVE9fTUUiLCJpZCIsIkFERF9QT1NUX0ZBSUxVUkUiLCJyZW1vdmVQb3N0QVBJIiwid2l0aENyZWRlbnRpYWxzIiwiUkVNT1ZFX1BPU1RfU1VDQ0VTUyIsIlJFTU9WRV9QT1NUX09GX01FIiwiUkVNT1ZFX1BPU1RfRkFJTFVSRSIsImFkZENvbW1lbnRBUEkiLCJwb3N0SWQiLCJBRERfQ09NTUVOVF9TVUNDRVNTIiwiQUREX0NPTU1FTlRfRkFJTFVSRSIsInRocm90dGxlIiwiTE9BRF9QT1NUU19SRVFVRVNUIiwidGFrZUxhdGVzdCIsIkFERF9QT1NUX1JFUVVFU1QiLCJSRU1PVkVfUE9TVF9SRVFVRVNUIiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsImFsbCIsImZvcmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tHQTBCVUEsUzttR0F3QkFDLE87bUdBa0NBQyxVO21HQTZCQUMsVTttR0FrQkFDLGM7bUdBSUFDLFk7bUdBSUFDLGU7bUdBSUFDLGU7bUdBSWVDLFE7O0FBbkp6QjtBQUNBO0FBQ0E7QUFhQTtBQUlBOztBQUdB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LEVBQU9DLGlFQUFQLEVBQTJCMUMsU0FBM0IsQ0FBZDs7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFJQSxTQUFVSyxZQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNDLGlCQUFNc0MscUVBQVUsQ0FBQ0MsK0RBQUQsRUFBbUIzQyxPQUFuQixDQUFoQjs7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFJQSxTQUFVSyxlQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNDLGlCQUFNcUMscUVBQVUsQ0FBQ0Usa0VBQUQsRUFBc0IzQyxVQUF0QixDQUFoQjs7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFJQSxTQUFVSyxlQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNDLGlCQUFNb0MscUVBQVUsQ0FBQ0csa0VBQUQsRUFBc0IzQyxVQUF0QixDQUFoQjs7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFJZSxTQUFVSyxRQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNkLGlCQUFNdUMsOERBQUcsQ0FBQyxDQUNUQywrREFBSSxDQUFDNUMsY0FBRCxDQURLLEVBRVQ0QywrREFBSSxDQUFDM0MsWUFBRCxDQUZLLEVBR1QyQywrREFBSSxDQUFDMUMsZUFBRCxDQUhLLEVBSVQwQywrREFBSSxDQUFDekMsZUFBRCxDQUpLLENBQUQsQ0FBVDs7QUFEYztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmU3N2I0MDk4NzA3Nzc1ZjViM2E0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2FsbCwgY2FsbCwgZGVsYXksIGZvcmssIHB1dCwgdGFrZUxhdGVzdCwgdGhyb3R0bGV9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQge1xyXG5cdEFERF9DT01NRU5UX0ZBSUxVUkUsXHJcblx0QUREX0NPTU1FTlRfUkVRVUVTVCxcclxuXHRBRERfQ09NTUVOVF9TVUNDRVNTLFxyXG5cdEFERF9QT1NUX0ZBSUxVUkUsXHJcblx0QUREX1BPU1RfUkVRVUVTVCxcclxuXHRBRERfUE9TVF9TVUNDRVNTLCBnZW5lcmF0ZUR1bW15UG9zdCwgTE9BRF9QT1NUU19GQUlMVVJFLFxyXG5cdExPQURfUE9TVFNfUkVRVUVTVCxcclxuXHRMT0FEX1BPU1RTX1NVQ0NFU1MsXHJcblx0UkVNT1ZFX1BPU1RfRkFJTFVSRSxcclxuXHRSRU1PVkVfUE9TVF9SRVFVRVNULFxyXG5cdFJFTU9WRV9QT1NUX1NVQ0NFU1MsXHJcbn0gZnJvbSBcIi4uL3JlZHVjZXJzL3Bvc3RcIjtcclxuaW1wb3J0IHtcclxuXHRBRERfUE9TVF9UT19NRSxcclxuXHRSRU1PVkVfUE9TVF9PRl9NRSxcclxufSBmcm9tIFwiLi4vcmVkdWNlcnMvdXNlclwiO1xyXG5pbXBvcnQgc2hvcnRJZCBmcm9tIFwic2hvcnRpZFwiO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGxvYWRQb3N0c0FQSShkYXRhKSB7IC8vIDMg7KCE64us65CY66m0XHJcblx0cmV0dXJuIGF4aW9zLmdldCgnL2FwaS9wb3N0cycsIGRhdGEpIC8vIDQg642w7J207YSw6rCAIOqwhOuLpFxyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZFBvc3RzKGFjdGlvbikgeyAvLyAxIOyVoeyFmOyXkOyEnFxyXG5cdHRyeSB7XHJcblx0XHQvL2NvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZFBvc3RzQVBJLCBhY3Rpb24uZGF0YSkgLy8gMiDrjbDsnbTthLDrpbwg6rq864K07IScXHJcblx0XHR5aWVsZCBkZWxheSgxMDAwKVxyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogTE9BRF9QT1NUU19TVUNDRVNTLFxyXG5cdFx0XHRkYXRhOiBnZW5lcmF0ZUR1bW15UG9zdCgxMCksIC8vIGRhdGEgMTAg6rCcXHJcblx0XHR9KVxyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0Y29uc29sZS5lcnJvcignbG9hZFBvc3RzIDogJyArIGVycilcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IExPQURfUE9TVFNfRkFJTFVSRSxcclxuXHRcdFx0ZGF0YTogZXJyLnJlc3BvbnNlLmRhdGFcclxuXHRcdH0pXHJcblx0fVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gYWRkUG9zdEFQSShkYXRhKSB7IC8vIDMg7KCE64us65CY66m0XHJcblx0Ly9yZXR1cm4gYXhpb3MucG9zdCgnL2FwaS9wb3N0JywgZGF0YSkgLy8gNCDrjbDsnbTthLDqsIAg6rCE64ukIGZyb250XHJcblx0Ly8gZGF0YSBjb250ZW50IOqwgCByZXEuYm9keS5jb250ZW50IOuhnCDrsLHsl5Trk5zsl5Ag67OA7ZmYXHJcblx0cmV0dXJuIGF4aW9zLnBvc3QoJy9wb3N0Jywge2NvbnRlbnQ6IGRhdGF9KSAvLyA0IOuNsOydtO2EsOqwgCDqsITri6RcclxufVxyXG5cclxuZnVuY3Rpb24qIGFkZFBvc3QoYWN0aW9uKSB7IC8vIDEg7JWh7IWY7JeQ7IScXHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkUG9zdEFQSSwgYWN0aW9uLmRhdGEpIC8vIDIg642w7J207YSw66W8IOq6vOuCtOyEnFxyXG5cdFx0Ly95aWVsZCBkZWxheSgxMDAwKSBmcm9udFxyXG5cdFx0Ly9jb25zdCBpZCA9IHNob3J0SWQuZ2VuZXJhdGUoKSAvLyBmcm9udCDsnZgg642U66+4IOyVhOuUlFxyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogQUREX1BPU1RfU1VDQ0VTUyxcclxuXHRcdFx0LypkYXRhOiB7IC8vIGZyb250IGR1bW15XHJcblx0XHRcdFx0aWQsXHJcblx0XHRcdFx0Y29udGVudDogYWN0aW9uLmRhdGEsXHJcblx0XHRcdH0qL1xyXG5cdFx0XHRkYXRhOiByZXN1bHQuZGF0YSwgLy8gYmFjaywg7Iuk7KCc66GcIOqyjOyLnOq4gOydtCDrk6TslrTsnojsnYxcclxuXHRcdH0pXHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOiBBRERfUE9TVF9UT19NRSxcclxuXHRcdFx0Ly8gZGF0YTogaWQsIC8vIGZyb250IGR1bW15XHJcblx0XHRcdGRhdGE6IHJlc3VsdC5kYXRhLmlkIC8vIGJhY2tcclxuXHRcdH0pXHJcblx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRjb25zb2xlLmVycm9yKCdhZGRQb3N0IDogJyArIGVycilcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IEFERF9QT1NUX0ZBSUxVUkUsXHJcblx0XHRcdGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YVxyXG5cdFx0fSlcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVBvc3RBUEkoZGF0YSkgeyAvLyAzIOyghOuLrOuQmOuptFxyXG5cdC8vIHJldHVybiBheGlvcy5wb3N0KCcvYXBpL3Bvc3QnLCBkYXRhKSAvLyA0IOuNsOydtO2EsOqwgCDqsITri6QgZnJvbnRcclxuXHRyZXR1cm4gYXhpb3MucG9zdCgnL2FwaS9wb3N0JywgZGF0YSwge1xyXG5cdFx0d2l0aENyZWRlbnRpYWxzOiB0cnVlLCAvLyBjb29raWUgcmVsYXlcclxuXHR9KSAvLyA0IOuNsOydtO2EsOqwgCDqsITri6QgYmFja1xyXG59XHJcblxyXG5mdW5jdGlvbiogcmVtb3ZlUG9zdChhY3Rpb24pIHsgLy8gMSDslaHshZjsl5DshJxcclxuXHR0cnkgeyAvLyDtj6zsiqTtirgg66as65OA7ISc7IOB7YOc7JmAIOycoOyggOumrOuTgOyEnOyDge2DnOyZgCDrj5nsi5zsl5Ag7ZWc67Cp7JeQIOuwlOq/gOyImCDsl4bquLDrlYzrrLjsl5Ag7JWh7IWY7J2EIOuRkOuyiOycvOuhnCDrsJTqv5TspIDri6QsXHJcblx0XHQvL2NvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwocmVtb3ZlUG9zdEFQSSwgYWN0aW9uLmRhdGEpIC8vIDIg642w7J207YSw66W8IOq6vOuCtOyEnFxyXG5cdFx0eWllbGQgZGVsYXkoMTAwMClcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IFJFTU9WRV9QT1NUX1NVQ0NFU1MsXHJcblx0XHRcdGRhdGE6IGFjdGlvbi5kYXRhLCAvLyDslrTrlqQg6rKM7Iuc66y87J2EIOyngOyboOuKlOyngCBpZCDqsIDsnojsnYTqsoNcclxuXHRcdH0pXHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOiBSRU1PVkVfUE9TVF9PRl9NRSxcclxuXHRcdFx0ZGF0YTogYWN0aW9uLmRhdGEsXHJcblx0XHR9KVxyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0Y29uc29sZS5lcnJvcigncmVtb3ZlUG9zdCA6ICcgKyBlcnIpXHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOiBSRU1PVkVfUE9TVF9GQUlMVVJFLFxyXG5cdFx0XHRlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGFcclxuXHRcdH0pXHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRDb21tZW50QVBJKGRhdGEpIHsgLy8gMyDsoITri6zrkJjrqbRcclxuXHQvL+yjvOyGjOuKlCDrsLHsl5Trk5zsmYAg7ZSE66Gg7Yq47J2YIOyVveyGjeydvOu/kCDsoJXtlbTsp4TqsbTsl4bri6RcclxuXHQvL3JldHVybiBheGlvcy5wb3N0KGAvYXBpL3Bvc3QvJHtkYXRhLnBvc3RJZH0vY29tbWVudGAsIGRhdGEpIC8vIDQg642w7J207YSw6rCAIOqwhOuLpCAvLyBmcm9udFxyXG5cdHJldHVybiBheGlvcy5wb3N0KGAvcG9zdC8ke2RhdGEucG9zdElkfS9jb21tZW50YCwgZGF0YSwge1xyXG5cdFx0d2l0aENyZWRlbnRpYWxzOiB0cnVlLCAvLyBjb29raWUgcmVsYXlcclxuXHR9KSAvLyA0IOuNsOydtO2EsOqwgCDqsITri6QgLy8gUE9TVCAvcG9zdC8xL2NvbW1lbnRcclxufVxyXG5cclxuZnVuY3Rpb24qIGFkZENvbW1lbnQoYWN0aW9uKSB7IC8vIDEg7JWh7IWY7JeQ7IScXHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkQ29tbWVudEFQSSwgYWN0aW9uLmRhdGEpIC8vIDIg642w7J207YSw66W8IOq6vOuCtOyEnCAvL2JhY2tcclxuXHRcdC8veWllbGQgZGVsYXkoMTAwMCkgZnJvbnRcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IEFERF9DT01NRU5UX1NVQ0NFU1MsXHJcblx0XHRcdC8vZGF0YTogYWN0aW9uLmRhdGEgLy8gZnJvbnRcclxuXHRcdFx0ZGF0YTogcmVzdWx0LmRhdGFcclxuXHRcdH0pXHJcblx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRjb25zb2xlLmVycm9yKCdhZGRDb21tZW50IDogJyArIGVycilcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IEFERF9DT01NRU5UX0ZBSUxVUkUsXHJcblx0XHRcdGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YVxyXG5cdFx0fSlcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRQb3N0cygpIHtcclxuXHR5aWVsZCB0aHJvdHRsZSg1MDAwLCBMT0FEX1BPU1RTX1JFUVVFU1QsIGxvYWRQb3N0cylcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoQWRkUG9zdCgpIHtcclxuXHR5aWVsZCB0YWtlTGF0ZXN0KEFERF9QT1NUX1JFUVVFU1QsIGFkZFBvc3QpXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFJlbW92ZVBvc3QoKSB7XHJcblx0eWllbGQgdGFrZUxhdGVzdChSRU1PVkVfUE9TVF9SRVFVRVNULCByZW1vdmVQb3N0KVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hBZGRDb21tZW50KCkge1xyXG5cdHlpZWxkIHRha2VMYXRlc3QoQUREX0NPTU1FTlRfUkVRVUVTVCwgYWRkQ29tbWVudClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHBvc3RTYWdhKCkge1xyXG5cdHlpZWxkIGFsbChbXHJcblx0XHRmb3JrKHdhdGNoTG9hZFBvc3RzKSxcclxuXHRcdGZvcmsod2F0Y2hBZGRQb3N0KSxcclxuXHRcdGZvcmsod2F0Y2hSZW1vdmVQb3N0KSxcclxuXHRcdGZvcmsod2F0Y2hBZGRDb21tZW50KSxcclxuXHRdKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==