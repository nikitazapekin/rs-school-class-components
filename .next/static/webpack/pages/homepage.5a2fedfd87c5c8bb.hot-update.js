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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var _redux_Provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../redux/Provider */ \"./src/redux/Provider.tsx\");\n/* harmony import */ var _testComp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./testComp */ \"./src/pages/homepage/testComp.tsx\");\n\n\n\n//import { getServerSideProps } from './search'; // Import getServerSideProps from the search file\nconst Page = (param)=>{\n    let { query } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_redux_Provider__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_testComp__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                query: query\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\wotbl\\\\search-rs\\\\src\\\\pages\\\\homepage\\\\index.tsx\",\n                lineNumber: 9,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\wotbl\\\\search-rs\\\\src\\\\pages\\\\homepage\\\\index.tsx\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_c = Page;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page); /* import Providers from \"../../redux/Provider\";\r\nimport Test from \"./testComp\";\r\n\r\nconst Page = () => {\r\n  return ( <>\r\n  <Providers>\r\n    <Test />\r\n  </Providers>\r\n  </>\r\n   );\r\n}\r\n \r\nexport default Page;\r\n\r\n*/  /* // pages/search.tsx\r\nimport { useSearchUsersQuery } from '../../redux/slices/querySlice';\r\nimport { wrapper } from '../../redux/store';\r\nimport { githubApi } from '../../redux/slices/querySlice';\r\nimport Providers from '../../redux/Provider';\r\n // types.ts\r\nexport interface User {\r\n\tlogin: string;\r\n\tid: number;\r\n\tnode_id: string;\r\n\tavatar_url: string;\r\n\tgravatar_id: string;\r\n\turl: string;\r\n\thtml_url: string;\r\n\tfollowers_url: string;\r\n\tfollowing_url: string;\r\n\tgists_url: string;\r\n\tstarred_url: string;\r\n\tsubscriptions_url: string;\r\n\torganizations_url: string;\r\n\trepos_url: string;\r\n\tevents_url: string;\r\n\treceived_events_url: string;\r\n\ttype: string;\r\n\tsite_admin: boolean;\r\n\tscore: number;\r\n}\r\n\r\nexport interface QueryParams {\r\n\tquery: string;\r\n\tpage: number;\r\n\tper_page: number;\r\n}\r\n\r\nexport interface SearchPageProps {\r\n\tquery: QueryParams;\r\n}\r\nconst SearchPage = ({ query }: SearchPageProps) => {\r\n  const { data, error, isLoading } = useSearchUsersQuery(query);\r\n\r\n  if (isLoading) return <div>Loading...</div>;\r\n  if (error) return <div>Error loading data</div>;\r\n\r\n  return (\r\n    <Providers>\r\n\r\n    <div>\r\n      <h1>Search Results</h1>\r\n      {data && data.items.map(user => (\r\n        <div key={user.id}>{user.login}</div>\r\n      ))}\r\n    </div>\r\n    </Providers>\r\n  );\r\n};\r\n\r\nexport const getServerSideProps = wrapper.getServerSideProps((store) => async (context) => {\r\n  const { query, page = 1, per_page = 10 } = context.query;\r\n\r\n  await store.dispatch(\r\n    githubApi.endpoints.searchUsers.initiate({ query: String(query) || 'type:user', page: Number(page), per_page: Number(per_page) })\r\n  );\r\n\r\n  return {\r\n    props: {\r\n      query: { query: query || 'type:user', page: Number(page), per_page: Number(per_page) },\r\n    },\r\n  };\r\n});\r\n\r\nexport default SearchPage;\r\n*/  /* // pages/search.js\r\nimport { useSearchUsersQuery } from '../../redux/slices/querySlice';\r\n//import { useSearchUsersQuery } from '../path-to-your-api';\r\nimport { wrapper } from '../../redux/store';\r\n//import { githubApi } from '../path-to-your-api';\r\nimport { githubApi } from '../../redux/slices/querySlice';\r\n\r\nexport interface User {\r\n\tlogin: string;\r\n\tid: number;\r\n\tnode_id: string;\r\n\tavatar_url: string;\r\n\tgravatar_id: string;\r\n\turl: string;\r\n\thtml_url: string;\r\n\tfollowers_url: string;\r\n\tfollowing_url: string;\r\n\tgists_url: string;\r\n\tstarred_url: string;\r\n\tsubscriptions_url: string;\r\n\torganizations_url: string;\r\n\trepos_url: string;\r\n\tevents_url: string;\r\n\treceived_events_url: string;\r\n\ttype: string;\r\n\tsite_admin: boolean;\r\n\tscore: number;\r\n}\r\n\r\nconst SearchPage = ({ query }) => {\r\n  const { data, error, isLoading } = useSearchUsersQuery(query);\r\n\r\n  if (isLoading) return <div>Loading...</div>;\r\n  if (error) return <div>Error loading data</div>;\r\n\r\n  return (\r\n    <div>\r\n      <h1>Search Results</h1>\r\n      {data.items.map(user => (\r\n        <div key={user.id}>{user.login}</div>\r\n      ))}\r\n    </div>\r\n  );\r\n};\r\n\r\nexport const getServerSideProps = wrapper.getServerSideProps((store) => async (context) => {\r\n  const { query, page = 1, per_page = 10 } = context.query;\r\n\r\n  await store.dispatch(\r\n    githubApi.endpoints.searchUsers.initiate({ query: query || 'type:user', page: Number(page), per_page: Number(per_page) })\r\n  );\r\n\r\n  return {\r\n    props: {\r\n      query: { query: query || 'type:user', page: Number(page), per_page: Number(per_page) },\r\n    },\r\n  };\r\n});\r\n\r\nexport default SearchPage;\r\n*/  /*\r\nimport { useEffect } from \"react\";\r\nimport { useAppDispatch } from \"../../hooks/redux\";\r\nimport { fetchUserData } from \"../../redux/slices/appSlice\";\r\n\r\nconst Homepage = () => {\r\n \r\n    return (\r\n        <>\r\n        Homepage\r\n        </>\r\n      );\r\n}\r\n \r\nexport default Homepage;\r\n*/  /*\r\n// pages/search.js\r\nimport { useSearchUsersQuery } from '../path-to-your-api';\r\nimport { wrapper } from '../path-to-your-store';\r\nimport { githubApi } from '../path-to-your-api';\r\n\r\nconst SearchPage = ({ query }) => {\r\n  const { data, error, isLoading } = useSearchUsersQuery(query);\r\n\r\n  if (isLoading) return <div>Loading...</div>;\r\n  if (error) return <div>Error loading data</div>;\r\n\r\n  return (\r\n    <div>\r\n      <h1>Search Results</h1>\r\n      {data.items.map(user => (\r\n        <div key={user.id}>{user.login}</div>\r\n      ))}\r\n    </div>\r\n  );\r\n};\r\n\r\nexport const getServerSideProps = wrapper.getServerSideProps((store) => async (context) => {\r\n  const { query, page = 1, per_page = 10 } = context.query;\r\n\r\n  await store.dispatch(\r\n    githubApi.endpoints.searchUsers.initiate({ query: query || 'type:user', page: Number(page), per_page: Number(per_page) })\r\n  );\r\n\r\n  return {\r\n    props: {\r\n      query: { query: query || 'type:user', page: Number(page), per_page: Number(per_page) },\r\n    },\r\n  };\r\n});\r\n\r\nexport default SearchPage;\r\n\r\n*/ \nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaG9tZXBhZ2UvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTZDO0FBQ2Y7QUFDOUIsa0dBQWtHO0FBRWxHLE1BQU1FLE9BQU87UUFBQyxFQUFFQyxLQUFLLEVBQUU7SUFDckIscUJBQ0U7a0JBQ0UsNEVBQUNILHVEQUFTQTtzQkFDUiw0RUFBQ0MsaURBQUlBO2dCQUFDRSxPQUFPQTs7Ozs7Ozs7Ozs7O0FBSXJCO0tBUk1EOztBQVdOLCtEQUFlQSxJQUFJQSxFQUFDLENBS3BCOzs7Ozs7Ozs7Ozs7OztBQWNBLElBTUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUVBLElBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTREQSxJQUdBOzs7Ozs7Ozs7Ozs7Ozs7QUFlQSxJQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaG9tZXBhZ2UvaW5kZXgudHN4PzYwMDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3ZpZGVycyBmcm9tIFwiLi4vLi4vcmVkdXgvUHJvdmlkZXJcIjtcclxuaW1wb3J0IFRlc3QgZnJvbSBcIi4vdGVzdENvbXBcIjtcclxuLy9pbXBvcnQgeyBnZXRTZXJ2ZXJTaWRlUHJvcHMgfSBmcm9tICcuL3NlYXJjaCc7IC8vIEltcG9ydCBnZXRTZXJ2ZXJTaWRlUHJvcHMgZnJvbSB0aGUgc2VhcmNoIGZpbGVcclxuXHJcbmNvbnN0IFBhZ2UgPSAoeyBxdWVyeSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxQcm92aWRlcnM+XHJcbiAgICAgICAgPFRlc3QgcXVlcnk9e3F1ZXJ5fSAvPlxyXG4gICAgICA8L1Byb3ZpZGVycz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgeyBnZXRTZXJ2ZXJTaWRlUHJvcHMgfTsgLy8gRXhwb3J0IGdldFNlcnZlclNpZGVQcm9wc1xyXG5leHBvcnQgZGVmYXVsdCBQYWdlO1xyXG5cclxuXHJcblxyXG5cclxuLyogaW1wb3J0IFByb3ZpZGVycyBmcm9tIFwiLi4vLi4vcmVkdXgvUHJvdmlkZXJcIjtcclxuaW1wb3J0IFRlc3QgZnJvbSBcIi4vdGVzdENvbXBcIjtcclxuXHJcbmNvbnN0IFBhZ2UgPSAoKSA9PiB7XHJcbiAgcmV0dXJuICggPD5cclxuICA8UHJvdmlkZXJzPlxyXG4gICAgPFRlc3QgLz5cclxuICA8L1Byb3ZpZGVycz5cclxuICA8Lz5cclxuICAgKTtcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2U7XHJcblxyXG4qL1xyXG5cclxuXHJcblxyXG5cclxuXHJcbi8qIC8vIHBhZ2VzL3NlYXJjaC50c3hcclxuaW1wb3J0IHsgdXNlU2VhcmNoVXNlcnNRdWVyeSB9IGZyb20gJy4uLy4uL3JlZHV4L3NsaWNlcy9xdWVyeVNsaWNlJztcclxuaW1wb3J0IHsgd3JhcHBlciB9IGZyb20gJy4uLy4uL3JlZHV4L3N0b3JlJztcclxuaW1wb3J0IHsgZ2l0aHViQXBpIH0gZnJvbSAnLi4vLi4vcmVkdXgvc2xpY2VzL3F1ZXJ5U2xpY2UnO1xyXG5pbXBvcnQgUHJvdmlkZXJzIGZyb20gJy4uLy4uL3JlZHV4L1Byb3ZpZGVyJztcclxuIC8vIHR5cGVzLnRzXHJcbmV4cG9ydCBpbnRlcmZhY2UgVXNlciB7XHJcblx0bG9naW46IHN0cmluZztcclxuXHRpZDogbnVtYmVyO1xyXG5cdG5vZGVfaWQ6IHN0cmluZztcclxuXHRhdmF0YXJfdXJsOiBzdHJpbmc7XHJcblx0Z3JhdmF0YXJfaWQ6IHN0cmluZztcclxuXHR1cmw6IHN0cmluZztcclxuXHRodG1sX3VybDogc3RyaW5nO1xyXG5cdGZvbGxvd2Vyc191cmw6IHN0cmluZztcclxuXHRmb2xsb3dpbmdfdXJsOiBzdHJpbmc7XHJcblx0Z2lzdHNfdXJsOiBzdHJpbmc7XHJcblx0c3RhcnJlZF91cmw6IHN0cmluZztcclxuXHRzdWJzY3JpcHRpb25zX3VybDogc3RyaW5nO1xyXG5cdG9yZ2FuaXphdGlvbnNfdXJsOiBzdHJpbmc7XHJcblx0cmVwb3NfdXJsOiBzdHJpbmc7XHJcblx0ZXZlbnRzX3VybDogc3RyaW5nO1xyXG5cdHJlY2VpdmVkX2V2ZW50c191cmw6IHN0cmluZztcclxuXHR0eXBlOiBzdHJpbmc7XHJcblx0c2l0ZV9hZG1pbjogYm9vbGVhbjtcclxuXHRzY29yZTogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFF1ZXJ5UGFyYW1zIHtcclxuXHRxdWVyeTogc3RyaW5nO1xyXG5cdHBhZ2U6IG51bWJlcjtcclxuXHRwZXJfcGFnZTogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNlYXJjaFBhZ2VQcm9wcyB7XHJcblx0cXVlcnk6IFF1ZXJ5UGFyYW1zO1xyXG59XHJcbmNvbnN0IFNlYXJjaFBhZ2UgPSAoeyBxdWVyeSB9OiBTZWFyY2hQYWdlUHJvcHMpID0+IHtcclxuICBjb25zdCB7IGRhdGEsIGVycm9yLCBpc0xvYWRpbmcgfSA9IHVzZVNlYXJjaFVzZXJzUXVlcnkocXVlcnkpO1xyXG5cclxuICBpZiAoaXNMb2FkaW5nKSByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xyXG4gIGlmIChlcnJvcikgcmV0dXJuIDxkaXY+RXJyb3IgbG9hZGluZyBkYXRhPC9kaXY+O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFByb3ZpZGVycz5cclxuXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aDE+U2VhcmNoIFJlc3VsdHM8L2gxPlxyXG4gICAgICB7ZGF0YSAmJiBkYXRhLml0ZW1zLm1hcCh1c2VyID0+IChcclxuICAgICAgICA8ZGl2IGtleT17dXNlci5pZH0+e3VzZXIubG9naW59PC9kaXY+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgICA8L1Byb3ZpZGVycz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IHdyYXBwZXIuZ2V0U2VydmVyU2lkZVByb3BzKChzdG9yZSkgPT4gYXN5bmMgKGNvbnRleHQpID0+IHtcclxuICBjb25zdCB7IHF1ZXJ5LCBwYWdlID0gMSwgcGVyX3BhZ2UgPSAxMCB9ID0gY29udGV4dC5xdWVyeTtcclxuXHJcbiAgYXdhaXQgc3RvcmUuZGlzcGF0Y2goXHJcbiAgICBnaXRodWJBcGkuZW5kcG9pbnRzLnNlYXJjaFVzZXJzLmluaXRpYXRlKHsgcXVlcnk6IFN0cmluZyhxdWVyeSkgfHwgJ3R5cGU6dXNlcicsIHBhZ2U6IE51bWJlcihwYWdlKSwgcGVyX3BhZ2U6IE51bWJlcihwZXJfcGFnZSkgfSlcclxuICApO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgcXVlcnk6IHsgcXVlcnk6IHF1ZXJ5IHx8ICd0eXBlOnVzZXInLCBwYWdlOiBOdW1iZXIocGFnZSksIHBlcl9wYWdlOiBOdW1iZXIocGVyX3BhZ2UpIH0sXHJcbiAgICB9LFxyXG4gIH07XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoUGFnZTtcclxuKi9cclxuXHJcbi8qIC8vIHBhZ2VzL3NlYXJjaC5qc1xyXG5pbXBvcnQgeyB1c2VTZWFyY2hVc2Vyc1F1ZXJ5IH0gZnJvbSAnLi4vLi4vcmVkdXgvc2xpY2VzL3F1ZXJ5U2xpY2UnO1xyXG4vL2ltcG9ydCB7IHVzZVNlYXJjaFVzZXJzUXVlcnkgfSBmcm9tICcuLi9wYXRoLXRvLXlvdXItYXBpJztcclxuaW1wb3J0IHsgd3JhcHBlciB9IGZyb20gJy4uLy4uL3JlZHV4L3N0b3JlJztcclxuLy9pbXBvcnQgeyBnaXRodWJBcGkgfSBmcm9tICcuLi9wYXRoLXRvLXlvdXItYXBpJztcclxuaW1wb3J0IHsgZ2l0aHViQXBpIH0gZnJvbSAnLi4vLi4vcmVkdXgvc2xpY2VzL3F1ZXJ5U2xpY2UnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBVc2VyIHtcclxuXHRsb2dpbjogc3RyaW5nO1xyXG5cdGlkOiBudW1iZXI7XHJcblx0bm9kZV9pZDogc3RyaW5nO1xyXG5cdGF2YXRhcl91cmw6IHN0cmluZztcclxuXHRncmF2YXRhcl9pZDogc3RyaW5nO1xyXG5cdHVybDogc3RyaW5nO1xyXG5cdGh0bWxfdXJsOiBzdHJpbmc7XHJcblx0Zm9sbG93ZXJzX3VybDogc3RyaW5nO1xyXG5cdGZvbGxvd2luZ191cmw6IHN0cmluZztcclxuXHRnaXN0c191cmw6IHN0cmluZztcclxuXHRzdGFycmVkX3VybDogc3RyaW5nO1xyXG5cdHN1YnNjcmlwdGlvbnNfdXJsOiBzdHJpbmc7XHJcblx0b3JnYW5pemF0aW9uc191cmw6IHN0cmluZztcclxuXHRyZXBvc191cmw6IHN0cmluZztcclxuXHRldmVudHNfdXJsOiBzdHJpbmc7XHJcblx0cmVjZWl2ZWRfZXZlbnRzX3VybDogc3RyaW5nO1xyXG5cdHR5cGU6IHN0cmluZztcclxuXHRzaXRlX2FkbWluOiBib29sZWFuO1xyXG5cdHNjb3JlOiBudW1iZXI7XHJcbn1cclxuXHJcbmNvbnN0IFNlYXJjaFBhZ2UgPSAoeyBxdWVyeSB9KSA9PiB7XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciwgaXNMb2FkaW5nIH0gPSB1c2VTZWFyY2hVc2Vyc1F1ZXJ5KHF1ZXJ5KTtcclxuXHJcbiAgaWYgKGlzTG9hZGluZykgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcclxuICBpZiAoZXJyb3IpIHJldHVybiA8ZGl2PkVycm9yIGxvYWRpbmcgZGF0YTwvZGl2PjtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxoMT5TZWFyY2ggUmVzdWx0czwvaDE+XHJcbiAgICAgIHtkYXRhLml0ZW1zLm1hcCh1c2VyID0+IChcclxuICAgICAgICA8ZGl2IGtleT17dXNlci5pZH0+e3VzZXIubG9naW59PC9kaXY+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSB3cmFwcGVyLmdldFNlcnZlclNpZGVQcm9wcygoc3RvcmUpID0+IGFzeW5jIChjb250ZXh0KSA9PiB7XHJcbiAgY29uc3QgeyBxdWVyeSwgcGFnZSA9IDEsIHBlcl9wYWdlID0gMTAgfSA9IGNvbnRleHQucXVlcnk7XHJcblxyXG4gIGF3YWl0IHN0b3JlLmRpc3BhdGNoKFxyXG4gICAgZ2l0aHViQXBpLmVuZHBvaW50cy5zZWFyY2hVc2Vycy5pbml0aWF0ZSh7IHF1ZXJ5OiBxdWVyeSB8fCAndHlwZTp1c2VyJywgcGFnZTogTnVtYmVyKHBhZ2UpLCBwZXJfcGFnZTogTnVtYmVyKHBlcl9wYWdlKSB9KVxyXG4gICk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBxdWVyeTogeyBxdWVyeTogcXVlcnkgfHwgJ3R5cGU6dXNlcicsIHBhZ2U6IE51bWJlcihwYWdlKSwgcGVyX3BhZ2U6IE51bWJlcihwZXJfcGFnZSkgfSxcclxuICAgIH0sXHJcbiAgfTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hQYWdlO1xyXG4qL1xyXG5cclxuXHJcbi8qXHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VBcHBEaXNwYXRjaCB9IGZyb20gXCIuLi8uLi9ob29rcy9yZWR1eFwiO1xyXG5pbXBvcnQgeyBmZXRjaFVzZXJEYXRhIH0gZnJvbSBcIi4uLy4uL3JlZHV4L3NsaWNlcy9hcHBTbGljZVwiO1xyXG5cclxuY29uc3QgSG9tZXBhZ2UgPSAoKSA9PiB7XHJcbiBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICBIb21lcGFnZVxyXG4gICAgICAgIDwvPlxyXG4gICAgICApO1xyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgSG9tZXBhZ2U7XHJcbiovXHJcblxyXG4vKlxyXG4vLyBwYWdlcy9zZWFyY2guanNcclxuaW1wb3J0IHsgdXNlU2VhcmNoVXNlcnNRdWVyeSB9IGZyb20gJy4uL3BhdGgtdG8teW91ci1hcGknO1xyXG5pbXBvcnQgeyB3cmFwcGVyIH0gZnJvbSAnLi4vcGF0aC10by15b3VyLXN0b3JlJztcclxuaW1wb3J0IHsgZ2l0aHViQXBpIH0gZnJvbSAnLi4vcGF0aC10by15b3VyLWFwaSc7XHJcblxyXG5jb25zdCBTZWFyY2hQYWdlID0gKHsgcXVlcnkgfSkgPT4ge1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IsIGlzTG9hZGluZyB9ID0gdXNlU2VhcmNoVXNlcnNRdWVyeShxdWVyeSk7XHJcblxyXG4gIGlmIChpc0xvYWRpbmcpIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XHJcbiAgaWYgKGVycm9yKSByZXR1cm4gPGRpdj5FcnJvciBsb2FkaW5nIGRhdGE8L2Rpdj47XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aDE+U2VhcmNoIFJlc3VsdHM8L2gxPlxyXG4gICAgICB7ZGF0YS5pdGVtcy5tYXAodXNlciA9PiAoXHJcbiAgICAgICAgPGRpdiBrZXk9e3VzZXIuaWR9Pnt1c2VyLmxvZ2lufTwvZGl2PlxyXG4gICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gd3JhcHBlci5nZXRTZXJ2ZXJTaWRlUHJvcHMoKHN0b3JlKSA9PiBhc3luYyAoY29udGV4dCkgPT4ge1xyXG4gIGNvbnN0IHsgcXVlcnksIHBhZ2UgPSAxLCBwZXJfcGFnZSA9IDEwIH0gPSBjb250ZXh0LnF1ZXJ5O1xyXG5cclxuICBhd2FpdCBzdG9yZS5kaXNwYXRjaChcclxuICAgIGdpdGh1YkFwaS5lbmRwb2ludHMuc2VhcmNoVXNlcnMuaW5pdGlhdGUoeyBxdWVyeTogcXVlcnkgfHwgJ3R5cGU6dXNlcicsIHBhZ2U6IE51bWJlcihwYWdlKSwgcGVyX3BhZ2U6IE51bWJlcihwZXJfcGFnZSkgfSlcclxuICApO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgcXVlcnk6IHsgcXVlcnk6IHF1ZXJ5IHx8ICd0eXBlOnVzZXInLCBwYWdlOiBOdW1iZXIocGFnZSksIHBlcl9wYWdlOiBOdW1iZXIocGVyX3BhZ2UpIH0sXHJcbiAgICB9LFxyXG4gIH07XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoUGFnZTtcclxuXHJcbiovIl0sIm5hbWVzIjpbIlByb3ZpZGVycyIsIlRlc3QiLCJQYWdlIiwicXVlcnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/homepage/index.tsx\n"));

/***/ })

});