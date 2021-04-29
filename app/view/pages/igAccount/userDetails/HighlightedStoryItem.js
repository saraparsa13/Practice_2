import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'

function HighlightedStoryItem({ avatar, title }) {
	return (
		<View style={styles.sectionContainer}>
			<View style={styles.sectionImageBorder}>
				<Image
					style={styles.sectionImage}
					source={{ uri: avatar }}
				/>
			</View>
			<Text style={styles.sectionTitle}>{title}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	sectionContainer: {
		width: 'auto',
		height: 170,
		backgroundColor: '#f5f5f5',
		flexDirection: 'column',
		alignItems: 'center',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
	sectionImage: {
		width: 80,
		height: 80,
		borderRadius: 80,
	},
	sectionImageBorder: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		width: 95,
		height: 95,
		margin: 10,
		marginTop: 0,
		borderRadius: 80,
		borderWidth: StyleSheet.hairlineWidth,
		borderWidth: 3,
		borderColor: '#bdbdbd',
	},
	sectionTitle: {
		fontSize: 17,
		color: '#2f2f2f'
	}
});


export default HighlightedStoryItem
