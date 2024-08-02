import reducer, { setLoadingUserData } from '../slices/appSlice';
import { AppStatee } from '../types';
const previousState: AppStatee = {
	isLoading: false,
	error: null,
	isLoadingUserData: false,
	users: [],
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
		isLoadingUserData: true,
		users: [],
		params: {
			limit: 10,
			offset: 1,
			query: '',
			storedValue: '',
		},
	};

	expect(reducer(previousState, setLoadingUserData(true))).toEqual(expectedState);
});
