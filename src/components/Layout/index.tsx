
import { ReactNode } from "react";
import Header from "../Header";
import Background from "../Background";


interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <Header />
            {children}
            <Background />
        </>
    );
};

export default Layout;
