import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './index.scss';
import { HeaderProps } from './types';
import { useNavigate } from 'react-router-dom';
import ThemeButton from '../ThemeButton';
import { useContext, useEffect } from 'react';
import ThemeContext from '../ThemeContext';
const Header = ({ handleInputChange, handleClick }: HeaderProps) => {
	const navigate = useNavigate();
	const handleRedirect = () => {
		navigate('/not-existing-page');
	};


	const { isDark} = useContext(ThemeContext);
useEffect(()=> {
console.log("IS", isDark)
}, [isDark])
	return (
		<header className={`header ${isDark ? `header-dark` : ''}`}>
			<div className="header__content">
				<nav className="header__search">
					<input type="text" className="search__bar" placeholder="Search..." onChange={handleInputChange} />
					<button className="search__btn" onClick={handleClick} aria-label="search">
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