import React, { useContext } from 'react';
import { FirebaseAuthContext } from '../context/AuthContext';
import './ProfileBox.css';
import Avatar from './Avatar';
import { SvgChart } from './icons';
import ProfileNavbar from './ProfileNavbar';


function Profile() {
	const { currentUser } = useContext(FirebaseAuthContext);
	const userName = currentUser.email.split('@');

	console.log('current', currentUser);

	return (
		<div className="profile-box">
			<div className="profile-img-box">
				<div className="profile-img">
					<img src="#" alt="" />
					<div className="avatar">
						<Avatar avatar={currentUser.photoURL} cn="avatar-img-large" />
					</div>
				</div>
			</div>
			<div className="profile-data">
				<h3 className="profile-name">
					{userName[0].charAt(0).toUpperCase() +
						userName[0].slice(1).toLowerCase()}
				</h3>
				<p className="profile-displayName">{currentUser.displayName}</p>
				<div className="profile-calender">
					<SvgChart />
					<p>Last Signed : {currentUser.metadata.lastSignInTime}</p>
				</div>
				<p className="profile-follewers">
					<b>0</b>Following <b>5</b> Following{' '}
				</p>
			</div>
				<div className="profile-navbar-container">
					<ProfileNavbar text="Tweets" />
					<ProfileNavbar text="Tweets & Replies" />
					<ProfileNavbar text="Media" />
					<ProfileNavbar text="Likes" />
				</div>
		</div>
	);
}

export default Profile;
