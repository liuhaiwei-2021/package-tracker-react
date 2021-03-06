//NPM packages
import { Link, NavLink } from "react-router-dom";
//Project files
import "../styles/Navigation.css";

function Navigation() {
  return (
    <div className="nav-bar">
      <div className="nav-container">
        <div>
          <Link className="navbar-link" to="/">
            <img className="logo" src="images/logo.png" alt="logo" />
          </Link>
        </div>

        <ul className="navbar-items">
          <li className="nav-item">
            <NavLink className="nav-link" to="/" exact="true">
              Track
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact" exact="true">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navigation;
