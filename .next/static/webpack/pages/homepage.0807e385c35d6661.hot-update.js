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
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("/*import { useSearchUsersQuery } from '../../redux/slices/querySlice';\r\nimport Providers from '../../redux/Provider';\r\nimport { SearchPageProps } from './types'; \r\n\r\nconst Test = ({ query }: SearchPageProps) => {\r\n  const { data, error, isLoading } = useSearchUsersQuery(query);\r\n\r\n  if (isLoading) return <div>Loading...</div>;\r\n  if (error) return <div>Error loading data</div>;\r\n\r\n  return (\r\n    <Providers>\r\n      <div>\r\n        <h1>Search Results</h1>\r\n        {data && data.items.map(user => (\r\n          <div className=\"sea-test\" key={user.id}>{user.login}</div>\r\n        ))}\r\n      </div>\r\n    </Providers>\r\n  );\r\n};\r\n\r\nexport default Test;\r\n\r\n*/ // pages/search.tsx\n/*\r\nimport { useSearchUsersQuery } from '../../redux/slices/querySlice';\r\nimport { wrapper } from '../../redux/store';\r\nimport { githubApi } from '../../redux/slices/querySlice';\r\nimport Providers from '../../redux/Provider';\r\n // types.ts\r\nexport interface User {\r\n\tlogin: string;\r\n\tid: number;\r\n\tnode_id: string;\r\n\tavatar_url: string;\r\n\tgravatar_id: string;\r\n\turl: string;\r\n\thtml_url: string;\r\n\tfollowers_url: string;\r\n\tfollowing_url: string;\r\n\tgists_url: string;\r\n\tstarred_url: string;\r\n\tsubscriptions_url: string;\r\n\torganizations_url: string;\r\n\trepos_url: string;\r\n\tevents_url: string;\r\n\treceived_events_url: string;\r\n\ttype: string;\r\n\tsite_admin: boolean;\r\n\tscore: number;\r\n}\r\n\r\nexport interface QueryParams {\r\n\tquery: string;\r\n\tpage: number;\r\n\tper_page: number;\r\n}\r\n\r\nexport interface SearchPageProps {\r\n\tquery: QueryParams;\r\n}\r\nconst Test = ({ query }: SearchPageProps) => {\r\n  const { data, error, isLoading } = useSearchUsersQuery(query);\r\n\r\n  if (isLoading) return <div>Loading...</div>;\r\n  if (error) return <div>Error loading data</div>;\r\n\r\n  return (\r\n    <Providers>\r\n\r\n    <div>\r\n      <h1>Search Results</h1>\r\n      {data && data.items.map(user => (\r\n        <div key={user.id}>{user.login}</div>\r\n      ))}\r\n    </div>\r\n    </Providers>\r\n  );\r\n};\r\n\r\nexport const getServerSideProps = wrapper.getServerSideProps((store) => async (context) => {\r\n  const { query, page = 1, per_page = 10 } = context.query;\r\n\r\n  await store.dispatch(\r\n    githubApi.endpoints.searchUsers.initiate({ query: String(query) || 'type:user', page: Number(page), per_page: Number(per_page) })\r\n  );\r\n\r\n  return {\r\n    props: {\r\n      query: { query: query || 'type:user', page: Number(page), per_page: Number(per_page) },\r\n    },\r\n  };\r\n});\r\n\r\nexport default Test;\r\n\r\n\r\n*/ \n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaG9tZXBhZ2UvdGVzdENvbXAudHN4IiwibWFwcGluZ3MiOiJBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3QkEsR0FLQSxtQkFBbUI7QUFDbkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5RUEsR0F4R0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2hvbWVwYWdlL3Rlc3RDb21wLnRzeD81NmEzIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG4vKmltcG9ydCB7IHVzZVNlYXJjaFVzZXJzUXVlcnkgfSBmcm9tICcuLi8uLi9yZWR1eC9zbGljZXMvcXVlcnlTbGljZSc7XHJcbmltcG9ydCBQcm92aWRlcnMgZnJvbSAnLi4vLi4vcmVkdXgvUHJvdmlkZXInO1xyXG5pbXBvcnQgeyBTZWFyY2hQYWdlUHJvcHMgfSBmcm9tICcuL3R5cGVzJzsgXHJcblxyXG5jb25zdCBUZXN0ID0gKHsgcXVlcnkgfTogU2VhcmNoUGFnZVByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciwgaXNMb2FkaW5nIH0gPSB1c2VTZWFyY2hVc2Vyc1F1ZXJ5KHF1ZXJ5KTtcclxuXHJcbiAgaWYgKGlzTG9hZGluZykgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcclxuICBpZiAoZXJyb3IpIHJldHVybiA8ZGl2PkVycm9yIGxvYWRpbmcgZGF0YTwvZGl2PjtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxQcm92aWRlcnM+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGgxPlNlYXJjaCBSZXN1bHRzPC9oMT5cclxuICAgICAgICB7ZGF0YSAmJiBkYXRhLml0ZW1zLm1hcCh1c2VyID0+IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhLXRlc3RcIiBrZXk9e3VzZXIuaWR9Pnt1c2VyLmxvZ2lufTwvZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvUHJvdmlkZXJzPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUZXN0O1xyXG5cclxuKi9cclxuXHJcblxyXG5cclxuXHJcbi8vIHBhZ2VzL3NlYXJjaC50c3hcclxuLypcclxuaW1wb3J0IHsgdXNlU2VhcmNoVXNlcnNRdWVyeSB9IGZyb20gJy4uLy4uL3JlZHV4L3NsaWNlcy9xdWVyeVNsaWNlJztcclxuaW1wb3J0IHsgd3JhcHBlciB9IGZyb20gJy4uLy4uL3JlZHV4L3N0b3JlJztcclxuaW1wb3J0IHsgZ2l0aHViQXBpIH0gZnJvbSAnLi4vLi4vcmVkdXgvc2xpY2VzL3F1ZXJ5U2xpY2UnO1xyXG5pbXBvcnQgUHJvdmlkZXJzIGZyb20gJy4uLy4uL3JlZHV4L1Byb3ZpZGVyJztcclxuIC8vIHR5cGVzLnRzXHJcbmV4cG9ydCBpbnRlcmZhY2UgVXNlciB7XHJcblx0bG9naW46IHN0cmluZztcclxuXHRpZDogbnVtYmVyO1xyXG5cdG5vZGVfaWQ6IHN0cmluZztcclxuXHRhdmF0YXJfdXJsOiBzdHJpbmc7XHJcblx0Z3JhdmF0YXJfaWQ6IHN0cmluZztcclxuXHR1cmw6IHN0cmluZztcclxuXHRodG1sX3VybDogc3RyaW5nO1xyXG5cdGZvbGxvd2Vyc191cmw6IHN0cmluZztcclxuXHRmb2xsb3dpbmdfdXJsOiBzdHJpbmc7XHJcblx0Z2lzdHNfdXJsOiBzdHJpbmc7XHJcblx0c3RhcnJlZF91cmw6IHN0cmluZztcclxuXHRzdWJzY3JpcHRpb25zX3VybDogc3RyaW5nO1xyXG5cdG9yZ2FuaXphdGlvbnNfdXJsOiBzdHJpbmc7XHJcblx0cmVwb3NfdXJsOiBzdHJpbmc7XHJcblx0ZXZlbnRzX3VybDogc3RyaW5nO1xyXG5cdHJlY2VpdmVkX2V2ZW50c191cmw6IHN0cmluZztcclxuXHR0eXBlOiBzdHJpbmc7XHJcblx0c2l0ZV9hZG1pbjogYm9vbGVhbjtcclxuXHRzY29yZTogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFF1ZXJ5UGFyYW1zIHtcclxuXHRxdWVyeTogc3RyaW5nO1xyXG5cdHBhZ2U6IG51bWJlcjtcclxuXHRwZXJfcGFnZTogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNlYXJjaFBhZ2VQcm9wcyB7XHJcblx0cXVlcnk6IFF1ZXJ5UGFyYW1zO1xyXG59XHJcbmNvbnN0IFRlc3QgPSAoeyBxdWVyeSB9OiBTZWFyY2hQYWdlUHJvcHMpID0+IHtcclxuICBjb25zdCB7IGRhdGEsIGVycm9yLCBpc0xvYWRpbmcgfSA9IHVzZVNlYXJjaFVzZXJzUXVlcnkocXVlcnkpO1xyXG5cclxuICBpZiAoaXNMb2FkaW5nKSByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xyXG4gIGlmIChlcnJvcikgcmV0dXJuIDxkaXY+RXJyb3IgbG9hZGluZyBkYXRhPC9kaXY+O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFByb3ZpZGVycz5cclxuXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aDE+U2VhcmNoIFJlc3VsdHM8L2gxPlxyXG4gICAgICB7ZGF0YSAmJiBkYXRhLml0ZW1zLm1hcCh1c2VyID0+IChcclxuICAgICAgICA8ZGl2IGtleT17dXNlci5pZH0+e3VzZXIubG9naW59PC9kaXY+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgICA8L1Byb3ZpZGVycz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IHdyYXBwZXIuZ2V0U2VydmVyU2lkZVByb3BzKChzdG9yZSkgPT4gYXN5bmMgKGNvbnRleHQpID0+IHtcclxuICBjb25zdCB7IHF1ZXJ5LCBwYWdlID0gMSwgcGVyX3BhZ2UgPSAxMCB9ID0gY29udGV4dC5xdWVyeTtcclxuXHJcbiAgYXdhaXQgc3RvcmUuZGlzcGF0Y2goXHJcbiAgICBnaXRodWJBcGkuZW5kcG9pbnRzLnNlYXJjaFVzZXJzLmluaXRpYXRlKHsgcXVlcnk6IFN0cmluZyhxdWVyeSkgfHwgJ3R5cGU6dXNlcicsIHBhZ2U6IE51bWJlcihwYWdlKSwgcGVyX3BhZ2U6IE51bWJlcihwZXJfcGFnZSkgfSlcclxuICApO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgcXVlcnk6IHsgcXVlcnk6IHF1ZXJ5IHx8ICd0eXBlOnVzZXInLCBwYWdlOiBOdW1iZXIocGFnZSksIHBlcl9wYWdlOiBOdW1iZXIocGVyX3BhZ2UpIH0sXHJcbiAgICB9LFxyXG4gIH07XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGVzdDtcclxuXHJcblxyXG4qLyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/homepage/testComp.tsx\n"));

/***/ })

});