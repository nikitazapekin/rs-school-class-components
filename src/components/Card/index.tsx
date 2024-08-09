import './index';

import { useAppDispatch } from "../../hooks/redux";
import { AddElementToStorage } from "../../store/action-creators/addElementToStorage";

import { useSelector } from 'react-redux';
import { storedUsersSelector } from '../../store/selectors/getStoredElements';
import { UserItem } from './types';
import { getThemeSelector } from '../../store/selectors/getTheme';
import { useNavigate, useLocation } from '@remix-run/react';
import { paramsSelector } from '../../store/selectors/getSearchParams';

const Card = ({ user }: UserItem) => {
	const dispatch = useAppDispatch();
	const isDark = useSelector(getThemeSelector);
	const users = useSelector(storedUsersSelector);
	const params = useSelector(paramsSelector);
	const navigate = useNavigate();
	const location = useLocation();

	const handleCheckboxChange = () => {
		dispatch(AddElementToStorage(user));
	};

	const handleDetailsClick = () => {
		const queryParams = new URLSearchParams();
		queryParams.append('page', String(params.offset));
		if (params.query) {
			queryParams.append('query', params.query);
		}
		queryParams.append('user', user.login);

		navigate(`/details?${queryParams.toString()}`, { state: { from: location } });
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
						checked={users && users.some((storedUser) => user.id === storedUser.id)}
						readOnly
					/>
					<button onClick={handleDetailsClick}>
						Show details
					</button>
				</div>
			</div>
		</div>
	);
};

export default Card;

/*
export function links() {
	return [{ rel: 'stylesheet', href: "./index.css" }];
  }
  


import './index.scss';

import {useAppDispatch} from "../../hooks/redux" 
import { AddElementToStorage } from "../../store/action-creators/addElementToStorage"

import { useSelector } from 'react-redux';
import { storedUsersSelector } from '../../store/selectors/getStoredElements';
import { UserItem } from './types';
import { getThemeSelector } from '../../store/selectors/getTheme';
import { Link } from '@remix-run/react';
import { paramsSelector } from '../../store/selectors/getSearchParams';
const Card = ({ user }: UserItem) => {
	const dispatch = useAppDispatch();
	const isDark = useSelector(getThemeSelector)
	const users = useSelector(storedUsersSelector);
	const handleCheckboxChange = () => {
		dispatch(AddElementToStorage(user));
	};
	const params = useSelector(paramsSelector)
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
						checked={users && users.some((storedUser) => user.id === storedUser.id)}
						readOnly
					/>
					<Link to={`/details?page=${params.offset}${params.query ? `&query=${params.query}` : ``}&user=${user.login}`}>
					Show details
					</Link>
				 
			</div>
			</div>
		</div>
	);
};

export default Card;
*/