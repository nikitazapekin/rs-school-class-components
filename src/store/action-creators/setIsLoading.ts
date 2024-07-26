
import { setLoading } from "../slices/appSlice"
import { AppDispatch } from "../store"
export const setLoadingActionCreator = (isLoading: boolean) => (dispatch: AppDispatch) => {

    console.log("LOADDDDDD", isLoading)
    dispatch(setLoading(isLoading))
}
