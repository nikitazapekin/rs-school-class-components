import { RootState } from '../store';

export const getReactHookFormParamsSelector = (state: RootState) => {
    return state.appSlice.reactHookForm
};