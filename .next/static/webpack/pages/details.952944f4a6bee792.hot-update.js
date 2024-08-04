"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/details",{

/***/ "./src/components/UserData/index.tsx":
/*!*******************************************!*\
  !*** ./src/components/UserData/index.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.module.scss */ \"./src/components/UserData/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _hooks_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/redux */ \"./src/hooks/redux.ts\");\n/* harmony import */ var _ThemeContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ThemeContext */ \"./src/components/ThemeContext/index.tsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _redux_selectors_isLoadingUserData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/selectors/isLoadingUserData */ \"./src/redux/selectors/isLoadingUserData.ts\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../api */ \"./src/api/index.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _redux_action_creators_setClickedUserActionCreator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../redux/action-creators/setClickedUserActionCreator */ \"./src/redux/action-creators/setClickedUserActionCreator.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst UserData = ()=>{\n    _s();\n    const dispatch = (0,_hooks_redux__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();\n    const { isDark } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_ThemeContext__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n    const loading = (0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useSelector)(_redux_selectors_isLoadingUserData__WEBPACK_IMPORTED_MODULE_5__.isLoadingUserDataSelector);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (router.isReady) {\n            const { user } = router.query;\n            const fetchData = async ()=>{\n                try {\n                    const data = await (0,_api__WEBPACK_IMPORTED_MODULE_6__.getPersonalData)(String(user));\n                    console.log(\"us\", JSON.stringify(data));\n                    //\tdispatch(setUsersActionCreator(data))\n                    dispatch((0,_redux_action_creators_setClickedUserActionCreator__WEBPACK_IMPORTED_MODULE_8__.SetClickedUserActionCreator)());\n                } catch (err) {}\n            };\n            fetchData();\n        }\n    }, [\n        router\n    ]);\n    /*\n\t   useEffect(() => {\n\t\t   const fetchData = async () => {\n\t    \n\t\t\t   try {\n\t\t\t\t   const data = await getPersonalData(params.limit, params.offset, params.query);\n\t\t\t\t   dispatch(setUsersActionCreator(data))\n\t\t    \n\t\t\t   } catch (err) {\n\t\t    \n\t\t\t   }  \n\t\t   };\n\t\t   fetchData();\n\t   }, [params.limit, params.offset, params.query]); \n   \t\n   };\n   */ return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"aside\", {\n        className: \"\".concat((_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().sidebar), \" \").concat(isDark ? (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().sidebarDark) : \"\")\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\wotbl\\\\search-rs\\\\src\\\\components\\\\UserData\\\\index.tsx\",\n        lineNumber: 64,\n        columnNumber: 3\n    }, undefined);\n};\n_s(UserData, \"/3L6J9y4XzdXVXDFGMrbSjN3P+I=\", false, function() {\n    return [\n        _hooks_redux__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch,\n        next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter,\n        react_redux__WEBPACK_IMPORTED_MODULE_9__.useSelector\n    ];\n});\n_c = UserData;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserData); /*\nimport StoredUsersButton from './components/StoredUsersFlyoutElement';\nconst App = ({ query }: SearchPageProps) => {\n\tconst dispatch = useAppDispatch();\n\tconst storedUsers = useSelector(storedUsersSelector);\n\tconst isLoading = useSelector(isLoadingSelector);\n\tconst [trigger, setTrigger] = useState(false);\n\tconst { data, error } = useSearchUsersQuery(query, {\n\t\tskip: !trigger,\n\t});\n\tconst handleButtonClick = () => {\n\t\tsetTrigger(true);\n\t};\n\n\tuseEffect(() => {\n\t\tif (data) {\n\t\t\tdispatch(setUsersActionCreator(data.items ? data.items : []));\n\t\t}\n\t}, [data, dispatch, trigger]);\n\tuseEffect(() => {\n\t\tsetTrigger(true);\n\t\thandleButtonClick()\n\t}, [])\n\treturn (\n\t\t<>\n\t\t\t<ErrorBoundary>\n\t\t\t\t<ThemeProvider>\n\t\t\t\t\t\t<div className=\"container\">\n\t\t\t\t\t\t\t<List />\n\t\t\t\t\t\t\t<ErrorBoundary>\n\t\t\t\t\t\t\t\t<ErrorComponent />\n\t\t\t\t\t\t\t</ErrorBoundary>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t{storedUsers.length > 0 && <StoredUsersButton />}\n\t\t\t\t\t\t{isLoading && <Spinner />}\n\t\t\t\t</ThemeProvider>\n\n\t\t\t</ErrorBoundary>\n\t\t</>\n\t);\n};\n\nexport default App;\n*/ \nvar _c;\n$RefreshReg$(_c, \"UserData\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Vc2VyRGF0YS9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBa0M7QUFLTztBQUNOO0FBRWdCO0FBRVI7QUFFRDtBQUcwQztBQUN4QztBQUNKO0FBQzhEO0FBQ3RHLE1BQU1VLFdBQVc7O0lBQ2hCLE1BQU1DLFdBQVdSLDREQUFjQTtJQUMvQixNQUFNUyxTQUFTSixzREFBU0E7SUFDeEIsTUFBTSxFQUFFSyxNQUFNLEVBQUUsR0FBR1gsaURBQVVBLENBQUNFLHFEQUFZQTtJQUUxQyxNQUFNVSxVQUFVVCx3REFBV0EsQ0FBQ0MseUZBQXlCQTtJQUVyRE4sZ0RBQVNBLENBQUM7UUFDVCxJQUFJWSxPQUFPRyxPQUFPLEVBQUU7WUFDbkIsTUFBTSxFQUFFQyxJQUFJLEVBQUUsR0FBR0osT0FBT0ssS0FBSztZQUM3QixNQUFNQyxZQUFZO2dCQUNqQixJQUFJO29CQUNILE1BQU1DLE9BQU8sTUFBTVoscURBQWVBLENBQUNhLE9BQU9KO29CQUMxQ0ssUUFBUUMsR0FBRyxDQUFDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQ0w7b0JBQ2pDLHdDQUF3QztvQkFDeENSLFNBQVNGLCtHQUEyQkE7Z0JBRXJDLEVBQUUsT0FBT2dCLEtBQUssQ0FFZDtZQUNEO1lBQ0FQO1FBR0Q7SUFDRCxHQUFHO1FBQUNOO0tBQU87SUFDWDs7Ozs7Ozs7Ozs7Ozs7OztHQWdCRSxHQUNGLHFCQUNDLDhEQUFDYztRQUFNQyxXQUFXLEdBQXFCZCxPQUFsQlosb0VBQWMsRUFBQyxLQUFvQyxPQUFqQ1ksU0FBU1osd0VBQWtCLEdBQUc7Ozs7OztBQXFCdkU7R0FqRU1TOztRQUNZUCx3REFBY0E7UUFDaEJLLGtEQUFTQTtRQUdSSCxvREFBV0E7OztLQUx0Qks7QUFtRU4sK0RBQWVBLFFBQVFBLEVBQUMsQ0FFeEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVXNlckRhdGEvaW5kZXgudHN4PzMyYTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlTmF2aWdhdGUsIHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgU3Bpbm5lciBmcm9tICcuLi9TcGlubmVyJztcblxuaW1wb3J0IHsgdXNlTGF6eUdldFVzZXJHaXRodWJRdWVyeSB9IGZyb20gJy4uLy4uL3JlZHV4L3NsaWNlcy91c2VyUXVlcnlTbGljZSc7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy5tb2R1bGUuc2Nzc1wiXG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyB1c2VBcHBEaXNwYXRjaCB9IGZyb20gJy4uLy4uL2hvb2tzL3JlZHV4JztcblxuaW1wb3J0IFRoZW1lQ29udGV4dCBmcm9tICcuLi9UaGVtZUNvbnRleHQnO1xuXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHNldExvYWRpbmdVc2VyRGF0YUFjdGlvbkNyZWF0b3IgfSBmcm9tICcuLi8uLi9yZWR1eC9hY3Rpb24tY3JlYXRvcnMvc2V0TG9hZGluZ1VzZXJEYXRhQWN0aW9uQ3JlYXRvcic7XG5cbmltcG9ydCB7IGlzTG9hZGluZ1VzZXJEYXRhU2VsZWN0b3IgfSBmcm9tICcuLi8uLi9yZWR1eC9zZWxlY3RvcnMvaXNMb2FkaW5nVXNlckRhdGEnO1xuaW1wb3J0IHsgZ2V0UGVyc29uYWxEYXRhIH0gZnJvbSAnLi4vLi4vYXBpJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IFNldENsaWNrZWRVc2VyQWN0aW9uQ3JlYXRvciB9IGZyb20gJy4uLy4uL3JlZHV4L2FjdGlvbi1jcmVhdG9ycy9zZXRDbGlja2VkVXNlckFjdGlvbkNyZWF0b3InO1xuY29uc3QgVXNlckRhdGEgPSAoKSA9PiB7XG5cdGNvbnN0IGRpc3BhdGNoID0gdXNlQXBwRGlzcGF0Y2goKTtcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblx0Y29uc3QgeyBpc0RhcmsgfSA9IHVzZUNvbnRleHQoVGhlbWVDb250ZXh0KTtcblxuXHRjb25zdCBsb2FkaW5nID0gdXNlU2VsZWN0b3IoaXNMb2FkaW5nVXNlckRhdGFTZWxlY3Rvcik7XG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRpZiAocm91dGVyLmlzUmVhZHkpIHtcblx0XHRcdGNvbnN0IHsgdXNlciB9ID0gcm91dGVyLnF1ZXJ5O1xuXHRcdFx0Y29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRQZXJzb25hbERhdGEoU3RyaW5nKHVzZXIpKTtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhcInVzXCIsIEpTT04uc3RyaW5naWZ5KGRhdGEpKVxuXHRcdFx0XHRcdC8vXHRkaXNwYXRjaChzZXRVc2Vyc0FjdGlvbkNyZWF0b3IoZGF0YSkpXG5cdFx0XHRcdFx0ZGlzcGF0Y2goU2V0Q2xpY2tlZFVzZXJBY3Rpb25DcmVhdG9yKCkpXG5cblx0XHRcdFx0fSBjYXRjaCAoZXJyKSB7XG5cblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHRcdGZldGNoRGF0YSgpO1xuXG5cblx0XHR9XG5cdH0sIFtyb3V0ZXJdKVxuXHQvKlxuXHQgICB1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdCAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcblx0ICAgIFxuXHRcdFx0ICAgdHJ5IHtcblx0XHRcdFx0ICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldFBlcnNvbmFsRGF0YShwYXJhbXMubGltaXQsIHBhcmFtcy5vZmZzZXQsIHBhcmFtcy5xdWVyeSk7XG5cdFx0XHRcdCAgIGRpc3BhdGNoKHNldFVzZXJzQWN0aW9uQ3JlYXRvcihkYXRhKSlcblx0XHQgICAgXG5cdFx0XHQgICB9IGNhdGNoIChlcnIpIHtcblx0XHQgICAgXG5cdFx0XHQgICB9ICBcblx0XHQgICB9O1xuXHRcdCAgIGZldGNoRGF0YSgpO1xuXHQgICB9LCBbcGFyYW1zLmxpbWl0LCBwYXJhbXMub2Zmc2V0LCBwYXJhbXMucXVlcnldKTsgXG4gICBcdFxuICAgfTtcbiAgICovXG5cdHJldHVybiAoXG5cdFx0PGFzaWRlIGNsYXNzTmFtZT17YCR7c3R5bGVzLnNpZGViYXJ9ICR7aXNEYXJrID8gc3R5bGVzLnNpZGViYXJEYXJrIDogJyd9YH0+XG5cdFx0XHR7Lypcblx0XHR7bG9hZGluZyAmJiA8U3Bpbm5lciBjbGFzc05hbWU9e3N0eWxlcy5zcGlubmVyfSBkYXRhLXRlc3RpZD1cInNwaW5uZXJcIiAvPn1cblx0XHR7ZGF0YSAmJiAoXG5cdFx0ICA8ZGl2PlxuXHRcdFx0PGgyPntkYXRhLmxvZ2lufTwvaDI+XG5cdFx0XHQ8aW1nIFxuXHRcdFx0ICBzcmM9e2RhdGEuYXZhdGFyX3VybH0gXG5cdFx0XHQgIGFsdD17YCR7ZGF0YS5sb2dpbn0ncyBhdmF0YXJgfSBcblx0XHRcdCAgY2xhc3NOYW1lPXtzdHlsZXMuYXZhdGFyfVxuXHRcdFx0Lz5cblx0XHRcdDxwPklEOiB7ZGF0YS5pZH08L3A+XG5cdFx0XHQ8cD5UeXBlOiB7ZGF0YS50eXBlfTwvcD5cblx0XHQgIDwvZGl2PlxuXHRcdCl9XG5cdFx0PGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5jbG9zZUJ0bn0gb25DbGljaz17aGFuZGxlUmV0dXJufT5cblx0XHRDbG9zZVxuXHRcdDwvYnV0dG9uPlxuXHRcdCovfVxuXHRcdDwvYXNpZGU+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBVc2VyRGF0YTtcblxuLypcbmltcG9ydCBTdG9yZWRVc2Vyc0J1dHRvbiBmcm9tICcuL2NvbXBvbmVudHMvU3RvcmVkVXNlcnNGbHlvdXRFbGVtZW50JztcbmNvbnN0IEFwcCA9ICh7IHF1ZXJ5IH06IFNlYXJjaFBhZ2VQcm9wcykgPT4ge1xuXHRjb25zdCBkaXNwYXRjaCA9IHVzZUFwcERpc3BhdGNoKCk7XG5cdGNvbnN0IHN0b3JlZFVzZXJzID0gdXNlU2VsZWN0b3Ioc3RvcmVkVXNlcnNTZWxlY3Rvcik7XG5cdGNvbnN0IGlzTG9hZGluZyA9IHVzZVNlbGVjdG9yKGlzTG9hZGluZ1NlbGVjdG9yKTtcblx0Y29uc3QgW3RyaWdnZXIsIHNldFRyaWdnZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuXHRjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTZWFyY2hVc2Vyc1F1ZXJ5KHF1ZXJ5LCB7XG5cdFx0c2tpcDogIXRyaWdnZXIsXG5cdH0pO1xuXHRjb25zdCBoYW5kbGVCdXR0b25DbGljayA9ICgpID0+IHtcblx0XHRzZXRUcmlnZ2VyKHRydWUpO1xuXHR9O1xuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0aWYgKGRhdGEpIHtcblx0XHRcdGRpc3BhdGNoKHNldFVzZXJzQWN0aW9uQ3JlYXRvcihkYXRhLml0ZW1zID8gZGF0YS5pdGVtcyA6IFtdKSk7XG5cdFx0fVxuXHR9LCBbZGF0YSwgZGlzcGF0Y2gsIHRyaWdnZXJdKTtcblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRzZXRUcmlnZ2VyKHRydWUpO1xuXHRcdGhhbmRsZUJ1dHRvbkNsaWNrKClcblx0fSwgW10pXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxFcnJvckJvdW5kYXJ5PlxuXHRcdFx0XHQ8VGhlbWVQcm92aWRlcj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHRcdDxMaXN0IC8+XG5cdFx0XHRcdFx0XHRcdDxFcnJvckJvdW5kYXJ5PlxuXHRcdFx0XHRcdFx0XHRcdDxFcnJvckNvbXBvbmVudCAvPlxuXHRcdFx0XHRcdFx0XHQ8L0Vycm9yQm91bmRhcnk+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdHtzdG9yZWRVc2Vycy5sZW5ndGggPiAwICYmIDxTdG9yZWRVc2Vyc0J1dHRvbiAvPn1cblx0XHRcdFx0XHRcdHtpc0xvYWRpbmcgJiYgPFNwaW5uZXIgLz59XG5cdFx0XHRcdDwvVGhlbWVQcm92aWRlcj5cblxuXHRcdFx0PC9FcnJvckJvdW5kYXJ5PlxuXHRcdDwvPlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuKi8iXSwibmFtZXMiOlsidXNlRWZmZWN0Iiwic3R5bGVzIiwidXNlQ29udGV4dCIsInVzZUFwcERpc3BhdGNoIiwiVGhlbWVDb250ZXh0IiwidXNlU2VsZWN0b3IiLCJpc0xvYWRpbmdVc2VyRGF0YVNlbGVjdG9yIiwiZ2V0UGVyc29uYWxEYXRhIiwidXNlUm91dGVyIiwiU2V0Q2xpY2tlZFVzZXJBY3Rpb25DcmVhdG9yIiwiVXNlckRhdGEiLCJkaXNwYXRjaCIsInJvdXRlciIsImlzRGFyayIsImxvYWRpbmciLCJpc1JlYWR5IiwidXNlciIsInF1ZXJ5IiwiZmV0Y2hEYXRhIiwiZGF0YSIsIlN0cmluZyIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwic3RyaW5naWZ5IiwiZXJyIiwiYXNpZGUiLCJjbGFzc05hbWUiLCJzaWRlYmFyIiwic2lkZWJhckRhcmsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/UserData/index.tsx\n"));

