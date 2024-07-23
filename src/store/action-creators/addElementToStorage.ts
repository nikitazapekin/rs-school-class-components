import { setAddToStoredElement } from "../slices/appSlice";
import {AppDispatch} from "../store";
import { UserItem } from "../types";
export const AddElementToStorage =(user: UserItem )=>(dispatch: AppDispatch )  => {
dispatch(setAddToStoredElement(user))
}
 