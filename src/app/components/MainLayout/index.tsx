 
import Providers from "../../../redux/Provider";
import Background from "../Background";
import Header from "../Header";
import React from "react";
import { ThemeProvider } from "../ThemeContext";
 

interface LayoutProps {
  children: React.ReactNode;
}
const MainLayout = ({ children }: LayoutProps) => (
  <Providers>
    <ThemeProvider>
   
      <Header />
    <div className="main-container">
      <div className="content-wrapper">{children}</div>
      <Background />
    </div>
      </ThemeProvider>
  </Providers>
);
export default MainLayout;

