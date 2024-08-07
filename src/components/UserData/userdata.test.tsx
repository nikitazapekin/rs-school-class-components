 


import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer, RootState } from '../../redux/store';
import UserData from './index';

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
      login: "testuser",
      id: 123,
      node_id: "",
      avatar_url: "https://example.com/avatar.jpg",
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
      type: "User",
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

describe('UserData component', () => {
  it('should render correctly with user data', () => {
    const { getByText, getByAltText } = renderWithRedux(<UserData />);
    expect(getByText('testuser')).toBeInTheDocument();
    expect(getByAltText("testuser's avatar")).toBeInTheDocument();
    expect(getByText('ID: 123')).toBeInTheDocument();
    expect(getByText('Type: User')).toBeInTheDocument();
  });

  it('should apply dark theme class when isDark is true', () => {
    const darkThemeState = {
      ...initialState,
      themeSlice: {
        isDark: true,
      },
    };
    const { container } = renderWithRedux(<UserData />, { store: configureStore({ reducer: rootReducer, preloadedState: darkThemeState }) });
    expect(container.firstChild).toHaveClass('sidebarDark');
  });

  it('should apply light theme class when isDark is false', () => {
    const { container } = renderWithRedux(<UserData />);
    expect(container.firstChild).not.toHaveClass('sidebarDark');
  });

  it('should render close link with correct href', () => {
    const { getByText } = renderWithRedux(<UserData />);
    const closeLink = getByText('Close');
    expect(closeLink).toHaveAttribute('href', '/?page=1');
  });

  it('should render close link with correct href when query is present', () => {
    const stateWithQuery = {
      ...initialState,
      appSlice: {
        ...initialState.appSlice,
        params: {
          ...initialState.appSlice.params,
          query: 'searchTerm',
        },
      },
    };
    const { getByText } = renderWithRedux(<UserData />, { store: configureStore({ reducer: rootReducer, preloadedState: stateWithQuery }) });
    const closeLink = getByText('Close');
    expect(closeLink).toHaveAttribute('href', '/?page=1&query=searchTerm');
  });
});