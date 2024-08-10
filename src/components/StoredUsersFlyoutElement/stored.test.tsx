import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from '@/store/store';
import { RootState } from '@/store/store';
import { clearStoredElementsActionCreator } from '@/store/action-creators/clearStoredElementsActionCreator';
import { storedUsersSelector } from '@/store/selectors/getStoredElements';
import StoredUsersButton from './index';
import { useAppDispatch } from '@/hooks/redux';

// Mock the Redux hooks and dispatch
jest.mock('@/hooks/redux', () => ({
  useAppDispatch: jest.fn()
}));

jest.mock('react-redux', () => ({
  useSelector: jest.fn()
}));

const initialState: RootState = {
  themeSlice: { isDark: false },
  selectedElementsSlice: {
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
  }
};

const createTestStore = (state: Partial<RootState>) =>
  configureStore({
    reducer: rootReducer,
    preloadedState: state,
  });

describe('StoredUsersButton Component', () => {
  let store: ReturnType<typeof createTestStore>;
  let mockDispatch: jest.Mock;

  beforeEach(() => {
    mockDispatch = jest.fn();
    (useAppDispatch as jest.Mock).mockReturnValue(mockDispatch);
  });

  test('renders the component with users and shows the correct user count', () => {
    const stateWithUsers: Partial<RootState> = {
      ...initialState,
      selectedElementsSlice: {
        storedElements: [
          { login: "user1", id: 1, node_id: "node1", avatar_url: "", gravatar_id: "", url: "", html_url: "", followers_url: "", following_url: "", gists_url: "", starred_url: "", subscriptions_url: "", organizations_url: "", repos_url: "", events_url: "", received_events_url: "", type: "", site_admin: false, score: 10 },
          { login: "user2", id: 2, node_id: "node2", avatar_url: "", gravatar_id: "", url: "", html_url: "", followers_url: "", following_url: "", gists_url: "", starred_url: "", subscriptions_url: "", organizations_url: "", repos_url: "", events_url: "", received_events_url: "", type: "", site_admin: false, score: 20 }
        ],
        selectedElement: null,
      }
    };

    store = createTestStore(stateWithUsers);
  

    render(
      <Provider store={store}>
        <StoredUsersButton />
      </Provider>
    );

    expect(screen.getByText('You chose 2 users')).toBeInTheDocument();
    expect(screen.getByText('download')).toBeInTheDocument();
    expect(screen.getByText('Unselect all')).toBeInTheDocument();
  });

  test('dispatches clearStoredElementsActionCreator on Unselect all button click', () => {
    store = createTestStore(initialState);
  

    render(
      <Provider store={store}>
        <StoredUsersButton />
      </Provider>
    );

    const clearButton = screen.getByText('Unselect all');
    fireEvent.click(clearButton);

    expect(mockDispatch).toHaveBeenCalledTimes(1);
    expect(mockDispatch).toHaveBeenCalledWith(clearStoredElementsActionCreator());
  });

  test('handles CSV download', () => {
    const stateWithUsers: Partial<RootState> = {
      ...initialState,
      selectedElementsSlice: {
        storedElements: [
          { login: "user1", id: 1, node_id: "node1", avatar_url: "", gravatar_id: "", url: "", html_url: "", followers_url: "", following_url: "", gists_url: "", starred_url: "", subscriptions_url: "", organizations_url: "", repos_url: "", events_url: "", received_events_url: "", type: "", site_admin: false, score: 10 },
          { login: "user2", id: 2, node_id: "node2", avatar_url: "", gravatar_id: "", url: "", html_url: "", followers_url: "", following_url: "", gists_url: "", starred_url: "", subscriptions_url: "", organizations_url: "", repos_url: "", events_url: "", received_events_url: "", type: "", site_admin: false, score: 20 }
        ],
        selectedElement: null,
      }
    };

    store = createTestStore(stateWithUsers);
    

    render(
      <Provider store={store}>
        <StoredUsersButton />
      </Provider>
    );

    const downloadLink = screen.getByText('download') as HTMLAnchorElement;
    expect(downloadLink).toHaveAttribute('href');
    expect(downloadLink.href).toContain('blob:');  
  });
});
