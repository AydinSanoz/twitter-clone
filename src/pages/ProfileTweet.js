import React from 'react';
import ProfileBox from '../components/ProfileBox';
import Feed from '../components/Feed';
import FeedLayout from '../Layouts/FeedLayout';

function ProfileTweets() {
	return (
		<FeedLayout title="Profile">
			<ProfileBox />
			<Feed />
		</FeedLayout>
	);
}

export default ProfileTweets;
