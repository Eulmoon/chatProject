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
import { createStore, applyMiddleware } from 'redux';
import mySaga from './src/middleware/sagas'
import createSagaMiddleware from "redux-saga";

const AppStack = createStackNavigator({ Home: HomeScreen, Chat: ChatScreen });
const AuthStack = createStackNavigator({ LoginScreen: LoginScreen, Register: RegisterScreen });
const sagaMiddleware = createSagaMiddleware()
/* eslint-disable no-underscore-dangle */
const store = createStore(
  reducer, /* preloadedState, */
  applyMiddleware(sagaMiddleware)
)
/* eslint-enable */

sagaMiddleware.run(mySaga)

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
