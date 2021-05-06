import React, { useEffect, useState } from 'react'
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TextInput,
  Image,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native'
import { useMutation, useInfiniteQuery, useQueryClient } from 'react-query'
import Ionicons from 'react-native-vector-icons/Feather'
import { useNavigation, useRoute } from '@react-navigation/native';

import gate from '../../../gate'
import Comment from './Comment';

function Comments() {
  let LIMIT = 20
  const [comments, setComments] = useState([])
  const [text, onChangeText] = React.useState('')
  const navigation = useNavigation()
  const route = useRoute()
  const QueryClient = useQueryClient()

  const { mutate } = useMutation(gate.addComment, {
    onSuccess: (data) => {
      setComments([data?.data])
    }
  })
  console.log(comments)

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery(['comments', route.params.id],
    async ({ pageParam = 1 }) => {
      const res = await gate.renderComments(route.params.id, pageParam)
      return res.data
    },
    {
      getNextPageParam: (lastPage, allPages) => {
        return lastPage?.length === LIMIT ? allPages.length + 1 : false
      }
    })

  let flatlistData = []
  comments ? flatlistData = data?.pages?.flat() : [...comments, ...data?.pages?.flat()]

  const onRefresh = () => {
    QueryClient.invalidateQueries(['comments', route.params.id])
  }

  // console.log('data =>>', data)

  return (
    <>
      <View style={styles.header}>
        <View style={styles.leftSection}>
          <Ionicons
            onPress={() => navigation.goBack()}
            name="arrow-left"
            size={30}
            color="black"
            style={styles.sectionIcon} />
          <Text style={styles.sectionTitle}>Comments</Text>
        </View>
        <View style={styles.rightSection}>
          <Ionicons
            name="send"
            size={30}
            color="black"
            style={styles.sectionIcon} />
        </View>
      </View>
      <FlatList
        ListHeaderComponent={
          <View style={styles.descContainer}>
            <Image
              style={styles.sectionImage}
              source={{ uri: 'https://picsum.photos/id/1080/200/300' }}
            />
            <View style={styles.descText}>
              <Text style={styles.descInnerText}>{route.params.username}{' '}
                <Text style={{ fontWeight: 'normal' }}>{route.params.desc}</Text>
              </Text>
            </View>
          </View>
        }
        ListFooterComponent={() => {
          if (hasNextPage) {
            return <ActivityIndicator size="large" color="#0000ff" />
          } else {
            return null
          }
        }}
        data={flatlistData}
        onEndReached={() => {
          !isFetchingNextPage && fetchNextPage()
        }}
        onEndReachedThreshold={0.5}
        onRefresh={onRefresh}
        refreshing={false}
        keyExtractor={(item) => item._id.toString()}
        renderItem={({ item }) => (
          <Comment {...item} />
        )}
      />
      <View style={styles.inputContainer}>
        <Image
          style={styles.sectionImage}
          source={{ uri: 'https://picsum.photos/id/1080/200/300' }}
        />
        <TextInput
          placeholder='Add a comment...'
          placeholderTextColor='gray'
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
        <TouchableOpacity
          onPress={() => {
            mutate({ "post_id": route.params.id, "content": text }),
              onChangeText('')
          }}>
          <Text style={styles.postButton}>Post</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  header: {
    width: 'auto',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 70,
    borderWidth: 0
  },
  leftSection: {
    display: 'flex',
    flexDirection: 'row',
    width: '86%',
    margin: 10
  },
  rightSection: {
    display: 'flex',
    flexDirection: 'row',
  },
  sectionIcon: {
    margin: 5,
    paddingRight: 10
  },
  sectionTitle: {
    fontSize: 26,
    marginLeft: 25,
    fontWeight: 'bold',
  },
  inputContainer: {
    height: 70,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderTopColor: 'lightgray',
    borderWidth: 1,
    borderColor: 'transparent',
  },
  input: {
    fontSize: 20,
    height: 50,
    width: '72%',
    color: 'black'
  },
  sectionImage: {
    width: 60,
    height: 60,
    marginHorizontal: 15,
    borderRadius: 45,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'lightgray'
  },
  postButton: {
    fontSize: 20,
    color: '#0195f7',
    textAlign: 'center'
  },
  descContainer: {
    display: 'flex',
    paddingVertical: 18,
    flexDirection: 'row',
    // backgroundColor: 'red',
    height: 120,
    borderBottomColor: 'lightgray',
    borderWidth: 1,
    borderColor: 'transparent'
  },
  flatlistFooter: {
    display: 'flex',
    alignSelf: 'center',
    borderRadius: 75,
    fontWeight: '100'
  },
  descText: {
    width: '70%'
  },
  descInnerText: {
    fontSize: 17,
    fontWeight: 'bold'
  }
});

export default Comments
//   if (hasNextPage) {
//     return <Ionicons
//       name="plus-circle"
//       size={70} color="lightgray"
//       onPress={() => setPage(page + 1)}
//       style={styles.flatlistFooter} />
//   } else {
//     return null
//   }
// }