import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppStatee, UserDataArray,  SearchTypes } from '../types';
const initialState: AppStatee = {
    isLoading: false,
    error: null,
 //   storedElements: [],
    users: [],
    params: {
        limit: 10,
        offset: 1,
        query: "",
        storedValue: ""
    },
   // selectedElement: null
};
const appSlicee = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setLoading(state, action: PayloadAction<boolean>) {
            state.isLoading = action.payload;
        },
        setError(state, action: PayloadAction<string | null>) {
            state.error = action.payload;
        },
  /*      setAddToStoredElement(state, action: PayloadAction<UserItem>) {
            if (!state.storedElements.some(item => item.id == action.payload.id)) {
                state.storedElements = [...state.storedElements, action.payload];
            } else {
                state.storedElements = state.storedElements.filter(item => item.id != action.payload.id)
            }
        }, 
        setRemoveStoredElementById(state, action: PayloadAction<number>) {
            
        state.storedElements = state.storedElements.filter(item => item.id != action.payload)
    },
        setClearStoredElements(state) {
            state.storedElements = []
        },
        */
       
        setSearchParamsURL(state, action: PayloadAction<SearchTypes>) {
            console.log(action.payload)

            state.params.query = action.payload.query
            state.params.offset = action.payload.offset
        },
        setFirstPage(state) {
            state.params.offset = 1
        },
        setNextPage(state) {
            state.params.offset = state.params.offset + 1
        },
        setPrevPage(state) {
            state.params.offset = state.params.offset - 1
        },
        setQueryPage(state, action: PayloadAction<string>) {
            state.params.query = action.payload
        },
        setUsers(state, action: PayloadAction<UserDataArray>) {
            state.users = action.payload
        },
        setStoredInLocalStorageQuery(state, action: PayloadAction<string>) {
            state.params.storedValue = action.payload;
            state.params.query = action.payload;
        },
        /*
        setSelectedElement(state, action: PayloadAction<UserItem | undefined | null>) {
            if (action.payload != null && action.payload != undefined) {
                state.selectedElement = action.payload

            }
            console.log(state.selectedElement)
        }
            */
    },
});
export const { setLoading, setError, 
    //setAddToStoredElement,
    // setClearStoredElements,  
    setSearchParamsURL,
    setNextPage,
    setPrevPage,
    setQueryPage,
    setUsers,
    setFirstPage,
    setStoredInLocalStorageQuery,
  //  setSelectedElement,
   // setRemoveStoredElementById
} = appSlicee.actions;
export default appSlicee.reducer;