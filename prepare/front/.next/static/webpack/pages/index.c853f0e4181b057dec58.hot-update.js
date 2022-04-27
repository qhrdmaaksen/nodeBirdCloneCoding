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
      setCommentFormOpened = _useState[1]; //	const [liked, setLiked] = useState(false) front


  var onLike = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    // 좋아요 클릭
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_8__["LIKE_POST_REQUEST"],
      data: post.id // 게시글 아이디

    });
  }, []);
  var onUnLike = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    // 좋아요 해제 클릭
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_8__["UNLIKE_POST_REQUEST"],
      data: post.id // 게시글 아이디

    });
  }, []);
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
  var id = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    var _state$user$me;

    return (_state$user$me = state.user.me) === null || _state$user$me === void 0 ? void 0 : _state$user$me.id;
  }); //state.user.me && state.user.me.id

  var liked = post.Likers.find(function (v) {
    return v.id === id;
  }); // 게시글 좋아요 누른 사람중에 내가 있는지

  return __jsx("div", {
    style: {
      marginBottom: 20
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 4
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    cover: post.Images[0] && __jsx(_PostImages__WEBPACK_IMPORTED_MODULE_5__["default"], {
      images: post.Images,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 32
      }
    }) // 이미지가 한개 이상있을때 포스트 이미지스
    ,
    actions: [__jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["RetweetOutlined"], {
      key: "retweet",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
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
        lineNumber: 61,
        columnNumber: 12
      }
    }) // 하트 버튼
    : __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["HeartOutlined"], {
      key: "heart",
      onClick: onLike,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 12
      }
    }), // 하트 버튼
    __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["MessageOutlined"], {
      key: "comment",
      onClick: onToggleComment,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
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
          lineNumber: 65,
          columnNumber: 10
        }
      }, id && post.User.id === id ?
      /*내가 쓴 글이면 수정 삭제 가능*/
      __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 14
        }
      }, "\uC218\uC815"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        type: "danger",
        loading: removePostLoading,
        onClick: onRemovePost,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 14
        }
      }, "\uC0AD\uC81C")) : __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 15
        }
      }, "\uC2E0\uACE0"), " "),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 8
      }
    }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["EllipsisOutlined"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }
    }))],
    extra: id && __jsx(_FollowButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
      post: post,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 20
      }
    }) // 우측 추가공간,로그인했을경우만보이게
    ,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
    avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 16
      }
    }, post.User.nickname[0]),
    title: post.User.nickname,
    description: __jsx(_PostCardContent__WEBPACK_IMPORTED_MODULE_7__["default"], {
      postData: post.content,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 21
      }
    }) // 특수한 기능을 처리하는 것을 만들기 위해선 따로 컴포넌트로 빼주는게 보기 깔끔하다
    ,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 6
    }
  })), commentFormOpened && __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }
  }, __jsx(_CommentForm__WEBPACK_IMPORTED_MODULE_6__["default"], {
    post: post,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
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
          lineNumber: 94,
          columnNumber: 12
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Comment"], {
        author: item.User.nickname,
        avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 23
          }
        }, item.User.nickname[0]),
        content: item.content,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 13
        }
      }));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 8
    }
  })));
};

