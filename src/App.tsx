
import Header from './components/Header';
import List from './components/List';
import { ErrorBoundary } from './components/ErrorBoundary';

import { useEffect} from 'react';
import { useSelector } from 'react-redux';
import { storedUsersSelector } from './store/selectors/getStoredElements';
import StoredUsersButton from './components/StoredUsersFlyoutElement';
import { ThemeProvider } from './components/ThemeContext';
import Background from './components/Background';
import ErrorComponent from './components/ErrorComponent';
 
 
import { useAppDispatch } from './hooks/redux';
import { setStoredInLocalStorageActionCreator } from './store/action-creators/setStoredInLocalStorageQuery';
import { isLoadingSelector } from './store/selectors/isLoadingSelector';
import Spinner from './components/Spinner';
 
const App = () => {
  const dispatch = useAppDispatch()
  const storedUsers = useSelector(storedUsersSelector);
  const isLoading = useSelector(isLoadingSelector)

 
  useEffect(() => {
    dispatch(setStoredInLocalStorageActionCreator(String(localStorage.getItem("searchParam") != null ? localStorage.getItem("searchParam") : "")))
  }, [])
  return (
    <>
      <ErrorBoundary>
        <ThemeProvider>
          <div className="container">
            <Header />
            <List
            />
            {storedUsers.length > 0 && (
              <StoredUsersButton />
            )}
            <ErrorBoundary>
              <ErrorComponent />
            </ErrorBoundary>
          </div>
          <Background />
           {isLoading && <Spinner />}
        </ThemeProvider>
      </ErrorBoundary>
    </>
  );
};

export default App;

 /*
 import { MemoryRouter } from "react-router-dom";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { rootReducer } from "./store/store";
import { RootState } from "./store/store";

// Define the initial state according to the expected structure
const initialState: Partial<RootState> = {
  appSlice: {
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
  },
  selectedElementsSlice: {
    storedElements: [],
    selectedElement: null
  },
   
};

const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState
});

describe("TodoItem", () => {
  it('matches snapshot', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

*/