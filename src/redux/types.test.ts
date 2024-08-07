import { UserItem, UserDataArray, AppStatee, SelectedElementsState, SearchTypes, SearchUsersResponse } from './types';

describe('TypeScript Interface Tests', () => {
  it('should create a valid UserItem object', () => {
    const user: UserItem = {
      login: 'johndoe',
      id: 1,
      node_id: 'MDQ6VXNlcjE=',
      avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/johndoe',
      html_url: 'https://github.com/johndoe',
      followers_url: 'https://api.github.com/users/johndoe/followers',
      following_url: 'https://api.github.com/users/johndoe/following{/other_user}',
      gists_url: 'https://api.github.com/users/johndoe/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/johndoe/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/johndoe/subscriptions',
      organizations_url: 'https://api.github.com/users/johndoe/orgs',
      repos_url: 'https://api.github.com/users/johndoe/repos',
      events_url: 'https://api.github.com/users/johndoe/events{/privacy}',
      received_events_url: 'https://api.github.com/users/johndoe/received_events',
      type: 'User',
      site_admin: false,
      score: 100,
    };
    expect(user).toBeTruthy();
  });

  it('should create a valid UserDataArray object', () => {
    const users: UserDataArray = [
      {
        login: 'johndoe',
        id: 1,
        node_id: 'MDQ6VXNlcjE=',
        avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/johndoe',
        html_url: 'https://github.com/johndoe',
        followers_url: 'https://api.github.com/users/johndoe/followers',
        following_url: 'https://api.github.com/users/johndoe/following{/other_user}',
        gists_url: 'https://api.github.com/users/johndoe/gists{/gist_id}',
        starred_url: 'https://api.github.com/users/johndoe/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/johndoe/subscriptions',
        organizations_url: 'https://api.github.com/users/johndoe/orgs',
        repos_url: 'https://api.github.com/users/johndoe/repos',
        events_url: 'https://api.github.com/users/johndoe/events{/privacy}',
        received_events_url: 'https://api.github.com/users/johndoe/received_events',
        type: 'User',
        site_admin: false,
        score: 100,
      },
    ];
    expect(users).toBeTruthy();
    expect(users.length).toBe(1);
  });

  it('should create a valid AppStatee object', () => {
    const appState: AppStatee = {
      isLoading: false,
      error: null,
      isLoadingUserData: false,
      users: [
        {
          login: 'johndoe',
          id: 1,
          node_id: 'MDQ6VXNlcjE=',
          avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/johndoe',
          html_url: 'https://github.com/johndoe',
          followers_url: 'https://api.github.com/users/johndoe/followers',
          following_url: 'https://api.github.com/users/johndoe/following{/other_user}',
          gists_url: 'https://api.github.com/users/johndoe/gists{/gist_id}',
          starred_url: 'https://api.github.com/users/johndoe/starred{/owner}{/repo}',
          subscriptions_url: 'https://api.github.com/users/johndoe/subscriptions',
          organizations_url: 'https://api.github.com/users/johndoe/orgs',
          repos_url: 'https://api.github.com/users/johndoe/repos',
          events_url: 'https://api.github.com/users/johndoe/events{/privacy}',
          received_events_url: 'https://api.github.com/users/johndoe/received_events',
          type: 'User',
          site_admin: false,
          score: 100,
        },
      ],
      typedValue: 'test',
      params: {
        limit: 10,
        offset: 0,
        query: 'test',
        storedValue: 'test',
      },
      status: 'idle',
      clickedUser: {
        login: 'johndoe',
        id: 1,
        node_id: 'MDQ6VXNlcjE=',
        avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/johndoe',
        html_url: 'https://github.com/johndoe',
        followers_url: 'https://api.github.com/users/johndoe/followers',
        following_url: 'https://api.github.com/users/johndoe/following{/other_user}',
        gists_url: 'https://api.github.com/users/johndoe/gists{/gist_id}',
        starred_url: 'https://api.github.com/users/johndoe/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/johndoe/subscriptions',
        organizations_url: 'https://api.github.com/users/johndoe/orgs',
        repos_url: 'https://api.github.com/users/johndoe/repos',
        events_url: 'https://api.github.com/users/johndoe/events{/privacy}',
        received_events_url: 'https://api.github.com/users/johndoe/received_events',
        type: 'User',
        site_admin: false,
        score: 100,
      },
    };
    expect(appState).toBeTruthy();
  });

  it('should create a valid SelectedElementsState object', () => {
    const selectedElementsState: SelectedElementsState = {
      storedElements: [
        {
          login: 'johndoe',
          id: 1,
          node_id: 'MDQ6VXNlcjE=',
          avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/johndoe',
          html_url: 'https://github.com/johndoe',
          followers_url: 'https://api.github.com/users/johndoe/followers',
          following_url: 'https://api.github.com/users/johndoe/following{/other_user}',
          gists_url: 'https://api.github.com/users/johndoe/gists{/gist_id}',
          starred_url: 'https://api.github.com/users/johndoe/starred{/owner}{/repo}',
          subscriptions_url: 'https://api.github.com/users/johndoe/subscriptions',
          organizations_url: 'https://api.github.com/users/johndoe/orgs',
          repos_url: 'https://api.github.com/users/johndoe/repos',
          events_url: 'https://api.github.com/users/johndoe/events{/privacy}',
          received_events_url: 'https://api.github.com/users/johndoe/received_events',
          type: 'User',
          site_admin: false,
          score: 100,
        },
      ],
      selectedElement: {
        login: 'johndoe',
        id: 1,
        node_id: 'MDQ6VXNlcjE=',
        avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/johndoe',
        html_url: 'https://github.com/johndoe',
        followers_url: 'https://api.github.com/users/johndoe/followers',
        following_url: 'https://api.github.com/users/johndoe/following{/other_user}',
        gists_url: 'https://api.github.com/users/johndoe/gists{/gist_id}',
        starred_url: 'https://api.github.com/users/johndoe/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/johndoe/subscriptions',
        organizations_url: 'https://api.github.com/users/johndoe/orgs',
        repos_url: 'https://api.github.com/users/johndoe/repos',
        events_url: 'https://api.github.com/users/johndoe/events{/privacy}',
        received_events_url: 'https://api.github.com/users/johndoe/received_events',
        type: 'User',
        site_admin: false,
        score: 100,
      },
    };
    expect(selectedElementsState).toBeTruthy();
  });

  it('should create a valid SearchTypes object', () => {
    const searchTypes: SearchTypes = {
      query: 'testQuery',
      offset: 0,
    };
    expect(searchTypes).toBeTruthy();
  });

  it('should create a valid SearchUsersResponse object', () => {
    const searchUsersResponse: SearchUsersResponse = {
      total_count: 2,
      incomplete_results: false,
      items: [
        {
          login: 'johndoe',
          id: 1,
          node_id: 'MDQ6VXNlcjE=',
          avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/johndoe',
          html_url: 'https://github.com/johndoe',
          followers_url: 'https://api.github.com/users/johndoe/followers',
          following_url: 'https://api.github.com/users/johndoe/following{/other_user}',
          gists_url: 'https://api.github.com/users/johndoe/gists{/gist_id}',
          starred_url: 'https://api.github.com/users/johndoe/starred{/owner}{/repo}',
          subscriptions_url: 'https://api.github.com/users/johndoe/subscriptions',
          organizations_url: 'https://api.github.com/users/johndoe/orgs',
          repos_url: 'https://api.github.com/users/johndoe/repos',
          events_url: 'https://api.github.com/users/johndoe/events{/privacy}',
          received_events_url: 'https://api.github.com/users/johndoe/received_events',
          type: 'User',
          site_admin: false,
          score: 100,
        },
      ],
    };
    expect(searchUsersResponse).toBeTruthy();
  });
});
