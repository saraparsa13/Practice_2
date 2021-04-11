import React from 'react'
import { StyleSheet } from 'react-native'
import { Appbar } from 'react-native-paper';

function NavigationBar() {
  return (
    <Appbar.Header style={styles.sectionHeader}>
      <Appbar.Action icon="border-all" size={35}/>
      <Appbar.Action icon="video-vintage" size={35}/>
      <Appbar.Action icon="account-box-outline" size={35}/>
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
