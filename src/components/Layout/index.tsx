
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