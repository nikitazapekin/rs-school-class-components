import {
  App_default,
  Background_default,
  Spinner_default,
  getThemeSelector,
  paramsSelector,
  useAppDispatch
} from "/build/_shared/chunk-IXWMQZDO.js";
import {
  setClickedUser,
  useSelector
} from "/build/_shared/chunk-LFRHN66C.js";
import {
  Link,
  useLoaderData,
  useNavigation
} from "/build/_shared/chunk-JMKKOCVI.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  createHotContext
} from "/build/_shared/chunk-WYKJAU76.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/details/index.tsx
var import_react3 = __toESM(require_react(), 1);

// src/components/UserData/index.tsx
var import_react = __toESM(require_react(), 1);

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
  const [isHovering, setIsHovering] = (0, import_react.useState)(false);
  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "aside",
    {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        position: "fixed",
        right: 0,
        top: 0,
        width: "40%",
        backgroundColor: isDark ? "rgb(80, 75, 75)" : "rgb(172, 164, 154)",
        height: "100vh",
        transition: "1s"
      },
      children: [
        loading && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Spinner_default, { "data-testid": "spinner" }, void 0, false, {
          fileName: "src/components/UserData/index.tsx",
          lineNumber: 37,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: clickedUser.login }, void 0, false, {
            fileName: "src/components/UserData/index.tsx",
            lineNumber: 39,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "img",
            {
              src: clickedUser.avatar_url,
              alt: `${clickedUser.login}'s avatar`,
              style: {
                borderRadius: "50%",
                maxWidth: "100px"
              }
            },
            void 0,
            false,
            {
              fileName: "src/components/UserData/index.tsx",
              lineNumber: 40,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
            "ID: ",
            clickedUser.id
          ] }, void 0, true, {
            fileName: "src/components/UserData/index.tsx",
            lineNumber: 48,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
            "Type: ",
            clickedUser.type
          ] }, void 0, true, {
            fileName: "src/components/UserData/index.tsx",
            lineNumber: 49,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "src/components/UserData/index.tsx",
          lineNumber: 38,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          Link,
          {
            to: `/?page=${params.offset}${params.query ? `&query=${params.query}` : ""}`,
            style: {
              marginTop: "30px",
              padding: "20px",
              maxWidth: "90%",
              width: "100%",
              cursor: "pointer",
              borderRadius: "20px",
              fontSize: "30px",
              textAlign: "center",
              textDecoration: "none",
              color: isHovering ? "#fff" : "#000",
              backgroundColor: isHovering ? "rgb(90, 90, 190)" : "transparent",
              transition: "1s"
            },
            onMouseEnter: handleMouseEnter,
            onMouseLeave: handleMouseLeave,
            children: "Close"
          },
          void 0,
          false,
          {
            fileName: "src/components/UserData/index.tsx",
            lineNumber: 51,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    true,
    {
      fileName: "src/components/UserData/index.tsx",
      lineNumber: 22,
      columnNumber: 5
    },
    this
  );
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
  import.meta.hot.lastModified = "1723326767623.6223";
}
var Deatils = () => {
  _s();
  const {
    user
  } = useLoaderData();
  const dispath = useAppDispatch();
  (0, import_react3.useEffect)(() => {
    dispath(setClickedUser(user));
  }, [user]);
  const {
    state
  } = useNavigation();
  console.log(state);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    state === "loading" && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { style: {
      width: "100%",
      height: "100vh",
      position: "relative",
      zIndex: "111111",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Spinner_default, {}, void 0, false, {
      fileName: "app/routes/details/index.tsx",
      lineNumber: 90,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/details/index.tsx",
      lineNumber: 81,
      columnNumber: 37
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(App_default, {}, void 0, false, {
      fileName: "app/routes/details/index.tsx",
      lineNumber: 93,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Background_default, {}, void 0, false, {
      fileName: "app/routes/details/index.tsx",
      lineNumber: 94,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(UserData_default, {}, void 0, false, {
      fileName: "app/routes/details/index.tsx",
      lineNumber: 95,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/details/index.tsx",
    lineNumber: 79,
    columnNumber: 10
  }, this);
};
_s(Deatils, "u7wKP1F6xXqlF1DiBa55jL9cNFk=", false, function() {
  return [useLoaderData, useAppDispatch, useNavigation];
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
//# sourceMappingURL=/build/routes/details-XZP235BN.js.map
