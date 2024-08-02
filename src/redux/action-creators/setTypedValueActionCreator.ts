import { setUsers } from '../slices/appSlice';
import { AppDispatch } from '../store';
import { UserDataArray } from '../types';
import { setTypedValue } from '../slices/appSlice';
export const setTypedValueActionCreator = (query: string) => (dispatch: AppDispatch) => {
	//dispatch(setUsers(data));
    dispatch(setTypedValue(query))
};