import Providers from "../../redux/Provider";
import Test from "./testComp";
import { getServerSideProps } from "./search";
import { SearchPageProps } from "./types";
const Page = ({ query }: SearchPageProps) => {
  return (
    <>
      <Providers>
        <Test query={query} />
      </Providers>
    </>
  );
};

export { getServerSideProps }; 
export default Page;




/* import Providers from "../../redux/Provider";
import Test from "./testComp";

const Page = () => {
  return ( <>
  <Providers>
    <Test />
  </Providers>
  </>
   );
}
 
export default Page;

*/





/* // pages/search.tsx
import { useSearchUsersQuery } from '../../redux/slices/querySlice';
import { wrapper } from '../../redux/store';
import { githubApi } from '../../redux/slices/querySlice';
import Providers from '../../redux/Provider';
 // types.ts
export interface User {
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

export interface QueryParams {
	query: string;
	page: number;
	per_page: number;
}

export interface SearchPageProps {
	query: QueryParams;
}
const SearchPage = ({ query }: SearchPageProps) => {
  const { data, error, isLoading } = useSearchUsersQuery(query);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return (
    <Providers>

    <div>
      <h1>Search Results</h1>
      {data && data.items.map(user => (
        <div key={user.id}>{user.login}</div>
      ))}
    </div>
    </Providers>
  );
};

export const getServerSideProps = wrapper.getServerSideProps((store) => async (context) => {
  const { query, page = 1, per_page = 10 } = context.query;

  await store.dispatch(
    githubApi.endpoints.searchUsers.initiate({ query: String(query) || 'type:user', page: Number(page), per_page: Number(per_page) })
  );

  return {
    props: {
      query: { query: query || 'type:user', page: Number(page), per_page: Number(per_page) },
    },
  };
});

export default SearchPage;
*/

/* // pages/search.js
import { useSearchUsersQuery } from '../../redux/slices/querySlice';
//import { useSearchUsersQuery } from '../path-to-your-api';
import { wrapper } from '../../redux/store';
//import { githubApi } from '../path-to-your-api';
import { githubApi } from '../../redux/slices/querySlice';

export interface User {
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

const SearchPage = ({ query }) => {
  const { data, error, isLoading } = useSearchUsersQuery(query);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return (
    <div>
      <h1>Search Results</h1>
      {data.items.map(user => (
        <div key={user.id}>{user.login}</div>
      ))}
    </div>
  );
};

export const getServerSideProps = wrapper.getServerSideProps((store) => async (context) => {
  const { query, page = 1, per_page = 10 } = context.query;

  await store.dispatch(
    githubApi.endpoints.searchUsers.initiate({ query: query || 'type:user', page: Number(page), per_page: Number(per_page) })
  );

  return {
    props: {
      query: { query: query || 'type:user', page: Number(page), per_page: Number(per_page) },
    },
  };
});

export default SearchPage;
*/


/*
import { useEffect } from "react";
import { useAppDispatch } from "../../hooks/redux";
import { fetchUserData } from "../../redux/slices/appSlice";

const Homepage = () => {
 
    return (
        <>
        Homepage
        </>
      );
}
 
export default Homepage;
*/

/*
// pages/search.js
import { useSearchUsersQuery } from '../path-to-your-api';
import { wrapper } from '../path-to-your-store';
import { githubApi } from '../path-to-your-api';

const SearchPage = ({ query }) => {
  const { data, error, isLoading } = useSearchUsersQuery(query);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return (
    <div>
      <h1>Search Results</h1>
      {data.items.map(user => (
        <div key={user.id}>{user.login}</div>
      ))}
    </div>
  );
};

export const getServerSideProps = wrapper.getServerSideProps((store) => async (context) => {
  const { query, page = 1, per_page = 10 } = context.query;

  await store.dispatch(
    githubApi.endpoints.searchUsers.initiate({ query: query || 'type:user', page: Number(page), per_page: Number(per_page) })
  );

  return {
    props: {
      query: { query: query || 'type:user', page: Number(page), per_page: Number(per_page) },
    },
  };
});

export default SearchPage;

*/