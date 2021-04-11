import React from 'react'
import { FlatList, View, ScrollView } from 'react-native'

import NavigationBar from './NavigationBar'
import PostItem from './PostItem'

const DATA = [{
  key: 1,
  postUrl: 'https://unsplash.it/100?image=1027'
}, {
  key: 2,
  postUrl: 'https://unsplash.it/100?image=856'
}, {
  key: 3,
  postUrl: 'https://unsplash.it/100?image=669'
}, {
  key: 4,
  postUrl: 'https://unsplash.it/100?image=550'
}, {
  key: 5,
  postUrl: 'https://unsplash.it/100?image=503'
}, {
  key: 6,
  postUrl: 'https://unsplash.it/100?image=1041'
}, {
  key: 7,
  postUrl: 'https://unsplash.it/100?image=1005'
}]

function UserPosts() {
  return (
    <>
      <NavigationBar />
      <ScrollView style={{ width: 550, backgroundColor: 'red', display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
        <FlatList
          style={{back: 'green' , width: 550
        
        }}
          data={DATA}
          renderItem={({ item }) => (
            <View style={{width: 550,display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
              <PostItem postUrl={ item.postUrl } />
            </View>
          )}
        />
      </ScrollView>
    </>
  )
}

export default UserPosts
