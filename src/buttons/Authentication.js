import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./Authentication.css"

export const AuthenticationButton = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  if (isAuthenticated) {
    return <button className="authentication" onClick={() => logout({ returnTo: window.location.origin })}>Log Out</button>
  } else {
    return <button className="authentication" onClick={() => loginWithRedirect()}>Log In</button>;
  }
};