import { View, Text, SafeAreaView, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import FloatButton from '../../components/floatButton/FloatButton'
import styles from './Posts.style'
import ModalPost from '../../components/modalPosts/ModalPost'
import dataBase from '@react-native-firebase/database'
import auth from '@react-native-firebase/auth'
import parseComment from '../../utils/parseComment'
import MessageCard from '../../components/messageCard/MessageCard'

const Posts = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [list, setList] = useState([]);

    useEffect(() => {
        dataBase().ref().on('value', snapShot => {
            const post = parseComment(snapShot.val());
            setList(post);
        })
    }, [])
    function handleModelToggle() {
        setModalVisible(!modalVisible);
    }
    function handleCommentSend(comment) {
        const mail = auth().currentUser.email;
        const commentObject = {
            comment,
            name: mail.split('@')[0],
            date: (new Date).toISOString(),
        }
        dataBase().ref().push(commentObject);
    }
    const renderItem = ({ item }) => <MessageCard message={item} />

    return (
        <SafeAreaView style={styles.container}>
            <FlatList data={list} renderItem={renderItem} />
            <ModalPost
                visible={modalVisible}
                onClose={handleModelToggle}
                onSend={handleCommentSend} />
            <FloatButton onPress={handleModelToggle} />
        </SafeAreaView>
    )
}

export default Posts