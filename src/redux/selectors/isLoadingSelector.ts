import { RootState } from '../store';
export const isLoadingSelector = (state: RootState) => state.appSlice.isLoading;
//export const isLoadingSelector = (state: RootState) => false;