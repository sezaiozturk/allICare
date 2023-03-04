import { View, Text, TextInput } from 'react-native'
import React from 'react'
import styles from './Input.style'

const Input = ({ placeHolder, onChange, value }) => {
    return (
        <View style={styles.container}>
            <TextInput
                placeholder={placeHolder}
                onChangeText={onChange}
                value={value}
                style={styles.input}
                multiline />
        </View>
    )
}

export default Input