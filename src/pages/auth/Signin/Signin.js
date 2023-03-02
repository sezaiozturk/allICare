import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Button from '../../../components/button'
import Input from '../../../components/input/Input'
import styles from './Signin.style'
import { Formik } from 'formik'

const Signin = ({ navigation }) => {
    const initialValues = {
        mail: '',
        password: '',
        rePassword: ''
    }
    function handleSignin(values) {
        console.log(values)

    }
    function handleBack(values) {
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