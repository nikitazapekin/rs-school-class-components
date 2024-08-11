import themeReducer, { setTheme } from  "../../src/store/slices/themeSlice"
import { describe, expect, it, vi } from 'vitest';
describe('themeSlice', () => {
 
  it('should return the initial state', () => {
    const initialState = {
      isDark: false,
    };

 
    const action = { type: 'dummy' };

    expect(themeReducer(undefined, action)).toEqual(initialState);
  });

 
  it('should handle setTheme action', () => {
    const initialState = {
      isDark: false,
    };

 
    expect(themeReducer(initialState, setTheme())).toEqual({
      isDark: true,
    });
 
    expect(themeReducer({ isDark: true }, setTheme())).toEqual({
      isDark: false,
    });
  });
});