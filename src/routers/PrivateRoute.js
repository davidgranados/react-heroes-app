import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

import { AuthContext } from "../auth/AuthContext";

export const PrivateRoute = ({
  component: Component,
  location: { pathname, search },
  ...rest
}) => {

  localStorage.setItem("lastPath", pathname + search);
  const {
    authState: { logged },
  } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      component={(props) =>
        logged ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
};
