import React from 'react';
import './Widgets.css';
import {
	TwitterTimelineEmbed,
	TwitterShareButton,
	TwitterTweetEmbed,
	TwitterVideoEmbed,
	TwitterMentionButton,
} from 'react-twitter-embed';
import SearchBox from '../../components/SearchBox';

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
				<TwitterVideoEmbed id={'560070183650213889'} />
				<TwitterMentionButton screenName={'saurabhnemade'} />
			</div>
		</div>
	);
}

export default Widgets;
