
// components/Layout.tsx
import { ReactNode } from "react";
import { GetServerSidePropsContext } from 'next';
import axios from "axios";
import App from "../../App";
import Providers from "../../redux/Provider";
import { ThemeProvider } from "../ThemeContext";
import Header from "../Header";
//import { UserDataArray } from "../../pages/searchTypes"; // импортируйте правильный тип, если он уже определен

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
interface LayoutProps {
  children: ReactNode;
  //users: UserDataArray; // добавляем users как пропс
}

const Layout = ({ children, //users

}: LayoutProps) => {
  //  console.log(users); // должно выводить данные пользователей

  return (
    <>
        <ThemeProvider>
      <Providers>
          {children}
<App />

      </Providers>
        </ThemeProvider>
        
    </>
  );
};

export default Layout;
/*
<Header />
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
        props: {
          users, // передаем данные в компонент
        },
      };
    } catch (error) {
      console.error("Error fetching users:", error);
      return {
        props: {
          users: [], // в случае ошибки возвращаем пустой массив
        },
      };
    }
  }
*/
/*
import { ReactNode } from "react";
import App from "../../App";
import { SearchPageProps, QueryParams } from "../../pages/searchTypes";
 import axios from "axios";
import { useSelector } from "react-redux";
import { paramsSelector } from "../../redux/selectors/getSearchParams";
import Providers from "../../redux/Provider";
import { GetServerSidePropsContext } from 'next';
interface LayoutProps {
    children: ReactNode;
    
   // query: QueryParams
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
const Layout = ({ children, // query 

}: LayoutProps,
users:  UserDataArray
    
) => {
 console.log(users)
    return (
        <>
        <Providers>


        {children}
        
            <App
       
          />
          </Providers>

         
        </>
    );
};

 
export default Layout; 
 
 export async function getServerSideProps(context: GetServerSidePropsContext) {
     const { query } = context;
     //const page = parseInt(query.page, 10) || 1;  
     const page = parseInt(query.page as string, 10) || 1;
      console.log("PAGEEEEEE", page)
 
      const limit = 10;
 
      const res = await axios.get(`https://api.github.com/users?per_page=${limit}&page=${page}`);
      const users = res.data;
    console.log("USSS", users)
      return {
        props: {
          users,
         // page: parseInt(page, 10),
        },
      };
   }
        */