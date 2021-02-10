import React from 'react';
import TweetBox from '../components/TweetBox';
import Feed from '../components/Feed';
import '../components/Feed.css';
import FeedLayout from '../components/FeedLayout';

function Home() {
	return (
		<FeedLayout title = "Home">
			<TweetBox />
			<Feed />
		</FeedLayout>
	);
}

export default Home;
