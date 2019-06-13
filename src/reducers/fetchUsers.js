import { FETCH_USERS } from '../constants/ChatFilter'

export default function fetchUsers(state = [], action) {
    switch (action.type) {
        case FETCH_USERS:
            return [...state, action.user]
        default:
            return state
    }
}