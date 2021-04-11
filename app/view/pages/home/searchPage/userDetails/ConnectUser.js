import React from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'

function ConnectUser() {
  return (
    <View style={styles.sectionContainer}>
      <TouchableOpacity
        style={styles.sectionButton}
      >
        <Text style={styles.sectionButtonText}>Following</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.sectionButton}
      >
        <Text style={styles.sectionButtonText}>Message</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.sectionButton}
      >
        <Text style={styles.sectionButtonText}>Email</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  sectionContainer: {
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#f5f5f5',
    justifyContent: 'space-around',
  },
  sectionButton: {
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    borderRadius: 6,
    borderWidth: StyleSheet.hairlineWidth,
		borderColor: 'lightgray'
  },
  sectionButtonText: {
    fontWeight: 'bold',
    fontSize: 16
  }
})

export default ConnectUser
