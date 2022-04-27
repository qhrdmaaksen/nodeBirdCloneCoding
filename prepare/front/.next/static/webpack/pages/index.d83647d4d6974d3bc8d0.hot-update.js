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
    dispatch({
      type: LIKE_POST_REQUEST,
      data: post.id // 게시글 아이디

    });
  }, []);
  var onUnLike = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setLiked(function (prev) {
      return true;
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
      lineNumber: 50,
      columnNumber: 4
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    cover: post.Images[0] && __jsx(_PostImages__WEBPACK_IMPORTED_MODULE_5__["default"], {
      images: post.Images,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 32
      }
    }) // 이미지가 한개 이상있을때 포스트 이미지스
    ,
    actions: [__jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["RetweetOutlined"], {
      key: "retweet",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
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
        lineNumber: 56,
        columnNumber: 12
      }
    }) // 하트 버튼
    : __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["HeartOutlined"], {
      key: "heart",
      onClick: onLike,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 12
      }
    }), // 하트 버튼
    __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["MessageOutlined"], {
      key: "comment",
      onClick: onToggleComment,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
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
          lineNumber: 60,
          columnNumber: 10
        }
      }, id && post.User.id === id ?
      /*내가 쓴 글이면 수정 삭제 가능*/
      __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 14
        }
      }, "\uC218\uC815"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        type: "danger",
        loading: removePostLoading,
        onClick: onRemovePost,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 14
        }
      }, "\uC0AD\uC81C")) : __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 15
        }
      }, "\uC2E0\uACE0"), " "),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 8
      }
    }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["EllipsisOutlined"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }
    }))],
    extra: id && __jsx(_FollowButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
      post: post,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 20
      }
    }) // 우측 추가공간,로그인했을경우만보이게
    ,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
    avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 16
      }
    }, post.User.nickname[0]),
    title: post.User.nickname,
    description: __jsx(_PostCardContent__WEBPACK_IMPORTED_MODULE_7__["default"], {
      postData: post.content,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 21
      }
    }) // 특수한 기능을 처리하는 것을 만들기 위해선 따로 컴포넌트로 빼주는게 보기 깔끔하다
    ,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 6
    }
  })), commentFormOpened && __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }
  }, __jsx(_CommentForm__WEBPACK_IMPORTED_MODULE_6__["default"], {
    post: post,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
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
          lineNumber: 88,
          columnNumber: 12
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Comment"], {
        author: item.User.nickname,
        avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 23
          }
        }, item.User.nickname[0]),
        content: item.content,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 13
        }
      }));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L1Bvc3RDYXJkLmpzIl0sIm5hbWVzIjpbIlBvc3RDYXJkIiwicG9zdCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwicmVtb3ZlUG9zdExvYWRpbmciLCJ1c2VTdGF0ZSIsImNvbW1lbnRGb3JtT3BlbmVkIiwic2V0Q29tbWVudEZvcm1PcGVuZWQiLCJpZCIsInVzZXIiLCJtZSIsIm9uTGlrZSIsInVzZUNhbGxiYWNrIiwidHlwZSIsIkxJS0VfUE9TVF9SRVFVRVNUIiwiZGF0YSIsIm9uVW5MaWtlIiwic2V0TGlrZWQiLCJwcmV2Iiwib25Ub2dnbGVMaWtlIiwib25Ub2dnbGVDb21tZW50Iiwib25SZW1vdmVQb3N0IiwiYWxlcnQiLCJSRU1PVkVfUE9TVF9SRVFVRVNUIiwibWFyZ2luQm90dG9tIiwiSW1hZ2VzIiwibGlrZWQiLCJVc2VyIiwibmlja25hbWUiLCJjb250ZW50IiwiQ29tbWVudHMiLCJsZW5ndGgiLCJpdGVtIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic2hhcGUiLCJudW1iZXIiLCJvYmplY3QiLCJzdHJpbmciLCJjcmVhdGVkQXQiLCJhcnJheU9mIiwiUmV0d2VldElkIiwiUmV0d2VldCIsIm9iamVjdE9mIiwiYW55IiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQVk7QUFBQTs7QUFBQSxNQUFWQyxJQUFVLFFBQVZBLElBQVU7QUFDNUIsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1Qjs7QUFDQSxxQkFBNEJDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0osSUFBakI7QUFBQSxHQUFELENBQXZDO0FBQUEsTUFB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TyxpREFBUyxDQUFDRyxNQUZLO0FBR3JCUixXQUFPLEVBQUVLLGlEQUFTLENBQUNJLE1BSEU7QUFJckJDLGFBQVMsRUFBRUwsaURBQVMsQ0FBQ0ksTUFKQTtBQUtyQlIsWUFBUSxFQUFFSSxpREFBUyxDQUFDTSxPQUFWLENBQWtCTixpREFBUyxDQUFDRyxNQUE1QixDQUxXO0FBTXJCWixVQUFNLEVBQUVTLGlEQUFTLENBQUNNLE9BQVYsQ0FBa0JOLGlEQUFTLENBQUNHLE1BQTVCLENBTmE7QUFPckI7QUFDQUksYUFBUyxFQUFFUCxpREFBUyxDQUFDRSxNQVJBO0FBU3JCTSxXQUFPLEVBQUVSLGlEQUFTLENBQUNTLFFBQVYsQ0FBbUJULGlEQUFTLENBQUNVLEdBQTdCO0FBVFksR0FBaEIsRUFVSEM7QUFYaUIsQ0FBckI7QUFjZS9DLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmQ4MzY0N2Q0ZDY5NzRkM2JjOGQwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VDYWxsYmFjaywgdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge0F2YXRhciwgQnV0dG9uLCBDYXJkLCBDb21tZW50LCBMaXN0LCBQb3BvdmVyfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQge0VsbGlwc2lzT3V0bGluZWQsIEhlYXJ0T3V0bGluZWQsIE1lc3NhZ2VPdXRsaW5lZCwgUmV0d2VldE91dGxpbmVkLCBIZWFydFR3b1RvbmV9IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xyXG5pbXBvcnQge3VzZURpc3BhdGNoLCB1c2VTZWxlY3Rvcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcclxuaW1wb3J0IFBvc3RJbWFnZXMgZnJvbSBcIi4vUG9zdEltYWdlc1wiO1xyXG5pbXBvcnQgQ29tbWVudEZvcm0gZnJvbSBcIi4vQ29tbWVudEZvcm1cIjtcclxuaW1wb3J0IFBvc3RDYXJkQ29udGVudCBmcm9tIFwiLi9Qb3N0Q2FyZENvbnRlbnRcIjtcclxuaW1wb3J0IHtSRU1PVkVfUE9TVF9SRVFVRVNUfSBmcm9tIFwiLi4vcmVkdWNlcnMvcG9zdFwiO1xyXG5pbXBvcnQgRm9sbG93QnV0dG9uIGZyb20gXCIuL0ZvbGxvd0J1dHRvblwiO1xyXG5cclxuY29uc3QgUG9zdENhcmQgPSAoe3Bvc3R9KSA9PiB7XHJcblx0Y29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcblx0Y29uc3Qge3JlbW92ZVBvc3RMb2FkaW5nfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9zdClcclxuXHRjb25zdCBbY29tbWVudEZvcm1PcGVuZWQsIHNldENvbW1lbnRGb3JtT3BlbmVkXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cdGNvbnN0IGlkID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyLm1lPy5pZCkgLy9zdGF0ZS51c2VyLm1lICYmIHN0YXRlLnVzZXIubWUuaWRcclxuLy9cdGNvbnN0IFtsaWtlZCwgc2V0TGlrZWRdID0gdXNlU3RhdGUoZmFsc2UpIGZyb250XHJcblxyXG5cclxuXHRjb25zdCBvbkxpa2UgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcblx0XHRkaXNwYXRjaCh7XHJcblx0XHRcdHR5cGU6IExJS0VfUE9TVF9SRVFVRVNULFxyXG5cdFx0XHRkYXRhOiBwb3N0LmlkLCAvLyDqsozsi5zquIAg7JWE7J2065SUXHJcblx0XHR9KVxyXG5cdH0sIFtdKVxyXG5cdGNvbnN0IG9uVW5MaWtlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG5cdFx0c2V0TGlrZWQoKHByZXYpID0+IHRydWUpXHJcblx0fSwgW10pXHJcblxyXG5cdGNvbnN0IG9uVG9nZ2xlTGlrZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuXHRcdHNldExpa2VkKChwcmV2KSA9PiAhcHJldilcclxuXHR9LCBbXSlcclxuXHJcblx0Y29uc3Qgb25Ub2dnbGVDb21tZW50ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG5cdFx0c2V0Q29tbWVudEZvcm1PcGVuZWQoKHByZXYpID0+ICFwcmV2KVxyXG5cdH0sIFtdKVxyXG5cclxuXHRjb25zdCBvblJlbW92ZVBvc3QgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcblx0XHRpZiAoIWlkKSB7XHJcblx0XHRcdHJldHVybiBhbGVydCgn66Gc6re47J247J20IO2VhOyalO2VqeuLiOuLpC4nKVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGRpc3BhdGNoKHtcclxuXHRcdFx0dHlwZTogUkVNT1ZFX1BPU1RfUkVRVUVTVCxcclxuXHRcdFx0ZGF0YTogcG9zdC5pZCxcclxuXHRcdH0pXHJcblx0fSwgW2lkXSlcclxuXHJcblxyXG5cdHJldHVybiAoXHJcblx0XHRcdDxkaXYgc3R5bGU9e3ttYXJnaW5Cb3R0b206IDIwfX0+XHJcblx0XHRcdFx0PENhcmRcclxuXHRcdFx0XHRcdFx0Y292ZXI9e3Bvc3QuSW1hZ2VzWzBdICYmIDxQb3N0SW1hZ2VzIGltYWdlcz17cG9zdC5JbWFnZXN9Lz59IC8vIOydtOuvuOyngOqwgCDtlZzqsJwg7J207IOB7J6I7J2E65WMIO2PrOyKpO2KuCDsnbTrr7jsp4DsiqRcclxuXHRcdFx0XHRcdFx0YWN0aW9ucz17W1xyXG5cdFx0XHRcdFx0XHRcdDxSZXR3ZWV0T3V0bGluZWQga2V5PVwicmV0d2VldFwiLz4sIC8vIOumrO2KuOyclyDrsoTtirxcclxuXHRcdFx0XHRcdFx0XHRsaWtlZFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ/IDxIZWFydFR3b1RvbmUgdHdvVG9uZUNvbG9yPVwiI2ViMmY5NlwiIGtleT1cImhlYXJ0XCIgb25DbGljaz17b25Vbkxpa2V9Lz4gLy8g7ZWY7Yq4IOuyhO2KvFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ6IDxIZWFydE91dGxpbmVkIGtleT1cImhlYXJ0XCIgb25DbGljaz17b25MaWtlfS8+LCAvLyDtlZjtirgg67KE7Yq8XHJcblx0XHRcdFx0XHRcdFx0PE1lc3NhZ2VPdXRsaW5lZCBrZXk9XCJjb21tZW50XCIgb25DbGljaz17b25Ub2dnbGVDb21tZW50fS8+LCAvLyDrjJPquIAg67KE7Yq8XHJcblx0XHRcdFx0XHRcdFx0PFBvcG92ZXIga2V5PVwibW9yZVwiIGNvbnRlbnQ9eyggLy8g642UIOuztOq4sCDrsoTtirxcclxuXHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvbi5Hcm91cD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7aWQgJiYgcG9zdC5Vc2VyLmlkID09PSBpZCA/ICggLyrrgrTqsIAg7JO0IOq4gOydtOuptCDsiJjsoJUg7IKt7KCcIOqwgOuKpSovXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvbj7siJjsoJU8L0J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uIHR5cGU9XCJkYW5nZXJcIiBsb2FkaW5nPXtyZW1vdmVQb3N0TG9hZGluZ30gb25DbGljaz17b25SZW1vdmVQb3N0fT7sgq3soJw8L0J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0KSA6IDxCdXR0b24+7Iug6rOgPC9CdXR0b24+fSB7Lyog64Ko7J20IOyTtCDquIDsnbTrqbQg7IKt7KCcIOqwgOuKpSovfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbi5Hcm91cD5cclxuXHRcdFx0XHRcdFx0XHQpfT5cclxuXHRcdFx0XHRcdFx0XHRcdDxFbGxpcHNpc091dGxpbmVkLz5cclxuXHRcdFx0XHRcdFx0XHQ8L1BvcG92ZXI+LFxyXG5cdFx0XHRcdFx0XHRdfVxyXG5cdFx0XHRcdFx0XHRleHRyYT17aWQgJiYgPEZvbGxvd0J1dHRvbiBwb3N0PXtwb3N0fS8+fSAvLyDsmrDsuKEg7LaU6rCA6rO16rCELOuhnOq3uOyduO2WiOydhOqyveyasOunjOuztOydtOqyjFxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxDYXJkLk1ldGFcclxuXHRcdFx0XHRcdFx0XHRhdmF0YXI9ezxBdmF0YXI+e3Bvc3QuVXNlci5uaWNrbmFtZVswXX08L0F2YXRhcj59XHJcblx0XHRcdFx0XHRcdFx0dGl0bGU9e3Bvc3QuVXNlci5uaWNrbmFtZX1cclxuXHRcdFx0XHRcdFx0XHRkZXNjcmlwdGlvbj17PFBvc3RDYXJkQ29udGVudCBwb3N0RGF0YT17cG9zdC5jb250ZW50fS8+fSAvLyDtirnsiJjtlZwg6riw64ql7J2EIOyymOumrO2VmOuKlCDqsoPsnYQg66eM65Ok6riwIOychO2VtOyEoCDrlLDroZwg7Lu07Y+s64SM7Yq466GcIOu5vOyjvOuKlOqyjCDrs7TquLAg6rmU64GU7ZWY64ukXHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvQ2FyZD5cclxuXHRcdFx0XHR7Y29tbWVudEZvcm1PcGVuZWQgJiYgKFxyXG5cdFx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxDb21tZW50Rm9ybSBwb3N0PXtwb3N0fS8+XHJcblx0XHRcdFx0XHRcdFx0PExpc3RcclxuXHRcdFx0XHRcdFx0XHRcdFx0aGVhZGVyPXtgJHtwb3N0LkNvbW1lbnRzLmxlbmd0aH3qsJzsnZgg64yT6riAYH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0aXRlbUxheW91dD1cImhvcml6b250YWxcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRkYXRhU291cmNlPXtwb3N0LkNvbW1lbnRzfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRyZW5kZXJJdGVtPXsoaXRlbSkgPT4gKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8Q29tbWVudFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YXV0aG9yPXtpdGVtLlVzZXIubmlja25hbWV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhdmF0YXI9ezxBdmF0YXI+e2l0ZW0uVXNlci5uaWNrbmFtZVswXX08L0F2YXRhcj59XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb250ZW50PXtpdGVtLmNvbnRlbnR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDwvZGl2Pil9XHJcblx0XHRcdFx0ey8qPENvbW1lbnRGb3JtIC8+XHJcblx0XHRcdFx0PENvbW1lbnRzIC8+Ki99XHJcblx0XHRcdDwvZGl2PlxyXG5cdClcclxufVxyXG5Qb3N0Q2FyZC5wcm9wVHlwZXMgPSB7XHJcblx0cG9zdDogUHJvcFR5cGVzLnNoYXBlKHtcclxuXHRcdGlkOiBQcm9wVHlwZXMubnVtYmVyLFxyXG5cdFx0VXNlcjogUHJvcFR5cGVzLm9iamVjdCxcclxuXHRcdGNvbnRlbnQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcblx0XHRjcmVhdGVkQXQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcblx0XHRDb21tZW50czogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXHJcblx0XHRJbWFnZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxyXG5cdFx0Ly9MaWtlcnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxyXG5cdFx0UmV0d2VldElkOiBQcm9wVHlwZXMubnVtYmVyLFxyXG5cdFx0UmV0d2VldDogUHJvcFR5cGVzLm9iamVjdE9mKFByb3BUeXBlcy5hbnkpLFxyXG5cdH0pLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Q2FyZCJdLCJzb3VyY2VSb290IjoiIn0=