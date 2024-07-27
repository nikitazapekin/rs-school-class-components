
import appSlice from "./appSlice";
import {
    
     setLoading,
  

    setSearchParamsURL,
    setNextPage,
    setPrevPage,
    setQueryPage,
    setUsers,
    setFirstPage,
    setStoredInLocalStorageQuery,
 
} from "./appSlice";
 
describe('appReducer sync actions', () => {
    const initialState = {
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
      
    };

    it('should handle clearing stored elements', () => {
        expect(appSlice(initialState, setLoading(true))).toEqual({
            isLoading: true,
            error: null,
            isLoadingUserData: false,
            users: [],
            params: {
                limit: 10,
                offset: 1,
                query: "",
                storedValue: ""
            },
        
        });
    });



});





 







describe('appReducer sync actions', () => {
    const initialState = {
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
      
    };

    it('should handle clearing stored elements', () => {
        expect(appSlice(initialState,
            setSearchParamsURL({ query: "test", offset: 10 })

        )).toEqual({
            isLoading: false,
            error: null,
            isLoadingUserData: false,
            users: [],
            params: {
                limit: 10,
                offset: 10,
                query: "test",
                storedValue: ""
            },
            
        });
    });


})






describe('appReducer sync actions', () => {
    const initialState = {
        isLoading: false,
        error: null,
        users: [],
        isLoadingUserData: false,
        params: {
            limit: 10,
            offset: 1,
            query: "",
            storedValue: ""
        },
    };

    it('should handle clearing stored elements', () => {
        expect(appSlice(initialState,
          setNextPage()

        )).toEqual({
            isLoading: false,
            error: null,
            users: [],
            isLoadingUserData: false,
            params: {
                limit: 10,
                offset: 2,
                query: "",
                storedValue: ""
            },
        });
    });


})







describe('appReducer sync actions', () => {
    const initialState = {
        isLoading: false,
        error: null,
        isLoadingUserData: false,
        users: [],
        params: {
            limit: 10,
            offset: 2,
            query: "",
            storedValue: ""
        },
    };

    it('should handle clearing stored elements', () => {
        expect(appSlice(initialState,
          setPrevPage()

        )).toEqual({
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
        });
    });


})










describe('appReducer sync actions', () => {
    const initialState = {
        isLoading: false,
        error: null,
        
        users: [],
        isLoadingUserData: false,
        params: {
            limit: 10,
            offset: 1,
            query: "",
            storedValue: ""
        },
      
    };

    it('should handle clearing stored elements', () => {
        expect(appSlice(initialState,
         setQueryPage("test")

        )).toEqual({
            isLoading: false,
            error: null,
            users: [],
            isLoadingUserData: false,
            params: {
                limit: 10,
                offset: 1,
                query: "test",
                storedValue: ""
            },
        });
    });


})



describe('appReducer sync actions', () => {
    const initialState = {
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
    };

    it('should handle clearing stored elements', () => {
        expect(appSlice(initialState,
      
setUsers([
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
])
        )).toEqual({
            isLoading: false,
            error: null,
            isLoadingUserData: false,
            users: [
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
            params: {
                limit: 10,
                offset: 1,
                query: "",
                storedValue: ""
            },
         
        });
    });


})
 

    describe('appReducer sync actions', () => {
        const initialState = {
            isLoading: false,
            error: null,
            isLoadingUserData: false,
            users: [],
            params: {
                limit: 10,
                offset: 3,
                query: "",
                storedValue: ""
            },
            
        };
    
        it('should handle clearing stored elements', () => {
            expect(appSlice(initialState,
        setFirstPage()
    
            )).toEqual({
                isLoading: false,
                error: null,
                isLoadingUserData: false,
                users: [
                  
                ],
                params: {
                    limit: 10,
                    offset: 1,
                    query: "",
                    storedValue: ""
                },
               
            });
        });
    
    
    })





    describe('appReducer sync actions', () => {
        const initialState = {
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
          
        };
    
        it('should handle clearing stored elements', () => {
            expect(appSlice(initialState,
      setStoredInLocalStorageQuery("test")
            )).toEqual({
                isLoading: false,
                error: null,
                isLoadingUserData: false,
                users: [
                  
                ],
                params: {
                    limit: 10,
                    offset: 1,
                    query: "test",
                    storedValue: "test"
                },
               
            });
        });
    
    
    })







