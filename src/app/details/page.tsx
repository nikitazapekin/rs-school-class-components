import DetailsLayout from "../components/details";
import Header from "../components/Header";
 import axios, {AxiosResponse} from "axios";
import UserData from "../components/UserData";
import React from "react";
import Providers from "../../redux/Provider";
import AppWrapper from "../components/AppWrapper";
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
  const user = searchParams!.user
  const response: AxiosResponse<User> = await axios.get(`https://api.github.com/users/${user}`);
  return (<>
  <Providers>

    <DetailsLayout>
      <Header />
      <UserData user={response.data} />
	  <AppWrapper />
    </DetailsLayout>
  </Providers>
  </>);
}

export default Deatils;
 