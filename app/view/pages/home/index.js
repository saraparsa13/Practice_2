import React, { useState } from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native'

import Ionicons from 'react-native-vector-icons/Ionicons'
import { BottomNavigation, Text } from 'react-native-paper'

import HomePage from './homePage/index'
import IgAccount from './igAccount'

const HomeRoute = () => <HomePage />

const SearchRoute = () => <IgAccount />

const AddPostRoute = () => null

const FavoriteRoute = () => null

const ProfileRoute = () => null

const App = () => {
  const [index, setIndex] = useState(0)
  const [routes] = React.useState([
    { key: 'search', icon: 'magnify' },
    { key: 'home', icon: 'home-variant' },
    { key: 'addpost', icon: 'plus-box-outline' },
    { key: 'favorite', icon: 'heart-outline' },
    { key: 'profile', icon: 'account' },
  ])

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    search: SearchRoute,
    addpost: AddPostRoute,
    favorite: FavoriteRoute,
    profile: ProfileRoute,
  })


  return (
    <BottomNavigation
      shifting={false}
      barStyle={{ backgroundColor: '#fff', height: 60 }}
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  )
}

export default App
