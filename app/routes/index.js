import React, { useState } from 'react';
import { Text, View } from 'react-native'
import { useTheme } from 'react-native-paper';
import { DefaultTheme, DarkTheme } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

import AuthStack from './auth'
import MainStack from './main'

const Stack = createStackNavigator()

function SplashScreen() {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{ fontSize: 20, color: 'red' }}>This is Splash Screen</Text>
    </View>
  )
}

const Router = () => {
  const [isAuthorized, setIsAuthorized] = useState(true)
  const [isInitial, setIsInitial] = useState(true)
  const theme = useTheme();
  const navigationTheme = theme.dark ? DarkTheme : DefaultTheme;

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

