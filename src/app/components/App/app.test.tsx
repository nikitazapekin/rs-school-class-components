import { render, screen, fireEvent } from '@testing-library/react';
import { Provider, useSelector } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer, AppDispatch, RootState } from '../../../redux/store'; // Import your rootReducer, AppDispatch, and RootState
import App from './index';
import { setNextPageActionCreator, setPrevPageActionCreator } from '../../../redux/action-creators/setSearchParamsActionCreator';
import { useAppDispatch } from '../../../hooks/redux';
import { UserItem } from '../../../redux/types';
 
// Define the mock state type
interface MockState {
  params: {
    offset: number;
    query: string;
  };
  storedUsers: UserItem[];
}

jest.mock('../../../hooks/redux', () => ({
  useAppDispatch: jest.fn(),
}));

jest.mock('../../../hooks/useURL', () => ({
  __esModule: true,
  default: jest.fn(() => ({
    setPage: jest.fn(),
  })),
}));

jest.mock('react-redux', () => {
  const actualRedux = jest.requireActual('react-redux');
  return {
    ...actualRedux,
    useDispatch: jest.fn(),
    useSelector: jest.fn(),
  };
});

jest.mock('../StoredUsersFlyoutElement', () => () => <div>Stored Users Button</div>);

describe('App Component', () => {
  let dispatch: AppDispatch;

  beforeEach(() => {
    dispatch = jest.fn() as unknown as AppDispatch;
    (useAppDispatch as jest.Mock).mockReturnValue(dispatch);
  });

  const mockState: MockState = {
    params: { offset: 1, query: 'test' },
    storedUsers: [{
        login: 'user1',
        id: 1,
        node_id: 'node1',
        avatar_url: 'avatar1',
        gravatar_id: '',
        url: 'url1',
        html_url: 'html_url1',
        followers_url: 'followers_url1',
        following_url: 'following_url1',
        gists_url: 'gists_url1',
        starred_url: 'starred_url1',
        subscriptions_url: 'subscriptions_url1',
        organizations_url: 'organizations_url1',
        repos_url: 'repos_url1',
        events_url: 'events_url1',
        received_events_url: 'received_events_url1',
        type: 'user',
        site_admin: false,
        score: 1
     }]
  };

  const useSelectorMock = useSelector as jest.MockedFunction<typeof useSelector>;
  beforeEach(() => {
    useSelectorMock.mockImplementation((selector: (state: MockState) => any) => selector(mockState));
  });

  test('renders correctly with users', () => {
    const users: UserItem[] = [
      {
        login: 'user1',
        id: 1,
        node_id: 'node1',
        avatar_url: 'avatar1',
        gravatar_id: '',
        url: 'url1',
        html_url: 'html_url1',
        followers_url: 'followers_url1',
        following_url: 'following_url1',
        gists_url: 'gists_url1',
        starred_url: 'starred_url1',
        subscriptions_url: 'subscriptions_url1',
        organizations_url: 'organizations_url1',
        repos_url: 'repos_url1',
        events_url: 'events_url1',
        received_events_url: 'received_events_url1',
        type: 'user',
        site_admin: false,
        score: 1
      }
    ];

    render(
      <Provider store={createStore(rootReducer)}>
        <App users={users} />
      </Provider>
    );

    expect(screen.getByText('user1')).toBeInTheDocument();
  });

  test('handles pagination buttons correctly', () => {
    const users: UserItem[] = [
      {
        login: 'user1',
        id: 1,
        node_id: 'node1',
        avatar_url: 'avatar1',
        gravatar_id: '',
        url: 'url1',
        html_url: 'html_url1',
        followers_url: 'followers_url1',
        following_url: 'following_url1',
        gists_url: 'gists_url1',
        starred_url: 'starred_url1',
        subscriptions_url: 'subscriptions_url1',
        organizations_url: 'organizations_url1',
        repos_url: 'repos_url1',
        events_url: 'events_url1',
        received_events_url: 'received_events_url1',
        type: 'user',
        site_admin: false,
        score: 1
      }
    ];

    render(
      <Provider store={createStore(rootReducer)}>
        <App users={users} />
      </Provider>
    );

    fireEvent.click(screen.getByText('Next'));
    expect(dispatch).not.toHaveBeenCalledWith(setNextPageActionCreator());

    fireEvent.click(screen.getByText('Prev'));
    expect(dispatch).not.toHaveBeenCalledWith(setPrevPageActionCreator());
  });

  test('shows "Nothing found" message when no users are present', () => {
    render(
      <Provider store={createStore(rootReducer)}>
        <App users={[]} />
      </Provider>
    );

    expect(screen.getByText('Nothing found')).toBeInTheDocument();
  });
});


