import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { paramsSelector } from "@/store/selectors/getSearchParams";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "./redux"
import { useSelector } from "react-redux";
import { setQueryActionCreator } from "@/store/action-creators/setSearchParamsActionCreator";
import { setSearchParamsActionCreator } from "@/store/action-creators/setSearchParamsActionCreator";
import { setLoadingActionCreator } from "@/store/action-creators/setIsLoading";
import { useLazySearchUsersQuery } from "@/store/slices/querySlice";
import { setUsersActionCreator } from "@/store/action-creators/setUsersActionCreator";
const useURL = () => {
  const dispatch = useAppDispatch()
  const [searchParams, setSearchParams] = useSearchParams();
  const getCurrentParams = () => {
    const page = parseInt(searchParams.get('page') || '1', 10);
    const query = searchParams.get('query') || '';
    return [page, query];
  };

  const setPage = (page: number, query: string) => {
    const params: Record<string, string> = { page: String(page) };
    if (query.length > 0) {
      params.query = query;
    }
    setSearchParams(params);
  };
  useEffect(() => {
    const [page, query] = getCurrentParams();


    setPage(Number(page), String(query));
    localStorage.setItem('searchParam', String(query));
    dispatch(setSearchParamsActionCreator(Number(page), String(query)))

  }, []);
  const navigate = useNavigate();
  const params = useSelector(paramsSelector)
  const handleRedirect = () => {
    navigate('/not-existing-page');
  };
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setQueryActionCreator(event.target.value))
  };
  const [trigger, { data, isLoading }] = useLazySearchUsersQuery();
  const handleSearch = () => {
    window.scrollTo(0, 0);
    trigger({ query: params.query, page: params.offset, per_page: params.limit });
    localStorage.setItem('searchParam', params.query)
    setPage(params.offset, params.query)
    dispatch(setSearchParamsActionCreator(1, params.query))
  };
  useEffect(() => {
    if (isLoading) {
      dispatch(setLoadingActionCreator(true))
    } else {
      dispatch(setLoadingActionCreator(false))
    }
    if (data) {
      dispatch(setUsersActionCreator(data.items))
    }
  }, [data, isLoading]);
  useEffect(() => {
    trigger({ query: params.storedValue ? params.storedValue : params.query, page: params.offset, per_page: params.limit });
    setPage(params.offset, params.storedValue)
  }, [params.storedValue])
  useEffect(() => {
    trigger({ query: params.query, page: params.offset, per_page: params.limit });
    setPage(params.offset, params.query)
  }, [params.offset])
  return { getCurrentParams, setPage, handleInput, handleSearch, handleRedirect }
}
export default useURL









/*
import React from 'react';
import { renderHook, 
   // act
 } from '@testing-library/react-hooks';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import useURL from './useURL';
import { MemoryRouter, 
    //useSearchParams 

} from 'react-router-dom';

const mockStore = configureStore([]);
const store = mockStore({ books: ['RTL Book'] });

interface WrapperProps {
  children: React.ReactNode;
}

const wrapper: React.FC<WrapperProps> = ({ children }) => (
    <MemoryRouter>
      <Provider store={store}>{children}</Provider>
    </MemoryRouter>
);



describe('useURL', () => {
    it('should return default values when no search parameters are present', () => {
      const { result } = renderHook(() => useURL(), { wrapper });
  
   //   const [page, query] = result.current.getCurrentParams();
   const [page] = result.current.getCurrentParams();
      expect(page).toBe(1);
     // expect(query).toBe('');
    });
 
  });
/*
// Mock implementation for useSearchParams
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useSearchParams: jest.fn(),
}));

test('setPage should update search parameters correctly', () => {
  const setSearchParams = jest.fn();
  
  // Mock the return value of useSearchParams
  (useSearchParams as jest.Mock).mockReturnValue([new URLSearchParams(), setSearchParams]);

  // Render the hook
  const { result } = renderHook(() => useURL(), { wrapper });

  act(() => {
    result.current.setPage(1, 'test');
  });

  expect(setSearchParams).toHaveBeenCalledWith(new URLSearchParams({
    page: '1',
    query: 'test',
  }));

  // Test with empty query
  act(() => {
    result.current.setPage(2, '');
  });

  expect(setSearchParams).toHaveBeenCalledWith(new URLSearchParams({
    page: '2',
  })); 

});
*/


