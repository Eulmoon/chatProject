import React from 'react';
import { View, Text } from 'react-native';

export default class ErrorMessage extends React.Component {
    render() {
        <Text style={styles.errorMessage}>{this.props.message}</Text>
    }
}

const styles = StyleSheet.create({
    errorMessage: {
        color: "red",
        textAlign: "right",
        width: "90%",
        marginBottom: 10,
    }
});