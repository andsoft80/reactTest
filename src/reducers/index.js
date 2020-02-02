export const initialState = {
    alert: 0
}

export function rootReducer(state = initialState, action) {
    // alert(action.type);
    switch (action.type) {
        case 'ADD_ALERT':
            return { ...state, alert: state.alert+action.c }
        case 'REDUCE_ALERT':
            return { ...state, alert: state.alert-action.c }

        default:
            return state
    }
}