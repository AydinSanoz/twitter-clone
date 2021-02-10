import React, { useContext } from 'react';
import { FirebaseAuthContext } from '../context/AuthContext';
import ProfileBox from '../components/ProfileBox';
import FeedLayout from '../Layouts/FeedLayout';

function Profile() {
	const { currentUser } = useContext(FirebaseAuthContext);
	const userName = currentUser.email.split('@');

	return (
		<FeedLayout title={userName[0]}>
			<ProfileBox />
		</FeedLayout>
	);
}

export default Profile;
