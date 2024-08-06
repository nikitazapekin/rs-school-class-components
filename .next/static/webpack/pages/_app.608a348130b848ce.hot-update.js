"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/hooks/redux.ts":
/*!****************************!*\
  !*** ./src/hooks/redux.ts ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useAppDispatch: function() { return /* binding */ useAppDispatch; },\n/* harmony export */   useAppSelector: function() { return /* binding */ useAppSelector; }\n/* harmony export */ });\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/dist/react-redux.mjs\");\n\nconst useAppDispatch = ()=>(0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch)();\nconst useAppSelector = react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector; /*\r\nimport React from 'react';\r\nimport { render, renderHook } from '@testing-library/react';\r\nimport { Provider } from 'react-redux';\r\nimport { configureStore } from '@reduxjs/toolkit';\r\nimport { useAppDispatch, useAppSelector } from './redux'; // Убедитесь, что путь к файлу корректный\r\nimport { RootState, AppDispatch, rootReducer } from '../redux/store'; // Убедитесь, что путь к файлу корректный\r\nimport Providers from '../redux/Provider';\r\n// Создание тестового Redux хранилища с правильным редьюсером\r\nconst testStore = configureStore({\r\n  reducer: rootReducer,\r\n  preloadedState: {\r\n    appSlice: {\r\n        isLoading: false,\r\n\terror: null,\r\n\tisLoadingUserData: false,\r\n\tusers: [],\r\n\ttypedValue: \"\",\r\n\tparams: {\r\n\t\tlimit: 10,\r\n\t\toffset: 1,\r\n\t\tquery: '',\r\n\t\tstoredValue: '',\r\n\t},\r\n\tstatus: 'idle',\r\n\tclickedUser: {\r\n\t\tlogin: \"\",\r\n\tid: 0,\r\n\tnode_id:\"\" ,\r\n\tavatar_url: \"\",\r\n\tgravatar_id:\"\" ,\r\n\turl:\"\" ,\r\n\thtml_url:\"\" ,\r\n\tfollowers_url: \"\",\r\n\tfollowing_url:\"\" ,\r\n\tgists_url: \"\",\r\n\tstarred_url: \"\",\r\n\tsubscriptions_url:  \"\",\r\n\torganizations_url: \"\",\r\n\trepos_url:\"\" ,\r\n\tevents_url:\"\" ,\r\n\treceived_events_url:\"\" ,\r\n\ttype: \"\",\r\n\tsite_admin: false,\r\n\tscore: 0\r\n\t}\r\n   \r\n       },\r\n      selectedElementsSlice: {\r\n        storedElements: [],\r\n\r\n\tselectedElement: null,\r\n      },\r\n      themeSlice: { \r\n        isDark: false\r\n       }\r\n  },\r\n});\r\n\r\n// Тестирование useAppDispatch\r\ndescribe('useAppDispatch', () => {\r\n  test('returns the correct dispatch type', () => {\r\n    const { result } = renderHook(() => useAppDispatch(), {\r\n      wrapper: ({ children }) => <Provider store={testStore}>{children}</Provider>,\r\n    });\r\n\r\n    expect(result.current).toBeDefined();\r\n    expect(result.current).toEqual(expect.any(Function)); // Должен быть функцией\r\n  });\r\n});\r\n\r\n// Тестирование useAppSelector\r\ndescribe('useAppSelector', () => {\r\n  test('returns the correct selector type', () => {\r\n    // Определим начальное состояние для тестов\r\n    const initialState: RootState = {\r\n      appSlice: {\r\n        isLoading: false,\r\n\terror: null,\r\n\tisLoadingUserData: false,\r\n\tusers: [],\r\n\ttypedValue: \"\",\r\n\tparams: {\r\n\t\tlimit: 10,\r\n\t\toffset: 1,\r\n\t\tquery: '',\r\n\t\tstoredValue: '',\r\n\t},\r\n\tstatus: 'idle',\r\n\tclickedUser: {\r\n\t\tlogin: \"\",\r\n\tid: 0,\r\n\tnode_id:\"\" ,\r\n\tavatar_url: \"\",\r\n\tgravatar_id:\"\" ,\r\n\turl:\"\" ,\r\n\thtml_url:\"\" ,\r\n\tfollowers_url: \"\",\r\n\tfollowing_url:\"\" ,\r\n\tgists_url: \"\",\r\n\tstarred_url: \"\",\r\n\tsubscriptions_url:  \"\",\r\n\torganizations_url: \"\",\r\n\trepos_url:\"\" ,\r\n\tevents_url:\"\" ,\r\n\treceived_events_url:\"\" ,\r\n\ttype: \"\",\r\n\tsite_admin: false,\r\n\tscore: 0\r\n\t}\r\n   \r\n       },\r\n      selectedElementsSlice: {\r\n        storedElements: [],\r\n\r\n\tselectedElement: null,\r\n      },\r\n      themeSlice: { \r\n        isDark: false\r\n       }\r\n    };\r\n\r\n    // Обновим тестовый store с начальным состоянием\r\n    const { result } = renderHook(() => useAppSelector((state: RootState) => state.appSlice), {\r\n      wrapper: ({ children }) => <Provider store={testStore}>{children}</Provider>,\r\n    });\r\n\r\n    // Замените 'initialState.appSlice' на актуальные данные из начального состояния\r\n    expect(result.current).toEqual(initialState.appSlice);\r\n  });\r\n});\r\n\r\n*/ \n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvcmVkdXgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTZFO0FBRXRFLE1BQU1FLGlCQUFpQixJQUFNRix3REFBV0EsR0FBZ0I7QUFDeEQsTUFBTUcsaUJBQWtERixvREFBV0EsQ0FBQyxDQUczRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0lBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9ob29rcy9yZWR1eC50cz84NGEyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFR5cGVkVXNlU2VsZWN0b3JIb29rLCB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IFJvb3RTdGF0ZSwgQXBwRGlzcGF0Y2ggfSBmcm9tICcuLi9yZWR1eC9zdG9yZSc7XHJcbmV4cG9ydCBjb25zdCB1c2VBcHBEaXNwYXRjaCA9ICgpID0+IHVzZURpc3BhdGNoPEFwcERpc3BhdGNoPigpO1xyXG5leHBvcnQgY29uc3QgdXNlQXBwU2VsZWN0b3I6IFR5cGVkVXNlU2VsZWN0b3JIb29rPFJvb3RTdGF0ZT4gPSB1c2VTZWxlY3RvcjtcclxuXHJcblxyXG4vKlxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyByZW5kZXIsIHJlbmRlckhvb2sgfSBmcm9tICdAdGVzdGluZy1saWJyYXJ5L3JlYWN0JztcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IGNvbmZpZ3VyZVN0b3JlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XHJcbmltcG9ydCB7IHVzZUFwcERpc3BhdGNoLCB1c2VBcHBTZWxlY3RvciB9IGZyb20gJy4vcmVkdXgnOyAvLyDQo9Cx0LXQtNC40YLQtdGB0YwsINGH0YLQviDQv9GD0YLRjCDQuiDRhNCw0LnQu9GDINC60L7RgNGA0LXQutGC0L3Ri9C5XHJcbmltcG9ydCB7IFJvb3RTdGF0ZSwgQXBwRGlzcGF0Y2gsIHJvb3RSZWR1Y2VyIH0gZnJvbSAnLi4vcmVkdXgvc3RvcmUnOyAvLyDQo9Cx0LXQtNC40YLQtdGB0YwsINGH0YLQviDQv9GD0YLRjCDQuiDRhNCw0LnQu9GDINC60L7RgNGA0LXQutGC0L3Ri9C5XHJcbmltcG9ydCBQcm92aWRlcnMgZnJvbSAnLi4vcmVkdXgvUHJvdmlkZXInO1xyXG4vLyDQodC+0LfQtNCw0L3QuNC1INGC0LXRgdGC0L7QstC+0LPQviBSZWR1eCDRhdGA0LDQvdC40LvQuNGJ0LAg0YEg0L/RgNCw0LLQuNC70YzQvdGL0Lwg0YDQtdC00YzRjtGB0LXRgNC+0LxcclxuY29uc3QgdGVzdFN0b3JlID0gY29uZmlndXJlU3RvcmUoe1xyXG4gIHJlZHVjZXI6IHJvb3RSZWR1Y2VyLFxyXG4gIHByZWxvYWRlZFN0YXRlOiB7XHJcbiAgICBhcHBTbGljZToge1xyXG4gICAgICAgIGlzTG9hZGluZzogZmFsc2UsXHJcblx0ZXJyb3I6IG51bGwsXHJcblx0aXNMb2FkaW5nVXNlckRhdGE6IGZhbHNlLFxyXG5cdHVzZXJzOiBbXSxcclxuXHR0eXBlZFZhbHVlOiBcIlwiLFxyXG5cdHBhcmFtczoge1xyXG5cdFx0bGltaXQ6IDEwLFxyXG5cdFx0b2Zmc2V0OiAxLFxyXG5cdFx0cXVlcnk6ICcnLFxyXG5cdFx0c3RvcmVkVmFsdWU6ICcnLFxyXG5cdH0sXHJcblx0c3RhdHVzOiAnaWRsZScsXHJcblx0Y2xpY2tlZFVzZXI6IHtcclxuXHRcdGxvZ2luOiBcIlwiLFxyXG5cdGlkOiAwLFxyXG5cdG5vZGVfaWQ6XCJcIiAsXHJcblx0YXZhdGFyX3VybDogXCJcIixcclxuXHRncmF2YXRhcl9pZDpcIlwiICxcclxuXHR1cmw6XCJcIiAsXHJcblx0aHRtbF91cmw6XCJcIiAsXHJcblx0Zm9sbG93ZXJzX3VybDogXCJcIixcclxuXHRmb2xsb3dpbmdfdXJsOlwiXCIgLFxyXG5cdGdpc3RzX3VybDogXCJcIixcclxuXHRzdGFycmVkX3VybDogXCJcIixcclxuXHRzdWJzY3JpcHRpb25zX3VybDogIFwiXCIsXHJcblx0b3JnYW5pemF0aW9uc191cmw6IFwiXCIsXHJcblx0cmVwb3NfdXJsOlwiXCIgLFxyXG5cdGV2ZW50c191cmw6XCJcIiAsXHJcblx0cmVjZWl2ZWRfZXZlbnRzX3VybDpcIlwiICxcclxuXHR0eXBlOiBcIlwiLFxyXG5cdHNpdGVfYWRtaW46IGZhbHNlLFxyXG5cdHNjb3JlOiAwXHJcblx0fVxyXG4gICBcclxuICAgICAgIH0sXHJcbiAgICAgIHNlbGVjdGVkRWxlbWVudHNTbGljZToge1xyXG4gICAgICAgIHN0b3JlZEVsZW1lbnRzOiBbXSxcclxuXHJcblx0c2VsZWN0ZWRFbGVtZW50OiBudWxsLFxyXG4gICAgICB9LFxyXG4gICAgICB0aGVtZVNsaWNlOiB7IFxyXG4gICAgICAgIGlzRGFyazogZmFsc2VcclxuICAgICAgIH1cclxuICB9LFxyXG59KTtcclxuXHJcbi8vINCi0LXRgdGC0LjRgNC+0LLQsNC90LjQtSB1c2VBcHBEaXNwYXRjaFxyXG5kZXNjcmliZSgndXNlQXBwRGlzcGF0Y2gnLCAoKSA9PiB7XHJcbiAgdGVzdCgncmV0dXJucyB0aGUgY29ycmVjdCBkaXNwYXRjaCB0eXBlJywgKCkgPT4ge1xyXG4gICAgY29uc3QgeyByZXN1bHQgfSA9IHJlbmRlckhvb2soKCkgPT4gdXNlQXBwRGlzcGF0Y2goKSwge1xyXG4gICAgICB3cmFwcGVyOiAoeyBjaGlsZHJlbiB9KSA9PiA8UHJvdmlkZXIgc3RvcmU9e3Rlc3RTdG9yZX0+e2NoaWxkcmVufTwvUHJvdmlkZXI+LFxyXG4gICAgfSk7XHJcblxyXG4gICAgZXhwZWN0KHJlc3VsdC5jdXJyZW50KS50b0JlRGVmaW5lZCgpO1xyXG4gICAgZXhwZWN0KHJlc3VsdC5jdXJyZW50KS50b0VxdWFsKGV4cGVjdC5hbnkoRnVuY3Rpb24pKTsgLy8g0JTQvtC70LbQtdC9INCx0YvRgtGMINGE0YPQvdC60YbQuNC10LlcclxuICB9KTtcclxufSk7XHJcblxyXG4vLyDQotC10YHRgtC40YDQvtCy0LDQvdC40LUgdXNlQXBwU2VsZWN0b3JcclxuZGVzY3JpYmUoJ3VzZUFwcFNlbGVjdG9yJywgKCkgPT4ge1xyXG4gIHRlc3QoJ3JldHVybnMgdGhlIGNvcnJlY3Qgc2VsZWN0b3IgdHlwZScsICgpID0+IHtcclxuICAgIC8vINCe0L/RgNC10LTQtdC70LjQvCDQvdCw0YfQsNC70YzQvdC+0LUg0YHQvtGB0YLQvtGP0L3QuNC1INC00LvRjyDRgtC10YHRgtC+0LJcclxuICAgIGNvbnN0IGluaXRpYWxTdGF0ZTogUm9vdFN0YXRlID0ge1xyXG4gICAgICBhcHBTbGljZToge1xyXG4gICAgICAgIGlzTG9hZGluZzogZmFsc2UsXHJcblx0ZXJyb3I6IG51bGwsXHJcblx0aXNMb2FkaW5nVXNlckRhdGE6IGZhbHNlLFxyXG5cdHVzZXJzOiBbXSxcclxuXHR0eXBlZFZhbHVlOiBcIlwiLFxyXG5cdHBhcmFtczoge1xyXG5cdFx0bGltaXQ6IDEwLFxyXG5cdFx0b2Zmc2V0OiAxLFxyXG5cdFx0cXVlcnk6ICcnLFxyXG5cdFx0c3RvcmVkVmFsdWU6ICcnLFxyXG5cdH0sXHJcblx0c3RhdHVzOiAnaWRsZScsXHJcblx0Y2xpY2tlZFVzZXI6IHtcclxuXHRcdGxvZ2luOiBcIlwiLFxyXG5cdGlkOiAwLFxyXG5cdG5vZGVfaWQ6XCJcIiAsXHJcblx0YXZhdGFyX3VybDogXCJcIixcclxuXHRncmF2YXRhcl9pZDpcIlwiICxcclxuXHR1cmw6XCJcIiAsXHJcblx0aHRtbF91cmw6XCJcIiAsXHJcblx0Zm9sbG93ZXJzX3VybDogXCJcIixcclxuXHRmb2xsb3dpbmdfdXJsOlwiXCIgLFxyXG5cdGdpc3RzX3VybDogXCJcIixcclxuXHRzdGFycmVkX3VybDogXCJcIixcclxuXHRzdWJzY3JpcHRpb25zX3VybDogIFwiXCIsXHJcblx0b3JnYW5pemF0aW9uc191cmw6IFwiXCIsXHJcblx0cmVwb3NfdXJsOlwiXCIgLFxyXG5cdGV2ZW50c191cmw6XCJcIiAsXHJcblx0cmVjZWl2ZWRfZXZlbnRzX3VybDpcIlwiICxcclxuXHR0eXBlOiBcIlwiLFxyXG5cdHNpdGVfYWRtaW46IGZhbHNlLFxyXG5cdHNjb3JlOiAwXHJcblx0fVxyXG4gICBcclxuICAgICAgIH0sXHJcbiAgICAgIHNlbGVjdGVkRWxlbWVudHNTbGljZToge1xyXG4gICAgICAgIHN0b3JlZEVsZW1lbnRzOiBbXSxcclxuXHJcblx0c2VsZWN0ZWRFbGVtZW50OiBudWxsLFxyXG4gICAgICB9LFxyXG4gICAgICB0aGVtZVNsaWNlOiB7IFxyXG4gICAgICAgIGlzRGFyazogZmFsc2VcclxuICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLy8g0J7QsdC90L7QstC40Lwg0YLQtdGB0YLQvtCy0YvQuSBzdG9yZSDRgSDQvdCw0YfQsNC70YzQvdGL0Lwg0YHQvtGB0YLQvtGP0L3QuNC10LxcclxuICAgIGNvbnN0IHsgcmVzdWx0IH0gPSByZW5kZXJIb29rKCgpID0+IHVzZUFwcFNlbGVjdG9yKChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS5hcHBTbGljZSksIHtcclxuICAgICAgd3JhcHBlcjogKHsgY2hpbGRyZW4gfSkgPT4gPFByb3ZpZGVyIHN0b3JlPXt0ZXN0U3RvcmV9PntjaGlsZHJlbn08L1Byb3ZpZGVyPixcclxuICAgIH0pO1xyXG5cclxuICAgIC8vINCX0LDQvNC10L3QuNGC0LUgJ2luaXRpYWxTdGF0ZS5hcHBTbGljZScg0L3QsCDQsNC60YLRg9Cw0LvRjNC90YvQtSDQtNCw0L3QvdGL0LUg0LjQtyDQvdCw0YfQsNC70YzQvdC+0LPQviDRgdC+0YHRgtC+0Y/QvdC40Y9cclxuICAgIGV4cGVjdChyZXN1bHQuY3VycmVudCkudG9FcXVhbChpbml0aWFsU3RhdGUuYXBwU2xpY2UpO1xyXG4gIH0pO1xyXG59KTtcclxuXHJcbiovIl0sIm5hbWVzIjpbInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJ1c2VBcHBEaXNwYXRjaCIsInVzZUFwcFNlbGVjdG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/hooks/redux.ts\n"));

/***/ })

});