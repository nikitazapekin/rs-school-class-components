import { store } from './store';
import { githubApi } from './slices/querySlice';
import { usersGithubApi } from './slices/userQuerySlice';

describe('Redux Store', () => {
	it('should be configured correctly', () => {
		expect(store).toBeDefined();

		const state = store.getState();
		expect(state).toHaveProperty('appSlice');
		expect(state).toHaveProperty('selectedElementsSlice');
		expect(state).toHaveProperty(githubApi.reducerPath);
		expect(state).toHaveProperty(usersGithubApi.reducerPath);
	});
});
