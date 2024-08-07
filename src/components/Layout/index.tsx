import React from "react";

import { ReactNode } from "react";

import App from "../../App";
import Providers from "../../redux/Provider";
import { ErrorBoundary } from "../ErrorBoundary";

interface LayoutProps {
  children: ReactNode;

}

const Layout = ({ children,
}: LayoutProps) => {


  return (
    <>
<ErrorBoundary>

      <Providers>
        {children}
        <App />

      </Providers>
</ErrorBoundary>


    </>
  );
};

export default Layout; 