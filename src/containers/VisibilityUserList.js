import { connect } from 'react-redux'
import { getVisibilityUsers } from '../selectors'
import UserList from '../components/UserList'

const mapStateToProps = state => {
    console.log(state.fetchUsers.users)
    return {
        filteredUsers: state.fetchUsers.users
    }
}

const VisibilityUserList = connect(
    mapStateToProps,
    null
)(UserList)

export default VisibilityUserList