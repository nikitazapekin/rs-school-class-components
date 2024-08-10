
import React from 'react';
import List from './components/List';

import { useSelector } from 'react-redux';


import { storedUsersSelector } from './redux/selectors/getStoredElements';
import { isLoadingSelector } from './redux/selectors/isLoadingSelector';
import Spinner from './components/Spinner';

import StoredUsersButton from './components/StoredUsersFlyoutElement';
const App = () => {

	const storedUsers = useSelector(storedUsersSelector);
	const isLoading = useSelector(isLoadingSelector);


	return (
		<>


			<div className="container">
				<List />

			</div>
			{storedUsers.length > 0 && <StoredUsersButton />}
			{isLoading && <Spinner />}




		</>
	);
};

export default App;



