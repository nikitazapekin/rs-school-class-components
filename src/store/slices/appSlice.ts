import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface UserItem {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
    score: number;
}
export type UserDataArray = Array<{
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
    score: number;

}>;
export interface AppStatee {
    isLoading: boolean;
    error: string | null;
    storedElements: UserDataArray;
    users: UserDataArray;
    isModalOpen: boolean,
    params: {
        limit: number,
        offset: number,
        query: string,
        storedValue: string

    },
}

export interface SearchTypes {
    query: string,
    offset: number,
}
const initialState: AppStatee = {
    isLoading: false,
    error: null,
    storedElements: [],
    users: [],
    isModalOpen: false,
    params: {

        limit: 10,
        offset: 1,
        query: "",
        storedValue: ""
    },
};
const appSlicee = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setAlert(state, action: PayloadAction<number>) {
            console.log(1111)
        },
        setLoading(state, action: PayloadAction<boolean>) {
            state.isLoading = action.payload;
        },
        setError(state, action: PayloadAction<string | null>) {
            state.error = action.payload;
        },

        setAddToStoredElement(state, action: PayloadAction<UserItem>) {
            state.storedElements = [...state.storedElements, action.payload];
        },
        setModalOpen(state) {
            state.isModalOpen = !state.isModalOpen
        },
        setClearStoredElements(state) {
            state.storedElements = []
        },
        setRemoveStoredElementById(state, action: PayloadAction<number>) {
            if (state.storedElements.length == 1) {
                state.isModalOpen = !state.isModalOpen
            }


            state.storedElements = state.storedElements.filter(item => item.id != action.payload)
        },
        setSearchParamsURL(state, action: PayloadAction<SearchTypes>) {
            console.log(action.payload)

            state.params.query = action.payload.query
            state.params.offset =action.payload.offset
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
        }

    },
});

export const { setLoading, setError, setAlert, setAddToStoredElement,
    setModalOpen, setClearStoredElements, setRemoveStoredElementById,
    setSearchParamsURL,
    setNextPage,
    setPrevPage,
    setQueryPage,
    setUsers,
    setFirstPage,
    setStoredInLocalStorageQuery
} = appSlicee.actions;
export default appSlicee.reducer;