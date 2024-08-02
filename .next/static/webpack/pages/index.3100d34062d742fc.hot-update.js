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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _redux_selectors_getSearchParams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../redux/selectors/getSearchParams */ \"./src/redux/selectors/getSearchParams.ts\");\n/* harmony import */ var _redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./redux */ \"./src/hooks/redux.ts\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _redux_action_creators_setSearchParamsActionCreator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/action-creators/setSearchParamsActionCreator */ \"./src/redux/action-creators/setSearchParamsActionCreator.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _redux_action_creators_setNewSearchValueActionCreator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../redux/action-creators/setNewSearchValueActionCreator */ \"./src/redux/action-creators/setNewSearchValueActionCreator.ts\");\n/* harmony import */ var _redux_selectors_typedValueSelector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../redux/selectors/typedValueSelector */ \"./src/redux/selectors/typedValueSelector.ts\");\n/*import { useEffect } from 'react';\nimport { useRouter } from 'next/router';\nimport { useDispatch, useSelector } from 'react-redux';\n \nimport { paramsSelector } from '../lib/selectors/getSearchParams';\nimport { setQueryActionCreator } from '../lib/action-creators/setSearchParamsActionCreator';\nimport { setSearchParamsActionCreator } from '../lib/action-creators/setSearchParamsActionCreator';\nimport { setLoadingActionCreator } from '../lib/action-creators/setIsLoading';\nimport { useLazySearchUsersQuery } from '../lib/slices/querySlice';\nimport { setUsersActionCreator } from '../lib/action-creators/setUsersActionCreator';\nconst useURL = () => {\n    const dispatch = useDispatch();\n    const router = useRouter();\n\n    const getCurrentParams = () => {\n        const page = parseInt(router.query.page as string || '1', 10);\n        const query = router.query.query as string || '';\n        return [page, query];\n    };\n\n    const setPage = (page: number, query: string) => {\n        const params: Record<string, string> = { page: String(page) };\n        if (query.length > 0) {\n            params.query = query;\n        }\n        router.push({\n            pathname: router.pathname,\n            query: params,\n        });\n    };\n\n    useEffect(() => {\n        const [page, query] = getCurrentParams();\n        setPage(Number(page), String(query));\n        localStorage.setItem('searchParam', String(query));\n        dispatch(setSearchParamsActionCreator(Number(page), String(query)));\n    }, []);\n\n    const params = useSelector(paramsSelector);\n\n    const handleRedirect = () => {\n        router.push('/not-existing-page');\n    };\n\n    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {\n        dispatch(setQueryActionCreator(String(event.target.value)));\n    };\n\n    const [trigger, { data, isLoading }] = useLazySearchUsersQuery();\n\n    const handleSearch = () => {\n        window.scrollTo(0, 0);\n        trigger({ query: params.query, page: params.offset, per_page: params.limit });\n        localStorage.setItem('searchParam', params.query);\n        setPage(params.offset, params.query);\n        dispatch(setSearchParamsActionCreator(1, params.query));\n    };\n\n    useEffect(() => {\n        if (isLoading) {\n            dispatch(setLoadingActionCreator(true));\n        } else {\n            dispatch(setLoadingActionCreator(false));\n        }\n        if (data) {\n            dispatch(setUsersActionCreator(data.items));\n        }\n    }, [data, isLoading]);\n\n    useEffect(() => {\n        trigger({\n            query: params.storedValue ? params.storedValue : params.query,\n            page: params.offset,\n            per_page: params.limit,\n        });\n        setPage(params.offset, params.storedValue);\n    }, [params.storedValue]);\n\n    useEffect(() => {\n        trigger({ query: params.query, page: params.offset, per_page: params.limit });\n        setPage(params.offset, params.query);\n    }, [params.offset]);\n\n    return { getCurrentParams, setPage, handleInput, handleSearch, handleRedirect };\n};\n\nexport default useURL;\n*/ \n\n\n\n\n\n//import { setUsersActionCreator } from '@/store/action-creators/setUsersActionCreator';\n\n\n\nconst useURL = ()=>{\n    const dispatch = (0,_redux__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    //\tconst [searchParams, setSearchParams] = useSearchParams();\n    const getCurrentParams = ()=>{};\n    const setPage = (page, query)=>{\n        const queryObj = {\n            page: page\n        };\n        if (query) {\n            console.log(\"NEXTTTT\");\n            Object.assign(queryObj, {\n                query: query\n            });\n        //    queryObj\n        //queryObj['query'] = query\n        }\n        router.push({\n            pathname: router.pathname,\n            query: queryObj\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n    //\tconst [page, query] = getCurrentParams();\n    //\tsetPage(Number(page), String(query));\n    //\tlocalStorage.setItem('searchParam', String(query));\n    //\tdispatch(setSearchParamsActionCreator(Number(page), String(query)));\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        const { page, query } = router.query;\n        console.log(\"QUERYYY\", query);\n        if (!query) {\n            router.push({\n                pathname: router.pathname,\n                query: {\n                    page: page\n                }\n            });\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        if (router.isReady) {\n            const { page, query } = router.query;\n            if (page && query) {\n                dispatch((0,_redux_action_creators_setSearchParamsActionCreator__WEBPACK_IMPORTED_MODULE_3__.setSearchParamsActionCreator)(Number(page), String(query)));\n            } else {\n                const item = localStorage.getItem(\"searchParam\");\n                if (item) {}\n            }\n            //   setPage(page);\n            // setQuery(query);\n            console.log(\"Current\", page, query);\n        }\n    }, [\n        router.isReady,\n        router.query\n    ]);\n    //const navigate = useNavigate();\n    const params = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(_redux_selectors_getSearchParams__WEBPACK_IMPORTED_MODULE_1__.paramsSelector);\n    const handleRedirect = ()=>{\n    //navigate('/not-existing-page');\n    };\n    const handleInput = (event)=>{\n        dispatch((0,_redux_action_creators_setSearchParamsActionCreator__WEBPACK_IMPORTED_MODULE_3__.setQueryActionCreator)(event.target.value));\n    };\n    //  const [trigger, { data, isLoading }] = useLazySearchUsersQuery();\n    const typedValue = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(_redux_selectors_typedValueSelector__WEBPACK_IMPORTED_MODULE_6__.typedValueSelector);\n    const handleSearch = ()=>{\n        localStorage.setItem(\"searchParam\", String(typedValue));\n        dispatch((0,_redux_action_creators_setNewSearchValueActionCreator__WEBPACK_IMPORTED_MODULE_5__.setNewSearchValueActionCreator)());\n    };\n    return {\n        getCurrentParams,\n        setPage,\n        handleInput,\n        handleSearch,\n        handleRedirect\n    };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (useURL);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvdXNlVVJMLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVGQSxHQU9rQztBQUVrQztBQUUzQjtBQUNDO0FBRW9EO0FBQ087QUFLckcsd0ZBQXdGO0FBQ2hEO0FBQ2lFO0FBQzlCO0FBQzNFLE1BQU1TLFNBQVM7SUFDWCxNQUFNQyxXQUFXUixzREFBY0E7SUFDL0IsTUFBTVMsU0FBU0wsc0RBQVNBO0lBQ3hCLDZEQUE2RDtJQUM3RCxNQUFNTSxtQkFBbUIsS0FFekI7SUFFQSxNQUFNQyxVQUFVLENBQUNDLE1BQWNDO1FBSTNCLE1BQU1DLFdBQVc7WUFDYkYsTUFBTUE7UUFDVjtRQUNBLElBQUlDLE9BQU87WUFDUEUsUUFBUUMsR0FBRyxDQUFDO1lBQ1pDLE9BQU9DLE1BQU0sQ0FBQ0osVUFBVTtnQkFBRUQsT0FBT0E7WUFBTTtRQUN2QyxjQUFjO1FBQ2QsMkJBQTJCO1FBQy9CO1FBQ0FKLE9BQU9VLElBQUksQ0FBQztZQUNSQyxVQUFVWCxPQUFPVyxRQUFRO1lBQ3pCUCxPQUFPQztRQUlYO0lBR0o7SUFDQWhCLGdEQUFTQSxDQUFDO0lBQ04sNENBQTRDO0lBRTVDLHdDQUF3QztJQUN4QyxzREFBc0Q7SUFDdEQsdUVBQXVFO0lBQzNFLEdBQUcsRUFBRTtJQUVMQSxnREFBU0EsQ0FBQztRQUNOLE1BQU0sRUFBRWMsSUFBSSxFQUFFQyxLQUFLLEVBQUUsR0FBR0osT0FBT0ksS0FBSztRQUNwQ0UsUUFBUUMsR0FBRyxDQUFDLFdBQVdIO1FBQ3ZCLElBQUksQ0FBQ0EsT0FBTztZQUNSSixPQUFPVSxJQUFJLENBQUM7Z0JBQ1JDLFVBQVVYLE9BQU9XLFFBQVE7Z0JBRXpCUCxPQUFPO29CQUNIRCxNQUFNQTtnQkFDVjtZQUNKO1FBQ0o7SUFDSixHQUFHLEVBQUU7SUFDTGQsZ0RBQVNBLENBQUM7UUFDTixJQUFJVyxPQUFPWSxPQUFPLEVBQUU7WUFDaEIsTUFBTSxFQUFFVCxJQUFJLEVBQUVDLEtBQUssRUFBRSxHQUFHSixPQUFPSSxLQUFLO1lBQ3BDLElBQUdELFFBQVFDLE9BQU87Z0JBRWRMLFNBQVNMLGlIQUE0QkEsQ0FBQ21CLE9BQU9WLE9BQU9XLE9BQU9WO1lBQy9ELE9BQU87Z0JBQ0gsTUFBTVcsT0FBT0MsYUFBYUMsT0FBTyxDQUFDO2dCQUNsQyxJQUFHRixNQUFNLENBRVQ7WUFDSjtZQUNDLG1CQUFtQjtZQUNwQixtQkFBbUI7WUFFbkJULFFBQVFDLEdBQUcsQ0FBQyxXQUFXSixNQUFNQztRQUNqQztJQUNKLEdBQUc7UUFBQ0osT0FBT1ksT0FBTztRQUFFWixPQUFPSSxLQUFLO0tBQUM7SUFFakMsaUNBQWlDO0lBQ2pDLE1BQU1jLFNBQVMxQix3REFBV0EsQ0FBQ0YsNEVBQWNBO0lBQ3pDLE1BQU02QixpQkFBaUI7SUFDbkIsaUNBQWlDO0lBQ3JDO0lBQ0EsTUFBTUMsY0FBYyxDQUFDQztRQUNqQnRCLFNBQVNOLDBHQUFxQkEsQ0FBQzRCLE1BQU1DLE1BQU0sQ0FBQ0MsS0FBSztJQUNyRDtJQUNBLHFFQUFxRTtJQUVyRSxNQUFNQyxhQUFhaEMsd0RBQVdBLENBQUNLLG1GQUFrQkE7SUFDakQsTUFBTTRCLGVBQWU7UUFDakJULGFBQWFVLE9BQU8sQ0FBQyxlQUFlWixPQUFPVTtRQUMzQ3pCLFNBQVNILHFIQUE4QkE7SUFDM0M7SUFFQSxPQUFPO1FBQUVLO1FBQWtCQztRQUFTa0I7UUFBYUs7UUFBY047SUFBZTtBQUNsRjtBQUNBLCtEQUFlckIsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvaG9va3MvdXNlVVJMLnRzPzQxMTkiXSwic291cmNlc0NvbnRlbnQiOlsiLyppbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG4gXG5pbXBvcnQgeyBwYXJhbXNTZWxlY3RvciB9IGZyb20gJy4uL2xpYi9zZWxlY3RvcnMvZ2V0U2VhcmNoUGFyYW1zJztcbmltcG9ydCB7IHNldFF1ZXJ5QWN0aW9uQ3JlYXRvciB9IGZyb20gJy4uL2xpYi9hY3Rpb24tY3JlYXRvcnMvc2V0U2VhcmNoUGFyYW1zQWN0aW9uQ3JlYXRvcic7XG5pbXBvcnQgeyBzZXRTZWFyY2hQYXJhbXNBY3Rpb25DcmVhdG9yIH0gZnJvbSAnLi4vbGliL2FjdGlvbi1jcmVhdG9ycy9zZXRTZWFyY2hQYXJhbXNBY3Rpb25DcmVhdG9yJztcbmltcG9ydCB7IHNldExvYWRpbmdBY3Rpb25DcmVhdG9yIH0gZnJvbSAnLi4vbGliL2FjdGlvbi1jcmVhdG9ycy9zZXRJc0xvYWRpbmcnO1xuaW1wb3J0IHsgdXNlTGF6eVNlYXJjaFVzZXJzUXVlcnkgfSBmcm9tICcuLi9saWIvc2xpY2VzL3F1ZXJ5U2xpY2UnO1xuaW1wb3J0IHsgc2V0VXNlcnNBY3Rpb25DcmVhdG9yIH0gZnJvbSAnLi4vbGliL2FjdGlvbi1jcmVhdG9ycy9zZXRVc2Vyc0FjdGlvbkNyZWF0b3InO1xuY29uc3QgdXNlVVJMID0gKCkgPT4ge1xuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICAgIGNvbnN0IGdldEN1cnJlbnRQYXJhbXMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhZ2UgPSBwYXJzZUludChyb3V0ZXIucXVlcnkucGFnZSBhcyBzdHJpbmcgfHwgJzEnLCAxMCk7XG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gcm91dGVyLnF1ZXJ5LnF1ZXJ5IGFzIHN0cmluZyB8fCAnJztcbiAgICAgICAgcmV0dXJuIFtwYWdlLCBxdWVyeV07XG4gICAgfTtcblxuICAgIGNvbnN0IHNldFBhZ2UgPSAocGFnZTogbnVtYmVyLCBxdWVyeTogc3RyaW5nKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhcmFtczogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHsgcGFnZTogU3RyaW5nKHBhZ2UpIH07XG4gICAgICAgIGlmIChxdWVyeS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBwYXJhbXMucXVlcnkgPSBxdWVyeTtcbiAgICAgICAgfVxuICAgICAgICByb3V0ZXIucHVzaCh7XG4gICAgICAgICAgICBwYXRobmFtZTogcm91dGVyLnBhdGhuYW1lLFxuICAgICAgICAgICAgcXVlcnk6IHBhcmFtcyxcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IFtwYWdlLCBxdWVyeV0gPSBnZXRDdXJyZW50UGFyYW1zKCk7XG4gICAgICAgIHNldFBhZ2UoTnVtYmVyKHBhZ2UpLCBTdHJpbmcocXVlcnkpKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3NlYXJjaFBhcmFtJywgU3RyaW5nKHF1ZXJ5KSk7XG4gICAgICAgIGRpc3BhdGNoKHNldFNlYXJjaFBhcmFtc0FjdGlvbkNyZWF0b3IoTnVtYmVyKHBhZ2UpLCBTdHJpbmcocXVlcnkpKSk7XG4gICAgfSwgW10pO1xuXG4gICAgY29uc3QgcGFyYW1zID0gdXNlU2VsZWN0b3IocGFyYW1zU2VsZWN0b3IpO1xuXG4gICAgY29uc3QgaGFuZGxlUmVkaXJlY3QgPSAoKSA9PiB7XG4gICAgICAgIHJvdXRlci5wdXNoKCcvbm90LWV4aXN0aW5nLXBhZ2UnKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlSW5wdXQgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHNldFF1ZXJ5QWN0aW9uQ3JlYXRvcihTdHJpbmcoZXZlbnQudGFyZ2V0LnZhbHVlKSkpO1xuICAgIH07XG5cbiAgICBjb25zdCBbdHJpZ2dlciwgeyBkYXRhLCBpc0xvYWRpbmcgfV0gPSB1c2VMYXp5U2VhcmNoVXNlcnNRdWVyeSgpO1xuXG4gICAgY29uc3QgaGFuZGxlU2VhcmNoID0gKCkgPT4ge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgICAgIHRyaWdnZXIoeyBxdWVyeTogcGFyYW1zLnF1ZXJ5LCBwYWdlOiBwYXJhbXMub2Zmc2V0LCBwZXJfcGFnZTogcGFyYW1zLmxpbWl0IH0pO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc2VhcmNoUGFyYW0nLCBwYXJhbXMucXVlcnkpO1xuICAgICAgICBzZXRQYWdlKHBhcmFtcy5vZmZzZXQsIHBhcmFtcy5xdWVyeSk7XG4gICAgICAgIGRpc3BhdGNoKHNldFNlYXJjaFBhcmFtc0FjdGlvbkNyZWF0b3IoMSwgcGFyYW1zLnF1ZXJ5KSk7XG4gICAgfTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChpc0xvYWRpbmcpIHtcbiAgICAgICAgICAgIGRpc3BhdGNoKHNldExvYWRpbmdBY3Rpb25DcmVhdG9yKHRydWUpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRpc3BhdGNoKHNldExvYWRpbmdBY3Rpb25DcmVhdG9yKGZhbHNlKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgIGRpc3BhdGNoKHNldFVzZXJzQWN0aW9uQ3JlYXRvcihkYXRhLml0ZW1zKSk7XG4gICAgICAgIH1cbiAgICB9LCBbZGF0YSwgaXNMb2FkaW5nXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICB0cmlnZ2VyKHtcbiAgICAgICAgICAgIHF1ZXJ5OiBwYXJhbXMuc3RvcmVkVmFsdWUgPyBwYXJhbXMuc3RvcmVkVmFsdWUgOiBwYXJhbXMucXVlcnksXG4gICAgICAgICAgICBwYWdlOiBwYXJhbXMub2Zmc2V0LFxuICAgICAgICAgICAgcGVyX3BhZ2U6IHBhcmFtcy5saW1pdCxcbiAgICAgICAgfSk7XG4gICAgICAgIHNldFBhZ2UocGFyYW1zLm9mZnNldCwgcGFyYW1zLnN0b3JlZFZhbHVlKTtcbiAgICB9LCBbcGFyYW1zLnN0b3JlZFZhbHVlXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICB0cmlnZ2VyKHsgcXVlcnk6IHBhcmFtcy5xdWVyeSwgcGFnZTogcGFyYW1zLm9mZnNldCwgcGVyX3BhZ2U6IHBhcmFtcy5saW1pdCB9KTtcbiAgICAgICAgc2V0UGFnZShwYXJhbXMub2Zmc2V0LCBwYXJhbXMucXVlcnkpO1xuICAgIH0sIFtwYXJhbXMub2Zmc2V0XSk7XG5cbiAgICByZXR1cm4geyBnZXRDdXJyZW50UGFyYW1zLCBzZXRQYWdlLCBoYW5kbGVJbnB1dCwgaGFuZGxlU2VhcmNoLCBoYW5kbGVSZWRpcmVjdCB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlVVJMO1xuKi9cblxuXG5cblxuXG5cbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVNlYXJjaFBhcmFtcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgcGFyYW1zU2VsZWN0b3IgfSBmcm9tICcuLi9yZWR1eC9zZWxlY3RvcnMvZ2V0U2VhcmNoUGFyYW1zJztcbmltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyB1c2VBcHBEaXNwYXRjaCB9IGZyb20gJy4vcmVkdXgnO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IHNldFF1ZXJ5QWN0aW9uQ3JlYXRvciB9IGZyb20gJy4uL3JlZHV4L2FjdGlvbi1jcmVhdG9ycy9zZXRTZWFyY2hQYXJhbXNBY3Rpb25DcmVhdG9yJztcbmltcG9ydCB7IHNldFNlYXJjaFBhcmFtc0FjdGlvbkNyZWF0b3IgfSBmcm9tICcuLi9yZWR1eC9hY3Rpb24tY3JlYXRvcnMvc2V0U2VhcmNoUGFyYW1zQWN0aW9uQ3JlYXRvcic7XG5pbXBvcnQgeyBzZXRMb2FkaW5nQWN0aW9uQ3JlYXRvciB9IGZyb20gJy4uL3JlZHV4L2FjdGlvbi1jcmVhdG9ycy9zZXRJc0xvYWRpbmcnO1xuaW1wb3J0IHsgdXNlTGF6eVNlYXJjaFVzZXJzUXVlcnkgfSBmcm9tICcuLi9yZWR1eC9zbGljZXMvcXVlcnlTbGljZSc7XG5pbXBvcnQgeyBzZXRVc2Vyc0FjdGlvbkNyZWF0b3IgfSBmcm9tICcuLi9yZWR1eC9hY3Rpb24tY3JlYXRvcnMvc2V0VXNlcnNBY3Rpb25DcmVhdG9yJztcblxuLy9pbXBvcnQgeyBzZXRVc2Vyc0FjdGlvbkNyZWF0b3IgfSBmcm9tICdAL3N0b3JlL2FjdGlvbi1jcmVhdG9ycy9zZXRVc2Vyc0FjdGlvbkNyZWF0b3InO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgc2V0TmV3U2VhcmNoVmFsdWVBY3Rpb25DcmVhdG9yIH0gZnJvbSAnLi4vcmVkdXgvYWN0aW9uLWNyZWF0b3JzL3NldE5ld1NlYXJjaFZhbHVlQWN0aW9uQ3JlYXRvcic7XG5pbXBvcnQgeyB0eXBlZFZhbHVlU2VsZWN0b3IgfSBmcm9tICcuLi9yZWR1eC9zZWxlY3RvcnMvdHlwZWRWYWx1ZVNlbGVjdG9yJztcbmNvbnN0IHVzZVVSTCA9ICgpID0+IHtcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZUFwcERpc3BhdGNoKCk7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgICAvL1x0Y29uc3QgW3NlYXJjaFBhcmFtcywgc2V0U2VhcmNoUGFyYW1zXSA9IHVzZVNlYXJjaFBhcmFtcygpO1xuICAgIGNvbnN0IGdldEN1cnJlbnRQYXJhbXMgPSAoKSA9PiB7XG5cbiAgICB9O1xuXG4gICAgY29uc3Qgc2V0UGFnZSA9IChwYWdlOiBudW1iZXIsIHF1ZXJ5OiBzdHJpbmcpID0+IHtcblxuXG5cbiAgICAgICAgY29uc3QgcXVlcnlPYmogPSB7XG4gICAgICAgICAgICBwYWdlOiBwYWdlXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHF1ZXJ5KSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5FWFRUVFRcIiwpXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5T2JqLCB7IHF1ZXJ5OiBxdWVyeSB9KTtcbiAgICAgICAgICAgIC8vICAgIHF1ZXJ5T2JqXG4gICAgICAgICAgICAvL3F1ZXJ5T2JqWydxdWVyeSddID0gcXVlcnlcbiAgICAgICAgfVxuICAgICAgICByb3V0ZXIucHVzaCh7XG4gICAgICAgICAgICBwYXRobmFtZTogcm91dGVyLnBhdGhuYW1lLFxuICAgICAgICAgICAgcXVlcnk6IHF1ZXJ5T2JqLFxuICAgICAgICAgICAgLyogcXVlcnk6IHtcbiAgICAgICAgICAgICAgICAgcGFnZTogcGFnZSwgcXVlcnk6IHF1ZXJ5XG4gICAgICAgICAgICAgfSAqL1xuICAgICAgICB9KTtcblxuXG4gICAgfTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICAvL1x0Y29uc3QgW3BhZ2UsIHF1ZXJ5XSA9IGdldEN1cnJlbnRQYXJhbXMoKTtcblxuICAgICAgICAvL1x0c2V0UGFnZShOdW1iZXIocGFnZSksIFN0cmluZyhxdWVyeSkpO1xuICAgICAgICAvL1x0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3NlYXJjaFBhcmFtJywgU3RyaW5nKHF1ZXJ5KSk7XG4gICAgICAgIC8vXHRkaXNwYXRjaChzZXRTZWFyY2hQYXJhbXNBY3Rpb25DcmVhdG9yKE51bWJlcihwYWdlKSwgU3RyaW5nKHF1ZXJ5KSkpO1xuICAgIH0sIFtdKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgcGFnZSwgcXVlcnkgfSA9IHJvdXRlci5xdWVyeTtcbiAgICAgICAgY29uc29sZS5sb2coXCJRVUVSWVlZXCIsIHF1ZXJ5KVxuICAgICAgICBpZiAoIXF1ZXJ5KSB7XG4gICAgICAgICAgICByb3V0ZXIucHVzaCh7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWU6IHJvdXRlci5wYXRobmFtZSxcblxuICAgICAgICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICAgICAgICAgIHBhZ2U6IHBhZ2UsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH0sIFtdKVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChyb3V0ZXIuaXNSZWFkeSkge1xuICAgICAgICAgICAgY29uc3QgeyBwYWdlLCBxdWVyeSB9ID0gcm91dGVyLnF1ZXJ5O1xuICAgICAgICAgICAgaWYocGFnZSAmJiBxdWVyeSkge1xuXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goc2V0U2VhcmNoUGFyYW1zQWN0aW9uQ3JlYXRvcihOdW1iZXIocGFnZSksIFN0cmluZyhxdWVyeSkpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2VhcmNoUGFyYW1cIilcbiAgICAgICAgICAgICAgICBpZihpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAvLyAgIHNldFBhZ2UocGFnZSk7XG4gICAgICAgICAgICAvLyBzZXRRdWVyeShxdWVyeSk7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ3VycmVudFwiLCBwYWdlLCBxdWVyeSlcbiAgICAgICAgfVxuICAgIH0sIFtyb3V0ZXIuaXNSZWFkeSwgcm91dGVyLnF1ZXJ5XSk7XG5cbiAgICAvL2NvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcbiAgICBjb25zdCBwYXJhbXMgPSB1c2VTZWxlY3RvcihwYXJhbXNTZWxlY3Rvcik7XG4gICAgY29uc3QgaGFuZGxlUmVkaXJlY3QgPSAoKSA9PiB7XG4gICAgICAgIC8vbmF2aWdhdGUoJy9ub3QtZXhpc3RpbmctcGFnZScpO1xuICAgIH07XG4gICAgY29uc3QgaGFuZGxlSW5wdXQgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHNldFF1ZXJ5QWN0aW9uQ3JlYXRvcihldmVudC50YXJnZXQudmFsdWUpKTtcbiAgICB9O1xuICAgIC8vICBjb25zdCBbdHJpZ2dlciwgeyBkYXRhLCBpc0xvYWRpbmcgfV0gPSB1c2VMYXp5U2VhcmNoVXNlcnNRdWVyeSgpO1xuXG4gICAgY29uc3QgdHlwZWRWYWx1ZSA9IHVzZVNlbGVjdG9yKHR5cGVkVmFsdWVTZWxlY3RvcilcbiAgICBjb25zdCBoYW5kbGVTZWFyY2ggPSAoKSA9PiB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzZWFyY2hQYXJhbScsIFN0cmluZyh0eXBlZFZhbHVlKSk7XG4gICAgICAgIGRpc3BhdGNoKHNldE5ld1NlYXJjaFZhbHVlQWN0aW9uQ3JlYXRvcigpKVxuICAgIH07XG5cbiAgICByZXR1cm4geyBnZXRDdXJyZW50UGFyYW1zLCBzZXRQYWdlLCBoYW5kbGVJbnB1dCwgaGFuZGxlU2VhcmNoLCBoYW5kbGVSZWRpcmVjdCB9O1xufTtcbmV4cG9ydCBkZWZhdWx0IHVzZVVSTDtcblxuXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwicGFyYW1zU2VsZWN0b3IiLCJ1c2VBcHBEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic2V0UXVlcnlBY3Rpb25DcmVhdG9yIiwic2V0U2VhcmNoUGFyYW1zQWN0aW9uQ3JlYXRvciIsInVzZVJvdXRlciIsInNldE5ld1NlYXJjaFZhbHVlQWN0aW9uQ3JlYXRvciIsInR5cGVkVmFsdWVTZWxlY3RvciIsInVzZVVSTCIsImRpc3BhdGNoIiwicm91dGVyIiwiZ2V0Q3VycmVudFBhcmFtcyIsInNldFBhZ2UiLCJwYWdlIiwicXVlcnkiLCJxdWVyeU9iaiIsImNvbnNvbGUiLCJsb2ciLCJPYmplY3QiLCJhc3NpZ24iLCJwdXNoIiwicGF0aG5hbWUiLCJpc1JlYWR5IiwiTnVtYmVyIiwiU3RyaW5nIiwiaXRlbSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJwYXJhbXMiLCJoYW5kbGVSZWRpcmVjdCIsImhhbmRsZUlucHV0IiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInR5cGVkVmFsdWUiLCJoYW5kbGVTZWFyY2giLCJzZXRJdGVtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/hooks/useURL.ts\n"));

/***/ })

});