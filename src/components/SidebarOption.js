import React, { useState } from 'react';
import './SidebarOption.css';
import { useHistory, useParams } from 'react-router-dom';

function SidebarOption({ text, Icon }) {
	const history = useHistory();

	function onClick() {
		history.push(`/${text}`);
	}

	return (
		<div className="sidebarOption" onClick={onClick}>
			<Icon />
			<h2>{text}</h2>
		</div>
	);
}

export default SidebarOption;
