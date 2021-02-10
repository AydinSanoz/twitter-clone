import React from 'react';
import "./SidebarLayout.css";

function SidebarLayout(props) {
	return <div className="sidebar">{props.children}</div>;
}

export default SidebarLayout;
