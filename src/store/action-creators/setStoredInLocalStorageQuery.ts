
import { setStoredInLocalStorageQuery } from "../slices/appSlice"
import { AppDispatch } from "../store"
export const setStoredInLocalStorageActionCreator = (query: string) => (dispatch: AppDispatch) => {
  //  dispatch(setQueryPage(query))
  dispatch(setStoredInLocalStorageQuery(query))
 }