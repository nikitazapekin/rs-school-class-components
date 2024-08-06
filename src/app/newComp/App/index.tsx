 
import axios, { AxiosError, AxiosResponse } from 'axios';
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

interface AppProps {
	users: UserDataArray;
  }
function App({ users }: AppProps) {
	let url: string;

  return (
  <>

  
  {users.map(item=> (
	<div>
		{item.login}
	</div>
  ))}
  </>
  );
  }
  export default  App
  /* 
*/
/*

*/
/*
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
    */





/*
import axios, { AxiosError, AxiosResponse } from 'axios';

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

async function fetchUserData(url: string): Promise<UserDataArray> {
	try {
		const response: AxiosResponse<UserDataArray> = await axios.get(url);
		return response.data;
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
async function fetchUserDataAdvanced(url: string): Promise<UserData> {
	try {
		const response: AxiosResponse<UserData> = await axios.get(url);
		return response.data;
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








/*

import axios from 'axios';

export default async function App() {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  const posts = response.data;

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
  */