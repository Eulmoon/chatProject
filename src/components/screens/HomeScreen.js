import React from "react";
import { Text, TouchableOpacity, AsyncStorage } from "react-native";
import firebase from 'firebase';
import user from "../../../User";
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaView } from "react-navigation";

export default class HomeScreen extends React.Component {
  state = {
    users: []
  }

  componentWillMount() {
    let dbRef = firebase.database().ref('users');
    dbRef.on('child_added', (val) => {
      if (val.key === user.username) {
        return;
      }
      let person = val.val();
      this.setState((prevState) => {
        return {
          users: [...prevState.users, person]
        }
      })
    });
  }

  _logOut = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate("Auth");
  };

  renderRow = ({ item }) => {
    return (
      <TouchableOpacity 
        style={{ padding: 10, borderBottomColor: '#ccc', borderBottomWidth: 1}}
        onPress={() => this.props.navigation.navigate('Chat', item)}
      >
        <Text style={{ fontSize: 20 }}>{item.username}</Text>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <SafeAreaView>
        <Text>Welcome back {user.username}</Text>
        <TouchableOpacity onPress={this._logOut}>
          <Text>Logout</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._l}>

        </TouchableOpacity>
        <FlatList 
          data={this.state.users}
          renderItem={this.renderRow}
          keyExtractor={(item, index) => item.username}
        />
      </SafeAreaView>
    );
  }
}
