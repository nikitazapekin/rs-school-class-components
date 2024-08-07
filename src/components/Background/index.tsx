 
import styles from "./index.module.scss";
import { useSelector } from 'react-redux';
import { getThemeSelector } from '../../redux/selectors/getTheme';
import React from "react";
const Background = () => {
	const isDark = useSelector(getThemeSelector)
	 
	return (
		<div className={`${styles.background} ${isDark ? styles['background-dark'] : ''}`} data-testid="background">
 
		</div>
	);
};

export default Background;
