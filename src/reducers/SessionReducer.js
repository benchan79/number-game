export const initialState = {
  user: {},
  isLoggedIn: false
}

export  function sessionReducer(state, action) {
  switch (action.type) {
    case 'SIGN_UP': {
      return {
        user: {
          username: action.username, 
          password: action.password
        },
        isLoggedIn: true
      }
    }
    case 'LOG_IN': {
      return {
        user: {
          username: action.username, 
          password: action.password
        },
        isLoggedIn: true
      }
    }
    case 'EDIT_USER': {
      return {
        ...state,
        user: {
          username: action.username,
          password: action.password
        },
      }
    }
    case 'LOG_OUT': {
      return {
        user: {},
        isLoggedIn: false,
      }
    }
    default:
      throw Error('unkown action')
  }
}