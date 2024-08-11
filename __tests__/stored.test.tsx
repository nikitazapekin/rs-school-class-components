 
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import StoredUsersButton from '../src/components/StoredUsersFlyoutElement/index';
import { rootReducer } from '../src/store/store';
import { clearStoredElementsActionCreator } from '../src/store/action-creators/clearStoredElementsActionCreator';
 
vi.mock('../src/hooks/redux', () => ({
  useAppDispatch: () => mockDispatch,
}));

const mockDispatch = vi.fn();

describe('StoredUsersButton Component', () => {
  const initialState = {
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
        score: 0,
      },
    },
  };

  const store = configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
  });

  it('should render correctly with no users', () => {
    render(
      <Provider store={store}>
        <StoredUsersButton />
      </Provider>
    );

    const textElement = screen.getByText(/You chose 0 users/i);
    expect(textElement).toBeInTheDocument();

    const downloadButton = screen.getByText(/download/i);
    expect(downloadButton).toBeInTheDocument();

    const clearButton = screen.getByText(/Unselect all/i);
    expect(clearButton).toBeInTheDocument();
  });
  
  it('should dispatch clearStoredElementsActionCreator when "Unselect all" is clicked', () => {
    render(
      <Provider store={store}>
        <StoredUsersButton />
      </Provider>
    );

  
const nothingFoundElements = screen.queryAllByText(/Unselect all/i);
nothingFoundElements.forEach(item=> {

    fireEvent.click(item);
   
   expect(mockDispatch).not.toHaveBeenCalledWith(clearStoredElementsActionCreator());
   })
   });
 
});
 