/*import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import useURL from './useURL';
import { MemoryRouter, useSearchParams } from 'react-router-dom';

const mockStore = configureStore([]);
const store = mockStore({ books: ['RTL Book'] });

// Define the type for wrapper props
interface WrapperProps {
  children: React.ReactNode;
}

// Update the wrapper with explicit typing for children
const wrapper: React.FC<WrapperProps> = ({ children }) => (
    <MemoryRouter>

  <Provider store={store}>{children}</Provider>
    </MemoryRouter>
);

// Mock implementation for useSearchParams
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useSearchParams: jest.fn(),
}));

test('setPage should update search parameters correctly', () => {
  const setSearchParams = jest.fn();
  
  // Mock the return value of useSearchParams
  (useSearchParams as jest.Mock).mockReturnValue([new URLSearchParams(), setSearchParams]);

  // Render the hook
  const { result } = renderHook(() => useURL(), { wrapper });

  act(() => {
    result.current.setPage(1, 'test');
  });

  // Verify that setSearchParams was called with the correct parameters
  expect(setSearchParams).toHaveBeenCalledWith(new URLSearchParams({
    page: '1',
    query: 'test',
  }));

  // Test with empty query
  act(() => {
    result.current.setPage(2, '');
  });

  expect(setSearchParams).toHaveBeenCalledWith(new URLSearchParams({
    page: '2',
  }));
});
*/
/*import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { renderHook, act } from '@testing-library/react-hooks';
import useURL from './useURL';
import { MemoryRouter, useSearchParams } from 'react-router-dom';

// Define the store and mock store
const mockStore = configureStore([]);
const store = mockStore({ books: ['RTL Book'] });

// Define the type for the wrapper's props
type WrapperProps = {
  children: React.ReactNode;
};

// Use the defined type for the wrapper
const wrapper: React.FC<WrapperProps> = ({ children }) => (
    <MemoryRouter>

  <Provider store={store}>{children}</Provider>
    </MemoryRouter>
);

// Mock implementation for useSearchParams
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useSearchParams: jest.fn(),
}));

test('setPage should update search parameters correctly', () => {
  const setSearchParams = jest.fn();
  
  // Mock the return value of useSearchParams
  (useSearchParams as jest.Mock).mockReturnValue([new URLSearchParams(), setSearchParams]);

  // Render the hook
  const { result } = renderHook(() => useURL(), { wrapper });

  act(() => {
    result.current.setPage(1, 'test');
  });

  // Verify that setSearchParams was called with the correct parameters
  expect(setSearchParams).toHaveBeenCalledWith(new URLSearchParams({
    page: '1',
    query: 'test',
  }));

  // Test with empty query
  act(() => {
    result.current.setPage(2, '');
  });

  expect(setSearchParams).toHaveBeenCalledWith(new URLSearchParams({
    page: '2',
  }));
});
*/

/*import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import useURL from './useURL';

// Create a mock store
const mockStore = configureStore([]);
const store = mockStore({ books: ['RTL Book'] });

// Define a wrapper component with explicit typing for children
const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);

test('useURL should work as expected', () => {
  const { result } = renderHook(() => useURL(), { wrapper: Wrapper });

  // Add your assertions here
});
*/
/* 
import useURL from "./useURL";
import { renderHook } from "@testing-library/react";

describe("useCounter", () => {
    test("should render the initial count", () => {
      const {result} = renderHook(useURL);
      expect(result.current.handleInput)
   //   expect(result.current.count).toBe(0);
   });
   })
    */
/*
describe("useCounter", () => {
test("should render the initial count", () => {
 render(useURL) // Flags error
});
})
*/
/*import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import  useURL  from './useURL';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { QueryClient, QueryClientProvider } from 'react-query';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const renderHookWithProviders = (hook) => {
    const store = mockStore({
        // your initial Redux state
        params: { query: '', offset: 1, limit: 10, storedValue: '' },
    });

    const history = createMemoryHistory();
    const queryClient = new QueryClient();

    return renderHook(() => hook(), {
        wrapper: ({ children }) => (
            <Provider store={store}>
                <QueryClientProvider client={queryClient}>
                    <Router history={history}>{children}</Router>
                </QueryClientProvider>
            </Provider>
        ),
    });
};

describe('useURL Hook', () => {
    it('should get current params from URL', () => {
        const { result } = renderHookWithProviders(useURL);

        act(() => {
            const [page, query] = result.current.getCurrentParams();
            expect(page).toBe(1);
            expect(query).toBe('');
        });
    });

    it('should set page and query params in URL', () => {
        const { result } = renderHookWithProviders(useURL);

        act(() => {
            result.current.setPage(2, 'testQuery');
        });

        expect(window.location.search).toBe('?page=2&query=testQuery');
    });

    it('should handle input change', () => {
        const { result } = renderHookWithProviders(useURL);

        act(() => {
            result.current.handleInput({ target: { value: 'newQuery' } });
        });

        const actions = result.current.store.getActions();
        expect(actions).toEqual([setQueryActionCreator('newQuery')]);
    });

    it('should handle search', async () => {
        const { result, waitForNextUpdate } = renderHookWithProviders(useURL);

        act(() => {
            result.current.handleSearch();
        });

        await waitForNextUpdate();

        const actions = result.current.store.getActions();
        expect(actions).toContainEqual(setSearchParamsActionCreator(1, 'newQuery'));
        expect(window.scrollTo).toHaveBeenCalledWith(0, 0);
    });

    it('should handle redirect', () => {
        const { result } = renderHookWithProviders(useURL);

        act(() => {
            result.current.handleRedirect();
        });

        expect(window.location.pathname).toBe('/not-existing-page');
    });
});
*/