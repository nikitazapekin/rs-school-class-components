 
 import React from "react";
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