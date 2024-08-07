import React from "react";
import styles from "./index.module.scss";
import { useAppDispatch } from "../../../hooks/redux";
import { useSelector } from 'react-redux';
import { getThemeSelector } from "../../../redux/selectors/getTheme";
import { SetIsDarkActionCreator } from "../../../redux/action-creators/setIsDark";
 
const ThemeButton = () => {
	const dispatch = useAppDispatch()
	const isDark = useSelector(getThemeSelector)
	const handleSwith = () => {
		dispatch(SetIsDarkActionCreator())
	}
	return (
		<button className={styles.theme__button} onClick={handleSwith}>
			Switch Theme {isDark ? 'Dark' : 'Light'}
		</button>
	);
};

export default ThemeButton;