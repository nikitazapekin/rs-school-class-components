/*
import { ReactNode } from "react";
import StoreProvider from "../StoreProvider";

const Layout = (children:  React.ReactNode) => {
    return (  <>
    <StoreProvider>
        {children}
    </StoreProvider>
    </>);
}
 
export default Layout;
*/

import { ReactNode } from "react";
import StoreProvider from "../StoreProvider";

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <StoreProvider>
            {children}
        </StoreProvider>
    );
};

export default Layout;
