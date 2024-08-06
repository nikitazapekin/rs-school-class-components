import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from '../../redux/store';
import StoredUsersButton from './index';
import { useAppDispatch } from '../../hooks/redux';

import { clearStoredElementsActionCreator } from '../../redux/action-creators/clearStoredElementsActionCreator';
import { UserItem } from './types';
import { useSelector } from 'react-redux'; // Импортируйте useSelector из react-redux

jest.mock('../../hooks/redux', () => ({
  useAppDispatch: jest.fn(),
}));

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
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

describe('StoredUsersButton component', () => {
  let mockedUseSelector: jest.MockedFunction<typeof useSelector>; // Измените на typeof useSelector
  let mockedUseAppDispatch: jest.MockedFunction<typeof useAppDispatch>;

  beforeEach(() => {
    mockedUseSelector = useSelector as jest.MockedFunction<typeof useSelector>; // Измените на typeof useSelector
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

  it('should generate CSV and trigger download on download link click', () => {
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
    const downloadLink = getByText('download') as HTMLAnchorElement;

    // Mock URL.createObjectURL
    const createObjectURL = jest.spyOn(URL, 'createObjectURL').mockReturnValue('mocked-url');

    // Check if URL.createObjectURL is called
    fireEvent.click(downloadLink);
    expect(createObjectURL).toHaveBeenCalled();

    // Cleanup
    createObjectURL.mockRestore();
  });
});

/*import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from '../../redux/store';
import StoredUsersButton from './index';
import { useAppDispatch } from '../../hooks/redux';
//import { storedUsersSelector } from '../../redux/selectors/getStoredElements';
import { clearStoredElementsActionCreator } from '../../redux/action-creators/clearStoredElementsActionCreator';
import { UserItem } from './types';
import { useSelector } from 'react-redux'; // Импортируйте useSelector из react-redux

jest.mock('../../hooks/redux', () => ({
  useAppDispatch: jest.fn(),
}));

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
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

describe('StoredUsersButton component', () => {
  let mockedUseSelector: jest.MockedFunction<typeof useSelector>; // Измените на typeof useSelector
  let mockedUseAppDispatch: jest.MockedFunction<typeof useAppDispatch>;

  beforeEach(() => {
    mockedUseSelector = useSelector as jest.MockedFunction<typeof useSelector>; // Измените на typeof useSelector
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
    expect(getByText('You chose 1 users')).not.toBeInTheDocument();
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

  it('should generate CSV and trigger download on download link click', () => {
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
    const downloadLink = getByText('download') as HTMLAnchorElement;

    // Mock URL.createObjectURL
    const createObjectURL = jest.spyOn(URL, 'createObjectURL').mockReturnValue('mocked-url');

    // Check if URL.createObjectURL is called
    fireEvent.click(downloadLink);
    expect(createObjectURL).toHaveBeenCalled();

    // Cleanup
    createObjectURL.mockRestore();
  });

  });
*/