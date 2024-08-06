import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Details from './index';  
import { SetClickedUserActionCreator } from '../../redux/action-creators/setClickedUserActionCreator';
 
import axios from 'axios';
import { getServerSideProps } from './index';
interface UrlParam {
    user: string,
    page: string,
    query: string
}
const mockStore = configureStore({
  reducer: {
 
  },
});

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useAppDispatch: () => mockDispatch,
}));

// Mock axios
jest.mock('axios');

describe('Details Component', () => {
  it('dispatches SetClickedUserActionCreator with user data', () => {
    const mockUser = {
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
    };

    render(
      <Provider store={mockStore}>
        <Details user={mockUser} />
      </Provider>
    );

    expect(mockDispatch).toHaveBeenCalledWith(SetClickedUserActionCreator(mockUser));
  });

  it('renders Details component', () => {
    const mockUser = {
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
    };

    render(
      <Provider store={mockStore}>
        <Details user={mockUser} />
      </Provider>
    );

    // Test for rendered output based on your component's structure
    // Example: expect(screen.getByText('octocat')).toBeInTheDocument();
  });
});

describe('getServerSideProps', () => {
  it('fetches user data successfully', async () => {
    const mockUser = {
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
    };

    axios.get = jest.fn().mockResolvedValue({ data: mockUser });

   /* const context: UrlParam = {
      query: { user: 'octocat', page: "2", query: "lf" }
    };

    const result = await getServerSideProps(context);

    expect(result).toEqual({
      props: {
        user: mockUser
      }
    }); */
  });

  it('handles errors correctly', async () => {
    axios.get = jest.fn().mockRejectedValue(new Error('Network Error'));

    const context = {
      query: { user: 'octocat' }
    };

  //  await expect(getServerSideProps(context)).rejects.toThrow('Error fetching data');
  });
});
