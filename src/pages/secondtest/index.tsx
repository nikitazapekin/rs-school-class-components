// pages/index.tsx
import { GetServerSidePropsContext } from 'next';
import axios from 'axios';
import App from '../../App';
import Providers from '../../redux/Provider';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

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

interface MyAppProps {
  users: UserDataArray;
  currentPage: number;
}

const MyApp = ({ users, currentPage }: MyAppProps) => {
  const router = useRouter();
  const [page, setPage] = useState(currentPage);

  useEffect(() => {
    if (router.query.page) {
      setPage(parseInt(router.query.page as string, 10));
    }
  }, [router.query.page]);

  const handleClick = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    router.push(`/secondtest?page=${nextPage}`);
  };
console.log("USSeeeeeeeeeeeeeeeeeeeee", users)
  return (
    <>
      <Providers>
        <App />
      </Providers>
        <button onClick={handleClick}>Next Page</button>
     
    </>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { query } = context;
  const page = parseInt(query.page as string, 10) || 1;
  console.log("PAGE", page);

  const limit = 10;
  try {
    //https://api.github.com/search/users?q=${typedValue}&page=${offset}&per_page=${limit}
    const res = await axios.get(`https://api.github.com/search/users?q=react&page=${page}&per_page=${limit}`, {
      headers: {
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache'
      }
    });

    const users: UserDataArray = res.data;
    console.log("USERS", users[0]);

    return {
      props: {
        users, // Передаем данные в компонент
        currentPage: page // Передаем текущую страницу
      },
    };
  } catch (error) {
    console.error("Error fetching users:", error);
    return {
      props: {
        users: [],  
        currentPage: page 
      },
    };
  }
}

export default MyApp;


/* 
// pages/index.tsx (или другой файл страницы)
import { GetServerSidePropsContext } from 'next';
import axios from 'axios';
import App from '../../App';
import Providers from '../../redux/Provider';
import { useRouter } from 'next/router';
import { useState } from 'react';
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
  console.log(users); // Проверяем данные пользователей
const router = useRouter()
const [page, setPage] =useState(1)
const handleClick = () => {
setPage(prev=>prev+1)
router.push(`/secondtest?page=${page + 1}`)
}
  return (
    <>
      <Providers>
        <App />
        <button onClick={handleClick}>Next Page</button>

      </Providers>
	  {users.map(item=> (
		<div>
			{item.login}
		</div>
	  ))}
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


*/