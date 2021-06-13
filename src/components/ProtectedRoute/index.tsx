import React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";
import routes from "../../setup/routes";

const ProtectedRoute: React.FC<RouteProps> = ({ children, ...rest }) => {
  const token = localStorage.getItem("token");

  if (!token || token.length <= 0) {
    return <Redirect to={routes.LOGIN} />;
  }

  return <Route {...rest}>{children}</Route>;
};

export default ProtectedRoute;
