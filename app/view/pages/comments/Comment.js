import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import Ionicons from 'react-native-vector-icons/Feather'

function Comment(props) {
  const { content, user_ref_id } = props
  return (
    <View style={styles.commentContainer}>
      <Image
        style={styles.sectionImage}
        source={{ uri: 'https://picsum.photos/id/1005/200/300' }}
      />
      <View style={{ width: '72%' }}>
        <Text style={styles.usernameStyle}>user_{user_ref_id}{' '}
          <Text style={styles.contentStyle}>{content}</Text>
        </Text>
        <View style={{ display: 'flex', flexDirection: 'row', width: '42%', justifyContent: 'space-between', paddingTop: 5 }}>
          <Text style={{ fontSize: 16, color: 'gray' }}>3h</Text>
          <Text style={{ fontSize: 16, color: 'gray' }}>1 like</Text>
          <Text style={{ fontSize: 16, color: 'gray' }}>reply</Text>
        </View>
      </View>
      <Ionicons
        name="heart"
        size={16} color="gray"
        style={styles.sectionIcon} />
    </View>
  )
}

const styles = StyleSheet.create({
  sectionImage: {
    width: 70,
    height: 70,
    marginHorizontal: 15,
    borderRadius: 45,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'lightgray'
  },
  commentContainer: {
    display: 'flex',
    paddingVertical: 18,
    flexDirection: 'row',
    // backgroundColor: 'red'
  },
  usernameStyle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  contentStyle: {
    fontWeight: 'normal'
  },
  sectionIcon: {
    alignSelf: 'center'
  },
})

export default Comment
