import React from 'react'
import { StyleSheet } from 'react-native'
import { Appbar } from 'react-native-paper';

import { POST_TYPES } from './index'

function NavigationBar({ onAllPostsPress, onIgtvPress, onTaggedPostsPress, postType }) {
	return (
		<Appbar.Header style={styles.sectionHeader}>
			<Appbar.Action
				color={POST_TYPES.POST == postType ? 'red' : 'black'}
				onPress={onAllPostsPress} icon="border-all"
				size={35} />
			<Appbar.Action
				color={POST_TYPES.IGTV == postType ? 'red' : 'black'}
				onPress={onIgtvPress} icon="video-vintage"
				size={35} />
			<Appbar.Action
				color={POST_TYPES.TAGG == postType ? 'red' : 'black'}
				onPress={onTaggedPostsPress} icon="account-box-outline"
				size={35} />
		</Appbar.Header>
	)
}

const styles = StyleSheet.create({
	sectionHeader: {
		backgroundColor: '#f5f5f5',
		height: 70,
		display: 'flex',
		justifyContent: 'space-around',
		borderWidth: StyleSheet.hairlineWidth,
		borderColor: 'lightgray'
		// elevation: 0,
		// shadowOpacity: 0,
	},
	sectionHeaderContent: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	}
})

export default NavigationBar
