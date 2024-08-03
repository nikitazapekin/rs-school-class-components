import { useContext } from 'react';
import ThemeContext from '../ThemeContext';
import styles from "./index.module.scss";

const ThemeButton = () => {
	const { isDark, toggleTheme } = useContext(ThemeContext);
	return (
		<button className={styles.theme__button} onClick={toggleTheme}>
			Switch Theme {isDark ? 'Dark' : 'Light'}
		</button>
	);
};

export default ThemeButton;
