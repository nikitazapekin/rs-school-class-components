import { setAlert } from "../slices/appSlice";



import {AppDispatch} from "../store";
 
 
export const Testt =()=>(dispatch: AppDispatch )  => {
 dispatch(setAlert(111))
}
 