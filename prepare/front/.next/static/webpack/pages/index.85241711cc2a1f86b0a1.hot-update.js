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
      removePostLoading = _useSelector.removePostLoading,
      retweetError = _useSelector.retweetError;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      commentFormOpened = _useState[0],
      setCommentFormOpened = _useState[1];

  var id = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    var _state$user$me;

    return (_state$user$me = state.user.me) === null || _state$user$me === void 0 ? void 0 : _state$user$me.id;
  }); //state.user.me && state.user.me.id
  //	const [liked, setLiked] = useState(false) front
  // useEffect(() => { // retweet 실패 시 alert 출력
  // 	if (retweetError) {
  // 		alert(retweetError)
  // 	}
  // }, [retweetError])

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
      lineNumber: 81,
      columnNumber: 4
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    cover: post.Images[0] && __jsx(_PostImages__WEBPACK_IMPORTED_MODULE_5__["default"], {
      images: post.Images,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
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
        lineNumber: 85,
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
        lineNumber: 87,
        columnNumber: 12
      }
    }) // 하트 버튼
    : __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["HeartOutlined"], {
      key: "heart",
      onClick: onLike,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 12
      }
    }), // 하트 버튼
    __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["MessageOutlined"], {
      key: "comment",
      onClick: onToggleComment,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
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
          lineNumber: 91,
          columnNumber: 10
        }
      }, id && post.User.id === id ?
      /*내가 쓴 글이면 수정 삭제 가능*/
      __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 14
        }
      }, "\uC218\uC815"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        type: "danger",
        loading: removePostLoading,
        onClick: onRemovePost,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 14
        }
      }, "\uC0AD\uC81C")) : __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 15
        }
      }, "\uC2E0\uACE0"), " "),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 8
      }
    }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["EllipsisOutlined"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 9
      }
    }))],
    title: post.RetweetId ? "".concat(post.User.nickname, "\uB2D8\uC774 \uB9AC\uD2B8\uC717\uC744 \uD558\uC168\uC2B5\uB2C8\uB2E4.") : null,
    extra: id && __jsx(_FollowButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
      post: post,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 20
      }
    }) // 우측 추가공간,로그인했을경우만보이게
    ,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 5
    }
  }, "//retweet \uC778 \uACBD\uC6B0 \uCE74\uB4DC\uC548\uC5D0 \uCE74\uB4DC \uB123\uC5B4\uC8FC\uAE30", post.RetweetId && post.Retweet ? __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    cover: post.Retweet.Images[0] && __jsx(_PostImages__WEBPACK_IMPORTED_MODULE_5__["default"], {
      images: post.Retweet.Images,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 41
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 6
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
    avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 17
      }
    }, post.Retweet.User.nickname[0]),
    title: post.Retweet.User.nickname,
    description: __jsx(_PostCardContent__WEBPACK_IMPORTED_MODULE_7__["default"], {
      postData: post.Retweet.content,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 22
      }
    }) // 특수한 기능을 처리하는 것을 만들기 위해선 따로 컴포넌트로 빼주는게 보기 깔끔하다
    ,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 7
    }
  })) : __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
    avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 16
      }
    }, post.User.nickname[0]),
    title: post.User.nickname,
    description: __jsx(_PostCardContent__WEBPACK_IMPORTED_MODULE_7__["default"], {
      postData: post.content,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 21
      }
    }) // 특수한 기능을 처리하는 것을 만들기 위해선 따로 컴포넌트로 빼주는게 보기 깔끔하다
    ,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 6
    }
  })), commentFormOpened && __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 7
    }
  }, __jsx(_CommentForm__WEBPACK_IMPORTED_MODULE_6__["default"], {
    post: post,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
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
          lineNumber: 137,
          columnNumber: 12
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Comment"], {
        author: item.User.nickname,
        avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 23
          }
        }, item.User.nickname[0]),
        content: item.content,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 13
        }
      }));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 8
    }
  })));
};

