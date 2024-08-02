 
import { githubApi } from '../redux/slices/querySlice';

import { wrapper } from '../redux/store';
export const getServerSideProps = wrapper.getServerSideProps((store) => async (context) => {
//  const { query, page = 1, per_page = 10 } = context.query;
const { query, page, per_page=10  } = context.query;
  console.log("CONTEXT", context.query)
  await store.dispatch(
    githubApi.endpoints.searchUsers.initiate({ query: String(query) || 'type:user', page: Number(page), per_page: Number(per_page) })
  );

  return {
    props: {
      query: { query: query || 'type:user', page: Number(page), per_page: Number(per_page) },
    },
  };
});