webpackHotUpdate_N_E("pages/index",{

/***/ "./component/PostCard.js":
/*!*******************************!*\
  !*** ./component/PostCard.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _PostImages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PostImages */ "./component/PostImages.js");
/* harmony import */ var _CommentForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CommentForm */ "./component/CommentForm.js");
/* harmony import */ var _PostCardContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PostCardContent */ "./component/PostCardContent.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _FollowButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./FollowButton */ "./component/FollowButton.js");
var _this = undefined,
    _jsxFileName = "D:\\intellijProjects\\react-nodebird\\prepare\\front\\component\\PostCard.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











var PostCard = function PostCard(_ref) {
  _s();

  var post = _ref.post;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.post;
  }),
      removePostLoading = _useSelector.removePostLoading;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      commentFormOpened = _useState[0],
      setCommentFormOpened = _useState[1];

  var id = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    var _state$user$me;

    return (_state$user$me = state.user.me) === null || _state$user$me === void 0 ? void 0 : _state$user$me.id;
  }); //state.user.me && state.user.me.id
  //	const [liked, setLiked] = useState(false) front

  var onLike = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    // 좋아요 클릭
    if (!id) {
      // 로그인이 안되어있다면 바로바로 막아주는게 좋다
      alert('로그인이 필요합니다!');
    }

    return dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_8__["LIKE_POST_REQUEST"],
      data: post.id // 게시글 아이디

    });
  }, [id]);
  var onUnLike = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    // 좋아요 해제 클릭
    if (!id) {
      // 로그인이 안되어있다면 바로바로 막아주는게 좋다
      alert('로그인이 필요합니다!');
    }

    return dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_8__["UNLIKE_POST_REQUEST"],
      data: post.id // 게시글 아이디

    });
  }, [id]);
  /* front
  const onToggleLike = useCallback(() => {
  	setLiked((prev) => !prev)
  }, [])*/

  var onToggleComment = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setCommentFormOpened(function (prev) {
      return !prev;
    });
  }, []);
  var onRemovePost = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    if (!id) {
      return alert('로그인이 필요합니다.');
    }

    return dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_8__["REMOVE_POST_REQUEST"],
      data: post.id
    });
  }, [id]);
  var liked = post.Likers.find(function (v) {
    return v.id === id;
  }); // 게시글 좋아요 누른 사람중에 내가 있는지

  var onRetweet = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    if (!id) {
      // 로그인이 안되어있다면 바로바로 막아주는게 좋다
      alert('로그인이 필요합니다!');
    }

    return dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_8__["RETWEET_REQUEST"],
      data: post.id
    });
  }, [id]);
  return __jsx("div", {
    style: {
      marginBottom: 20
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 4
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    cover: post.Images[0] && __jsx(_PostImages__WEBPACK_IMPORTED_MODULE_5__["default"], {
      images: post.Images,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 32
      }
    }) // 이미지가 한개 이상있을때 포스트 이미지스
    ,
    actions: [__jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["RetweetOutlined"], {
      key: "retweet",
      onClick: onRetweet,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 8
      }
    }), // 리트윗 버튼
    liked ? __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["HeartTwoTone"], {
      twoToneColor: "#eb2f96",
      key: "heart",
      onClick: onUnLike,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 12
      }
    }) // 하트 버튼
    : __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["HeartOutlined"], {
      key: "heart",
      onClick: onLike,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 12
      }
    }), // 하트 버튼
    __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["MessageOutlined"], {
      key: "comment",
      onClick: onToggleComment,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 8
      }
    }), // 댓글 버튼
    __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
      key: "more",
      content: // 더 보기 버튼
      __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"].Group, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 10
        }
      }, id && post.User.id === id ?
      /*내가 쓴 글이면 수정 삭제 가능*/
      __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 14
        }
      }, "\uC218\uC815"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        type: "danger",
        loading: removePostLoading,
        onClick: onRemovePost,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 14
        }
      }, "\uC0AD\uC81C")) : __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 15
        }
      }, "\uC2E0\uACE0"), " "),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 8
      }
    }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["EllipsisOutlined"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 9
      }
    }))],
    title: post.RetweetId ? "".concat(post.User.nickname, "\uB2D8\uC774 \uB9AC\uD2B8\uC717\uC744 \uD558\uC168\uC2B5\uB2C8\uB2E4.") : null,
    extra: id && __jsx(_FollowButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
      post: post,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 20
      }
    }) // 우측 추가공간,로그인했을경우만보이게
    ,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 5
    }
  }, "//retweet \uC778 \uACBD\uC6B0 \uCE74\uB4DC\uC548\uC5D0 \uCE74\uB4DC \uB123\uC5B4\uC8FC\uAE30", post.RetweetId && post.Retweet ? __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    cover: post.Retweet.Images[0] && __jsx(_PostImages__WEBPACK_IMPORTED_MODULE_5__["default"], {
      images: post.Retweet.Images,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 41
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 6
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
    avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 17
      }
    }, post.Retweet.User.nickname[0]),
    title: post.Retweet.User.nickname,
    description: __jsx(_PostCardContent__WEBPACK_IMPORTED_MODULE_7__["default"], {
      postData: post.Retweet.content,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 22
      }
    }) // 특수한 기능을 처리하는 것을 만들기 위해선 따로 컴포넌트로 빼주는게 보기 깔끔하다
    ,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 7
    }
  })) : __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
    avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 16
      }
    }, post.User.nickname[0]),
    title: post.User.nickname,
    description: __jsx(_PostCardContent__WEBPACK_IMPORTED_MODULE_7__["default"], {
      postData: post.content,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 21
      }
    }) // 특수한 기능을 처리하는 것을 만들기 위해선 따로 컴포넌트로 빼주는게 보기 깔끔하다
    ,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 6
    }
  })), commentFormOpened && __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 7
    }
  }, __jsx(_CommentForm__WEBPACK_IMPORTED_MODULE_6__["default"], {
    post: post,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 8
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["List"], {
    header: "".concat(post.Comments.length, "\uAC1C\uC758 \uB313\uAE00"),
    itemLayout: "horizontal",
    dataSource: post.Comments,
    renderItem: function renderItem(item) {
      return __jsx("li", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 12
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Comment"], {
        author: item.User.nickname,
        avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 23
          }
        }, item.User.nickname[0]),
        content: item.content,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 13
        }
      }));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 8
    }
  })));
};

