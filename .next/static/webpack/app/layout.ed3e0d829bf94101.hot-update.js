"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/hooks/useURL.ts":
/*!*****************************!*\
  !*** ./src/hooks/useURL.ts ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _redux_selectors_getSearchParams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../redux/selectors/getSearchParams */ \"(app-pages-browser)/./src/redux/selectors/getSearchParams.ts\");\n/* harmony import */ var _redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./redux */ \"(app-pages-browser)/./src/hooks/redux.ts\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _redux_action_creators_setSearchParamsActionCreator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/action-creators/setSearchParamsActionCreator */ \"(app-pages-browser)/./src/redux/action-creators/setSearchParamsActionCreator.ts\");\n/* harmony import */ var _redux_action_creators_setNewSearchValueActionCreator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/action-creators/setNewSearchValueActionCreator */ \"(app-pages-browser)/./src/redux/action-creators/setNewSearchValueActionCreator.ts\");\n/* harmony import */ var _redux_selectors_typedValueSelector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../redux/selectors/typedValueSelector */ \"(app-pages-browser)/./src/redux/selectors/typedValueSelector.ts\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\n\n\n\nconst useURL = ()=>{\n    const dispatch = (0,_redux__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch)();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    const params = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(_redux_selectors_getSearchParams__WEBPACK_IMPORTED_MODULE_1__.paramsSelector);\n    const getCurrentParams = ()=>{};\n    const setPage = (page, query)=>{\n        const queryObj = {\n            page: String(page)\n        };\n        if (query) {\n            if (query != undefined) {\n                Object.assign(queryObj, {\n                    query: query\n                });\n            }\n        }\n        //  const handleNavigation = () => {\n        //      router.push('/new-page');\n        //  };\n        //     router.push()\n        //  const handleNavigation = () => {\n        // Construct query parameters as a URLSearchParams object or manually\n        //  const queryObj = {\n        //     page: params.offset,\n        //        query: params.query || ''\n        //  };\n        // Convert query object to query string\n        const queryString = new URLSearchParams(queryObj).toString();\n        // Construct the new URL\n        // const newUrl = `/?${queryString}`;\n        const newUrl = \"/?page=\".concat(String(page)).concat(query ? \"query=\".concat(query) : \"\");\n        // Push the new URL\n        console.log(\"NEW\", newUrl);\n        router.push(newUrl);\n    //};\n    /*\n   router.push({\n       pathname: router.pathname,\n            query: queryObj,\n            \n            });\n*/ };\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        console.log(\"PAR\", JSON.stringify(params));\n        const storedParam = localStorage.getItem(\"searchParam\");\n        console.log(storedParam);\n        if (storedParam) {\n            //  dispatch(setStoredInLocalStorageActionCreator(storedParam))\n            dispatch((0,_redux_action_creators_setSearchParamsActionCreator__WEBPACK_IMPORTED_MODULE_3__.setQueryActionCreator)(storedParam));\n        }\n    //\tconst [page, query] = getCurrentParams();\n    //\tsetPage(Number(page), String(query));\n    //\tlocalStorage.setItem('searchParam', String(query));\n    //\tdispatch(setSearchParamsActionCreator(Number(page), String(query)));\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        console.log(\"NEX\", params);\n    }, [\n        params\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n    // const { page, query } = router.query;\n    //  console.log(\"QUERYYY\", query)\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{}, [\n        router\n    ]);\n    /*\n\n    useEffect(() => {\n        if (router.isReady) {\n            const {query, page} = router.query;\n            if(query!=undefined) {\n\n                localStorage.setItem(\"searchParam\", String(query))\n            }\n            if(page && query) {\n                dispatch(setSearchParamsActionCreator( Number(page), String(query)))\n            }\n         \n\n            console.log(\"Current\", page, query)\n        }\n    }, [router.isReady, router.query]);\n*/ const handleInput = (event)=>{\n        dispatch((0,_redux_action_creators_setSearchParamsActionCreator__WEBPACK_IMPORTED_MODULE_3__.setQueryActionCreator)(event.target.value));\n    };\n    const typedValue = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(_redux_selectors_typedValueSelector__WEBPACK_IMPORTED_MODULE_5__.typedValueSelector);\n    const handleSearch = ()=>{\n        localStorage.setItem(\"searchParam\", String(typedValue));\n        dispatch((0,_redux_action_creators_setNewSearchValueActionCreator__WEBPACK_IMPORTED_MODULE_4__.setNewSearchValueActionCreator)());\n    /*\n        router.push({\n            pathname: router.pathname,\n\n            query: {\n                page:1,\n                query: typedValue\n            }\n        })\n            */ };\n    const handleOpen = ()=>{};\n    return {\n        getCurrentParams,\n        setPage,\n        handleInput,\n        handleSearch\n    };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (useURL);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9ob29rcy91c2VVUkwudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs2REFJa0M7QUFFa0M7QUFFM0I7QUFDQztBQUVvRDtBQU9XO0FBQzlCO0FBR2Q7QUFDN0QsTUFBTVEsU0FBUztJQUNYLE1BQU1DLFdBQVdQLHNEQUFjQTtJQUMvQixNQUFNUSxTQUFTSCwwREFBU0E7SUFDeEIsTUFBTUksU0FBU1Isd0RBQVdBLENBQUNGLDRFQUFjQTtJQUV6QyxNQUFNVyxtQkFBbUIsS0FFekI7SUFFQSxNQUFNQyxVQUFVLENBQUNDLE1BQWNDO1FBSTNCLE1BQU1DLFdBQVc7WUFDYkYsTUFBTUcsT0FBT0g7UUFDakI7UUFDQSxJQUFJQyxPQUFPO1lBQ1AsSUFBR0EsU0FBT0csV0FBVztnQkFFakJDLE9BQU9DLE1BQU0sQ0FBQ0osVUFBVTtvQkFBRUQsT0FBT0E7Z0JBQU07WUFDM0M7UUFFSjtRQUVGLG9DQUFvQztRQUNwQyxpQ0FBaUM7UUFDakMsTUFBTTtRQUVULG9CQUFvQjtRQUV0QixvQ0FBb0M7UUFDakMscUVBQXFFO1FBQ3ZFLHNCQUFzQjtRQUNyQiwyQkFBMkI7UUFDOUIsbUNBQW1DO1FBQ2pDLE1BQU07UUFFSix1Q0FBdUM7UUFDdkMsTUFBTU0sY0FBYyxJQUFJQyxnQkFBZ0JOLFVBQVVPLFFBQVE7UUFFMUQsd0JBQXdCO1FBQ3pCLHFDQUFxQztRQUN4QyxNQUFNQyxTQUFVLFVBQXlCVCxPQUFmRSxPQUFPSCxPQUFzQyxPQUE5QkMsUUFBUSxTQUFlLE9BQU5BLFNBQVc7UUFDakUsbUJBQW1CO1FBQ25CVSxRQUFRQyxHQUFHLENBQUMsT0FBT0Y7UUFDbkJkLE9BQU9pQixJQUFJLENBQUNIO0lBQ2hCLElBQUk7SUFFRDs7Ozs7O0FBTUgsR0FFSTtJQUNBeEIsZ0RBQVNBLENBQUM7UUFFTnlCLFFBQVFDLEdBQUcsQ0FBQyxPQUFPRSxLQUFLQyxTQUFTLENBQUNsQjtRQUNsQyxNQUFNbUIsY0FBY0MsYUFBYUMsT0FBTyxDQUFDO1FBQ3pDUCxRQUFRQyxHQUFHLENBQUNJO1FBQ1osSUFBR0EsYUFBYTtZQUNkLCtEQUErRDtZQUM3RHJCLFNBQVNMLDBHQUFxQkEsQ0FBQzBCO1FBQ25DO0lBQ0EsNENBQTRDO0lBRTVDLHdDQUF3QztJQUN4QyxzREFBc0Q7SUFDdEQsdUVBQXVFO0lBQzNFLEdBQUcsRUFBRTtJQUNUOUIsZ0RBQVNBLENBQUM7UUFDVnlCLFFBQVFDLEdBQUcsQ0FBQyxPQUFPZjtJQUNuQixHQUFHO1FBQUNBO0tBQU87SUFDUFgsZ0RBQVNBLENBQUM7SUFDUCx3Q0FBd0M7SUFDekMsaUNBQWlDO0lBRW5DLEdBQUcsRUFBRTtJQUtMQSxnREFBU0EsQ0FBQyxLQUlWLEdBQUc7UUFBQ1U7S0FBTztJQUNYOzs7Ozs7Ozs7Ozs7Ozs7OztBQWlCSixHQUVJLE1BQU11QixjQUFjLENBQUNDO1FBQ2pCekIsU0FBU0wsMEdBQXFCQSxDQUFDOEIsTUFBTUMsTUFBTSxDQUFDQyxLQUFLO0lBQ3JEO0lBQ0EsTUFBTUMsYUFBYWxDLHdEQUFXQSxDQUFDRyxtRkFBa0JBO0lBQ2pELE1BQU1nQyxlQUFlO1FBQ2pCUCxhQUFhUSxPQUFPLENBQUMsZUFBZXRCLE9BQU9vQjtRQUMzQzVCLFNBQVNKLHFIQUE4QkE7SUFFL0M7Ozs7Ozs7OztZQVNZLEdBQ1I7SUFDQSxNQUFNbUMsYUFBYSxLQUVuQjtJQUNBLE9BQU87UUFBRTVCO1FBQWtCQztRQUFTb0I7UUFBYUs7SUFBYTtBQUNsRTtBQUNBLCtEQUFlOUIsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvaG9va3MvdXNlVVJMLnRzPzQxMTkiXSwic291cmNlc0NvbnRlbnQiOlsiIFxuXG5cblwidXNlIGNsaWVudFwiXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IHBhcmFtc1NlbGVjdG9yIH0gZnJvbSAnLi4vcmVkdXgvc2VsZWN0b3JzL2dldFNlYXJjaFBhcmFtcyc7XG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgdXNlQXBwRGlzcGF0Y2ggfSBmcm9tICcuL3JlZHV4JztcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgeyBzZXRRdWVyeUFjdGlvbkNyZWF0b3IgfSBmcm9tICcuLi9yZWR1eC9hY3Rpb24tY3JlYXRvcnMvc2V0U2VhcmNoUGFyYW1zQWN0aW9uQ3JlYXRvcic7XG5pbXBvcnQgeyBzZXRTZWFyY2hQYXJhbXNBY3Rpb25DcmVhdG9yIH0gZnJvbSAnLi4vcmVkdXgvYWN0aW9uLWNyZWF0b3JzL3NldFNlYXJjaFBhcmFtc0FjdGlvbkNyZWF0b3InO1xuaW1wb3J0IHsgc2V0TG9hZGluZ0FjdGlvbkNyZWF0b3IgfSBmcm9tICcuLi9yZWR1eC9hY3Rpb24tY3JlYXRvcnMvc2V0SXNMb2FkaW5nJztcbmltcG9ydCB7IHVzZUxhenlTZWFyY2hVc2Vyc1F1ZXJ5IH0gZnJvbSAnLi4vcmVkdXgvc2xpY2VzL3F1ZXJ5U2xpY2UnO1xuaW1wb3J0IHsgc2V0VXNlcnNBY3Rpb25DcmVhdG9yIH0gZnJvbSAnLi4vcmVkdXgvYWN0aW9uLWNyZWF0b3JzL3NldFVzZXJzQWN0aW9uQ3JlYXRvcic7XG5cblxuaW1wb3J0IHsgc2V0TmV3U2VhcmNoVmFsdWVBY3Rpb25DcmVhdG9yIH0gZnJvbSAnLi4vcmVkdXgvYWN0aW9uLWNyZWF0b3JzL3NldE5ld1NlYXJjaFZhbHVlQWN0aW9uQ3JlYXRvcic7XG5pbXBvcnQgeyB0eXBlZFZhbHVlU2VsZWN0b3IgfSBmcm9tICcuLi9yZWR1eC9zZWxlY3RvcnMvdHlwZWRWYWx1ZVNlbGVjdG9yJztcbmltcG9ydCB7IHNldFN0b3JlZEluTG9jYWxTdG9yYWdlQWN0aW9uQ3JlYXRvciB9IGZyb20gJy4uL3JlZHV4L2FjdGlvbi1jcmVhdG9ycy9zZXRTdG9yZWRJbkxvY2FsU3RvcmFnZVF1ZXJ5JztcblxuaW1wb3J0IHsgdXNlUm91dGVyLCB1c2VTZWFyY2hQYXJhbXMgfSBmcm9tICduZXh0L25hdmlnYXRpb24nOyAgXG5jb25zdCB1c2VVUkwgPSAoKSA9PiB7XG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VBcHBEaXNwYXRjaCgpO1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gICAgY29uc3QgcGFyYW1zID0gdXNlU2VsZWN0b3IocGFyYW1zU2VsZWN0b3IpO1xuICAgIFxuICAgIGNvbnN0IGdldEN1cnJlbnRQYXJhbXMgPSAoKSA9PiB7XG5cbiAgICB9O1xuXG4gICAgY29uc3Qgc2V0UGFnZSA9IChwYWdlOiBudW1iZXIsIHF1ZXJ5OiBzdHJpbmcpID0+IHtcblxuXG5cbiAgICAgICAgY29uc3QgcXVlcnlPYmogPSB7XG4gICAgICAgICAgICBwYWdlOiBTdHJpbmcocGFnZSlcbiAgICAgICAgfVxuICAgICAgICBpZiAocXVlcnkpIHtcbiAgICAgICAgICAgIGlmKHF1ZXJ5IT11bmRlZmluZWQpIHtcblxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnlPYmosIHsgcXVlcnk6IHF1ZXJ5IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH1cblxuICAgICAgLy8gIGNvbnN0IGhhbmRsZU5hdmlnYXRpb24gPSAoKSA9PiB7XG4gICAgICAvLyAgICAgIHJvdXRlci5wdXNoKCcvbmV3LXBhZ2UnKTtcbiAgICAgIC8vICB9O1xuICAgIFxuICAgLy8gICAgIHJvdXRlci5wdXNoKClcblxuIC8vICBjb25zdCBoYW5kbGVOYXZpZ2F0aW9uID0gKCkgPT4ge1xuICAgIC8vIENvbnN0cnVjdCBxdWVyeSBwYXJhbWV0ZXJzIGFzIGEgVVJMU2VhcmNoUGFyYW1zIG9iamVjdCBvciBtYW51YWxseVxuICAvLyAgY29uc3QgcXVlcnlPYmogPSB7XG4gICAvLyAgICAgcGFnZTogcGFyYW1zLm9mZnNldCxcbi8vICAgICAgICBxdWVyeTogcGFyYW1zLnF1ZXJ5IHx8ICcnXG4gIC8vICB9O1xuXG4gICAgLy8gQ29udmVydCBxdWVyeSBvYmplY3QgdG8gcXVlcnkgc3RyaW5nXG4gICAgY29uc3QgcXVlcnlTdHJpbmcgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHF1ZXJ5T2JqKS50b1N0cmluZygpO1xuXG4gICAgLy8gQ29uc3RydWN0IHRoZSBuZXcgVVJMXG4gICAvLyBjb25zdCBuZXdVcmwgPSBgLz8ke3F1ZXJ5U3RyaW5nfWA7XG5jb25zdCBuZXdVcmwgID0gYC8/cGFnZT0ke1N0cmluZyhwYWdlKX0ke3F1ZXJ5ID8gYHF1ZXJ5PSR7cXVlcnl9YCA6IGBgfWBcbiAgICAvLyBQdXNoIHRoZSBuZXcgVVJMXG4gICAgY29uc29sZS5sb2coXCJORVdcIiwgbmV3VXJsKVxuICAgIHJvdXRlci5wdXNoKG5ld1VybCk7XG4vL307XG5cbiAgIC8qXG4gICByb3V0ZXIucHVzaCh7XG4gICAgICAgcGF0aG5hbWU6IHJvdXRlci5wYXRobmFtZSxcbiAgICAgICAgICAgIHF1ZXJ5OiBxdWVyeU9iaixcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgfSk7XG4qL1xuXG4gICAgfTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUEFSXCIsIEpTT04uc3RyaW5naWZ5KHBhcmFtcykpXG4gICAgICAgIGNvbnN0IHN0b3JlZFBhcmFtID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzZWFyY2hQYXJhbVwiKVxuICAgICAgICBjb25zb2xlLmxvZyhzdG9yZWRQYXJhbSlcbiAgICAgICAgaWYoc3RvcmVkUGFyYW0pIHtcbiAgICAgICAgICAvLyAgZGlzcGF0Y2goc2V0U3RvcmVkSW5Mb2NhbFN0b3JhZ2VBY3Rpb25DcmVhdG9yKHN0b3JlZFBhcmFtKSlcbiAgICAgICAgICAgIGRpc3BhdGNoKHNldFF1ZXJ5QWN0aW9uQ3JlYXRvcihzdG9yZWRQYXJhbSkpXG4gICAgICAgIH1cbiAgICAgICAgLy9cdGNvbnN0IFtwYWdlLCBxdWVyeV0gPSBnZXRDdXJyZW50UGFyYW1zKCk7XG5cbiAgICAgICAgLy9cdHNldFBhZ2UoTnVtYmVyKHBhZ2UpLCBTdHJpbmcocXVlcnkpKTtcbiAgICAgICAgLy9cdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzZWFyY2hQYXJhbScsIFN0cmluZyhxdWVyeSkpO1xuICAgICAgICAvL1x0ZGlzcGF0Y2goc2V0U2VhcmNoUGFyYW1zQWN0aW9uQ3JlYXRvcihOdW1iZXIocGFnZSksIFN0cmluZyhxdWVyeSkpKTtcbiAgICB9LCBbXSk7XG51c2VFZmZlY3QoKCk9PiB7XG5jb25zb2xlLmxvZyhcIk5FWFwiLCBwYXJhbXMpXG59LCBbcGFyYW1zXSlcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgIC8vIGNvbnN0IHsgcGFnZSwgcXVlcnkgfSA9IHJvdXRlci5xdWVyeTtcbiAgICAgIC8vICBjb25zb2xlLmxvZyhcIlFVRVJZWVlcIiwgcXVlcnkpXG4gICAgIFxuICAgIH0sIFtdKVxuXG5cblxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgIFxuICAgIH0sIFtyb3V0ZXJdKTtcbiAgICAvKlxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKHJvdXRlci5pc1JlYWR5KSB7XG4gICAgICAgICAgICBjb25zdCB7cXVlcnksIHBhZ2V9ID0gcm91dGVyLnF1ZXJ5O1xuICAgICAgICAgICAgaWYocXVlcnkhPXVuZGVmaW5lZCkge1xuXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzZWFyY2hQYXJhbVwiLCBTdHJpbmcocXVlcnkpKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYocGFnZSAmJiBxdWVyeSkge1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHNldFNlYXJjaFBhcmFtc0FjdGlvbkNyZWF0b3IoIE51bWJlcihwYWdlKSwgU3RyaW5nKHF1ZXJ5KSkpXG4gICAgICAgICAgICB9XG4gICAgICAgICBcblxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDdXJyZW50XCIsIHBhZ2UsIHF1ZXJ5KVxuICAgICAgICB9XG4gICAgfSwgW3JvdXRlci5pc1JlYWR5LCByb3V0ZXIucXVlcnldKTtcbiovXG4gICAgIFxuICAgIGNvbnN0IGhhbmRsZUlucHV0ID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgICAgICBkaXNwYXRjaChzZXRRdWVyeUFjdGlvbkNyZWF0b3IoZXZlbnQudGFyZ2V0LnZhbHVlKSk7XG4gICAgfTtcbiAgICBjb25zdCB0eXBlZFZhbHVlID0gdXNlU2VsZWN0b3IodHlwZWRWYWx1ZVNlbGVjdG9yKVxuICAgIGNvbnN0IGhhbmRsZVNlYXJjaCA9ICgpID0+IHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3NlYXJjaFBhcmFtJywgU3RyaW5nKHR5cGVkVmFsdWUpKTtcbiAgICAgICAgZGlzcGF0Y2goc2V0TmV3U2VhcmNoVmFsdWVBY3Rpb25DcmVhdG9yKCkpXG5cbi8qXG4gICAgICAgIHJvdXRlci5wdXNoKHtcbiAgICAgICAgICAgIHBhdGhuYW1lOiByb3V0ZXIucGF0aG5hbWUsXG5cbiAgICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICAgICAgcGFnZToxLFxuICAgICAgICAgICAgICAgIHF1ZXJ5OiB0eXBlZFZhbHVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgICAgICAqL1xuICAgIH07XG4gICAgY29uc3QgaGFuZGxlT3BlbiA9ICgpID0+IHtcblxuICAgIH1cbiAgICByZXR1cm4geyBnZXRDdXJyZW50UGFyYW1zLCBzZXRQYWdlLCBoYW5kbGVJbnB1dCwgaGFuZGxlU2VhcmNoIH07XG59O1xuZXhwb3J0IGRlZmF1bHQgdXNlVVJMO1xuXG5cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJwYXJhbXNTZWxlY3RvciIsInVzZUFwcERpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJzZXRRdWVyeUFjdGlvbkNyZWF0b3IiLCJzZXROZXdTZWFyY2hWYWx1ZUFjdGlvbkNyZWF0b3IiLCJ0eXBlZFZhbHVlU2VsZWN0b3IiLCJ1c2VSb3V0ZXIiLCJ1c2VVUkwiLCJkaXNwYXRjaCIsInJvdXRlciIsInBhcmFtcyIsImdldEN1cnJlbnRQYXJhbXMiLCJzZXRQYWdlIiwicGFnZSIsInF1ZXJ5IiwicXVlcnlPYmoiLCJTdHJpbmciLCJ1bmRlZmluZWQiLCJPYmplY3QiLCJhc3NpZ24iLCJxdWVyeVN0cmluZyIsIlVSTFNlYXJjaFBhcmFtcyIsInRvU3RyaW5nIiwibmV3VXJsIiwiY29uc29sZSIsImxvZyIsInB1c2giLCJKU09OIiwic3RyaW5naWZ5Iiwic3RvcmVkUGFyYW0iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiaGFuZGxlSW5wdXQiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwidHlwZWRWYWx1ZSIsImhhbmRsZVNlYXJjaCIsInNldEl0ZW0iLCJoYW5kbGVPcGVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/hooks/useURL.ts\n"));

/***/ })

});