import React, { useContext } from "react";
import AuthContext from "../context/AuthContextProvider";
import { useNavigate, Link } from "react-router-dom";

export default function SignUp () {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  if (!authCtx.isLoggedIn) {
    return (
    <section>
      <h1>Sign Up</h1>
      <form onSubmit={authCtx.handleSignUp}>
        <label>
          <div>
            <input
              id="username"
              value={authCtx.username}
              onChange={authCtx.handleUsernameChange}
              placeholder="username"
            />
            <input
              id="password"
              value={authCtx.password}
              onChange={authCtx.handlePasswordChange}
              placeholder="password"
            />
            <button 
              type="submit" 
              className="primary" 
              disabled={
                !authCtx.username || !authCtx.password || authCtx.isLoggedIn
                  ? true
                  : false
              }
            >
              Submit
            </button>
          </div>
        </label>
      </form>
    </section>
  )}

  return (
    <div style={{marginLeft: 20, fontSize: 20}}>
      <h1>Hello {authCtx.user.username}!</h1>
      You're logged in now.
      <p>Please log out first to sign up for another account.</p>
      <Link
        to="/articles"
        onClick={(e) => {
          e.preventDefault();
          navigate(`/articles`, { replace: true });
        }}
      >
        Read an article
      </Link>
          <p/>
      <Link
        to="/game"
        onClick={(e) => {
          e.preventDefault();
          navigate(`/game`, { replace: true });
        }}
      >
        Play "Guess the Mystery Number"
      </Link>
    </div>
  )

}