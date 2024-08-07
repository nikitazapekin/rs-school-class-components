import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from '../../redux/store';
import StoredUsersButton from './index';
import { useAppDispatch } from '../../hooks/redux';
import { clearStoredElementsActionCreator } from '../../redux/action-creators/clearStoredElementsActionCreator';
import { UserItem } from './types';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

jest.mock('../../hooks/redux', () => ({
  useAppDispatch: jest.fn(),
}));

jest.mock('react-redux', () => ({
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
    expect(mockDispatch).toHaveBeenCalledWith(clearStoredElementsActionCreator());
  });

  it('should generate CSV and trigger download on download link click with single user', async () => {
    mockedUseSelector.mockImplementation(() => [
      {
        login: "testuser",
        id: 1,
        node_id: "node1",
        avatar_url: "avatar1",
        gravatar_id: "gravatar1",
        url: "url1",
        html_url: "html_url1",
        followers_url: "followers_url1",
        following_url: "following_url1",
        gists_url: "gists_url1",
        starred_url: "starred_url1",
        subscriptions_url: "subscriptions_url1",
        organizations_url: "organizations_url1",
        repos_url: "repos_url1",
        events_url: "events_url1",
        received_events_url: "received_events_url1",
        type: "type1",
        site_admin: false,
        score: 1
      } as UserItem,
    ]);

    const { getByText } = renderWithRedux(<StoredUsersButton />);
    const downloadLink = getByText('download') as HTMLAnchorElement;

    const createObjectURL = jest.spyOn(URL, 'createObjectURL').mockReturnValue('mocked-url');
    const revokeObjectURL = jest.spyOn(URL, 'revokeObjectURL').mockImplementation(() => {});

    fireEvent.click(downloadLink);
    await waitFor(() => expect(createObjectURL).toHaveBeenCalled());

    createObjectURL.mockRestore();
    revokeObjectURL.mockRestore();
  });

  it('should generate CSV for multiple users', async () => {
    mockedUseSelector.mockImplementation(() => [
      {
        login: "user1",
        id: 1,
        node_id: "node1",
        avatar_url: "avatar1",
        gravatar_id: "gravatar1",
        url: "url1",
        html_url: "html_url1",
        followers_url: "followers_url1",
        following_url: "following_url1",
        gists_url: "gists_url1",
        starred_url: "starred_url1",
        subscriptions_url: "subscriptions_url1",
        organizations_url: "organizations_url1",
        repos_url: "repos_url1",
        events_url: "events_url1",
        received_events_url: "received_events_url1",
        type: "type1",
        site_admin: false,
        score: 1
      } as UserItem,
      {
        login: "user2",
        id: 2,
        node_id: "node2",
        avatar_url: "avatar2",
        gravatar_id: "gravatar2",
        url: "url2",
        html_url: "html_url2",
        followers_url: "followers_url2",
        following_url: "following_url2",
        gists_url: "gists_url2",
        starred_url: "starred_url2",
        subscriptions_url: "subscriptions_url2",
        organizations_url: "organizations_url2",
        repos_url: "repos_url2",
        events_url: "events_url2",
        received_events_url: "received_events_url2",
        type: "type2",
        site_admin: true,
        score: 2
      } as UserItem,
    ]);

    const { getByText } = renderWithRedux(<StoredUsersButton />);
    const downloadLink = getByText('download') as HTMLAnchorElement;

    const createObjectURL = jest.spyOn(URL, 'createObjectURL').mockReturnValue('mocked-url');
    const revokeObjectURL = jest.spyOn(URL, 'revokeObjectURL').mockImplementation(() => {});

    fireEvent.click(downloadLink);
    await waitFor(() => expect(createObjectURL).toHaveBeenCalled());

    createObjectURL.mockRestore();
    revokeObjectURL.mockRestore();
  });

  it('should clean up URL object after download', () => {
    mockedUseSelector.mockImplementation(() => [
      {
        login: "user1",
        id: 1,
        node_id: "node1",
        avatar_url: "avatar1",
        gravatar_id: "gravatar1",
        url: "url1",
        html_url: "html_url1",
        followers_url: "followers_url1",
        following_url: "following_url1",
        gists_url: "gists_url1",
        starred_url: "starred_url1",
        subscriptions_url: "subscriptions_url1",
        organizations_url: "organizations_url1",
        repos_url: "repos_url1",
        events_url: "events_url1",
        received_events_url: "received_events_url1",
        type: "type1",
        site_admin: false,
        score: 1
      } as UserItem,
    ]);

    const { getByText, unmount } = renderWithRedux(<StoredUsersButton />);
    const downloadLink = getByText('download') as HTMLAnchorElement;

    const createObjectURL = jest.spyOn(URL, 'createObjectURL').mockReturnValue('mocked-url');
    const revokeObjectURL = jest.spyOn(URL, 'revokeObjectURL').mockImplementation(() => {});

    fireEvent.click(downloadLink);

    unmount();
    expect(revokeObjectURL).toHaveBeenCalledWith('mocked-url');

    createObjectURL.mockRestore();
    revokeObjectURL.mockRestore();
  });

  it('should not display download link if users list is empty', () => {
    mockedUseSelector.mockImplementation(() => []);

    const { queryByText } = renderWithRedux(<StoredUsersButton />);
    expect(queryByText('download')).not.toBeInTheDocument();
  });

  it('should not call download URL if handleDownload is not invoked', () => {
    mockedUseSelector.mockImplementation(() => [
      {
        login: "user1",
        id: 1,
        node_id: "node1",
        avatar_url: "avatar1",
        gravatar_id: "gravatar1",
        url: "url1",
        html_url: "html_url1",
        followers_url: "followers_url1",
        following_url: "following_url1",
        gists_url: "gists_url1",
        starred_url: "starred_url1",
        subscriptions_url: "subscriptions_url1",
        organizations_url: "organizations_url1",
        repos_url: "repos_url1",
        events_url: "events_url1",
        received_events_url: "received_events_url1",
        type: "type1",
        site_admin: false,
        score: 1
      } as UserItem,
    ]);

    const { getByText } = renderWithRedux(<StoredUsersButton />);
    const downloadLink = getByText('download') as HTMLAnchorElement;

    // Simulate the URL being generated without invoking the click handler
    expect(downloadLink.href).toBe('');
  });

  it('should correctly format CSV content for users with different types of data', async () => {
    mockedUseSelector.mockImplementation(() => [
      {
        login: "user1",
        id: 1,
        node_id: "node1",
        avatar_url: "avatar1",
        gravatar_id: "gravatar1",
        url: "url1",
        html_url: "html_url1",
        followers_url: "followers_url1",
        following_url: "following_url1",
        gists_url: "gists_url1",
        starred_url: "starred_url1",
        subscriptions_url: "subscriptions_url1",
        organizations_url: "organizations_url1",
        repos_url: "repos_url1",
        events_url: "events_url1",
        received_events_url: "received_events_url1",
        type: "type1",
        site_admin: false,
        score: 1
      } as UserItem,
    ]);

    const { getByText } = renderWithRedux(<StoredUsersButton />);
    const downloadLink = getByText('download') as HTMLAnchorElement;

    const createObjectURL = jest.spyOn(URL, 'createObjectURL').mockReturnValue('mocked-url');
    const revokeObjectURL = jest.spyOn(URL, 'revokeObjectURL').mockImplementation(() => {});

    fireEvent.click(downloadLink);

    await waitFor(() => {
      const csvContent = `login;id;node_id;avatar_url;gravatar_id;url;html_url;followers_url;following_url;gists_url;starred_url;subscriptions_url;organizations_url;repos_url;events_url;received_events_url;type;site_admin;score\nuser1;1;node1;avatar1;gravatar1;url1;html_url1;followers_url1;following_url1;gists_url1;starred_url1;subscriptions_url1;organizations_url1;repos_url1;events_url1;received_events_url1;type1;false;1\n`;
      expect(createObjectURL).toHaveBeenCalledWith(new Blob([csvContent], { type: 'text/csv;charset=utf-8' }));
    });

    createObjectURL.mockRestore();
    revokeObjectURL.mockRestore();
  });
});




