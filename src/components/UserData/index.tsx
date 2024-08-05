
import styles from "./styles.module.scss"
import { useContext } from 'react';
import { useAppDispatch } from '../../hooks/redux';
import ThemeContext from '../ThemeContext';
import { useSelector } from 'react-redux';
import { isLoadingUserDataSelector } from '../../redux/selectors/isLoadingUserData';
import { useRouter } from 'next/router';
import { clickedUserSelector } from '../../redux/selectors/getClickedElement';
import { paramsSelector } from '../../redux/selectors/getSearchParams';
import Link from 'next/link';
import Image from "next/image";
const UserData = () => {
	const { isDark } = useContext(ThemeContext);
	const params = useSelector(paramsSelector)
	const loading = useSelector(isLoadingUserDataSelector);
	const clickedElement = useSelector(clickedUserSelector)
	return (
		<aside className={`${styles.sidebar} ${isDark ? styles.sidebarDark : ''}`}>
			<div>
				<h2>{clickedElement.login}</h2>
				<Image
				loader={() => clickedElement.avatar_url} 
					src={clickedElement.avatar_url}
					alt={`${clickedElement.login}'s avatar`}
					className={styles.avatar}
					width={500}
					height={500}
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
