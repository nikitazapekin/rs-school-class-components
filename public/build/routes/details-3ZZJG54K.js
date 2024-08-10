import {
  App_default,
  Background_default,
  Spinner_default,
  getThemeSelector,
  paramsSelector,
  useAppDispatch
} from "/build/_shared/chunk-AFXLO7UK.js";
import {
  setClickedUser,
  useSelector
} from "/build/_shared/chunk-JKX5JPF7.js";
import {
  Link,
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

// app/routes/details/index.tsx
var import_react2 = __toESM(require_react(), 1);

// src/store/selectors/isLoadingUserData.ts
var isLoadingUserDataSelector = (state) => state.appSlice.isLoadingUserData;

// src/store/selectors/getClickedElement.ts
var clickedUserSelector = (state) => state.appSlice.clickedUser;

// src/components/UserData/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
var UserData = () => {
  const isDark = useSelector(getThemeSelector);
  const params = useSelector(paramsSelector);
  const clickedUser = useSelector(clickedUserSelector);
  const loading = useSelector(isLoadingUserDataSelector);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("aside", { className: `sidebar ${isDark ? `sidebar-dark` : ""}`, children: [
    loading && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Spinner_default, { "data-testid": "spinner" }, void 0, false, {
      fileName: "src/components/UserData/index.tsx",
      lineNumber: 23,
      columnNumber: 16
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: clickedUser.login }, void 0, false, {
        fileName: "src/components/UserData/index.tsx",
        lineNumber: 25,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: clickedUser.avatar_url, alt: `${clickedUser.login}'s avatar` }, void 0, false, {
        fileName: "src/components/UserData/index.tsx",
        lineNumber: 26,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
        "ID: ",
        clickedUser.id
      ] }, void 0, true, {
        fileName: "src/components/UserData/index.tsx",
        lineNumber: 27,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
        "Type: ",
        clickedUser.type
      ] }, void 0, true, {
        fileName: "src/components/UserData/index.tsx",
        lineNumber: 28,
        columnNumber: 6
      }, this)
    ] }, void 0, true, {
      fileName: "src/components/UserData/index.tsx",
      lineNumber: 24,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/?page=${params.offset}${params.query ? `&query=${params.query}` : ``}`, children: "Close" }, void 0, false, {
      fileName: "src/components/UserData/index.tsx",
      lineNumber: 33,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "src/components/UserData/index.tsx",
    lineNumber: 22,
    columnNumber: 3
  }, this);
};
var UserData_default = UserData;

// app/routes/details/index.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\details\\\\index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\details\\index.tsx"
  );
  import.meta.hot.lastModified = "1723281666454.1392";
}
var Deatils = () => {
  _s();
  const {
    user
  } = useLoaderData();
  const dispath = useAppDispatch();
  (0, import_react2.useEffect)(() => {
    dispath(setClickedUser(user));
  }, [user]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(App_default, {}, void 0, false, {
      fileName: "app/routes/details/index.tsx",
      lineNumber: 74,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Background_default, {}, void 0, false, {
      fileName: "app/routes/details/index.tsx",
      lineNumber: 75,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(UserData_default, {}, void 0, false, {
      fileName: "app/routes/details/index.tsx",
      lineNumber: 76,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/details/index.tsx",
    lineNumber: 73,
    columnNumber: 10
  }, this);
};
_s(Deatils, "2z70gmRmeq7iftpNG1HzPz7Hg0Q=", false, function() {
  return [useLoaderData, useAppDispatch];
});
_c = Deatils;
var details_default = Deatils;
var _c;
$RefreshReg$(_c, "Deatils");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  details_default as default
};
//# sourceMappingURL=/build/routes/details-3ZZJG54K.js.map
