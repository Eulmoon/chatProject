import { combineReducers } from 'redux'
import visibilityFilter from './visibilityFilter'
import fetchUsers from './fetchUsers'

const rootReducer = combineReducers({
    fetchUsers,
    visibilityFilter
})

export default rootReducer