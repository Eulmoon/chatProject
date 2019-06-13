import { connect } from 'react-redux'
import HomeScreen from '../components/screens/HomeScreen';
import { fetchUsers } from '../actions'

const mapStateToProps = (state) => ({
    isFetching: state.fetchUsers.isFetching,
    error: state.fetchUsers.error
  })

export default connect(
    mapStateToProps,
    { fetchUsers }
)(HomeScreen)