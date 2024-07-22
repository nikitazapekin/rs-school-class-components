import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useAppDispatch } from "./redux";
import { setSearchParamsActionCreator } from "@/store/action-creators/setSearchParamsActionCreator";
const useURL = () => {
    const dispatch = useAppDispatch()
    const [searchParams, setSearchParams] = useSearchParams();
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

        console.log("PAGEEE", page)
		setPage(Number(page), String(query));
		localStorage.setItem('searchParam', String(query));
        dispatch(setSearchParamsActionCreator( Number(page), String(query)))
	//	fetchUserData(Number(page));
	/*	setBatch((prev) => ({
			...prev,
			offset: Number(page),
		}));
		setQuery(String(query)); */
	}, []);
    return {getCurrentParams, setPage}
}

export default useURL