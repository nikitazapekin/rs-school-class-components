

import React from 'react';
 
import List from './components/List';
import { ErrorBoundary } from './components/ErrorBoundary';
import { useSelector } from 'react-redux';
import ErrorComponent from './components/ErrorComponent';
 
import { storedUsersSelector } from './redux/selectors/getStoredElements';
import { isLoadingSelector } from './redux/selectors/isLoadingSelector';
import Spinner from './components/Spinner';
 
import StoredUsersButton from './components/StoredUsersFlyoutElement';
const App = ( ) => {
	 
	const storedUsers = useSelector(storedUsersSelector);
	const isLoading = useSelector(isLoadingSelector);
	 
 
	return (
		<>
			<ErrorBoundary>
		 
						<div className="container">
							<List />
							<ErrorBoundary>
								<ErrorComponent />
							</ErrorBoundary>
						</div>
						{storedUsers.length > 0 && <StoredUsersButton />}
						{isLoading && <Spinner />}
			 
			</ErrorBoundary>

		 
		</>
	);
};

export default App;
 


