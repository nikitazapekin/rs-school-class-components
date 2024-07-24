 
import { render, fireEvent, screen } from '@testing-library/react';
 
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { MemoryRouter } from 'react-router-dom';
import Card from './index';
import ThemeContext from '../ThemeContext';
 

// Mock the useNavigate hook
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));

// Mock ThemeContext
const mockThemeContext = {
  isDark: false,
  toggleTheme: jest.fn(),
};

// Mock the store
const mockStore = configureStore({
  reducer: {
    appSlice: (state = { storedElements: [] }) => state, // Mock reducer
    // Add other reducers here if necessary
  },
  preloadedState: {
    appSlice: {
      storedElements: [], // Mock initial state
    },
  },
});

describe('Card Component', () => {
  it('should call handleCardClick and navigate to user details', () => {
    const mockNavigate = jest.fn();
    jest.mock('react-router-dom', () => ({
      useNavigate: () => mockNavigate,
    }));

    const user = {
      login: 'testuser',
      id: 1,
      node_id: 'node1',
      avatar_url: 'http://example.com/avatar.jpg',
      gravatar_id: '',
      url: '',
      html_url: '',
      followers_url: '',
      following_url: '',
      gists_url: '',
      starred_url: '',
      subscriptions_url: '',
      organizations_url: '',
      repos_url: '',
      events_url: '',
      received_events_url: '',
      type: 'User',
      site_admin: false,
      score: 0,
    };

    render(
      <Provider store={mockStore}>
        <MemoryRouter>
          <ThemeContext.Provider value={mockThemeContext}>
            <Card user={user} />
          </ThemeContext.Provider>
        </MemoryRouter>
      </Provider>
    );

    fireEvent.click(screen.getByText('Show details'));

    expect(mockNavigate).toHaveBeenCalledWith(`/main/userdata?username=${user.login}`);
  });
});






// Card.test.tsx
 /*
import { render, fireEvent, screen } from '@testing-library/react';
 
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { MemoryRouter } from 'react-router-dom';
import Card from './index';
import ThemeContext from '../ThemeContext';
 

// Mock the useNavigate hook
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));

// Mock ThemeContext
const mockThemeContext = {
  isDark: false,
  toggleTheme: jest.fn(),
};

// Mock the store
const mockStore = configureStore({
  reducer: {
    appSlice: (state = { storedElements: [] }) => state, // Mock reducer
    // Add other reducers here if necessary
  },
  preloadedState: {
    appSlice: {
      storedElements: [], // Mock initial state
    },
  },
});

describe('Card Component', () => {
  it('should call handleCardClick and navigate to user details', () => {
    const mockNavigate = jest.fn();
    jest.mock('react-router-dom', () => ({
      useNavigate: () => mockNavigate,
    }));

    const user = {
      login: 'testuser',
      id: 1,
      node_id: 'node1',
      avatar_url: 'http://example.com/avatar.jpg',
      gravatar_id: '',
      url: '',
      html_url: '',
      followers_url: '',
      following_url: '',
      gists_url: '',
      starred_url: '',
      subscriptions_url: '',
      organizations_url: '',
      repos_url: '',
      events_url: '',
      received_events_url: '',
      type: 'User',
      site_admin: false,
      score: 0,
    };

    render(
      <Provider store={mockStore}>
        <MemoryRouter>
          <ThemeContext.Provider value={mockThemeContext}>
            <Card user={user} />
          </ThemeContext.Provider>
        </MemoryRouter>
      </Provider>
    );

    fireEvent.click(screen.getByText('Show details'));

    expect(mockNavigate).toHaveBeenCalledWith(`/main/userdata?username=${user.login}`);
  });
});
 */
 
 
 
 
 /*
import { render, fireEvent, screen } from '@testing-library/react';
 
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { MemoryRouter } from 'react-router-dom';
import Card from './index';
import ThemeContext from '../ThemeContext';

// Mock the useNavigate hook
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));

// Mock the store
const mockStore = configureStore({
  reducer: {
    // Add your reducers here
  },
  preloadedState: {
    // Add initial state if necessary
  },
});

// Mock ThemeContext
const mockThemeContext = {
  isDark: false,
  toggleTheme: jest.fn(), // Add this line to mock the toggleTheme function
};

// Test Case
describe('Card Component', () => {
  it('should call handleCardClick and navigate to user details', () => {
    const mockNavigate = jest.fn();
    jest.mock('react-router-dom', () => ({
      useNavigate: () => mockNavigate,
    }));

    const user = {
      login: 'testuser',
      id: 1,
      node_id: 'node1',
      avatar_url: 'http://example.com/avatar.jpg',
      gravatar_id: '',
      url: '',
      html_url: '',
      followers_url: '',
      following_url: '',
      gists_url: '',
      starred_url: '',
      subscriptions_url: '',
      organizations_url: '',
      repos_url: '',
      events_url: '',
      received_events_url: '',
      type: 'User',
      site_admin: false,
      score: 0,
    };

    render(
      <Provider store={mockStore}>
        <MemoryRouter>
          <ThemeContext.Provider value={mockThemeContext}>
            <Card user={user} />
          </ThemeContext.Provider>
        </MemoryRouter>
      </Provider>
    );

    fireEvent.click(screen.getByText('Show details'));

    expect(mockNavigate).toHaveBeenCalledWith(`/main/userdata?username=${user.login}`);
  });
});

*/

