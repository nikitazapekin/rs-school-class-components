import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { paramsSelector } from '@/store/selectors/getSearchParams';

import { useAppDispatch } from './redux';
import { useSelector } from 'react-redux';
import { setQueryActionCreator } from '@/store/action-creators/setSearchParamsActionCreator';
import { setSearchParamsActionCreator } from '@/store/action-creators/setSearchParamsActionCreator';
import { setLoadingActionCreator } from '@/store/action-creators/setIsLoading';
 
import { setUsersActionCreator } from '@/store/action-creators/setUsersActionCreator';


import { useNavigate, useLocation } from "@remix-run/react";
const useURL = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const dispatch = useAppDispatch();
	const [searchParams, setSearchParams] = useSearchParams();
	const getCurrentParams = () => {
		const page = parseInt(searchParams.get('page') || '1', 10);
		const query = searchParams.get('query') || '';
		return [page, query];
	};
/*
	const setPage = (page: number, query: string) => {
	 
		const params = new URLSearchParams(location.search);
		params.set("page", String(page));
		navigate(`?${params.toString()}`);
		console.log(page)
		};
*/
const setPage = (page: number, query: string) => {
    console.log("Setting page to:", page, "with query:", query);
    const params = new URLSearchParams(location.search);
    params.set("page", String(page));
    navigate(`?${params.toString()}`);
    console.log("Navigated to:", `?${params.toString()}`);
};

	useEffect(() => {
		const [page, query] = getCurrentParams();

		setPage(Number(page), String(query));
		localStorage.setItem('searchParam', String(query));
		dispatch(setSearchParamsActionCreator(Number(page), String(query)));
	}, []);
	//const navigate = useNavigate();
	const params = useSelector(paramsSelector);
	const handleRedirect = () => {
	//	navigate('/not-existing-page');
	};
	const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(setQueryActionCreator(event.target.value));
	};
//	const [trigger, { data, isLoading }] = useLazySearchUsersQuery();
/*
	const handleSearch = () => {
		window.scrollTo(0, 0);
		trigger({ query: params.query, page: params.offset, per_page: params.limit });
		localStorage.setItem('searchParam', params.query);
		setPage(params.offset, params.query);
		dispatch(setSearchParamsActionCreator(1, params.query));
	};
	useEffect(() => {
		if (isLoading) {
			dispatch(setLoadingActionCreator(true));
		} else {
			dispatch(setLoadingActionCreator(false));
		}
		if (data) {
			dispatch(setUsersActionCreator(data.items));
		}
	}, [data, isLoading]);
	useEffect(() => {
		trigger({
			query: params.storedValue ? params.storedValue : params.query,
			page: params.offset,
			per_page: params.limit,
		});
		setPage(params.offset, params.storedValue);
	}, [params.storedValue]);
	useEffect(() => {
		trigger({ query: params.query, page: params.offset, per_page: params.limit });
		setPage(params.offset, params.query);
	}, [params.offset]);
*/
	return { getCurrentParams, setPage, handleInput,
		// handleSearch,
		 handleRedirect };
};
export default useURL;
