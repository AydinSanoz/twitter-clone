import React, { useState } from 'react';
import Avatar from './Avatar';
import Button from './Button';
import './TweetBox.css';
import db from '../firebase/firebase';

function TweetBox() {
	const [tweetMessage, setTweetMessage] = useState('');
	const [tweetImage, setTweetImage] = useState('');

	const sendTweet = (e) => {
		e.preventDefault();

		db.collection('posts').add({
			id: Math.random(),
			name: 'carpediem',
			slug: 'aydinsanoz2',
			avatar_img:
				'https://pbs.twimg.com/profile_images/826041320192012288/dtLfHPMc_400x400.jpg',

			datetime: new Date(),
			text: tweetMessage,
			tweet_img: tweetImage,
			tweetInfo: {
				reply: 12,
				retweet: 120,
				like: 20,
			},
		});
		setTweetMessage('');
		setTweetImage('');
	};

	return (
		<div className="tweetBox">
			<form>
				<div className="tweetBox-input">
					<Avatar />
					<input
						placeholder="What is Happenning"
						type="text"
						value={tweetMessage}
						onChange={(e) => setTweetMessage(e.target.value)}
					/>
				</div>
				<div className="tweetBox-mediaContainer">
					<input
						// placeholder="optional enter image Url"
						type="text"
						value={tweetImage}
						onChange={(e) => setTweetImage(e.target.value)}
					/>
					<Button className="tweetBox-button" onClick={sendTweet}>
						Tweet
					</Button>
				</div>
			</form>
		</div>
	);
}

export default TweetBox;
