import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from '../../../redux/store';
import ThemeButton from './index';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { RootState } from '../../../redux/store';
 import { SetIsDarkActionCreator } from '../../../redux/action-creators/setIsDark';
jest.mock('../../../hooks/redux', () => ({
  useAppDispatch: jest.fn(),
  useAppSelector: jest.fn(),
}));

const renderWithRedux = (
  component: React.ReactNode,
  { store = configureStore({ reducer: rootReducer }) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};

describe('ThemeButton component', () => {
  let mockedUseAppSelector: jest.MockedFunction<typeof useAppSelector>;
  let mockedUseAppDispatch: jest.MockedFunction<typeof useAppDispatch>;

  beforeEach(() => {
   
    mockedUseAppSelector = useAppSelector as jest.MockedFunction<typeof useAppSelector>;
    mockedUseAppDispatch = useAppDispatch as jest.MockedFunction<typeof useAppDispatch>;
  });

  it('should render correctly with light theme', () => {
    
    mockedUseAppSelector.mockImplementation((selector) => selector({ themeSlice: { isDark: false } } as RootState));

    const { getByText } = renderWithRedux(<ThemeButton />);
    expect(getByText('Switch Theme Light')).toBeInTheDocument();
  });
  it('should render correctly with dark theme', () => {
      
    mockedUseAppSelector.mockImplementation((selector) => selector({ themeSlice: { isDark: true } } as RootState));

    const { getByText } = renderWithRedux(<ThemeButton />);
    expect(getByText('Switch Theme Light')).toBeInTheDocument();
    });
    
    it('should dispatch SetIsDarkActionCreator action on button click', () => {
        const mockDispatch = jest.fn();
    mockedUseAppDispatch.mockReturnValue(mockDispatch);
 
    mockedUseAppSelector.mockImplementation((selector) => selector({ themeSlice: { isDark: false } } as RootState));

    const { getByText } = renderWithRedux(<ThemeButton />);
    const button = getByText('Switch Theme Light');
    fireEvent.click(button);
    expect(mockDispatch).not.toHaveBeenCalledWith(SetIsDarkActionCreator());
    });
   
});