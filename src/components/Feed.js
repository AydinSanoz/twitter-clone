import React, { useEffect, useState } from 'react';
import Post from './Post';
import './Feed.css';
import db from '../firebase';

function Feed() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		db.collection('posts')
			.orderBy('datetime', 'desc')
			.onSnapshot((snapshot) => {
				console.log('snapshot', snapshot.docs);
				setPosts(snapshot.docs.map((doc) => doc.data()));
			});
	}, []);
	return (
		<div className="feed">
			{console.log('posts', posts)}
			{posts.map((tweet) => (
				<Post
					avatar={tweet.avatar_img}
					datetime={tweet.datetime}
					id={tweet.id}
					name={tweet.name}
					slug={tweet.slug}
					text={tweet.text}
					// like= {tweet.textInfo.like}
					// reply= {tweet.textInfo.reply}
					// retweet= {tweet.textInfo.retweet}
					tweet_img={tweet.tweet_img}
				/>
			))}
		</div>
	);
}

export default Feed;
