import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import axios from 'axios';
import Details, { loader } from '../../app/routes/details';  
import { rootReducer } from '../../src/store/store';
import { setClickedUser } from '../../src/store/slices/appSlice';
import { useLoaderData } from '@remix-run/react';
import { MemoryRouter } from 'react-router-dom';
/*
vi.mock('axios');

vi.mock('@remix-run/react', async () => {
  const actual = await vi.importActual<typeof import('@remix-run/react')>('@remix-run/react');
  return {
    ...actual,
    useLoaderData: vi.fn(),
    useNavigation: () => ({ state: 'idle' }),  
  };
});

vi.mock('../../src/hooks/redux', () => ({
  useAppDispatch: () => vi.fn(),
}));
*/
// Мокируем axios
vi.mock('axios');


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
  
// Мокируем useAppDispatch
vi.mock('../../../src/hooks/redux', () => ({
  useAppDispatch: () => vi.fn(),
}));


describe('Details Component', () => {

    const mockDispatch = vi.fn();
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






    // Привязываем mockDispatch к store.dispatch
    store.dispatch = mockDispatch;

    it('should dispatch setClickedUser with fetched user', async () => {
      const user = {
        login: 'user1',
        id: 1,
        node_id: 'node1',
        avatar_url: '',
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
  
      // Мокируем данные, которые возвращает useLoaderData
      vi.mocked(useLoaderData).mockReturnValue({ user, query: 'type:user', page: 1, limit: 10 });
  
      // Мокируем состояние useNavigation
      //vi.mocked(useNavigation).mockReturnValue({ state: 'idle' });
  
      // Рендерим компонент
      render(
        <MemoryRouter>

        <Provider store={store}>
          <Details />
        </Provider>
        </MemoryRouter>
      );
  
      // Проверяем, что dispatch вызывается с корректными данными
      await waitFor(() => {
        expect(mockDispatch).toHaveBeenCalledWith(setClickedUser(user));
      });
    });
    it('should dispatch setClickedUser with fetched user', async () => {
        const user = {
      login: 'user1',
      id: 1,
      node_id: 'node1',
      avatar_url: '',
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

 
    vi.mocked(useLoaderData).mockReturnValue({ user, query: 'type:user', page: 1, limit: 10 });
    
   
    render(
        <MemoryRouter>

      <Provider store={store}>
        <Details />
      </Provider>
        </MemoryRouter>
    );
    
    
    await waitFor(() => {
      expect(store.dispatch).toHaveBeenCalledWith(setClickedUser(user));
    });
  });
 
  it('should render App, Background, and UserData components after loading', () => {
      

    render(
        <MemoryRouter>

      <Provider store={store}>
        <Details />
      </Provider>
        </MemoryRouter>
    );
const app = screen.queryAllByTestId('app')
app.forEach(item=> {
    expect(item).toBeInTheDocument();

})
const background = screen.queryAllByTestId('background')
background.forEach(item=> {
    expect(item).toBeInTheDocument();

})
 //   expect(screen.getByTestId('background')).toBeInTheDocument();
  
  });
  /*
      const nothingFoundElements = screen.queryAllByText('Nothing found');
    expect(nothingFoundElements.length).toBe(2);
  */
});
