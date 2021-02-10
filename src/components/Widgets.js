import React from 'react';
import './Widgets.css';
import {
	TwitterTimelineEmbed,
	TwitterShareButton,
	TwitterTweetEmbed,
	TwitterVideoEmbed,
	TwitterMentionButton,
} from 'react-twitter-embed';
import {Analytics, ArrowBottom,BigTweet,Bookmark,SvgChart,Emoji,Explore,Gif,Like,Moments,More,More2,Topics,Tweet, Twitter, Share} from "./icons";
import SearchBox from './SearchBox';

function Widgets() {
	return (
		<div className="widgets">
			<div className="widgets-header">
				<SearchBox />
			</div>
			<div className="widgets-container">
				<h2>What is happening</h2>
				<TwitterTweetEmbed tweetId="933354946111705097" />
				<TwitterTimelineEmbed
					sourceType="profile"
					screenName="saurabhnemade"
					options={{ height: 400 }}
				/>
				<TwitterShareButton
					url={'https://facebook.com/saurabhnemade'}
					options={{ text: '#reactjs is awesome', via: 'saurabhnemade' }}
				/>
			</div>
		</div>
	);
}

export default Widgets;
