import styles from "./index.module.scss";
import { useAppDispatch } from '../../hooks/redux';
import { AddElementToStorage } from '../../redux/action-creators/addElementToStorage';
import { useSelector } from 'react-redux';
import { storedUsersSelector } from '../../redux/selectors/getStoredElements';
import { UserElement, UserItem } from './types';
import Link from "next/link";
import { paramsSelector } from "../../redux/selectors/getSearchParams";
import Image from "next/image";
import { getThemeSelector } from "../../redux/selectors/getTheme";
const Card = ({ user }: UserItem) => {
	const dispatch = useAppDispatch();
	const isDark = useSelector(getThemeSelector)
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
					style={{backgroundColor: "rgb(90, 90, 190)", padding: "10px", color: "#fff", textDecoration: "none", borderRadius: "10px"}}
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
 