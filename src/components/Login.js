import { useContext } from "react";
import AuthContext from "../context/AuthContextProvider";
import { useNavigate, Link } from "react-router-dom";


function Login() {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div style={{marginLeft: 20, fontSize: 20}}>
      {!authCtx.isLoggedIn && (
        <>
          <h1>Login</h1>
          <form onSubmit={authCtx.handleLogin}>
            <div style={{display: "flex", gap: 10}}>
              <input 
                id="username"
                value={authCtx.username}
                onChange={authCtx.handleUsernameChange}
                placeholder="User Name"
              />
              <input 
                id="password"
                value={authCtx.password}
                onChange={authCtx.handlePasswordChange}
                placeholder="Password"
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
                Log In
              </button>
            </div>
          </form>
        </>
      )}
    
      {authCtx.isLoggedIn && (
        <>
          <h1>Welcome back {authCtx.user.username}!</h1>
          <p />
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
            Let's Start Playing
          </Link>
        </>
      )}
      <hr />
    </div>
  );
}

export default Login;
