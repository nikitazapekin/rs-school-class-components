



import reducer, { setUsers } from "../slices/appSlice"
import { AppStatee } from "../types"
const previousState: AppStatee =  {
    isLoading: false,
    error: null,
    isLoadingUserData: false,
    users: [],
    params: {
        limit: 10,
        offset: 1,
        query: "",
        storedValue: ""
    },
   
}
test('should handle a todo being added to an existing list', () => {
    const expectedState = {
      ...previousState,
      users: [...previousState.users, {
        login: "Nik",
        id: 1,
        node_id: "1",
        avatar_url: "dcdsc",
        gravatar_id: "kjj",
        url: "lmd",
        html_url: "ldm",
        followers_url: "ldmv",
        following_url: "nkdv",
        gists_url: "ndls",
        starred_url: "cmk",
        subscriptions_url: "kekc",
        organizations_url: "kdc",
        repos_url: "mld",
        events_url: "kmd",
        received_events_url: "dclm",
        type: "dlcm",
        site_admin: false,
        score: 22
      }]
    };
  
    expect(reducer(previousState, setUsers([{
        login: "Nik",
        id: 1,
        node_id: "1",
        avatar_url: "dcdsc",
        gravatar_id: "kjj",
        url: "lmd",
        html_url: "ldm",
        followers_url: "ldmv",
        following_url: "nkdv",
        gists_url: "ndls",
        starred_url: "cmk",
        subscriptions_url: "kekc",
        organizations_url: "kdc",
        repos_url: "mld",
        events_url: "kmd",
        received_events_url: "dclm",
        type: "dlcm",
        site_admin: false,
        score: 22
    }]))).toEqual(expectedState);
  });


 




