import reducer, { setLoading } from '../../src/store/slices/appSlice';
import { AppStatee } from '../../src/store/types';
import { describe,test, it, expect, vi } from 'vitest';
const previousState: AppStatee = {
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
		offset: 1,
		query: '',
		storedValue: '',
	},
};
test('should handle a todo being added to an existing list', () => {
	const expectedState = {
		isLoading: true,
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
			offset: 1,
			query: '',
			storedValue: '',
		},
	};

	expect(reducer(previousState, setLoading(true))).toEqual(expectedState);
});