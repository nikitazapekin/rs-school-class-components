import reducer, { setFirstPage, setNextPage, setPrevPage, setSearchParamsURL, setQueryPage } from "../slices/appSlice";
import { AppStatee } from "../types";

// Initial state for testing
const initialState: AppStatee = {
    isLoading: false,
    error: null,
    isLoadingUserData: false,
    users: [],
    params: {
        limit: 10,
        offset: 10,
        query: "",
        storedValue: ""
    },
};

// Test for setting the first page
test('should set offset to 1 on setFirstPage action', () => {
    const expectedState = {
        ...initialState,
        params: {
            ...initialState.params,
            offset: 1
        },
    };

    expect(reducer(initialState, setFirstPage())).toEqual(expectedState);
});

// Test for setting the previous page
test('should decrement offset by 1 on setPrevPage action', () => {
    const prevState: AppStatee = {
        ...initialState,
        params: {
            ...initialState.params,
            offset: 10
        },
    };

    const expectedState = {
        ...prevState,
        params: {
            ...prevState.params,
            offset: 9
        },
    };

    expect(reducer(prevState, setPrevPage())).toEqual(expectedState);
});

// Test for setting the next page
test('should increment offset by 1 on setNextPage action', () => {
    const prevState: AppStatee = {
        ...initialState,
        params: {
            ...initialState.params,
            offset: 10
        },
    };

    const expectedState = {
        ...prevState,
        params: {
            ...prevState.params,
            offset: 11
        },
    };

    expect(reducer(prevState, setNextPage())).toEqual(expectedState);
});

// Test for setting search parameters
test('should update offset and query on setSearchParamsURL action', () => {
    const newParams = { offset: 5, query: "test" };
    const expectedState = {
        ...initialState,
        params: {
            ...initialState.params,
            ...newParams
        },
    };

    expect(reducer(initialState, setSearchParamsURL(newParams))).toEqual(expectedState);
});

// Test for setting query
test('should update query on setQueryPage action', () => {
    const newQuery = "test";
    const prevState: AppStatee = {
        ...initialState,
        params: {
            ...initialState.params,
            query: ""
        },
    };

    const expectedState = {
        ...prevState,
        params: {
            ...prevState.params,
            query: newQuery
        },
    };

    expect(reducer(prevState, setQueryPage(newQuery))).toEqual(expectedState);
});

/*
import reducer, {setFirstPage, setNextPage, setPrevPage, setSearchParamsURL, setQueryPage} from "../slices/appSlice"
import { AppStatee } from "../types"
const previousState: AppStatee =  {
    isLoading: false,
    error: null,
    isLoadingUserData: false,
    users: [],
    params: {
        limit: 10,
        offset: 10,
        query: "",
        storedValue: ""
    },
   
}
test('should handle a todo being added to an existing list', () => {
    const expectedState = {
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
  
    expect(reducer(previousState, setFirstPage())).toEqual(expectedState);
  });


  const previousState1: AppStatee =  {
    isLoading: false,
    error: null,
    isLoadingUserData: false,
    users: [],
    params: {
        limit: 10,
        offset: 10,
        query: "",
        storedValue: ""
    },
     
}
test('should handle a todo being added to an existing list', () => {
    const expectedState = {
        isLoading: false,
        error: null,
        isLoadingUserData: false,
        users: [],
        params: {
            limit: 10,
            offset: 9,
            query: "",
            storedValue: ""
        },
     
    };
  
    expect(reducer(previousState2,setPrevPage())).toEqual(expectedState);
  });





  

  const previousState2: AppStatee =  {
    isLoading: false,
    error: null,
    isLoadingUserData: false,
    users: [],
    params: {
        limit: 10,
        offset: 10,
        query: "",
        storedValue: ""
    },
    
}
test('should handle a todo being added to an existing list', () => {
    const expectedState = {
        isLoading: false,
        error: null,
        isLoadingUserData: false,
        users: [],
        params: {
            limit: 10,
            offset: 11,
            query: "",
            storedValue: ""
        },
       
    };
  
    expect(reducer(previousState1,setNextPage())).toEqual(expectedState);
  });






  

  

  const previousState3: AppStatee =  {
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
       
    };
  
    expect(reducer(previousState3,setSearchParamsURL({offset:10, query: "test"}))).toEqual(expectedState);
  });





  
  

  const previousState4: AppStatee =  {
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
        isLoading: false,
        error: null,
        isLoadingUserData: false,
        users: [],
        params: {
            limit: 10,
            offset: 1,
            query: "test",
            storedValue: ""
        },

    };
  
    expect(reducer(previousState4, setQueryPage("test"))).toEqual(expectedState);
  });

*/