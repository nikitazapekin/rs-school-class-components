import { setRemoveStoredElementById } from '../slices/selectedElementsSlice';
import { AppDispatch } from '../store';
export const clearStoredElementsByIdActionCreator = (id: number) => (dispatch: AppDispatch) => {
	dispatch(setRemoveStoredElementById(id));
};
