import React from 'react'
import { TextInput, StyleSheet, Text, View } from 'react-native'

const textInput = ({ error,style, name, ...props }) => {

  return (
    <View style={{ display: 'flex', flexDirection: 'column' }}>
      <TextInput
        {...props}
        name={name}
        style={[
          style,
          error && { borderColor: 'red', borderWidth: 1 }
        ]}
        placeholderTextColor='#a6a6a6'
        // onChangeText={onChangeText}
        // onBlur={onBlur}
        // value={value}
        // placeholder={placeholder}
        // keyboardType={keyboardType}
      />
      {(error) &&
        <Text style={styles.sectionErrorMsg}>{error}</Text>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  sectionEmailInput: {
    width: 440,
    height: 60,
    padding: 18,
    borderWidth: 1,
    backgroundColor: '#363636',
    borderRadius: 5,
    fontSize: 20,
    color: 'white'
  },
  sectionErrorMsg: {
    fontSize: 17,
    color: 'red',
    margin: 5
  },
})

export default textInput
