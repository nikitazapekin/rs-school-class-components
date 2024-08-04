import { RootState } from '../store';
export const clickedUserSelector = (state: RootState) => state.appSlice.clickedUser;