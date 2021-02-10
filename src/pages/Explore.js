import React, { useEffect } from 'react';
import Feed from '../components/Feed';
import SearchBox from '../components/SearchBox';
import { data } from '../data/index';
import Post from '../components/Post';
import FeedLayout from '../components/FeedLayout';

function Explore() {
	useEffect(() => {}, []);

	return (
		<FeedLayout >
			<div className="feed-header">
				{/* <h2>Explore</h2> */}
				<SearchBox />
			</div>
			{data.map((tweet) => (
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
		</FeedLayout>
	);
}

export default Explore;
