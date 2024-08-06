import App from "../../App";
import Header from "./Header";
import UserData from "./UserData";
//import UserData 

interface LayoutProps {
    children: React.ReactNode;
}
const DetailsLayout = ({ children }: LayoutProps) => {
    return (
        <>
       
            {children}
           {/*
            <UserData />
            <UserData />
           */}
            <App />
        </>
    );
}

export default DetailsLayout;