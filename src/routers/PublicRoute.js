import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

import { AuthContext } from "../auth/AuthContext";

export const PublicRoute = ({
  component: Component,
  ...rest
}) => {
  const {
    authState: { logged },
  } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      component={(props) =>
        !logged ? (
          <Component {...props} />
        ) : (
          <Redirect to={localStorage.getItem("lastPath") || "/"} />
        )
      }
    />
  );
};

PublicRoute.propTypes = {
  component: PropTypes.func.isRequired,
};
