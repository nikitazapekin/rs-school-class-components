import {
  useNavigate
} from "/build/_shared/chunk-JMKKOCVI.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import {
  createHotContext
} from "/build/_shared/chunk-WYKJAU76.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// src/components/NotFound/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
var NotFound = () => {
  const navigate = useNavigate();
  const handleBackToHomepage = () => {
    navigate("/");
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.not, "data-testid": "not-found", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: styles.title, children: "404" }, void 0, false, {
      fileName: "src/components/NotFound/index.tsx",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: styles.text, children: "Page was not found" }, void 0, false, {
      fileName: "src/components/NotFound/index.tsx",
      lineNumber: 12,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: handleBackToHomepage, style: styles.button, children: "Back to homepage" }, void 0, false, {
      fileName: "src/components/NotFound/index.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "src/components/NotFound/index.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
};
var styles = {
  not: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    height: "100vh"
  },
  title: {
    fontSize: "106px"
  },
  text: {
    fontSize: "56px"
  },
  button: {
    marginTop: "30px",
    padding: "20px",
    cursor: "pointer",
    borderRadius: "20px",
    fontSize: "30px",
    transition: "background-color 1s, color 1s",
    backgroundColor: "transparent",
    color: "#000",
    border: "none",
    textDecoration: "none"
  },
  buttonHover: {
    backgroundColor: "rgb(90, 90, 190)",
    color: "#fff"
  }
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
  import.meta.hot.lastModified = "1723306688996.9912";
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
//# sourceMappingURL=/build/routes/$-VQFGQ7KK.js.map
