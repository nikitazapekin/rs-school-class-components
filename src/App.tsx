
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

 
//import { render, screen } from '@testing-library/react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import App from './App';
import { rootReducer } from './store/store';
import { ThemeProvider } from './components/ThemeContext';

import { MemoryRouter } from 'react-router-dom';
import { isLoadingSelector } from './store/selectors/isLoadingSelector';
import { storedUsersSelector } from './store/selectors/getStoredElements';

 
const store = configureStore({ reducer: rootReducer });

// Mock useSelector for specific tests if needed
jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useSelector: jest.fn(),
}));

test('renders App component without crashing', () => {
    render(
        <MemoryRouter>
            <Provider store={store}>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </Provider>
        </MemoryRouter>
    );
    // Check if the Header component is rendered
 //   expect(screen.getByText(/header text/i)).toBeInTheDocument(); // Adjust based on actual text in Header
});

test('shows Spinner when isLoading is true', async () => {
    // Mock isLoadingSelector to return true
    (useSelector as unknown as jest.Mock).mockImplementation((selector) =>
        selector === isLoadingSelector ? true : undefined
    );

    render(
        <MemoryRouter>

        <Provider store={store}>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </Provider>
        </MemoryRouter>
    );

    // Ensure Spinner is rendered
//    expect(screen.getByTestId('loader')).toBeInTheDocument();
});

test('renders Header, List, StoredUsersButton, ErrorComponent, and Background components', () => {
    // Mock the selectors
    (useSelector as unknown as jest.Mock).mockImplementation((selector) => {
        if (selector === storedUsersSelector) return [];
        if (selector === isLoadingSelector) return false;
        return undefined;
    });

    render(
        <MemoryRouter>

        <Provider store={store}>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </Provider>
        </MemoryRouter>
    );

    // Check if Header, List, StoredUsersButton, ErrorComponent, and Background are rendered
   // expect(screen.getByText(/header text/i)).toBeInTheDocument(); // Adjust based on actual text in Header
    //expect(screen.getByText(/list text/i)).toBeInTheDocument();   // Adjust based on actual text in List
    // Adjust the following lines based on how you identify these components
  //  expect(screen.queryByText(/stored users button/i)).toBeNull();
  //  expect(screen.getByText(/error component text/i)).toBeInTheDocument();
  //  expect(screen.getByTestId('background')).toBeInTheDocument(); // Adjust based on how you identify Background
});
*/