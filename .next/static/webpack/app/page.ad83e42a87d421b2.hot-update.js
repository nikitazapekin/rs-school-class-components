"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/newComp/App/index.tsx":
/*!***************************************!*\
  !*** ./src/app/newComp/App/index.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.module.scss */ \"(app-pages-browser)/./src/app/newComp/App/index.module.scss\");\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Card */ \"(app-pages-browser)/./src/app/newComp/Card/index.tsx\");\n/* harmony import */ var _hooks_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hooks/redux */ \"(app-pages-browser)/./src/hooks/redux.ts\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _redux_selectors_getSearchParams__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../redux/selectors/getSearchParams */ \"(app-pages-browser)/./src/redux/selectors/getSearchParams.ts\");\n/* harmony import */ var _hooks_useURL__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../hooks/useURL */ \"(app-pages-browser)/./src/hooks/useURL.ts\");\n/* harmony import */ var _redux_action_creators_setSearchParamsActionCreator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../redux/action-creators/setSearchParamsActionCreator */ \"(app-pages-browser)/./src/redux/action-creators/setSearchParamsActionCreator.ts\");\n/* harmony import */ var _redux_selectors_getStoredElements__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../redux/selectors/getStoredElements */ \"(app-pages-browser)/./src/redux/selectors/getStoredElements.ts\");\n/* harmony import */ var _StoredUsersFlyoutElement__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../StoredUsersFlyoutElement */ \"(app-pages-browser)/./src/app/newComp/StoredUsersFlyoutElement/index.tsx\");\n/* harmony import */ var _ErrorComponent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ErrorComponent */ \"(app-pages-browser)/./src/app/newComp/ErrorComponent/index.tsx\");\n/* harmony import */ var _ErrorBoundary__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../ErrorBoundary */ \"(app-pages-browser)/./src/app/newComp/ErrorBoundary/index.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nfunction App(param) {\n    let { users } = param;\n    _s();\n    const dispatch = (0,_hooks_redux__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch)();\n    const params = (0,react_redux__WEBPACK_IMPORTED_MODULE_11__.useSelector)(_redux_selectors_getSearchParams__WEBPACK_IMPORTED_MODULE_4__.paramsSelector);\n    const { setPage } = (0,_hooks_useURL__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n    const storedUsers = (0,react_redux__WEBPACK_IMPORTED_MODULE_11__.useSelector)(_redux_selectors_getStoredElements__WEBPACK_IMPORTED_MODULE_7__.storedUsersSelector);\n    const handleNext = ()=>{\n        window.scrollTo(0, 0);\n        dispatch((0,_redux_action_creators_setSearchParamsActionCreator__WEBPACK_IMPORTED_MODULE_6__.setNextPageActionCreator)());\n        setPage(params.offset + 1, params.query);\n    };\n    const handlePrev = ()=>{\n        window.scrollTo(0, 0);\n        dispatch((0,_redux_action_creators_setSearchParamsActionCreator__WEBPACK_IMPORTED_MODULE_6__.setPrevPageActionCreator)());\n        setPage(params.offset - 1, params.query);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ErrorBoundary__WEBPACK_IMPORTED_MODULE_10__.ErrorBoundary, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                    className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_1___default().list),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_1___default().list__container),\n                        children: [\n                            users.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    user: item\n                                }, item.id, false, {\n                                    fileName: \"C:\\\\Users\\\\wotbl\\\\search-rs\\\\src\\\\app\\\\newComp\\\\App\\\\index.tsx\",\n                                    lineNumber: 67,\n                                    columnNumber: 6\n                                }, this)),\n                            users.length === 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_1___default().list__nothing),\n                                children: \"Nothing found\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\wotbl\\\\search-rs\\\\src\\\\app\\\\newComp\\\\App\\\\index.tsx\",\n                                lineNumber: 69,\n                                columnNumber: 28\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_1___default().list__btns),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"\".concat((_index_module_scss__WEBPACK_IMPORTED_MODULE_1___default().list__prev), \" \").concat((_index_module_scss__WEBPACK_IMPORTED_MODULE_1___default().list__btn)),\n                                        onClick: handlePrev,\n                                        children: \"Prev\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\wotbl\\\\search-rs\\\\src\\\\app\\\\newComp\\\\App\\\\index.tsx\",\n                                        lineNumber: 71,\n                                        columnNumber: 6\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"\".concat((_index_module_scss__WEBPACK_IMPORTED_MODULE_1___default().list__next), \" \").concat((_index_module_scss__WEBPACK_IMPORTED_MODULE_1___default().list__btn)),\n                                        onClick: handleNext,\n                                        \"data-testid\": \"next\",\n                                        children: \"Next\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\wotbl\\\\search-rs\\\\src\\\\app\\\\newComp\\\\App\\\\index.tsx\",\n                                        lineNumber: 75,\n                                        columnNumber: 6\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\wotbl\\\\search-rs\\\\src\\\\app\\\\newComp\\\\App\\\\index.tsx\",\n                                lineNumber: 70,\n                                columnNumber: 5\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\wotbl\\\\search-rs\\\\src\\\\app\\\\newComp\\\\App\\\\index.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 4\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\wotbl\\\\search-rs\\\\src\\\\app\\\\newComp\\\\App\\\\index.tsx\",\n                    lineNumber: 61,\n                    columnNumber: 1\n                }, this),\n                storedUsers.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_StoredUsersFlyoutElement__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\wotbl\\\\search-rs\\\\src\\\\app\\\\newComp\\\\App\\\\index.tsx\",\n                    lineNumber: 82,\n                    columnNumber: 30\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ErrorComponent__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\wotbl\\\\search-rs\\\\src\\\\app\\\\newComp\\\\App\\\\index.tsx\",\n                    lineNumber: 83,\n                    columnNumber: 2\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\wotbl\\\\search-rs\\\\src\\\\app\\\\newComp\\\\App\\\\index.tsx\",\n            lineNumber: 59,\n            columnNumber: 1\n        }, this)\n    }, void 0, false);\n}\n_s(App, \"cc838Tgwj5/anHKTh3Hw8+ML5YY=\", false, function() {\n    return [\n        _hooks_redux__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_11__.useSelector,\n        _hooks_useURL__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n        react_redux__WEBPACK_IMPORTED_MODULE_11__.useSelector\n    ];\n});\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbmV3Q29tcC9BcHAvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDeUM7QUFDYjtBQUUwQjtBQUNaO0FBQ2dDO0FBQy9CO0FBQzREO0FBQ3RCO0FBQ3NCO0FBQzNDO0FBQ2I7QUFDRTtBQTBCakQsU0FBU1ksSUFBSSxLQUFtQjtRQUFuQixFQUFFQyxLQUFLLEVBQVksR0FBbkI7O0lBQ1osTUFBTUMsV0FBV1osNERBQWNBO0lBQ2hDLE1BQU1hLFNBQVNaLHlEQUFXQSxDQUFDQyw0RUFBY0E7SUFDekMsTUFBTSxFQUFDWSxPQUFPLEVBQUMsR0FBRVgseURBQU1BO0lBQ3ZCLE1BQU1ZLGNBQWNkLHlEQUFXQSxDQUFDSSxtRkFBbUJBO0lBQ2xELE1BQU1XLGFBQWE7UUFDbEJDLE9BQU9DLFFBQVEsQ0FBQyxHQUFHO1FBQ25CTixTQUFTTiw2R0FBd0JBO1FBQ2pDUSxRQUFRRCxPQUFPTSxNQUFNLEdBQUcsR0FBR04sT0FBT08sS0FBSztJQUN4QztJQUVBLE1BQU1DLGFBQWE7UUFDbEJKLE9BQU9DLFFBQVEsQ0FBQyxHQUFHO1FBQ25CTixTQUFTUiw2R0FBd0JBO1FBQ2pDVSxRQUFRRCxPQUFPTSxNQUFNLEdBQUcsR0FBR04sT0FBT08sS0FBSztJQUN4QztJQUNDLHFCQUNBO2tCQUVGLDRFQUFDWCwwREFBYUE7OzhCQUVkLDhEQUFDYTtvQkFBUUMsV0FBV3pCLGdFQUFXOzhCQUM1Qiw0RUFBQzJCO3dCQUFJRixXQUFXekIsMkVBQXNCOzs0QkFJcENhLE1BQU1nQixHQUFHLENBQUMsQ0FBQ0MscUJBQ1gsOERBQUM3Qiw2Q0FBSUE7b0NBQUM4QixNQUFNRDttQ0FBV0EsS0FBS0UsRUFBRTs7Ozs7NEJBRTlCbkIsTUFBTW9CLE1BQU0sS0FBSyxtQkFBSyw4REFBQ0M7Z0NBQUVULFdBQVd6Qix5RUFBb0I7MENBQUU7Ozs7OzswQ0FDM0QsOERBQUMyQjtnQ0FBSUYsV0FBV3pCLHNFQUFpQjs7a0RBQ2hDLDhEQUFDcUM7d0NBQU9aLFdBQVcsR0FBd0J6QixPQUFyQkEsc0VBQWlCLEVBQUMsS0FBb0IsT0FBakJBLHFFQUFnQjt3Q0FBSXdDLFNBQVNqQjtrREFDdkU7Ozs7OztrREFHRCw4REFBQ2M7d0NBQU9aLFdBQVcsR0FBd0J6QixPQUFyQkEsc0VBQWlCLEVBQUMsS0FBb0IsT0FBakJBLHFFQUFnQjt3Q0FBSXdDLFNBQVN0Qjt3Q0FDeEV3QixlQUFZO2tEQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkFNckJ6QixZQUFZZ0IsTUFBTSxHQUFHLG1CQUFLLDhEQUFDeEIsaUVBQWlCQTs7Ozs7OEJBQzlDLDhEQUFDQyx1REFBY0E7Ozs7Ozs7Ozs7OztBQUtkO0dBaERPRTs7UUFDU1Ysd0RBQWNBO1FBQ2pCQyxxREFBV0E7UUFDVEUscURBQU1BO1FBQ0hGLHFEQUFXQTs7O0tBSnRCUztBQWlEUCwrREFBZ0JBLEdBQUdBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9uZXdDb21wL0FwcC9pbmRleC50c3g/MDI3MyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXCJ1c2UgY2xpZW50XCJcclxuIGltcG9ydCBzdHlsZXMgZnJvbSBcIi4vaW5kZXgubW9kdWxlLnNjc3NcIlxyXG4gaW1wb3J0IENhcmQgZnJvbSBcIi4uL0NhcmRcIjtcclxuIFxyXG5pbXBvcnQgeyB1c2VBcHBEaXNwYXRjaCB9IGZyb20gXCIuLi8uLi8uLi9ob29rcy9yZWR1eFwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBwYXJhbXNTZWxlY3RvciB9IGZyb20gXCIuLi8uLi8uLi9yZWR1eC9zZWxlY3RvcnMvZ2V0U2VhcmNoUGFyYW1zXCI7XHJcbmltcG9ydCB1c2VVUkwgZnJvbSBcIi4uLy4uLy4uL2hvb2tzL3VzZVVSTFwiO1xyXG5pbXBvcnQgeyBzZXRQcmV2UGFnZUFjdGlvbkNyZWF0b3IgfSBmcm9tIFwiLi4vLi4vLi4vcmVkdXgvYWN0aW9uLWNyZWF0b3JzL3NldFNlYXJjaFBhcmFtc0FjdGlvbkNyZWF0b3JcIjtcclxuaW1wb3J0IHsgc3RvcmVkVXNlcnNTZWxlY3RvciB9IGZyb20gXCIuLi8uLi8uLi9yZWR1eC9zZWxlY3RvcnMvZ2V0U3RvcmVkRWxlbWVudHNcIjtcclxuaW1wb3J0IHsgc2V0TmV4dFBhZ2VBY3Rpb25DcmVhdG9yIH0gZnJvbSBcIi4uLy4uLy4uL3JlZHV4L2FjdGlvbi1jcmVhdG9ycy9zZXRTZWFyY2hQYXJhbXNBY3Rpb25DcmVhdG9yXCI7XHJcbmltcG9ydCBTdG9yZWRVc2Vyc0J1dHRvbiBmcm9tIFwiLi4vU3RvcmVkVXNlcnNGbHlvdXRFbGVtZW50XCI7XHJcbmltcG9ydCBFcnJvckNvbXBvbmVudCBmcm9tIFwiLi4vRXJyb3JDb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRXJyb3JCb3VuZGFyeSB9IGZyb20gXCIuLi9FcnJvckJvdW5kYXJ5XCI7XHJcbnR5cGUgVXNlckRhdGFBcnJheSA9IEFycmF5PHtcclxuXHRsb2dpbjogc3RyaW5nO1xyXG5cdGlkOiBudW1iZXI7XHJcblx0bm9kZV9pZDogc3RyaW5nO1xyXG5cdGF2YXRhcl91cmw6IHN0cmluZztcclxuXHRncmF2YXRhcl9pZDogc3RyaW5nO1xyXG5cdHVybDogc3RyaW5nO1xyXG5cdGh0bWxfdXJsOiBzdHJpbmc7XHJcblx0Zm9sbG93ZXJzX3VybDogc3RyaW5nO1xyXG5cdGZvbGxvd2luZ191cmw6IHN0cmluZztcclxuXHRnaXN0c191cmw6IHN0cmluZztcclxuXHRzdGFycmVkX3VybDogc3RyaW5nO1xyXG5cdHN1YnNjcmlwdGlvbnNfdXJsOiBzdHJpbmc7XHJcblx0b3JnYW5pemF0aW9uc191cmw6IHN0cmluZztcclxuXHRyZXBvc191cmw6IHN0cmluZztcclxuXHRldmVudHNfdXJsOiBzdHJpbmc7XHJcblx0cmVjZWl2ZWRfZXZlbnRzX3VybDogc3RyaW5nO1xyXG5cdHR5cGU6IHN0cmluZztcclxuXHRzaXRlX2FkbWluOiBib29sZWFuO1xyXG5cdHNjb3JlOiBudW1iZXI7XHJcbn0+OyBcclxuXHJcbmludGVyZmFjZSBBcHBQcm9wcyB7XHJcblx0dXNlcnM6IFVzZXJEYXRhQXJyYXk7XHJcbiAgfVxyXG5mdW5jdGlvbiBBcHAoeyB1c2VycyB9OiBBcHBQcm9wcykge1xyXG4gY29uc3QgZGlzcGF0Y2ggPSB1c2VBcHBEaXNwYXRjaCgpXHJcbmNvbnN0IHBhcmFtcyA9IHVzZVNlbGVjdG9yKHBhcmFtc1NlbGVjdG9yKVxyXG5jb25zdCB7c2V0UGFnZX0gPXVzZVVSTCgpXHJcbmNvbnN0IHN0b3JlZFVzZXJzID0gdXNlU2VsZWN0b3Ioc3RvcmVkVXNlcnNTZWxlY3Rvcik7XHJcblx0Y29uc3QgaGFuZGxlTmV4dCA9ICgpID0+IHtcclxuXHRcdHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcclxuXHRcdGRpc3BhdGNoKHNldE5leHRQYWdlQWN0aW9uQ3JlYXRvcigpKTtcclxuXHRcdHNldFBhZ2UocGFyYW1zLm9mZnNldCArIDEsIHBhcmFtcy5xdWVyeSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgaGFuZGxlUHJldiA9ICgpID0+IHtcclxuXHRcdHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcclxuXHRcdGRpc3BhdGNoKHNldFByZXZQYWdlQWN0aW9uQ3JlYXRvcigpKTtcclxuXHRcdHNldFBhZ2UocGFyYW1zLm9mZnNldCAtIDEsIHBhcmFtcy5xdWVyeSk7XHJcblx0fTtcclxuICByZXR1cm4gKFxyXG4gIDw+XHJcblxyXG48RXJyb3JCb3VuZGFyeT5cclxuXHJcbjxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmxpc3R9PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxpc3RfX2NvbnRhaW5lcn0+XHJcblx0XHRcdHsvKn1cdHtpc0xvYWRpbmcgJiYgPFNwaW5uZXIgLz59ICovfVxyXG5cdFx0ey8qXHJcblx0XHRcdFx0XHQqL31cclxuXHRcdFx0XHR7dXNlcnMubWFwKChpdGVtKSA9PiAoXHJcblx0XHRcdFx0XHQ8Q2FyZCB1c2VyPXtpdGVtfSBrZXk9e2l0ZW0uaWR9IC8+XHJcblx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHR7dXNlcnMubGVuZ3RoID09PSAwICYmIDxwIGNsYXNzTmFtZT17c3R5bGVzLmxpc3RfX25vdGhpbmd9Pk5vdGhpbmcgZm91bmQ8L3A+fVxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGlzdF9fYnRuc30+XHJcblx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT17YCR7c3R5bGVzLmxpc3RfX3ByZXZ9ICR7c3R5bGVzLmxpc3RfX2J0bn1gfSBvbkNsaWNrPXtoYW5kbGVQcmV2fVxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRQcmV2XHJcblx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPXtgJHtzdHlsZXMubGlzdF9fbmV4dH0gJHtzdHlsZXMubGlzdF9fYnRufWB9IG9uQ2xpY2s9e2hhbmRsZU5leHR9IFxyXG5cdFx0XHRcdFx0ZGF0YS10ZXN0aWQ9XCJuZXh0XCI+XHJcblx0XHRcdFx0XHRcdE5leHRcclxuXHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvc2VjdGlvbj5cclxuXHRcdHtzdG9yZWRVc2Vycy5sZW5ndGggPiAwICYmIDxTdG9yZWRVc2Vyc0J1dHRvbiAvPn1cclxuIDxFcnJvckNvbXBvbmVudCAvPlxyXG4gXHJcblx0PC9FcnJvckJvdW5kYXJ5PlxyXG4gIDwvPlxyXG4gICk7XHJcbiAgfVxyXG4gIGV4cG9ydCBkZWZhdWx0ICBBcHBcclxuICAvKiBcclxuXHJcbiAgaW1wb3J0IFNwaW5uZXIgZnJvbSAnLi4vU3Bpbm5lcic7XHJcbmltcG9ydCBDYXJkIGZyb20gJy4uL0NhcmQnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2luZGV4Lm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCB7IHVzZUFwcERpc3BhdGNoIH0gZnJvbSAnLi4vLi4vLi4vaG9va3MvcmVkdXgnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgc2V0TmV4dFBhZ2VBY3Rpb25DcmVhdG9yLCBzZXRQcmV2UGFnZUFjdGlvbkNyZWF0b3IgfSBmcm9tICcuLi8uLi8uLi9yZWR1eC9hY3Rpb24tY3JlYXRvcnMvc2V0U2VhcmNoUGFyYW1zQWN0aW9uQ3JlYXRvcic7XHJcbmltcG9ydCB7IHBhcmFtc1NlbGVjdG9yIH0gZnJvbSAnLi4vLi4vLi4vcmVkdXgvc2VsZWN0b3JzL2dldFNlYXJjaFBhcmFtcyc7XHJcbmltcG9ydCB7IGlzTG9hZGluZ1NlbGVjdG9yIH0gZnJvbSAnLi4vLi4vLi4vcmVkdXgvc2VsZWN0b3JzL2lzTG9hZGluZ1NlbGVjdG9yJztcclxuaW1wb3J0IHVzZVVSTCBmcm9tICcuLi8uLi8uLi9ob29rcy91c2VVUkwnO1xyXG5pbXBvcnQgeyBVc2VySXRlbSB9IGZyb20gJy4vdHlwZXMnO1xyXG5pbXBvcnQgeyBnZXRVc2Vyc1NlbGVjdG9yIH0gZnJvbSAnLi4vLi4vLi4vcmVkdXgvc2VsZWN0b3JzL2dldFVzZXJzU2VsZWN0b3InO1xyXG5pbXBvcnQgeyBnZXRVc2VyRGF0YSB9IGZyb20gJy4uLy4uLy4uL2FwaSc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgc2V0VXNlcnNBY3Rpb25DcmVhdG9yIH0gZnJvbSAnLi4vLi4vLi4vcmVkdXgvYWN0aW9uLWNyZWF0b3JzL3NldFVzZXJzQWN0aW9uQ3JlYXRvcic7XHJcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICcuLi9UaGVtZUNvbnRleHQnO1xyXG5jb25zdCBMaXN0ID0gKCkgPT4ge1xyXG5cdGNvbnN0IHsgc2V0UGFnZSB9ID0gdXNlVVJMKCk7XHJcblx0Y29uc3QgZGlzcGF0Y2ggPSB1c2VBcHBEaXNwYXRjaCgpO1xyXG5cdGNvbnN0IHVzZXJzID0gdXNlU2VsZWN0b3IoZ2V0VXNlcnNTZWxlY3Rvcik7XHJcblx0Y29uc3QgcGFyYW1zID0gdXNlU2VsZWN0b3IocGFyYW1zU2VsZWN0b3IpO1xyXG4gXHJcblx0Y29uc3QgaXNMb2FkaW5nID0gdXNlU2VsZWN0b3IoaXNMb2FkaW5nU2VsZWN0b3IpO1xyXG5cclxuXHRjb25zdCBoYW5kbGVOZXh0ID0gKCkgPT4ge1xyXG5cdFx0d2luZG93LnNjcm9sbFRvKDAsIDApO1xyXG5cdFx0ZGlzcGF0Y2goc2V0TmV4dFBhZ2VBY3Rpb25DcmVhdG9yKCkpO1xyXG5cdFx0c2V0UGFnZShwYXJhbXMub2Zmc2V0ICsgMSwgcGFyYW1zLnF1ZXJ5KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBoYW5kbGVQcmV2ID0gKCkgPT4ge1xyXG5cdFx0d2luZG93LnNjcm9sbFRvKDAsIDApO1xyXG5cdFx0ZGlzcGF0Y2goc2V0UHJldlBhZ2VBY3Rpb25DcmVhdG9yKCkpO1xyXG5cdFx0c2V0UGFnZShwYXJhbXMub2Zmc2V0IC0gMSwgcGFyYW1zLnF1ZXJ5KTtcclxuXHR9O1xyXG4gXHJcbnVzZUVmZmVjdCgoKSA9PiB7XHJcblx0Y29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG5cdFx0dHJ5IHtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJGRVRDSElOR1wiLCBwYXJhbXMubGltaXQsIHBhcmFtcy5vZmZzZXQsIHBhcmFtcy5xdWVyeSApXHJcblx0XHRcdGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRVc2VyRGF0YShwYXJhbXMubGltaXQsIHBhcmFtcy5vZmZzZXQsIHBhcmFtcy5xdWVyeSk7XHJcblx0XHRcdGRpc3BhdGNoKHNldFVzZXJzQWN0aW9uQ3JlYXRvcihkYXRhKSlcclxuXHQgXHJcblx0XHR9IGNhdGNoIChlcnIpIHtcclxuXHQgXHJcblx0XHR9ICBcclxuXHR9O1xyXG5cdGZldGNoRGF0YSgpO1xyXG59LCBbcGFyYW1zLmxpbWl0LCBwYXJhbXMub2Zmc2V0LCBwYXJhbXMucXVlcnldKTsgXHJcblx0cmV0dXJuIChcclxuXHRcdDxUaGVtZVByb3ZpZGVyPlxyXG5cclxuXHRcdDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmxpc3R9PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxpc3RfX2NvbnRhaW5lcn0+XHJcblx0XHRcdFx0e2lzTG9hZGluZyAmJiA8U3Bpbm5lciAvPn1cclxuXHRcdFx0XHR7dXNlcnMubWFwKChpdGVtOiBVc2VySXRlbSkgPT4gKFxyXG5cdFx0XHRcdFx0PENhcmQgdXNlcj17aXRlbX0ga2V5PXtpdGVtLmlkfSAvPlxyXG5cdFx0XHRcdCkpfVxyXG5cdFx0XHRcdHt1c2Vycy5sZW5ndGggPT09IDAgJiYgPHAgY2xhc3NOYW1lPXtzdHlsZXMubGlzdF9fbm90aGluZ30+Tm90aGluZyBmb3VuZDwvcD59XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5saXN0X19idG5zfT5cclxuXHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPXtgJHtzdHlsZXMubGlzdF9fcHJldn0gJHtzdHlsZXMubGlzdF9fYnRufWB9IG9uQ2xpY2s9e2hhbmRsZVByZXZ9PlxyXG5cdFx0XHRcdFx0XHRQcmV2XHJcblx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPXtgJHtzdHlsZXMubGlzdF9fbmV4dH0gJHtzdHlsZXMubGlzdF9fYnRufWB9IG9uQ2xpY2s9e2hhbmRsZU5leHR9IGRhdGEtdGVzdGlkPVwibmV4dFwiPlxyXG5cdFx0XHRcdFx0XHROZXh0XHJcblx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L3NlY3Rpb24+XHJcblx0XHQ8L1RoZW1lUHJvdmlkZXI+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpc3Q7XHJcblxyXG5cclxuKi9cclxuLypcclxuXHJcbiovXHJcbi8qXHJcbiAgXHRjb25zdCB7IHF1ZXJ5LCBwYWdlICwgbGltaXQgPSAnMTAnIH0gPSBjb250ZXh0LnF1ZXJ5O1xyXG5cdGNvbnN0IG9mZnNldCA9IHBhcnNlSW50KHBhZ2UgYXMgc3RyaW5nLCAxMCk7XHJcblx0Y29uc3QgcGVyUGFnZSA9IHBhcnNlSW50KGxpbWl0IGFzIHN0cmluZywgMTApO1xyXG5cdGxldCB1cmw6IHN0cmluZztcclxuXHRpZiAoIXF1ZXJ5KSB7XHJcblx0XHR1cmwgPSBgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9zZWFyY2gvdXNlcnM/cT10eXBlOnVzZXImcGFnZT0ke29mZnNldH0mcGVyX3BhZ2U9JHtwZXJQYWdlfWA7XHJcblx0fSBlbHNlIHtcclxuXHRcdHVybCA9IGBodHRwczovL2FwaS5naXRodWIuY29tL3NlYXJjaC91c2Vycz9xPSR7cXVlcnl9JnBhZ2U9JHtvZmZzZXR9JnBlcl9wYWdlPSR7cGVyUGFnZX1gO1xyXG5cdH1cclxuXHR0cnkge1xyXG5cdFx0bGV0IHVzZXJzOiBVc2VyRGF0YUFycmF5ID0gW107XHJcblxyXG5cdFx0aWYgKCFxdWVyeSkge1xyXG5cdFx0XHRjb25zdCByZXNwb25zZTogQXhpb3NSZXNwb25zZTxVc2VyRGF0YT4gPSBhd2FpdCBheGlvcy5nZXQodXJsKTtcclxuXHRcdFx0dXNlcnMgPSByZXNwb25zZS5kYXRhLml0ZW1zO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Y29uc3QgcmVzcG9uc2U6IEF4aW9zUmVzcG9uc2U8VXNlckRhdGE+ID0gYXdhaXQgYXhpb3MuZ2V0KHVybCk7XHJcblx0XHRcdHVzZXJzID0gcmVzcG9uc2UuZGF0YS5pdGVtcztcclxuXHRcdH1cclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHByb3BzOiB7XHJcblx0XHRcdFx0dXNlcnMsXHJcblx0XHRcdFx0fSxcclxuXHRcdH07XHJcblx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdGlmIChheGlvcy5pc0F4aW9zRXJyb3IoZXJyb3IpKSB7XHJcblx0XHRcdGNvbnN0IGF4aW9zRXJyb3IgPSBlcnJvciBhcyBBeGlvc0Vycm9yO1xyXG5cdFx0XHRjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGF4aW9zRXJyb3IubWVzc2FnZSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRjb25zb2xlLmVycm9yKCdVbmtub3duIGVycm9yOicsIGVycm9yKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHByb3BzOiB7XHJcblx0XHRcdFx0dXNlcnM6IFtdLFxyXG5cdFx0XHQgXHJcblx0XHRcdFx0fSxcclxuXHRcdH07XHJcblx0fVxyXG4gICAgKi9cclxuXHJcblxyXG5cclxuXHJcblxyXG4vKlxyXG5pbXBvcnQgYXhpb3MsIHsgQXhpb3NFcnJvciwgQXhpb3NSZXNwb25zZSB9IGZyb20gJ2F4aW9zJztcclxuXHJcbnR5cGUgVXNlckRhdGFBcnJheSA9IEFycmF5PHtcclxuXHRsb2dpbjogc3RyaW5nO1xyXG5cdGlkOiBudW1iZXI7XHJcblx0bm9kZV9pZDogc3RyaW5nO1xyXG5cdGF2YXRhcl91cmw6IHN0cmluZztcclxuXHRncmF2YXRhcl9pZDogc3RyaW5nO1xyXG5cdHVybDogc3RyaW5nO1xyXG5cdGh0bWxfdXJsOiBzdHJpbmc7XHJcblx0Zm9sbG93ZXJzX3VybDogc3RyaW5nO1xyXG5cdGZvbGxvd2luZ191cmw6IHN0cmluZztcclxuXHRnaXN0c191cmw6IHN0cmluZztcclxuXHRzdGFycmVkX3VybDogc3RyaW5nO1xyXG5cdHN1YnNjcmlwdGlvbnNfdXJsOiBzdHJpbmc7XHJcblx0b3JnYW5pemF0aW9uc191cmw6IHN0cmluZztcclxuXHRyZXBvc191cmw6IHN0cmluZztcclxuXHRldmVudHNfdXJsOiBzdHJpbmc7XHJcblx0cmVjZWl2ZWRfZXZlbnRzX3VybDogc3RyaW5nO1xyXG5cdHR5cGU6IHN0cmluZztcclxuXHRzaXRlX2FkbWluOiBib29sZWFuO1xyXG5cdHNjb3JlOiBudW1iZXI7XHJcbn0+O1xyXG5pbnRlcmZhY2UgVXNlckRhdGEge1xyXG5cdHRvdGFsX2NvdW50OiBudW1iZXI7XHJcblx0aW5jb21wbGV0ZV9yZXN1bHRzOiBib29sZWFuO1xyXG5cdGl0ZW1zOiBVc2VyRGF0YUFycmF5O1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBmZXRjaFVzZXJEYXRhKHVybDogc3RyaW5nKTogUHJvbWlzZTxVc2VyRGF0YUFycmF5PiB7XHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IHJlc3BvbnNlOiBBeGlvc1Jlc3BvbnNlPFVzZXJEYXRhQXJyYXk+ID0gYXdhaXQgYXhpb3MuZ2V0KHVybCk7XHJcblx0XHRyZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuXHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0aWYgKGF4aW9zLmlzQXhpb3NFcnJvcihlcnJvcikpIHtcclxuXHRcdFx0Y29uc3QgYXhpb3NFcnJvciA9IGVycm9yIGFzIEF4aW9zRXJyb3I7XHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgYXhpb3NFcnJvci5tZXNzYWdlKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoJ1Vua25vd24gZXJyb3I6JywgZXJyb3IpO1xyXG5cdFx0fVxyXG5cdFx0dGhyb3cgbmV3IEVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhJyk7XHJcblx0fVxyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIGZldGNoVXNlckRhdGFBZHZhbmNlZCh1cmw6IHN0cmluZyk6IFByb21pc2U8VXNlckRhdGE+IHtcclxuXHR0cnkge1xyXG5cdFx0Y29uc3QgcmVzcG9uc2U6IEF4aW9zUmVzcG9uc2U8VXNlckRhdGE+ID0gYXdhaXQgYXhpb3MuZ2V0KHVybCk7XHJcblx0XHRyZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuXHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0aWYgKGF4aW9zLmlzQXhpb3NFcnJvcihlcnJvcikpIHtcclxuXHRcdFx0Y29uc3QgYXhpb3NFcnJvciA9IGVycm9yIGFzIEF4aW9zRXJyb3I7XHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgYXhpb3NFcnJvci5tZXNzYWdlKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoJ1Vua25vd24gZXJyb3I6JywgZXJyb3IpO1xyXG5cdFx0fVxyXG5cdFx0dGhyb3cgbmV3IEVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhJyk7XHJcblx0fVxyXG59XHJcbiAgKi9cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vKlxyXG5cclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIEFwcCgpIHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzJyk7XHJcbiAgY29uc3QgcG9zdHMgPSByZXNwb25zZS5kYXRhO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHVsPlxyXG4gICAgICB7cG9zdHMubWFwKChwb3N0KSA9PiAoXHJcbiAgICAgICAgPGxpIGtleT17cG9zdC5pZH0+e3Bvc3QudGl0bGV9PC9saT5cclxuICAgICAgKSl9XHJcbiAgICA8L3VsPlxyXG4gICk7XHJcbn1cclxuICAqLyJdLCJuYW1lcyI6WyJzdHlsZXMiLCJDYXJkIiwidXNlQXBwRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInBhcmFtc1NlbGVjdG9yIiwidXNlVVJMIiwic2V0UHJldlBhZ2VBY3Rpb25DcmVhdG9yIiwic3RvcmVkVXNlcnNTZWxlY3RvciIsInNldE5leHRQYWdlQWN0aW9uQ3JlYXRvciIsIlN0b3JlZFVzZXJzQnV0dG9uIiwiRXJyb3JDb21wb25lbnQiLCJFcnJvckJvdW5kYXJ5IiwiQXBwIiwidXNlcnMiLCJkaXNwYXRjaCIsInBhcmFtcyIsInNldFBhZ2UiLCJzdG9yZWRVc2VycyIsImhhbmRsZU5leHQiLCJ3aW5kb3ciLCJzY3JvbGxUbyIsIm9mZnNldCIsInF1ZXJ5IiwiaGFuZGxlUHJldiIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJsaXN0IiwiZGl2IiwibGlzdF9fY29udGFpbmVyIiwibWFwIiwiaXRlbSIsInVzZXIiLCJpZCIsImxlbmd0aCIsInAiLCJsaXN0X19ub3RoaW5nIiwibGlzdF9fYnRucyIsImJ1dHRvbiIsImxpc3RfX3ByZXYiLCJsaXN0X19idG4iLCJvbkNsaWNrIiwibGlzdF9fbmV4dCIsImRhdGEtdGVzdGlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/newComp/App/index.tsx\n"));

/***/ })

});