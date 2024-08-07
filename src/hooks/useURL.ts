


"use client"
import { useEffect } from 'react';
import { useAppDispatch } from './redux';
import { useSelector } from 'react-redux';
import { setQueryActionCreator } from '../redux/action-creators/setSearchParamsActionCreator';
import { setSearchParamsActionCreator } from '../redux/action-creators/setSearchParamsActionCreator';
import { setNewSearchValueActionCreator } from '../redux/action-creators/setNewSearchValueActionCreator';
import { typedValueSelector } from '../redux/selectors/typedValueSelector';
import { useRouter, useSearchParams } from 'next/navigation';
const useURL = () => {
    const dispatch = useAppDispatch();
    const router = useRouter()
    const searchParam = useSearchParams()
  
    const setPage = (page: number, query: string) => {
        const newUrl = `/?page=${String(page)}${query ? `&query=${query}` : ``}`
        router.push(newUrl);
    };
    useEffect(() => {
        const storedParam = localStorage.getItem("searchParam")
        if (storedParam) {
            dispatch(setQueryActionCreator(storedParam))
        }
    }, []);
  
    useEffect(() => {
        const page = searchParam.get('page');
        const query = searchParam.get('query')
        if(query!=undefined) {
            localStorage.setItem("searchParam", String(query))
        }
        if(page && query) {
            dispatch(setSearchParamsActionCreator( Number(page), String(query)))
        }

    }, [router]);

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setQueryActionCreator(event.target.value));
    };
    const typedValue = useSelector(typedValueSelector)
    const handleSearch = () => {
        localStorage.setItem('searchParam', String(typedValue));
        dispatch(setNewSearchValueActionCreator())
        const newUrl = `/?page=${String(1)}&query=${typedValue}`
        router.push(newUrl); 
    };
   
    return { setPage, handleInput, handleSearch };
};
export default useURL;


