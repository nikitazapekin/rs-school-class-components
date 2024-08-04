import Providers from "../../redux/Provider";
import App from "../../App";
import { getServerSideProps } from './search';
import { SearchPageProps } from '../searchTypes';
import DetailsLayout from "../../components/details";
const Details = (
    { query }: SearchPageProps,
    username: string
) => {
    return (<>

    csacsa
    {/*
        <Providers>
        <DetailsLayout>
                acs
             <App
                    query={query}
                />  
            </DetailsLayout>
        </Providers>
    */}
    </>);
}
Details.Layout = DetailsLayout;


export { getServerSideProps };
export default Details;