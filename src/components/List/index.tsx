import './index.scss';
import Spinner from '../Spinner';
import Card from '../Card';

import { useAppDispatch } from '../../hooks/redux';
import { useSelector } from 'react-redux';

import { setNextPageActionCreator, setPrevPageActionCreator } from '../../lib/action-creators/setSearchParamsActionCreator';

import { paramsSelector } from '../../lib/selectors/getSearchParams';

import { isLoadingSelector } from '../../lib/selectors/isLoadingSelector';

import useURL from '../../hooks/useURL';
import { UserItem } from './types';
import { getUsersSelector } from '../../redux/selectors/getUsersSelector';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { fetchUserData } from '../../redux/slices/appSlice';
import { useEffect } from 'react';

const List = () => {
	const { setPage } = useURL();
	const dispatch = useAppDispatch();
	const users = useSelector(getUsersSelector);
	const params = useSelector(paramsSelector);
	useEffect(() => {
		dispatch(fetchUserData({ typedValue: params.storedValue ? params.storedValue : params.query, offset: params.offset, limit: params.limit }))

		console.log("render")
	}, [params.storedValue, params.offset])
	const isLoading = useSelector(isLoadingSelector);

	const handleNext = () => {
		window.scrollTo(0, 0);
		dispatch(setNextPageActionCreator());
		console.log("NEXT", JSON.stringify(params))
		setPage(params.offset + 1, params.query);
	};

	const handlePrev = () => {
		window.scrollTo(0, 0);
		dispatch(setPrevPageActionCreator());
		setPage(params.offset-1, params.query);
	};

	return (
		<section className="list">
			<div className="list__container">
				{isLoading && <Spinner />}
				{users.map((item: UserItem) => (
					<Card user={item} key={item.id} />
				))}
				{users.length == 0 && <p className="list__nothing">Nothing found</p>}

				<div className="list__btns">
					<button className="list__prev list__btn" onClick={handlePrev}>
						Prev
					</button>
					<button className="list__next list__btn" onClick={handleNext} data-testid="next">
						Next
					</button>
				</div>
			</div>
		</section>
	);
};

export default List;










/*
export type UserDataArrayApi = Array<{
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
export interface UserDataApi {
	total_count: number;
	incomplete_results: boolean;
	items: UserDataArrayApi;
}


export async function fetchUserDataAdvanced(url: string): Promise<UserDataApi> {
	try {
		const response: AxiosResponse<UserDataApi> = await axios.get(url);
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
export interface ApiResp {
props: {
	users: UserDataArrayApi
}
}
export async function  getServerSideProps(limit: number, offset: number, typedValue: string): Promise<ApiResp> {
	let url: string;
	if (typedValue.trim() === '') {
		url = `https://api.github.com/search/users?q=type:user&page=${offset}&per_page=${limit}`;
		try {
			const data = await fetchUserDataAdvanced(url);
			console.log('Data:', data);
		 


	return {
		props: {
			users: data.items
		}
	}	
		} catch (error) {
			console.error(error);
			throw error;
		}
	} else {
		url = `https://api.github.com/search/users?q=${typedValue}&page=${offset}&per_page=${limit}`;
		try {
			const data = await fetchUserDataAdvanced(url);
			console.log('Data:', data);
		//	return data.items;


		return {
			props: {
				users: data.items
			}
		}
		} catch (error) {
			console.error(error);
			throw error;
		}
	}
}

*/
/*
export async function getServerSideProps() {
  const res = await fetch('http://example.com/data');
  const data = await res.json();
  return {
	props: { data }
  }
}

const getServerSideProps: GetServerSideProps = async (context) => {
	const limit = 10; // Adjust as needed
	const offset = 1; // Adjust as needed
	const typedValue = ''; // Adjust based on your requirements

	try {
		const users = await getUserData(limit, offset, typedValue);
		return {
			props: {
				users,
			},
		};
	} catch (error) {
		console.error('Error fetching user data:', error);
		return {
			props: {
				users: [],
			},
		};
	}
};
*/