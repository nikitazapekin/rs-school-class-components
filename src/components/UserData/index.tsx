
import styles from "./styles.module.scss"
import { useSelector } from 'react-redux';
import { clickedUserSelector } from "../../redux/selectors/getClickedElement";
import { paramsSelector } from '../../redux/selectors/getSearchParams';
import Link from 'next/link';
import Image from "next/image";
import { getThemeSelector } from "../../redux/selectors/getTheme";
 
const UserData = () => {
	const params = useSelector(paramsSelector)
	const clickedElement = useSelector(clickedUserSelector)
	const isDark = useSelector(getThemeSelector)
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