/*
import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from '../../redux/store';
import StoredUsersButton from './index';
import { useAppDispatch } from '../../hooks/redux';
import { clearStoredElementsActionCreator } from '../../redux/action-creators/clearStoredElementsActionCreator';
import { UserItem } from './types';
import { useSelector } from 'react-redux';  
import { RootState } from '../../redux/store';
jest.mock('../../hooks/redux', () => ({
  useAppDispatch: jest.fn(),
}));

jest.mock('react-redux', () => ({
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
    expect(mockDispatch).toHaveBeenCalledWith(clearStoredElementsActionCreator());
  });

  it('should generate CSV and trigger download on download link click with single user', async () => {
    mockedUseSelector.mockImplementation(() => [
      {
        login: "testuser",
        id: 1,
        node_id: "node1",
        avatar_url: "avatar1",
        gravatar_id: "gravatar1",
        url: "url1",
        html_url: "html_url1",
        followers_url: "followers_url1",
        following_url: "following_url1",
        gists_url: "gists_url1",
        starred_url: "starred_url1",
        subscriptions_url: "subscriptions_url1",
        organizations_url: "organizations_url1",
        repos_url: "repos_url1",
        events_url: "events_url1",
        received_events_url: "received_events_url1",
        type: "type1",
        site_admin: false,
        score: 1
      } as UserItem,
    ]);

    const { getByText } = renderWithRedux(<StoredUsersButton />);
    const downloadLink = getByText('download') as HTMLAnchorElement;

    const createObjectURL = jest.spyOn(URL, 'createObjectURL').mockReturnValue('mocked-url');
    const revokeObjectURL = jest.spyOn(URL, 'revokeObjectURL').mockImplementation(() => {});

    fireEvent.click(downloadLink);
    await waitFor(() => expect(createObjectURL).toHaveBeenCalled());

    createObjectURL.mockRestore();
    revokeObjectURL.mockRestore();
  });

  it('should generate CSV for multiple users', async () => {
    mockedUseSelector.mockImplementation(() => [
      {
        login: "user1",
        id: 1,
        node_id: "node1",
        avatar_url: "avatar1",
        gravatar_id: "gravatar1",
        url: "url1",
        html_url: "html_url1",
        followers_url: "followers_url1",
        following_url: "following_url1",
        gists_url: "gists_url1",
        starred_url: "starred_url1",
        subscriptions_url: "subscriptions_url1",
        organizations_url: "organizations_url1",
        repos_url: "repos_url1",
        events_url: "events_url1",
        received_events_url: "received_events_url1",
        type: "type1",
        site_admin: false,
        score: 1
      } as UserItem,
      {
        login: "user2",
        id: 2,
        node_id: "node2",
        avatar_url: "avatar2",
        gravatar_id: "gravatar2",
        url: "url2",
        html_url: "html_url2",
        followers_url: "followers_url2",
        following_url: "following_url2",
        gists_url: "gists_url2",
        starred_url: "starred_url2",
        subscriptions_url: "subscriptions_url2",
        organizations_url: "organizations_url2",
        repos_url: "repos_url2",
        events_url: "events_url2",
        received_events_url: "received_events_url2",
        type: "type2",
        site_admin: true,
        score: 2
      } as UserItem,
    ]);

    const { getByText } = renderWithRedux(<StoredUsersButton />);
    const downloadLink = getByText('download') as HTMLAnchorElement;

    const createObjectURL = jest.spyOn(URL, 'createObjectURL').mockReturnValue('mocked-url');
    const revokeObjectURL = jest.spyOn(URL, 'revokeObjectURL').mockImplementation(() => {});

    fireEvent.click(downloadLink);
    await waitFor(() => expect(createObjectURL).toHaveBeenCalled());

    createObjectURL.mockRestore();
    revokeObjectURL.mockRestore();
  });

  it('should clean up URL object after download', () => {
    mockedUseSelector.mockImplementation(() => [
      {
        login: "user1",
        id: 1,
        node_id: "node1",
        avatar_url: "avatar1",
        gravatar_id: "gravatar1",
        url: "url1",
        html_url: "html_url1",
        followers_url: "followers_url1",
        following_url: "following_url1",
        gists_url: "gists_url1",
        starred_url: "starred_url1",
        subscriptions_url: "subscriptions_url1",
        organizations_url: "organizations_url1",
        repos_url: "repos_url1",
        events_url: "events_url1",
        received_events_url: "received_events_url1",
        type: "type1",
        site_admin: false,
        score: 1
      } as UserItem,
    ]);

    const { getByText, unmount } = renderWithRedux(<StoredUsersButton />);
    const downloadLink = getByText('download') as HTMLAnchorElement;

    const createObjectURL = jest.spyOn(URL, 'createObjectURL').mockReturnValue('mocked-url');
    const revokeObjectURL = jest.spyOn(URL, 'revokeObjectURL').mockImplementation(() => {});

    fireEvent.click(downloadLink);

    unmount();
    expect(revokeObjectURL).toHaveBeenCalledWith('mocked-url');

    createObjectURL.mockRestore();
    revokeObjectURL.mockRestore();
  });
});
 */