 
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import axios from 'axios';
import { useLoaderData } from '@remix-run/react';
import Index from '../../app/routes/_index'; 
import { rootReducer } from '../../src/store/store';
 
import { MemoryRouter } from 'react-router-dom';
 



 
const mockDispatch = vi.fn();
vi.mock('../../src/hooks/redux', () => ({
  useAppDispatch: () => mockDispatch,
}));

 
vi.mock('axios');
 
 
vi.mock('@remix-run/react', async () => {
  const actual = await vi.importActual<typeof import('@remix-run/react')>('@remix-run/react');
  return {
    ...actual,
    useLoaderData: vi.fn(),
    useNavigation: () => ({ state: 'idle' }),
    useNavigate: vi.fn(() => vi.fn()), 
 
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

    const appComponent = screen.getByTestId('app'); 
   
    expect(appComponent).toBeInTheDocument();
  
  }); 
});
