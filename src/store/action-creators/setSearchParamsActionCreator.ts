
import { setSearchParams, setNextPage, setPrevPage, setQueryPage } from "../slices/appSlice"
import { AppDispatch } from "../store"
export const setSearchParamsActionCreator = (offset: number, query: string) => (dispatch: AppDispatch) => {
    dispatch(setSearchParams({ offset, query }))
    // dispatch(setRemoveStoredElementById(id))
}


//setNextPageActionCreator


export const setNextPageActionCreator = () => (dispatch: AppDispatch) => {
    dispatch(setNextPage())
}



export const setPrevPageActionCreator = () => (dispatch: AppDispatch) => {
    dispatch(setPrevPage())
}



export const setQueryActionCreator = (query: string) => (dispatch: AppDispatch) => {
   dispatch(setQueryPage(query))
}