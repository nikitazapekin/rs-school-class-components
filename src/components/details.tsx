import App from "../App";
import UserData from "./UserData";
import React from "react";
interface LayoutProps {
    children: React.ReactNode;
}
const DetailsLayout = ({ children }: LayoutProps) => {
    return (
        <>
            {children}
            <UserData />
            <App />
        </>
    );
}

export default DetailsLayout;