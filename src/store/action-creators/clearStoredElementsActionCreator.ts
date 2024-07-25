


import { setClearStoredElements} from "../slices/selectedElementsSlice"
import { AppDispatch } from "../store"
export const clearStoredElementsActionCreator  =()=> (dispatch: AppDispatch )  => {
 dispatch(setClearStoredElements())
    }
     