import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import axios from 'axios';
import { useLoaderData } from '@remix-run/react';
import Index from '../../app/routes/_index'; // путь к вашему компоненту
import { rootReducer } from '../../src/store/store';
import { setUsersActionCreator } from '../../src/store/action-creators/setUsersActionCreator';
import { MemoryRouter } from 'react-router-dom';
//import useURL from "../../src/hooks/redux"
// Мокаем хук useAppDispatch







/*
const mockDispatch = vi.fn();
vi.mock('../../src/hooks/redux', () => ({
  useAppDispatch: () => mockDispatch,
}));

// Мокаем axios для тестирования загрузки данных
vi.mock('axios');
//const mockedAxios = vi.mocked(axios, { shallow: true });
const mockedAxios = vi.mocked(axios);
// Мокаем хук useLoaderData для тестирования загрузки данных
vi.mock('@remix-run/react', () => ({
  ...vi.importActual('@remix-run/react'),
  useLoaderData: vi.fn(),
  useNavigation: () => ({ state: 'idle' }), // мокаем навигацию для теста состояния загрузки
}));
*/


// Мокаем хук useAppDispatch
const mockDispatch = vi.fn();
vi.mock('../../src/hooks/redux', () => ({
  useAppDispatch: () => mockDispatch,
}));

// Мокаем axios для тестирования загрузки данных
vi.mock('axios');
const mockedAxios = vi.mocked(axios); // Исправлено

// Мокаем useLoaderData и useNavigate
vi.mock('@remix-run/react', async () => {
  const actual = await vi.importActual<typeof import('@remix-run/react')>('@remix-run/react');
  return {
    ...actual,
    useLoaderData: vi.fn(),
    useNavigation: () => ({ state: 'idle' }),
    useNavigate: vi.fn(() => vi.fn()), 
 //   useNavigate: vi.fn(), // Мокаем useNavigate
  };
});

describe('Index Component', () => {
  const initialState = {
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
  
  };

  const store = configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
  });

 
  
  it('should render App and Background components after loading', () => {
    const users = [
      { login: 'user1', id: 1, node_id: 'node1', avatar_url: '', gravatar_id: '', url: '', html_url: '', followers_url: '', following_url: '', gists_url: '', starred_url: '', subscriptions_url: '', organizations_url: '', repos_url: '', events_url: '', received_events_url: '', type: '', site_admin: false, score: 0 },
    ];

    vi.mocked(useLoaderData).mockReturnValue({ users, query: 'type:user', page: 1, limit: 10 });


    render(
        <MemoryRouter>

      <Provider store={store}>
        <Index />
      </Provider>
        </MemoryRouter>
    );

    const appComponent = screen.getByTestId('app'); // Assuming your App component has a data-testid="app"
   // const backgroundComponent = screen.getByTestId('background'); // Assuming your Background component has a data-testid="background"

    expect(appComponent).toBeInTheDocument();
 //   expect(backgroundComponent).toBeInTheDocument();
  });
  /*
  */
/*
  it('should handle errors during data fetching', async () => {
    mockedAxios.get.mockRejectedValueOnce(new Error('Network Error'));

    vi.mocked(useLoaderData).mockReturnValue({ users: [], query: 'type:user', page: 1, limit: 10 });

    render(
      <Provider store={store}>
        <Index />
      </Provider>
    );

    await waitFor(() => {
      expect(mockDispatch).not.toHaveBeenCalledWith(setUsersActionCreator([]));
    });

    const appComponent = screen.getByTestId('app');
    const backgroundComponent = screen.getByTestId('background');

    expect(appComponent).toBeInTheDocument();
    expect(backgroundComponent).toBeInTheDocument();
  }); */
});
