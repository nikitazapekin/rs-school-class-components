
import {setLoading} from "../slices/appSlice"
import { AppDispatch } from "../store"
export const setLoadingActionCreator  =(isLoading: boolean)=> (dispatch: AppDispatch )  => {
// dispatch(setRemoveStoredElementById(id))
dispatch(setLoading(isLoading))
    }
     