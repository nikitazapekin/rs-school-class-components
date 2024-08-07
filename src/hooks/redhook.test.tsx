
import React from 'react';
import { renderHook } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { useAppDispatch, useAppSelector } from './redux'; 
import { RootState,  rootReducer } from '../redux/store';

const testStore = configureStore({
  reducer: rootReducer,
  preloadedState: {
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
  },
});

describe('useAppDispatch', () => {
  test('returns the correct dispatch type', () => {
    const { result } = renderHook(() => useAppDispatch(), {
      wrapper: ({ children }) => <Provider store={testStore}>{children}</Provider>,
    });

    expect(result.current).toBeDefined();
  
  });
});


describe('useAppSelector', () => {
  test('returns the correct selector type', () => {
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
    const { result } = renderHook(() => useAppSelector((state: RootState) => state.appSlice), {
      wrapper: ({ children }) => <Provider store={testStore}>{children}</Provider>,
    });
    expect(result.current).toEqual(initialState.appSlice);
  });
});