import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { MemoryRouter, Router } from 'react-router-dom';
import { renderHook, act } from '@testing-library/react-hooks';
import { githubApi } from '@/store/slices/querySlice';
import useURL from './useURL';
import { createMemoryHistory } from 'history';

// Define mock reducer if needed
const mockReducer = (state = {}, // action: any

) => state;

// Configure store with necessary middleware and reducers
const store = configureStore({
  reducer: {
    ...mockReducer,
    [githubApi.reducerPath]: githubApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(githubApi.middleware),
});

// Define wrapper component with correct typing
const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <MemoryRouter>
    <Provider store={store}>{children}</Provider>
  </MemoryRouter>
);

// Define wrapper component for router tests
const RouterWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const history = createMemoryHistory();
  return (
    <Router location={history.location} navigator={history}>
      <Provider store={store}>{children}</Provider>
    </Router>
  );
};

describe('useURL', () => {
  it('should match snapshot', async () => {
    // Use act to handle any asynchronous updates
    let result;
    await act(async () => {
      const { result: hookResult } = renderHook(() => useURL(), { wrapper: Wrapper });
      result = hookResult;
    });
    expect(result).toMatchSnapshot();
  });

  it('should redirect to a new route on handleRedirect', () => {
    const { result } = renderHook(() => useURL(), { wrapper: RouterWrapper });

    act(() => {
      result.current.handleRedirect();
    });

    // Add an assertion to check if the redirect was performed
    // For example, you might need to use a different approach to validate navigation
  });
});

 