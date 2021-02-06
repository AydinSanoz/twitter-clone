import React from 'react';
import './Sidebar.css';

import SidebarOption from './components/SidebarOption';
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
} from './components/icons';
import Button from './components/Button';

function Sidebar() {
	return (
		<div className="sidebar">
			<Twitter className="sidebar-twitterIcon" />
			<SidebarOption Icon={Home} text="Home" />
			<SidebarOption Icon={Search} text="Explore" />
			<SidebarOption Icon={Notification} text="Notifications" />
			<SidebarOption Icon={Messages} text="Messages" />
			<SidebarOption Icon={Bookmark} text="Bookmarks" />
			<SidebarOption Icon={Lists} text="Lists" />
			<SidebarOption Icon={Profile} text="Profile" />
			<SidebarOption Icon={More} text="More" />
			<Button />
		</div>
	);
}

export default Sidebar;
