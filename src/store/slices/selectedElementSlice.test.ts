import selectedElementsSlice from "./selectedElementsSlice";
import {
    setAddToStoredElement,
   setClearStoredElements,
   setRemoveStoredElementById,
    setSelectedElement
     
 
} from "./selectedElementsSlice";
 
describe('appReducer sync actions', () => {
    const initialState = {
    
        storedElements: [],

        selectedElement: null
    };
    it('should handle clearing stored elements', () => {
expect(selectedElementsSlice(initialState, setAddToStoredElement(
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
    }
))).toEqual(
    {
    
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
            }
        ],

        selectedElement: null
    }
)
    })
     
});


















describe('appReducer sync actions', () => {
    const initialState = {
    
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
            }
        ],

        selectedElement: null
    };
    it('should handle clearing stored elements', () => {
expect(selectedElementsSlice(initialState, setClearStoredElements())).toEqual(
    {
    
        storedElements: [
            
        ],

        selectedElement: null
    }
)
    })
     
});













describe('appReducer sync actions', () => {
    const initialState = {
    
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
            }
        ],

        selectedElement: null
    };
    it('should handle clearing stored elements', () => {
expect(selectedElementsSlice(initialState, setRemoveStoredElementById(1))).toEqual(
    {
    
        storedElements: [
            
        ],

        selectedElement: null
    }
)
    })
     
});








describe('appReducer sync actions', () => {
    const initialState = {
    
        storedElements: [


      
        ],

        selectedElement: null
    };
    it('should handle clearing stored elements', () => {
expect(selectedElementsSlice(initialState,setSelectedElement(
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
    }

))).toEqual(
    {
    
        storedElements: [
            
        ],

        selectedElement:       {
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
        }
    }
)
    })
     
});
