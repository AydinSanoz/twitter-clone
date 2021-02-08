import React from 'react';
import Feed from '../components/Feed';
import TweetBox from '../components/TweetBox';

function Explore() {
	return (
		<div className="feed">
			<div className="feed-header">
				<h2>Explore</h2>
			</div>
			<TweetBox />
			<Feed />
		</div>
	);
}

export default Explore;
