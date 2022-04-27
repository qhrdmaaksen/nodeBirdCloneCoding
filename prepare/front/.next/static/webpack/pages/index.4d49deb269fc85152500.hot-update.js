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
    dispatch({
      type: LIKE_POST_REQUEST,
      data: post.id // 게시글 아이디

    });
  }, []);
  var onUnLike = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    // 좋아요 해제 클릭
    dispatch({
      type: UNLIKE_POST_REQUEST,
      data: post.id // 게시글 아이디

    });
  }, []);
  var onToggleLike = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setLiked(function (prev) {
      return !prev;
    });
  }, []);
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
  return __jsx("div", {
    style: {
      marginBottom: 20
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 4
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    cover: post.Images[0] && __jsx(_PostImages__WEBPACK_IMPORTED_MODULE_5__["default"], {
      images: post.Images,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 32
      }
    }) // 이미지가 한개 이상있을때 포스트 이미지스
    ,
    actions: [__jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["RetweetOutlined"], {
      key: "retweet",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
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
        lineNumber: 59,
        columnNumber: 12
      }
    }) // 하트 버튼
    : __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["HeartOutlined"], {
      key: "heart",
      onClick: onLike,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 12
      }
    }), // 하트 버튼
    __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["MessageOutlined"], {
      key: "comment",
      onClick: onToggleComment,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
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
          lineNumber: 63,
          columnNumber: 10
        }
      }, id && post.User.id === id ?
      /*내가 쓴 글이면 수정 삭제 가능*/
      __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 14
        }
      }, "\uC218\uC815"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        type: "danger",
        loading: removePostLoading,
        onClick: onRemovePost,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 14
        }
      }, "\uC0AD\uC81C")) : __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 15
        }
      }, "\uC2E0\uACE0"), " "),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 8
      }
    }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["EllipsisOutlined"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }
    }))],
    extra: id && __jsx(_FollowButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
      post: post,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 20
      }
    }) // 우측 추가공간,로그인했을경우만보이게
    ,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
    avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 16
      }
    }, post.User.nickname[0]),
    title: post.User.nickname,
    description: __jsx(_PostCardContent__WEBPACK_IMPORTED_MODULE_7__["default"], {
      postData: post.content,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 21
      }
    }) // 특수한 기능을 처리하는 것을 만들기 위해선 따로 컴포넌트로 빼주는게 보기 깔끔하다
    ,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 6
    }
  })), commentFormOpened && __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }
  }, __jsx(_CommentForm__WEBPACK_IMPORTED_MODULE_6__["default"], {
    post: post,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
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
          lineNumber: 92,
          columnNumber: 12
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Comment"], {
        author: item.User.nickname,
        avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 23
          }
        }, item.User.nickname[0]),
        content: item.content,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 13
        }
      }));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 8
    }
  })));
};

