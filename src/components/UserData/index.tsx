 
 
//import './styles.scss';
import Spinner from '../Spinner';
 

import { useSelector } from 'react-redux';
 
import { isLoadingUserDataSelector } from '@/store/selectors/isLoadingUserData';
import { getThemeSelector } from '@/store/selectors/getTheme';
import { clickedUserSelector } from '@/store/selectors/getClickedElement';
import { paramsSelector } from '@/store/selectors/getSearchParams';
import { Link } from '@remix-run/react';
const UserData = () => {
	 
	const isDark = useSelector(getThemeSelector)
 const params = useSelector(paramsSelector)
 const clickedUser = useSelector(clickedUserSelector)
	const loading = useSelector(isLoadingUserDataSelector);
 
	return (
		<aside className={`sidebar ${isDark ? `sidebar-dark` : ''}`}>
			{loading && <Spinner data-testid="spinner" />}
				<div>
					<h2>{clickedUser.login}</h2>
					<img src={clickedUser.avatar_url} alt={`${clickedUser.login}'s avatar`} />
					<p>ID: {clickedUser.id}</p>
					<p>Type: {clickedUser.type}</p>
				</div>

			 

			<Link to={`/?page=${params.offset}${params.query ? `&query=${params.query}` : ``}`}>
			Close
			</Link>
		</aside>
	);
};

export default UserData;
