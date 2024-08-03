"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/Header/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Header/index.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.module.scss */ \"./src/components/Header/index.module.scss\");\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ThemeButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ThemeButton */ \"./src/components/ThemeButton/index.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _ThemeContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ThemeContext */ \"./src/components/ThemeContext/index.tsx\");\n/* harmony import */ var _hooks_useURL__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/useURL */ \"./src/hooks/useURL.ts\");\n/* harmony import */ var _hooks_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/redux */ \"./src/hooks/redux.ts\");\n/* harmony import */ var _redux_action_creators_setTypedValueActionCreator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../redux/action-creators/setTypedValueActionCreator */ \"./src/redux/action-creators/setTypedValueActionCreator.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst Header = ()=>{\n    _s();\n    const { isDark } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_ThemeContext__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n    const { handleSearch } = (0,_hooks_useURL__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n    const dispatch = (0,_hooks_redux__WEBPACK_IMPORTED_MODULE_7__.useAppDispatch)();\n    const handleChange = (event)=>{\n        dispatch((0,_redux_action_creators_setTypedValueActionCreator__WEBPACK_IMPORTED_MODULE_8__.setTypedValueActionCreator)(event.target.value));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"\".concat((_index_module_scss__WEBPACK_IMPORTED_MODULE_2___default().header), \" \").concat(isDark ? (_index_module_scss__WEBPACK_IMPORTED_MODULE_2___default()[\"header-dark\"]) : \"\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_2___default().header__content),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                    className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_2___default().header__search),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_2___default().search__bar),\n                            placeholder: \"Search...\",\n                            onChange: handleChange\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\wotbl\\\\search-rs\\\\src\\\\components\\\\Header\\\\index.tsx\",\n                            lineNumber: 24,\n                            columnNumber: 6\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_2___default().search__btn),\n                            onClick: handleSearch,\n                            \"aria-label\": \"search\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {\n                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faSearch\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\wotbl\\\\search-rs\\\\src\\\\components\\\\Header\\\\index.tsx\",\n                                lineNumber: 31,\n                                columnNumber: 7\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\wotbl\\\\search-rs\\\\src\\\\components\\\\Header\\\\index.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 6\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\wotbl\\\\search-rs\\\\src\\\\components\\\\Header\\\\index.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 5\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_2___default().redirect__btn),\n                    onClick: handleRedirect,\n                    children: \"Redirect to error page\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\wotbl\\\\search-rs\\\\src\\\\components\\\\Header\\\\index.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 5\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ThemeButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\wotbl\\\\search-rs\\\\src\\\\components\\\\Header\\\\index.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 5\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\wotbl\\\\search-rs\\\\src\\\\components\\\\Header\\\\index.tsx\",\n            lineNumber: 22,\n            columnNumber: 4\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\wotbl\\\\search-rs\\\\src\\\\components\\\\Header\\\\index.tsx\",\n        lineNumber: 21,\n        columnNumber: 3\n    }, undefined);\n};\n_s(Header, \"CM3bg/eDOC/0LCAhuSoWK7aA9L0=\", false, function() {\n    return [\n        _hooks_useURL__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n        _hooks_redux__WEBPACK_IMPORTED_MODULE_7__.useAppDispatch\n    ];\n});\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header); /* import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';\nimport { faSearch } from '@fortawesome/free-solid-svg-icons';\nimport styles from \"./index.module.scss\"\n//import './index.scss';\nimport ThemeButton from '../ThemeButton';\nimport { useContext } from 'react';\nimport ThemeContext from '../ThemeContext';\nimport useURL from '../../hooks/useURL';\nimport { useAppDispatch } from '../../hooks/redux';\nimport { setTypedValueActionCreator } from '../../redux/action-creators/setTypedValueActionCreator';\nconst Header = () => {\n\tconst { isDark } = useContext(ThemeContext);\n\tconst {  handleRedirect, handleSearch } = useURL();\n\tconst dispatch = useAppDispatch()\n\tconst handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {\n\t\tdispatch(setTypedValueActionCreator(event.target.value));\n\t};\n\treturn (\n\t\t<header className={`header ${isDark ? `header-dark` : ''}`}>\n\t\t\t<div className=\"header__content\">\n\t\t\t\t<nav className=\"header__search\">\n\t\t\t\t\t<input type=\"text\" className=\"search__bar\" placeholder=\"Search...\" //onChange={handleInput}\n\t\t\t\t\tonChange={handleChange}\n\t\t\t\t\t/>\n\t\t\t\t\t<button className=\"search__btn\" onClick={handleSearch} aria-label=\"search\">\n\t\t\t\t\t\t<FontAwesomeIcon icon={faSearch} />\n\t\t\t\t\t</button>\n\t\t\t\t</nav>\n\t\t\t\t<button className=\"redirect__btn\" onClick={handleRedirect}>\n\t\t\t\t\tRedirect to error page\n\t\t\t\t</button>\n\t\t\t\t<ThemeButton />\n\t\t\t</div>\n\t\t</header>\n\t);\n};\nexport default Header;\n*/ \nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBaUU7QUFDSjtBQUNyQjtBQUNDO0FBQ047QUFDUTtBQUNIO0FBQ1c7QUFDaUQ7QUFFcEcsTUFBTVMsU0FBUzs7SUFDZCxNQUFNLEVBQUVDLE1BQU0sRUFBRSxHQUFHTixpREFBVUEsQ0FBQ0MscURBQVlBO0lBQzFDLE1BQU0sRUFBRU0sWUFBWSxFQUFFLEdBQUdMLHlEQUFNQTtJQUMvQixNQUFNTSxXQUFXTCw0REFBY0E7SUFFL0IsTUFBTU0sZUFBZSxDQUFDQztRQUNyQkYsU0FBU0osNkdBQTBCQSxDQUFDTSxNQUFNQyxNQUFNLENBQUNDLEtBQUs7SUFDdkQ7SUFFQSxxQkFDQyw4REFBQ0M7UUFBT0MsV0FBVyxHQUFvQlIsT0FBakJSLGtFQUFhLEVBQUMsS0FBdUMsT0FBcENRLFNBQVNSLDBFQUFxQixHQUFHO2tCQUN2RSw0RUFBQ2lCO1lBQUlELFdBQVdoQiwyRUFBc0I7OzhCQUNyQyw4REFBQ21CO29CQUFJSCxXQUFXaEIsMEVBQXFCOztzQ0FDcEMsOERBQUNxQjs0QkFDQUMsTUFBSzs0QkFDTE4sV0FBV2hCLHVFQUFrQjs0QkFDN0J3QixhQUFZOzRCQUNaQyxVQUFVZDs7Ozs7O3NDQUVYLDhEQUFDZTs0QkFBT1YsV0FBV2hCLHVFQUFrQjs0QkFBRTRCLFNBQVNuQjs0QkFBY29CLGNBQVc7c0NBQ3hFLDRFQUFDL0IsMkVBQWVBO2dDQUFDZ0MsTUFBTS9CLHVFQUFRQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBR2pDLDhEQUFDMkI7b0JBQU9WLFdBQVdoQix5RUFBb0I7b0JBQUU0QixTQUFTSTs4QkFBZ0I7Ozs7Ozs4QkFHbEUsOERBQUMvQixvREFBV0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJaEI7R0E5Qk1NOztRQUVvQkgscURBQU1BO1FBQ2RDLHdEQUFjQTs7O0tBSDFCRTtBQWdDTiwrREFBZUEsTUFBTUEsRUFBQyxDQUd0Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvaW5kZXgudHN4PzQwMDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcbmltcG9ydCB7IGZhU2VhcmNoIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vaW5kZXgubW9kdWxlLnNjc3NcIlxuaW1wb3J0IFRoZW1lQnV0dG9uIGZyb20gJy4uL1RoZW1lQnV0dG9uJztcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVGhlbWVDb250ZXh0IGZyb20gJy4uL1RoZW1lQ29udGV4dCc7XG5pbXBvcnQgdXNlVVJMIGZyb20gJy4uLy4uL2hvb2tzL3VzZVVSTCc7XG5pbXBvcnQgeyB1c2VBcHBEaXNwYXRjaCB9IGZyb20gJy4uLy4uL2hvb2tzL3JlZHV4JztcbmltcG9ydCB7IHNldFR5cGVkVmFsdWVBY3Rpb25DcmVhdG9yIH0gZnJvbSAnLi4vLi4vcmVkdXgvYWN0aW9uLWNyZWF0b3JzL3NldFR5cGVkVmFsdWVBY3Rpb25DcmVhdG9yJztcblxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuXHRjb25zdCB7IGlzRGFyayB9ID0gdXNlQ29udGV4dChUaGVtZUNvbnRleHQpO1xuXHRjb25zdCB7IGhhbmRsZVNlYXJjaCB9ID0gdXNlVVJMKCk7XG5cdGNvbnN0IGRpc3BhdGNoID0gdXNlQXBwRGlzcGF0Y2goKTtcblxuXHRjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG5cdFx0ZGlzcGF0Y2goc2V0VHlwZWRWYWx1ZUFjdGlvbkNyZWF0b3IoZXZlbnQudGFyZ2V0LnZhbHVlKSk7XG5cdH07XG5cblx0cmV0dXJuIChcblx0XHQ8aGVhZGVyIGNsYXNzTmFtZT17YCR7c3R5bGVzLmhlYWRlcn0gJHtpc0RhcmsgPyBzdHlsZXNbJ2hlYWRlci1kYXJrJ10gOiAnJ31gfT5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyX19jb250ZW50fT5cblx0XHRcdFx0PG5hdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJfX3NlYXJjaH0+XG5cdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2hfX2Jhcn1cblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiU2VhcmNoLi4uXCJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaF9fYnRufSBvbkNsaWNrPXtoYW5kbGVTZWFyY2h9IGFyaWEtbGFiZWw9XCJzZWFyY2hcIj5cblx0XHRcdFx0XHRcdDxGb250QXdlc29tZUljb24gaWNvbj17ZmFTZWFyY2h9IC8+XG5cdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdDwvbmF2PlxuXHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLnJlZGlyZWN0X19idG59IG9uQ2xpY2s9e2hhbmRsZVJlZGlyZWN0fT5cblx0XHRcdFx0XHRSZWRpcmVjdCB0byBlcnJvciBwYWdlXG5cdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHQ8VGhlbWVCdXR0b24gLz5cblx0XHRcdDwvZGl2PlxuXHRcdDwvaGVhZGVyPlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuXG5cbi8qIGltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XG5pbXBvcnQgeyBmYVNlYXJjaCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2luZGV4Lm1vZHVsZS5zY3NzXCJcbi8vaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xuaW1wb3J0IFRoZW1lQnV0dG9uIGZyb20gJy4uL1RoZW1lQnV0dG9uJztcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVGhlbWVDb250ZXh0IGZyb20gJy4uL1RoZW1lQ29udGV4dCc7XG5pbXBvcnQgdXNlVVJMIGZyb20gJy4uLy4uL2hvb2tzL3VzZVVSTCc7XG5pbXBvcnQgeyB1c2VBcHBEaXNwYXRjaCB9IGZyb20gJy4uLy4uL2hvb2tzL3JlZHV4JztcbmltcG9ydCB7IHNldFR5cGVkVmFsdWVBY3Rpb25DcmVhdG9yIH0gZnJvbSAnLi4vLi4vcmVkdXgvYWN0aW9uLWNyZWF0b3JzL3NldFR5cGVkVmFsdWVBY3Rpb25DcmVhdG9yJztcbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcblx0Y29uc3QgeyBpc0RhcmsgfSA9IHVzZUNvbnRleHQoVGhlbWVDb250ZXh0KTtcblx0Y29uc3QgeyAgaGFuZGxlUmVkaXJlY3QsIGhhbmRsZVNlYXJjaCB9ID0gdXNlVVJMKCk7XG5cdGNvbnN0IGRpc3BhdGNoID0gdXNlQXBwRGlzcGF0Y2goKVxuXHRjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG5cdFx0ZGlzcGF0Y2goc2V0VHlwZWRWYWx1ZUFjdGlvbkNyZWF0b3IoZXZlbnQudGFyZ2V0LnZhbHVlKSk7XG5cdH07XG5cdHJldHVybiAoXG5cdFx0PGhlYWRlciBjbGFzc05hbWU9e2BoZWFkZXIgJHtpc0RhcmsgPyBgaGVhZGVyLWRhcmtgIDogJyd9YH0+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9fY29udGVudFwiPlxuXHRcdFx0XHQ8bmF2IGNsYXNzTmFtZT1cImhlYWRlcl9fc2VhcmNoXCI+XG5cdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwic2VhcmNoX19iYXJcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaC4uLlwiIC8vb25DaGFuZ2U9e2hhbmRsZUlucHV0fVxuXHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cInNlYXJjaF9fYnRuXCIgb25DbGljaz17aGFuZGxlU2VhcmNofSBhcmlhLWxhYmVsPVwic2VhcmNoXCI+XG5cdFx0XHRcdFx0XHQ8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhU2VhcmNofSAvPlxuXHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHQ8L25hdj5cblx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJyZWRpcmVjdF9fYnRuXCIgb25DbGljaz17aGFuZGxlUmVkaXJlY3R9PlxuXHRcdFx0XHRcdFJlZGlyZWN0IHRvIGVycm9yIHBhZ2Vcblx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdDxUaGVtZUJ1dHRvbiAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9oZWFkZXI+XG5cdCk7XG59O1xuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuKi8iXSwibmFtZXMiOlsiRm9udEF3ZXNvbWVJY29uIiwiZmFTZWFyY2giLCJzdHlsZXMiLCJUaGVtZUJ1dHRvbiIsInVzZUNvbnRleHQiLCJUaGVtZUNvbnRleHQiLCJ1c2VVUkwiLCJ1c2VBcHBEaXNwYXRjaCIsInNldFR5cGVkVmFsdWVBY3Rpb25DcmVhdG9yIiwiSGVhZGVyIiwiaXNEYXJrIiwiaGFuZGxlU2VhcmNoIiwiZGlzcGF0Y2giLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiaGVhZGVyIiwiY2xhc3NOYW1lIiwiZGl2IiwiaGVhZGVyX19jb250ZW50IiwibmF2IiwiaGVhZGVyX19zZWFyY2giLCJpbnB1dCIsInR5cGUiLCJzZWFyY2hfX2JhciIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJidXR0b24iLCJzZWFyY2hfX2J0biIsIm9uQ2xpY2siLCJhcmlhLWxhYmVsIiwiaWNvbiIsInJlZGlyZWN0X19idG4iLCJoYW5kbGVSZWRpcmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Header/index.tsx\n"));

/***/ })

});