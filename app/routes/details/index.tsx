import  { useEffect } from "react";
import axios, { AxiosResponse } from 'axios';
import { useLoaderData } from "@remix-run/react";
import { redirect } from "@remix-run/node";
import UserData from "../../../src/components/UserData/index"
import App from "../../../src/components/App";
import Background from "../../../src/components/Background";
import { useAppDispatch } from "../../../src/hooks/redux";
import { setClickedUser } from "../../../src/store/slices/appSlice";
import Spinner from "../../../src/components/Spinner";
import { useNavigation } from '@remix-run/react';
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
interface LoaderData {
    user: User;
    query: string;
    page: number;
    limit: number;
}

export async function loader({ request }: { request: Request }) {
    const url = new URL(request.url);
    const search = new URLSearchParams(url.search);
    const query = search.get("query") || "type:user";
    const page = parseInt(search.get("page") || "1", 10);
    const limit = parseInt(search.get("limit") || "10", 10);
    const username = search.get("user");
    try {
        const apiUrl = `https://api.github.com/users/${username}`;
        const response: AxiosResponse<{ items: User }> = await axios.get(apiUrl);
        const user = response.data;
        console.log(user)
        return { user, query, page, limit };
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Error fetching data:', error.message);
        } else {
            console.error('Unknown error:', error);
        }
        return { user: [], query: "", page: 1, limit: 10 };

    }
}
const Deatils = () => {
    const { user } = useLoaderData<LoaderData>();
    const dispath = useAppDispatch()

    useEffect(() => {
        dispath(setClickedUser(user))
    }, [user])
    const { state } = useNavigation();
    console.log(state)
    return (
        <>

            {state === 'loading' && (
                <div style={{ width: "100%", height: "100vh", position: "relative", zIndex: "111111", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Spinner />

                </div>
            )
            }
            <App />
            <Background />
            <UserData />

        </>
    );
}

export default Deatils; 