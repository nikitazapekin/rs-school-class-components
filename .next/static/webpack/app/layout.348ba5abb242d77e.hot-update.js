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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _redux_selectors_getSearchParams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../redux/selectors/getSearchParams */ \"(app-pages-browser)/./src/redux/selectors/getSearchParams.ts\");\n/* harmony import */ var _redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./redux */ \"(app-pages-browser)/./src/hooks/redux.ts\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _redux_action_creators_setSearchParamsActionCreator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/action-creators/setSearchParamsActionCreator */ \"(app-pages-browser)/./src/redux/action-creators/setSearchParamsActionCreator.ts\");\n/* harmony import */ var _redux_action_creators_setNewSearchValueActionCreator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/action-creators/setNewSearchValueActionCreator */ \"(app-pages-browser)/./src/redux/action-creators/setNewSearchValueActionCreator.ts\");\n/* harmony import */ var _redux_selectors_typedValueSelector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../redux/selectors/typedValueSelector */ \"(app-pages-browser)/./src/redux/selectors/typedValueSelector.ts\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\n\n\n\n\nconst useURL = ()=>{\n    const dispatch = (0,_redux__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch)();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    const searchParam = (0,next_navigation__WEBPACK_IMPORTED_MODULE_6__.useSearchParams)();\n    const params = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(_redux_selectors_getSearchParams__WEBPACK_IMPORTED_MODULE_1__.paramsSelector);\n    const getCurrentParams = ()=>{};\n    const setPage = (page, query)=>{\n        const queryObj = {\n            page: String(page)\n        };\n        if (query) {\n            if (query != undefined) {\n                Object.assign(queryObj, {\n                    query: query\n                });\n            }\n        }\n        //  const handleNavigation = () => {\n        //      router.push('/new-page');\n        //  };\n        //     router.push()\n        //  const handleNavigation = () => {\n        // Construct query parameters as a URLSearchParams object or manually\n        //  const queryObj = {\n        //     page: params.offset,\n        //        query: params.query || ''\n        //  };\n        // Convert query object to query string\n        const queryString = new URLSearchParams(queryObj).toString();\n        // Construct the new URL\n        // const newUrl = `/?${queryString}`;\n        const newUrl = \"/?page=\".concat(String(page)).concat(query ? \"query=\".concat(query) : \"\");\n        // Push the new URL\n        console.log(\"NEW\", newUrl);\n        router.push(newUrl);\n    //};\n    /*\n        router.push({\n            pathname: router.pathname,\n                 query: queryObj,\n                 \n                 });\n     */ };\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        console.log(\"PAR\", JSON.stringify(params));\n        const storedParam = localStorage.getItem(\"searchParam\");\n        console.log(storedParam);\n        if (storedParam) {\n            //  dispatch(setStoredInLocalStorageActionCreator(storedParam))\n            dispatch((0,_redux_action_creators_setSearchParamsActionCreator__WEBPACK_IMPORTED_MODULE_3__.setQueryActionCreator)(storedParam));\n        }\n    //\tconst [page, query] = getCurrentParams();\n    //\tsetPage(Number(page), String(query));\n    //\tlocalStorage.setItem('searchParam', String(query));\n    //\tdispatch(setSearchParamsActionCreator(Number(page), String(query)));\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        console.log(\"NEX\", params);\n    }, [\n        params\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n    // const { page, query } = router.query;\n    //  console.log(\"QUERYYY\", query)\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        const page = searchParam.get(\"page\");\n        const query = searchParam.get(\"query\");\n        if (query != undefined) {\n            localStorage.setItem(\"searchParam\", String(query));\n        }\n        if (page && query) {\n            dispatch((0,_redux_action_creators_setSearchParamsActionCreator__WEBPACK_IMPORTED_MODULE_3__.setSearchParamsActionCreator)(Number(page), String(query)));\n        }\n    }, [\n        router\n    ]);\n    const handleInput = (event)=>{\n        dispatch((0,_redux_action_creators_setSearchParamsActionCreator__WEBPACK_IMPORTED_MODULE_3__.setQueryActionCreator)(event.target.value));\n    };\n    const typedValue = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(_redux_selectors_typedValueSelector__WEBPACK_IMPORTED_MODULE_5__.typedValueSelector);\n    const handleSearch = ()=>{\n        localStorage.setItem(\"searchParam\", String(typedValue));\n        dispatch((0,_redux_action_creators_setNewSearchValueActionCreator__WEBPACK_IMPORTED_MODULE_4__.setNewSearchValueActionCreator)());\n    };\n    return {\n        getCurrentParams,\n        setPage,\n        handleInput,\n        handleSearch\n    };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (useURL);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c0NvbnRlbnQiOlsiXG5cblxuXCJ1c2UgY2xpZW50XCJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgcGFyYW1zU2VsZWN0b3IgfSBmcm9tICcuLi9yZWR1eC9zZWxlY3RvcnMvZ2V0U2VhcmNoUGFyYW1zJztcbmltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyB1c2VBcHBEaXNwYXRjaCB9IGZyb20gJy4vcmVkdXgnO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IHNldFF1ZXJ5QWN0aW9uQ3JlYXRvciB9IGZyb20gJy4uL3JlZHV4L2FjdGlvbi1jcmVhdG9ycy9zZXRTZWFyY2hQYXJhbXNBY3Rpb25DcmVhdG9yJztcbmltcG9ydCB7IHNldFNlYXJjaFBhcmFtc0FjdGlvbkNyZWF0b3IgfSBmcm9tICcuLi9yZWR1eC9hY3Rpb24tY3JlYXRvcnMvc2V0U2VhcmNoUGFyYW1zQWN0aW9uQ3JlYXRvcic7XG5pbXBvcnQgeyBzZXRMb2FkaW5nQWN0aW9uQ3JlYXRvciB9IGZyb20gJy4uL3JlZHV4L2FjdGlvbi1jcmVhdG9ycy9zZXRJc0xvYWRpbmcnO1xuaW1wb3J0IHsgdXNlTGF6eVNlYXJjaFVzZXJzUXVlcnkgfSBmcm9tICcuLi9yZWR1eC9zbGljZXMvcXVlcnlTbGljZSc7XG5pbXBvcnQgeyBzZXRVc2Vyc0FjdGlvbkNyZWF0b3IgfSBmcm9tICcuLi9yZWR1eC9hY3Rpb24tY3JlYXRvcnMvc2V0VXNlcnNBY3Rpb25DcmVhdG9yJztcblxuXG5pbXBvcnQgeyBzZXROZXdTZWFyY2hWYWx1ZUFjdGlvbkNyZWF0b3IgfSBmcm9tICcuLi9yZWR1eC9hY3Rpb24tY3JlYXRvcnMvc2V0TmV3U2VhcmNoVmFsdWVBY3Rpb25DcmVhdG9yJztcbmltcG9ydCB7IHR5cGVkVmFsdWVTZWxlY3RvciB9IGZyb20gJy4uL3JlZHV4L3NlbGVjdG9ycy90eXBlZFZhbHVlU2VsZWN0b3InO1xuaW1wb3J0IHsgc2V0U3RvcmVkSW5Mb2NhbFN0b3JhZ2VBY3Rpb25DcmVhdG9yIH0gZnJvbSAnLi4vcmVkdXgvYWN0aW9uLWNyZWF0b3JzL3NldFN0b3JlZEluTG9jYWxTdG9yYWdlUXVlcnknO1xuXG5pbXBvcnQgeyB1c2VSb3V0ZXIsIHVzZVNlYXJjaFBhcmFtcyB9IGZyb20gJ25leHQvbmF2aWdhdGlvbic7XG5jb25zdCB1c2VVUkwgPSAoKSA9PiB7XG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VBcHBEaXNwYXRjaCgpO1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gICAgY29uc3Qgc2VhcmNoUGFyYW0gPSB1c2VTZWFyY2hQYXJhbXMoKVxuICAgIGNvbnN0IHBhcmFtcyA9IHVzZVNlbGVjdG9yKHBhcmFtc1NlbGVjdG9yKTtcblxuICAgIGNvbnN0IGdldEN1cnJlbnRQYXJhbXMgPSAoKSA9PiB7XG5cbiAgICB9O1xuXG4gICAgY29uc3Qgc2V0UGFnZSA9IChwYWdlOiBudW1iZXIsIHF1ZXJ5OiBzdHJpbmcpID0+IHtcblxuXG5cbiAgICAgICAgY29uc3QgcXVlcnlPYmogPSB7XG4gICAgICAgICAgICBwYWdlOiBTdHJpbmcocGFnZSlcbiAgICAgICAgfVxuICAgICAgICBpZiAocXVlcnkpIHtcbiAgICAgICAgICAgIGlmIChxdWVyeSAhPSB1bmRlZmluZWQpIHtcblxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnlPYmosIHsgcXVlcnk6IHF1ZXJ5IH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICAvLyAgY29uc3QgaGFuZGxlTmF2aWdhdGlvbiA9ICgpID0+IHtcbiAgICAgICAgLy8gICAgICByb3V0ZXIucHVzaCgnL25ldy1wYWdlJyk7XG4gICAgICAgIC8vICB9O1xuXG4gICAgICAgIC8vICAgICByb3V0ZXIucHVzaCgpXG5cbiAgICAgICAgLy8gIGNvbnN0IGhhbmRsZU5hdmlnYXRpb24gPSAoKSA9PiB7XG4gICAgICAgIC8vIENvbnN0cnVjdCBxdWVyeSBwYXJhbWV0ZXJzIGFzIGEgVVJMU2VhcmNoUGFyYW1zIG9iamVjdCBvciBtYW51YWxseVxuICAgICAgICAvLyAgY29uc3QgcXVlcnlPYmogPSB7XG4gICAgICAgIC8vICAgICBwYWdlOiBwYXJhbXMub2Zmc2V0LFxuICAgICAgICAvLyAgICAgICAgcXVlcnk6IHBhcmFtcy5xdWVyeSB8fCAnJ1xuICAgICAgICAvLyAgfTtcblxuICAgICAgICAvLyBDb252ZXJ0IHF1ZXJ5IG9iamVjdCB0byBxdWVyeSBzdHJpbmdcbiAgICAgICAgY29uc3QgcXVlcnlTdHJpbmcgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHF1ZXJ5T2JqKS50b1N0cmluZygpO1xuXG4gICAgICAgIC8vIENvbnN0cnVjdCB0aGUgbmV3IFVSTFxuICAgICAgICAvLyBjb25zdCBuZXdVcmwgPSBgLz8ke3F1ZXJ5U3RyaW5nfWA7XG4gICAgICAgIGNvbnN0IG5ld1VybCA9IGAvP3BhZ2U9JHtTdHJpbmcocGFnZSl9JHtxdWVyeSA/IGBxdWVyeT0ke3F1ZXJ5fWAgOiBgYH1gXG4gICAgICAgIC8vIFB1c2ggdGhlIG5ldyBVUkxcbiAgICAgICAgY29uc29sZS5sb2coXCJORVdcIiwgbmV3VXJsKVxuICAgICAgICByb3V0ZXIucHVzaChuZXdVcmwpO1xuICAgICAgICAvL307XG5cbiAgICAgICAgLypcbiAgICAgICAgcm91dGVyLnB1c2goe1xuICAgICAgICAgICAgcGF0aG5hbWU6IHJvdXRlci5wYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgcXVlcnk6IHF1ZXJ5T2JqLFxuICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgfSk7XG4gICAgICovXG5cbiAgICB9O1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJQQVJcIiwgSlNPTi5zdHJpbmdpZnkocGFyYW1zKSlcbiAgICAgICAgY29uc3Qgc3RvcmVkUGFyYW0gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNlYXJjaFBhcmFtXCIpXG4gICAgICAgIGNvbnNvbGUubG9nKHN0b3JlZFBhcmFtKVxuICAgICAgICBpZiAoc3RvcmVkUGFyYW0pIHtcbiAgICAgICAgICAgIC8vICBkaXNwYXRjaChzZXRTdG9yZWRJbkxvY2FsU3RvcmFnZUFjdGlvbkNyZWF0b3Ioc3RvcmVkUGFyYW0pKVxuICAgICAgICAgICAgZGlzcGF0Y2goc2V0UXVlcnlBY3Rpb25DcmVhdG9yKHN0b3JlZFBhcmFtKSlcbiAgICAgICAgfVxuICAgICAgICAvL1x0Y29uc3QgW3BhZ2UsIHF1ZXJ5XSA9IGdldEN1cnJlbnRQYXJhbXMoKTtcblxuICAgICAgICAvL1x0c2V0UGFnZShOdW1iZXIocGFnZSksIFN0cmluZyhxdWVyeSkpO1xuICAgICAgICAvL1x0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3NlYXJjaFBhcmFtJywgU3RyaW5nKHF1ZXJ5KSk7XG4gICAgICAgIC8vXHRkaXNwYXRjaChzZXRTZWFyY2hQYXJhbXNBY3Rpb25DcmVhdG9yKE51bWJlcihwYWdlKSwgU3RyaW5nKHF1ZXJ5KSkpO1xuICAgIH0sIFtdKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIk5FWFwiLCBwYXJhbXMpXG4gICAgfSwgW3BhcmFtc10pXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgLy8gY29uc3QgeyBwYWdlLCBxdWVyeSB9ID0gcm91dGVyLnF1ZXJ5O1xuICAgICAgICAvLyAgY29uc29sZS5sb2coXCJRVUVSWVlZXCIsIHF1ZXJ5KVxuXG4gICAgfSwgW10pXG5cblxuXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBwYWdlID0gc2VhcmNoUGFyYW0uZ2V0KCdwYWdlJyk7XG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gc2VhcmNoUGFyYW0uZ2V0KCdxdWVyeScpXG4gICAgICAgIGlmKHF1ZXJ5IT11bmRlZmluZWQpIHtcblxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzZWFyY2hQYXJhbVwiLCBTdHJpbmcocXVlcnkpKVxuICAgICAgICB9XG4gICAgICAgIGlmKHBhZ2UgJiYgcXVlcnkpIHtcbiAgICAgICAgICAgIGRpc3BhdGNoKHNldFNlYXJjaFBhcmFtc0FjdGlvbkNyZWF0b3IoIE51bWJlcihwYWdlKSwgU3RyaW5nKHF1ZXJ5KSkpXG4gICAgICAgIH1cblxuXG4gICAgfSwgW3JvdXRlcl0pO1xuICAgXG5cbiAgICBjb25zdCBoYW5kbGVJbnB1dCA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICAgICAgZGlzcGF0Y2goc2V0UXVlcnlBY3Rpb25DcmVhdG9yKGV2ZW50LnRhcmdldC52YWx1ZSkpO1xuICAgIH07XG4gICAgY29uc3QgdHlwZWRWYWx1ZSA9IHVzZVNlbGVjdG9yKHR5cGVkVmFsdWVTZWxlY3RvcilcbiAgICBjb25zdCBoYW5kbGVTZWFyY2ggPSAoKSA9PiB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzZWFyY2hQYXJhbScsIFN0cmluZyh0eXBlZFZhbHVlKSk7XG4gICAgICAgIGRpc3BhdGNoKHNldE5ld1NlYXJjaFZhbHVlQWN0aW9uQ3JlYXRvcigpKVxuXG4gICAgIFxuICAgIH07XG4gICBcbiAgICByZXR1cm4geyBnZXRDdXJyZW50UGFyYW1zLCBzZXRQYWdlLCBoYW5kbGVJbnB1dCwgaGFuZGxlU2VhcmNoIH07XG59O1xuZXhwb3J0IGRlZmF1bHQgdXNlVVJMO1xuXG5cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJwYXJhbXNTZWxlY3RvciIsInVzZUFwcERpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJzZXRRdWVyeUFjdGlvbkNyZWF0b3IiLCJzZXRTZWFyY2hQYXJhbXNBY3Rpb25DcmVhdG9yIiwic2V0TmV3U2VhcmNoVmFsdWVBY3Rpb25DcmVhdG9yIiwidHlwZWRWYWx1ZVNlbGVjdG9yIiwidXNlUm91dGVyIiwidXNlU2VhcmNoUGFyYW1zIiwidXNlVVJMIiwiZGlzcGF0Y2giLCJyb3V0ZXIiLCJzZWFyY2hQYXJhbSIsInBhcmFtcyIsImdldEN1cnJlbnRQYXJhbXMiLCJzZXRQYWdlIiwicGFnZSIsInF1ZXJ5IiwicXVlcnlPYmoiLCJTdHJpbmciLCJ1bmRlZmluZWQiLCJPYmplY3QiLCJhc3NpZ24iLCJxdWVyeVN0cmluZyIsIlVSTFNlYXJjaFBhcmFtcyIsInRvU3RyaW5nIiwibmV3VXJsIiwiY29uc29sZSIsImxvZyIsInB1c2giLCJKU09OIiwic3RyaW5naWZ5Iiwic3RvcmVkUGFyYW0iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZ2V0Iiwic2V0SXRlbSIsIk51bWJlciIsImhhbmRsZUlucHV0IiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInR5cGVkVmFsdWUiLCJoYW5kbGVTZWFyY2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/hooks/useURL.ts\n"));

/***/ })

});