/***/ }),

/***/ "./src/redux/action-creators/setClickedUserActionCreator.ts":
/*!******************************************************************!*\
  !*** ./src/redux/action-creators/setClickedUserActionCreator.ts ***!
  \******************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SetClickedUserActionCreator: function() { return /* binding */ SetClickedUserActionCreator; }\n/* harmony export */ });\nconst SetClickedUserActionCreator = (user)=>(dispatch)=>{\n    //dispatch(setAddToStoredElement(user));\n    //dispatch(setClickedUser(user))\n    };\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVkdXgvYWN0aW9uLWNyZWF0b3JzL3NldENsaWNrZWRVc2VyQWN0aW9uQ3JlYXRvci50cyIsIm1hcHBpbmdzIjoiOzs7O0FBSU8sTUFBTUEsOEJBQThCLENBQUNDLE9BQW1CLENBQUNDO0lBQy9ELHdDQUF3QztJQUNyQyxnQ0FBZ0M7SUFDcEMsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcmVkdXgvYWN0aW9uLWNyZWF0b3JzL3NldENsaWNrZWRVc2VyQWN0aW9uQ3JlYXRvci50cz8yNTA5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNldEFkZFRvU3RvcmVkRWxlbWVudCB9IGZyb20gJy4uL3NsaWNlcy9zZWxlY3RlZEVsZW1lbnRzU2xpY2UnO1xyXG5pbXBvcnQgeyBBcHBEaXNwYXRjaCB9IGZyb20gJy4uL3N0b3JlJztcclxuaW1wb3J0IHsgVXNlckl0ZW0gfSBmcm9tICcuLi90eXBlcyc7XHJcbmltcG9ydCB7IHNldENsaWNrZWRVc2VyIH0gZnJvbSAnLi4vc2xpY2VzL2FwcFNsaWNlJztcclxuZXhwb3J0IGNvbnN0IFNldENsaWNrZWRVc2VyQWN0aW9uQ3JlYXRvciA9ICh1c2VyOiBVc2VySXRlbSkgPT4gKGRpc3BhdGNoOiBBcHBEaXNwYXRjaCkgPT4ge1xyXG5cdC8vZGlzcGF0Y2goc2V0QWRkVG9TdG9yZWRFbGVtZW50KHVzZXIpKTtcclxuICAgIC8vZGlzcGF0Y2goc2V0Q2xpY2tlZFVzZXIodXNlcikpXHJcbn07XHJcbiJdLCJuYW1lcyI6WyJTZXRDbGlja2VkVXNlckFjdGlvbkNyZWF0b3IiLCJ1c2VyIiwiZGlzcGF0Y2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/redux/action-creators/setClickedUserActionCreator.ts\n"));

/***/ })

});