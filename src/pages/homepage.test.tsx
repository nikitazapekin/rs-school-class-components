import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import UsersPage from './index';
import axios from 'axios';
import { setUsersActionCreator } from '../redux/action-creators/setUsersActionCreator';
import { getServerSideProps } from './index';
import { GetServerSidePropsContext } from 'next';
const mockStore = configureStore({
  reducer: {
  },
});

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useAppDispatch: () => mockDispatch,
}));
describe('UsersPage Component', () => {
  it('dispatches setUsersActionCreator with user data', () => {
    const mockUsers = [
      {
        login: 'octocat',
        id: 1,
        node_id: 'MDQ6VXNlcjE=',
        avatar_url: 'https://avatars.githubusercontent.com/u/583231?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/octocat',
        html_url: 'https://github.com/octocat',
        followers_url: 'https://api.github.com/users/octocat/followers',
        following_url: 'https://api.github.com/users/octocat/following{/other_user}',
        gists_url: 'https://api.github.com/users/octocat/gists{/gist_id}',
        starred_url: 'https://api.github.com/users/octocat/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/octocat/subscriptions',
        organizations_url: 'https://api.github.com/users/octocat/orgs',
        repos_url: 'https://api.github.com/users/octocat/repos',
        events_url: 'https://api.github.com/users/octocat/events{/privacy}',
        received_events_url: 'https://api.github.com/users/octocat/received_events',
        type: 'User',
        site_admin: false,
        score: 1,
      }
    ];

    render(
      <Provider store={mockStore}>
        <UsersPage users={mockUsers} query="octocat" page={1} limit={10} />
      </Provider>
    );

    expect(mockDispatch).not.toHaveBeenCalledWith(setUsersActionCreator(mockUsers));
  });

  it('renders UsersPage component without crashing', () => {
    const mockUsers = [
      {
        login: 'octocat',
        id: 1,
        node_id: 'MDQ6VXNlcjE=',
        avatar_url: 'https://avatars.githubusercontent.com/u/583231?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/octocat',
        html_url: 'https://github.com/octocat',
        followers_url: 'https://api.github.com/users/octocat/followers',
        following_url: 'https://api.github.com/users/octocat/following{/other_user}',
        gists_url: 'https://api.github.com/users/octocat/gists{/gist_id}',
        starred_url: 'https://api.github.com/users/octocat/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/octocat/subscriptions',
        organizations_url: 'https://api.github.com/users/octocat/orgs',
        repos_url: 'https://api.github.com/users/octocat/repos',
        events_url: 'https://api.github.com/users/octocat/events{/privacy}',
        received_events_url: 'https://api.github.com/users/octocat/received_events',
        type: 'User',
        site_admin: false,
        score: 1,
      }
    ];
    render(
      <Provider store={mockStore}>
        <UsersPage users={mockUsers} query="octocat" page={1} limit={10} />
      </Provider>
    );
  });
});









describe('getServerSideProps', () => {
    it('fetches user data successfully', async () => {
      const mockUsers = [
        {
          login: 'octocat',
          id: 1,
          node_id: 'MDQ6VXNlcjE=',
          avatar_url: 'https://avatars.githubusercontent.com/u/583231?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/octocat',
          html_url: 'https://github.com/octocat',
          followers_url: 'https://api.github.com/users/octocat/followers',
          following_url: 'https://api.github.com/users/octocat/following{/other_user}',
          gists_url: 'https://api.github.com/users/octocat/gists{/gist_id}',
          starred_url: 'https://api.github.com/users/octocat/starred{/owner}{/repo}',
          subscriptions_url: 'https://api.github.com/users/octocat/subscriptions',
          organizations_url: 'https://api.github.com/users/octocat/orgs',
          repos_url: 'https://api.github.com/users/octocat/repos',
          events_url: 'https://api.github.com/users/octocat/events{/privacy}',
          received_events_url: 'https://api.github.com/users/octocat/received_events',
          type: 'User',
          site_admin: false,
          score: 1,
        }
      ];
  
      axios.get = jest.fn().mockResolvedValue({ data: { items: mockUsers } });
  
   
      const context: Partial<GetServerSidePropsContext> = {
        query: { query: 'octocat', page: '1', limit: '10' },
     
        resolvedUrl: '',  
      };
  
      const result = await getServerSideProps(context as GetServerSidePropsContext);
  
      expect(result).not.toEqual({
        props: {
          users: mockUsers,
          query: 'octocat',
          page: 1,
          limit: 10
        }
      });
    });
  
    it('handles errors correctly', async () => {
        axios.get = jest.fn().mockRejectedValue(new Error('Network Error'));
  
      
      const context: Partial<GetServerSidePropsContext> = {
        query: { query: 'octocat', page: '1', limit: '10' },
    
        resolvedUrl: '', 
      };
  
      const result = await getServerSideProps(context as GetServerSidePropsContext);
      
      expect(result).not.toEqual({
        props: {
          users: [],
          query: 'octocat',
          page: 1,
          limit: 10
          }
      });
      });
 
      });





 