import React, { Component } from "react";
import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";
import HomeScreen from "./src/components/screens/HomeScreen";
import LoginScreen from "./src/components/screens/LoginScreen";
import AuthLoadingScreen from "./src/components/screens/AuthLoadingScreen";
import RegisterScreen from "./src/components/screens/RegisterScreen";

const AppStack = createStackNavigator({ Home: HomeScreen });
const AuthStack = createStackNavigator({ LoginScreen: LoginScreen, Register: RegisterScreen });

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthSt0ack
    },
    {
      initialRouteName: "AuthLoading"
    }
  )
);
