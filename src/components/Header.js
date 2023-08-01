import { NavLink } from "react-router-dom";
import AuthContext from "../context/AuthContextProvider";
import { useContext } from "react";

export default function Header () {
  const authCtx = useContext(AuthContext);

  return (
    <>
      <div className="header">
        <NavLink to="/number-game">Home</NavLink>
        <NavLink to="/number-game/about">About</NavLink>
        <NavLink to="/number-game/articles">Articles</NavLink>
        <NavLink to="/number-game/proverbs-game">Play Proverbs Game</NavLink>
        <NavLink to="/number-game/game">Play Number Game</NavLink>
        <NavLink to="/number-game/sign-up">Sign Up</NavLink>
        {
          authCtx.user.username ?
          <>
            <NavLink to="/number-game/profile">Profile</NavLink>
            <button onClick={authCtx.handleLogOut} className="logout"> Log Out </button>
          </> :
          <NavLink to="/number-game/login">Log In</NavLink>
        }
        
      </div>
    </>
  )
}