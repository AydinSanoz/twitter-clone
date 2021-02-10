import React from 'react';
import './ProfileNanvbar.css';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	useHistory,
} from 'react-router-dom';

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
