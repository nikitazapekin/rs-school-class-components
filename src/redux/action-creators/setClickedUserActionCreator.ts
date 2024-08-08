
import { AppDispatch } from '../store';
import { UserItem } from '../types';
import { setClickedUser } from '../slices/appSlice';
export const SetClickedUserActionCreator = (user: UserItem) => (dispatch: AppDispatch) => {
    dispatch(setClickedUser(user))
};
