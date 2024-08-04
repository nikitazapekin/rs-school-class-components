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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _redux_selectors_getSearchParams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../redux/selectors/getSearchParams */ \"(app-pages-browser)/./src/redux/selectors/getSearchParams.ts\");\n/* harmony import */ var _redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./redux */ \"(app-pages-browser)/./src/hooks/redux.ts\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _redux_action_creators_setSearchParamsActionCreator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/action-creators/setSearchParamsActionCreator */ \"(app-pages-browser)/./src/redux/action-creators/setSearchParamsActionCreator.ts\");\n/* harmony import */ var _redux_action_creators_setNewSearchValueActionCreator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/action-creators/setNewSearchValueActionCreator */ \"(app-pages-browser)/./src/redux/action-creators/setNewSearchValueActionCreator.ts\");\n/* harmony import */ var _redux_selectors_typedValueSelector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../redux/selectors/typedValueSelector */ \"(app-pages-browser)/./src/redux/selectors/typedValueSelector.ts\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\n\n\n\n\nconst useURL = ()=>{\n    const dispatch = (0,_redux__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch)();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    const searchParam = (0,next_navigation__WEBPACK_IMPORTED_MODULE_6__.useSearchParams)();\n    const params = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(_redux_selectors_getSearchParams__WEBPACK_IMPORTED_MODULE_1__.paramsSelector);\n    const getCurrentParams = ()=>{};\n    const setPage = (page, query)=>{\n        const newUrl = \"/?page=\".concat(String(page)).concat(query ? \"query=\".concat(query) : \"\");\n        console.log(\"NEW\", newUrl);\n        router.push(newUrl);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        console.log(\"PAR\", JSON.stringify(params));\n        const storedParam = localStorage.getItem(\"searchParam\");\n        console.log(storedParam);\n        if (storedParam) {\n            //  dispatch(setStoredInLocalStorageActionCreator(storedParam))\n            dispatch((0,_redux_action_creators_setSearchParamsActionCreator__WEBPACK_IMPORTED_MODULE_3__.setQueryActionCreator)(storedParam));\n        }\n    //\tconst [page, query] = getCurrentParams();\n    //\tsetPage(Number(page), String(query));\n    //\tlocalStorage.setItem('searchParam', String(query));\n    //\tdispatch(setSearchParamsActionCreator(Number(page), String(query)));\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        const page = searchParam.get(\"page\");\n        const query = searchParam.get(\"query\");\n        if (query != undefined) {\n            localStorage.setItem(\"searchParam\", String(query));\n        }\n        if (page && query) {\n            dispatch((0,_redux_action_creators_setSearchParamsActionCreator__WEBPACK_IMPORTED_MODULE_3__.setSearchParamsActionCreator)(Number(page), String(query)));\n        }\n    }, [\n        router\n    ]);\n    const handleInput = (event)=>{\n        dispatch((0,_redux_action_creators_setSearchParamsActionCreator__WEBPACK_IMPORTED_MODULE_3__.setQueryActionCreator)(event.target.value));\n    };\n    const typedValue = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(_redux_selectors_typedValueSelector__WEBPACK_IMPORTED_MODULE_5__.typedValueSelector);\n    const handleSearch = ()=>{\n        localStorage.setItem(\"searchParam\", String(typedValue));\n        dispatch((0,_redux_action_creators_setNewSearchValueActionCreator__WEBPACK_IMPORTED_MODULE_4__.setNewSearchValueActionCreator)());\n        const newUrl = \"/?page=\".concat(String(1), \"query=\").concat(typedValue);\n        router.push(newUrl);\n    };\n    return {\n        getCurrentParams,\n        setPage,\n        handleInput,\n        handleSearch\n    };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (useURL);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9ob29rcy91c2VVUkwudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs2REFJa0M7QUFFa0M7QUFFM0I7QUFDQztBQUVvRDtBQUNPO0FBTUk7QUFDOUI7QUFHZDtBQUM3RCxNQUFNVSxTQUFTO0lBQ1gsTUFBTUMsV0FBV1Qsc0RBQWNBO0lBQy9CLE1BQU1VLFNBQVNKLDBEQUFTQTtJQUN4QixNQUFNSyxjQUFjSixnRUFBZUE7SUFDbkMsTUFBTUssU0FBU1gsd0RBQVdBLENBQUNGLDRFQUFjQTtJQUV6QyxNQUFNYyxtQkFBbUIsS0FFekI7SUFFQSxNQUFNQyxVQUFVLENBQUNDLE1BQWNDO1FBSzNCLE1BQU1DLFNBQVMsVUFBeUJELE9BQWZFLE9BQU9ILE9BQXNDLE9BQTlCQyxRQUFRLFNBQWUsT0FBTkEsU0FBVztRQUVwRUcsUUFBUUMsR0FBRyxDQUFDLE9BQU9IO1FBQ25CUCxPQUFPVyxJQUFJLENBQUNKO0lBR2hCO0lBQ0FuQixnREFBU0EsQ0FBQztRQUVOcUIsUUFBUUMsR0FBRyxDQUFDLE9BQU9FLEtBQUtDLFNBQVMsQ0FBQ1g7UUFDbEMsTUFBTVksY0FBY0MsYUFBYUMsT0FBTyxDQUFDO1FBQ3pDUCxRQUFRQyxHQUFHLENBQUNJO1FBQ1osSUFBSUEsYUFBYTtZQUNiLCtEQUErRDtZQUMvRGYsU0FBU1AsMEdBQXFCQSxDQUFDc0I7UUFDbkM7SUFDQSw0Q0FBNEM7SUFFNUMsd0NBQXdDO0lBQ3hDLHNEQUFzRDtJQUN0RCx1RUFBdUU7SUFDM0UsR0FBRyxFQUFFO0lBR0wxQixnREFBU0EsQ0FBQztRQUNOLE1BQU1pQixPQUFPSixZQUFZZ0IsR0FBRyxDQUFDO1FBQzdCLE1BQU1YLFFBQVFMLFlBQVlnQixHQUFHLENBQUM7UUFDOUIsSUFBR1gsU0FBT1ksV0FBVztZQUVqQkgsYUFBYUksT0FBTyxDQUFDLGVBQWVYLE9BQU9GO1FBQy9DO1FBQ0EsSUFBR0QsUUFBUUMsT0FBTztZQUNkUCxTQUFTTixpSEFBNEJBLENBQUUyQixPQUFPZixPQUFPRyxPQUFPRjtRQUNoRTtJQUdKLEdBQUc7UUFBQ047S0FBTztJQUdYLE1BQU1xQixjQUFjLENBQUNDO1FBQ2pCdkIsU0FBU1AsMEdBQXFCQSxDQUFDOEIsTUFBTUMsTUFBTSxDQUFDQyxLQUFLO0lBQ3JEO0lBQ0EsTUFBTUMsYUFBYWxDLHdEQUFXQSxDQUFDSSxtRkFBa0JBO0lBQ2pELE1BQU0rQixlQUFlO1FBQ2pCWCxhQUFhSSxPQUFPLENBQUMsZUFBZVgsT0FBT2lCO1FBQzNDMUIsU0FBU0wscUhBQThCQTtRQUN2QyxNQUFNYSxTQUFTLFVBQTRCa0IsT0FBbEJqQixPQUFPLElBQUcsVUFBbUIsT0FBWGlCO1FBRTNDekIsT0FBT1csSUFBSSxDQUFDSjtJQUVoQjtJQUVBLE9BQU87UUFBRUo7UUFBa0JDO1FBQVNpQjtRQUFhSztJQUFhO0FBQ2xFO0FBQ0EsK0RBQWU1QixNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9ob29rcy91c2VVUkwudHM/NDExOSJdLCJzb3VyY2VzQ29udGVudCI6WyJcblxuXG5cInVzZSBjbGllbnRcIlxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBwYXJhbXNTZWxlY3RvciB9IGZyb20gJy4uL3JlZHV4L3NlbGVjdG9ycy9nZXRTZWFyY2hQYXJhbXMnO1xuaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IHVzZUFwcERpc3BhdGNoIH0gZnJvbSAnLi9yZWR1eCc7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgc2V0UXVlcnlBY3Rpb25DcmVhdG9yIH0gZnJvbSAnLi4vcmVkdXgvYWN0aW9uLWNyZWF0b3JzL3NldFNlYXJjaFBhcmFtc0FjdGlvbkNyZWF0b3InO1xuaW1wb3J0IHsgc2V0U2VhcmNoUGFyYW1zQWN0aW9uQ3JlYXRvciB9IGZyb20gJy4uL3JlZHV4L2FjdGlvbi1jcmVhdG9ycy9zZXRTZWFyY2hQYXJhbXNBY3Rpb25DcmVhdG9yJztcbmltcG9ydCB7IHNldExvYWRpbmdBY3Rpb25DcmVhdG9yIH0gZnJvbSAnLi4vcmVkdXgvYWN0aW9uLWNyZWF0b3JzL3NldElzTG9hZGluZyc7XG5pbXBvcnQgeyB1c2VMYXp5U2VhcmNoVXNlcnNRdWVyeSB9IGZyb20gJy4uL3JlZHV4L3NsaWNlcy9xdWVyeVNsaWNlJztcbmltcG9ydCB7IHNldFVzZXJzQWN0aW9uQ3JlYXRvciB9IGZyb20gJy4uL3JlZHV4L2FjdGlvbi1jcmVhdG9ycy9zZXRVc2Vyc0FjdGlvbkNyZWF0b3InO1xuXG5cbmltcG9ydCB7IHNldE5ld1NlYXJjaFZhbHVlQWN0aW9uQ3JlYXRvciB9IGZyb20gJy4uL3JlZHV4L2FjdGlvbi1jcmVhdG9ycy9zZXROZXdTZWFyY2hWYWx1ZUFjdGlvbkNyZWF0b3InO1xuaW1wb3J0IHsgdHlwZWRWYWx1ZVNlbGVjdG9yIH0gZnJvbSAnLi4vcmVkdXgvc2VsZWN0b3JzL3R5cGVkVmFsdWVTZWxlY3Rvcic7XG5pbXBvcnQgeyBzZXRTdG9yZWRJbkxvY2FsU3RvcmFnZUFjdGlvbkNyZWF0b3IgfSBmcm9tICcuLi9yZWR1eC9hY3Rpb24tY3JlYXRvcnMvc2V0U3RvcmVkSW5Mb2NhbFN0b3JhZ2VRdWVyeSc7XG5cbmltcG9ydCB7IHVzZVJvdXRlciwgdXNlU2VhcmNoUGFyYW1zIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJztcbmNvbnN0IHVzZVVSTCA9ICgpID0+IHtcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZUFwcERpc3BhdGNoKCk7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgICBjb25zdCBzZWFyY2hQYXJhbSA9IHVzZVNlYXJjaFBhcmFtcygpXG4gICAgY29uc3QgcGFyYW1zID0gdXNlU2VsZWN0b3IocGFyYW1zU2VsZWN0b3IpO1xuXG4gICAgY29uc3QgZ2V0Q3VycmVudFBhcmFtcyA9ICgpID0+IHtcblxuICAgIH07XG5cbiAgICBjb25zdCBzZXRQYWdlID0gKHBhZ2U6IG51bWJlciwgcXVlcnk6IHN0cmluZykgPT4ge1xuXG5cblxuICAgIFxuICAgICAgICBjb25zdCBuZXdVcmwgPSBgLz9wYWdlPSR7U3RyaW5nKHBhZ2UpfSR7cXVlcnkgPyBgcXVlcnk9JHtxdWVyeX1gIDogYGB9YFxuICAgICAgIFxuICAgICAgICBjb25zb2xlLmxvZyhcIk5FV1wiLCBuZXdVcmwpXG4gICAgICAgIHJvdXRlci5wdXNoKG5ld1VybCk7XG4gICAgICAgXG5cbiAgICB9O1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJQQVJcIiwgSlNPTi5zdHJpbmdpZnkocGFyYW1zKSlcbiAgICAgICAgY29uc3Qgc3RvcmVkUGFyYW0gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNlYXJjaFBhcmFtXCIpXG4gICAgICAgIGNvbnNvbGUubG9nKHN0b3JlZFBhcmFtKVxuICAgICAgICBpZiAoc3RvcmVkUGFyYW0pIHtcbiAgICAgICAgICAgIC8vICBkaXNwYXRjaChzZXRTdG9yZWRJbkxvY2FsU3RvcmFnZUFjdGlvbkNyZWF0b3Ioc3RvcmVkUGFyYW0pKVxuICAgICAgICAgICAgZGlzcGF0Y2goc2V0UXVlcnlBY3Rpb25DcmVhdG9yKHN0b3JlZFBhcmFtKSlcbiAgICAgICAgfVxuICAgICAgICAvL1x0Y29uc3QgW3BhZ2UsIHF1ZXJ5XSA9IGdldEN1cnJlbnRQYXJhbXMoKTtcblxuICAgICAgICAvL1x0c2V0UGFnZShOdW1iZXIocGFnZSksIFN0cmluZyhxdWVyeSkpO1xuICAgICAgICAvL1x0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3NlYXJjaFBhcmFtJywgU3RyaW5nKHF1ZXJ5KSk7XG4gICAgICAgIC8vXHRkaXNwYXRjaChzZXRTZWFyY2hQYXJhbXNBY3Rpb25DcmVhdG9yKE51bWJlcihwYWdlKSwgU3RyaW5nKHF1ZXJ5KSkpO1xuICAgIH0sIFtdKTtcbiAgXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBwYWdlID0gc2VhcmNoUGFyYW0uZ2V0KCdwYWdlJyk7XG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gc2VhcmNoUGFyYW0uZ2V0KCdxdWVyeScpXG4gICAgICAgIGlmKHF1ZXJ5IT11bmRlZmluZWQpIHtcblxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzZWFyY2hQYXJhbVwiLCBTdHJpbmcocXVlcnkpKVxuICAgICAgICB9XG4gICAgICAgIGlmKHBhZ2UgJiYgcXVlcnkpIHtcbiAgICAgICAgICAgIGRpc3BhdGNoKHNldFNlYXJjaFBhcmFtc0FjdGlvbkNyZWF0b3IoIE51bWJlcihwYWdlKSwgU3RyaW5nKHF1ZXJ5KSkpXG4gICAgICAgIH1cblxuXG4gICAgfSwgW3JvdXRlcl0pO1xuICAgXG5cbiAgICBjb25zdCBoYW5kbGVJbnB1dCA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICAgICAgZGlzcGF0Y2goc2V0UXVlcnlBY3Rpb25DcmVhdG9yKGV2ZW50LnRhcmdldC52YWx1ZSkpO1xuICAgIH07XG4gICAgY29uc3QgdHlwZWRWYWx1ZSA9IHVzZVNlbGVjdG9yKHR5cGVkVmFsdWVTZWxlY3RvcilcbiAgICBjb25zdCBoYW5kbGVTZWFyY2ggPSAoKSA9PiB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzZWFyY2hQYXJhbScsIFN0cmluZyh0eXBlZFZhbHVlKSk7XG4gICAgICAgIGRpc3BhdGNoKHNldE5ld1NlYXJjaFZhbHVlQWN0aW9uQ3JlYXRvcigpKVxuICAgICAgICBjb25zdCBuZXdVcmwgPSBgLz9wYWdlPSR7U3RyaW5nKDEpfXF1ZXJ5PSR7dHlwZWRWYWx1ZX1gXG4gICAgXG4gICAgICAgIHJvdXRlci5wdXNoKG5ld1VybCk7XG4gICAgICBcbiAgICB9O1xuICAgXG4gICAgcmV0dXJuIHsgZ2V0Q3VycmVudFBhcmFtcywgc2V0UGFnZSwgaGFuZGxlSW5wdXQsIGhhbmRsZVNlYXJjaCB9O1xufTtcbmV4cG9ydCBkZWZhdWx0IHVzZVVSTDtcblxuXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwicGFyYW1zU2VsZWN0b3IiLCJ1c2VBcHBEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic2V0UXVlcnlBY3Rpb25DcmVhdG9yIiwic2V0U2VhcmNoUGFyYW1zQWN0aW9uQ3JlYXRvciIsInNldE5ld1NlYXJjaFZhbHVlQWN0aW9uQ3JlYXRvciIsInR5cGVkVmFsdWVTZWxlY3RvciIsInVzZVJvdXRlciIsInVzZVNlYXJjaFBhcmFtcyIsInVzZVVSTCIsImRpc3BhdGNoIiwicm91dGVyIiwic2VhcmNoUGFyYW0iLCJwYXJhbXMiLCJnZXRDdXJyZW50UGFyYW1zIiwic2V0UGFnZSIsInBhZ2UiLCJxdWVyeSIsIm5ld1VybCIsIlN0cmluZyIsImNvbnNvbGUiLCJsb2ciLCJwdXNoIiwiSlNPTiIsInN0cmluZ2lmeSIsInN0b3JlZFBhcmFtIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImdldCIsInVuZGVmaW5lZCIsInNldEl0ZW0iLCJOdW1iZXIiLCJoYW5kbGVJbnB1dCIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJ0eXBlZFZhbHVlIiwiaGFuZGxlU2VhcmNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/hooks/useURL.ts\n"));

/***/ })

});