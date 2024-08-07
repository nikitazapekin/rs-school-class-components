

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