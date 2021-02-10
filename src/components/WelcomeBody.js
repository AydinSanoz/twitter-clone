import React, { useContext } from 'react';

import './WelcomeBody.css';

function WelcomeBody(props) {
	return (
		<div className="welcome-body">
			<div className="twit-logo"></div>
			<div className="welcome">
				<h2>Welcome to Twitter</h2>
                {props.children}
			</div>
		</div>
	);
}

export default WelcomeBody;
