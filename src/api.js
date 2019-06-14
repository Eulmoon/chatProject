import firebase from 'firebase'
import user from '../User'

export async function apiFetch() {
    var users = [];    
    let dbRef = await firebase.database().ref('users');
    await dbRef.once('child_added', (val) => {
      if (val.key === user.username) {
        return;
      }
      var person = val.val();
      person.chatted = false;
      person.favorited = true;
      console.log(person)
      users.push(person);
    });
    return users;
}