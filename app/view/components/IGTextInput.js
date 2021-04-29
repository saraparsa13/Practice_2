import React from 'react'
import { TextInput, StyleSheet } from 'react-native'

const IGTextInput = (props) => {
  return (
    <TextInput
      name={props.name}
      style={[
          props.style,
          props.errors && props.touched && { borderColor: 'red', borderWidth: 1 }
        ]}
      placeholderTextColor='#a6a6a6'
      onChangeText={props.onChangeText}
      onBlur={props.onBlur}
      value={props.value}
      placeholder={props.placeholder}
      keyboardType={props.keyboardType}
    />
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
})

export default IGTextInput
