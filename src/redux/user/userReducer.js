import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./userTypes"

const initalState = {
    loading: false,
    users: [],
    error: ''
}

const userReducer = (state, action) => {
    switch(action.type) {
        case FETCH_USERS_REQUEST: return {
            ...state,
            loading: true,
        }
        case FETCH_USERS_SUCCESS: return {
            ...state,
            loading: false,
            users: action.payload,
            error: ''
        }
        case FETCH_USERS_FAILURE: return {
            ...state,
            loading: false,
            users: [],
            error: action.payload
        }
        default: return state
    }
}

export default userReducer;