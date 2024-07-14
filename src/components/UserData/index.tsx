import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './styles.scss';
import Spinner from '../Spinner';
import axios from 'axios';

interface User {
	login: string;
	id: number;
	avatar_url: string;
	type: string;
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
					const response = await axios.get(`https://api.github.com/users/${username}`);
					const userData: User = response.data;
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

	const handleReturn = () => {
		const lastUrl = localStorage.getItem('lastUrl');
		if (lastUrl) {
			navigate(`${lastUrl}`);
		} else {
			navigate('/main');
		}
	};

	return (
		<aside className="sidebar">
			{isFetching && <Spinner data-testid="spinner" />}
			{user && (
				<div>
					<h2>{user.login}</h2>
					<img src={user.avatar_url} alt={`${user.login}'s avatar`} />
					<p>ID: {user.id}</p>
					<p>Type: {user.type}</p>
				</div>
			)}
			<button className="close__btn" onClick={handleReturn}>
				Close
			</button>
		</aside>
	);
};

export default UserData;
