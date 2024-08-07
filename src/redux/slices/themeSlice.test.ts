import themeReducer, { setTheme } from './themeSlice';

describe('themeSlice', () => {
  // Test initial state
  it('should return the initial state', () => {
    const initialState = {
      isDark: false,
    };

    // Use a valid action type here instead of `undefined`
    const action = { type: 'dummy' };

    expect(themeReducer(undefined, action)).toEqual(initialState);
  });

  // Test reducer functionality
  it('should handle setTheme action', () => {
    const initialState = {
      isDark: false,
    };

    // Test toggling from light to dark
    expect(themeReducer(initialState, setTheme())).toEqual({
      isDark: true,
    });

    // Test toggling from dark to light
    expect(themeReducer({ isDark: true }, setTheme())).toEqual({
      isDark: false,
    });
  });
});
