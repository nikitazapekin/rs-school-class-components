/*
const App = () => {
	return ( 
		<>
		App
		</>
	 );
	 }
	 
	 export default App;
 */
/*import { GetServerSideProps } from 'next';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { UserData, UserDataArray } from './API/types';
import { fetchUserDataAdvanced, getUserData } from './API';

export interface UserElement {
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
}

// Your page component
const App = ({ users }: { users: UserElement[] }) => {
	return (
		<div>
			<h1>Users</h1>
			<ul>
				{users && users.length > 0 ? (
					users.map((user: UserElement) => (
						<li key={user.id}>{user.login}</li>
					))
				) : (
					<li>No users found</li>
				)}
			</ul>
		</div>
	);
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	const limit = 10; // Adjust as needed
	const offset = 1; // Adjust as needed
	const typedValue = 'test'; // Adjust based on your requirements

	try {
		const data = await getUserData(limit, offset, typedValue);
		console.log('Fetched users:', data);
		return {
			props: {
				users: data || [],
			},
		};
	} catch (error) {
		console.error('Error fetching user data:', error);
		return {
			props: {
				users: [],
			},
		};
	}
};

export default App;

*/







/*import { GetServerSideProps } from 'next';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { UserData, UserDataArray } from './API/types';
import { fetchUserDataAdvanced, getUserData } from './API';


export interface UserElement {
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
}
// Your page component
const App = ({ users }: { users: UserDataArray }) => {
	return (
		<div>
			<h1>Users</h1>
			<ul>
				{users && users.map((user: UserElement) => (
					<li key={user.id}>{user.login}</li>
				))}
			</ul>
		</div>
	);
};

  const getServerSideProps: GetServerSideProps = async (context) => {
	const limit = 10; // Adjust as needed
	const offset = 1; // Adjust as needed
	const typedValue = ''; // Adjust based on ydour requirements

	try {
		const users = await getUserData(limit, offset, typedValue);
		console.log(users)
		return {
			props: {
				users,
			},
		};
	} catch (error) {
		console.error('Error fetching user data:', error);
		return {
			props: {
				users: [],
			},
		};
	}
	};
	
export default App;
*/





/*

*/

import Header from './components/Header';
import List from './components/List';
import { ErrorBoundary } from './components/ErrorBoundary';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { storedUsersSelector } from './lib/selectors/getStoredElements';
import StoredUsersButton from './components/StoredUsersFlyoutElement';
import { ThemeProvider } from './components/ThemeContext';
import Background from './components/Background';
import ErrorComponent from './components/ErrorComponent';
import { useAppDispatch } from './hooks/redux';
import { setStoredInLocalStorageActionCreator } from './lib/action-creators/setStoredInLocalStorageQuery';
import { isLoadingSelector } from './lib/selectors/isLoadingSelector';
import Spinner from './components/Spinner';
import { setTest } from './lib/slices/testSlice';
import useCustomRouter from './hooks/useCustomRouter';
import { useDispatch } from 'react-redux';
import { setTesting } from './redux/slices/postsSlice';
import { getTest } from './redux/selectors/getTest';

import { getUserData } from './API';
import { GetServerSideProps } from 'next';
import { fetchUserData } from './redux/slices/appSlice';
const App = () => {

	//const dispatch = useDispatch()
	const dispatch = useAppDispatch();
	const storedUsers = useSelector(storedUsersSelector);
	const isLoading = useSelector(isLoadingSelector);
	const test = useSelector(getTest)
	const { goToHomePage } = useCustomRouter()
	return (
		<>
			<ErrorBoundary>
				<ThemeProvider>
					<div className="container">
						<Header />
						<List />
						{/*

							{storedUsers.length > 0 && <StoredUsersButton />}
						*/}
						<ErrorBoundary>
							<ErrorComponent />
						</ErrorBoundary>
					</div>
					<Background />
					{isLoading && <Spinner />}
				</ThemeProvider>
			 

			 <button onClick={()=>dispatch(fetchUserData({typedValue: "test", offset: 1, limit: 10}))}>fetch</button>
			</ErrorBoundary>
		</>
	);
};

export default App;



/*
useEffect(() => {
	//dispatch(
	//		setStoredInLocalStorageActionCreator(
	//			String(localStorage.getItem('searchParam') != null ? localStorage.getItem('searchParam') : ''),
	//		),
	//	); 
}, []);
const getServerSideProps: GetServerSideProps = async (context) => {
	const limit = 10; // Adjust as needed
	const offset = 1; // Adjust as needed
	const typedValue = ''; // Adjust based on your requirements

	try {
		const users = await getUserData(limit, offset, typedValue);
		return {
			props: {
				users,
			},
		};
	} catch (error) {
		console.error('Error fetching user data:', error);
		return {
			props: {
				users: [],
			},
		};
	}
};
*/
//export default UsersPage; 