"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/details",{

/***/ "./src/pages/details/index.tsx":
/*!*************************************!*\
  !*** ./src/pages/details/index.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_details__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/details */ \"./src/components/details.tsx\");\n\n\nconst Details = (param)=>{\n    let { user } = param;\n    console.log(\"USER\", user);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false);\n};\n_c = Details;\nDetails.Layout = _components_details__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Details);\nvar _c;\n$RefreshReg$(_c, \"Details\");\n /*const offset = parseInt(page as string, 10);\r\nconst perPage = parseInt(limit as string, 10);\r\nlet url: string;\r\nif (!query) {\r\n    url = `https://api.github.com/search/users?q=type:user&page=${offset}&per_page=${perPage}`;\r\n} else {\r\n    url = `https://api.github.com/search/users?q=${query}&page=${offset}&per_page=${perPage}`;\r\n}\r\ntry {\r\n    let users: UserDataArray = [];\r\n\r\n    if (!query) {\r\n        const response: AxiosResponse<UserData> = await axios.get(url);\r\n        users = response.data.items;\r\n    } else {\r\n        const response: AxiosResponse<UserData> = await axios.get(url);\r\n        users = response.data.items;\r\n    }\r\n    return {\r\n        props: {\r\n            users,\r\n        },\r\n    };\r\n} catch (error) {\r\n    if (axios.isAxiosError(error)) {\r\n        const axiosError = error as AxiosError;\r\n        console.error('Error fetching data:', axiosError.message);\r\n    } else {\r\n        console.error('Unknown error:', error);\r\n    }\r\n    return {\r\n        props: {\r\n            users: [],\r\n         \r\n        },\r\n    };\r\n}\r\n};\r\n*/  /*\r\ninterface User {\r\n    login: string;\r\n    id: number;\r\n    node_id: string;\r\n    avatar_url: string;\r\n    gravatar_id: string;\r\n    url: string;\r\n    html_url: string;\r\n    followers_url: string;\r\n    following_url: string;\r\n    gists_url: string;\r\n    starred_url: string;\r\n    subscriptions_url: string;\r\n    organizations_url: string;\r\n    repos_url: string;\r\n    events_url: string;\r\n    received_events_url: string;\r\n    type: string;\r\n    site_admin: boolean;\r\n    score: number;\r\n}\r\nexport const getPersonalData = async (username: string): Promise<User> => {\r\n    try {\r\n        const response: AxiosResponse<User> = await axios.get(`https://api.github.com/users/${username}`);\r\n        return response.data\r\n    } catch (error) {\r\n        if (axios.isAxiosError(error)) {\r\n            const axiosError = error as AxiosError;\r\n            console.error('Error fetching data:', axiosError.message);\r\n        } else {\r\n            console.error('Unknown error:', error);\r\n        }\r\n        throw new Error('Error fetching data');\r\n    }\r\n\r\n\r\n}\r\n    */ \n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZGV0YWlscy9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFcUQ7QUFJckQsTUFBTUMsVUFBVTtRQUNoQixFQUFDQyxJQUFJLEVBQVE7SUFHVEMsUUFBUUMsR0FBRyxDQUFDLFFBQVNGO0lBQ3JCLHFCQUFRO0FBR1o7S0FSTUQ7QUFTTkEsUUFBUUksTUFBTSxHQUFHTCwyREFBYUE7O0FBQzlCLCtEQUFlQyxPQUFPQSxFQUFDOzs7Q0FrRHZCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNDQSxJQU1BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXNDSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvZGV0YWlscy9pbmRleC50c3g/MzE0MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMgfSBmcm9tICduZXh0JztcclxuaW1wb3J0IGF4aW9zLCB7IEF4aW9zRXJyb3IsIEF4aW9zUmVzcG9uc2UgfSBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBEZXRhaWxzTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZGV0YWlscyc7XHJcbmludGVyZmFjZSBQcm9wcyB7XHJcblx0dXNlcjogVXNlclxyXG59XHJcbmNvbnN0IERldGFpbHMgPSAoXHJcbnt1c2VyfTogUHJvcHNcclxuKSA9PiB7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJVU0VSXCIgLCB1c2VyKVxyXG4gICAgcmV0dXJuICg8PlxyXG5cclxuICAgIDwvPik7XHJcbn1cclxuRGV0YWlscy5MYXlvdXQgPSBEZXRhaWxzTGF5b3V0O1xyXG5leHBvcnQgZGVmYXVsdCBEZXRhaWxzO1xyXG5pbnRlcmZhY2UgVXNlciB7XHJcbiAgICBsb2dpbjogc3RyaW5nO1xyXG4gICAgaWQ6IG51bWJlcjtcclxuICAgIG5vZGVfaWQ6IHN0cmluZztcclxuICAgIGF2YXRhcl91cmw6IHN0cmluZztcclxuICAgIGdyYXZhdGFyX2lkOiBzdHJpbmc7XHJcbiAgICB1cmw6IHN0cmluZztcclxuICAgIGh0bWxfdXJsOiBzdHJpbmc7XHJcbiAgICBmb2xsb3dlcnNfdXJsOiBzdHJpbmc7XHJcbiAgICBmb2xsb3dpbmdfdXJsOiBzdHJpbmc7XHJcbiAgICBnaXN0c191cmw6IHN0cmluZztcclxuICAgIHN0YXJyZWRfdXJsOiBzdHJpbmc7XHJcbiAgICBzdWJzY3JpcHRpb25zX3VybDogc3RyaW5nO1xyXG4gICAgb3JnYW5pemF0aW9uc191cmw6IHN0cmluZztcclxuICAgIHJlcG9zX3VybDogc3RyaW5nO1xyXG4gICAgZXZlbnRzX3VybDogc3RyaW5nO1xyXG4gICAgcmVjZWl2ZWRfZXZlbnRzX3VybDogc3RyaW5nO1xyXG4gICAgdHlwZTogc3RyaW5nO1xyXG4gICAgc2l0ZV9hZG1pbjogYm9vbGVhbjtcclxuICAgIHNjb3JlOiBudW1iZXI7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xyXG4gICAgY29uc3QgeyB1c2VyIH0gPSBjb250ZXh0LnF1ZXJ5O1xyXG5cclxuXHJcbiAgICBjb25zdCB1c2VybmFtZSA9IHBhcnNlSW50KHVzZXIgYXMgc3RyaW5nLCAxMClcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlOiBBeGlvc1Jlc3BvbnNlPFVzZXI+ID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzLyR7dXNlcm5hbWV9YCk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcHJvcHM6IHtcclxuXHJcbiAgICAgICAgICAgICAgICB1c2VyOiByZXNwb25zZS5kYXRhXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGlmIChheGlvcy5pc0F4aW9zRXJyb3IoZXJyb3IpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGF4aW9zRXJyb3IgPSBlcnJvciBhcyBBeGlvc0Vycm9yO1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGF4aW9zRXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignVW5rbm93biBlcnJvcjonLCBlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YScpO1xyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuLypjb25zdCBvZmZzZXQgPSBwYXJzZUludChwYWdlIGFzIHN0cmluZywgMTApO1xyXG5jb25zdCBwZXJQYWdlID0gcGFyc2VJbnQobGltaXQgYXMgc3RyaW5nLCAxMCk7XHJcbmxldCB1cmw6IHN0cmluZztcclxuaWYgKCFxdWVyeSkge1xyXG4gICAgdXJsID0gYGh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vc2VhcmNoL3VzZXJzP3E9dHlwZTp1c2VyJnBhZ2U9JHtvZmZzZXR9JnBlcl9wYWdlPSR7cGVyUGFnZX1gO1xyXG59IGVsc2Uge1xyXG4gICAgdXJsID0gYGh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vc2VhcmNoL3VzZXJzP3E9JHtxdWVyeX0mcGFnZT0ke29mZnNldH0mcGVyX3BhZ2U9JHtwZXJQYWdlfWA7XHJcbn1cclxudHJ5IHtcclxuICAgIGxldCB1c2VyczogVXNlckRhdGFBcnJheSA9IFtdO1xyXG5cclxuICAgIGlmICghcXVlcnkpIHtcclxuICAgICAgICBjb25zdCByZXNwb25zZTogQXhpb3NSZXNwb25zZTxVc2VyRGF0YT4gPSBhd2FpdCBheGlvcy5nZXQodXJsKTtcclxuICAgICAgICB1c2VycyA9IHJlc3BvbnNlLmRhdGEuaXRlbXM7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlOiBBeGlvc1Jlc3BvbnNlPFVzZXJEYXRhPiA9IGF3YWl0IGF4aW9zLmdldCh1cmwpO1xyXG4gICAgICAgIHVzZXJzID0gcmVzcG9uc2UuZGF0YS5pdGVtcztcclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgdXNlcnMsXHJcbiAgICAgICAgfSxcclxuICAgIH07XHJcbn0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBpZiAoYXhpb3MuaXNBeGlvc0Vycm9yKGVycm9yKSkge1xyXG4gICAgICAgIGNvbnN0IGF4aW9zRXJyb3IgPSBlcnJvciBhcyBBeGlvc0Vycm9yO1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgYXhpb3NFcnJvci5tZXNzYWdlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignVW5rbm93biBlcnJvcjonLCBlcnJvcik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIHVzZXJzOiBbXSxcclxuICAgICAgICAgXHJcbiAgICAgICAgfSxcclxuICAgIH07XHJcbn1cclxufTtcclxuKi9cclxuXHJcblxyXG5cclxuXHJcblxyXG4vKlxyXG5pbnRlcmZhY2UgVXNlciB7XHJcbiAgICBsb2dpbjogc3RyaW5nO1xyXG4gICAgaWQ6IG51bWJlcjtcclxuICAgIG5vZGVfaWQ6IHN0cmluZztcclxuICAgIGF2YXRhcl91cmw6IHN0cmluZztcclxuICAgIGdyYXZhdGFyX2lkOiBzdHJpbmc7XHJcbiAgICB1cmw6IHN0cmluZztcclxuICAgIGh0bWxfdXJsOiBzdHJpbmc7XHJcbiAgICBmb2xsb3dlcnNfdXJsOiBzdHJpbmc7XHJcbiAgICBmb2xsb3dpbmdfdXJsOiBzdHJpbmc7XHJcbiAgICBnaXN0c191cmw6IHN0cmluZztcclxuICAgIHN0YXJyZWRfdXJsOiBzdHJpbmc7XHJcbiAgICBzdWJzY3JpcHRpb25zX3VybDogc3RyaW5nO1xyXG4gICAgb3JnYW5pemF0aW9uc191cmw6IHN0cmluZztcclxuICAgIHJlcG9zX3VybDogc3RyaW5nO1xyXG4gICAgZXZlbnRzX3VybDogc3RyaW5nO1xyXG4gICAgcmVjZWl2ZWRfZXZlbnRzX3VybDogc3RyaW5nO1xyXG4gICAgdHlwZTogc3RyaW5nO1xyXG4gICAgc2l0ZV9hZG1pbjogYm9vbGVhbjtcclxuICAgIHNjb3JlOiBudW1iZXI7XHJcbn1cclxuZXhwb3J0IGNvbnN0IGdldFBlcnNvbmFsRGF0YSA9IGFzeW5jICh1c2VybmFtZTogc3RyaW5nKTogUHJvbWlzZTxVc2VyPiA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlOiBBeGlvc1Jlc3BvbnNlPFVzZXI+ID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzLyR7dXNlcm5hbWV9YCk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGFcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgaWYgKGF4aW9zLmlzQXhpb3NFcnJvcihlcnJvcikpIHtcclxuICAgICAgICAgICAgY29uc3QgYXhpb3NFcnJvciA9IGVycm9yIGFzIEF4aW9zRXJyb3I7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgYXhpb3NFcnJvci5tZXNzYWdlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdVbmtub3duIGVycm9yOicsIGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhJyk7XHJcbiAgICB9XHJcblxyXG5cclxufVxyXG4gICAgKi8iXSwibmFtZXMiOlsiRGV0YWlsc0xheW91dCIsIkRldGFpbHMiLCJ1c2VyIiwiY29uc29sZSIsImxvZyIsIkxheW91dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/details/index.tsx\n"));

/***/ })

});