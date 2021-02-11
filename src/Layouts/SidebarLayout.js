import React from 'react';
import useWindowSize from '../hooks/useWindowSize';
import "./SidebarLayout.css";

function SidebarLayout(props) {
	const screen = useWindowSize()

	return <div className="sidebar">{props.children}</div>;
}

export default SidebarLayout;
