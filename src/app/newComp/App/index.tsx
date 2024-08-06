 "use client"
 import styles from "./index.module.scss"
 import Card from "../Card";
 
import { useAppDispatch } from "../../../hooks/redux";
import { useSelector } from "react-redux";
import { paramsSelector } from "../../../redux/selectors/getSearchParams";
import useURL from "../../../hooks/useURL";
import { setPrevPageActionCreator } from "../../../redux/action-creators/setSearchParamsActionCreator";
import { storedUsersSelector } from "../../../redux/selectors/getStoredElements";
import { setNextPageActionCreator } from "../../../redux/action-creators/setSearchParamsActionCreator";
import StoredUsersButton from "../StoredUsersFlyoutElement";
import ErrorComponent from "../ErrorComponent";
import { ErrorBoundary } from "../ErrorBoundary";
import Providers from "../../../redux/Provider";
type UserDataArray = Array<{
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
}>; 

interface AppProps {
	users: UserDataArray;
  }
function App({ users }: AppProps) {
 const dispatch = useAppDispatch()
const params = useSelector(paramsSelector)
const {setPage} =useURL()
const storedUsers = useSelector(storedUsersSelector);
	const handleNext = () => {
		window.scrollTo(0, 0);
		dispatch(setNextPageActionCreator());
		setPage(params.offset + 1, params.query);
	};

	const handlePrev = () => {
		window.scrollTo(0, 0);
		dispatch(setPrevPageActionCreator());
		setPage(params.offset - 1, params.query);
	};
  return (
  <>
<Providers>

<ErrorBoundary>

<section className={styles.list}>
			<div className={styles.list__container}>
			{/*}	{isLoading && <Spinner />} */}
	 
				{users.map((item) => (
					<Card user={item} key={item.id} />
					))}
				{users.length === 0 && <p className={styles.list__nothing}>Nothing found</p>}
				<div className={styles.list__btns}>
					<button className={`${styles.list__prev} ${styles.list__btn}`} onClick={handlePrev}
					>
						Prev
					</button>
					<button className={`${styles.list__next} ${styles.list__btn}`} onClick={handleNext} 
					data-testid="next">
						Next
					</button>
				</div>
			</div>
		</section>
		{storedUsers.length > 0 && <StoredUsersButton />}
 <ErrorComponent />
 
	</ErrorBoundary>
						</Providers>
  </>
  );
  }
  export default  App
  /* 

  import Spinner from '../Spinner';
import Card from '../Card';
import styles from "./index.module.scss";
import { useAppDispatch } from '../../../hooks/redux';
import { useSelector } from 'react-redux';
import { setNextPageActionCreator, setPrevPageActionCreator } from '../../../redux/action-creators/setSearchParamsActionCreator';
import { paramsSelector } from '../../../redux/selectors/getSearchParams';
import { isLoadingSelector } from '../../../redux/selectors/isLoadingSelector';
import useURL from '../../../hooks/useURL';
import { UserItem } from './types';
import { getUsersSelector } from '../../../redux/selectors/getUsersSelector';
import { getUserData } from '../../../api';
import { useEffect } from 'react';
import { setUsersActionCreator } from '../../../redux/action-creators/setUsersActionCreator';
import { ThemeProvider } from '../ThemeContext';
const List = () => {
	const { setPage } = useURL();
	const dispatch = useAppDispatch();
	const users = useSelector(getUsersSelector);
	const params = useSelector(paramsSelector);
 
	const isLoading = useSelector(isLoadingSelector);

	const handleNext = () => {
		window.scrollTo(0, 0);
		dispatch(setNextPageActionCreator());
		setPage(params.offset + 1, params.query);
	};

	const handlePrev = () => {
		window.scrollTo(0, 0);
		dispatch(setPrevPageActionCreator());
		setPage(params.offset - 1, params.query);
	};
 
useEffect(() => {
	const fetchData = async () => {
		try {
			console.log("FETCHING", params.limit, params.offset, params.query )
			const data = await getUserData(params.limit, params.offset, params.query);
			dispatch(setUsersActionCreator(data))
	 
		} catch (err) {
	 
		}  
	};
	fetchData();
}, [params.limit, params.offset, params.query]); 
	return (
		<ThemeProvider>

		<section className={styles.list}>
			<div className={styles.list__container}>
				{isLoading && <Spinner />}
				{users.map((item: UserItem) => (
					<Card user={item} key={item.id} />
				))}
				{users.length === 0 && <p className={styles.list__nothing}>Nothing found</p>}
				<div className={styles.list__btns}>
					<button className={`${styles.list__prev} ${styles.list__btn}`} onClick={handlePrev}>
						Prev
					</button>
					<button className={`${styles.list__next} ${styles.list__btn}`} onClick={handleNext} data-testid="next">
						Next
					</button>
				</div>
			</div>
		</section>
		</ThemeProvider>
	);
};

export default List;


*/
/*

*/
/*
  	const { query, page , limit = '10' } = context.query;
	const offset = parseInt(page as string, 10);
	const perPage = parseInt(limit as string, 10);
	let url: string;
	if (!query) {
		url = `https://api.github.com/search/users?q=type:user&page=${offset}&per_page=${perPage}`;
	} else {
		url = `https://api.github.com/search/users?q=${query}&page=${offset}&per_page=${perPage}`;
	}
	try {
		let users: UserDataArray = [];

		if (!query) {
			const response: AxiosResponse<UserData> = await axios.get(url);
			users = response.data.items;
		} else {
			const response: AxiosResponse<UserData> = await axios.get(url);
			users = response.data.items;
		}
		return {
			props: {
				users,
				},
		};
	} catch (error) {
		if (axios.isAxiosError(error)) {
			const axiosError = error as AxiosError;
			console.error('Error fetching data:', axiosError.message);
		} else {
			console.error('Unknown error:', error);
		}
		return {
			props: {
				users: [],
			 
				},
		};
	}
    */





/*
import axios, { AxiosError, AxiosResponse } from 'axios';

type UserDataArray = Array<{
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
}>;
interface UserData {
	total_count: number;
	incomplete_results: boolean;
	items: UserDataArray;
}

async function fetchUserData(url: string): Promise<UserDataArray> {
	try {
		const response: AxiosResponse<UserDataArray> = await axios.get(url);
		return response.data;
	} catch (error) {
		if (axios.isAxiosError(error)) {
			const axiosError = error as AxiosError;
			console.error('Error fetching data:', axiosError.message);
		} else {
			console.error('Unknown error:', error);
		}
		throw new Error('Error fetching data');
	}
}
async function fetchUserDataAdvanced(url: string): Promise<UserData> {
	try {
		const response: AxiosResponse<UserData> = await axios.get(url);
		return response.data;
	} catch (error) {
		if (axios.isAxiosError(error)) {
			const axiosError = error as AxiosError;
			console.error('Error fetching data:', axiosError.message);
		} else {
			console.error('Unknown error:', error);
		}
		throw new Error('Error fetching data');
	}
}
  */








/*

import axios from 'axios';

export default async function App() {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  const posts = response.data;

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
  */