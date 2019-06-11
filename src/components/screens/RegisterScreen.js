import React from 'react';
import { View, TextInput, Button, StyleSheet, AsyncStorage } from 'react-native'; 
import ErrorMessage from '../ErrorMessage';
import user from '../../../User';
import firebase from 'firebase';

export default class RegisterScreen extends React.Component {
    state = {
        username: "",
        pwd: "",
        pwdConfirm: "",
        duplicate: false
    }

    handleChange = key => val => {
        console.log(key);
        key === "username" && this.setState({duplicate: false});
        this.setState({ [key]: val });
    };

    handleRegister = async () => {
        // them if
        if (this.state.pwd && this.state.pwd == this.state.pwdConfirm) {
            var ref = await firebase.database().ref("users/" + this.state.username).once("value");
            if (ref.exists()) {
                this.setState({duplicate: true});
                return;
            };
            await AsyncStorage.setItem("username", this.state.username);
            user.username = this.state.username;
            user.pwd = this.state.pwd;
            await firebase.database().ref('users/' + user.username).set({
                username: user.username,
                pwd: user.pwd
            })
            this.props.navigation.navigate("App");
        }
    };

    render() {
        return (
            <View>
                { this.state.duplicate ? <ErrorMessage message="co thang lay roi"/> : null }
                <TextInput
                    style={styles.input}
                    placeholder="Your Name"
                    value={this.state.username}
                    onChangeText={this.handleChange("username")}
                />
                { !this.state.username ? <ErrorMessage message="empty username"/> : null }
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry={true}
                    value={this.state.pwd}
                    onChangeText={this.handleChange("pwd")}
                />
                { !this.state.pwd ? <ErrorMessage message="empty password"/> : null }
                <TextInput
                    style={styles.input}
                    placeholder="Confirm password"
                    secureTextEntry={true}
                    value={this.state.pwdConfirm}
                    onChangeText={this.handleChange("pwdConfirm")}
                />
                { !this.state.pwdConfirm ? <ErrorMessage message="empty password confirm"/> : null }
                { 
                    this.state.pwd && this.state.pwdConfirm && this.state.pwd !== this.state.pwdConfirm 
                    ? <ErrorMessage message="didnt match password with password confirm"/> 
                    : null 
                }
                <Button
                    disabled = {this.state.duplicate}
                    onPress={this.handleRegister}
                    title="Register"
                    color="#42aaf4"
                />
            </View>
        )
    }

}

const styles = StyleSheet.create({
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