import React from 'react'
import { FlatList, TouchableOpacity, Text } from 'react-native';

export default class UserList extends React.Component {
    render() {
        return (
            <FlatList
                    data={this.props.filteredUsers}
                    renderItem={({ item }) => {
                            return (
                                <TouchableOpacity 
                                    style={{ padding: 10, borderBottomColor: '#ccc', borderBottomWidth: 1}}
                                    onPress={() => this.props.navigation.navigate('Chat', item)}
                                >
                                    <Text style={{ fontSize: 20 }}>{item.username}</Text>
                                </TouchableOpacity>
                            )
                        }}
                    keyExtractor={(item, index) => item.username}
                />
        )
    }
}
