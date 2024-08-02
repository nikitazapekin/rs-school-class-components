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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ \"./src/components/Header/index.scss\");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ThemeButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ThemeButton */ \"./src/components/ThemeButton/index.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _ThemeContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ThemeContext */ \"./src/components/ThemeContext/index.tsx\");\n/* harmony import */ var _hooks_useURL__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/useURL */ \"./src/hooks/useURL.ts\");\n/* harmony import */ var _hooks_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/redux */ \"./src/hooks/redux.ts\");\n/* harmony import */ var _redux_action_creators_setTypedValueActionCreator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../redux/action-creators/setTypedValueActionCreator */ \"./src/redux/action-creators/setTypedValueActionCreator.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst Header = ()=>{\n    _s();\n    const { isDark } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_ThemeContext__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n    const { handleInput, handleRedirect, handleSearch } = (0,_hooks_useURL__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n    const dispatch = (0,_hooks_redux__WEBPACK_IMPORTED_MODULE_7__.useAppDispatch)();\n    const handleChange = (event)=>{\n        dispatch((0,_redux_action_creators_setTypedValueActionCreator__WEBPACK_IMPORTED_MODULE_8__.setTypedValueActionCreator)(event.target.value));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"header \".concat(isDark ? \"header-dark\" : \"\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"header__content\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                    className: \"header__search\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            className: \"search__bar\",\n                            placeholder: \"Search...\",\n                            onChange: handleInput\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\wotbl\\\\search-rs\\\\src\\\\components\\\\Header\\\\index.tsx\",\n                            lineNumber: 21,\n                            columnNumber: 6\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"search__btn\",\n                            onClick: handleSearch,\n                            \"aria-label\": \"search\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {\n                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faSearch\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\wotbl\\\\search-rs\\\\src\\\\components\\\\Header\\\\index.tsx\",\n                                lineNumber: 23,\n                                columnNumber: 7\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\wotbl\\\\search-rs\\\\src\\\\components\\\\Header\\\\index.tsx\",\n                            lineNumber: 22,\n                            columnNumber: 6\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\wotbl\\\\search-rs\\\\src\\\\components\\\\Header\\\\index.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 5\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"redirect__btn\",\n                    onClick: handleRedirect,\n                    children: \"Redirect to error page\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\wotbl\\\\search-rs\\\\src\\\\components\\\\Header\\\\index.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 5\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ThemeButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\wotbl\\\\search-rs\\\\src\\\\components\\\\Header\\\\index.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 5\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\wotbl\\\\search-rs\\\\src\\\\components\\\\Header\\\\index.tsx\",\n            lineNumber: 19,\n            columnNumber: 4\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\wotbl\\\\search-rs\\\\src\\\\components\\\\Header\\\\index.tsx\",\n        lineNumber: 18,\n        columnNumber: 3\n    }, undefined);\n};\n_s(Header, \"QPT4A05jXwMOLQe85NH/wgprHSY=\", false, function() {\n    return [\n        _hooks_useURL__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n        _hooks_redux__WEBPACK_IMPORTED_MODULE_7__.useAppDispatch\n    ];\n});\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFpRTtBQUNKO0FBQ3ZDO0FBQ21CO0FBQ047QUFDUTtBQUNIO0FBQ1c7QUFDaUQ7QUFDcEcsTUFBTVEsU0FBUzs7SUFDZCxNQUFNLEVBQUVDLE1BQU0sRUFBRSxHQUFHTixpREFBVUEsQ0FBQ0MscURBQVlBO0lBQzFDLE1BQU0sRUFBRU0sV0FBVyxFQUFFQyxjQUFjLEVBQUVDLFlBQVksRUFBRSxHQUFHUCx5REFBTUE7SUFDNUQsTUFBTVEsV0FBV1AsNERBQWNBO0lBQy9CLE1BQU1RLGVBQWUsQ0FBQ0M7UUFDckJGLFNBQVNOLDZHQUEwQkEsQ0FBQ1EsTUFBTUMsTUFBTSxDQUFDQyxLQUFLO0lBQ3ZEO0lBQ0EscUJBQ0MsOERBQUNDO1FBQU9DLFdBQVcsVUFBc0MsT0FBNUJWLFNBQVUsZ0JBQWU7a0JBQ3JELDRFQUFDVztZQUFJRCxXQUFVOzs4QkFDZCw4REFBQ0U7b0JBQUlGLFdBQVU7O3NDQUNkLDhEQUFDRzs0QkFBTUMsTUFBSzs0QkFBT0osV0FBVTs0QkFBY0ssYUFBWTs0QkFBWUMsVUFBVWY7Ozs7OztzQ0FDN0UsOERBQUNnQjs0QkFBT1AsV0FBVTs0QkFBY1EsU0FBU2Y7NEJBQWNnQixjQUFXO3NDQUNqRSw0RUFBQzVCLDJFQUFlQTtnQ0FBQzZCLE1BQU01Qix1RUFBUUE7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUdqQyw4REFBQ3lCO29CQUFPUCxXQUFVO29CQUFnQlEsU0FBU2hCOzhCQUFnQjs7Ozs7OzhCQUczRCw4REFBQ1Qsb0RBQVdBOzs7Ozs7Ozs7Ozs7Ozs7O0FBSWhCO0dBdkJNTTs7UUFFaURILHFEQUFNQTtRQUMzQ0Msd0RBQWNBOzs7S0FIMUJFO0FBd0JOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0hlYWRlci9pbmRleC50c3g/NDAwMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xuaW1wb3J0IHsgZmFTZWFyY2ggfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xuaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xuaW1wb3J0IFRoZW1lQnV0dG9uIGZyb20gJy4uL1RoZW1lQnV0dG9uJztcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVGhlbWVDb250ZXh0IGZyb20gJy4uL1RoZW1lQ29udGV4dCc7XG5pbXBvcnQgdXNlVVJMIGZyb20gJy4uLy4uL2hvb2tzL3VzZVVSTCc7XG5pbXBvcnQgeyB1c2VBcHBEaXNwYXRjaCB9IGZyb20gJy4uLy4uL2hvb2tzL3JlZHV4JztcbmltcG9ydCB7IHNldFR5cGVkVmFsdWVBY3Rpb25DcmVhdG9yIH0gZnJvbSAnLi4vLi4vcmVkdXgvYWN0aW9uLWNyZWF0b3JzL3NldFR5cGVkVmFsdWVBY3Rpb25DcmVhdG9yJztcbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcblx0Y29uc3QgeyBpc0RhcmsgfSA9IHVzZUNvbnRleHQoVGhlbWVDb250ZXh0KTtcblx0Y29uc3QgeyBoYW5kbGVJbnB1dCwgaGFuZGxlUmVkaXJlY3QsIGhhbmRsZVNlYXJjaCB9ID0gdXNlVVJMKCk7XG5cdGNvbnN0IGRpc3BhdGNoID0gdXNlQXBwRGlzcGF0Y2goKVxuXHRjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcblx0XHRkaXNwYXRjaChzZXRUeXBlZFZhbHVlQWN0aW9uQ3JlYXRvcihldmVudC50YXJnZXQudmFsdWUpKVxuXHR9XG5cdHJldHVybiAoXG5cdFx0PGhlYWRlciBjbGFzc05hbWU9e2BoZWFkZXIgJHtpc0RhcmsgPyBgaGVhZGVyLWRhcmtgIDogJyd9YH0+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9fY29udGVudFwiPlxuXHRcdFx0XHQ8bmF2IGNsYXNzTmFtZT1cImhlYWRlcl9fc2VhcmNoXCI+XG5cdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwic2VhcmNoX19iYXJcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaC4uLlwiIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dH0gLz5cblx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cInNlYXJjaF9fYnRuXCIgb25DbGljaz17aGFuZGxlU2VhcmNofSBhcmlhLWxhYmVsPVwic2VhcmNoXCI+XG5cdFx0XHRcdFx0XHQ8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhU2VhcmNofSAvPlxuXHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHQ8L25hdj5cblx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJyZWRpcmVjdF9fYnRuXCIgb25DbGljaz17aGFuZGxlUmVkaXJlY3R9PlxuXHRcdFx0XHRcdFJlZGlyZWN0IHRvIGVycm9yIHBhZ2Vcblx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdDxUaGVtZUJ1dHRvbiAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9oZWFkZXI+XG5cdCk7XG59O1xuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl0sIm5hbWVzIjpbIkZvbnRBd2Vzb21lSWNvbiIsImZhU2VhcmNoIiwiVGhlbWVCdXR0b24iLCJ1c2VDb250ZXh0IiwiVGhlbWVDb250ZXh0IiwidXNlVVJMIiwidXNlQXBwRGlzcGF0Y2giLCJzZXRUeXBlZFZhbHVlQWN0aW9uQ3JlYXRvciIsIkhlYWRlciIsImlzRGFyayIsImhhbmRsZUlucHV0IiwiaGFuZGxlUmVkaXJlY3QiLCJoYW5kbGVTZWFyY2giLCJkaXNwYXRjaCIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJoZWFkZXIiLCJjbGFzc05hbWUiLCJkaXYiLCJuYXYiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiYnV0dG9uIiwib25DbGljayIsImFyaWEtbGFiZWwiLCJpY29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Header/index.tsx\n"));

/***/ })

});