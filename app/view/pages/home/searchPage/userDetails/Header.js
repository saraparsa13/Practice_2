import React from 'react'
import { StyleSheet } from 'react-native'
import { Appbar } from 'react-native-paper';

function Header() {
	return (
		<Appbar.Header style={styles.sectionHeader}>
			<Appbar.Action icon="arrow-left" />
			<Appbar.Content style={styles.sectionHeaderContent} title='latermedia' />
			<Appbar.Action icon="dots-horizontal" />
		</Appbar.Header>
	)
}

const styles = StyleSheet.create({
	sectionHeader: {
		backgroundColor: '#f5f5f5',
		height: 70,
		elevation: 0,
		shadowOpacity: 0,
	},
	sectionHeaderContent: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	}
})

export default Header
