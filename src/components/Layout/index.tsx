import { ReactNode } from "react";
import App from "../../App";

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            {children}
           
        </>
    );
};

export default Layout;
/*import { ReactNode } from "react";
import App from "../../App";
import { QueryParams } from "../../pages/searchTypes";

interface LayoutProps {
    children: ReactNode;
    query: QueryParams
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
*/

/*
import { ReactNode } from "react";
import { getServerSideProps } from "../../pages/search";
import App from "../../App";
import { SearchPageProps } from "../../pages/searchTypes";
interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps, { query }: SearchPageProps) => {
    return (
        <>
            {children}
            <App
                query={query}
            />

        </>
    );
};
export { getServerSideProps };
export default Layout;

*/
{/*
    <Header />
    <Background />
    





     
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
    export { getServerSideProps };
    export default MyApp;
    
    
    */}