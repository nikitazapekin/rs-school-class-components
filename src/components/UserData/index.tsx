import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Spinner from '../Spinner';

import { useLazyGetUserGithubQuery } from '../../redux/slices/userQuerySlice';
import styles from "./styles.module.scss"
import { useContext } from 'react';

import { useAppDispatch } from '../../hooks/redux';

import ThemeContext from '../ThemeContext';
import { useSelector } from 'react-redux';
import { setLoadingUserDataActionCreator } from '../../redux/action-creators/setLoadingUserDataActionCreator';
import { isLoadingUserDataSelector } from '../../redux/selectors/isLoadingUserData';
import { getPersonalData } from '../../api';
import { useRouter } from 'next/router';
import { SetClickedUserActionCreator } from '../../redux/action-creators/setClickedUserActionCreator';
import { clickedUserSelector } from '../../redux/selectors/getClickedElement';
import { paramsSelector } from '../../redux/selectors/getSearchParams';
import Link from 'next/link';
const UserData = () => {
	const dispatch = useAppDispatch();
//	const router = useRouter()
	const { isDark } = useContext(ThemeContext);
const params = useSelector(paramsSelector)
	const loading = useSelector(isLoadingUserDataSelector);
const clickedElement = useSelector(clickedUserSelector)
/*
	useEffect(() => {
		if (router.isReady) {
			const { user } = router.query;
			const fetchData = async () => {
				try {
					const data = await getPersonalData(String(user));
					console.log("us", JSON.stringify(data))
					dispatch(SetClickedUserActionCreator(data))

				} catch (err) {

				}
			};
			fetchData();


		}
	}, [router])
 */
	return (
		<aside className={`${styles.sidebar} ${isDark ? styles.sidebarDark : ''}`}>
				<div>
			<h2>{clickedElement.login}</h2>
			<img 
			  src={clickedElement.avatar_url} 
			  alt={`${clickedElement.login}'s avatar`} 
			  className={styles.avatar}
			/>
			<p>ID: {clickedElement.id}</p>
			<p>Type: {clickedElement.type}</p>
		  </div>
	

		<Link href={`/?page=${params.offset}${params.query ? `&query=${params.query}` : ``}`}>
		Close
		</Link>
		
		</aside>
	);
};

export default UserData;
