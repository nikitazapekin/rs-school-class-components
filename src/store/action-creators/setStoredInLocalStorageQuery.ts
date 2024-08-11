import { setStoredInLocalStorageQuery } from '../slices/appSlice';
import { AppDispatch } from '../store';
export const setStoredInLocalStorageActionCreator = (query: string) => (dispatch: AppDispatch) => {
	dispatch(setStoredInLocalStorageQuery(query));
};
