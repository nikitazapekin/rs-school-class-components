import { useContext } from 'react';
import ThemeContext from '../ThemeContext';
import styles from "./index.module.scss";

const Background = () => {
	const { isDark } = useContext(ThemeContext);
	return (
		<div className={`${styles.background} ${isDark ? styles['background-dark'] : ''}`} data-testid="background">
 
		</div>
	);
};

export default Background;
