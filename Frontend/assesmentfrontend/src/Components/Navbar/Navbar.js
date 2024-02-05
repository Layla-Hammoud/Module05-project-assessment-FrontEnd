import { useEffect, useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { AuthContext } from "../../Context/AuthContext";

function NavBar() {
  const { user, setUser } = useContext(AuthContext);
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  return (
    <div>
      <div className={click ? "main-container" : ""} onClick={() => Close()} />
      <nav className="navbar" onClick={(e) => e.stopPropagation()}>
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            Equilibre
            <i className="fa fa-code"></i>
          </NavLink>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              {!user && (<NavLink
                exact
                to="/signup"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Sig Up
              </NavLink>)}
            </li>
            {/* <li className="nav-item">
                <NavLink
                  exact
                  to="/contact"
                  activeClassName="active"
                  className="nav-links"
                 onClick={click ? handleClick : null}
                >
                  Contact Us
                </NavLink>
              </li> */}
            <li className="nav-item">
             {!user &&(<NavLink
                exact
                to="/login"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Log In
              </NavLink>)}
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
