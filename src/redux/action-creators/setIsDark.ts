 
import { AppDispatch } from '../store';
import { setTheme } from '../slices/themeSlice';
export const SetIsDarkActionCreator = ( ) => (dispatch: AppDispatch) => {
	 
    dispatch(setTheme())
};
