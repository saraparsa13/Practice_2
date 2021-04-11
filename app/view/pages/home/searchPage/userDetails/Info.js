import React from 'react'
import { StyleSheet, Image, View, Text, Linking } from 'react-native'
import { Appbar } from 'react-native-paper';

function Info() {
	return (
		<View style={styles.sectionContainer}>
			<Appbar.Header style={styles.sectionHeader}>
				<View style={styles.sectionImageBorder}>
					<Image
						style={styles.sectionImage}
						source={{ uri: 'https://unsplash.it/100?image=1027' }}
					/>
				</View>
				<Appbar.Content style={styles.sectionHeaderContent} title='1417' subtitle='Posts' />
				<Appbar.Content style={styles.sectionHeaderContent} title='236k' subtitle='followers' />
				<Appbar.Content style={styles.sectionHeaderContent} title='1356' subtitle='following' />
			</Appbar.Header>
			<View style={styles.sectionDescription}>
				<Text style={styles.sectionDescriptionTitle}>Later: Social Media Scheduler</Text>
				<Text style={styles.sectionDescriptionType}>App Page</Text>
				<View style={styles.sectionBioTextContainer}>
					<Text style={styles.sectionBioText}>
						Plan, schedule and analyze your social media posts ⚡
						{"\n"}
						Tap into all our free resources 💎
						{"\n"}
						Create a forever free account today 👇🏿
						</Text>
					<Text style={{ color: 'blue' }}
						onPress={() => Linking.openURL('http://google.com')}>
						linkin.bio/latermedia
					</Text>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	sectionContainer: {
		backgroundColor: '#f5f5f5',
	},
	sectionHeader: {
		height: 140,
		elevation: 0,
		shadowOpacity: 0,
		backgroundColor: '#f5f5f5'
	},
	sectionHeaderContent: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	sectionImageBorder: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		width: 120,
		height: 120,
		marginLeft: 10,
		borderRadius: 80,
		borderWidth: StyleSheet.hairlineWidth,
		borderWidth: 3,
		borderTopColor: '#F56040',
		borderLeftColor: '#F77737',
		borderBottomColor: '#FCAF45',
		borderRightColor: '#FCAF45',
	},
	sectionImage: {
		width: 105,
		height: 105,
		borderRadius: 80,
	},
	sectionDescription: {
		alignSelf: 'center',
		width: 500,
		height: 160,
	},
	sectionBioTextContainer: {
		width: 390,
	},
	sectionDescriptionTitle: {
		fontSize: 17,
		lineHeight: 30,
		fontWeight: 'bold'
	},
	sectionDescriptionType: {
		fontSize: 15,
		color: '#bdbdbd',
		marginBottom: 5,
		fontWeight: 'bold'
	},
	sectionBioText: {
		fontSize: 15,
		lineHeight: 23,
		color: '#2f2f2f'
	}
})

export default Info
