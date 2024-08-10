import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import ThemeButton from '../ThemeButton';
import useURL from '@/hooks/useURL';
import { useSelector } from 'react-redux';
import { getThemeSelector } from '@/store/selectors/getTheme';
import { Link } from '@remix-run/react';
import React, { CSSProperties } from 'react';

const Header = () => {
  const isDark = useSelector(getThemeSelector);
  const { handleInput, handleSearch } = useURL();

  return (
    <header style={{ ...styles.header, ...(isDark ? styles.headerDark : {}) }}>
      <div style={styles.content}>
        <nav style={styles.search}>
          <input
            type="text"
            style={styles.searchBar}
            placeholder="Search..."
            onChange={handleInput}
          />
          <button
            style={styles.searchBtn}
            onClick={handleSearch}
            aria-label="search"
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </nav>

        <Link to="/dcfewfe" style={styles.redirectBtn}>
          Redirect to not found page
        </Link>
        <ThemeButton />
      </div>
    </header>
  );
};

const styles: Record<string, CSSProperties> = {
  header: {
    width: '100%',
    backgroundColor: 'rgb(212, 201, 188)',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 11,
    transition: '1s',
  },
  content: {
    height: '90px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 15px',
  },
  search: {
    maxWidth: '700px',
    width: '100%',
    display: 'flex',
  },
  headerDark: {
    backgroundColor: 'rgb(43, 41, 41)',
  },
  searchBar: {
    width: '100%',
    padding: '5px 10px',
  },
  searchBtn: {
    padding: '5px',
    transition: '1s',
    cursor: 'pointer',
    backgroundColor: 'transparent',
  },
  redirectBtn: {
    cursor: 'pointer',
    padding: '7px',
    marginLeft: '10px',
    transition: '1s',
    textDecoration: 'none',
    color: 'inherit',
  },
};

export default Header;


 /*
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './index.css';
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
 */