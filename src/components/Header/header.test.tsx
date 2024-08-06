import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer, RootState } from '../../redux/store';
import Header from './index';
import handleSearch from '../../hooks/useURL'; // Ensure the correct import path

// Mock the useRouter hook from Next.js
jest.mock('next/router', () => ({
  useRouter: jest.fn().mockReturnValue({
    route: '/',
    pathname: '/',
    query: {},
    asPath: '/',
    push: jest.fn(),
    replace: jest.fn(),
    reload: jest.fn(),
    back: jest.fn(),
    prefetch: jest.fn(),
    beforePopState: jest.fn(),
    isFallback: false,
  }),
}));

// Mocking useURL to return an object with handleSearch
jest.mock('../../hooks/useURL', () => ({
    __esModule: true,
    default: jest.fn().mockReturnValue({
      handleSearch: jest.fn(),  // Ensure handleSearch is mocked
    }),
  }));
  
const initialState: RootState = {
  appSlice: {
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
      score: 0
    }
  },
  selectedElementsSlice: {
    storedElements: [],
    selectedElement: null,
  },
  themeSlice: {
    isDark: false, 
  },
};

const renderWithRedux = (
  component: React.ReactNode,
  { store = configureStore({ reducer: rootReducer, preloadedState: initialState }) } = {}
) => {
  return {
    ...render(
      <Provider store={store}>{component}</Provider>
    ),
    store,
  };
};

describe('Header component', () => {
  it('should render correctly with light theme by default', () => {
    const { container } = renderWithRedux(<Header />);
    expect(container.firstChild).toHaveClass('header');
    expect(container.firstChild).not.toHaveClass('header-dark');
  });

  it('should render correctly with dark theme when enabled', () => {
    const darkThemeState = {
      ...initialState,
      themeSlice: {
        isDark: true,
      },
    };
    const { container } = renderWithRedux(<Header />, { store: configureStore({ reducer: rootReducer, preloadedState: darkThemeState }) });
    expect(container.firstChild).toHaveClass('header-dark');
  }); 

  it('should call handleSearch when search button is clicked', () => {
    const mockHandleSearch = handleSearch as jest.Mock;
    const { getByLabelText } = renderWithRedux(<Header />);
    const searchButton = getByLabelText('search');
    fireEvent.click(searchButton);
    expect(mockHandleSearch).toHaveBeenCalled();
  });

  it('should not have an error page redirect button functionality in this test', () => {
    const { getByText } = renderWithRedux(<Header />);
    expect(getByText('Redirect to error page')).toBeInTheDocument();
  });
});



/*
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer, RootState } from '../../redux/store';
import Header from './index';
//import { setTypedValueActionCreator } from '../../redux/action-creators/setTypedValueActionCreator';
//import { getThemeSelector } from '../../redux/selectors/getTheme';
//import { handleSearch } from '../../hooks/useURL'; // предполагается, что этот хук импортируем и используем здесь
import  handleSearch from "../../hooks/useURL"
//import { useRouter } from 'next/router';


jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));
const initialState: RootState = {
  appSlice: {
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
      score: 0
    }
  },
  selectedElementsSlice: {
    storedElements: [],
    selectedElement: null,
  },
  themeSlice: {
    isDark: false, 
  },
};

const renderWithRedux = (
  component: React.ReactNode,
  { store = configureStore({ reducer: rootReducer, preloadedState: initialState }) } = {}
) => {
  return {
    ...render(
  
    <Provider store={store}>{component}</Provider>

),
    store,
  };
};

describe('Header component', () => {
  it('should render correctly with light theme by default', () => {
    const { container } = renderWithRedux(<Header />);
    expect(container.firstChild).toHaveClass('header');
    expect(container.firstChild).not.toHaveClass('header-dark');
  });

  it('should render correctly with dark theme when enabled', () => {
    const darkThemeState = {
      ...initialState,
      themeSlice: {
        isDark: true,
      },
    };
    const { container } = renderWithRedux(<Header />, { store: configureStore({ reducer: rootReducer, preloadedState: darkThemeState }) });
    expect(container.firstChild).toHaveClass('header-dark');
  });

  //it('should dispatch setTypedValueActionCreator action on input change', () => {
  //  const { getByPlaceholderText, store } = renderWithRedux(<Header />);
  //  const input = getByPlaceholderText('Search...');
  //  fireEvent.change(input, { target: { value: 'test search' } });
  //  const actions = store.getActions();
  //  expect(actions).toContainEqual(setTypedValueActionCreator('test search'));
 // });

  it('should call handleSearch when search button is clicked', () => {
    // Mock handleSearch function
    jest.mock('../../hooks/useURL', () => ({
      __esModule: true,
      default: () => ({
        handleSearch: jest.fn(),
      }),
    }));

    const { getByLabelText } = renderWithRedux(<Header />);
    const searchButton = getByLabelText('search');
    fireEvent.click(searchButton);
    expect(handleSearch).toHaveBeenCalled();
  });

  it('should not have an error page redirect button functionality in this test', () => {
    // This test checks if the button is rendered, but does not test actual redirection.
    const { getByText } = renderWithRedux(<Header />);
    expect(getByText('Redirect to error page')).toBeInTheDocument();
  });
});
*/