
import selectedElementsReducer, {
  setAddToStoredElement,
  setClearStoredElements,
  setSelectedElement,
  setRemoveStoredElementById,
} from './selectedElementsSlice';
import { UserItem } from '../types';
import { initialState } from './selectedElementsSlice';
describe('selectedElements slice', () => {
  it('should handle initial state', () => {
    expect(selectedElementsReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  it('should handle setAddToStoredElement (add)', () => {
    const user: UserItem = { login: "",
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
        score: 0 };
    const actual = selectedElementsReducer(initialState, setAddToStoredElement(user));
    expect(actual.storedElements).toContainEqual(user);
  });

  it('should handle setAddToStoredElement (remove)', () => {
    const user: UserItem = {login: "",
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
        score: 0 };
    const stateWithUser = { ...initialState, storedElements: [user] };
    const actual = selectedElementsReducer(stateWithUser, setAddToStoredElement(user));
    expect(actual.storedElements).not.toContainEqual(user);
  });

  it('should handle setRemoveStoredElementById', () => {
    const user: UserItem = {login: "",
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
    };
    const stateWithUser = { ...initialState, storedElements: [user] };
    const actual = selectedElementsReducer(stateWithUser, setRemoveStoredElementById(user.id));
    expect(actual.storedElements).not.toContainEqual(user);
  });

  it('should handle setClearStoredElements', () => {
    const user: UserItem = { login: "",
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
     };
    const stateWithUser = { ...initialState, storedElements: [user] };
    const actual = selectedElementsReducer(stateWithUser, setClearStoredElements());
    expect(actual.storedElements).toEqual([]);
  });

  it('should handle setSelectedElement', () => {
    const user: UserItem = {login: "",
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
    };
    const actual = selectedElementsReducer(initialState, setSelectedElement(user));
    expect(actual.selectedElement).toEqual(user);
  });

  it('should handle setSelectedElement with null', () => {
    const actual = selectedElementsReducer(initialState, setSelectedElement(null));
    expect(actual.selectedElement).toBeNull();
  });

  it('should handle setSelectedElement with undefined', () => {
    const actual = selectedElementsReducer(initialState, setSelectedElement(undefined));
    expect(actual.selectedElement).toBeNull();
  });
});
