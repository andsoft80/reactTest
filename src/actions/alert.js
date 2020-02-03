export function addAlert(c) {
    return {
      type: 'ADD_ALERT',
      payload: c
    }
  }

  export function reduceAlert(c) {
    return {
      type: 'REDUCE_ALERT',
      payload: c
    }
  }  
  export function setAlert(c) {
    return {
      type: 'SET_ALERT',
      payload: c
    }
  } 