/* 
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { MemoryRouter, BrowserRouter as Router } from 'react-router-dom';
 
import Card from './index';
import ThemeContext from '../ThemeContext';
import { AddElementToStorage } from '@/store/action-creators/addElementToStorage.ts';
 
const mockStore = configureStore({
  reducer: {
    
  },
  preloadedState: {
    
    users: [] 
  },
});

// Mock hooks
jest.mock('@/hooks/redux.ts', () => ({
  useAppDispatch: () => jest.fn(),
}));

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

jest.mock('@/store/selectors/getStoredElements', () => ({
  storedUsersSelector: jest.fn(() => []),
}));
 
const mockThemeContextValue = {
  isDark: false,
  toggleTheme: jest.fn(),  
};

// Test data
const mockUser = {
  login: 'testuser',
  id: 1,
  node_id: 'node_id',
  avatar_url: 'avatar_url',
  gravatar_id: 'gravatar_id',
  url: 'url',
  html_url: 'html_url',
  followers_url: 'followers_url',
  following_url: 'following_url',
  gists_url: 'gists_url',
  starred_url: 'starred_url',
  subscriptions_url: 'subscriptions_url',
  organizations_url: 'organizations_url',
  repos_url: 'repos_url',
  events_url: 'events_url',
  received_events_url: 'received_events_url',
  type: 'type',
  site_admin: false,
  score: 1,
};

describe('Card Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders Card component correctly with light theme', () => {
    render(
        <MemoryRouter>

      <Provider store={mockStore}>
        <Router>
          <ThemeContext.Provider value={mockThemeContextValue}>
            <Card user={mockUser} />
          </ThemeContext.Provider>
        </Router>
      </Provider>
        </MemoryRouter>
    );

    expect(screen.getByAltText('user')).toHaveAttribute('src', mockUser.avatar_url);
    expect(screen.getByText(mockUser.login)).toBeInTheDocument();
  });

  test('clicking the checkbox dispatches the AddElementToStorage action', () => {
    const mockDispatch = jest.fn();
  //  jest.spyOn(React, 'useDispatch').mockReturnValue(mockDispatch);

    render(
        <MemoryRouter>

      <Provider store={mockStore}>
        <Router>
          <ThemeContext.Provider value={mockThemeContextValue}>
            <Card user={mockUser} />
          </ThemeContext.Provider>
        </Router>
      </Provider>
        </MemoryRouter>
    );

    fireEvent.click(screen.getByRole('checkbox'));
    expect(mockDispatch).toHaveBeenCalledWith(AddElementToStorage(mockUser));
  });

  test('clicking the "Show details" button navigates to the user details page', () => {
    const mockNavigate = jest.fn();
  //  (useNavigate as jest.Mock).mockReturnValue(mockNavigate);

    render(
        <MemoryRouter>

      <Provider store={mockStore}>
        <Router>
          <ThemeContext.Provider value={mockThemeContextValue}>
            <Card user={mockUser} />
          </ThemeContext.Provider>
        </Router>
      </Provider>
        </MemoryRouter>
    );

    fireEvent.click(screen.getByRole('button', { name: /show details/i }));
    expect(mockNavigate).toHaveBeenCalledWith(`/main/userdata?username=${mockUser.login}`);
  });

  test('applies dark theme class when isDark is true', () => {
    render(
        <MemoryRouter>

      <Provider store={mockStore}>
        <Router>
          <ThemeContext.Provider value={{ isDark: true, toggleTheme: jest.fn() }}>
            <Card user={mockUser} />
          </ThemeContext.Provider>
        </Router>
      </Provider>
        </MemoryRouter>
    );

    expect(screen.getByRole('article')).toHaveClass('user-dark');
  });
});
*/