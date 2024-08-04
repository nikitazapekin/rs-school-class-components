
// components/Layout.tsx
import { ReactNode } from "react";
import { GetServerSidePropsContext } from 'next';
import axios from "axios";
import App from "../../App";
import Providers from "../../redux/Provider";
import { ThemeProvider } from "../ThemeContext";
  
interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children, 

}: LayoutProps) => {
 

  return (
    <>
        <ThemeProvider>
      <Providers>
          {children}
<App />

      </Providers>
        </ThemeProvider>
        
    </>
  );
};

export default Layout; 