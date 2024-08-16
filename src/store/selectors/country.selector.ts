import { RootState } from '../store';

export const coutrySelector = (state: RootState) => {
    return state.appSlice.countries
};