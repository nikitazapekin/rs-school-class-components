import { useEffect, useState } from 'react';
import React from 'react';
import { getUserData } from '../API';
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
	const fetchUserData = async (prompt: string) => {
		try {
			setIsFetching(true);
			const res = await getUserData(batch.limit, batch.offset, prompt);
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
		handleClick();
	};

	const handlePrev = () => {
		window.scrollTo(0, 0);
		setBatch((prev) => ({
			...prev,
			offset: prev.offset - 1,
		}));
		handleClick();
	};
	const handleClick = () => {
		fetchUserData(query);
	};
	useEffect(() => {
		handleClick();
	}, []);
	return { handleInputChange, handleClick, isFetching, users, handleNext, handlePrev, query };
};
export default useSearch;