/*
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore, Store } from 'redux';
import { rootReducer } from '../../../redux/store'; // Import your rootReducer or equivalent
import App from './index';
import { setNextPageActionCreator, setPrevPageActionCreator } from '../../../redux/action-creators/setSearchParamsActionCreator';
import { paramsSelector } from '../../../redux/selectors/getSearchParams';
//import { storedUsersSelector } from '../../../redux/selectors/getStoredElements';
import { useAppDispatch } from '../../../hooks/redux';
import { useSelector } from 'react-redux';

import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';


jest.mock('../../../hooks/redux', () => ({
    useAppDispatch: jest.fn(),
  }));
  
  // Mock for `useURL` hook
  jest.mock('../../../hooks/useURL', () => ({
    __esModule: true,
    default: jest.fn(() => ({
      setPage: jest.fn(),
    })),
  }));
  
  // Mock for `react-redux` hooks
  jest.mock('react-redux', () => {
    const actualRedux = jest.requireActual('react-redux');
    return {
      ...actualRedux,
      useDispatch: jest.fn(),
      useSelector: jest.fn(),
    };
  });
  
  // Mock for `StoredUsersFlyoutElement` component
  jest.mock('../StoredUsersFlyoutElement', () => {
    return () => <div>Stored Users Button</div>;
  });
describe('App Component', () => {
  let dispatch: ThunkDispatch<any, any, AnyAction>;

  beforeEach(() => {
    dispatch = jest.fn() as ThunkDispatch<any, any, AnyAction>;
    (useAppDispatch as jest.Mock).mockReturnValue(dispatch);
  });

  const mockState = {
    params: { offset: 1, query: 'test' },
    storedUsers: [{ id: 1, login: 'user1' }]
  };

  const useSelectorMock = useSelector as jest.MockedFunction<typeof useSelector>;
  beforeEach(() => {
    useSelectorMock.mockImplementation((selector: (state: typeof mockState) => any) => selector(mockState));
  });
  test('renders correctly with users', () => {
    const users = [
      {
        login: 'user1',
        id: 1,
        node_id: 'node1',
        avatar_url: 'avatar1',
        gravatar_id: '',
        url: 'url1',
        html_url: 'html_url1',
        followers_url: 'followers_url1',
        following_url: 'following_url1',
        gists_url: 'gists_url1',
        starred_url: 'starred_url1',
        subscriptions_url: 'subscriptions_url1',
        organizations_url: 'organizations_url1',
        repos_url: 'repos_url1',
        events_url: 'events_url1',
        received_events_url: 'received_events_url1',
        type: 'user',
        site_admin: false,
        score: 1
      }
    ];

    render(
      <Provider store={createStore(rootReducer)}>
        <App users={users} />
      </Provider>
    );

    expect(screen.getByText('user1')).toBeInTheDocument();
  });

  test('handles pagination buttons correctly', () => {
    const users = [
      {
        login: 'user1',
        id: 1,
        node_id: 'node1',
        avatar_url: 'avatar1',
        gravatar_id: '',
        url: 'url1',
        html_url: 'html_url1',
        followers_url: 'followers_url1',
        following_url: 'following_url1',
        gists_url: 'gists_url1',
        starred_url: 'starred_url1',
        subscriptions_url: 'subscriptions_url1',
        organizations_url: 'organizations_url1',
        repos_url: 'repos_url1',
        events_url: 'events_url1',
        received_events_url: 'received_events_url1',
        type: 'user',
        site_admin: false,
        score: 1
      }
    ];

    render(
      <Provider store={createStore(rootReducer)}>
        <App users={users} />
      </Provider>
    );

    fireEvent.click(screen.getByText('Next'));
   expect(dispatch).not.toHaveBeenCalledWith(setNextPageActionCreator());
    
    fireEvent.click(screen.getByText('Prev'));
    expect(dispatch).not.toHaveBeenCalledWith(setPrevPageActionCreator());
  });

  test('shows "Nothing found" message when no users are present', () => {
    render(
      <Provider store={createStore(rootReducer)}>
        <App users={[]} />
      </Provider>
    );

   expect(screen.getByText('Nothing found')).toBeInTheDocument();
  });
});

*/