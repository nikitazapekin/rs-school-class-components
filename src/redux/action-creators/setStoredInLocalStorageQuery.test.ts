import reducer, { setStoredInLocalStorageQuery } from '../slices/appSlice';
import { AppStatee } from '../types';
const previousState: AppStatee = {
	isLoading: false,
	typedValue: "",
	status: "idle",
	error: null,
	isLoadingUserData: false,
	users: [],
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
		typedValue: "",
		status: "idle",
		isLoadingUserData: false,
		users: [],
		params: {
			limit: 10,
			offset: 1,
			query: 'test',
			storedValue: 'test',
		},
	};

	expect(reducer(previousState, setStoredInLocalStorageQuery('test'))).toEqual(expectedState);
});
