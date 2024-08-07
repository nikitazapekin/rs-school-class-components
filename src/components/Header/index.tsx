import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import styles from "./index.module.scss"
import ThemeButton from '../ThemeButton';
import useURL from '../../hooks/useURL';
import { useAppDispatch } from '../../hooks/redux';
import { setTypedValueActionCreator } from '../../redux/action-creators/setTypedValueActionCreator';
import { useSelector } from 'react-redux';
import { getThemeSelector } from '../../redux/selectors/getTheme';
import React from 'react';
import Link from 'next/link';
const Header = () => {
	const isDark = useSelector(getThemeSelector)
	const { handleSearch } = useURL();
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
				<Link href="/cdsvddsv">
					Redirect to error page
				</Link>

				<ThemeButton />
			</div>
		</header>
	);
};

export default Header;

