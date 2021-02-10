import React, { useEffect, useState, useContext } from 'react';
import Post from './Post';
import './Feed.css';
import firebase from '../firebase/firebase';
import { FirebaseAuthContext } from '../context/AuthContext';
import FeedLayout from './FeedLayout';
import FlipMove from 'react-flip-move';

function Feed() {
	const [posts, setPosts] = useState([]);
	const { currentUser } = useContext(FirebaseAuthContext);
	const db = firebase.db;

	useEffect(() => {
		db.collection('posts')
			.where('uid', '==', `${currentUser.uid}`)
			.onSnapshot((snapshot) => {
				console.log('snapshot', snapshot.docs);
				setPosts(snapshot.docs.map((doc) => doc.data()));
			});
	}, [currentUser.uid, db]);
	return (
		<FeedLayout>
			{posts.map((tweet) => (
				<FlipMove>
					<Post
						key = {tweet.uid}
						avatar={tweet.avatar_img}
						datetime={tweet.datetime}
						uid={tweet.uid}
						name={tweet.name}
						slug={tweet.slug}
						text={tweet.text}
						// like= {tweet.textInfo.like}
						// reply= {tweet.textInfo.reply}
						// retweet= {tweet.textInfo.retweet}
						tweet_img={tweet.tweet_img}
					/>
				</FlipMove>
			))}
		</FeedLayout>
	);
}

export default Feed;
