import React from 'react'
import { View, ActivityIndicator } from 'react-native'

export const Spinner = ({ size }) => {
    return (
        <View style={spinnerStyle}>
            <ActivityIndicator size={size || 'large'} />
        </View >
    )
}

const spinnerStyle = {
    flex: 1,
    justifyContent: 'center',
    alignItem: 'center'
}