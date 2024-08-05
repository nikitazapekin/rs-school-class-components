"use client"

import React, { useEffect, useState } from 'react';
import Header from './app/components/Header';
import List from './app/components/List';
import { ErrorBoundary } from './app/components/ErrorBoundary';
import { useSelector } from 'react-redux';
import { ThemeProvider } from './app/components/ThemeContext';
import Background from './app/components/Background';
import ErrorComponent from './app/components/ErrorComponent';
import { useAppDispatch } from './hooks/redux';
import { storedUsersSelector } from './redux/selectors/getStoredElements';
import { isLoadingSelector } from './redux/selectors/isLoadingSelector';
import Spinner from './app/components/Spinner';
import { useSearchUsersQuery } from './redux/slices/querySlice';
 
import { setUsersActionCreator } from './redux/action-creators/setUsersActionCreator';
import StoredUsersButton from './app/components/StoredUsersFlyoutElement';
import { GetServerSidePropsContext } from 'next';
import axios from 'axios';
//import { UserDataArray } from './redux/types';
type UserDataArray = Array<{
	login: string;
	id: number;
	node_id: string;
	avatar_url: string;
	gravatar_id: string;
	url: string;
	html_url: string;
	followers_url: string;
	following_url: string;
	gists_url: string;
	starred_url: string;
	subscriptions_url: string;
	organizations_url: string;
	repos_url: string;
	events_url: string;
	received_events_url: string;
	type: string;
	site_admin: boolean;
	score: number;
}>;
const App = ( ) => {
	const dispatch = useAppDispatch();
	const storedUsers = useSelector(storedUsersSelector);
	const isLoading = useSelector(isLoadingSelector);
	const [trigger, setTrigger] = useState(false);
/*	const { data, error } = useSearchUsersQuery(query, {
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
	*/
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
 




export async function getServerSideProps(context: GetServerSidePropsContext) {
	const { query } = context;
	//const page = parseInt(query.page, 10) || 1;  
    const page = parseInt(query.page as string, 10) || 1;
	 console.log(page)

	 const limit = 10;

	 const res = await axios.get(`https://api.github.com/users?per_page=${limit}&page=${page}`);
	 const users = res.data;
   
	 return {
	   props: {
		 users,
		// page: parseInt(page, 10),
	   },
	 };
  }