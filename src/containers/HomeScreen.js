import { connect } from 'react-redux'
import HomeScreen from '../components/screens/HomeScreen';
import { fetchUsers } from '../actions'

export default connect(
    null,
    { fetchUsers }
)(HomeScreen)