import { setAlert } from "../slices/appSlice";



import {AppDispatch} from "../store";
 
 
export const Testt =()=>(dispatch: AppDispatch )  => {
 //dispatch(setAuth(data))

 dispatch(setAlert(111))
}
 