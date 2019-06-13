import React from "react";
import { Text, TouchableOpacity, AsyncStorage, FlatList, View, Dimensions } from "react-native";
import firebase from 'firebase';
import user from "../../../User";
import { SafeAreaView } from "react-navigation";
import VisibilityUserList from '../../containers/VisibilityUserList';
import { SHOW_ALL, SHOW_CHATTED, SHOW_NOT_CHATTED, SHOW_FAVORITED } from '../../constants/ChatFilter'
import FilterLink from "../../containers/FilterLink";

const FILTER_TITLES = {
  [SHOW_ALL]: 'All',
  [SHOW_CHATTED]: 'Chatted',
  [SHOW_NOT_CHATTED]: 'Not Chatted',
  [SHOW_FAVORITED]: 'Favorited'
}

const filterLength = Object.keys(FILTER_TITLES).length;

export default class HomeScreen extends React.Component {
  componentWillMount() {
    this.props.fetchUsers();
  }

  _logOut = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate("Auth");
  };

  // renderRow = ({ item }) => {
  //   return (
  //     <TouchableOpacity 
  //       style={{ padding: 10, borderBottomColor: '#ccc', borderBottomWidth: 1}}
  //       onPress={() => this.props.navigation.navigate('Chat', item)}
  //     >
  //       <Text style={{ fontSize: 20 }}>{item.username}</Text>
  //     </TouchableOpacity>
  //   )
  // }

  render() {
    const {width, height} = Dimensions.get('window');
    return (
      <SafeAreaView>
        <Text>Welcome back {user.username}</Text>
        <TouchableOpacity onPress={this._logOut}>
          <Text>Logout</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity onPress={this._l}>

        </TouchableOpacity> */}
        {
           <VisibilityUserList navigation={this.props.navigation}/> 
        }  
          {/* {Object.keys(FILTER_TITLES).map(filter =>
              <FilterLink filter={filter}>
                {FILTER_TITLES[filter]}
              </FilterLink>
          )} */}
      </SafeAreaView>
    );
  }
}
