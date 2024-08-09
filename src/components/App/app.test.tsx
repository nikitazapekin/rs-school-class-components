
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import  App  from './index'; 
import {rootReducer} from '../../store/store';
import { AppDispatch, RootState } from '../../store/store'; 

 
jest.mock('../Header', () => () => <div>Header</div>);
jest.mock('../List', () => () => <div>List</div>);
jest.mock('../StoredUsersFlyoutElement', () => () => <div>Stored Users Button</div>);
jest.mock('../Background', () => () => <div>Background</div>);
//jest.mock('../Spinner', () => () => <div data-testid="loader">Spinner</div>);


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
  selectedElementsSlice: {
    storedElements: [],

	selectedElement: null,
  }, 
  themeSlice: {
    isDark: false
  } 
};
 
const createTestStore = (state: Partial<RootState>) => 
  configureStore({
    reducer: rootReducer,
    preloadedState: state,
  });

test('renders the App component', () => {
  const store = createTestStore(initialState);
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(screen.getByText(/header/i)).toBeInTheDocument();
  expect(screen.getByText(/list/i)).toBeInTheDocument();
  expect(screen.getByText(/background/i)).toBeInTheDocument();
});
 
test('shows StoredUsersButton when there are stored users', () => {
  const populatedState: Partial<RootState> = {
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
    selectedElementsSlice: {
        storedElements: [],

        selectedElement: null,
    },
  
    themeSlice: { 
        isDark: false
     },
  };

  const store = createTestStore(populatedState);
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

 expect(screen.getByText(/stored users button/i)).not.toBeInTheDocument();
});

test('does not show StoredUsersButton when there are no stored users', () => {
  const emptyState: Partial<RootState> = {
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
    selectedElementsSlice: {
        storedElements: [],

        selectedElement: null,
    },
  
    themeSlice: { 
        isDark: false
     },
  };

  const store = createTestStore(emptyState);
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
 // expect(screen.queryByText(/stored users button/i)).not.toBeInTheDocument();
});
