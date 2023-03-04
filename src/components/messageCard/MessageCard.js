import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './MessageCard.style'
import { formatDistance, parseISO } from 'date-fns'
import { tr } from 'date-fns/locale'

const MessageCard = ({ message, onPress }) => {
    const formattedDate = formatDistance(parseISO(message.date), new Date(), {
        addSuffix: true,
        locale: tr
    })

    return (
        <View style={styles.container}>
            <View style={styles.top_container}>
                <Text style={styles.name}>{message.name}</Text>
                <Text style={styles.date}>{formattedDate}</Text>
            </View>
            <View style={styles.bottom_container}>
                <Text style={styles.comment}>{message.comment}</Text>
                <TouchableOpacity style={styles.button} onPress={onPress}>
                    <Text style={styles.count}>{message.dislike}</Text>
                    <Text style={styles.text}>All I Care!</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default MessageCard