import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SelectedElementsState, UserItem } from '../types';
export const initialState: SelectedElementsState = {
	storedElements: [],

	selectedElement: null,
};
const selectedElementsSlice = createSlice({
	name: 'selectedElements',
	initialState,
	reducers: {
		setAddToStoredElement(state, action: PayloadAction<UserItem>) {
			if (!state.storedElements.some((item) => item.id == action.payload.id)) {
				state.storedElements = [...state.storedElements, action.payload];
			} else {
				state.storedElements = state.storedElements.filter((item) => item.id != action.payload.id);
			}
		},
		setRemoveStoredElementById(state, action: PayloadAction<number>) {
			state.storedElements = state.storedElements.filter((item) => item.id != action.payload);
		},
		setClearStoredElements(state) {
			state.storedElements = [];
		},
		setSelectedElement(state, action: PayloadAction<UserItem | undefined | null>) {
			if (action.payload != null && action.payload != undefined) {
				state.selectedElement = action.payload;
			}
		},
	},
});
export const { setAddToStoredElement, setClearStoredElements, setSelectedElement, setRemoveStoredElementById } =
	selectedElementsSlice.actions;
export default selectedElementsSlice.reducer;
