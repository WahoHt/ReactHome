// import React, { useState } from "react";
import { Redirect, Route } from "react-router-dom";

export const PrivateRoute = ({ component: Component, signed, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return signed ? (
          <Component {...props} {...rest} />
        ) : (
          <Redirect to="/" />
        );
      }}
    />
  );
};