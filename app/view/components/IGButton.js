import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

function IGButton({ isValid, values, onPress }) {
  return (
    <TouchableOpacity
      disabled={!isValid || values === ''}
      onPress={onPress}
      style={!isValid ? styles.disableButton : styles.enableButton}>
      <Text style={styles.sectionButtonTxt}>Next</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  disableButton: {
    width: 440,
    height: 60,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: '#012e4d',
    marginTop: 10,
  },
  enableButton: {
    width: 440,
    height: 60,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: '#0195f7',
    marginTop: 10,
  },
  sectionButtonTxt: {
    color: 'white',
    fontSize: 20
  },
})

export default IGButton
