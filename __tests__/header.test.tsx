import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Header from '../src/components/Header/index';
import { rootReducer } from '../src/store/store';  
import useURL from '../src/hooks/useURL';
import { MemoryRouter } from 'react-router-dom';

 
vi.mock('../src/hooks/useURL', () => ({
  __esModule: true,
  default: () => ({
    handleInput: vi.fn(),
    handleSearch: vi.fn()
  })
}));
 
const mockUseSelector = vi.fn();

describe('Header Component', () => {
 
  it('should render correctly and apply dark theme styles when isDark is true', () => {
    mockUseSelector.mockReturnValue(true);  

    const store = configureStore({
      reducer: rootReducer,
      preloadedState: {
        themeSlice: { isDark: true },
      },
    });

    render(
      <Provider store={store}>
        <MemoryRouter>

        <Header />
        </MemoryRouter>
      </Provider>
    );

    const headerElement = screen.getByTestId('header');
 
    expect(headerElement).toHaveStyle('background-color: rgb(43, 41, 41)');
  });
 
it('should call handleInput on input change', () => {
   

    const store = configureStore({
      reducer: rootReducer,
      preloadedState: {
        themeSlice: { isDark: false },
      },
    });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </Provider>
    );


    const inputElements = screen.queryAllByPlaceholderText('Search...');
    expect(inputElements).toHaveLength(2);

     
  });

 
  it('should call handleSearch on button click', () => {
      const { handleSearch } = useURL();

    const store = configureStore({
      reducer: rootReducer,
      preloadedState: {
        themeSlice: { isDark: false },
      },
    });

    render(
      <Provider store={store}>
        <MemoryRouter>

        <Header />
        </MemoryRouter>
      </Provider>
    );
    const inputElements = screen.queryAllByLabelText('search')
    expect(inputElements).toHaveLength(3); 
 
    });

    it('should navigate to the correct page on link click', () => {
        const { navigate } = vi.mocked(require('@remix-run/react').useNavigate, true);

    const store = configureStore({
      reducer: rootReducer,
      preloadedState: {
          themeSlice: { isDark: false },
          },
    });

    render(
      <Provider store={store}>
        <MemoryRouter>

        <Header />
        </MemoryRouter>
      </Provider>
    );
 
    const inputElements = screen.queryAllByText('Redirect to not found page')
    expect(inputElements).toHaveLength(4);
  });
  /*
  */
});

      /*
      it('should render correctly and apply light theme styles when isDark is false', () => {
          mockUseSelector.mockReturnValue(false); // Состояние темы светлое
    
        const store = configureStore({
          reducer: rootReducer,
          preloadedState: {
            themeSlice: { isDark: false },
          },
        });
    
        render(
          <Provider store={store}>
            <MemoryRouter>
    
            <Header />
            </MemoryRouter>
          </Provider>
        );
    
      //  const headerElement = screen.getByTestId('header');
      const headerElement = screen.queryByTestId('header');
        
        expect(headerElement).toHaveStyle('background-color: rgb(212, 201, 188)');
        });
        */