import * as types from '../constants/ChatFilter';

export const setVisibilityFilter = filter => ({ type: types.SET_VISIBILITY_FILTER, filter })
export const fetchUsers = user => ({type: types.FETCH_USERS, user})
