"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/homepage",{

/***/ "./src/pages/homepage/testComp.tsx":
/*!*****************************************!*\
  !*** ./src/pages/homepage/testComp.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var _redux_slices_querySlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../redux/slices/querySlice */ \"./src/redux/slices/querySlice.ts\");\n/* harmony import */ var _redux_Provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/Provider */ \"./src/redux/Provider.tsx\");\n\nvar _s = $RefreshSig$();\n\n\nconst Test = (param)=>{\n    let { query } = param;\n    _s();\n    const { data, error, isLoading } = (0,_redux_slices_querySlice__WEBPACK_IMPORTED_MODULE_1__.useSearchUsersQuery)(query);\n    if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\wotbl\\\\search-rs\\\\src\\\\pages\\\\homepage\\\\testComp.tsx\",\n        lineNumber: 8,\n        columnNumber: 25\n    }, undefined);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Error loading data\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\wotbl\\\\search-rs\\\\src\\\\pages\\\\homepage\\\\testComp.tsx\",\n        lineNumber: 9,\n        columnNumber: 21\n    }, undefined);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_redux_Provider__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Search Results\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\wotbl\\\\search-rs\\\\src\\\\pages\\\\homepage\\\\testComp.tsx\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                }, undefined),\n                data && data.items.map((user)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"sea-test\",\n                        children: user.login\n                    }, user.id, false, {\n                        fileName: \"C:\\\\Users\\\\wotbl\\\\search-rs\\\\src\\\\pages\\\\homepage\\\\testComp.tsx\",\n                        lineNumber: 16,\n                        columnNumber: 11\n                    }, undefined))\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\wotbl\\\\search-rs\\\\src\\\\pages\\\\homepage\\\\testComp.tsx\",\n            lineNumber: 13,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\wotbl\\\\search-rs\\\\src\\\\pages\\\\homepage\\\\testComp.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Test, \"FfxR8J6moc/K0V4CgYK8pfEC164=\", false, function() {\n    return [\n        _redux_slices_querySlice__WEBPACK_IMPORTED_MODULE_1__.useSearchUsersQuery\n    ];\n});\n_c = Test;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Test); // pages/search.tsx\n /*\r\nimport { useSearchUsersQuery } from '../../redux/slices/querySlice';\r\nimport { wrapper } from '../../redux/store';\r\nimport { githubApi } from '../../redux/slices/querySlice';\r\nimport Providers from '../../redux/Provider';\r\n // types.ts\r\nexport interface User {\r\n\tlogin: string;\r\n\tid: number;\r\n\tnode_id: string;\r\n\tavatar_url: string;\r\n\tgravatar_id: string;\r\n\turl: string;\r\n\thtml_url: string;\r\n\tfollowers_url: string;\r\n\tfollowing_url: string;\r\n\tgists_url: string;\r\n\tstarred_url: string;\r\n\tsubscriptions_url: string;\r\n\torganizations_url: string;\r\n\trepos_url: string;\r\n\tevents_url: string;\r\n\treceived_events_url: string;\r\n\ttype: string;\r\n\tsite_admin: boolean;\r\n\tscore: number;\r\n}\r\n\r\nexport interface QueryParams {\r\n\tquery: string;\r\n\tpage: number;\r\n\tper_page: number;\r\n}\r\n\r\nexport interface SearchPageProps {\r\n\tquery: QueryParams;\r\n}\r\nconst Test = ({ query }: SearchPageProps) => {\r\n  const { data, error, isLoading } = useSearchUsersQuery(query);\r\n\r\n  if (isLoading) return <div>Loading...</div>;\r\n  if (error) return <div>Error loading data</div>;\r\n\r\n  return (\r\n    <Providers>\r\n\r\n    <div>\r\n      <h1>Search Results</h1>\r\n      {data && data.items.map(user => (\r\n        <div key={user.id}>{user.login}</div>\r\n      ))}\r\n    </div>\r\n    </Providers>\r\n  );\r\n};\r\n\r\nexport const getServerSideProps = wrapper.getServerSideProps((store) => async (context) => {\r\n  const { query, page = 1, per_page = 10 } = context.query;\r\n\r\n  await store.dispatch(\r\n    githubApi.endpoints.searchUsers.initiate({ query: String(query) || 'type:user', page: Number(page), per_page: Number(per_page) })\r\n  );\r\n\r\n  return {\r\n    props: {\r\n      query: { query: query || 'type:user', page: Number(page), per_page: Number(per_page) },\r\n    },\r\n  };\r\n});\r\n\r\nexport default Test;\r\n\r\n\r\n*/ \nvar _c;\n$RefreshReg$(_c, \"Test\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaG9tZXBhZ2UvdGVzdENvbXAudHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUFvRTtBQUN2QjtBQUc3QyxNQUFNRSxPQUFPO1FBQUMsRUFBRUMsS0FBSyxFQUFtQjs7SUFDdEMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsU0FBUyxFQUFFLEdBQUdOLDZFQUFtQkEsQ0FBQ0c7SUFFdkQsSUFBSUcsV0FBVyxxQkFBTyw4REFBQ0M7a0JBQUk7Ozs7OztJQUMzQixJQUFJRixPQUFPLHFCQUFPLDhEQUFDRTtrQkFBSTs7Ozs7O0lBRXZCLHFCQUNFLDhEQUFDTix1REFBU0E7a0JBQ1IsNEVBQUNNOzs4QkFDQyw4REFBQ0M7OEJBQUc7Ozs7OztnQkFDSEosUUFBUUEsS0FBS0ssS0FBSyxDQUFDQyxHQUFHLENBQUNDLENBQUFBLHFCQUN0Qiw4REFBQ0o7d0JBQUlLLFdBQVU7a0NBQTBCRCxLQUFLRSxLQUFLO3VCQUFwQkYsS0FBS0csRUFBRTs7Ozs7Ozs7Ozs7Ozs7OztBQUtoRDtHQWhCTVo7O1FBQytCRix5RUFBbUJBOzs7S0FEbERFO0FBa0JOLCtEQUFlQSxJQUFJQSxFQUFDLENBT3BCLG1CQUFtQjtDQUNuQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlFQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaG9tZXBhZ2UvdGVzdENvbXAudHN4PzU2YTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU2VhcmNoVXNlcnNRdWVyeSB9IGZyb20gJy4uLy4uL3JlZHV4L3NsaWNlcy9xdWVyeVNsaWNlJztcclxuaW1wb3J0IFByb3ZpZGVycyBmcm9tICcuLi8uLi9yZWR1eC9Qcm92aWRlcic7XHJcbmltcG9ydCB7IFNlYXJjaFBhZ2VQcm9wcyB9IGZyb20gJy4vdHlwZXMnOyAvLyBBZGp1c3QgdGhlIGltcG9ydCBwYXRoIGFzIG5lZWRlZFxyXG5cclxuY29uc3QgVGVzdCA9ICh7IHF1ZXJ5IH06IFNlYXJjaFBhZ2VQcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IsIGlzTG9hZGluZyB9ID0gdXNlU2VhcmNoVXNlcnNRdWVyeShxdWVyeSk7XHJcblxyXG4gIGlmIChpc0xvYWRpbmcpIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XHJcbiAgaWYgKGVycm9yKSByZXR1cm4gPGRpdj5FcnJvciBsb2FkaW5nIGRhdGE8L2Rpdj47XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UHJvdmlkZXJzPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxoMT5TZWFyY2ggUmVzdWx0czwvaDE+XHJcbiAgICAgICAge2RhdGEgJiYgZGF0YS5pdGVtcy5tYXAodXNlciA9PiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYS10ZXN0XCIga2V5PXt1c2VyLmlkfT57dXNlci5sb2dpbn08L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L1Byb3ZpZGVycz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGVzdDtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLy8gcGFnZXMvc2VhcmNoLnRzeFxyXG4vKlxyXG5pbXBvcnQgeyB1c2VTZWFyY2hVc2Vyc1F1ZXJ5IH0gZnJvbSAnLi4vLi4vcmVkdXgvc2xpY2VzL3F1ZXJ5U2xpY2UnO1xyXG5pbXBvcnQgeyB3cmFwcGVyIH0gZnJvbSAnLi4vLi4vcmVkdXgvc3RvcmUnO1xyXG5pbXBvcnQgeyBnaXRodWJBcGkgfSBmcm9tICcuLi8uLi9yZWR1eC9zbGljZXMvcXVlcnlTbGljZSc7XHJcbmltcG9ydCBQcm92aWRlcnMgZnJvbSAnLi4vLi4vcmVkdXgvUHJvdmlkZXInO1xyXG4gLy8gdHlwZXMudHNcclxuZXhwb3J0IGludGVyZmFjZSBVc2VyIHtcclxuXHRsb2dpbjogc3RyaW5nO1xyXG5cdGlkOiBudW1iZXI7XHJcblx0bm9kZV9pZDogc3RyaW5nO1xyXG5cdGF2YXRhcl91cmw6IHN0cmluZztcclxuXHRncmF2YXRhcl9pZDogc3RyaW5nO1xyXG5cdHVybDogc3RyaW5nO1xyXG5cdGh0bWxfdXJsOiBzdHJpbmc7XHJcblx0Zm9sbG93ZXJzX3VybDogc3RyaW5nO1xyXG5cdGZvbGxvd2luZ191cmw6IHN0cmluZztcclxuXHRnaXN0c191cmw6IHN0cmluZztcclxuXHRzdGFycmVkX3VybDogc3RyaW5nO1xyXG5cdHN1YnNjcmlwdGlvbnNfdXJsOiBzdHJpbmc7XHJcblx0b3JnYW5pemF0aW9uc191cmw6IHN0cmluZztcclxuXHRyZXBvc191cmw6IHN0cmluZztcclxuXHRldmVudHNfdXJsOiBzdHJpbmc7XHJcblx0cmVjZWl2ZWRfZXZlbnRzX3VybDogc3RyaW5nO1xyXG5cdHR5cGU6IHN0cmluZztcclxuXHRzaXRlX2FkbWluOiBib29sZWFuO1xyXG5cdHNjb3JlOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUXVlcnlQYXJhbXMge1xyXG5cdHF1ZXJ5OiBzdHJpbmc7XHJcblx0cGFnZTogbnVtYmVyO1xyXG5cdHBlcl9wYWdlOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2VhcmNoUGFnZVByb3BzIHtcclxuXHRxdWVyeTogUXVlcnlQYXJhbXM7XHJcbn1cclxuY29uc3QgVGVzdCA9ICh7IHF1ZXJ5IH06IFNlYXJjaFBhZ2VQcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IsIGlzTG9hZGluZyB9ID0gdXNlU2VhcmNoVXNlcnNRdWVyeShxdWVyeSk7XHJcblxyXG4gIGlmIChpc0xvYWRpbmcpIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XHJcbiAgaWYgKGVycm9yKSByZXR1cm4gPGRpdj5FcnJvciBsb2FkaW5nIGRhdGE8L2Rpdj47XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UHJvdmlkZXJzPlxyXG5cclxuICAgIDxkaXY+XHJcbiAgICAgIDxoMT5TZWFyY2ggUmVzdWx0czwvaDE+XHJcbiAgICAgIHtkYXRhICYmIGRhdGEuaXRlbXMubWFwKHVzZXIgPT4gKFxyXG4gICAgICAgIDxkaXYga2V5PXt1c2VyLmlkfT57dXNlci5sb2dpbn08L2Rpdj5cclxuICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuICAgIDwvUHJvdmlkZXJzPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gd3JhcHBlci5nZXRTZXJ2ZXJTaWRlUHJvcHMoKHN0b3JlKSA9PiBhc3luYyAoY29udGV4dCkgPT4ge1xyXG4gIGNvbnN0IHsgcXVlcnksIHBhZ2UgPSAxLCBwZXJfcGFnZSA9IDEwIH0gPSBjb250ZXh0LnF1ZXJ5O1xyXG5cclxuICBhd2FpdCBzdG9yZS5kaXNwYXRjaChcclxuICAgIGdpdGh1YkFwaS5lbmRwb2ludHMuc2VhcmNoVXNlcnMuaW5pdGlhdGUoeyBxdWVyeTogU3RyaW5nKHF1ZXJ5KSB8fCAndHlwZTp1c2VyJywgcGFnZTogTnVtYmVyKHBhZ2UpLCBwZXJfcGFnZTogTnVtYmVyKHBlcl9wYWdlKSB9KVxyXG4gICk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBxdWVyeTogeyBxdWVyeTogcXVlcnkgfHwgJ3R5cGU6dXNlcicsIHBhZ2U6IE51bWJlcihwYWdlKSwgcGVyX3BhZ2U6IE51bWJlcihwZXJfcGFnZSkgfSxcclxuICAgIH0sXHJcbiAgfTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUZXN0O1xyXG5cclxuXHJcbiovIl0sIm5hbWVzIjpbInVzZVNlYXJjaFVzZXJzUXVlcnkiLCJQcm92aWRlcnMiLCJUZXN0IiwicXVlcnkiLCJkYXRhIiwiZXJyb3IiLCJpc0xvYWRpbmciLCJkaXYiLCJoMSIsIml0ZW1zIiwibWFwIiwidXNlciIsImNsYXNzTmFtZSIsImxvZ2luIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/homepage/testComp.tsx\n"));

/***/ })

});