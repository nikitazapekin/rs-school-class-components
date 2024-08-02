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

/***/ "./src/components/Header/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Header/index.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ \"./src/components/Header/index.scss\");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ThemeButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ThemeButton */ \"./src/components/ThemeButton/index.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _ThemeContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ThemeContext */ \"./src/components/ThemeContext/index.tsx\");\n/* harmony import */ var _hooks_useURL__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/useURL */ \"./src/hooks/useURL.ts\");\n/* harmony import */ var _hooks_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/redux */ \"./src/hooks/redux.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst Header = ()=>{\n    _s();\n    const { isDark } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_ThemeContext__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n    const { handleInput, handleRedirect, handleSearch } = (0,_hooks_useURL__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n    const dispatch = (0,_hooks_redux__WEBPACK_IMPORTED_MODULE_7__.useAppDispatch)();\n    const handleChange = (event)=>{\n        dispatch();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"header \".concat(isDark ? \"header-dark\" : \"\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"header__content\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                    className: \"header__search\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            className: \"search__bar\",\n                            placeholder: \"Search...\",\n                            onChange: handleInput\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\wotbl\\\\search-rs\\\\src\\\\components\\\\Header\\\\index.tsx\",\n                            lineNumber: 20,\n                            columnNumber: 6\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"search__btn\",\n                            onClick: handleSearch,\n                            \"aria-label\": \"search\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {\n                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__.faSearch\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\wotbl\\\\search-rs\\\\src\\\\components\\\\Header\\\\index.tsx\",\n                                lineNumber: 22,\n                                columnNumber: 7\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\wotbl\\\\search-rs\\\\src\\\\components\\\\Header\\\\index.tsx\",\n                            lineNumber: 21,\n                            columnNumber: 6\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\wotbl\\\\search-rs\\\\src\\\\components\\\\Header\\\\index.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 5\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"redirect__btn\",\n                    onClick: handleRedirect,\n                    children: \"Redirect to error page\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\wotbl\\\\search-rs\\\\src\\\\components\\\\Header\\\\index.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 5\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ThemeButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\wotbl\\\\search-rs\\\\src\\\\components\\\\Header\\\\index.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 5\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\wotbl\\\\search-rs\\\\src\\\\components\\\\Header\\\\index.tsx\",\n            lineNumber: 18,\n            columnNumber: 4\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\wotbl\\\\search-rs\\\\src\\\\components\\\\Header\\\\index.tsx\",\n        lineNumber: 17,\n        columnNumber: 3\n    }, undefined);\n};\n_s(Header, \"QPT4A05jXwMOLQe85NH/wgprHSY=\", false, function() {\n    return [\n        _hooks_useURL__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n        _hooks_redux__WEBPACK_IMPORTED_MODULE_7__.useAppDispatch\n    ];\n});\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWlFO0FBQ0o7QUFDdkM7QUFDbUI7QUFDTjtBQUNRO0FBQ0g7QUFDVztBQUNuRCxNQUFNTyxTQUFTOztJQUNkLE1BQU0sRUFBRUMsTUFBTSxFQUFFLEdBQUdMLGlEQUFVQSxDQUFDQyxxREFBWUE7SUFDMUMsTUFBTSxFQUFFSyxXQUFXLEVBQUVDLGNBQWMsRUFBRUMsWUFBWSxFQUFFLEdBQUdOLHlEQUFNQTtJQUM1RCxNQUFNTyxXQUFXTiw0REFBY0E7SUFDL0IsTUFBTU8sZUFBZSxDQUFDQztRQUNyQkY7SUFDRDtJQUNBLHFCQUNDLDhEQUFDRztRQUFPQyxXQUFXLFVBQXNDLE9BQTVCUixTQUFVLGdCQUFlO2tCQUNyRCw0RUFBQ1M7WUFBSUQsV0FBVTs7OEJBQ2QsOERBQUNFO29CQUFJRixXQUFVOztzQ0FDZCw4REFBQ0c7NEJBQU1DLE1BQUs7NEJBQU9KLFdBQVU7NEJBQWNLLGFBQVk7NEJBQVlDLFVBQVViOzs7Ozs7c0NBQzdFLDhEQUFDYzs0QkFBT1AsV0FBVTs0QkFBY1EsU0FBU2I7NEJBQWNjLGNBQVc7c0NBQ2pFLDRFQUFDekIsMkVBQWVBO2dDQUFDMEIsTUFBTXpCLHVFQUFRQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBR2pDLDhEQUFDc0I7b0JBQU9QLFdBQVU7b0JBQWdCUSxTQUFTZDs4QkFBZ0I7Ozs7Ozs4QkFHM0QsOERBQUNSLG9EQUFXQTs7Ozs7Ozs7Ozs7Ozs7OztBQUloQjtHQXZCTUs7O1FBRWlERixxREFBTUE7UUFDM0NDLHdEQUFjQTs7O0tBSDFCQztBQXdCTiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvaW5kZXgudHN4PzQwMDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcbmltcG9ydCB7IGZhU2VhcmNoIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcbmltcG9ydCAnLi9pbmRleC5zY3NzJztcbmltcG9ydCBUaGVtZUJ1dHRvbiBmcm9tICcuLi9UaGVtZUJ1dHRvbic7XG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRoZW1lQ29udGV4dCBmcm9tICcuLi9UaGVtZUNvbnRleHQnO1xuaW1wb3J0IHVzZVVSTCBmcm9tICcuLi8uLi9ob29rcy91c2VVUkwnO1xuaW1wb3J0IHsgdXNlQXBwRGlzcGF0Y2ggfSBmcm9tICcuLi8uLi9ob29rcy9yZWR1eCc7XG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG5cdGNvbnN0IHsgaXNEYXJrIH0gPSB1c2VDb250ZXh0KFRoZW1lQ29udGV4dCk7XG5cdGNvbnN0IHsgaGFuZGxlSW5wdXQsIGhhbmRsZVJlZGlyZWN0LCBoYW5kbGVTZWFyY2ggfSA9IHVzZVVSTCgpO1xuXHRjb25zdCBkaXNwYXRjaCA9IHVzZUFwcERpc3BhdGNoKClcblx0Y29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG5cdFx0ZGlzcGF0Y2goKVxuXHR9XG5cdHJldHVybiAoXG5cdFx0PGhlYWRlciBjbGFzc05hbWU9e2BoZWFkZXIgJHtpc0RhcmsgPyBgaGVhZGVyLWRhcmtgIDogJyd9YH0+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9fY29udGVudFwiPlxuXHRcdFx0XHQ8bmF2IGNsYXNzTmFtZT1cImhlYWRlcl9fc2VhcmNoXCI+XG5cdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwic2VhcmNoX19iYXJcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaC4uLlwiIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dH0gLz5cblx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cInNlYXJjaF9fYnRuXCIgb25DbGljaz17aGFuZGxlU2VhcmNofSBhcmlhLWxhYmVsPVwic2VhcmNoXCI+XG5cdFx0XHRcdFx0XHQ8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhU2VhcmNofSAvPlxuXHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHQ8L25hdj5cblx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJyZWRpcmVjdF9fYnRuXCIgb25DbGljaz17aGFuZGxlUmVkaXJlY3R9PlxuXHRcdFx0XHRcdFJlZGlyZWN0IHRvIGVycm9yIHBhZ2Vcblx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdDxUaGVtZUJ1dHRvbiAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9oZWFkZXI+XG5cdCk7XG59O1xuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl0sIm5hbWVzIjpbIkZvbnRBd2Vzb21lSWNvbiIsImZhU2VhcmNoIiwiVGhlbWVCdXR0b24iLCJ1c2VDb250ZXh0IiwiVGhlbWVDb250ZXh0IiwidXNlVVJMIiwidXNlQXBwRGlzcGF0Y2giLCJIZWFkZXIiLCJpc0RhcmsiLCJoYW5kbGVJbnB1dCIsImhhbmRsZVJlZGlyZWN0IiwiaGFuZGxlU2VhcmNoIiwiZGlzcGF0Y2giLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsImhlYWRlciIsImNsYXNzTmFtZSIsImRpdiIsIm5hdiIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJidXR0b24iLCJvbkNsaWNrIiwiYXJpYS1sYWJlbCIsImljb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Header/index.tsx\n"));

/***/ })

});