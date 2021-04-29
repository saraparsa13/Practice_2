import React, {useEffect, useState} from 'react'
import { FlatList, StyleSheet } from 'react-native'
import HomeHeader from './HomeHeader'
import StoryList from './storyList/index'
import PostItem from './PostItem'
import gate from 'gate'
import tokenHelper from 'helpers/token';

const data = [
	{
		key: 1,
		avatar: 'https://unsplash.it/100?image=856',
		postTitle: 'Mr. Folani',
		postImage: 'http://beeimg.com/images/h26180623163.jpg'
	},
	{
		key: 2,
		avatar: 'https://unsplash.it/100?image=669',
		postTitle: 'Mrs. Folani',
		postImage: 'https://i.pinimg.com/originals/26/42/26/26422665b452967ebc301deadb2a036d.jpg'
	},
	{
		key: 3,
		avatar: 'https://unsplash.it/100?image=1041',
		postTitle: 'Mr. Folani tar',
		postImage: 'https://i1.pickpik.com/photos/397/1022/570/sunflower-blue-sky-field-flower-preview.jpg'
	},
]

const renderPosts = async () => {
	try {
		const res = await gate.renderPosts()
		console.log(res)
	} catch (error) {
		console.log(error)
	}
}

function HomePage() {
	// const [posts, setPosts] = useState(initialState)
	useEffect(() => {
		renderPosts()
	}, [])

	return (
		<>
			<HomeHeader />
			<FlatList
				ListHeaderComponent={
					<StoryList />
				}
				data={data}
				// style={styles.sectionFlatList}
				keyExtractor={(item, index) => String(index)}
				renderItem={({ item }) => (
					<PostItem
						avatar={item.avatar}
						postTitle={item.postTitle}
						postImage={item.postImage}
					/>
				)}
			/>
		</>
	)
}

// const styles = StyleSheet.create({
// 	sectionFlatList: {
// 		height: 550
// 	}
// });

export default HomePage
