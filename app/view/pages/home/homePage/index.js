import React from 'react'
import { FlatList, StyleSheet } from 'react-native'

import HomeHeader from './HomeHeader'
import StoryList from './StoryList'
import PostItem from './PostItem'

const data = [ 
	{
		avatar: 'https://unsplash.it/100?image=856',
		postTitle: 'Mr. Folani',
		postImage: 'http://beeimg.com/images/h26180623163.jpg'
	},
	{
		avatar: 'https://unsplash.it/100?image=669',
		postTitle: 'Mrs. Folani',
		postImage: 'https://i.pinimg.com/originals/26/42/26/26422665b452967ebc301deadb2a036d.jpg'
	},
	{
		avatar: 'https://unsplash.it/100?image=1041',
		postTitle: 'Mr. Folani tar',
		postImage: 'https://i1.pickpik.com/photos/397/1022/570/sunflower-blue-sky-field-flower-preview.jpg'
	},
]

function HomePage() {
	return (
		<>
			<HomeHeader />
			<StoryList />
			<FlatList
				data={data}
				style={styles.sectionFlatList}
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

const styles = StyleSheet.create({
	sectionFlatList: {
		height: 600
	}
});

export default HomePage
