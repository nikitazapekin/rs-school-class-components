import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
//import { AppDispatch, RootState } from '@/store/store';
import { RootState, AppDispatch } from '../lib/store';
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
