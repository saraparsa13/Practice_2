import React from 'react'
import { TextInput, StyleSheet, Text, View } from 'react-native'

const RegisterInput = ({ error, style, ...props }) => {

  return (
    <View style={styles.sectionInput}>
      <TextInput
        {...props}
        style={[
          style,
          error && { borderColor: 'red', borderWidth: 1 }
        ]}
        placeholderTextColor='#a6a6a6'
      />
      {(error) &&
        <Text style={styles.sectionErrorMsg}>{error}</Text>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  sectionInput: {
    display: 'flex', 
    flexDirection: 'column'
  },
  sectionErrorMsg: {
    fontSize: 17,
    color: 'red',
    margin: 5
  },
})

export default RegisterInput
