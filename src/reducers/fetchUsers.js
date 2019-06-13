import { FETCH_USERS, FETCH_USERS_SUCCESS, FETCH_USERS_FAILED } from '../constants/ChatFilter'
import { DrawerActions } from 'react-navigation';

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
                users: DrawerActions.user,
                isFetching: false
            }
        case FETCH_USERS_FAILED:
            return {
                ...state,
                isFetching: false,
                error: true
            }
        default:
            return state
    }
}