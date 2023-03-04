import { View, Text, SafeAreaView, Alert } from 'react-native'
import React from 'react'
import Button from '../../../components/button'
import Input from '../../../components/input/Input'
import styles from './Login.style'
import { Formik } from 'formik'
import auth from '@react-native-firebase/auth'
import { showMessage } from "react-native-flash-message";
import authErrorMessageParser from '../../../utils/authErrorMessageParser'

const Login = ({ navigation }) => {
    const initialValues = {
        mail: '',
        password: ''
    }
    function handleSignin() {
        navigation.navigate('SigninPage');
    }
    async function handleLogin({ mail, password }) {
        try {
            await auth().signInWithEmailAndPassword(mail, password);
            navigation.navigate('PostPage');
        } catch (error) {
            showMessage({
                message: authErrorMessageParser(error.code),
                type: 'danger'
            })
        }
    }
    return (
        <SafeAreaView>
            <Text style={styles.logo}>All I Care!</Text>
            <Formik initialValues={initialValues} onSubmit={handleLogin}>
                {
                    ({ values, handleChange, handleSubmit }) => (
                        <>
                            <Input placeHolder="E-mail" value={values.mail} onChange={handleChange('mail')} />
                            <Input placeHolder="Password" value={values.password} onChange={handleChange('password')} />
                            <Button title="Login" onPress={handleSubmit} />
                            <Button title="Signin" theme='secondary' onPress={handleSignin} />
                        </>
                    )
                }
            </Formik>
        </SafeAreaView>
    )
}

export default Login