import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import ThemeButton from '../src/components/ThemeButton';
import { rootReducer } from '../src/store/store';
import { setTheme } from '../src/store/slices/themeSlice';
import { getThemeSelector } from '../src/store/selectors/getTheme';
 
const mockDispatch = vi.fn();
vi.mock('../src/hooks/redux', () => ({
  useAppDispatch: () => mockDispatch,
}));

describe('ThemeButton Component', () => {
 
  const initialState = {
    themeSlice: { isDark: false },
  };
 
  const store = configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
  });

  it('should render correctly with light theme', () => {
    render(
      <Provider store={store}>
        <ThemeButton />
      </Provider>
    );
 
    const buttonElement = screen.getByText(/Switch Theme Light/i);
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveStyle({
      backgroundColor: 'transparent',
      color: '#000',
    });
  });

  it('should render correctly with dark theme', () => {
   
    const darkThemeState = {
      themeSlice: { isDark: true },
    };

    const darkStore = configureStore({
      reducer: rootReducer,
      preloadedState: darkThemeState,
    });

    render(
      <Provider store={darkStore}>
        <ThemeButton />
      </Provider>
    );

 
    const buttonElement = screen.getByText(/Switch Theme Dark/i);
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveStyle({
      backgroundColor: 'rgb(90, 90, 190)',
      color: '#fff',
    });
  });
  it('should dispatch setTheme action when clicked', () => {
      render(
      <Provider store={store}>
        <ThemeButton />
      </Provider>
    );

  
    const buttonElement = screen.queryAllByText(/Switch Theme Light/i);
    
     
    buttonElement.forEach(item=> {

        fireEvent.click(item);
        expect(mockDispatch).toHaveBeenCalledWith(setTheme());
    })
 
  });
 
  });
