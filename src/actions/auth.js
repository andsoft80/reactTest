export function setAuth(token) {
    return {
      type: 'SET_AUTH',
      payload: token
    }
  }

  export function logout(c) {
    return {
      type: 'LOGOUT'
      
    }
  }  
