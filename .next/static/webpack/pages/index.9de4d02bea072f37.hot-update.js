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

/***/ "./src/hooks/useURL.ts":
/*!*****************************!*\
  !*** ./src/hooks/useURL.ts ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _redux_selectors_getSearchParams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../redux/selectors/getSearchParams */ \"./src/redux/selectors/getSearchParams.ts\");\n/* harmony import */ var _redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./redux */ \"./src/hooks/redux.ts\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _redux_action_creators_setSearchParamsActionCreator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/action-creators/setSearchParamsActionCreator */ \"./src/redux/action-creators/setSearchParamsActionCreator.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _redux_action_creators_setNewSearchValueActionCreator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../redux/action-creators/setNewSearchValueActionCreator */ \"./src/redux/action-creators/setNewSearchValueActionCreator.ts\");\n/* harmony import */ var _redux_selectors_typedValueSelector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../redux/selectors/typedValueSelector */ \"./src/redux/selectors/typedValueSelector.ts\");\n/*import { useEffect } from 'react';\nimport { useRouter } from 'next/router';\nimport { useDispatch, useSelector } from 'react-redux';\n \nimport { paramsSelector } from '../lib/selectors/getSearchParams';\nimport { setQueryActionCreator } from '../lib/action-creators/setSearchParamsActionCreator';\nimport { setSearchParamsActionCreator } from '../lib/action-creators/setSearchParamsActionCreator';\nimport { setLoadingActionCreator } from '../lib/action-creators/setIsLoading';\nimport { useLazySearchUsersQuery } from '../lib/slices/querySlice';\nimport { setUsersActionCreator } from '../lib/action-creators/setUsersActionCreator';\nconst useURL = () => {\n    const dispatch = useDispatch();\n    const router = useRouter();\n\n    const getCurrentParams = () => {\n        const page = parseInt(router.query.page as string || '1', 10);\n        const query = router.query.query as string || '';\n        return [page, query];\n    };\n\n    const setPage = (page: number, query: string) => {\n        const params: Record<string, string> = { page: String(page) };\n        if (query.length > 0) {\n            params.query = query;\n        }\n        router.push({\n            pathname: router.pathname,\n            query: params,\n        });\n    };\n\n    useEffect(() => {\n        const [page, query] = getCurrentParams();\n        setPage(Number(page), String(query));\n        localStorage.setItem('searchParam', String(query));\n        dispatch(setSearchParamsActionCreator(Number(page), String(query)));\n    }, []);\n\n    const params = useSelector(paramsSelector);\n\n    const handleRedirect = () => {\n        router.push('/not-existing-page');\n    };\n\n    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {\n        dispatch(setQueryActionCreator(String(event.target.value)));\n    };\n\n    const [trigger, { data, isLoading }] = useLazySearchUsersQuery();\n\n    const handleSearch = () => {\n        window.scrollTo(0, 0);\n        trigger({ query: params.query, page: params.offset, per_page: params.limit });\n        localStorage.setItem('searchParam', params.query);\n        setPage(params.offset, params.query);\n        dispatch(setSearchParamsActionCreator(1, params.query));\n    };\n\n    useEffect(() => {\n        if (isLoading) {\n            dispatch(setLoadingActionCreator(true));\n        } else {\n            dispatch(setLoadingActionCreator(false));\n        }\n        if (data) {\n            dispatch(setUsersActionCreator(data.items));\n        }\n    }, [data, isLoading]);\n\n    useEffect(() => {\n        trigger({\n            query: params.storedValue ? params.storedValue : params.query,\n            page: params.offset,\n            per_page: params.limit,\n        });\n        setPage(params.offset, params.storedValue);\n    }, [params.storedValue]);\n\n    useEffect(() => {\n        trigger({ query: params.query, page: params.offset, per_page: params.limit });\n        setPage(params.offset, params.query);\n    }, [params.offset]);\n\n    return { getCurrentParams, setPage, handleInput, handleSearch, handleRedirect };\n};\n\nexport default useURL;\n*/ \n\n\n\n\n\n//import { setUsersActionCreator } from '@/store/action-creators/setUsersActionCreator';\n\n\n\nconst useURL = ()=>{\n    const dispatch = (0,_redux__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    //\tconst [searchParams, setSearchParams] = useSearchParams();\n    const getCurrentParams = ()=>{};\n    const setPage = (page, query)=>{\n        const queryObj = {\n            page: page\n        };\n        if (query) {\n            console.log(\"NEXTTTT\");\n            Object.assign(queryObj, {\n                query: query\n            });\n        //    queryObj\n        //queryObj['query'] = query\n        }\n        router.push({\n            pathname: router.pathname,\n            query: queryObj\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n    //\tconst [page, query] = getCurrentParams();\n    //\tsetPage(Number(page), String(query));\n    //\tlocalStorage.setItem('searchParam', String(query));\n    //\tdispatch(setSearchParamsActionCreator(Number(page), String(query)));\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        const { page, query } = router.query;\n        console.log(\"QUERYYY\", query);\n        if (!query) {\n            router.push({\n                pathname: router.pathname,\n                query: {\n                    page: page\n                }\n            });\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        if (router.isReady) {\n            const { page, query } = router.query;\n            if (page && query) {\n                dispatch((0,_redux_action_creators_setSearchParamsActionCreator__WEBPACK_IMPORTED_MODULE_3__.setSearchParamsActionCreator)(Number(page), String(query)));\n            }\n            //   setPage(page);\n            // setQuery(query);\n            console.log(\"Current\", page, query);\n        }\n    }, [\n        router.isReady,\n        router.query\n    ]);\n    //const navigate = useNavigate();\n    const params = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(_redux_selectors_getSearchParams__WEBPACK_IMPORTED_MODULE_1__.paramsSelector);\n    const handleRedirect = ()=>{\n    //navigate('/not-existing-page');\n    };\n    const handleInput = (event)=>{\n        dispatch((0,_redux_action_creators_setSearchParamsActionCreator__WEBPACK_IMPORTED_MODULE_3__.setQueryActionCreator)(event.target.value));\n    };\n    //  const [trigger, { data, isLoading }] = useLazySearchUsersQuery();\n    const typedValue = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(_redux_selectors_typedValueSelector__WEBPACK_IMPORTED_MODULE_6__.typedValueSelector);\n    const handleSearch = ()=>{\n        localStorage.setItem(\"searchParam\", String(typedValue));\n        dispatch((0,_redux_action_creators_setNewSearchValueActionCreator__WEBPACK_IMPORTED_MODULE_5__.setNewSearchValueActionCreator)());\n    };\n    return {\n        getCurrentParams,\n        setPage,\n        handleInput,\n        handleSearch,\n        handleRedirect\n    };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (useURL);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvdXNlVVJMLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVGQSxHQU9rQztBQUVrQztBQUUzQjtBQUNDO0FBRW9EO0FBQ087QUFLckcsd0ZBQXdGO0FBQ2hEO0FBQ2lFO0FBQzlCO0FBQzNFLE1BQU1TLFNBQVM7SUFDWCxNQUFNQyxXQUFXUixzREFBY0E7SUFDL0IsTUFBTVMsU0FBU0wsc0RBQVNBO0lBQ3hCLDZEQUE2RDtJQUM3RCxNQUFNTSxtQkFBbUIsS0FFekI7SUFFQSxNQUFNQyxVQUFVLENBQUNDLE1BQWNDO1FBSTNCLE1BQU1DLFdBQVc7WUFDYkYsTUFBTUE7UUFDVjtRQUNBLElBQUlDLE9BQU87WUFDUEUsUUFBUUMsR0FBRyxDQUFDO1lBQ1pDLE9BQU9DLE1BQU0sQ0FBQ0osVUFBVTtnQkFBRUQsT0FBT0E7WUFBTTtRQUN2QyxjQUFjO1FBQ2QsMkJBQTJCO1FBQy9CO1FBQ0FKLE9BQU9VLElBQUksQ0FBQztZQUNSQyxVQUFVWCxPQUFPVyxRQUFRO1lBQ3pCUCxPQUFPQztRQUlYO0lBR0o7SUFDQWhCLGdEQUFTQSxDQUFDO0lBQ04sNENBQTRDO0lBRTVDLHdDQUF3QztJQUN4QyxzREFBc0Q7SUFDdEQsdUVBQXVFO0lBQzNFLEdBQUcsRUFBRTtJQUVMQSxnREFBU0EsQ0FBQztRQUNOLE1BQU0sRUFBRWMsSUFBSSxFQUFFQyxLQUFLLEVBQUUsR0FBR0osT0FBT0ksS0FBSztRQUNwQ0UsUUFBUUMsR0FBRyxDQUFDLFdBQVdIO1FBQ3ZCLElBQUksQ0FBQ0EsT0FBTztZQUNSSixPQUFPVSxJQUFJLENBQUM7Z0JBQ1JDLFVBQVVYLE9BQU9XLFFBQVE7Z0JBRXpCUCxPQUFPO29CQUNIRCxNQUFNQTtnQkFDVjtZQUNKO1FBQ0o7SUFDSixHQUFHLEVBQUU7SUFDTGQsZ0RBQVNBLENBQUM7UUFDTixJQUFJVyxPQUFPWSxPQUFPLEVBQUU7WUFDaEIsTUFBTSxFQUFFVCxJQUFJLEVBQUVDLEtBQUssRUFBRSxHQUFHSixPQUFPSSxLQUFLO1lBQ3BDLElBQUdELFFBQVFDLE9BQU87Z0JBRWRMLFNBQVNMLGlIQUE0QkEsQ0FBQ21CLE9BQU9WLE9BQU9XLE9BQU9WO1lBQy9EO1lBQ0MsbUJBQW1CO1lBQ3BCLG1CQUFtQjtZQUVuQkUsUUFBUUMsR0FBRyxDQUFDLFdBQVdKLE1BQU1DO1FBQ2pDO0lBQ0osR0FBRztRQUFDSixPQUFPWSxPQUFPO1FBQUVaLE9BQU9JLEtBQUs7S0FBQztJQUVqQyxpQ0FBaUM7SUFDakMsTUFBTVcsU0FBU3ZCLHdEQUFXQSxDQUFDRiw0RUFBY0E7SUFDekMsTUFBTTBCLGlCQUFpQjtJQUNuQixpQ0FBaUM7SUFDckM7SUFDQSxNQUFNQyxjQUFjLENBQUNDO1FBQ2pCbkIsU0FBU04sMEdBQXFCQSxDQUFDeUIsTUFBTUMsTUFBTSxDQUFDQyxLQUFLO0lBQ3JEO0lBQ0EscUVBQXFFO0lBRXJFLE1BQU1DLGFBQWE3Qix3REFBV0EsQ0FBQ0ssbUZBQWtCQTtJQUNqRCxNQUFNeUIsZUFBZTtRQUNqQkMsYUFBYUMsT0FBTyxDQUFDLGVBQWVWLE9BQU9PO1FBQzNDdEIsU0FBU0gscUhBQThCQTtJQUMzQztJQUVBLE9BQU87UUFBRUs7UUFBa0JDO1FBQVNlO1FBQWFLO1FBQWNOO0lBQWU7QUFDbEY7QUFDQSwrREFBZWxCLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL3VzZVVSTC50cz80MTE5Il0sInNvdXJjZXNDb250ZW50IjpbIi8qaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuIFxuaW1wb3J0IHsgcGFyYW1zU2VsZWN0b3IgfSBmcm9tICcuLi9saWIvc2VsZWN0b3JzL2dldFNlYXJjaFBhcmFtcyc7XG5pbXBvcnQgeyBzZXRRdWVyeUFjdGlvbkNyZWF0b3IgfSBmcm9tICcuLi9saWIvYWN0aW9uLWNyZWF0b3JzL3NldFNlYXJjaFBhcmFtc0FjdGlvbkNyZWF0b3InO1xuaW1wb3J0IHsgc2V0U2VhcmNoUGFyYW1zQWN0aW9uQ3JlYXRvciB9IGZyb20gJy4uL2xpYi9hY3Rpb24tY3JlYXRvcnMvc2V0U2VhcmNoUGFyYW1zQWN0aW9uQ3JlYXRvcic7XG5pbXBvcnQgeyBzZXRMb2FkaW5nQWN0aW9uQ3JlYXRvciB9IGZyb20gJy4uL2xpYi9hY3Rpb24tY3JlYXRvcnMvc2V0SXNMb2FkaW5nJztcbmltcG9ydCB7IHVzZUxhenlTZWFyY2hVc2Vyc1F1ZXJ5IH0gZnJvbSAnLi4vbGliL3NsaWNlcy9xdWVyeVNsaWNlJztcbmltcG9ydCB7IHNldFVzZXJzQWN0aW9uQ3JlYXRvciB9IGZyb20gJy4uL2xpYi9hY3Rpb24tY3JlYXRvcnMvc2V0VXNlcnNBY3Rpb25DcmVhdG9yJztcbmNvbnN0IHVzZVVSTCA9ICgpID0+IHtcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgICBjb25zdCBnZXRDdXJyZW50UGFyYW1zID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBwYWdlID0gcGFyc2VJbnQocm91dGVyLnF1ZXJ5LnBhZ2UgYXMgc3RyaW5nIHx8ICcxJywgMTApO1xuICAgICAgICBjb25zdCBxdWVyeSA9IHJvdXRlci5xdWVyeS5xdWVyeSBhcyBzdHJpbmcgfHwgJyc7XG4gICAgICAgIHJldHVybiBbcGFnZSwgcXVlcnldO1xuICAgIH07XG5cbiAgICBjb25zdCBzZXRQYWdlID0gKHBhZ2U6IG51bWJlciwgcXVlcnk6IHN0cmluZykgPT4ge1xuICAgICAgICBjb25zdCBwYXJhbXM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7IHBhZ2U6IFN0cmluZyhwYWdlKSB9O1xuICAgICAgICBpZiAocXVlcnkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcGFyYW1zLnF1ZXJ5ID0gcXVlcnk7XG4gICAgICAgIH1cbiAgICAgICAgcm91dGVyLnB1c2goe1xuICAgICAgICAgICAgcGF0aG5hbWU6IHJvdXRlci5wYXRobmFtZSxcbiAgICAgICAgICAgIHF1ZXJ5OiBwYXJhbXMsXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBbcGFnZSwgcXVlcnldID0gZ2V0Q3VycmVudFBhcmFtcygpO1xuICAgICAgICBzZXRQYWdlKE51bWJlcihwYWdlKSwgU3RyaW5nKHF1ZXJ5KSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzZWFyY2hQYXJhbScsIFN0cmluZyhxdWVyeSkpO1xuICAgICAgICBkaXNwYXRjaChzZXRTZWFyY2hQYXJhbXNBY3Rpb25DcmVhdG9yKE51bWJlcihwYWdlKSwgU3RyaW5nKHF1ZXJ5KSkpO1xuICAgIH0sIFtdKTtcblxuICAgIGNvbnN0IHBhcmFtcyA9IHVzZVNlbGVjdG9yKHBhcmFtc1NlbGVjdG9yKTtcblxuICAgIGNvbnN0IGhhbmRsZVJlZGlyZWN0ID0gKCkgPT4ge1xuICAgICAgICByb3V0ZXIucHVzaCgnL25vdC1leGlzdGluZy1wYWdlJyk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZUlucHV0ID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgICAgICBkaXNwYXRjaChzZXRRdWVyeUFjdGlvbkNyZWF0b3IoU3RyaW5nKGV2ZW50LnRhcmdldC52YWx1ZSkpKTtcbiAgICB9O1xuXG4gICAgY29uc3QgW3RyaWdnZXIsIHsgZGF0YSwgaXNMb2FkaW5nIH1dID0gdXNlTGF6eVNlYXJjaFVzZXJzUXVlcnkoKTtcblxuICAgIGNvbnN0IGhhbmRsZVNlYXJjaCA9ICgpID0+IHtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgICAgICB0cmlnZ2VyKHsgcXVlcnk6IHBhcmFtcy5xdWVyeSwgcGFnZTogcGFyYW1zLm9mZnNldCwgcGVyX3BhZ2U6IHBhcmFtcy5saW1pdCB9KTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3NlYXJjaFBhcmFtJywgcGFyYW1zLnF1ZXJ5KTtcbiAgICAgICAgc2V0UGFnZShwYXJhbXMub2Zmc2V0LCBwYXJhbXMucXVlcnkpO1xuICAgICAgICBkaXNwYXRjaChzZXRTZWFyY2hQYXJhbXNBY3Rpb25DcmVhdG9yKDEsIHBhcmFtcy5xdWVyeSkpO1xuICAgIH07XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoaXNMb2FkaW5nKSB7XG4gICAgICAgICAgICBkaXNwYXRjaChzZXRMb2FkaW5nQWN0aW9uQ3JlYXRvcih0cnVlKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkaXNwYXRjaChzZXRMb2FkaW5nQWN0aW9uQ3JlYXRvcihmYWxzZSkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICBkaXNwYXRjaChzZXRVc2Vyc0FjdGlvbkNyZWF0b3IoZGF0YS5pdGVtcykpO1xuICAgICAgICB9XG4gICAgfSwgW2RhdGEsIGlzTG9hZGluZ10pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgdHJpZ2dlcih7XG4gICAgICAgICAgICBxdWVyeTogcGFyYW1zLnN0b3JlZFZhbHVlID8gcGFyYW1zLnN0b3JlZFZhbHVlIDogcGFyYW1zLnF1ZXJ5LFxuICAgICAgICAgICAgcGFnZTogcGFyYW1zLm9mZnNldCxcbiAgICAgICAgICAgIHBlcl9wYWdlOiBwYXJhbXMubGltaXQsXG4gICAgICAgIH0pO1xuICAgICAgICBzZXRQYWdlKHBhcmFtcy5vZmZzZXQsIHBhcmFtcy5zdG9yZWRWYWx1ZSk7XG4gICAgfSwgW3BhcmFtcy5zdG9yZWRWYWx1ZV0pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgdHJpZ2dlcih7IHF1ZXJ5OiBwYXJhbXMucXVlcnksIHBhZ2U6IHBhcmFtcy5vZmZzZXQsIHBlcl9wYWdlOiBwYXJhbXMubGltaXQgfSk7XG4gICAgICAgIHNldFBhZ2UocGFyYW1zLm9mZnNldCwgcGFyYW1zLnF1ZXJ5KTtcbiAgICB9LCBbcGFyYW1zLm9mZnNldF0pO1xuXG4gICAgcmV0dXJuIHsgZ2V0Q3VycmVudFBhcmFtcywgc2V0UGFnZSwgaGFuZGxlSW5wdXQsIGhhbmRsZVNlYXJjaCwgaGFuZGxlUmVkaXJlY3QgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVVSTDtcbiovXG5cblxuXG5cblxuXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VTZWFyY2hQYXJhbXMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IHBhcmFtc1NlbGVjdG9yIH0gZnJvbSAnLi4vcmVkdXgvc2VsZWN0b3JzL2dldFNlYXJjaFBhcmFtcyc7XG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgdXNlQXBwRGlzcGF0Y2ggfSBmcm9tICcuL3JlZHV4JztcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgeyBzZXRRdWVyeUFjdGlvbkNyZWF0b3IgfSBmcm9tICcuLi9yZWR1eC9hY3Rpb24tY3JlYXRvcnMvc2V0U2VhcmNoUGFyYW1zQWN0aW9uQ3JlYXRvcic7XG5pbXBvcnQgeyBzZXRTZWFyY2hQYXJhbXNBY3Rpb25DcmVhdG9yIH0gZnJvbSAnLi4vcmVkdXgvYWN0aW9uLWNyZWF0b3JzL3NldFNlYXJjaFBhcmFtc0FjdGlvbkNyZWF0b3InO1xuaW1wb3J0IHsgc2V0TG9hZGluZ0FjdGlvbkNyZWF0b3IgfSBmcm9tICcuLi9yZWR1eC9hY3Rpb24tY3JlYXRvcnMvc2V0SXNMb2FkaW5nJztcbmltcG9ydCB7IHVzZUxhenlTZWFyY2hVc2Vyc1F1ZXJ5IH0gZnJvbSAnLi4vcmVkdXgvc2xpY2VzL3F1ZXJ5U2xpY2UnO1xuaW1wb3J0IHsgc2V0VXNlcnNBY3Rpb25DcmVhdG9yIH0gZnJvbSAnLi4vcmVkdXgvYWN0aW9uLWNyZWF0b3JzL3NldFVzZXJzQWN0aW9uQ3JlYXRvcic7XG5cbi8vaW1wb3J0IHsgc2V0VXNlcnNBY3Rpb25DcmVhdG9yIH0gZnJvbSAnQC9zdG9yZS9hY3Rpb24tY3JlYXRvcnMvc2V0VXNlcnNBY3Rpb25DcmVhdG9yJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IHNldE5ld1NlYXJjaFZhbHVlQWN0aW9uQ3JlYXRvciB9IGZyb20gJy4uL3JlZHV4L2FjdGlvbi1jcmVhdG9ycy9zZXROZXdTZWFyY2hWYWx1ZUFjdGlvbkNyZWF0b3InO1xuaW1wb3J0IHsgdHlwZWRWYWx1ZVNlbGVjdG9yIH0gZnJvbSAnLi4vcmVkdXgvc2VsZWN0b3JzL3R5cGVkVmFsdWVTZWxlY3Rvcic7XG5jb25zdCB1c2VVUkwgPSAoKSA9PiB7XG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VBcHBEaXNwYXRjaCgpO1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gICAgLy9cdGNvbnN0IFtzZWFyY2hQYXJhbXMsIHNldFNlYXJjaFBhcmFtc10gPSB1c2VTZWFyY2hQYXJhbXMoKTtcbiAgICBjb25zdCBnZXRDdXJyZW50UGFyYW1zID0gKCkgPT4ge1xuXG4gICAgfTtcblxuICAgIGNvbnN0IHNldFBhZ2UgPSAocGFnZTogbnVtYmVyLCBxdWVyeTogc3RyaW5nKSA9PiB7XG5cblxuXG4gICAgICAgIGNvbnN0IHF1ZXJ5T2JqID0ge1xuICAgICAgICAgICAgcGFnZTogcGFnZVxuICAgICAgICB9XG4gICAgICAgIGlmIChxdWVyeSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJORVhUVFRUXCIsKVxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeU9iaiwgeyBxdWVyeTogcXVlcnkgfSk7XG4gICAgICAgICAgICAvLyAgICBxdWVyeU9ialxuICAgICAgICAgICAgLy9xdWVyeU9ialsncXVlcnknXSA9IHF1ZXJ5XG4gICAgICAgIH1cbiAgICAgICAgcm91dGVyLnB1c2goe1xuICAgICAgICAgICAgcGF0aG5hbWU6IHJvdXRlci5wYXRobmFtZSxcbiAgICAgICAgICAgIHF1ZXJ5OiBxdWVyeU9iaixcbiAgICAgICAgICAgIC8qIHF1ZXJ5OiB7XG4gICAgICAgICAgICAgICAgIHBhZ2U6IHBhZ2UsIHF1ZXJ5OiBxdWVyeVxuICAgICAgICAgICAgIH0gKi9cbiAgICAgICAgfSk7XG5cblxuICAgIH07XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgLy9cdGNvbnN0IFtwYWdlLCBxdWVyeV0gPSBnZXRDdXJyZW50UGFyYW1zKCk7XG5cbiAgICAgICAgLy9cdHNldFBhZ2UoTnVtYmVyKHBhZ2UpLCBTdHJpbmcocXVlcnkpKTtcbiAgICAgICAgLy9cdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzZWFyY2hQYXJhbScsIFN0cmluZyhxdWVyeSkpO1xuICAgICAgICAvL1x0ZGlzcGF0Y2goc2V0U2VhcmNoUGFyYW1zQWN0aW9uQ3JlYXRvcihOdW1iZXIocGFnZSksIFN0cmluZyhxdWVyeSkpKTtcbiAgICB9LCBbXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCB7IHBhZ2UsIHF1ZXJ5IH0gPSByb3V0ZXIucXVlcnk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiUVVFUllZWVwiLCBxdWVyeSlcbiAgICAgICAgaWYgKCFxdWVyeSkge1xuICAgICAgICAgICAgcm91dGVyLnB1c2goe1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lOiByb3V0ZXIucGF0aG5hbWUsXG5cbiAgICAgICAgICAgICAgICBxdWVyeToge1xuICAgICAgICAgICAgICAgICAgICBwYWdlOiBwYWdlLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9LCBbXSlcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAocm91dGVyLmlzUmVhZHkpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgcGFnZSwgcXVlcnkgfSA9IHJvdXRlci5xdWVyeTtcbiAgICAgICAgICAgIGlmKHBhZ2UgJiYgcXVlcnkpIHtcblxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHNldFNlYXJjaFBhcmFtc0FjdGlvbkNyZWF0b3IoTnVtYmVyKHBhZ2UpLCBTdHJpbmcocXVlcnkpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAgLy8gICBzZXRQYWdlKHBhZ2UpO1xuICAgICAgICAgICAgLy8gc2V0UXVlcnkocXVlcnkpO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkN1cnJlbnRcIiwgcGFnZSwgcXVlcnkpXG4gICAgICAgIH1cbiAgICB9LCBbcm91dGVyLmlzUmVhZHksIHJvdXRlci5xdWVyeV0pO1xuXG4gICAgLy9jb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XG4gICAgY29uc3QgcGFyYW1zID0gdXNlU2VsZWN0b3IocGFyYW1zU2VsZWN0b3IpO1xuICAgIGNvbnN0IGhhbmRsZVJlZGlyZWN0ID0gKCkgPT4ge1xuICAgICAgICAvL25hdmlnYXRlKCcvbm90LWV4aXN0aW5nLXBhZ2UnKTtcbiAgICB9O1xuICAgIGNvbnN0IGhhbmRsZUlucHV0ID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgICAgICBkaXNwYXRjaChzZXRRdWVyeUFjdGlvbkNyZWF0b3IoZXZlbnQudGFyZ2V0LnZhbHVlKSk7XG4gICAgfTtcbiAgICAvLyAgY29uc3QgW3RyaWdnZXIsIHsgZGF0YSwgaXNMb2FkaW5nIH1dID0gdXNlTGF6eVNlYXJjaFVzZXJzUXVlcnkoKTtcblxuICAgIGNvbnN0IHR5cGVkVmFsdWUgPSB1c2VTZWxlY3Rvcih0eXBlZFZhbHVlU2VsZWN0b3IpXG4gICAgY29uc3QgaGFuZGxlU2VhcmNoID0gKCkgPT4ge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc2VhcmNoUGFyYW0nLCBTdHJpbmcodHlwZWRWYWx1ZSkpO1xuICAgICAgICBkaXNwYXRjaChzZXROZXdTZWFyY2hWYWx1ZUFjdGlvbkNyZWF0b3IoKSlcbiAgICB9O1xuXG4gICAgcmV0dXJuIHsgZ2V0Q3VycmVudFBhcmFtcywgc2V0UGFnZSwgaGFuZGxlSW5wdXQsIGhhbmRsZVNlYXJjaCwgaGFuZGxlUmVkaXJlY3QgfTtcbn07XG5leHBvcnQgZGVmYXVsdCB1c2VVUkw7XG5cblxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInBhcmFtc1NlbGVjdG9yIiwidXNlQXBwRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInNldFF1ZXJ5QWN0aW9uQ3JlYXRvciIsInNldFNlYXJjaFBhcmFtc0FjdGlvbkNyZWF0b3IiLCJ1c2VSb3V0ZXIiLCJzZXROZXdTZWFyY2hWYWx1ZUFjdGlvbkNyZWF0b3IiLCJ0eXBlZFZhbHVlU2VsZWN0b3IiLCJ1c2VVUkwiLCJkaXNwYXRjaCIsInJvdXRlciIsImdldEN1cnJlbnRQYXJhbXMiLCJzZXRQYWdlIiwicGFnZSIsInF1ZXJ5IiwicXVlcnlPYmoiLCJjb25zb2xlIiwibG9nIiwiT2JqZWN0IiwiYXNzaWduIiwicHVzaCIsInBhdGhuYW1lIiwiaXNSZWFkeSIsIk51bWJlciIsIlN0cmluZyIsInBhcmFtcyIsImhhbmRsZVJlZGlyZWN0IiwiaGFuZGxlSW5wdXQiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwidHlwZWRWYWx1ZSIsImhhbmRsZVNlYXJjaCIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/hooks/useURL.ts\n"));

/***/ })

});