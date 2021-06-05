import React from "react";
import PropTypes from "prop-types";

import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...props
}) => {
  localStorage.setItem("lastPath", props.location.pathname);

  return (
    <Route
      {...props}
      component={(componentProps) =>
        isAuthenticated ? (
          <Component {...componentProps} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};
