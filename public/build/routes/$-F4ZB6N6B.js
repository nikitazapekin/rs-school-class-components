import {
  useLocation,
  useNavigate
} from "/build/_shared/chunk-2TPTIFO2.js";
import {
  createHotContext
} from "/build/_shared/chunk-WYKJAU76.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// src/components/NotFound/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
var style = {
  color: "red",
  fontSize: "20px"
};
var NotFound = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const handleBackToHomepage = () => {
    console.log(111);
    navigate("/");
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "not", "data-testid": "not-found", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style, className: "not__title", children: "404" }, void 0, false, {
      fileName: "src/components/NotFound/index.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "not__text", children: "Page was not found" }, void 0, false, {
      fileName: "src/components/NotFound/index.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: handleBackToHomepage, className: "not__button", children: "Back to homepage" }, void 0, false, {
      fileName: "src/components/NotFound/index.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "src/components/NotFound/index.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
};
var NotFound_default = NotFound;

// app/routes/$.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\$.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\$.tsx"
  );
  import.meta.hot.lastModified = "1723281666450.045";
}
var NotPage = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { "data-testid": "not-found", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(NotFound_default, {}, void 0, false, {
    fileName: "app/routes/$.tsx",
    lineNumber: 26,
    columnNumber: 3
  }, this) }, void 0, false, {
    fileName: "app/routes/$.tsx",
    lineNumber: 24,
    columnNumber: 5
  }, this) }, void 0, false, {
    fileName: "app/routes/$.tsx",
    lineNumber: 23,
    columnNumber: 10
  }, this);
};
_c = NotPage;
var __default = NotPage;
var _c;
$RefreshReg$(_c, "NotPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  __default as default
};
//# sourceMappingURL=/build/routes/$-F4ZB6N6B.js.map
