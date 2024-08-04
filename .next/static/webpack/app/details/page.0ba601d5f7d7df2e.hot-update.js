"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/details/page",{

/***/ "(app-pages-browser)/./src/api/index.ts":
/*!**************************!*\
  !*** ./src/api/index.ts ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getPersonalData: function() { return /* binding */ getPersonalData; },\n/* harmony export */   getUserData: function() { return /* binding */ getUserData; }\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n\nasync function fetchUserData(url) {\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(url);\n        return response.data;\n    } catch (error) {\n        if (axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isAxiosError(error)) {\n            const axiosError = error;\n            console.error(\"Error fetching data:\", axiosError.message);\n        } else {\n            console.error(\"Unknown error:\", error);\n        }\n        throw new Error(\"Error fetching data\");\n    }\n}\nasync function fetchUserDataAdvanced(url) {\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(url);\n        return response.data;\n    } catch (error) {\n        if (axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isAxiosError(error)) {\n            const axiosError = error;\n            console.error(\"Error fetching data:\", axiosError.message);\n        } else {\n            console.error(\"Unknown error:\", error);\n        }\n        throw new Error(\"Error fetching data\");\n    }\n}\nasync function getUserData(limit, offset, typedValue) {\n    let url;\n    if (typedValue.trim() === \"\") {\n        console.log(\"P\", offset);\n        url = \"params.limit, params.offset, params.query\";\n        try {\n            const data = await fetchUserData(url);\n            console.log(\"Data without:\", data);\n            return data;\n        } catch (error) {\n            console.error(error);\n            throw error;\n        }\n    } else {\n        url = \"https://api.github.com/search/users?q=\".concat(typedValue, \"&page=\").concat(offset, \"&per_page=\").concat(limit);\n        try {\n            const data = await fetchUserDataAdvanced(url);\n            console.log(\"Data:\", data);\n            return data.items;\n        } catch (error) {\n            console.error(error);\n            throw error;\n        }\n    }\n}\nconst getPersonalData = async (username)=>{\n    //https://api.github.com/users/octocat\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"https://api.github.com/users/\".concat(username));\n        console.log(\"REW\", JSON.stringify(response));\n        return response.data;\n    } catch (error) {\n        if (axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isAxiosError(error)) {\n            const axiosError = error;\n            console.error(\"Error fetching data:\", axiosError.message);\n        } else {\n            console.error(\"Unknown error:\", error);\n        }\n        throw new Error(\"Error fetching data\");\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcGkvaW5kZXgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXlEO0FBNkJ6RCxlQUFlQyxjQUFjQyxHQUFXO0lBQ3ZDLElBQUk7UUFDSCxNQUFNQyxXQUF5QyxNQUFNSCw2Q0FBS0EsQ0FBQ0ksR0FBRyxDQUFDRjtRQUMvRCxPQUFPQyxTQUFTRSxJQUFJO0lBQ3JCLEVBQUUsT0FBT0MsT0FBTztRQUNmLElBQUlOLDZDQUFLQSxDQUFDTyxZQUFZLENBQUNELFFBQVE7WUFDOUIsTUFBTUUsYUFBYUY7WUFDbkJHLFFBQVFILEtBQUssQ0FBQyx3QkFBd0JFLFdBQVdFLE9BQU87UUFDekQsT0FBTztZQUNORCxRQUFRSCxLQUFLLENBQUMsa0JBQWtCQTtRQUNqQztRQUNBLE1BQU0sSUFBSUssTUFBTTtJQUNqQjtBQUNEO0FBQ0EsZUFBZUMsc0JBQXNCVixHQUFXO0lBQy9DLElBQUk7UUFDSCxNQUFNQyxXQUFvQyxNQUFNSCw2Q0FBS0EsQ0FBQ0ksR0FBRyxDQUFDRjtRQUMxRCxPQUFPQyxTQUFTRSxJQUFJO0lBQ3JCLEVBQUUsT0FBT0MsT0FBTztRQUNmLElBQUlOLDZDQUFLQSxDQUFDTyxZQUFZLENBQUNELFFBQVE7WUFDOUIsTUFBTUUsYUFBYUY7WUFDbkJHLFFBQVFILEtBQUssQ0FBQyx3QkFBd0JFLFdBQVdFLE9BQU87UUFDekQsT0FBTztZQUNORCxRQUFRSCxLQUFLLENBQUMsa0JBQWtCQTtRQUNqQztRQUNBLE1BQU0sSUFBSUssTUFBTTtJQUNqQjtBQUNEO0FBQ08sZUFBZUUsWUFBWUMsS0FBYSxFQUFFQyxNQUFjLEVBQUVDLFVBQWtCO0lBQ2xGLElBQUlkO0lBQ0osSUFBSWMsV0FBV0MsSUFBSSxPQUFPLElBQUk7UUFDL0JSLFFBQVFTLEdBQUcsQ0FBQyxLQUFLSDtRQUNmYixNQUFPO1FBQ1AsSUFBSTtZQUNILE1BQU1HLE9BQU8sTUFBTUosY0FBY0M7WUFDakNPLFFBQVFTLEdBQUcsQ0FBQyxpQkFBaUJiO1lBQzdCLE9BQU9BO1FBQ1IsRUFBRSxPQUFPQyxPQUFPO1lBQ2ZHLFFBQVFILEtBQUssQ0FBQ0E7WUFDZCxNQUFNQTtRQUNQO0lBQ0QsT0FBTztRQUNOSixNQUFNLHlDQUE0RGEsT0FBbkJDLFlBQVcsVUFBMkJGLE9BQW5CQyxRQUFPLGNBQWtCLE9BQU5EO1FBQ3JGLElBQUk7WUFDSCxNQUFNVCxPQUFPLE1BQU1PLHNCQUFzQlY7WUFDekNPLFFBQVFTLEdBQUcsQ0FBQyxTQUFTYjtZQUNyQixPQUFPQSxLQUFLYyxLQUFLO1FBQ2xCLEVBQUUsT0FBT2IsT0FBTztZQUNmRyxRQUFRSCxLQUFLLENBQUNBO1lBQ2QsTUFBTUE7UUFDUDtJQUNEO0FBQ0Q7QUEwQk8sTUFBTWMsa0JBQWtCLE9BQU9DO0lBQ3JDLHNDQUFzQztJQUV0QyxJQUFJO1FBQ0gsTUFBTWxCLFdBQWdDLE1BQU1ILDZDQUFLQSxDQUFDSSxHQUFHLENBQUMsZ0NBQXlDLE9BQVRpQjtRQUN0RlosUUFBUVMsR0FBRyxDQUFDLE9BQU9JLEtBQUtDLFNBQVMsQ0FBQ3BCO1FBQ2xDLE9BQU9BLFNBQVNFLElBQUk7SUFDckIsRUFBRSxPQUFPQyxPQUFPO1FBQ2YsSUFBSU4sNkNBQUtBLENBQUNPLFlBQVksQ0FBQ0QsUUFBUTtZQUM5QixNQUFNRSxhQUFhRjtZQUNuQkcsUUFBUUgsS0FBSyxDQUFDLHdCQUF3QkUsV0FBV0UsT0FBTztRQUN6RCxPQUFPO1lBQ05ELFFBQVFILEtBQUssQ0FBQyxrQkFBa0JBO1FBQ2pDO1FBQ0EsTUFBTSxJQUFJSyxNQUFNO0lBQ2pCO0FBR0QsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBpL2luZGV4LnRzPzAyNjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zLCB7IEF4aW9zRXJyb3IsIEF4aW9zUmVzcG9uc2UgfSBmcm9tICdheGlvcyc7XHJcblxyXG50eXBlIFVzZXJEYXRhQXJyYXkgPSBBcnJheTx7XHJcblx0bG9naW46IHN0cmluZztcclxuXHRpZDogbnVtYmVyO1xyXG5cdG5vZGVfaWQ6IHN0cmluZztcclxuXHRhdmF0YXJfdXJsOiBzdHJpbmc7XHJcblx0Z3JhdmF0YXJfaWQ6IHN0cmluZztcclxuXHR1cmw6IHN0cmluZztcclxuXHRodG1sX3VybDogc3RyaW5nO1xyXG5cdGZvbGxvd2Vyc191cmw6IHN0cmluZztcclxuXHRmb2xsb3dpbmdfdXJsOiBzdHJpbmc7XHJcblx0Z2lzdHNfdXJsOiBzdHJpbmc7XHJcblx0c3RhcnJlZF91cmw6IHN0cmluZztcclxuXHRzdWJzY3JpcHRpb25zX3VybDogc3RyaW5nO1xyXG5cdG9yZ2FuaXphdGlvbnNfdXJsOiBzdHJpbmc7XHJcblx0cmVwb3NfdXJsOiBzdHJpbmc7XHJcblx0ZXZlbnRzX3VybDogc3RyaW5nO1xyXG5cdHJlY2VpdmVkX2V2ZW50c191cmw6IHN0cmluZztcclxuXHR0eXBlOiBzdHJpbmc7XHJcblx0c2l0ZV9hZG1pbjogYm9vbGVhbjtcclxuXHRzY29yZTogbnVtYmVyO1xyXG59PjtcclxuaW50ZXJmYWNlIFVzZXJEYXRhIHtcclxuXHR0b3RhbF9jb3VudDogbnVtYmVyO1xyXG5cdGluY29tcGxldGVfcmVzdWx0czogYm9vbGVhbjtcclxuXHRpdGVtczogVXNlckRhdGFBcnJheTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hVc2VyRGF0YSh1cmw6IHN0cmluZyk6IFByb21pc2U8VXNlckRhdGFBcnJheT4ge1xyXG5cdHRyeSB7XHJcblx0XHRjb25zdCByZXNwb25zZTogQXhpb3NSZXNwb25zZTxVc2VyRGF0YUFycmF5PiA9IGF3YWl0IGF4aW9zLmdldCh1cmwpO1xyXG5cdFx0cmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcblx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdGlmIChheGlvcy5pc0F4aW9zRXJyb3IoZXJyb3IpKSB7XHJcblx0XHRcdGNvbnN0IGF4aW9zRXJyb3IgPSBlcnJvciBhcyBBeGlvc0Vycm9yO1xyXG5cdFx0XHRjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGF4aW9zRXJyb3IubWVzc2FnZSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRjb25zb2xlLmVycm9yKCdVbmtub3duIGVycm9yOicsIGVycm9yKTtcclxuXHRcdH1cclxuXHRcdHRocm93IG5ldyBFcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YScpO1xyXG5cdH1cclxufVxyXG5hc3luYyBmdW5jdGlvbiBmZXRjaFVzZXJEYXRhQWR2YW5jZWQodXJsOiBzdHJpbmcpOiBQcm9taXNlPFVzZXJEYXRhPiB7XHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IHJlc3BvbnNlOiBBeGlvc1Jlc3BvbnNlPFVzZXJEYXRhPiA9IGF3YWl0IGF4aW9zLmdldCh1cmwpO1xyXG5cdFx0cmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcblx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdGlmIChheGlvcy5pc0F4aW9zRXJyb3IoZXJyb3IpKSB7XHJcblx0XHRcdGNvbnN0IGF4aW9zRXJyb3IgPSBlcnJvciBhcyBBeGlvc0Vycm9yO1xyXG5cdFx0XHRjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGF4aW9zRXJyb3IubWVzc2FnZSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRjb25zb2xlLmVycm9yKCdVbmtub3duIGVycm9yOicsIGVycm9yKTtcclxuXHRcdH1cclxuXHRcdHRocm93IG5ldyBFcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YScpO1xyXG5cdH1cclxufVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlckRhdGEobGltaXQ6IG51bWJlciwgb2Zmc2V0OiBudW1iZXIsIHR5cGVkVmFsdWU6IHN0cmluZyk6IFByb21pc2U8VXNlckRhdGFBcnJheT4ge1xyXG5cdGxldCB1cmw6IHN0cmluZztcclxuXHRpZiAodHlwZWRWYWx1ZS50cmltKCkgPT09ICcnKSB7XHJcbmNvbnNvbGUubG9nKFwiUFwiLCBvZmZzZXQpXHJcblx0XHR1cmwgPSBgcGFyYW1zLmxpbWl0LCBwYXJhbXMub2Zmc2V0LCBwYXJhbXMucXVlcnlgO1xyXG5cdFx0dHJ5IHtcclxuXHRcdFx0Y29uc3QgZGF0YSA9IGF3YWl0IGZldGNoVXNlckRhdGEodXJsKTtcclxuXHRcdFx0Y29uc29sZS5sb2coJ0RhdGEgd2l0aG91dDonLCBkYXRhKTtcclxuXHRcdFx0cmV0dXJuIGRhdGE7XHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0XHRjb25zb2xlLmVycm9yKGVycm9yKTtcclxuXHRcdFx0dGhyb3cgZXJyb3I7XHJcblx0XHR9XHJcblx0fSBlbHNlIHtcclxuXHRcdHVybCA9IGBodHRwczovL2FwaS5naXRodWIuY29tL3NlYXJjaC91c2Vycz9xPSR7dHlwZWRWYWx1ZX0mcGFnZT0ke29mZnNldH0mcGVyX3BhZ2U9JHtsaW1pdH1gO1xyXG5cdFx0dHJ5IHtcclxuXHRcdFx0Y29uc3QgZGF0YSA9IGF3YWl0IGZldGNoVXNlckRhdGFBZHZhbmNlZCh1cmwpO1xyXG5cdFx0XHRjb25zb2xlLmxvZygnRGF0YTonLCBkYXRhKTtcclxuXHRcdFx0cmV0dXJuIGRhdGEuaXRlbXM7XHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0XHRjb25zb2xlLmVycm9yKGVycm9yKTtcclxuXHRcdFx0dGhyb3cgZXJyb3I7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5pbnRlcmZhY2UgVXNlciB7XHJcblx0bG9naW46IHN0cmluZztcclxuXHRpZDogbnVtYmVyO1xyXG5cdG5vZGVfaWQ6IHN0cmluZztcclxuXHRhdmF0YXJfdXJsOiBzdHJpbmc7XHJcblx0Z3JhdmF0YXJfaWQ6IHN0cmluZztcclxuXHR1cmw6IHN0cmluZztcclxuXHRodG1sX3VybDogc3RyaW5nO1xyXG5cdGZvbGxvd2Vyc191cmw6IHN0cmluZztcclxuXHRmb2xsb3dpbmdfdXJsOiBzdHJpbmc7XHJcblx0Z2lzdHNfdXJsOiBzdHJpbmc7XHJcblx0c3RhcnJlZF91cmw6IHN0cmluZztcclxuXHRzdWJzY3JpcHRpb25zX3VybDogc3RyaW5nO1xyXG5cdG9yZ2FuaXphdGlvbnNfdXJsOiBzdHJpbmc7XHJcblx0cmVwb3NfdXJsOiBzdHJpbmc7XHJcblx0ZXZlbnRzX3VybDogc3RyaW5nO1xyXG5cdHJlY2VpdmVkX2V2ZW50c191cmw6IHN0cmluZztcclxuXHR0eXBlOiBzdHJpbmc7XHJcblx0c2l0ZV9hZG1pbjogYm9vbGVhbjtcclxuXHRzY29yZTogbnVtYmVyO1xyXG59XHJcbmV4cG9ydCBjb25zdCBnZXRQZXJzb25hbERhdGEgPSBhc3luYyAodXNlcm5hbWU6IHN0cmluZyk6IFByb21pc2U8VXNlcj4gPT4ge1xyXG5cdC8vaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9vY3RvY2F0XHJcblxyXG5cdHRyeSB7XHJcblx0XHRjb25zdCByZXNwb25zZTogQXhpb3NSZXNwb25zZTxVc2VyPiA9IGF3YWl0IGF4aW9zLmdldChgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy8ke3VzZXJuYW1lfWApO1xyXG5cdFx0Y29uc29sZS5sb2coXCJSRVdcIiwgSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UpKVxyXG5cdFx0cmV0dXJuIHJlc3BvbnNlLmRhdGFcclxuXHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0aWYgKGF4aW9zLmlzQXhpb3NFcnJvcihlcnJvcikpIHtcclxuXHRcdFx0Y29uc3QgYXhpb3NFcnJvciA9IGVycm9yIGFzIEF4aW9zRXJyb3I7XHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgYXhpb3NFcnJvci5tZXNzYWdlKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoJ1Vua25vd24gZXJyb3I6JywgZXJyb3IpO1xyXG5cdFx0fVxyXG5cdFx0dGhyb3cgbmV3IEVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhJyk7XHJcblx0fVxyXG5cclxuXHJcbn0iXSwibmFtZXMiOlsiYXhpb3MiLCJmZXRjaFVzZXJEYXRhIiwidXJsIiwicmVzcG9uc2UiLCJnZXQiLCJkYXRhIiwiZXJyb3IiLCJpc0F4aW9zRXJyb3IiLCJheGlvc0Vycm9yIiwiY29uc29sZSIsIm1lc3NhZ2UiLCJFcnJvciIsImZldGNoVXNlckRhdGFBZHZhbmNlZCIsImdldFVzZXJEYXRhIiwibGltaXQiLCJvZmZzZXQiLCJ0eXBlZFZhbHVlIiwidHJpbSIsImxvZyIsIml0ZW1zIiwiZ2V0UGVyc29uYWxEYXRhIiwidXNlcm5hbWUiLCJKU09OIiwic3RyaW5naWZ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/api/index.ts\n"));

/***/ })

});