_s(PostCard, "/k1b9x4z8Zib5fNEQiMbLn6cbgI=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L1Bvc3RDYXJkLmpzIl0sIm5hbWVzIjpbIlBvc3RDYXJkIiwicG9zdCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwicmVtb3ZlUG9zdExvYWRpbmciLCJ1c2VTdGF0ZSIsImNvbW1lbnRGb3JtT3BlbmVkIiwic2V0Q29tbWVudEZvcm1PcGVuZWQiLCJpZCIsInVzZXIiLCJtZSIsIm9uTGlrZSIsInVzZUNhbGxiYWNrIiwidHlwZSIsIkxJS0VfUE9TVF9SRVFVRVNUIiwiZGF0YSIsIm9uVW5MaWtlIiwiVU5MSUtFX1BPU1RfUkVRVUVTVCIsIm9uVG9nZ2xlTGlrZSIsInNldExpa2VkIiwicHJldiIsIm9uVG9nZ2xlQ29tbWVudCIsIm9uUmVtb3ZlUG9zdCIsImFsZXJ0IiwiUkVNT1ZFX1BPU1RfUkVRVUVTVCIsIm1hcmdpbkJvdHRvbSIsIkltYWdlcyIsImxpa2VkIiwiVXNlciIsIm5pY2tuYW1lIiwiY29udGVudCIsIkNvbW1lbnRzIiwibGVuZ3RoIiwiaXRlbSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInNoYXBlIiwibnVtYmVyIiwib2JqZWN0Iiwic3RyaW5nIiwiY3JlYXRlZEF0IiwiYXJyYXlPZiIsIlJldHdlZXRJZCIsIlJldHdlZXQiLCJvYmplY3RPZiIsImFueSIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUFZO0FBQUE7O0FBQUEsTUFBVkMsSUFBVSxRQUFWQSxJQUFVO0FBQzVCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBQ0EscUJBQTRCQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNKLElBQWpCO0FB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Q0MsS0FBVixDQUFnQjtBQUNyQjVCLE1BQUUsRUFBRTJCLGlEQUFTLENBQUNFLE1BRE87QUFFckJULFFBQUksRUFBRU8saURBQVMsQ0FBQ0csTUFGSztBQUdyQlIsV0FBTyxFQUFFSyxpREFBUyxDQUFDSSxNQUhFO0FBSXJCQyxhQUFTLEVBQUVMLGlEQUFTLENBQUNJLE1BSkE7QUFLckJSLFlBQVEsRUFBRUksaURBQVMsQ0FBQ00sT0FBVixDQUFrQk4saURBQVMsQ0FBQ0csTUFBNUIsQ0FMVztBQU1yQlosVUFBTSxFQUFFUyxpREFBUyxDQUFDTSxPQUFWLENBQWtCTixpREFBUyxDQUFDRyxNQUE1QixDQU5hO0FBT3JCO0FBQ0FJLGFBQVMsRUFBRVAsaURBQVMsQ0FBQ0UsTUFSQTtBQVNyQk0sV0FBTyxFQUFFUixpREFBUyxDQUFDUyxRQUFWLENBQW1CVCxpREFBUyxDQUFDVSxHQUE3QjtBQVRZLEdBQWhCLEVBVUhDO0FBWGlCLENBQXJCO0FBY2VoRCx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40ZDQ5ZGViMjY5ZmM4NTE1MjUwMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlQ2FsbGJhY2ssIHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtBdmF0YXIsIEJ1dHRvbiwgQ2FyZCwgQ29tbWVudCwgTGlzdCwgUG9wb3Zlcn0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHtFbGxpcHNpc091dGxpbmVkLCBIZWFydE91dGxpbmVkLCBNZXNzYWdlT3V0bGluZWQsIFJldHdlZXRPdXRsaW5lZCwgSGVhcnRUd29Ub25lfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuaW1wb3J0IHt1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3J9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXHJcbmltcG9ydCBQb3N0SW1hZ2VzIGZyb20gXCIuL1Bvc3RJbWFnZXNcIjtcclxuaW1wb3J0IENvbW1lbnRGb3JtIGZyb20gXCIuL0NvbW1lbnRGb3JtXCI7XHJcbmltcG9ydCBQb3N0Q2FyZENvbnRlbnQgZnJvbSBcIi4vUG9zdENhcmRDb250ZW50XCI7XHJcbmltcG9ydCB7UkVNT1ZFX1BPU1RfUkVRVUVTVH0gZnJvbSBcIi4uL3JlZHVjZXJzL3Bvc3RcIjtcclxuaW1wb3J0IEZvbGxvd0J1dHRvbiBmcm9tIFwiLi9Gb2xsb3dCdXR0b25cIjtcclxuXHJcbmNvbnN0IFBvc3RDYXJkID0gKHtwb3N0fSkgPT4ge1xyXG5cdGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG5cdGNvbnN0IHtyZW1vdmVQb3N0TG9hZGluZ30gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBvc3QpXHJcblx0Y29uc3QgW2NvbW1lbnRGb3JtT3BlbmVkLCBzZXRDb21tZW50Rm9ybU9wZW5lZF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHRjb25zdCBpZCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlci5tZT8uaWQpIC8vc3RhdGUudXNlci5tZSAmJiBzdGF0ZS51c2VyLm1lLmlkXHJcbi8vXHRjb25zdCBbbGlrZWQsIHNldExpa2VkXSA9IHVzZVN0YXRlKGZhbHNlKSBmcm9udFxyXG5cclxuXHJcblx0Y29uc3Qgb25MaWtlID0gdXNlQ2FsbGJhY2soKCkgPT4geyAvLyDsoovslYTsmpQg7YG066atXHJcblx0XHRkaXNwYXRjaCh7XHJcblx0XHRcdHR5cGU6IExJS0VfUE9TVF9SRVFVRVNULFxyXG5cdFx0XHRkYXRhOiBwb3N0LmlkLCAvLyDqsozsi5zquIAg7JWE7J2065SUXHJcblx0XHR9KVxyXG5cdH0sIFtdKVxyXG5cdGNvbnN0IG9uVW5MaWtlID0gdXNlQ2FsbGJhY2soKCkgPT4geyAvLyDsoovslYTsmpQg7ZW07KCcIO2BtOumrVxyXG5cdFx0ZGlzcGF0Y2goe1xyXG5cdFx0XHR0eXBlOiBVTkxJS0VfUE9TVF9SRVFVRVNULFxyXG5cdFx0XHRkYXRhOiBwb3N0LmlkLCAvLyDqsozsi5zquIAg7JWE7J2065SUXHJcblx0XHR9KVxyXG5cdH0sIFtdKVxyXG5cclxuXHRjb25zdCBvblRvZ2dsZUxpa2UgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcblx0XHRzZXRMaWtlZCgocHJldikgPT4gIXByZXYpXHJcblx0fSwgW10pXHJcblxyXG5cdGNvbnN0IG9uVG9nZ2xlQ29tbWVudCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuXHRcdHNldENvbW1lbnRGb3JtT3BlbmVkKChwcmV2KSA9PiAhcHJldilcclxuXHR9LCBbXSlcclxuXHJcblx0Y29uc3Qgb25SZW1vdmVQb3N0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG5cdFx0aWYgKCFpZCkge1xyXG5cdFx0XHRyZXR1cm4gYWxlcnQoJ+uhnOq3uOyduOydtCDtlYTsmpTtlanri4jri6QuJylcclxuXHRcdH1cclxuXHRcdHJldHVybiBkaXNwYXRjaCh7XHJcblx0XHRcdHR5cGU6IFJFTU9WRV9QT1NUX1JFUVVFU1QsXHJcblx0XHRcdGRhdGE6IHBvc3QuaWQsXHJcblx0XHR9KVxyXG5cdH0sIFtpZF0pXHJcblxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0XHQ8ZGl2IHN0eWxlPXt7bWFyZ2luQm90dG9tOiAyMH19PlxyXG5cdFx0XHRcdDxDYXJkXHJcblx0XHRcdFx0XHRcdGNvdmVyPXtwb3N0LkltYWdlc1swXSAmJiA8UG9zdEltYWdlcyBpbWFnZXM9e3Bvc3QuSW1hZ2VzfS8+fSAvLyDsnbTrr7jsp4DqsIAg7ZWc6rCcIOydtOyDgeyeiOydhOuVjCDtj6zsiqTtirgg7J2066+47KeA7IqkXHJcblx0XHRcdFx0XHRcdGFjdGlvbnM9e1tcclxuXHRcdFx0XHRcdFx0XHQ8UmV0d2VldE91dGxpbmVkIGtleT1cInJldHdlZXRcIi8+LCAvLyDrpqztirjsnJcg67KE7Yq8XHJcblx0XHRcdFx0XHRcdFx0bGlrZWRcclxuXHRcdFx0XHRcdFx0XHRcdFx0PyA8SGVhcnRUd29Ub25lIHR3b1RvbmVDb2xvcj1cIiNlYjJmOTZcIiBrZXk9XCJoZWFydFwiIG9uQ2xpY2s9e29uVW5MaWtlfS8+IC8vIO2VmO2KuCDrsoTtirxcclxuXHRcdFx0XHRcdFx0XHRcdFx0OiA8SGVhcnRPdXRsaW5lZCBrZXk9XCJoZWFydFwiIG9uQ2xpY2s9e29uTGlrZX0vPiwgLy8g7ZWY7Yq4IOuyhO2KvFxyXG5cdFx0XHRcdFx0XHRcdDxNZXNzYWdlT3V0bGluZWQga2V5PVwiY29tbWVudFwiIG9uQ2xpY2s9e29uVG9nZ2xlQ29tbWVudH0vPiwgLy8g64yT6riAIOuyhO2KvFxyXG5cdFx0XHRcdFx0XHRcdDxQb3BvdmVyIGtleT1cIm1vcmVcIiBjb250ZW50PXsoIC8vIOuNlCDrs7TquLAg67KE7Yq8XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b24uR3JvdXA+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0e2lkICYmIHBvc3QuVXNlci5pZCA9PT0gaWQgPyAoIC8q64K06rCAIOyTtCDquIDsnbTrqbQg7IiY7KCVIOyCreygnCDqsIDriqUqL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b24+7IiY7KCVPC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvbiB0eXBlPVwiZGFuZ2VyXCIgbG9hZGluZz17cmVtb3ZlUG9zdExvYWRpbmd9IG9uQ2xpY2s9e29uUmVtb3ZlUG9zdH0+7IKt7KCcPC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCkgOiA8QnV0dG9uPuyLoOqzoDwvQnV0dG9uPn0gey8qIOuCqOydtCDsk7Qg6riA7J2066m0IOyCreygnCDqsIDriqUqL31cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24uR3JvdXA+XHJcblx0XHRcdFx0XHRcdFx0KX0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8RWxsaXBzaXNPdXRsaW5lZC8+XHJcblx0XHRcdFx0XHRcdFx0PC9Qb3BvdmVyPixcclxuXHRcdFx0XHRcdFx0XX1cclxuXHRcdFx0XHRcdFx0ZXh0cmE9e2lkICYmIDxGb2xsb3dCdXR0b24gcG9zdD17cG9zdH0vPn0gLy8g7Jqw7LihIOy2lOqwgOqzteqwhCzroZzqt7jsnbjtlojsnYTqsr3smrDrp4zrs7TsnbTqsoxcclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8Q2FyZC5NZXRhXHJcblx0XHRcdFx0XHRcdFx0YXZhdGFyPXs8QXZhdGFyPntwb3N0LlVzZXIubmlja25hbWVbMF19PC9BdmF0YXI+fVxyXG5cdFx0XHRcdFx0XHRcdHRpdGxlPXtwb3N0LlVzZXIubmlja25hbWV9XHJcblx0XHRcdFx0XHRcdFx0ZGVzY3JpcHRpb249ezxQb3N0Q2FyZENvbnRlbnRcclxuXHRcdFx0XHRcdFx0XHRcdFx0cG9zdERhdGE9e3Bvc3QuY29udGVudH0vPn0gLy8g7Yq57IiY7ZWcIOq4sOuKpeydhCDsspjrpqztlZjripQg6rKD7J2EIOunjOuTpOq4sCDsnITtlbTshKAg65Sw66GcIOy7tO2PrOuEjO2KuOuhnCDrubzso7zripTqsowg67O06riwIOq5lOuBlO2VmOuLpFxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L0NhcmQ+XHJcblx0XHRcdFx0e2NvbW1lbnRGb3JtT3BlbmVkICYmIChcclxuXHRcdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0XHQ8Q29tbWVudEZvcm0gcG9zdD17cG9zdH0vPlxyXG5cdFx0XHRcdFx0XHRcdDxMaXN0XHJcblx0XHRcdFx0XHRcdFx0XHRcdGhlYWRlcj17YCR7cG9zdC5Db21tZW50cy5sZW5ndGh96rCc7J2YIOuMk+q4gGB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGl0ZW1MYXlvdXQ9XCJob3Jpem9udGFsXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZGF0YVNvdXJjZT17cG9zdC5Db21tZW50c31cclxuXHRcdFx0XHRcdFx0XHRcdFx0cmVuZGVySXRlbT17KGl0ZW0pID0+IChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxsaT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PENvbW1lbnRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGF1dGhvcj17aXRlbS5Vc2VyLm5pY2tuYW1lfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YXZhdGFyPXs8QXZhdGFyPntpdGVtLlVzZXIubmlja25hbWVbMF19PC9BdmF0YXI+fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29udGVudD17aXRlbS5jb250ZW50fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj4pfVxyXG5cdFx0XHRcdHsvKjxDb21tZW50Rm9ybSAvPlxyXG5cdFx0XHRcdDxDb21tZW50cyAvPiovfVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHQpXHJcbn1cclxuUG9zdENhcmQucHJvcFR5cGVzID0ge1xyXG5cdHBvc3Q6IFByb3BUeXBlcy5zaGFwZSh7XHJcblx0XHRpZDogUHJvcFR5cGVzLm51bWJlcixcclxuXHRcdFVzZXI6IFByb3BUeXBlcy5vYmplY3QsXHJcblx0XHRjb250ZW50OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG5cdFx0Y3JlYXRlZEF0OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG5cdFx0Q29tbWVudHM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxyXG5cdFx0SW1hZ2VzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcclxuXHRcdC8vTGlrZXJzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcclxuXHRcdFJldHdlZXRJZDogUHJvcFR5cGVzLm51bWJlcixcclxuXHRcdFJldHdlZXQ6IFByb3BUeXBlcy5vYmplY3RPZihQcm9wVHlwZXMuYW55KSxcclxuXHR9KS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdENhcmQiXSwic291cmNlUm9vdCI6IiJ9