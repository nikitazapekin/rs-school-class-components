import Providers from "../../redux/Provider";
import Header from "../Header";

const MainLayout = ({ children }) => (
  <Providers>

  <div className="main-container">
    <Header />

    <div className="content-wrapper">{children}</div>

    
  </div>
  </Providers>
);

export default MainLayout;