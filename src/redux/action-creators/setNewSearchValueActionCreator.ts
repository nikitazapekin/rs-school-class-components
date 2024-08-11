import {  setNewSearchValue } from '../slices/appSlice';
import { AppDispatch } from '../store';
export const setNewSearchValueActionCreator =()=>  (dispatch: AppDispatch) => {
dispatch(setNewSearchValue())
};
