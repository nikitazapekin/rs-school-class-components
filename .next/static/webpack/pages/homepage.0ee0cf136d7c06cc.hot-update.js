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

eval(__webpack_require__.ts("/*import React, { useEffect, useState } from 'react';\r\nimport { useSearchUsersQuery } from '../../redux/slices/querySlice';\r\nimport Providers from '../../redux/Provider';\r\nimport { SearchPageProps } from './types'; // Adjust the import path as needed\r\n\r\nconst Test = ({ query }: SearchPageProps) => {\r\n  const [trigger, setTrigger] = useState(false);\r\n\r\n  const { data, error, isLoading, refetch } = useSearchUsersQuery(query, {\r\n    skip: !trigger,\r\n  });\r\n\r\n  const handleButtonClick = () => {\r\n    setTrigger(true);\r\n    refetch();\r\n  };\r\n\r\n  useEffect(()=> {\r\nconsole.log(\"DAT\" , data)\r\n  }, [data])\r\n\r\n  return (\r\n    <Providers>\r\n      <div>\r\n        <h1>Search Results</h1>\r\n        <button onClick={handleButtonClick}>Fetch Data</button>\r\n        {isLoading && <div>Loading...</div>}\r\n        {error && <div>Error loading data</div>}\r\n        {data && data.items.map(user => (\r\n          <div key={user.id}>{user.login}</div>\r\n        ))}\r\n      </div>\r\n    </Providers>\r\n  );\r\n};\r\n\r\nexport default Test;\r\n*/ /*import { useSearchUsersQuery } from '../../redux/slices/querySlice';\r\nimport Providers from '../../redux/Provider';\r\nimport { SearchPageProps } from './types'; \r\n\r\nconst Test = ({ query }: SearchPageProps) => {\r\n  const { data, error, isLoading } = useSearchUsersQuery(query);\r\n\r\n  if (isLoading) return <div>Loading...</div>;\r\n  if (error) return <div>Error loading data</div>;\r\n\r\n  return (\r\n    <Providers>\r\n      <div>\r\n        <h1>Search Results</h1>\r\n        {data && data.items.map(user => (\r\n          <div className=\"sea-test\" key={user.id}>{user.login}</div>\r\n        ))}\r\n      </div>\r\n    </Providers>\r\n  );\r\n};\r\n\r\nexport default Test;\r\n\r\n*/ // pages/search.tsx\n/*\r\nimport { useSearchUsersQuery } from '../../redux/slices/querySlice';\r\nimport { wrapper } from '../../redux/store';\r\nimport { githubApi } from '../../redux/slices/querySlice';\r\nimport Providers from '../../redux/Provider';\r\n // types.ts\r\nexport interface User {\r\n\tlogin: string;\r\n\tid: number;\r\n\tnode_id: string;\r\n\tavatar_url: string;\r\n\tgravatar_id: string;\r\n\turl: string;\r\n\thtml_url: string;\r\n\tfollowers_url: string;\r\n\tfollowing_url: string;\r\n\tgists_url: string;\r\n\tstarred_url: string;\r\n\tsubscriptions_url: string;\r\n\torganizations_url: string;\r\n\trepos_url: string;\r\n\tevents_url: string;\r\n\treceived_events_url: string;\r\n\ttype: string;\r\n\tsite_admin: boolean;\r\n\tscore: number;\r\n}\r\n\r\nexport interface QueryParams {\r\n\tquery: string;\r\n\tpage: number;\r\n\tper_page: number;\r\n}\r\n\r\nexport interface SearchPageProps {\r\n\tquery: QueryParams;\r\n}\r\nconst Test = ({ query }: SearchPageProps) => {\r\n  const { data, error, isLoading } = useSearchUsersQuery(query);\r\n\r\n  if (isLoading) return <div>Loading...</div>;\r\n  if (error) return <div>Error loading data</div>;\r\n\r\n  return (\r\n    <Providers>\r\n\r\n    <div>\r\n      <h1>Search Results</h1>\r\n      {data && data.items.map(user => (\r\n        <div key={user.id}>{user.login}</div>\r\n      ))}\r\n    </div>\r\n    </Providers>\r\n  );\r\n};\r\n\r\nexport const getServerSideProps = wrapper.getServerSideProps((store) => async (context) => {\r\n  const { query, page = 1, per_page = 10 } = context.query;\r\n\r\n  await store.dispatch(\r\n    githubApi.endpoints.searchUsers.initiate({ query: String(query) || 'type:user', page: Number(page), per_page: Number(per_page) })\r\n  );\r\n\r\n  return {\r\n    props: {\r\n      query: { query: query || 'type:user', page: Number(page), per_page: Number(per_page) },\r\n    },\r\n  };\r\n});\r\n\r\nexport default Test;\r\n\r\n\r\n*/ \n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaG9tZXBhZ2UvdGVzdENvbXAudHN4IiwibWFwcGluZ3MiOiJBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUNBLEdBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdCQSxHQUtBLG1CQUFtQjtBQUNuQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlFQSxHQWxKQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaG9tZXBhZ2UvdGVzdENvbXAudHN4PzU2YTMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4vKmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VTZWFyY2hVc2Vyc1F1ZXJ5IH0gZnJvbSAnLi4vLi4vcmVkdXgvc2xpY2VzL3F1ZXJ5U2xpY2UnO1xyXG5pbXBvcnQgUHJvdmlkZXJzIGZyb20gJy4uLy4uL3JlZHV4L1Byb3ZpZGVyJztcclxuaW1wb3J0IHsgU2VhcmNoUGFnZVByb3BzIH0gZnJvbSAnLi90eXBlcyc7IC8vIEFkanVzdCB0aGUgaW1wb3J0IHBhdGggYXMgbmVlZGVkXHJcblxyXG5jb25zdCBUZXN0ID0gKHsgcXVlcnkgfTogU2VhcmNoUGFnZVByb3BzKSA9PiB7XHJcbiAgY29uc3QgW3RyaWdnZXIsIHNldFRyaWdnZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCB7IGRhdGEsIGVycm9yLCBpc0xvYWRpbmcsIHJlZmV0Y2ggfSA9IHVzZVNlYXJjaFVzZXJzUXVlcnkocXVlcnksIHtcclxuICAgIHNraXA6ICF0cmlnZ2VyLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVCdXR0b25DbGljayA9ICgpID0+IHtcclxuICAgIHNldFRyaWdnZXIodHJ1ZSk7XHJcbiAgICByZWZldGNoKCk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpPT4ge1xyXG5jb25zb2xlLmxvZyhcIkRBVFwiICwgZGF0YSlcclxuICB9LCBbZGF0YV0pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UHJvdmlkZXJzPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxoMT5TZWFyY2ggUmVzdWx0czwvaDE+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVCdXR0b25DbGlja30+RmV0Y2ggRGF0YTwvYnV0dG9uPlxyXG4gICAgICAgIHtpc0xvYWRpbmcgJiYgPGRpdj5Mb2FkaW5nLi4uPC9kaXY+fVxyXG4gICAgICAgIHtlcnJvciAmJiA8ZGl2PkVycm9yIGxvYWRpbmcgZGF0YTwvZGl2Pn1cclxuICAgICAgICB7ZGF0YSAmJiBkYXRhLml0ZW1zLm1hcCh1c2VyID0+IChcclxuICAgICAgICAgIDxkaXYga2V5PXt1c2VyLmlkfT57dXNlci5sb2dpbn08L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L1Byb3ZpZGVycz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGVzdDtcclxuKi9cclxuXHJcblxyXG5cclxuLyppbXBvcnQgeyB1c2VTZWFyY2hVc2Vyc1F1ZXJ5IH0gZnJvbSAnLi4vLi4vcmVkdXgvc2xpY2VzL3F1ZXJ5U2xpY2UnO1xyXG5pbXBvcnQgUHJvdmlkZXJzIGZyb20gJy4uLy4uL3JlZHV4L1Byb3ZpZGVyJztcclxuaW1wb3J0IHsgU2VhcmNoUGFnZVByb3BzIH0gZnJvbSAnLi90eXBlcyc7IFxyXG5cclxuY29uc3QgVGVzdCA9ICh7IHF1ZXJ5IH06IFNlYXJjaFBhZ2VQcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IsIGlzTG9hZGluZyB9ID0gdXNlU2VhcmNoVXNlcnNRdWVyeShxdWVyeSk7XHJcblxyXG4gIGlmIChpc0xvYWRpbmcpIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XHJcbiAgaWYgKGVycm9yKSByZXR1cm4gPGRpdj5FcnJvciBsb2FkaW5nIGRhdGE8L2Rpdj47XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UHJvdmlkZXJzPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxoMT5TZWFyY2ggUmVzdWx0czwvaDE+XHJcbiAgICAgICAge2RhdGEgJiYgZGF0YS5pdGVtcy5tYXAodXNlciA9PiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYS10ZXN0XCIga2V5PXt1c2VyLmlkfT57dXNlci5sb2dpbn08L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L1Byb3ZpZGVycz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGVzdDtcclxuXHJcbiovXHJcblxyXG5cclxuXHJcblxyXG4vLyBwYWdlcy9zZWFyY2gudHN4XHJcbi8qXHJcbmltcG9ydCB7IHVzZVNlYXJjaFVzZXJzUXVlcnkgfSBmcm9tICcuLi8uLi9yZWR1eC9zbGljZXMvcXVlcnlTbGljZSc7XHJcbmltcG9ydCB7IHdyYXBwZXIgfSBmcm9tICcuLi8uLi9yZWR1eC9zdG9yZSc7XHJcbmltcG9ydCB7IGdpdGh1YkFwaSB9IGZyb20gJy4uLy4uL3JlZHV4L3NsaWNlcy9xdWVyeVNsaWNlJztcclxuaW1wb3J0IFByb3ZpZGVycyBmcm9tICcuLi8uLi9yZWR1eC9Qcm92aWRlcic7XHJcbiAvLyB0eXBlcy50c1xyXG5leHBvcnQgaW50ZXJmYWNlIFVzZXIge1xyXG5cdGxvZ2luOiBzdHJpbmc7XHJcblx0aWQ6IG51bWJlcjtcclxuXHRub2RlX2lkOiBzdHJpbmc7XHJcblx0YXZhdGFyX3VybDogc3RyaW5nO1xyXG5cdGdyYXZhdGFyX2lkOiBzdHJpbmc7XHJcblx0dXJsOiBzdHJpbmc7XHJcblx0aHRtbF91cmw6IHN0cmluZztcclxuXHRmb2xsb3dlcnNfdXJsOiBzdHJpbmc7XHJcblx0Zm9sbG93aW5nX3VybDogc3RyaW5nO1xyXG5cdGdpc3RzX3VybDogc3RyaW5nO1xyXG5cdHN0YXJyZWRfdXJsOiBzdHJpbmc7XHJcblx0c3Vic2NyaXB0aW9uc191cmw6IHN0cmluZztcclxuXHRvcmdhbml6YXRpb25zX3VybDogc3RyaW5nO1xyXG5cdHJlcG9zX3VybDogc3RyaW5nO1xyXG5cdGV2ZW50c191cmw6IHN0cmluZztcclxuXHRyZWNlaXZlZF9ldmVudHNfdXJsOiBzdHJpbmc7XHJcblx0dHlwZTogc3RyaW5nO1xyXG5cdHNpdGVfYWRtaW46IGJvb2xlYW47XHJcblx0c2NvcmU6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBRdWVyeVBhcmFtcyB7XHJcblx0cXVlcnk6IHN0cmluZztcclxuXHRwYWdlOiBudW1iZXI7XHJcblx0cGVyX3BhZ2U6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTZWFyY2hQYWdlUHJvcHMge1xyXG5cdHF1ZXJ5OiBRdWVyeVBhcmFtcztcclxufVxyXG5jb25zdCBUZXN0ID0gKHsgcXVlcnkgfTogU2VhcmNoUGFnZVByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciwgaXNMb2FkaW5nIH0gPSB1c2VTZWFyY2hVc2Vyc1F1ZXJ5KHF1ZXJ5KTtcclxuXHJcbiAgaWYgKGlzTG9hZGluZykgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcclxuICBpZiAoZXJyb3IpIHJldHVybiA8ZGl2PkVycm9yIGxvYWRpbmcgZGF0YTwvZGl2PjtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxQcm92aWRlcnM+XHJcblxyXG4gICAgPGRpdj5cclxuICAgICAgPGgxPlNlYXJjaCBSZXN1bHRzPC9oMT5cclxuICAgICAge2RhdGEgJiYgZGF0YS5pdGVtcy5tYXAodXNlciA9PiAoXHJcbiAgICAgICAgPGRpdiBrZXk9e3VzZXIuaWR9Pnt1c2VyLmxvZ2lufTwvZGl2PlxyXG4gICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4gICAgPC9Qcm92aWRlcnM+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSB3cmFwcGVyLmdldFNlcnZlclNpZGVQcm9wcygoc3RvcmUpID0+IGFzeW5jIChjb250ZXh0KSA9PiB7XHJcbiAgY29uc3QgeyBxdWVyeSwgcGFnZSA9IDEsIHBlcl9wYWdlID0gMTAgfSA9IGNvbnRleHQucXVlcnk7XHJcblxyXG4gIGF3YWl0IHN0b3JlLmRpc3BhdGNoKFxyXG4gICAgZ2l0aHViQXBpLmVuZHBvaW50cy5zZWFyY2hVc2Vycy5pbml0aWF0ZSh7IHF1ZXJ5OiBTdHJpbmcocXVlcnkpIHx8ICd0eXBlOnVzZXInLCBwYWdlOiBOdW1iZXIocGFnZSksIHBlcl9wYWdlOiBOdW1iZXIocGVyX3BhZ2UpIH0pXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHF1ZXJ5OiB7IHF1ZXJ5OiBxdWVyeSB8fCAndHlwZTp1c2VyJywgcGFnZTogTnVtYmVyKHBhZ2UpLCBwZXJfcGFnZTogTnVtYmVyKHBlcl9wYWdlKSB9LFxyXG4gICAgfSxcclxuICB9O1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRlc3Q7XHJcblxyXG5cclxuKi8iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/homepage/testComp.tsx\n"));

/***/ })

});