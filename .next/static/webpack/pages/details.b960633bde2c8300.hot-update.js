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

/***/ "./src/components/UserData/index.tsx":
/*!*******************************************!*\
  !*** ./src/components/UserData/index.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.module.scss */ \"./src/components/UserData/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ThemeContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ThemeContext */ \"./src/components/ThemeContext/index.tsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _redux_selectors_isLoadingUserData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/selectors/isLoadingUserData */ \"./src/redux/selectors/isLoadingUserData.ts\");\n/* harmony import */ var _redux_selectors_getClickedElement__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/selectors/getClickedElement */ \"./src/redux/selectors/getClickedElement.ts\");\n/* harmony import */ var _redux_selectors_getSearchParams__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../redux/selectors/getSearchParams */ \"./src/redux/selectors/getSearchParams.ts\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst UserData = ()=>{\n    _s();\n    const { isDark } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_ThemeContext__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n    const params = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)(_redux_selectors_getSearchParams__WEBPACK_IMPORTED_MODULE_6__.paramsSelector);\n    const loading = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)(_redux_selectors_isLoadingUserData__WEBPACK_IMPORTED_MODULE_4__.isLoadingUserDataSelector);\n    const clickedElement = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)(_redux_selectors_getClickedElement__WEBPACK_IMPORTED_MODULE_5__.clickedUserSelector);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"aside\", {\n        className: \"\".concat((_styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default().sidebar), \" \").concat(isDark ? (_styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default().sidebarDark) : \"\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: clickedElement.login\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\wotbl\\\\search-rs\\\\src\\\\components\\\\UserData\\\\index.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: clickedElement.avatar_url,\n                        alt: \"\".concat(clickedElement.login, \"'s avatar\"),\n                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default().avatar)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\wotbl\\\\search-rs\\\\src\\\\components\\\\UserData\\\\index.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"ID: \",\n                            clickedElement.id\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\wotbl\\\\search-rs\\\\src\\\\components\\\\UserData\\\\index.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Type: \",\n                            clickedElement.type\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\wotbl\\\\search-rs\\\\src\\\\components\\\\UserData\\\\index.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\wotbl\\\\search-rs\\\\src\\\\components\\\\UserData\\\\index.tsx\",\n                lineNumber: 20,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {\n                href: \"/?page=\".concat(params.offset).concat(params.query ? \"&query=\".concat(params.query) : \"\"),\n                children: \"Close\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\wotbl\\\\search-rs\\\\src\\\\components\\\\UserData\\\\index.tsx\",\n                lineNumber: 32,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\wotbl\\\\search-rs\\\\src\\\\components\\\\UserData\\\\index.tsx\",\n        lineNumber: 19,\n        columnNumber: 3\n    }, undefined);\n};\n_s(UserData, \"AskLw9BFrDVVCUl88Hz9zfnxhPU=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector\n    ];\n});\n_c = UserData;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserData);\nvar _c;\n$RefreshReg$(_c, \"UserData\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Vc2VyRGF0YS9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUN5QztBQUNOO0FBRVE7QUFDRDtBQUMwQztBQUVOO0FBQ1A7QUFDMUM7QUFFN0IsTUFBTVEsV0FBVzs7SUFDaEIsTUFBTSxFQUFFQyxNQUFNLEVBQUUsR0FBR1IsaURBQVVBLENBQUNDLHFEQUFZQTtJQUMxQyxNQUFNUSxTQUFTUCx3REFBV0EsQ0FBQ0csNEVBQWNBO0lBQ3pDLE1BQU1LLFVBQVVSLHdEQUFXQSxDQUFDQyx5RkFBeUJBO0lBQ3JELE1BQU1RLGlCQUFpQlQsd0RBQVdBLENBQUNFLG1GQUFtQkE7SUFDdEQscUJBQ0MsOERBQUNRO1FBQU1DLFdBQVcsR0FBcUJMLE9BQWxCVCxvRUFBYyxFQUFDLEtBQW9DLE9BQWpDUyxTQUFTVCx3RUFBa0IsR0FBRzs7MEJBQ3BFLDhEQUFDaUI7O2tDQUNBLDhEQUFDQztrQ0FBSU4sZUFBZU8sS0FBSzs7Ozs7O2tDQUN6Qiw4REFBQ0M7d0JBQ0FDLEtBQUtULGVBQWVVLFVBQVU7d0JBQzlCQyxLQUFLLEdBQXdCLE9BQXJCWCxlQUFlTyxLQUFLLEVBQUM7d0JBQzdCTCxXQUFXZCxtRUFBYTs7Ozs7O2tDQUV6Qiw4REFBQ3lCOzs0QkFBRTs0QkFBS2IsZUFBZWMsRUFBRTs7Ozs7OztrQ0FDekIsOERBQUNEOzs0QkFBRTs0QkFBT2IsZUFBZWUsSUFBSTs7Ozs7Ozs7Ozs7OzswQkFJOUIsOERBQUNwQixrREFBSUE7Z0JBQUNxQixNQUFNLFVBQTBCbEIsT0FBaEJBLE9BQU9tQixNQUFNLEVBQWdELE9BQTdDbkIsT0FBT29CLEtBQUssR0FBRyxVQUF1QixPQUFicEIsT0FBT29CLEtBQUssSUFBTTswQkFBSzs7Ozs7Ozs7Ozs7O0FBTXpGO0dBekJNdEI7O1FBRVVMLG9EQUFXQTtRQUNWQSxvREFBV0E7UUFDSkEsb0RBQVdBOzs7S0FKN0JLO0FBMkJOLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1VzZXJEYXRhL2luZGV4LnRzeD8zMmEzIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy5tb2R1bGUuc2Nzc1wiXHJcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZUFwcERpc3BhdGNoIH0gZnJvbSAnLi4vLi4vaG9va3MvcmVkdXgnO1xyXG5pbXBvcnQgVGhlbWVDb250ZXh0IGZyb20gJy4uL1RoZW1lQ29udGV4dCc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBpc0xvYWRpbmdVc2VyRGF0YVNlbGVjdG9yIH0gZnJvbSAnLi4vLi4vcmVkdXgvc2VsZWN0b3JzL2lzTG9hZGluZ1VzZXJEYXRhJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBjbGlja2VkVXNlclNlbGVjdG9yIH0gZnJvbSAnLi4vLi4vcmVkdXgvc2VsZWN0b3JzL2dldENsaWNrZWRFbGVtZW50JztcclxuaW1wb3J0IHsgcGFyYW1zU2VsZWN0b3IgfSBmcm9tICcuLi8uLi9yZWR1eC9zZWxlY3RvcnMvZ2V0U2VhcmNoUGFyYW1zJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmNvbnN0IFVzZXJEYXRhID0gKCkgPT4ge1xyXG5cdGNvbnN0IHsgaXNEYXJrIH0gPSB1c2VDb250ZXh0KFRoZW1lQ29udGV4dCk7XHJcblx0Y29uc3QgcGFyYW1zID0gdXNlU2VsZWN0b3IocGFyYW1zU2VsZWN0b3IpXHJcblx0Y29uc3QgbG9hZGluZyA9IHVzZVNlbGVjdG9yKGlzTG9hZGluZ1VzZXJEYXRhU2VsZWN0b3IpO1xyXG5cdGNvbnN0IGNsaWNrZWRFbGVtZW50ID0gdXNlU2VsZWN0b3IoY2xpY2tlZFVzZXJTZWxlY3RvcilcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGFzaWRlIGNsYXNzTmFtZT17YCR7c3R5bGVzLnNpZGViYXJ9ICR7aXNEYXJrID8gc3R5bGVzLnNpZGViYXJEYXJrIDogJyd9YH0+XHJcblx0XHRcdDxkaXY+XHJcblx0XHRcdFx0PGgyPntjbGlja2VkRWxlbWVudC5sb2dpbn08L2gyPlxyXG5cdFx0XHRcdDxpbWdcclxuXHRcdFx0XHRcdHNyYz17Y2xpY2tlZEVsZW1lbnQuYXZhdGFyX3VybH1cclxuXHRcdFx0XHRcdGFsdD17YCR7Y2xpY2tlZEVsZW1lbnQubG9naW59J3MgYXZhdGFyYH1cclxuXHRcdFx0XHRcdGNsYXNzTmFtZT17c3R5bGVzLmF2YXRhcn1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxwPklEOiB7Y2xpY2tlZEVsZW1lbnQuaWR9PC9wPlxyXG5cdFx0XHRcdDxwPlR5cGU6IHtjbGlja2VkRWxlbWVudC50eXBlfTwvcD5cclxuXHRcdFx0PC9kaXY+XHJcblxyXG5cclxuXHRcdFx0PExpbmsgaHJlZj17YC8/cGFnZT0ke3BhcmFtcy5vZmZzZXR9JHtwYXJhbXMucXVlcnkgPyBgJnF1ZXJ5PSR7cGFyYW1zLnF1ZXJ5fWAgOiBgYH1gfT5cclxuXHRcdFx0XHRDbG9zZVxyXG5cdFx0XHQ8L0xpbms+XHJcblxyXG5cdFx0PC9hc2lkZT5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlckRhdGE7XHJcbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJ1c2VDb250ZXh0IiwiVGhlbWVDb250ZXh0IiwidXNlU2VsZWN0b3IiLCJpc0xvYWRpbmdVc2VyRGF0YVNlbGVjdG9yIiwiY2xpY2tlZFVzZXJTZWxlY3RvciIsInBhcmFtc1NlbGVjdG9yIiwiTGluayIsIlVzZXJEYXRhIiwiaXNEYXJrIiwicGFyYW1zIiwibG9hZGluZyIsImNsaWNrZWRFbGVtZW50IiwiYXNpZGUiLCJjbGFzc05hbWUiLCJzaWRlYmFyIiwic2lkZWJhckRhcmsiLCJkaXYiLCJoMiIsImxvZ2luIiwiaW1nIiwic3JjIiwiYXZhdGFyX3VybCIsImFsdCIsImF2YXRhciIsInAiLCJpZCIsInR5cGUiLCJocmVmIiwib2Zmc2V0IiwicXVlcnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/UserData/index.tsx\n"));

/***/ })

});