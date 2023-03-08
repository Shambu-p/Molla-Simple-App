import { View, Text } from 'react-native'
import React from 'react'

const Header = () => {
    return (
        <View style={ { alignItems: 'center' } }>
            <Text style={ { fontWeight: 'bold', fontSize: 28, color: 'white' } }>TechEthioExam </Text>
        </View>
    )
}

export default Header
