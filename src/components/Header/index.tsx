import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './index.scss';
import { HeaderProps } from './types';
import { useNavigate } from 'react-router-dom';
import ThemeButton from '../ThemeButton';
import { useContext, useEffect } from 'react';
import ThemeContext from '../ThemeContext';
import { useAppDispatch } from '@/hooks/redux';
import { setQueryActionCreator } from '@/store/action-creators/setSearchParamsActionCreator';
const Header = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch()
	const handleRedirect = () => {
		navigate('/not-existing-page');
	};
	const handleInput= (event: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(setQueryActionCreator(event.target.value))

	};
const handleSave = () => {
	//localStorage.setItem('searchParam', query);
}
	const { isDark} = useContext(ThemeContext);

	return (
		<header className={`header ${isDark ? `header-dark` : ''}`}>
			<div className="header__content">
				<nav className="header__search">
					<input type="text" className="search__bar" placeholder="Search..." //onChange={handleInputChange}
					onChange={handleInput}
					/>
					<button className="search__btn" //onClick={handleClick} 
					aria-label="search">
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


/*
import { useContext, useEffect } from 'react';
import ThemeContext from '../ThemeContext';

const ThemeButton = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);
  */