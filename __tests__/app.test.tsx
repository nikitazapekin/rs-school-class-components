import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it, beforeEach, vi } from 'vitest';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import App from "../src/components/App/index"
import appSlice from '../src/store/slices/appSlice';
import selectedElementsSlice from '../src/store/slices/selectedElementsSlice';
import themeSlice from '../src/store/slices/themeSlice';
import { setStoredInLocalStorageActionCreator } from '../src/store/action-creators/setStoredInLocalStorageQuery';
import { useAppDispatch } from '../src/hooks/redux';
import { MemoryRouter } from 'react-router-dom';
 
 
const createTestStore = (initialState = {}) => {
  return configureStore({
    reducer: {
      appSlice,
      selectedElementsSlice,
      themeSlice
    },
    preloadedState: initialState
  });
};

describe('App Component', () => {
  beforeEach(() => {
 
    localStorage.clear();
  });
  it('should render Header, List, and Background components', () => {
      const store = createTestStore();

    render(
      <Provider store={store}>
        <MemoryRouter>

        <App />
        </MemoryRouter>
      </Provider>
    );
    
    
    expect(screen.getByTestId('header')).toBeInTheDocument();
    
  
    expect(screen.getByTestId('list')).toBeInTheDocument();
 
    expect(screen.getByTestId('background')).toBeInTheDocument();
  });
  
 
  
  it('should not display StoredUsersButton when storedUsers is empty', () => {
    const store = createTestStore({
        selectedElementsSlice: {
            storedUsers: []
      }
    });

    render(
      <Provider store={store}>
        <MemoryRouter>

        <App />
        </MemoryRouter>
      </Provider>
    );

 
    expect(screen.queryByTestId('stored-users-button')).not.toBeInTheDocument();
  });
 
});
