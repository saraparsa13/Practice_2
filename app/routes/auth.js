import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import SignUp from '../view/pages/signup/index'
import VerifyCode from '../view/pages/veritification/index'
import Login from '../view/pages/login'

const Stack = createStackNavigator()

const AuthStack = () => {
  return (
    <Stack.Navigator headerMode='none'>
      <Stack.Screen name='SignUp' component={SignUp} />
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='VerifyCode' component={VerifyCode} />
    </Stack.Navigator>
  )
}

export default AuthStack
