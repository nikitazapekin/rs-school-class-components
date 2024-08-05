import { GetServerSideProps } from 'next';
import axios, { AxiosError, AxiosResponse } from 'axios';
import DetailsLayout from '../../components/details';
import { useEffect } from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { SetClickedUserActionCreator } from '../../redux/action-creators/setClickedUserActionCreator';
interface Props {
	user: User
}
const Details = (
{user}: Props
) => {
const dispatch = useAppDispatch()
    console.log("USER" , user)
    useEffect(()=> {
dispatch(SetClickedUserActionCreator(user))
    }, [user])
    return (<>

    </>);
}
Details.Layout = DetailsLayout;
export default Details;
interface User {
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


export const getServerSideProps: GetServerSideProps = async (context) => {
    const { user } = context.query;


    const username = parseInt(user as string, 10)

    try {
        const response: AxiosResponse<User> = await axios.get(`https://api.github.com/users/${username}`);
        return {
            props: {

                user: response.data
            }
        }
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const axiosError = error as AxiosError;
            console.error('Error fetching data:', axiosError.message);
        } else {
            console.error('Unknown error:', error);
        }
        throw new Error('Error fetching data');
    }


}
/*const offset = parseInt(page as string, 10);
const perPage = parseInt(limit as string, 10);
let url: string;
if (!query) {
    url = `https://api.github.com/search/users?q=type:user&page=${offset}&per_page=${perPage}`;
} else {
    url = `https://api.github.com/search/users?q=${query}&page=${offset}&per_page=${perPage}`;
}
try {
    let users: UserDataArray = [];

    if (!query) {
        const response: AxiosResponse<UserData> = await axios.get(url);
        users = response.data.items;
    } else {
        const response: AxiosResponse<UserData> = await axios.get(url);
        users = response.data.items;
    }
    return {
        props: {
            users,
        },
    };
} catch (error) {
    if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        console.error('Error fetching data:', axiosError.message);
    } else {
        console.error('Unknown error:', error);
    }
    return {
        props: {
            users: [],
         
        },
    };
}
};
*/





/*
interface User {
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
export const getPersonalData = async (username: string): Promise<User> => {
    try {
        const response: AxiosResponse<User> = await axios.get(`https://api.github.com/users/${username}`);
        return response.data
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const axiosError = error as AxiosError;
            console.error('Error fetching data:', axiosError.message);
        } else {
            console.error('Unknown error:', error);
        }
        throw new Error('Error fetching data');
    }


}
    */