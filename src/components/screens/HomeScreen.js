import React from "react";
import { View, Text, TouchableOpacity, AsyncStorage } from "react-native";
import user from "../../../User";

export default class HomeScreen extends React.Component {
  _logOut = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate("Auth");
  };

  render() {
    return (
      <View>
        <Text>Welcome back {user.username}</Text>
        <TouchableOpacity onPress={this._logOut}>
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
