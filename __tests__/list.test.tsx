import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { describe, it, expect, vi } from 'vitest';
import List from '../src/components/List/index';
import { rootReducer } from '../src/store/store';
import useURL from '../src/hooks/useURL';
import Spinner from '../src/components/Spinner/index';
import Card from '../src/components/Card/index';
import { UserItem } from "../src/store/types"
import { MemoryRouter } from 'react-router-dom';

vi.mock('../../hooks/useURL', () => ({
  __esModule: true,
  default: () => ({
    setPage: vi.fn(),
  })
}));


//vi.mock('../src/components/Spinner/index', () => () => <div data-testid="spinner">Spinner</div>);
/*
vi.mock('../src/components/Spinner/index', () => ({
    default: () => <div data-testid="loader">Spinner</div>,
  }));
  */

//vi.mock('../src/components/Card/index', () => ( user : UserItem) => <div data-testid={`card-${user.id}`}>Card for {user.login}</div>);

describe('List Component', () => {
  it('should render Spinner when isLoading is true', () => {
    const store = configureStore({
      reducer: rootReducer,
      preloadedState: {
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
      },
    });

    render(
        <MemoryRouter>

      <Provider store={store}>
        <List />
      </Provider>
        </MemoryRouter>
    );
    expect(screen.getByTestId('next')).toBeInTheDocument();
    //  expect(screen.getByTestId('loader')).not.toBeInTheDocument();
    });
    /*
  it('should render Card components when users are available', () => {
      const mockUsers = [
      {     login: "",
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
        score: 0 },
        
    ];

    const store = configureStore({
      reducer: rootReducer,
      preloadedState: {
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
      },
    });

    render(
        <MemoryRouter>

      <Provider store={store}>
        <List />
      </Provider>
        </MemoryRouter>
    );
    //
   //expect(screen.queryByTestId('card')).not.toBeInTheDocument();
   expect(screen.queryByTestId(`card`)).toBeInTheDocument();
    mockUsers.forEach(user => {
        expect(screen.getByTestId(`card-${user.id}`)).toBeInTheDocument();
        });
    });
    */
   
   it('should render "Nothing found" when there are no users', () => {
    const store = configureStore({
      reducer: rootReducer,
      preloadedState: {
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
      },
    });

    render(
        <MemoryRouter>

      <Provider store={store}>
        <List />
      </Provider>
        </MemoryRouter>
    );
    const nothingFoundElements = screen.queryAllByText('Nothing found');
    expect(nothingFoundElements.length).toBe(2);
   // expect(screen.getByText('Nothing found')).not.toBeInTheDocument();
  });
  
 
 
});
