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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _redux_selectors_getSearchParams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../redux/selectors/getSearchParams */ \"(app-pages-browser)/./src/redux/selectors/getSearchParams.ts\");\n/* harmony import */ var _redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./redux */ \"(app-pages-browser)/./src/hooks/redux.ts\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _redux_action_creators_setSearchParamsActionCreator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/action-creators/setSearchParamsActionCreator */ \"(app-pages-browser)/./src/redux/action-creators/setSearchParamsActionCreator.ts\");\n/* harmony import */ var _redux_action_creators_setNewSearchValueActionCreator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/action-creators/setNewSearchValueActionCreator */ \"(app-pages-browser)/./src/redux/action-creators/setNewSearchValueActionCreator.ts\");\n/* harmony import */ var _redux_selectors_typedValueSelector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../redux/selectors/typedValueSelector */ \"(app-pages-browser)/./src/redux/selectors/typedValueSelector.ts\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\n\n\n\nconst useURL = ()=>{\n    const dispatch = (0,_redux__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch)();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    const searchParam = (0,next_navigation__WEBPACK_IMPORTED_MODULE_6__.useSearchParams)();\n    const params = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(_redux_selectors_getSearchParams__WEBPACK_IMPORTED_MODULE_1__.paramsSelector);\n    const getCurrentParams = ()=>{};\n    const setPage = (page, query)=>{\n        const queryObj = {\n            page: String(page)\n        };\n        if (query) {\n            if (query != undefined) {\n                Object.assign(queryObj, {\n                    query: query\n                });\n            }\n        }\n        //  const handleNavigation = () => {\n        //      router.push('/new-page');\n        //  };\n        //     router.push()\n        //  const handleNavigation = () => {\n        // Construct query parameters as a URLSearchParams object or manually\n        //  const queryObj = {\n        //     page: params.offset,\n        //        query: params.query || ''\n        //  };\n        // Convert query object to query string\n        const queryString = new URLSearchParams(queryObj).toString();\n        // Construct the new URL\n        // const newUrl = `/?${queryString}`;\n        const newUrl = \"/?page=\".concat(String(page)).concat(query ? \"query=\".concat(query) : \"\");\n        // Push the new URL\n        console.log(\"NEW\", newUrl);\n        router.push(newUrl);\n    //};\n    /*\n   router.push({\n       pathname: router.pathname,\n            query: queryObj,\n            \n            });\n*/ };\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        console.log(\"PAR\", JSON.stringify(params));\n        const storedParam = localStorage.getItem(\"searchParam\");\n        console.log(storedParam);\n        if (storedParam) {\n            //  dispatch(setStoredInLocalStorageActionCreator(storedParam))\n            dispatch((0,_redux_action_creators_setSearchParamsActionCreator__WEBPACK_IMPORTED_MODULE_3__.setQueryActionCreator)(storedParam));\n        }\n    //\tconst [page, query] = getCurrentParams();\n    //\tsetPage(Number(page), String(query));\n    //\tlocalStorage.setItem('searchParam', String(query));\n    //\tdispatch(setSearchParamsActionCreator(Number(page), String(query)));\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        console.log(\"NEX\", params);\n    }, [\n        params\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n    // const { page, query } = router.query;\n    //  console.log(\"QUERYYY\", query)\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        const ur = searchParam.get(\"user\");\n    }, [\n        router\n    ]);\n    /*\n\n    useEffect(() => {\n        if (router.isReady) {\n            const {query, page} = router.query;\n            if(query!=undefined) {\n\n                localStorage.setItem(\"searchParam\", String(query))\n            }\n            if(page && query) {\n                dispatch(setSearchParamsActionCreator( Number(page), String(query)))\n            }\n         \n\n            console.log(\"Current\", page, query)\n        }\n    }, [router.isReady, router.query]);\n*/ const handleInput = (event)=>{\n        dispatch((0,_redux_action_creators_setSearchParamsActionCreator__WEBPACK_IMPORTED_MODULE_3__.setQueryActionCreator)(event.target.value));\n    };\n    const typedValue = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(_redux_selectors_typedValueSelector__WEBPACK_IMPORTED_MODULE_5__.typedValueSelector);\n    const handleSearch = ()=>{\n        localStorage.setItem(\"searchParam\", String(typedValue));\n        dispatch((0,_redux_action_creators_setNewSearchValueActionCreator__WEBPACK_IMPORTED_MODULE_4__.setNewSearchValueActionCreator)());\n    /*\n        router.push({\n            pathname: router.pathname,\n\n            query: {\n                page:1,\n                query: typedValue\n            }\n        })\n            */ };\n    const handleOpen = ()=>{};\n    return {\n        getCurrentParams,\n        setPage,\n        handleInput,\n        handleSearch\n    };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (useURL);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9ob29rcy91c2VVUkwudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs2REFJa0M7QUFFa0M7QUFFM0I7QUFDQztBQUVvRDtBQU9XO0FBQzlCO0FBR2Q7QUFDN0QsTUFBTVMsU0FBUztJQUNYLE1BQU1DLFdBQVdSLHNEQUFjQTtJQUMvQixNQUFNUyxTQUFTSiwwREFBU0E7SUFDeEIsTUFBTUssY0FBY0osZ0VBQWVBO0lBQ25DLE1BQU1LLFNBQVNWLHdEQUFXQSxDQUFDRiw0RUFBY0E7SUFFekMsTUFBTWEsbUJBQW1CLEtBRXpCO0lBRUEsTUFBTUMsVUFBVSxDQUFDQyxNQUFjQztRQUkzQixNQUFNQyxXQUFXO1lBQ2JGLE1BQU1HLE9BQU9IO1FBQ2pCO1FBQ0EsSUFBSUMsT0FBTztZQUNQLElBQUdBLFNBQU9HLFdBQVc7Z0JBRWpCQyxPQUFPQyxNQUFNLENBQUNKLFVBQVU7b0JBQUVELE9BQU9BO2dCQUFNO1lBQzNDO1FBRUo7UUFFRixvQ0FBb0M7UUFDcEMsaUNBQWlDO1FBQ2pDLE1BQU07UUFFVCxvQkFBb0I7UUFFdEIsb0NBQW9DO1FBQ2pDLHFFQUFxRTtRQUN2RSxzQkFBc0I7UUFDckIsMkJBQTJCO1FBQzlCLG1DQUFtQztRQUNqQyxNQUFNO1FBRUosdUNBQXVDO1FBQ3ZDLE1BQU1NLGNBQWMsSUFBSUMsZ0JBQWdCTixVQUFVTyxRQUFRO1FBRTFELHdCQUF3QjtRQUN6QixxQ0FBcUM7UUFDeEMsTUFBTUMsU0FBVSxVQUF5QlQsT0FBZkUsT0FBT0gsT0FBc0MsT0FBOUJDLFFBQVEsU0FBZSxPQUFOQSxTQUFXO1FBQ2pFLG1CQUFtQjtRQUNuQlUsUUFBUUMsR0FBRyxDQUFDLE9BQU9GO1FBQ25CZixPQUFPa0IsSUFBSSxDQUFDSDtJQUNoQixJQUFJO0lBRUQ7Ozs7OztBQU1ILEdBRUk7SUFDQTFCLGdEQUFTQSxDQUFDO1FBRU4yQixRQUFRQyxHQUFHLENBQUMsT0FBT0UsS0FBS0MsU0FBUyxDQUFDbEI7UUFDbEMsTUFBTW1CLGNBQWNDLGFBQWFDLE9BQU8sQ0FBQztRQUN6Q1AsUUFBUUMsR0FBRyxDQUFDSTtRQUNaLElBQUdBLGFBQWE7WUFDZCwrREFBK0Q7WUFDN0R0QixTQUFTTiwwR0FBcUJBLENBQUM0QjtRQUNuQztJQUNBLDRDQUE0QztJQUU1Qyx3Q0FBd0M7SUFDeEMsc0RBQXNEO0lBQ3RELHVFQUF1RTtJQUMzRSxHQUFHLEVBQUU7SUFDVGhDLGdEQUFTQSxDQUFDO1FBQ1YyQixRQUFRQyxHQUFHLENBQUMsT0FBT2Y7SUFDbkIsR0FBRztRQUFDQTtLQUFPO0lBQ1BiLGdEQUFTQSxDQUFDO0lBQ1Asd0NBQXdDO0lBQ3pDLGlDQUFpQztJQUVuQyxHQUFHLEVBQUU7SUFLTEEsZ0RBQVNBLENBQUM7UUFDTixNQUFNbUMsS0FBS3ZCLFlBQVl3QixHQUFHLENBQUM7SUFHL0IsR0FBRztRQUFDekI7S0FBTztJQUNYOzs7Ozs7Ozs7Ozs7Ozs7OztBQWlCSixHQUVJLE1BQU0wQixjQUFjLENBQUNDO1FBQ2pCNUIsU0FBU04sMEdBQXFCQSxDQUFDa0MsTUFBTUMsTUFBTSxDQUFDQyxLQUFLO0lBQ3JEO0lBQ0EsTUFBTUMsYUFBYXRDLHdEQUFXQSxDQUFDRyxtRkFBa0JBO0lBQ2pELE1BQU1vQyxlQUFlO1FBQ2pCVCxhQUFhVSxPQUFPLENBQUMsZUFBZXhCLE9BQU9zQjtRQUMzQy9CLFNBQVNMLHFIQUE4QkE7SUFFL0M7Ozs7Ozs7OztZQVNZLEdBQ1I7SUFDQSxNQUFNdUMsYUFBYSxLQUVuQjtJQUNBLE9BQU87UUFBRTlCO1FBQWtCQztRQUFTc0I7UUFBYUs7SUFBYTtBQUNsRTtBQUNBLCtEQUFlakMsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvaG9va3MvdXNlVVJMLnRzPzQxMTkiXSwic291cmNlc0NvbnRlbnQiOlsiIFxuXG5cblwidXNlIGNsaWVudFwiXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IHBhcmFtc1NlbGVjdG9yIH0gZnJvbSAnLi4vcmVkdXgvc2VsZWN0b3JzL2dldFNlYXJjaFBhcmFtcyc7XG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgdXNlQXBwRGlzcGF0Y2ggfSBmcm9tICcuL3JlZHV4JztcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgeyBzZXRRdWVyeUFjdGlvbkNyZWF0b3IgfSBmcm9tICcuLi9yZWR1eC9hY3Rpb24tY3JlYXRvcnMvc2V0U2VhcmNoUGFyYW1zQWN0aW9uQ3JlYXRvcic7XG5pbXBvcnQgeyBzZXRTZWFyY2hQYXJhbXNBY3Rpb25DcmVhdG9yIH0gZnJvbSAnLi4vcmVkdXgvYWN0aW9uLWNyZWF0b3JzL3NldFNlYXJjaFBhcmFtc0FjdGlvbkNyZWF0b3InO1xuaW1wb3J0IHsgc2V0TG9hZGluZ0FjdGlvbkNyZWF0b3IgfSBmcm9tICcuLi9yZWR1eC9hY3Rpb24tY3JlYXRvcnMvc2V0SXNMb2FkaW5nJztcbmltcG9ydCB7IHVzZUxhenlTZWFyY2hVc2Vyc1F1ZXJ5IH0gZnJvbSAnLi4vcmVkdXgvc2xpY2VzL3F1ZXJ5U2xpY2UnO1xuaW1wb3J0IHsgc2V0VXNlcnNBY3Rpb25DcmVhdG9yIH0gZnJvbSAnLi4vcmVkdXgvYWN0aW9uLWNyZWF0b3JzL3NldFVzZXJzQWN0aW9uQ3JlYXRvcic7XG5cblxuaW1wb3J0IHsgc2V0TmV3U2VhcmNoVmFsdWVBY3Rpb25DcmVhdG9yIH0gZnJvbSAnLi4vcmVkdXgvYWN0aW9uLWNyZWF0b3JzL3NldE5ld1NlYXJjaFZhbHVlQWN0aW9uQ3JlYXRvcic7XG5pbXBvcnQgeyB0eXBlZFZhbHVlU2VsZWN0b3IgfSBmcm9tICcuLi9yZWR1eC9zZWxlY3RvcnMvdHlwZWRWYWx1ZVNlbGVjdG9yJztcbmltcG9ydCB7IHNldFN0b3JlZEluTG9jYWxTdG9yYWdlQWN0aW9uQ3JlYXRvciB9IGZyb20gJy4uL3JlZHV4L2FjdGlvbi1jcmVhdG9ycy9zZXRTdG9yZWRJbkxvY2FsU3RvcmFnZVF1ZXJ5JztcblxuaW1wb3J0IHsgdXNlUm91dGVyLCB1c2VTZWFyY2hQYXJhbXMgfSBmcm9tICduZXh0L25hdmlnYXRpb24nOyAgXG5jb25zdCB1c2VVUkwgPSAoKSA9PiB7XG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VBcHBEaXNwYXRjaCgpO1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gICAgY29uc3Qgc2VhcmNoUGFyYW0gPSB1c2VTZWFyY2hQYXJhbXMoKVxuICAgIGNvbnN0IHBhcmFtcyA9IHVzZVNlbGVjdG9yKHBhcmFtc1NlbGVjdG9yKTtcbiAgICBcbiAgICBjb25zdCBnZXRDdXJyZW50UGFyYW1zID0gKCkgPT4ge1xuXG4gICAgfTtcblxuICAgIGNvbnN0IHNldFBhZ2UgPSAocGFnZTogbnVtYmVyLCBxdWVyeTogc3RyaW5nKSA9PiB7XG5cblxuXG4gICAgICAgIGNvbnN0IHF1ZXJ5T2JqID0ge1xuICAgICAgICAgICAgcGFnZTogU3RyaW5nKHBhZ2UpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHF1ZXJ5KSB7XG4gICAgICAgICAgICBpZihxdWVyeSE9dW5kZWZpbmVkKSB7XG5cbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5T2JqLCB7IHF1ZXJ5OiBxdWVyeSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9XG5cbiAgICAgIC8vICBjb25zdCBoYW5kbGVOYXZpZ2F0aW9uID0gKCkgPT4ge1xuICAgICAgLy8gICAgICByb3V0ZXIucHVzaCgnL25ldy1wYWdlJyk7XG4gICAgICAvLyAgfTtcbiAgICBcbiAgIC8vICAgICByb3V0ZXIucHVzaCgpXG5cbiAvLyAgY29uc3QgaGFuZGxlTmF2aWdhdGlvbiA9ICgpID0+IHtcbiAgICAvLyBDb25zdHJ1Y3QgcXVlcnkgcGFyYW1ldGVycyBhcyBhIFVSTFNlYXJjaFBhcmFtcyBvYmplY3Qgb3IgbWFudWFsbHlcbiAgLy8gIGNvbnN0IHF1ZXJ5T2JqID0ge1xuICAgLy8gICAgIHBhZ2U6IHBhcmFtcy5vZmZzZXQsXG4vLyAgICAgICAgcXVlcnk6IHBhcmFtcy5xdWVyeSB8fCAnJ1xuICAvLyAgfTtcblxuICAgIC8vIENvbnZlcnQgcXVlcnkgb2JqZWN0IHRvIHF1ZXJ5IHN0cmluZ1xuICAgIGNvbnN0IHF1ZXJ5U3RyaW5nID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhxdWVyeU9iaikudG9TdHJpbmcoKTtcblxuICAgIC8vIENvbnN0cnVjdCB0aGUgbmV3IFVSTFxuICAgLy8gY29uc3QgbmV3VXJsID0gYC8/JHtxdWVyeVN0cmluZ31gO1xuY29uc3QgbmV3VXJsICA9IGAvP3BhZ2U9JHtTdHJpbmcocGFnZSl9JHtxdWVyeSA/IGBxdWVyeT0ke3F1ZXJ5fWAgOiBgYH1gXG4gICAgLy8gUHVzaCB0aGUgbmV3IFVSTFxuICAgIGNvbnNvbGUubG9nKFwiTkVXXCIsIG5ld1VybClcbiAgICByb3V0ZXIucHVzaChuZXdVcmwpO1xuLy99O1xuXG4gICAvKlxuICAgcm91dGVyLnB1c2goe1xuICAgICAgIHBhdGhuYW1lOiByb3V0ZXIucGF0aG5hbWUsXG4gICAgICAgICAgICBxdWVyeTogcXVlcnlPYmosXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIH0pO1xuKi9cblxuICAgIH07XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcblxuICAgICAgICBjb25zb2xlLmxvZyhcIlBBUlwiLCBKU09OLnN0cmluZ2lmeShwYXJhbXMpKVxuICAgICAgICBjb25zdCBzdG9yZWRQYXJhbSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2VhcmNoUGFyYW1cIilcbiAgICAgICAgY29uc29sZS5sb2coc3RvcmVkUGFyYW0pXG4gICAgICAgIGlmKHN0b3JlZFBhcmFtKSB7XG4gICAgICAgICAgLy8gIGRpc3BhdGNoKHNldFN0b3JlZEluTG9jYWxTdG9yYWdlQWN0aW9uQ3JlYXRvcihzdG9yZWRQYXJhbSkpXG4gICAgICAgICAgICBkaXNwYXRjaChzZXRRdWVyeUFjdGlvbkNyZWF0b3Ioc3RvcmVkUGFyYW0pKVxuICAgICAgICB9XG4gICAgICAgIC8vXHRjb25zdCBbcGFnZSwgcXVlcnldID0gZ2V0Q3VycmVudFBhcmFtcygpO1xuXG4gICAgICAgIC8vXHRzZXRQYWdlKE51bWJlcihwYWdlKSwgU3RyaW5nKHF1ZXJ5KSk7XG4gICAgICAgIC8vXHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc2VhcmNoUGFyYW0nLCBTdHJpbmcocXVlcnkpKTtcbiAgICAgICAgLy9cdGRpc3BhdGNoKHNldFNlYXJjaFBhcmFtc0FjdGlvbkNyZWF0b3IoTnVtYmVyKHBhZ2UpLCBTdHJpbmcocXVlcnkpKSk7XG4gICAgfSwgW10pO1xudXNlRWZmZWN0KCgpPT4ge1xuY29uc29sZS5sb2coXCJORVhcIiwgcGFyYW1zKVxufSwgW3BhcmFtc10pXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAvLyBjb25zdCB7IHBhZ2UsIHF1ZXJ5IH0gPSByb3V0ZXIucXVlcnk7XG4gICAgICAvLyAgY29uc29sZS5sb2coXCJRVUVSWVlZXCIsIHF1ZXJ5KVxuICAgICBcbiAgICB9LCBbXSlcblxuXG5cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHVyID0gc2VhcmNoUGFyYW0uZ2V0KCd1c2VyJyk7XG4gICAgICAgICAgICBcbiAgICAgICAgXG4gICAgfSwgW3JvdXRlcl0pO1xuICAgIC8qXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAocm91dGVyLmlzUmVhZHkpIHtcbiAgICAgICAgICAgIGNvbnN0IHtxdWVyeSwgcGFnZX0gPSByb3V0ZXIucXVlcnk7XG4gICAgICAgICAgICBpZihxdWVyeSE9dW5kZWZpbmVkKSB7XG5cbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInNlYXJjaFBhcmFtXCIsIFN0cmluZyhxdWVyeSkpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihwYWdlICYmIHF1ZXJ5KSB7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goc2V0U2VhcmNoUGFyYW1zQWN0aW9uQ3JlYXRvciggTnVtYmVyKHBhZ2UpLCBTdHJpbmcocXVlcnkpKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgIFxuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkN1cnJlbnRcIiwgcGFnZSwgcXVlcnkpXG4gICAgICAgIH1cbiAgICB9LCBbcm91dGVyLmlzUmVhZHksIHJvdXRlci5xdWVyeV0pO1xuKi9cbiAgICAgXG4gICAgY29uc3QgaGFuZGxlSW5wdXQgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHNldFF1ZXJ5QWN0aW9uQ3JlYXRvcihldmVudC50YXJnZXQudmFsdWUpKTtcbiAgICB9O1xuICAgIGNvbnN0IHR5cGVkVmFsdWUgPSB1c2VTZWxlY3Rvcih0eXBlZFZhbHVlU2VsZWN0b3IpXG4gICAgY29uc3QgaGFuZGxlU2VhcmNoID0gKCkgPT4ge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc2VhcmNoUGFyYW0nLCBTdHJpbmcodHlwZWRWYWx1ZSkpO1xuICAgICAgICBkaXNwYXRjaChzZXROZXdTZWFyY2hWYWx1ZUFjdGlvbkNyZWF0b3IoKSlcblxuLypcbiAgICAgICAgcm91dGVyLnB1c2goe1xuICAgICAgICAgICAgcGF0aG5hbWU6IHJvdXRlci5wYXRobmFtZSxcblxuICAgICAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICAgICAgICBwYWdlOjEsXG4gICAgICAgICAgICAgICAgcXVlcnk6IHR5cGVkVmFsdWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgICAgICovXG4gICAgfTtcbiAgICBjb25zdCBoYW5kbGVPcGVuID0gKCkgPT4ge1xuXG4gICAgfVxuICAgIHJldHVybiB7IGdldEN1cnJlbnRQYXJhbXMsIHNldFBhZ2UsIGhhbmRsZUlucHV0LCBoYW5kbGVTZWFyY2ggfTtcbn07XG5leHBvcnQgZGVmYXVsdCB1c2VVUkw7XG5cblxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInBhcmFtc1NlbGVjdG9yIiwidXNlQXBwRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInNldFF1ZXJ5QWN0aW9uQ3JlYXRvciIsInNldE5ld1NlYXJjaFZhbHVlQWN0aW9uQ3JlYXRvciIsInR5cGVkVmFsdWVTZWxlY3RvciIsInVzZVJvdXRlciIsInVzZVNlYXJjaFBhcmFtcyIsInVzZVVSTCIsImRpc3BhdGNoIiwicm91dGVyIiwic2VhcmNoUGFyYW0iLCJwYXJhbXMiLCJnZXRDdXJyZW50UGFyYW1zIiwic2V0UGFnZSIsInBhZ2UiLCJxdWVyeSIsInF1ZXJ5T2JqIiwiU3RyaW5nIiwidW5kZWZpbmVkIiwiT2JqZWN0IiwiYXNzaWduIiwicXVlcnlTdHJpbmciLCJVUkxTZWFyY2hQYXJhbXMiLCJ0b1N0cmluZyIsIm5ld1VybCIsImNvbnNvbGUiLCJsb2ciLCJwdXNoIiwiSlNPTiIsInN0cmluZ2lmeSIsInN0b3JlZFBhcmFtIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInVyIiwiZ2V0IiwiaGFuZGxlSW5wdXQiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwidHlwZWRWYWx1ZSIsImhhbmRsZVNlYXJjaCIsInNldEl0ZW0iLCJoYW5kbGVPcGVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/hooks/useURL.ts\n"));

/***/ })

});