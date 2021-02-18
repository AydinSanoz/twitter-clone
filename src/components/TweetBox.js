import React, { useState, useContext } from 'react';
import Avatar from './Avatar';
import Button from './Button';
import './TweetBox.css';
import firebase from '../firebase/firebase';
import { FirebaseAuthContext } from '../context/AuthContext';

function TweetBox() {
	const [tweetMessage, setTweetMessage] = useState('');
	const [tweetImage, setTweetImage] = useState('');
	const { currentUser } = useContext(FirebaseAuthContext);

	const userName = currentUser.email.split('@');
	const db = firebase.db;

	const sendTweet = (e) => {
		e.preventDefault();
		db.collection('posts')
			.doc("tweets").collection(`${userName[0]}`)
			.add({
				id: Math.random(),
				uid: currentUser.uid,
				name: currentUser.displayName,
				slug: userName[0],
				avatar_img: currentUser.photoURL,
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
					<Avatar avatar={currentUser.photoURL} />
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
					<Button className="smButton" onClick={sendTweet}>
						Tweet
					</Button>
				</div>
			</form>
		</div>
	);
}

export default TweetBox;
