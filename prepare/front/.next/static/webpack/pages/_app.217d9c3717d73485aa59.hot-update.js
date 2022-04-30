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


var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(retweet),
    _marked2 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(uploadImages),
    _marked3 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(likePost),
    _marked4 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(unlikePost),
    _marked5 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(loadPosts),
    _marked6 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(loadPost),
    _marked7 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(addPost),
    _marked8 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(removePost),
    _marked9 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(addComment),
    _marked10 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLoadPost),
    _marked11 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchRetweet),
    _marked12 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchUploadImages),
    _marked13 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLikePost),
    _marked14 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchUnlikePost),
    _marked15 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLoadPosts),
    _marked16 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchAddPost),
    _marked17 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchRemovePost),
    _marked18 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchAddComment),
    _marked19 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(postSaga);




 //import shortId from "shortid"; front
// restAPI

function retweetAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("/post/".concat(data, "/retweet"));
}

function retweet(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function retweet$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(retweetAPI, action.data);

        case 3:
          result = _context.sent;
          console.log('saga retweet 실행::', action.data);
          _context.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["RETWEET_SUCCESS"],
            data: result.data
          });

        case 7:
          console.log('saga retweet 성공::', result);
          _context.next = 15;
          break;

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          console.error('saga retweet 실패 :: ', _context.t0);
          _context.next = 15;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["RETWEET_FAILURE"],
            error: _context.t0.response.data
          });

        case 15:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 10]]);
}

function uploadImagesAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/post/images', data); // form data 를 {name:data} 형식으로 감싸면 json 되기때문에 사용하면 안됨
}

function uploadImages(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function uploadImages$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(uploadImagesAPI, action.data);

        case 3:
          result = _context2.sent;
          console.log('saga uploadImages 실행:: ', action.data);
          _context2.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["UPLOAD_IMAGES_SUCCESS"],
            data: result.data
          });

        case 7:
          console.log('saga uploadImages 성공:: ', result);
          _context2.next = 15;
          break;

        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](0);
          console.error('saga uploadImages error:: ', _context2.t0);
          _context2.next = 15;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["UPLOAD_IMAGES_FAILURE"],
            error: _context2.t0.response.data
          });

        case 15:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[0, 10]]);
}

function likePostAPI(data) {
  // 3 전달되면
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.patch("/post/".concat(data, "/like")); // 4 데이터가 간다, like & unlike 는 patch ( 게시글에 일부분 수정이기때문 )
}

function likePost(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function likePost$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(likePostAPI, action.data);

        case 3:
          result = _context3.sent;
          // 2 데이터를 꺼내서
          console.log('likePost 실행중::', result);
          _context3.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LIKE_POST_SUCCESS"],
            data: result.data // back, postId, userId 들어있음

          });

        case 7:
          console.log('likePost 완료::', result);
          _context3.next = 15;
          break;

        case 10:
          _context3.prev = 10;
          _context3.t0 = _context3["catch"](0);
          console.error('likePost error:: ', _context3.t0);
          _context3.next = 15;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LIKE_POST_FAILURE"],
            error: _context3.t0.response.data
          });

        case 15:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[0, 10]]);
}

function unlikePostAPI(data) {
  // 3 전달되면
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a["delete"]("/post/".concat(data, "/like")); // 4 데이터가 간다
}

function unlikePost(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function unlikePost$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(unlikePostAPI, action.data);

        case 3:
          result = _context4.sent;
          // 2 데이터를 꺼내서
          console.log('unlikePost 실행중::', result);
          _context4.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["UNLIKE_POST_SUCCESS"],
            data: result.data // back, postId,userId 들어있음

          });

        case 7:
          console.log('UNLIKEPost 완료::', result);
          _context4.next = 15;
          break;

        case 10:
          _context4.prev = 10;
          _context4.t0 = _context4["catch"](0);
          console.error('UNLIKEPost error:: ', _context4.t0);
          _context4.next = 15;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["UNLIKE_POST_FAILURE"],
            error: _context4.t0.response.data
          });

        case 15:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4, null, [[0, 10]]);
}

function loadPostsAPI(lastId) {
  // 3 전달되면
  //return axios.get('/api/posts', data) // 4 데이터가 간다 front
  // 보통 get 방식은 데이터를 못 넣기때문에 쿼리스트링으로 넣어줘야한다 (주소), etc : limit=10&offset=10
  // 포스트 등은 데이터 캐싱이 안되지만, 겟은 데이터 캐싱을 같이 할 수 있다
  // lastId 가 undefined 인 경우 0
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/posts?lastId=".concat(lastId || 0)); // 4 데이터가 간다 ,
}

function loadPosts(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function loadPosts$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          console.log('Sagas:: loadPosts 실행중', action.lastId);
          _context5.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadPostsAPI, action.lastId);

        case 4:
          result = _context5.sent;
          // 2 데이터를 꺼내서
          //yield delay(1000) front
          console.log('loadPosts 완료:: ', result);
          _context5.next = 8;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_POSTS_SUCCESS"],
            // data: generateDummyPost(10), // data 10 개 front
            data: result.data
          });

        case 8:
          _context5.next = 15;
          break;

        case 10:
          _context5.prev = 10;
          _context5.t0 = _context5["catch"](0);
          console.error('loadPosts error: ', _context5.t0);
          _context5.next = 15;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_POSTS_FAILURE"],
            error: _context5.t0.response.data
          });

        case 15:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5, null, [[0, 10]]);
}

function loadPostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/post/".concat(data));
}

function loadPost(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function loadPost$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadPostAPI, action.data);

        case 3:
          result = _context6.sent;
          console.log('saga loadPost 요청 :: ', action.data);
          _context6.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_POST_SUCCESS"],
            data: result.data
          });

        case 7:
          console.log('saga loadPost 성공 :: ', result);
          _context6.next = 15;
          break;

        case 10:
          _context6.prev = 10;
          _context6.t0 = _context6["catch"](0);
          console.error('saga loadPost 실패 :: ', _context6.t0);
          _context6.next = 15;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_POST_FAILURE"],
            error: _context6.t0.response.data
          });

        case 15:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6, null, [[0, 10]]);
}

function addPostAPI(data) {
  // 3 전달되면
  //return axios.post('/api/post', data) // 4 데이터가 간다 front
  // data content 가 req.body.content 로 백엔드에 변환
  //return axios.post('/post', {content: data}) // 4 데이터가 간다,
  // form data 는 {content: data} 와 같이 감싸면 안된다, 바로 data 로 넣어줘야함
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/post', data); // 4 데이터가 간다
}

function addPost(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function addPost$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          _context7.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(addPostAPI, action.data);

        case 3:
          result = _context7.sent;
          // 2 데이터를 꺼내서
          //yield delay(1000) front
          //const id = shortId.generate() // front 의 더미 아디
          console.log('addPost 실행중::', result);
          _context7.next = 7;
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
          _context7.next = 10;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["ADD_POST_TO_ME"],
            // data: id, // front dummy
            data: result.data.id // back

          });

        case 10:
          _context7.next = 17;
          break;

        case 12:
          _context7.prev = 12;
          _context7.t0 = _context7["catch"](0);
          console.error('addPost error:: ', _context7.t0);
          _context7.next = 17;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_FAILURE"],
            error: _context7.t0.response.data
          });

        case 17:
        case "end":
          return _context7.stop();
      }
    }
  }, _marked7, null, [[0, 12]]);
}

function removePostAPI(data) {
  // 3 전달되면
  //return axios.post('/api/post', data) // 4 데이터가 간다 front
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a["delete"]("/post/".concat(data)); // 4 데이터가 간다 back //delete 의 data 는 post.id (PostCard.js)에서 확인 가능
}

