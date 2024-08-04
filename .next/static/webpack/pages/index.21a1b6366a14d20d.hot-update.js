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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../App */ \"./src/App.tsx\");\n/* harmony import */ var _redux_Provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/Provider */ \"./src/redux/Provider.tsx\");\n// pages/index.tsx (или другой файл страницы)\n\n\n\nconst MyApp = (param)=>{\n    let { users } = param;\n    console.log(users); // Проверяем данные пользователей\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_redux_Provider__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_App__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\wotbl\\\\search-rs\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 41,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\wotbl\\\\search-rs\\\\src\\\\pages\\\\index.tsx\",\n            lineNumber: 40,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_c = MyApp;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\n/* \r\nimport App from '../App';\r\nimport Providers from '../redux/Provider';\r\nimport { GetServerSidePropsContext } from 'next';\r\nimport axios from 'axios';\r\n import { SearchPageProps } from './searchTypes';\r\n\r\n\r\n \r\ntype UserDataArray = Array<{\r\n\tlogin: string;\r\n\tid: number;\r\n\tnode_id: string;\r\n\tavatar_url: string;\r\n\tgravatar_id: string;\r\n\turl: string;\r\n\thtml_url: string;\r\n\tfollowers_url: string;\r\n\tfollowing_url: string;\r\n\tgists_url: string;\r\n\tstarred_url: string;\r\n\tsubscriptions_url: string;\r\n\torganizations_url: string;\r\n\trepos_url: string;\r\n\tevents_url: string;\r\n\treceived_events_url: string;\r\n\ttype: string;\r\n\tsite_admin: boolean;\r\n\tscore: number;\r\n}>;\r\nfunction MyApp(\r\n\tusers: UserDataArray\r\n//\t{ query }: SearchPageProps\r\n) {\r\n\tconsole.log(users)\r\n\treturn (\r\n\t\t<>\r\n\t\t\t<Providers>\r\n\t\t\t\tfe\r\n\t\t\t\t<App />\r\n\t\t\t \r\n\t\t\t \r\n\t\t\t</Providers>\r\n\t\t</>\r\n\t);\r\n}\r\n//export { getServerSideProps };\r\nexport default MyApp;\r\n\r\n\r\nasync function getServerSideProps(context: GetServerSidePropsContext) {\r\n    const { query } = context;\r\n    const page = parseInt(query.page as string, 10) || 1;\r\n    console.log(\"PAGE\", page);\r\n  \r\n    const limit = 10;\r\n    try {\r\n      const res = await axios.get(`https://api.github.com/users?per_page=${limit}&page=${page}`);\r\n      const users: UserDataArray = res.data;\r\n      console.log(\"USERS\", users);\r\n  \r\n      return {\r\n      //  props: {\r\n          users, // передаем данные в компонент\r\n       // },\r\n      };\r\n    } catch (error) {\r\n      console.error(\"Error fetching users:\", error);\r\n      return {\r\n    //    props: {\r\n          users: [], // в случае ошибки возвращаем пустой массив\r\n      //  },\r\n      };\r\n    }\r\n  }\r\n\r\n*/ /*\r\n\r\nexport type UserDataArrayApi = Array<{\r\n\tlogin: string;\r\n\tid: number;\r\n\tnode_id: string;\r\n\tavatar_url: string;\r\n\tgravatar_id: string;\r\n\turl: string;\r\n\thtml_url: string;\r\n\tfollowers_url: string;\r\n\tfollowing_url: string;\r\n\tgists_url: string;\r\n\tstarred_url: string;\r\n\tsubscriptions_url: string;\r\n\torganizations_url: string;\r\n\trepos_url: string;\r\n\tevents_url: string;\r\n\treceived_events_url: string;\r\n\ttype: string;\r\n\tsite_admin: boolean;\r\n\tscore: number;\r\n}>;\r\nexport interface UserDataApi {\r\n\ttotal_count: number;\r\n\tincomplete_results: boolean;\r\n\titems: UserDataArrayApi;\r\n}\r\n\r\n\r\nexport async function fetchUserDataAdvanced(url: string): Promise<UserDataApi> {\r\n\ttry {\r\n\t\tconst response: AxiosResponse<UserDataApi> = await axios.get(url);\r\n\t\treturn response.data;\r\n\t} catch (error) {\r\n\t\tif (axios.isAxiosError(error)) {\r\n\t\t\tconst axiosError = error as AxiosError;\r\n\t\t\tconsole.error('Error fetching data:', axiosError.message);\r\n\t\t} else {\r\n\t\t\tconsole.error('Unknown error:', error);\r\n\t\t}\r\n\t\tthrow new Error('Error fetching data');\r\n\t}\r\n}\r\nexport interface ApiResp {\r\n\tprops: {\r\n\t\tusers: UserDataArrayApi\r\n\t}\r\n}\r\nexport async function getServerSideProps(limit: number, offset: number, typedValue: string): Promise<ApiResp> {\r\n\tlet url: string;\r\n\tif (typedValue && typedValue.trim() === '') {\r\n\t\turl = `https://api.github.com/search/users?q=type:user&page=${offset}&per_page=${limit}`;\r\n\t\ttry {\r\n\t\t\tconst data = await fetchUserDataAdvanced(url);\r\n\t\t\tconsole.log('Data:', data);\r\n\t\t\treturn {\r\n\t\t\t\tprops: {\r\n\t\t\t\t\tusers: data.items\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t} catch (error) {\r\n\t\t\tconsole.error(error);\r\n\t\t\tthrow error;\r\n\t\t}\r\n\t} else {\r\n\t\turl = `https://api.github.com/search/users?q=${typedValue}&page=${offset}&per_page=${limit}`;\r\n\t\ttry {\r\n\t\t\tconst data = await fetchUserDataAdvanced(url);\r\n\t\t\tconsole.log('Data:', data);\r\n\t\t\t//\treturn data.items;\r\n\r\n\r\n\t\t\treturn {\r\n\t\t\t\tprops: {\r\n\t\t\t\t\tusers: data.items\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t} catch (error) {\r\n\t\t\tconsole.error(error);\r\n\t\t\tthrow error;\r\n\t\t}\r\n\t}\r\n}\r\n*/ /*\r\nimport type { InferGetServerSidePropsType, GetServerSideProps } from 'next'\r\n\r\nimport { Outlet } from \"react-router-dom\";\r\nimport App from \"../App\";\r\nimport Layout from \"../components/Layout\";\r\nimport Providers from \"../redux/Provider\";\r\n \r\nimport { useAppDispatch } from \"../hooks/redux\";\r\nimport { setTesting } from \"../redux/slices/postsSlice\";\r\nimport { useDispatch } from \"react-redux\";\r\n \r\ntype Repo = {\r\n  name: string\r\n  stargazers_count: number\r\n}\r\n \r\nexport const getServerSideProps = (async () => {\r\n  // Fetch data from external API\r\n  const res = await fetch('https://api.github.com/repos/vercel/next.js')\r\n  const repo: Repo = await res.json()\r\n\r\n  console.log(\"res\", res)\r\n  // Pass data to the page via props\r\n  return { props: { repo } }\r\n}) satisfies GetServerSideProps<{ repo: Repo }>\r\n \r\n\r\n\r\nfunction MyApp(\r\n\t{\r\n\t\trepo,\r\n\t  }: InferGetServerSidePropsType<typeof getServerSideProps>\r\n) {\r\n\r\n const handleClich = () => {\r\n\r\n }\t\r\n\treturn (\r\n\t<> \t\r\n<Providers>\r\n\r\n<p>{repo.stargazers_count}</p>\r\n\t<App />  \r\n</Providers>\t\r\n \r\n \r\n\t</>\r\n\t);\r\n}\r\nexport default MyApp;\r\n\r\n*/ {}var _c;\n$RefreshReg$(_c, \"MyApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsNkNBQTZDOztBQUdwQjtBQUNpQjtBQThCMUMsTUFBTUUsUUFBUTtRQUFDLEVBQUVDLEtBQUssRUFBYztJQUNsQ0MsUUFBUUMsR0FBRyxDQUFDRixRQUFRLGlDQUFpQztJQUVyRCxxQkFDRTtrQkFDRSw0RUFBQ0YsdURBQVNBO3NCQUNSLDRFQUFDRCw0Q0FBR0E7Ozs7Ozs7Ozs7O0FBS1o7S0FYTUU7O0FBOENOLCtEQUFlQSxLQUFLQSxFQUFDO0FBT3JCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNEVBLEdBT0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9GQSxHQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0RBLEdBT0EsQ0FJRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXgudHN4PzE5YTAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFnZXMvaW5kZXgudHN4ICjQuNC70Lgg0LTRgNGD0LPQvtC5INGE0LDQudC7INGB0YLRgNCw0L3QuNGG0YspXHJcbmltcG9ydCB7IEdldFNlcnZlclNpZGVQcm9wc0NvbnRleHQgfSBmcm9tICduZXh0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IEFwcCBmcm9tICcuLi9BcHAnO1xyXG5pbXBvcnQgUHJvdmlkZXJzIGZyb20gJy4uL3JlZHV4L1Byb3ZpZGVyJztcclxuXHJcbi8vINCi0LjQvyDQtNCw0L3QvdGL0YUg0LTQu9GPINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvQtdC5XHJcbnR5cGUgVXNlckRhdGFBcnJheSA9IEFycmF5PHtcclxuICBsb2dpbjogc3RyaW5nO1xyXG4gIGlkOiBudW1iZXI7XHJcbiAgbm9kZV9pZDogc3RyaW5nO1xyXG4gIGF2YXRhcl91cmw6IHN0cmluZztcclxuICBncmF2YXRhcl9pZDogc3RyaW5nO1xyXG4gIHVybDogc3RyaW5nO1xyXG4gIGh0bWxfdXJsOiBzdHJpbmc7XHJcbiAgZm9sbG93ZXJzX3VybDogc3RyaW5nO1xyXG4gIGZvbGxvd2luZ191cmw6IHN0cmluZztcclxuICBnaXN0c191cmw6IHN0cmluZztcclxuICBzdGFycmVkX3VybDogc3RyaW5nO1xyXG4gIHN1YnNjcmlwdGlvbnNfdXJsOiBzdHJpbmc7XHJcbiAgb3JnYW5pemF0aW9uc191cmw6IHN0cmluZztcclxuICByZXBvc191cmw6IHN0cmluZztcclxuICBldmVudHNfdXJsOiBzdHJpbmc7XHJcbiAgcmVjZWl2ZWRfZXZlbnRzX3VybDogc3RyaW5nO1xyXG4gIHR5cGU6IHN0cmluZztcclxuICBzaXRlX2FkbWluOiBib29sZWFuO1xyXG4gIHNjb3JlOiBudW1iZXI7XHJcbn0+O1xyXG5cclxuLy8g0J/RgNC+0L/RgdGLINC60L7QvNC/0L7QvdC10L3RgtCwXHJcbmludGVyZmFjZSBNeUFwcFByb3BzIHtcclxuICB1c2VyczogVXNlckRhdGFBcnJheTtcclxufVxyXG5cclxuY29uc3QgTXlBcHAgPSAoeyB1c2VycyB9OiBNeUFwcFByb3BzKSA9PiB7XHJcbiAgY29uc29sZS5sb2codXNlcnMpOyAvLyDQn9GA0L7QstC10YDRj9C10Lwg0LTQsNC90L3Ri9C1INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvQtdC5XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8UHJvdmlkZXJzPlxyXG4gICAgICAgIDxBcHAgLz5cclxuICAgICAgPC9Qcm92aWRlcnM+XHJcblx0IFxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dDogR2V0U2VydmVyU2lkZVByb3BzQ29udGV4dCkge1xyXG4gIGNvbnN0IHsgcXVlcnkgfSA9IGNvbnRleHQ7XHJcbiAgY29uc3QgcGFnZSA9IHBhcnNlSW50KHF1ZXJ5LnBhZ2UgYXMgc3RyaW5nLCAxMCkgfHwgMTtcclxuICBjb25zb2xlLmxvZyhcIlBBR0VcIiwgcGFnZSk7XHJcblxyXG4gIGNvbnN0IGxpbWl0ID0gMTA7XHJcbiAgdHJ5IHtcclxuXHRjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnM/cGVyX3BhZ2U9JHtsaW1pdH0mcGFnZT0ke3BhZ2V9YCwge1xyXG5cdFx0aGVhZGVyczoge1xyXG5cdFx0ICAnQ2FjaGUtQ29udHJvbCc6ICduby1jYWNoZScsXHJcblx0XHQgICdQcmFnbWEnOiAnbm8tY2FjaGUnXHJcblx0XHR9XHJcblx0ICB9KTtcclxuXHQgIFxyXG4gICAvLyBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnM/cGVyX3BhZ2U9JHtsaW1pdH0mcGFnZT0ke3BhZ2V9YCk7XHJcbiAgICBjb25zdCB1c2VyczogVXNlckRhdGFBcnJheSA9IHJlcy5kYXRhO1xyXG4gICAgY29uc29sZS5sb2coXCJVU0VSU1wiLCB1c2Vyc1swXSk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcHJvcHM6IHtcclxuICAgICAgICB1c2VycywgLy8g0J/QtdGA0LXQtNCw0LXQvCDQtNCw0L3QvdGL0LUg0LIg0LrQvtC80L/QvtC90LXQvdGCXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgdXNlcnM6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgdXNlcnM6IFtdLCAvLyDQkiDRgdC70YPRh9Cw0LUg0L7RiNC40LHQutC4INCy0L7Qt9Cy0YDQsNGJ0LDQtdC8INC/0YPRgdGC0L7QuSDQvNCw0YHRgdC40LJcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLyogXHJcbmltcG9ydCBBcHAgZnJvbSAnLi4vQXBwJztcclxuaW1wb3J0IFByb3ZpZGVycyBmcm9tICcuLi9yZWR1eC9Qcm92aWRlcic7XHJcbmltcG9ydCB7IEdldFNlcnZlclNpZGVQcm9wc0NvbnRleHQgfSBmcm9tICduZXh0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuIGltcG9ydCB7IFNlYXJjaFBhZ2VQcm9wcyB9IGZyb20gJy4vc2VhcmNoVHlwZXMnO1xyXG5cclxuXHJcbiBcclxudHlwZSBVc2VyRGF0YUFycmF5ID0gQXJyYXk8e1xyXG5cdGxvZ2luOiBzdHJpbmc7XHJcblx0aWQ6IG51bWJlcjtcclxuXHRub2RlX2lkOiBzdHJpbmc7XHJcblx0YXZhdGFyX3VybDogc3RyaW5nO1xyXG5cdGdyYXZhdGFyX2lkOiBzdHJpbmc7XHJcblx0dXJsOiBzdHJpbmc7XHJcblx0aHRtbF91cmw6IHN0cmluZztcclxuXHRmb2xsb3dlcnNfdXJsOiBzdHJpbmc7XHJcblx0Zm9sbG93aW5nX3VybDogc3RyaW5nO1xyXG5cdGdpc3RzX3VybDogc3RyaW5nO1xyXG5cdHN0YXJyZWRfdXJsOiBzdHJpbmc7XHJcblx0c3Vic2NyaXB0aW9uc191cmw6IHN0cmluZztcclxuXHRvcmdhbml6YXRpb25zX3VybDogc3RyaW5nO1xyXG5cdHJlcG9zX3VybDogc3RyaW5nO1xyXG5cdGV2ZW50c191cmw6IHN0cmluZztcclxuXHRyZWNlaXZlZF9ldmVudHNfdXJsOiBzdHJpbmc7XHJcblx0dHlwZTogc3RyaW5nO1xyXG5cdHNpdGVfYWRtaW46IGJvb2xlYW47XHJcblx0c2NvcmU6IG51bWJlcjtcclxufT47XHJcbmZ1bmN0aW9uIE15QXBwKFxyXG5cdHVzZXJzOiBVc2VyRGF0YUFycmF5XHJcbi8vXHR7IHF1ZXJ5IH06IFNlYXJjaFBhZ2VQcm9wc1xyXG4pIHtcclxuXHRjb25zb2xlLmxvZyh1c2VycylcclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0PFByb3ZpZGVycz5cclxuXHRcdFx0XHRmZVxyXG5cdFx0XHRcdDxBcHAgLz5cclxuXHRcdFx0IFxyXG5cdFx0XHQgXHJcblx0XHRcdDwvUHJvdmlkZXJzPlxyXG5cdFx0PC8+XHJcblx0KTtcclxufVxyXG4vL2V4cG9ydCB7IGdldFNlcnZlclNpZGVQcm9wcyB9O1xyXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcclxuXHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dDogR2V0U2VydmVyU2lkZVByb3BzQ29udGV4dCkge1xyXG4gICAgY29uc3QgeyBxdWVyeSB9ID0gY29udGV4dDtcclxuICAgIGNvbnN0IHBhZ2UgPSBwYXJzZUludChxdWVyeS5wYWdlIGFzIHN0cmluZywgMTApIHx8IDE7XHJcbiAgICBjb25zb2xlLmxvZyhcIlBBR0VcIiwgcGFnZSk7XHJcbiAgXHJcbiAgICBjb25zdCBsaW1pdCA9IDEwO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzP3Blcl9wYWdlPSR7bGltaXR9JnBhZ2U9JHtwYWdlfWApO1xyXG4gICAgICBjb25zdCB1c2VyczogVXNlckRhdGFBcnJheSA9IHJlcy5kYXRhO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIlVTRVJTXCIsIHVzZXJzKTtcclxuICBcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgLy8gIHByb3BzOiB7XHJcbiAgICAgICAgICB1c2VycywgLy8g0L/QtdGA0LXQtNCw0LXQvCDQtNCw0L3QvdGL0LUg0LIg0LrQvtC80L/QvtC90LXQvdGCXHJcbiAgICAgICAvLyB9LFxyXG4gICAgICB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIHVzZXJzOlwiLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAvLyAgICBwcm9wczoge1xyXG4gICAgICAgICAgdXNlcnM6IFtdLCAvLyDQsiDRgdC70YPRh9Cw0LUg0L7RiNC40LHQutC4INCy0L7Qt9Cy0YDQsNGJ0LDQtdC8INC/0YPRgdGC0L7QuSDQvNCw0YHRgdC40LJcclxuICAgICAgLy8gIH0sXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuKi9cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLypcclxuXHJcbmV4cG9ydCB0eXBlIFVzZXJEYXRhQXJyYXlBcGkgPSBBcnJheTx7XHJcblx0bG9naW46IHN0cmluZztcclxuXHRpZDogbnVtYmVyO1xyXG5cdG5vZGVfaWQ6IHN0cmluZztcclxuXHRhdmF0YXJfdXJsOiBzdHJpbmc7XHJcblx0Z3JhdmF0YXJfaWQ6IHN0cmluZztcclxuXHR1cmw6IHN0cmluZztcclxuXHRodG1sX3VybDogc3RyaW5nO1xyXG5cdGZvbGxvd2Vyc191cmw6IHN0cmluZztcclxuXHRmb2xsb3dpbmdfdXJsOiBzdHJpbmc7XHJcblx0Z2lzdHNfdXJsOiBzdHJpbmc7XHJcblx0c3RhcnJlZF91cmw6IHN0cmluZztcclxuXHRzdWJzY3JpcHRpb25zX3VybDogc3RyaW5nO1xyXG5cdG9yZ2FuaXphdGlvbnNfdXJsOiBzdHJpbmc7XHJcblx0cmVwb3NfdXJsOiBzdHJpbmc7XHJcblx0ZXZlbnRzX3VybDogc3RyaW5nO1xyXG5cdHJlY2VpdmVkX2V2ZW50c191cmw6IHN0cmluZztcclxuXHR0eXBlOiBzdHJpbmc7XHJcblx0c2l0ZV9hZG1pbjogYm9vbGVhbjtcclxuXHRzY29yZTogbnVtYmVyO1xyXG59PjtcclxuZXhwb3J0IGludGVyZmFjZSBVc2VyRGF0YUFwaSB7XHJcblx0dG90YWxfY291bnQ6IG51bWJlcjtcclxuXHRpbmNvbXBsZXRlX3Jlc3VsdHM6IGJvb2xlYW47XHJcblx0aXRlbXM6IFVzZXJEYXRhQXJyYXlBcGk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hVc2VyRGF0YUFkdmFuY2VkKHVybDogc3RyaW5nKTogUHJvbWlzZTxVc2VyRGF0YUFwaT4ge1xyXG5cdHRyeSB7XHJcblx0XHRjb25zdCByZXNwb25zZTogQXhpb3NSZXNwb25zZTxVc2VyRGF0YUFwaT4gPSBhd2FpdCBheGlvcy5nZXQodXJsKTtcclxuXHRcdHJldHVybiByZXNwb25zZS5kYXRhO1xyXG5cdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRpZiAoYXhpb3MuaXNBeGlvc0Vycm9yKGVycm9yKSkge1xyXG5cdFx0XHRjb25zdCBheGlvc0Vycm9yID0gZXJyb3IgYXMgQXhpb3NFcnJvcjtcclxuXHRcdFx0Y29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBheGlvc0Vycm9yLm1lc3NhZ2UpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Y29uc29sZS5lcnJvcignVW5rbm93biBlcnJvcjonLCBlcnJvcik7XHJcblx0XHR9XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGEnKTtcclxuXHR9XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBBcGlSZXNwIHtcclxuXHRwcm9wczoge1xyXG5cdFx0dXNlcnM6IFVzZXJEYXRhQXJyYXlBcGlcclxuXHR9XHJcbn1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhsaW1pdDogbnVtYmVyLCBvZmZzZXQ6IG51bWJlciwgdHlwZWRWYWx1ZTogc3RyaW5nKTogUHJvbWlzZTxBcGlSZXNwPiB7XHJcblx0bGV0IHVybDogc3RyaW5nO1xyXG5cdGlmICh0eXBlZFZhbHVlICYmIHR5cGVkVmFsdWUudHJpbSgpID09PSAnJykge1xyXG5cdFx0dXJsID0gYGh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vc2VhcmNoL3VzZXJzP3E9dHlwZTp1c2VyJnBhZ2U9JHtvZmZzZXR9JnBlcl9wYWdlPSR7bGltaXR9YDtcclxuXHRcdHRyeSB7XHJcblx0XHRcdGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaFVzZXJEYXRhQWR2YW5jZWQodXJsKTtcclxuXHRcdFx0Y29uc29sZS5sb2coJ0RhdGE6JywgZGF0YSk7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0cHJvcHM6IHtcclxuXHRcdFx0XHRcdHVzZXJzOiBkYXRhLml0ZW1zXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0XHRjb25zb2xlLmVycm9yKGVycm9yKTtcclxuXHRcdFx0dGhyb3cgZXJyb3I7XHJcblx0XHR9XHJcblx0fSBlbHNlIHtcclxuXHRcdHVybCA9IGBodHRwczovL2FwaS5naXRodWIuY29tL3NlYXJjaC91c2Vycz9xPSR7dHlwZWRWYWx1ZX0mcGFnZT0ke29mZnNldH0mcGVyX3BhZ2U9JHtsaW1pdH1gO1xyXG5cdFx0dHJ5IHtcclxuXHRcdFx0Y29uc3QgZGF0YSA9IGF3YWl0IGZldGNoVXNlckRhdGFBZHZhbmNlZCh1cmwpO1xyXG5cdFx0XHRjb25zb2xlLmxvZygnRGF0YTonLCBkYXRhKTtcclxuXHRcdFx0Ly9cdHJldHVybiBkYXRhLml0ZW1zO1xyXG5cclxuXHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0cHJvcHM6IHtcclxuXHRcdFx0XHRcdHVzZXJzOiBkYXRhLml0ZW1zXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0XHRjb25zb2xlLmVycm9yKGVycm9yKTtcclxuXHRcdFx0dGhyb3cgZXJyb3I7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbiovXHJcblxyXG5cclxuXHJcblxyXG4vKlxyXG5pbXBvcnQgdHlwZSB7IEluZmVyR2V0U2VydmVyU2lkZVByb3BzVHlwZSwgR2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSAnbmV4dCdcclxuXHJcbmltcG9ydCB7IE91dGxldCB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBBcHAgZnJvbSBcIi4uL0FwcFwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQgUHJvdmlkZXJzIGZyb20gXCIuLi9yZWR1eC9Qcm92aWRlclwiO1xyXG4gXHJcbmltcG9ydCB7IHVzZUFwcERpc3BhdGNoIH0gZnJvbSBcIi4uL2hvb2tzL3JlZHV4XCI7XHJcbmltcG9ydCB7IHNldFRlc3RpbmcgfSBmcm9tIFwiLi4vcmVkdXgvc2xpY2VzL3Bvc3RzU2xpY2VcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuIFxyXG50eXBlIFJlcG8gPSB7XHJcbiAgbmFtZTogc3RyaW5nXHJcbiAgc3RhcmdhemVyc19jb3VudDogbnVtYmVyXHJcbn1cclxuIFxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gKGFzeW5jICgpID0+IHtcclxuICAvLyBGZXRjaCBkYXRhIGZyb20gZXh0ZXJuYWwgQVBJXHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vcmVwb3MvdmVyY2VsL25leHQuanMnKVxyXG4gIGNvbnN0IHJlcG86IFJlcG8gPSBhd2FpdCByZXMuanNvbigpXHJcblxyXG4gIGNvbnNvbGUubG9nKFwicmVzXCIsIHJlcylcclxuICAvLyBQYXNzIGRhdGEgdG8gdGhlIHBhZ2UgdmlhIHByb3BzXHJcbiAgcmV0dXJuIHsgcHJvcHM6IHsgcmVwbyB9IH1cclxufSkgc2F0aXNmaWVzIEdldFNlcnZlclNpZGVQcm9wczx7IHJlcG86IFJlcG8gfT5cclxuIFxyXG5cclxuXHJcbmZ1bmN0aW9uIE15QXBwKFxyXG5cdHtcclxuXHRcdHJlcG8sXHJcblx0ICB9OiBJbmZlckdldFNlcnZlclNpZGVQcm9wc1R5cGU8dHlwZW9mIGdldFNlcnZlclNpZGVQcm9wcz5cclxuKSB7XHJcblxyXG4gY29uc3QgaGFuZGxlQ2xpY2ggPSAoKSA9PiB7XHJcblxyXG4gfVx0XHJcblx0cmV0dXJuIChcclxuXHQ8PiBcdFxyXG48UHJvdmlkZXJzPlxyXG5cclxuPHA+e3JlcG8uc3RhcmdhemVyc19jb3VudH08L3A+XHJcblx0PEFwcCAvPiAgXHJcbjwvUHJvdmlkZXJzPlx0XHJcbiBcclxuIFxyXG5cdDwvPlxyXG5cdCk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XHJcblxyXG4qL1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG57LypcclxuPExheW91dD5cclxuXHJcbjwvTGF5b3V0PlxyXG4qL30iXSwibmFtZXMiOlsiQXBwIiwiUHJvdmlkZXJzIiwiTXlBcHAiLCJ1c2VycyIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});