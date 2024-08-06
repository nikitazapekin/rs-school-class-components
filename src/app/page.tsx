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