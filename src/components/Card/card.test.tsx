import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Card from './index';
import { rootReducer } from '../../store/store';
import { RootState } from '../../store/store';
import { UserItem } from '../../store/types';
import { AddElementToStorage } from '../../store/action-creators/addElementToStorage';

jest.mock('../Spinner', () => () => <div>Spinner</div>);
jest.mock('../Card', () => (user: UserItem) => <div>{user.login}</div>);

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
  },
};

const createTestStore = (state: Partial<RootState>) => 
  configureStore({
    reducer: rootReducer,
    preloadedState: state,
  });

describe('Card Component', () => {
  let store: ReturnType<typeof createTestStore>;

  beforeEach(() => {
    store = createTestStore(initialState);
    store.dispatch = jest.fn();
  });

  test('renders user details correctly', () => {
    const user: UserItem = {
      login: "testuser",
      id: 1,
      node_id: "node1",
      avatar_url: "http://example.com/avatar.jpg",
      gravatar_id: "gravatar1",
      url: "http://example.com",
      html_url: "http://example.com/html",
      followers_url: "http://example.com/followers",
      following_url: "http://example.com/following",
      gists_url: "http://example.com/gists",
      starred_url: "http://example.com/starred",
      subscriptions_url: "http://example.com/subscriptions",
      organizations_url: "http://example.com/organizations",
      repos_url: "http://example.com/repos",
      events_url: "http://example.com/events",
      received_events_url: "http://example.com/received_events",
      type: "User",
      site_admin: false,
      score: 10
    };

    render(
      <Provider store={store}>
        <Card user={user} />
      </Provider>
    );
 
    expect(screen.getByText(user.login)).toBeInTheDocument();

    
    const avatar = screen.getByAltText('user');
    expect(avatar).toBeInTheDocument();
    expect(avatar).toHaveAttribute('src', user.avatar_url);
 
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();
  });

  test('dispatches AddElementToStorage when checkbox is changed', () => {
    const user: UserItem = {
      login: "testuser",
      id: 1,
      node_id: "node1",
      avatar_url: "http://example.com/avatar.jpg",
      gravatar_id: "gravatar1",
      url: "http://example.com",
      html_url: "http://example.com/html",
      followers_url: "http://example.com/followers",
      following_url: "http://example.com/following",
      gists_url: "http://example.com/gists",
      starred_url: "http://example.com/starred",
      subscriptions_url: "http://example.com/subscriptions",
      organizations_url: "http://example.com/organizations",
      repos_url: "http://example.com/repos",
      events_url: "http://example.com/events",
      received_events_url: "http://example.com/received_events",
      type: "User",
      site_admin: false,
      score: 10
    };

    render(
      <Provider store={store}>
        <Card user={user} />
      </Provider>
    );

    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);

    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith(AddElementToStorage(user));
  });

  test('renders with dark theme', () => {
    store = createTestStore({
      ...initialState,
      themeSlice: { isDark: true },
    });

    const user: UserItem = {
      login: "testuser",
      id: 1,
      node_id: "node1",
      avatar_url: "http://example.com/avatar.jpg",
      gravatar_id: "gravatar1",
      url: "http://example.com",
      html_url: "http://example.com/html",
      followers_url: "http://example.com/followers",
      following_url: "http://example.com/following",
      gists_url: "http://example.com/gists",
      starred_url: "http://example.com/starred",
      subscriptions_url: "http://example.com/subscriptions",
      organizations_url: "http://example.com/organizations",
      repos_url: "http://example.com/repos",
      events_url: "http://example.com/events",
      received_events_url: "http://example.com/received_events",
      type: "User",
      site_admin: false,
      score: 10
    };

    render(
      <Provider store={store}>
        <Card user={user} />
      </Provider>
    );

    const userDiv = screen.getByText(user.login).closest('div.user');
    expect(userDiv).toHaveClass('user-dark');
  });
});



