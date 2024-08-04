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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getPersonalData: function() { return /* binding */ getPersonalData; },\n/* harmony export */   getUserData: function() { return /* binding */ getUserData; }\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nasync function fetchUserData(url) {\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(url);\n        return response.data;\n    } catch (error) {\n        if (axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isAxiosError(error)) {\n            const axiosError = error;\n            console.error(\"Error fetching data:\", axiosError.message);\n        } else {\n            console.error(\"Unknown error:\", error);\n        }\n        throw new Error(\"Error fetching data\");\n    }\n}\nasync function fetchUserDataAdvanced(url) {\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(url);\n        return response.data;\n    } catch (error) {\n        if (axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isAxiosError(error)) {\n            const axiosError = error;\n            console.error(\"Error fetching data:\", axiosError.message);\n        } else {\n            console.error(\"Unknown error:\", error);\n        }\n        throw new Error(\"Error fetching data\");\n    }\n}\nasync function getUserData(limit, offset, typedValue) {\n    let url;\n    if (typedValue.trim() === \"\") {\n        url = \"https://api.github.com/users?page=\".concat(offset, \"&per_page=\").concat(limit);\n        try {\n            const data = await fetchUserData(url);\n            console.log(\"Data:\", data);\n            return data;\n        } catch (error) {\n            console.error(error);\n            throw error;\n        }\n    } else {\n        url = \"https://api.github.com/search/users?q=\".concat(typedValue, \"&page=\").concat(offset, \"&per_page=\").concat(limit);\n        try {\n            const data = await fetchUserDataAdvanced(url);\n            console.log(\"Data:\", data);\n            return data.items;\n        } catch (error) {\n            console.error(error);\n            throw error;\n        }\n    }\n}\nconst getPersonalData = async (username)=>{\n    //https://api.github.com/users/octocat\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"https://api.github.com/users/\".concat(username));\n        console.log();\n        return response.data;\n    } catch (error) {\n        if (axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isAxiosError(error)) {\n            const axiosError = error;\n            console.error(\"Error fetching data:\", axiosError.message);\n        } else {\n            console.error(\"Unknown error:\", error);\n        }\n        throw new Error(\"Error fetching data\");\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBpL2luZGV4LnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF5RDtBQTZCekQsZUFBZUMsY0FBY0MsR0FBVztJQUN2QyxJQUFJO1FBQ0gsTUFBTUMsV0FBeUMsTUFBTUgsaURBQVMsQ0FBQ0U7UUFDL0QsT0FBT0MsU0FBU0UsSUFBSTtJQUNyQixFQUFFLE9BQU9DLE9BQU87UUFDZixJQUFJTiwwREFBa0IsQ0FBQ00sUUFBUTtZQUM5QixNQUFNRSxhQUFhRjtZQUNuQkcsUUFBUUgsS0FBSyxDQUFDLHdCQUF3QkUsV0FBV0UsT0FBTztRQUN6RCxPQUFPO1lBQ05ELFFBQVFILEtBQUssQ0FBQyxrQkFBa0JBO1FBQ2pDO1FBQ0EsTUFBTSxJQUFJSyxNQUFNO0lBQ2pCO0FBQ0Q7QUFDQSxlQUFlQyxzQkFBc0JWLEdBQVc7SUFDL0MsSUFBSTtRQUNILE1BQU1DLFdBQW9DLE1BQU1ILGlEQUFTLENBQUNFO1FBQzFELE9BQU9DLFNBQVNFLElBQUk7SUFDckIsRUFBRSxPQUFPQyxPQUFPO1FBQ2YsSUFBSU4sMERBQWtCLENBQUNNLFFBQVE7WUFDOUIsTUFBTUUsYUFBYUY7WUFDbkJHLFFBQVFILEtBQUssQ0FBQyx3QkFBd0JFLFdBQVdFLE9BQU87UUFDekQsT0FBTztZQUNORCxRQUFRSCxLQUFLLENBQUMsa0JBQWtCQTtRQUNqQztRQUNBLE1BQU0sSUFBSUssTUFBTTtJQUNqQjtBQUNEO0FBQ08sZUFBZUUsWUFBWUMsS0FBYSxFQUFFQyxNQUFjLEVBQUVDLFVBQWtCO0lBQ2xGLElBQUlkO0lBQ0osSUFBSWMsV0FBV0MsSUFBSSxPQUFPLElBQUk7UUFDN0JmLE1BQU0scUNBQXdEWSxPQUFuQkMsUUFBTyxjQUFrQixPQUFORDtRQUM5RCxJQUFJO1lBQ0gsTUFBTVQsT0FBTyxNQUFNSixjQUFjQztZQUNqQ08sUUFBUVMsR0FBRyxDQUFDLFNBQVNiO1lBQ3JCLE9BQU9BO1FBQ1IsRUFBRSxPQUFPQyxPQUFPO1lBQ2ZHLFFBQVFILEtBQUssQ0FBQ0E7WUFDZCxNQUFNQTtRQUNQO0lBQ0QsT0FBTztRQUNOSixNQUFNLHlDQUE0RGEsT0FBbkJDLFlBQVcsVUFBMkJGLE9BQW5CQyxRQUFPLGNBQWtCLE9BQU5EO1FBQ3JGLElBQUk7WUFDSCxNQUFNVCxPQUFPLE1BQU1PLHNCQUFzQlY7WUFDekNPLFFBQVFTLEdBQUcsQ0FBQyxTQUFTYjtZQUNyQixPQUFPQSxLQUFLYyxLQUFLO1FBQ2xCLEVBQUUsT0FBT2IsT0FBTztZQUNmRyxRQUFRSCxLQUFLLENBQUNBO1lBQ2QsTUFBTUE7UUFDUDtJQUNEO0FBQ0Q7QUEwQk8sTUFBTWMsa0JBQWtCLE9BQU9DO0lBQ3JDLHNDQUFzQztJQUV0QyxJQUFJO1FBQ0gsTUFBTWxCLFdBQWdDLE1BQU1ILGlEQUFTLENBQUMsZ0NBQXlDLE9BQVRxQjtRQUN0RlosUUFBUVMsR0FBRztRQUNYLE9BQU9mLFNBQVNFLElBQUk7SUFDckIsRUFBRSxPQUFPQyxPQUFPO1FBQ2YsSUFBSU4sMERBQWtCLENBQUNNLFFBQVE7WUFDOUIsTUFBTUUsYUFBYUY7WUFDbkJHLFFBQVFILEtBQUssQ0FBQyx3QkFBd0JFLFdBQVdFLE9BQU87UUFDekQsT0FBTztZQUNORCxRQUFRSCxLQUFLLENBQUMsa0JBQWtCQTtRQUNqQztRQUNBLE1BQU0sSUFBSUssTUFBTTtJQUNqQjtBQUdELEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwaS9pbmRleC50cz8wMjYwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcywgeyBBeGlvc0Vycm9yLCBBeGlvc1Jlc3BvbnNlIH0gZnJvbSAnYXhpb3MnO1xyXG5cclxudHlwZSBVc2VyRGF0YUFycmF5ID0gQXJyYXk8e1xyXG5cdGxvZ2luOiBzdHJpbmc7XHJcblx0aWQ6IG51bWJlcjtcclxuXHRub2RlX2lkOiBzdHJpbmc7XHJcblx0YXZhdGFyX3VybDogc3RyaW5nO1xyXG5cdGdyYXZhdGFyX2lkOiBzdHJpbmc7XHJcblx0dXJsOiBzdHJpbmc7XHJcblx0aHRtbF91cmw6IHN0cmluZztcclxuXHRmb2xsb3dlcnNfdXJsOiBzdHJpbmc7XHJcblx0Zm9sbG93aW5nX3VybDogc3RyaW5nO1xyXG5cdGdpc3RzX3VybDogc3RyaW5nO1xyXG5cdHN0YXJyZWRfdXJsOiBzdHJpbmc7XHJcblx0c3Vic2NyaXB0aW9uc191cmw6IHN0cmluZztcclxuXHRvcmdhbml6YXRpb25zX3VybDogc3RyaW5nO1xyXG5cdHJlcG9zX3VybDogc3RyaW5nO1xyXG5cdGV2ZW50c191cmw6IHN0cmluZztcclxuXHRyZWNlaXZlZF9ldmVudHNfdXJsOiBzdHJpbmc7XHJcblx0dHlwZTogc3RyaW5nO1xyXG5cdHNpdGVfYWRtaW46IGJvb2xlYW47XHJcblx0c2NvcmU6IG51bWJlcjtcclxufT47XHJcbmludGVyZmFjZSBVc2VyRGF0YSB7XHJcblx0dG90YWxfY291bnQ6IG51bWJlcjtcclxuXHRpbmNvbXBsZXRlX3Jlc3VsdHM6IGJvb2xlYW47XHJcblx0aXRlbXM6IFVzZXJEYXRhQXJyYXk7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGZldGNoVXNlckRhdGEodXJsOiBzdHJpbmcpOiBQcm9taXNlPFVzZXJEYXRhQXJyYXk+IHtcclxuXHR0cnkge1xyXG5cdFx0Y29uc3QgcmVzcG9uc2U6IEF4aW9zUmVzcG9uc2U8VXNlckRhdGFBcnJheT4gPSBhd2FpdCBheGlvcy5nZXQodXJsKTtcclxuXHRcdHJldHVybiByZXNwb25zZS5kYXRhO1xyXG5cdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRpZiAoYXhpb3MuaXNBeGlvc0Vycm9yKGVycm9yKSkge1xyXG5cdFx0XHRjb25zdCBheGlvc0Vycm9yID0gZXJyb3IgYXMgQXhpb3NFcnJvcjtcclxuXHRcdFx0Y29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBheGlvc0Vycm9yLm1lc3NhZ2UpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Y29uc29sZS5lcnJvcignVW5rbm93biBlcnJvcjonLCBlcnJvcik7XHJcblx0XHR9XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGEnKTtcclxuXHR9XHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hVc2VyRGF0YUFkdmFuY2VkKHVybDogc3RyaW5nKTogUHJvbWlzZTxVc2VyRGF0YT4ge1xyXG5cdHRyeSB7XHJcblx0XHRjb25zdCByZXNwb25zZTogQXhpb3NSZXNwb25zZTxVc2VyRGF0YT4gPSBhd2FpdCBheGlvcy5nZXQodXJsKTtcclxuXHRcdHJldHVybiByZXNwb25zZS5kYXRhO1xyXG5cdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRpZiAoYXhpb3MuaXNBeGlvc0Vycm9yKGVycm9yKSkge1xyXG5cdFx0XHRjb25zdCBheGlvc0Vycm9yID0gZXJyb3IgYXMgQXhpb3NFcnJvcjtcclxuXHRcdFx0Y29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBheGlvc0Vycm9yLm1lc3NhZ2UpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Y29uc29sZS5lcnJvcignVW5rbm93biBlcnJvcjonLCBlcnJvcik7XHJcblx0XHR9XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGEnKTtcclxuXHR9XHJcbn1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFVzZXJEYXRhKGxpbWl0OiBudW1iZXIsIG9mZnNldDogbnVtYmVyLCB0eXBlZFZhbHVlOiBzdHJpbmcpOiBQcm9taXNlPFVzZXJEYXRhQXJyYXk+IHtcclxuXHRsZXQgdXJsOiBzdHJpbmc7XHJcblx0aWYgKHR5cGVkVmFsdWUudHJpbSgpID09PSAnJykge1xyXG5cdFx0dXJsID0gYGh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnM/cGFnZT0ke29mZnNldH0mcGVyX3BhZ2U9JHtsaW1pdH1gO1xyXG5cdFx0dHJ5IHtcclxuXHRcdFx0Y29uc3QgZGF0YSA9IGF3YWl0IGZldGNoVXNlckRhdGEodXJsKTtcclxuXHRcdFx0Y29uc29sZS5sb2coJ0RhdGE6JywgZGF0YSk7XHJcblx0XHRcdHJldHVybiBkYXRhO1xyXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdFx0Y29uc29sZS5lcnJvcihlcnJvcik7XHJcblx0XHRcdHRocm93IGVycm9yO1xyXG5cdFx0fVxyXG5cdH0gZWxzZSB7XHJcblx0XHR1cmwgPSBgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9zZWFyY2gvdXNlcnM/cT0ke3R5cGVkVmFsdWV9JnBhZ2U9JHtvZmZzZXR9JnBlcl9wYWdlPSR7bGltaXR9YDtcclxuXHRcdHRyeSB7XHJcblx0XHRcdGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaFVzZXJEYXRhQWR2YW5jZWQodXJsKTtcclxuXHRcdFx0Y29uc29sZS5sb2coJ0RhdGE6JywgZGF0YSk7XHJcblx0XHRcdHJldHVybiBkYXRhLml0ZW1zO1xyXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdFx0Y29uc29sZS5lcnJvcihlcnJvcik7XHJcblx0XHRcdHRocm93IGVycm9yO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuaW50ZXJmYWNlIFVzZXIge1xyXG5cdGxvZ2luOiBzdHJpbmc7XHJcblx0aWQ6IG51bWJlcjtcclxuXHRub2RlX2lkOiBzdHJpbmc7XHJcblx0YXZhdGFyX3VybDogc3RyaW5nO1xyXG5cdGdyYXZhdGFyX2lkOiBzdHJpbmc7XHJcblx0dXJsOiBzdHJpbmc7XHJcblx0aHRtbF91cmw6IHN0cmluZztcclxuXHRmb2xsb3dlcnNfdXJsOiBzdHJpbmc7XHJcblx0Zm9sbG93aW5nX3VybDogc3RyaW5nO1xyXG5cdGdpc3RzX3VybDogc3RyaW5nO1xyXG5cdHN0YXJyZWRfdXJsOiBzdHJpbmc7XHJcblx0c3Vic2NyaXB0aW9uc191cmw6IHN0cmluZztcclxuXHRvcmdhbml6YXRpb25zX3VybDogc3RyaW5nO1xyXG5cdHJlcG9zX3VybDogc3RyaW5nO1xyXG5cdGV2ZW50c191cmw6IHN0cmluZztcclxuXHRyZWNlaXZlZF9ldmVudHNfdXJsOiBzdHJpbmc7XHJcblx0dHlwZTogc3RyaW5nO1xyXG5cdHNpdGVfYWRtaW46IGJvb2xlYW47XHJcblx0c2NvcmU6IG51bWJlcjtcclxufVxyXG5leHBvcnQgY29uc3QgZ2V0UGVyc29uYWxEYXRhID0gYXN5bmMgKHVzZXJuYW1lOiBzdHJpbmcpOiBQcm9taXNlPFVzZXI+ID0+IHtcclxuXHQvL2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvb2N0b2NhdFxyXG5cclxuXHR0cnkge1xyXG5cdFx0Y29uc3QgcmVzcG9uc2U6IEF4aW9zUmVzcG9uc2U8VXNlcj4gPSBhd2FpdCBheGlvcy5nZXQoYGh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvJHt1c2VybmFtZX1gKTtcclxuXHRcdGNvbnNvbGUubG9nKClcclxuXHRcdHJldHVybiByZXNwb25zZS5kYXRhXHJcblx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdGlmIChheGlvcy5pc0F4aW9zRXJyb3IoZXJyb3IpKSB7XHJcblx0XHRcdGNvbnN0IGF4aW9zRXJyb3IgPSBlcnJvciBhcyBBeGlvc0Vycm9yO1xyXG5cdFx0XHRjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGF4aW9zRXJyb3IubWVzc2FnZSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRjb25zb2xlLmVycm9yKCdVbmtub3duIGVycm9yOicsIGVycm9yKTtcclxuXHRcdH1cclxuXHRcdHRocm93IG5ldyBFcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YScpO1xyXG5cdH1cclxuXHJcblxyXG59Il0sIm5hbWVzIjpbImF4aW9zIiwiZmV0Y2hVc2VyRGF0YSIsInVybCIsInJlc3BvbnNlIiwiZ2V0IiwiZGF0YSIsImVycm9yIiwiaXNBeGlvc0Vycm9yIiwiYXhpb3NFcnJvciIsImNvbnNvbGUiLCJtZXNzYWdlIiwiRXJyb3IiLCJmZXRjaFVzZXJEYXRhQWR2YW5jZWQiLCJnZXRVc2VyRGF0YSIsImxpbWl0Iiwib2Zmc2V0IiwidHlwZWRWYWx1ZSIsInRyaW0iLCJsb2ciLCJpdGVtcyIsImdldFBlcnNvbmFsRGF0YSIsInVzZXJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/api/index.ts\n"));

/***/ })

});