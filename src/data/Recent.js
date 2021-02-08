import React,{useState} from 'react';
import Button from '../components/Button';
import { data } from './index';
import db from '../firebase';

const RecentTweets = (props) => {
	const feedRecentTweets = (e) => {
		e.preventDefault();
		data.map((tweet) => db.collection('posts').add(tweet));
		;
	};
	return (
		<div>
			<h3>Recent Tweets</h3>
			<Button onClick={feedRecentTweets}>Recent Tweets</Button>
		</div>
	);
};

export default RecentTweets;
