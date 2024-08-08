import { render, screen, fireEvent } from '@testing-library/react';
import { Provider, useSelector } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer, AppDispatch} from '../../../redux/store'; 
import App from './index';
import { setNextPageActionCreator, setPrevPageActionCreator } from '../../../redux/action-creators/setSearchParamsActionCreator';
import { useAppDispatch } from '../../../hooks/redux';
import { UserItem } from '../../../redux/types';

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

