import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Button from '../../../components/button'
import Input from '../../../components/input/Input'

const Login = () => {
    return (
        <SafeAreaView>
            <Input placeHolder="E-posta" />
            <Input placeHolder="Şifre" />
            <Button title="Login" />
            <Button title="Signin" theme='secondary' />
        </SafeAreaView>
    )
}

export default Login