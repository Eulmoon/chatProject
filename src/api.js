import firebase from 'firebase'
import user from '../User'

export async function apiFetch() {
    let users = []
    let dbRef = await firebase.database().ref('users');
    await dbRef.on('child_added', async (val) => {
      if (val.key === user.username) {
        return;
      }
      let person = val.val();
      person.chatted = false;
      let lol = Math.random() >= 0.5;
      person.favorited = lol;
      users.push(person); 
    });
    return users;
}