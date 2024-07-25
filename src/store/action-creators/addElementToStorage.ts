
import { setAddToStoredElement } from "../slices/selectedElementsSlice";
import {AppDispatch} from "../store";
import { UserItem } from "../types";
export const AddElementToStorage =(user: UserItem )=>(dispatch: AppDispatch )  => {
dispatch(setAddToStoredElement(user))
}
 