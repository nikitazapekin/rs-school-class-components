


import { useEffect } from 'react';
 
import { useAppDispatch } from './redux';
import { useSelector } from 'react-redux';
import { setQueryActionCreator } from '../redux/action-creators/setSearchParamsActionCreator';
import { setSearchParamsActionCreator } from '../redux/action-creators/setSearchParamsActionCreator';
import { useRouter } from 'next/router';
import { setNewSearchValueActionCreator } from '../redux/action-creators/setNewSearchValueActionCreator';
import { typedValueSelector } from '../redux/selectors/typedValueSelector';
const useURL = () => {
    const dispatch = useAppDispatch();
    const router = useRouter()
    
    const setPage = (page: number, query: string) => {
        const queryObj = {
            page: page
        }
        if (query) {
            if(query!=undefined) {

                Object.assign(queryObj, { query: query });
            }
        }
        router.push({
            pathname: router.pathname,
            query: queryObj,
            
            });
    };
    useEffect(() => {

    
        const storedParam = localStorage.getItem("searchParam")
       
        if(storedParam) {
       
            dispatch(setQueryActionCreator(storedParam))
        }
       
    }, []);
 
    useEffect(() => {
        if (router.isReady) {
            const {query, page} = router.query;
            if(query!=undefined) {

                localStorage.setItem("searchParam", String(query))
            }
            if(page && query) {
                dispatch(setSearchParamsActionCreator( Number(page), String(query)))
            }
         

       
        }
    }, [router.isReady, router.query]);

     
    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setQueryActionCreator(event.target.value));
    };
    const typedValue = useSelector(typedValueSelector)
    const handleSearch = () => {
        localStorage.setItem('searchParam', String(typedValue));
        dispatch(setNewSearchValueActionCreator())


        router.push({
            pathname: router.pathname,

            query: {
                page:1,
                query: typedValue
            }
        })
    };
  
    return {  setPage, handleInput, handleSearch };
};
export default useURL;


