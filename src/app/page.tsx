import App from "./newComp/App";
import axios, {AxiosError, AxiosResponse} from "axios";
interface SearchParams {
  [key: string]: string | undefined;
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
  console.log('searchParams', searchParams!.page);
let url: string
if(searchParams?.query!=undefined) {
url =`https://api.github.com/search/users?q=${searchParams.typedValue}&page=${searchParams.page}&per_page=${10}`
}
else {
  url = `https://api.github.com/search/users?q=type:user&page=${searchParams!.page}&per_page=${10}`;
}
const response: AxiosResponse<UserData> = await axios.get(url);

console.log(response.data)
  return ( 
    <>

    
      <App users={response.data.items} />
    </>
  );
}

export default MyApp;



/*

//import App from "./newComp/App";
import App from "./newComp/App/index.server"
const MyApp = async ({
  searchParams,
}: {
  searchParams?:{ [key: string]: string | undefined };
}) => {
  console.log('searchParams', searchParams);

  return ( 
    <>
    <App />
    </>
   );
}
 
export default MyApp;

*/
/*
const NewsPage = async ({
    searchParams,
}: {
    searchParams?:{ [key: string]: string | undefined };
}) => {
    console.log('searchParams', searchParams);

    return (
        <>  
        </>
    );
};

export default NewsPage;
*/

/*
import Layout from "./components/Layout";

const MyApp = ( ) => {
  

  return (
    <>
    <Layout>
	 <></>
    </Layout>
	 
    </>
  );
}; 
export default MyApp

*/