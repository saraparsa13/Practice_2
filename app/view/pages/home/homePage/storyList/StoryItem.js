import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'

function StoryItem({ avatarUrl, username }) {
  return (
    <View style={styles.sectionContainer}>
      <Image
        style={styles.sectionImage}
        source={{ uri: avatarUrl }}
      />
      <Text>{username}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
	sectionContainer: {
		width: 'auto',
		height: 100,
		backgroundColor: 'white',
		flexDirection: 'column',
		alignItems: 'center',
	},
	sectionImage: {
		width: 50,
		height: 50,
		margin: 18,
		marginBottom: 5,
		borderRadius: 25,
		borderWidth: StyleSheet.hairlineWidth,
		borderColor: 'lightgray'
	},
});


export default StoryItem
