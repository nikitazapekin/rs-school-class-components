


import React, { useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import { useLoaderData } from "@remix-run/react";
import { redirect } from "@remix-run/node";

import { useAppDispatch } from '../../src/hooks/redux'; 
import { setUsersActionCreator } from "../../src/store/action-creators/setUsersActionCreator"
import App from "../../src/components/App/index"
import Background from '../../src/components/Background';
import {CatchBoundary} from "../../src/components/catchBoundary/index"
type UserDataArray = Array<{
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
}>;

interface LoaderData {
  users: UserDataArray;
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

  try {
    const apiUrl = `https://api.github.com/search/users?q=${query}&page=${page}&per_page=${limit}`;
    const response: AxiosResponse<{ items: UserDataArray }> = await axios.get(apiUrl);
    const users = response.data.items;
console.log(users)
    return { users, query, page, limit };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Error fetching data:', error.message);
    } else {
      console.error('Unknown error:', error);
    }
    return redirect("/");
  }
}

export default function Index() {
  const { users } = useLoaderData<LoaderData>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (users.length > 0) {
      dispatch(setUsersActionCreator(users));
    }
  }, [users, dispatch]);

  return (

   <>
      <App 
      />
      <Background />
      </>
 
  );
}

export { CatchBoundary };