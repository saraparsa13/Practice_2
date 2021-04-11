import React from 'react'
import { Image, StyleSheet } from 'react-native'


function PostItem({ postUrl }) {
  return (
    <Image
      style={styles.sectionImage}
      source={{ uri: postUrl }} />
  )
}

const styles = StyleSheet.create({
  sectionImage: {
    width: 180,
    height: 180
  }
})

export default PostItem
