import styles from "./index.module.scss";
import ThemeContext, { ThemeProvider } from '../ThemeContext';
import { useContext, useEffect } from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { AddElementToStorage } from '../../redux/action-creators/addElementToStorage';
import { useSelector } from 'react-redux';
import { storedUsersSelector } from '../../redux/selectors/getStoredElements';
import { UserElement, UserItem } from './types';
import Link from "next/link";
import { paramsSelector } from "../../redux/selectors/getSearchParams";
import Image from "next/image";
const Card = ({ user }: UserItem) => {
	const dispatch = useAppDispatch();
	const { isDark } = useContext(ThemeContext);
	const users = useSelector(storedUsersSelector);
	const handleCheckboxChange = () => {
		dispatch(AddElementToStorage(user));
	};


const params = useSelector(paramsSelector) 
	return (
		<div className={styles.user__link}>
			<div className={`${styles.user} ${isDark ? styles['user-dark'] : ''}`}>
				<Image
				loader={()=> user.avatar_url}
				className={styles.user__logo} src={user.avatar_url} alt="user"  width={300} height={300} />
				<div className={styles.user__content}>
					<p className={styles.user__login}>{user.login}</p>
					<input
						type="checkbox"
						className={styles.user__checkbox}
						onChange={handleCheckboxChange}
						checked={users && users.some((storedUser: UserElement) => user.id === storedUser.id)}
						readOnly
					/>
					<Link  
					href={`/details?page=${params.offset}${params.query ? `&query=${params.query}` : ``}&user=${user.login}`}
					className={styles.user__details}>
						Show Details
					</Link>
				 
				</div>
			</div>
		</div>
		 
	);
};

export default Card;

/*
	<Image
				loader={() => clickedElement.avatar_url} 
					src={clickedElement.avatar_url}
					alt={`${clickedElement.login}'s avatar`}
					className={styles.avatar}
					width={500}
					height={500}
				/>
				*/







/*
//import './index.scss';
import styles from "./index.module.scss"
import ThemeContext from '../ThemeContext';
import { useContext } from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { AddElementToStorage } from '../../redux/action-creators/addElementToStorage';
import { useSelector } from 'react-redux';
import { storedUsersSelector } from '../../redux/selectors/getStoredElements';
import { UserElement, UserItem } from './types';
const Card = ({ user }: UserItem) => {
	const dispatch = useAppDispatch();
	const { isDark } = useContext(ThemeContext);
	const users = useSelector(storedUsersSelector);

	const handleCardClick = () => {
		const currentParams = new URLSearchParams(location.search);
		const currentUrl = `${window.location.pathname}?${currentParams.toString()}`;
		if (!currentUrl.includes('userdata')) {
			localStorage.setItem('lastUrl', currentUrl);
		}
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
*/