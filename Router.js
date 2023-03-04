import { Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Login from './src/pages/auth/Login';
import Signin from './src/pages/auth/Signin';
import Post from './src/pages/posts/Posts'
import FlashMessage, { showMessage } from "react-native-flash-message";
import auth from '@react-native-firebase/auth'

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
  const [userSession, setUserSession] = useState(false);
  useEffect(() => {
    auth().onAuthStateChanged((user) => {
      setUserSession(!!user);
    })
  }, [])
  return (
    <NavigationContainer>
      {!userSession ? (
        <AuthStack />
      ) : (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name='PostPage'
            component={Post}
            options={{
              headerShown: true,
              headerLeft: null,
              title: 'ALL I CARE',
              headerTintColor: 'purple',
              headerRight: () => (
                <Button title="exit" onPress={() => auth().signOut()} />
              )
            }} />
        </Stack.Navigator>
      )
      }
      <FlashMessage position="top" />
    </NavigationContainer>
  )
}