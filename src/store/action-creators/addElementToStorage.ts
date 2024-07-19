import { setAddToStoredElement } from "../slices/appSlice";
import {AppDispatch} from "../store";
interface UserItem {
	login: string;
	id: number;
	node_id: string;
	avatar_url: string;
	gravatar_id: string;
	url: string;
	html_url: string;
	followers_url: string;
	following_url: string;
	gists_url: string;
	starred_url: string;
	subscriptions_url: string;
	organizations_url: string;
	repos_url: string;
	events_url: string;
	received_events_url: string;
	type: string;
	site_admin: boolean;
	score: number;
}
/*
//export const AddElementToStorage =()=>(dispatch: AppDispatch, user: UserItem  )  => {
    export const AddElementToStorage =( dispatch: AppDispatch, user: UserItem  )  => {
 //dispatch(setAlert(111))
 //dispatch(setAddToStoredElement(user))
}


import {AppDispatch} from "../store";
import { setIsAuthorized } from "../slices/IsUnauthorized";
 interface IsUnauthorizedProps {
      isUnauthorized: boolean
    }
export const IsUnauthorizedAction =(isUnauthorized:IsUnauthorizedProps)=>(dispatch: AppDispatch )  => {
 dispatch(setIsAuthorized(isUnauthorized))
}
 
*/

/*
import {AppDispatch} from "../store";
import { setIsAuthorized } from "../slices/IsUnauthorized";
 interface IsUnauthorizedProps {
      isUnauthorized: boolean
    }
      */
export const AddElementToStorage =(user: UserItem )=>(dispatch: AppDispatch )  => {
// dispatch(setIsAuthorized(isUnauthorized))

console.log("UUU", user)

dispatch(setAddToStoredElement(user))
}
 