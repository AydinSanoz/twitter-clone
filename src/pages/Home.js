import React from 'react';
import TweetBox from '../components/TweetBox';
import Feed from '../components/Feed';
import FeedLayout from '../Layouts/FeedLayout';

function Home() {
	return (
		<FeedLayout title = "Home">
			<TweetBox />
			<Feed />
		</FeedLayout>
	);
}

export default Home;
