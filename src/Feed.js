import React, { useEffect, useState } from 'react';
import Post from './components/Post';
import TweetBox from './components/TweetBox';
import './Feed.css';
import db from './components/firebase';

function Feed() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		db.collection('posts').onSnapshot((snapshot) =>
			setPosts(snapshot.docs.map((doc) => doc.data()))
		);
	}, []);
	return (
		<div className="feed">
			<div className="feed-header">
				<h2>Home</h2>
			</div>
			<TweetBox />
			{posts.map((post) => (
				<Post
					displayName= {post.displayName}
					userName= {post.userName}
					verified={post.verified}
					text= {post.text}
					image= {post.image}
					avatar= {post.avatar}
				/>
			))}
		</div>
	);
}

export default Feed;
