import { connect } from 'react-redux'
import { getVisibilityUsers } from '../selectors'
import UserList from '../components/UserList'

const mapStateToProps = state => ({
    filteredUsers: getVisibilityUsers(state)
})

const VisibilityUserList = connect(
    mapStateToProps,
    null
)(UserList)

export default VisibilityUserList