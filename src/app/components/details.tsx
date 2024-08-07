 
 import React from "react";
import App from "./App";
interface LayoutProps {
    children: React.ReactNode;
}
const DetailsLayout = ({ children }: LayoutProps) => {
    return (
        <>
       
            {children}
          
       {/*
       <App />
       */}
        </>
    );
}

export default DetailsLayout;