import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import styles from "./index.module.scss"
import ThemeButton from '../ThemeButton';
import { useContext } from 'react';
import ThemeContext from '../ThemeContext';
import useURL from '../../hooks/useURL';
import { useAppDispatch } from '../../hooks/redux';
import { setTypedValueActionCreator } from '../../redux/action-creators/setTypedValueActionCreator';

const Header = () => {
	const { isDark } = useContext(ThemeContext);
	const { handleRedirect, handleSearch } = useURL();
	const dispatch = useAppDispatch();

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(setTypedValueActionCreator(event.target.value));
	};

	return (
		<header className={`${styles.header} ${isDark ? styles['header-dark'] : ''}`}>
			<div className={styles.header__content}>
				<nav className={styles.header__search}>
					<input
						type="text"
						className={styles.search__bar}
						placeholder="Search..."
						onChange={handleChange}
					/>
					<button className={styles.search__btn} onClick={handleSearch} aria-label="search">
						<FontAwesomeIcon icon={faSearch} />
					</button>
				</nav>
				<button className={styles.redirect__btn} onClick={handleRedirect}>
					Redirect to error page
				</button>
				<ThemeButton />
			</div>
		</header>
	);
};

export default Header;


/* import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import styles from "./index.module.scss"
//import './index.scss';
import ThemeButton from '../ThemeButton';
import { useContext } from 'react';
import ThemeContext from '../ThemeContext';
import useURL from '../../hooks/useURL';
import { useAppDispatch } from '../../hooks/redux';
import { setTypedValueActionCreator } from '../../redux/action-creators/setTypedValueActionCreator';
const Header = () => {
	const { isDark } = useContext(ThemeContext);
	const {  handleRedirect, handleSearch } = useURL();
	const dispatch = useAppDispatch()
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(setTypedValueActionCreator(event.target.value));
	};
	return (
		<header className={`header ${isDark ? `header-dark` : ''}`}>
			<div className="header__content">
				<nav className="header__search">
					<input type="text" className="search__bar" placeholder="Search..." //onChange={handleInput}
					onChange={handleChange}
					/>
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
*/