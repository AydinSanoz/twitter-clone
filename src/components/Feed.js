import React, { useEffect, useState, useContext } from 'react';
import Post from './Post';
import firebase from '../firebase/firebase';
import { FirebaseAuthContext } from '../context/AuthContext';
import FeedLayout from '../Layouts/FeedLayout';
import FlipMove from 'react-flip-move';

function Feed() {
	const [posts, setPosts] = useState([]);
	const { currentUser } = useContext(FirebaseAuthContext);
	const userName = currentUser.email.split("@")
	const db = firebase.db;
	const refDoc = db.collection('posts').doc("tweets").collection(`${userName[0]}`)
	console.log("refDoc", refDoc)


	useEffect(() => {
		refDoc.orderBy("datetime", "desc")
			.onSnapshot((snapshot) => {
				setPosts(snapshot.docs.map((doc) => doc.data()));
			});
	}, []);
	return (
		<FeedLayout>
			<FlipMove>
				{posts.map((tweet) => (
					<Post
						key={tweet.id}
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
				))}
			</FlipMove>
		</FeedLayout>
	);
}

export default Feed;
