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

/***/ "(app-pages-browser)/./src/hooks/useURL.ts":
/*!*****************************!*\
  !*** ./src/hooks/useURL.ts ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _redux_selectors_getSearchParams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../redux/selectors/getSearchParams */ \"(app-pages-browser)/./src/redux/selectors/getSearchParams.ts\");\n/* harmony import */ var _redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./redux */ \"(app-pages-browser)/./src/hooks/redux.ts\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _redux_action_creators_setSearchParamsActionCreator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/action-creators/setSearchParamsActionCreator */ \"(app-pages-browser)/./src/redux/action-creators/setSearchParamsActionCreator.ts\");\n/* harmony import */ var _redux_action_creators_setNewSearchValueActionCreator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/action-creators/setNewSearchValueActionCreator */ \"(app-pages-browser)/./src/redux/action-creators/setNewSearchValueActionCreator.ts\");\n/* harmony import */ var _redux_selectors_typedValueSelector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../redux/selectors/typedValueSelector */ \"(app-pages-browser)/./src/redux/selectors/typedValueSelector.ts\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\n\n\n\n\nconst useURL = ()=>{\n    const dispatch = (0,_redux__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch)();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    const searchParam = (0,next_navigation__WEBPACK_IMPORTED_MODULE_6__.useSearchParams)();\n    const params = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(_redux_selectors_getSearchParams__WEBPACK_IMPORTED_MODULE_1__.paramsSelector);\n    const getCurrentParams = ()=>{};\n    const setPage = (page, query)=>{\n        const queryObj = {\n            page: String(page)\n        };\n        if (query) {\n            if (query != undefined) {\n                Object.assign(queryObj, {\n                    query: query\n                });\n            }\n        }\n        //  const handleNavigation = () => {\n        //      router.push('/new-page');\n        //  };\n        //     router.push()\n        //  const handleNavigation = () => {\n        // Construct query parameters as a URLSearchParams object or manually\n        //  const queryObj = {\n        //     page: params.offset,\n        //        query: params.query || ''\n        //  };\n        // Convert query object to query string\n        const queryString = new URLSearchParams(queryObj).toString();\n        // Construct the new URL\n        // const newUrl = `/?${queryString}`;\n        const newUrl = \"/?page=\".concat(String(page)).concat(query ? \"query=\".concat(query) : \"\");\n        // Push the new URL\n        console.log(\"NEW\", newUrl);\n        router.push(newUrl);\n    //};\n    /*\n        router.push({\n            pathname: router.pathname,\n                 query: queryObj,\n                 \n                 });\n     */ };\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        console.log(\"PAR\", JSON.stringify(params));\n        const storedParam = localStorage.getItem(\"searchParam\");\n        console.log(storedParam);\n        if (storedParam) {\n            //  dispatch(setStoredInLocalStorageActionCreator(storedParam))\n            dispatch((0,_redux_action_creators_setSearchParamsActionCreator__WEBPACK_IMPORTED_MODULE_3__.setQueryActionCreator)(storedParam));\n        }\n    //\tconst [page, query] = getCurrentParams();\n    //\tsetPage(Number(page), String(query));\n    //\tlocalStorage.setItem('searchParam', String(query));\n    //\tdispatch(setSearchParamsActionCreator(Number(page), String(query)));\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        console.log(\"NEX\", params);\n    }, [\n        params\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n    // const { page, query } = router.query;\n    //  console.log(\"QUERYYY\", query)\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        const page = searchParam.get(\"page\");\n        const query = searchParam.get(\"query\");\n        if (query != undefined) {\n            localStorage.setItem(\"searchParam\", String(query));\n        }\n        if (page && query) {\n            dispatch((0,_redux_action_creators_setSearchParamsActionCreator__WEBPACK_IMPORTED_MODULE_3__.setSearchParamsActionCreator)(Number(page), String(query)));\n        }\n    }, [\n        router\n    ]);\n    const handleInput = (event)=>{\n        dispatch((0,_redux_action_creators_setSearchParamsActionCreator__WEBPACK_IMPORTED_MODULE_3__.setQueryActionCreator)(event.target.value));\n    };\n    const typedValue = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(_redux_selectors_typedValueSelector__WEBPACK_IMPORTED_MODULE_5__.typedValueSelector);\n    const handleSearch = ()=>{\n        localStorage.setItem(\"searchParam\", String(typedValue));\n        dispatch((0,_redux_action_creators_setNewSearchValueActionCreator__WEBPACK_IMPORTED_MODULE_4__.setNewSearchValueActionCreator)());\n    /*\n                router.push({\n                    pathname: router.pathname,\n        \n                    query: {\n                        page:1,\n                        query: typedValue\n                    }\n                })\n                    */ };\n    return {\n        getCurrentParams,\n        setPage,\n        handleInput,\n        handleSearch\n    };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (useURL);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UkwudHM/NDExOSJdLCJzb3VyY2VzQ29udGVudCI6WyJcblxuXG5cInVzZSBjbGllbnRcIlxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBwYXJhbXNTZWxlY3RvciB9IGZyb20gJy4uL3JlZHV4L3NlbGVjdG9ycy9nZXRTZWFyY2hQYXJhbXMnO1xuaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IHVzZUFwcERpc3BhdGNoIH0gZnJvbSAnLi9yZWR1eCc7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgc2V0UXVlcnlBY3Rpb25DcmVhdG9yIH0gZnJvbSAnLi4vcmVkdXgvYWN0aW9uLWNyZWF0b3JzL3NldFNlYXJjaFBhcmFtc0FjdGlvbkNyZWF0b3InO1xuaW1wb3J0IHsgc2V0U2VhcmNoUGFyYW1zQWN0aW9uQ3JlYXRvciB9IGZyb20gJy4uL3JlZHV4L2FjdGlvbi1jcmVhdG9ycy9zZXRTZWFyY2hQYXJhbXNBY3Rpb25DcmVhdG9yJztcbmltcG9ydCB7IHNldExvYWRpbmdBY3Rpb25DcmVhdG9yIH0gZnJvbSAnLi4vcmVkdXgvYWN0aW9uLWNyZWF0b3JzL3NldElzTG9hZGluZyc7XG5pbXBvcnQgeyB1c2VMYXp5U2VhcmNoVXNlcnNRdWVyeSB9IGZyb20gJy4uL3JlZHV4L3NsaWNlcy9xdWVyeVNsaWNlJztcbmltcG9ydCB7IHNldFVzZXJzQWN0aW9uQ3JlYXRvciB9IGZyb20gJy4uL3JlZHV4L2FjdGlvbi1jcmVhdG9ycy9zZXRVc2Vyc0FjdGlvbkNyZWF0b3InO1xuXG5cbmltcG9ydCB7IHNldE5ld1NlYXJjaFZhbHVlQWN0aW9uQ3JlYXRvciB9IGZyb20gJy4uL3JlZHV4L2FjdGlvbi1jcmVhdG9ycy9zZXROZXdTZWFyY2hWYWx1ZUFjdGlvbkNyZWF0b3InO1xuaW1wb3J0IHsgdHlwZWRWYWx1ZVNlbGVjdG9yIH0gZnJvbSAnLi4vcmVkdXgvc2VsZWN0b3JzL3R5cGVkVmFsdWVTZWxlY3Rvcic7XG5pbXBvcnQgeyBzZXRTdG9yZWRJbkxvY2FsU3RvcmFnZUFjdGlvbkNyZWF0b3IgfSBmcm9tICcuLi9yZWR1eC9hY3Rpb24tY3JlYXRvcnMvc2V0U3RvcmVkSW5Mb2NhbFN0b3JhZ2VRdWVyeSc7XG5cbmltcG9ydCB7IHVzZVJvdXRlciwgdXNlU2VhcmNoUGFyYW1zIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJztcbmNvbnN0IHVzZVVSTCA9ICgpID0+IHtcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZUFwcERpc3BhdGNoKCk7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgICBjb25zdCBzZWFyY2hQYXJhbSA9IHVzZVNlYXJjaFBhcmFtcygpXG4gICAgY29uc3QgcGFyYW1zID0gdXNlU2VsZWN0b3IocGFyYW1zU2VsZWN0b3IpO1xuXG4gICAgY29uc3QgZ2V0Q3VycmVudFBhcmFtcyA9ICgpID0+IHtcblxuICAgIH07XG5cbiAgICBjb25zdCBzZXRQYWdlID0gKHBhZ2U6IG51bWJlciwgcXVlcnk6IHN0cmluZykgPT4ge1xuXG5cblxuICAgICAgICBjb25zdCBxdWVyeU9iaiA9IHtcbiAgICAgICAgICAgIHBhZ2U6IFN0cmluZyhwYWdlKVxuICAgICAgICB9XG4gICAgICAgIGlmIChxdWVyeSkge1xuICAgICAgICAgICAgaWYgKHF1ZXJ5ICE9IHVuZGVmaW5lZCkge1xuXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeU9iaiwgeyBxdWVyeTogcXVlcnkgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vICBjb25zdCBoYW5kbGVOYXZpZ2F0aW9uID0gKCkgPT4ge1xuICAgICAgICAvLyAgICAgIHJvdXRlci5wdXNoKCcvbmV3LXBhZ2UnKTtcbiAgICAgICAgLy8gIH07XG5cbiAgICAgICAgLy8gICAgIHJvdXRlci5wdXNoKClcblxuICAgICAgICAvLyAgY29uc3QgaGFuZGxlTmF2aWdhdGlvbiA9ICgpID0+IHtcbiAgICAgICAgLy8gQ29uc3RydWN0IHF1ZXJ5IHBhcmFtZXRlcnMgYXMgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0IG9yIG1hbnVhbGx5XG4gICAgICAgIC8vICBjb25zdCBxdWVyeU9iaiA9IHtcbiAgICAgICAgLy8gICAgIHBhZ2U6IHBhcmFtcy5vZmZzZXQsXG4gICAgICAgIC8vICAgICAgICBxdWVyeTogcGFyYW1zLnF1ZXJ5IHx8ICcnXG4gICAgICAgIC8vICB9O1xuXG4gICAgICAgIC8vIENvbnZlcnQgcXVlcnkgb2JqZWN0IHRvIHF1ZXJ5IHN0cmluZ1xuICAgICAgICBjb25zdCBxdWVyeVN0cmluZyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMocXVlcnlPYmopLnRvU3RyaW5nKCk7XG5cbiAgICAgICAgLy8gQ29uc3RydWN0IHRoZSBuZXcgVVJMXG4gICAgICAgIC8vIGNvbnN0IG5ld1VybCA9IGAvPyR7cXVlcnlTdHJpbmd9YDtcbiAgICAgICAgY29uc3QgbmV3VXJsID0gYC8/cGFnZT0ke1N0cmluZyhwYWdlKX0ke3F1ZXJ5ID8gYHF1ZXJ5PSR7cXVlcnl9YCA6IGBgfWBcbiAgICAgICAgLy8gUHVzaCB0aGUgbmV3IFVSTFxuICAgICAgICBjb25zb2xlLmxvZyhcIk5FV1wiLCBuZXdVcmwpXG4gICAgICAgIHJvdXRlci5wdXNoKG5ld1VybCk7XG4gICAgICAgIC8vfTtcblxuICAgICAgICAvKlxuICAgICAgICByb3V0ZXIucHVzaCh7XG4gICAgICAgICAgICBwYXRobmFtZTogcm91dGVyLnBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICBxdWVyeTogcXVlcnlPYmosXG4gICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICB9KTtcbiAgICAgKi9cblxuICAgIH07XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcblxuICAgICAgICBjb25zb2xlLmxvZyhcIlBBUlwiLCBKU09OLnN0cmluZ2lmeShwYXJhbXMpKVxuICAgICAgICBjb25zdCBzdG9yZWRQYXJhbSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2VhcmNoUGFyYW1cIilcbiAgICAgICAgY29uc29sZS5sb2coc3RvcmVkUGFyYW0pXG4gICAgICAgIGlmIChzdG9yZWRQYXJhbSkge1xuICAgICAgICAgICAgLy8gIGRpc3BhdGNoKHNldFN0b3JlZEluTG9jYWxTdG9yYWdlQWN0aW9uQ3JlYXRvcihzdG9yZWRQYXJhbSkpXG4gICAgICAgICAgICBkaXNwYXRjaChzZXRRdWVyeUFjdGlvbkNyZWF0b3Ioc3RvcmVkUGFyYW0pKVxuICAgICAgICB9XG4gICAgICAgIC8vXHRjb25zdCBbcGFnZSwgcXVlcnldID0gZ2V0Q3VycmVudFBhcmFtcygpO1xuXG4gICAgICAgIC8vXHRzZXRQYWdlKE51bWJlcihwYWdlKSwgU3RyaW5nKHF1ZXJ5KSk7XG4gICAgICAgIC8vXHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc2VhcmNoUGFyYW0nLCBTdHJpbmcocXVlcnkpKTtcbiAgICAgICAgLy9cdGRpc3BhdGNoKHNldFNlYXJjaFBhcmFtc0FjdGlvbkNyZWF0b3IoTnVtYmVyKHBhZ2UpLCBTdHJpbmcocXVlcnkpKSk7XG4gICAgfSwgW10pO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTkVYXCIsIHBhcmFtcylcbiAgICB9LCBbcGFyYW1zXSlcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICAvLyBjb25zdCB7IHBhZ2UsIHF1ZXJ5IH0gPSByb3V0ZXIucXVlcnk7XG4gICAgICAgIC8vICBjb25zb2xlLmxvZyhcIlFVRVJZWVlcIiwgcXVlcnkpXG5cbiAgICB9LCBbXSlcblxuXG5cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhZ2UgPSBzZWFyY2hQYXJhbS5nZXQoJ3BhZ2UnKTtcbiAgICAgICAgY29uc3QgcXVlcnkgPSBzZWFyY2hQYXJhbS5nZXQoJ3F1ZXJ5JylcbiAgICAgICAgaWYocXVlcnkhPXVuZGVmaW5lZCkge1xuXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInNlYXJjaFBhcmFtXCIsIFN0cmluZyhxdWVyeSkpXG4gICAgICAgIH1cbiAgICAgICAgaWYocGFnZSAmJiBxdWVyeSkge1xuICAgICAgICAgICAgZGlzcGF0Y2goc2V0U2VhcmNoUGFyYW1zQWN0aW9uQ3JlYXRvciggTnVtYmVyKHBhZ2UpLCBTdHJpbmcocXVlcnkpKSlcbiAgICAgICAgfVxuXG5cbiAgICB9LCBbcm91dGVyXSk7XG4gICBcblxuICAgIGNvbnN0IGhhbmRsZUlucHV0ID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgICAgICBkaXNwYXRjaChzZXRRdWVyeUFjdGlvbkNyZWF0b3IoZXZlbnQudGFyZ2V0LnZhbHVlKSk7XG4gICAgfTtcbiAgICBjb25zdCB0eXBlZFZhbHVlID0gdXNlU2VsZWN0b3IodHlwZWRWYWx1ZVNlbGVjdG9yKVxuICAgIGNvbnN0IGhhbmRsZVNlYXJjaCA9ICgpID0+IHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3NlYXJjaFBhcmFtJywgU3RyaW5nKHR5cGVkVmFsdWUpKTtcbiAgICAgICAgZGlzcGF0Y2goc2V0TmV3U2VhcmNoVmFsdWVBY3Rpb25DcmVhdG9yKCkpXG5cbiAgICAgICAgLypcbiAgICAgICAgICAgICAgICByb3V0ZXIucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiByb3V0ZXIucGF0aG5hbWUsXG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBxdWVyeToge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZToxLFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHR5cGVkVmFsdWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICovXG4gICAgfTtcbiAgIFxuICAgIHJldHVybiB7IGdldEN1cnJlbnRQYXJhbXMsIHNldFBhZ2UsIGhhbmRsZUlucHV0LCBoYW5kbGVTZWFyY2ggfTtcbn07XG5leHBvcnQgZGVmYXVsdCB1c2VVUkw7XG5cblxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInBhcmFtc1NlbGVjdG9yIiwidXNlQXBwRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInNldFF1ZXJ5QWN0aW9uQ3JlYXRvciIsInNldFNlYXJjaFBhcmFtc0FjdGlvbkNyZWF0b3IiLCJzZXROZXdTZWFyY2hWYWx1ZUFjdGlvbkNyZWF0b3IiLCJ0eXBlZFZhbHVlU2VsZWN0b3IiLCJ1c2VSb3V0ZXIiLCJ1c2VTZWFyY2hQYXJhbXMiLCJ1c2VVUkwiLCJkaXNwYXRjaCIsInJvdXRlciIsInNlYXJjaFBhcmFtIiwicGFyYW1zIiwiZ2V0Q3VycmVudFBhcmFtcyIsInNldFBhZ2UiLCJwYWdlIiwicXVlcnkiLCJxdWVyeU9iaiIsIlN0cmluZyIsInVuZGVmaW5lZCIsIk9iamVjdCIsImFzc2lnbiIsInF1ZXJ5U3RyaW5nIiwiVVJMU2VhcmNoUGFyYW1zIiwidG9TdHJpbmciLCJuZXdVcmwiLCJjb25zb2xlIiwibG9nIiwicHVzaCIsIkpTT04iLCJzdHJpbmdpZnkiLCJzdG9yZWRQYXJhbSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJnZXQiLCJzZXRJdGVtIiwiTnVtYmVyIiwiaGFuZGxlSW5wdXQiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwidHlwZWRWYWx1ZSIsImhhbmRsZVNlYXJjaCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/hooks/useURL.ts\n"));

/***/ })

});