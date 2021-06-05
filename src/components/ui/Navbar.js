import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";

export const Navbar = () => {
  const {
    authState: { name, logged },
  } = useContext(AuthContext);
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Asociaciones
      </Link>
      <div className="container-fluid">
        <div className="navbar-collapse">
          <div className="navbar-nav">
            <NavLink
              activeClassName="active"
              className="nav-item nav-link"
              exact
              to="/marvel"
            >
              Marvel
            </NavLink>

            <NavLink
              activeClassName="active"
              className="nav-item nav-link"
              exact
              to="/dc"
            >
              DC
            </NavLink>
          </div>
        </div>
      </div>
      <div className="navbar-collapse collapse">
        <ul className="navbar-nav ml-auto">
          {logged && name && (
            <span className={"nav-item nav-link text-info"}>{name}</span>
          )}
          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/login"
          >
            Logout
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};
