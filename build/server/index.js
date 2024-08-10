import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer, Outlet, Meta, Links, ScrollRestoration, Scripts, Link, useNavigate, useLocation, useLoaderData } from "@remix-run/react";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { Provider, useSelector, useDispatch } from "react-redux";
import { createSlice, combineReducers, configureStore } from "@reduxjs/toolkit";
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
    site_admin: false,
    score: 0
  }
};
const appSlicee = createSlice({
  name: "app",
  initialState: initialState$2,
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
    setTypedValue(state, action) {
      state.typedValue = action.payload;
    },
    setNewSearchValue(state) {
      state.params.query = state.typedValue;
      state.params.storedValue = state.typedValue;
    },
    setClickedUser(state, action) {
      state.clickedUser = action.payload;
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
  setTypedValue,
  setClickedUser,
  setNewSearchValue
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
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
const Spinner = () => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("span", { className: "loader", "data-testid": "loader" }) });
};
const isLoadingUserDataSelector = (state) => state.appSlice.isLoadingUserData;
const getThemeSelector = (state) => state.themeSlice.isDark;
const clickedUserSelector = (state) => state.appSlice.clickedUser;
const paramsSelector = (state) => {
  const appSlice2 = state.appSlice || {};
  return appSlice2.params || { query: "", offset: 1, limit: 10, storedValue: "" };
};
const UserData = () => {
  const isDark = useSelector(getThemeSelector);
  const params = useSelector(paramsSelector);
  const clickedUser = useSelector(clickedUserSelector);
  const loading = useSelector(isLoadingUserDataSelector);
  return /* @__PURE__ */ jsxs("aside", { className: `sidebar ${isDark ? `sidebar-dark` : ""}`, children: [
    loading && /* @__PURE__ */ jsx(Spinner, { "data-testid": "spinner" }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h2", { children: clickedUser.login }),
      /* @__PURE__ */ jsx("img", { src: clickedUser.avatar_url, alt: `${clickedUser.login}'s avatar` }),
      /* @__PURE__ */ jsxs("p", { children: [
        "ID: ",
        clickedUser.id
      ] }),
      /* @__PURE__ */ jsxs("p", { children: [
        "Type: ",
        clickedUser.type
      ] })
    ] }),
    /* @__PURE__ */ jsx(Link, { to: `/?page=${params.offset}${params.query ? `&query=${params.query}` : ``}`, children: "Close" })
  ] });
};
const useAppDispatch = () => useDispatch();
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
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();
  const searchParams = useSelector(paramsSelector);
  const setPage = (page, query) => {
    const params = new URLSearchParams(location.search);
    params.set("page", String(page));
    if (query) {
      params.set("query", query);
    } else {
      params.delete("query");
    }
    navigate(`?${params.toString()}`);
    console.log("Navigated to:", `?${params.toString()}`);
  };
  const getPageAndQuery = () => {
    const params = new URLSearchParams(location.search);
    const page = parseInt(params.get("page") || "1", 10);
    const query = params.get("query") || "";
    return { page, query };
  };
  useEffect(() => {
    const params = getPageAndQuery();
    setPage(Number(params.page), String(params.query));
    localStorage.setItem("searchParam", String(params.query));
    dispatch(setSearchParamsActionCreator(Number(params.page), String(params.query)));
  }, []);
  const handleInput = (event) => {
    dispatch(setQueryActionCreator(event.target.value));
  };
  const handleSearch = () => {
    window.scrollTo(0, 0);
    dispatch(setSearchParamsActionCreator(1, searchParams.query));
    const params = new URLSearchParams(location.search);
    params.set("page", String(1));
    params.set("query", String(searchParams.query));
    navigate(`?${params.toString()}`);
  };
  return {
    setPage,
    handleInput,
    handleSearch
  };
};
const Header = () => {
  const isDark = useSelector(getThemeSelector);
  const {
    handleInput,
    handleSearch
  } = useURL();
  return /* @__PURE__ */ jsx("header", { className: `header ${isDark ? `header-dark` : ""}`, children: /* @__PURE__ */ jsxs("div", { className: "header__content", children: [
    /* @__PURE__ */ jsxs("nav", { className: "header__search", children: [
      /* @__PURE__ */ jsx("input", { type: "text", className: "search__bar", placeholder: "Search...", onChange: handleInput }),
      /* @__PURE__ */ jsx(
        "button",
        {
          className: "search__btn",
          onClick: handleSearch,
          "aria-label": "search",
          children: /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faSearch })
        }
      )
    ] }),
    /* @__PURE__ */ jsx(Link, { to: "/dcfewfe", children: "Redirect to not found page" }),
    /* @__PURE__ */ jsx(ThemeButton, {})
  ] }) });
};
const AddElementToStorage = (user) => (dispatch) => {
  dispatch(setAddToStoredElement(user));
};
const storedUsersSelector = (state) => state.selectedElementsSlice.storedElements || [];
const Card = ({ user }) => {
  const dispatch = useAppDispatch();
  const isDark = useSelector(getThemeSelector);
  const users = useSelector(storedUsersSelector);
  const params = useSelector(paramsSelector);
  const navigate = useNavigate();
  const location = useLocation();
  const handleCheckboxChange = () => {
    dispatch(AddElementToStorage(user));
  };
  const handleDetailsClick = () => {
    const queryParams = new URLSearchParams();
    queryParams.append("page", String(params.offset));
    if (params.query) {
      queryParams.append("query", params.query);
    }
    queryParams.append("user", user.login);
    navigate(`/details?${queryParams.toString()}`, { state: { from: location } });
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
      /* @__PURE__ */ jsx("button", { onClick: handleDetailsClick, children: "Show details" })
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
    setPage(params.offset + 1, params.query);
  };
  const handlePrev = () => {
    window.scrollTo(0, 0);
    dispatch(setPrevPageActionCreator());
    setPage(params.offset - 1, params.query);
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
  const backgroundStyle = {
    backgroundColor: isDark ? "rgb(59, 59, 59)" : "aliceblue",
    width: "100%",
    minHeight: "100vh",
    height: "100%",
    position: "fixed",
    left: 0,
    top: 0,
    zIndex: -111,
    transition: "1s"
  };
  return /* @__PURE__ */ jsx("div", { style: backgroundStyle, "data-testid": "background", children: " " });
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
  const username = search.get("user");
  try {
    const apiUrl = `https://api.github.com/users/${username}`;
    const response = await axios.get(apiUrl);
    const user = response.data;
    console.log(user);
    return { user, query, page, limit };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Error fetching data:", error.message);
    } else {
      console.error("Unknown error:", error);
    }
    return { user: [], query: "", page: 1, limit: 10 };
  }
}
const Deatils = () => {
  const { user } = useLoaderData();
  const dispath = useAppDispatch();
  useEffect(() => {
    dispath(setClickedUser(user));
  }, [user]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(App, {}),
    /* @__PURE__ */ jsx(Background, {}),
    /* @__PURE__ */ jsx(UserData, {})
  ] });
};
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Deatils,
  loader: loader$1
}, Symbol.toStringTag, { value: "Module" }));
const setUsersActionCreator = (data) => (dispatch) => {
  dispatch(setUsers(data));
};
async function loader({ request }) {
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
    return { users: [], query: "", page: 1, limit: 10 };
  }
}
function Index() {
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
const route3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index,
  loader
}, Symbol.toStringTag, { value: "Module" }));
const style = {
  color: "red",
  fontSize: "20px"
};
const NotFound = () => {
  const navigate = useNavigate();
  const handleBackToHomepage = () => {
    navigate("/");
  };
  return /* @__PURE__ */ jsxs("div", { className: "not", "data-testid": "not-found", children: [
    /* @__PURE__ */ jsx("p", { style, className: "not__title", children: "404" }),
    /* @__PURE__ */ jsx("p", { className: "not__text", children: "Page was not found" }),
    /* @__PURE__ */ jsx("button", { onClick: handleBackToHomepage, className: "not__button", children: "Back to homepage" })
  ] });
};
const NotPage = () => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("div", { "data-testid": "not-found", children: /* @__PURE__ */ jsx(NotFound, {}) }) });
};
const route4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: NotPage
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-SNjK4JIz.js", "imports": ["/assets/index-tMfIdM9H.js", "/assets/themeSlice-UQ2EKB3S.js", "/assets/store-i1TKY7e1.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/root-gZO7EmrR.js", "imports": ["/assets/index-tMfIdM9H.js", "/assets/themeSlice-UQ2EKB3S.js", "/assets/store-i1TKY7e1.js"], "css": [] }, "routes/errorpage.test": { "id": "routes/errorpage.test", "parentId": "root", "path": "errorpage/test", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/errorpage.test-w40geAFS.js", "imports": [], "css": [] }, "routes/details": { "id": "routes/details", "parentId": "root", "path": "details", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/index-SiFbVaUp.js", "imports": ["/assets/index-tMfIdM9H.js", "/assets/themeSlice-UQ2EKB3S.js", "/assets/index-gYum0-Rv.js"], "css": ["/assets/index-5YC7XUfO.css"] }, "routes/_index": { "id": "routes/_index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/_index-L9i7RHLO.js", "imports": ["/assets/index-tMfIdM9H.js", "/assets/themeSlice-UQ2EKB3S.js", "/assets/index-gYum0-Rv.js"], "css": ["/assets/index-5YC7XUfO.css"] }, "routes/$": { "id": "routes/$", "parentId": "root", "path": "*", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/_-cqj4Mr3w.js", "imports": ["/assets/index-tMfIdM9H.js"], "css": [] } }, "url": "/assets/manifest-7549c754.js", "version": "7549c754" };
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
  "routes/errorpage.test": {
    id: "routes/errorpage.test",
    parentId: "root",
    path: "errorpage/test",
    index: void 0,
    caseSensitive: void 0,
    module: route1
  },
  "routes/details": {
    id: "routes/details",
    parentId: "root",
    path: "details",
    index: void 0,
    caseSensitive: void 0,
    module: route2
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route3
  },
  "routes/$": {
    id: "routes/$",
    parentId: "root",
    path: "*",
    index: void 0,
    caseSensitive: void 0,
    module: route4
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
