import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Feather'

function HomeHeader() {
	return (
		<View style={styles.sectionContainer}>
			<Text style={styles.sectionTitle}>Instagram</Text>
			<View style={styles.sectionIcons}>
				<Ionicons name="plus-square"
					size={23} color="black"
					style={styles.sectionIcon} />
				<Ionicons name="heart"
					size={23} color="black"
					style={styles.sectionIcon} />
				<Ionicons name="message-circle"
					size={23} color="black"
					style={{ margin: 5 }} />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	sectionContainer: {
		width: 'auto',
		backgroundColor: 'white',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		height: 40,
		marginTop: 5
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
