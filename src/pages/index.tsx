import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { GetServerSideProps } from 'next';
import { AxiosError, AxiosResponse } from 'axios';
import { useAppDispatch } from '../hooks/redux';
import { setUsersActionCreator } from '../redux/action-creators/setUsersActionCreator';
import Spinner from '../components/Spinner';

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
interface Props {
	users: UserDataArray;
	query: string;
	page: number;
	limit: number;
}

const UsersPage = ({ users }: Props) => {
	const dispatch = useAppDispatch();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		dispatch(setUsersActionCreator(users));
		setLoading(false);
	}, [users, dispatch]);

	if (loading) {
		return <Spinner />;
	}

	return (
		<div>
		 
			 
		</div>
	);
};

export default UsersPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
	const { query, page, limit = '10' } = context.query;
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

		const response: AxiosResponse<UserData> = await axios.get(url);
		users = response.data.items;

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
};
 