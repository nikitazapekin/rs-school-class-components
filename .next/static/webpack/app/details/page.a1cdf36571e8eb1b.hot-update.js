"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/details/page",{

/***/ "(app-pages-browser)/./src/hooks/useURL.ts":
/*!*****************************!*\
  !*** ./src/hooks/useURL.ts ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _redux_selectors_getSearchParams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../redux/selectors/getSearchParams */ \"(app-pages-browser)/./src/redux/selectors/getSearchParams.ts\");\n/* harmony import */ var _redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./redux */ \"(app-pages-browser)/./src/hooks/redux.ts\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _redux_action_creators_setSearchParamsActionCreator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/action-creators/setSearchParamsActionCreator */ \"(app-pages-browser)/./src/redux/action-creators/setSearchParamsActionCreator.ts\");\n/* harmony import */ var _redux_action_creators_setNewSearchValueActionCreator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/action-creators/setNewSearchValueActionCreator */ \"(app-pages-browser)/./src/redux/action-creators/setNewSearchValueActionCreator.ts\");\n/* harmony import */ var _redux_selectors_typedValueSelector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../redux/selectors/typedValueSelector */ \"(app-pages-browser)/./src/redux/selectors/typedValueSelector.ts\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\n\n\n\n\nconst useURL = ()=>{\n    const dispatch = (0,_redux__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch)();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    const searchParam = (0,next_navigation__WEBPACK_IMPORTED_MODULE_6__.useSearchParams)();\n    const params = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(_redux_selectors_getSearchParams__WEBPACK_IMPORTED_MODULE_1__.paramsSelector);\n    const getCurrentParams = ()=>{};\n    const setPage = (page, query)=>{\n        const queryObj = {\n            page: String(page)\n        };\n        if (query) {\n            if (query != undefined) {\n                Object.assign(queryObj, {\n                    query: query\n                });\n            }\n        }\n        //  const handleNavigation = () => {\n        //      router.push('/new-page');\n        //  };\n        //     router.push()\n        //  const handleNavigation = () => {\n        // Construct query parameters as a URLSearchParams object or manually\n        //  const queryObj = {\n        //     page: params.offset,\n        //        query: params.query || ''\n        //  };\n        // Convert query object to query string\n        const queryString = new URLSearchParams(queryObj).toString();\n        // Construct the new URL\n        // const newUrl = `/?${queryString}`;\n        const newUrl = \"/?page=\".concat(String(page)).concat(query ? \"query=\".concat(query) : \"\");\n        // Push the new URL\n        console.log(\"NEW\", newUrl);\n        router.push(newUrl);\n    //};\n    /*\n        router.push({\n            pathname: router.pathname,\n                 query: queryObj,\n                 \n                 });\n     */ };\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        console.log(\"PAR\", JSON.stringify(params));\n        const storedParam = localStorage.getItem(\"searchParam\");\n        console.log(storedParam);\n        if (storedParam) {\n            //  dispatch(setStoredInLocalStorageActionCreator(storedParam))\n            dispatch((0,_redux_action_creators_setSearchParamsActionCreator__WEBPACK_IMPORTED_MODULE_3__.setQueryActionCreator)(storedParam));\n        }\n    //\tconst [page, query] = getCurrentParams();\n    //\tsetPage(Number(page), String(query));\n    //\tlocalStorage.setItem('searchParam', String(query));\n    //\tdispatch(setSearchParamsActionCreator(Number(page), String(query)));\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        const page = searchParam.get(\"page\");\n        const query = searchParam.get(\"query\");\n        if (query != undefined) {\n            localStorage.setItem(\"searchParam\", String(query));\n        }\n        if (page && query) {\n            dispatch((0,_redux_action_creators_setSearchParamsActionCreator__WEBPACK_IMPORTED_MODULE_3__.setSearchParamsActionCreator)(Number(page), String(query)));\n        }\n    }, [\n        router\n    ]);\n    const handleInput = (event)=>{\n        dispatch((0,_redux_action_creators_setSearchParamsActionCreator__WEBPACK_IMPORTED_MODULE_3__.setQueryActionCreator)(event.target.value));\n    };\n    const typedValue = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(_redux_selectors_typedValueSelector__WEBPACK_IMPORTED_MODULE_5__.typedValueSelector);\n    const handleSearch = ()=>{\n        localStorage.setItem(\"searchParam\", String(typedValue));\n        dispatch((0,_redux_action_creators_setNewSearchValueActionCreator__WEBPACK_IMPORTED_MODULE_4__.setNewSearchValueActionCreator)());\n    };\n    return {\n        getCurrentParams,\n        setPage,\n        handleInput,\n        handleSearch\n    };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (useURL);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9ob29rcy91c2VVUkwudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs2REFJa0M7QUFFa0M7QUFFM0I7QUFDQztBQUVvRDtBQUNPO0FBTUk7QUFDOUI7QUFHZDtBQUM3RCxNQUFNVSxTQUFTO0lBQ1gsTUFBTUMsV0FBV1Qsc0RBQWNBO0lBQy9CLE1BQU1VLFNBQVNKLDBEQUFTQTtJQUN4QixNQUFNSyxjQUFjSixnRUFBZUE7SUFDbkMsTUFBTUssU0FBU1gsd0RBQVdBLENBQUNGLDRFQUFjQTtJQUV6QyxNQUFNYyxtQkFBbUIsS0FFekI7SUFFQSxNQUFNQyxVQUFVLENBQUNDLE1BQWNDO1FBSTNCLE1BQU1DLFdBQVc7WUFDYkYsTUFBTUcsT0FBT0g7UUFDakI7UUFDQSxJQUFJQyxPQUFPO1lBQ1AsSUFBSUEsU0FBU0csV0FBVztnQkFFcEJDLE9BQU9DLE1BQU0sQ0FBQ0osVUFBVTtvQkFBRUQsT0FBT0E7Z0JBQU07WUFDM0M7UUFFSjtRQUVBLG9DQUFvQztRQUNwQyxpQ0FBaUM7UUFDakMsTUFBTTtRQUVOLG9CQUFvQjtRQUVwQixvQ0FBb0M7UUFDcEMscUVBQXFFO1FBQ3JFLHNCQUFzQjtRQUN0QiwyQkFBMkI7UUFDM0IsbUNBQW1DO1FBQ25DLE1BQU07UUFFTix1Q0FBdUM7UUFDdkMsTUFBTU0sY0FBYyxJQUFJQyxnQkFBZ0JOLFVBQVVPLFFBQVE7UUFFMUQsd0JBQXdCO1FBQ3hCLHFDQUFxQztRQUNyQyxNQUFNQyxTQUFTLFVBQXlCVCxPQUFmRSxPQUFPSCxPQUFzQyxPQUE5QkMsUUFBUSxTQUFlLE9BQU5BLFNBQVc7UUFDcEUsbUJBQW1CO1FBQ25CVSxRQUFRQyxHQUFHLENBQUMsT0FBT0Y7UUFDbkJmLE9BQU9rQixJQUFJLENBQUNIO0lBQ1osSUFBSTtJQUVKOzs7Ozs7S0FNSCxHQUVEO0lBQ0EzQixnREFBU0EsQ0FBQztRQUVONEIsUUFBUUMsR0FBRyxDQUFDLE9BQU9FLEtBQUtDLFNBQVMsQ0FBQ2xCO1FBQ2xDLE1BQU1tQixjQUFjQyxhQUFhQyxPQUFPLENBQUM7UUFDekNQLFFBQVFDLEdBQUcsQ0FBQ0k7UUFDWixJQUFJQSxhQUFhO1lBQ2IsK0RBQStEO1lBQy9EdEIsU0FBU1AsMEdBQXFCQSxDQUFDNkI7UUFDbkM7SUFDQSw0Q0FBNEM7SUFFNUMsd0NBQXdDO0lBQ3hDLHNEQUFzRDtJQUN0RCx1RUFBdUU7SUFDM0UsR0FBRyxFQUFFO0lBR0xqQyxnREFBU0EsQ0FBQztRQUNOLE1BQU1pQixPQUFPSixZQUFZdUIsR0FBRyxDQUFDO1FBQzdCLE1BQU1sQixRQUFRTCxZQUFZdUIsR0FBRyxDQUFDO1FBQzlCLElBQUdsQixTQUFPRyxXQUFXO1lBRWpCYSxhQUFhRyxPQUFPLENBQUMsZUFBZWpCLE9BQU9GO1FBQy9DO1FBQ0EsSUFBR0QsUUFBUUMsT0FBTztZQUNkUCxTQUFTTixpSEFBNEJBLENBQUVpQyxPQUFPckIsT0FBT0csT0FBT0Y7UUFDaEU7SUFHSixHQUFHO1FBQUNOO0tBQU87SUFHWCxNQUFNMkIsY0FBYyxDQUFDQztRQUNqQjdCLFNBQVNQLDBHQUFxQkEsQ0FBQ29DLE1BQU1DLE1BQU0sQ0FBQ0MsS0FBSztJQUNyRDtJQUNBLE1BQU1DLGFBQWF4Qyx3REFBV0EsQ0FBQ0ksbUZBQWtCQTtJQUNqRCxNQUFNcUMsZUFBZTtRQUNqQlYsYUFBYUcsT0FBTyxDQUFDLGVBQWVqQixPQUFPdUI7UUFDM0NoQyxTQUFTTCxxSEFBOEJBO0lBRzNDO0lBRUEsT0FBTztRQUFFUztRQUFrQkM7UUFBU3VCO1FBQWFLO0lBQWE7QUFDbEU7QUFDQSwrREFBZWxDLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL3VzZVVSTC50cz80MTE5Il0sInNvdXJjZXNDb250ZW50IjpbIlxuXG5cblwidXNlIGNsaWVudFwiXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IHBhcmFtc1NlbGVjdG9yIH0gZnJvbSAnLi4vcmVkdXgvc2VsZWN0b3JzL2dldFNlYXJjaFBhcmFtcyc7XG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgdXNlQXBwRGlzcGF0Y2ggfSBmcm9tICcuL3JlZHV4JztcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgeyBzZXRRdWVyeUFjdGlvbkNyZWF0b3IgfSBmcm9tICcuLi9yZWR1eC9hY3Rpb24tY3JlYXRvcnMvc2V0U2VhcmNoUGFyYW1zQWN0aW9uQ3JlYXRvcic7XG5pbXBvcnQgeyBzZXRTZWFyY2hQYXJhbXNBY3Rpb25DcmVhdG9yIH0gZnJvbSAnLi4vcmVkdXgvYWN0aW9uLWNyZWF0b3JzL3NldFNlYXJjaFBhcmFtc0FjdGlvbkNyZWF0b3InO1xuaW1wb3J0IHsgc2V0TG9hZGluZ0FjdGlvbkNyZWF0b3IgfSBmcm9tICcuLi9yZWR1eC9hY3Rpb24tY3JlYXRvcnMvc2V0SXNMb2FkaW5nJztcbmltcG9ydCB7IHVzZUxhenlTZWFyY2hVc2Vyc1F1ZXJ5IH0gZnJvbSAnLi4vcmVkdXgvc2xpY2VzL3F1ZXJ5U2xpY2UnO1xuaW1wb3J0IHsgc2V0VXNlcnNBY3Rpb25DcmVhdG9yIH0gZnJvbSAnLi4vcmVkdXgvYWN0aW9uLWNyZWF0b3JzL3NldFVzZXJzQWN0aW9uQ3JlYXRvcic7XG5cblxuaW1wb3J0IHsgc2V0TmV3U2VhcmNoVmFsdWVBY3Rpb25DcmVhdG9yIH0gZnJvbSAnLi4vcmVkdXgvYWN0aW9uLWNyZWF0b3JzL3NldE5ld1NlYXJjaFZhbHVlQWN0aW9uQ3JlYXRvcic7XG5pbXBvcnQgeyB0eXBlZFZhbHVlU2VsZWN0b3IgfSBmcm9tICcuLi9yZWR1eC9zZWxlY3RvcnMvdHlwZWRWYWx1ZVNlbGVjdG9yJztcbmltcG9ydCB7IHNldFN0b3JlZEluTG9jYWxTdG9yYWdlQWN0aW9uQ3JlYXRvciB9IGZyb20gJy4uL3JlZHV4L2FjdGlvbi1jcmVhdG9ycy9zZXRTdG9yZWRJbkxvY2FsU3RvcmFnZVF1ZXJ5JztcblxuaW1wb3J0IHsgdXNlUm91dGVyLCB1c2VTZWFyY2hQYXJhbXMgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xuY29uc3QgdXNlVVJMID0gKCkgPT4ge1xuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlQXBwRGlzcGF0Y2goKTtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICAgIGNvbnN0IHNlYXJjaFBhcmFtID0gdXNlU2VhcmNoUGFyYW1zKClcbiAgICBjb25zdCBwYXJhbXMgPSB1c2VTZWxlY3RvcihwYXJhbXNTZWxlY3Rvcik7XG5cbiAgICBjb25zdCBnZXRDdXJyZW50UGFyYW1zID0gKCkgPT4ge1xuXG4gICAgfTtcblxuICAgIGNvbnN0IHNldFBhZ2UgPSAocGFnZTogbnVtYmVyLCBxdWVyeTogc3RyaW5nKSA9PiB7XG5cblxuXG4gICAgICAgIGNvbnN0IHF1ZXJ5T2JqID0ge1xuICAgICAgICAgICAgcGFnZTogU3RyaW5nKHBhZ2UpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHF1ZXJ5KSB7XG4gICAgICAgICAgICBpZiAocXVlcnkgIT0gdW5kZWZpbmVkKSB7XG5cbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5T2JqLCB7IHF1ZXJ5OiBxdWVyeSB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgLy8gIGNvbnN0IGhhbmRsZU5hdmlnYXRpb24gPSAoKSA9PiB7XG4gICAgICAgIC8vICAgICAgcm91dGVyLnB1c2goJy9uZXctcGFnZScpO1xuICAgICAgICAvLyAgfTtcblxuICAgICAgICAvLyAgICAgcm91dGVyLnB1c2goKVxuXG4gICAgICAgIC8vICBjb25zdCBoYW5kbGVOYXZpZ2F0aW9uID0gKCkgPT4ge1xuICAgICAgICAvLyBDb25zdHJ1Y3QgcXVlcnkgcGFyYW1ldGVycyBhcyBhIFVSTFNlYXJjaFBhcmFtcyBvYmplY3Qgb3IgbWFudWFsbHlcbiAgICAgICAgLy8gIGNvbnN0IHF1ZXJ5T2JqID0ge1xuICAgICAgICAvLyAgICAgcGFnZTogcGFyYW1zLm9mZnNldCxcbiAgICAgICAgLy8gICAgICAgIHF1ZXJ5OiBwYXJhbXMucXVlcnkgfHwgJydcbiAgICAgICAgLy8gIH07XG5cbiAgICAgICAgLy8gQ29udmVydCBxdWVyeSBvYmplY3QgdG8gcXVlcnkgc3RyaW5nXG4gICAgICAgIGNvbnN0IHF1ZXJ5U3RyaW5nID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhxdWVyeU9iaikudG9TdHJpbmcoKTtcblxuICAgICAgICAvLyBDb25zdHJ1Y3QgdGhlIG5ldyBVUkxcbiAgICAgICAgLy8gY29uc3QgbmV3VXJsID0gYC8/JHtxdWVyeVN0cmluZ31gO1xuICAgICAgICBjb25zdCBuZXdVcmwgPSBgLz9wYWdlPSR7U3RyaW5nKHBhZ2UpfSR7cXVlcnkgPyBgcXVlcnk9JHtxdWVyeX1gIDogYGB9YFxuICAgICAgICAvLyBQdXNoIHRoZSBuZXcgVVJMXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTkVXXCIsIG5ld1VybClcbiAgICAgICAgcm91dGVyLnB1c2gobmV3VXJsKTtcbiAgICAgICAgLy99O1xuXG4gICAgICAgIC8qXG4gICAgICAgIHJvdXRlci5wdXNoKHtcbiAgICAgICAgICAgIHBhdGhuYW1lOiByb3V0ZXIucGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgIHF1ZXJ5OiBxdWVyeU9iaixcbiAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgIH0pO1xuICAgICAqL1xuXG4gICAgfTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUEFSXCIsIEpTT04uc3RyaW5naWZ5KHBhcmFtcykpXG4gICAgICAgIGNvbnN0IHN0b3JlZFBhcmFtID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzZWFyY2hQYXJhbVwiKVxuICAgICAgICBjb25zb2xlLmxvZyhzdG9yZWRQYXJhbSlcbiAgICAgICAgaWYgKHN0b3JlZFBhcmFtKSB7XG4gICAgICAgICAgICAvLyAgZGlzcGF0Y2goc2V0U3RvcmVkSW5Mb2NhbFN0b3JhZ2VBY3Rpb25DcmVhdG9yKHN0b3JlZFBhcmFtKSlcbiAgICAgICAgICAgIGRpc3BhdGNoKHNldFF1ZXJ5QWN0aW9uQ3JlYXRvcihzdG9yZWRQYXJhbSkpXG4gICAgICAgIH1cbiAgICAgICAgLy9cdGNvbnN0IFtwYWdlLCBxdWVyeV0gPSBnZXRDdXJyZW50UGFyYW1zKCk7XG5cbiAgICAgICAgLy9cdHNldFBhZ2UoTnVtYmVyKHBhZ2UpLCBTdHJpbmcocXVlcnkpKTtcbiAgICAgICAgLy9cdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzZWFyY2hQYXJhbScsIFN0cmluZyhxdWVyeSkpO1xuICAgICAgICAvL1x0ZGlzcGF0Y2goc2V0U2VhcmNoUGFyYW1zQWN0aW9uQ3JlYXRvcihOdW1iZXIocGFnZSksIFN0cmluZyhxdWVyeSkpKTtcbiAgICB9LCBbXSk7XG4gIFxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgcGFnZSA9IHNlYXJjaFBhcmFtLmdldCgncGFnZScpO1xuICAgICAgICBjb25zdCBxdWVyeSA9IHNlYXJjaFBhcmFtLmdldCgncXVlcnknKVxuICAgICAgICBpZihxdWVyeSE9dW5kZWZpbmVkKSB7XG5cbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic2VhcmNoUGFyYW1cIiwgU3RyaW5nKHF1ZXJ5KSlcbiAgICAgICAgfVxuICAgICAgICBpZihwYWdlICYmIHF1ZXJ5KSB7XG4gICAgICAgICAgICBkaXNwYXRjaChzZXRTZWFyY2hQYXJhbXNBY3Rpb25DcmVhdG9yKCBOdW1iZXIocGFnZSksIFN0cmluZyhxdWVyeSkpKVxuICAgICAgICB9XG5cblxuICAgIH0sIFtyb3V0ZXJdKTtcbiAgIFxuXG4gICAgY29uc3QgaGFuZGxlSW5wdXQgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHNldFF1ZXJ5QWN0aW9uQ3JlYXRvcihldmVudC50YXJnZXQudmFsdWUpKTtcbiAgICB9O1xuICAgIGNvbnN0IHR5cGVkVmFsdWUgPSB1c2VTZWxlY3Rvcih0eXBlZFZhbHVlU2VsZWN0b3IpXG4gICAgY29uc3QgaGFuZGxlU2VhcmNoID0gKCkgPT4ge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc2VhcmNoUGFyYW0nLCBTdHJpbmcodHlwZWRWYWx1ZSkpO1xuICAgICAgICBkaXNwYXRjaChzZXROZXdTZWFyY2hWYWx1ZUFjdGlvbkNyZWF0b3IoKSlcblxuICAgICBcbiAgICB9O1xuICAgXG4gICAgcmV0dXJuIHsgZ2V0Q3VycmVudFBhcmFtcywgc2V0UGFnZSwgaGFuZGxlSW5wdXQsIGhhbmRsZVNlYXJjaCB9O1xufTtcbmV4cG9ydCBkZWZhdWx0IHVzZVVSTDtcblxuXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwicGFyYW1zU2VsZWN0b3IiLCJ1c2VBcHBEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic2V0UXVlcnlBY3Rpb25DcmVhdG9yIiwic2V0U2VhcmNoUGFyYW1zQWN0aW9uQ3JlYXRvciIsInNldE5ld1NlYXJjaFZhbHVlQWN0aW9uQ3JlYXRvciIsInR5cGVkVmFsdWVTZWxlY3RvciIsInVzZVJvdXRlciIsInVzZVNlYXJjaFBhcmFtcyIsInVzZVVSTCIsImRpc3BhdGNoIiwicm91dGVyIiwic2VhcmNoUGFyYW0iLCJwYXJhbXMiLCJnZXRDdXJyZW50UGFyYW1zIiwic2V0UGFnZSIsInBhZ2UiLCJxdWVyeSIsInF1ZXJ5T2JqIiwiU3RyaW5nIiwidW5kZWZpbmVkIiwiT2JqZWN0IiwiYXNzaWduIiwicXVlcnlTdHJpbmciLCJVUkxTZWFyY2hQYXJhbXMiLCJ0b1N0cmluZyIsIm5ld1VybCIsImNvbnNvbGUiLCJsb2ciLCJwdXNoIiwiSlNPTiIsInN0cmluZ2lmeSIsInN0b3JlZFBhcmFtIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImdldCIsInNldEl0ZW0iLCJOdW1iZXIiLCJoYW5kbGVJbnB1dCIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJ0eXBlZFZhbHVlIiwiaGFuZGxlU2VhcmNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/hooks/useURL.ts\n"));

/***/ })

});