import { RootState } from '../store';
export const storedUsersSelector = (state: RootState) => state.selectedElementsSlice.storedElements || [];
//export const storedUsersSelector = (state: RootState) => [];