import React, { useEffect, useState, useContext } from 'react';
import './FeedLayout.css';

function FeedLayout(props) {
	return (
		<div className="feed-layout">
			<div className="feed-layout-header">
				<h2>{props.title}</h2>
			</div>
			{props.children}
		</div>
	);
}

export default FeedLayout;
