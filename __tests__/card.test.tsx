import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { useNavigate, useLocation } from '@remix-run/react';
import Card from '../src/components/Card/index';
import { rootReducer } from '../src/store/store';  
import { AddElementToStorage } from '../src/store/action-creators/addElementToStorage';
import { storedUsersSelector } from '../src/store/selectors/getStoredElements';
import { getThemeSelector } from '../src/store/selectors/getTheme';
import { paramsSelector } from '../src/store/selectors/getSearchParams';

// Мокаем хуки useNavigate и useLocation
vi.mock('@remix-run/react', () => ({
  useNavigate: vi.fn(),
  useLocation: vi.fn(),
}));

const mockNavigate = vi.fn();
const mockUseLocation = vi.fn();

describe('Card Component', () => {
 
  const user = {
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

  it('should render correctly and handle checkbox change', () => {
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
      <Provider store={store}>
        <Card user={user} />
      </Provider>
    );

    const cardElement = screen.getByText('Show details');
    const checkboxElement = screen.getByRole('checkbox');
 
    expect(cardElement).toBeInTheDocument();
    expect(checkboxElement).toBeInTheDocument();

 
 expect(checkboxElement).not.toBeChecked();

    
    fireEvent.change(checkboxElement);
   expect(store.getState().selectedElementsSlice.storedElements).not.toContainEqual(user);
  });
 
});
