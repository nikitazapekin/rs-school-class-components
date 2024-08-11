import reducer, { setFirstPage, setNextPage, setPrevPage, setSearchParamsURL, setQueryPage } from '../../src/store/slices/appSlice';
import { AppStatee } from '../../src/store/types';
import {  test,   expect } from 'vitest';
const initialState: AppStatee = {
	isLoading: false,
	error: null,
	isLoadingUserData: false,
	users: [],
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
	},
    typedValue: "",
	params: {
		limit: 10,
		offset: 10,
		query: '',
		storedValue: '',
	},
};

test('should set offset to 1 on setFirstPage action', () => {
	const expectedState = {
		...initialState,
		params: {
			...initialState.params,
			offset: 1,
		},
	};

	expect(reducer(initialState, setFirstPage())).toEqual(expectedState);
});

test('should decrement offset by 1 on setPrevPage action', () => {
	const prevState: AppStatee = {
		...initialState,
		params: {
			...initialState.params,
			offset: 10,
		},
	};

	const expectedState = {
		...prevState,
		params: {
			...prevState.params,
			offset: 9,
		},
	};

	expect(reducer(prevState, setPrevPage())).toEqual(expectedState);
});

test('should increment offset by 1 on setNextPage action', () => {
	const prevState: AppStatee = {
		...initialState,
		params: {
			...initialState.params,
			offset: 10,
		},
	};

	const expectedState = {
		...prevState,
		params: {
			...prevState.params,
			offset: 11,
		},
	};

	expect(reducer(prevState, setNextPage())).toEqual(expectedState);
});

test('should update offset and query on setSearchParamsURL action', () => {
	const newParams = { offset: 5, query: 'test' };
	const expectedState = {
		...initialState,
		params: {
			...initialState.params,
			...newParams,
		},
	};

	expect(reducer(initialState, setSearchParamsURL(newParams))).toEqual(expectedState);
});

test('should update query on setQueryPage action', () => {
	const newQuery = 'test';
	const prevState: AppStatee = {
		...initialState,
		params: {
			...initialState.params,
			query: '',
		},
	};

	const expectedState = {
		...prevState,
		params: {
			...prevState.params,
			query: newQuery,
		},
	};

	expect(reducer(prevState, setQueryPage(newQuery))).toEqual(expectedState);
});