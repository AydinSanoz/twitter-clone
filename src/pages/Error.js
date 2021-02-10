import React from 'react';
import '../components/Feed.css';
import error from '../assets/Under-Construction.png';
import FeedLayout from '../components/FeedLayout';

function Error() {
	return (
		<FeedLayout title = "Sorry Not Ready">
			<div className="img">
				<img
					src={error}
					alt="error"
					width="500px"
					style={{ backgroundColor: 'red', minWidth: '-webkit-fill-available' }}
				/>
			</div>
		</FeedLayout>
	);
}

export default Error;
