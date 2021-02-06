import React from 'react';
import Avatar from './Avatar';
import Button from './Button';
import './TweetBox.css';

function TweetBox() {
	return (
		<div className="tweetBox">
			<form>
				<div className="tweetBox-input">
					<Avatar />
					<input placeholder="What is Happenning" type="text" />
				</div>
				<div className = "tweetBox-mediaContainer">
					<input
						className="tweetBox-media"
						placeholder="optional enter image Url"
					/>
					<Button className="tweetBox-button">Tweet</Button>
				</div>
			</form>
		</div>
	);
}

export default TweetBox;
