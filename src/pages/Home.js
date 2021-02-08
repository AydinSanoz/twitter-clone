import React from 'react';
import TweetBox from '../components/TweetBox';
import '../components/Feed.css';

function Home() {
	return (
		<div className="feed">
			<div className="feed-header">
				<h2>Home</h2>
			</div>
			<TweetBox />
		</div>
	);
}

export default Home;
