import React, { useContext } from 'react';
import { FirebaseAuthContext } from '../context/AuthContext';
import ProfileBox from '../components/ProfileBoxComp';
import './Profile.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Feed from '../components/Feed';

function Profile() {
	const { currentUser } = useContext(FirebaseAuthContext);
	const userName = currentUser.email.split('@');

	console.log('current', currentUser);

	return (
		<div className="feed">
			<div className="feed-header">
				<h2>Profile</h2>
			</div>
			<ProfileBox />
			{/* <Router>
				<Switch>
					<Route path="/Profile" component={Error} />
					<Route path="/Profile/Tweets" component={Feed} />
				</Switch>
			</Router> */}
		</div>
	);
}

export default Profile;
