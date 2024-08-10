import { CSSProperties } from 'react';
import { useSelector } from 'react-redux';
import { getThemeSelector } from '../../store/selectors/getTheme';

const Background = () => {
	const isDark = useSelector(getThemeSelector);

	const backgroundStyle: CSSProperties = {
		backgroundColor: isDark ? 'rgb(59, 59, 59)' : 'aliceblue',
		width: '100%',
		minHeight: '100vh',
		height: '100%',
		position: 'fixed',
		left: 0,
		top: 0,
		zIndex: -111,
		transition: '1s',
	};

	return (
		<div style={backgroundStyle} data-testid="background">
			{' '}
		</div>
	);
};

export default Background;


/*

import { useSelector } from 'react-redux';
import { getThemeSelector } from '../../store/selectors/getTheme';
const Background = () => {
	 const isDark = useSelector(getThemeSelector)
	return (
		<div className={`background ${isDark ? `background-dark` : ''}`} data-testid="background">
			{' '}
		</div>
	);
};

export default Background;

 */