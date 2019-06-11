import React from "react";
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  View
} from "react-native";
import user from "../../../User.js";
import firebase from "firebase";

export default class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  componentWillMount() {
    const firebaseConfig = {
      apiKey: "AIzaSyCpL2tqL-Tf4VofXlDhFQHqQWh695MWE4U",
      authDomain: "chatproject-b8f47.firebaseapp.com",
      databaseURL: "https://chatproject-b8f47.firebaseio.com",
      projectId: "chatproject-b8f47",
      storageBucket: "chatproject-b8f47.appspot.com",
      messagingSenderId: "958080244099",
      appId: "1:958080244099:web:bdc0c5bcf669fe11"
    };
    firebase.initializeApp(firebaseConfig);
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    user.username = await AsyncStorage.getItem("username");

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(user.username ? "App" : "Auth");
  };

  // Render any loading content that you like here
  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}
