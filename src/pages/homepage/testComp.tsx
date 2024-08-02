import { useSearchUsersQuery } from '../../redux/slices/querySlice';
import Providers from '../../redux/Provider';
import { SearchPageProps } from './types'; // Adjust the import path as needed

const Test = ({ query }: SearchPageProps) => {
  const { data, error, isLoading } = useSearchUsersQuery(query);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return (
    <Providers>
      <div>
        <h1>Search Results</h1>
        {data && data.items.map(user => (
          <div className="sea-test" key={user.id}>{user.login}</div>
        ))}
      </div>
    </Providers>
  );
};

export default Test;






// pages/search.tsx
/*
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
const Test = ({ query }: SearchPageProps) => {
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

export default Test;


*/