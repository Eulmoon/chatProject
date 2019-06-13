import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

const Link = ({ active, children, setFilter }) => {
    console.log(setFilter);
    return (
        <TouchableOpacity
            style={{ color: active || 'red' }}
            onClick={() => setFilter()}
        >
            <Text>{ children }</Text>
        </TouchableOpacity>
    )
}

export default Link