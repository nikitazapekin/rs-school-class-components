import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from '@/store/store';
import { RootState } from '@/store/store';
import UserData from './index';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

const initialState: RootState = {
  themeSlice: { isDark: false },
  selectedElementsSlice: {
    storedElements: [],
    selectedElement: null,
  },
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
  }
};

const createTestStore = (state: Partial<RootState>) =>
  configureStore({
    reducer: rootReducer,
    preloadedState: state,
  });

describe('UserData Component', () => {
  test('renders loading spinner when data is loading', () => {
    const stateWithLoading: Partial<RootState> = {
      ...initialState,
      appSlice: {
        ...initialState.appSlice,
        isLoadingUserData: true,
      },
    };

    const store = createTestStore(stateWithLoading);
    
    render(
      <Provider store={store}>
        <Router>
          <UserData />
        </Router>
      </Provider>
    );

    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });

  test('renders user data correctly when not loading', () => {
    const stateWithUserData: Partial<RootState> = {
      ...initialState,
      appSlice: {
        ...initialState.appSlice,
        isLoadingUserData: false,
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
        },
      },
    };

    const store = createTestStore(stateWithUserData);
   

    render(
      <Provider store={store}>
        <Router>
          <UserData />
        </Router>
      </Provider>
    );

    expect(screen.getByText('testuser')).toBeInTheDocument();
    expect(screen.getByAltText("testuser's avatar")).toHaveAttribute('src', 'http://example.com/avatar.jpg');
    expect(screen.getByText('ID: 123')).toBeInTheDocument();
    expect(screen.getByText('Type: User')).toBeInTheDocument();
  });

  test('navigates to the correct URL when Close link is clicked', () => {
    const stateWithUserData: Partial<RootState> = {
      ...initialState,
      appSlice: {
        ...initialState.appSlice,
        isLoadingUserData: false,
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
        },
        params: {
          limit: 10,
          offset: 5,
          query: 'search',
          storedValue: '',
        },
      },
    };

    const store = createTestStore(stateWithUserData);
   

    render(
      <Provider store={store}>
        <Router>
          <UserData />
        </Router>
      </Provider>
    );

    const closeLink = screen.getByText('Close') as HTMLAnchorElement;
    expect(closeLink).toHaveAttribute('href', '/?page=5&query=search');
  });

  test('applies dark theme class correctly', () => {
    const stateWithDarkTheme: Partial<RootState> = {
      ...initialState,
      themeSlice: {
        isDark: true,
      },
      appSlice: {
        ...initialState.appSlice,
        isLoadingUserData: false,
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
        },
      },
    };

    const store = createTestStore(stateWithDarkTheme);
   
    render(
      <Provider store={store}>
        <Router>
          <UserData />
        </Router>
      </Provider>
    );

    const sidebar = screen.getByRole('banner');
    expect(sidebar).toHaveClass('sidebar-dark');
  });
});
