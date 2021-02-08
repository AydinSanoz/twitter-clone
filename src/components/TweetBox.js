import React,{useState} from 'react';
import Avatar from './Avatar';
import Button from './Button';
import './TweetBox.css';
import db from "../firebase"

function TweetBox() {
	const [tweetMessage, setTweetMessage] = useState('');
	const [tweetImamge, setTweetImage] = useState('');

	const sendTweet = (e) => {
		e.preventDefault();
		console.log('pressed');

		db.collection("posts").add({
			userName: 'James',
			displayName : 'Jordon',
			avatar_img : "null",



		})
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
						placeholder="optional enter image Url"
						type="text"
						value={tweetImamge}
						onChange={(e) => setTweetImage(e.target.value)}
					/>
					<Button className="tweetBox-button" onClick= {sendTweet}>
						Tweet 
					</Button>
				</div>
			</form>
		</div>
	);
}

export default TweetBox;
