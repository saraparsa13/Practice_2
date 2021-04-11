import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import ConnectUser from './ConnectUser'

import Header from './Header'
import HighlightedStoryItem from './HighlightedStoryItem'
import Info from './Info'

const DATA = [
  {
    id: 1,
    avatar: 'https://i.pinimg.com/236x/71/8e/1a/718e1a08d0f25b26fb040ee3fa3be051.jpg',
    title: 'Start here'
  },
  {
    id: 2,
    avatar: 'https://i.pinimg.com/236x/8d/b2/48/8db24822b3711a637467dfc49392a143.jpg',
    title: 'IG Stories'
  },
  {
    id: 3,
    avatar: 'https://i.pinimg.com/236x/b0/59/b2/b059b2499e1ad59aa0943a176b0536af.jpg',
    title: 'linkin.bio'
  },
  {
    id: 4,
    avatar: 'https://i.pinimg.com/236x/9d/3f/65/9d3f658792ccacc70a6a3b12f8f3bfed.jpg',
    title: 'latest'
  },
  {
    id: 5,
    avatar: 'https://i.pinimg.com/236x/46/60/44/4660440e9361321d40ec9cfc4430bdc2.jpg',
    title: 'Me'
  },
  {
    id: 6,
    avatar: 'https://i.pinimg.com/236x/b2/99/21/b299213a9a060cf1dd3c908e259b32bd.jpg',
    title: 'Travel'
  },
]

function UserDetails() {
  return (
    <>
      <Header />
      <Info />
      <ConnectUser />
      <View style={styles.sectionFlatList}>
        <FlatList
          data={DATA}
          horizontal
          showsHorizontalScrollIndicator={false} 
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <HighlightedStoryItem
              avatar={item.avatar}
              title={item.title}
            />
          )} />
      </View>
    </>
  )
}


const styles = StyleSheet.create({
  sectionFlatList: {
    height: 170,
  }
});

export default UserDetails
