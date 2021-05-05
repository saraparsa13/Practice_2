import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native'
import { useTheme } from 'react-native-paper';
import { DefaultTheme, DarkTheme } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import AsyncStorage from '@react-native-community/async-storage';

import tokenHelper from 'helpers/token';
import AuthStack from './auth'
import MainStack from './main'

const Stack = createStackNavigator()

function SplashScreen() {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 20, color: 'red' }}>This is Splash Screen</Text>
    </View>
  )
}

const Router = () => {
  const [isAuthorized, setIsAuthorized] = useState(false)
  const [isInitial, setIsInitial] = useState(false)
  const theme = useTheme();
  const navigationTheme = theme.dark ? DarkTheme : DefaultTheme;

  const init = async () => {
    try {
      const token = await tokenHelper.get()
      setIsAuthorized(token)
    } catch (error) {
      console.log(error)
    } finally {
      setIsInitial(true)
    }
  }

  useEffect(() => {
    init()
  }, []);

  return (
    <NavigationContainer theme={navigationTheme}>
      {!isInitial ? (
        <Stack.Navigator headerMode='none'>
          <Stack.Screen name='SplashScreen' component={SplashScreen} />
        </Stack.Navigator>
      ) : !isAuthorized ? (
        <AuthStack />
      ) : (
        <MainStack />
      )}
    </NavigationContainer>
  );
};

export default Router;

