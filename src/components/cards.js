import React from 'react'
import { View, Text } from 'react-native'

const Cards = (props) => (
    <View style={{
        width: (props.width) - 24, padding: 16,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'white',
        borderWidth: 0
    }}>
        {props.children}
    </View>
)

export default Cards;