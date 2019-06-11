import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  AsyncStorage,
  TouchableOpacity,
  Button
} from "react-native";
import user from "../../../User.js";
import firebase from 'firebase';
import ErrorMessage from "../ErrorMessage.js";

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    title: "Please sign in"
  };

  state = {
    username: "",
    pwd: "",
    conPwd: false,
    accStatus: false,
  };

  handleChange = key => val => {
    this.setState({ 
      conPwd: false,
      accStatus: false
    })
    this.setState({ [key]: val });
  };

  handleLogin = async () => {
    // them if
    if (this.state.pwd && this.state.username) {
      var ref = await firebase.database().ref("users/" + this.state.username).once("value");
      if (!ref.exists()) {
        this.setState({accStatus: true});
        return
      }
      const data = await ref.val();
      if (data.pwd !== this.state.pwd) {
        this.setState({conPwd: true})
        return
      }
      user.username = this.state.username;
      user.pwd = this.state.pwd;
      await AsyncStorage.setItem("username", user.username);
      this.props.navigation.navigate("App");
    }
  };

  handleRegister = () => {
    this.props.navigation.push('Register')
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Your Name"
          value={this.state.username}
          onChangeText={this.handleChange("username")}
        />
        { !this.state.username ? <ErrorMessage message="empty username"/> : null }
        { this.state.accStatus ? <ErrorMessage message="this username has not been registered. Please register!"/> : null }
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          value={this.state.pwd}
          onChangeText={this.handleChange("pwd")}
        />
        { !this.state.pwd ? <ErrorMessage message="empty password"/> : null }
        { this.state.conPwd ? <ErrorMessage message="Wrong password. Please try again!"/> : null }
        <Button
          onPress={this.handleLogin}
          title="Login"
          color="#841584"
        />
        <TouchableOpacity onPress={this.handleRegister}>
          <Text>Register</Text>
        </TouchableOpacity>
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