_s(PostCard, "xAZOXRtpy70224b/tH2NwE9iHEg=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"]];
});

_c = PostCard;
PostCard.propTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
    User: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
    content: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
    createdAt: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
    Comments: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object),
    Images: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object),
    Likers: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object),
    RetweetId: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
    Retweet: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.objectOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any)
  }).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (PostCard);

var _c;

$RefreshReg$(_c, "PostCard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L1Bvc3RDYXJkLmpzIl0sIm5hbWVzIjpbIlBvc3RDYXJkIiwicG9zdCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwicmVtb3ZlUG9zdExvYWRpbmciLCJ1c2VTdGF0ZSIsImNvbW1lbnRGb3JtT3BlbmVkIiwic2V0Q29tbWVudEZvcm1PcGVuZWQiLCJpZCIsInVzZXIiLCJtZSIsIm9uTGlrZSIsInVzZUNhbGxiYWNrIiwiYWxlcnQiLCJ0eXBlIiwiTElLRV9QT1NUX1JFUVVFU1QiLCJkYXRhIiwib25Vbkxpa2UiLCJVTkxJS0VfUE9TVF9SRVFVRVNUIiwib25Ub2dnbGVDb21tZW50IiwicHJldiIsIm9uUmVtb3ZlUG9zdCIsIlJFTU9WRV9QT1NUX1JFUVVFU1QiLCJsaWtlZCIsIkxpa2VycyIsImZpbmQiLCJ2Iiwib25SZXR3ZWV0IiwiUkVUV0VFVF9SRVFVRVNUIiwibWFyZ2luQm90dG9tIiwiSW1hZ2VzIiwiVXNlciIsIlJldHdlZXRJZCIsIm5pY2tuYW1lIiwiUmV0d2VldCIsImNvbnRlbnQiLCJDb21tZW50cyIsImxlbmd0aCIsIml0ZW0iLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzaGFwZSIsIm51bWJlciIsIm9iamVjdCIsInN0cmluZyIsImNyZWF0ZWRBdCIsImFycmF5T2YiLCJvYmplY3RPZiIsImFueSIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUFZO0FBQUE7O0FBQUEsTUFBVkMsSUFBVSxRQUFWQSxJQUFVO0FBQzVCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBQ0EscUJBQTRCQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxX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UCxJQUFMLENBQVVFLFFBQVYsQ0FBbUIsQ0FBbkIsQ0FBVCxDQUZWO0FBR0UsZUFBTyxFQUFFSyxJQUFJLENBQUNILE9BSGhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERCxDQURVO0FBQUEsS0FKZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkQsQ0FqREgsQ0FERjtBQXVFQSxDQXRJRDs7R0FBTXJDLFE7VUFDWUcsdUQsRUFDV0MsdUQsRUFFakJBLHVEOzs7S0FKTkosUTtBQXVJTkEsUUFBUSxDQUFDeUMsU0FBVCxHQUFxQjtBQUNwQnhDLE1BQUksRUFBRXlDLGlEQUFTLENBQUNDLEtBQVYsQ0FBZ0I7QUFDckJqQyxNQUFFLEVBQUVnQyxpREFBUyxDQUFDRSxNQURPO0FBRXJCWCxRQUFJLEVBQUVTLGlEQUFTLENBQUNHLE1BRks7QUFHckJSLFdBQU8sRUFBRUssaURBQVMsQ0FBQ0ksTUFIRTtBQUlyQkMsYUFBUyxFQUFFTCxpREFBUyxDQUFDSSxNQUpBO0FBS3JCUixZQUFRLEVBQUVJLGlEQUFTLENBQUNNLE9BQVYsQ0FBa0JOLGlEQUFTLENBQUNHLE1BQTVCLENBTFc7QUFNckJiLFVBQU0sRUFBRVUsaURBQVMsQ0FBQ00sT0FBVixDQUFrQk4saURBQVMsQ0FBQ0csTUFBNUIsQ0FOYTtBQU9yQm5CLFVBQU0sRUFBRWdCLGlEQUFTLENBQUNNLE9BQVYsQ0FBa0JOLGlEQUFTLENBQUNHLE1BQTVCLENBUGE7QUFRckJYLGFBQVMsRUFBRVEsaURBQVMsQ0FBQ0UsTUFSQTtBQVNyQlIsV0FBTyxFQUFFTSxpREFBUyxDQUFDTyxRQUFWLENBQW1CUCxpREFBUyxDQUFDUSxHQUE3QjtBQVRZLEdBQWhCLEVBVUhDO0FBWGlCLENBQXJCO0FBY2VuRCx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iOWZmZTE0MzM3MGVkZDEwYmM1Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge0F2YXRhciwgQnV0dG9uLCBDYXJkLCBDb21tZW50LCBMaXN0LCBQb3BvdmVyfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQge0VsbGlwc2lzT3V0bGluZWQsIEhlYXJ0T3V0bGluZWQsIE1lc3NhZ2VPdXRsaW5lZCwgUmV0d2VldE91dGxpbmVkLCBIZWFydFR3b1RvbmV9IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xyXG5pbXBvcnQge3VzZURpc3BhdGNoLCB1c2VTZWxlY3Rvcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcclxuaW1wb3J0IFBvc3RJbWFnZXMgZnJvbSBcIi4vUG9zdEltYWdlc1wiO1xyXG5pbXBvcnQgQ29tbWVudEZvcm0gZnJvbSBcIi4vQ29tbWVudEZvcm1cIjtcclxuaW1wb3J0IFBvc3RDYXJkQ29udGVudCBmcm9tIFwiLi9Qb3N0Q2FyZENvbnRlbnRcIjtcclxuaW1wb3J0IHtMSUtFX1BPU1RfUkVRVUVTVCwgUkVNT1ZFX1BPU1RfUkVRVUVTVCwgVU5MSUtFX1BPU1RfUkVRVUVTVCwgUkVUV0VFVF9SRVFVRVNUfSBmcm9tIFwiLi4vcmVkdWNlcnMvcG9zdFwiO1xyXG5pbXBvcnQgRm9sbG93QnV0dG9uIGZyb20gXCIuL0ZvbGxvd0J1dHRvblwiO1xyXG5cclxuXHJcbmNvbnN0IFBvc3RDYXJkID0gKHtwb3N0fSkgPT4ge1xyXG5cdGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG5cdGNvbnN0IHtyZW1vdmVQb3N0TG9hZGluZ30gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBvc3QpXHJcblx0Y29uc3QgW2NvbW1lbnRGb3JtT3BlbmVkLCBzZXRDb21tZW50Rm9ybU9wZW5lZF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHRjb25zdCBpZCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlci5tZT8uaWQpIC8vc3RhdGUudXNlci5tZSAmJiBzdGF0ZS51c2VyLm1lLmlkXHJcbi8vXHRjb25zdCBbbGlrZWQsIHNldExpa2VkXSA9IHVzZVN0YXRlKGZhbHNlKSBmcm9udFxyXG5cclxuXHJcblxyXG5cdGNvbnN0IG9uTGlrZSA9IHVzZUNhbGxiYWNrKCgpID0+IHsgLy8g7KKL7JWE7JqUIO2BtOumrVxyXG5cdFx0aWYgKCFpZCkgeyAvLyDroZzqt7jsnbjsnbQg7JWI65CY7Ja07J6I64uk66m0IOuwlOuhnOuwlOuhnCDrp4nslYTso7zripTqsowg7KKL64ukXHJcblx0XHRcdGFsZXJ0KCfroZzqt7jsnbjsnbQg7ZWE7JqU7ZWp64uI64ukIScpXHJcblx0XHR9XHJcblx0XHRyZXR1cm4gZGlzcGF0Y2goe1xyXG5cdFx0XHR0eXBlOiBMSUtFX1BPU1RfUkVRVUVTVCxcclxuXHRcdFx0ZGF0YTogcG9zdC5pZCwgLy8g6rKM7Iuc6riAIOyVhOydtOuUlFxyXG5cdFx0fSlcclxuXHR9LCBbaWRdKVxyXG5cdGNvbnN0IG9uVW5MaWtlID0gdXNlQ2FsbGJhY2soKCkgPT4geyAvLyDsoovslYTsmpQg7ZW07KCcIO2BtOumrVxyXG5cdFx0aWYgKCFpZCkgeyAvLyDroZzqt7jsnbjsnbQg7JWI65CY7Ja07J6I64uk66m0IOuwlOuhnOuwlOuhnCDrp4nslYTso7zripTqsowg7KKL64ukXHJcblx0XHRcdGFsZXJ0KCfroZzqt7jsnbjsnbQg7ZWE7JqU7ZWp64uI64ukIScpXHJcblx0XHR9XHJcblx0XHRyZXR1cm4gZGlzcGF0Y2goe1xyXG5cdFx0XHR0eXBlOiBVTkxJS0VfUE9TVF9SRVFVRVNULFxyXG5cdFx0XHRkYXRhOiBwb3N0LmlkLCAvLyDqsozsi5zquIAg7JWE7J2065SUXHJcblx0XHR9KVxyXG5cdH0sIFtpZF0pXHJcblxyXG5cdC8qIGZyb250XHJcblx0Y29uc3Qgb25Ub2dnbGVMaWtlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG5cdFx0c2V0TGlrZWQoKHByZXYpID0+ICFwcmV2KVxyXG5cdH0sIFtdKSovXHJcblxyXG5cdGNvbnN0IG9uVG9nZ2xlQ29tbWVudCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuXHRcdHNldENvbW1lbnRGb3JtT3BlbmVkKChwcmV2KSA9PiAhcHJldilcclxuXHR9LCBbXSlcclxuXHJcblx0Y29uc3Qgb25SZW1vdmVQb3N0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG5cdFx0aWYgKCFpZCkge1xyXG5cdFx0XHRyZXR1cm4gYWxlcnQoJ+uhnOq3uOyduOydtCDtlYTsmpTtlanri4jri6QuJylcclxuXHRcdH1cclxuXHRcdHJldHVybiBkaXNwYXRjaCh7XHJcblx0XHRcdHR5cGU6IFJFTU9WRV9QT1NUX1JFUVVFU1QsXHJcblx0XHRcdGRhdGE6IHBvc3QuaWQsXHJcblx0XHR9KVxyXG5cdH0sIFtpZF0pXHJcblxyXG5cdGNvbnN0IGxpa2VkID0gcG9zdC5MaWtlcnMuZmluZCgodikgPT4gdi5pZCA9PT0gaWQpIC8vIOqyjOyLnOq4gCDsoovslYTsmpQg64iE66W4IOyCrOuejOykkeyXkCDrgrTqsIAg7J6I64qU7KeAXHJcblxyXG5cdGNvbnN0IG9uUmV0d2VldCA9IHVzZUNhbGxiYWNrKFxyXG5cdFx0XHQoKSA9PiB7XHJcblx0XHRcdFx0aWYgKCFpZCkgeyAvLyDroZzqt7jsnbjsnbQg7JWI65CY7Ja07J6I64uk66m0IOuwlOuhnOuwlOuhnCDrp4nslYTso7zripTqsowg7KKL64ukXHJcblx0XHRcdFx0XHRhbGVydCgn66Gc6re47J247J20IO2VhOyalO2VqeuLiOuLpCEnKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gZGlzcGF0Y2goe1xyXG5cdFx0XHRcdFx0dHlwZTogUkVUV0VFVF9SRVFVRVNULFxyXG5cdFx0XHRcdFx0ZGF0YTogcG9zdC5pZCxcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRbaWRdLFxyXG5cdCk7XHJcblxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0XHQ8ZGl2IHN0eWxlPXt7bWFyZ2luQm90dG9tOiAyMH19PlxyXG5cdFx0XHRcdDxDYXJkXHJcblx0XHRcdFx0XHRcdGNvdmVyPXtwb3N0LkltYWdlc1swXSAmJiA8UG9zdEltYWdlcyBpbWFnZXM9e3Bvc3QuSW1hZ2VzfS8+fSAvLyDsnbTrr7jsp4DqsIAg7ZWc6rCcIOydtOyDgeyeiOydhOuVjCDtj6zsiqTtirgg7J2066+47KeA7IqkXHJcblx0XHRcdFx0XHRcdGFjdGlvbnM9e1tcclxuXHRcdFx0XHRcdFx0XHQ8UmV0d2VldE91dGxpbmVkIGtleT1cInJldHdlZXRcIiBvbkNsaWNrPXtvblJldHdlZXR9Lz4sIC8vIOumrO2KuOyclyDrsoTtirxcclxuXHRcdFx0XHRcdFx0XHRsaWtlZFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ/IDxIZWFydFR3b1RvbmUgdHdvVG9uZUNvbG9yPVwiI2ViMmY5NlwiIGtleT1cImhlYXJ0XCIgb25DbGljaz17b25Vbkxpa2V9Lz4gLy8g7ZWY7Yq4IOuyhO2KvFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ6IDxIZWFydE91dGxpbmVkIGtleT1cImhlYXJ0XCIgb25DbGljaz17b25MaWtlfS8+LCAvLyDtlZjtirgg67KE7Yq8XHJcblx0XHRcdFx0XHRcdFx0PE1lc3NhZ2VPdXRsaW5lZCBrZXk9XCJjb21tZW50XCIgb25DbGljaz17b25Ub2dnbGVDb21tZW50fS8+LCAvLyDrjJPquIAg67KE7Yq8XHJcblx0XHRcdFx0XHRcdFx0PFBvcG92ZXIga2V5PVwibW9yZVwiIGNvbnRlbnQ9eyggLy8g642UIOuztOq4sCDrsoTtirxcclxuXHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvbi5Hcm91cD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7aWQgJiYgcG9zdC5Vc2VyLmlkID09PSBpZCA/ICggLyrrgrTqsIAg7JO0IOq4gOydtOuptCDsiJjsoJUg7IKt7KCcIOqwgOuKpSovXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvbj7siJjsoJU8L0J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uIHR5cGU9XCJkYW5nZXJcIiBsb2FkaW5nPXtyZW1vdmVQb3N0TG9hZGluZ30gb25DbGljaz17b25SZW1vdmVQb3N0fT7sgq3soJw8L0J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0KSA6IDxCdXR0b24+7Iug6rOgPC9CdXR0b24+fSB7Lyog64Ko7J20IOyTtCDquIDsnbTrqbQg7IKt7KCcIOqwgOuKpSovfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbi5Hcm91cD5cclxuXHRcdFx0XHRcdFx0XHQpfT5cclxuXHRcdFx0XHRcdFx0XHRcdDxFbGxpcHNpc091dGxpbmVkLz5cclxuXHRcdFx0XHRcdFx0XHQ8L1BvcG92ZXI+LFxyXG5cdFx0XHRcdFx0XHRdfVxyXG5cdFx0XHRcdFx0XHR0aXRsZT17cG9zdC5SZXR3ZWV0SWQgPyBgJHtwb3N0LlVzZXIubmlja25hbWV964uY7J20IOumrO2KuOycl+ydhCDtlZjshajsirXri4jri6QuYCA6IG51bGx9XHJcblx0XHRcdFx0XHRcdGV4dHJhPXtpZCAmJiA8Rm9sbG93QnV0dG9uIHBvc3Q9e3Bvc3R9Lz59IC8vIOyasOy4oSDstpTqsIDqs7XqsIQs66Gc6re47J247ZaI7J2E6rK97Jqw66eM67O07J206rKMXHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0Ly9yZXR3ZWV0IOyduCDqsr3smrAg7Lm065Oc7JWI7JeQIOy5tOuTnCDrhKPslrTso7zquLBcclxuXHRcdFx0XHRcdHtwb3N0LlJldHdlZXRJZCAmJiBwb3N0LlJldHdlZXRcclxuXHRcdFx0XHRcdD8gKFxyXG5cdFx0XHRcdFx0PENhcmRcclxuXHRcdFx0XHRcdFx0XHRjb3Zlcj17cG9zdC5SZXR3ZWV0LkltYWdlc1swXSAmJiA8UG9zdEltYWdlcyBpbWFnZXM9e3Bvc3QuUmV0d2VldC5JbWFnZXN9Lz59XHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdDxDYXJkLk1ldGFcclxuXHRcdFx0XHRcdFx0XHRcdGF2YXRhcj17PEF2YXRhcj57cG9zdC5SZXR3ZWV0LlVzZXIubmlja25hbWVbMF19PC9BdmF0YXI+fVxyXG5cdFx0XHRcdFx0XHRcdFx0dGl0bGU9e3Bvc3QuUmV0d2VldC5Vc2VyLm5pY2tuYW1lfVxyXG5cdFx0XHRcdFx0XHRcdFx0ZGVzY3JpcHRpb249ezxQb3N0Q2FyZENvbnRlbnRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwb3N0RGF0YT17cG9zdC5SZXR3ZWV0LmNvbnRlbnR9Lz59IC8vIO2KueyImO2VnCDquLDriqXsnYQg7LKY66as7ZWY64qUIOqyg+ydhCDrp4zrk6TquLAg7JyE7ZW07ISgIOuUsOuhnCDsu7Ttj6zrhIztirjroZwg67m87KO864qU6rKMIOuztOq4sCDquZTrgZTtlZjri6RcclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDwvQ2FyZD5cclxuXHRcdFx0XHRcdClcclxuXHRcdFx0XHRcdDogKFxyXG5cdFx0XHRcdFx0PENhcmQuTWV0YVxyXG5cdFx0XHRcdFx0XHRcdGF2YXRhcj17PEF2YXRhcj57cG9zdC5Vc2VyLm5pY2tuYW1lWzBdfTwvQXZhdGFyPn1cclxuXHRcdFx0XHRcdFx0XHR0aXRsZT17cG9zdC5Vc2VyLm5pY2tuYW1lfVxyXG5cdFx0XHRcdFx0XHRcdGRlc2NyaXB0aW9uPXs8UG9zdENhcmRDb250ZW50XHJcblx0XHRcdFx0XHRcdFx0XHRcdHBvc3REYXRhPXtwb3N0LmNvbnRlbnR9Lz59IC8vIO2KueyImO2VnCDquLDriqXsnYQg7LKY66as7ZWY64qUIOqyg+ydhCDrp4zrk6TquLAg7JyE7ZW07ISgIOuUsOuhnCDsu7Ttj6zrhIztirjroZwg67m87KO864qU6rKMIOuztOq4sCDquZTrgZTtlZjri6RcclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdDwvQ2FyZD5cclxuXHRcdFx0XHR7Y29tbWVudEZvcm1PcGVuZWQgJiYgKFxyXG5cdFx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxDb21tZW50Rm9ybSBwb3N0PXtwb3N0fS8+XHJcblx0XHRcdFx0XHRcdFx0PExpc3RcclxuXHRcdFx0XHRcdFx0XHRcdFx0aGVhZGVyPXtgJHtwb3N0LkNvbW1lbnRzLmxlbmd0aH3qsJzsnZgg64yT6riAYH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0aXRlbUxheW91dD1cImhvcml6b250YWxcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRkYXRhU291cmNlPXtwb3N0LkNvbW1lbnRzfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRyZW5kZXJJdGVtPXsoaXRlbSkgPT4gKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8Q29tbWVudFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YXV0aG9yPXtpdGVtLlVzZXIubmlja25hbWV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhdmF0YXI9ezxBdmF0YXI+e2l0ZW0uVXNlci5uaWNrbmFtZVswXX08L0F2YXRhcj59XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb250ZW50PXtpdGVtLmNvbnRlbnR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDwvZGl2Pil9XHJcblx0XHRcdFx0ey8qPENvbW1lbnRGb3JtIC8+XHJcblx0XHRcdFx0PENvbW1lbnRzIC8+Ki99XHJcblx0XHRcdDwvZGl2PlxyXG5cdClcclxufVxyXG5Qb3N0Q2FyZC5wcm9wVHlwZXMgPSB7XHJcblx0cG9zdDogUHJvcFR5cGVzLnNoYXBlKHtcclxuXHRcdGlkOiBQcm9wVHlwZXMubnVtYmVyLFxyXG5cdFx0VXNlcjogUHJvcFR5cGVzLm9iamVjdCxcclxuXHRcdGNvbnRlbnQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcblx0XHRjcmVhdGVkQXQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcblx0XHRDb21tZW50czogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXHJcblx0XHRJbWFnZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxyXG5cdFx0TGlrZXJzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcclxuXHRcdFJldHdlZXRJZDogUHJvcFR5cGVzLm51bWJlcixcclxuXHRcdFJldHdlZXQ6IFByb3BUeXBlcy5vYmplY3RPZihQcm9wVHlwZXMuYW55KSxcclxuXHR9KS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdENhcmQiXSwic291cmNlUm9vdCI6IiJ9