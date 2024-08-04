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

const MyApp = ( ) => {
  

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
export default MyApp