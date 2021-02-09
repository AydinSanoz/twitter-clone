import React, { useState, useContext } from 'react';
import './Sidebar.css';
import firebase from '../../firebase/firebase';
import { FirebaseAuthContext } from '../../context/AuthContext';

import SidebarOption from '../../components/SidebarOption';
import {
	Twitter,
	Home,
	Search,
	Notification,
	Messages,
	Bookmark,
	Lists,
	Profile,
	More,
} from '../../components/icons';
import Button from '../../components/Button';
import Avatar from '../../components/Avatar';
import { useHistory } from 'react-router-dom';

function Sidebar() {
	const history = useHistory();
	const { currentUser } = useContext(FirebaseAuthContext);
	const userName = currentUser.email.split('@');

	function signOut() {
		firebase.signOut();
		history.push('/');
	}
	return (
		<div className="sidebar">
			<div className="sidebar-main">
				<Twitter className="sidebar-twitterIcon" />
				<SidebarOption Icon={Home} text="Home" />
				<SidebarOption Icon={Search} text="Explore" />
				<SidebarOption Icon={Notification} text="Notifications" />
				<SidebarOption Icon={Messages} text="Messages" />
				<SidebarOption Icon={Bookmark} text="Bookmarks" />
				<SidebarOption Icon={Lists} text="Lists" />
				<SidebarOption Icon={Profile} text="Profile" />
				<SidebarOption Icon={More} text="More" />
				<Button className="sidebar-button">Tweet</Button>
			</div>
			<div className="dashboard" onClick={signOut}>
				<Avatar avatar={currentUser.photoURL} />
				<div className="dashboard-text">
					<h3 className="dashboard-displayName">{currentUser.displayName}</h3>
					<h4 className="dashboard-userName">@{userName[0]}</h4>
					<p>Logout</p>
				</div>
			</div>
		</div>
	);
}

export default Sidebar;
