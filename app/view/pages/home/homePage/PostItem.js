import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { Appbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather'

function PostItem({ avatar, postTitle, postImage }) {
	return (
		<View>
			<Appbar.Header style={styles.sectionPostTitle}>
				<Image
					style={styles.sectionImage}
					source={{ uri: avatar }}
				/>
				<Appbar.Content title={postTitle} />
				<Appbar.Action icon="dots-horizontal" />
			</Appbar.Header>
			<View>
				<Image
					style={styles.sectionPostImage}
					source={{ uri: postImage }}
				/>
			</View>
			<View style={styles.sectionPostCaption}>
				<View style={styles.sectionCaptionLeft}>
					<Icon
						name="heart"
						size={25}
						color="black"
						style={styles.sectionIcon} />
					<Icon
						name="message-circle"
						size={25} color="black"
						style={styles.sectionIcon} />
					<Icon
						name="send"
						size={25}
						color="black"
						style={styles.sectionIcon} />
				</View>
				<View>
					<Icon
						name="bookmark"
						size={25}
						color="black"
						style={styles.sectionCaptionRight} />
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	sectionPostTitle: {
		backgroundColor: 'white',
		height: 70,
	},
	sectionImage: {
		width: 40,
		height: 40,
		marginLeft: 10,
		borderRadius: 25,
		borderWidth: StyleSheet.hairlineWidth,
		borderColor: 'lightgray'
	},
	sectionPostCaption: {
		height: 60,
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	sectionCaptionLeft: {
		display: 'flex',
		flexDirection: 'row',
		paddingLeft: 10
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

