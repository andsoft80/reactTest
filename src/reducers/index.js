export const initialState = {
    alert: 0,
    login: false,
    token: ''
}

export function rootReducer(state = initialState, action) {
    //alert(action.payload);
    switch (action.type) {
        case 'ADD_ALERT':
            return { ...state, alert: state.alert + action.payload }
        case 'REDUCE_ALERT':
            return { ...state, alert: state.alert - action.payload }
        case 'SET_ALERT':
            return { ...state, alert: action.payload }
        case 'SET_AUTH':
            return { ...state, login: true, token: action.payload }
        case 'LOGOUT':
            return { ...state, login: false, token: '' }

        default:
            return state
    }
}