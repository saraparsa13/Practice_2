import React from 'react';
import { StyleSheet, FlatList } from 'react-native'
import StoryItem from './StoryItem'

const data = [{
	key: 1,
	username: 'jennifer',
	avatarUrl: 'https://unsplash.it/100?image=1027'
}, {
	key: 2,
	username: 'zack',
	avatarUrl: 'https://unsplash.it/100?image=856'
}, {
	key: 3,
	username: 'luke',
	avatarUrl: 'https://unsplash.it/100?image=669'
}, {
	key: 4,
	username: 'ken',
	avatarUrl: 'https://unsplash.it/100?image=550'
}, {
	key: 5,
	username: 'May',
	avatarUrl: 'https://unsplash.it/100?image=503'
}, {
	key: 6,
	username: 'Luck',
	avatarUrl: 'https://unsplash.it/100?image=1041'
}, {
	key: 7,
	username: 'Jack',
	avatarUrl: 'https://unsplash.it/100?image=1005'
}
]

const StoryList = () => {
	return (
		<FlatList
			horizontal
			showsHorizontalScrollIndicator={false}
			style={styles.sectionFlatList}
			data={data}
			keyExtractor={item => item.key}
			renderItem={({ item }) => (
				<StoryItem
					username={item.username}
					avatarUrl={item.avatarUrl}
				/>
			)}
		/>
	)
};

const styles = StyleSheet.create({
	sectionContainer: {
		width: 'auto',
		height: 110,
		// backgroundColor: 'white',
		flexDirection: 'column',
		alignItems: 'center',
	},
	sectionImage: {
		width: 50,
		height: 50,
		margin: 18,
		marginBottom: 5,
		borderRadius: 25,
		borderWidth: StyleSheet.hairlineWidth,
		borderColor: 'lightgray'
	},
	sectionFlatList: {
		flex: 1,
		borderColor: 'white',
		borderWidth: StyleSheet.hairlineWidth,
		borderBottomColor: 'lightgray',
	}
});

export default StoryList;
