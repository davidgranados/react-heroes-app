import React, { useContext } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";

export const Navbar = () => {
  const {
    authState: { name, logged },
    authDispatch,
  } = useContext(AuthContext);
  const history = useHistory();
  const handleLogout = () => {
    authDispatch({ type: types.logout });
    history.replace("/login");
  };
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
            <NavLink
              activeClassName="active"
              className="nav-item nav-link"
              exact
              to="/search"
            >
              search
            </NavLink>
          </div>
        </div>
      </div>
      <div className="navbar-collapse collapse">
        <ul className="navbar-nav ml-auto">
          {logged && name && (
            <span className={"nav-item nav-link text-info"}>{name}</span>
          )}
          <button className="nav-item nav-link btn" onClick={handleLogout}>
            Logout
          </button>
        </ul>
      </div>
    </nav>
  );
};
