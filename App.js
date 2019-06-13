import React from "react";
import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";
import HomeScreen from "./src/containers/HomeScreen";
import LoginScreen from "./src/components/screens/LoginScreen";
import AuthLoadingScreen from "./src/components/screens/AuthLoadingScreen";
import RegisterScreen from "./src/components/screens/RegisterScreen";
import ChatScreen from "./src/components/screens/ChatScreen"
import reducer from "./src/reducers";
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const AppStack = createStackNavigator({ Home: HomeScreen, Chat: ChatScreen });
const AuthStack = createStackNavigator({ LoginScreen: LoginScreen, Register: RegisterScreen });

/* eslint-disable no-underscore-dangle */
const store = createStore(
  reducer, /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
/* eslint-enable */

const Stack = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: "AuthLoading"
    }
  )
);

export default class App extends React.Component {
  render() {
    console.log(store.getState())
    return (
      <Provider store={store}>
        <Stack />
      </Provider>
    )
  }
}
