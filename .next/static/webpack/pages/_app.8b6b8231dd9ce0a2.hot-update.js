"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/api/index.ts":
/*!**************************!*\
  !*** ./src/api/index.ts ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getPersonalData: function() { return /* binding */ getPersonalData; },\n/* harmony export */   getUserData: function() { return /* binding */ getUserData; }\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nasync function fetchUserData(url) {\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(url);\n        return response.data;\n    } catch (error) {\n        if (axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isAxiosError(error)) {\n            const axiosError = error;\n            console.error(\"Error fetching data:\", axiosError.message);\n        } else {\n            console.error(\"Unknown error:\", error);\n        }\n        throw new Error(\"Error fetching data\");\n    }\n}\nasync function fetchUserDataAdvanced(url) {\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(url);\n        return response.data;\n    } catch (error) {\n        if (axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isAxiosError(error)) {\n            const axiosError = error;\n            console.error(\"Error fetching data:\", axiosError.message);\n        } else {\n            console.error(\"Unknown error:\", error);\n        }\n        throw new Error(\"Error fetching data\");\n    }\n}\nasync function getUserData(limit, offset, typedValue) {\n    let url;\n    if (typedValue.trim() === \"\") {\n        url = \"https://api.github.com/users?page=\".concat(offset, \"&per_page=\").concat(limit);\n        try {\n            const data = await fetchUserData(url);\n            console.log(\"Data:\", data);\n            return data;\n        } catch (error) {\n            console.error(error);\n            throw error;\n        }\n    } else {\n        url = \"https://api.github.com/search/users?q=\".concat(typedValue, \"&page=\").concat(offset, \"&per_page=\").concat(limit);\n        try {\n            const data = await fetchUserDataAdvanced(url);\n            console.log(\"Data:\", data);\n            return data.items;\n        } catch (error) {\n            console.error(error);\n            throw error;\n        }\n    }\n}\nconst getPersonalData = (username)=>{\n//https://api.github.com/users/octocat\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBpL2luZGV4LnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF5RDtBQTZCekQsZUFBZUMsY0FBY0MsR0FBVztJQUN2QyxJQUFJO1FBQ0gsTUFBTUMsV0FBeUMsTUFBTUgsaURBQVMsQ0FBQ0U7UUFDL0QsT0FBT0MsU0FBU0UsSUFBSTtJQUNyQixFQUFFLE9BQU9DLE9BQU87UUFDZixJQUFJTiwwREFBa0IsQ0FBQ00sUUFBUTtZQUM5QixNQUFNRSxhQUFhRjtZQUNuQkcsUUFBUUgsS0FBSyxDQUFDLHdCQUF3QkUsV0FBV0UsT0FBTztRQUN6RCxPQUFPO1lBQ05ELFFBQVFILEtBQUssQ0FBQyxrQkFBa0JBO1FBQ2pDO1FBQ0EsTUFBTSxJQUFJSyxNQUFNO0lBQ2pCO0FBQ0Q7QUFDQSxlQUFlQyxzQkFBc0JWLEdBQVc7SUFDL0MsSUFBSTtRQUNILE1BQU1DLFdBQW9DLE1BQU1ILGlEQUFTLENBQUNFO1FBQzFELE9BQU9DLFNBQVNFLElBQUk7SUFDckIsRUFBRSxPQUFPQyxPQUFPO1FBQ2YsSUFBSU4sMERBQWtCLENBQUNNLFFBQVE7WUFDOUIsTUFBTUUsYUFBYUY7WUFDbkJHLFFBQVFILEtBQUssQ0FBQyx3QkFBd0JFLFdBQVdFLE9BQU87UUFDekQsT0FBTztZQUNORCxRQUFRSCxLQUFLLENBQUMsa0JBQWtCQTtRQUNqQztRQUNBLE1BQU0sSUFBSUssTUFBTTtJQUNqQjtBQUNEO0FBQ08sZUFBZUUsWUFBWUMsS0FBYSxFQUFFQyxNQUFjLEVBQUVDLFVBQWtCO0lBQ2xGLElBQUlkO0lBQ0osSUFBSWMsV0FBV0MsSUFBSSxPQUFPLElBQUk7UUFDN0JmLE1BQU0scUNBQXdEWSxPQUFuQkMsUUFBTyxjQUFrQixPQUFORDtRQUM5RCxJQUFJO1lBQ0gsTUFBTVQsT0FBTyxNQUFNSixjQUFjQztZQUNqQ08sUUFBUVMsR0FBRyxDQUFDLFNBQVNiO1lBQ3JCLE9BQU9BO1FBQ1IsRUFBRSxPQUFPQyxPQUFPO1lBQ2ZHLFFBQVFILEtBQUssQ0FBQ0E7WUFDZCxNQUFNQTtRQUNQO0lBQ0QsT0FBTztRQUNOSixNQUFNLHlDQUE0RGEsT0FBbkJDLFlBQVcsVUFBMkJGLE9BQW5CQyxRQUFPLGNBQWtCLE9BQU5EO1FBQ3JGLElBQUk7WUFDSCxNQUFNVCxPQUFPLE1BQU1PLHNCQUFzQlY7WUFDekNPLFFBQVFTLEdBQUcsQ0FBQyxTQUFTYjtZQUNyQixPQUFPQSxLQUFLYyxLQUFLO1FBQ2xCLEVBQUUsT0FBT2IsT0FBTztZQUNmRyxRQUFRSCxLQUFLLENBQUNBO1lBQ2QsTUFBTUE7UUFDUDtJQUNEO0FBQ0Q7QUEwQk8sTUFBTWMsa0JBQWtCLENBQUNDO0FBQy9CLHNDQUFzQztBQUV2QyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcGkvaW5kZXgudHM/MDI2MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MsIHsgQXhpb3NFcnJvciwgQXhpb3NSZXNwb25zZSB9IGZyb20gJ2F4aW9zJztcclxuXHJcbnR5cGUgVXNlckRhdGFBcnJheSA9IEFycmF5PHtcclxuXHRsb2dpbjogc3RyaW5nO1xyXG5cdGlkOiBudW1iZXI7XHJcblx0bm9kZV9pZDogc3RyaW5nO1xyXG5cdGF2YXRhcl91cmw6IHN0cmluZztcclxuXHRncmF2YXRhcl9pZDogc3RyaW5nO1xyXG5cdHVybDogc3RyaW5nO1xyXG5cdGh0bWxfdXJsOiBzdHJpbmc7XHJcblx0Zm9sbG93ZXJzX3VybDogc3RyaW5nO1xyXG5cdGZvbGxvd2luZ191cmw6IHN0cmluZztcclxuXHRnaXN0c191cmw6IHN0cmluZztcclxuXHRzdGFycmVkX3VybDogc3RyaW5nO1xyXG5cdHN1YnNjcmlwdGlvbnNfdXJsOiBzdHJpbmc7XHJcblx0b3JnYW5pemF0aW9uc191cmw6IHN0cmluZztcclxuXHRyZXBvc191cmw6IHN0cmluZztcclxuXHRldmVudHNfdXJsOiBzdHJpbmc7XHJcblx0cmVjZWl2ZWRfZXZlbnRzX3VybDogc3RyaW5nO1xyXG5cdHR5cGU6IHN0cmluZztcclxuXHRzaXRlX2FkbWluOiBib29sZWFuO1xyXG5cdHNjb3JlOiBudW1iZXI7XHJcbn0+O1xyXG5pbnRlcmZhY2UgVXNlckRhdGEge1xyXG5cdHRvdGFsX2NvdW50OiBudW1iZXI7XHJcblx0aW5jb21wbGV0ZV9yZXN1bHRzOiBib29sZWFuO1xyXG5cdGl0ZW1zOiBVc2VyRGF0YUFycmF5O1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBmZXRjaFVzZXJEYXRhKHVybDogc3RyaW5nKTogUHJvbWlzZTxVc2VyRGF0YUFycmF5PiB7XHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IHJlc3BvbnNlOiBBeGlvc1Jlc3BvbnNlPFVzZXJEYXRhQXJyYXk+ID0gYXdhaXQgYXhpb3MuZ2V0KHVybCk7XHJcblx0XHRyZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuXHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0aWYgKGF4aW9zLmlzQXhpb3NFcnJvcihlcnJvcikpIHtcclxuXHRcdFx0Y29uc3QgYXhpb3NFcnJvciA9IGVycm9yIGFzIEF4aW9zRXJyb3I7XHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgYXhpb3NFcnJvci5tZXNzYWdlKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoJ1Vua25vd24gZXJyb3I6JywgZXJyb3IpO1xyXG5cdFx0fVxyXG5cdFx0dGhyb3cgbmV3IEVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhJyk7XHJcblx0fVxyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIGZldGNoVXNlckRhdGFBZHZhbmNlZCh1cmw6IHN0cmluZyk6IFByb21pc2U8VXNlckRhdGE+IHtcclxuXHR0cnkge1xyXG5cdFx0Y29uc3QgcmVzcG9uc2U6IEF4aW9zUmVzcG9uc2U8VXNlckRhdGE+ID0gYXdhaXQgYXhpb3MuZ2V0KHVybCk7XHJcblx0XHRyZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuXHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0aWYgKGF4aW9zLmlzQXhpb3NFcnJvcihlcnJvcikpIHtcclxuXHRcdFx0Y29uc3QgYXhpb3NFcnJvciA9IGVycm9yIGFzIEF4aW9zRXJyb3I7XHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgYXhpb3NFcnJvci5tZXNzYWdlKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoJ1Vua25vd24gZXJyb3I6JywgZXJyb3IpO1xyXG5cdFx0fVxyXG5cdFx0dGhyb3cgbmV3IEVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhJyk7XHJcblx0fVxyXG59XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRVc2VyRGF0YShsaW1pdDogbnVtYmVyLCBvZmZzZXQ6IG51bWJlciwgdHlwZWRWYWx1ZTogc3RyaW5nKTogUHJvbWlzZTxVc2VyRGF0YUFycmF5PiB7XHJcblx0bGV0IHVybDogc3RyaW5nO1xyXG5cdGlmICh0eXBlZFZhbHVlLnRyaW0oKSA9PT0gJycpIHtcclxuXHRcdHVybCA9IGBodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzP3BhZ2U9JHtvZmZzZXR9JnBlcl9wYWdlPSR7bGltaXR9YDtcclxuXHRcdHRyeSB7XHJcblx0XHRcdGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaFVzZXJEYXRhKHVybCk7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdEYXRhOicsIGRhdGEpO1xyXG5cdFx0XHRyZXR1cm4gZGF0YTtcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG5cdFx0XHR0aHJvdyBlcnJvcjtcclxuXHRcdH1cclxuXHR9IGVsc2Uge1xyXG5cdFx0dXJsID0gYGh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vc2VhcmNoL3VzZXJzP3E9JHt0eXBlZFZhbHVlfSZwYWdlPSR7b2Zmc2V0fSZwZXJfcGFnZT0ke2xpbWl0fWA7XHJcblx0XHR0cnkge1xyXG5cdFx0XHRjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hVc2VyRGF0YUFkdmFuY2VkKHVybCk7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdEYXRhOicsIGRhdGEpO1xyXG5cdFx0XHRyZXR1cm4gZGF0YS5pdGVtcztcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG5cdFx0XHR0aHJvdyBlcnJvcjtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbiAgaW50ZXJmYWNlIFVzZXIge1xyXG5cdGxvZ2luOiBzdHJpbmc7XHJcblx0aWQ6IG51bWJlcjtcclxuXHRub2RlX2lkOiBzdHJpbmc7XHJcblx0YXZhdGFyX3VybDogc3RyaW5nO1xyXG5cdGdyYXZhdGFyX2lkOiBzdHJpbmc7XHJcblx0dXJsOiBzdHJpbmc7XHJcblx0aHRtbF91cmw6IHN0cmluZztcclxuXHRmb2xsb3dlcnNfdXJsOiBzdHJpbmc7XHJcblx0Zm9sbG93aW5nX3VybDogc3RyaW5nO1xyXG5cdGdpc3RzX3VybDogc3RyaW5nO1xyXG5cdHN0YXJyZWRfdXJsOiBzdHJpbmc7XHJcblx0c3Vic2NyaXB0aW9uc191cmw6IHN0cmluZztcclxuXHRvcmdhbml6YXRpb25zX3VybDogc3RyaW5nO1xyXG5cdHJlcG9zX3VybDogc3RyaW5nO1xyXG5cdGV2ZW50c191cmw6IHN0cmluZztcclxuXHRyZWNlaXZlZF9ldmVudHNfdXJsOiBzdHJpbmc7XHJcblx0dHlwZTogc3RyaW5nO1xyXG5cdHNpdGVfYWRtaW46IGJvb2xlYW47XHJcblx0c2NvcmU6IG51bWJlcjtcclxufVxyXG5leHBvcnQgY29uc3QgZ2V0UGVyc29uYWxEYXRhID0gKHVzZXJuYW1lOiBzdHJpbmcpOiBQcm9taXNlPFVzZXI+ID0+IHtcclxuXHQvL2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvb2N0b2NhdFxyXG5cclxufSJdLCJuYW1lcyI6WyJheGlvcyIsImZldGNoVXNlckRhdGEiLCJ1cmwiLCJyZXNwb25zZSIsImdldCIsImRhdGEiLCJlcnJvciIsImlzQXhpb3NFcnJvciIsImF4aW9zRXJyb3IiLCJjb25zb2xlIiwibWVzc2FnZSIsIkVycm9yIiwiZmV0Y2hVc2VyRGF0YUFkdmFuY2VkIiwiZ2V0VXNlckRhdGEiLCJsaW1pdCIsIm9mZnNldCIsInR5cGVkVmFsdWUiLCJ0cmltIiwibG9nIiwiaXRlbXMiLCJnZXRQZXJzb25hbERhdGEiLCJ1c2VybmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/api/index.ts\n"));

/***/ })

});