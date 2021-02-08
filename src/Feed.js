import React, { useEffect, useState } from 'react';
import Post from './components/Post';
import TweetBox from './components/TweetBox';
import './Feed.css';
import db from './firebase';

function Feed() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		db.collection('posts')
			.orderBy('tweet.datetime', 'asc')
			.onSnapshot((snapshot) =>
				setPosts(snapshot.docs.map((doc) => doc.data()))
			);
	}, []);
	return (
		<div className="feed">
			<div className="feed-header">
				<h2>Home</h2>
			</div>
			<TweetBox />
			{console.log("posts", posts)}
			{posts.map(({tweet}) =>(
				<Post
					avatar = {tweet.avatar_img}
					datetime = {tweet.datetime}
					id={tweet.id}
					name={tweet.name}
					slug={tweet.slug}
					text={tweet.text}
					// like= {tweet.textInfo.like}
					// reply= {tweet.textInfo.reply}
					// retweet= {tweet.textInfo.retweet}
					tweet_img= {tweet.tweet_img}

				/>
			))}
		</div>
	);
}

export default Feed;
