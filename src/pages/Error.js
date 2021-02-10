import React from 'react';
import TweetBox from '../components/TweetBox';
import '../components/Feed.css';
import error from '../assets/Under-Construction.png';

function Error({ text }) {
	return (
		<div className="feed">
			<div className="feed-header">
				<h2>Sorry Not Ready </h2>
			</div>
			<div className="img">
				<img
					src={error}
					alt="error"
					width="500px"
					style={{ backgroundColor: 'red', minWidth: '-webkit-fill-available' }}
				/>
			</div>
		</div>
	);
}

export default Error;
