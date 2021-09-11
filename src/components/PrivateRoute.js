//Task List:
//1. Build a PrivateRoute component that redirects if user is not logged in
import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(routeProps) => {
        if (localStorage.getItem("token")) {
          console.log("token found, rendering protected component");
          return <Component {...routeProps} />;
        } else {
          console.log("no token found, redirect to login");
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default PrivateRoute;
