import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './index.scss';
import ThemeButton from '../ThemeButton';
import { useContext } from 'react';
import ThemeContext from '../ThemeContext';
import useURL from '../../hooks/useURL';
//import useURL from '@/hooks/useURL';
const Header = () => {
	const { isDark } = useContext(ThemeContext);
	const { handleInput, handleRedirect, handleSearch } = useURL();
	return (
		<header className={`header ${isDark ? `header-dark` : ''}`}>
			<div className="header__content">
				<nav className="header__search">
					<input type="text" className="search__bar" placeholder="Search..." onChange={handleInput} />
					<button className="search__btn" onClick={handleSearch} aria-label="search">
						<FontAwesomeIcon icon={faSearch} />
					</button>
				</nav>
				<button className="redirect__btn" onClick={handleRedirect}>
					Redirect to error page
				</button>
				<ThemeButton />
			</div>
		</header>
	);
};
export default Header;
