import { useEffect } from 'react';
 
import { paramsSelector } from '../store/selectors/getSearchParams';

import { useAppDispatch } from './redux';
import { useSelector } from 'react-redux';
import { setQueryActionCreator } from '../store/action-creators/setSearchParamsActionCreator';
import { setSearchParamsActionCreator } from '../store/action-creators/setSearchParamsActionCreator';
  
//import { useNavigate, useLocation } from "./node_modules/@remix-run/react";
//import { useNavigate, useLocation } from "../../node_modules/remix-run";
import { useNavigate, useLocation } from "@remix-run/react";
 

const useURL = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const dispatch = useAppDispatch();
	const searchParams = useSelector(paramsSelector)
	 
const setPage = (page: number, query: string) => {
   
    
    const params = new URLSearchParams(location.search);

    params.set("page", String(page));

    if (query) {
        params.set("query", query);
    } else {
        params.delete("query"); 
    }

    navigate(`?${params.toString()}`);
    console.log("Navigated to:", `?${params.toString()}`);
};
 
interface ParamsTypes {
    query: string;
    page: number;
}

const getPageAndQuery = (): ParamsTypes => {
    const params = new URLSearchParams(location.search);
 
    const page = parseInt(params.get("page") || '1', 10);
    const query = params.get("query") || '';

    return { page, query };
};

useEffect(() => {
const params  = getPageAndQuery()
		setPage(Number(params.page), String(params.query));
		localStorage.setItem('searchParam', String(params.query));
		dispatch(setSearchParamsActionCreator(Number(params.page), String(params.query)));
	}, []);
	 
	
	const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(setQueryActionCreator(event.target.value));
	};
	const handleSearch = () => {
		window.scrollTo(0, 0);
		dispatch(setSearchParamsActionCreator(1, searchParams.query));
		const params = new URLSearchParams(location.search);
		params.set("page", String(1));
		params.set("query", String(searchParams.query))
	
	
		navigate(`?${params.toString()}`);
	} 
	return {   setPage, handleInput,
		 handleSearch,
	 };
};
export default useURL;
