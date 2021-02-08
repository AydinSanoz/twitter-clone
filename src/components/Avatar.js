import React from 'react';
import './Avatar.css';

function Avatar({avatar}) {
	return (
		<div className="avatar">
			<img
				className="avatar-img"
				src= {avatar}
				// src="https://pbs.twimg.com/profile_images/1180781660247379968/BVoqMOft_400x400.jpg"
				alt="avatar"
				style={{ width: 47, height: 47 }}
			/>
		</div>
	);
}

export default Avatar;
