import {
  createHotContext
} from "/build/_shared/chunk-WYKJAU76.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/test/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\test\\\\index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\test\\index.tsx"
  );
  import.meta.hot.lastModified = "1723238625491.056";
}
var style = {
  color: "red",
  fontSize: "20px"
};
function MyComponent() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style, children: "Hello World" }, void 0, false, {
    fileName: "app/routes/test/index.tsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
}
_c = MyComponent;
var test_default = MyComponent;
var _c;
$RefreshReg$(_c, "MyComponent");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  test_default as default
};
//# sourceMappingURL=/build/routes/test-WYG6TCWP.js.map
