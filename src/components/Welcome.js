import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContextProvider";
import { Button } from "./Button";

const styles = {
  marginLeft: 20,
  fontSize: 25
};

function Welcome() {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div style={styles}>
      <h1>Welcome to "Guess the Mystery Number"!</h1>
      {!authCtx.isLoggedIn && (
        <>
          Hello Guest! 
          <p> Please log in to start playing.</p>
          <Button
            onClick={() => {navigate("/login")}}
            label="LOG IN"
          />
          <p>If you're a new user, please sign up for an account.</p>
          <button 
            className="primary"
            onClick={() => {navigate("/sign-up")}}
          >
            Sign Up
          </button>
        </>
      )}
      {authCtx.isLoggedIn && (
        <>
          Hello {authCtx.user.username}!
          <p />
          <Link to="/game">
            Play "Guess the Mystery Number"
          </Link>
          <p/>
          <Link to="/articles">
            Read an article
          </Link>
        </>
      )}
    </div>
  );
}

export default Welcome;
