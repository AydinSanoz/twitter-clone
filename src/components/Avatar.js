import React from 'react';
import './Avatar.css';

function Avatar() {
	return (
		<div className="avatar">
			<img
				className="avatar-img"
				src="https://pbs.twimg.com/profile_images/1180781660247379968/BVoqMOft_400x400.jpg"
				alt="avatar"
				style={{ width: 47, height: 47 }}
			/>
		</div>
	);
}

export default Avatar;
