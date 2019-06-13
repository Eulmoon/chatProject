import { createSelector } from 'reselect'
import * as types from '../constants/ChatFilter'

const getVisibilityFilter = state => state.visibilityFilter
const getUsers = state => state.fetchUsers

export const getVisibilityUsers = createSelector(
    [ getVisibilityFilter, getUsers ],
    (visibilityFilter, users) => {
        switch (visibilityFilter) {
            case types.SHOW_ALL:
                console.log(users)
                return users
            case types.SHOW_CHATTED:
                return users.filter(u => u.chatted)
            case types.SHOW_NOT_CHATTED:
                return users.filter(u => !u.chatted)
            case types.SHOW_FAVORITED:
                    console.log('wtf111')
                return users.filter(u => u.favorited)
            default:
                throw new Error('Unknown filter: ' + visibilityFilter)
        }
    }
)