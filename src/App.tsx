
import React from 'react';
import List from './components/List';

import { useSelector } from 'react-redux';


import { storedUsersSelector } from './redux/selectors/getStoredElements';
 

import StoredUsersButton from './components/StoredUsersFlyoutElement';
const App = () => {

	const storedUsers = useSelector(storedUsersSelector);
 


	return (
		<>


			<div className="container">
				<List />

			</div>
			{storedUsers.length > 0 && <StoredUsersButton />}
		 




		</>
	);
};

export default App;



