import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './index.scss';
import ThemeButton from '../ThemeButton';
import useURL from '@/hooks/useURL';
import { useSelector } from 'react-redux';
import { getThemeSelector } from '@/store/selectors/getTheme';
import { Link } from '@remix-run/react';
const Header = () => {
const isDark = useSelector(getThemeSelector)
	const { handleInput, handleSearch 
	} = useURL();
	return (
		<header className={`header ${isDark ? `header-dark` : ''}`}>
			<div className="header__content">
				<nav className="header__search">
					<input type="text" className="search__bar" placeholder="Search..." onChange={handleInput} />
					<button className="search__btn" onClick={handleSearch}
					 aria-label="search">
						<FontAwesomeIcon icon={faSearch} />
					</button>
				</nav>
			 
				<Link to="/dcfewfe">
				Redirect to not found page
				</Link>
				<ThemeButton />
			</div>
		</header>
	);
};
export default Header;
