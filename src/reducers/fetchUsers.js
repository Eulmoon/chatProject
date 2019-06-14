import { FETCH_USERS, FETCH_USERS_SUCCESS, FETCH_USERS_FAILED } from '../constants/ChatFilter'

const initialState = {
    users: [],
    isFetching: false,
    error: false
}

export default function fetchUsers(state = initialState, action) {
    switch (action.type) {
        case FETCH_USERS:
            return {
                ...state,
                users: [],
                isFetching: true
            }
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                users: action.user,
                isFetching: false
            }
        case FETCH_USERS_FAILED:
            return {
                ...state,
                users:[],
                isFetching: false,
                error: true
            }
        default:
            return state
    }
}