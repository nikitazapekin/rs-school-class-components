"use client";
import { useEffect, useContext } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';  
import Spinner from '../Spinner';
import { useAppDispatch } from '../../../hooks/redux';
//import ThemeContext from '../ThemeContext';
import { useSelector } from 'react-redux';
import { SetClickedUserActionCreator } from '../../../redux/action-creators/setClickedUserActionCreator';
import { clickedUserSelector } from '../../../redux/selectors/getClickedElement';
import { paramsSelector } from '../../../redux/selectors/getSearchParams';
import Link from 'next/link';
import styles from "./styles.module.scss";
import { getPersonalData } from '../../../api';
import { isLoadingUserDataSelector } from '../../../redux/selectors/isLoadingUserData';
import Image from 'next/image';

interface User {
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
interface UserDataProps {
	user: User
}
const UserData = ({user}: UserDataProps) => {
    const dispatch = useAppDispatch();
    const router = useRouter();
    const searchParams = useSearchParams();
  //  const { isDark } = useContext(ThemeContext);
    const params = useSelector(paramsSelector);
    const loading = useSelector(isLoadingUserDataSelector);
   

    
 
    return (
        <aside className={`${styles.sidebar} 
		`
		}>
            <div>
                <h2>{user.login}</h2>
                <Image
				loader={()=>user.avatar_url}
                    src={user.avatar_url}
                    alt={`${user.login}'s avatar`}
                    className={styles.avatar}
					width={400}
					height={400}
                />
                <p>ID: {user.id}</p>
                <p>Type: {user.type}</p>
            </div>
 
            <Link href={`/?page=${params.offset}${params.query ? `&query=${params.query}` : ``}`}>
			Close
            </Link>
        </aside>
    );
};

export default UserData;
 