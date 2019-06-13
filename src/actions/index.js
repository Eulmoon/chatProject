import * as types from '../constants/ChatFilter';
import firebase from 'firebase';
import user from '../../User'

export const setVisibilityFilter = filter => ({ type: types.SET_VISIBILITY_FILTER, filter })
export const getUsers = user => ({type: types.FETCH_USERS, user})
export const fetchUsers = () =>  async (dispatch) => {
  try {
    let dbRef = await firebase.database().ref('users');
    await dbRef.on('child_added', async (val) => {
      if (val.key === user.username) {
        return;
      }
      let person = val.val();
      person.chatted = false;
      let lol = Math.random() >= 0.5;
      person.favorited = lol;
      dispatch(getUsers(person));
    });
  } catch (ex) {
    dispatch({
      type: types.FETCH_USERS_ERROR,
      fetchStatus: false
    })
  }
}
