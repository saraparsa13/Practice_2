import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'

import Header from './Header'
import HighlightedStoryItem from './HighlightedStoryItem'
import Info from './Info'

function UserDetails({ highlightedStories }) {
  console.log(highlightedStories)
  return (
    <>
      <Header />
      <Info />
      <View style={styles.sectionFlatList}>
        <FlatList
          data={highlightedStories}
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
