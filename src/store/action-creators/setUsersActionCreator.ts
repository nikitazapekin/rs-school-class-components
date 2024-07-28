import { setUsers } from '../slices/appSlice';
import { AppDispatch } from '../store';
import { UserDataArray } from '../types';
export const setUsersActionCreator = (data: UserDataArray) => (dispatch: AppDispatch) => {
	dispatch(setUsers(data));
};
