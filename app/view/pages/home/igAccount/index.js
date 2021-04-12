import React, { useState } from 'react'
import { ScrollView, FlatList, Text } from 'react-native'

import UserDetails from './userDetails/index'
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

const DATA_TAG = [{
  key: 6,
  postUrl: 'https://unsplash.it/100?image=1041'
}, {
  key: 7,
  postUrl: 'https://unsplash.it/100?image=1027'
}]

const HIGHLIGHTED_STORIES_DATA = [
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

const POST_TYPES = {
  POST: 'POST',
  IGTV: 'IGTV',
  TAGG: 'TAGG',
}


function IgAccount() {
  const [postType, setPostType] = useState(POST_TYPES.POST)

  return (
    <>
      {
        postType == POST_TYPES.POST || postType == POST_TYPES.TAGG ?
          <FlatList
            ListHeaderComponent={
              <>
                <UserDetails highlightedStories={HIGHLIGHTED_STORIES_DATA}/>
                <NavigationBar
                  postType={postType}
                  onAllPostsPress={() => setPostType(POST_TYPES.POST)}
                  onIgtvPress={() => setPostType(POST_TYPES.IGTV)}
                  onTaggedPostsPress={() => setPostType(POST_TYPES.TAGG)} />
              </>
            }
            data={postType == POST_TYPES.POST ? DATA : DATA_TAG}
            keyExtractor={item => item.key}
            numColumns={3}
            renderItem={({ item }) => (
              <PostItem
                postUrl={item.postUrl}
              />
            )}
          /> :
          <Text style={{ fontSize: 20 }}>igtv</Text>
      }
    </>
  )
}

export default IgAccount
export { POST_TYPES }
