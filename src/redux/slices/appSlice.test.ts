
import appReducer, {
  initialState,
  setLoading,
  setError,
  setLoadingUserData,
  setSearchParamsURL,
  setNextPage,
  setPrevPage,
  setQueryPage,
  setUsers,
  setFirstPage,
  setStoredInLocalStorageQuery,
  setTypedValue,
  setClickedUser,
  setNewSearchValue,
} from './appSlice';
import { SearchTypes, User } from '../types';

describe('app slice', () => {
  it('should handle initial state', () => {
    expect(appReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  it('should handle setLoading', () => {
    const actual = appReducer(initialState, setLoading(true));
    expect(actual.isLoading).toEqual(true);
  });

  it('should handle setLoadingUserData', () => {
    const actual = appReducer(initialState, setLoadingUserData(true));
    expect(actual.isLoadingUserData).toEqual(true);
  });

  it('should handle setError', () => {
    const errorMessage = 'Error occurred';
    const actual = appReducer(initialState, setError(errorMessage));
    expect(actual.error).toEqual(errorMessage);
  });

  it('should handle setSearchParamsURL', () => {
    const searchParams: SearchTypes = { query: 'test', offset: 2 };
    const actual = appReducer(initialState, setSearchParamsURL(searchParams));
    expect(actual.params.query).toEqual('test');
    expect(actual.params.offset).toEqual(2);
  });

  it('should handle setNextPage', () => {
    const actual = appReducer(initialState, setNextPage());
    expect(actual.params.offset).toEqual(2);
  });

  it('should handle setPrevPage', () => {
    const state = { ...initialState, params: { ...initialState.params, offset: 2 } };
    const actual = appReducer(state, setPrevPage());
    expect(actual.params.offset).toEqual(1);
  });

  it('should handle setFirstPage', () => {
    const actual = appReducer(initialState, setFirstPage());
    expect(actual.params.offset).toEqual(1);
  });

  it('should handle setQueryPage', () => {
    const query = 'new query';
    const actual = appReducer(initialState, setQueryPage(query));
    expect(actual.params.query).toEqual(query);
  });

  it('should handle setUsers', () => {
    const users = [
     {
        login: "",
        id: 0,
        node_id:"" ,
        avatar_url: "",
        gravatar_id:"" ,
        url:"" ,
        html_url:"" ,
        followers_url: "",
        following_url:"" ,
        gists_url: "",
        starred_url: "",
        subscriptions_url:  "",
        organizations_url: "",
        repos_url:"" ,
        events_url:"" ,
        received_events_url:"" ,
        type: "",
        site_admin: false,
        score: 0
    }
    ];
  const actual = appReducer(initialState, setUsers(users));
    expect(actual.users).toEqual(users);
  });

  it('should handle setStoredInLocalStorageQuery', () => {
    const query = 'stored query';
    const actual = appReducer(initialState, setStoredInLocalStorageQuery(query));
    expect(actual.params.storedValue).toEqual(query);
    expect(actual.params.query).toEqual(query);
  });

  it('should handle setTypedValue', () => {
    const typedValue = 'typed value';
    const actual = appReducer(initialState, setTypedValue(typedValue));
    expect(actual.typedValue).toEqual(typedValue);
  });

  it('should handle setNewSearchValue', () => {
    const state = { ...initialState, typedValue: 'new search' };
    const actual = appReducer(state, setNewSearchValue());
    expect(actual.params.query).toEqual('new search');
    expect(actual.params.storedValue).toEqual('new search');
  });

  it('should handle setClickedUser', () => {
    const user: User = {
      login: 'clickedUser',
      id: 1,
      node_id: '',
      avatar_url: '',
      gravatar_id: '',
      url: '',
      html_url: '',
      followers_url: '',
      following_url: '',
      gists_url: '',
      starred_url: '',
      subscriptions_url: '',
      organizations_url: '',
      repos_url: '',
      events_url: '',
      received_events_url: '',
      type: '',
      site_admin: false,
      score: 0,
    };
    const actual = appReducer(initialState, setClickedUser(user));
    expect(actual.clickedUser).toEqual(user);
  });
});
