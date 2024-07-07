import axios, { AxiosError, AxiosResponse } from 'axios';
interface UserData {
	total_count: number;
	incomplete_results: boolean;
	items: [
		{
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
		},
	];
}
/*
type UserData = Array<{
id: number,
name: string,
username: string,
email: string
}>
 "total_count": 99,
    "incomplete_results": false,
    "items": [
        {
            "login": "nikitaaa",
            "id": 3757853,
            "node_id": "MDQ6VXNlcjM3NTc4NTM=",
            "avatar_url": "https://avatars.githubusercontent.com/u/3757853?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/nikitaaa",
            "html_url": "https://github.com/nikitaaa",
            "followers_url": "https://api.github.com/users/nikitaaa/followers",
            "following_url": "https://api.github.com/users/nikitaaa/following{/other_user}",
            "gists_url": "https://api.github.com/users/nikitaaa/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/nikitaaa/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/nikitaaa/subscriptions",
            "organizations_url": "https://api.github.com/users/nikitaaa/orgs",
            "repos_url": "https://api.github.com/users/nikitaaa/repos",
            "events_url": "https://api.github.com/users/nikitaaa/events{/privacy}",
            "received_events_url": "https://api.github.com/users/nikitaaa/received_events",
            "type": "User",
            "site_admin": false,
            "score": 1.0
        },
        */

async function fetchUserData(url: string): Promise<UserData> {
	try {
		const response: AxiosResponse<UserData> = await axios.get(url);
		return response.data;
	} catch (error) {
		if (axios.isAxiosError(error)) {
			const axiosError = error as AxiosError;
			console.error('Ошибка при получении данных:', axiosError.message);
		} else {
			console.error('Неизвестная ошибка:', error);
		}
		throw new Error('Ошибка при получении данных');
	}
}

export async function getUserData(limit: number, offset: number, typedValue: string): Promise<UserData> {
	const url = `https://api.github.com/search/users?q=${typedValue}&page=${offset}&per_page=${limit}`;
	// const url = `https://jsonplaceholder.typicode.com/users?q=${typedValue}&_page=${offset}&_limit=${limit}`
	try {
		const data = await fetchUserData(url);
		console.log('Данные:', data);
		return data;
	} catch (error) {
		console.error(error);
		throw error;
	}
}
