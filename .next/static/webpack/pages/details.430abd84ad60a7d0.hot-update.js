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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_details__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/details */ \"./src/components/details.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _hooks_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/redux */ \"./src/hooks/redux.ts\");\n/* harmony import */ var _redux_action_creators_setClickedUserActionCreator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/action-creators/setClickedUserActionCreator */ \"./src/redux/action-creators/setClickedUserActionCreator.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Details = (param)=>{\n    let { user } = param;\n    _s();\n    const dispatch = (0,_hooks_redux__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        dispatch((0,_redux_action_creators_setClickedUserActionCreator__WEBPACK_IMPORTED_MODULE_4__.SetClickedUserActionCreator)(user));\n    }, [\n        user\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false);\n};\n_s(Details, \"DKdeqxp2QYw2p6z8/ErYMRK/Ubo=\", false, function() {\n    return [\n        _hooks_redux__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch\n    ];\n});\n_c = Details;\nDetails.Layout = _components_details__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Details);\nvar _c;\n$RefreshReg$(_c, \"Details\");\n /*const offset = parseInt(page as string, 10);\r\nconst perPage = parseInt(limit as string, 10);\r\nlet url: string;\r\nif (!query) {\r\n    url = `https://api.github.com/search/users?q=type:user&page=${offset}&per_page=${perPage}`;\r\n} else {\r\n    url = `https://api.github.com/search/users?q=${query}&page=${offset}&per_page=${perPage}`;\r\n}\r\ntry {\r\n    let users: UserDataArray = [];\r\n\r\n    if (!query) {\r\n        const response: AxiosResponse<UserData> = await axios.get(url);\r\n        users = response.data.items;\r\n    } else {\r\n        const response: AxiosResponse<UserData> = await axios.get(url);\r\n        users = response.data.items;\r\n    }\r\n    return {\r\n        props: {\r\n            users,\r\n        },\r\n    };\r\n} catch (error) {\r\n    if (axios.isAxiosError(error)) {\r\n        const axiosError = error as AxiosError;\r\n        console.error('Error fetching data:', axiosError.message);\r\n    } else {\r\n        console.error('Unknown error:', error);\r\n    }\r\n    return {\r\n        props: {\r\n            users: [],\r\n         \r\n        },\r\n    };\r\n}\r\n};\r\n*/  /*\r\ninterface User {\r\n    login: string;\r\n    id: number;\r\n    node_id: string;\r\n    avatar_url: string;\r\n    gravatar_id: string;\r\n    url: string;\r\n    html_url: string;\r\n    followers_url: string;\r\n    following_url: string;\r\n    gists_url: string;\r\n    starred_url: string;\r\n    subscriptions_url: string;\r\n    organizations_url: string;\r\n    repos_url: string;\r\n    events_url: string;\r\n    received_events_url: string;\r\n    type: string;\r\n    site_admin: boolean;\r\n    score: number;\r\n}\r\nexport const getPersonalData = async (username: string): Promise<User> => {\r\n    try {\r\n        const response: AxiosResponse<User> = await axios.get(`https://api.github.com/users/${username}`);\r\n        return response.data\r\n    } catch (error) {\r\n        if (axios.isAxiosError(error)) {\r\n            const axiosError = error as AxiosError;\r\n            console.error('Error fetching data:', axiosError.message);\r\n        } else {\r\n            console.error('Unknown error:', error);\r\n        }\r\n        throw new Error('Error fetching data');\r\n    }\r\n\r\n\r\n}\r\n    */ \n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZGV0YWlscy9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUVxRDtBQUNuQjtBQUNpQjtBQUNtRDtBQUl0RyxNQUFNSSxVQUFVO1FBQ1osRUFBRUMsSUFBSSxFQUFTOztJQUVmLE1BQU1DLFdBQVdKLDREQUFjQTtJQUUvQkQsZ0RBQVNBLENBQUM7UUFDTkssU0FBU0gsK0dBQTJCQSxDQUFDRTtJQUN6QyxHQUFHO1FBQUNBO0tBQUs7SUFDVCxxQkFBUTtBQUdaO0dBWE1EOztRQUdlRix3REFBY0E7OztLQUg3QkU7QUFZTkEsUUFBUUcsTUFBTSxHQUFHUCwyREFBYUE7O0FBQzlCLCtEQUFlSSxPQUFPQSxFQUFDOzs7Q0FrRHZCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNDQSxJQU1BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXNDSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvZGV0YWlscy9pbmRleC50c3g/MzE0MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMgfSBmcm9tICduZXh0JztcclxuaW1wb3J0IGF4aW9zLCB7IEF4aW9zRXJyb3IsIEF4aW9zUmVzcG9uc2UgfSBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBEZXRhaWxzTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZGV0YWlscyc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlQXBwRGlzcGF0Y2ggfSBmcm9tICcuLi8uLi9ob29rcy9yZWR1eCc7XHJcbmltcG9ydCB7IFNldENsaWNrZWRVc2VyQWN0aW9uQ3JlYXRvciB9IGZyb20gJy4uLy4uL3JlZHV4L2FjdGlvbi1jcmVhdG9ycy9zZXRDbGlja2VkVXNlckFjdGlvbkNyZWF0b3InO1xyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gICAgdXNlcjogVXNlclxyXG59XHJcbmNvbnN0IERldGFpbHMgPSAoXHJcbiAgICB7IHVzZXIgfTogUHJvcHNcclxuKSA9PiB7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZUFwcERpc3BhdGNoKClcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKFNldENsaWNrZWRVc2VyQWN0aW9uQ3JlYXRvcih1c2VyKSlcclxuICAgIH0sIFt1c2VyXSlcclxuICAgIHJldHVybiAoPD5cclxuXHJcbiAgICA8Lz4pO1xyXG59XHJcbkRldGFpbHMuTGF5b3V0ID0gRGV0YWlsc0xheW91dDtcclxuZXhwb3J0IGRlZmF1bHQgRGV0YWlscztcclxuaW50ZXJmYWNlIFVzZXIge1xyXG4gICAgbG9naW46IHN0cmluZztcclxuICAgIGlkOiBudW1iZXI7XHJcbiAgICBub2RlX2lkOiBzdHJpbmc7XHJcbiAgICBhdmF0YXJfdXJsOiBzdHJpbmc7XHJcbiAgICBncmF2YXRhcl9pZDogc3RyaW5nO1xyXG4gICAgdXJsOiBzdHJpbmc7XHJcbiAgICBodG1sX3VybDogc3RyaW5nO1xyXG4gICAgZm9sbG93ZXJzX3VybDogc3RyaW5nO1xyXG4gICAgZm9sbG93aW5nX3VybDogc3RyaW5nO1xyXG4gICAgZ2lzdHNfdXJsOiBzdHJpbmc7XHJcbiAgICBzdGFycmVkX3VybDogc3RyaW5nO1xyXG4gICAgc3Vic2NyaXB0aW9uc191cmw6IHN0cmluZztcclxuICAgIG9yZ2FuaXphdGlvbnNfdXJsOiBzdHJpbmc7XHJcbiAgICByZXBvc191cmw6IHN0cmluZztcclxuICAgIGV2ZW50c191cmw6IHN0cmluZztcclxuICAgIHJlY2VpdmVkX2V2ZW50c191cmw6IHN0cmluZztcclxuICAgIHR5cGU6IHN0cmluZztcclxuICAgIHNpdGVfYWRtaW46IGJvb2xlYW47XHJcbiAgICBzY29yZTogbnVtYmVyO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wczogR2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKGNvbnRleHQpID0+IHtcclxuICAgIGNvbnN0IHsgdXNlciB9ID0gY29udGV4dC5xdWVyeTtcclxuXHJcblxyXG4gICAgY29uc3QgdXNlcm5hbWUgPSBwYXJzZUludCh1c2VyIGFzIHN0cmluZywgMTApXHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZTogQXhpb3NSZXNwb25zZTxVc2VyPiA9IGF3YWl0IGF4aW9zLmdldChgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy8ke3VzZXJuYW1lfWApO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHByb3BzOiB7XHJcblxyXG4gICAgICAgICAgICAgICAgdXNlcjogcmVzcG9uc2UuZGF0YVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBpZiAoYXhpb3MuaXNBeGlvc0Vycm9yKGVycm9yKSkge1xyXG4gICAgICAgICAgICBjb25zdCBheGlvc0Vycm9yID0gZXJyb3IgYXMgQXhpb3NFcnJvcjtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBheGlvc0Vycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1Vua25vd24gZXJyb3I6JywgZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGEnKTtcclxuICAgIH1cclxuXHJcblxyXG59XHJcbi8qY29uc3Qgb2Zmc2V0ID0gcGFyc2VJbnQocGFnZSBhcyBzdHJpbmcsIDEwKTtcclxuY29uc3QgcGVyUGFnZSA9IHBhcnNlSW50KGxpbWl0IGFzIHN0cmluZywgMTApO1xyXG5sZXQgdXJsOiBzdHJpbmc7XHJcbmlmICghcXVlcnkpIHtcclxuICAgIHVybCA9IGBodHRwczovL2FwaS5naXRodWIuY29tL3NlYXJjaC91c2Vycz9xPXR5cGU6dXNlciZwYWdlPSR7b2Zmc2V0fSZwZXJfcGFnZT0ke3BlclBhZ2V9YDtcclxufSBlbHNlIHtcclxuICAgIHVybCA9IGBodHRwczovL2FwaS5naXRodWIuY29tL3NlYXJjaC91c2Vycz9xPSR7cXVlcnl9JnBhZ2U9JHtvZmZzZXR9JnBlcl9wYWdlPSR7cGVyUGFnZX1gO1xyXG59XHJcbnRyeSB7XHJcbiAgICBsZXQgdXNlcnM6IFVzZXJEYXRhQXJyYXkgPSBbXTtcclxuXHJcbiAgICBpZiAoIXF1ZXJ5KSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2U6IEF4aW9zUmVzcG9uc2U8VXNlckRhdGE+ID0gYXdhaXQgYXhpb3MuZ2V0KHVybCk7XHJcbiAgICAgICAgdXNlcnMgPSByZXNwb25zZS5kYXRhLml0ZW1zO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCByZXNwb25zZTogQXhpb3NSZXNwb25zZTxVc2VyRGF0YT4gPSBhd2FpdCBheGlvcy5nZXQodXJsKTtcclxuICAgICAgICB1c2VycyA9IHJlc3BvbnNlLmRhdGEuaXRlbXM7XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIHVzZXJzLFxyXG4gICAgICAgIH0sXHJcbiAgICB9O1xyXG59IGNhdGNoIChlcnJvcikge1xyXG4gICAgaWYgKGF4aW9zLmlzQXhpb3NFcnJvcihlcnJvcikpIHtcclxuICAgICAgICBjb25zdCBheGlvc0Vycm9yID0gZXJyb3IgYXMgQXhpb3NFcnJvcjtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGF4aW9zRXJyb3IubWVzc2FnZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1Vua25vd24gZXJyb3I6JywgZXJyb3IpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICB1c2VyczogW10sXHJcbiAgICAgICAgIFxyXG4gICAgICAgIH0sXHJcbiAgICB9O1xyXG59XHJcbn07XHJcbiovXHJcblxyXG5cclxuXHJcblxyXG5cclxuLypcclxuaW50ZXJmYWNlIFVzZXIge1xyXG4gICAgbG9naW46IHN0cmluZztcclxuICAgIGlkOiBudW1iZXI7XHJcbiAgICBub2RlX2lkOiBzdHJpbmc7XHJcbiAgICBhdmF0YXJfdXJsOiBzdHJpbmc7XHJcbiAgICBncmF2YXRhcl9pZDogc3RyaW5nO1xyXG4gICAgdXJsOiBzdHJpbmc7XHJcbiAgICBodG1sX3VybDogc3RyaW5nO1xyXG4gICAgZm9sbG93ZXJzX3VybDogc3RyaW5nO1xyXG4gICAgZm9sbG93aW5nX3VybDogc3RyaW5nO1xyXG4gICAgZ2lzdHNfdXJsOiBzdHJpbmc7XHJcbiAgICBzdGFycmVkX3VybDogc3RyaW5nO1xyXG4gICAgc3Vic2NyaXB0aW9uc191cmw6IHN0cmluZztcclxuICAgIG9yZ2FuaXphdGlvbnNfdXJsOiBzdHJpbmc7XHJcbiAgICByZXBvc191cmw6IHN0cmluZztcclxuICAgIGV2ZW50c191cmw6IHN0cmluZztcclxuICAgIHJlY2VpdmVkX2V2ZW50c191cmw6IHN0cmluZztcclxuICAgIHR5cGU6IHN0cmluZztcclxuICAgIHNpdGVfYWRtaW46IGJvb2xlYW47XHJcbiAgICBzY29yZTogbnVtYmVyO1xyXG59XHJcbmV4cG9ydCBjb25zdCBnZXRQZXJzb25hbERhdGEgPSBhc3luYyAodXNlcm5hbWU6IHN0cmluZyk6IFByb21pc2U8VXNlcj4gPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZTogQXhpb3NSZXNwb25zZTxVc2VyPiA9IGF3YWl0IGF4aW9zLmdldChgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy8ke3VzZXJuYW1lfWApO1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGlmIChheGlvcy5pc0F4aW9zRXJyb3IoZXJyb3IpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGF4aW9zRXJyb3IgPSBlcnJvciBhcyBBeGlvc0Vycm9yO1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGF4aW9zRXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignVW5rbm93biBlcnJvcjonLCBlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YScpO1xyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuICAgICovIl0sIm5hbWVzIjpbIkRldGFpbHNMYXlvdXQiLCJ1c2VFZmZlY3QiLCJ1c2VBcHBEaXNwYXRjaCIsIlNldENsaWNrZWRVc2VyQWN0aW9uQ3JlYXRvciIsIkRldGFpbHMiLCJ1c2VyIiwiZGlzcGF0Y2giLCJMYXlvdXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/details/index.tsx\n"));

/***/ })

});