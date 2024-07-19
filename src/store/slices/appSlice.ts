import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export interface AppStatee {
    isLoading: boolean;
    error: string | null;
}
const initialState: AppStatee = {
    isLoading: false,
    error: null,
};
const appSlicee = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setAlert(state, action: PayloadAction<number>) {
            console.log(1111)
        },
        setLoading(state, action: PayloadAction<boolean>) {
            state.isLoading = action.payload;
        },
        setError(state, action: PayloadAction<string | null>) {
            state.error = action.payload;
        },
    },
});

export const { setLoading, setError, setAlert } = appSlicee.actions;
export default appSlicee.reducer;