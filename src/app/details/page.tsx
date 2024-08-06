import DetailsLayout from "../newComp/details";
import Header from "../newComp/Header";
 import axios, {AxiosResponse} from "axios";
import UserData from "../newComp/UserData";

interface SearchParams {
  query?: string;
  page?: string;
  user: string
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
const Deatils = async (
  {
    searchParams,
  }: {
    searchParams?: SearchParams;
  }
) => {

  
  console.log('searchParams Values', searchParams);
 
  const user = searchParams!.user

  const response: AxiosResponse<User> = await axios.get(`https://api.github.com/users/${user}`);
  console.log("REW", response.data.avatar_url)
  return (<>
    <DetailsLayout>
      <Header />
      <UserData user={response.data} />
    </DetailsLayout>
  </>);
}

export default Deatils;

/*

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
  */

/*
import App from "./newComp/App";
import axios, { AxiosError, AxiosResponse } from "axios";
import Header from "./newComp/Header";
import Providers from "../redux/Provider";

interface SearchParams {
  query?: string;
  page?: string;
}

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

const MyApp = async ({
  searchParams,
}: {
  searchParams?: SearchParams;
}) => {
  console.log('searchParams Values', searchParams);
  
  const query = searchParams?.query || 'type:user';  
  const page = searchParams?.page || '1'; 
  
  const url = `https://api.github.com/search/users?q=${query}&page=${page}&per_page=10`;

  try {
    const response: AxiosResponse<UserData> = await axios.get(url);
    return (
      <>
        <Providers>
          <Header />
          <App users={response.data.items} />
        </Providers>
      </>
    );
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error('Error fetching data:', error.message);
    } else {
      console.error('Unexpected error:', error);
    }
    
    return <div>Error occurred</div>;
  }
}

export default MyApp;
*/