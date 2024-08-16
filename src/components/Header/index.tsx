import { Link } from "react-router-dom";
import "./index.scss"
const Header = () => {
    return (<>
        <header className="header">
            <div className="header__inner">
                <Link to="/">
                    Homepage
                </Link>
                <Link to="/registration-react-hook-form">
                 React hook form
                </Link>

                <Link to="/registration-uncontrolled-form">
              Uncontrolled form
                </Link>
            </div>
        </header>
    </>);
}

export default Header;