import React from 'react'
import { FlatList, TouchableOpacity, Text } from 'react-native';

export default class UserList extends React.Component {
    render() {
        console.log(this.props.filteredUsers)
        console.log(this.props.filteredUsers)
        return (
            <FlatList
                data={this.props.filteredUsers}
                renderItem={({ item }) => {
                    console.log(item)
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
