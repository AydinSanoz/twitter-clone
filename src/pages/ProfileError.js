import React from 'react';
import ProfileBox from '../components/ProfileBox';
import Error from './Error';
import FeedLayout from '../Layouts/FeedLayout';

function Profile() {
	return (
		<FeedLayout title="Profile">
			<ProfileBox />
			<Error />
		</FeedLayout>
	);
}

export default Profile;
