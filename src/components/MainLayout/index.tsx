import Providers from "../../redux/Provider";
import Background from "../Background";
import Header from "../Header";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}
const MainLayout = ({ children }: LayoutProps) => (
  <Providers>
    <div className="main-container">
      <Header />
      <div className="content-wrapper">{children}</div>
      <Background />
    </div>
  </Providers>
);
export default MainLayout;

