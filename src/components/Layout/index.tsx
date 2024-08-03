


import { ReactNode } from "react";
import App from "../../App";
import { SearchPageProps, QueryParams } from "../../pages/searchTypes";
import { getServerSideProps } from "../../pages/search";
import { useSelector } from "react-redux";
import { paramsSelector } from "../../redux/selectors/getSearchParams";
import Providers from "../../redux/Provider";
interface LayoutProps {
    children: ReactNode;
   // query: QueryParams
}

const Layout = ({ children, // query 

}: LayoutProps,

    
) => {
 
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

export { getServerSideProps };
export default Layout;
/*
import { ReactNode } from "react";
import App from "../../App";
import { SearchPageProps, QueryParams } from "../../pages/searchTypes";
import { getServerSideProps } from "../../pages/search";
import { useSelector } from "react-redux";
import { paramsSelector } from "../../redux/selectors/getSearchParams";
import Providers from "../../redux/Provider";
interface LayoutProps {
    children: ReactNode;
   // query: QueryParams
}

const Layout = ({ children, // query 

}: LayoutProps,

   query: QueryParams
) => {
const params = useSelector(paramsSelector)
    console.log("QQQQ" , JSON.stringify(query))
    return (
        <>
        <Providers>


            {children}
       
            <App
          //  query={{query: params.query, page: params.offset, per_page: params.limit}}
          query={query}
          />
          </Providers>


        </>
    );
};

export { getServerSideProps };
export default Layout;

*/
/*
import { ReactNode } from "react";
import App from "../../App";
import { SearchPageProps } from "../../pages/searchTypes";

interface LayoutProps {
    children: ReactNode;
    query?: any; // Adjust based on your actual query type
}

const Layout = ({ children, query }: LayoutProps) => {
    return (
        <>
            {children}
            <App query={query} />
        </>
    );
};

export default Layout;




import App from '../App';
import Providers from '../redux/Provider';
 import { getServerSideProps } from './search';
 import { SearchPageProps } from './searchTypes';
function MyApp(
    { query }: SearchPageProps
) {
    return (
        <>
            <Providers>
                fe
             
                </Providers>
                </>
            );
        }
        export default MyApp;
        
        
*/