import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './styles.scss';
import Spinner from '../Spinner';

interface User {
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

const UserData = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const [isFetching, setIsFetching] = useState<boolean>(false);
	const [user, setUser] = useState<User | null>(null);

	useEffect(() => {
		const searchParams = new URLSearchParams(location.search);
		const username = searchParams.get('username');

		if (username) {
			const fetchUserData = async () => {
				try {
					setIsFetching(true);
					const response = await fetch(`https://api.github.com/users/${username}`);
					if (!response.ok) {
						throw new Error('User not found');
					}
					const userData: User = await response.json();
					setUser(userData);
					localStorage.setItem('user', JSON.stringify(userData));
				} catch (error) {
					console.error('Error fetching user data:', error);
				} finally {
					setIsFetching(false);
				}
			};

			fetchUserData();
		}
	}, [location.search, navigate]);

	return (
		<aside className="sidebar">
			{isFetching && <Spinner />}
			{user && (
				<div>
					<h2>{user.login}</h2>
					<img src={user.avatar_url} alt={`${user.login}'s avatar`} />
					<p>ID: {user.id}</p>
					<p>Type: {user.type}</p>
				</div>
			)}
			<button className="close__btn">Close</button>
		</aside>
	);
};

export default UserData;

/*import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './styles.scss';
import useSearch from '@/hooks/useSearch';
interface User {
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

const UserData = () => {
    //const [user, setUser] = 
    const [user, setUser] = useState<User >();

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);
    useEffect(()=> {

    }, [])
       
	return (
		<aside className="sidebar">
			csa



			<button className="close__btn">Close</button>
            {JSON.stringify(user)}
		</aside>
	);
};
export default UserData;

*/
/*


import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './styles.scss';
import useSearch from '@/hooks/useSearch';

interface User {
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

const UserData = () => {
	const { handleSearch } = useSearch();
	const navigate = useNavigate();
	const location = useLocation();
	const [username, setUsername] = useState<string>('');
	const [user, setUser] = useState<User>();

	useEffect(() => {
		const searchParams = new URLSearchParams(location.search);
		const usernameParam = searchParams.get('username');
		setUsername(usernameParam || '');

		if (usernameParam) {
			const userData = handleSearch(usernameParam);
			setUser(userData);
		} else {
		//	setUser(null); // Handle case where username is not found
		}
	}, [location.search, handleSearch]);

	const handleClick = () => {
		let lastUrlWithoutUsername = findLastUrlWithoutUsername(location);

		if (lastUrlWithoutUsername) {
			navigate(lastUrlWithoutUsername);
		} else {
			navigate('/');
		}
	};

	const findLastUrlWithoutUsername = (location: { pathname: string; search: string }) => {
		const path = location.pathname;
		const searchParams = new URLSearchParams(location.search);
		const hasUsernameParam = searchParams.has('username');
		if (!hasUsernameParam && !path.includes('/username')) {
			return path + location.search;
		}
		const params = new URLSearchParams(location.search);
		params.delete('username');
		const newSearch = params.toString() ? `?${params.toString()}` : '';
		const finalUrl = path + newSearch;

		return finalUrl === path ? null : finalUrl;
	};

	return (
		<aside className="sidebar">
			{user ? (
				<>
					<img src={user.avatar_url} alt="logo" className="sidebar__logo" />
					<h2>Username: {user.login}</h2>
					<p className="user__text">id: {user.id}</p>
					<p className="user__text">url: {user.url}</p>
					<p className="user__text">following_url: {user.following_url}</p>
					<p className="user__text">starred_url: {user.starred_url}</p>
					<p className="user__text">repos_url: {user.repos_url}</p>
					<p className="user__text">type: {user.type}</p>
					<p className="user__text">score: {user.score}</p>
				</>
			) : (
				<p>No user data available.</p>
			)}
			<button className="close__btn" onClick={handleClick}>
				Close
			</button>
		</aside>
	);
};

export default UserData;
*/

/*
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './styles.scss';
import useSearch from '@/hooks/useSearch';
interface User {
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
const UserData = () => {
	const { handleSearch } = useSearch();

	const navigate = useNavigate();
	const location = useLocation();
	const [username, setUsername] = useState<string>('');
//	const [user, setUser] = useState<User>();
const [user, setUser] = useState<User>( handleSearch(new URLSearchParams(location.search).get('username')));
	useEffect(() => {
		const searchParams = new URLSearchParams(location.search);
		const usernameParam = searchParams.get('username');
		setUsername(usernameParam || '');
		setUser(handleSearch(String(usernameParam)));
	}, [location.search]);

	const handleClick = () => {
		let lastUrlWithoutUsername = findLastUrlWithoutUsername(location);

		if (lastUrlWithoutUsername) {
			navigate(lastUrlWithoutUsername);
		} else {
			navigate('/');
		}
	};

	const findLastUrlWithoutUsername = (location: { pathname: string; search: string }) => {
        const path = location.pathname;
		const searchParams = new URLSearchParams(location.search);
		const hasUsernameParam = searchParams.has('username');
		if (!hasUsernameParam && !path.includes('/username')) {
			return path + location.search;
		}
		const params = new URLSearchParams(location.search);
		params.delete('username');
		const newSearch = params.toString() ? `?${params.toString()}` : '';
		const finalUrl = path + newSearch;

		return finalUrl === path ? null : finalUrl;
	};

	return (
		<aside className="sidebar">
			<img src={user?.avatar_url} alt="logo" className="sidebar__logo" />
			<h2>Username: {user?.login}</h2>
			<p className="user__text">id: {user?.id}</p>
			<p className="user__text">url: {user?.url}</p>
			<p className="user__text">following_url: {user?.following_url} </p>
			<p className="user__text">starred_url: {user?.starred_url} </p>
			<p className="user__text">repos_url: {user?.repos_url}</p>
			<p className="user__text">type: {user?.type}</p>
			<p className="user__text">score: {user?.score} </p>
		 			<button className="close__btn" onClick={handleClick}>
				close
			</button>
		</aside>
	);
};

export default UserData;
*/
/*
 */
