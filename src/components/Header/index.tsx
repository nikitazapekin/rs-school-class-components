import { Link } from "react-router-dom";
import "./index.scss";
const Header = () => {
  
  return (
    <>
      <header className="header">
        <ul className="header__inner">
          <li className="header__item">
            <Link to="/">Homepage</Link>
          </li>
          <li className="header__item">
            <Link to="/registration-react-hook-form">React hook form</Link>
          </li>
          <li className="header__item">
            <Link to="/registration-uncontrolled-form">Uncontrolled form</Link>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
