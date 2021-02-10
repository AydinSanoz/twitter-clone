import React, { useContext } from 'react';
import { FirebaseAuthContext } from '../context/AuthContext';
import ProfileBox from '../components/ProfileBox';
import './Profile.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Feed from '../components/Feed';
import FeedLayout from '../components/FeedLayout';

function ProfileTweets() {
	const { currentUser } = useContext(FirebaseAuthContext);
	const userName = currentUser.email.split('@');

	console.log('current', currentUser);

	return (
		<FeedLayout title = "Profile">
			<ProfileBox />
			<Feed />
		</FeedLayout>
	);
}

export default ProfileTweets;
