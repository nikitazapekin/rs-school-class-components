


import { setClearStoredElements} from "../slices/appSlice"
import { AppDispatch } from "../store"
export const clearStoredElementsActionCreator  =()=> (dispatch: AppDispatch )  => {
 dispatch(setClearStoredElements())
    }
     