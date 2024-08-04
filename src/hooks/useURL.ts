/*import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
 
import { paramsSelector } from '../lib/selectors/getSearchParams';
import { setQueryActionCreator } from '../lib/action-creators/setSearchParamsActionCreator';
import { setSearchParamsActionCreator } from '../lib/action-creators/setSearchParamsActionCreator';
import { setLoadingActionCreator } from '../lib/action-creators/setIsLoading';
import { useLazySearchUsersQuery } from '../lib/slices/querySlice';
import { setUsersActionCreator } from '../lib/action-creators/setUsersActionCreator';
const useURL = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    const getCurrentParams = () => {
        const page = parseInt(router.query.page as string || '1', 10);
        const query = router.query.query as string || '';
        return [page, query];
    };

    const setPage = (page: number, query: string) => {
        const params: Record<string, string> = { page: String(page) };
        if (query.length > 0) {
            params.query = query;
        }
        router.push({
            pathname: router.pathname,
            query: params,
        });
    };

    useEffect(() => {
        const [page, query] = getCurrentParams();
        setPage(Number(page), String(query));
        localStorage.setItem('searchParam', String(query));
        dispatch(setSearchParamsActionCreator(Number(page), String(query)));
    }, []);

    const params = useSelector(paramsSelector);

    const handleRedirect = () => {
        router.push('/not-existing-page');
    };

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setQueryActionCreator(String(event.target.value)));
    };

    const [trigger, { data, isLoading }] = useLazySearchUsersQuery();

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

    return { getCurrentParams, setPage, handleInput, handleSearch, handleRedirect };
};

export default useURL;
*/






import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { paramsSelector } from '../redux/selectors/getSearchParams';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from './redux';
import { useSelector } from 'react-redux';

import { setQueryActionCreator } from '../redux/action-creators/setSearchParamsActionCreator';
import { setSearchParamsActionCreator } from '../redux/action-creators/setSearchParamsActionCreator';
import { setLoadingActionCreator } from '../redux/action-creators/setIsLoading';
import { useLazySearchUsersQuery } from '../redux/slices/querySlice';
import { setUsersActionCreator } from '../redux/action-creators/setUsersActionCreator';

//import { setUsersActionCreator } from '@/store/action-creators/setUsersActionCreator';
import { useRouter } from 'next/router';
import { setNewSearchValueActionCreator } from '../redux/action-creators/setNewSearchValueActionCreator';
import { typedValueSelector } from '../redux/selectors/typedValueSelector';
import { setStoredInLocalStorageActionCreator } from '../redux/action-creators/setStoredInLocalStorageQuery';
const useURL = () => {
    const dispatch = useAppDispatch();
    const router = useRouter()
    const params = useSelector(paramsSelector);
    //	const [searchParams, setSearchParams] = useSearchParams();
    const getCurrentParams = () => {

    };

    const setPage = (page: number, query: string) => {



        const queryObj = {
            page: page
        }
        if (query) {
            if(query!=undefined) {

                Object.assign(queryObj, { query: query });
            }
            //    queryObj
            //queryObj['query'] = query
        }
        router.push({
            pathname: router.pathname,
            query: queryObj,
            
            });
            /*
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
        const { page, query } = router.query;
        console.log("QUERYYY", query)
      /*  if (!query) {
            router.push({
                pathname: router.pathname,

                query: {
                    page: page,
                }
            })
        } */
    }, [])
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
    const handleOpen = () => {

    }
    return { getCurrentParams, setPage, handleInput, handleSearch };
};
export default useURL;


