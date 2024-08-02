import { AppDispatch } from '../store';
import { UserItem } from '../types';
export const setSelectedElementActionCreator = (data: UserItem | null | undefined) => (dispatch: AppDispatch) => {
	dispatch(setSelectedElementActionCreator(data));
};