function removePost(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function removePost$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          _context8.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(removePostAPI, action.data);

        case 3:
          result = _context8.sent;
          // 2 데이터를 꺼내서
          //yield delay(1000) front
          console.log('removePost 실행:: ', action.data);
          _context8.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_SUCCESS"],
            data: result.data // 어떤 게시물을 지웠는지 id 가있을것,

          });

        case 7:
          console.log('removePost 완료:: ', result);
          _context8.next = 10;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["REMOVE_POST_OF_ME"],
            //data: action.data, front
            data: action.data // action 이 들어왔을때 데이터

          });

        case 10:
          _context8.next = 17;
          break;

        case 12:
          _context8.prev = 12;
          _context8.t0 = _context8["catch"](0);
          console.error('removePost error: ', _context8.t0);
          _context8.next = 17;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_FAILURE"],
            error: _context8.t0.response.data
          });

        case 17:
        case "end":
          return _context8.stop();
      }
    }
  }, _marked8, null, [[0, 12]]);
}

function addCommentAPI(data) {
  // 3 전달되면
  //주소는 백엔드와 프론트의 약속일뿐 정해진건없다
  //return axios.post(`/api/post/${data.postId}/comment`, data) // 4 데이터가 간다 // front
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("/post/".concat(data.postId, "/comment"), data); // 4 데이터가 간다 // POST /post/1/comment
}

function addComment(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function addComment$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          _context9.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(addCommentAPI, action.data);

        case 3:
          result = _context9.sent;
          // 2 데이터를 꺼내서 //back
          //yield delay(1000) front
          console.log('addComment 실행중 ::', action.data);
          _context9.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_COMMENT_SUCCESS"],
            //data: action.data // front
            data: result.data
          });

        case 7:
          console.log('addComment 완료::', result);
          _context9.next = 15;
          break;

        case 10:
          _context9.prev = 10;
          _context9.t0 = _context9["catch"](0);
          console.error('addComment error:: ', _context9.t0);
          _context9.next = 15;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_COMMENT_FAILURE"],
            error: _context9.t0.response.data
          });

        case 15:
        case "end":
          return _context9.stop();
      }
    }
  }, _marked9, null, [[0, 10]]);
}

function watchLoadPost() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLoadPost$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          _context10.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_POST_REQUEST"], loadPost);

        case 2:
        case "end":
          return _context10.stop();
      }
    }
  }, _marked10);
}

function watchRetweet() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchRetweet$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          _context11.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["RETWEET_REQUEST"], retweet);

        case 2:
        case "end":
          return _context11.stop();
      }
    }
  }, _marked11);
}

function watchUploadImages() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchUploadImages$(_context12) {
    while (1) {
      switch (_context12.prev = _context12.next) {
        case 0:
          _context12.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["UPLOAD_IMAGES_REQUEST"], uploadImages);

        case 2:
        case "end":
          return _context12.stop();
      }
    }
  }, _marked12);
}

function watchLikePost() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLikePost$(_context13) {
    while (1) {
      switch (_context13.prev = _context13.next) {
        case 0:
          _context13.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["LIKE_POST_REQUEST"], likePost);

        case 2:
        case "end":
          return _context13.stop();
      }
    }
  }, _marked13);
}

function watchUnlikePost() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchUnlikePost$(_context14) {
    while (1) {
      switch (_context14.prev = _context14.next) {
        case 0:
          _context14.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["UNLIKE_POST_REQUEST"], unlikePost);

        case 2:
        case "end":
          return _context14.stop();
      }
    }
  }, _marked14);
}

function watchLoadPosts() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLoadPosts$(_context15) {
    while (1) {
      switch (_context15.prev = _context15.next) {
        case 0:
          _context15.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["throttle"])(5000, _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_POSTS_REQUEST"], loadPosts);

        case 2:
        case "end":
          return _context15.stop();
      }
    }
  }, _marked15);
}

function watchAddPost() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchAddPost$(_context16) {
    while (1) {
      switch (_context16.prev = _context16.next) {
        case 0:
          _context16.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_REQUEST"], addPost);

        case 2:
        case "end":
          return _context16.stop();
      }
    }
  }, _marked16);
}

function watchRemovePost() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchRemovePost$(_context17) {
    while (1) {
      switch (_context17.prev = _context17.next) {
        case 0:
          _context17.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_REQUEST"], removePost);

        case 2:
        case "end":
          return _context17.stop();
      }
    }
  }, _marked17);
}

function watchAddComment() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchAddComment$(_context18) {
    while (1) {
      switch (_context18.prev = _context18.next) {
        case 0:
          _context18.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_COMMENT_REQUEST"], addComment);

        case 2:
        case "end":
          return _context18.stop();
      }
    }
  }, _marked18);
}

