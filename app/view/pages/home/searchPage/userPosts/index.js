import React, { useState } from 'react'
import { FlatList, View, ScrollView, Text } from 'react-native'

import NavigationBar from './NavigationBar'
import PostItem from './PostItem'

const DATA = [{
  key: 1,
  postUrl: 'https://www.howitworksdaily.com/wp-content/uploads/2010/10/sunset-288531_1280-200x200.jpg'
}, {
  key: 2,
  postUrl: 'https://www.w3schools.com/css/ocean.jpg'
}, {
  key: 3,
  postUrl: 'https://www.goldencarers.com/uploads/20191017-flowerday3.jpg'
}, {
  key: 4,
  postUrl: 'https://arlindnushi.com/codecanyon/imagetools/example_img/flower.jpg'
}, {
  key: 5,
  postUrl: 'https://unsplash.it/100?image=503'
}, {
  key: 6,
  postUrl: 'https://unsplash.it/100?image=1041'
}, {
  key: 7,
  postUrl: 'https://unsplash.it/100?image=1027'
}]

function UserPosts() {
  const [postState, setPostState] = useState({
    allPosts: true,
    igtv: false,
    taggedPosts: false
  })

  const handleAllPostsPress = () => {
    postState.allPosts ?
      setPostState({ ...postState, allPosts: true }) :
      setPostState({ ...postState, allPosts: true, igtv: false, taggedPosts: false })
  }

  const handleIgtvPress = () => {
    postState.igtv ?
      setPostState({ ...postState, igtv: true }) :
      setPostState({ ...postState, allPosts: false, igtv: true, taggedPosts: false })
  }

  const handleTaggedPosts = () => {
    postState.taggedPosts ?
      setPostState({ ...postState, taggedPosts: true }) :
      setPostState({ ...postState, allPosts: false, igtv: false, taggedPosts: true })
  }

  return (
    <>
      <NavigationBar
        onAllPostsPress={handleAllPostsPress}
        onIgtvPress={handleIgtvPress}
        onTaggedPosts={handleTaggedPosts} />
      {
        postState.allPosts ?
          <FlatList
            data={DATA}
            keyExtractor={item => item.key}
            numColumns={3}
            renderItem={({ item }) => (
              <PostItem
                postUrl={item.postUrl}
              />
            )}
          /> :
          postState.igtv ?
            <Text style={{ fontSize: 20 }}>igtv</Text> :
            <Text style={{ fontSize: 20 }}>tagged post</Text>
      }

    </>
  )
}

export default UserPosts
