import NotFoundComponent from "./NotFound";
import React from "react";
interface LayoutProps {
    children: React.ReactNode;
}

const NotLayout = ({ children }: LayoutProps) => {
    return (<>


 {children}
   
<NotFoundComponent />
    </>);
}

export default NotLayout;
 