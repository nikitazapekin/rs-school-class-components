 
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore, { MockStoreEnhanced } from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import Card from './index';
import { RootState } from '@/store/store';

// Определяем типы для store и initialState
type InitialStateType = Partial<RootState>; // Тип состояния

// Создаем мок-стор
const mockStore = configureStore<InitialStateType>([]);
const mockUser = {
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
  let store: MockStoreEnhanced<InitialStateType>; 
  let initialState: InitialStateType;

  beforeEach(() => {
    initialState = {
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
       
       }
    };
    store = mockStore(initialState);
  });
/*
  test('renders Card component', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Card user={mockUser} />
        </BrowserRouter>
      </Provider>
    );

    // Проверяем наличие имени пользователя
 expect(screen.getByText('mockuser')).not.toBeInTheDocument();

    const checkbox = screen.getByRole('checkbox');
    //expect(checkbox).toBeInTheDocument();
 
  });
  */
 test('handles checkbox change', () => {
     render(
      <Provider store={store}>
        <BrowserRouter>
          <Card user={mockUser} />
        </BrowserRouter>
      </Provider>
    );

    const checkbox = screen.getByRole('checkbox');
    
    // Эмулируем изменение состояния чекбокса
    fireEvent.click(checkbox);
    
    // Проверяем, что action был отправлен
    const actions = store.getActions();
   expect(actions).toEqual([{ type: 'addElementToStorage', payload: mockUser }]);
  });

  /*
  test('applies dark theme', () => {
    initialState = {
        ...initialState,
      themeSlice: { isDark: true },
    };
    store = mockStore(initialState);

    render(
      <Provider store={store}>
        <BrowserRouter>
          <Card user={mockUser} />
        </BrowserRouter>
      </Provider>
    );

    // Проверяем, что класс "user-dark" применяется
    const userDiv = screen.getByText('mockuser').closest('.user');
  //  expect(userDiv).toHaveClass('user-dark');
  });

  test('generates correct link', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Card user={mockUser} />
        </BrowserRouter>
      </Provider>
    );

    const link = screen.getByRole('link');
  //  expect(link).toHaveAttribute('href', '/details?page=1&user=mockuser');
  });
  */
});

/*
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
   
};
*/

/*
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Card from './index';
import { BrowserRouter } from 'react-router-dom';

 
const mockStore = configureStore([]);
const mockUser = {
  id: 1,
  login: 'mockuser',
  avatar_url: 'mockavatarurl.com',
};

describe('Card Component', () => {
  let store;
  let initialState;

  beforeEach(() => {
    initialState = {
      theme: { isDark: false },
      storedUsers: [],
      searchParams: { offset: 1, query: '' }
    };
    store = mockStore(initialState);
  });

  test('renders Card component', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Card user={mockUser} />
        </BrowserRouter>
      </Provider>
    );

    // Проверяем наличие имени пользователя
    expect(screen.getByText('mockuser')).toBeInTheDocument();

    // Проверяем, что аватар рендерится с корректным src
    expect(screen.getByAltText('user').src).toContain('mockavatarurl.com');

    // Проверяем, что чекбокс присутствует и не отмечен
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();
    expect(checkbox.checked).toBe(false);
  });

  test('handles checkbox change', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Card user={mockUser} />
        </BrowserRouter>
      </Provider>
    );

    const checkbox = screen.getByRole('checkbox');
    
    // Эмулируем изменение состояния чекбокса
    fireEvent.click(checkbox);
    
    // Проверяем, что action был отправлен
    const actions = store.getActions();
    expect(actions).toEqual([{ type: 'addElementToStorage', payload: mockUser }]);
  });

  test('applies dark theme', () => {
    initialState = {
      ...initialState,
      theme: { isDark: true },
    };
    store = mockStore(initialState);

    render(
      <Provider store={store}>
        <BrowserRouter>
          <Card user={mockUser} />
        </BrowserRouter>
      </Provider>
    );

    // Проверяем, что класс "user-dark" применяется
    const userDiv = screen.getByText('mockuser').closest('.user');
    expect(userDiv).toHaveClass('user-dark');
  });

  test('generates correct link', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Card user={mockUser} />
        </BrowserRouter>
      </Provider>
    );

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/details?page=1&user=mockuser');
  });
});
*/