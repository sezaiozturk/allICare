import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Login from './src/pages/auth/Login';
import Signin from './src/pages/auth/Signin';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='LoginPage' component={Login} />
      <Stack.Screen name='SigninPage' component={Signin} />
    </Stack.Navigator>
  )
}

export default App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='AuthStack' component={AuthStack} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}