_s(PostCard, "PeTNdvU+mbB8N7AIWmZMl+urqEw=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L1Bvc3RDYXJkLmpzIl0sIm5hbWVzIjpbIlBvc3RDYXJkIiwicG9zdCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwicmVtb3ZlUG9zdExvYWRpbmciLCJyZXR3ZWV0RXJyb3IiLCJ1c2VTdGF0ZSIsImNvbW1lbnRGb3JtT3BlbmVkIiwic2V0Q29tbWVudEZvcm1PcGVuZWQiLCJpZCIsInVzZXIiLCJtZSIsIm9uTGlrZSIsInVzZUNhbGxiYWNrIiwiYWxlcnQiLCJ0eXBlIiwiTElLRV9QT1NUX1JFUVVFU1QiLCJkYXRhIiwib25Vbkxpa2UiLCJVTkxJS0VfUE9TVF9SRVFVRVNUIiwib25Ub2dnbGVDb21tZW50IiwicHJldiIsIm9uUmVtb3ZlUG9zdCIsIlJFTU9WRV9QT1NUX1JFUVVFU1QiLCJsaWtlZCIsIkxpa2VycyIsImZpbmQiLCJ2Iiwib25SZXR3ZWV0IiwiUkVUV0VFVF9SRVFVRVNUIiwibWFyZ2luQm90dG9tIiwiSW1hZ2VzIiwiVXNlciIsIlJldHdlZXRJZCIsIm5pY2tuYW1lIiwiUmV0d2VldCIsImNvbnRlbnQiLCJDb21tZW50cyIsImxlbmd0aCIsIml0ZW0iLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzaGFwZSIsIm51bWJlciIsIm9iamVjdCIsInN0cmluZyIsImNyZWF0ZWRBdCIsImFycmF5T2YiLCJvYmplY3RPZiIsImFueSIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUFZO0FBQUE7O0FBQUEsTUFBVkMsSUFBVSxRQUFWQSxJQUFVO0FBQzVCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBQ0EscUJBQTBDQywrREFBVyxDQUFDLFVB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NDE3MTFjYzJhMWY4NmIwYTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtBdmF0YXIsIEJ1dHRvbiwgQ2FyZCwgQ29tbWVudCwgTGlzdCwgUG9wb3Zlcn0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHtFbGxpcHNpc091dGxpbmVkLCBIZWFydE91dGxpbmVkLCBNZXNzYWdlT3V0bGluZWQsIFJldHdlZXRPdXRsaW5lZCwgSGVhcnRUd29Ub25lfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuaW1wb3J0IHt1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3J9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXHJcbmltcG9ydCBQb3N0SW1hZ2VzIGZyb20gXCIuL1Bvc3RJbWFnZXNcIjtcclxuaW1wb3J0IENvbW1lbnRGb3JtIGZyb20gXCIuL0NvbW1lbnRGb3JtXCI7XHJcbmltcG9ydCBQb3N0Q2FyZENvbnRlbnQgZnJvbSBcIi4vUG9zdENhcmRDb250ZW50XCI7XHJcbmltcG9ydCB7TElLRV9QT1NUX1JFUVVFU1QsIFJFTU9WRV9QT1NUX1JFUVVFU1QsIFVOTElLRV9QT1NUX1JFUVVFU1QsIFJFVFdFRVRfUkVRVUVTVH0gZnJvbSBcIi4uL3JlZHVjZXJzL3Bvc3RcIjtcclxuaW1wb3J0IEZvbGxvd0J1dHRvbiBmcm9tIFwiLi9Gb2xsb3dCdXR0b25cIjtcclxuXHJcblxyXG5jb25zdCBQb3N0Q2FyZCA9ICh7cG9zdH0pID0+IHtcclxuXHRjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuXHRjb25zdCB7cmVtb3ZlUG9zdExvYWRpbmcsIHJldHdlZXRFcnJvcn0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBvc3QpXHJcblx0Y29uc3QgW2NvbW1lbnRGb3JtT3BlbmVkLCBzZXRDb21tZW50Rm9ybU9wZW5lZF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHRjb25zdCBpZCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlci5tZT8uaWQpIC8vc3RhdGUudXNlci5tZSAmJiBzdGF0ZS51c2VyLm1lLmlkXHJcbi8vXHRjb25zdCBbbGlrZWQsIHNldExpa2VkXSA9IHVzZVN0YXRlKGZhbHNlKSBmcm9udFxyXG5cclxuXHQvLyB1c2VFZmZlY3QoKCkgPT4geyAvLyByZXR3ZWV0IOyLpO2MqCDsi5wgYWxlcnQg7Lac66ClXHJcblx0Ly8gXHRpZiAocmV0d2VldEVycm9yKSB7XHJcblx0Ly8gXHRcdGFsZXJ0KHJldHdlZXRFcnJvcilcclxuXHQvLyBcdH1cclxuXHQvLyB9LCBbcmV0d2VldEVycm9yXSlcclxuXHJcblx0Y29uc3Qgb25MaWtlID0gdXNlQ2FsbGJhY2soKCkgPT4geyAvLyDsoovslYTsmpQg7YG066atXHJcblx0XHRpZiAoIWlkKSB7IC8vIOuhnOq3uOyduOydtCDslYjrkJjslrTsnojri6TrqbQg67CU66Gc67CU66GcIOunieyVhOyjvOuKlOqyjCDsoovri6RcclxuXHRcdFx0YWxlcnQoJ+uhnOq3uOyduOydtCDtlYTsmpTtlanri4jri6QhJylcclxuXHRcdH1cclxuXHRcdHJldHVybiBkaXNwYXRjaCh7XHJcblx0XHRcdHR5cGU6IExJS0VfUE9TVF9SRVFVRVNULFxyXG5cdFx0XHRkYXRhOiBwb3N0LmlkLCAvLyDqsozsi5zquIAg7JWE7J2065SUXHJcblx0XHR9KVxyXG5cdH0sIFtpZF0pXHJcblx0Y29uc3Qgb25Vbkxpa2UgPSB1c2VDYWxsYmFjaygoKSA9PiB7IC8vIOyii+yVhOyalCDtlbTsoJwg7YG066atXHJcblx0XHRpZiAoIWlkKSB7IC8vIOuhnOq3uOyduOydtCDslYjrkJjslrTsnojri6TrqbQg67CU66Gc67CU66GcIOunieyVhOyjvOuKlOqyjCDsoovri6RcclxuXHRcdFx0YWxlcnQoJ+uhnOq3uOyduOydtCDtlYTsmpTtlanri4jri6QhJylcclxuXHRcdH1cclxuXHRcdHJldHVybiBkaXNwYXRjaCh7XHJcblx0XHRcdHR5cGU6IFVOTElLRV9QT1NUX1JFUVVFU1QsXHJcblx0XHRcdGRhdGE6IHBvc3QuaWQsIC8vIOqyjOyLnOq4gCDslYTsnbTrlJRcclxuXHRcdH0pXHJcblx0fSwgW2lkXSlcclxuXHJcblx0LyogZnJvbnRcclxuXHRjb25zdCBvblRvZ2dsZUxpa2UgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcblx0XHRzZXRMaWtlZCgocHJldikgPT4gIXByZXYpXHJcblx0fSwgW10pKi9cclxuXHJcblx0Y29uc3Qgb25Ub2dnbGVDb21tZW50ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG5cdFx0c2V0Q29tbWVudEZvcm1PcGVuZWQoKHByZXYpID0+ICFwcmV2KVxyXG5cdH0sIFtdKVxyXG5cclxuXHRjb25zdCBvblJlbW92ZVBvc3QgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcblx0XHRpZiAoIWlkKSB7XHJcblx0XHRcdHJldHVybiBhbGVydCgn66Gc6re47J247J20IO2VhOyalO2VqeuLiOuLpC4nKVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGRpc3BhdGNoKHtcclxuXHRcdFx0dHlwZTogUkVNT1ZFX1BPU1RfUkVRVUVTVCxcclxuXHRcdFx0ZGF0YTogcG9zdC5pZCxcclxuXHRcdH0pXHJcblx0fSwgW2lkXSlcclxuXHJcblx0Y29uc3QgbGlrZWQgPSBwb3N0Lkxpa2Vycy5maW5kKCh2KSA9PiB2LmlkID09PSBpZCkgLy8g6rKM7Iuc6riAIOyii+yVhOyalCDriITrpbgg7IKs656M7KSR7JeQIOuCtOqwgCDsnojripTsp4BcclxuXHJcblx0Y29uc3Qgb25SZXR3ZWV0ID0gdXNlQ2FsbGJhY2soXHJcblx0XHRcdCgpID0+IHtcclxuXHRcdFx0XHRpZiAoIWlkKSB7IC8vIOuhnOq3uOyduOydtCDslYjrkJjslrTsnojri6TrqbQg67CU66Gc67CU66GcIOunieyVhOyjvOuKlOqyjCDsoovri6RcclxuXHRcdFx0XHRcdGFsZXJ0KCfroZzqt7jsnbjsnbQg7ZWE7JqU7ZWp64uI64ukIScpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHJldHVybiBkaXNwYXRjaCh7XHJcblx0XHRcdFx0XHR0eXBlOiBSRVRXRUVUX1JFUVVFU1QsXHJcblx0XHRcdFx0XHRkYXRhOiBwb3N0LmlkLFxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdFtpZF0sXHJcblx0KTtcclxuXHJcblxyXG5cdHJldHVybiAoXHJcblx0XHRcdDxkaXYgc3R5bGU9e3ttYXJnaW5Cb3R0b206IDIwfX0+XHJcblx0XHRcdFx0PENhcmRcclxuXHRcdFx0XHRcdFx0Y292ZXI9e3Bvc3QuSW1hZ2VzWzBdICYmIDxQb3N0SW1hZ2VzIGltYWdlcz17cG9zdC5JbWFnZXN9Lz59IC8vIOydtOuvuOyngOqwgCDtlZzqsJwg7J207IOB7J6I7J2E65WMIO2PrOyKpO2KuCDsnbTrr7jsp4DsiqRcclxuXHRcdFx0XHRcdFx0YWN0aW9ucz17W1xyXG5cdFx0XHRcdFx0XHRcdDxSZXR3ZWV0T3V0bGluZWQga2V5PVwicmV0d2VldFwiIG9uQ2xpY2s9e29uUmV0d2VldH0vPiwgLy8g66as7Yq47JyXIOuyhO2KvFxyXG5cdFx0XHRcdFx0XHRcdGxpa2VkXHJcblx0XHRcdFx0XHRcdFx0XHRcdD8gPEhlYXJ0VHdvVG9uZSB0d29Ub25lQ29sb3I9XCIjZWIyZjk2XCIga2V5PVwiaGVhcnRcIiBvbkNsaWNrPXtvblVuTGlrZX0vPiAvLyDtlZjtirgg67KE7Yq8XHJcblx0XHRcdFx0XHRcdFx0XHRcdDogPEhlYXJ0T3V0bGluZWQga2V5PVwiaGVhcnRcIiBvbkNsaWNrPXtvbkxpa2V9Lz4sIC8vIO2VmO2KuCDrsoTtirxcclxuXHRcdFx0XHRcdFx0XHQ8TWVzc2FnZU91dGxpbmVkIGtleT1cImNvbW1lbnRcIiBvbkNsaWNrPXtvblRvZ2dsZUNvbW1lbnR9Lz4sIC8vIOuMk+q4gCDrsoTtirxcclxuXHRcdFx0XHRcdFx0XHQ8UG9wb3ZlciBrZXk9XCJtb3JlXCIgY29udGVudD17KCAvLyDrjZQg67O06riwIOuyhO2KvFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uLkdyb3VwPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtpZCAmJiBwb3N0LlVzZXIuaWQgPT09IGlkID8gKCAvKuuCtOqwgCDsk7Qg6riA7J2066m0IOyImOyglSDsgq3soJwg6rCA64qlKi9cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uPuyImOyglTwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b24gdHlwZT1cImRhbmdlclwiIGxvYWRpbmc9e3JlbW92ZVBvc3RMb2FkaW5nfSBvbkNsaWNrPXtvblJlbW92ZVBvc3R9PuyCreygnDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpIDogPEJ1dHRvbj7si6Dqs6A8L0J1dHRvbj59IHsvKiDrgqjsnbQg7JO0IOq4gOydtOuptCDsgq3soJwg6rCA64qlKi99XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uLkdyb3VwPlxyXG5cdFx0XHRcdFx0XHRcdCl9PlxyXG5cdFx0XHRcdFx0XHRcdFx0PEVsbGlwc2lzT3V0bGluZWQvPlxyXG5cdFx0XHRcdFx0XHRcdDwvUG9wb3Zlcj4sXHJcblx0XHRcdFx0XHRcdF19XHJcblx0XHRcdFx0XHRcdHRpdGxlPXtwb3N0LlJldHdlZXRJZCA/IGAke3Bvc3QuVXNlci5uaWNrbmFtZX3ri5jsnbQg66as7Yq47JyX7J2EIO2VmOyFqOyKteuLiOuLpC5gIDogbnVsbH1cclxuXHRcdFx0XHRcdFx0ZXh0cmE9e2lkICYmIDxGb2xsb3dCdXR0b24gcG9zdD17cG9zdH0vPn0gLy8g7Jqw7LihIOy2lOqwgOqzteqwhCzroZzqt7jsnbjtlojsnYTqsr3smrDrp4zrs7TsnbTqsoxcclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQvL3JldHdlZXQg7J24IOqyveyasCDsubTrk5zslYjsl5Ag7Lm065OcIOuEo+yWtOyjvOq4sFxyXG5cdFx0XHRcdFx0e3Bvc3QuUmV0d2VldElkICYmIHBvc3QuUmV0d2VldFxyXG5cdFx0XHRcdFx0PyAoXHJcblx0XHRcdFx0XHQ8Q2FyZFxyXG5cdFx0XHRcdFx0XHRcdGNvdmVyPXtwb3N0LlJldHdlZXQuSW1hZ2VzWzBdICYmIDxQb3N0SW1hZ2VzIGltYWdlcz17cG9zdC5SZXR3ZWV0LkltYWdlc30vPn1cclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0PENhcmQuTWV0YVxyXG5cdFx0XHRcdFx0XHRcdFx0YXZhdGFyPXs8QXZhdGFyPntwb3N0LlJldHdlZXQuVXNlci5uaWNrbmFtZVswXX08L0F2YXRhcj59XHJcblx0XHRcdFx0XHRcdFx0XHR0aXRsZT17cG9zdC5SZXR3ZWV0LlVzZXIubmlja25hbWV9XHJcblx0XHRcdFx0XHRcdFx0XHRkZXNjcmlwdGlvbj17PFBvc3RDYXJkQ29udGVudFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHBvc3REYXRhPXtwb3N0LlJldHdlZXQuY29udGVudH0vPn0gLy8g7Yq57IiY7ZWcIOq4sOuKpeydhCDsspjrpqztlZjripQg6rKD7J2EIOunjOuTpOq4sCDsnITtlbTshKAg65Sw66GcIOy7tO2PrOuEjO2KuOuhnCDrubzso7zripTqsowg67O06riwIOq5lOuBlO2VmOuLpFxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PC9DYXJkPlxyXG5cdFx0XHRcdFx0KVxyXG5cdFx0XHRcdFx0OiAoXHJcblx0XHRcdFx0XHQ8Q2FyZC5NZXRhXHJcblx0XHRcdFx0XHRcdFx0YXZhdGFyPXs8QXZhdGFyPntwb3N0LlVzZXIubmlja25hbWVbMF19PC9BdmF0YXI+fVxyXG5cdFx0XHRcdFx0XHRcdHRpdGxlPXtwb3N0LlVzZXIubmlja25hbWV9XHJcblx0XHRcdFx0XHRcdFx0ZGVzY3JpcHRpb249ezxQb3N0Q2FyZENvbnRlbnRcclxuXHRcdFx0XHRcdFx0XHRcdFx0cG9zdERhdGE9e3Bvc3QuY29udGVudH0vPn0gLy8g7Yq57IiY7ZWcIOq4sOuKpeydhCDsspjrpqztlZjripQg6rKD7J2EIOunjOuTpOq4sCDsnITtlbTshKAg65Sw66GcIOy7tO2PrOuEjO2KuOuhnCDrubzso7zripTqsowg67O06riwIOq5lOuBlO2VmOuLpFxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0PC9DYXJkPlxyXG5cdFx0XHRcdHtjb21tZW50Rm9ybU9wZW5lZCAmJiAoXHJcblx0XHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdFx0PENvbW1lbnRGb3JtIHBvc3Q9e3Bvc3R9Lz5cclxuXHRcdFx0XHRcdFx0XHQ8TGlzdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRoZWFkZXI9e2Ake3Bvc3QuQ29tbWVudHMubGVuZ3RofeqwnOydmCDrjJPquIBgfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRpdGVtTGF5b3V0PVwiaG9yaXpvbnRhbFwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdGRhdGFTb3VyY2U9e3Bvc3QuQ29tbWVudHN9XHJcblx0XHRcdFx0XHRcdFx0XHRcdHJlbmRlckl0ZW09eyhpdGVtKSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGk+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxDb21tZW50XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhdXRob3I9e2l0ZW0uVXNlci5uaWNrbmFtZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGF2YXRhcj17PEF2YXRhcj57aXRlbS5Vc2VyLm5pY2tuYW1lWzBdfTwvQXZhdGFyPn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnRlbnQ9e2l0ZW0uY29udGVudH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+KX1cclxuXHRcdFx0XHR7Lyo8Q29tbWVudEZvcm0gLz5cclxuXHRcdFx0XHQ8Q29tbWVudHMgLz4qL31cclxuXHRcdFx0PC9kaXY+XHJcblx0KVxyXG59XHJcblBvc3RDYXJkLnByb3BUeXBlcyA9IHtcclxuXHRwb3N0OiBQcm9wVHlwZXMuc2hhcGUoe1xyXG5cdFx0aWQ6IFByb3BUeXBlcy5udW1iZXIsXHJcblx0XHRVc2VyOiBQcm9wVHlwZXMub2JqZWN0LFxyXG5cdFx0Y29udGVudDogUHJvcFR5cGVzLnN0cmluZyxcclxuXHRcdGNyZWF0ZWRBdDogUHJvcFR5cGVzLnN0cmluZyxcclxuXHRcdENvbW1lbnRzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcclxuXHRcdEltYWdlczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXHJcblx0XHRMaWtlcnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxyXG5cdFx0UmV0d2VldElkOiBQcm9wVHlwZXMubnVtYmVyLFxyXG5cdFx0UmV0d2VldDogUHJvcFR5cGVzLm9iamVjdE9mKFByb3BUeXBlcy5hbnkpLFxyXG5cdH0pLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Q2FyZCJdLCJzb3VyY2VSb290IjoiIn0=