import React from 'react'
import { Button } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';

import HomePage from 'view/pages/home/homePage';
import IgAccount from 'view/pages/home/igAccount';

const Stack = createStackNavigator()
const StackHome = createStackNavigator()
const StackSearch = createStackNavigator()
const BottomTab = createBottomTabNavigator();

function HomeStack() {
  return (
    <StackHome.Navigator headerMode='none'>
      <StackHome.Screen name='HomePage' component={HomePage} />
      <StackHome.Screen name='IGAccount' component={IgAccount} />
    </StackHome.Navigator>
  )
}

function SearchScreen() {
  const navigation = useNavigation();
  return <Button title='press' onPress={() => navigation.navigate('IGAccount')} />
}

function SearchStack() {
  return (
    <StackSearch.Navigator headerMode='none'>
      <StackSearch.Screen name='SearchScreen' component={SearchScreen} />
      <StackSearch.Screen name='IGAccount' component={IgAccount} />
    </StackSearch.Navigator>
  )
}

function ActivityStack() {
  return (
    null
  )
}

function HomeBottomTab() {
  return (
    <BottomTab.Navigator headerMode='none'>
      <BottomTab.Screen name='HomeStack' component={HomeStack} />
      <BottomTab.Screen name='SearchStack' component={SearchStack} />
      <BottomTab.Screen name='ActivityStack' component={ActivityStack} />
      {/* <BottomTab.Screen name='UserProfileStack' component={UserProfileStack} /> */}
    </BottomTab.Navigator>
  )
}

const MainStack = () => {
  return (
    <Stack.Navigator headerMode='none'>
      <Stack.Screen name='HomeBottomTab' component={HomeBottomTab} />
      {/* <MainStack.Screen name='NewPost' component={NewPost}/>
          <MainStack.Screen name='Inbox' component={Inbox}/> */}
    </Stack.Navigator>
  )
}

export default MainStack
