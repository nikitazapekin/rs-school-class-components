import { useNavigate } from 'react-router-dom';
import './index.scss';

import ThemeContext from '../ThemeContext';
import { useContext } from 'react';
import { useAppDispatch } from '../../hooks/redux';
//import { useAppDispatch } from '@/hooks/redux.ts';
import { AddElementToStorage } from '../../lib/action-creators/addElementToStorage';
//import { AddElementToStorage } from '@/store/action-creators/addElementToStorage.ts';
import { useSelector } from 'react-redux';
//import { storedUsersSelector } from '@/store/selectors/getStoredElements';
import { storedUsersSelector } from '../../lib/selectors/getStoredElements';
import { UserElement, UserItem } from './types';
const Card = ({ user }: UserItem) => {
//	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const { isDark } = useContext(ThemeContext);
	const users = useSelector(storedUsersSelector);

	const handleCardClick = () => {
		const currentParams = new URLSearchParams(location.search);
		const currentUrl = `${window.location.pathname}?${currentParams.toString()}`;
		if (!currentUrl.includes('userdata')) {
			localStorage.setItem('lastUrl', currentUrl);
		}
		//navigate(`/main/userdata?username=${user.login}`);
	};

	const handleCheckboxChange = () => {
		dispatch(AddElementToStorage(user));
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
						checked={users && users.some((storedUser: UserElement) => user.id === storedUser.id)}
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
