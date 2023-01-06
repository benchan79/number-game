import { NavLink } from "react-router-dom";
import AuthContext from "../context/AuthContextProvider";
import { useContext } from "react";

export default function Header () {
  const authCtx = useContext(AuthContext);

  return (
    <>
      <div className="header">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/articles">Articles</NavLink>
        <NavLink to="/game">Play Game</NavLink>
        <NavLink to="/sign-up">Sign Up</NavLink>
        {
          authCtx.user.username ?
          <>
            <NavLink to="/profile">Profile</NavLink>
            <button onClick={authCtx.handleLogOut} className="logout"> Log Out </button>
          </> :
          <NavLink to="/login">Log In</NavLink>
        }
        
      </div>
    </>
  )
}