
import { ReactNode } from "react";
import Header from "../Header";
import Background from "../Background";


interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            {children}
        </>
    );
};

export default Layout;
{/*
    <Header />
    <Background />
    
    */}