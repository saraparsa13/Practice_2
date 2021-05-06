import React, { useEffect, useState } from 'react'
import { useInfiniteQuery } from 'react-query'
import { FlatList, StyleSheet, ActivityIndicator } from 'react-native'

import gate from 'gate'
import HomeHeader from './HomeHeader'
import StoryList from './storyList/index'
import PostItem from './PostItem'

function HomePage() {
	let LIMIT = 5
	const {
		data,
		fetchNextPage,
		hasNextPage,
		isFetchingNextPage,
	} = useInfiniteQuery('posts',
		async ({ pageParam = 1 }) => {
			const res = await gate.renderPosts(pageParam, LIMIT)
			return res.data
		}, {
		getNextPageParam: (lastPage, allPages) => {
			return lastPage?.length === LIMIT ? allPages?.length + 1 : false
		}
	})

	let flatlistData = data?.pages?.flat()

	console.log(flatlistData)

	return (
		<>
			<HomeHeader />
			<FlatList
				ListHeaderComponent={() =>
					<StoryList key='555' />
				}
				data={flatlistData}
				style={styles.sectionFlatList}
				ListFooterComponent={
					<ActivityIndicator size="large" color="#0000ff" />
				}
				onEndReached={() => {
					!isFetchingNextPage && fetchNextPage()
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
		// height: 550
	}
});

export default HomePage
