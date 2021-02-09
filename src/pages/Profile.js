import React, { useContext } from 'react';
import { FirebaseAuthContext } from '../context/AuthContext';
import Feed from '../components/Feed';
import './Profile.css';
import Avatar from '../components/Avatar';

function Profile() {
	const { currentUser } = useContext(FirebaseAuthContext);
	const userName = currentUser.email.split('@');

	console.log('current', currentUser.photoURL);


	return (
		<div className="feed">
			<div className="feed-header">
				<h2>Profile</h2>
			</div>
			<div className="profile-box">
				<div className="profile-img-box">
					<div className="profile-img">
						<img src="#" alt="" />
						<div className="avatar">
							<Avatar
								avatar={currentUser.photoURL}
								cn="avatar-img-large"
							/>
						</div>
					</div>
				</div>
				<div className="profile-data">
					<h2 className="profile-name">
						{userName[0].charAt(0).toUpperCase() +
							userName[0].slice(1).toLowerCase()}
					</h2>
					<p className="profile-displayName">{currentUser.displayName}</p>
				</div>
				<div className="profile-tweets">{/* <Feed /> */}</div>
			</div>
		</div>
	);
}

export default Profile;
