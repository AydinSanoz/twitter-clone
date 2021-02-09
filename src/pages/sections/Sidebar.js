import React, { useState } from 'react';
import './Sidebar.css';

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
import { Avatar } from '@material-ui/core';

function Sidebar() {
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
			<div className="dashboard">
				<Avatar className="dashboard-avatar" />
				<div className="dashboard-text">
					<h3 className="dashboard-displayName">carpediem</h3>
					<h4 className="dashboard-userName">@aydin</h4>
				</div>
			</div>
		</div>
	);
}

export default Sidebar;
