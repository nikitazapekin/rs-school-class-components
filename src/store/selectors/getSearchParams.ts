import { RootState } from '../store';

export const paramsSelector = (state: RootState) => {
	const appSlice = state.appSlice || {};
	return appSlice.params || { query: '', offset: 1, limit: 10, storedValue: '' };
};
