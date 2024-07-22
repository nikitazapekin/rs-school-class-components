import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './index.scss';
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
import { setLoadingActionCreator } from '@/store/action-creators/setIsLoading';
import useURL from '@/hooks/useURL';
const Header = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch()
	const params = useSelector(paramsSelector)

	const {getCurrentParams, setPage} = useURL()
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
		setPage(params.offset, params.query)
	};
	useEffect(() => {
		if (isLoading) {
			dispatch(setLoadingActionCreator(true))
		} else {
			dispatch(setLoadingActionCreator(false))
		}
		if (data) {
			dispatch(setUsersActionCreator(data.items))
		}
	}, [data]);

	useEffect(() => {
		trigger({ query: params.storedValue ? params.storedValue : params.query, page: params.offset, per_page: params.limit });


		console.log("PAR" , params.offset)
		setPage(params.offset, params.storedValue)
	}, [params.offset, params.storedValue])
	return (
		<header className={`header ${isDark ? `header-dark` : ''}`}>
			<div className="header__content">
				<nav className="header__search">
					<input type="text" className="search__bar" placeholder="Search..."
						onChange={handleInput}
					/>
					<button className="search__btn" 
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
