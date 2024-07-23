



import reducer, { setRemoveStoredElementById } from "../slices/appSlice"
import { AppStatee } from "../types"
const previousState: AppStatee =  {
    isLoading: false,
    error: null,
    storedElements: [{
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
      }, 
      {
        login: "Alex",
        id: 2,
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
      },


      {
        login: "Joe",
        id: 3,
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
      }
    
    
    ],
    users: [],
    params: {
        limit: 10,
        offset: 1,
        query: "",
        storedValue: ""
    },
    selectedElement: null
}
test('should handle a todo being added to an existing list', () => {
    const expectedState = {
        isLoading: false,
        error: null,
        storedElements: [
            {
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
              }, 
           
              {
                login: "Joe",
                id: 3,
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
              }
            

        ],
        users: [],
        params: {
            limit: 10,
            offset: 1,
            query: "",
            storedValue: ""
        },
        selectedElement: null
    };
  
    expect(reducer(previousState, setRemoveStoredElementById(2))).toEqual(expectedState);
  });

