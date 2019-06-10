import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  AsyncStorage,
  Button
} from "react-native";
import user from "../../../User.js";
import firebase from 'firebase';

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    title: "Please sign in"
  };

  state = {
    username: "",
    pwd: ""
  };

  handleChange = key => val => {
    this.setState({ [key]: val });
  };

  handleLogin = async () => {
    // them if
    await AsyncStorage.setItem("username", this.state.username);
    user.username = this.state.username;
    firebase.database().ref('users/' + user.username).set({name})
    this.props.navigation.navigate("App");
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Your Name"
          value={this.state.username}
          onChangeText={this.handleChange("username")}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          value={this.state.pwd}
          onChangeText={this.handleChange("pwd")}
        />
        <Button
          onPress={this.handleLogin}
          title="Login"
          color="#841584"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  input: {
    fontSize: 20,
    textAlign: "center",
    width: "90%",
    padding: 10,
    borderColor: "#ccc",
    borderRadius: 5,
    borderWidth: 1,
    marginBottom: 10
  }
});
