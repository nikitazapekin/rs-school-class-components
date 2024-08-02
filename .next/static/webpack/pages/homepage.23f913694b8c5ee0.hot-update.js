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

/***/ "./src/pages/homepage/index.tsx":
/*!**************************************!*\
  !*** ./src/pages/homepage/index.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var _redux_Provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../redux/Provider */ \"./src/redux/Provider.tsx\");\n/* harmony import */ var _testComp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./testComp */ \"./src/pages/homepage/testComp.tsx\");\n\n\n\nim;\nconst Page = (param)=>{\n    let { query } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_redux_Provider__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_testComp__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                query: query\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\wotbl\\\\search-rs\\\\src\\\\pages\\\\homepage\\\\index.tsx\",\n                lineNumber: 10,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\wotbl\\\\search-rs\\\\src\\\\pages\\\\homepage\\\\index.tsx\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_c = Page;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page); /* import Providers from \"../../redux/Provider\";\r\nimport Test from \"./testComp\";\r\n\r\nconst Page = () => {\r\n  return ( <>\r\n  <Providers>\r\n    <Test />\r\n  </Providers>\r\n  </>\r\n   );\r\n}\r\n \r\nexport default Page;\r\n\r\n*/  /* // pages/search.tsx\r\nimport { useSearchUsersQuery } from '../../redux/slices/querySlice';\r\nimport { wrapper } from '../../redux/store';\r\nimport { githubApi } from '../../redux/slices/querySlice';\r\nimport Providers from '../../redux/Provider';\r\n // types.ts\r\nexport interface User {\r\n\tlogin: string;\r\n\tid: number;\r\n\tnode_id: string;\r\n\tavatar_url: string;\r\n\tgravatar_id: string;\r\n\turl: string;\r\n\thtml_url: string;\r\n\tfollowers_url: string;\r\n\tfollowing_url: string;\r\n\tgists_url: string;\r\n\tstarred_url: string;\r\n\tsubscriptions_url: string;\r\n\torganizations_url: string;\r\n\trepos_url: string;\r\n\tevents_url: string;\r\n\treceived_events_url: string;\r\n\ttype: string;\r\n\tsite_admin: boolean;\r\n\tscore: number;\r\n}\r\n\r\nexport interface QueryParams {\r\n\tquery: string;\r\n\tpage: number;\r\n\tper_page: number;\r\n}\r\n\r\nexport interface SearchPageProps {\r\n\tquery: QueryParams;\r\n}\r\nconst SearchPage = ({ query }: SearchPageProps) => {\r\n  const { data, error, isLoading } = useSearchUsersQuery(query);\r\n\r\n  if (isLoading) return <div>Loading...</div>;\r\n  if (error) return <div>Error loading data</div>;\r\n\r\n  return (\r\n    <Providers>\r\n\r\n    <div>\r\n      <h1>Search Results</h1>\r\n      {data && data.items.map(user => (\r\n        <div key={user.id}>{user.login}</div>\r\n      ))}\r\n    </div>\r\n    </Providers>\r\n  );\r\n};\r\n\r\nexport const getServerSideProps = wrapper.getServerSideProps((store) => async (context) => {\r\n  const { query, page = 1, per_page = 10 } = context.query;\r\n\r\n  await store.dispatch(\r\n    githubApi.endpoints.searchUsers.initiate({ query: String(query) || 'type:user', page: Number(page), per_page: Number(per_page) })\r\n  );\r\n\r\n  return {\r\n    props: {\r\n      query: { query: query || 'type:user', page: Number(page), per_page: Number(per_page) },\r\n    },\r\n  };\r\n});\r\n\r\nexport default SearchPage;\r\n*/  /* // pages/search.js\r\nimport { useSearchUsersQuery } from '../../redux/slices/querySlice';\r\n//import { useSearchUsersQuery } from '../path-to-your-api';\r\nimport { wrapper } from '../../redux/store';\r\n//import { githubApi } from '../path-to-your-api';\r\nimport { githubApi } from '../../redux/slices/querySlice';\r\n\r\nexport interface User {\r\n\tlogin: string;\r\n\tid: number;\r\n\tnode_id: string;\r\n\tavatar_url: string;\r\n\tgravatar_id: string;\r\n\turl: string;\r\n\thtml_url: string;\r\n\tfollowers_url: string;\r\n\tfollowing_url: string;\r\n\tgists_url: string;\r\n\tstarred_url: string;\r\n\tsubscriptions_url: string;\r\n\torganizations_url: string;\r\n\trepos_url: string;\r\n\tevents_url: string;\r\n\treceived_events_url: string;\r\n\ttype: string;\r\n\tsite_admin: boolean;\r\n\tscore: number;\r\n}\r\n\r\nconst SearchPage = ({ query }) => {\r\n  const { data, error, isLoading } = useSearchUsersQuery(query);\r\n\r\n  if (isLoading) return <div>Loading...</div>;\r\n  if (error) return <div>Error loading data</div>;\r\n\r\n  return (\r\n    <div>\r\n      <h1>Search Results</h1>\r\n      {data.items.map(user => (\r\n        <div key={user.id}>{user.login}</div>\r\n      ))}\r\n    </div>\r\n  );\r\n};\r\n\r\nexport const getServerSideProps = wrapper.getServerSideProps((store) => async (context) => {\r\n  const { query, page = 1, per_page = 10 } = context.query;\r\n\r\n  await store.dispatch(\r\n    githubApi.endpoints.searchUsers.initiate({ query: query || 'type:user', page: Number(page), per_page: Number(per_page) })\r\n  );\r\n\r\n  return {\r\n    props: {\r\n      query: { query: query || 'type:user', page: Number(page), per_page: Number(per_page) },\r\n    },\r\n  };\r\n});\r\n\r\nexport default SearchPage;\r\n*/  /*\r\nimport { useEffect } from \"react\";\r\nimport { useAppDispatch } from \"../../hooks/redux\";\r\nimport { fetchUserData } from \"../../redux/slices/appSlice\";\r\n\r\nconst Homepage = () => {\r\n \r\n    return (\r\n        <>\r\n        Homepage\r\n        </>\r\n      );\r\n}\r\n \r\nexport default Homepage;\r\n*/  /*\r\n// pages/search.js\r\nimport { useSearchUsersQuery } from '../path-to-your-api';\r\nimport { wrapper } from '../path-to-your-store';\r\nimport { githubApi } from '../path-to-your-api';\r\n\r\nconst SearchPage = ({ query }) => {\r\n  const { data, error, isLoading } = useSearchUsersQuery(query);\r\n\r\n  if (isLoading) return <div>Loading...</div>;\r\n  if (error) return <div>Error loading data</div>;\r\n\r\n  return (\r\n    <div>\r\n      <h1>Search Results</h1>\r\n      {data.items.map(user => (\r\n        <div key={user.id}>{user.login}</div>\r\n      ))}\r\n    </div>\r\n  );\r\n};\r\n\r\nexport const getServerSideProps = wrapper.getServerSideProps((store) => async (context) => {\r\n  const { query, page = 1, per_page = 10 } = context.query;\r\n\r\n  await store.dispatch(\r\n    githubApi.endpoints.searchUsers.initiate({ query: query || 'type:user', page: Number(page), per_page: Number(per_page) })\r\n  );\r\n\r\n  return {\r\n    props: {\r\n      query: { query: query || 'type:user', page: Number(page), per_page: Number(per_page) },\r\n    },\r\n  };\r\n});\r\n\r\nexport default SearchPage;\r\n\r\n*/ \nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaG9tZXBhZ2UvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTZDO0FBQ2Y7QUFHOUJFO0FBQ0EsTUFBTUMsT0FBTztRQUFDLEVBQUVDLEtBQUssRUFBRTtJQUNyQixxQkFDRTtrQkFDRSw0RUFBQ0osdURBQVNBO3NCQUNSLDRFQUFDQyxpREFBSUE7Z0JBQUNHLE9BQU9BOzs7Ozs7Ozs7Ozs7QUFJckI7S0FSTUQ7O0FBV04sK0RBQWVBLElBQUlBLEVBQUMsQ0FLcEI7Ozs7Ozs7Ozs7Ozs7O0FBY0EsSUFNQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1RUEsSUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNERBLElBR0E7Ozs7Ozs7Ozs7Ozs7OztBQWVBLElBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0NBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9ob21lcGFnZS9pbmRleC50c3g/NjAwNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvdmlkZXJzIGZyb20gXCIuLi8uLi9yZWR1eC9Qcm92aWRlclwiO1xyXG5pbXBvcnQgVGVzdCBmcm9tIFwiLi90ZXN0Q29tcFwiO1xyXG4vL2ltcG9ydCB7IGdldFNlcnZlclNpZGVQcm9wcyB9IGZyb20gJy4vc2VhcmNoJzsgLy8gSW1wb3J0IGdldFNlcnZlclNpZGVQcm9wcyBmcm9tIHRoZSBzZWFyY2ggZmlsZVxyXG5pbXBvcnQgeyBnZXRTZXJ2ZXJTaWRlUHJvcHMgfSBmcm9tIFwiLi9zZWFyY2hcIjtcclxuaW1cclxuY29uc3QgUGFnZSA9ICh7IHF1ZXJ5IH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPFByb3ZpZGVycz5cclxuICAgICAgICA8VGVzdCBxdWVyeT17cXVlcnl9IC8+XHJcbiAgICAgIDwvUHJvdmlkZXJzPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCB7IGdldFNlcnZlclNpZGVQcm9wcyB9OyAvLyBFeHBvcnQgZ2V0U2VydmVyU2lkZVByb3BzXHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2U7XHJcblxyXG5cclxuXHJcblxyXG4vKiBpbXBvcnQgUHJvdmlkZXJzIGZyb20gXCIuLi8uLi9yZWR1eC9Qcm92aWRlclwiO1xyXG5pbXBvcnQgVGVzdCBmcm9tIFwiLi90ZXN0Q29tcFwiO1xyXG5cclxuY29uc3QgUGFnZSA9ICgpID0+IHtcclxuICByZXR1cm4gKCA8PlxyXG4gIDxQcm92aWRlcnM+XHJcbiAgICA8VGVzdCAvPlxyXG4gIDwvUHJvdmlkZXJzPlxyXG4gIDwvPlxyXG4gICApO1xyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgUGFnZTtcclxuXHJcbiovXHJcblxyXG5cclxuXHJcblxyXG5cclxuLyogLy8gcGFnZXMvc2VhcmNoLnRzeFxyXG5pbXBvcnQgeyB1c2VTZWFyY2hVc2Vyc1F1ZXJ5IH0gZnJvbSAnLi4vLi4vcmVkdXgvc2xpY2VzL3F1ZXJ5U2xpY2UnO1xyXG5pbXBvcnQgeyB3cmFwcGVyIH0gZnJvbSAnLi4vLi4vcmVkdXgvc3RvcmUnO1xyXG5pbXBvcnQgeyBnaXRodWJBcGkgfSBmcm9tICcuLi8uLi9yZWR1eC9zbGljZXMvcXVlcnlTbGljZSc7XHJcbmltcG9ydCBQcm92aWRlcnMgZnJvbSAnLi4vLi4vcmVkdXgvUHJvdmlkZXInO1xyXG4gLy8gdHlwZXMudHNcclxuZXhwb3J0IGludGVyZmFjZSBVc2VyIHtcclxuXHRsb2dpbjogc3RyaW5nO1xyXG5cdGlkOiBudW1iZXI7XHJcblx0bm9kZV9pZDogc3RyaW5nO1xyXG5cdGF2YXRhcl91cmw6IHN0cmluZztcclxuXHRncmF2YXRhcl9pZDogc3RyaW5nO1xyXG5cdHVybDogc3RyaW5nO1xyXG5cdGh0bWxfdXJsOiBzdHJpbmc7XHJcblx0Zm9sbG93ZXJzX3VybDogc3RyaW5nO1xyXG5cdGZvbGxvd2luZ191cmw6IHN0cmluZztcclxuXHRnaXN0c191cmw6IHN0cmluZztcclxuXHRzdGFycmVkX3VybDogc3RyaW5nO1xyXG5cdHN1YnNjcmlwdGlvbnNfdXJsOiBzdHJpbmc7XHJcblx0b3JnYW5pemF0aW9uc191cmw6IHN0cmluZztcclxuXHRyZXBvc191cmw6IHN0cmluZztcclxuXHRldmVudHNfdXJsOiBzdHJpbmc7XHJcblx0cmVjZWl2ZWRfZXZlbnRzX3VybDogc3RyaW5nO1xyXG5cdHR5cGU6IHN0cmluZztcclxuXHRzaXRlX2FkbWluOiBib29sZWFuO1xyXG5cdHNjb3JlOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUXVlcnlQYXJhbXMge1xyXG5cdHF1ZXJ5OiBzdHJpbmc7XHJcblx0cGFnZTogbnVtYmVyO1xyXG5cdHBlcl9wYWdlOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2VhcmNoUGFnZVByb3BzIHtcclxuXHRxdWVyeTogUXVlcnlQYXJhbXM7XHJcbn1cclxuY29uc3QgU2VhcmNoUGFnZSA9ICh7IHF1ZXJ5IH06IFNlYXJjaFBhZ2VQcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IsIGlzTG9hZGluZyB9ID0gdXNlU2VhcmNoVXNlcnNRdWVyeShxdWVyeSk7XHJcblxyXG4gIGlmIChpc0xvYWRpbmcpIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XHJcbiAgaWYgKGVycm9yKSByZXR1cm4gPGRpdj5FcnJvciBsb2FkaW5nIGRhdGE8L2Rpdj47XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UHJvdmlkZXJzPlxyXG5cclxuICAgIDxkaXY+XHJcbiAgICAgIDxoMT5TZWFyY2ggUmVzdWx0czwvaDE+XHJcbiAgICAgIHtkYXRhICYmIGRhdGEuaXRlbXMubWFwKHVzZXIgPT4gKFxyXG4gICAgICAgIDxkaXYga2V5PXt1c2VyLmlkfT57dXNlci5sb2dpbn08L2Rpdj5cclxuICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuICAgIDwvUHJvdmlkZXJzPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gd3JhcHBlci5nZXRTZXJ2ZXJTaWRlUHJvcHMoKHN0b3JlKSA9PiBhc3luYyAoY29udGV4dCkgPT4ge1xyXG4gIGNvbnN0IHsgcXVlcnksIHBhZ2UgPSAxLCBwZXJfcGFnZSA9IDEwIH0gPSBjb250ZXh0LnF1ZXJ5O1xyXG5cclxuICBhd2FpdCBzdG9yZS5kaXNwYXRjaChcclxuICAgIGdpdGh1YkFwaS5lbmRwb2ludHMuc2VhcmNoVXNlcnMuaW5pdGlhdGUoeyBxdWVyeTogU3RyaW5nKHF1ZXJ5KSB8fCAndHlwZTp1c2VyJywgcGFnZTogTnVtYmVyKHBhZ2UpLCBwZXJfcGFnZTogTnVtYmVyKHBlcl9wYWdlKSB9KVxyXG4gICk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBxdWVyeTogeyBxdWVyeTogcXVlcnkgfHwgJ3R5cGU6dXNlcicsIHBhZ2U6IE51bWJlcihwYWdlKSwgcGVyX3BhZ2U6IE51bWJlcihwZXJfcGFnZSkgfSxcclxuICAgIH0sXHJcbiAgfTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hQYWdlO1xyXG4qL1xyXG5cclxuLyogLy8gcGFnZXMvc2VhcmNoLmpzXHJcbmltcG9ydCB7IHVzZVNlYXJjaFVzZXJzUXVlcnkgfSBmcm9tICcuLi8uLi9yZWR1eC9zbGljZXMvcXVlcnlTbGljZSc7XHJcbi8vaW1wb3J0IHsgdXNlU2VhcmNoVXNlcnNRdWVyeSB9IGZyb20gJy4uL3BhdGgtdG8teW91ci1hcGknO1xyXG5pbXBvcnQgeyB3cmFwcGVyIH0gZnJvbSAnLi4vLi4vcmVkdXgvc3RvcmUnO1xyXG4vL2ltcG9ydCB7IGdpdGh1YkFwaSB9IGZyb20gJy4uL3BhdGgtdG8teW91ci1hcGknO1xyXG5pbXBvcnQgeyBnaXRodWJBcGkgfSBmcm9tICcuLi8uLi9yZWR1eC9zbGljZXMvcXVlcnlTbGljZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFVzZXIge1xyXG5cdGxvZ2luOiBzdHJpbmc7XHJcblx0aWQ6IG51bWJlcjtcclxuXHRub2RlX2lkOiBzdHJpbmc7XHJcblx0YXZhdGFyX3VybDogc3RyaW5nO1xyXG5cdGdyYXZhdGFyX2lkOiBzdHJpbmc7XHJcblx0dXJsOiBzdHJpbmc7XHJcblx0aHRtbF91cmw6IHN0cmluZztcclxuXHRmb2xsb3dlcnNfdXJsOiBzdHJpbmc7XHJcblx0Zm9sbG93aW5nX3VybDogc3RyaW5nO1xyXG5cdGdpc3RzX3VybDogc3RyaW5nO1xyXG5cdHN0YXJyZWRfdXJsOiBzdHJpbmc7XHJcblx0c3Vic2NyaXB0aW9uc191cmw6IHN0cmluZztcclxuXHRvcmdhbml6YXRpb25zX3VybDogc3RyaW5nO1xyXG5cdHJlcG9zX3VybDogc3RyaW5nO1xyXG5cdGV2ZW50c191cmw6IHN0cmluZztcclxuXHRyZWNlaXZlZF9ldmVudHNfdXJsOiBzdHJpbmc7XHJcblx0dHlwZTogc3RyaW5nO1xyXG5cdHNpdGVfYWRtaW46IGJvb2xlYW47XHJcblx0c2NvcmU6IG51bWJlcjtcclxufVxyXG5cclxuY29uc3QgU2VhcmNoUGFnZSA9ICh7IHF1ZXJ5IH0pID0+IHtcclxuICBjb25zdCB7IGRhdGEsIGVycm9yLCBpc0xvYWRpbmcgfSA9IHVzZVNlYXJjaFVzZXJzUXVlcnkocXVlcnkpO1xyXG5cclxuICBpZiAoaXNMb2FkaW5nKSByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xyXG4gIGlmIChlcnJvcikgcmV0dXJuIDxkaXY+RXJyb3IgbG9hZGluZyBkYXRhPC9kaXY+O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgxPlNlYXJjaCBSZXN1bHRzPC9oMT5cclxuICAgICAge2RhdGEuaXRlbXMubWFwKHVzZXIgPT4gKFxyXG4gICAgICAgIDxkaXYga2V5PXt1c2VyLmlkfT57dXNlci5sb2dpbn08L2Rpdj5cclxuICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IHdyYXBwZXIuZ2V0U2VydmVyU2lkZVByb3BzKChzdG9yZSkgPT4gYXN5bmMgKGNvbnRleHQpID0+IHtcclxuICBjb25zdCB7IHF1ZXJ5LCBwYWdlID0gMSwgcGVyX3BhZ2UgPSAxMCB9ID0gY29udGV4dC5xdWVyeTtcclxuXHJcbiAgYXdhaXQgc3RvcmUuZGlzcGF0Y2goXHJcbiAgICBnaXRodWJBcGkuZW5kcG9pbnRzLnNlYXJjaFVzZXJzLmluaXRpYXRlKHsgcXVlcnk6IHF1ZXJ5IHx8ICd0eXBlOnVzZXInLCBwYWdlOiBOdW1iZXIocGFnZSksIHBlcl9wYWdlOiBOdW1iZXIocGVyX3BhZ2UpIH0pXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHF1ZXJ5OiB7IHF1ZXJ5OiBxdWVyeSB8fCAndHlwZTp1c2VyJywgcGFnZTogTnVtYmVyKHBhZ2UpLCBwZXJfcGFnZTogTnVtYmVyKHBlcl9wYWdlKSB9LFxyXG4gICAgfSxcclxuICB9O1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaFBhZ2U7XHJcbiovXHJcblxyXG5cclxuLypcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZUFwcERpc3BhdGNoIH0gZnJvbSBcIi4uLy4uL2hvb2tzL3JlZHV4XCI7XHJcbmltcG9ydCB7IGZldGNoVXNlckRhdGEgfSBmcm9tIFwiLi4vLi4vcmVkdXgvc2xpY2VzL2FwcFNsaWNlXCI7XHJcblxyXG5jb25zdCBIb21lcGFnZSA9ICgpID0+IHtcclxuIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgIEhvbWVwYWdlXHJcbiAgICAgICAgPC8+XHJcbiAgICAgICk7XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBIb21lcGFnZTtcclxuKi9cclxuXHJcbi8qXHJcbi8vIHBhZ2VzL3NlYXJjaC5qc1xyXG5pbXBvcnQgeyB1c2VTZWFyY2hVc2Vyc1F1ZXJ5IH0gZnJvbSAnLi4vcGF0aC10by15b3VyLWFwaSc7XHJcbmltcG9ydCB7IHdyYXBwZXIgfSBmcm9tICcuLi9wYXRoLXRvLXlvdXItc3RvcmUnO1xyXG5pbXBvcnQgeyBnaXRodWJBcGkgfSBmcm9tICcuLi9wYXRoLXRvLXlvdXItYXBpJztcclxuXHJcbmNvbnN0IFNlYXJjaFBhZ2UgPSAoeyBxdWVyeSB9KSA9PiB7XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciwgaXNMb2FkaW5nIH0gPSB1c2VTZWFyY2hVc2Vyc1F1ZXJ5KHF1ZXJ5KTtcclxuXHJcbiAgaWYgKGlzTG9hZGluZykgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcclxuICBpZiAoZXJyb3IpIHJldHVybiA8ZGl2PkVycm9yIGxvYWRpbmcgZGF0YTwvZGl2PjtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxoMT5TZWFyY2ggUmVzdWx0czwvaDE+XHJcbiAgICAgIHtkYXRhLml0ZW1zLm1hcCh1c2VyID0+IChcclxuICAgICAgICA8ZGl2IGtleT17dXNlci5pZH0+e3VzZXIubG9naW59PC9kaXY+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSB3cmFwcGVyLmdldFNlcnZlclNpZGVQcm9wcygoc3RvcmUpID0+IGFzeW5jIChjb250ZXh0KSA9PiB7XHJcbiAgY29uc3QgeyBxdWVyeSwgcGFnZSA9IDEsIHBlcl9wYWdlID0gMTAgfSA9IGNvbnRleHQucXVlcnk7XHJcblxyXG4gIGF3YWl0IHN0b3JlLmRpc3BhdGNoKFxyXG4gICAgZ2l0aHViQXBpLmVuZHBvaW50cy5zZWFyY2hVc2Vycy5pbml0aWF0ZSh7IHF1ZXJ5OiBxdWVyeSB8fCAndHlwZTp1c2VyJywgcGFnZTogTnVtYmVyKHBhZ2UpLCBwZXJfcGFnZTogTnVtYmVyKHBlcl9wYWdlKSB9KVxyXG4gICk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBxdWVyeTogeyBxdWVyeTogcXVlcnkgfHwgJ3R5cGU6dXNlcicsIHBhZ2U6IE51bWJlcihwYWdlKSwgcGVyX3BhZ2U6IE51bWJlcihwZXJfcGFnZSkgfSxcclxuICAgIH0sXHJcbiAgfTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hQYWdlO1xyXG5cclxuKi8iXSwibmFtZXMiOlsiUHJvdmlkZXJzIiwiVGVzdCIsImltIiwiUGFnZSIsInF1ZXJ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/homepage/index.tsx\n"));

/***/ })

});