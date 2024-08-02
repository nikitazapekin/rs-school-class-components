import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SelectedElementsState, UserItem } from '../types';
const initialState: SelectedElementsState = {
	storedElements: [],

	selectedElement: null,
};
const testSlice = createSlice({
	name: 'selectedElements',
	initialState,
	reducers: {
        setTest(state ) {

            console.log("test")
        }
	
	 
	},
});
export const { setTest } =
	testSlice.actions;
export default testSlice.reducer;
