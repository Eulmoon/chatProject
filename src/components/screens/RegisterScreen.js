import React from 'react';
import { View, TextInput, Button } from 'react-native'; 
import ErrorMessage from '../ErrorMessage';

export default class RegisterScreen extends React.Component {
    state = {
        username: "",
        pwd: "",
        pwdConfirm: ""
    }

    handleChange = key => val => {
        this.setState({ [key]: val });
    };

    handleRegister = async () => {
        // them if
        if (!this.state.pwd && this.state.pwd !== this.state.pwdConfirm) {
            
        }
        await AsyncStorage.setItem("username", this.state.username);
        user.username = this.state.username;
        firebase.database().ref('users/' + user.username).set({name})
        this.props.navigation.navigate("App");
    };

    render() {
        <View>
            <TextInput
                style={styles.input}
                placeholder="Your Name"
                value={this.state.username}
                onChangeText={this.handleChange("username")}
            />
            <ErrorMessage />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry={true}
                value={this.state.pwd}
                onChangeText={this.handleChange("pwd")}
            />
            <TextInput
                style={styles.input}
                placeholder="Confirm password"
                secureTextEntry={true}
                value={this.state.pwdConfirm}
                onChangeText={this.handleChange("pwdConfirm")}
            />
            <Button
                onPress={this.handleRegister}
                title="Register"
                color="#42aaf4"
            />
        </View>
    }
}