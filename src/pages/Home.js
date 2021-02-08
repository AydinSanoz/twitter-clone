import React from 'react';
import TweetBox from '../components/TweetBox';
import Feed from "../components/Feed"
import '../components/Feed.css';

function Home() {
	return (
		<div className="feed">
			<div className="feed-header">
				<h2>Home</h2>
			</div>
			<TweetBox />
			<Feed />
		</div>
	);
}

export default Home;
