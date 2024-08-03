import UserData from "./UserData";

interface LayoutProps {
    children: React.ReactNode;
}

const DetailsLayout = ({children} : LayoutProps) => {
    return ( 

        <>

        {children}
<UserData />
        </>
     );
}
 
export default DetailsLayout;