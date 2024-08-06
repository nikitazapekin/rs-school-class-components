import { GetServerSideProps } from 'next';
import axios, { AxiosError, AxiosResponse } from 'axios';
import DetailsLayout from '../../components/details';
import { useEffect } from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { SetClickedUserActionCreator } from '../../redux/action-creators/setClickedUserActionCreator';
//import { SetClickedUserActionCreator } from '../../redux/action-creators/setClickedUserActionCreator';
interface Props {
    user: User
}
const Details = (
    { user }: Props
) => {
    const dispatch = useAppDispatch()
    useEffect(() => {
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

 
  const username = user as string;
    try {
        const response: AxiosResponse<User> = await axios.get(`https://api.github.com/users/${username}`);
        console.log(response)
        console.log(username)
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


 