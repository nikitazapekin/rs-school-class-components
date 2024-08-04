 


"use client"
import { useEffect } from 'react';

import { paramsSelector } from '../redux/selectors/getSearchParams';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from './redux';
import { useSelector } from 'react-redux';

import { setQueryActionCreator } from '../redux/action-creators/setSearchParamsActionCreator';
import { setSearchParamsActionCreator } from '../redux/action-creators/setSearchParamsActionCreator';
import { setLoadingActionCreator } from '../redux/action-creators/setIsLoading';
import { useLazySearchUsersQuery } from '../redux/slices/querySlice';
import { setUsersActionCreator } from '../redux/action-creators/setUsersActionCreator';


import { setNewSearchValueActionCreator } from '../redux/action-creators/setNewSearchValueActionCreator';
import { typedValueSelector } from '../redux/selectors/typedValueSelector';
import { setStoredInLocalStorageActionCreator } from '../redux/action-creators/setStoredInLocalStorageQuery';

import { useRouter, useSearchParams } from 'next/navigation';  
const useURL = () => {
    const dispatch = useAppDispatch();
    const router = useRouter()
    const params = useSelector(paramsSelector);
    
    const getCurrentParams = () => {

    };

    const setPage = (page: number, query: string) => {



        const queryObj = {
            page: String(page)
        }
        if (query) {
            if(query!=undefined) {

                Object.assign(queryObj, { query: query });
            }
            
        }

      //  const handleNavigation = () => {
      //      router.push('/new-page');
      //  };
    
   //     router.push()

 //  const handleNavigation = () => {
    // Construct query parameters as a URLSearchParams object or manually
  //  const queryObj = {
   //     page: params.offset,
//        query: params.query || ''
  //  };

    // Convert query object to query string
    const queryString = new URLSearchParams(queryObj).toString();

    // Construct the new URL
   // const newUrl = `/?${queryString}`;
const newUrl  = `/?page=${String(page)}${query ? `query=${query}` : ``}`
    // Push the new URL
    console.log("NEW", newUrl)
    router.push(newUrl);
//};

   /*
   router.push({
       pathname: router.pathname,
            query: queryObj,
            
            });
*/

    };
    useEffect(() => {

        console.log("PAR", JSON.stringify(params))
        const storedParam = localStorage.getItem("searchParam")
        console.log(storedParam)
        if(storedParam) {
          //  dispatch(setStoredInLocalStorageActionCreator(storedParam))
            dispatch(setQueryActionCreator(storedParam))
        }
        //	const [page, query] = getCurrentParams();

        //	setPage(Number(page), String(query));
        //	localStorage.setItem('searchParam', String(query));
        //	dispatch(setSearchParamsActionCreator(Number(page), String(query)));
    }, []);
useEffect(()=> {
console.log("NEX", params)
}, [params])
    useEffect(() => {
       // const { page, query } = router.query;
      //  console.log("QUERYYY", query)
     
    }, [])
    /*

    useEffect(() => {
        if (router.isReady) {
            const {query, page} = router.query;
            if(query!=undefined) {

                localStorage.setItem("searchParam", String(query))
            }
            if(page && query) {
                dispatch(setSearchParamsActionCreator( Number(page), String(query)))
            }
         

            console.log("Current", page, query)
        }
    }, [router.isReady, router.query]);
*/
     
    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setQueryActionCreator(event.target.value));
    };
    const typedValue = useSelector(typedValueSelector)
    const handleSearch = () => {
        localStorage.setItem('searchParam', String(typedValue));
        dispatch(setNewSearchValueActionCreator())

/*
        router.push({
            pathname: router.pathname,

            query: {
                page:1,
                query: typedValue
            }
        })
            */
    };
    const handleOpen = () => {

    }
    return { getCurrentParams, setPage, handleInput, handleSearch };
};
export default useURL;


