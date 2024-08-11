
import React from 'react';
import { useSelector } from 'react-redux';
import { getThemeSelector } from '../../store/selectors/getTheme';
import { useAppDispatch } from '../../hooks/redux';
import { setTheme } from '../../store/slices/themeSlice';
import { CSSProperties } from 'react';

const ThemeButton: React.FC = () => {
  const isDark = useSelector(getThemeSelector);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(setTheme());
  };

  return (
    <button
      style={isDark ? { ...styles.button, ...styles.buttonDark } : styles.button}
      onClick={handleClick}
    >
      Switch Theme {isDark ? 'Dark' : 'Light'}
    </button>
  );
};

const styles: Record<string, CSSProperties> = {
  button: {
    cursor: 'pointer',
    padding: '7px',
    marginLeft: '10px',
    transition: '1s',
    backgroundColor: 'transparent',
    border: 'none',
    color: '#000',
  },
  buttonDark: {
    backgroundColor: 'rgb(90, 90, 190)',
    color: '#fff',
  },
};

export default ThemeButton;
 