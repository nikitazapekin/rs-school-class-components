


import { setModalOpen } from "../slices/appSlice"
import { AppDispatch } from "../store"
export const OpenModalActionCreator =()=> (dispatch: AppDispatch )  => {
 
    dispatch(setModalOpen())
 
    }
     