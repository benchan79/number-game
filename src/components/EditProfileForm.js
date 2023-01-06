import AuthContext from "../context/AuthContextProvider";
import { useContext } from "react";

export default function EditProfileForm() {
  const authCtx = useContext(AuthContext);
  
  return (
    <section>
      <form onSubmit={authCtx.handleEdit}>
        <label>
          New Username
          <div>
            <input 
              id="username"
              value={authCtx.username}
              onChange={authCtx.handleUsernameChange}
              placeholder="username"
            />
          </div>
          New Password
          <div>
            <input 
              id="password"
              value={authCtx.password}
              onChange={authCtx.handlePasswordChange}
              placeholder="password"
            />
          </div>
          <div> 
            <button 
              className="primary"
              disabled={
                !authCtx.username || !authCtx.password || !authCtx.isLoggedIn
                  ? true
                  : false
              }
            >
              Submit
            </button>
          </div>
        </label>
      </form>
      {authCtx.usersList[0] && 
        authCtx.usersList.map((user, i) => (
          <ul key={i}>
            <li>{user.username}: {user.password}</li>
          </ul>
        ))}
    </section>
  )
}