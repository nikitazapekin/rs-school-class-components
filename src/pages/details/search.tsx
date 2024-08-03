import { usersGithubApi } from '../../redux/slices/userQuerySlice';
import { wrapper } from '../../redux/store';

export const getServerSideProps = wrapper.getServerSideProps((store) => async (context) => {
  const { username } = context.query; 

  console.log("CONTEXT USERS", context.query);
 
  if (typeof username === 'string') {
    await store.dispatch(
      usersGithubApi.endpoints.getUserGithub.initiate({ username })
    );
  }

  return {
    props: {
    
      query: {
        username: username || '',
      },
    },
  };
});



/* import { usersGithubApi } from '../../redux/slices/userQuerySlice';
//import { githubApi } from '../redux/slices/querySlice';
import { wrapper } from '../../redux/store';
export const getServerSideProps = wrapper.getServerSideProps((store) => async (context) => {
const { query, page, per_page=10  } = context.query;
  console.log("CONTEXT", context.query)
  await store.dispatch(
    usersGithubApi.endpoints.getUserGithub.initiate({
      query: ({ String(username) }) => `users/${username}`,
      // query: String(query) || 'type:user', page: Number(page), per_page: Number(per_page)
       })
  );

  return {
    props: {
      query: { query: query || 'type:user', page: Number(page), per_page: Number(per_page) },
    },
  };
});

*/