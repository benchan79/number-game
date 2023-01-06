import { createContext, useReducer } from "react";
import { useState } from "react";
import { initialState, sessionReducer } from "../reducers/SessionReducer";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [state, dispatch] = useReducer(sessionReducer, initialState)
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usersList, setUsersList] = useState([]);

  const handleUsernameChange = e => {
    setUsername(e.currentTarget.value)
  }

  const handlePasswordChange = e => {
    setPassword(e.currentTarget.value)
  }

  const handleSignUp = e => {
    e.preventDefault();
    const userIndex = usersList.findIndex((user) => {
      return user.username === username
    });
    if ( userIndex === -1 ) {
      dispatch({
        type: 'SIGN_UP', 
        username: username,
        password: password,
      })
      setUsersList([
        ...usersList, 
        {username: username, password: password}
      ])
      setUsername("")
      setPassword("")
  } else {
    alert("User name already exists.")
  }
  }

  const handleLogin = e => {
    e.preventDefault();
    const userIndex = usersList.findIndex((user) => {
      return user.username === username
    });
    if ( userIndex!==-1 && usersList[userIndex].password === password) {
      dispatch({
        type: 'LOG_IN', 
        username: username,
        password: password,
      })
      setUsername("")
      setPassword("")
    } else {
      alert("Wrong username/password")
    }
  }

  const handleEdit = e => {
    e.preventDefault();
    const currentUserIndex = usersList.findIndex((user) => {
      return user.username === state.user.username
    });
    const newUserIndex = usersList.findIndex((user) => {
      return user.username === username
    });
    if (newUserIndex === -1 || (username === state.user.username)) {
    dispatch({
      type: 'EDIT_USER', 
      username: username,
      password: password,
    })
    const updatedUser = { username: username, password: password };
    const updatedUsersList = [...usersList];
    updatedUsersList[currentUserIndex] = updatedUser;
    setUsersList(updatedUsersList);
    setUsername("")
    setPassword("")
    alert("Username/Password update successful!")
    } else {
      alert("User name already exists.")
    }
  }

  const handleLogOut = e => {
    dispatch({type: 'LOG_OUT'})
    setUsername("")
    setPassword("")
  }

  const context = {
    isLoggedIn: state.isLoggedIn,
    user: state.user,
    username: username,
    password: password,
    usersList: usersList,
    handleUsernameChange: handleUsernameChange,
    handlePasswordChange: handlePasswordChange,
    handleSignUp: handleSignUp,
    handleLogin: handleLogin,
    handleEdit: handleEdit,
    handleLogOut: handleLogOut,
  };

  return (
    <AuthContext.Provider value={context}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
