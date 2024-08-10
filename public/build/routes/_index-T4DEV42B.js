import {
  App_default,
  Background_default,
  Spinner_default,
  useAppDispatch
} from "/build/_shared/chunk-AIKSV2JJ.js";
import {
  setUsers
} from "/build/_shared/chunk-JKX5JPF7.js";
import {
  useLoaderData,
  useNavigation
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

// app/routes/_index.tsx
var import_react = __toESM(require_react(), 1);

// src/store/action-creators/setUsersActionCreator.ts
var setUsersActionCreator = (data) => (dispatch) => {
  dispatch(setUsers(data));
};

// app/routes/_index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\_index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\_index.tsx"
  );
  import.meta.hot.lastModified = "1723306689000.0442";
}
function Index() {
  _s();
  const {
    users
  } = useLoaderData();
  const dispatch = useAppDispatch();
  (0, import_react.useEffect)(() => {
    if (users.length > 0) {
      dispatch(setUsersActionCreator(users));
    }
  }, [users, dispatch]);
  const {
    state
  } = useNavigation();
  console.log(state);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    state === "loading" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
      width: "100%",
      height: "100vh",
      position: "relative",
      zIndex: "111111",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Spinner_default, {}, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 90,
      columnNumber: 5
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 81,
      columnNumber: 31
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(App_default, {}, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 93,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Background_default, {}, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 94,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 79,
    columnNumber: 10
  }, this);
}
_s(Index, "bWUYiK4Re4C8K9gNzWtHhen6cnc=", false, function() {
  return [useLoaderData, useAppDispatch, useNavigation];
});
_c = Index;
var _c;
$RefreshReg$(_c, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default
};
//# sourceMappingURL=/build/routes/_index-T4DEV42B.js.map
