import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import PostItem from '../igAccount/PostItem'

const Tab = createMaterialTopTabNavigator();


function PostsScreen() {
  return (
    <>
      <PostItem
        postUrl='https://unsplash.it/100?image=1041'
      />
    </>
  )
}
function IGTVScreen() {
  return (
    <>
      <PostItem
        postUrl='https://unsplash.it/100?image=1043'
      />
    </>
  )
}
function TaggedImagesScreen() {
  return (
    <>
      <PostItem
        postUrl='https://unsplash.it/100?image=1044'
      />
    </>
  )
}

function Archive() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showIcon: true,
        showLabel: false,
        tabStyle: {
          height: 70,
        },
        indicatorStyle: {
          backgroundColor: 'black'
        }
      }}>
      <Tab.Screen
        options={{
          tabBarLabel: 'Posts',
          backgroundColor: 'red',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="grid" color={color} size={27} />
          ),
        }}
        name="Posts"
        component={PostsScreen} />
      <Tab.Screen
        options={{
          tabBarLabel: 'IGTV',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="television-classic" color={color} size={30} />
          ),
        }}
        name="IGTV"
        component={IGTVScreen} />
      <Tab.Screen
        options={{
          tabBarLabel: 'TaggedImages',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="clipboard-account-outline" color={color} size={27} />
          ),
        }}
        name="TaggedImages"
        component={TaggedImagesScreen} />
    </Tab.Navigator>
  )
}

export default Archive
