import * as types from '../constants/ChatFilter';

export const setVisibilityFilter = filter => ({ type: types.SET_VISIBILITY_FILTER, filter })
export const fetchUsers = () => ({type: types.FETCH_USERS})
