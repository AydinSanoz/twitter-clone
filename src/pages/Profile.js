import React, { useContext } from 'react';
import { FirebaseAuthContext } from '../context/AuthContext';
import ProfileBox from '../components/ProfileBoxComp';
import FeedLayout from '../components/FeedLayout';

function Profile() {
	const { currentUser } = useContext(FirebaseAuthContext);
	const userName = currentUser.email.split('@');

	console.log('current', currentUser);

	return (
		<FeedLayout title={userName[0]}>
			<ProfileBox />
		</FeedLayout>
	);
}

export default Profile;
