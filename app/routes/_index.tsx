


import React, { useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import { useLoaderData } from "@remix-run/react";
import { redirect } from "@remix-run/node";

import { useAppDispatch } from '../../src/hooks/redux'; 
import { setUsersActionCreator } from "../../src/store/action-creators/setUsersActionCreator"
import App from "../../src/components/App/index"
import Background from '../../src/components/Background';
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
      <App // users={users} 
      />
      <Background />
      </>
 
  );
}






/*
import React from 'react';
 
//import { setTest } from '../../src/teststore/slice';

import axios from "axios";
import { useLoaderData } from "@remix-run/react";
import { redirect } from "@remix-run/node";
import App from "../../src/App"

import { ThemeProvider } from '../../src/components/ThemeContext';


 
export async function loader({ request }) {
  try {
    const url = new URL(request.url);
    const search = new URLSearchParams(url.search);
    const postId = search.get("postId");
   const  query =search.get("query")
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    console.log(res.data)
    return { postId, title: res.data.title, body: res.data.body };
  } catch (err) {
    console.error(err);
    return redirect("/");
  }
}
export default function Index() {
  return (
    <>
<ThemeProvider>
  th
</ThemeProvider>

    </>
  );
} 
  */
      //<App />

/*
 
import axios from 'axios';
import React from 'react';
import { GetServerSideProps } from 'next';
import { AxiosError, AxiosResponse } from 'axios';
import { useEffect } from 'react';
import { useAppDispatch } from '../hooks/redux';
import { setUsersActionCreator } from '../redux/action-creators/setUsersActionCreator';
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
interface UserData {
	total_count: number;
	incomplete_results: boolean;
	items: UserDataArray;
}
interface Props {
	users: UserDataArray;
	query: string;
	page: number;
	limit: number;
}

const UsersPage = ({ users }: Props) => {
	const dispatch = useAppDispatch()
	useEffect(() => {
		dispatch(setUsersActionCreator(users))
	}, [users])
	return (
		<div>
			 
		</div>
	);
};

export default UsersPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
	const { query, page , limit = '10' } = context.query;
	const offset = parseInt(page as string, 10);
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