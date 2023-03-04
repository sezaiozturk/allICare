import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './FloatButton.style'

const FloatButton = ({ onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text style={styles.icon}>+</Text>
        </TouchableOpacity>
    )
}

export default FloatButton