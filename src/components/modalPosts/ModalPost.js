import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import Input from '../input/Input'
import Button from '../button/Button'
import styles from './ModalPost.style'
import Modal from 'react-native-modal'

const ModalPost = ({ visible, onSend, onClose }) => {
    const [comment, setComment] = useState(null);
    function handleSend() {
        if (!comment) {
            return;
        }
        onSend(comment);
        setComment(null);
    }
    return (
        <Modal
            style={styles.modal}
            isVisible={visible}
            onSwipeComplete={onClose}
            onBackdropPress={onClose}
            onBackButtonPress={onClose}
            swipeDirection='down'
        >
            <View style={styles.container}>
                <View style={styles.input_container}>
                    <Input
                        placeHolder={"What do you think"}
                        onChange={setComment}
                    />
                </View>
                <Button title={"Send"} onPress={handleSend} />
            </View>
        </Modal>
    )
}

export default ModalPost