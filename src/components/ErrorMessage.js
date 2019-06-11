import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class ErrorMessage extends React.Component {
    render() {
        return <Text style={styles.errorMessage}>{this.props.message}</Text>
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