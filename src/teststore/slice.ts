import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AppState {
  test: string;
}

const initialState: AppState = {
  test: '',
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setTest(state, action: PayloadAction<string>) {
      state.test = action.payload;
      console.log("test")
    },
  },
});

export const { setTest } = appSlice.actions;
export default appSlice.reducer;


/*
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AppState {
  test: string;
}

const initialState: AppState = {
  test: '',
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setTest(state, action: PayloadAction<string>) {
      state.test = action.payload;
    },
  },
});

export const { setTest } = appSlice.actions;
export default appSlice.reducer;
*/