import { RootState } from '../store';

export const errorsSelector = (state: RootState) => {
    return state.appSlice.formErrors
};