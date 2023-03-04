import { View, Text } from 'react-native'
import React from 'react'
import styles from './MessageCard.style'
import { formatDistance, parseISO } from 'date-fns'
import { tr } from 'date-fns/locale'

const MessageCard = ({ message }) => {
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
            <Text style={styles.comment}>{message.comment}</Text>
        </View>
    )
}

export default MessageCard