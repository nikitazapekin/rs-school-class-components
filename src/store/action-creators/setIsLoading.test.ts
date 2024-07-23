



import reducer, {setLoading } from "../slices/appSlice"
import { AppStatee } from "../types"
const previousState: AppStatee =  {
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
        isLoading: true,
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
  
    expect(reducer(previousState, setLoading(true))).toEqual(expectedState);
  });

