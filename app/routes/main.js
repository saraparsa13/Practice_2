import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import HomePage from '../view/pages/home/index'
import IgAccount from '../view/pages/igAccount/index'
import UserProfile from 'view/pages/userProfile/index'
import Archive from 'view/pages/userProfile/Archive'
import Comments from '../view/pages/comments';
import Map from '../view/pages/map';

const Stack = createStackNavigator()
const StackHome = createStackNavigator()
const StackActivity = createStackNavigator()
const BottomTab = createBottomTabNavigator()
const Drawer = createDrawerNavigator();

function HomeStack() {
  return (
    <StackHome.Navigator headerMode='none'>
      <StackHome.Screen name='HomePage' component={HomePage} />
      <StackHome.Screen name='IGAccount' component={IgAccount} />
    </StackHome.Navigator>
  )
}

// function SearchScreen() {
//   const navigation = useNavigation()
//   return <Button title='press' onPress={() => navigation.navigate('IGAccount')} />
// }

function SearchStack() {
  return (
    null
    // <StackSearch.Navigator headerMode='none'>
    //   <StackSearch.Screen name='SearchScreen' component={SearchScreen} />
    //   <StackSearch.Screen name='IGAccount' component={IgAccount} />
    // </StackSearch.Navigator>
  )
}

function ActivityStack() {
  return (
    <StackActivity.Navigator headerMode='none'>
      <StackActivity.Screen name='Map' component={Map}/>
    </StackActivity.Navigator>
  )
}

function DrawerContent() {
  const navigation = useNavigation()
  return (
    <>
      <TouchableOpacity
        style={{ marginVertical: 20, marginHorizontal: 10 }}
        onPress={() => navigation.navigate('Archive')}>
        <Text style={{ fontSize: 22 }}>Archive</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ marginVertical: 20, marginHorizontal: 10 }}
        onPress={() => navigation.navigate('Archive')}>
        <Text style={{ fontSize: 22 }}>Saved</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ marginVertical: 20, marginHorizontal: 10 }}
        onPress={() => navigation.navigate('Archive')}>
        <Text style={{ fontSize: 22 }}>YourActivity</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ marginVertical: 20, marginHorizontal: 10 }}
        onPress={() => navigation.navigate('Archive')}>
        <Text style={{ fontSize: 22 }}>Close Friends</Text>
      </TouchableOpacity>
    </>
  );
}

function UserProfileStack() {
  return (
    <Drawer.Navigator
      headerMode='none'
      drawerPosition='right'
      drawerType='back'
      drawerStyle={{
        width: 280,
      }}
      drawerContent={() => <DrawerContent />}>
      <Drawer.Screen name="Home" component={UserProfile} />
    </Drawer.Navigator>
  );
}

function HomeBottomTab() {
  return (
    <BottomTab.Navigator
      headerMode='none'
      initialRouteName='ActivityStack'
      tabBarOptions={{
        activeTintColor: 'black',
        showIcon: true,
        showLabel: false,
        tabStyle: {
          height: 50,
        },
        indicatorStyle: {
          backgroundColor: 'black'
        }
      }}
      headerMode='none'>
      <BottomTab.Screen
        options={{
          tabBarLabel: 'Home',
          backgroundColor: 'red',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home-outline" color={color} size={35} />
          ),
        }}
        name='HomeStack'
        component={HomeStack} />
      <BottomTab.Screen
        options={{
          tabBarLabel: 'Search',
          backgroundColor: 'red',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="magnify" color={color} size={35} />
          ),
        }}
        name='SearchStack'
        component={SearchStack} />
      <BottomTab.Screen
        options={{
          tabBarLabel: 'Activity',
          backgroundColor: 'red',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="heart-outline" color={color} size={35} />
          ),
        }}
        name='ActivityStack'
        component={ActivityStack} />
      <BottomTab.Screen
        options={{
          tabBarLabel: 'UserProfile',
          backgroundColor: 'red',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={35} />
          ),
        }}
        name='UserProfileStack'
        component={UserProfileStack} />
    </BottomTab.Navigator>
  )
}

const MainStack = () => {
  return (
    <Stack.Navigator headerMode='none'>
      <Stack.Screen name='HomeBottomTab' component={HomeBottomTab} />
      <Stack.Screen name='Archive' component={Archive} />
      <StackHome.Screen name='Comments' component={Comments} />
      {/* <MainStack.Screen name='NewPost' component={NewPost}/>
          <MainStack.Screen name='Inbox' component={Inbox}/> */}
    </Stack.Navigator>
  )
}

export default MainStack
