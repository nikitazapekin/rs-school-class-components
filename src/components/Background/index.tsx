 
import './index.scss';
import { useSelector } from 'react-redux';
import { getThemeSelector } from '@/store/selectors/getTheme';
const Background = () => {
	 const isDark = useSelector(getThemeSelector)
	return (
		<div className={`background ${isDark ? `background-dark` : ''}`} data-testid="background">
			{' '}
		</div>
	);
};

export default Background;




