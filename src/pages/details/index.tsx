import { GetServerSideProps } from 'next';
import axios, { AxiosError, AxiosResponse } from 'axios';
import DetailsLayout from '../../components/details';
import { useEffect, useState } from 'react';
import React from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { SetClickedUserActionCreator } from '../../redux/action-creators/setClickedUserActionCreator';
import Spinner from '../../components/Spinner';

interface Props {
    user: User;
}

const Details = ({ user }: Props) => {
    const dispatch = useAppDispatch();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        dispatch(SetClickedUserActionCreator(user));
        setLoading(false);
    }, [user, dispatch]);

    if (loading) {
        return <Spinner />
    }

    return (
        <>
          
        </>
    );
};

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
        return {
            props: {
                user: response.data
            }
        };
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const axiosError = error as AxiosError;
            console.error('Error fetching data:', axiosError.message);
        } else {
            console.error('Unknown error:', error);
        }
        throw new Error('Error fetching data');
    }
};
