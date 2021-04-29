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
		flexDirection: 'column',
		alignItems: 'center',
	},
	sectionImage: {
		width: 70,
		height: 70,
		margin: 20,
		marginBottom: 5,
		borderRadius: 40,
		borderWidth: 0
		// borderColor: 'lightgray'
	},
});


export default StoryItem
