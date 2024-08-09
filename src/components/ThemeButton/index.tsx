 

//import './index.scss';
import { useSelector } from 'react-redux';
import { getThemeSelector } from "../../store/selectors/getTheme"

import { useAppDispatch } from '../../hooks/redux';
import { setTheme } from '../../store/slices/themeSlice';
const ThemeButton = () => {
	const isDark  = useSelector(getThemeSelector)
	const dispatch = useAppDispatch()
	const handleClick = () => {
		dispatch(setTheme())
	}
	return (
		<>
			<button className="theme__button" onClick={handleClick}>
				Switch Theme {isDark ? 'Dark' : 'Light'}
			</button>
		</>
	);
};

export default ThemeButton;
