webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, addPost, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPost", function() { return addPost; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var initialState = {
  mainPosts: [{
    id: 1,
    User: {
      id: 1,
      nickname: '비타민'
    },
    content: '첫 번째 게시글 #해시태그 #익스프레스',
    Images: [{
      src: ''
    }, {
      src: ''
    }, {
      src: ''
    }],
    Comments: [{
      User: {
        nickname: 'nero'
      },
      content: '개정판이 나왔네요!?'
    }, {
      User: {
        nickname: 'hero'
      },
      content: '정말정말 신기하당!'
    }]
  }],
  imagePaths: [],
  // 이미지 경로들이 저장됨
  postAdded: false // 게시물 추가가 완료되었을때 true 변환

}; //게시글 작성하는 액션

var ADD_POST = 'ADD_POST'; // 중간에 오타가나는 일을 막을 수 있다

var addPost = {
  type: ADD_POST
};
var dummyPost = {
  id: 2,
  content: '더미데이터입니당',
  User: {
    id: 1,
    nickname: 'vitamin'
  },
  Images: [],
  Comments: []
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case ADD_POST:
      return _objectSpread(_objectSpread({}, state), {}, {
        mainPost: [dummyPost].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.mainPosts)),
        // 불변성 지켜주며 앞에다가 추가해야 게시글 위에올라감
        postAdded: true
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpZCIsIlVzZXIiLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJJbWFnZXMiLCJzcmMiLCJDb21tZW50cyIsImltYWdlUGF0aHMiLCJwb3N0QWRkZWQiLCJBRERfUE9TVCIsImFkZFBvc3QiLCJ0eXBlIiwiZHVtbXlQb3N0IiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwibWFpblBvc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTyxJQUFNQSxZQUFZLEdBQUc7QUFDMUJDLFdBQVMsRUFBRSxDQUNUO0FBQ0VDLE1BQUUsRUFBRSxDQUROO0FBRUVDLFFBQUksRUFBRTtBQUNKRCxRQUFFLEVBQUUsQ0FEQTtBQUVKRSxjQUFRLEVBQUU7QUFGTixLQUZSO0FBTUVDLFdBQU8sRUFBRSx1QkFOWDtBQU9FQyxVQUFNLEVBQUUsQ0FBQztBQUFFQyxTQUFHLEVBQUU7QUFBUCxLQUFELEVBQWM7QUFBRUEsU0FBRyxFQUFFO0FBQVAsS0FBZCxFQUEyQjtBQUFFQSxTQUFHLEVBQUU7QUFBUCxLQUEzQixDQVBWO0FBUUVDLFlBQVEsRUFBRSxDQUNSO0FBQ0VMLFVBQUksRUFBRTtBQUNKQyxnQkFBUSxFQUFFO0FBRE4sT0FEUjtBQUlFQyxhQUFPLEVBQUU7QUFKWCxLQURRLEVBT1I7QUFDRUYsVUFBSSxFQUFFO0FBQ0pDLGdCQUFRLEVBQUU7QUFETixPQURSO0FBSUVDLGFBQU8sRUFBRTtBQUpYLEtBUFE7QUFSWixHQURTLENBRGU7QUEwQjFCSSxZQUFVLEVBQUUsRUExQmM7QUEwQlY7QUFDaEJDLFdBQVMsRUFBRSxLQTNCZSxDQTJCUjs7QUEzQlEsQ0FBckIsQyxDQThCUDs7QUFDQSxJQUFNQyxRQUFRLEdBQUcsVUFBakIsQyxDQUE2Qjs7QUFDdEIsSUFBTUMsT0FBTyxHQUFHO0FBQ3JCQyxNQUFJLEVBQUVGO0FBRGUsQ0FBaEI7QUFJUCxJQUFNRyxTQUFTLEdBQUc7QUFDaEJaLElBQUUsRUFBRSxDQURZO0FBRWhCRyxTQUFPLEVBQUUsVUFGTztBQUdoQkYsTUFBSSxFQUFFO0FBQ0pELE1BQUUsRUFBRSxDQURBO0FBRUpFLFlBQVEsRUFBRTtBQUZOLEdBSFU7QUFPaEJFLFFBQU0sRUFBRSxFQVBRO0FBUWhCRSxVQUFRLEVBQUU7QUFSTSxDQUFsQjs7QUFXQSxJQUFNTyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFrQztBQUFBLE1BQWpDQyxLQUFpQyx1RUFBekJoQixZQUF5QjtBQUFBLE1BQVhpQixNQUFXOztBQUNoRCxVQUFRQSxNQUFNLENBQUNKLElBQWY7QUFDRSxTQUFLRixRQUFMO0FBQ0UsNkNBQ0dLLEtBREg7QUFFRUUsZ0JBQVEsR0FBR0osU0FBSCxzR0FBaUJFLEtBQUssQ0FBQ2YsU0FBdkIsRUFGVjtBQUU2QztBQUMzQ1MsaUJBQVMsRUFBRTtBQUhiOztBQUtGO0FBQ0UsYUFBT00sS0FBUDtBQVJKO0FBVUQsQ0FYRDs7QUFhZUQsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC45Y2ZkYmExMWY4MjVkMWNmOTFkZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgbWFpblBvc3RzOiBbXG4gICAge1xuICAgICAgaWQ6IDEsXG4gICAgICBVc2VyOiB7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICBuaWNrbmFtZTogJ+u5hO2DgOuvvCcsXG4gICAgICB9LFxuICAgICAgY29udGVudDogJ+yyqyDrsojsp7gg6rKM7Iuc6riAICPtlbTsi5ztg5zqt7ggI+ydteyKpO2UhOugiOyKpCcsXG4gICAgICBJbWFnZXM6IFt7IHNyYzogJycgfSwgeyBzcmM6ICcnIH0sIHsgc3JjOiAnJyB9XSxcbiAgICAgIENvbW1lbnRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBVc2VyOiB7XG4gICAgICAgICAgICBuaWNrbmFtZTogJ25lcm8nLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgY29udGVudDogJ+qwnOygle2MkOydtCDrgpjsmZTrhKTsmpQhPycsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBVc2VyOiB7XG4gICAgICAgICAgICBuaWNrbmFtZTogJ2hlcm8nLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgY29udGVudDogJ+ygleunkOygleunkCDsi6DquLDtlZjri7khJyxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgXSxcbiAgaW1hZ2VQYXRoczogW10sIC8vIOydtOuvuOyngCDqsr3roZzrk6TsnbQg7KCA7J6l65CoXG4gIHBvc3RBZGRlZDogZmFsc2UsIC8vIOqyjOyLnOusvCDstpTqsIDqsIAg7JmE66OM65CY7JeI7J2E65WMIHRydWUg67OA7ZmYXG59XG5cbi8v6rKM7Iuc6riAIOyekeyEse2VmOuKlCDslaHshZhcbmNvbnN0IEFERF9QT1NUID0gJ0FERF9QT1NUJzsgLy8g7KSR6rCE7JeQIOyYpO2DgOqwgOuCmOuKlCDsnbzsnYQg66eJ7J2EIOyImCDsnojri6RcbmV4cG9ydCBjb25zdCBhZGRQb3N0ID0ge1xuICB0eXBlOiBBRERfUE9TVCxcbn1cblxuY29uc3QgZHVtbXlQb3N0ID0ge1xuICBpZDogMixcbiAgY29udGVudDogJ+uNlOuvuOuNsOydtO2EsOyeheuLiOuLuScsXG4gIFVzZXI6IHtcbiAgICBpZDogMSxcbiAgICBuaWNrbmFtZTogJ3ZpdGFtaW4nLFxuICB9LFxuICBJbWFnZXM6IFtdLFxuICBDb21tZW50czogW10sXG59XG5cbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBBRERfUE9TVDpcbiAgICAgIHJldHVybiB7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbWFpblBvc3Q6IFtkdW1teVBvc3QsIC4uLnN0YXRlLm1haW5Qb3N0c10sIC8vIOu2iOuzgOyEsSDsp4DsvJzso7zrqbAg7JWe7JeQ64uk6rCAIOy2lOqwgO2VtOyVvCDqsozsi5zquIAg7JyE7JeQ7Jis65286rCQXG4gICAgICAgIHBvc3RBZGRlZDogdHJ1ZSxcbiAgICAgIH1cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlclxuIl0sInNvdXJjZVJvb3QiOiIifQ==