
import Providers from "../../../redux/Provider";
import Background from "../Background";
import Header from "../Header";
import React from "react";
 
 

interface LayoutProps {
  children: React.ReactNode;
}
const MainLayout = ({ children }: LayoutProps) => (
<> 
    {children}
</>
);
export default MainLayout;