import { store } from './store';


describe('Redux Store', () => {
	it('should be configured correctly', () => {
		expect(store).toBeDefined();

		const state = store.getState();
		expect(state).toHaveProperty('appSlice');
		expect(state).toHaveProperty('selectedElementsSlice');
		 
	});
});
