import Providers from "../../redux/Provider";
import App from "../../App";
import { getServerSideProps } from '../search';
import { SearchPageProps } from '../searchTypes';
import DetailsLayout from "../../components/details";
const Details = (

    { query }: SearchPageProps
) => {
    return ( <>

    <Providers>
        <DetailsLayout>

    <App 
				query={query}
				/>
                </DetailsLayout>
    </Providers>
    </> );
}
 
export default Details;