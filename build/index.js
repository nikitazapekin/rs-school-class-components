var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isbot(request.headers.get("user-agent") || "") ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 51,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 101,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  Layout: () => Layout,
  default: () => App
});
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";
import { Provider } from "react-redux";

// src/store/store.ts
import { combineReducers, configureStore } from "@reduxjs/toolkit";

// src/store/slices/appSlice.ts
import { createSlice } from "@reduxjs/toolkit";
var initialState = {
  isLoading: !1,
  error: null,
  isLoadingUserData: !1,
  users: [],
  typedValue: "",
  params: {
    limit: 10,
    offset: 1,
    query: "",
    storedValue: ""
  },
  status: "idle",
  clickedUser: {
    login: "",
    id: 0,
    node_id: "",
    avatar_url: "",
    gravatar_id: "",
    url: "",
    html_url: "",
    followers_url: "",
    following_url: "",
    gists_url: "",
    starred_url: "",
    subscriptions_url: "",
    organizations_url: "",
    repos_url: "",
    events_url: "",
    received_events_url: "",
    type: "",
    site_admin: !1,
    score: 0
  }
}, appSlicee = createSlice({
  name: "app",
  initialState,
  reducers: {
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
    setLoadingUserData(state, action) {
      state.isLoadingUserData = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setSearchParamsURL(state, action) {
      state.params.query = action.payload.query, state.params.offset = action.payload.offset;
    },
    setFirstPage(state) {
      state.params.offset = 1;
    },
    setNextPage(state) {
      state.params.offset = state.params.offset + 1;
    },
    setPrevPage(state) {
      state.params.offset = state.params.offset - 1;
    },
    setQueryPage(state, action) {
      state.params.query = action.payload;
    },
    setUsers(state, action) {
      state.users = action.payload;
    },
    setStoredInLocalStorageQuery(state, action) {
      state.params.storedValue = action.payload, state.params.query = action.payload;
    },
    setTypedValue(state, action) {
      state.typedValue = action.payload;
    },
    setNewSearchValue(state) {
      state.params.query = state.typedValue, state.params.storedValue = state.typedValue;
    },
    setClickedUser(state, action) {
      state.clickedUser = action.payload;
    }
  }
}), {
  setLoading,
  setError,
  setLoadingUserData,
  setSearchParamsURL,
  setNextPage,
  setPrevPage,
  setQueryPage,
  setUsers,
  setFirstPage,
  setStoredInLocalStorageQuery,
  setTypedValue,
  setClickedUser,
  setNewSearchValue
} = appSlicee.actions, appSlice_default = appSlicee.reducer;

// src/store/slices/selectedElementsSlice.ts
import { createSlice as createSlice2 } from "@reduxjs/toolkit";
var initialState2 = {
  storedElements: [],
  selectedElement: null
}, selectedElementsSlice = createSlice2({
  name: "selectedElements",
  initialState: initialState2,
  reducers: {
    setAddToStoredElement(state, action) {
      state.storedElements.some((item) => item.id == action.payload.id) ? state.storedElements = state.storedElements.filter((item) => item.id != action.payload.id) : state.storedElements = [...state.storedElements, action.payload];
    },
    setRemoveStoredElementById(state, action) {
      state.storedElements = state.storedElements.filter((item) => item.id != action.payload);
    },
    setClearStoredElements(state) {
      state.storedElements = [];
    },
    setSelectedElement(state, action) {
      action.payload != null && action.payload != null && (state.selectedElement = action.payload), console.log(state.selectedElement);
    }
  }
}), { setAddToStoredElement, setClearStoredElements, setSelectedElement, setRemoveStoredElementById } = selectedElementsSlice.actions, selectedElementsSlice_default = selectedElementsSlice.reducer;

// src/store/slices/themeSlice.ts
import { createSlice as createSlice3 } from "@reduxjs/toolkit";
var initialState3 = {
  isDark: !1
}, themeSlice = createSlice3({
  name: "app",
  initialState: initialState3,
  reducers: {
    setTheme(state) {
      state.isDark = !state.isDark;
    }
  }
}), {
  setTheme
} = themeSlice.actions, themeSlice_default = themeSlice.reducer;

// src/store/store.ts
var rootReducer = combineReducers({
  appSlice: appSlice_default,
  selectedElementsSlice: selectedElementsSlice_default,
  themeSlice: themeSlice_default
}), store = configureStore({
  reducer: rootReducer
});

// app/root.tsx
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
function Layout({ children }) {
  return /* @__PURE__ */ jsxDEV2("html", { lang: "en", children: [
    /* @__PURE__ */ jsxDEV2("head", { children: [
      /* @__PURE__ */ jsxDEV2("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 18,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 19,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 20,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV2("body", { children: [
      /* @__PURE__ */ jsxDEV2(Provider, { store, children }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 23,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}
function App() {
  return /* @__PURE__ */ jsxDEV2(Outlet, {}, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 36,
    columnNumber: 10
  }, this);
}

// app/routes/errorpage.test.tsx
var errorpage_test_exports = {};

// app/routes/details/index.tsx
var details_exports = {};
__export(details_exports, {
  default: () => details_default,
  loader: () => loader
});
import { useEffect as useEffect3 } from "react";
import axios from "axios";
import { useLoaderData } from "@remix-run/react";

// src/components/UserData/index.tsx
import { useState } from "react";

// src/components/Spinner/index.tsx
import { Fragment, jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var Spinner = () => /* @__PURE__ */ jsxDEV3(Fragment, { children: /* @__PURE__ */ jsxDEV3("span", { className: "loader", "data-testid": "loader" }, void 0, !1, {
  fileName: "src/components/Spinner/index.tsx",
  lineNumber: 5,
  columnNumber: 4
}, this) }, void 0, !1, {
  fileName: "src/components/Spinner/index.tsx",
  lineNumber: 4,
  columnNumber: 3
}, this), Spinner_default = Spinner;

// src/components/UserData/index.tsx
import { useSelector } from "react-redux";

// src/store/selectors/isLoadingUserData.ts
var isLoadingUserDataSelector = (state) => state.appSlice.isLoadingUserData;

// src/store/selectors/getTheme.ts
var getThemeSelector = (state) => state.themeSlice.isDark;

// src/store/selectors/getClickedElement.ts
var clickedUserSelector = (state) => state.appSlice.clickedUser;

// src/store/selectors/getSearchParams.ts
var paramsSelector = (state) => (state.appSlice || {}).params || { query: "", offset: 1, limit: 10, storedValue: "" };

// src/components/UserData/index.tsx
import { Link } from "@remix-run/react";
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
var UserData = () => {
  let isDark = useSelector(getThemeSelector), params = useSelector(paramsSelector), clickedUser = useSelector(clickedUserSelector), loading = useSelector(isLoadingUserDataSelector), [isHovering, setIsHovering] = useState(!1), handleMouseEnter = () => setIsHovering(!0), handleMouseLeave = () => setIsHovering(!1);
  return /* @__PURE__ */ jsxDEV4(
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
        loading && /* @__PURE__ */ jsxDEV4(Spinner_default, { "data-testid": "spinner" }, void 0, !1, {
          fileName: "src/components/UserData/index.tsx",
          lineNumber: 37,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ jsxDEV4("div", { children: [
          /* @__PURE__ */ jsxDEV4("h2", { children: clickedUser.login }, void 0, !1, {
            fileName: "src/components/UserData/index.tsx",
            lineNumber: 39,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV4(
            "img",
            {
              src: clickedUser.avatar_url,
              alt: `${clickedUser.login}'s avatar`,
              style: {
                borderRadius: "50%",
                maxWidth: "100px"
                // Adjusted size for a more appropriate display
              }
            },
            void 0,
            !1,
            {
              fileName: "src/components/UserData/index.tsx",
              lineNumber: 40,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ jsxDEV4("p", { children: [
            "ID: ",
            clickedUser.id
          ] }, void 0, !0, {
            fileName: "src/components/UserData/index.tsx",
            lineNumber: 48,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV4("p", { children: [
            "Type: ",
            clickedUser.type
          ] }, void 0, !0, {
            fileName: "src/components/UserData/index.tsx",
            lineNumber: 49,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "src/components/UserData/index.tsx",
          lineNumber: 38,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV4(
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
          !1,
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
    !0,
    {
      fileName: "src/components/UserData/index.tsx",
      lineNumber: 22,
      columnNumber: 5
    },
    this
  );
}, UserData_default = UserData;

// src/components/Header/index.tsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

// src/components/ThemeButton/index.tsx
import { useSelector as useSelector3 } from "react-redux";

// src/hooks/redux.ts
import { useDispatch, useSelector as useSelector2 } from "react-redux";
var useAppDispatch = () => useDispatch();

// src/components/ThemeButton/index.tsx
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
var ThemeButton = () => {
  let isDark = useSelector3(getThemeSelector), dispatch = useAppDispatch(), handleClick = () => {
    dispatch(setTheme());
  };
  return /* @__PURE__ */ jsxDEV5(
    "button",
    {
      style: isDark ? { ...styles.button, ...styles.buttonDark } : styles.button,
      onClick: handleClick,
      children: [
        "Switch Theme ",
        isDark ? "Dark" : "Light"
      ]
    },
    void 0,
    !0,
    {
      fileName: "src/components/ThemeButton/index.tsx",
      lineNumber: 18,
      columnNumber: 5
    },
    this
  );
}, styles = {
  button: {
    cursor: "pointer",
    padding: "7px",
    marginLeft: "10px",
    transition: "1s",
    backgroundColor: "transparent",
    border: "none",
    color: "#000"
  },
  buttonDark: {
    backgroundColor: "rgb(90, 90, 190)",
    color: "#fff"
  }
}, ThemeButton_default = ThemeButton;

// src/hooks/useURL.ts
import { useEffect } from "react";
import { useSelector as useSelector4 } from "react-redux";

// src/store/action-creators/setSearchParamsActionCreator.ts
var setSearchParamsActionCreator = (offset, query) => (dispatch) => {
  dispatch(setSearchParamsURL({ offset, query }));
};
var setNextPageActionCreator = () => (dispatch) => {
  dispatch(setNextPage());
}, setPrevPageActionCreator = () => (dispatch) => {
  dispatch(setPrevPage());
}, setQueryActionCreator = (query) => (dispatch) => {
  dispatch(setQueryPage(query));
};

// src/hooks/useURL.ts
import { useNavigate, useLocation } from "@remix-run/react";
var useURL = () => {
  let navigate = useNavigate(), location = useLocation(), dispatch = useAppDispatch(), searchParams = useSelector4(paramsSelector), setPage = (page, query) => {
    let params = new URLSearchParams(location.search);
    params.set("page", String(page)), query ? params.set("query", query) : params.delete("query"), navigate(`?${params.toString()}`), console.log("Navigated to:", `?${params.toString()}`);
  }, getPageAndQuery = () => {
    let params = new URLSearchParams(location.search), page = parseInt(params.get("page") || "1", 10), query = params.get("query") || "";
    return { page, query };
  };
  return useEffect(() => {
    let params = getPageAndQuery();
    setPage(Number(params.page), String(params.query)), localStorage.setItem("searchParam", String(params.query)), dispatch(setSearchParamsActionCreator(Number(params.page), String(params.query)));
  }, []), {
    setPage,
    handleInput: (event) => {
      dispatch(setQueryActionCreator(event.target.value));
    },
    handleSearch: () => {
      window.scrollTo(0, 0), dispatch(setSearchParamsActionCreator(1, searchParams.query));
      let params = new URLSearchParams(location.search);
      params.set("page", String(1)), params.set("query", String(searchParams.query)), navigate(`?${params.toString()}`);
    }
  };
}, useURL_default = useURL;

// src/components/Header/index.tsx
import { useSelector as useSelector5 } from "react-redux";
import { Link as Link2 } from "@remix-run/react";
import { jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
var Header = () => {
  let isDark = useSelector5(getThemeSelector), { handleInput, handleSearch } = useURL_default();
  return /* @__PURE__ */ jsxDEV6("header", { style: { ...styles2.header, ...isDark ? styles2.headerDark : {} }, children: /* @__PURE__ */ jsxDEV6("div", { style: styles2.content, children: [
    /* @__PURE__ */ jsxDEV6("nav", { style: styles2.search, children: [
      /* @__PURE__ */ jsxDEV6(
        "input",
        {
          type: "text",
          style: styles2.searchBar,
          placeholder: "Search...",
          onChange: handleInput
        },
        void 0,
        !1,
        {
          fileName: "src/components/Header/index.tsx",
          lineNumber: 18,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV6(
        "button",
        {
          style: styles2.searchBtn,
          onClick: handleSearch,
          "aria-label": "search",
          children: /* @__PURE__ */ jsxDEV6(FontAwesomeIcon, { icon: faSearch }, void 0, !1, {
            fileName: "src/components/Header/index.tsx",
            lineNumber: 29,
            columnNumber: 13
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "src/components/Header/index.tsx",
          lineNumber: 24,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "src/components/Header/index.tsx",
      lineNumber: 17,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV6(Link2, { to: "/dcfewfe", style: styles2.redirectBtn, children: "Redirect to not found page" }, void 0, !1, {
      fileName: "src/components/Header/index.tsx",
      lineNumber: 33,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV6(ThemeButton_default, {}, void 0, !1, {
      fileName: "src/components/Header/index.tsx",
      lineNumber: 36,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "src/components/Header/index.tsx",
    lineNumber: 16,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "src/components/Header/index.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}, styles2 = {
  header: {
    width: "100%",
    backgroundColor: "rgb(212, 201, 188)",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 11,
    transition: "1s"
  },
  content: {
    height: "90px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 15px"
  },
  search: {
    maxWidth: "700px",
    width: "100%",
    display: "flex"
  },
  headerDark: {
    backgroundColor: "rgb(43, 41, 41)"
  },
  searchBar: {
    width: "100%",
    padding: "5px 10px"
  },
  searchBtn: {
    padding: "5px",
    transition: "1s",
    cursor: "pointer",
    backgroundColor: "transparent"
  },
  redirectBtn: {
    cursor: "pointer",
    padding: "7px",
    marginLeft: "10px",
    transition: "1s",
    textDecoration: "none",
    color: "inherit"
  }
}, Header_default = Header;

// src/store/action-creators/addElementToStorage.ts
var AddElementToStorage = (user) => (dispatch) => {
  dispatch(setAddToStoredElement(user));
};

// src/components/Card/index.tsx
import { useSelector as useSelector6 } from "react-redux";

// src/store/selectors/getStoredElements.ts
var storedUsersSelector = (state) => state.selectedElementsSlice.storedElements || [];

// src/components/Card/index.tsx
import { useNavigate as useNavigate2, useLocation as useLocation2 } from "@remix-run/react";
import { jsxDEV as jsxDEV7 } from "react/jsx-dev-runtime";
var Card = ({ user }) => {
  let dispatch = useAppDispatch(), isDark = useSelector6(getThemeSelector), users = useSelector6(storedUsersSelector), params = useSelector6(paramsSelector), navigate = useNavigate2(), location = useLocation2(), handleCheckboxChange = () => {
    dispatch(AddElementToStorage(user));
  }, handleDetailsClick = () => {
    console.log(11);
    let queryParams = new URLSearchParams();
    queryParams.append("page", String(params.offset)), params.query && queryParams.append("query", params.query), queryParams.append("user", user.login), navigate(`/details?${queryParams.toString()}`, { state: { from: location } });
  };
  return /* @__PURE__ */ jsxDEV7("div", { style: styles3.userLink, children: /* @__PURE__ */ jsxDEV7("div", { style: { ...styles3.user, ...isDark ? styles3.userDark : {} }, children: [
    /* @__PURE__ */ jsxDEV7("img", { className: "user__logo", src: user.avatar_url, alt: "user", style: styles3.userLogo }, void 0, !1, {
      fileName: "src/components/Card/index.tsx",
      lineNumber: 39,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV7("div", { style: styles3.userContent, children: [
      /* @__PURE__ */ jsxDEV7("p", { style: styles3.userLogin, children: user.login }, void 0, !1, {
        fileName: "src/components/Card/index.tsx",
        lineNumber: 41,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV7(
        "input",
        {
          type: "checkbox",
          style: styles3.userCheckbox,
          onChange: handleCheckboxChange,
          checked: users && users.some((storedUser) => user.id === storedUser.id),
          readOnly: !0
        },
        void 0,
        !1,
        {
          fileName: "src/components/Card/index.tsx",
          lineNumber: 42,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV7("button", { onClick: handleDetailsClick, style: styles3.userDetails, children: "Show details" }, void 0, !1, {
        fileName: "src/components/Card/index.tsx",
        lineNumber: 49,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "src/components/Card/index.tsx",
      lineNumber: 40,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "src/components/Card/index.tsx",
    lineNumber: 38,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "src/components/Card/index.tsx",
    lineNumber: 37,
    columnNumber: 5
  }, this);
}, styles3 = {
  userLink: {
    textDecoration: "none",
    color: "#000"
  },
  user: {
    padding: "40px 20px",
    fontSize: "32px",
    backgroundColor: "rgb(201, 174, 124)",
    display: "flex",
    transition: "0.5s ease-in-out",
    alignItems: "flex-start",
    cursor: "pointer"
  },
  userLogo: {
    borderRadius: "50%",
    maxWidth: "300px"
  },
  userDark: {
    backgroundColor: "rgb(73, 71, 71)",
    color: "#fff"
  },
  userContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    rowGap: "20px",
    marginLeft: "20px"
  },
  userLogin: {
    fontSize: "1.2rem",
    fontWeight: "bold"
  },
  userCheckbox: {
    position: "relative",
    width: "20px",
    height: "20px",
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    borderRadius: "4px",
    cursor: "pointer",
    outline: "none",
    transition: "background-color 0.3s"
  },
  userCheckboxHover: {
    backgroundColor: "#f0f0f0"
  },
  userDetails: {
    fontSize: "24px",
    cursor: "pointer",
    padding: "10px 25px",
    transition: "1s",
    backgroundColor: "transparent",
    border: "none",
    color: "#000"
  },
  userDetailsHover: {
    backgroundColor: "rgb(90, 90, 190)",
    color: "#fff"
  }
}, Card_default = Card;

// src/components/List/index.tsx
import { useSelector as useSelector7 } from "react-redux";

// src/store/selectors/getUsersSelector.ts
var getUsersSelector = (state) => state.appSlice.users;

// src/store/selectors/isLoadingSelector.ts
var isLoadingSelector = (state) => state.appSlice.isLoading;

// src/components/List/index.tsx
import { jsxDEV as jsxDEV8 } from "react/jsx-dev-runtime";
var List = () => {
  let { setPage } = useURL_default(), dispatch = useAppDispatch(), users = useSelector7(getUsersSelector), params = useSelector7(paramsSelector), isLoading = useSelector7(isLoadingSelector), handleNext = () => {
    window.scrollTo(0, 0), dispatch(setNextPageActionCreator()), setPage(params.offset + 1, params.query);
  }, handlePrev = () => {
    window.scrollTo(0, 0), dispatch(setPrevPageActionCreator()), setPage(params.offset - 1, params.query);
  };
  return /* @__PURE__ */ jsxDEV8("section", { style: styles4.list, children: /* @__PURE__ */ jsxDEV8("div", { style: styles4.container, children: [
    isLoading && /* @__PURE__ */ jsxDEV8(Spinner_default, {}, void 0, !1, {
      fileName: "src/components/List/index.tsx",
      lineNumber: 38,
      columnNumber: 23
    }, this),
    users.map((item) => /* @__PURE__ */ jsxDEV8(Card_default, { user: item }, item.id, !1, {
      fileName: "src/components/List/index.tsx",
      lineNumber: 40,
      columnNumber: 11
    }, this)),
    users.length === 0 && /* @__PURE__ */ jsxDEV8("p", { style: styles4.nothing, children: "Nothing found" }, void 0, !1, {
      fileName: "src/components/List/index.tsx",
      lineNumber: 42,
      columnNumber: 32
    }, this),
    /* @__PURE__ */ jsxDEV8("div", { style: styles4.btns, children: [
      /* @__PURE__ */ jsxDEV8("button", { style: styles4.btn, onClick: handlePrev, children: "Prev" }, void 0, !1, {
        fileName: "src/components/List/index.tsx",
        lineNumber: 44,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV8("button", { style: { ...styles4.btn, ...styles4.next }, onClick: handleNext, "data-testid": "next", children: "Next" }, void 0, !1, {
        fileName: "src/components/List/index.tsx",
        lineNumber: 47,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "src/components/List/index.tsx",
      lineNumber: 43,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "src/components/List/index.tsx",
    lineNumber: 37,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "src/components/List/index.tsx",
    lineNumber: 36,
    columnNumber: 5
  }, this);
}, styles4 = {
  list: {
    marginTop: "90px"
  },
  container: {
    // Additional styles if needed
  },
  btns: {
    display: "flex",
    columnGap: "30px",
    justifyContent: "center",
    marginTop: "20px"
  },
  btn: {
    padding: "10px 25px",
    cursor: "pointer",
    transition: "1s",
    fontSize: "30px",
    backgroundColor: "transparent",
    border: "none"
  },
  next: {
    // Styles for the "Next" button if different from the "Prev" button
  },
  btnHover: {
    backgroundColor: "rgb(90, 90, 190)",
    color: "#fff"
  },
  nothing: {
    fontSize: "44px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  error: {
    fontSize: "56px",
    textAlign: "center"
  }
}, List_default = List;

// src/components/App/index.tsx
import { useEffect as useEffect2 } from "react";
import { useSelector as useSelector10 } from "react-redux";

// src/components/StoredUsersFlyoutElement/index.tsx
import { useState as useState2 } from "react";

// src/store/action-creators/clearStoredElementsActionCreator.ts
var clearStoredElementsActionCreator = () => (dispatch) => {
  dispatch(setClearStoredElements());
};

// src/components/StoredUsersFlyoutElement/index.tsx
import { useSelector as useSelector8 } from "react-redux";
import { jsxDEV as jsxDEV9 } from "react/jsx-dev-runtime";
var StoredUsersButton = () => {
  let dispatch = useAppDispatch(), users = useSelector8(storedUsersSelector), [url, setUrl] = useState2(), handleClear = () => {
    dispatch(clearStoredElementsActionCreator());
  }, handleDownload = () => {
    if (users.length === 0)
      return;
    let refinedData = [Object.keys(users[0])];
    users.forEach((item) => {
      refinedData.push(Object.values(item).map((value) => String(value)));
    });
    let csvContent = "";
    refinedData.forEach((row) => {
      csvContent += row.join(";") + `
`;
    });
    let blob = new Blob([csvContent], { type: "text/csv;charset=utf-8" }), url2 = URL.createObjectURL(blob);
    setUrl(url2);
  };
  return /* @__PURE__ */ jsxDEV9("div", { style: styles5.panel, children: [
    /* @__PURE__ */ jsxDEV9("p", { style: styles5.text, children: [
      "You chose ",
      users.length,
      " users"
    ] }, void 0, !0, {
      fileName: "src/components/StoredUsersFlyoutElement/index.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV9("div", { style: styles5.buttons, children: [
      /* @__PURE__ */ jsxDEV9(
        "a",
        {
          style: { ...styles5.button, ...styles5.downloadHover },
          href: url,
          download: `${users.length}__users.csv`,
          onClick: handleDownload,
          children: "download"
        },
        void 0,
        !1,
        {
          fileName: "src/components/StoredUsersFlyoutElement/index.tsx",
          lineNumber: 39,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV9(
        "button",
        {
          style: { ...styles5.button, ...styles5.clearButton },
          onClick: handleClear,
          children: "Unselect all"
        },
        void 0,
        !1,
        {
          fileName: "src/components/StoredUsersFlyoutElement/index.tsx",
          lineNumber: 47,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "src/components/StoredUsersFlyoutElement/index.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "src/components/StoredUsersFlyoutElement/index.tsx",
    lineNumber: 36,
    columnNumber: 5
  }, this);
}, styles5 = {
  panel: {
    padding: "17px",
    position: "fixed",
    bottom: 0,
    left: 0,
    zIndex: 111,
    backgroundColor: "rgb(167, 158, 158)",
    borderRadius: "20px"
  },
  buttons: {
    display: "flex",
    columnGap: "20px"
  },
  button: {
    cursor: "pointer",
    zIndex: 111,
    padding: "7px",
    fontSize: "35px",
    maxWidth: "300px",
    transition: "1s",
    textDecoration: "none",
    color: "black"
  },
  text: {
    fontSize: "32px"
  },
  downloadHover: {
    backgroundColor: "rgb(90, 90, 190)",
    color: "#fff"
  },
  clearButton: {
    backgroundColor: "rgb(158, 51, 51)",
    color: "#fff"
  }
}, StoredUsersFlyoutElement_default = StoredUsersButton;

// src/components/Background/index.tsx
import { useSelector as useSelector9 } from "react-redux";
import { jsxDEV as jsxDEV10 } from "react/jsx-dev-runtime";
var Background = () => {
  let backgroundStyle = {
    backgroundColor: useSelector9(getThemeSelector) ? "rgb(59, 59, 59)" : "aliceblue",
    width: "100%",
    minHeight: "100vh",
    height: "100%",
    position: "fixed",
    left: 0,
    top: 0,
    zIndex: -111,
    transition: "1s"
  };
  return /* @__PURE__ */ jsxDEV10("div", { style: backgroundStyle, "data-testid": "background", children: " " }, void 0, !1, {
    fileName: "src/components/Background/index.tsx",
    lineNumber: 21,
    columnNumber: 3
  }, this);
}, Background_default = Background;

// src/store/action-creators/setStoredInLocalStorageQuery.ts
var setStoredInLocalStorageActionCreator = (query) => (dispatch) => {
  dispatch(setStoredInLocalStorageQuery(query));
};

// src/components/App/index.tsx
import { Fragment as Fragment2, jsxDEV as jsxDEV11 } from "react/jsx-dev-runtime";
var App2 = () => {
  let dispatch = useAppDispatch(), storedUsers = useSelector10(storedUsersSelector), isLoading = useSelector10(isLoadingSelector);
  return useEffect2(() => {
    dispatch(
      setStoredInLocalStorageActionCreator(
        String(localStorage.getItem("searchParam") != null ? localStorage.getItem("searchParam") : "")
      )
    );
  }, []), /* @__PURE__ */ jsxDEV11(Fragment2, { children: [
    /* @__PURE__ */ jsxDEV11("div", { className: "container", children: [
      /* @__PURE__ */ jsxDEV11(Header_default, {}, void 0, !1, {
        fileName: "src/components/App/index.tsx",
        lineNumber: 27,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ jsxDEV11(List_default, {}, void 0, !1, {
        fileName: "src/components/App/index.tsx",
        lineNumber: 28,
        columnNumber: 5
      }, this),
      storedUsers.length > 0 && /* @__PURE__ */ jsxDEV11(StoredUsersFlyoutElement_default, {}, void 0, !1, {
        fileName: "src/components/App/index.tsx",
        lineNumber: 29,
        columnNumber: 32
      }, this)
    ] }, void 0, !0, {
      fileName: "src/components/App/index.tsx",
      lineNumber: 26,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ jsxDEV11(Background_default, {}, void 0, !1, {
      fileName: "src/components/App/index.tsx",
      lineNumber: 32,
      columnNumber: 4
    }, this),
    isLoading && /* @__PURE__ */ jsxDEV11(Spinner_default, {}, void 0, !1, {
      fileName: "src/components/App/index.tsx",
      lineNumber: 33,
      columnNumber: 18
    }, this)
  ] }, void 0, !0, {
    fileName: "src/components/App/index.tsx",
    lineNumber: 25,
    columnNumber: 3
  }, this);
}, App_default = App2;

// app/routes/details/index.tsx
import { Fragment as Fragment3, jsxDEV as jsxDEV12 } from "react/jsx-dev-runtime";
async function loader({ request }) {
  let url = new URL(request.url), search = new URLSearchParams(url.search), query = search.get("query") || "type:user", page = parseInt(search.get("page") || "1", 10), limit = parseInt(search.get("limit") || "10", 10), username = search.get("user");
  try {
    let apiUrl = `https://api.github.com/users/${username}`, user = (await axios.get(apiUrl)).data;
    return console.log(user), { user, query, page, limit };
  } catch (error) {
    return axios.isAxiosError(error) ? console.error("Error fetching data:", error.message) : console.error("Unknown error:", error), { user: [], query: "", page: 1, limit: 10 };
  }
}
var Deatils = () => {
  let { user } = useLoaderData(), dispath = useAppDispatch();
  return useEffect3(() => {
    dispath(setClickedUser(user));
  }, [user]), /* @__PURE__ */ jsxDEV12(Fragment3, { children: [
    /* @__PURE__ */ jsxDEV12(App_default, {}, void 0, !1, {
      fileName: "app/routes/details/index.tsx",
      lineNumber: 70,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV12(Background_default, {}, void 0, !1, {
      fileName: "app/routes/details/index.tsx",
      lineNumber: 71,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV12(UserData_default, {}, void 0, !1, {
      fileName: "app/routes/details/index.tsx",
      lineNumber: 72,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/details/index.tsx",
    lineNumber: 69,
    columnNumber: 9
  }, this);
}, details_default = Deatils;

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  loader: () => loader2
});
import { useEffect as useEffect4 } from "react";
import axios2 from "axios";
import { useLoaderData as useLoaderData2 } from "@remix-run/react";

// src/store/action-creators/setUsersActionCreator.ts
var setUsersActionCreator = (data) => (dispatch) => {
  dispatch(setUsers(data));
};

// app/routes/_index.tsx
import { Fragment as Fragment4, jsxDEV as jsxDEV13 } from "react/jsx-dev-runtime";
async function loader2({ request }) {
  let url = new URL(request.url), search = new URLSearchParams(url.search), query = search.get("query") || "type:user", page = parseInt(search.get("page") || "1", 10), limit = parseInt(search.get("limit") || "10", 10);
  try {
    let apiUrl = `https://api.github.com/search/users?q=${query}&page=${page}&per_page=${limit}`, users = (await axios2.get(apiUrl)).data.items;
    return console.log(users), { users, query, page, limit };
  } catch (error) {
    return axios2.isAxiosError(error) ? console.error("Error fetching data:", error.message) : console.error("Unknown error:", error), { users: [], query: "", page: 1, limit: 10 };
  }
}
function Index() {
  let { users } = useLoaderData2(), dispatch = useAppDispatch();
  return useEffect4(() => {
    users.length > 0 && dispatch(setUsersActionCreator(users));
  }, [users, dispatch]), /* @__PURE__ */ jsxDEV13(Fragment4, { children: [
    /* @__PURE__ */ jsxDEV13(
      App_default,
      {},
      void 0,
      !1,
      {
        fileName: "app/routes/_index.tsx",
        lineNumber: 80,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV13(Background_default, {}, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 82,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 79,
    columnNumber: 4
  }, this);
}

// app/routes/$.tsx
var __exports = {};
__export(__exports, {
  default: () => __default
});

// src/components/NotFound/index.tsx
import { useNavigate as useNavigate3 } from "@remix-run/react";
import { jsxDEV as jsxDEV14 } from "react/jsx-dev-runtime";
var style = {
  color: "red",
  fontSize: "20px"
}, NotFound = () => {
  let navigate = useNavigate3();
  return /* @__PURE__ */ jsxDEV14("div", { className: "not", "data-testid": "not-found", children: [
    /* @__PURE__ */ jsxDEV14("p", { style, className: "not__title", children: "404" }, void 0, !1, {
      fileName: "src/components/NotFound/index.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV14("p", { className: "not__text", children: "Page was not found" }, void 0, !1, {
      fileName: "src/components/NotFound/index.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV14("button", { onClick: () => {
      navigate("/");
    }, className: "not__button", children: "Back to homepage" }, void 0, !1, {
      fileName: "src/components/NotFound/index.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "src/components/NotFound/index.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
}, NotFound_default = NotFound;

// app/routes/$.tsx
import { Fragment as Fragment5, jsxDEV as jsxDEV15 } from "react/jsx-dev-runtime";
var NotPage = () => /* @__PURE__ */ jsxDEV15(Fragment5, { children: /* @__PURE__ */ jsxDEV15("div", { "data-testid": "not-found", children: /* @__PURE__ */ jsxDEV15(NotFound_default, {}, void 0, !1, {
  fileName: "app/routes/$.tsx",
  lineNumber: 7,
  columnNumber: 3
}, this) }, void 0, !1, {
  fileName: "app/routes/$.tsx",
  lineNumber: 5,
  columnNumber: 5
}, this) }, void 0, !1, {
  fileName: "app/routes/$.tsx",
  lineNumber: 4,
  columnNumber: 14
}, this), __default = NotPage;

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-642CQBNA.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-XFNXQ4IU.js", "/build/_shared/chunk-JKX5JPF7.js", "/build/_shared/chunk-2TPTIFO2.js", "/build/_shared/chunk-WYKJAU76.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-GLWUXGRW.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/$": { id: "routes/$", parentId: "root", path: "*", index: void 0, caseSensitive: void 0, module: "/build/routes/$-V7WMFV3M.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-YY6TOX4Z.js", imports: ["/build/_shared/chunk-6RXLGMZT.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/details": { id: "routes/details", parentId: "root", path: "details", index: void 0, caseSensitive: void 0, module: "/build/routes/details-DQYA3DSG.js", imports: ["/build/_shared/chunk-6RXLGMZT.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/errorpage.test": { id: "routes/errorpage.test", parentId: "root", path: "errorpage/test", index: void 0, caseSensitive: void 0, module: "/build/routes/errorpage.test-BXALXYXV.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "50c2b300", hmr: { runtime: "/build/_shared\\chunk-WYKJAU76.js", timestamp: 1723286806683 }, url: "/build/manifest-50C2B300.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public\\build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1, v3_throwAbortReason: !1, unstable_singleFetch: !1, unstable_lazyRouteDiscovery: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/errorpage.test": {
    id: "routes/errorpage.test",
    parentId: "root",
    path: "errorpage/test",
    index: void 0,
    caseSensitive: void 0,
    module: errorpage_test_exports
  },
  "routes/details": {
    id: "routes/details",
    parentId: "root",
    path: "details",
    index: void 0,
    caseSensitive: void 0,
    module: details_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/$": {
    id: "routes/$",
    parentId: "root",
    path: "*",
    index: void 0,
    caseSensitive: void 0,
    module: __exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map
