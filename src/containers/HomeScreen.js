import { connect } from 'react-redux'
import HomeScreen from '../components/screens/HomeScreen';
import { fetchUsers } from '../actions'
import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => ({
    fetching: state.fetchUsers.fetching
})

export default connect(
    mapStateToProps,
    dispatch => ({
        fetchUsers: bindActionCreators(fetchUsers, dispatch)
    })
)(HomeScreen)