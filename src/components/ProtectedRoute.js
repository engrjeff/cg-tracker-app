import React from "react";
import { Redirect, Route, useLocation } from "react-router-dom";
import { useAuth } from "../firebase/AuthContext";

const ProtectedRoute = ({ path, component: Component, render, ...rest }) => {
  const { user } = useAuth();
  const location = useLocation();

  const renderRedirect = (props) => {
    if (user) return <Redirect to={location} />;
    else
      return (
        <Redirect
          to={{
            pathname: "/auth/signin",
            state: { from: location },
          }}
        />
      );
  };

  return (
    <Route
      path={path}
      {...rest}
      render={(props) => {
        if (!user) return renderRedirect(props);
        return Component ? <Component {...props} /> : render(props);
      }}
    />
  );
};

export default ProtectedRoute;
