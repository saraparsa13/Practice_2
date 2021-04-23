import React from 'react'
import Ionicons from 'react-native-vector-icons/Feather'
import { Text, View, StyleSheet } from 'react-native'

function HomeHeader() {
	return (
		<View style={styles.sectionContainer}>
			<Text style={styles.sectionTitle}>Instagram</Text>
			<View style={styles.sectionIcons}>
				<Ionicons name="plus-square"
					size={30} color="black"
					style={styles.sectionIcon} />
				<Ionicons name="heart"
					size={30} color="black"
					style={styles.sectionIcon} />
				<Ionicons name="message-circle"
					size={30} color="black"
					style={{ margin: 5 }} />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	sectionContainer: {
		width: 'auto',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		height: 70,
		borderWidth: 0
	},
	sectionIcons: {
		display: 'flex',
		flexDirection: 'row',
	},
	sectionIcon: {
		margin: 5,
		paddingRight: 10
	},
	sectionTitle: {
		fontSize: 35,
		fontWeight: 'bold',
		fontFamily: 'cursive'
	}
});

export default HomeHeader
