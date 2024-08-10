import {
  useLoaderData
} from "/build/_shared/chunk-2TPTIFO2.js";
import {
  createHotContext
} from "/build/_shared/chunk-WYKJAU76.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/home/index.tsx
var import_react2 = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\home\\\\index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\home\\index.tsx"
  );
  import.meta.hot.lastModified = "1723306689004.5981";
}
var meta = () => {
  return [{
    title: "New Remix App"
  }, {
    name: "description",
    content: "Welcome to Remix!"
  }];
};
function Index() {
  _s();
  const loaderData = useLoaderData();
  const [notes, setNotes] = (0, import_react2.useState)([{
    id: 1,
    text: "This is a note"
  }]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "container", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Welcome to Remix" }, void 0, false, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 45,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: loaderData.message }, void 0, false, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 46,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setNotes([...notes, {
      id: notes.length + 1,
      text: `Note ${notes.length + 1}`
    }]), children: "Create a Note" }, void 0, false, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 47,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { children: notes.map((note) => {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: note.text }, note.id, false, {
        fileName: "app/routes/home/index.tsx",
        lineNumber: 55,
        columnNumber: 16
      }, this);
    }) }, void 0, false, {
      fileName: "app/routes/home/index.tsx",
      lineNumber: 53,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/home/index.tsx",
    lineNumber: 44,
    columnNumber: 10
  }, this);
}
_s(Index, "gxZ/hPekVAVwaRkJ/ekyr1c3Vx8=", false, function() {
  return [useLoaderData];
});
_c = Index;
var _c;
$RefreshReg$(_c, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default,
  meta
};
//# sourceMappingURL=/build/routes/home-HYCVNV4Z.js.map
