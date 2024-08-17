import { Link } from "react-router-dom";
import "./index.scss";
const Header = () => {

  return (
    <>
      <header className="header">
        <nav  className="header__inner">

          <ul className="header__list">
            <li className="header__item">
              <Link className="header__link" to="/">Homepage</Link>
            </li>
            <li className="header__item">
              <Link className="header__link" to="/registration-react-hook-form">React hook form</Link>
            </li>
            <li className="header__item">
              <Link className="header__link" to="/registration-uncontrolled-form">Uncontrolled form</Link>
            </li>
          </ul>
          <div className="header__background">
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
