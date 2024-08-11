import { setLoadingUserData } from '../slices/appSlice';
import { AppDispatch } from '../store';
export const setLoadingUserDataActionCreator = (isLoading: boolean) => (dispatch: AppDispatch) => {
	dispatch(setLoadingUserData(isLoading));
};