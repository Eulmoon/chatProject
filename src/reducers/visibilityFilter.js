import { SET_VISIBILITY_FILTER, SHOW_ALL } from '../constants/ChatFilter'

const visibilityFilter = (state = SHOW_ALL, action) => {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            console.log(SET_VISIBILITY_FILTER);
            return action.filter
        default:
            return state
    }
}

export default visibilityFilter