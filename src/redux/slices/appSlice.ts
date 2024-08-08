import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { AppStatee, SearchTypes, User, UserDataArray } from '../types';


export interface UserData {
	total_count: number;
	incomplete_results: boolean;
	items: UserDataArray;
}


export const initialState: AppStatee = {
	isLoading: false,
	error: null,
	isLoadingUserData: false,
	users: [],
	typedValue: "",
	params: {
		limit: 10,
		offset: 1,
		query: '',
		storedValue: '',
	},
	status: 'idle',
	clickedUser: {
		login: "",
	id: 0,
	node_id:"" ,
	avatar_url: "",
	gravatar_id:"" ,
	url:"" ,
	html_url:"" ,
	followers_url: "",
	following_url:"" ,
	gists_url: "",
	starred_url: "",
	subscriptions_url:  "",
	organizations_url: "",
	repos_url:"" ,
	events_url:"" ,
	received_events_url:"" ,
	type: "",
	site_admin: false,
	score: 0
	}
   
};
const appSlicee = createSlice({
	name: 'app',
	initialState,
	reducers: {
		setLoading(state, action: PayloadAction<boolean>) {
			state.isLoading = action.payload;
		},
		setLoadingUserData(state, action: PayloadAction<boolean>) {
			state.isLoadingUserData = action.payload;
		},
		setError(state, action: PayloadAction<string | null>) {
			state.error = action.payload;
		},

		setSearchParamsURL(state, action: PayloadAction<SearchTypes>) {
			state.params.query = action.payload.query;
			state.params.offset = action.payload.offset;
		},
		setFirstPage(state) {
			state.params.offset = 1;
		},
		setNextPage(state) {
			state.params.offset = state.params.offset + 1;
		},
		setPrevPage(state) {
			state.params.offset = state.params.offset - 1;
		},
		setQueryPage(state, action: PayloadAction<string>) {
			console.log("PAYLOAD", action.payload)
			state.params.query = action.payload;
			console.log("NEW PARAMS", state.params)
		},
		setUsers(state, action: PayloadAction<UserDataArray>) {
			state.users = action.payload;
		},
		setStoredInLocalStorageQuery(state, action: PayloadAction<string>) {
			state.params.storedValue = action.payload;
			state.params.query = action.payload;
		},
		setTypedValue(state, action: PayloadAction<string>) {
		state.typedValue = action.payload
		},
		setNewSearchValue(state) {
		//	state.typedValue = action.payload
		state.params.query=state.typedValue
		state.params.storedValue=state.typedValue
		state.params.offset=1
			},
			setClickedUser(state, action: PayloadAction<User>) {
				//	state.typedValue = action.payload
			//	state.params.query=state.typedValue
			//	state.params.storedValue=state.typedValue
			state.clickedUser = action.payload
			console.log("CLICKE", JSON.stringify(state.clickedUser))
					},
	},




});
export const {
	setLoading,
	setError,
	setLoadingUserData,
	setSearchParamsURL,
	setNextPage,
	setPrevPage,
	setQueryPage,
	setUsers,
	setFirstPage,
	setStoredInLocalStorageQuery,
	setTypedValue,
	setNewSearchValue,
	setClickedUser
} = appSlicee.actions;
export default appSlicee.reducer;
