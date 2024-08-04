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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _redux_selectors_getSearchParams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../redux/selectors/getSearchParams */ \"(app-pages-browser)/./src/redux/selectors/getSearchParams.ts\");\n/* harmony import */ var _redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./redux */ \"(app-pages-browser)/./src/hooks/redux.ts\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _redux_action_creators_setSearchParamsActionCreator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/action-creators/setSearchParamsActionCreator */ \"(app-pages-browser)/./src/redux/action-creators/setSearchParamsActionCreator.ts\");\n/* harmony import */ var _redux_action_creators_setNewSearchValueActionCreator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/action-creators/setNewSearchValueActionCreator */ \"(app-pages-browser)/./src/redux/action-creators/setNewSearchValueActionCreator.ts\");\n/* harmony import */ var _redux_selectors_typedValueSelector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../redux/selectors/typedValueSelector */ \"(app-pages-browser)/./src/redux/selectors/typedValueSelector.ts\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\n\n\n\n\nconst useURL = ()=>{\n    const dispatch = (0,_redux__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch)();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    const searchParam = (0,next_navigation__WEBPACK_IMPORTED_MODULE_6__.useSearchParams)();\n    const params = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(_redux_selectors_getSearchParams__WEBPACK_IMPORTED_MODULE_1__.paramsSelector);\n    const getCurrentParams = ()=>{};\n    const setPage = (page, query)=>{\n        const newUrl = \"/?page=\".concat(String(page)).concat(query ? \"query=\".concat(query) : \"\");\n        router.push(newUrl);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        const storedParam = localStorage.getItem(\"searchParam\");\n        if (storedParam) {\n            dispatch((0,_redux_action_creators_setSearchParamsActionCreator__WEBPACK_IMPORTED_MODULE_3__.setQueryActionCreator)(storedParam));\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        /* const page = searchParam.get('page');\n    const query = searchParam.get('query')\n    let url =\"\"\n    if(!page ) */ let url = \"?page=%\";\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        const page = searchParam.get(\"page\");\n        const query = searchParam.get(\"query\");\n        if (query != undefined) {\n            localStorage.setItem(\"searchParam\", String(query));\n        }\n        if (page && query) {\n            dispatch((0,_redux_action_creators_setSearchParamsActionCreator__WEBPACK_IMPORTED_MODULE_3__.setSearchParamsActionCreator)(Number(page), String(query)));\n        }\n    }, [\n        router\n    ]);\n    const handleInput = (event)=>{\n        dispatch((0,_redux_action_creators_setSearchParamsActionCreator__WEBPACK_IMPORTED_MODULE_3__.setQueryActionCreator)(event.target.value));\n    };\n    const typedValue = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(_redux_selectors_typedValueSelector__WEBPACK_IMPORTED_MODULE_5__.typedValueSelector);\n    const handleSearch = ()=>{\n        localStorage.setItem(\"searchParam\", String(typedValue));\n        dispatch((0,_redux_action_creators_setNewSearchValueActionCreator__WEBPACK_IMPORTED_MODULE_4__.setNewSearchValueActionCreator)());\n        const newUrl = \"/?page=\".concat(String(1), \"query=\").concat(typedValue);\n        router.push(newUrl);\n    };\n    return {\n        getCurrentParams,\n        setPage,\n        handleInput,\n        handleSearch\n    };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (useURL);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9ob29rcy91c2VVUkwudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs2REFJa0M7QUFFa0M7QUFFM0I7QUFDQztBQUVvRDtBQUNPO0FBTUk7QUFDOUI7QUFHZDtBQUM3RCxNQUFNVSxTQUFTO0lBQ1gsTUFBTUMsV0FBV1Qsc0RBQWNBO0lBQy9CLE1BQU1VLFNBQVNKLDBEQUFTQTtJQUN4QixNQUFNSyxjQUFjSixnRUFBZUE7SUFDbkMsTUFBTUssU0FBU1gsd0RBQVdBLENBQUNGLDRFQUFjQTtJQUV6QyxNQUFNYyxtQkFBbUIsS0FFekI7SUFFQSxNQUFNQyxVQUFVLENBQUNDLE1BQWNDO1FBQzNCLE1BQU1DLFNBQVMsVUFBeUJELE9BQWZFLE9BQU9ILE9BQXNDLE9BQTlCQyxRQUFRLFNBQWUsT0FBTkEsU0FBVztRQUNwRU4sT0FBT1MsSUFBSSxDQUFDRjtJQUNoQjtJQUNBbkIsZ0RBQVNBLENBQUM7UUFDTixNQUFNc0IsY0FBY0MsYUFBYUMsT0FBTyxDQUFDO1FBQ3pDLElBQUlGLGFBQWE7WUFDYlgsU0FBU1AsMEdBQXFCQSxDQUFDa0I7UUFDbkM7SUFDSixHQUFHLEVBQUU7SUFFVHRCLGdEQUFTQSxDQUFDO1FBQ1A7OztlQUdZLEdBQ1gsSUFBSXlCLE1BQU07SUFDZCxHQUFHLEVBQUU7SUFDRHpCLGdEQUFTQSxDQUFDO1FBQ04sTUFBTWlCLE9BQU9KLFlBQVlhLEdBQUcsQ0FBQztRQUM3QixNQUFNUixRQUFRTCxZQUFZYSxHQUFHLENBQUM7UUFDOUIsSUFBR1IsU0FBT1MsV0FBVztZQUVqQkosYUFBYUssT0FBTyxDQUFDLGVBQWVSLE9BQU9GO1FBQy9DO1FBQ0EsSUFBR0QsUUFBUUMsT0FBTztZQUNkUCxTQUFTTixpSEFBNEJBLENBQUV3QixPQUFPWixPQUFPRyxPQUFPRjtRQUNoRTtJQUdKLEdBQUc7UUFBQ047S0FBTztJQUdYLE1BQU1rQixjQUFjLENBQUNDO1FBQ2pCcEIsU0FBU1AsMEdBQXFCQSxDQUFDMkIsTUFBTUMsTUFBTSxDQUFDQyxLQUFLO0lBQ3JEO0lBQ0EsTUFBTUMsYUFBYS9CLHdEQUFXQSxDQUFDSSxtRkFBa0JBO0lBQ2pELE1BQU00QixlQUFlO1FBQ2pCWixhQUFhSyxPQUFPLENBQUMsZUFBZVIsT0FBT2M7UUFDM0N2QixTQUFTTCxxSEFBOEJBO1FBQ3ZDLE1BQU1hLFNBQVMsVUFBNEJlLE9BQWxCZCxPQUFPLElBQUcsVUFBbUIsT0FBWGM7UUFFM0N0QixPQUFPUyxJQUFJLENBQUNGO0lBRWhCO0lBRUEsT0FBTztRQUFFSjtRQUFrQkM7UUFBU2M7UUFBYUs7SUFBYTtBQUNsRTtBQUNBLCtEQUFlekIsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvaG9va3MvdXNlVVJMLnRzPzQxMTkiXSwic291cmNlc0NvbnRlbnQiOlsiXG5cblxuXCJ1c2UgY2xpZW50XCJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgcGFyYW1zU2VsZWN0b3IgfSBmcm9tICcuLi9yZWR1eC9zZWxlY3RvcnMvZ2V0U2VhcmNoUGFyYW1zJztcbmltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyB1c2VBcHBEaXNwYXRjaCB9IGZyb20gJy4vcmVkdXgnO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IHNldFF1ZXJ5QWN0aW9uQ3JlYXRvciB9IGZyb20gJy4uL3JlZHV4L2FjdGlvbi1jcmVhdG9ycy9zZXRTZWFyY2hQYXJhbXNBY3Rpb25DcmVhdG9yJztcbmltcG9ydCB7IHNldFNlYXJjaFBhcmFtc0FjdGlvbkNyZWF0b3IgfSBmcm9tICcuLi9yZWR1eC9hY3Rpb24tY3JlYXRvcnMvc2V0U2VhcmNoUGFyYW1zQWN0aW9uQ3JlYXRvcic7XG5pbXBvcnQgeyBzZXRMb2FkaW5nQWN0aW9uQ3JlYXRvciB9IGZyb20gJy4uL3JlZHV4L2FjdGlvbi1jcmVhdG9ycy9zZXRJc0xvYWRpbmcnO1xuaW1wb3J0IHsgdXNlTGF6eVNlYXJjaFVzZXJzUXVlcnkgfSBmcm9tICcuLi9yZWR1eC9zbGljZXMvcXVlcnlTbGljZSc7XG5pbXBvcnQgeyBzZXRVc2Vyc0FjdGlvbkNyZWF0b3IgfSBmcm9tICcuLi9yZWR1eC9hY3Rpb24tY3JlYXRvcnMvc2V0VXNlcnNBY3Rpb25DcmVhdG9yJztcblxuXG5pbXBvcnQgeyBzZXROZXdTZWFyY2hWYWx1ZUFjdGlvbkNyZWF0b3IgfSBmcm9tICcuLi9yZWR1eC9hY3Rpb24tY3JlYXRvcnMvc2V0TmV3U2VhcmNoVmFsdWVBY3Rpb25DcmVhdG9yJztcbmltcG9ydCB7IHR5cGVkVmFsdWVTZWxlY3RvciB9IGZyb20gJy4uL3JlZHV4L3NlbGVjdG9ycy90eXBlZFZhbHVlU2VsZWN0b3InO1xuaW1wb3J0IHsgc2V0U3RvcmVkSW5Mb2NhbFN0b3JhZ2VBY3Rpb25DcmVhdG9yIH0gZnJvbSAnLi4vcmVkdXgvYWN0aW9uLWNyZWF0b3JzL3NldFN0b3JlZEluTG9jYWxTdG9yYWdlUXVlcnknO1xuXG5pbXBvcnQgeyB1c2VSb3V0ZXIsIHVzZVNlYXJjaFBhcmFtcyB9IGZyb20gJ25leHQvbmF2aWdhdGlvbic7XG5jb25zdCB1c2VVUkwgPSAoKSA9PiB7XG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VBcHBEaXNwYXRjaCgpO1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gICAgY29uc3Qgc2VhcmNoUGFyYW0gPSB1c2VTZWFyY2hQYXJhbXMoKVxuICAgIGNvbnN0IHBhcmFtcyA9IHVzZVNlbGVjdG9yKHBhcmFtc1NlbGVjdG9yKTtcblxuICAgIGNvbnN0IGdldEN1cnJlbnRQYXJhbXMgPSAoKSA9PiB7XG5cbiAgICB9O1xuXG4gICAgY29uc3Qgc2V0UGFnZSA9IChwYWdlOiBudW1iZXIsIHF1ZXJ5OiBzdHJpbmcpID0+IHtcbiAgICAgICAgY29uc3QgbmV3VXJsID0gYC8/cGFnZT0ke1N0cmluZyhwYWdlKX0ke3F1ZXJ5ID8gYHF1ZXJ5PSR7cXVlcnl9YCA6IGBgfWBcbiAgICAgICAgcm91dGVyLnB1c2gobmV3VXJsKTtcbiAgICB9O1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0b3JlZFBhcmFtID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzZWFyY2hQYXJhbVwiKVxuICAgICAgICBpZiAoc3RvcmVkUGFyYW0pIHtcbiAgICAgICAgICAgIGRpc3BhdGNoKHNldFF1ZXJ5QWN0aW9uQ3JlYXRvcihzdG9yZWRQYXJhbSkpXG4gICAgICAgIH1cbiAgICB9LCBbXSk7XG4gIFxudXNlRWZmZWN0KCgpPT4ge1xuICAgLyogY29uc3QgcGFnZSA9IHNlYXJjaFBhcmFtLmdldCgncGFnZScpO1xuICAgIGNvbnN0IHF1ZXJ5ID0gc2VhcmNoUGFyYW0uZ2V0KCdxdWVyeScpXG4gICAgbGV0IHVybCA9XCJcIlxuICAgIGlmKCFwYWdlICkgKi9cbiAgICBsZXQgdXJsID1gP3BhZ2U9JWBcbn0sIFtdKVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhZ2UgPSBzZWFyY2hQYXJhbS5nZXQoJ3BhZ2UnKTtcbiAgICAgICAgY29uc3QgcXVlcnkgPSBzZWFyY2hQYXJhbS5nZXQoJ3F1ZXJ5JylcbiAgICAgICAgaWYocXVlcnkhPXVuZGVmaW5lZCkge1xuXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInNlYXJjaFBhcmFtXCIsIFN0cmluZyhxdWVyeSkpXG4gICAgICAgIH1cbiAgICAgICAgaWYocGFnZSAmJiBxdWVyeSkge1xuICAgICAgICAgICAgZGlzcGF0Y2goc2V0U2VhcmNoUGFyYW1zQWN0aW9uQ3JlYXRvciggTnVtYmVyKHBhZ2UpLCBTdHJpbmcocXVlcnkpKSlcbiAgICAgICAgfVxuXG5cbiAgICB9LCBbcm91dGVyXSk7XG4gICBcblxuICAgIGNvbnN0IGhhbmRsZUlucHV0ID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgICAgICBkaXNwYXRjaChzZXRRdWVyeUFjdGlvbkNyZWF0b3IoZXZlbnQudGFyZ2V0LnZhbHVlKSk7XG4gICAgfTtcbiAgICBjb25zdCB0eXBlZFZhbHVlID0gdXNlU2VsZWN0b3IodHlwZWRWYWx1ZVNlbGVjdG9yKVxuICAgIGNvbnN0IGhhbmRsZVNlYXJjaCA9ICgpID0+IHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3NlYXJjaFBhcmFtJywgU3RyaW5nKHR5cGVkVmFsdWUpKTtcbiAgICAgICAgZGlzcGF0Y2goc2V0TmV3U2VhcmNoVmFsdWVBY3Rpb25DcmVhdG9yKCkpXG4gICAgICAgIGNvbnN0IG5ld1VybCA9IGAvP3BhZ2U9JHtTdHJpbmcoMSl9cXVlcnk9JHt0eXBlZFZhbHVlfWBcbiAgICBcbiAgICAgICAgcm91dGVyLnB1c2gobmV3VXJsKTtcbiAgICAgIFxuICAgIH07XG4gICBcbiAgICByZXR1cm4geyBnZXRDdXJyZW50UGFyYW1zLCBzZXRQYWdlLCBoYW5kbGVJbnB1dCwgaGFuZGxlU2VhcmNoIH07XG59O1xuZXhwb3J0IGRlZmF1bHQgdXNlVVJMO1xuXG5cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJwYXJhbXNTZWxlY3RvciIsInVzZUFwcERpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJzZXRRdWVyeUFjdGlvbkNyZWF0b3IiLCJzZXRTZWFyY2hQYXJhbXNBY3Rpb25DcmVhdG9yIiwic2V0TmV3U2VhcmNoVmFsdWVBY3Rpb25DcmVhdG9yIiwidHlwZWRWYWx1ZVNlbGVjdG9yIiwidXNlUm91dGVyIiwidXNlU2VhcmNoUGFyYW1zIiwidXNlVVJMIiwiZGlzcGF0Y2giLCJyb3V0ZXIiLCJzZWFyY2hQYXJhbSIsInBhcmFtcyIsImdldEN1cnJlbnRQYXJhbXMiLCJzZXRQYWdlIiwicGFnZSIsInF1ZXJ5IiwibmV3VXJsIiwiU3RyaW5nIiwicHVzaCIsInN0b3JlZFBhcmFtIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInVybCIsImdldCIsInVuZGVmaW5lZCIsInNldEl0ZW0iLCJOdW1iZXIiLCJoYW5kbGVJbnB1dCIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJ0eXBlZFZhbHVlIiwiaGFuZGxlU2VhcmNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/hooks/useURL.ts\n"));

/***/ })

});