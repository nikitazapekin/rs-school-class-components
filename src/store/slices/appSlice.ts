import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { store } from '../store';


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
}
const initialState: AppStatee = {
    isLoading: false,
    error: null,
    storedElements: []
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
          //  console.log("USER", action.payload)
            state.storedElements = [...state.storedElements, action.payload];
            //console.log(state.storedElements)

        }
    },
});

export const { setLoading, setError, setAlert, setAddToStoredElement } = appSlicee.actions;
export default appSlicee.reducer;