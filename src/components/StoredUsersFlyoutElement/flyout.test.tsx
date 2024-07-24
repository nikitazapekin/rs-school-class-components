 
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import StoredUsersButton from './index';
import { clearStoredElementsActionCreator } from "@/store/action-creators/clearStoredElementsActionCreator";
import { storedUsersSelector } from "@/store/selectors/getStoredElements";
import { useAppDispatch } from '@/hooks/redux.ts';

jest.mock('@/hooks/redux.ts', () => ({
  useAppDispatch: jest.fn(),
}));

jest.mock('@/store/selectors/getStoredElements', () => ({
  storedUsersSelector: jest.fn(),
}));

jest.mock('@/store/action-creators/clearStoredElementsActionCreator', () => ({
  clearStoredElementsActionCreator: jest.fn(),
}));

const mockStore = configureStore([]);
const mockDispatch = jest.fn();

describe('StoredUsersButton', () => {
  let store: ReturnType<typeof mockStore>;

  beforeEach(() => {
    store = mockStore({
      users: [],
    });

    (useAppDispatch as jest.Mock).mockReturnValue(mockDispatch);
    (storedUsersSelector as jest.Mock).mockReturnValue([
      { id: 1, name: 'John Doe', email: 'john@example.com' },
      { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
    ]);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders the component with the correct number of users', () => {
    render(
      <Provider store={store}>
        <StoredUsersButton />
      </Provider>
    );

    expect(screen.getByText('You chose 2 users')).toBeInTheDocument();
  });

  test('clicking the clear button dispatches the clear action', () => {
    render(
      <Provider store={store}>
        <StoredUsersButton />
      </Provider>
    );

    const clearButton = screen.getByText('Unselect all');
    fireEvent.click(clearButton);

    expect(mockDispatch).toHaveBeenCalledWith(clearStoredElementsActionCreator());
  });
/*
  test('clicking the download button creates a URL and sets it for download', () => {
    render(
      <Provider store={store}>
        <StoredUsersButton />
      </Provider>
    );

    const downloadButton = screen.getByText('download');
    fireEvent.click(downloadButton);

 //   const url = URL.createObjectURL(new Blob());
    expect(screen.getByRole('link')).toHaveAttribute('href', expect.stringContaining('blob:'));
  }); */
});
