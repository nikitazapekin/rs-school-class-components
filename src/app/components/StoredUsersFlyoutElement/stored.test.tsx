import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider,  useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer, RootState } from '../../../redux/store';
import StoredUsersButton from './index';
import { useAppDispatch } from '../../../hooks/redux';
import { clearStoredElementsActionCreator } from '../../../redux/action-creators/clearStoredElementsActionCreator';
import { UserItem } from './types';
jest.mock('../../../hooks/redux', () => ({
    useAppDispatch: jest.fn(),
}));
jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useSelector: jest.fn(),
}));

const initialState: RootState = {
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
  },
  selectedElementsSlice: {
    storedElements: [],
    selectedElement: null,
  },
  themeSlice: {
    isDark: false,
  },
};

const renderWithRedux = (
  component: React.ReactNode,
  { store = configureStore({ reducer: rootReducer, preloadedState: initialState }) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};

describe('StoredUsersButton component', () => {
  let mockedUseSelector: jest.MockedFunction<typeof useSelector>;
  let mockedUseAppDispatch: jest.MockedFunction<typeof useAppDispatch>;

  beforeEach(() => {
    mockedUseSelector = useSelector as jest.MockedFunction<typeof useSelector>;
    mockedUseAppDispatch = useAppDispatch as jest.MockedFunction<typeof useAppDispatch>;
});

  it('should render correctly with users', () => {
    mockedUseSelector.mockImplementation(() => [
      {
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
      } as UserItem,
    ]);
    
    const { getByText } = renderWithRedux(<StoredUsersButton />);
    expect(getByText('You chose 1 users')).toBeInTheDocument();
});
it('should render correctly without users', () => {
    mockedUseSelector.mockImplementation(() => []);

    const { getByText } = renderWithRedux(<StoredUsersButton />);
    expect(getByText('You chose 0 users')).toBeInTheDocument();
  });
  
  it('should dispatch clearStoredElementsActionCreator action on button click', () => {
    const mockDispatch = jest.fn();
    mockedUseAppDispatch.mockReturnValue(mockDispatch);
    mockedUseSelector.mockImplementation(() => [
      {
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
      } as UserItem,
    ]);

    const { getByText } = renderWithRedux(<StoredUsersButton />);
    const button = getByText('Unselect all');
    fireEvent.click(button);
    expect(mockDispatch).not.toHaveBeenCalledWith(clearStoredElementsActionCreator());
    });
   
    });