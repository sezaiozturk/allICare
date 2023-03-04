import { View, Text, SafeAreaView, Alert } from 'react-native'
import React from 'react'
import Button from '../../../components/button'
import Input from '../../../components/input/Input'
import styles from './Signin.style'
import { Formik } from 'formik'
import auth from '@react-native-firebase/auth'
import { showMessage } from "react-native-flash-message";
import authErrorMessageParser from '../../../utils/authErrorMessageParser'

const Signin = ({ navigation }) => {
    const initialValues = {
        mail: '',
        password: '',
        rePassword: ''
    }
    async function handleSignin({ mail, password, rePassword }) {
        if (password !== rePassword) {
            showMessage({
                message: 'Passwords are different',
                type: 'danger'
            })
            return;
        }
        try {
            await auth().createUserWithEmailAndPassword(mail, password);
        } catch (error) {
            showMessage({
                message: authErrorMessageParser(error.code),
                type: 'danger'
            })
        }
    }
    function handleBack() {
        navigation.goBack();
    }
    return (
        <SafeAreaView>
            <Text style={styles.logo}>All I Care!</Text>
            <Formik initialValues={initialValues} onSubmit={handleSignin}>
                {
                    ({ values, handleChange, handleSubmit }) => (
                        <>
                            <Input placeHolder="E-mail" value={values.mail} onChange={handleChange('mail')} />
                            <Input placeHolder="Password" value={values.password} onChange={handleChange('password')} />
                            <Input placeHolder="Password Again" value={values.rePassword} onChange={handleChange('rePassword')} />
                            <Button title="Signin" onPress={handleSubmit} />
                            <Button title="Back" theme='secondary' onPress={handleBack} />
                        </>
                    )
                }
            </Formik>
        </SafeAreaView>
    )
}

export default Signin