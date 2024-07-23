import { setSearchParamsURL, setNextPage, setPrevPage, setQueryPage, setFirstPage } from "../slices/appSlice"
import { AppDispatch } from "../store"
export const setSearchParamsActionCreator = (offset: number, query: string) => (dispatch: AppDispatch) => {
    dispatch(setSearchParamsURL({ offset, query }))
}
export const setFirstPageActionCreator = () => (dispatch: AppDispatch) => {
    dispatch(setFirstPage())
}
export const setNextPageActionCreator = () => (dispatch: AppDispatch) => {
    dispatch(setNextPage())
}
export const setPrevPageActionCreator = () => (dispatch: AppDispatch) => {
    dispatch(setPrevPage())
}
export const setQueryActionCreator = (query: string) => (dispatch: AppDispatch) => {
   dispatch(setQueryPage(query))
}