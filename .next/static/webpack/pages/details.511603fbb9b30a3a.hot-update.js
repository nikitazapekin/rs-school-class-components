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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.module.scss */ \"./src/components/UserData/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _hooks_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/redux */ \"./src/hooks/redux.ts\");\n/* harmony import */ var _ThemeContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ThemeContext */ \"./src/components/ThemeContext/index.tsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _redux_selectors_isLoadingUserData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/selectors/isLoadingUserData */ \"./src/redux/selectors/isLoadingUserData.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _redux_selectors_getClickedElement__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../redux/selectors/getClickedElement */ \"./src/redux/selectors/getClickedElement.ts\");\n/* harmony import */ var _redux_selectors_getSearchParams__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../redux/selectors/getSearchParams */ \"./src/redux/selectors/getSearchParams.ts\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst UserData = ()=>{\n    _s();\n    const dispatch = (0,_hooks_redux__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    const { isDark } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_ThemeContext__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n    const params = (0,react_redux__WEBPACK_IMPORTED_MODULE_10__.useSelector)(_redux_selectors_getSearchParams__WEBPACK_IMPORTED_MODULE_8__.paramsSelector);\n    const loading = (0,react_redux__WEBPACK_IMPORTED_MODULE_10__.useSelector)(_redux_selectors_isLoadingUserData__WEBPACK_IMPORTED_MODULE_5__.isLoadingUserDataSelector);\n    const clickedElement = (0,react_redux__WEBPACK_IMPORTED_MODULE_10__.useSelector)(_redux_selectors_getClickedElement__WEBPACK_IMPORTED_MODULE_7__.clickedUserSelector);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"aside\", {\n        className: \"\".concat((_styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default().sidebar), \" \").concat(isDark ? (_styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default().sidebarDark) : \"\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: clickedElement.login\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\wotbl\\\\search-rs\\\\src\\\\components\\\\UserData\\\\index.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 4\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: clickedElement.avatar_url,\n                        alt: \"\".concat(clickedElement.login, \"'s avatar\"),\n                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default().avatar)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\wotbl\\\\search-rs\\\\src\\\\components\\\\UserData\\\\index.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 4\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"ID: \",\n                            clickedElement.id\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\wotbl\\\\search-rs\\\\src\\\\components\\\\UserData\\\\index.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 4\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Type: \",\n                            clickedElement.type\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\wotbl\\\\search-rs\\\\src\\\\components\\\\UserData\\\\index.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 4\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\wotbl\\\\search-rs\\\\src\\\\components\\\\UserData\\\\index.tsx\",\n                lineNumber: 23,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {\n                href: \"/?page=\".concat(params.offset).concat(params.query ? \"&query=\".concat(params.query) : \"\"),\n                children: \"Close\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\wotbl\\\\search-rs\\\\src\\\\components\\\\UserData\\\\index.tsx\",\n                lineNumber: 35,\n                columnNumber: 3\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\wotbl\\\\search-rs\\\\src\\\\components\\\\UserData\\\\index.tsx\",\n        lineNumber: 22,\n        columnNumber: 3\n    }, undefined);\n};\n_s(UserData, \"CKH/DaJ3UxXQoboPM9eGixUrQXI=\", false, function() {\n    return [\n        _hooks_redux__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch,\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter,\n        react_redux__WEBPACK_IMPORTED_MODULE_10__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_10__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_10__.useSelector\n    ];\n});\n_c = UserData;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserData);\nvar _c;\n$RefreshReg$(_c, \"UserData\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Vc2VyRGF0YS9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUN5QztBQUNOO0FBQ2dCO0FBQ1I7QUFDRDtBQUMwQztBQUU1QztBQUVzQztBQUNQO0FBQzFDO0FBQzdCLE1BQU1VLFdBQVc7O0lBQ2hCLE1BQU1DLFdBQVdULDREQUFjQTtJQUMvQixNQUFNVSxTQUFTTixzREFBU0E7SUFDeEIsTUFBTSxFQUFFTyxNQUFNLEVBQUUsR0FBR1osaURBQVVBLENBQUNFLHFEQUFZQTtJQUMzQyxNQUFNVyxTQUFTVix5REFBV0EsQ0FBQ0ksNEVBQWNBO0lBQ3hDLE1BQU1PLFVBQVVYLHlEQUFXQSxDQUFDQyx5RkFBeUJBO0lBQ3RELE1BQU1XLGlCQUFpQloseURBQVdBLENBQUNHLG1GQUFtQkE7SUFDckQscUJBQ0MsOERBQUNVO1FBQU1DLFdBQVcsR0FBcUJMLE9BQWxCYixvRUFBYyxFQUFDLEtBQW9DLE9BQWpDYSxTQUFTYix3RUFBa0IsR0FBRzs7MEJBQ25FLDhEQUFDcUI7O2tDQUNGLDhEQUFDQztrQ0FBSU4sZUFBZU8sS0FBSzs7Ozs7O2tDQUN6Qiw4REFBQ0M7d0JBQ0NDLEtBQUtULGVBQWVVLFVBQVU7d0JBQzlCQyxLQUFLLEdBQXdCLE9BQXJCWCxlQUFlTyxLQUFLLEVBQUM7d0JBQzdCTCxXQUFXbEIsbUVBQWE7Ozs7OztrQ0FFMUIsOERBQUM2Qjs7NEJBQUU7NEJBQUtiLGVBQWVjLEVBQUU7Ozs7Ozs7a0NBQ3pCLDhEQUFDRDs7NEJBQUU7NEJBQU9iLGVBQWVlLElBQUk7Ozs7Ozs7Ozs7Ozs7MEJBSTlCLDhEQUFDdEIsa0RBQUlBO2dCQUFDdUIsTUFBTSxVQUEwQmxCLE9BQWhCQSxPQUFPbUIsTUFBTSxFQUFnRCxPQUE3Q25CLE9BQU9vQixLQUFLLEdBQUcsVUFBdUIsT0FBYnBCLE9BQU9vQixLQUFLLElBQU07MEJBQUs7Ozs7Ozs7Ozs7OztBQU14RjtHQTNCTXhCOztRQUNZUix3REFBY0E7UUFDaEJJLGtEQUFTQTtRQUVWRixxREFBV0E7UUFDVEEscURBQVdBO1FBQ0xBLHFEQUFXQTs7O0tBTjVCTTtBQTZCTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Vc2VyRGF0YS9pbmRleC50c3g/MzJhMyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzLm1vZHVsZS5zY3NzXCJcclxuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlQXBwRGlzcGF0Y2ggfSBmcm9tICcuLi8uLi9ob29rcy9yZWR1eCc7XHJcbmltcG9ydCBUaGVtZUNvbnRleHQgZnJvbSAnLi4vVGhlbWVDb250ZXh0JztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IGlzTG9hZGluZ1VzZXJEYXRhU2VsZWN0b3IgfSBmcm9tICcuLi8uLi9yZWR1eC9zZWxlY3RvcnMvaXNMb2FkaW5nVXNlckRhdGEnO1xyXG5pbXBvcnQgeyBnZXRQZXJzb25hbERhdGEgfSBmcm9tICcuLi8uLi9hcGknO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IFNldENsaWNrZWRVc2VyQWN0aW9uQ3JlYXRvciB9IGZyb20gJy4uLy4uL3JlZHV4L2FjdGlvbi1jcmVhdG9ycy9zZXRDbGlja2VkVXNlckFjdGlvbkNyZWF0b3InO1xyXG5pbXBvcnQgeyBjbGlja2VkVXNlclNlbGVjdG9yIH0gZnJvbSAnLi4vLi4vcmVkdXgvc2VsZWN0b3JzL2dldENsaWNrZWRFbGVtZW50JztcclxuaW1wb3J0IHsgcGFyYW1zU2VsZWN0b3IgfSBmcm9tICcuLi8uLi9yZWR1eC9zZWxlY3RvcnMvZ2V0U2VhcmNoUGFyYW1zJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuY29uc3QgVXNlckRhdGEgPSAoKSA9PiB7XHJcblx0Y29uc3QgZGlzcGF0Y2ggPSB1c2VBcHBEaXNwYXRjaCgpO1xyXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblx0Y29uc3QgeyBpc0RhcmsgfSA9IHVzZUNvbnRleHQoVGhlbWVDb250ZXh0KTtcclxuY29uc3QgcGFyYW1zID0gdXNlU2VsZWN0b3IocGFyYW1zU2VsZWN0b3IpXHJcblx0Y29uc3QgbG9hZGluZyA9IHVzZVNlbGVjdG9yKGlzTG9hZGluZ1VzZXJEYXRhU2VsZWN0b3IpO1xyXG5jb25zdCBjbGlja2VkRWxlbWVudCA9IHVzZVNlbGVjdG9yKGNsaWNrZWRVc2VyU2VsZWN0b3IpXHJcbiByZXR1cm4gKFxyXG5cdFx0PGFzaWRlIGNsYXNzTmFtZT17YCR7c3R5bGVzLnNpZGViYXJ9ICR7aXNEYXJrID8gc3R5bGVzLnNpZGViYXJEYXJrIDogJyd9YH0+XHJcblx0XHRcdFx0PGRpdj5cclxuXHRcdFx0PGgyPntjbGlja2VkRWxlbWVudC5sb2dpbn08L2gyPlxyXG5cdFx0XHQ8aW1nIFxyXG5cdFx0XHQgIHNyYz17Y2xpY2tlZEVsZW1lbnQuYXZhdGFyX3VybH0gXHJcblx0XHRcdCAgYWx0PXtgJHtjbGlja2VkRWxlbWVudC5sb2dpbn0ncyBhdmF0YXJgfSBcclxuXHRcdFx0ICBjbGFzc05hbWU9e3N0eWxlcy5hdmF0YXJ9XHJcblx0XHRcdC8+XHJcblx0XHRcdDxwPklEOiB7Y2xpY2tlZEVsZW1lbnQuaWR9PC9wPlxyXG5cdFx0XHQ8cD5UeXBlOiB7Y2xpY2tlZEVsZW1lbnQudHlwZX08L3A+XHJcblx0XHQgIDwvZGl2PlxyXG5cdFxyXG5cclxuXHRcdDxMaW5rIGhyZWY9e2AvP3BhZ2U9JHtwYXJhbXMub2Zmc2V0fSR7cGFyYW1zLnF1ZXJ5ID8gYCZxdWVyeT0ke3BhcmFtcy5xdWVyeX1gIDogYGB9YH0+XHJcblx0XHRDbG9zZVxyXG5cdFx0PC9MaW5rPlxyXG5cdFx0XHJcblx0XHQ8L2FzaWRlPlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyRGF0YTtcclxuIl0sIm5hbWVzIjpbInN0eWxlcyIsInVzZUNvbnRleHQiLCJ1c2VBcHBEaXNwYXRjaCIsIlRoZW1lQ29udGV4dCIsInVzZVNlbGVjdG9yIiwiaXNMb2FkaW5nVXNlckRhdGFTZWxlY3RvciIsInVzZVJvdXRlciIsImNsaWNrZWRVc2VyU2VsZWN0b3IiLCJwYXJhbXNTZWxlY3RvciIsIkxpbmsiLCJVc2VyRGF0YSIsImRpc3BhdGNoIiwicm91dGVyIiwiaXNEYXJrIiwicGFyYW1zIiwibG9hZGluZyIsImNsaWNrZWRFbGVtZW50IiwiYXNpZGUiLCJjbGFzc05hbWUiLCJzaWRlYmFyIiwic2lkZWJhckRhcmsiLCJkaXYiLCJoMiIsImxvZ2luIiwiaW1nIiwic3JjIiwiYXZhdGFyX3VybCIsImFsdCIsImF2YXRhciIsInAiLCJpZCIsInR5cGUiLCJocmVmIiwib2Zmc2V0IiwicXVlcnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/UserData/index.tsx\n"));

/***/ })

});