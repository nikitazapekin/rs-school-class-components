import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore, EnhancedStore } from '@reduxjs/toolkit';
import Header from './index'; 
import { rootReducer } from '../../store/store';
import { RootState } from '../../store/store';
import useURL from '@/hooks/useURL';


jest.mock('@/hooks/useURL', () => ({
  useURL: jest.fn(() => ({
    handleInput: jest.fn(),
    handleSearch: jest.fn(),
  })),
}));

jest.mock('@fortawesome/react-fontawesome', () => ({
  FontAwesomeIcon: () => <div>FontAwesomeIcon</div>,
}));

jest.mock('../ThemeButton', () => () => <div>ThemeButton</div>);

const initialState: Partial<RootState> = {
  themeSlice: {
    isDark: false
  }
};

const createTestStore = (state: Partial<RootState>): EnhancedStore<RootState> =>
  configureStore({
    reducer: rootReducer,
    preloadedState: state,
  });

test('renders Header component with light theme', () => {
  const store = createTestStore(initialState);
  render(
    <Provider store={store}>
      <Header />
    </Provider>
  );

  expect(screen.getByRole('banner')).not.toHaveClass('header-dark');
  
  // Проверяем наличие элементов
  expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument();
  expect(screen.getByText('FontAwesomeIcon')).toBeInTheDocument();
  expect(screen.getByText('ThemeButton')).toBeInTheDocument();
  expect(screen.getByText('Redirect to not found page')).toBeInTheDocument();
});

test('renders Header component with dark theme', () => {
  const darkThemeState: Partial<RootState> = {
    themeSlice: {
      isDark: true
    }
  };
  const store = createTestStore(darkThemeState);
  render(
    <Provider store={store}>
      <Header />
    </Provider>
  );


  expect(screen.getByRole('banner')).toHaveClass('header-dark');
});

test('calls handleInput and handleSearch on input change and button click', () => {
  const store = createTestStore(initialState);
  render(
    <Provider store={store}>
      <Header />
    </Provider>
  );

  // Получаем моки
  const { handleInput, handleSearch } = useURL();

  fireEvent.change(screen.getByPlaceholderText('Search...'), { target: { value: 'test' } });
  expect(handleInput).toHaveBeenCalled();

  fireEvent.click(screen.getByRole('button', { name: /search/i }));
  expect(handleSearch).toHaveBeenCalled();
});
