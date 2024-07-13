/*
type UserData = {
    login: string;
    id: number;
    avatar_url: string;
    html_url: string;
    // Add other user data fields as required
};

type UserDataArray = UserData[];

const GITHUB_TOKEN = 'your_github_token_here'; // Replace this with your actual token

async function fetchUserDataAdvanced(url: string): Promise<any> {
    const response = await fetch(url, {
        headers: {
            'Authorization': `token ${GITHUB_TOKEN}`
        }
    });

    if (!response.ok) {
        throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
    }

    return await response.json();
}

export async function getUserData(limit: number, offset: number, typedValue: string): Promise<UserDataArray> {
    let url: string;
    if (typedValue.trim() === '') {
        url = `https://api.github.com/search/users?q=type:user&page=${offset}&per_page=${limit}`;
    } else {
        url = `https://api.github.com/search/users?q=${typedValue}&page=${offset}&per_page=${limit}`;
    }

    try {
        const data = await fetchUserDataAdvanced(url);
        console.log('Data:', data);
        return data.items;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
*/

import axios, { AxiosError, AxiosResponse } from 'axios';
import { UserData, UserDataArray } from './types.ts';

export async function fetchUserDataAdvanced(url: string): Promise<UserData> {
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
		url = `https://api.github.com/search/users?q=type:user&page=${offset}&per_page=${limit}`;
		try {
			const data = await fetchUserDataAdvanced(url);
			console.log('Data:', data);
			return data.items;
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
/*
 */
