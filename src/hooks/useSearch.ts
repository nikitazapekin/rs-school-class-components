import { useEffect, useState } from 'react';
import React from 'react';
import { getUserData } from '../API';
import { useSearchParams } from 'react-router-dom';
import { UserItem, BatchTypes } from './types';

const useSearch = () => {
	const [query, setQuery] = useState<string>('');
	const [isFetching, setIsFetching] = useState<boolean>(false);
	const [users, setUsers] = useState<UserItem[]>([]);
	const [batch, setBatch] = useState<BatchTypes>({
		limit: 10,
		offset: 1,
	});
	const [searchParams, setSearchParams] = useSearchParams();

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(event.target.value);
	};

	const fetchUserData = async (prompt: string, page: number) => {
		try {
			setIsFetching(true);
			console.log('PAGE', page);
			let promptStored = localStorage.getItem('searchParam');
			const res = await getUserData(batch.limit, page, String(promptStored));
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
	};

	const handlePrev = () => {
		window.scrollTo(0, 0);
		setBatch((prev) => ({
			...prev,
			offset: prev.offset - 1,
		}));
	};

	const handleClick = () => {
		fetchUserData(query, 1);
		localStorage.setItem('searchParam', query);
		setPage(1, query);
		setBatch((prev) => ({
			...prev,
			offset: 1,
		}));
	};

	const getCurrentParams = () => {
		const page = parseInt(searchParams.get('page') || '1', 10);
		const query = searchParams.get('query') || '';
		return [page, query];
	};

	const setPage = (page: number, query: string) => {
		const params: Record<string, string> = { page: String(page) };
		if (query.length > 0) {
			params.query = query;
		}
		setSearchParams(params);
	};

	useEffect(() => {
		const [page, query] = getCurrentParams();
		localStorage.setItem('searchParam', String(query));
		fetchUserData(String(query), Number(page));
		setBatch((prev) => ({
			...prev,
			offset: Number(page),
		}));
		setQuery(String(query));
	}, []);

	useEffect(() => {
		const queryStored = localStorage.getItem('searchParam');
		setPage(batch.offset, String(queryStored));
		fetchUserData(query, batch.offset);
	}, [batch]);

	return { handleInputChange, handleClick, isFetching, users, handleNext, handlePrev, query, batch };
};

export default useSearch;