_s(PostCard, "Lk7maGIdaQyZFRgWmsNP+zz2zME=", false, function () {
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
    //Likers: PropTypes.arrayOf(PropTypes.object),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L1Bvc3RDYXJkLmpzIl0sIm5hbWVzIjpbIlBvc3RDYXJkIiwicG9zdCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwicmVtb3ZlUG9zdExvYWRpbmciLCJ1c2VTdGF0ZSIsImNvbW1lbnRGb3JtT3BlbmVkIiwic2V0Q29tbWVudEZvcm1PcGVuZWQiLCJvbkxpa2UiLCJ1c2VDYWxsYmFjayIsInR5cGUiLCJMSUtFX1BPU1RfUkVRVUVTVCIsImRhdGEiLCJpZCIsIm9uVW5MaWtlIiwiVU5MSUtFX1BPU1RfUkVRVUVTVCIsIm9uVG9nZ2xlQ29tbWVudCIsInByZXYiLCJvblJlbW92ZVBvc3QiLCJhbGVydCIsIlJFTU9WRV9QT1NUX1JFUVVFU1QiLCJ1c2VyIiwibWUiLCJsaWtlZCIsIkxpa2VycyIsImZpbmQiLCJ2IiwibWFyZ2luQm90dG9tIiwiSW1hZ2VzIiwiVXNlciIsIm5pY2tuYW1lIiwiY29udGVudCIsIkNvbW1lbnRzIiwibGVuZ3RoIiwiaXRlbSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInNoYXBlIiwibnVtYmVyIiwib2JqZWN0Iiwic3RyaW5nIiwiY3JlYXRlZEF0IiwiYXJyYXlPZiIsIlJldHdlZXRJZCIsIlJldHdlZXQiLCJvYmplY3RPZiIsImFueSIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUFZO0FBQUE7O0FBQUEsTUFBVkMsSUFBVSxRQUFWQSxJQUFVO0FBQzVCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBQ0EscUJBQTRCQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNKLElBQWpCO0FBQUEsR0FB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QjtBQUNwQnBDLE1BQUksRUFBRXFDLGlEQUFTLENBQUNDLEtBQVYsQ0FBZ0I7QUFDckJ4QixNQUFFLEVBQUV1QixpREFBUyxDQUFDRSxNQURPO0FBRXJCVCxRQUFJLEVBQUVPLGlEQUFTLENBQUNHLE1BRks7QUFHckJSLFdBQU8sRUFBRUssaURBQVMsQ0FBQ0ksTUFIRTtBQUlyQkMsYUFBUyxFQUFFTCxpREFBUyxDQUFDSSxNQUpBO0FBS3JCUixZQUFRLEVBQUVJLGlEQUFTLENBQUNNLE9BQVYsQ0FBa0JOLGlEQUFTLENBQUNHLE1BQTVCLENBTFc7QUFNckJYLFVBQU0sRUFBRVEsaURBQVMsQ0FBQ00sT0FBVixDQUFrQk4saURBQVMsQ0FBQ0csTUFBNUIsQ0FOYTtBQU9yQjtBQUNBSSxhQUFTLEVBQUVQLGlEQUFTLENBQUNFLE1BUkE7QUFTckJNLFdBQU8sRUFBRVIsaURBQVMsQ0FBQ1MsUUFBVixDQUFtQlQsaURBQVMsQ0FBQ1UsR0FBN0I7QUFUWSxHQUFoQixFQVVIQztBQVhpQixDQUFyQjtBQWNlakQsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzg1M2YwZTQxODFiMDU3ZGVjNTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUNhbGxiYWNrLCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7QXZhdGFyLCBCdXR0b24sIENhcmQsIENvbW1lbnQsIExpc3QsIFBvcG92ZXJ9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7RWxsaXBzaXNPdXRsaW5lZCwgSGVhcnRPdXRsaW5lZCwgTWVzc2FnZU91dGxpbmVkLCBSZXR3ZWV0T3V0bGluZWQsIEhlYXJ0VHdvVG9uZX0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XHJcbmltcG9ydCB7dXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5pbXBvcnQgUG9zdEltYWdlcyBmcm9tIFwiLi9Qb3N0SW1hZ2VzXCI7XHJcbmltcG9ydCBDb21tZW50Rm9ybSBmcm9tIFwiLi9Db21tZW50Rm9ybVwiO1xyXG5pbXBvcnQgUG9zdENhcmRDb250ZW50IGZyb20gXCIuL1Bvc3RDYXJkQ29udGVudFwiO1xyXG5pbXBvcnQge0xJS0VfUE9TVF9SRVFVRVNULCBSRU1PVkVfUE9TVF9SRVFVRVNULCBVTkxJS0VfUE9TVF9SRVFVRVNUfSBmcm9tIFwiLi4vcmVkdWNlcnMvcG9zdFwiO1xyXG5pbXBvcnQgRm9sbG93QnV0dG9uIGZyb20gXCIuL0ZvbGxvd0J1dHRvblwiO1xyXG5cclxuY29uc3QgUG9zdENhcmQgPSAoe3Bvc3R9KSA9PiB7XHJcblx0Y29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcblx0Y29uc3Qge3JlbW92ZVBvc3RMb2FkaW5nfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9zdClcclxuXHRjb25zdCBbY29tbWVudEZvcm1PcGVuZWQsIHNldENvbW1lbnRGb3JtT3BlbmVkXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4vL1x0Y29uc3QgW2xpa2VkLCBzZXRMaWtlZF0gPSB1c2VTdGF0ZShmYWxzZSkgZnJvbnRcclxuXHJcblxyXG5cdGNvbnN0IG9uTGlrZSA9IHVzZUNhbGxiYWNrKCgpID0+IHsgLy8g7KKL7JWE7JqUIO2BtOumrVxyXG5cdFx0ZGlzcGF0Y2goe1xyXG5cdFx0XHR0eXBlOiBMSUtFX1BPU1RfUkVRVUVTVCxcclxuXHRcdFx0ZGF0YTogcG9zdC5pZCwgLy8g6rKM7Iuc6riAIOyVhOydtOuUlFxyXG5cdFx0fSlcclxuXHR9LCBbXSlcclxuXHRjb25zdCBvblVuTGlrZSA9IHVzZUNhbGxiYWNrKCgpID0+IHsgLy8g7KKL7JWE7JqUIO2VtOygnCDtgbTrpq1cclxuXHRcdGRpc3BhdGNoKHtcclxuXHRcdFx0dHlwZTogVU5MSUtFX1BPU1RfUkVRVUVTVCxcclxuXHRcdFx0ZGF0YTogcG9zdC5pZCwgLy8g6rKM7Iuc6riAIOyVhOydtOuUlFxyXG5cdFx0fSlcclxuXHR9LCBbXSlcclxuXHJcblx0LyogZnJvbnRcclxuXHRjb25zdCBvblRvZ2dsZUxpa2UgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcblx0XHRzZXRMaWtlZCgocHJldikgPT4gIXByZXYpXHJcblx0fSwgW10pKi9cclxuXHJcblx0Y29uc3Qgb25Ub2dnbGVDb21tZW50ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG5cdFx0c2V0Q29tbWVudEZvcm1PcGVuZWQoKHByZXYpID0+ICFwcmV2KVxyXG5cdH0sIFtdKVxyXG5cclxuXHRjb25zdCBvblJlbW92ZVBvc3QgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcblx0XHRpZiAoIWlkKSB7XHJcblx0XHRcdHJldHVybiBhbGVydCgn66Gc6re47J247J20IO2VhOyalO2VqeuLiOuLpC4nKVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGRpc3BhdGNoKHtcclxuXHRcdFx0dHlwZTogUkVNT1ZFX1BPU1RfUkVRVUVTVCxcclxuXHRcdFx0ZGF0YTogcG9zdC5pZCxcclxuXHRcdH0pXHJcblx0fSwgW2lkXSlcclxuXHJcblx0Y29uc3QgaWQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIubWU/LmlkKSAvL3N0YXRlLnVzZXIubWUgJiYgc3RhdGUudXNlci5tZS5pZFxyXG5cdGNvbnN0IGxpa2VkID0gcG9zdC5MaWtlcnMuZmluZCgodik9PiB2LmlkID09PSBpZCkgLy8g6rKM7Iuc6riAIOyii+yVhOyalCDriITrpbgg7IKs656M7KSR7JeQIOuCtOqwgCDsnojripTsp4BcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdFx0PGRpdiBzdHlsZT17e21hcmdpbkJvdHRvbTogMjB9fT5cclxuXHRcdFx0XHQ8Q2FyZFxyXG5cdFx0XHRcdFx0XHRjb3Zlcj17cG9zdC5JbWFnZXNbMF0gJiYgPFBvc3RJbWFnZXMgaW1hZ2VzPXtwb3N0LkltYWdlc30vPn0gLy8g7J2066+47KeA6rCAIO2VnOqwnCDsnbTsg4HsnojsnYTrlYwg7Y+s7Iqk7Yq4IOydtOuvuOyngOyKpFxyXG5cdFx0XHRcdFx0XHRhY3Rpb25zPXtbXHJcblx0XHRcdFx0XHRcdFx0PFJldHdlZXRPdXRsaW5lZCBrZXk9XCJyZXR3ZWV0XCIvPiwgLy8g66as7Yq47JyXIOuyhO2KvFxyXG5cdFx0XHRcdFx0XHRcdGxpa2VkXHJcblx0XHRcdFx0XHRcdFx0XHRcdD8gPEhlYXJ0VHdvVG9uZSB0d29Ub25lQ29sb3I9XCIjZWIyZjk2XCIga2V5PVwiaGVhcnRcIiBvbkNsaWNrPXtvblVuTGlrZX0vPiAvLyDtlZjtirgg67KE7Yq8XHJcblx0XHRcdFx0XHRcdFx0XHRcdDogPEhlYXJ0T3V0bGluZWQga2V5PVwiaGVhcnRcIiBvbkNsaWNrPXtvbkxpa2V9Lz4sIC8vIO2VmO2KuCDrsoTtirxcclxuXHRcdFx0XHRcdFx0XHQ8TWVzc2FnZU91dGxpbmVkIGtleT1cImNvbW1lbnRcIiBvbkNsaWNrPXtvblRvZ2dsZUNvbW1lbnR9Lz4sIC8vIOuMk+q4gCDrsoTtirxcclxuXHRcdFx0XHRcdFx0XHQ8UG9wb3ZlciBrZXk9XCJtb3JlXCIgY29udGVudD17KCAvLyDrjZQg67O06riwIOuyhO2KvFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uLkdyb3VwPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtpZCAmJiBwb3N0LlVzZXIuaWQgPT09IGlkID8gKCAvKuuCtOqwgCDsk7Qg6riA7J2066m0IOyImOyglSDsgq3soJwg6rCA64qlKi9cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uPuyImOyglTwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b24gdHlwZT1cImRhbmdlclwiIGxvYWRpbmc9e3JlbW92ZVBvc3RMb2FkaW5nfSBvbkNsaWNrPXtvblJlbW92ZVBvc3R9PuyCreygnDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpIDogPEJ1dHRvbj7si6Dqs6A8L0J1dHRvbj59IHsvKiDrgqjsnbQg7JO0IOq4gOydtOuptCDsgq3soJwg6rCA64qlKi99XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uLkdyb3VwPlxyXG5cdFx0XHRcdFx0XHRcdCl9PlxyXG5cdFx0XHRcdFx0XHRcdFx0PEVsbGlwc2lzT3V0bGluZWQvPlxyXG5cdFx0XHRcdFx0XHRcdDwvUG9wb3Zlcj4sXHJcblx0XHRcdFx0XHRcdF19XHJcblx0XHRcdFx0XHRcdGV4dHJhPXtpZCAmJiA8Rm9sbG93QnV0dG9uIHBvc3Q9e3Bvc3R9Lz59IC8vIOyasOy4oSDstpTqsIDqs7XqsIQs66Gc6re47J247ZaI7J2E6rK97Jqw66eM67O07J206rKMXHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0PENhcmQuTWV0YVxyXG5cdFx0XHRcdFx0XHRcdGF2YXRhcj17PEF2YXRhcj57cG9zdC5Vc2VyLm5pY2tuYW1lWzBdfTwvQXZhdGFyPn1cclxuXHRcdFx0XHRcdFx0XHR0aXRsZT17cG9zdC5Vc2VyLm5pY2tuYW1lfVxyXG5cdFx0XHRcdFx0XHRcdGRlc2NyaXB0aW9uPXs8UG9zdENhcmRDb250ZW50XHJcblx0XHRcdFx0XHRcdFx0XHRcdHBvc3REYXRhPXtwb3N0LmNvbnRlbnR9Lz59IC8vIO2KueyImO2VnCDquLDriqXsnYQg7LKY66as7ZWY64qUIOqyg+ydhCDrp4zrk6TquLAg7JyE7ZW07ISgIOuUsOuhnCDsu7Ttj6zrhIztirjroZwg67m87KO864qU6rKMIOuztOq4sCDquZTrgZTtlZjri6RcclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9DYXJkPlxyXG5cdFx0XHRcdHtjb21tZW50Rm9ybU9wZW5lZCAmJiAoXHJcblx0XHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdFx0PENvbW1lbnRGb3JtIHBvc3Q9e3Bvc3R9Lz5cclxuXHRcdFx0XHRcdFx0XHQ8TGlzdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRoZWFkZXI9e2Ake3Bvc3QuQ29tbWVudHMubGVuZ3RofeqwnOydmCDrjJPquIBgfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRpdGVtTGF5b3V0PVwiaG9yaXpvbnRhbFwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdGRhdGFTb3VyY2U9e3Bvc3QuQ29tbWVudHN9XHJcblx0XHRcdFx0XHRcdFx0XHRcdHJlbmRlckl0ZW09eyhpdGVtKSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGk+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxDb21tZW50XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhdXRob3I9e2l0ZW0uVXNlci5uaWNrbmFtZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGF2YXRhcj17PEF2YXRhcj57aXRlbS5Vc2VyLm5pY2tuYW1lWzBdfTwvQXZhdGFyPn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnRlbnQ9e2l0ZW0uY29udGVudH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+KX1cclxuXHRcdFx0XHR7Lyo8Q29tbWVudEZvcm0gLz5cclxuXHRcdFx0XHQ8Q29tbWVudHMgLz4qL31cclxuXHRcdFx0PC9kaXY+XHJcblx0KVxyXG59XHJcblBvc3RDYXJkLnByb3BUeXBlcyA9IHtcclxuXHRwb3N0OiBQcm9wVHlwZXMuc2hhcGUoe1xyXG5cdFx0aWQ6IFByb3BUeXBlcy5udW1iZXIsXHJcblx0XHRVc2VyOiBQcm9wVHlwZXMub2JqZWN0LFxyXG5cdFx0Y29udGVudDogUHJvcFR5cGVzLnN0cmluZyxcclxuXHRcdGNyZWF0ZWRBdDogUHJvcFR5cGVzLnN0cmluZyxcclxuXHRcdENvbW1lbnRzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcclxuXHRcdEltYWdlczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXHJcblx0XHQvL0xpa2VyczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXHJcblx0XHRSZXR3ZWV0SWQ6IFByb3BUeXBlcy5udW1iZXIsXHJcblx0XHRSZXR3ZWV0OiBQcm9wVHlwZXMub2JqZWN0T2YoUHJvcFR5cGVzLmFueSksXHJcblx0fSkuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RDYXJkIl0sInNvdXJjZVJvb3QiOiIifQ==