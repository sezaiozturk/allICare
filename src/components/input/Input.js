import { View, Text, TextInput } from 'react-native'
import React from 'react'
import styles from './Input.style'

const Input = ({ placeHolder, text }) => {
    return (
        <View style={styles.container}>
            <TextInput placeholder={placeHolder} onChangeText={text} style={styles.input} />
        </View>
    )
}

export default Input