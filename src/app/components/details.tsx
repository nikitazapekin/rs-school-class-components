 
 import React from "react";
import App from "./App";
interface LayoutProps {
    children: React.ReactNode;
}
const DetailsLayout = ({ children }: LayoutProps) => {
    return (
        <>
       
            {children}
          
    
        </>
    );
}

export default DetailsLayout;