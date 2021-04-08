import React, { useState } from 'react'
import { BottomNavigation } from 'react-native-paper'

import HomePage from './homePage/index'

const HomeRoute = () => <HomePage />

const SearchRoute = () => null

const AddPostRoute = () => null

const FavoriteRoute = () => null

const ProfileRoute = () => null

const App = () => {
  const [index, setIndex] = useState(0)
  const [routes] = React.useState([
    { key: 'home', icon: 'home-variant' },
    { key: 'search', icon: 'magnify' },
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
