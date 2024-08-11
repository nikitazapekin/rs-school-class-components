 
import { AppDispatch } from '../store';
 
import { setTypedValue } from '../slices/appSlice';
export const setTypedValueActionCreator = (query: string) => (dispatch: AppDispatch) => {
 
    dispatch(setTypedValue(query))
};