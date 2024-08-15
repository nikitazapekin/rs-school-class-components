import { RootState } from '../store';

export const coutrySelector = (state: RootState) => {
    return state.appSlice.countries
//	const appSlice = state.appSlice || {};
//	return appSlice.params || { query: '', offset: 1, limit: 10, storedValue: '' };
};