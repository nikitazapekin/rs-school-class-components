
import { setUsers } from "../slices/appSlice"
import { AppDispatch } from "../store"
import { UserDataArray } from "../types"
/*
export type UserDataArray = Array<{
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
}>; */
export const setUsersActionCreator = (data: UserDataArray  ) => (dispatch: AppDispatch) => {
   dispatch(setUsers(data))
 }