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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchUserData: function() { return /* binding */ fetchUserData; },\n/* harmony export */   setError: function() { return /* binding */ setError; },\n/* harmony export */   setFirstPage: function() { return /* binding */ setFirstPage; },\n/* harmony export */   setLoading: function() { return /* binding */ setLoading; },\n/* harmony export */   setLoadingUserData: function() { return /* binding */ setLoadingUserData; },\n/* harmony export */   setNewSearchValue: function() { return /* binding */ setNewSearchValue; },\n/* harmony export */   setNextPage: function() { return /* binding */ setNextPage; },\n/* harmony export */   setPrevPage: function() { return /* binding */ setPrevPage; },\n/* harmony export */   setQueryPage: function() { return /* binding */ setQueryPage; },\n/* harmony export */   setSearchParamsURL: function() { return /* binding */ setSearchParamsURL; },\n/* harmony export */   setStoredInLocalStorageQuery: function() { return /* binding */ setStoredInLocalStorageQuery; },\n/* harmony export */   setTypedValue: function() { return /* binding */ setTypedValue; },\n/* harmony export */   setUsers: function() { return /* binding */ setUsers; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/lib/axios.js\");\n\n\nconst fetchUserData = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"users/fetchUserData\", async (param, thunkAPI)=>{\n    let { limit, offset, typedValue } = param;\n    let url;\n    if (typedValue.trim() === \"\") {\n        url = \"https://api.github.com/search/users?q=type:user&page=\".concat(offset, \"&per_page=\").concat(limit);\n    } else {\n        url = \"https://api.github.com/search/users?q=\".concat(typedValue, \"&page=\").concat(offset, \"&per_page=\").concat(limit);\n    }\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(url);\n        return response.data.items;\n    } catch (error) {\n        if (axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].isAxiosError(error)) {\n            const axiosError = error;\n            return thunkAPI.rejectWithValue(axiosError.message);\n        } else {\n            return thunkAPI.rejectWithValue(\"Unknown error\");\n        }\n    }\n});\nconst initialState = {\n    isLoading: false,\n    error: null,\n    isLoadingUserData: false,\n    users: [],\n    typedValue: \"\",\n    params: {\n        limit: 10,\n        offset: 1,\n        query: \"\",\n        storedValue: \"\"\n    },\n    status: \"idle\"\n};\nconst appSlicee = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"app\",\n    initialState,\n    reducers: {\n        setLoading (state, action) {\n            state.isLoading = action.payload;\n        },\n        setLoadingUserData (state, action) {\n            state.isLoadingUserData = action.payload;\n        },\n        setError (state, action) {\n            state.error = action.payload;\n        },\n        setSearchParamsURL (state, action) {\n            state.params.query = action.payload.query;\n            state.params.offset = action.payload.offset;\n        },\n        setFirstPage (state) {\n            state.params.offset = 1;\n        },\n        setNextPage (state) {\n            state.params.offset = state.params.offset + 1;\n        },\n        setPrevPage (state) {\n            state.params.offset = state.params.offset - 1;\n        },\n        setQueryPage (state, action) {\n            state.params.query = action.payload;\n        },\n        setUsers (state, action) {\n            state.users = action.payload;\n        },\n        setStoredInLocalStorageQuery (state, action) {\n            state.params.storedValue = action.payload;\n            state.params.query = action.payload;\n        },\n        setTypedValue (state, action) {\n            state.typedValue = action.payload;\n        },\n        setNewSearchValue (state) {\n            //\tstate.typedValue = action.payload\n            state.params.query = state.typedValue;\n            state.params.storedValue = state.typedValue;\n        }\n    },\n    extraReducers: (builder)=>{\n        builder.addCase(fetchUserData.pending, (state)=>{\n            state.status = \"loading\";\n        }).addCase(fetchUserData.fulfilled, (state, action)=>{\n            state.status = \"succeeded\";\n            console.log(\"US\", action.payload);\n            state.users = action.payload;\n            console.log(\"USs\", state.users);\n        }).addCase(fetchUserData.rejected, (state, action)=>{\n            state.status = \"failed\";\n            state.error = action.payload;\n        });\n    }\n});\nconst { setLoading, setError, setLoadingUserData, setSearchParamsURL, setNextPage, setPrevPage, setQueryPage, setUsers, setFirstPage, setStoredInLocalStorageQuery, setTypedValue, setNewSearchValue } = appSlicee.actions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (appSlicee.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVkdXgvc2xpY2VzL2FwcFNsaWNlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFnRjtBQUd0RDtBQThCbkIsTUFBTUcsZ0JBQWdCRixrRUFBZ0JBLENBQzVDLHVCQUNBLGNBQTZGRztRQUF0RixFQUFFQyxLQUFLLEVBQUVDLE1BQU0sRUFBRUMsVUFBVSxFQUF5RDtJQUN6RixJQUFJQztJQUNKLElBQUlELFdBQVdFLElBQUksT0FBTyxJQUFJO1FBQy9CRCxNQUFNLHdEQUEyRUgsT0FBbkJDLFFBQU8sY0FBa0IsT0FBTkQ7SUFDaEYsT0FBTztRQUNSRyxNQUFNLHlDQUE0REYsT0FBbkJDLFlBQVcsVUFBMkJGLE9BQW5CQyxRQUFPLGNBQWtCLE9BQU5EO0lBQ3BGO0lBRUEsSUFBSTtRQUNMLE1BQU1LLFdBQW9DLE1BQU1SLDZDQUFLQSxDQUFDUyxHQUFHLENBQUNIO1FBQzFELE9BQU9FLFNBQVNFLElBQUksQ0FBQ0MsS0FBSztJQUN6QixFQUFFLE9BQU9DLE9BQU87UUFDakIsSUFBSVosNkNBQUtBLENBQUNhLFlBQVksQ0FBQ0QsUUFBUTtZQUM3QixNQUFNRSxhQUFhRjtZQUNuQixPQUFPVixTQUFTYSxlQUFlLENBQUNELFdBQVdFLE9BQU87UUFDcEQsT0FBTztZQUNMLE9BQU9kLFNBQVNhLGVBQWUsQ0FBQztRQUNsQztJQUNDO0FBQ0YsR0FDRztBQUtKLE1BQU1FLGVBQTBCO0lBQy9CQyxXQUFXO0lBQ1hOLE9BQU87SUFDUE8sbUJBQW1CO0lBQ25CQyxPQUFPLEVBQUU7SUFDVGYsWUFBWTtJQUNaZ0IsUUFBUTtRQUNQbEIsT0FBTztRQUNQQyxRQUFRO1FBQ1JrQixPQUFPO1FBQ1BDLGFBQWE7SUFDZDtJQUNBQyxRQUFRO0FBRVQ7QUFDQSxNQUFNQyxZQUFZM0IsNkRBQVdBLENBQUM7SUFDN0I0QixNQUFNO0lBQ05UO0lBQ0FVLFVBQVU7UUFDVEMsWUFBV0MsS0FBSyxFQUFFQyxNQUE4QjtZQUMvQ0QsTUFBTVgsU0FBUyxHQUFHWSxPQUFPQyxPQUFPO1FBQ2pDO1FBQ0FDLG9CQUFtQkgsS0FBSyxFQUFFQyxNQUE4QjtZQUN2REQsTUFBTVYsaUJBQWlCLEdBQUdXLE9BQU9DLE9BQU87UUFDekM7UUFDQUUsVUFBU0osS0FBSyxFQUFFQyxNQUFvQztZQUNuREQsTUFBTWpCLEtBQUssR0FBR2tCLE9BQU9DLE9BQU87UUFDN0I7UUFFQUcsb0JBQW1CTCxLQUFLLEVBQUVDLE1BQWtDO1lBQzNERCxNQUFNUixNQUFNLENBQUNDLEtBQUssR0FBR1EsT0FBT0MsT0FBTyxDQUFDVCxLQUFLO1lBQ3pDTyxNQUFNUixNQUFNLENBQUNqQixNQUFNLEdBQUcwQixPQUFPQyxPQUFPLENBQUMzQixNQUFNO1FBQzVDO1FBQ0ErQixjQUFhTixLQUFLO1lBQ2pCQSxNQUFNUixNQUFNLENBQUNqQixNQUFNLEdBQUc7UUFDdkI7UUFDQWdDLGFBQVlQLEtBQUs7WUFDaEJBLE1BQU1SLE1BQU0sQ0FBQ2pCLE1BQU0sR0FBR3lCLE1BQU1SLE1BQU0sQ0FBQ2pCLE1BQU0sR0FBRztRQUM3QztRQUNBaUMsYUFBWVIsS0FBSztZQUNoQkEsTUFBTVIsTUFBTSxDQUFDakIsTUFBTSxHQUFHeUIsTUFBTVIsTUFBTSxDQUFDakIsTUFBTSxHQUFHO1FBQzdDO1FBQ0FrQyxjQUFhVCxLQUFLLEVBQUVDLE1BQTZCO1lBQ2hERCxNQUFNUixNQUFNLENBQUNDLEtBQUssR0FBR1EsT0FBT0MsT0FBTztRQUNwQztRQUNBUSxVQUFTVixLQUFLLEVBQUVDLE1BQW9DO1lBQ25ERCxNQUFNVCxLQUFLLEdBQUdVLE9BQU9DLE9BQU87UUFDN0I7UUFDQVMsOEJBQTZCWCxLQUFLLEVBQUVDLE1BQTZCO1lBQ2hFRCxNQUFNUixNQUFNLENBQUNFLFdBQVcsR0FBR08sT0FBT0MsT0FBTztZQUN6Q0YsTUFBTVIsTUFBTSxDQUFDQyxLQUFLLEdBQUdRLE9BQU9DLE9BQU87UUFDcEM7UUFDQVUsZUFBY1osS0FBSyxFQUFFQyxNQUE2QjtZQUNsREQsTUFBTXhCLFVBQVUsR0FBR3lCLE9BQU9DLE9BQU87UUFDakM7UUFDQVcsbUJBQWtCYixLQUFLO1lBQ3ZCLG9DQUFvQztZQUNwQ0EsTUFBTVIsTUFBTSxDQUFDQyxLQUFLLEdBQUNPLE1BQU14QixVQUFVO1lBQ25Dd0IsTUFBTVIsTUFBTSxDQUFDRSxXQUFXLEdBQUNNLE1BQU14QixVQUFVO1FBQ3hDO0lBQ0Y7SUFHQXNDLGVBQWUsQ0FBQ0M7UUFDZkEsUUFDR0MsT0FBTyxDQUFDNUMsY0FBYzZDLE9BQU8sRUFBRSxDQUFDakI7WUFDbENBLE1BQU1MLE1BQU0sR0FBRztRQUNkLEdBQ0NxQixPQUFPLENBQUM1QyxjQUFjOEMsU0FBUyxFQUFFLENBQUNsQixPQUFPQztZQUMzQ0QsTUFBTUwsTUFBTSxHQUFHO1lBQ2Z3QixRQUFRQyxHQUFHLENBQUMsTUFBTW5CLE9BQU9DLE9BQU87WUFDaENGLE1BQU1ULEtBQUssR0FBR1UsT0FBT0MsT0FBTztZQUM1QmlCLFFBQVFDLEdBQUcsQ0FBQyxPQUFPcEIsTUFBTVQsS0FBSztRQUM3QixHQUNDeUIsT0FBTyxDQUFDNUMsY0FBY2lELFFBQVEsRUFBRSxDQUFDckIsT0FBT0M7WUFDMUNELE1BQU1MLE1BQU0sR0FBRztZQUNmSyxNQUFNakIsS0FBSyxHQUFHa0IsT0FBT0MsT0FBTztRQUMzQjtJQUNEO0FBR0g7QUFDTyxNQUFNLEVBQ1pILFVBQVUsRUFDVkssUUFBUSxFQUNSRCxrQkFBa0IsRUFDbEJFLGtCQUFrQixFQUNsQkUsV0FBVyxFQUNYQyxXQUFXLEVBQ1hDLFlBQVksRUFDWkMsUUFBUSxFQUNSSixZQUFZLEVBQ1pLLDRCQUE0QixFQUM1QkMsYUFBYSxFQUNiQyxpQkFBaUIsRUFDakIsR0FBR2pCLFVBQVUwQixPQUFPLENBQUM7QUFDdEIsK0RBQWUxQixVQUFVMkIsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9yZWR1eC9zbGljZXMvYXBwU2xpY2UudHM/OTUzZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSwgUGF5bG9hZEFjdGlvbiwgY3JlYXRlQXN5bmNUaHVuayB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xuaW1wb3J0IHsgQXBwU3RhdGVlLCBTZWFyY2hUeXBlcywgVXNlckRhdGFBcnJheSB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IEF4aW9zUmVzcG9uc2UsIEF4aW9zRXJyb3IgfWZyb20gJ2F4aW9zJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG4vKlxuZXhwb3J0IHR5cGUgVXNlckRhdGFBcnJheSA9IEFycmF5PHtcblx0bG9naW46IHN0cmluZztcblx0aWQ6IG51bWJlcjtcblx0bm9kZV9pZDogc3RyaW5nO1xuXHRhdmF0YXJfdXJsOiBzdHJpbmc7XG5cdGdyYXZhdGFyX2lkOiBzdHJpbmc7XG5cdHVybDogc3RyaW5nO1xuXHRodG1sX3VybDogc3RyaW5nO1xuXHRmb2xsb3dlcnNfdXJsOiBzdHJpbmc7XG5cdGZvbGxvd2luZ191cmw6IHN0cmluZztcblx0Z2lzdHNfdXJsOiBzdHJpbmc7XG5cdHN0YXJyZWRfdXJsOiBzdHJpbmc7XG5cdHN1YnNjcmlwdGlvbnNfdXJsOiBzdHJpbmc7XG5cdG9yZ2FuaXphdGlvbnNfdXJsOiBzdHJpbmc7XG5cdHJlcG9zX3VybDogc3RyaW5nO1xuXHRldmVudHNfdXJsOiBzdHJpbmc7XG5cdHJlY2VpdmVkX2V2ZW50c191cmw6IHN0cmluZztcblx0dHlwZTogc3RyaW5nO1xuXHRzaXRlX2FkbWluOiBib29sZWFuO1xuXHRzY29yZTogbnVtYmVyO1xufT47ICovXG5leHBvcnQgaW50ZXJmYWNlIFVzZXJEYXRhIHtcblx0dG90YWxfY291bnQ6IG51bWJlcjtcblx0aW5jb21wbGV0ZV9yZXN1bHRzOiBib29sZWFuO1xuXHRpdGVtczogVXNlckRhdGFBcnJheTtcbn1cblxuXG5leHBvcnQgY29uc3QgZmV0Y2hVc2VyRGF0YSA9IGNyZWF0ZUFzeW5jVGh1bmsoXG5cdCd1c2Vycy9mZXRjaFVzZXJEYXRhJyxcblx0YXN5bmMgKHsgbGltaXQsIG9mZnNldCwgdHlwZWRWYWx1ZSB9OiB7IGxpbWl0OiBudW1iZXI7IG9mZnNldDogbnVtYmVyOyB0eXBlZFZhbHVlOiBzdHJpbmcgfSwgdGh1bmtBUEkpID0+IHtcblx0ICBsZXQgdXJsOiBzdHJpbmc7XG5cdCAgaWYgKHR5cGVkVmFsdWUudHJpbSgpID09PSAnJykge1xuXHRcdHVybCA9IGBodHRwczovL2FwaS5naXRodWIuY29tL3NlYXJjaC91c2Vycz9xPXR5cGU6dXNlciZwYWdlPSR7b2Zmc2V0fSZwZXJfcGFnZT0ke2xpbWl0fWA7XG5cdCAgfSBlbHNlIHtcblx0XHR1cmwgPSBgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9zZWFyY2gvdXNlcnM/cT0ke3R5cGVkVmFsdWV9JnBhZ2U9JHtvZmZzZXR9JnBlcl9wYWdlPSR7bGltaXR9YDtcblx0ICB9XG4gIFxuXHQgIHRyeSB7XG5cdFx0Y29uc3QgcmVzcG9uc2U6IEF4aW9zUmVzcG9uc2U8VXNlckRhdGE+ID0gYXdhaXQgYXhpb3MuZ2V0KHVybCk7XG5cdFx0cmV0dXJuIHJlc3BvbnNlLmRhdGEuaXRlbXM7XG5cdCAgfSBjYXRjaCAoZXJyb3IpIHtcblx0XHRpZiAoYXhpb3MuaXNBeGlvc0Vycm9yKGVycm9yKSkge1xuXHRcdCAgY29uc3QgYXhpb3NFcnJvciA9IGVycm9yIGFzIEF4aW9zRXJyb3I7XG5cdFx0ICByZXR1cm4gdGh1bmtBUEkucmVqZWN0V2l0aFZhbHVlKGF4aW9zRXJyb3IubWVzc2FnZSk7XG5cdFx0fSBlbHNlIHtcblx0XHQgIHJldHVybiB0aHVua0FQSS5yZWplY3RXaXRoVmFsdWUoJ1Vua25vd24gZXJyb3InKTtcblx0XHR9XG5cdCAgfVxuXHR9XG4gICk7XG5cbiAgXG5cbiAgXG5jb25zdCBpbml0aWFsU3RhdGU6IEFwcFN0YXRlZSA9IHtcblx0aXNMb2FkaW5nOiBmYWxzZSxcblx0ZXJyb3I6IG51bGwsXG5cdGlzTG9hZGluZ1VzZXJEYXRhOiBmYWxzZSxcblx0dXNlcnM6IFtdLFxuXHR0eXBlZFZhbHVlOiBcIlwiLFxuXHRwYXJhbXM6IHtcblx0XHRsaW1pdDogMTAsXG5cdFx0b2Zmc2V0OiAxLFxuXHRcdHF1ZXJ5OiAnJyxcblx0XHRzdG9yZWRWYWx1ZTogJycsXG5cdH0sXG5cdHN0YXR1czogJ2lkbGUnLFxuICAgXG59O1xuY29uc3QgYXBwU2xpY2VlID0gY3JlYXRlU2xpY2Uoe1xuXHRuYW1lOiAnYXBwJyxcblx0aW5pdGlhbFN0YXRlLFxuXHRyZWR1Y2Vyczoge1xuXHRcdHNldExvYWRpbmcoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxib29sZWFuPikge1xuXHRcdFx0c3RhdGUuaXNMb2FkaW5nID0gYWN0aW9uLnBheWxvYWQ7XG5cdFx0fSxcblx0XHRzZXRMb2FkaW5nVXNlckRhdGEoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxib29sZWFuPikge1xuXHRcdFx0c3RhdGUuaXNMb2FkaW5nVXNlckRhdGEgPSBhY3Rpb24ucGF5bG9hZDtcblx0XHR9LFxuXHRcdHNldEVycm9yKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248c3RyaW5nIHwgbnVsbD4pIHtcblx0XHRcdHN0YXRlLmVycm9yID0gYWN0aW9uLnBheWxvYWQ7XG5cdFx0fSxcblxuXHRcdHNldFNlYXJjaFBhcmFtc1VSTChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPFNlYXJjaFR5cGVzPikge1xuXHRcdFx0c3RhdGUucGFyYW1zLnF1ZXJ5ID0gYWN0aW9uLnBheWxvYWQucXVlcnk7XG5cdFx0XHRzdGF0ZS5wYXJhbXMub2Zmc2V0ID0gYWN0aW9uLnBheWxvYWQub2Zmc2V0O1xuXHRcdH0sXG5cdFx0c2V0Rmlyc3RQYWdlKHN0YXRlKSB7XG5cdFx0XHRzdGF0ZS5wYXJhbXMub2Zmc2V0ID0gMTtcblx0XHR9LFxuXHRcdHNldE5leHRQYWdlKHN0YXRlKSB7XG5cdFx0XHRzdGF0ZS5wYXJhbXMub2Zmc2V0ID0gc3RhdGUucGFyYW1zLm9mZnNldCArIDE7XG5cdFx0fSxcblx0XHRzZXRQcmV2UGFnZShzdGF0ZSkge1xuXHRcdFx0c3RhdGUucGFyYW1zLm9mZnNldCA9IHN0YXRlLnBhcmFtcy5vZmZzZXQgLSAxO1xuXHRcdH0sXG5cdFx0c2V0UXVlcnlQYWdlKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248c3RyaW5nPikge1xuXHRcdFx0c3RhdGUucGFyYW1zLnF1ZXJ5ID0gYWN0aW9uLnBheWxvYWQ7XG5cdFx0fSxcblx0XHRzZXRVc2VycyhzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPFVzZXJEYXRhQXJyYXk+KSB7XG5cdFx0XHRzdGF0ZS51c2VycyA9IGFjdGlvbi5wYXlsb2FkO1xuXHRcdH0sXG5cdFx0c2V0U3RvcmVkSW5Mb2NhbFN0b3JhZ2VRdWVyeShzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHN0cmluZz4pIHtcblx0XHRcdHN0YXRlLnBhcmFtcy5zdG9yZWRWYWx1ZSA9IGFjdGlvbi5wYXlsb2FkO1xuXHRcdFx0c3RhdGUucGFyYW1zLnF1ZXJ5ID0gYWN0aW9uLnBheWxvYWQ7XG5cdFx0fSxcblx0XHRzZXRUeXBlZFZhbHVlKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248c3RyaW5nPikge1xuXHRcdHN0YXRlLnR5cGVkVmFsdWUgPSBhY3Rpb24ucGF5bG9hZFxuXHRcdH0sXG5cdFx0c2V0TmV3U2VhcmNoVmFsdWUoc3RhdGUpIHtcblx0XHQvL1x0c3RhdGUudHlwZWRWYWx1ZSA9IGFjdGlvbi5wYXlsb2FkXG5cdFx0c3RhdGUucGFyYW1zLnF1ZXJ5PXN0YXRlLnR5cGVkVmFsdWVcblx0XHRzdGF0ZS5wYXJhbXMuc3RvcmVkVmFsdWU9c3RhdGUudHlwZWRWYWx1ZVxuXHRcdFx0fSxcblx0fSxcblxuXG5cdGV4dHJhUmVkdWNlcnM6IChidWlsZGVyKSA9PiB7XG5cdFx0YnVpbGRlclxuXHRcdCAgLmFkZENhc2UoZmV0Y2hVc2VyRGF0YS5wZW5kaW5nLCAoc3RhdGUpID0+IHtcblx0XHRcdHN0YXRlLnN0YXR1cyA9ICdsb2FkaW5nJztcblx0XHQgIH0pXG5cdFx0ICAuYWRkQ2FzZShmZXRjaFVzZXJEYXRhLmZ1bGZpbGxlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcblx0XHRcdHN0YXRlLnN0YXR1cyA9ICdzdWNjZWVkZWQnO1xuXHRcdFx0Y29uc29sZS5sb2coXCJVU1wiLCBhY3Rpb24ucGF5bG9hZClcblx0XHRcdHN0YXRlLnVzZXJzID0gYWN0aW9uLnBheWxvYWQ7XG5cdFx0XHRjb25zb2xlLmxvZyhcIlVTc1wiLCBzdGF0ZS51c2Vycylcblx0XHQgIH0pXG5cdFx0ICAuYWRkQ2FzZShmZXRjaFVzZXJEYXRhLnJlamVjdGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuXHRcdFx0c3RhdGUuc3RhdHVzID0gJ2ZhaWxlZCc7XG5cdFx0XHRzdGF0ZS5lcnJvciA9IGFjdGlvbi5wYXlsb2FkIGFzIHN0cmluZztcblx0XHQgIH0pO1xuXHQgIH0sXG5cblxufSk7XG5leHBvcnQgY29uc3Qge1xuXHRzZXRMb2FkaW5nLFxuXHRzZXRFcnJvcixcblx0c2V0TG9hZGluZ1VzZXJEYXRhLFxuXHRzZXRTZWFyY2hQYXJhbXNVUkwsXG5cdHNldE5leHRQYWdlLFxuXHRzZXRQcmV2UGFnZSxcblx0c2V0UXVlcnlQYWdlLFxuXHRzZXRVc2Vycyxcblx0c2V0Rmlyc3RQYWdlLFxuXHRzZXRTdG9yZWRJbkxvY2FsU3RvcmFnZVF1ZXJ5LFxuXHRzZXRUeXBlZFZhbHVlLFxuXHRzZXROZXdTZWFyY2hWYWx1ZVxufSA9IGFwcFNsaWNlZS5hY3Rpb25zO1xuZXhwb3J0IGRlZmF1bHQgYXBwU2xpY2VlLnJlZHVjZXI7XG4iXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJjcmVhdGVBc3luY1RodW5rIiwiYXhpb3MiLCJmZXRjaFVzZXJEYXRhIiwidGh1bmtBUEkiLCJsaW1pdCIsIm9mZnNldCIsInR5cGVkVmFsdWUiLCJ1cmwiLCJ0cmltIiwicmVzcG9uc2UiLCJnZXQiLCJkYXRhIiwiaXRlbXMiLCJlcnJvciIsImlzQXhpb3NFcnJvciIsImF4aW9zRXJyb3IiLCJyZWplY3RXaXRoVmFsdWUiLCJtZXNzYWdlIiwiaW5pdGlhbFN0YXRlIiwiaXNMb2FkaW5nIiwiaXNMb2FkaW5nVXNlckRhdGEiLCJ1c2VycyIsInBhcmFtcyIsInF1ZXJ5Iiwic3RvcmVkVmFsdWUiLCJzdGF0dXMiLCJhcHBTbGljZWUiLCJuYW1lIiwicmVkdWNlcnMiLCJzZXRMb2FkaW5nIiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwic2V0TG9hZGluZ1VzZXJEYXRhIiwic2V0RXJyb3IiLCJzZXRTZWFyY2hQYXJhbXNVUkwiLCJzZXRGaXJzdFBhZ2UiLCJzZXROZXh0UGFnZSIsInNldFByZXZQYWdlIiwic2V0UXVlcnlQYWdlIiwic2V0VXNlcnMiLCJzZXRTdG9yZWRJbkxvY2FsU3RvcmFnZVF1ZXJ5Iiwic2V0VHlwZWRWYWx1ZSIsInNldE5ld1NlYXJjaFZhbHVlIiwiZXh0cmFSZWR1Y2VycyIsImJ1aWxkZXIiLCJhZGRDYXNlIiwicGVuZGluZyIsImZ1bGZpbGxlZCIsImNvbnNvbGUiLCJsb2ciLCJyZWplY3RlZCIsImFjdGlvbnMiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/redux/slices/appSlice.ts\n"));

/***/ })

});