import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { renderHook, act } from '@testing-library/react-hooks';
import { githubApi } from '@/store/slices/querySlice';
import useURL from './useURL';

const mockReducer = (state = {}) => state;

const store = configureStore({
  reducer: {
    ...mockReducer,
    [githubApi.reducerPath]: githubApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(githubApi.middleware),
});

interface WrapperProps {
  children: React.ReactNode;
}

const wrapper: React.FC<WrapperProps> = ({ children }) => (
  <MemoryRouter>
    <Provider store={store}>{children}</Provider>
  </MemoryRouter>
);

describe('useURL', () => {
  it('should match snapshot', async () => {
    // Use act to handle any asynchronous updates
    let result;
    await act(async () => {
      const hookResult = renderHook(() => useURL(), { wrapper });
      result = hookResult.result;
      // You can await any async operations or state updates here
    });
    expect(result).toMatchSnapshot();
    
  });
});







/*
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { renderHook } from '@testing-library/react-hooks';
import { githubApi } from '@/store/slices/querySlice';
import useURL from './useURL';

// Define a mock reducer if you don't have actual reducers
const mockReducer = (state = {}, //action: any

) => state;

const store = configureStore({
  reducer: {
    ...mockReducer,
    [githubApi.reducerPath]: githubApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(githubApi.middleware),
});

interface WrapperProps {
  children: React.ReactNode;
}

const wrapper: React.FC<WrapperProps> = ({ children }) => (
  <MemoryRouter>
    <Provider store={store}>{children}</Provider>
  </MemoryRouter>
);

describe('useURL', () => {
  it('should match snapshot', () => {
    const { result } = renderHook(() => useURL(), { wrapper });
    expect(result).toMatchSnapshot();
  });
});
*/

/*
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { renderHook } from '@testing-library/react-hooks';
import useURL from "./useURL";

// Define a mock reducer if you don't have actual reducers
const mockReducer = (state = {}, //action: any

) => state;

const store = configureStore({
  reducer: mockReducer, // Provide a reducer
});

interface WrapperProps {
  children: React.ReactNode;
}

const wrapper: React.FC<WrapperProps> = ({ children }) => (
  <MemoryRouter>
    <Provider store={store}>{children}</Provider>
  </MemoryRouter>
);

describe("useURL", () => {
  it('should match snapshot', () => {
    const { result } = renderHook(() => useURL(), { wrapper });
    expect(result).toMatchSnapshot();
  });
});

*/





/*import useURL from "./useURL"
 //import { render } from "@testing-library/react"
 import { Provider } from "react-redux";
 import { MemoryRouter } from "react-router-dom";
 import { configureStore } from "@reduxjs/toolkit";
 import { renderHook, 
    // act
  } from '@testing-library/react-hooks';


  
interface WrapperProps {
    children: React.ReactNode;
  }
  const mockStore = configureStore([]);
const store = mockStore([]);

  const wrapper: React.FC<WrapperProps> = ({ children }) => (
      <MemoryRouter>
        <Provider store={store}>{children}</Provider>
      </MemoryRouter>
  );
  
describe("TodoItem", ()=> {
    it('dc', ()=> {
        const { result } = renderHook(() => useURL(), {  wrapper });
  
        expect(result).toMatchSnapshot

    })
 
    })

*/
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