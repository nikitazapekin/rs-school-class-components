import { useRouter } from "next/router";




import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
//import { paramsSelector } from '@/store/selectors/getSearchParams';

import { paramsSelector } from '../lib/selectors/getSearchParams';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from './redux';
import { useSelector } from 'react-redux';
import { setQueryActionCreator } from '../lib/action-creators/setSearchParamsActionCreator';
//import { setQueryActionCreator } from '@/store/action-creators/setSearchParamsActionCreator';
//import { setSearchParamsActionCreator } from '@/store/action-creators/setSearchParamsActionCreator';
import { setSearchParamsActionCreator } from '../lib/action-creators/setSearchParamsActionCreator';
//import { setLoadingActionCreator } from '@/store/action-creators/setIsLoading';
import { setLoadingActionCreator } from '../lib/action-creators/setIsLoading';
import { useLazySearchUsersQuery } from '../lib/slices/querySlice';
import { setUsersActionCreator } from '../lib/action-creators/setUsersActionCreator';
//import { useLazySearchUsersQuery } from '@/store/slices/querySlice';
//import { setUsersActionCreator } from '@/store/action-creators/setUsersActionCreator';
const useCustomRouter = () => {
    const dispatch = useAppDispatch();
    const router = useRouter()
    const goToHomePage = () => {
        router.push('/homepage');
        console.log(router.pathname); 
        console.log(router.query);  
    };






    
    return { goToHomePage }
}

export default useCustomRouter;