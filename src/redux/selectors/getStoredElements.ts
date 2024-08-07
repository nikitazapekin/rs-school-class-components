/*
import { RootState } from '../store';
export const storedUsersSelector = (state: RootState) => state.selectedElementsSlice.storedElements || [];
*/
import { RootState } from '../store';

export const storedUsersSelector = (state: RootState) => state.selectedElementsSlice?.storedElements || [];
