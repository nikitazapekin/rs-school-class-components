"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/homepage",{

/***/ "./src/redux/slices/appSlice.ts":
/*!**************************************!*\
  !*** ./src/redux/slices/appSlice.ts ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchUserData: function() { return /* binding */ fetchUserData; },\n/* harmony export */   setError: function() { return /* binding */ setError; },\n/* harmony export */   setFirstPage: function() { return /* binding */ setFirstPage; },\n/* harmony export */   setLoading: function() { return /* binding */ setLoading; },\n/* harmony export */   setLoadingUserData: function() { return /* binding */ setLoadingUserData; },\n/* harmony export */   setNewSearchValue: function() { return /* binding */ setNewSearchValue; },\n/* harmony export */   setNextPage: function() { return /* binding */ setNextPage; },\n/* harmony export */   setPrevPage: function() { return /* binding */ setPrevPage; },\n/* harmony export */   setQueryPage: function() { return /* binding */ setQueryPage; },\n/* harmony export */   setSearchParamsURL: function() { return /* binding */ setSearchParamsURL; },\n/* harmony export */   setStoredInLocalStorageQuery: function() { return /* binding */ setStoredInLocalStorageQuery; },\n/* harmony export */   setTypedValue: function() { return /* binding */ setTypedValue; },\n/* harmony export */   setUsers: function() { return /* binding */ setUsers; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/lib/axios.js\");\n\n\nconst fetchUserData = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"users/fetchUserData\", async (param, thunkAPI)=>{\n    let { limit, offset, typedValue } = param;\n    let url;\n    if (typedValue.trim() === \"\") {\n        url = \"https://api.github.com/search/users?q=type:user&page=\".concat(offset, \"&per_page=\").concat(limit);\n    } else {\n        url = \"https://api.github.com/search/users?q=\".concat(typedValue, \"&page=\").concat(offset, \"&per_page=\").concat(limit);\n    }\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(url);\n        return response.data.items;\n    } catch (error) {\n        if (axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].isAxiosError(error)) {\n            const axiosError = error;\n            return thunkAPI.rejectWithValue(axiosError.message);\n        } else {\n            return thunkAPI.rejectWithValue(\"Unknown error\");\n        }\n    }\n});\nconst initialState = {\n    isLoading: false,\n    error: null,\n    isLoadingUserData: false,\n    users: [],\n    typedValue: \"\",\n    params: {\n        limit: 10,\n        offset: 1,\n        query: \"\",\n        storedValue: \"\"\n    },\n    status: \"idle\"\n};\nconst appSlicee = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"app\",\n    initialState,\n    reducers: {\n        setLoading (state, action) {\n            state.isLoading = action.payload;\n        },\n        setLoadingUserData (state, action) {\n            state.isLoadingUserData = action.payload;\n        },\n        setError (state, action) {\n            state.error = action.payload;\n        },\n        setSearchParamsURL (state, action) {\n            state.params.query = action.payload.query;\n            state.params.offset = action.payload.offset;\n        },\n        setFirstPage (state) {\n            state.params.offset = 1;\n        },\n        setNextPage (state) {\n            state.params.offset = state.params.offset + 1;\n        },\n        setPrevPage (state) {\n            state.params.offset = state.params.offset - 1;\n        },\n        setQueryPage (state, action) {\n            console.log(\"PAYLOAD\", action.payload);\n            state.params.query = action.payload;\n            console.log(\"NEW PARAMS\", stor);\n        },\n        setUsers (state, action) {\n            state.users = action.payload;\n        },\n        setStoredInLocalStorageQuery (state, action) {\n            state.params.storedValue = action.payload;\n            state.params.query = action.payload;\n        },\n        setTypedValue (state, action) {\n            state.typedValue = action.payload;\n        },\n        setNewSearchValue (state) {\n            //\tstate.typedValue = action.payload\n            state.params.query = state.typedValue;\n            state.params.storedValue = state.typedValue;\n        }\n    },\n    extraReducers: (builder)=>{\n        builder.addCase(fetchUserData.pending, (state)=>{\n            state.status = \"loading\";\n        }).addCase(fetchUserData.fulfilled, (state, action)=>{\n            state.status = \"succeeded\";\n            console.log(\"US\", action.payload);\n            state.users = action.payload;\n            console.log(\"USs\", state.users);\n        }).addCase(fetchUserData.rejected, (state, action)=>{\n            state.status = \"failed\";\n            state.error = action.payload;\n        });\n    }\n});\nconst { setLoading, setError, setLoadingUserData, setSearchParamsURL, setNextPage, setPrevPage, setQueryPage, setUsers, setFirstPage, setStoredInLocalStorageQuery, setTypedValue, setNewSearchValue } = appSlicee.actions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (appSlicee.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSwgUGF5bG9hZEFjdGlvbiwgY3JlYXRlQXN5bmNUaHVuayB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xuaW1wb3J0IHsgQXBwU3RhdGVlLCBTZWFyY2hUeXBlcywgVXNlckRhdGFBcnJheSB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IEF4aW9zUmVzcG9uc2UsIEF4aW9zRXJyb3IgfWZyb20gJ2F4aW9zJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG4vKlxuZXhwb3J0IHR5cGUgVXNlckRhdGFBcnJheSA9IEFycmF5PHtcblx0bG9naW46IHN0cmluZztcblx0aWQ6IG51bWJlcjtcblx0bm9kZV9pZDogc3RyaW5nO1xuXHRhdmF0YXJfdXJsOiBzdHJpbmc7XG5cdGdyYXZhdGFyX2lkOiBzdHJpbmc7XG5cdHVybDogc3RyaW5nO1xuXHRodG1sX3VybDogc3RyaW5nO1xuXHRmb2xsb3dlcnNfdXJsOiBzdHJpbmc7XG5cdGZvbGxvd2luZ191cmw6IHN0cmluZztcblx0Z2lzdHNfdXJsOiBzdHJpbmc7XG5cdHN0YXJyZWRfdXJsOiBzdHJpbmc7XG5cdHN1YnNjcmlwdGlvbnNfdXJsOiBzdHJpbmc7XG5cdG9yZ2FuaXphdGlvbnNfdXJsOiBzdHJpbmc7XG5cdHJlcG9zX3VybDogc3RyaW5nO1xuXHRldmVudHNfdXJsOiBzdHJpbmc7XG5cdHJlY2VpdmVkX2V2ZW50c191cmw6IHN0cmluZztcblx0dHlwZTogc3RyaW5nO1xuXHRzaXRlX2FkbWluOiBib29sZWFuO1xuXHRzY29yZTogbnVtYmVyO1xufT47ICovXG5leHBvcnQgaW50ZXJmYWNlIFVzZXJEYXRhIHtcblx0dG90YWxfY291bnQ6IG51bWJlcjtcblx0aW5jb21wbGV0ZV9yZXN1bHRzOiBib29sZWFuO1xuXHRpdGVtczogVXNlckRhdGFBcnJheTtcbn1cblxuXG5leHBvcnQgY29uc3QgZmV0Y2hVc2VyRGF0YSA9IGNyZWF0ZUFzeW5jVGh1bmsoXG5cdCd1c2Vycy9mZXRjaFVzZXJEYXRhJyxcblx0YXN5bmMgKHsgbGltaXQsIG9mZnNldCwgdHlwZWRWYWx1ZSB9OiB7IGxpbWl0OiBudW1iZXI7IG9mZnNldDogbnVtYmVyOyB0eXBlZFZhbHVlOiBzdHJpbmcgfSwgdGh1bmtBUEkpID0+IHtcblx0ICBsZXQgdXJsOiBzdHJpbmc7XG5cdCAgaWYgKHR5cGVkVmFsdWUudHJpbSgpID09PSAnJykge1xuXHRcdHVybCA9IGBodHRwczovL2FwaS5naXRodWIuY29tL3NlYXJjaC91c2Vycz9xPXR5cGU6dXNlciZwYWdlPSR7b2Zmc2V0fSZwZXJfcGFnZT0ke2xpbWl0fWA7XG5cdCAgfSBlbHNlIHtcblx0XHR1cmwgPSBgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9zZWFyY2gvdXNlcnM/cT0ke3R5cGVkVmFsdWV9JnBhZ2U9JHtvZmZzZXR9JnBlcl9wYWdlPSR7bGltaXR9YDtcblx0ICB9XG4gIFxuXHQgIHRyeSB7XG5cdFx0Y29uc3QgcmVzcG9uc2U6IEF4aW9zUmVzcG9uc2U8VXNlckRhdGE+ID0gYXdhaXQgYXhpb3MuZ2V0KHVybCk7XG5cdFx0cmV0dXJuIHJlc3BvbnNlLmRhdGEuaXRlbXM7XG5cdCAgfSBjYXRjaCAoZXJyb3IpIHtcblx0XHRpZiAoYXhpb3MuaXNBeGlvc0Vycm9yKGVycm9yKSkge1xuXHRcdCAgY29uc3QgYXhpb3NFcnJvciA9IGVycm9yIGFzIEF4aW9zRXJyb3I7XG5cdFx0ICByZXR1cm4gdGh1bmtBUEkucmVqZWN0V2l0aFZhbHVlKGF4aW9zRXJyb3IubWVzc2FnZSk7XG5cdFx0fSBlbHNlIHtcblx0XHQgIHJldHVybiB0aHVua0FQSS5yZWplY3RXaXRoVmFsdWUoJ1Vua25vd24gZXJyb3InKTtcblx0XHR9XG5cdCAgfVxuXHR9XG4gICk7XG5cbiAgXG5cbiAgXG5jb25zdCBpbml0aWFsU3RhdGU6IEFwcFN0YXRlZSA9IHtcblx0aXNMb2FkaW5nOiBmYWxzZSxcblx0ZXJyb3I6IG51bGwsXG5cdGlzTG9hZGluZ1VzZXJEYXRhOiBmYWxzZSxcblx0dXNlcnM6IFtdLFxuXHR0eXBlZFZhbHVlOiBcIlwiLFxuXHRwYXJhbXM6IHtcblx0XHRsaW1pdDogMTAsXG5cdFx0b2Zmc2V0OiAxLFxuXHRcdHF1ZXJ5OiAnJyxcblx0XHRzdG9yZWRWYWx1ZTogJycsXG5cdH0sXG5cdHN0YXR1czogJ2lkbGUnLFxuICAgXG59O1xuY29uc3QgYXBwU2xpY2VlID0gY3JlYXRlU2xpY2Uoe1xuXHRuYW1lOiAnYXBwJyxcblx0aW5pdGlhbFN0YXRlLFxuXHRyZWR1Y2Vyczoge1xuXHRcdHNldExvYWRpbmcoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxib29sZWFuPikge1xuXHRcdFx0c3RhdGUuaXNMb2FkaW5nID0gYWN0aW9uLnBheWxvYWQ7XG5cdFx0fSxcblx0XHRzZXRMb2FkaW5nVXNlckRhdGEoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxib29sZWFuPikge1xuXHRcdFx0c3RhdGUuaXNMb2FkaW5nVXNlckRhdGEgPSBhY3Rpb24ucGF5bG9hZDtcblx0XHR9LFxuXHRcdHNldEVycm9yKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248c3RyaW5nIHwgbnVsbD4pIHtcblx0XHRcdHN0YXRlLmVycm9yID0gYWN0aW9uLnBheWxvYWQ7XG5cdFx0fSxcblxuXHRcdHNldFNlYXJjaFBhcmFtc1VSTChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPFNlYXJjaFR5cGVzPikge1xuXHRcdFx0c3RhdGUucGFyYW1zLnF1ZXJ5ID0gYWN0aW9uLnBheWxvYWQucXVlcnk7XG5cdFx0XHRzdGF0ZS5wYXJhbXMub2Zmc2V0ID0gYWN0aW9uLnBheWxvYWQub2Zmc2V0O1xuXHRcdH0sXG5cdFx0c2V0Rmlyc3RQYWdlKHN0YXRlKSB7XG5cdFx0XHRzdGF0ZS5wYXJhbXMub2Zmc2V0ID0gMTtcblx0XHR9LFxuXHRcdHNldE5leHRQYWdlKHN0YXRlKSB7XG5cdFx0XHRzdGF0ZS5wYXJhbXMub2Zmc2V0ID0gc3RhdGUucGFyYW1zLm9mZnNldCArIDE7XG5cdFx0fSxcblx0XHRzZXRQcmV2UGFnZShzdGF0ZSkge1xuXHRcdFx0c3RhdGUucGFyYW1zLm9mZnNldCA9IHN0YXRlLnBhcmFtcy5vZmZzZXQgLSAxO1xuXHRcdH0sXG5cdFx0c2V0UXVlcnlQYWdlKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248c3RyaW5nPikge1xuXHRcdFx0Y29uc29sZS5sb2coXCJQQVlMT0FEXCIsIGFjdGlvbi5wYXlsb2FkKVxuXHRcdFx0c3RhdGUucGFyYW1zLnF1ZXJ5ID0gYWN0aW9uLnBheWxvYWQ7XG5cdFx0XHRjb25zb2xlLmxvZyhcIk5FVyBQQVJBTVNcIiwgc3Rvcilcblx0XHR9LFxuXHRcdHNldFVzZXJzKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248VXNlckRhdGFBcnJheT4pIHtcblx0XHRcdHN0YXRlLnVzZXJzID0gYWN0aW9uLnBheWxvYWQ7XG5cdFx0fSxcblx0XHRzZXRTdG9yZWRJbkxvY2FsU3RvcmFnZVF1ZXJ5KHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248c3RyaW5nPikge1xuXHRcdFx0c3RhdGUucGFyYW1zLnN0b3JlZFZhbHVlID0gYWN0aW9uLnBheWxvYWQ7XG5cdFx0XHRzdGF0ZS5wYXJhbXMucXVlcnkgPSBhY3Rpb24ucGF5bG9hZDtcblx0XHR9LFxuXHRcdHNldFR5cGVkVmFsdWUoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxzdHJpbmc+KSB7XG5cdFx0c3RhdGUudHlwZWRWYWx1ZSA9IGFjdGlvbi5wYXlsb2FkXG5cdFx0fSxcblx0XHRzZXROZXdTZWFyY2hWYWx1ZShzdGF0ZSkge1xuXHRcdC8vXHRzdGF0ZS50eXBlZFZhbHVlID0gYWN0aW9uLnBheWxvYWRcblx0XHRzdGF0ZS5wYXJhbXMucXVlcnk9c3RhdGUudHlwZWRWYWx1ZVxuXHRcdHN0YXRlLnBhcmFtcy5zdG9yZWRWYWx1ZT1zdGF0ZS50eXBlZFZhbHVlXG5cdFx0XHR9LFxuXHR9LFxuXG5cblx0ZXh0cmFSZWR1Y2VyczogKGJ1aWxkZXIpID0+IHtcblx0XHRidWlsZGVyXG5cdFx0ICAuYWRkQ2FzZShmZXRjaFVzZXJEYXRhLnBlbmRpbmcsIChzdGF0ZSkgPT4ge1xuXHRcdFx0c3RhdGUuc3RhdHVzID0gJ2xvYWRpbmcnO1xuXHRcdCAgfSlcblx0XHQgIC5hZGRDYXNlKGZldGNoVXNlckRhdGEuZnVsZmlsbGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuXHRcdFx0c3RhdGUuc3RhdHVzID0gJ3N1Y2NlZWRlZCc7XG5cdFx0XHRjb25zb2xlLmxvZyhcIlVTXCIsIGFjdGlvbi5wYXlsb2FkKVxuXHRcdFx0c3RhdGUudXNlcnMgPSBhY3Rpb24ucGF5bG9hZDtcblx0XHRcdGNvbnNvbGUubG9nKFwiVVNzXCIsIHN0YXRlLnVzZXJzKVxuXHRcdCAgfSlcblx0XHQgIC5hZGRDYXNlKGZldGNoVXNlckRhdGEucmVqZWN0ZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG5cdFx0XHRzdGF0ZS5zdGF0dXMgPSAnZmFpbGVkJztcblx0XHRcdHN0YXRlLmVycm9yID0gYWN0aW9uLnBheWxvYWQgYXMgc3RyaW5nO1xuXHRcdCAgfSk7XG5cdCAgfSxcblxuXG59KTtcbmV4cG9ydCBjb25zdCB7XG5cdHNldExvYWRpbmcsXG5cdHNldEVycm9yLFxuXHRzZXRMb2FkaW5nVXNlckRhdGEsXG5cdHNldFNlYXJjaFBhcmFtc1VSTCxcblx0c2V0TmV4dFBhZ2UsXG5cdHNldFByZXZQYWdlLFxuXHRzZXRRdWVyeVBhZ2UsXG5cdHNldFVzZXJzLFxuXHRzZXRGaXJzdFBhZ2UsXG5cdHNldFN0b3JlZEluTG9jYWxTdG9yYWdlUXVlcnksXG5cdHNldFR5cGVkVmFsdWUsXG5cdHNldE5ld1NlYXJjaFZhbHVlXG59ID0gYXBwU2xpY2VlLmFjdGlvbnM7XG5leHBvcnQgZGVmYXVsdCBhcHBTbGljZWUucmVkdWNlcjtcbiJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsImNyZWF0ZUFzeW5jVGh1bmsiLCJheGlvcyIsImZldGNoVXNlckRhdGEiLCJ0aHVua0FQSSIsImxpbWl0Iiwib2Zmc2V0IiwidHlwZWRWYWx1ZSIsInVybCIsInRyaW0iLCJyZXNwb25zZSIsImdldCIsImRhdGEiLCJpdGVtcyIsImVycm9yIiwiaXNBeGlvc0Vycm9yIiwiYXhpb3NFcnJvciIsInJlamVjdFdpdGhWYWx1ZSIsIm1lc3NhZ2UiLCJpbml0aWFsU3RhdGUiLCJpc0xvYWRpbmciLCJpc0xvYWRpbmdVc2VyRGF0YSIsInVzZXJzIiwicGFyYW1zIiwicXVlcnkiLCJzdG9yZWRWYWx1ZSIsInN0YXR1cyIsImFwcFNsaWNlZSIsIm5hbWUiLCJyZWR1Y2VycyIsInNldExvYWRpbmciLCJzdGF0ZSIsImFjdGlvbiIsInBheWxvYWQiLCJzZXRMb2FkaW5nVXNlckRhdGEiLCJzZXRFcnJvciIsInNldFNlYXJjaFBhcmFtc1VSTCIsInNldEZpcnN0UGFnZSIsInNldE5leHRQYWdlIiwic2V0UHJldlBhZ2UiLCJzZXRRdWVyeVBhZ2UiLCJjb25zb2xlIiwibG9nIiwic3RvciIsInNldFVzZXJzIiwic2V0U3RvcmVkSW5Mb2NhbFN0b3JhZ2VRdWVyeSIsInNldFR5cGVkVmFsdWUiLCJzZXROZXdTZWFyY2hWYWx1ZSIsImV4dHJhUmVkdWNlcnMiLCJidWlsZGVyIiwiYWRkQ2FzZSIsInBlbmRpbmciLCJmdWxmaWxsZWQiLCJyZWplY3RlZCIsImFjdGlvbnMiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/redux/slices/appSlice.ts\n"));

/***/ })

});