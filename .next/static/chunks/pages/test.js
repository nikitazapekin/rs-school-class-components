/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/test"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=C%3A%5CUsers%5Cwotbl%5Csearch-rs%5Csrc%5Cpages%5Ctest%5Cindex.jsx&page=%2Ftest!":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=C%3A%5CUsers%5Cwotbl%5Csearch-rs%5Csrc%5Cpages%5Ctest%5Cindex.jsx&page=%2Ftest! ***!
  \***********************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/test\",\n      function () {\n        return __webpack_require__(/*! ./src/pages/test/index.jsx */ \"./src/pages/test/index.jsx\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/test\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanM/YWJzb2x1dGVQYWdlUGF0aD1DJTNBJTVDVXNlcnMlNUN3b3RibCU1Q3NlYXJjaC1ycyU1Q3NyYyU1Q3BhZ2VzJTVDdGVzdCU1Q2luZGV4LmpzeCZwYWdlPSUyRnRlc3QhIiwibWFwcGluZ3MiOiI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1CQUFPLENBQUMsOERBQTRCO0FBQ25EO0FBQ0E7QUFDQSxPQUFPLElBQVU7QUFDakIsTUFBTSxVQUFVO0FBQ2hCO0FBQ0EsT0FBTztBQUNQO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLz8wMzkzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuICAgICh3aW5kb3cuX19ORVhUX1AgPSB3aW5kb3cuX19ORVhUX1AgfHwgW10pLnB1c2goW1xuICAgICAgXCIvdGVzdFwiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcmVxdWlyZShcIi4vc3JjL3BhZ2VzL3Rlc3QvaW5kZXguanN4XCIpO1xuICAgICAgfVxuICAgIF0pO1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdpbmRvdy5fX05FWFRfUC5wdXNoKFtcIi90ZXN0XCJdKVxuICAgICAgfSk7XG4gICAgfVxuICAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=C%3A%5CUsers%5Cwotbl%5Csearch-rs%5Csrc%5Cpages%5Ctest%5Cindex.jsx&page=%2Ftest!\n"));

/***/ }),

