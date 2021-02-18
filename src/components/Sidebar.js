import React, { useState, useContext } from 'react';
import './Sidebar.css';
import firebase from '../firebase/firebase';
import { FirebaseAuthContext } from '../context/AuthContext';

import SidebarOption from './SidebarOption';
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
	Tweet,
} from './icons';
import Button from './Button';
import Avatar from './Avatar';
import { useHistory } from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import SidebarLayout from '../Layouts/SidebarLayout';

function Sidebar() {
	const history = useHistory();
	const { currentUser } = useContext(FirebaseAuthContext);
	const userName = currentUser.email.split('@');

	function signOut() {
		firebase.signOut();
		history.push('/');
	}
	return (
		<SidebarLayout>
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
				<Button className="fullButton" >
					{/* <Tweet /> */}
					<h4>Tweet</h4>
				</Button>
			</div>
			<Dashboard />
		</SidebarLayout>
	);
}

export default Sidebar;
