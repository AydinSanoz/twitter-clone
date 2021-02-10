import React from 'react';
import './ProfileNanvbarItem.css';
import { useHistory } from 'react-router-dom';

function ProfileBar({ text }) {
	const history = useHistory();

	function onClick() {
		history.push(`/${text}`);
	}

	return (
		<div className="profile-bar" onClick={onClick}>
			<h2>{text}</h2>
		</div>
	);
}

export default ProfileBar;