/*
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import Card from './index';
import { UserItem } from '../../store/types';
import { AddElementToStorage } from '../../store/action-creators/addElementToStorage';

// Mock store setup
const mockStore = configureStore([]);
const initialState = {
  themeSlice: { isDark: false },
  selectedElementsSlice:{
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
	node_id:"" ,
	avatar_url: "",
	gravatar_id:"" ,
	url:"" ,
	html_url:"" ,
	followers_url: "",
	following_url:"" ,
	gists_url: "",
	starred_url: "",
	subscriptions_url:  "",
	organizations_url: "",
	repos_url:"" ,
	events_url:"" ,
	received_events_url:"" ,
	type: "",
	site_admin: false,
	score: 0
	}
  },
};

const user: UserItem = {
	login: "",
	id: 0,
	node_id:"" ,
	avatar_url: "",
	gravatar_id:"" ,
	url:"" ,
	html_url:"" ,
	followers_url: "",
	following_url:"" ,
	gists_url: "",
	starred_url: "",
	subscriptions_url:  "",
	organizations_url: "",
	repos_url:"" ,
	events_url:"" ,
	received_events_url:"" ,
	type: "",
	site_admin: false,
	score: 0
};

describe('Card Component', () => {
  let store: any;

  beforeEach(() => {
    store = mockStore(initialState);
    store.dispatch = jest.fn();
  });

  test('renders user details correctly', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Card user={user} />
        </MemoryRouter>
      </Provider>
    );

    // Check if user login is rendered
    expect(screen.getByText(user.login)).toBeInTheDocument();

    // Check if user avatar is rendered
    const avatar = screen.getByAltText('user');
    expect(avatar).toBeInTheDocument();
    expect(avatar).toHaveAttribute('src', user.avatar_url);

    // Check if checkbox is rendered
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();
  });

  test('dispatches AddElementToStorage when checkbox is changed', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Card user={user} />
        </MemoryRouter>
      </Provider>
    );

    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);

    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith(AddElementToStorage(user));
  });

  test('navigates to details page on Show details click', () => {
    const navigate = jest.fn();

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Card user={user} />
        </MemoryRouter>
      </Provider>
    );

    const detailsButton = screen.getByText('Show details');
    fireEvent.click(detailsButton);

    expect(navigate).toHaveBeenCalledTimes(1);
    // Here, make sure you replace 'testuser' with the correct user.login or another test value
    expect(navigate).toHaveBeenCalledWith('/details?page=0&user=testuser', { state: { from: { pathname: '/users' } } });
  });

  test('renders with dark theme', () => {
    store = mockStore({
      ...initialState,
      themeSlice: { isDark: true },
    });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Card user={user} />
        </MemoryRouter>
      </Provider>
    );

    const userDiv = screen.getByText(user.login).closest('div.user');
    expect(userDiv).toHaveClass('user-dark');
  });
});
*/
/*
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import Card from './index';
import { UserItem } from '../../store/types';
import { AddElementToStorage } from '../../store/action-creators/addElementToStorage';

// Mock store setup
const mockStore = configureStore([]);
const initialState = {
  theme: { isDark: false },
  storedUsers: [],
  searchParams: { offset: 0, query: '' },
};

const user: UserItem = {
	login: "",
	id: 0,
	node_id:"" ,
	avatar_url: "",
	gravatar_id:"" ,
	url:"" ,
	html_url:"" ,
	followers_url: "",
	following_url:"" ,
	gists_url: "",
	starred_url: "",
	subscriptions_url:  "",
	organizations_url: "",
	repos_url:"" ,
	events_url:"" ,
	received_events_url:"" ,
	type: "",
	site_admin: false,
	score: 0
};

describe('Card Component', () => {
  let store: any;

  beforeEach(() => {
    store = mockStore(initialState);
    store.dispatch = jest.fn();
  });

  test('renders user details correctly', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Card user={user} />
        </MemoryRouter>
      </Provider>
    );

    // Check if user login is rendered
    expect(screen.getByText(user.login)).toBeInTheDocument();

    // Check if user avatar is rendered
    const avatar = screen.getByAltText('user');
    expect(avatar).toBeInTheDocument();
    expect(avatar).toHaveAttribute('src', user.avatar_url);

    // Check if checkbox is rendered
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();
  });

  test('dispatches AddElementToStorage when checkbox is changed', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Card user={user} />
        </MemoryRouter>
      </Provider>
    );

    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);

    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith(AddElementToStorage(user));
  });

  test('navigates to details page on Show details click', () => {
    const navigate = jest.fn();

    

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Card user={user} />
        </MemoryRouter>
      </Provider>
    );

    const detailsButton = screen.getByText('Show details');
    fireEvent.click(detailsButton);

    expect(navigate).toHaveBeenCalledTimes(1);
    expect(navigate).toHaveBeenCalledWith('/details?page=0&user=testuser', { state: { from: { pathname: '/users' } } });
  });

  test('renders with dark theme', () => {
    store = mockStore({
      ...initialState,
      theme: { isDark: true },
    });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Card user={user} />
        </MemoryRouter>
      </Provider>
    );

    const userDiv = screen.getByText(user.login).closest('div.user');
    expect(userDiv).toHaveClass('user-dark');
  });
});
*/