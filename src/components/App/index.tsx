import Header from '../Header';
import List from '../List';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { storedUsersSelector } from '../../store/selectors/getStoredElements';
import StoredUsersButton from '../StoredUsersFlyoutElement';
import Background from '../Background';
import { useAppDispatch } from '../../hooks/redux';
import { setStoredInLocalStorageActionCreator } from '../../store/action-creators/setStoredInLocalStorageQuery';

 

const App = () => {
	const dispatch = useAppDispatch();
	const storedUsers = useSelector(storedUsersSelector);

	useEffect(() => {
		dispatch(
			setStoredInLocalStorageActionCreator(
				String(localStorage.getItem('searchParam') != null ? localStorage.getItem('searchParam') : ''),
			),
		);
	}, []);
	return (
		<>
			<div className="container" data-testid="app">
			<Header />
				<List />
				{storedUsers.length > 0 && <StoredUsersButton />}

			</div>
			<Background />

			
		 
		</>
	);
};

export default App;
 