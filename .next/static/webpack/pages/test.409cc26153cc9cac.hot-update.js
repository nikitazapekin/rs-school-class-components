"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/test",{

/***/ "./src/pages/test/index.jsx":
/*!**********************************!*\
  !*** ./src/pages/test/index.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n// pages/items/[page].js\n\nvar _s = $RefreshSig$();\n\n// pages/api/items.js\nasync function handler(req, res) {\n    const { page = 1, limit = 10 } = req.query;\n    const offset = (page - 1) * limit;\n    // Подключение к базе данных и получение данных с пагинацией\n    const items = await getItemsFromDatabase(offset, limit);\n    const totalItems = await countTotalItems();\n    res.status(200).json({\n        items,\n        totalItems,\n        totalPages: Math.ceil(totalItems / limit)\n    });\n}\nconst ItemsPage = (param)=>{\n    let { items, currentPage, totalPages } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const handlePageChange = (page)=>{\n        router.push(\"/items/\".concat(page));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Items\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\wotbl\\\\search-rs\\\\src\\\\pages\\\\test\\\\index.jsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: items.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: item.name\n                    }, item.id, false, {\n                        fileName: \"C:\\\\Users\\\\wotbl\\\\search-rs\\\\src\\\\pages\\\\test\\\\index.jsx\",\n                        lineNumber: 47,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\wotbl\\\\search-rs\\\\src\\\\pages\\\\test\\\\index.jsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: Array.from({\n                    length: totalPages\n                }, (_, index)=>index + 1).map((page)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>handlePageChange(page),\n                        disabled: page === currentPage,\n                        children: page\n                    }, page, false, {\n                        fileName: \"C:\\\\Users\\\\wotbl\\\\search-rs\\\\src\\\\pages\\\\test\\\\index.jsx\",\n                        lineNumber: 52,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\wotbl\\\\search-rs\\\\src\\\\pages\\\\test\\\\index.jsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\wotbl\\\\search-rs\\\\src\\\\pages\\\\test\\\\index.jsx\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ItemsPage, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = ItemsPage;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ItemsPage); /*\r\nexport async function getPosts() {\r\n\r\n  const res = await fetch('https://api.example.com/...');\r\n  return res.json();\r\n\r\n}\r\n\r\nimport BlogPostList from '../components/BlogPostList'\r\n \r\n\r\nexport async function getPosts() {\r\n\r\n  const res = await fetch('https://api.example.com/...');\r\n  return res.json();\r\n\r\n}\r\n\r\n \r\nexport default async function Home() {\r\n\r\n  const posts = await getPosts(); \r\n\r\n  return (\r\n    <div>\r\n      <BlogPostList posts={posts}/>\r\n    </div>\r\n    \r\n  )\r\n}\r\n*/  /*\r\n// pages/index.js\r\nimport { useState } from 'react';\r\nimport axios from 'axios';\r\nimport { useRouter } from 'next/router';\r\n\r\nexport async function getServerSideProps(context) {\r\n  const { page = 1 } = context.query;\r\n  const per_page = 10;\r\nconsole.log(page)\r\n  const response = await axios.get(`https://api.github.com/users`, {\r\n    params: { page, per_page }\r\n  });\r\n\r\n  return {\r\n    props: {\r\n      users: response.data,\r\n      page: Number(page),\r\n      per_page\r\n    }\r\n  };\r\n}\r\n\r\nexport default function Home({ users, page, per_page }) {\r\n  const router = useRouter();\r\n  const [currentPage, setCurrentPage] = useState(page);\r\n\r\n  const handlePageChange = (newPage) => {\r\n    setCurrentPage(newPage);\r\n    router.push(`/test?page=${newPage}`);\r\n  };\r\n\r\n  return (\r\n    <div>\r\n      <h1>GitHub Users</h1>\r\n      <ul>\r\n        {users.map((user) => (\r\n          <li key={user.id}>\r\n          {users.login}\r\n          </li>\r\n        ))}\r\n      </ul>\r\n      <div>\r\n        {currentPage > 1 && (\r\n          <button onClick={() => handlePageChange(currentPage - 1)}>Previous</button>\r\n        )}\r\n        <span>Page {currentPage}</span>\r\n        {users.length === per_page && (\r\n          <button onClick={() => handlePageChange(currentPage + 1)}>Next</button>\r\n        )}\r\n      </div>\r\n    </div>\r\n  );\r\n}\r\n*/  /* \r\n// pages/users.js\r\nimport React from 'react';\r\nimport Link from 'next/link';\r\n\r\nconst Users = ({ users, page }) => {\r\n  return (\r\n    <div>\r\n      <h1>GitHub Users</h1>\r\n      <ul>\r\n        {users.map((user) => (\r\n          <li key={user.id}>{user.login}</li>\r\n        ))}\r\n      </ul>\r\n      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>\r\n        {page > 1 && (\r\n          <Link href={`/test?page=${page - 1}`}>\r\n          Previous\r\n          </Link>\r\n        )}\r\n        <Link href={`/test?page=${page + 1}`}>\r\n        Next\r\n        </Link>\r\n      </div>\r\n    </div>\r\n  );\r\n};\r\n\r\nexport async function getServerSideProps(context) {\r\n  const { page = 1 } = context.query;\r\n\r\n  try {\r\n    const res = await fetch(`https://api.github.com/users?per_page=10&page=${page}`);\r\n    if (!res.ok) {\r\n      throw new Error('Failed to fetch');\r\n    }\r\n    const users = await res.json();\r\n\r\n    return {\r\n      props: {\r\n        users,\r\n        page: Number(page),\r\n      },\r\n    };\r\n  } catch (error) {\r\n    console.error(error);\r\n    return {\r\n      props: {\r\n        users: [],\r\n        page: Number(page),\r\n      },\r\n    };\r\n  }\r\n}\r\n\r\nexport default Users;\r\n\r\n\r\n*/  /*\r\nimport { useRouter } from 'next/router';\r\n\r\nasync function getPostsByPage(page) {\r\n  \r\n  const postsPerPage = 5;\r\n  const totalPosts = 50;  \r\n  const posts = Array.from({ length: postsPerPage }, (_, i) => ({\r\n    id: i + 1 + (page - 1) * postsPerPage,\r\n    title: `Post ${i + 1 + (page - 1) * postsPerPage}`\r\n  }));\r\n\r\n  return {\r\n    posts,\r\n    totalPages: Math.ceil(totalPosts / postsPerPage)\r\n  };\r\n}\r\n\r\nexport async function getServerSideProps(context) {\r\n  const { query } = context;\r\n  const page = parseInt(query.page, 10) || 1;  \r\n  console.log(\"PAG\", page)\r\n  const response = await fetch(`https://api.github.com/users?per_page=${10}&page=${page}`);\r\n  const users = await response.json();\r\n\r\n  console.log(\"USERRRRRRRRRRRRRSS\", users[0])\r\n  const { posts, totalPages } = await getPostsByPage(page);\r\n\r\n  return {\r\n    props: { posts, page, totalPages }\r\n  };\r\n}\r\n\r\nexport default function PostsPage({ posts, page, totalPages }) {\r\n  const router = useRouter();\r\n\r\n  const handlePageChange = (newPage) => {\r\n    if (newPage > 0 && newPage <= totalPages) {\r\n      router.push(`/test?page=${newPage}`);\r\n    }\r\n  };\r\n\r\n  return (\r\n    <div>\r\n      <h1>Posts - Page {page}</h1>\r\n      <ul>\r\n        {posts.map(post => (\r\n          <li key={post.id}>{post.title}</li>\r\n        ))}\r\n      </ul>\r\n      <div>\r\n        <button onClick={() => handlePageChange(page - 1)} disabled={page === 1}>\r\n          Previous\r\n        </button>\r\n        <span> Page {page} of {totalPages} </span>\r\n        <button onClick={() => handlePageChange(page + 1)} disabled={page === totalPages}>\r\n          Next\r\n        </button>\r\n      </div>\r\n    </div>\r\n  );\r\n} \r\n\r\n*/ \nvar _c;\n$RefreshReg$(_c, \"ItemsPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvdGVzdC9pbmRleC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQSx3QkFBd0I7OztBQUNnQjtBQUV4QyxxQkFBcUI7QUFDbkIsZUFBZUMsUUFBUUMsR0FBRyxFQUFFQyxHQUFHO0lBQy9CLE1BQU0sRUFBRUMsT0FBTyxDQUFDLEVBQUVDLFFBQVEsRUFBRSxFQUFFLEdBQUdILElBQUlJLEtBQUs7SUFDMUMsTUFBTUMsU0FBUyxDQUFDSCxPQUFPLEtBQUtDO0lBRTVCLDREQUE0RDtJQUM1RCxNQUFNRyxRQUFRLE1BQU1DLHFCQUFxQkYsUUFBUUY7SUFDakQsTUFBTUssYUFBYSxNQUFNQztJQUV6QlIsSUFBSVMsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztRQUNuQkw7UUFDQUU7UUFDQUksWUFBWUMsS0FBS0MsSUFBSSxDQUFDTixhQUFhTDtJQUNyQztBQUNGO0FBZ0JBLE1BQU1ZLFlBQVk7UUFBQyxFQUFFVCxLQUFLLEVBQUVVLFdBQVcsRUFBRUosVUFBVSxFQUFFOztJQUNuRCxNQUFNSyxTQUFTbkIsc0RBQVNBO0lBRXhCLE1BQU1vQixtQkFBbUIsQ0FBQ2hCO1FBQ3hCZSxPQUFPRSxJQUFJLENBQUMsVUFBZSxPQUFMakI7SUFDeEI7SUFFQSxxQkFDRSw4REFBQ2tCOzswQkFDQyw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0M7MEJBQ0VoQixNQUFNaUIsR0FBRyxDQUFDLENBQUNDLHFCQUNWLDhEQUFDQztrQ0FBa0JELEtBQUtFLElBQUk7dUJBQW5CRixLQUFLRyxFQUFFOzs7Ozs7Ozs7OzBCQUdwQiw4REFBQ1A7MEJBQ0VRLE1BQU1DLElBQUksQ0FBQztvQkFBRUMsUUFBUWxCO2dCQUFXLEdBQUcsQ0FBQ21CLEdBQUdDLFFBQVVBLFFBQVEsR0FBR1QsR0FBRyxDQUFDLENBQUNyQixxQkFDaEUsOERBQUMrQjt3QkFFQ0MsU0FBUyxJQUFNaEIsaUJBQWlCaEI7d0JBQ2hDaUMsVUFBVWpDLFNBQVNjO2tDQUVsQmQ7dUJBSklBOzs7Ozs7Ozs7Ozs7Ozs7O0FBVWpCO0dBNUJNYTs7UUFDV2pCLGtEQUFTQTs7O0tBRHBCaUI7O0FBOEJOLCtEQUFlQSxTQUFTQSxFQUFDLENBS3pCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4QkEsSUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0RBLElBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwREEsSUFNQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBK0RBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy90ZXN0L2luZGV4LmpzeD9jNTkwIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG4vLyBwYWdlcy9pdGVtcy9bcGFnZV0uanNcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuLy8gcGFnZXMvYXBpL2l0ZW1zLmpzXHJcbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gIGNvbnN0IHsgcGFnZSA9IDEsIGxpbWl0ID0gMTAgfSA9IHJlcS5xdWVyeTtcclxuICBjb25zdCBvZmZzZXQgPSAocGFnZSAtIDEpICogbGltaXQ7XHJcblxyXG4gIC8vINCf0L7QtNC60LvRjtGH0LXQvdC40LUg0Log0LHQsNC30LUg0LTQsNC90L3Ri9GFINC4INC/0L7Qu9GD0YfQtdC90LjQtSDQtNCw0L3QvdGL0YUg0YEg0L/QsNCz0LjQvdCw0YbQuNC10LlcclxuICBjb25zdCBpdGVtcyA9IGF3YWl0IGdldEl0ZW1zRnJvbURhdGFiYXNlKG9mZnNldCwgbGltaXQpO1xyXG4gIGNvbnN0IHRvdGFsSXRlbXMgPSBhd2FpdCBjb3VudFRvdGFsSXRlbXMoKTtcclxuXHJcbiAgcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgaXRlbXMsXHJcbiAgICB0b3RhbEl0ZW1zLFxyXG4gICAgdG90YWxQYWdlczogTWF0aC5jZWlsKHRvdGFsSXRlbXMgLyBsaW1pdCksXHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4gIGNvbnN0IHsgcGFnZSA9IDEgfSA9IGNvbnRleHQucGFyYW1zO1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2l0ZW1zP3BhZ2U9JHtwYWdlfSZsaW1pdD0xMGApO1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgaXRlbXM6IGRhdGEuaXRlbXMsXHJcbiAgICAgIGN1cnJlbnRQYWdlOiBwYXJzZUludChwYWdlKSxcclxuICAgICAgdG90YWxQYWdlczogZGF0YS50b3RhbFBhZ2VzLFxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcblxyXG5jb25zdCBJdGVtc1BhZ2UgPSAoeyBpdGVtcywgY3VycmVudFBhZ2UsIHRvdGFsUGFnZXMgfSkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBoYW5kbGVQYWdlQ2hhbmdlID0gKHBhZ2UpID0+IHtcclxuICAgIHJvdXRlci5wdXNoKGAvaXRlbXMvJHtwYWdlfWApO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aDE+SXRlbXM8L2gxPlxyXG4gICAgICA8dWw+XHJcbiAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgPGxpIGtleT17aXRlbS5pZH0+e2l0ZW0ubmFtZX08L2xpPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L3VsPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHtBcnJheS5mcm9tKHsgbGVuZ3RoOiB0b3RhbFBhZ2VzIH0sIChfLCBpbmRleCkgPT4gaW5kZXggKyAxKS5tYXAoKHBhZ2UpID0+IChcclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAga2V5PXtwYWdlfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVQYWdlQ2hhbmdlKHBhZ2UpfVxyXG4gICAgICAgICAgICBkaXNhYmxlZD17cGFnZSA9PT0gY3VycmVudFBhZ2V9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtwYWdlfVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEl0ZW1zUGFnZTtcclxuXHJcblxyXG5cclxuXHJcbi8qXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQb3N0cygpIHtcclxuXHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLmV4YW1wbGUuY29tLy4uLicpO1xyXG4gIHJldHVybiByZXMuanNvbigpO1xyXG5cclxufVxyXG5cclxuaW1wb3J0IEJsb2dQb3N0TGlzdCBmcm9tICcuLi9jb21wb25lbnRzL0Jsb2dQb3N0TGlzdCdcclxuIFxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBvc3RzKCkge1xyXG5cclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuZXhhbXBsZS5jb20vLi4uJyk7XHJcbiAgcmV0dXJuIHJlcy5qc29uKCk7XHJcblxyXG59XHJcblxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIEhvbWUoKSB7XHJcblxyXG4gIGNvbnN0IHBvc3RzID0gYXdhaXQgZ2V0UG9zdHMoKTsgXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8QmxvZ1Bvc3RMaXN0IHBvc3RzPXtwb3N0c30vPlxyXG4gICAgPC9kaXY+XHJcbiAgICBcclxuICApXHJcbn1cclxuKi9cclxuXHJcblxyXG4vKlxyXG4vLyBwYWdlcy9pbmRleC5qc1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcbiAgY29uc3QgeyBwYWdlID0gMSB9ID0gY29udGV4dC5xdWVyeTtcclxuICBjb25zdCBwZXJfcGFnZSA9IDEwO1xyXG5jb25zb2xlLmxvZyhwYWdlKVxyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzYCwge1xyXG4gICAgcGFyYW1zOiB7IHBhZ2UsIHBlcl9wYWdlIH1cclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHVzZXJzOiByZXNwb25zZS5kYXRhLFxyXG4gICAgICBwYWdlOiBOdW1iZXIocGFnZSksXHJcbiAgICAgIHBlcl9wYWdlXHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IHVzZXJzLCBwYWdlLCBwZXJfcGFnZSB9KSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgW2N1cnJlbnRQYWdlLCBzZXRDdXJyZW50UGFnZV0gPSB1c2VTdGF0ZShwYWdlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUGFnZUNoYW5nZSA9IChuZXdQYWdlKSA9PiB7XHJcbiAgICBzZXRDdXJyZW50UGFnZShuZXdQYWdlKTtcclxuICAgIHJvdXRlci5wdXNoKGAvdGVzdD9wYWdlPSR7bmV3UGFnZX1gKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgxPkdpdEh1YiBVc2VyczwvaDE+XHJcbiAgICAgIDx1bD5cclxuICAgICAgICB7dXNlcnMubWFwKCh1c2VyKSA9PiAoXHJcbiAgICAgICAgICA8bGkga2V5PXt1c2VyLmlkfT5cclxuICAgICAgICAgIHt1c2Vycy5sb2dpbn1cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAge2N1cnJlbnRQYWdlID4gMSAmJiAoXHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZVBhZ2VDaGFuZ2UoY3VycmVudFBhZ2UgLSAxKX0+UHJldmlvdXM8L2J1dHRvbj5cclxuICAgICAgICApfVxyXG4gICAgICAgIDxzcGFuPlBhZ2Uge2N1cnJlbnRQYWdlfTwvc3Bhbj5cclxuICAgICAgICB7dXNlcnMubGVuZ3RoID09PSBwZXJfcGFnZSAmJiAoXHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZVBhZ2VDaGFuZ2UoY3VycmVudFBhZ2UgKyAxKX0+TmV4dDwvYnV0dG9uPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4qL1xyXG5cclxuLyogXHJcbi8vIHBhZ2VzL3VzZXJzLmpzXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5jb25zdCBVc2VycyA9ICh7IHVzZXJzLCBwYWdlIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgxPkdpdEh1YiBVc2VyczwvaDE+XHJcbiAgICAgIDx1bD5cclxuICAgICAgICB7dXNlcnMubWFwKCh1c2VyKSA9PiAoXHJcbiAgICAgICAgICA8bGkga2V5PXt1c2VyLmlkfT57dXNlci5sb2dpbn08L2xpPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L3VsPlxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJywgbWFyZ2luVG9wOiAnMjBweCcgfX0+XHJcbiAgICAgICAge3BhZ2UgPiAxICYmIChcclxuICAgICAgICAgIDxMaW5rIGhyZWY9e2AvdGVzdD9wYWdlPSR7cGFnZSAtIDF9YH0+XHJcbiAgICAgICAgICBQcmV2aW91c1xyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPExpbmsgaHJlZj17YC90ZXN0P3BhZ2U9JHtwYWdlICsgMX1gfT5cclxuICAgICAgICBOZXh0XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuICBjb25zdCB7IHBhZ2UgPSAxIH0gPSBjb250ZXh0LnF1ZXJ5O1xyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnM/cGVyX3BhZ2U9MTAmcGFnZT0ke3BhZ2V9YCk7XHJcbiAgICBpZiAoIXJlcy5vaykge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBmZXRjaCcpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdXNlcnMgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgdXNlcnMsXHJcbiAgICAgICAgcGFnZTogTnVtYmVyKHBhZ2UpLFxyXG4gICAgICB9LFxyXG4gICAgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwcm9wczoge1xyXG4gICAgICAgIHVzZXJzOiBbXSxcclxuICAgICAgICBwYWdlOiBOdW1iZXIocGFnZSksXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlcnM7XHJcblxyXG5cclxuKi9cclxuXHJcblxyXG5cclxuXHJcblxyXG4vKlxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRQb3N0c0J5UGFnZShwYWdlKSB7XHJcbiAgXHJcbiAgY29uc3QgcG9zdHNQZXJQYWdlID0gNTtcclxuICBjb25zdCB0b3RhbFBvc3RzID0gNTA7ICBcclxuICBjb25zdCBwb3N0cyA9IEFycmF5LmZyb20oeyBsZW5ndGg6IHBvc3RzUGVyUGFnZSB9LCAoXywgaSkgPT4gKHtcclxuICAgIGlkOiBpICsgMSArIChwYWdlIC0gMSkgKiBwb3N0c1BlclBhZ2UsXHJcbiAgICB0aXRsZTogYFBvc3QgJHtpICsgMSArIChwYWdlIC0gMSkgKiBwb3N0c1BlclBhZ2V9YFxyXG4gIH0pKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHBvc3RzLFxyXG4gICAgdG90YWxQYWdlczogTWF0aC5jZWlsKHRvdGFsUG9zdHMgLyBwb3N0c1BlclBhZ2UpXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcbiAgY29uc3QgeyBxdWVyeSB9ID0gY29udGV4dDtcclxuICBjb25zdCBwYWdlID0gcGFyc2VJbnQocXVlcnkucGFnZSwgMTApIHx8IDE7ICBcclxuICBjb25zb2xlLmxvZyhcIlBBR1wiLCBwYWdlKVxyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnM/cGVyX3BhZ2U9JHsxMH0mcGFnZT0ke3BhZ2V9YCk7XHJcbiAgY29uc3QgdXNlcnMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gIGNvbnNvbGUubG9nKFwiVVNFUlJSUlJSUlJSUlJSUlNTXCIsIHVzZXJzWzBdKVxyXG4gIGNvbnN0IHsgcG9zdHMsIHRvdGFsUGFnZXMgfSA9IGF3YWl0IGdldFBvc3RzQnlQYWdlKHBhZ2UpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHsgcG9zdHMsIHBhZ2UsIHRvdGFsUGFnZXMgfVxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3RzUGFnZSh7IHBvc3RzLCBwYWdlLCB0b3RhbFBhZ2VzIH0pIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUGFnZUNoYW5nZSA9IChuZXdQYWdlKSA9PiB7XHJcbiAgICBpZiAobmV3UGFnZSA+IDAgJiYgbmV3UGFnZSA8PSB0b3RhbFBhZ2VzKSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKGAvdGVzdD9wYWdlPSR7bmV3UGFnZX1gKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgxPlBvc3RzIC0gUGFnZSB7cGFnZX08L2gxPlxyXG4gICAgICA8dWw+XHJcbiAgICAgICAge3Bvc3RzLm1hcChwb3N0ID0+IChcclxuICAgICAgICAgIDxsaSBrZXk9e3Bvc3QuaWR9Pntwb3N0LnRpdGxlfTwvbGk+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVQYWdlQ2hhbmdlKHBhZ2UgLSAxKX0gZGlzYWJsZWQ9e3BhZ2UgPT09IDF9PlxyXG4gICAgICAgICAgUHJldmlvdXNcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8c3Bhbj4gUGFnZSB7cGFnZX0gb2Yge3RvdGFsUGFnZXN9IDwvc3Bhbj5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZVBhZ2VDaGFuZ2UocGFnZSArIDEpfSBkaXNhYmxlZD17cGFnZSA9PT0gdG90YWxQYWdlc30+XHJcbiAgICAgICAgICBOZXh0XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufSBcclxuXHJcbiovIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJwYWdlIiwibGltaXQiLCJxdWVyeSIsIm9mZnNldCIsIml0ZW1zIiwiZ2V0SXRlbXNGcm9tRGF0YWJhc2UiLCJ0b3RhbEl0ZW1zIiwiY291bnRUb3RhbEl0ZW1zIiwic3RhdHVzIiwianNvbiIsInRvdGFsUGFnZXMiLCJNYXRoIiwiY2VpbCIsIkl0ZW1zUGFnZSIsImN1cnJlbnRQYWdlIiwicm91dGVyIiwiaGFuZGxlUGFnZUNoYW5nZSIsInB1c2giLCJkaXYiLCJoMSIsInVsIiwibWFwIiwiaXRlbSIsImxpIiwibmFtZSIsImlkIiwiQXJyYXkiLCJmcm9tIiwibGVuZ3RoIiwiXyIsImluZGV4IiwiYnV0dG9uIiwib25DbGljayIsImRpc2FibGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/test/index.jsx\n"));

/***/ })

});