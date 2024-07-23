

import reducer, {setFirstPage, setNextPage, setPrevPage, setSearchParamsURL, setQueryPage} from "../slices/appSlice"
import { AppStatee } from "../types"
const previousState: AppStatee =  {
    isLoading: false,
    error: null,
    storedElements: [
    
    ],
    users: [],
    params: {
        limit: 10,
        offset: 10,
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
  
    expect(reducer(previousState, setFirstPage())).toEqual(expectedState);
  });


  const previousState1: AppStatee =  {
    isLoading: false,
    error: null,
    storedElements: [
    
    ],
    users: [],
    params: {
        limit: 10,
        offset: 10,
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
           
        ],
        users: [],
        params: {
            limit: 10,
            offset: 9,
            query: "",
            storedValue: ""
        },
        selectedElement: null
    };
  
    expect(reducer(previousState2,setPrevPage())).toEqual(expectedState);
  });





  

  const previousState2: AppStatee =  {
    isLoading: false,
    error: null,
    storedElements: [
    
    ],
    users: [],
    params: {
        limit: 10,
        offset: 10,
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
           
        ],
        users: [],
        params: {
            limit: 10,
            offset: 11,
            query: "",
            storedValue: ""
        },
        selectedElement: null
    };
  
    expect(reducer(previousState1,setNextPage())).toEqual(expectedState);
  });






  

  

  const previousState3: AppStatee =  {
    isLoading: false,
    error: null,
    storedElements: [
    
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
           
        ],
        users: [],
        params: {
            limit: 10,
            offset: 10,
            query: "test",
            storedValue: ""
        },
        selectedElement: null
    };
  
    expect(reducer(previousState3,setSearchParamsURL({offset:10, query: "test"}))).toEqual(expectedState);
  });





  
  

  const previousState4: AppStatee =  {
    isLoading: false,
    error: null,
    storedElements: [
    
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
           
        ],
        users: [],
        params: {
            limit: 10,
            offset: 1,
            query: "test",
            storedValue: ""
        },
        selectedElement: null
    };
  
    expect(reducer(previousState4, setQueryPage("test"))).toEqual(expectedState);
  });