function postSaga() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function postSaga$(_context19) {
    while (1) {
      switch (_context19.prev = _context19.next) {
        case 0:
          _context19.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchRetweet), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchUploadImages), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchUnlikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchAddPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchRemovePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchAddComment)]);

        case 2:
        case "end":
          return _context19.stop();
      }
    }
  }, _marked19);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvcG9zdC5qcyJdLCJuYW1lcyI6WyJyZXR3ZWV0IiwidXBsb2FkSW1hZ2VzIiwibGlrZVBvc3QiLCJ1bmxpa2VQb3N0IiwibG9hZFBvc3RzIiwibG9hZFBvc3QiLCJhZGRQb3N0IiwicmVtb3ZlUG9zdCIsImFkZENvbW1lbnQiLCJ3YXRjaExvYWRQb3N0Iiwid2F0Y2hSZXR3ZWV0Iiwid2F0Y2hVcGxvYWRJbWFnZXMiLCJ3YXRjaExpa2VQb3N0Iiwid2F0Y2hVbmxpa2VQb3N0Iiwid2F0Y2hMb2FkUG9zdHMiLCJ3YXRjaEFkZFBvc3QiLCJ3YXRjaFJlbW92ZVBvc3QiLCJ3YXRjaEFkZENvbW1lbnQiLCJwb3N0U2FnYSIsInJldHdlZXRBUEkiLCJkYXRhIiwiYXhpb3MiLCJwb3N0IiwiYWN0aW9uIiwiY2FsbCIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJwdXQiLCJ0eXBlIiwiUkVUV0VFVF9TVUNDRVNTIiwiZXJyb3IiLCJSRVRXRUVUX0ZBSUxVUkUiLCJyZXNwb25zZSIsInVwbG9hZEltYWdlc0FQSSIsIlVQTE9BRF9JTUFHRVNfU1VDQ0VTUyIsIlVQTE9BRF9JTUFHRVNfRkFJTFVSRSIsImxpa2VQb3N0QVBJIiwicGF0Y2giLCJMSUtFX1BPU1RfU1VDQ0VTUyIsIkxJS0VfUE9TVF9GQUlMVVJFIiwidW5saWtlUG9zdEFQSSIsIlVOTElLRV9QT1NUX1NVQ0NFU1MiLCJVTkxJS0VfUE9TVF9GQUlMVVJFIiwibG9hZFBvc3RzQVBJIiwibGFzdElkIiwiZ2V0IiwiTE9BRF9QT1NUU19TVUNDRVNTIiwiTE9BRF9QT1NUU19GQUlMVVJFIiwibG9hZFBvc3RBUEkiLCJMT0FEX1BPU1RfU1VDQ0VTUyIsIkxPQURfUE9TVF9GQUlMVVJFIiwiYWRkUG9zdEFQSSIsIkFERF9QT1NUX1NVQ0NFU1MiLCJBRERfUE9TVF9UT19NRSIsImlkIiwiQUREX1BPU1RfRkFJTFVSRSIsInJlbW92ZVBvc3RBUEkiLCJSRU1PVkVfUE9TVF9TVUNDRVNTIiwiUkVNT1ZFX1BPU1RfT0ZfTUUiLCJSRU1PVkVfUE9TVF9GQUlMVVJFIiwiYWRkQ29tbWVudEFQSSIsInBvc3RJZCIsIkFERF9DT01NRU5UX1NVQ0NFU1MiLCJBRERfQ09NTUVOVF9GQUlMVVJFIiwidGFrZUxhdGVzdCIsIkxPQURfUE9TVF9SRVFVRVNUIiwiUkVUV0VFVF9SRVFVRVNUIiwiVVBMT0FEX0lNQUdFU19SRVFVRVNUIiwiTElLRV9QT1NUX1JFUVVFU1QiLCJVTkxJS0VfUE9TVF9SRVFVRVNUIiwidGhyb3R0bGUiLCJMT0FEX1BPU1RTX1JFUVVFU1QiLCJBRERfUE9TVF9SRVFVRVNUIiwiUkVNT1ZFX1BPU1RfUkVRVUVTVCIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJhbGwiLCJmb3JrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0dBcUNVQSxPO21HQXNCQUMsWTttR0FzQkFDLFE7bUdBc0JBQyxVO21HQTBCQUMsUzttR0F3QkFDLFE7bUdBMkJBQyxPO21HQWtDQUMsVTttR0E4QkFDLFU7b0dBb0JBQyxhO29HQUlBQyxZO29HQUlBQyxpQjtvR0FJQUMsYTtvR0FJQUMsZTtvR0FJQUMsYztvR0FJQUMsWTtvR0FJQUMsZTtvR0FJQUMsZTtvR0FJZUMsUTs7QUE1U3pCO0FBQ0E7QUFDQTtDQTRCQTtBQUVBOztBQUNBLFNBQVNDLFVBQVQsQ0FBb0JDLElBQXBCLEVBQTBCO0FBQ3pCLFNBQU9DLDRDQUFLLENBQUNDLElBQU4saUJBQW9CRixJQUFwQixjQUFQO0FBQ0E7O0FBRUQsU0FBVXBCLE9BQVYsQ0FBa0J1QixNQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRWlCLGlCQUFNQywrREFBSSxDQUFDTCxVQUFELEVBQWFJLE1BQU0sQ0FBQ0gsSUFBcEIsQ0FBVjs7QUFGakI7QUFFUUssZ0JBRlI7QUFHRUMsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZLG1CQUFaLEVBQWlDSixNQUFNLENBQUNILElBQXhDO0FBSEY7QUFJRSxpQkFBTVEsOERBQUcsQ0FBQztBQUNUQyxnQkFBSSxFQUFFQyw4REFERztBQUVUVixnQkFBSSxFQUFFSyxNQUFNLENBQUNMO0FBRkosV0FBRCxDQUFUOztBQUpGO0FBUUVNLGlCQUFPLENBQUNDLEdBQVIsQ0FBWSxtQkFBWixFQUFpQ0YsTUFBakM7QUFSRjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQVVFQyxpQkFBTyxDQUFDSyxLQUFSLENBQWMscUJBQWQ7QUFWRjtBQVdFLGlCQUFNSCw4REFBRyxDQUFDO0FBQ1RDLGdCQUFJLEVBQUVHLDhEQURHO0FBRVRELGlCQUFLLEVBQUUsWUFBSUUsUUFBSixDQUFhYjtBQUZYLFdBQUQsQ0FBVDs7QUFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFrQkEsU0FBU2MsZUFBVCxDQUF5QmQsSUFBekIsRUFBK0I7QUFDOUIsU0FBT0MsNENBQUssQ0FBQ0MsSUFBTixDQUFXLGNBQVgsRUFBMkJGLElBQTNCLENBQVAsQ0FEOEIsQ0FDVTtBQUN4Qzs7QUFFRCxTQUFVbkIsWUFBVixDQUF1QnNCLE1BQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFaUIsaUJBQU1DLCtEQUFJLENBQUNVLGVBQUQsRUFBa0JYLE1BQU0sQ0FBQ0gsSUFBekIsQ0FBVjs7QUFGakI7QUFFUUssZ0JBRlI7QUFHRUMsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZLHlCQUFaLEVBQXVDSixNQUFNLENBQUNILElBQTlDO0FBSEY7QUFJRSxpQkFBTVEsOERBQUcsQ0FBQztBQUNUQyxnQkFBSSxFQUFFTSxvRUFERztBQUVUZixnQkFBSSxFQUFFSyxNQUFNLENBQUNMO0FBRkosV0FBRCxDQUFUOztBQUpGO0FBUUVNLGlCQUFPLENBQUNDLEdBQVIsQ0FBWSx5QkFBWixFQUF1Q0YsTUFBdkM7QUFSRjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQVVFQyxpQkFBTyxDQUFDSyxLQUFSLENBQWMsNEJBQWQ7QUFWRjtBQVdFLGlCQUFNSCw4REFBRyxDQUFDO0FBQ1RDLGdCQUFJLEVBQUVPLG9FQURHO0FBRVRMLGlCQUFLLEVBQUUsYUFBSUUsUUFBSixDQUFhYjtBQUZYLFdBQUQsQ0FBVDs7QUFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFrQkEsU0FBU2lCLFdBQVQsQ0FBcUJqQixJQUFyQixFQUEyQjtBQUFFO0FBQzVCLFNBQU9DLDRDQUFLLENBQUNpQixLQUFOLGlCQUFxQmxCLElBQXJCLFdBQVAsQ0FEMEIsQ0FDZTtBQUN6Qzs7QUFFRCxTQUFVbEIsUUFBVixDQUFtQnFCLE1BQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFaUIsaUJBQU1DLCtEQUFJLENBQUNhLFdBQUQsRUFBY2QsTUFBTSxDQUFDSCxJQUFyQixDQUFWOztBQUZqQjtBQUVRSyxnQkFGUjtBQUVzRDtBQUNwREMsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZLGdCQUFaLEVBQThCRixNQUE5QjtBQUhGO0FBSUUsaUJBQU1HLDhEQUFHLENBQUM7QUFDVEMsZ0JBQUksRUFBRVUsZ0VBREc7QUFFVG5CLGdCQUFJLEVBQUVLLE1BQU0sQ0FBQ0wsSUFGSixDQUVVOztBQUZWLFdBQUQsQ0FBVDs7QUFKRjtBQVFFTSxpQkFBTyxDQUFDQyxHQUFSLENBQVksZUFBWixFQUE2QkYsTUFBN0I7QUFSRjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQVVFQyxpQkFBTyxDQUFDSyxLQUFSLENBQWMsbUJBQWQ7QUFWRjtBQVdFLGlCQUFNSCw4REFBRyxDQUFDO0FBQ1RDLGdCQUFJLEVBQUVXLGdFQURHO0FBRVRULGlCQUFLLEVBQUUsYUFBSUUsUUFBSixDQUFhYjtBQUZYLFdBQUQsQ0FBVDs7QUFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFrQkEsU0FBU3FCLGFBQVQsQ0FBdUJyQixJQUF2QixFQUE2QjtBQUFFO0FBQzlCLFNBQU9DLDRDQUFLLFVBQUwsaUJBQXNCRCxJQUF0QixXQUFQLENBRDRCLENBQ2M7QUFDMUM7O0FBRUQsU0FBVWpCLFVBQVYsQ0FBcUJvQixNQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRWlCLGlCQUFNQywrREFBSSxDQUFDaUIsYUFBRCxFQUFnQmxCLE1BQU0sQ0FBQ0gsSUFBdkIsQ0FBVjs7QUFGakI7QUFFUUssZ0JBRlI7QUFFd0Q7QUFDdERDLGlCQUFPLENBQUNDLEdBQVIsQ0FBWSxrQkFBWixFQUFnQ0YsTUFBaEM7QUFIRjtBQUlFLGlCQUFNRyw4REFBRyxDQUFDO0FBQ1RDLGdCQUFJLEVBQUVhLGtFQURHO0FBRVR0QixnQkFBSSxFQUFFSyxNQUFNLENBQUNMLElBRkosQ0FFVTs7QUFGVixXQUFELENBQVQ7O0FBSkY7QUFRRU0saUJBQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFaLEVBQStCRixNQUEvQjtBQVJGO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBVUVDLGlCQUFPLENBQUNLLEtBQVIsQ0FBYyxxQkFBZDtBQVZGO0FBV0UsaUJBQU1ILDhEQUFHLENBQUM7QUFDVEMsZ0JBQUksRUFBRWMsa0VBREc7QUFFVFosaUJBQUssRUFBRSxhQUFJRSxRQUFKLENBQWFiO0FBRlgsV0FBRCxDQUFUOztBQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQWtCQSxTQUFTd0IsWUFBVCxDQUFzQkMsTUFBdEIsRUFBOEI7QUFBRTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQU94Qiw0Q0FBSyxDQUFDeUIsR0FBTix5QkFBMkJELE1BQU0sSUFBSSxDQUFyQyxFQUFQLENBTDZCLENBS29CO0FBQ2pEOztBQUVELFNBQVV6QyxTQUFWLENBQW9CbUIsTUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFRUcsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZLHVCQUFaLEVBQXFDSixNQUFNLENBQUNzQixNQUE1QztBQUZGO0FBR2lCLGlCQUFNckIsK0RBQUksQ0FBQ29CLFlBQUQsRUFBZXJCLE1BQU0sQ0FBQ3NCLE1BQXRCLENBQVY7O0FBSGpCO0FBR1FwQixnQkFIUjtBQUd5RDtBQUN2RDtBQUNBQyxpQkFBTyxDQUFDQyxHQUFSLENBQVksaUJBQVosRUFBK0JGLE1BQS9CO0FBTEY7QUFNRSxpQkFBTUcsOERBQUcsQ0FBQztBQUNUQyxnQkFBSSxFQUFFa0IsaUVBREc7QUFFVDtBQUNBM0IsZ0JBQUksRUFBRUssTUFBTSxDQUFDTDtBQUhKLFdBQUQsQ0FBVDs7QUFORjtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBWUVNLGlCQUFPLENBQUNLLEtBQVIsQ0FBYyxtQkFBZDtBQVpGO0FBYUUsaUJBQU1ILDhEQUFHLENBQUM7QUFDVEMsZ0JBQUksRUFBRW1CLGlFQURHO0FBRVRqQixpQkFBSyxFQUFFLGFBQUlFLFFBQUosQ0FBYWI7QUFGWCxXQUFELENBQVQ7O0FBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBb0JBLFNBQVM2QixXQUFULENBQXFCN0IsSUFBckIsRUFBMkI7QUFDMUIsU0FBT0MsNENBQUssQ0FBQ3lCLEdBQU4saUJBQW1CMUIsSUFBbkIsRUFBUDtBQUNBOztBQUVELFNBQVVmLFFBQVYsQ0FBbUJrQixNQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRWlCLGlCQUFNQywrREFBSSxDQUFDeUIsV0FBRCxFQUFjMUIsTUFBTSxDQUFDSCxJQUFyQixDQUFWOztBQUZqQjtBQUVRSyxnQkFGUjtBQUdFQyxpQkFBTyxDQUFDQyxHQUFSLENBQVksc0JBQVosRUFBb0NKLE1BQU0sQ0FBQ0gsSUFBM0M7QUFIRjtBQUlFLGlCQUFNUSw4REFBRyxDQUFDO0FBQ1RDLGdCQUFJLEVBQUVxQixnRUFERztBQUVUOUIsZ0JBQUksRUFBRUssTUFBTSxDQUFDTDtBQUZKLFdBQUQsQ0FBVDs7QUFKRjtBQVFFTSxpQkFBTyxDQUFDQyxHQUFSLENBQVksc0JBQVosRUFBb0NGLE1BQXBDO0FBUkY7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFVRUMsaUJBQU8sQ0FBQ0ssS0FBUixDQUFjLHNCQUFkO0FBVkY7QUFXRSxpQkFBTUgsOERBQUcsQ0FBQztBQUNUQyxnQkFBSSxFQUFFc0IsZ0VBREc7QUFFVHBCLGlCQUFLLEVBQUUsYUFBSUUsUUFBSixDQUFhYjtBQUZYLFdBQUQsQ0FBVDs7QUFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFtQkEsU0FBU2dDLFVBQVQsQ0FBb0JoQyxJQUFwQixFQUEwQjtBQUFFO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBT0MsNENBQUssQ0FBQ0MsSUFBTixDQUFXLE9BQVgsRUFBb0JGLElBQXBCLENBQVAsQ0FMeUIsQ0FLUTtBQUNqQzs7QUFFRCxTQUFVZCxPQUFWLENBQWtCaUIsTUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVpQixpQkFBTUMsK0RBQUksQ0FBQzRCLFVBQUQsRUFBYTdCLE1BQU0sQ0FBQ0gsSUFBcEIsQ0FBVjs7QUFGakI7QUFFUUssZ0JBRlI7QUFFcUQ7QUFDbkQ7QUFDQTtBQUNBQyxpQkFBTyxDQUFDQyxHQUFSLENBQVksZUFBWixFQUE2QkYsTUFBN0I7QUFMRjtBQU1FLGlCQUFNRyw4REFBRyxDQUFDO0FBQ1RDLGdCQUFJLEVBQUV3QiwrREFERzs7QUFFVDtBQUNIO0FBQ0E7QUFDQTtBQUNHakMsZ0JBQUksRUFBRUssTUFBTSxDQUFDTCxJQU5KLENBTVU7O0FBTlYsV0FBRCxDQUFUOztBQU5GO0FBY0VNLGlCQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFaLEVBQTRCRixNQUE1QjtBQWRGO0FBZUUsaUJBQU1HLDhEQUFHLENBQUM7QUFDVEMsZ0JBQUksRUFBRXlCLDZEQURHO0FBRVQ7QUFDQWxDLGdCQUFJLEVBQUVLLE1BQU0sQ0FBQ0wsSUFBUCxDQUFZbUMsRUFIVCxDQUdhOztBQUhiLFdBQUQsQ0FBVDs7QUFmRjtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBcUJFN0IsaUJBQU8sQ0FBQ0ssS0FBUixDQUFjLGtCQUFkO0FBckJGO0FBc0JFLGlCQUFNSCw4REFBRyxDQUFDO0FBQ1RDLGdCQUFJLEVBQUUyQiwrREFERztBQUVUekIsaUJBQUssRUFBRSxhQUFJRSxRQUFKLENBQWFiO0FBRlgsV0FBRCxDQUFUOztBQXRCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUE2QkEsU0FBU3FDLGFBQVQsQ0FBdUJyQyxJQUF2QixFQUE2QjtBQUFFO0FBQzlCO0FBQ0EsU0FBT0MsNENBQUssVUFBTCxpQkFBc0JELElBQXRCLEVBQVAsQ0FGNEIsQ0FFUztBQUNyQzs7QUFFRCxTQUFVYixVQUFWLENBQXFCZ0IsTUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVpQixpQkFBTUMsK0RBQUksQ0FBQ2lDLGFBQUQsRUFBZ0JsQyxNQUFNLENBQUNILElBQXZCLENBQVY7O0FBRmpCO0FBRVFLLGdCQUZSO0FBRXdEO0FBQ3REO0FBQ0FDLGlCQUFPLENBQUNDLEdBQVIsQ0FBWSxrQkFBWixFQUFnQ0osTUFBTSxDQUFDSCxJQUF2QztBQUpGO0FBS0UsaUJBQU1RLDhEQUFHLENBQUM7QUFDVEMsZ0JBQUksRUFBRTZCLGtFQURHO0FBRVR0QyxnQkFBSSxFQUFFSyxNQUFNLENBQUNMLElBRkosQ0FFVTs7QUFGVixXQUFELENBQVQ7O0FBTEY7QUFTRU0saUJBQU8sQ0FBQ0MsR0FBUixDQUFZLGtCQUFaLEVBQWdDRixNQUFoQztBQVRGO0FBVUUsaUJBQU1HLDhEQUFHLENBQUM7QUFDVEMsZ0JBQUksRUFBRThCLGdFQURHO0FBRVQ7QUFDQXZDLGdCQUFJLEVBQUVHLE1BQU0sQ0FBQ0gsSUFISixDQUdXOztBQUhYLFdBQUQsQ0FBVDs7QUFWRjtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBZ0JFTSxpQkFBTyxDQUFDSyxLQUFSLENBQWMsb0JBQWQ7QUFoQkY7QUFpQkUsaUJBQU1ILDhEQUFHLENBQUM7QUFDVEMsZ0JBQUksRUFBRStCLGtFQURHO0FBRVQ3QixpQkFBSyxFQUFFLGFBQUlFLFFBQUosQ0FBYWI7QUFGWCxXQUFELENBQVQ7O0FBakJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQXdCQSxTQUFTeUMsYUFBVCxDQUF1QnpDLElBQXZCLEVBQTZCO0FBQUU7QUFDOUI7QUFDQTtBQUNBLFNBQU9DLDRDQUFLLENBQUNDLElBQU4saUJBQW9CRixJQUFJLENBQUMwQyxNQUF6QixlQUEyQzFDLElBQTNDLENBQVAsQ0FINEIsQ0FHNEI7QUFDeEQ7O0FBRUQsU0FBVVosVUFBVixDQUFxQmUsTUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVpQixpQkFBTUMsK0RBQUksQ0FBQ3FDLGFBQUQsRUFBZ0J0QyxNQUFNLENBQUNILElBQXZCLENBQVY7O0FBRmpCO0FBRVFLLGdCQUZSO0FBRXdEO0FBQ3REO0FBQ0FDLGlCQUFPLENBQUNDLEdBQVIsQ0FBWSxtQkFBWixFQUFpQ0osTUFBTSxDQUFDSCxJQUF4QztBQUpGO0FBS0UsaUJBQU1RLDhEQUFHLENBQUM7QUFDVEMsZ0JBQUksRUFBRWtDLGtFQURHO0FBRVQ7QUFDQTNDLGdCQUFJLEVBQUVLLE1BQU0sQ0FBQ0w7QUFISixXQUFELENBQVQ7O0FBTEY7QUFVRU0saUJBQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFaLEVBQStCRixNQUEvQjtBQVZGO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBWUVDLGlCQUFPLENBQUNLLEtBQVIsQ0FBYyxxQkFBZDtBQVpGO0FBYUUsaUJBQU1ILDhEQUFHLENBQUM7QUFDVEMsZ0JBQUksRUFBRW1DLGtFQURHO0FBRVRqQyxpQkFBSyxFQUFFLGFBQUlFLFFBQUosQ0FBYWI7QUFGWCxXQUFELENBQVQ7O0FBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBb0JBLFNBQVVYLGFBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0MsaUJBQU13RCxxRUFBVSxDQUFDQyxnRUFBRCxFQUFvQjdELFFBQXBCLENBQWhCOztBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUlBLFNBQVVLLFlBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0MsaUJBQU11RCxxRUFBVSxDQUFDRSw4REFBRCxFQUFrQm5FLE9BQWxCLENBQWhCOztBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUlBLFNBQVVXLGlCQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNDLGlCQUFNc0QscUVBQVUsQ0FBQ0csb0VBQUQsRUFBd0JuRSxZQUF4QixDQUFoQjs7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFJQSxTQUFVVyxhQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNDLGlCQUFNcUQscUVBQVUsQ0FBQ0ksZ0VBQUQsRUFBb0JuRSxRQUFwQixDQUFoQjs7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFJQSxTQUFVVyxlQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNDLGlCQUFNb0QscUVBQVUsQ0FBQ0ssa0VBQUQsRUFBc0JuRSxVQUF0QixDQUFoQjs7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFJQSxTQUFVVyxjQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNDLGlCQUFNeUQsbUVBQVEsQ0FBQyxJQUFELEVBQU9DLGlFQUFQLEVBQTJCcEUsU0FBM0IsQ0FBZDs7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFJQSxTQUFVVyxZQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNDLGlCQUFNa0QscUVBQVUsQ0FBQ1EsK0RBQUQsRUFBbUJuRSxPQUFuQixDQUFoQjs7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFJQSxTQUFVVSxlQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNDLGlCQUFNaUQscUVBQVUsQ0FBQ1Msa0VBQUQsRUFBc0JuRSxVQUF0QixDQUFoQjs7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFJQSxTQUFVVSxlQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNDLGlCQUFNZ0QscUVBQVUsQ0FBQ1Usa0VBQUQsRUFBc0JuRSxVQUF0QixDQUFoQjs7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFJZSxTQUFVVSxRQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNkLGlCQUFNMEQsOERBQUcsQ0FBQyxDQUNUQywrREFBSSxDQUFDcEUsYUFBRCxDQURLLEVBRVRvRSwrREFBSSxDQUFDbkUsWUFBRCxDQUZLLEVBR1RtRSwrREFBSSxDQUFDbEUsaUJBQUQsQ0FISyxFQUlUa0UsK0RBQUksQ0FBQ2pFLGFBQUQsQ0FKSyxFQUtUaUUsK0RBQUksQ0FBQ2hFLGVBQUQsQ0FMSyxFQU1UZ0UsK0RBQUksQ0FBQy9ELGNBQUQsQ0FOSyxFQU9UK0QsK0RBQUksQ0FBQzlELFlBQUQsQ0FQSyxFQVFUOEQsK0RBQUksQ0FBQzdELGVBQUQsQ0FSSyxFQVNUNkQsK0RBQUksQ0FBQzVELGVBQUQsQ0FUSyxDQUFELENBQVQ7O0FBRGM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4yMTdkOWMzNzE3ZDczNDg1YWE1OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHthbGwsIGNhbGwsIGRlbGF5LCBmb3JrLCBwdXQsIHRha2VMYXRlc3QsIHRocm90dGxlfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHtcclxuXHRBRERfQ09NTUVOVF9GQUlMVVJFLFxyXG5cdEFERF9DT01NRU5UX1JFUVVFU1QsXHJcblx0QUREX0NPTU1FTlRfU1VDQ0VTUyxcclxuXHRBRERfUE9TVF9GQUlMVVJFLFxyXG5cdEFERF9QT1NUX1JFUVVFU1QsXHJcblx0QUREX1BPU1RfU1VDQ0VTUyxcclxuXHRMSUtFX1BPU1RfRkFJTFVSRSxcclxuXHRMSUtFX1BPU1RfUkVRVUVTVCxcclxuXHRMSUtFX1BPU1RfU1VDQ0VTUywgTE9BRF9QT1NUX0ZBSUxVUkUsIExPQURfUE9TVF9SRVFVRVNULCBMT0FEX1BPU1RfU1VDQ0VTUyxcclxuXHQvL2dlbmVyYXRlRHVtbXlQb3N0LCBmcm9udFxyXG5cdExPQURfUE9TVFNfRkFJTFVSRSxcclxuXHRMT0FEX1BPU1RTX1JFUVVFU1QsXHJcblx0TE9BRF9QT1NUU19TVUNDRVNTLFxyXG5cdFJFTU9WRV9QT1NUX0ZBSUxVUkUsXHJcblx0UkVNT1ZFX1BPU1RfUkVRVUVTVCxcclxuXHRSRU1PVkVfUE9TVF9TVUNDRVNTLCBSRVRXRUVUX0ZBSUxVUkUsIFJFVFdFRVRfUkVRVUVTVCwgUkVUV0VFVF9TVUNDRVNTLFxyXG5cdFVOTElLRV9QT1NUX0ZBSUxVUkUsXHJcblx0VU5MSUtFX1BPU1RfUkVRVUVTVCxcclxuXHRVTkxJS0VfUE9TVF9TVUNDRVNTLCBVUExPQURfSU1BR0VTX0ZBSUxVUkUsXHJcblx0VVBMT0FEX0lNQUdFU19SRVFVRVNULFxyXG5cdFVQTE9BRF9JTUFHRVNfU1VDQ0VTUyxcclxufSBmcm9tIFwiLi4vcmVkdWNlcnMvcG9zdFwiO1xyXG5pbXBvcnQge1xyXG5cdEFERF9QT1NUX1RPX01FLFxyXG5cdFJFTU9WRV9QT1NUX09GX01FLFxyXG59IGZyb20gXCIuLi9yZWR1Y2Vycy91c2VyXCI7XHJcblxyXG4vL2ltcG9ydCBzaG9ydElkIGZyb20gXCJzaG9ydGlkXCI7IGZyb250XHJcblxyXG4vLyByZXN0QVBJXHJcbmZ1bmN0aW9uIHJldHdlZXRBUEkoZGF0YSkge1xyXG5cdHJldHVybiBheGlvcy5wb3N0KGAvcG9zdC8ke2RhdGF9L3JldHdlZXRgKVxyXG59XHJcblxyXG5mdW5jdGlvbiogcmV0d2VldChhY3Rpb24pIHtcclxuXHR0cnkge1xyXG5cdFx0Y29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChyZXR3ZWV0QVBJLCBhY3Rpb24uZGF0YSlcclxuXHRcdGNvbnNvbGUubG9nKCdzYWdhIHJldHdlZXQg7Iuk7ZaJOjonLCBhY3Rpb24uZGF0YSlcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IFJFVFdFRVRfU1VDQ0VTUyxcclxuXHRcdFx0ZGF0YTogcmVzdWx0LmRhdGEsXHJcblx0XHR9KVxyXG5cdFx0Y29uc29sZS5sb2coJ3NhZ2EgcmV0d2VldCDshLHqs7U6OicsIHJlc3VsdClcclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoJ3NhZ2EgcmV0d2VldCDsi6TtjKggOjogJywgZXJyKVxyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogUkVUV0VFVF9GQUlMVVJFLFxyXG5cdFx0XHRlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGFcclxuXHRcdH0pXHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGxvYWRJbWFnZXNBUEkoZGF0YSkge1xyXG5cdHJldHVybiBheGlvcy5wb3N0KCcvcG9zdC9pbWFnZXMnLCBkYXRhKSAvLyBmb3JtIGRhdGEg66W8IHtuYW1lOmRhdGF9IO2YleyLneycvOuhnCDqsJDsi7jrqbQganNvbiDrkJjquLDrlYzrrLjsl5Ag7IKs7Jqp7ZWY66m0IOyViOuQqFxyXG59XHJcblxyXG5mdW5jdGlvbiogdXBsb2FkSW1hZ2VzKGFjdGlvbikge1xyXG5cdHRyeSB7XHJcblx0XHRjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHVwbG9hZEltYWdlc0FQSSwgYWN0aW9uLmRhdGEpXHJcblx0XHRjb25zb2xlLmxvZygnc2FnYSB1cGxvYWRJbWFnZXMg7Iuk7ZaJOjogJywgYWN0aW9uLmRhdGEpXHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOiBVUExPQURfSU1BR0VTX1NVQ0NFU1MsXHJcblx0XHRcdGRhdGE6IHJlc3VsdC5kYXRhXHJcblx0XHR9KVxyXG5cdFx0Y29uc29sZS5sb2coJ3NhZ2EgdXBsb2FkSW1hZ2VzIOyEseqztTo6ICcsIHJlc3VsdClcclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoJ3NhZ2EgdXBsb2FkSW1hZ2VzIGVycm9yOjogJywgZXJyKVxyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogVVBMT0FEX0lNQUdFU19GQUlMVVJFLFxyXG5cdFx0XHRlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGFcclxuXHRcdH0pXHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBsaWtlUG9zdEFQSShkYXRhKSB7IC8vIDMg7KCE64us65CY66m0XHJcblx0cmV0dXJuIGF4aW9zLnBhdGNoKGAvcG9zdC8ke2RhdGF9L2xpa2VgKSAvLyA0IOuNsOydtO2EsOqwgCDqsITri6QsIGxpa2UgJiB1bmxpa2Ug64qUIHBhdGNoICgg6rKM7Iuc6riA7JeQIOydvOu2gOu2hCDsiJjsoJXsnbTquLDrlYzrrLggKVxyXG59XHJcblxyXG5mdW5jdGlvbiogbGlrZVBvc3QoYWN0aW9uKSB7IC8vIDEg7JWh7IWY7JeQ7IScXHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobGlrZVBvc3RBUEksIGFjdGlvbi5kYXRhKSAvLyAyIOuNsOydtO2EsOulvCDqurzrgrTshJxcclxuXHRcdGNvbnNvbGUubG9nKCdsaWtlUG9zdCDsi6TtlonspJE6OicsIHJlc3VsdClcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IExJS0VfUE9TVF9TVUNDRVNTLFxyXG5cdFx0XHRkYXRhOiByZXN1bHQuZGF0YSwgLy8gYmFjaywgcG9zdElkLCB1c2VySWQg65Ok7Ja07J6I7J2MXHJcblx0XHR9KVxyXG5cdFx0Y29uc29sZS5sb2coJ2xpa2VQb3N0IOyZhOujjDo6JywgcmVzdWx0KVxyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0Y29uc29sZS5lcnJvcignbGlrZVBvc3QgZXJyb3I6OiAnLCBlcnIpXHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOiBMSUtFX1BPU1RfRkFJTFVSRSxcclxuXHRcdFx0ZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG5cdFx0fSlcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVubGlrZVBvc3RBUEkoZGF0YSkgeyAvLyAzIOyghOuLrOuQmOuptFxyXG5cdHJldHVybiBheGlvcy5kZWxldGUoYC9wb3N0LyR7ZGF0YX0vbGlrZWApIC8vIDQg642w7J207YSw6rCAIOqwhOuLpFxyXG59XHJcblxyXG5mdW5jdGlvbiogdW5saWtlUG9zdChhY3Rpb24pIHsgLy8gMSDslaHshZjsl5DshJxcclxuXHR0cnkge1xyXG5cdFx0Y29uc3QgcmVzdWx0ID0geWllbGQgY2FsbCh1bmxpa2VQb3N0QVBJLCBhY3Rpb24uZGF0YSkgLy8gMiDrjbDsnbTthLDrpbwg6rq864K07IScXHJcblx0XHRjb25zb2xlLmxvZygndW5saWtlUG9zdCDsi6TtlonspJE6OicsIHJlc3VsdClcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IFVOTElLRV9QT1NUX1NVQ0NFU1MsXHJcblx0XHRcdGRhdGE6IHJlc3VsdC5kYXRhLCAvLyBiYWNrLCBwb3N0SWQsdXNlcklkIOuTpOyWtOyeiOydjFxyXG5cdFx0fSlcclxuXHRcdGNvbnNvbGUubG9nKCdVTkxJS0VQb3N0IOyZhOujjDo6JywgcmVzdWx0KVxyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0Y29uc29sZS5lcnJvcignVU5MSUtFUG9zdCBlcnJvcjo6ICcsIGVycilcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IFVOTElLRV9QT1NUX0ZBSUxVUkUsXHJcblx0XHRcdGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YVxyXG5cdFx0fSlcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRQb3N0c0FQSShsYXN0SWQpIHsgLy8gMyDsoITri6zrkJjrqbRcclxuXHQvL3JldHVybiBheGlvcy5nZXQoJy9hcGkvcG9zdHMnLCBkYXRhKSAvLyA0IOuNsOydtO2EsOqwgCDqsITri6QgZnJvbnRcclxuXHQvLyDrs7TthrUgZ2V0IOuwqeyLneydgCDrjbDsnbTthLDrpbwg66q7IOuEo+q4sOuVjOusuOyXkCDsv7zrpqzsiqTtirjrp4HsnLzroZwg64Sj7Ja07KSY7JW87ZWc64ukICjso7zshowpLCBldGMgOiBsaW1pdD0xMCZvZmZzZXQ9MTBcclxuXHQvLyDtj6zsiqTtirgg65Ox7J2AIOuNsOydtO2EsCDsupDsi7HsnbQg7JWI65CY7KeA66eMLCDqsp/snYAg642w7J207YSwIOy6kOyLseydhCDqsJnsnbQg7ZWgIOyImCDsnojri6RcclxuXHQvLyBsYXN0SWQg6rCAIHVuZGVmaW5lZCDsnbgg6rK97JqwIDBcclxuXHRyZXR1cm4gYXhpb3MuZ2V0KGAvcG9zdHM/bGFzdElkPSR7bGFzdElkIHx8IDB9YCkgLy8gNCDrjbDsnbTthLDqsIAg6rCE64ukICxcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRQb3N0cyhhY3Rpb24pIHsgLy8gMSDslaHshZjsl5DshJxcclxuXHR0cnkge1xyXG5cdFx0Y29uc29sZS5sb2coJ1NhZ2FzOjogbG9hZFBvc3RzIOyLpO2WieykkScsIGFjdGlvbi5sYXN0SWQpXHJcblx0XHRjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRQb3N0c0FQSSwgYWN0aW9uLmxhc3RJZCkgLy8gMiDrjbDsnbTthLDrpbwg6rq864K07IScXHJcblx0XHQvL3lpZWxkIGRlbGF5KDEwMDApIGZyb250XHJcblx0XHRjb25zb2xlLmxvZygnbG9hZFBvc3RzIOyZhOujjDo6ICcsIHJlc3VsdClcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IExPQURfUE9TVFNfU1VDQ0VTUyxcclxuXHRcdFx0Ly8gZGF0YTogZ2VuZXJhdGVEdW1teVBvc3QoMTApLCAvLyBkYXRhIDEwIOqwnCBmcm9udFxyXG5cdFx0XHRkYXRhOiByZXN1bHQuZGF0YSxcclxuXHRcdH0pXHJcblx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRjb25zb2xlLmVycm9yKCdsb2FkUG9zdHMgZXJyb3I6ICcsIGVycilcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IExPQURfUE9TVFNfRkFJTFVSRSxcclxuXHRcdFx0ZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkUG9zdEFQSShkYXRhKSB7XHJcblx0cmV0dXJuIGF4aW9zLmdldChgL3Bvc3QvJHtkYXRhfWApXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkUG9zdChhY3Rpb24pIHtcclxuXHR0cnkge1xyXG5cdFx0Y29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkUG9zdEFQSSwgYWN0aW9uLmRhdGEpXHJcblx0XHRjb25zb2xlLmxvZygnc2FnYSBsb2FkUG9zdCDsmpTssq0gOjogJywgYWN0aW9uLmRhdGEpXHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOiBMT0FEX1BPU1RfU1VDQ0VTUyxcclxuXHRcdFx0ZGF0YTogcmVzdWx0LmRhdGEsXHJcblx0XHR9KVxyXG5cdFx0Y29uc29sZS5sb2coJ3NhZ2EgbG9hZFBvc3Qg7ISx6rO1IDo6ICcsIHJlc3VsdClcclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoJ3NhZ2EgbG9hZFBvc3Qg7Iuk7YyoIDo6ICcsIGVycilcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IExPQURfUE9TVF9GQUlMVVJFLFxyXG5cdFx0XHRlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcblx0XHR9KVxyXG5cdH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGFkZFBvc3RBUEkoZGF0YSkgeyAvLyAzIOyghOuLrOuQmOuptFxyXG5cdC8vcmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvcG9zdCcsIGRhdGEpIC8vIDQg642w7J207YSw6rCAIOqwhOuLpCBmcm9udFxyXG5cdC8vIGRhdGEgY29udGVudCDqsIAgcmVxLmJvZHkuY29udGVudCDroZwg67Cx7JeU65Oc7JeQIOuzgO2ZmFxyXG5cdC8vcmV0dXJuIGF4aW9zLnBvc3QoJy9wb3N0Jywge2NvbnRlbnQ6IGRhdGF9KSAvLyA0IOuNsOydtO2EsOqwgCDqsITri6QsXHJcblx0Ly8gZm9ybSBkYXRhIOuKlCB7Y29udGVudDogZGF0YX0g7JmAIOqwmeydtCDqsJDsi7jrqbQg7JWI65Cc64ukLCDrsJTroZwgZGF0YSDroZwg64Sj7Ja07KSY7JW87ZWoXHJcblx0cmV0dXJuIGF4aW9zLnBvc3QoJy9wb3N0JywgZGF0YSkgLy8gNCDrjbDsnbTthLDqsIAg6rCE64ukXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBhZGRQb3N0KGFjdGlvbikgeyAvLyAxIOyVoeyFmOyXkOyEnFxyXG5cdHRyeSB7XHJcblx0XHRjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGFkZFBvc3RBUEksIGFjdGlvbi5kYXRhKSAvLyAyIOuNsOydtO2EsOulvCDqurzrgrTshJxcclxuXHRcdC8veWllbGQgZGVsYXkoMTAwMCkgZnJvbnRcclxuXHRcdC8vY29uc3QgaWQgPSBzaG9ydElkLmdlbmVyYXRlKCkgLy8gZnJvbnQg7J2YIOuNlOuvuCDslYTrlJRcclxuXHRcdGNvbnNvbGUubG9nKCdhZGRQb3N0IOyLpO2WieykkTo6JywgcmVzdWx0KVxyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogQUREX1BPU1RfU1VDQ0VTUyxcclxuXHRcdFx0LypkYXRhOiB7IC8vIGZyb250IGR1bW15XHJcblx0XHRcdFx0aWQsXHJcblx0XHRcdFx0Y29udGVudDogYWN0aW9uLmRhdGEsXHJcblx0XHRcdH0qL1xyXG5cdFx0XHRkYXRhOiByZXN1bHQuZGF0YSwgLy8gYmFjaywg7Iuk7KCc66GcIOqyjOyLnOq4gOydtCDrk6TslrTsnojsnYxcclxuXHRcdH0pXHJcblx0XHRjb25zb2xlLmxvZygnYWRkUG9zdCDsmYTro4w6OicsIHJlc3VsdClcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IEFERF9QT1NUX1RPX01FLFxyXG5cdFx0XHQvLyBkYXRhOiBpZCwgLy8gZnJvbnQgZHVtbXlcclxuXHRcdFx0ZGF0YTogcmVzdWx0LmRhdGEuaWQsIC8vIGJhY2tcclxuXHRcdH0pXHJcblx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRjb25zb2xlLmVycm9yKCdhZGRQb3N0IGVycm9yOjogJywgZXJyKVxyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogQUREX1BPU1RfRkFJTFVSRSxcclxuXHRcdFx0ZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhXHJcblx0XHR9KVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlUG9zdEFQSShkYXRhKSB7IC8vIDMg7KCE64us65CY66m0XHJcblx0Ly9yZXR1cm4gYXhpb3MucG9zdCgnL2FwaS9wb3N0JywgZGF0YSkgLy8gNCDrjbDsnbTthLDqsIAg6rCE64ukIGZyb250XHJcblx0cmV0dXJuIGF4aW9zLmRlbGV0ZShgL3Bvc3QvJHtkYXRhfWApIC8vIDQg642w7J207YSw6rCAIOqwhOuLpCBiYWNrIC8vZGVsZXRlIOydmCBkYXRhIOuKlCBwb3N0LmlkIChQb3N0Q2FyZC5qcynsl5DshJwg7ZmV7J24IOqwgOuKpVxyXG59XHJcblxyXG5mdW5jdGlvbiogcmVtb3ZlUG9zdChhY3Rpb24pIHsgLy8gMSDslaHshZjsl5DshJxcclxuXHR0cnkgeyAvLyDtj6zsiqTtirgg66as65OA7ISc7IOB7YOc7JmAIOycoOyggOumrOuTgOyEnOyDge2DnOyZgCDrj5nsi5zsl5Ag7ZWc67Cp7JeQIOuwlOq/gOyImCDsl4bquLDrlYzrrLjsl5Ag7JWh7IWY7J2EIOuRkOuyiOycvOuhnCDrsJTqv5TspIDri6QsXHJcblx0XHRjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHJlbW92ZVBvc3RBUEksIGFjdGlvbi5kYXRhKSAvLyAyIOuNsOydtO2EsOulvCDqurzrgrTshJxcclxuXHRcdC8veWllbGQgZGVsYXkoMTAwMCkgZnJvbnRcclxuXHRcdGNvbnNvbGUubG9nKCdyZW1vdmVQb3N0IOyLpO2WiTo6ICcsIGFjdGlvbi5kYXRhKVxyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogUkVNT1ZFX1BPU1RfU1VDQ0VTUyxcclxuXHRcdFx0ZGF0YTogcmVzdWx0LmRhdGEsIC8vIOyWtOuWpCDqsozsi5zrrLzsnYQg7KeA7Jug64qU7KeAIGlkIOqwgOyeiOydhOqygyxcclxuXHRcdH0pXHJcblx0XHRjb25zb2xlLmxvZygncmVtb3ZlUG9zdCDsmYTro4w6OiAnLCByZXN1bHQpXHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOiBSRU1PVkVfUE9TVF9PRl9NRSxcclxuXHRcdFx0Ly9kYXRhOiBhY3Rpb24uZGF0YSwgZnJvbnRcclxuXHRcdFx0ZGF0YTogYWN0aW9uLmRhdGEsICAvLyBhY3Rpb24g7J20IOuTpOyWtOyZlOydhOuVjCDrjbDsnbTthLBcclxuXHRcdH0pXHJcblx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRjb25zb2xlLmVycm9yKCdyZW1vdmVQb3N0IGVycm9yOiAnLCBlcnIpXHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOiBSRU1PVkVfUE9TVF9GQUlMVVJFLFxyXG5cdFx0XHRlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGFcclxuXHRcdH0pXHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRDb21tZW50QVBJKGRhdGEpIHsgLy8gMyDsoITri6zrkJjrqbRcclxuXHQvL+yjvOyGjOuKlCDrsLHsl5Trk5zsmYAg7ZSE66Gg7Yq47J2YIOyVveyGjeydvOu/kCDsoJXtlbTsp4TqsbTsl4bri6RcclxuXHQvL3JldHVybiBheGlvcy5wb3N0KGAvYXBpL3Bvc3QvJHtkYXRhLnBvc3RJZH0vY29tbWVudGAsIGRhdGEpIC8vIDQg642w7J207YSw6rCAIOqwhOuLpCAvLyBmcm9udFxyXG5cdHJldHVybiBheGlvcy5wb3N0KGAvcG9zdC8ke2RhdGEucG9zdElkfS9jb21tZW50YCwgZGF0YSkgLy8gNCDrjbDsnbTthLDqsIAg6rCE64ukIC8vIFBPU1QgL3Bvc3QvMS9jb21tZW50XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBhZGRDb21tZW50KGFjdGlvbikgeyAvLyAxIOyVoeyFmOyXkOyEnFxyXG5cdHRyeSB7XHJcblx0XHRjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGFkZENvbW1lbnRBUEksIGFjdGlvbi5kYXRhKSAvLyAyIOuNsOydtO2EsOulvCDqurzrgrTshJwgLy9iYWNrXHJcblx0XHQvL3lpZWxkIGRlbGF5KDEwMDApIGZyb250XHJcblx0XHRjb25zb2xlLmxvZygnYWRkQ29tbWVudCDsi6TtlonspJEgOjonLCBhY3Rpb24uZGF0YSlcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IEFERF9DT01NRU5UX1NVQ0NFU1MsXHJcblx0XHRcdC8vZGF0YTogYWN0aW9uLmRhdGEgLy8gZnJvbnRcclxuXHRcdFx0ZGF0YTogcmVzdWx0LmRhdGEsXHJcblx0XHR9KVxyXG5cdFx0Y29uc29sZS5sb2coJ2FkZENvbW1lbnQg7JmE66OMOjonLCByZXN1bHQpXHJcblx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRjb25zb2xlLmVycm9yKCdhZGRDb21tZW50IGVycm9yOjogJywgZXJyKVxyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogQUREX0NPTU1FTlRfRkFJTFVSRSxcclxuXHRcdFx0ZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhXHJcblx0XHR9KVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZFBvc3QoKSB7XHJcblx0eWllbGQgdGFrZUxhdGVzdChMT0FEX1BPU1RfUkVRVUVTVCwgbG9hZFBvc3QpXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFJldHdlZXQoKSB7XHJcblx0eWllbGQgdGFrZUxhdGVzdChSRVRXRUVUX1JFUVVFU1QsIHJldHdlZXQpXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFVwbG9hZEltYWdlcygpIHtcclxuXHR5aWVsZCB0YWtlTGF0ZXN0KFVQTE9BRF9JTUFHRVNfUkVRVUVTVCwgdXBsb2FkSW1hZ2VzKVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMaWtlUG9zdCgpIHtcclxuXHR5aWVsZCB0YWtlTGF0ZXN0KExJS0VfUE9TVF9SRVFVRVNULCBsaWtlUG9zdClcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoVW5saWtlUG9zdCgpIHtcclxuXHR5aWVsZCB0YWtlTGF0ZXN0KFVOTElLRV9QT1NUX1JFUVVFU1QsIHVubGlrZVBvc3QpXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRQb3N0cygpIHtcclxuXHR5aWVsZCB0aHJvdHRsZSg1MDAwLCBMT0FEX1BPU1RTX1JFUVVFU1QsIGxvYWRQb3N0cylcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoQWRkUG9zdCgpIHtcclxuXHR5aWVsZCB0YWtlTGF0ZXN0KEFERF9QT1NUX1JFUVVFU1QsIGFkZFBvc3QpXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFJlbW92ZVBvc3QoKSB7XHJcblx0eWllbGQgdGFrZUxhdGVzdChSRU1PVkVfUE9TVF9SRVFVRVNULCByZW1vdmVQb3N0KVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hBZGRDb21tZW50KCkge1xyXG5cdHlpZWxkIHRha2VMYXRlc3QoQUREX0NPTU1FTlRfUkVRVUVTVCwgYWRkQ29tbWVudClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHBvc3RTYWdhKCkge1xyXG5cdHlpZWxkIGFsbChbXHJcblx0XHRmb3JrKHdhdGNoTG9hZFBvc3QpLFxyXG5cdFx0Zm9yayh3YXRjaFJldHdlZXQpLFxyXG5cdFx0Zm9yayh3YXRjaFVwbG9hZEltYWdlcyksXHJcblx0XHRmb3JrKHdhdGNoTGlrZVBvc3QpLFxyXG5cdFx0Zm9yayh3YXRjaFVubGlrZVBvc3QpLFxyXG5cdFx0Zm9yayh3YXRjaExvYWRQb3N0cyksXHJcblx0XHRmb3JrKHdhdGNoQWRkUG9zdCksXHJcblx0XHRmb3JrKHdhdGNoUmVtb3ZlUG9zdCksXHJcblx0XHRmb3JrKHdhdGNoQWRkQ29tbWVudCksXHJcblx0XSlcclxufSJdLCJzb3VyY2VSb290IjoiIn0=