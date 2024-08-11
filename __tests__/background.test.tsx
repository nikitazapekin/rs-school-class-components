 
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Background from "../src/components/Background/index"
 
import { rootReducer } from '../src/store/store'; 
import { MemoryRouter } from 'react-router-dom';
 
const createTestStore = (initialState = {}) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState: initialState
  });
};

describe('Background Component', () => {
  it('should render with dark background when isDark is true', () => {
    const store = createTestStore({
      themeSlice: {
        isDark: true,
      },
    });

    render(
      <Provider store={store}>
        <MemoryRouter>

        <Background />
        </MemoryRouter>
      </Provider>
    );

    const backgroundDiv = screen.getByTestId('background');
 
    expect(backgroundDiv).toHaveStyle('background-color: rgb(59, 59, 59)');
  }); 
});
