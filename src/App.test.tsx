import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { isLoadingSelector } from './redux/selectors/isLoadingSelector';
import { storedUsersSelector } from './redux/selectors/getStoredElements';
import App from './App';
import List from './components/List';
import ErrorComponent from './components/ErrorComponent';
import StoredUsersButton from './components/StoredUsersFlyoutElement';
import Spinner from './components/Spinner';
jest.mock('./components/List');
jest.mock('./components/ErrorComponent');
jest.mock('./components/StoredUsersFlyoutElement');
jest.mock('./components/Spinner');
jest.mock('./redux/selectors/getStoredElements', () => ({
  storedUsersSelector: jest.fn(),
}));
jest.mock('./redux/selectors/isLoadingSelector', () => ({
  isLoadingSelector: jest.fn(),
}));


const mockStore = () => {
  return configureStore({
    reducer: {
    },
    preloadedState: {
     
    },
  });
};

describe('App component', () => {
  beforeEach(() => {
    (List as jest.Mock).mockImplementation(() => <div>List Component</div>);
    (ErrorComponent as jest.Mock).mockImplementation(() => <div>Error Component</div>);
    (StoredUsersButton as jest.Mock).mockImplementation(() => <div>Stored Users Button</div>);
    (Spinner as jest.Mock).mockImplementation(() => <div>Loading...</div>);
  });

  it('renders the list and error components', () => {
    (storedUsersSelector as jest.Mock).mockReturnValue([]);
    (isLoadingSelector as jest.Mock).mockReturnValue(false);

    render(
      <Provider store={mockStore()}>
        <App />
      </Provider>
    );

    expect(screen.getByText('List Component')).toBeInTheDocument();
    expect(screen.getByText('Error Component')).toBeInTheDocument();
  });

  it('shows the stored users button when there are stored users', () => {
    (storedUsersSelector as jest.Mock).mockReturnValue([{}]);
    (isLoadingSelector as jest.Mock).mockReturnValue(false);

    render(
      <Provider store={mockStore()}>
        <App />
      </Provider>
    );

    expect(screen.getByText('Stored Users Button')).toBeInTheDocument();
  });

  it('shows the spinner when loading', () => {
    (storedUsersSelector as jest.Mock).mockReturnValue([]);
    (isLoadingSelector as jest.Mock).mockReturnValue(true);

    render(
      <Provider store={mockStore()}>
        <App />
      </Provider>
    );

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});
 