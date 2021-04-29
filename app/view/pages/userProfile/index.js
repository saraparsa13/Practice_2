import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { Appbar } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

function UserProfile() {
  const navigation = useNavigation()
  return (
    <>
      <Appbar.Header style={styles.sectionHeader}>
        <Appbar.Action icon="menu" onPress={() => navigation.openDrawer()} />
      </Appbar.Header>
      <Text style={{fontSize: 20, padding: 30}}>
        this is user profile screen
      </Text>
    </>
  )
}

const styles = StyleSheet.create({
  sectionHeader: {
    display: 'flex',
    justifyContent: 'flex-end',
    backgroundColor: '#f5f5f5',
    height: 70,
    elevation: 0,
    shadowOpacity: 0,
    borderColor: 'lightgray',
    borderWidth: 2
  },
})

export default UserProfile
