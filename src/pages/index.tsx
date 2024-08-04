// pages/index.tsx (или другой файл страницы)
import { GetServerSidePropsContext } from 'next';
import axios from 'axios';
import App from '../App';
import Providers from '../redux/Provider';

// Тип данных для пользователей
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

// Пропсы компонента
interface MyAppProps {
  users: UserDataArray;
}

const MyApp = ({ users }: MyAppProps) => {
  

  return (
    <>
		{/*
      <Providers>
        <App />
      </Providers>
		*/}
	 
    </>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { query } = context;
  const page = parseInt(query.page as string, 10) || 1;
  console.log("PAGE", page);

  const limit = 10;
  try {
	const res = await axios.get(`https://api.github.com/users?per_page=${limit}&page=${page}`, {
		headers: {
		  'Cache-Control': 'no-cache',
		  'Pragma': 'no-cache'
		}
	  });
	  
   // const res = await axios.get(`https://api.github.com/users?per_page=${limit}&page=${page}`);
    const users: UserDataArray = res.data;
    console.log("USERS", users[0]);

    return {
      props: {
        users, // Передаем данные в компонент
      },
    };
  } catch (error) {
    console.error("Error fetching users:", error);
    return {
      props: {
        users: [], // В случае ошибки возвращаем пустой массив
      },
    };
  }
}

export default MyApp;






/* 
import App from '../App';
import Providers from '../redux/Provider';
import { GetServerSidePropsContext } from 'next';
import axios from 'axios';
 import { SearchPageProps } from './searchTypes';


 
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
function MyApp(
	users: UserDataArray
//	{ query }: SearchPageProps
) {
	console.log(users)
	return (
		<>
			<Providers>
				fe
				<App />
			 
			 
			</Providers>
		</>
	);
}
//export { getServerSideProps };
export default MyApp;


async function getServerSideProps(context: GetServerSidePropsContext) {
    const { query } = context;
    const page = parseInt(query.page as string, 10) || 1;
    console.log("PAGE", page);
  
    const limit = 10;
    try {
      const res = await axios.get(`https://api.github.com/users?per_page=${limit}&page=${page}`);
      const users: UserDataArray = res.data;
      console.log("USERS", users);
  
      return {
      //  props: {
          users, // передаем данные в компонент
       // },
      };
    } catch (error) {
      console.error("Error fetching users:", error);
      return {
    //    props: {
          users: [], // в случае ошибки возвращаем пустой массив
      //  },
      };
    }
  }

*/






/*

export type UserDataArrayApi = Array<{
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
export interface UserDataApi {
	total_count: number;
	incomplete_results: boolean;
	items: UserDataArrayApi;
}


export async function fetchUserDataAdvanced(url: string): Promise<UserDataApi> {
	try {
		const response: AxiosResponse<UserDataApi> = await axios.get(url);
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
export interface ApiResp {
	props: {
		users: UserDataArrayApi
	}
}
export async function getServerSideProps(limit: number, offset: number, typedValue: string): Promise<ApiResp> {
	let url: string;
	if (typedValue && typedValue.trim() === '') {
		url = `https://api.github.com/search/users?q=type:user&page=${offset}&per_page=${limit}`;
		try {
			const data = await fetchUserDataAdvanced(url);
			console.log('Data:', data);
			return {
				props: {
					users: data.items
				}
			}
		} catch (error) {
			console.error(error);
			throw error;
		}
	} else {
		url = `https://api.github.com/search/users?q=${typedValue}&page=${offset}&per_page=${limit}`;
		try {
			const data = await fetchUserDataAdvanced(url);
			console.log('Data:', data);
			//	return data.items;


			return {
				props: {
					users: data.items
				}
			}
		} catch (error) {
			console.error(error);
			throw error;
		}
	}
}
*/




/*
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'

import { Outlet } from "react-router-dom";
import App from "../App";
import Layout from "../components/Layout";
import Providers from "../redux/Provider";
 
import { useAppDispatch } from "../hooks/redux";
import { setTesting } from "../redux/slices/postsSlice";
import { useDispatch } from "react-redux";
 
type Repo = {
  name: string
  stargazers_count: number
}
 
export const getServerSideProps = (async () => {
  // Fetch data from external API
  const res = await fetch('https://api.github.com/repos/vercel/next.js')
  const repo: Repo = await res.json()

  console.log("res", res)
  // Pass data to the page via props
  return { props: { repo } }
}) satisfies GetServerSideProps<{ repo: Repo }>
 


function MyApp(
	{
		repo,
	  }: InferGetServerSidePropsType<typeof getServerSideProps>
) {

 const handleClich = () => {

 }	
	return (
	<> 	
<Providers>

<p>{repo.stargazers_count}</p>
	<App />  
</Providers>	
 
 
	</>
	);
}
export default MyApp;

*/






{/*
<Layout>

</Layout>
*/}