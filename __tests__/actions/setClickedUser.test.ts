import reducer, { setClickedUser } from '../../src/store/slices/appSlice';
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
		isLoading: false,
		error: null,
		isLoadingUserData: false,
		users: [],
        status: 'idle',
        clickedUser: {
            login: "1",
            id: 1,
        node_id:"1" ,
        avatar_url: "1",
        gravatar_id:"1" ,
        url:"1" ,
        html_url:"1" ,
        followers_url: "1",
        following_url:"1" ,
        gists_url: "1",
        starred_url: "1",
        subscriptions_url:  "1",
        organizations_url: "1",
        repos_url:"1" ,
        events_url:"1" ,
        received_events_url:"1" ,
        type: "1",
        site_admin: false,
        score: 1
        },
        typedValue: "",
		params: {
			limit: 10,
			offset: 1,
			query: '',
			storedValue: '',
		},
	};

	expect(reducer(previousState, setClickedUser(
        {

            login: "1",
            id: 1,
        node_id:"1" ,
        avatar_url: "1",
        gravatar_id:"1" ,
        url:"1" ,
        html_url:"1" ,
        followers_url: "1",
        following_url:"1" ,
        gists_url: "1",
        starred_url: "1",
        subscriptions_url:  "1",
        organizations_url: "1",
        repos_url:"1" ,
        events_url:"1" ,
        received_events_url:"1" ,
        type: "1",
        site_admin: false,
        score: 1
    }
    ))).toEqual(expectedState);
});