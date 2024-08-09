import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import List from './index'; // Путь к вашему компоненту
import { rootReducer } from '../../store/store';
import { RootState } from '../../store/store';
import { UserItem } from './types';
 
jest.mock('../Spinner', () => () => <div>Spinner</div>);
jest.mock('../Card', () => ( user : UserItem) => <div>{user.login}</div>);

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

test('renders the List component with users', () => {
  const stateWithUsers: Partial<RootState> = {
    appSlice: {
      ...initialState.appSlice,
      users: [
        { 
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
       
      ]
    },
    themeSlice: initialState.themeSlice
  };

  const store = createTestStore(stateWithUsers);
  render(
    <Provider store={store}>
      <List />
    </Provider>
  );

  // Проверяем, что отображаются карточки пользователей
  expect(screen.getByText('user1')).toBeInTheDocument();
  expect(screen.getByText('user2')).toBeInTheDocument();
  expect(screen.queryByText(/nothing found/i)).not.toBeInTheDocument();
});

test('renders the List component without users and shows "Nothing found" message', () => {
  const store = createTestStore(initialState);
  render(
    <Provider store={store}>
      <List />
    </Provider>
  );

  // Проверяем, что отображается сообщение о том, что ничего не найдено
  expect(screen.getByText(/nothing found/i)).toBeInTheDocument();
  expect(screen.queryByText(/user/i)).not.toBeInTheDocument();
});

test('handles Prev and Next button clicks', () => {
    /*
  const setPageMock = jest.fn();
  jest.mock('../../hooks/useURL', () => () => ({
    setPage: setPageMock,
  }));
*/
  const stateWithUsers: Partial<RootState> = {
    appSlice: {
      ...initialState.appSlice,
      users: [
        {    login: "",
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
      ]
    },
    themeSlice: initialState.themeSlice
  };

  const store = createTestStore(stateWithUsers);
  render(
    <Provider store={store}>
      <List />
    </Provider>
  );

  // Проверяем, что кнопки Prev и Next работают корректно
  fireEvent.click(screen.getByText(/next/i));
  //expect(setPageMock).toHaveBeenCalledWith(2, '');

  fireEvent.click(screen.getByText(/prev/i));
 // expect(setPageMock).toHaveBeenCalledWith(0, '');
});
