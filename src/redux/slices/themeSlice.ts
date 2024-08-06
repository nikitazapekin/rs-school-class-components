import { createSlice  } from '@reduxjs/toolkit';
import {  UserDataArray } from '../types';
 
export interface UserData {
	total_count: number;
	incomplete_results: boolean;
	items: UserDataArray;
}
 
interface ThemeSlice {
    isDark: boolean
}
  

  
const initialState: ThemeSlice = {
 isDark: false
   
};
const themeSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		setTheme(state) {
			state.isDark = !state.isDark
		},
	 
	},

 

});
export const {
setTheme
} = themeSlice.actions;
export default themeSlice.reducer;
