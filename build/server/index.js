import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable, redirect } from "@remix-run/node";
import { RemixServer, Outlet, Meta, Links, ScrollRestoration, Scripts, useLoaderData } from "@remix-run/react";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { Provider, useDispatch, useSelector } from "react-redux";
import { createSlice, combineReducers, configureStore } from "@reduxjs/toolkit";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
const ABORT_DELAY = 5e3;
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
    let shellRendered = false;
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onAllReady() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onShellReady() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest
}, Symbol.toStringTag, { value: "Module" }));
const initialState$2 = {
  isLoading: false,
  error: null,
  isLoadingUserData: false,
  users: [],
  params: {
    limit: 10,
    offset: 1,
    query: "",
    storedValue: ""
  }
};
const appSlicee = createSlice({
  name: "app",
  initialState: initialState$2,
  reducers: {
    setLoading(state, action) {
      console.log("LOOO", action.payload);
      state.isLoading = action.payload;
    },
    setLoadingUserData(state, action) {
      state.isLoadingUserData = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setSearchParamsURL(state, action) {
      state.params.query = action.payload.query;
      state.params.offset = action.payload.offset;
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
      state.params.storedValue = action.payload;
      state.params.query = action.payload;
    },
    setTets(state) {
      console.log("TESST");
    }
  }
});
const {
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
  setTets
} = appSlicee.actions;
const appSlice = appSlicee.reducer;
const initialState$1 = {
  storedElements: [],
  selectedElement: null
};
const selectedElementsSlice = createSlice({
  name: "selectedElements",
  initialState: initialState$1,
  reducers: {
    setAddToStoredElement(state, action) {
      if (!state.storedElements.some((item) => item.id == action.payload.id)) {
        state.storedElements = [...state.storedElements, action.payload];
      } else {
        state.storedElements = state.storedElements.filter((item) => item.id != action.payload.id);
      }
    },
    setRemoveStoredElementById(state, action) {
      state.storedElements = state.storedElements.filter((item) => item.id != action.payload);
    },
    setClearStoredElements(state) {
      state.storedElements = [];
    },
    setSelectedElement(state, action) {
      if (action.payload != null && action.payload != void 0) {
        state.selectedElement = action.payload;
      }
      console.log(state.selectedElement);
    }
  }
});
const { setAddToStoredElement, setClearStoredElements, setSelectedElement, setRemoveStoredElementById } = selectedElementsSlice.actions;
const selectedElementsSlice$1 = selectedElementsSlice.reducer;
const initialState = {
  isDark: false
};
const themeSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setTheme(state) {
      state.isDark = !state.isDark;
    }
  }
});
const {
  setTheme
} = themeSlice.actions;
const themeSlice$1 = themeSlice.reducer;
const rootReducer = combineReducers({
  appSlice,
  selectedElementsSlice: selectedElementsSlice$1,
  themeSlice: themeSlice$1
});
const store = configureStore({
  reducer: rootReducer
});
function Layout({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ jsx(Meta, {}),
      /* @__PURE__ */ jsx(Links, {})
    ] }),
    /* @__PURE__ */ jsxs("body", { children: [
      /* @__PURE__ */ jsx(Provider, { store, children }),
      /* @__PURE__ */ jsx(ScrollRestoration, {}),
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function App$1() {
  return /* @__PURE__ */ jsx(Outlet, {});
}
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Layout,
  default: App$1
}, Symbol.toStringTag, { value: "Module" }));
const NotFound = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/main");
  };
  return /* @__PURE__ */ jsxs("div", { className: "not", children: [
    /* @__PURE__ */ jsx("p", { className: "not__title", children: "404" }),
    /* @__PURE__ */ jsx("p", { className: "not__text", children: "Page was not found" }),
    /* @__PURE__ */ jsx("button", { className: "not__btn", onClick: handleClick, children: "Back to homepage" })
  ] });
};
const NotFoundPage = () => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(NotFound, {}) });
};
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: NotFoundPage
}, Symbol.toStringTag, { value: "Module" }));
const useAppDispatch = () => useDispatch();
const setUsersActionCreator = (data) => (dispatch) => {
  dispatch(setUsers(data));
};
const getThemeSelector = (state) => state.themeSlice.isDark;
const ThemeButton = () => {
  const isDark = useSelector(getThemeSelector);
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(setTheme());
  };
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("button", { className: "theme__button", onClick: handleClick, children: [
    "Switch Theme ",
    isDark ? "Dark" : "Light"
  ] }) });
};
const paramsSelector = (state) => {
  const appSlice2 = state.appSlice || {};
  return appSlice2.params || { query: "", offset: 1, limit: 10, storedValue: "" };
};
const setSearchParamsActionCreator = (offset, query) => (dispatch) => {
  dispatch(setSearchParamsURL({ offset, query }));
};
const setNextPageActionCreator = () => (dispatch) => {
  dispatch(setNextPage());
};
const setPrevPageActionCreator = () => (dispatch) => {
  dispatch(setPrevPage());
};
const setQueryActionCreator = (query) => (dispatch) => {
  dispatch(setQueryPage(query));
};
const useURL = () => {
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const getCurrentParams = () => {
    const page = parseInt(searchParams.get("page") || "1", 10);
    const query = searchParams.get("query") || "";
    return [page, query];
  };
  const setPage = (page, query) => {
    const params2 = { page: String(page) };
    if (query.length > 0) {
      params2.query = query;
    }
    setSearchParams(params2);
  };
  useEffect(() => {
    const [page, query] = getCurrentParams();
    setPage(Number(page), String(query));
    localStorage.setItem("searchParam", String(query));
    dispatch(setSearchParamsActionCreator(Number(page), String(query)));
  }, []);
  const navigate = useNavigate();
  useSelector(paramsSelector);
  const handleRedirect = () => {
    navigate("/not-existing-page");
  };
  const handleInput = (event) => {
    dispatch(setQueryActionCreator(event.target.value));
  };
  return {
    getCurrentParams,
    setPage,
    handleInput,
    // handleSearch,
    handleRedirect
  };
};
const Header = () => {
  const isDark = useSelector(getThemeSelector);
  const {
    handleInput,
    handleRedirect
    //handleSearch 
  } = useURL();
  return /* @__PURE__ */ jsx("header", { className: `header ${isDark ? `header-dark` : ""}`, children: /* @__PURE__ */ jsxs("div", { className: "header__content", children: [
    /* @__PURE__ */ jsxs("nav", { className: "header__search", children: [
      /* @__PURE__ */ jsx("input", { type: "text", className: "search__bar", placeholder: "Search...", onChange: handleInput }),
      /* @__PURE__ */ jsx(
        "button",
        {
          className: "search__btn",
          "aria-label": "search",
          children: /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faSearch })
        }
      )
    ] }),
    /* @__PURE__ */ jsx("button", { className: "redirect__btn", onClick: handleRedirect, children: "Redirect to error page" }),
    /* @__PURE__ */ jsx(ThemeButton, {})
  ] }) });
};
const Spinner = () => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("span", { className: "loader", "data-testid": "loader" }) });
};
const AddElementToStorage = (user) => (dispatch) => {
  dispatch(setAddToStoredElement(user));
};
const storedUsersSelector = (state) => state.selectedElementsSlice.storedElements || [];
const Card = ({ user }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isDark = useSelector(getThemeSelector);
  const users = useSelector(storedUsersSelector);
  const handleCardClick = () => {
    const currentParams = new URLSearchParams(location.search);
    const currentUrl = `${window.location.pathname}?${currentParams.toString()}`;
    if (!currentUrl.includes("userdata")) {
      localStorage.setItem("lastUrl", currentUrl);
    }
    navigate(`/main/userdata?username=${user.login}`);
  };
  const handleCheckboxChange = () => {
    dispatch(AddElementToStorage(user));
  };
  return /* @__PURE__ */ jsx("div", { className: "user__link", children: /* @__PURE__ */ jsxs("div", { className: `user ${isDark ? `user-dark` : ``}`, children: [
    /* @__PURE__ */ jsx("img", { className: "user__logo", src: user.avatar_url, alt: "user" }),
    /* @__PURE__ */ jsxs("div", { className: "user__content", children: [
      /* @__PURE__ */ jsx("p", { className: "user__login", children: user.login }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "checkbox",
          className: "user__checkbox",
          onChange: handleCheckboxChange,
          checked: users && users.some((storedUser) => user.id === storedUser.id),
          readOnly: true
        }
      ),
      /* @__PURE__ */ jsx("button", { className: "user__details", onClick: handleCardClick, children: "Show details" })
    ] })
  ] }) });
};
const getUsersSelector = (state) => state.appSlice.users;
const isLoadingSelector = (state) => state.appSlice.isLoading;
const List = () => {
  const { setPage } = useURL();
  const dispatch = useAppDispatch();
  const users = useSelector(getUsersSelector);
  const params = useSelector(paramsSelector);
  const isLoading = useSelector(isLoadingSelector);
  const handleNext = () => {
    window.scrollTo(0, 0);
    dispatch(setNextPageActionCreator());
    setPage(params.offset, params.query);
  };
  const handlePrev = () => {
    window.scrollTo(0, 0);
    dispatch(setPrevPageActionCreator());
    setPage(params.offset, params.query);
  };
  return /* @__PURE__ */ jsx("section", { className: "list", children: /* @__PURE__ */ jsxs("div", { className: "list__container", children: [
    isLoading && /* @__PURE__ */ jsx(Spinner, {}),
    users.map((item) => /* @__PURE__ */ jsx(Card, { user: item }, item.id)),
    users.length == 0 && /* @__PURE__ */ jsx("p", { className: "list__nothing", children: "Nothing found" }),
    /* @__PURE__ */ jsxs("div", { className: "list__btns", children: [
      /* @__PURE__ */ jsx("button", { className: "list__prev list__btn", onClick: handlePrev, children: "Prev" }),
      /* @__PURE__ */ jsx("button", { className: "list__next list__btn", onClick: handleNext, "data-testid": "next", children: "Next" })
    ] })
  ] }) });
};
const clearStoredElementsActionCreator = () => (dispatch) => {
  dispatch(setClearStoredElements());
};
const StoredUsersButton = () => {
  const dispatch = useAppDispatch();
  const users = useSelector(storedUsersSelector);
  const handleClear = () => {
    dispatch(clearStoredElementsActionCreator());
  };
  const [url, setUrl] = useState();
  const handleDownload = () => {
    if (users.length === 0)
      return;
    const titleKeys = Object.keys(users[0]);
    const refinedData = [titleKeys];
    users.forEach((item) => {
      refinedData.push(Object.values(item).map((value) => String(value)));
    });
    let csvContent = "";
    refinedData.forEach((row) => {
      csvContent += row.join(";") + "\n";
    });
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8" });
    const url2 = URL.createObjectURL(blob);
    setUrl(url2);
  };
  return /* @__PURE__ */ jsxs("div", { className: "stored__users__panel", children: [
    /* @__PURE__ */ jsxs("p", { className: "stored__users__text", children: [
      "You chose ",
      users.length,
      " users"
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "stored__users__btns", children: [
      /* @__PURE__ */ jsx(
        "a",
        {
          className: "stored__users__btn stored__users__download",
          href: url,
          download: `${users.length}__users.csv`,
          onClick: handleDownload,
          children: "download"
        }
      ),
      /* @__PURE__ */ jsx("button", { className: "stored__users__btn stored__users__clear", onClick: handleClear, children: "Unselect all" })
    ] })
  ] });
};
const Background = () => {
  const isDark = useSelector(getThemeSelector);
  return /* @__PURE__ */ jsx("div", { className: `background ${isDark ? `background-dark` : ""}`, "data-testid": "background", children: " " });
};
const setStoredInLocalStorageActionCreator = (query) => (dispatch) => {
  dispatch(setStoredInLocalStorageQuery(query));
};
const App = () => {
  const dispatch = useAppDispatch();
  const storedUsers = useSelector(storedUsersSelector);
  const isLoading = useSelector(isLoadingSelector);
  useEffect(() => {
    dispatch(
      setStoredInLocalStorageActionCreator(
        String(localStorage.getItem("searchParam") != null ? localStorage.getItem("searchParam") : "")
      )
    );
  }, []);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsx(Header, {}),
      /* @__PURE__ */ jsx(List, {}),
      storedUsers.length > 0 && /* @__PURE__ */ jsx(StoredUsersButton, {})
    ] }),
    /* @__PURE__ */ jsx(Background, {}),
    isLoading && /* @__PURE__ */ jsx(Spinner, {})
  ] });
};
async function loader$1({ request }) {
  const url = new URL(request.url);
  const search = new URLSearchParams(url.search);
  const query = search.get("query") || "type:user";
  const page = parseInt(search.get("page") || "1", 10);
  const limit = parseInt(search.get("limit") || "10", 10);
  try {
    const apiUrl = `https://api.github.com/search/users?q=${query}&page=${page}&per_page=${limit}`;
    const response = await axios.get(apiUrl);
    const users = response.data.items;
    console.log(users);
    return { users, query, page, limit };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Error fetching data:", error.message);
    } else {
      console.error("Unknown error:", error);
    }
    return redirect("/");
  }
}
function Index$1() {
  const { users } = useLoaderData();
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (users.length > 0) {
      dispatch(setUsersActionCreator(users));
    }
  }, [users, dispatch]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      App,
      {}
    ),
    /* @__PURE__ */ jsx(Background, {})
  ] });
}
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index$1,
  loader: loader$1
}, Symbol.toStringTag, { value: "Module" }));
async function loader({ request }) {
  try {
    const url = new URL(request.url);
    const search = new URLSearchParams(url.search);
    const postId = search.get("postId");
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    console.log(res.data);
    return { postId, title: res.data.title, body: res.data.body };
  } catch (err) {
    console.error(err);
    return redirect("/");
  }
}
function Index() {
  return /* @__PURE__ */ jsx("div", {});
}
const route3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index,
  loader
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-V0iSCcrE.js", "imports": ["/assets/jsx-runtime-21OhILyQ.js", "/assets/index-S4zzjQE9.js", "/assets/themeSlice-wEpJH5nF.js", "/assets/store-UYfyqG4r.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/root-E46ZvPzs.js", "imports": ["/assets/jsx-runtime-21OhILyQ.js", "/assets/index-S4zzjQE9.js", "/assets/themeSlice-wEpJH5nF.js", "/assets/store-UYfyqG4r.js"], "css": [] }, "routes/notFoundPage": { "id": "routes/notFoundPage", "parentId": "root", "path": "notFoundPage", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/notFoundPage-kKXhfcLN.js", "imports": ["/assets/jsx-runtime-21OhILyQ.js", "/assets/index-S4zzjQE9.js"], "css": ["/assets/notFoundPage-7BC0dMpP.css"] }, "routes/_index": { "id": "routes/_index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/_index-t5hVbcRI.js", "imports": ["/assets/jsx-runtime-21OhILyQ.js", "/assets/index-S4zzjQE9.js", "/assets/themeSlice-wEpJH5nF.js"], "css": ["/assets/_index-usKAKDpS.css"] }, "routes/test": { "id": "routes/test", "parentId": "root", "path": "test", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/index-AeUPAZWn.js", "imports": ["/assets/jsx-runtime-21OhILyQ.js"], "css": [] } }, "url": "/assets/manifest-fb2c3492.js", "version": "fb2c3492" };
const mode = "production";
const assetsBuildDirectory = "build\\client";
const basename = "/";
const future = { "v3_fetcherPersist": true, "v3_relativeSplatPath": true, "v3_throwAbortReason": true, "unstable_singleFetch": false, "unstable_lazyRouteDiscovery": false };
const isSpaMode = false;
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/notFoundPage": {
    id: "routes/notFoundPage",
    parentId: "root",
    path: "notFoundPage",
    index: void 0,
    caseSensitive: void 0,
    module: route1
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route2
  },
  "routes/test": {
    id: "routes/test",
    parentId: "root",
    path: "test",
    index: void 0,
    caseSensitive: void 0,
    module: route3
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  mode,
  publicPath,
  routes
};
