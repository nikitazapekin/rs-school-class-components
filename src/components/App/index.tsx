import Header from '../Header';
import List from '../List';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { storedUsersSelector } from '../../store/selectors/getStoredElements';
import StoredUsersButton from '../StoredUsersFlyoutElement';
import Background from '../Background';
import { useAppDispatch } from '../../hooks/redux';
import { setStoredInLocalStorageActionCreator } from '../../store/action-creators/setStoredInLocalStorageQuery';
import { isLoadingSelector } from '../../store/selectors/isLoadingSelector';
import Spinner from '../Spinner';

  import { AppProps } from './types';
const App = (//{users}: AppProps

) => {
	const dispatch = useAppDispatch();
	const storedUsers = useSelector(storedUsersSelector);
	const isLoading = useSelector(isLoadingSelector);

	useEffect(() => {
		dispatch(
			setStoredInLocalStorageActionCreator(
				String(localStorage.getItem('searchParam') != null ? localStorage.getItem('searchParam') : ''),
			),
		);
	}, []);
	return (
		<>
		
			 
					<div className="container">
						<Header />
						<List />
						{storedUsers.length > 0 && <StoredUsersButton />}
					
					</div>
					<Background />
					{isLoading && <Spinner />}
			 
		</>
	);
};

export default App;
 