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
export async function getUserData(limit: number, offset: number, typedValue: string): Promise<UserDataArray> {
	let url: string;
	if (typedValue.trim() === '') {
		url = `https://api.github.com/users?page=${offset}&per_page=${limit}`;
		try {
			const data = await fetchUserData(url);
			console.log('Data:', data);
			return data;
		} catch (error) {
			console.error(error);
			throw error;
		}
	} else {
		url = `https://api.github.com/search/users?q=${typedValue}&page=${offset}&per_page=${limit}`;
		try {
			const data = await fetchUserDataAdvanced(url);
			console.log('Data:', data);
			return data.items;
		} catch (error) {
			console.error(error);
			throw error;
		}
	}
}




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
	//https://api.github.com/users/octocat

	try {
		const response: AxiosResponse<User> = await axios.get(`https://api.github.com/users/${username}`);
		console.log("REW", JSON.stringify(response))
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