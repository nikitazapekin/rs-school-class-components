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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/redux */ \"./src/hooks/redux.ts\");\n/* harmony import */ var _redux_action_creators_setUsersActionCreator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/action-creators/setUsersActionCreator */ \"./src/redux/action-creators/setUsersActionCreator.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst UsersPage = (param)=>{\n    let { users } = param;\n    _s();\n    const dispatch = (0,_hooks_redux__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        dispatch((0,_redux_action_creators_setUsersActionCreator__WEBPACK_IMPORTED_MODULE_3__.setUsersActionCreator)(users));\n    }, [\n        users\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n        fileName: \"C:\\\\Users\\\\wotbl\\\\search-rs\\\\src\\\\pages\\\\index.tsx\",\n        lineNumber: 49,\n        columnNumber: 3\n    }, undefined);\n};\n_s(UsersPage, \"DKdeqxp2QYw2p6z8/ErYMRK/Ubo=\", false, function() {\n    return [\n        _hooks_redux__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch\n    ];\n});\n_c = UsersPage;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UsersPage);\nvar _c;\n$RefreshReg$(_c, \"UsersPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQU1rQztBQUNjO0FBQ3VDO0FBa0N2RixNQUFNRyxZQUFZO1FBQUMsRUFBRUMsS0FBSyxFQUFTOztJQUNsQyxNQUFNQyxXQUFXSiw0REFBY0E7SUFDL0JELGdEQUFTQSxDQUFDO1FBQ1RLLFNBQVNILG1HQUFxQkEsQ0FBQ0U7SUFDaEMsR0FBRztRQUFDQTtLQUFNO0lBQ1YscUJBQ0MsOERBQUNFOzs7OztBQUlIO0dBVk1IOztRQUNZRix3REFBY0E7OztLQUQxQkU7O0FBWU4sK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD8xOWEwIl0sInNvdXJjZXNDb250ZW50IjpbIiBcclxuIFxyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG4gXHJcbmltcG9ydCB7IEdldFNlcnZlclNpZGVQcm9wcyB9IGZyb20gJ25leHQnO1xyXG5pbXBvcnQgeyBBeGlvc0Vycm9yLCBBeGlvc1Jlc3BvbnNlIH0gZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZUFwcERpc3BhdGNoIH0gZnJvbSAnLi4vaG9va3MvcmVkdXgnO1xyXG5pbXBvcnQgeyBzZXRVc2Vyc0FjdGlvbkNyZWF0b3IgfSBmcm9tICcuLi9yZWR1eC9hY3Rpb24tY3JlYXRvcnMvc2V0VXNlcnNBY3Rpb25DcmVhdG9yJztcclxudHlwZSBVc2VyRGF0YUFycmF5ID0gQXJyYXk8e1xyXG5cdGxvZ2luOiBzdHJpbmc7XHJcblx0aWQ6IG51bWJlcjtcclxuXHRub2RlX2lkOiBzdHJpbmc7XHJcblx0YXZhdGFyX3VybDogc3RyaW5nO1xyXG5cdGdyYXZhdGFyX2lkOiBzdHJpbmc7XHJcblx0dXJsOiBzdHJpbmc7XHJcblx0aHRtbF91cmw6IHN0cmluZztcclxuXHRmb2xsb3dlcnNfdXJsOiBzdHJpbmc7XHJcblx0Zm9sbG93aW5nX3VybDogc3RyaW5nO1xyXG5cdGdpc3RzX3VybDogc3RyaW5nO1xyXG5cdHN0YXJyZWRfdXJsOiBzdHJpbmc7XHJcblx0c3Vic2NyaXB0aW9uc191cmw6IHN0cmluZztcclxuXHRvcmdhbml6YXRpb25zX3VybDogc3RyaW5nO1xyXG5cdHJlcG9zX3VybDogc3RyaW5nO1xyXG5cdGV2ZW50c191cmw6IHN0cmluZztcclxuXHRyZWNlaXZlZF9ldmVudHNfdXJsOiBzdHJpbmc7XHJcblx0dHlwZTogc3RyaW5nO1xyXG5cdHNpdGVfYWRtaW46IGJvb2xlYW47XHJcblx0c2NvcmU6IG51bWJlcjtcclxufT47XHJcbmludGVyZmFjZSBVc2VyRGF0YSB7XHJcblx0dG90YWxfY291bnQ6IG51bWJlcjtcclxuXHRpbmNvbXBsZXRlX3Jlc3VsdHM6IGJvb2xlYW47XHJcblx0aXRlbXM6IFVzZXJEYXRhQXJyYXk7XHJcbn1cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuXHR1c2VyczogVXNlckRhdGFBcnJheTtcclxuXHRxdWVyeTogc3RyaW5nO1xyXG5cdHBhZ2U6IG51bWJlcjtcclxuXHRsaW1pdDogbnVtYmVyO1xyXG59XHJcblxyXG5jb25zdCBVc2Vyc1BhZ2UgPSAoeyB1c2VycyB9OiBQcm9wcykgPT4ge1xyXG5cdGNvbnN0IGRpc3BhdGNoID0gdXNlQXBwRGlzcGF0Y2goKVxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRkaXNwYXRjaChzZXRVc2Vyc0FjdGlvbkNyZWF0b3IodXNlcnMpKVxyXG5cdH0sIFt1c2Vyc10pXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXY+XHJcblx0XHRcdCBcclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2Vyc1BhZ2U7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xyXG5cdGNvbnN0IHsgcXVlcnksIHBhZ2UgLCBsaW1pdCA9ICcxMCcgfSA9IGNvbnRleHQucXVlcnk7XHJcblx0Y29uc3Qgb2Zmc2V0ID0gcGFyc2VJbnQocGFnZSBhcyBzdHJpbmcsIDEwKTtcclxuXHRjb25zdCBwZXJQYWdlID0gcGFyc2VJbnQobGltaXQgYXMgc3RyaW5nLCAxMCk7XHJcblxyXG5cdGxldCB1cmw6IHN0cmluZztcclxuXHJcblx0aWYgKCFxdWVyeSkge1xyXG5cdC8vaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9zZWFyY2gvdXNlcnM/cT10eXBlOnVzZXImcGFnZT0yJnBlcl9wYWdlPTEwXHJcblx0XHR1cmwgPSBgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9zZWFyY2gvdXNlcnM/cT10eXBlOnVzZXImcGFnZT0ke29mZnNldH0mcGVyX3BhZ2U9JHtwZXJQYWdlfWA7XHJcblx0fSBlbHNlIHtcclxuXHRcdHVybCA9IGBodHRwczovL2FwaS5naXRodWIuY29tL3NlYXJjaC91c2Vycz9xPSR7cXVlcnl9JnBhZ2U9JHtvZmZzZXR9JnBlcl9wYWdlPSR7cGVyUGFnZX1gO1xyXG5cdH1cclxuXHR0cnkge1xyXG5cdFx0bGV0IHVzZXJzOiBVc2VyRGF0YUFycmF5ID0gW107XHJcblxyXG5cdFx0aWYgKCFxdWVyeSkge1xyXG5cdFx0XHRjb25zdCByZXNwb25zZTogQXhpb3NSZXNwb25zZTxVc2VyRGF0YT4gPSBhd2FpdCBheGlvcy5nZXQodXJsKTtcclxuXHRcdFx0dXNlcnMgPSByZXNwb25zZS5kYXRhLml0ZW1zO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Y29uc3QgcmVzcG9uc2U6IEF4aW9zUmVzcG9uc2U8VXNlckRhdGE+ID0gYXdhaXQgYXhpb3MuZ2V0KHVybCk7XHJcblx0XHRcdHVzZXJzID0gcmVzcG9uc2UuZGF0YS5pdGVtcztcclxuXHRcdH1cclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHByb3BzOiB7XHJcblx0XHRcdFx0dXNlcnMsXHJcblx0XHRcdCBcclxuXHRcdFx0fSxcclxuXHRcdH07XHJcblx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdGlmIChheGlvcy5pc0F4aW9zRXJyb3IoZXJyb3IpKSB7XHJcblx0XHRcdGNvbnN0IGF4aW9zRXJyb3IgPSBlcnJvciBhcyBBeGlvc0Vycm9yO1xyXG5cdFx0XHRjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGF4aW9zRXJyb3IubWVzc2FnZSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRjb25zb2xlLmVycm9yKCdVbmtub3duIGVycm9yOicsIGVycm9yKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHByb3BzOiB7XHJcblx0XHRcdFx0dXNlcnM6IFtdLFxyXG5cdFx0XHQgXHJcblx0XHRcdH0sXHJcblx0XHR9O1xyXG5cdH1cclxufTtcclxuXHJcblxyXG5cclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZUFwcERpc3BhdGNoIiwic2V0VXNlcnNBY3Rpb25DcmVhdG9yIiwiVXNlcnNQYWdlIiwidXNlcnMiLCJkaXNwYXRjaCIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});