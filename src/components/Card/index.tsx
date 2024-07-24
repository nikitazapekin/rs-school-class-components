// Card.tsx

import { useNavigate } from 'react-router-dom';
import './index.scss';

import ThemeContext from '../ThemeContext';
import { useContext } from 'react';
import { useAppDispatch } from '@/hooks/redux.ts';
import { AddElementToStorage } from '@/store/action-creators/addElementToStorage.ts';
import { useSelector } from 'react-redux';
import { storedUsersSelector } from '@/store/selectors/getStoredElements';

interface UserItem {
	user: {
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
}

const Card = ({ user }: UserItem) => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const { isDark } = useContext(ThemeContext);
	const users = useSelector(storedUsersSelector);

	const handleCardClick = () => {
		const currentParams = new URLSearchParams(location.search);
		const currentUrl = `${window.location.pathname}?${currentParams.toString()}`;
		if (!currentUrl.includes('userdata')) {
			localStorage.setItem('lastUrl', currentUrl);
		}
		navigate(`/main/userdata?username=${user.login}`);
	};

	const handleStore = () => {
		dispatch(AddElementToStorage(user));
	};
	const handleCheckboxChange = () => {
		handleStore();
		};
		 
	return (
		<div className="user__link">
			<div className={`user ${isDark ? `user-dark` : ``}`}>
				<img className="user__logo" src={user.avatar_url} alt="user" />
				<div className="user__content">
					<p className="user__login">{user.login}</p>
					<input
						type="checkbox"
						className="user__checkbox"
				 
				onChange={handleCheckboxChange}
						checked={users.some(storedUser => user.id === storedUser.id)}
						readOnly
 
					/>
					<button className="user__details" onClick={handleCardClick}>
						Show details
					</button>
				</div>
			</div>
		</div>
	);
};

export default Card;



/*
import { useNavigate } from 'react-router-dom';
import './index.scss';

import ThemeContext from '../ThemeContext';
import { useContext } from 'react';
import { useAppDispatch } from '@/hooks/redux.ts';
import { AddElementToStorage } from '@/store/action-creators/addElementToStorage.ts';
import { useSelector } from 'react-redux';
import { storedUsersSelector } from '@/store/selectors/getStoredElements';
interface UserItem {
	user: {
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
}
const Card = (item: UserItem) => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch()
	const handleCardClick = () => {
		const currentParams = new URLSearchParams(location.search);
		const currentUrl = `${window.location.pathname}?${currentParams.toString()}`;
		if (!currentUrl.includes('userdata')) {
			localStorage.setItem('lastUrl', currentUrl);
		}
		navigate(`/main/userdata?username=${item.user.login}`);
	};
	const { isDark } = useContext(ThemeContext);
	const handleStore = () => {
		dispatch(AddElementToStorage(item.user))
	}
	const users = useSelector(storedUsersSelector)
	return (
		<div className="user__link" >
			<div className={`user ${isDark ? `user-dark` : ``}`}>
				<img className="user__logo" src={item.user.avatar_url} alt="user" />
				<div className="user__content">
					<p className="user__login">{item.user.login}</p>
					<input type="checkbox" className="user__checkbox" onClick={handleStore} 
					 checked={users.some(user=> item.user.id==user.id ? true : false)}
					/>
					<button className="user__details" onClick={handleCardClick}>
						Show details
					</button>
				</div>
			</div>
		</div>
	);
};
export default Card; 

*/