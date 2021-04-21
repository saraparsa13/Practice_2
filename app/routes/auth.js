import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import RegisterPage from '../view/pages/home/ResgiterPage'

const Stack = createStackNavigator()

const AuthStack = () => {
  return (
    <Stack.Navigator headerMode='none'>
      <Stack.Screen name='RegisterPage' component={RegisterPage}/>
    </Stack.Navigator>
  )
}

export default AuthStack
