import { configureStore } from "@reduxjs/toolkit";
import appSliceReducer, {
  setLoading,
  setError,
  setLoadingUserData,
} from "./slices/appSlice";
import selectedElementsSliceReducer, {
  setAddToStoredElement,
  setClearStoredElements,
  setSelectedElement,
  setRemoveStoredElementById,
} from "./slices/selectedElementsSlice";
import themeSliceReducer from "./slices/themeSlice";
import { UserItem } from "./types";

// Создание тестового хранилища
const store = configureStore({
  reducer: {
    app: appSliceReducer,
    selectedElements: selectedElementsSliceReducer,
    theme: themeSliceReducer,
  },
});

describe("Redux Store", () => {
    /*
    */
  it("should handle initial state", () => {
    const state = store.getState();
    expect(state.app).toEqual({
      isLoading: false,
      error: null,
      isLoadingUserData: false,
      users: [],
      typedValue: "",
      params: {
        limit: 10,
        offset: 1,
        query: '',
        storedValue: '',
      },
      status: 'idle',
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
        score: 0,
      },
    });
    expect(state.selectedElements).toEqual({
        storedElements: [],
      selectedElement: null,
      });
     
    expect(state.theme).toEqual({
        isDark: false
    }); 
});

  it("should handle setLoading in app slice", () => {
    store.dispatch(setLoading(true));
    const state = store.getState();
    expect(state.app.isLoading).toEqual(true);
  });

  it("should handle setError in app slice", () => {
    const errorMessage = "Error occurred";
    store.dispatch(setError(errorMessage));
    const state = store.getState();
    expect(state.app.error).toEqual(errorMessage);
  });

  it("should handle setLoadingUserData in app slice", () => {
    store.dispatch(setLoadingUserData(true));
    const state = store.getState();
    expect(state.app.isLoadingUserData).toEqual(true);
  });

  it("should handle setAddToStoredElement in selectedElements slice (add)", () => {
    const user: UserItem = { login: "",
        id: 0,
        node_id:"" ,
        avatar_url: "",
        gravatar_id:"" ,
        url:"" ,
        html_url:"" ,
        followers_url: "",
        following_url:"" ,
        gists_url: "",
        starred_url: "",
        subscriptions_url:  "",
        organizations_url: "",
        repos_url:"" ,
        events_url:"" ,
        received_events_url:"" ,
        type: "",
        site_admin: false,
        score: 0 };
        store.dispatch(setAddToStoredElement(user));
        const state = store.getState();
    expect(state.selectedElements.storedElements).toContainEqual(user);
});
 
  it("should handle setAddToStoredElement in selectedElements slice (remove)", () => {
    const user: UserItem = { login: "",
        id: 0,
        node_id:"" ,
        avatar_url: "",
        gravatar_id:"" ,
        url:"" ,
        html_url:"" ,
        followers_url: "",
        following_url:"" ,
        gists_url: "",
        starred_url: "",
        subscriptions_url:  "",
        organizations_url: "",
        repos_url:"" ,
        events_url:"" ,
        received_events_url:"" ,
        type: "",
        site_admin: false,
        score: 0  };
    store.dispatch(setAddToStoredElement(user));  
    store.dispatch(setAddToStoredElement(user));  
    const state = store.getState();
    expect(state.selectedElements.storedElements).toContainEqual(user);
  });

  it("should handle setRemoveStoredElementById in selectedElements slice", () => {
    const user: UserItem = { login: "",
        id: 0,
        node_id:"" ,
        avatar_url: "",
        gravatar_id:"" ,
        url:"" ,
        html_url:"" ,
        followers_url: "",
        following_url:"" ,
        gists_url: "",
        starred_url: "",
        subscriptions_url:  "",
        organizations_url: "",
        repos_url:"" ,
        events_url:"" ,
        received_events_url:"" ,
        type: "",
        site_admin: false,
        score: 0  };
    store.dispatch(setAddToStoredElement(user));
    store.dispatch(setRemoveStoredElementById(user.id));
    const state = store.getState();
    expect(state.selectedElements.storedElements).not.toContainEqual(user);
  });

  it("should handle setClearStoredElements in selectedElements slice", () => {
    const user: UserItem = { login: "",
        id: 0,
        node_id:"" ,
        avatar_url: "",
        gravatar_id:"" ,
        url:"" ,
        html_url:"" ,
        followers_url: "",
        following_url:"" ,
        gists_url: "",
        starred_url: "",
        subscriptions_url:  "",
        organizations_url: "",
        repos_url:"" ,
        events_url:"" ,
        received_events_url:"" ,
        type: "",
        site_admin: false,
        score: 0  };
    store.dispatch(setAddToStoredElement(user));
    store.dispatch(setClearStoredElements());
    const state = store.getState();
    expect(state.selectedElements.storedElements).toEqual([]);
  });

  it("should handle setSelectedElement in selectedElements slice", () => {
    const user: UserItem = {login: "",
        id: 0,
        node_id:"" ,
        avatar_url: "",
        gravatar_id:"" ,
        url:"" ,
        html_url:"" ,
        followers_url: "",
        following_url:"" ,
        gists_url: "",
        starred_url: "",
        subscriptions_url:  "",
        organizations_url: "",
        repos_url:"" ,
        events_url:"" ,
        received_events_url:"" ,
        type: "",
        site_admin: false,
        score: 0  };
    store.dispatch(setSelectedElement(user));
    const state = store.getState();
    expect(state.selectedElements.selectedElement).toEqual(user);
  });
 
  it("should handle setSelectedElement with null in selectedElements slice", () => {
    store.dispatch(setSelectedElement(null));
    const state = store.getState();
    expect(state.selectedElements.selectedElement).not.toBeNull();
  });

  it("should handle setSelectedElement with undefined in selectedElements slice", () => {
    store.dispatch(setSelectedElement(undefined));
    const state = store.getState();
    expect(state.selectedElements.selectedElement).not.toBeNull();
    });
});
