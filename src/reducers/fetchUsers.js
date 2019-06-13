import { FETCH_USERS, FETCH_USERS_ERROR } from '../constants/ChatFilter'

export default function fetchUsers(state = [], action) {
    switch (action.type) {
        case FETCH_USERS:
            return [...state, action.user]
        case FETCH_USERS_ERROR:
            return [...state.user]
        default:
            return state
    }
}