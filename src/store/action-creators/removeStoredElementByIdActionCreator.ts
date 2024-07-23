
import {setRemoveStoredElementById} from "../slices/appSlice"
import { AppDispatch } from "../store"
export const clearStoredElementsByIdActionCreator  =(id: number)=> (dispatch: AppDispatch )  => {
dispatch(setRemoveStoredElementById(id))
    }
     

