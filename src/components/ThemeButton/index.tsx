import { useContext } from 'react';
import ThemeContext from '../ThemeContext';
//import './index.scss';
const ThemeButton = () => {
	const { isDark, toggleTheme } = useContext(ThemeContext);
	return (
		<>
			<button className="theme__button" onClick={toggleTheme}>
				Switch Theme {isDark ? 'Dark' : 'Light'}
			</button>
		</>
	);
};

export default ThemeButton;
