import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Button from '../../../components/button'
import Input from '../../../components/input/Input'
import styles from './Login.style'
import { Formik } from 'formik'

const Login = ({ navigation }) => {
    const initialValues = {
        mail: '',
        password: ''
    }
    function handleSignin() {
        navigation.navigate('SigninPage');
    }
    function handleLogin(values) {
        console.log(values);
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