/***/ "./src/pages/test/index.jsx":
/*!**********************************!*\
  !*** ./src/pages/test/index.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n// pages/items/[page].js\n\nvar _s = $RefreshSig$();\n\n// pages/api/items.js\nasync function handler(req, res) {\n    const { page = 1, limit = 10 } = req.query;\n    const offset = (page - 1) * limit;\n    // Подключение к базе данных и получение данных с пагинацией\n    const items = await getItemsFromDatabase(offset, limit);\n    const totalItems = await countTotalItems();\n    res.status(200).json({\n        items,\n        totalItems,\n        totalPages: Math.ceil(totalItems / limit)\n    });\n}\nconst ItemsPage = (param)=>{\n    let { items, currentPage, totalPages } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const handlePageChange = (page)=>{\n        router.push(\"/test/\".concat(page));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Items\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\wotbl\\\\search-rs\\\\src\\\\pages\\\\test\\\\index.jsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: items.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: item.name\n                    }, item.id, false, {\n                        fileName: \"C:\\\\Users\\\\wotbl\\\\search-rs\\\\src\\\\pages\\\\test\\\\index.jsx\",\n                        lineNumber: 47,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\wotbl\\\\search-rs\\\\src\\\\pages\\\\test\\\\index.jsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: Array.from({\n                    length: totalPages\n                }, (_, index)=>index + 1).map((page)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>handlePageChange(page),\n                        disabled: page === currentPage,\n                        children: page\n                    }, page, false, {\n                        fileName: \"C:\\\\Users\\\\wotbl\\\\search-rs\\\\src\\\\pages\\\\test\\\\index.jsx\",\n                        lineNumber: 52,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\wotbl\\\\search-rs\\\\src\\\\pages\\\\test\\\\index.jsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\wotbl\\\\search-rs\\\\src\\\\pages\\\\test\\\\index.jsx\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ItemsPage, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = ItemsPage;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ItemsPage); /*\r\nexport async function getPosts() {\r\n\r\n  const res = await fetch('https://api.example.com/...');\r\n  return res.json();\r\n\r\n}\r\n\r\nimport BlogPostList from '../components/BlogPostList'\r\n \r\n\r\nexport async function getPosts() {\r\n\r\n  const res = await fetch('https://api.example.com/...');\r\n  return res.json();\r\n\r\n}\r\n\r\n \r\nexport default async function Home() {\r\n\r\n  const posts = await getPosts(); \r\n\r\n  return (\r\n    <div>\r\n      <BlogPostList posts={posts}/>\r\n    </div>\r\n    \r\n  )\r\n}\r\n*/  /*\r\n// pages/index.js\r\nimport { useState } from 'react';\r\nimport axios from 'axios';\r\nimport { useRouter } from 'next/router';\r\n\r\nexport async function getServerSideProps(context) {\r\n  const { page = 1 } = context.query;\r\n  const per_page = 10;\r\nconsole.log(page)\r\n  const response = await axios.get(`https://api.github.com/users`, {\r\n    params: { page, per_page }\r\n  });\r\n\r\n  return {\r\n    props: {\r\n      users: response.data,\r\n      page: Number(page),\r\n      per_page\r\n    }\r\n  };\r\n}\r\n\r\nexport default function Home({ users, page, per_page }) {\r\n  const router = useRouter();\r\n  const [currentPage, setCurrentPage] = useState(page);\r\n\r\n  const handlePageChange = (newPage) => {\r\n    setCurrentPage(newPage);\r\n    router.push(`/test?page=${newPage}`);\r\n  };\r\n\r\n  return (\r\n    <div>\r\n      <h1>GitHub Users</h1>\r\n      <ul>\r\n        {users.map((user) => (\r\n          <li key={user.id}>\r\n          {users.login}\r\n          </li>\r\n        ))}\r\n      </ul>\r\n      <div>\r\n        {currentPage > 1 && (\r\n          <button onClick={() => handlePageChange(currentPage - 1)}>Previous</button>\r\n        )}\r\n        <span>Page {currentPage}</span>\r\n        {users.length === per_page && (\r\n          <button onClick={() => handlePageChange(currentPage + 1)}>Next</button>\r\n        )}\r\n      </div>\r\n    </div>\r\n  );\r\n}\r\n*/  /* \r\n// pages/users.js\r\nimport React from 'react';\r\nimport Link from 'next/link';\r\n\r\nconst Users = ({ users, page }) => {\r\n  return (\r\n    <div>\r\n      <h1>GitHub Users</h1>\r\n      <ul>\r\n        {users.map((user) => (\r\n          <li key={user.id}>{user.login}</li>\r\n        ))}\r\n      </ul>\r\n      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>\r\n        {page > 1 && (\r\n          <Link href={`/test?page=${page - 1}`}>\r\n          Previous\r\n          </Link>\r\n        )}\r\n        <Link href={`/test?page=${page + 1}`}>\r\n        Next\r\n        </Link>\r\n      </div>\r\n    </div>\r\n  );\r\n};\r\n\r\nexport async function getServerSideProps(context) {\r\n  const { page = 1 } = context.query;\r\n\r\n  try {\r\n    const res = await fetch(`https://api.github.com/users?per_page=10&page=${page}`);\r\n    if (!res.ok) {\r\n      throw new Error('Failed to fetch');\r\n    }\r\n    const users = await res.json();\r\n\r\n    return {\r\n      props: {\r\n        users,\r\n        page: Number(page),\r\n      },\r\n    };\r\n  } catch (error) {\r\n    console.error(error);\r\n    return {\r\n      props: {\r\n        users: [],\r\n        page: Number(page),\r\n      },\r\n    };\r\n  }\r\n}\r\n\r\nexport default Users;\r\n\r\n\r\n*/  /*\r\nimport { useRouter } from 'next/router';\r\n\r\nasync function getPostsByPage(page) {\r\n  \r\n  const postsPerPage = 5;\r\n  const totalPosts = 50;  \r\n  const posts = Array.from({ length: postsPerPage }, (_, i) => ({\r\n    id: i + 1 + (page - 1) * postsPerPage,\r\n    title: `Post ${i + 1 + (page - 1) * postsPerPage}`\r\n  }));\r\n\r\n  return {\r\n    posts,\r\n    totalPages: Math.ceil(totalPosts / postsPerPage)\r\n  };\r\n}\r\n\r\nexport async function getServerSideProps(context) {\r\n  const { query } = context;\r\n  const page = parseInt(query.page, 10) || 1;  \r\n  console.log(\"PAG\", page)\r\n  const response = await fetch(`https://api.github.com/users?per_page=${10}&page=${page}`);\r\n  const users = await response.json();\r\n\r\n  console.log(\"USERRRRRRRRRRRRRSS\", users[0])\r\n  const { posts, totalPages } = await getPostsByPage(page);\r\n\r\n  return {\r\n    props: { posts, page, totalPages }\r\n  };\r\n}\r\n\r\nexport default function PostsPage({ posts, page, totalPages }) {\r\n  const router = useRouter();\r\n\r\n  const handlePageChange = (newPage) => {\r\n    if (newPage > 0 && newPage <= totalPages) {\r\n      router.push(`/test?page=${newPage}`);\r\n    }\r\n  };\r\n\r\n  return (\r\n    <div>\r\n      <h1>Posts - Page {page}</h1>\r\n      <ul>\r\n        {posts.map(post => (\r\n          <li key={post.id}>{post.title}</li>\r\n        ))}\r\n      </ul>\r\n      <div>\r\n        <button onClick={() => handlePageChange(page - 1)} disabled={page === 1}>\r\n          Previous\r\n        </button>\r\n        <span> Page {page} of {totalPages} </span>\r\n        <button onClick={() => handlePageChange(page + 1)} disabled={page === totalPages}>\r\n          Next\r\n        </button>\r\n      </div>\r\n    </div>\r\n  );\r\n} \r\n\r\n*/ \nvar _c;\n$RefreshReg$(_c, \"ItemsPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvdGVzdC9pbmRleC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQSx3QkFBd0I7OztBQUNnQjtBQUV4QyxxQkFBcUI7QUFDbkIsZUFBZUMsUUFBUUMsR0FBRyxFQUFFQyxHQUFHO0lBQy9CLE1BQU0sRUFBRUMsT0FBTyxDQUFDLEVBQUVDLFFBQVEsRUFBRSxFQUFFLEdBQUdILElBQUlJLEtBQUs7SUFDMUMsTUFBTUMsU0FBUyxDQUFDSCxPQUFPLEtBQUtDO0lBRTVCLDREQUE0RDtJQUM1RCxNQUFNRyxRQUFRLE1BQU1DLHFCQUFxQkYsUUFBUUY7SUFDakQsTUFBTUssYUFBYSxNQUFNQztJQUV6QlIsSUFBSVMsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztRQUNuQkw7UUFDQUU7UUFDQUksWUFBWUMsS0FBS0MsSUFBSSxDQUFDTixhQUFhTDtJQUNyQztBQUNGO0FBZ0JBLE1BQU1ZLFlBQVk7UUFBQyxFQUFFVCxLQUFLLEVBQUVVLFdBQVcsRUFBRUosVUFBVSxFQUFFOztJQUNuRCxNQUFNSyxTQUFTbkIsc0RBQVNBO0lBRXhCLE1BQU1vQixtQkFBbUIsQ0FBQ2hCO1FBQ3hCZSxPQUFPRSxJQUFJLENBQUMsU0FBYyxPQUFMakI7SUFDdkI7SUFFQSxxQkFDRSw4REFBQ2tCOzswQkFDQyw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0M7MEJBQ0VoQixNQUFNaUIsR0FBRyxDQUFDLENBQUNDLHFCQUNWLDhEQUFDQztrQ0FBa0JELEtBQUtFLElBQUk7dUJBQW5CRixLQUFLRyxFQUFFOzs7Ozs7Ozs7OzBCQUdwQiw4REFBQ1A7MEJBQ0VRLE1BQU1DLElBQUksQ0FBQztvQkFBRUMsUUFBUWxCO2dCQUFXLEdBQUcsQ0FBQ21CLEdBQUdDLFFBQVVBLFFBQVEsR0FBR1QsR0FBRyxDQUFDLENBQUNyQixxQkFDaEUsOERBQUMrQjt3QkFFQ0MsU0FBUyxJQUFNaEIsaUJBQWlCaEI7d0JBQ2hDaUMsVUFBVWpDLFNBQVNjO2tDQUVsQmQ7dUJBSklBOzs7Ozs7Ozs7Ozs7Ozs7O0FBVWpCO0dBNUJNYTs7UUFDV2pCLGtEQUFTQTs7O0tBRHBCaUI7O0FBOEJOLCtEQUFlQSxTQUFTQSxFQUFDLENBS3pCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4QkEsSUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0RBLElBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwREEsSUFNQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBK0RBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy90ZXN0L2luZGV4LmpzeD9jNTkwIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG4vLyBwYWdlcy9pdGVtcy9bcGFnZV0uanNcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuLy8gcGFnZXMvYXBpL2l0ZW1zLmpzXHJcbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gIGNvbnN0IHsgcGFnZSA9IDEsIGxpbWl0ID0gMTAgfSA9IHJlcS5xdWVyeTtcclxuICBjb25zdCBvZmZzZXQgPSAocGFnZSAtIDEpICogbGltaXQ7XHJcblxyXG4gIC8vINCf0L7QtNC60LvRjtGH0LXQvdC40LUg0Log0LHQsNC30LUg0LTQsNC90L3Ri9GFINC4INC/0L7Qu9GD0YfQtdC90LjQtSDQtNCw0L3QvdGL0YUg0YEg0L/QsNCz0LjQvdCw0YbQuNC10LlcclxuICBjb25zdCBpdGVtcyA9IGF3YWl0IGdldEl0ZW1zRnJvbURhdGFiYXNlKG9mZnNldCwgbGltaXQpO1xyXG4gIGNvbnN0IHRvdGFsSXRlbXMgPSBhd2FpdCBjb3VudFRvdGFsSXRlbXMoKTtcclxuXHJcbiAgcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgaXRlbXMsXHJcbiAgICB0b3RhbEl0ZW1zLFxyXG4gICAgdG90YWxQYWdlczogTWF0aC5jZWlsKHRvdGFsSXRlbXMgLyBsaW1pdCksXHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4gIGNvbnN0IHsgcGFnZSA9IDEgfSA9IGNvbnRleHQucGFyYW1zO1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2l0ZW1zP3BhZ2U9JHtwYWdlfSZsaW1pdD0xMGApO1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgaXRlbXM6IGRhdGEuaXRlbXMsXHJcbiAgICAgIGN1cnJlbnRQYWdlOiBwYXJzZUludChwYWdlKSxcclxuICAgICAgdG90YWxQYWdlczogZGF0YS50b3RhbFBhZ2VzLFxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcblxyXG5jb25zdCBJdGVtc1BhZ2UgPSAoeyBpdGVtcywgY3VycmVudFBhZ2UsIHRvdGFsUGFnZXMgfSkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBoYW5kbGVQYWdlQ2hhbmdlID0gKHBhZ2UpID0+IHtcclxuICAgIHJvdXRlci5wdXNoKGAvdGVzdC8ke3BhZ2V9YCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxoMT5JdGVtczwvaDE+XHJcbiAgICAgIDx1bD5cclxuICAgICAgICB7aXRlbXMubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICA8bGkga2V5PXtpdGVtLmlkfT57aXRlbS5uYW1lfTwvbGk+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAge0FycmF5LmZyb20oeyBsZW5ndGg6IHRvdGFsUGFnZXMgfSwgKF8sIGluZGV4KSA9PiBpbmRleCArIDEpLm1hcCgocGFnZSkgPT4gKFxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBrZXk9e3BhZ2V9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVBhZ2VDaGFuZ2UocGFnZSl9XHJcbiAgICAgICAgICAgIGRpc2FibGVkPXtwYWdlID09PSBjdXJyZW50UGFnZX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge3BhZ2V9XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSXRlbXNQYWdlO1xyXG5cclxuXHJcblxyXG5cclxuLypcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBvc3RzKCkge1xyXG5cclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuZXhhbXBsZS5jb20vLi4uJyk7XHJcbiAgcmV0dXJuIHJlcy5qc29uKCk7XHJcblxyXG59XHJcblxyXG5pbXBvcnQgQmxvZ1Bvc3RMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvQmxvZ1Bvc3RMaXN0J1xyXG4gXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UG9zdHMoKSB7XHJcblxyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5leGFtcGxlLmNvbS8uLi4nKTtcclxuICByZXR1cm4gcmVzLmpzb24oKTtcclxuXHJcbn1cclxuXHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gSG9tZSgpIHtcclxuXHJcbiAgY29uc3QgcG9zdHMgPSBhd2FpdCBnZXRQb3N0cygpOyBcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxCbG9nUG9zdExpc3QgcG9zdHM9e3Bvc3RzfS8+XHJcbiAgICA8L2Rpdj5cclxuICAgIFxyXG4gIClcclxufVxyXG4qL1xyXG5cclxuXHJcbi8qXHJcbi8vIHBhZ2VzL2luZGV4LmpzXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuICBjb25zdCB7IHBhZ2UgPSAxIH0gPSBjb250ZXh0LnF1ZXJ5O1xyXG4gIGNvbnN0IHBlcl9wYWdlID0gMTA7XHJcbmNvbnNvbGUubG9nKHBhZ2UpXHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnNgLCB7XHJcbiAgICBwYXJhbXM6IHsgcGFnZSwgcGVyX3BhZ2UgfVxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgdXNlcnM6IHJlc3BvbnNlLmRhdGEsXHJcbiAgICAgIHBhZ2U6IE51bWJlcihwYWdlKSxcclxuICAgICAgcGVyX3BhZ2VcclxuICAgIH1cclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgdXNlcnMsIHBhZ2UsIHBlcl9wYWdlIH0pIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbY3VycmVudFBhZ2UsIHNldEN1cnJlbnRQYWdlXSA9IHVzZVN0YXRlKHBhZ2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVQYWdlQ2hhbmdlID0gKG5ld1BhZ2UpID0+IHtcclxuICAgIHNldEN1cnJlbnRQYWdlKG5ld1BhZ2UpO1xyXG4gICAgcm91dGVyLnB1c2goYC90ZXN0P3BhZ2U9JHtuZXdQYWdlfWApO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aDE+R2l0SHViIFVzZXJzPC9oMT5cclxuICAgICAgPHVsPlxyXG4gICAgICAgIHt1c2Vycy5tYXAoKHVzZXIpID0+IChcclxuICAgICAgICAgIDxsaSBrZXk9e3VzZXIuaWR9PlxyXG4gICAgICAgICAge3VzZXJzLmxvZ2lufVxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICApKX1cclxuICAgICAgPC91bD5cclxuICAgICAgPGRpdj5cclxuICAgICAgICB7Y3VycmVudFBhZ2UgPiAxICYmIChcclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlUGFnZUNoYW5nZShjdXJyZW50UGFnZSAtIDEpfT5QcmV2aW91czwvYnV0dG9uPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPHNwYW4+UGFnZSB7Y3VycmVudFBhZ2V9PC9zcGFuPlxyXG4gICAgICAgIHt1c2Vycy5sZW5ndGggPT09IHBlcl9wYWdlICYmIChcclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlUGFnZUNoYW5nZShjdXJyZW50UGFnZSArIDEpfT5OZXh0PC9idXR0b24+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiovXHJcblxyXG4vKiBcclxuLy8gcGFnZXMvdXNlcnMuanNcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmNvbnN0IFVzZXJzID0gKHsgdXNlcnMsIHBhZ2UgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aDE+R2l0SHViIFVzZXJzPC9oMT5cclxuICAgICAgPHVsPlxyXG4gICAgICAgIHt1c2Vycy5tYXAoKHVzZXIpID0+IChcclxuICAgICAgICAgIDxsaSBrZXk9e3VzZXIuaWR9Pnt1c2VyLmxvZ2lufTwvbGk+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLCBtYXJnaW5Ub3A6ICcyMHB4JyB9fT5cclxuICAgICAgICB7cGFnZSA+IDEgJiYgKFxyXG4gICAgICAgICAgPExpbmsgaHJlZj17YC90ZXN0P3BhZ2U9JHtwYWdlIC0gMX1gfT5cclxuICAgICAgICAgIFByZXZpb3VzXHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8TGluayBocmVmPXtgL3Rlc3Q/cGFnZT0ke3BhZ2UgKyAxfWB9PlxyXG4gICAgICAgIE5leHRcclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4gIGNvbnN0IHsgcGFnZSA9IDEgfSA9IGNvbnRleHQucXVlcnk7XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycz9wZXJfcGFnZT0xMCZwYWdlPSR7cGFnZX1gKTtcclxuICAgIGlmICghcmVzLm9rKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGZldGNoJyk7XHJcbiAgICB9XHJcbiAgICBjb25zdCB1c2VycyA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcHJvcHM6IHtcclxuICAgICAgICB1c2VycyxcclxuICAgICAgICBwYWdlOiBOdW1iZXIocGFnZSksXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgdXNlcnM6IFtdLFxyXG4gICAgICAgIHBhZ2U6IE51bWJlcihwYWdlKSxcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VycztcclxuXHJcblxyXG4qL1xyXG5cclxuXHJcblxyXG5cclxuXHJcbi8qXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldFBvc3RzQnlQYWdlKHBhZ2UpIHtcclxuICBcclxuICBjb25zdCBwb3N0c1BlclBhZ2UgPSA1O1xyXG4gIGNvbnN0IHRvdGFsUG9zdHMgPSA1MDsgIFxyXG4gIGNvbnN0IHBvc3RzID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogcG9zdHNQZXJQYWdlIH0sIChfLCBpKSA9PiAoe1xyXG4gICAgaWQ6IGkgKyAxICsgKHBhZ2UgLSAxKSAqIHBvc3RzUGVyUGFnZSxcclxuICAgIHRpdGxlOiBgUG9zdCAke2kgKyAxICsgKHBhZ2UgLSAxKSAqIHBvc3RzUGVyUGFnZX1gXHJcbiAgfSkpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcG9zdHMsXHJcbiAgICB0b3RhbFBhZ2VzOiBNYXRoLmNlaWwodG90YWxQb3N0cyAvIHBvc3RzUGVyUGFnZSlcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuICBjb25zdCB7IHF1ZXJ5IH0gPSBjb250ZXh0O1xyXG4gIGNvbnN0IHBhZ2UgPSBwYXJzZUludChxdWVyeS5wYWdlLCAxMCkgfHwgMTsgIFxyXG4gIGNvbnNvbGUubG9nKFwiUEFHXCIsIHBhZ2UpXHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycz9wZXJfcGFnZT0kezEwfSZwYWdlPSR7cGFnZX1gKTtcclxuICBjb25zdCB1c2VycyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgY29uc29sZS5sb2coXCJVU0VSUlJSUlJSUlJSUlJSU1NcIiwgdXNlcnNbMF0pXHJcbiAgY29uc3QgeyBwb3N0cywgdG90YWxQYWdlcyB9ID0gYXdhaXQgZ2V0UG9zdHNCeVBhZ2UocGFnZSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczogeyBwb3N0cywgcGFnZSwgdG90YWxQYWdlcyB9XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdHNQYWdlKHsgcG9zdHMsIHBhZ2UsIHRvdGFsUGFnZXMgfSkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBoYW5kbGVQYWdlQ2hhbmdlID0gKG5ld1BhZ2UpID0+IHtcclxuICAgIGlmIChuZXdQYWdlID4gMCAmJiBuZXdQYWdlIDw9IHRvdGFsUGFnZXMpIHtcclxuICAgICAgcm91dGVyLnB1c2goYC90ZXN0P3BhZ2U9JHtuZXdQYWdlfWApO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aDE+UG9zdHMgLSBQYWdlIHtwYWdlfTwvaDE+XHJcbiAgICAgIDx1bD5cclxuICAgICAgICB7cG9zdHMubWFwKHBvc3QgPT4gKFxyXG4gICAgICAgICAgPGxpIGtleT17cG9zdC5pZH0+e3Bvc3QudGl0bGV9PC9saT5cclxuICAgICAgICApKX1cclxuICAgICAgPC91bD5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZVBhZ2VDaGFuZ2UocGFnZSAtIDEpfSBkaXNhYmxlZD17cGFnZSA9PT0gMX0+XHJcbiAgICAgICAgICBQcmV2aW91c1xyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxzcGFuPiBQYWdlIHtwYWdlfSBvZiB7dG90YWxQYWdlc30gPC9zcGFuPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlUGFnZUNoYW5nZShwYWdlICsgMSl9IGRpc2FibGVkPXtwYWdlID09PSB0b3RhbFBhZ2VzfT5cclxuICAgICAgICAgIE5leHRcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59IFxyXG5cclxuKi8iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInBhZ2UiLCJsaW1pdCIsInF1ZXJ5Iiwib2Zmc2V0IiwiaXRlbXMiLCJnZXRJdGVtc0Zyb21EYXRhYmFzZSIsInRvdGFsSXRlbXMiLCJjb3VudFRvdGFsSXRlbXMiLCJzdGF0dXMiLCJqc29uIiwidG90YWxQYWdlcyIsIk1hdGgiLCJjZWlsIiwiSXRlbXNQYWdlIiwiY3VycmVudFBhZ2UiLCJyb3V0ZXIiLCJoYW5kbGVQYWdlQ2hhbmdlIiwicHVzaCIsImRpdiIsImgxIiwidWwiLCJtYXAiLCJpdGVtIiwibGkiLCJuYW1lIiwiaWQiLCJBcnJheSIsImZyb20iLCJsZW5ndGgiLCJfIiwiaW5kZXgiLCJidXR0b24iLCJvbkNsaWNrIiwiZGlzYWJsZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/test/index.jsx\n"));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["pages/_app","main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=C%3A%5CUsers%5Cwotbl%5Csearch-rs%5Csrc%5Cpages%5Ctest%5Cindex.jsx&page=%2Ftest!"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);