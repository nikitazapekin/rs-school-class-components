import React from "react";

import { ReactNode } from "react";

import App from "../../App";
import Providers from "../../redux/Provider";


interface LayoutProps {
  children: ReactNode;

}

const Layout = ({ children,
}: LayoutProps) => {


  return (
    <>

      <Providers>
        {children}
        <App />

      </Providers>



    </>
  );
};

export default Layout; 