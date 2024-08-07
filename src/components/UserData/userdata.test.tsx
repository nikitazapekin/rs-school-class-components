/*
import { fireEvent } from '@testing-library/react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer, RootState } from '../../redux/store';
import UserData from './index';
import React from 'react';
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
  // Existing tests...

  it('should use the custom image loader', () => {
    const { getByAltText } = renderWithRedux(<UserData />);
    const imgElement = getByAltText("testuser's avatar");
    expect(imgElement).toHaveAttribute('src', 'https://example.com/avatar.jpg');
  });

  it('should handle different combinations of parameters correctly', () => {
    const stateWithDifferentParams = {
      ...initialState,
      appSlice: {
        ...initialState.appSlice,
        params: {
          limit: 5,
          offset: 2,
          query: 'anotherSearchTerm',
        },
        clickedUser: {
          login: "anotheruser",
          id: 456,
          avatar_url: "https://example.com/another_avatar.jpg",
          type: "Admin",
        }
      },
    };
  //  const { container } = renderWithRedux(<UserData />, { store: configureStore({ reducer: rootReducer, preloadedState: darkThemeState }) });
      const { getByText, getByAltText } = renderWithRedux(<UserData />, { store: configureStore({ reducer: rootReducer}) });
    expect(getByText('anotheruser')).toBeInTheDocument();
    expect(getByAltText("anotheruser's avatar")).toBeInTheDocument();
    expect(getByText('ID: 456')).toBeInTheDocument();
    expect(getByText('Type: Admin')).toBeInTheDocument();
    const closeLink = getByText('Close');
    expect(closeLink).toHaveAttribute('href', '/?page=2&query=anotherSearchTerm');
  });

  it('should apply light theme class by default', () => {
    const { container } = renderWithRedux(<UserData />);
    expect(container.firstChild).not.toHaveClass('sidebarDark');
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

  it('should render correctly with minimal user data', () => {
    const minimalUserState = {
      ...initialState,
      appSlice: {
        ...initialState.appSlice,
        clickedUser: {
          login: "minimaluser",
          id: 789,
          avatar_url: "",
          type: "Guest",
        },
      },
    };
    const { getByText } = renderWithRedux(<UserData />, { store: configureStore({ reducer: rootReducer }) });
    expect(getByText('minimaluser')).toBeInTheDocument();
    expect(getByText('ID: 789')).toBeInTheDocument();
    expect(getByText('Type: Guest')).toBeInTheDocument();
  });

  it('should handle image loading error gracefully', () => {
    const { getByAltText } = renderWithRedux(<UserData />);
    const imgElement = getByAltText("testuser's avatar");
    fireEvent.error(imgElement);
    expect(imgElement).toHaveAttribute('src', 'fallback_image_url'); // Assuming you have a fallback image
  });
});

  */



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