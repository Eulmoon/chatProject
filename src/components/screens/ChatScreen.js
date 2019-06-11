import React from 'react';
import { SafeAreaView, TextInput, Text, TouchableOpacity, Dimensions, View } from 'react-native';
import firebase from 'firebase';
import { FlatList } from 'react-native-gesture-handler';
import user from '../../../User';

export default class ChatScreen extends React.Component {
    static navigationOptions = ({navigation}) => {
        return {
            title: navigation.getParam('username', null)
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            person: {
                username: props.navigation.getParam('username'),
            },
            textMessage: '',
            messageList: [],
        }
    }

    componentWillMount() {
        firebase.database().ref('messages').child(user.username).child(this.state.person.username)
            .on('child_added', (value) => {
                this.setState((prevState) => {
                    return {
                        messageList: [...prevState.messageList, value.val()]
                    }
                })
            })
    }

    handleChange = key => val => {
        this.setState({ [key]: val })
    }

    sendMessage = async () => {
        if (this.state.textMessage) {
            let messageId = await firebase.database().ref('messages').child(user.username).child(this.state.person.username).push().key;
            let updates = {};
            let message = {
                message: this.state.textMessage,
                time: firebase.database.ServerValue.TIMESTAMP,
                from: user.username
            }
            updates[`messages/${user.username}/${this.state.person.username}/${messageId}`] = message;
            updates[`messages/${this.state.person.username}/${user.username}/${messageId}`] = message;
            await firebase.database().ref().update(updates);
            this.setState({ textMessage: '' })
        }
    }

    renderRow = ({ item }) => {
        return (
          <View 
            style={{ 
                flexDirection: 'column',
                width: "65%",
                alignSelf: item.from === user.username ? 'flex-end' : 'flex-start',
                backgroundColor: item.from === user.username ? '#D3D3D3' : '#3b5998',
                borderRadius: 10,
                marginBottom: 2,
            }}
          >
            <View style={{ alignSelf: "flex-end" }}>
                <Text style={{ color: item.from === user.username ? 'black' : 'white', padding: 3, fontSize: 12 }}>
                    {item.time}
                </Text>
            </View>
            <View>
                <Text style={{ color: item.from === user.username ? 'black' : 'white', padding: 7, paddingTop: 0, fontSize: 16 }}>
                    {item.message}
                </Text>
            </View>
          </View>
        )
      }

    render() {
        let {height, width} = Dimensions.get('window');
        return(
            <SafeAreaView>
                <FlatList
                    style={{padding: 10, height: height * 0.8}} 
                    data={this.state.messageList}
                    renderItem={this.renderRow}
                    keyExtractor={(item, index) => index.toString()}
                />
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TextInput 
                        style={{
                            textAlign: "left",
                            width: "80%",
                            padding: 10,
                            borderColor: "#ccc",
                            borderRadius: 5,
                            borderWidth: 1,

                        }}
                        value={this.state.textMessage}
                        placeholder="Type message..."
                        onChangeText={this.handleChange('textMessage')}
                    />
                    <TouchableOpacity 
                        style={{
                            width:"20%",
                            textAlign: "center",
                            padding: 10
                        }} 
                        onPress={this.sendMessage}
                    >
                        <Text>Send</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }
}