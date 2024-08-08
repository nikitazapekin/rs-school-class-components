import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './styles.scss';
import Spinner from '../Spinner';
//import { useLazyGetUserGithubQuery } from '@/store/slices/userQuerySlice';

import { useAppDispatch } from '@/hooks/redux';

import { useSelector } from 'react-redux';
import { setLoadingUserDataActionCreator } from '@/store/action-creators/setLoadingUserDataActionCreator';
import { isLoadingUserDataSelector } from '@/store/selectors/isLoadingUserData';
import { getThemeSelector } from '@/store/selectors/getTheme';
const UserData = () => {
	const dispatch = useAppDispatch();
	const isDark = useSelector(getThemeSelector)
	const location = useLocation();
	const navigate = useNavigate();
	//const [trigger, { data, isLoading }] = useLazyGetUserGithubQuery();
	const loading = useSelector(isLoadingUserDataSelector);

/*	useEffect(() => {
		dispatch(setLoadingUserDataActionCreator(isLoading));
	}, [isLoading]); 
	useEffect(() => {
		const searchParams = new URLSearchParams(location.search);
		trigger({ username: String(searchParams.get('username')) });
	}, [location.search]);
	*/
	const handleReturn = () => {
		const lastUrl = localStorage.getItem('lastUrl');
		if (lastUrl) {
			navigate(`${lastUrl}`);
		} else {
			navigate('/main');
		}
	};
	return (
		<aside className={`sidebar ${isDark ? `sidebar-dark` : ''}`}>
			{loading && <Spinner data-testid="spinner" />}
			{/*
			{data && (
				<div>
					<h2>{data.login}</h2>
					<img src={data.avatar_url} alt={`${data.login}'s avatar`} />
					<p>ID: {data.id}</p>
					<p>Type: {data.type}</p>
				</div>
				)}
				*/}
			<button className="close__btn" onClick={handleReturn}>
				Close
			</button>
		</aside>
	);
};

export default UserData;
