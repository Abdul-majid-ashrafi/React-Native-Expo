import React from 'react'
import { TextInput, Text, View } from 'react-native'

export const Input = ({ label, value, onChangeText }) => {
    return (
        <View>
            <Text>
                {label}
            </Text>
            <TextInput
                value={value}
                onChangeText={onChangeText}
                style={{ height: 40, width: 150 }}
                placeholder="Type here" />
        </View>
    )
}
