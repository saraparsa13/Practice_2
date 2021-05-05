import React, { useEffect, useState } from 'react'
import { useInfiniteQuery } from 'react-query'
import { FlatList, StyleSheet, ActivityIndicator } from 'react-native'
import HomeHeader from './HomeHeader'
import StoryList from './storyList/index'
import PostItem from './PostItem'
import gate from 'gate'

function HomePage() {
	const [posts, setPosts] = useState([])

	const {
		data,
		fetchNextPage,
		fetchPreviousPage,
		hasNextPage,
		hasPreviousPage,
		isFetchingNextPage,
		isFetchingPreviousPage,
		...result
	} = useInfiniteQuery('posts', ({ pageParam = 1 }) => gate.renderPosts(pageParam, 5), {
		getNextPageParam: (lastPage, allPages) => {
			// console.log(lastPage)
			return lastPage.data.length === 5 ? allPages.length + 1 : false
		}
		// getPreviousPageParam: (firstPage, allPages) => firstPage.prevCursor,
	})


	useEffect(() => {
		if (data?.pageParams.length === 1) {
			setPosts(data?.pages?.[0]?.data)
			// console.log('hi')
		}
		else {
			data?.pages.reduce((pre, next) => {
				setPosts([...posts, ...next?.data])
			})
		}
	}, [data?.pageParams])

	console.log(posts)
	
	return (
		<>
			<HomeHeader />
			<FlatList
				ListHeaderComponent={
					() => <StoryList key='555' />
				}
				data={posts}
				style={styles.sectionFlatList}
				ListFooterComponent={
					<ActivityIndicator size="large" color="#0000ff" />
				}
				// onEndReached={fetchNextPage}
				onEndReached={() => {
					if (isFetchingNextPage) {
						console.log('Loading more...')
					} else if (hasNextPage) {
						fetchNextPage()
					} else {
						console.log('Nothing more to load')
					}
				}}
				onEndReachedThreshold={0.5}
				initialNumToRender={10}
				keyExtractor={(item) => item?.id.toString()}
				renderItem={({ item }) => (
					<PostItem	{...item} />
				)}
			/>
		</>
	)
}

const styles = StyleSheet.create({
	sectionFlatList: {
		height: 550
	}
});

export default HomePage
