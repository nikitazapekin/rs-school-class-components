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
import { useLazySearchUsersQuery } from '@/store/slices/querySlice';
import { useSelector } from 'react-redux';
import { paramsSelector } from '@/store/selectors/getSearchParams';
import { setUsersActionCreator } from '@/store/action-creators/setUsersActionCreator';
import { setFirstPage } from '@/store/slices/appSlice';
const Header = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch()

	const params = useSelector(paramsSelector)
	const handleRedirect = () => {
		navigate('/not-existing-page');
	};
	const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(setQueryActionCreator(event.target.value))

	};

	const { isDark } = useContext(ThemeContext);
	const [trigger, { data, error, isLoading }] = useLazySearchUsersQuery();

	const handleSearch = () => {
		dispatch(setFirstPage())
		trigger({ query: params.query, page: params.offset, per_page: params.limit });
		localStorage.setItem('searchParam', params.query)
		// localStorage.setItem('searchParam', String(query));
	};



	useEffect(() => {
		/*     if (isLoading) {
				 dispatch(setLoading(true));
			 } else {
				 dispatch(setLoading(false));
			 }
	 
			 if (error) {
				 dispatch(setError(error.toString()));
			 }
	  */
		if (data) {
			/*   data.items.forEach(user => {
				   dispatch(setAddToStoredElement(user));
			   }); */

			dispatch(setUsersActionCreator(data.items))

			console.log("NEW", data)
		}
	}, [data]);

	useEffect(() => {
		trigger({ query: params.storedValue ?  params.storedValue : params.query, page: params.offset, per_page: params.limit });
	//}, [params])
	}, [params.offset, params.storedValue])
	//console.log(data)
	return (
		<header className={`header ${isDark ? `header-dark` : ''}`}>
			<div className="header__content">
				<nav className="header__search">
					<input type="text" className="search__bar" placeholder="Search..." //onChange={handleInputChange}
						onChange={handleInput}
					/>
					<button className="search__btn" //onClick={handleClick} 
						onClick={handleSearch}
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