import { RootState } from '../store';
export const getThemeSelector = (state: RootState) => state.themeSlice?.isDark || false
 