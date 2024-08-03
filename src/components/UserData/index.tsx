import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Spinner from '../Spinner';

import { useLazyGetUserGithubQuery } from '../../redux/slices/userQuerySlice';
 import styles from "./styles.module.scss"
import { useContext } from 'react';
 
import { useAppDispatch } from '../../hooks/redux';

import ThemeContext from '../ThemeContext';

import { useSelector } from 'react-redux';
import { setLoadingUserDataActionCreator } from '../../redux/action-creators/setLoadingUserDataActionCreator';
 
import { isLoadingUserDataSelector } from '../../redux/selectors/isLoadingUserData';
 
const UserData = () => {
	const dispatch = useAppDispatch();
	const { isDark } = useContext(ThemeContext);
	 
	const loading = useSelector(isLoadingUserDataSelector);
 
	const handleReturn = () => {
		const lastUrl = localStorage.getItem('lastUrl');
		if (lastUrl) {
	//		navigate(`${lastUrl}`);
		} else {
	//		navigate('/main');
		}
	};
	return (
		<aside className={`${styles.sidebar} ${isDark ? styles.sidebarDark : ''}`}>
			{/*
		{loading && <Spinner className={styles.spinner} data-testid="spinner" />}
		{data && (
		  <div>
			<h2>{data.login}</h2>
			<img 
			  src={data.avatar_url} 
			  alt={`${data.login}'s avatar`} 
			  className={styles.avatar}
			/>
			<p>ID: {data.id}</p>
			<p>Type: {data.type}</p>
		  </div>
		)}
		<button className={styles.closeBtn} onClick={handleReturn}>
		Close
		</button>
		*/}
	  </aside>
	);
};

export default UserData; 

/*
import StoredUsersButton from './components/StoredUsersFlyoutElement';
const App = ({ query }: SearchPageProps) => {
	const dispatch = useAppDispatch();
	const storedUsers = useSelector(storedUsersSelector);
	const isLoading = useSelector(isLoadingSelector);
	const [trigger, setTrigger] = useState(false);
	const { data, error } = useSearchUsersQuery(query, {
		skip: !trigger,
	});
	const handleButtonClick = () => {
		setTrigger(true);
	};

	useEffect(() => {
		if (data) {
			dispatch(setUsersActionCreator(data.items ? data.items : []));
		}
	}, [data, dispatch, trigger]);
	useEffect(() => {
		setTrigger(true);
		handleButtonClick()
	}, [])
	return (
		<>
			<ErrorBoundary>
				<ThemeProvider>
						<div className="container">
							<List />
							<ErrorBoundary>
								<ErrorComponent />
							</ErrorBoundary>
						</div>
						{storedUsers.length > 0 && <StoredUsersButton />}
						{isLoading && <Spinner />}
				</ThemeProvider>

			</ErrorBoundary>
		</>
	);
};

export default App;
*/