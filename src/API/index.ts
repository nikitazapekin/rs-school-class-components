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
	try {
		const data = await fetchUserData(url);
		console.log('Данные:', data);
		return data;
	} catch (error) {
		console.error(error);
		throw error;
	}
}
