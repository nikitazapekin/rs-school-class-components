

import React from 'react';
 
import List from './components/List';
import { ErrorBoundary } from './components/ErrorBoundary';
import { useSelector } from 'react-redux';
import ErrorComponent from './components/ErrorComponent';
 
import { storedUsersSelector } from './redux/selectors/getStoredElements';
import { isLoadingSelector } from './redux/selectors/isLoadingSelector';
import Spinner from './components/Spinner';
 
import StoredUsersButton from './components/StoredUsersFlyoutElement';
import { GetServerSidePropsContext } from 'next';
import axios from 'axios';
 
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
 




export async function getServerSideProps(context: GetServerSidePropsContext) {
	const { query } = context;
 
    const page = parseInt(query.page as string, 10) || 1;
	 console.log(page)

	 const limit = 10;

	 const res = await axios.get(`https://api.github.com/users?per_page=${limit}&page=${page}`);
	 const users = res.data;
   
	 return {
	   props: {
		 users,
	 
	   },
	 };
  }