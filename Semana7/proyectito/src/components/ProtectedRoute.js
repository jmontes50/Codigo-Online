import React, { Fragment, useContext } from "react";
import { AuthContext } from "../context/authContext";
import { Route, Redirect } from "react-router-dom";

export default function ProtectedRoute({ component: Component, ...rest }) {
  const { user } = useContext(AuthContext);
  console.log("protected",user)

  return (
    <Fragment>
      {user !== null ? (
        <Route {...rest} render={(props) => <Component {...props} />} />
      ) : (
        <Redirect to="/" />
      )}
    </Fragment>
  );
}
