import React from 'react';
import { Outlet, Link, Navigate } from 'react-router-dom';
import AuthContext from "../context/AuthContextProvider";
import { useContext } from "react";

export default function Profile () {
  const authCtx = useContext(AuthContext);

  if (!authCtx.isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return (
    <main>
      <div style={{fontSize: 25}}>
        <h1>Hello {authCtx.user.username}!</h1>
        <p />
        <Link to={"edit"} >Edit Username and Password</Link>
        <hr/>
        <Outlet />
      </div>
    </main>
  )
}

