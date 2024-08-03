"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../App */ \"./src/App.tsx\");\n/* harmony import */ var _redux_Provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/Provider */ \"./src/redux/Provider.tsx\");\n\n\n\nfunction MyApp(param) {\n    let { query } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_redux_Provider__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            children: [\n                \"fe\",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_App__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    query: query\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\wotbl\\\\search-rs\\\\src\\\\pages\\\\index.tsx\",\n                    lineNumber: 15,\n                    columnNumber: 5\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\wotbl\\\\search-rs\\\\src\\\\pages\\\\index.tsx\",\n            lineNumber: 13,\n            columnNumber: 4\n        }, this)\n    }, void 0, false);\n}\n_c = MyApp;\n//export { getServerSideProps };\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\n/*\r\n\r\nexport type UserDataArrayApi = Array<{\r\n\tlogin: string;\r\n\tid: number;\r\n\tnode_id: string;\r\n\tavatar_url: string;\r\n\tgravatar_id: string;\r\n\turl: string;\r\n\thtml_url: string;\r\n\tfollowers_url: string;\r\n\tfollowing_url: string;\r\n\tgists_url: string;\r\n\tstarred_url: string;\r\n\tsubscriptions_url: string;\r\n\torganizations_url: string;\r\n\trepos_url: string;\r\n\tevents_url: string;\r\n\treceived_events_url: string;\r\n\ttype: string;\r\n\tsite_admin: boolean;\r\n\tscore: number;\r\n}>;\r\nexport interface UserDataApi {\r\n\ttotal_count: number;\r\n\tincomplete_results: boolean;\r\n\titems: UserDataArrayApi;\r\n}\r\n\r\n\r\nexport async function fetchUserDataAdvanced(url: string): Promise<UserDataApi> {\r\n\ttry {\r\n\t\tconst response: AxiosResponse<UserDataApi> = await axios.get(url);\r\n\t\treturn response.data;\r\n\t} catch (error) {\r\n\t\tif (axios.isAxiosError(error)) {\r\n\t\t\tconst axiosError = error as AxiosError;\r\n\t\t\tconsole.error('Error fetching data:', axiosError.message);\r\n\t\t} else {\r\n\t\t\tconsole.error('Unknown error:', error);\r\n\t\t}\r\n\t\tthrow new Error('Error fetching data');\r\n\t}\r\n}\r\nexport interface ApiResp {\r\n\tprops: {\r\n\t\tusers: UserDataArrayApi\r\n\t}\r\n}\r\nexport async function getServerSideProps(limit: number, offset: number, typedValue: string): Promise<ApiResp> {\r\n\tlet url: string;\r\n\tif (typedValue && typedValue.trim() === '') {\r\n\t\turl = `https://api.github.com/search/users?q=type:user&page=${offset}&per_page=${limit}`;\r\n\t\ttry {\r\n\t\t\tconst data = await fetchUserDataAdvanced(url);\r\n\t\t\tconsole.log('Data:', data);\r\n\t\t\treturn {\r\n\t\t\t\tprops: {\r\n\t\t\t\t\tusers: data.items\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t} catch (error) {\r\n\t\t\tconsole.error(error);\r\n\t\t\tthrow error;\r\n\t\t}\r\n\t} else {\r\n\t\turl = `https://api.github.com/search/users?q=${typedValue}&page=${offset}&per_page=${limit}`;\r\n\t\ttry {\r\n\t\t\tconst data = await fetchUserDataAdvanced(url);\r\n\t\t\tconsole.log('Data:', data);\r\n\t\t\t//\treturn data.items;\r\n\r\n\r\n\t\t\treturn {\r\n\t\t\t\tprops: {\r\n\t\t\t\t\tusers: data.items\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t} catch (error) {\r\n\t\t\tconsole.error(error);\r\n\t\t\tthrow error;\r\n\t\t}\r\n\t}\r\n}\r\n*/ /*\r\nimport type { InferGetServerSidePropsType, GetServerSideProps } from 'next'\r\n\r\nimport { Outlet } from \"react-router-dom\";\r\nimport App from \"../App\";\r\nimport Layout from \"../components/Layout\";\r\nimport Providers from \"../redux/Provider\";\r\n \r\nimport { useAppDispatch } from \"../hooks/redux\";\r\nimport { setTesting } from \"../redux/slices/postsSlice\";\r\nimport { useDispatch } from \"react-redux\";\r\n \r\ntype Repo = {\r\n  name: string\r\n  stargazers_count: number\r\n}\r\n \r\nexport const getServerSideProps = (async () => {\r\n  // Fetch data from external API\r\n  const res = await fetch('https://api.github.com/repos/vercel/next.js')\r\n  const repo: Repo = await res.json()\r\n\r\n  console.log(\"res\", res)\r\n  // Pass data to the page via props\r\n  return { props: { repo } }\r\n}) satisfies GetServerSideProps<{ repo: Repo }>\r\n \r\n\r\n\r\nfunction MyApp(\r\n\t{\r\n\t\trepo,\r\n\t  }: InferGetServerSidePropsType<typeof getServerSideProps>\r\n) {\r\n\r\n const handleClich = () => {\r\n\r\n }\t\r\n\treturn (\r\n\t<> \t\r\n<Providers>\r\n\r\n<p>{repo.stargazers_count}</p>\r\n\t<App />  \r\n</Providers>\t\r\n \r\n \r\n\t</>\r\n\t);\r\n}\r\nexport default MyApp;\r\n\r\n*/ {}var _c;\n$RefreshReg$(_c, \"MyApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUN5QjtBQUNpQjtBQUcxQyxTQUFTRSxNQUNSLEtBQTBCO1FBQTFCLEVBQUVDLEtBQUssRUFBbUIsR0FBMUI7SUFJQSxxQkFDQztrQkFDQyw0RUFBQ0YsdURBQVNBOztnQkFBQzs4QkFFViw4REFBQ0QsNENBQUdBO29CQUNKRyxPQUFPQTs7Ozs7Ozs7Ozs7OztBQVFYO0tBbEJTRDtBQW1CVCxnQ0FBZ0M7QUFDaEMsK0RBQWVBLEtBQUtBLEVBQUM7QUFZckI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9GQSxHQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0RBLEdBT0EsQ0FJRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXgudHN4PzE5YTAiXSwic291cmNlc0NvbnRlbnQiOlsiIFxyXG5pbXBvcnQgQXBwIGZyb20gJy4uL0FwcCc7XHJcbmltcG9ydCBQcm92aWRlcnMgZnJvbSAnLi4vcmVkdXgvUHJvdmlkZXInO1xyXG4gaW1wb3J0IHsgZ2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSAnLi9zZWFyY2gnO1xyXG4gaW1wb3J0IHsgU2VhcmNoUGFnZVByb3BzIH0gZnJvbSAnLi9zZWFyY2hUeXBlcyc7XHJcbmZ1bmN0aW9uIE15QXBwKFxyXG5cdHsgcXVlcnkgfTogU2VhcmNoUGFnZVByb3BzXHJcbikge1xyXG5cclxuIFxyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHQ8UHJvdmlkZXJzPlxyXG5cdFx0XHRcdGZlXHJcblx0XHRcdFx0PEFwcCBcclxuXHRcdFx0XHRxdWVyeT17cXVlcnl9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0IFxyXG5cdFx0XHRcdHsvKlxyXG5cdFx0XHRcdCovfSBcclxuXHRcdFx0PC9Qcm92aWRlcnM+XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59XHJcbi8vZXhwb3J0IHsgZ2V0U2VydmVyU2lkZVByb3BzIH07XHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8qXHJcblxyXG5leHBvcnQgdHlwZSBVc2VyRGF0YUFycmF5QXBpID0gQXJyYXk8e1xyXG5cdGxvZ2luOiBzdHJpbmc7XHJcblx0aWQ6IG51bWJlcjtcclxuXHRub2RlX2lkOiBzdHJpbmc7XHJcblx0YXZhdGFyX3VybDogc3RyaW5nO1xyXG5cdGdyYXZhdGFyX2lkOiBzdHJpbmc7XHJcblx0dXJsOiBzdHJpbmc7XHJcblx0aHRtbF91cmw6IHN0cmluZztcclxuXHRmb2xsb3dlcnNfdXJsOiBzdHJpbmc7XHJcblx0Zm9sbG93aW5nX3VybDogc3RyaW5nO1xyXG5cdGdpc3RzX3VybDogc3RyaW5nO1xyXG5cdHN0YXJyZWRfdXJsOiBzdHJpbmc7XHJcblx0c3Vic2NyaXB0aW9uc191cmw6IHN0cmluZztcclxuXHRvcmdhbml6YXRpb25zX3VybDogc3RyaW5nO1xyXG5cdHJlcG9zX3VybDogc3RyaW5nO1xyXG5cdGV2ZW50c191cmw6IHN0cmluZztcclxuXHRyZWNlaXZlZF9ldmVudHNfdXJsOiBzdHJpbmc7XHJcblx0dHlwZTogc3RyaW5nO1xyXG5cdHNpdGVfYWRtaW46IGJvb2xlYW47XHJcblx0c2NvcmU6IG51bWJlcjtcclxufT47XHJcbmV4cG9ydCBpbnRlcmZhY2UgVXNlckRhdGFBcGkge1xyXG5cdHRvdGFsX2NvdW50OiBudW1iZXI7XHJcblx0aW5jb21wbGV0ZV9yZXN1bHRzOiBib29sZWFuO1xyXG5cdGl0ZW1zOiBVc2VyRGF0YUFycmF5QXBpO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoVXNlckRhdGFBZHZhbmNlZCh1cmw6IHN0cmluZyk6IFByb21pc2U8VXNlckRhdGFBcGk+IHtcclxuXHR0cnkge1xyXG5cdFx0Y29uc3QgcmVzcG9uc2U6IEF4aW9zUmVzcG9uc2U8VXNlckRhdGFBcGk+ID0gYXdhaXQgYXhpb3MuZ2V0KHVybCk7XHJcblx0XHRyZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuXHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0aWYgKGF4aW9zLmlzQXhpb3NFcnJvcihlcnJvcikpIHtcclxuXHRcdFx0Y29uc3QgYXhpb3NFcnJvciA9IGVycm9yIGFzIEF4aW9zRXJyb3I7XHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgYXhpb3NFcnJvci5tZXNzYWdlKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoJ1Vua25vd24gZXJyb3I6JywgZXJyb3IpO1xyXG5cdFx0fVxyXG5cdFx0dGhyb3cgbmV3IEVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhJyk7XHJcblx0fVxyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgQXBpUmVzcCB7XHJcblx0cHJvcHM6IHtcclxuXHRcdHVzZXJzOiBVc2VyRGF0YUFycmF5QXBpXHJcblx0fVxyXG59XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMobGltaXQ6IG51bWJlciwgb2Zmc2V0OiBudW1iZXIsIHR5cGVkVmFsdWU6IHN0cmluZyk6IFByb21pc2U8QXBpUmVzcD4ge1xyXG5cdGxldCB1cmw6IHN0cmluZztcclxuXHRpZiAodHlwZWRWYWx1ZSAmJiB0eXBlZFZhbHVlLnRyaW0oKSA9PT0gJycpIHtcclxuXHRcdHVybCA9IGBodHRwczovL2FwaS5naXRodWIuY29tL3NlYXJjaC91c2Vycz9xPXR5cGU6dXNlciZwYWdlPSR7b2Zmc2V0fSZwZXJfcGFnZT0ke2xpbWl0fWA7XHJcblx0XHR0cnkge1xyXG5cdFx0XHRjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hVc2VyRGF0YUFkdmFuY2VkKHVybCk7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdEYXRhOicsIGRhdGEpO1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHByb3BzOiB7XHJcblx0XHRcdFx0XHR1c2VyczogZGF0YS5pdGVtc1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdFx0Y29uc29sZS5lcnJvcihlcnJvcik7XHJcblx0XHRcdHRocm93IGVycm9yO1xyXG5cdFx0fVxyXG5cdH0gZWxzZSB7XHJcblx0XHR1cmwgPSBgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9zZWFyY2gvdXNlcnM/cT0ke3R5cGVkVmFsdWV9JnBhZ2U9JHtvZmZzZXR9JnBlcl9wYWdlPSR7bGltaXR9YDtcclxuXHRcdHRyeSB7XHJcblx0XHRcdGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaFVzZXJEYXRhQWR2YW5jZWQodXJsKTtcclxuXHRcdFx0Y29uc29sZS5sb2coJ0RhdGE6JywgZGF0YSk7XHJcblx0XHRcdC8vXHRyZXR1cm4gZGF0YS5pdGVtcztcclxuXHJcblxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHByb3BzOiB7XHJcblx0XHRcdFx0XHR1c2VyczogZGF0YS5pdGVtc1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdFx0Y29uc29sZS5lcnJvcihlcnJvcik7XHJcblx0XHRcdHRocm93IGVycm9yO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4qL1xyXG5cclxuXHJcblxyXG5cclxuLypcclxuaW1wb3J0IHR5cGUgeyBJbmZlckdldFNlcnZlclNpZGVQcm9wc1R5cGUsIEdldFNlcnZlclNpZGVQcm9wcyB9IGZyb20gJ25leHQnXHJcblxyXG5pbXBvcnQgeyBPdXRsZXQgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgQXBwIGZyb20gXCIuLi9BcHBcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcclxuaW1wb3J0IFByb3ZpZGVycyBmcm9tIFwiLi4vcmVkdXgvUHJvdmlkZXJcIjtcclxuIFxyXG5pbXBvcnQgeyB1c2VBcHBEaXNwYXRjaCB9IGZyb20gXCIuLi9ob29rcy9yZWR1eFwiO1xyXG5pbXBvcnQgeyBzZXRUZXN0aW5nIH0gZnJvbSBcIi4uL3JlZHV4L3NsaWNlcy9wb3N0c1NsaWNlXCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbiBcclxudHlwZSBSZXBvID0ge1xyXG4gIG5hbWU6IHN0cmluZ1xyXG4gIHN0YXJnYXplcnNfY291bnQ6IG51bWJlclxyXG59XHJcbiBcclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IChhc3luYyAoKSA9PiB7XHJcbiAgLy8gRmV0Y2ggZGF0YSBmcm9tIGV4dGVybmFsIEFQSVxyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5naXRodWIuY29tL3JlcG9zL3ZlcmNlbC9uZXh0LmpzJylcclxuICBjb25zdCByZXBvOiBSZXBvID0gYXdhaXQgcmVzLmpzb24oKVxyXG5cclxuICBjb25zb2xlLmxvZyhcInJlc1wiLCByZXMpXHJcbiAgLy8gUGFzcyBkYXRhIHRvIHRoZSBwYWdlIHZpYSBwcm9wc1xyXG4gIHJldHVybiB7IHByb3BzOiB7IHJlcG8gfSB9XHJcbn0pIHNhdGlzZmllcyBHZXRTZXJ2ZXJTaWRlUHJvcHM8eyByZXBvOiBSZXBvIH0+XHJcbiBcclxuXHJcblxyXG5mdW5jdGlvbiBNeUFwcChcclxuXHR7XHJcblx0XHRyZXBvLFxyXG5cdCAgfTogSW5mZXJHZXRTZXJ2ZXJTaWRlUHJvcHNUeXBlPHR5cGVvZiBnZXRTZXJ2ZXJTaWRlUHJvcHM+XHJcbikge1xyXG5cclxuIGNvbnN0IGhhbmRsZUNsaWNoID0gKCkgPT4ge1xyXG5cclxuIH1cdFxyXG5cdHJldHVybiAoXHJcblx0PD4gXHRcclxuPFByb3ZpZGVycz5cclxuXHJcbjxwPntyZXBvLnN0YXJnYXplcnNfY291bnR9PC9wPlxyXG5cdDxBcHAgLz4gIFxyXG48L1Byb3ZpZGVycz5cdFxyXG4gXHJcbiBcclxuXHQ8Lz5cclxuXHQpO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xyXG5cclxuKi9cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuey8qXHJcbjxMYXlvdXQ+XHJcblxyXG48L0xheW91dD5cclxuKi99Il0sIm5hbWVzIjpbIkFwcCIsIlByb3ZpZGVycyIsIk15QXBwIiwicXVlcnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});