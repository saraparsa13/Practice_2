import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Octicons from 'react-native-vector-icons/Octicons'

function locationItem({title, onPressHandler}) {
  return (
    <View style={styles.container} onTouchStart={onPressHandler}>
      <View style={styles.iconContainer}>
        <Octicons
          name="location"
          color='black'
          size={22} />
      </View>
      <View style={styles.title}>
        <Text style={styles.titleFont}>{title}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 71,
  },
  iconContainer: {
    backgroundColor: '#f1f1f1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 35,
    width: 35,
    borderRadius: 25,
    marginRight: 15
  },
  title: {
    height: '100%',
    width: '70%',
    display: 'flex',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'transparent',
    borderBottomColor: 'lightgray',
  },
  titleFont: {
    fontSize: 16
  }
})

export default locationItem
