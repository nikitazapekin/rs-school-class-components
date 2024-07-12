import { useEffect, useState } from 'react';
import React from 'react';
import { getUserData } from '../API';
import { useNavigate, useLocation } from 'react-router-dom';
//import { useSearchParams } from 'react-router-dom';
interface BatchTypes {
	limit: number;
	offset: number;
}

interface UserItem {
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
const useSearch = () => {
	const [query, setQuery] = useState<string>('');
	const [isFetching, setIsFetching] = useState<boolean>(false);
	const [users, setUsers] = useState<UserItem[]>([]);
	const [batch, setBatch] = useState<BatchTypes>({
		limit: 10,
		offset: 1,
	});
	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(event.target.value);
	};
	const fetchUserData = async (prompt: string, page: number) => {
		try {
			setIsFetching(true);
			const res = await getUserData(batch.limit, page, prompt);
			setUsers(res);
		} catch (error) {
			console.error('Error fetching user data:', error);
		} finally {
			setIsFetching(false);
		}
	};

	const handleNext = () => {
		window.scrollTo(0, 0);
		setBatch((prev) => ({
			...prev,
			offset: prev.offset + 1,
		}));
		//	handleClick();
		fetchUserData(query, batch.offset);
	};

	const handlePrev = () => {
		window.scrollTo(0, 0);
		setBatch((prev) => ({
			...prev,
			offset: prev.offset - 1,
		}));
		//	handleClick();
		fetchUserData(query, batch.offset);
	};
	const handleClick = () => {
		//fetchUserData(query, batch.offset);
		//setPage(batch.offset, query);
		fetchUserData(query, 1);
		setPage(1, query);
		setBatch((prev) => ({
			...prev,
			//offset: Number(page)
			offset: 1,
		}));
	};
	useEffect(() => {
		const [page, query] = getCurrentParams();
		fetchUserData(String(query), Number(page));
		setBatch((prev) => ({
			...prev,
			//offset: Number(page)
			offset: Number(page),
		}));
		setQuery(String(query));
	}, []);

	const navigate = useNavigate();
	const location = useLocation();

	const getCurrentParams = () => {
		const searchParams = new URLSearchParams(location.search);
		const page = parseInt(searchParams.get('page') || '1', 10);
		const query = searchParams.get('query') || '';
		return [page, query];
	};

	const setPage = (page: number, query: string) => {
		const searchParams = new URLSearchParams(location.search);
		searchParams.set('page', String(page));
		if (query.length > 0) {
			searchParams.set('query', query);
		}
		navigate(`${location.pathname}?${searchParams.toString()}`);
	};

	useEffect(() => {
		setPage(batch.offset, query);
	}, [batch]);

	return { handleInputChange, handleClick, isFetching, users, handleNext, handlePrev, query, batch };
};
export default useSearch;
