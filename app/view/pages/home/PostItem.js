import React from 'react'
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native';


function PostItem({ avatar, postTitle, postImage }) {
	const navigation = useNavigation();
	return (
		<>
			{/* Post Tilte Section */}
			<View style={styles.sectionPostTitle}>
				<TouchableOpacity
					style={styles.sectionTitle}
					onPress={() => navigation.navigate('IGAccount')}>
					<Image
						style={styles.sectionImage}
						source={{ uri: avatar }}
					/>
					<Text style={styles.sectionTitleFont}>{postTitle}</Text>
				</TouchableOpacity>
				<View style={styles.sectionTitleIcon}>
					<Icon name="more-horizontal"
						size={30} color="black"
						style={styles.sectionIcon} />
				</View>
			</View>
			{/* Post Content Section */}
			<View>
				<Image
					style={styles.sectionPostImage}
					source={{ uri: postImage }}
				/>
			</View>
			{/* Post Caption Section */}
			<View style={styles.sectionPostCaption}>
				<View style={styles.sectionCaptionLeft}>
					<Icon
						name="heart"
						size={30}
						color="black"
						style={styles.sectionIcon} />
					<Icon
						name="message-circle"
						size={30} color="black"
						style={styles.sectionIcon} />
					<Icon
						name="send"
						size={30}
						color="black"
						style={styles.sectionIcon} />
				</View>
				<View>
					<Icon
						name="bookmark"
						size={30}
						color="black"
						style={styles.sectionCaptionRight} />
				</View>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	sectionPostTitle: {
		// backgroundColor: 'white',
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		height: 70,
	},
	sectionImage: {
		width: 55,
		height: 55,
		marginHorizontal: 15,
		borderRadius: 30,
		borderWidth: StyleSheet.hairlineWidth,
		borderColor: 'lightgray'
	},
	sectionTitle: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center'
	},
	sectionTitleFont: {
		fontSize: 20
	},
	sectionTitleIcon: {
		marginRight: 15
	},
	sectionPostCaption: {
		height: 70,
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		borderWidth: StyleSheet.hairlineWidth,
		borderColor: 'lightgray'
	},
	sectionCaptionLeft: {
		display: 'flex',
		flexDirection: 'row',
		paddingLeft: 10,
	},
	sectionCaptionRight: {
		margin: 5,
		paddingRight: 10
	},
	sectionIcon: {
		margin: 5,
	},
	sectionPostImage: {
		width: 'auto',
		height: 350,
	}
});

export default PostItem

